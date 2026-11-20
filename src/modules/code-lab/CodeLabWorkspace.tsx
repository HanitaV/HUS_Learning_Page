import { useEffect, useMemo, useRef, useState } from 'react';
import type { SubjectToolProps } from '../../contracts/subject-module';
import type {
  CodeDifficulty,
  CodeExecutionResult,
  CodeLanguage,
  CodeProblem,
  JudgeSummary,
  TestCaseVerdict,
} from '../../domain/code-lab';
import { codeProblems } from '../../content/code-lab/problems';
import {
  extractJavaMainClassName,
  judgeTestCase,
  summarizeJudge,
} from '../../core/code-lab/judge';
import { createPyodideRunner } from '../../infrastructure/runtimes/pyodide-runtime';
import { createCheerpJRunner } from '../../infrastructure/runtimes/cheerpj-runtime';
import type { RuntimeStage, WasmCodeRunner } from '../../infrastructure/runtimes/types';
import Markdown from '../../components/learning/Markdown';
import { Badge, type BadgeTone } from '../../components/ui/Badge';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  PlayIcon,
  RotateCcwIcon,
} from '../../components/ui/Icons';
import { CodeEditor } from './CodeEditor';

const DRAFT_STORAGE_PREFIX = 'hus-code-lab:draft:v1:';
const SOLVED_STORAGE_KEY = 'hus-code-lab:solved:v1';

const DIFFICULTY_META: Record<CodeDifficulty, { readonly label: string; readonly tone: BadgeTone }> = {
  basic: { label: 'Cơ bản', tone: 'success' },
  standard: { label: 'Tiêu chuẩn', tone: 'accent' },
  advanced: { label: 'Nâng cao', tone: 'warning' },
};

const LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  python: 'Python (WASM)',
  java: 'Java (WASM)',
};

const STAGE_META: Record<RuntimeStage, { readonly label: string; readonly tone: BadgeTone }> = {
  idle: { label: 'Sẵn sàng', tone: 'neutral' },
  loading: { label: 'Đang tải runtime WASM...', tone: 'accent' },
  compiling: { label: 'Đang biên dịch Java...', tone: 'accent' },
  running: { label: 'Đang chạy...', tone: 'accent' },
  ready: { label: 'Hoàn tất', tone: 'success' },
  error: { label: 'Có lỗi', tone: 'danger' },
};

function readDraft(problemId: string, language: CodeLanguage): string | null {
  try {
    return window.localStorage.getItem(`${DRAFT_STORAGE_PREFIX}${problemId}:${language}`);
  } catch {
    return null;
  }
}

function writeDraft(problemId: string, language: CodeLanguage, code: string): void {
  try {
    window.localStorage.setItem(`${DRAFT_STORAGE_PREFIX}${problemId}:${language}`, code);
  } catch {
    // Ignore storage quota or private mode restrictions.
  }
}

function clearDraft(problemId: string, language: CodeLanguage): void {
  try {
    window.localStorage.removeItem(`${DRAFT_STORAGE_PREFIX}${problemId}:${language}`);
  } catch {
    // Ignore storage quota or private mode restrictions.
  }
}

function readSolvedIds(): readonly string[] {
  try {
    const raw = window.localStorage.getItem(SOLVED_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string');
  } catch {
    return [];
  }
}

function writeSolvedIds(ids: readonly string[]): void {
  try {
    window.localStorage.setItem(SOLVED_STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Ignore storage quota or private mode restrictions.
  }
}

function resolveInitialCode(problem: CodeProblem, language: CodeLanguage): string {
  const draft = readDraft(problem.id, language);
  if (draft !== null) return draft;
  return problem.starterCode[language] ?? '';
}

function getExecutionStatusLabel(result: CodeExecutionResult): {
  readonly label: string;
  readonly tone: BadgeTone;
} {
  switch (result.status) {
    case 'ok':
      return { label: 'Chạy thành công', tone: 'success' };
    case 'compile-error':
      return { label: 'Lỗi biên dịch', tone: 'danger' };
    case 'runtime-error':
      return { label: 'Lỗi thực thi', tone: 'danger' };
    case 'timeout':
      return { label: 'Quá thời gian', tone: 'warning' };
    case 'cancelled':
      return { label: 'Đã dừng', tone: 'neutral' };
    case 'unavailable':
      return { label: 'Runtime chưa sẵn sàng', tone: 'warning' };
  }
}

export default function CodeLabWorkspace({ courseId, initialPreset }: SubjectToolProps) {
  const problems = useMemo(() => {
    const matched = codeProblems.filter((problem) => problem.courseId === courseId);
    return matched.length > 0 ? matched : codeProblems;
  }, [courseId]);

  const initialProblem = useMemo(() => {
    if (initialPreset) {
      const presetMatch = problems.find((problem) => problem.id === initialPreset);
      if (presetMatch) return presetMatch;
    }
    return problems[0];
  }, [problems, initialPreset]);

  const [selectedProblemId, setSelectedProblemId] = useState<string>(initialProblem?.id ?? '');
  const selectedProblem = useMemo(
    () => problems.find((problem) => problem.id === selectedProblemId) ?? problems[0],
    [problems, selectedProblemId],
  );

  const [language, setLanguage] = useState<CodeLanguage>(
    selectedProblem?.defaultLanguage ?? 'python',
  );
  const [code, setCode] = useState<string>(() =>
    selectedProblem ? resolveInitialCode(selectedProblem, selectedProblem.defaultLanguage) : '',
  );
  const [customStdin, setCustomStdin] = useState<string>(
    () => selectedProblem?.testCases[0]?.stdin ?? '',
  );
  const [hintsOpen, setHintsOpen] = useState(false);
  const [solvedIds, setSolvedIds] = useState<readonly string[]>(() => readSolvedIds());

  const [isRunning, setIsRunning] = useState(false);
  const [stage, setStage] = useState<RuntimeStage>('idle');
  const [stageMessage, setStageMessage] = useState<string | undefined>(undefined);
  const [runResult, setRunResult] = useState<CodeExecutionResult | null>(null);
  const [judgeSummary, setJudgeSummary] = useState<JudgeSummary | null>(null);

  const pyodideRunnerRef = useRef<WasmCodeRunner | null>(null);
  const cheerpjRunnerRef = useRef<WasmCodeRunner | null>(null);
  const activeRunnerRef = useRef<WasmCodeRunner | null>(null);
  const runSessionRef = useRef(0);

  useEffect(() => {
    if (!initialProblem) return;
    setSelectedProblemId(initialProblem.id);
    const nextLang = initialProblem.defaultLanguage;
    setLanguage(nextLang);
    setCode(resolveInitialCode(initialProblem, nextLang));
    setCustomStdin(initialProblem.testCases[0]?.stdin ?? '');
    setRunResult(null);
    setJudgeSummary(null);
    setStage('idle');
    setStageMessage(undefined);
  }, [initialProblem]);

  useEffect(() => {
    return () => {
      runSessionRef.current += 1;
      pyodideRunnerRef.current?.dispose();
      cheerpjRunnerRef.current?.dispose();
      pyodideRunnerRef.current = null;
      cheerpjRunnerRef.current = null;
      activeRunnerRef.current = null;
    };
  }, []);

  if (!selectedProblem) {
    return (
      <section className="rounded-[var(--radius-xl)] border border-border bg-surface p-6 text-sm text-ink-secondary">
        Chưa có bài tập lập trình nào cho học phần này.
      </section>
    );
  }

  const getRunner = (targetLanguage: CodeLanguage): WasmCodeRunner => {
    if (targetLanguage === 'java') {
      if (!cheerpjRunnerRef.current) {
        cheerpjRunnerRef.current = createCheerpJRunner();
      }
      return cheerpjRunnerRef.current;
    }
    if (!pyodideRunnerRef.current) {
      pyodideRunnerRef.current = createPyodideRunner();
    }
    return pyodideRunnerRef.current;
  };

  const handleSelectProblem = (nextProblemId: string) => {
    const nextProblem = problems.find((problem) => problem.id === nextProblemId);
    if (!nextProblem) return;
    runSessionRef.current += 1;
    activeRunnerRef.current?.cancel();
    activeRunnerRef.current = null;
    setIsRunning(false);

    setSelectedProblemId(nextProblem.id);
    const nextLanguage = nextProblem.supportedLanguages.includes(language)
      ? language
      : nextProblem.defaultLanguage;
    setLanguage(nextLanguage);
    setCode(resolveInitialCode(nextProblem, nextLanguage));
    setCustomStdin(nextProblem.testCases[0]?.stdin ?? '');
    setHintsOpen(false);
    setRunResult(null);
    setJudgeSummary(null);
    setStage('idle');
    setStageMessage(undefined);
  };

  const handleSelectLanguage = (nextLanguage: CodeLanguage) => {
    if (nextLanguage === language) return;
    if (!selectedProblem.supportedLanguages.includes(nextLanguage)) return;
    runSessionRef.current += 1;
    activeRunnerRef.current?.cancel();
    activeRunnerRef.current = null;
    setIsRunning(false);

    setLanguage(nextLanguage);
    setCode(resolveInitialCode(selectedProblem, nextLanguage));
    setRunResult(null);
    setJudgeSummary(null);
    setStage('idle');
    setStageMessage(undefined);
  };

  const handleCodeChange = (nextCode: string) => {
    setCode(nextCode);
    writeDraft(selectedProblem.id, language, nextCode);
  };

  const handleReset = () => {
    runSessionRef.current += 1;
    activeRunnerRef.current?.cancel();
    activeRunnerRef.current = null;
    setIsRunning(false);

    clearDraft(selectedProblem.id, language);
    const starter = selectedProblem.starterCode[language] ?? '';
    setCode(starter);
    setRunResult(null);
    setJudgeSummary(null);
    setStage('idle');
    setStageMessage(undefined);
  };

  const handleStop = () => {
    runSessionRef.current += 1;
    activeRunnerRef.current?.cancel();
    activeRunnerRef.current = null;
    setIsRunning(false);
    setStage('idle');
    setStageMessage('Đã dừng thực thi theo yêu cầu.');
  };

  const handleRunCustom = async () => {
    const session = ++runSessionRef.current;
    const runner = getRunner(language);
    activeRunnerRef.current = runner;
    setIsRunning(true);
    setJudgeSummary(null);
    setRunResult(null);
    setStage('loading');
    setStageMessage(undefined);

    const javaClassName =
      language === 'java'
        ? extractJavaMainClassName(code, selectedProblem.javaClassName ?? 'Main')
        : undefined;

    try {
      const result = await runner.run(code, {
        stdin: customStdin,
        ...(javaClassName !== undefined ? { javaClassName } : {}),
        onStage: (nextStage, message) => {
          if (runSessionRef.current !== session) return;
          setStage(nextStage);
          setStageMessage(message);
        },
      });
      if (runSessionRef.current !== session) return;
      setRunResult(result);
      setStage(result.status === 'ok' ? 'ready' : result.status === 'cancelled' ? 'idle' : 'error');
    } catch (error) {
      if (runSessionRef.current !== session) return;
      const message = error instanceof Error ? error.message : 'Không thể thực thi mã nguồn.';
      setRunResult({
        status: 'unavailable',
        stdout: '',
        stderr: '',
        durationMs: 0,
        errorMessage: message,
      });
      setStage('error');
    } finally {
      if (runSessionRef.current === session) {
        activeRunnerRef.current = null;
        setIsRunning(false);
      }
    }
  };

  const handleJudgeAll = async () => {
    const session = ++runSessionRef.current;
    const runner = getRunner(language);
    activeRunnerRef.current = runner;
    setIsRunning(true);
    setRunResult(null);
    setJudgeSummary(null);
    setStage('loading');
    setStageMessage(undefined);

    const javaClassName =
      language === 'java'
        ? extractJavaMainClassName(code, selectedProblem.javaClassName ?? 'Main')
        : undefined;

    const verdicts: TestCaseVerdict[] = [];

    try {
      for (let i = 0; i < selectedProblem.testCases.length; i += 1) {
        if (runSessionRef.current !== session) return;
        const testCase = selectedProblem.testCases[i];
        if (!testCase) continue;

        setStageMessage(`Đang chấm ${testCase.label} (${i + 1}/${selectedProblem.testCases.length})`);

        const result = await runner.run(code, {
          stdin: testCase.stdin,
          ...(javaClassName !== undefined ? { javaClassName } : {}),
          onStage: (nextStage, message) => {
            if (runSessionRef.current !== session) return;
            setStage(nextStage);
            if (message) setStageMessage(message);
          },
        });

        if (runSessionRef.current !== session) return;
        verdicts.push(judgeTestCase(testCase, result));

        if (result.status === 'cancelled' || result.status === 'unavailable') {
          break;
        }
      }

      if (runSessionRef.current !== session) return;
      const summary = summarizeJudge(verdicts);
      setJudgeSummary(summary);
      setStage(summary.allPassed ? 'ready' : 'error');
      setStageMessage(
        summary.allPassed
          ? `Đạt tất cả ${summary.total}/${summary.total} test case.`
          : `Đạt ${summary.passed}/${summary.total} test case.`,
      );

      if (summary.allPassed && !solvedIds.includes(selectedProblem.id)) {
        const nextSolved = [...solvedIds, selectedProblem.id];
        setSolvedIds(nextSolved);
        writeSolvedIds(nextSolved);
      }
    } catch (error) {
      if (runSessionRef.current !== session) return;
      const message = error instanceof Error ? error.message : 'Không thể chấm bài.';
      setRunResult({
        status: 'unavailable',
        stdout: '',
        stderr: '',
        durationMs: 0,
        errorMessage: message,
      });
      setStage('error');
    } finally {
      if (runSessionRef.current === session) {
        activeRunnerRef.current = null;
        setIsRunning(false);
      }
    }
  };

  const difficultyMeta = DIFFICULTY_META[selectedProblem.difficulty];
  const stageMeta = STAGE_META[stage];
  const isSolved = solvedIds.includes(selectedProblem.id);
  const visibleTestCases = selectedProblem.testCases.filter((testCase) => !testCase.hidden);
  const solvedCountInCourse = problems.filter((problem) => solvedIds.includes(problem.id)).length;

  return (
    <section
      aria-label="Phòng thực hành lập trình"
      className="min-w-0 rounded-[var(--radius-xl)] border border-border bg-surface p-4 shadow-[var(--hus-shadow-card)] sm:p-5"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Left column (~40%): Problem selector, statement, hints, sample I/O */}
        <div className="min-w-0 space-y-4 lg:col-span-5">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface-subtle p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="code-lab-problem-select"
                className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-muted"
              >
                Bài tập ({solvedCountInCourse}/{problems.length} đã đạt)
              </label>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge tone={difficultyMeta.tone}>{difficultyMeta.label}</Badge>
                {isSolved && (
                  <Badge tone="success">
                    <CheckCircleIcon width={12} height={12} />
                    <span>Đã đạt</span>
                  </Badge>
                )}
              </div>
            </div>

            <select
              id="code-lab-problem-select"
              value={selectedProblem.id}
              onChange={(event) => handleSelectProblem(event.target.value)}
              className="mt-2 min-h-[40px] w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2 text-sm font-medium text-ink transition-colors focus:border-accent focus:outline-2 focus:outline-accent"
            >
              {problems.map((problem, index) => {
                const donePrefix = solvedIds.includes(problem.id) ? '✓ ' : '';
                return (
                  <option key={problem.id} value={problem.id}>
                    {donePrefix}
                    {index + 1}. {problem.title} ({problem.chapterLabel})
                  </option>
                );
              })}
            </select>

            <p className="mt-2 text-xs text-ink-muted">
              {selectedProblem.chapterLabel} · {selectedProblem.summary}
            </p>
          </div>

          <article className="min-w-0 rounded-[var(--radius-lg)] border border-border bg-surface p-4">
            <h3 className="font-display text-lg font-semibold text-ink">{selectedProblem.title}</h3>
            <div className="academic-prose mt-3 text-sm leading-relaxed text-ink-secondary">
              <Markdown>{selectedProblem.promptMarkdown}</Markdown>
            </div>
          </article>

          {selectedProblem.hints.length > 0 && (
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface-subtle">
              <button
                type="button"
                aria-expanded={hintsOpen}
                onClick={() => setHintsOpen((prev) => !prev)}
                className="flex min-h-[40px] w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm font-medium text-ink transition-colors hover:bg-surface-hover"
              >
                <span>Gợi ý hướng giải ({selectedProblem.hints.length})</span>
                <ChevronDownIcon
                  width={16}
                  height={16}
                  className={`shrink-0 text-ink-muted transition-transform ${hintsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {hintsOpen && (
                <ul className="space-y-2 border-t border-border px-4 py-3 text-sm text-ink-secondary">
                  {selectedProblem.hints.map((hint, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-mono text-xs font-semibold text-accent">{idx + 1}.</span>
                      <span>{hint}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {visibleTestCases.length > 0 && (
            <div className="min-w-0 space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-muted">
                Ví dụ vào / ra
              </h4>
              {visibleTestCases.map((testCase) => (
                <div
                  key={testCase.id}
                  className="min-w-0 rounded-[var(--radius-lg)] border border-border bg-surface-subtle p-3"
                >
                  <div className="text-xs font-medium text-ink-secondary">{testCase.label}</div>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium text-ink-muted">Input</div>
                      <pre className="mt-1 overflow-x-auto rounded-[var(--radius-sm)] border border-border bg-surface p-2 font-mono text-xs text-ink">
                        {testCase.stdin || '(trống)'}
                      </pre>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium text-ink-muted">Output kỳ vọng</div>
                      <pre className="mt-1 overflow-x-auto rounded-[var(--radius-sm)] border border-border bg-surface p-2 font-mono text-xs text-ink">
                        {testCase.expectedOutput || '(trống)'}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column (~60%): Language switcher, CodeMirror 6, action bar, stdin, console/verdicts */}
        <div className="min-w-0 space-y-3.5 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div
              role="group"
              aria-label="Chọn ngôn ngữ lập trình"
              className="inline-flex flex-wrap items-center gap-1.5 rounded-[var(--radius-lg)] border border-border bg-surface-subtle p-1"
            >
              {(['python', 'java'] as const).map((lang) => {
                const supported = selectedProblem.supportedLanguages.includes(lang);
                const active = language === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    disabled={!supported}
                    aria-pressed={active}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`min-h-[40px] rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-semibold transition-colors ${
                      active
                        ? 'bg-accent-solid text-white shadow-xs'
                        : supported
                          ? 'text-ink-secondary hover:bg-surface-hover hover:text-ink'
                          : 'cursor-not-allowed text-ink-muted opacity-50'
                    }`}
                  >
                    {LANGUAGE_LABELS[lang]}
                  </button>
                );
              })}
            </div>

            <div role="status" aria-live="polite" className="flex flex-wrap items-center gap-2">
              <Badge tone={stageMeta.tone}>{stageMeta.label}</Badge>
              {stageMessage && (
                <span className="text-xs text-ink-muted">{stageMessage}</span>
              )}
            </div>
          </div>

          <CodeEditor
            value={code}
            language={language}
            onChange={handleCodeChange}
            ariaLabel={`Trình soạn thảo ${LANGUAGE_LABELS[language]} cho bài ${selectedProblem.title}`}
            minHeight="340px"
          />

          {language === 'java' && (
            <p className="text-xs text-ink-muted">
              Biên dịch &amp; chạy Java trên trình duyệt qua WebAssembly (Built with CheerpJ).
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={isRunning}
              onClick={handleRunCustom}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-[var(--radius-md)] border border-border-strong bg-surface px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-hover disabled:cursor-not-allowed disabled:opacity-55"
            >
              <PlayIcon width={15} height={15} className="text-accent" />
              <span>Chạy thử</span>
            </button>

            <button
              type="button"
              disabled={isRunning}
              onClick={handleJudgeAll}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-[var(--radius-md)] bg-accent-solid px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-solid-hover disabled:cursor-not-allowed disabled:opacity-55"
            >
              <CheckCircleIcon width={15} height={15} />
              <span>Chấm Test Case</span>
            </button>

            <button
              type="button"
              disabled={!isRunning}
              onClick={handleStop}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger-subtle disabled:cursor-not-allowed disabled:opacity-45"
            >
              <span>Dừng</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="ml-auto inline-flex min-h-[40px] items-center gap-1.5 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-surface-hover hover:text-ink"
            >
              <RotateCcwIcon width={15} height={15} />
              <span>Đặt lại</span>
            </button>
          </div>

          <div className="min-w-0">
            <label
              htmlFor="code-lab-custom-stdin"
              className="block text-xs font-semibold uppercase tracking-[0.06em] text-ink-muted"
            >
              Dữ liệu đầu vào tùy chỉnh (stdin)
            </label>
            <textarea
              id="code-lab-custom-stdin"
              rows={3}
              value={customStdin}
              onChange={(event) => setCustomStdin(event.target.value)}
              placeholder="Nhập dữ liệu đầu vào khi bấm Chạy thử..."
              className="mt-1.5 w-full rounded-[var(--radius-md)] border border-border bg-surface-subtle p-2.5 font-mono text-xs text-ink placeholder:text-ink-muted focus:border-accent focus:outline-2 focus:outline-accent"
            />
          </div>

          <div
            role="status"
            aria-live="polite"
            className="min-w-0 space-y-3 rounded-[var(--radius-lg)] border border-border bg-surface-subtle p-3.5"
          >
            {!runResult && !judgeSummary && (
              <p className="text-xs text-ink-muted">
                Bấm <strong>Chạy thử</strong> để kiểm tra với stdin tùy chỉnh hoặc{' '}
                <strong>Chấm Test Case</strong> để kiểm tra toàn bộ bộ test.
              </p>
            )}

            {runResult && (
              <div className="min-w-0 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge tone={getExecutionStatusLabel(runResult).tone}>
                    {getExecutionStatusLabel(runResult).label}
                  </Badge>
                  <span className="font-mono text-xs text-ink-muted">
                    {runResult.durationMs} ms
                  </span>
                </div>

                {runResult.errorMessage && (
                  <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-danger/25 bg-danger-subtle p-2.5 text-xs text-danger">
                    <AlertCircleIcon width={15} height={15} className="mt-0.5 shrink-0" />
                    <span>{runResult.errorMessage}</span>
                  </div>
                )}

                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-ink-muted">Stdout</div>
                  <pre className="mt-1 overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface p-2.5 font-mono text-xs text-ink">
                    {runResult.stdout || '(không có kết quả in ra)'}
                  </pre>
                </div>

                {runResult.stderr && (
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-danger">Stderr</div>
                    <pre className="mt-1 overflow-x-auto rounded-[var(--radius-md)] border border-danger/25 bg-danger-subtle p-2.5 font-mono text-xs text-danger">
                      {runResult.stderr}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {judgeSummary && (
              <div className="min-w-0 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge tone={judgeSummary.allPassed ? 'success' : 'danger'}>
                      {judgeSummary.allPassed ? 'Đạt toàn bộ' : 'Chưa đạt hết'}
                    </Badge>
                    <span className="font-mono text-xs font-semibold text-ink">
                      {judgeSummary.passed}/{judgeSummary.total} test case
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {judgeSummary.verdicts.map((verdict, index) => {
                    const sourceTestCase = selectedProblem.testCases[index];
                    const isHidden = Boolean(sourceTestCase?.hidden);
                    return (
                      <div
                        key={verdict.testCaseId}
                        className={`min-w-0 rounded-[var(--radius-md)] border p-2.5 ${
                          verdict.passed
                            ? 'border-success/25 bg-success-subtle/60'
                            : 'border-danger/25 bg-danger-subtle/60'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Badge tone={verdict.passed ? 'success' : 'danger'}>
                              {verdict.passed ? 'Đạt' : 'Chưa đạt'}
                            </Badge>
                            <span className="text-xs font-semibold text-ink">{verdict.label}</span>
                          </div>
                          <span className="font-mono text-[11px] text-ink-muted">
                            {verdict.durationMs} ms
                          </span>
                        </div>

                        {verdict.errorMessage && (
                          <p className="mt-1.5 text-xs text-danger">{verdict.errorMessage}</p>
                        )}

                        {!verdict.passed && !isHidden && (
                          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <div className="min-w-0">
                              <div className="text-[11px] font-medium text-ink-muted">Kỳ vọng</div>
                              <pre className="mt-0.5 overflow-x-auto rounded-[var(--radius-sm)] border border-border bg-surface p-2 font-mono text-xs text-ink">
                                {verdict.expectedOutput || '(trống)'}
                              </pre>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[11px] font-medium text-ink-muted">Thực tế</div>
                              <pre className="mt-0.5 overflow-x-auto rounded-[var(--radius-sm)] border border-border bg-surface p-2 font-mono text-xs text-ink">
                                {verdict.actualOutput || '(trống)'}
                              </pre>
                            </div>
                          </div>
                        )}

                        {!verdict.passed && isHidden && (
                          <p className="mt-1.5 text-xs text-ink-secondary">
                            Test case ẩn: đầu ra chưa khớp kỳ vọng ({verdict.status}).
                          </p>
                        )}

                        {verdict.stderr && (
                          <pre className="mt-2 overflow-x-auto rounded-[var(--radius-sm)] border border-danger/25 bg-surface p-2 font-mono text-xs text-danger">
                            {verdict.stderr}
                          </pre>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
