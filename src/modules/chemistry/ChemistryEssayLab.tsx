import { useEffect, useMemo, useState } from 'react';
import type { SubjectToolProps } from '../../contracts/subject-module';
import type { Che1080BankExercise } from '../../domain/che1080-bank';
import {
  computeHessSum,
  diagnoseGasSelection,
  diagnoseMoFill,
  EMPTY_MO_COUNTS,
  isNumericAnswerMatch,
  type HessStepState,
  type MoOrdering,
  type MoSlotCounts,
  type MoSlotId,
} from '../../core/chemistry/essay-engine';
import {
  DIFFICULTY_META,
  selectFeaturedAcrossChapters,
} from '../../core/chemistry/practice-bank';
import { Badge } from '../../components/ui/Badge';
import {
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RotateCcwIcon,
} from '../../components/ui/Icons';
import {
  Che1080ExercisePracticeCard,
  Che1080PracticeBank,
  loadSolvedExerciseIds,
  saveSolvedExerciseIds,
} from './Che1080PracticeBank';
import { EquilElectroCanvas } from './EquilElectroCanvas';
import { MoDiagramCanvas } from './MoDiagramCanvas';
import {
  CHEMISTRY_SEMI_ESSAY_PROBLEMS,
  CHEMISTRY_TOPICS,
  type ChemistrySemiEssayProblem,
  type ChemistryTopicId,
  type SemiEssayStep,
} from './problems';
import { ThermoDiagramCanvas } from './ThermoDiagramCanvas';
import { VbOverlapCanvas } from './VbOverlapCanvas';

interface StepFeedback {
  readonly status: 'correct' | 'incorrect';
  readonly message: string;
}

type LabMode = 'visual-lab' | 'difficulty-featured' | 'practice-bank';

function resolveInitialTopic(preset?: string): ChemistryTopicId {
  if (
    preset === 'mo-diagram' ||
    preset === 'vb-hybridization' ||
    preset === 'thermo-diagram' ||
    preset === 'equil-buffer' ||
    preset === 'electro-cell'
  ) {
    return preset;
  }
  return 'mo-diagram';
}

function resolveChapterPreset(preset?: string): number | null {
  if (!preset) return null;
  const match = /^chapter-([1-7])$/.exec(preset);
  return match ? Number(match[1]) : null;
}

export default function ChemistryEssayLab({ initialPreset }: SubjectToolProps) {
  const initialChapterPreset = resolveChapterPreset(initialPreset);
  const [labMode, setLabMode] = useState<LabMode>(() =>
    initialChapterPreset !== null ? 'difficulty-featured' : 'visual-lab',
  );
  const [topicId, setTopicId] = useState<ChemistryTopicId>(() =>
    resolveInitialTopic(initialPreset),
  );
  const topicProblems = useMemo(
    () => CHEMISTRY_SEMI_ESSAY_PROBLEMS.filter(p => p.topicId === topicId),
    [topicId],
  );
  const [problemId, setProblemId] = useState<string>(() => topicProblems[0]?.id ?? 'mo-o2-family');
  const [showRules, setShowRules] = useState(true);

  const [bankExercises, setBankExercises] = useState<readonly Che1080BankExercise[] | null>(null);
  const [bankLoading, setBankLoading] = useState(false);
  const [bankError, setBankError] = useState<string | null>(null);
  const [featuredChapter, setFeaturedChapter] = useState<number>(() => initialChapterPreset ?? 1);
  const [solvedIds, setSolvedIds] = useState<ReadonlySet<string>>(() => loadSolvedExerciseIds());

  useEffect(() => {
    if (!initialPreset) return;
    const chapterNum = resolveChapterPreset(initialPreset);
    if (chapterNum !== null) {
      setLabMode('difficulty-featured');
      setFeaturedChapter(chapterNum);
      return;
    }
    const resolved = resolveInitialTopic(initialPreset);
    setLabMode('visual-lab');
    setTopicId(resolved);
    const first = CHEMISTRY_SEMI_ESSAY_PROBLEMS.find(p => p.topicId === resolved);
    if (first) setProblemId(first.id);
  }, [initialPreset]);

  useEffect(() => {
    if (labMode === 'visual-lab' || bankExercises !== null) return;
    let cancelled = false;
    setBankLoading(true);
    setBankError(null);
    import('../../content/courses/general-chemistry/che1080-bank')
      .then(mod => {
        if (cancelled) return;
        setBankExercises(mod.default);
        setBankLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setBankError('Không thể tải ngân hàng bài tập CHE1080. Vui lòng thử lại.');
        setBankLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [labMode, bankExercises]);

  const featuredAcross = useMemo(
    () => (bankExercises ? selectFeaturedAcrossChapters(bankExercises) : null),
    [bankExercises],
  );

  const activeChapterGroup = useMemo(() => {
    if (!featuredAcross) return null;
    return (
      featuredAcross.byChapter.find(g => g.chapterNumber === featuredChapter) ??
      featuredAcross.byChapter[0] ??
      null
    );
  }, [featuredAcross, featuredChapter]);

  const handleToggleSolved = (id: string) => {
    setSolvedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveSolvedExerciseIds(next);
      return next;
    });
  };

  const handleOpenVisualTool = (hint: ChemistryTopicId) => {
    setLabMode('visual-lab');
    setTopicId(hint);
    const first = CHEMISTRY_SEMI_ESSAY_PROBLEMS.find(p => p.topicId === hint);
    if (first) setProblemId(first.id);
  };

  const problem: ChemistrySemiEssayProblem =
    topicProblems.find(p => p.id === problemId) ??
    topicProblems[0] ??
    CHEMISTRY_SEMI_ESSAY_PROBLEMS[0]!;

  return (
    <section
      aria-label="Phòng luyện giải bán tự luận Hóa học đại cương"
      className="hus-card-surface rounded-[var(--radius-xl)] border border-border bg-surface p-4 sm:p-6"
    >
      {/* Top Bar: Title + Support mode toggle */}
      <div className="flex flex-col gap-4 border-b border-border pb-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="font-display text-xl font-medium text-ink">
            Luyện giải bán tự luận Hóa học đại cương
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
            Chọn mệnh đề, điền công thức và thao tác trực tiếp trên hình để lắp thành bài giải tự luận chuẩn điểm thi.
          </p>
        </div>

        {labMode === 'visual-lab' ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <div
              className="inline-flex rounded-[var(--radius-md)] border border-border bg-surface-subtle p-0.5"
              role="group"
              aria-label="Chế độ hỗ trợ quy tắc"
            >
              <button
                type="button"
                onClick={() => setShowRules(true)}
                aria-pressed={showRules}
                className={`min-h-[40px] whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-1 text-xs font-medium transition-colors ${
                  showRules ? 'bg-surface text-accent shadow-xs' : 'text-ink-muted hover:text-ink'
                }`}
              >
                Có quy tắc
              </button>
              <button
                type="button"
                onClick={() => setShowRules(false)}
                aria-pressed={!showRules}
                className={`min-h-[40px] whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-1 text-xs font-medium transition-colors ${
                  !showRules ? 'bg-surface text-accent shadow-xs' : 'text-ink-muted hover:text-ink'
                }`}
              >
                Tự kiểm (ẩn gợi ý)
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {/* Top-Level 3-Mode Switcher */}
      <div
        className="mt-4 flex flex-wrap gap-2 border-b border-border pb-4"
        role="tablist"
        aria-label="Chế độ luyện tập Hóa học đại cương"
      >
        <button
          type="button"
          role="tab"
          aria-selected={labMode === 'visual-lab'}
          onClick={() => setLabMode('visual-lab')}
          className={`inline-flex min-h-[40px] items-center gap-2 rounded-[var(--radius-md)] border px-3.5 py-2 text-xs font-medium transition-colors ${
            labMode === 'visual-lab'
              ? 'border-accent bg-accent-subtle text-accent-ink'
              : 'border-border bg-canvas text-ink-secondary hover:border-border-strong hover:text-ink'
          }`}
        >
          Tương tác trực quan (MO · VB · Nhiệt · Cân bằng · Pin)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={labMode === 'difficulty-featured'}
          onClick={() => setLabMode('difficulty-featured')}
          className={`inline-flex min-h-[40px] items-center gap-2 rounded-[var(--radius-md)] border px-3.5 py-2 text-xs font-medium transition-colors ${
            labMode === 'difficulty-featured'
              ? 'border-accent bg-accent-subtle text-accent-ink'
              : 'border-border bg-canvas text-ink-secondary hover:border-border-strong hover:text-ink'
          }`}
        >
          1 câu / cấp độ khó (7 chương CHE1080)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={labMode === 'practice-bank'}
          onClick={() => setLabMode('practice-bank')}
          className={`inline-flex min-h-[40px] items-center gap-2 rounded-[var(--radius-md)] border px-3.5 py-2 text-xs font-medium transition-colors ${
            labMode === 'practice-bank'
              ? 'border-accent bg-accent-subtle text-accent-ink'
              : 'border-border bg-canvas text-ink-secondary hover:border-border-strong hover:text-ink'
          }`}
        >
          Kho luyện tập (bài còn lại)
        </button>
      </div>

      {labMode === 'visual-lab' ? (
        <>
          {/* Topic Switcher Tabs */}
          <div
            className="mt-4 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Chuyên đề bán tự luận Hóa học đại cương"
          >
            {CHEMISTRY_TOPICS.map(topic => {
              const active = topic.id === topicId;
              return (
                <button
                  key={topic.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setTopicId(topic.id);
                    const first = CHEMISTRY_SEMI_ESSAY_PROBLEMS.find(p => p.topicId === topic.id);
                    if (first) setProblemId(first.id);
                  }}
                  className={`inline-flex min-h-[40px] items-center gap-2 rounded-[var(--radius-md)] border px-3.5 py-2 text-xs font-medium transition-colors duration-200 active:scale-[0.98] ${
                    active
                      ? 'border-accent bg-accent-subtle text-accent-ink'
                      : 'border-border bg-canvas text-ink-secondary hover:border-border-strong hover:text-ink'
                  }`}
                >
                  <span>{topic.title}</span>
                </button>
              );
            })}
          </div>

          {/* Problem Selector Pills within Topic */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-ink-muted">Bài luyện:</span>
            {topicProblems.map(item => {
              const active = item.id === problem.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProblemId(item.id)}
                  aria-pressed={active}
                  className={`min-h-[40px] rounded-[var(--radius-md)] border px-3 py-1.5 text-xs transition-colors ${
                    active
                      ? 'border-accent/60 bg-accent-subtle/80 font-medium text-accent-ink'
                      : 'border-border bg-surface-subtle/60 text-ink-secondary hover:border-border-strong hover:text-ink'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Active Problem Workspace */}
          <ProblemSession
            key={problem.id}
            problem={problem}
            showRules={showRules}
            onNextProblem={() => {
              const idx = topicProblems.findIndex(p => p.id === problem.id);
              const next = topicProblems[(idx + 1) % topicProblems.length];
              if (next) setProblemId(next.id);
            }}
          />
        </>
      ) : bankLoading ? (
        <div className="mt-6 rounded-[var(--radius-xl)] border border-border bg-canvas p-8 text-center text-sm text-ink-secondary">
          Đang tải ngân hàng bài tập CHE1080...
        </div>
      ) : bankError ? (
        <div
          role="alert"
          className="mt-6 rounded-[var(--radius-xl)] border border-danger/35 bg-danger-subtle p-6 text-sm text-danger"
        >
          {bankError}
        </div>
      ) : labMode === 'difficulty-featured' && featuredAcross && activeChapterGroup ? (
        <div className="mt-5 space-y-5">
          {/* Chapter picker */}
          <div className="rounded-[var(--radius-lg)] border border-border bg-canvas p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-display text-lg font-medium text-ink">
                  Chương {activeChapterGroup.chapterNumber}: {activeChapterGroup.chapterTitle}
                </h4>
                <p className="mt-0.5 text-xs text-ink-secondary">
                  Mỗi cấp độ khó chọn đúng 1 bài tiêu biểu (ưu tiên đề từ 2020);{' '}
                  <span className="font-mono font-semibold tabular-nums text-ink">
                    {activeChapterGroup.practiceCount}
                  </span>{' '}
                  bài còn lại của chương được lưu trong Kho luyện tập.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLabMode('practice-bank')}
                className="hus-btn hus-btn-secondary min-h-[40px] shrink-0 text-xs"
              >
                <span>Mở Kho luyện tập</span>
                <ArrowRightIcon width={14} height={14} />
              </button>
            </div>

            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Chọn chương CHE1080"
            >
              {featuredAcross.byChapter.map(group => {
                const active = group.chapterNumber === activeChapterGroup.chapterNumber;
                return (
                  <button
                    key={group.chapterNumber}
                    type="button"
                    onClick={() => setFeaturedChapter(group.chapterNumber)}
                    aria-pressed={active}
                    className={`min-h-[40px] rounded-[var(--radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? 'border-accent bg-accent-subtle text-accent-ink'
                        : 'border-border bg-surface text-ink-secondary hover:border-border-strong hover:text-ink'
                    }`}
                  >
                    Chương {group.chapterNumber}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Strictly 1 representative exercise per difficulty level */}
          <div className="space-y-4">
            {activeChapterGroup.featured.map(exercise => {
              const meta = DIFFICULTY_META[exercise.difficulty];
              return (
                <div key={exercise.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                    <h5 className="font-display text-base font-medium text-ink">
                      Cấp độ {meta.label}
                    </h5>
                    <span className="text-xs text-ink-muted">{meta.description}</span>
                  </div>
                  <Che1080ExercisePracticeCard
                    exercise={exercise}
                    isSolved={solvedIds.has(exercise.id)}
                    onToggleSolved={handleToggleSolved}
                    onOpenVisualTool={handleOpenVisualTool}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : bankExercises && featuredAcross ? (
        <Che1080PracticeBank
          exercises={bankExercises}
          featuredIds={featuredAcross.featuredIds}
          onOpenVisualTool={handleOpenVisualTool}
        />
      ) : null}
    </section>
  );
}

function ProblemSession({
  problem,
  showRules,
  onNextProblem,
}: {
  readonly problem: ChemistrySemiEssayProblem;
  readonly showRules: boolean;
  readonly onNextProblem: () => void;
}) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [completedStepIds, setCompletedStepIds] = useState<readonly string[]>([]);
  const [feedbackByStep, setFeedbackByStep] = useState<Readonly<Record<string, StepFeedback>>>({});

  // Inputs per step
  const [selectedClauseByStep, setSelectedClauseByStep] = useState<Readonly<Record<string, string>>>({});
  const [blankValuesByStep, setBlankValuesByStep] = useState<
    Readonly<Record<string, Readonly<Record<string, string>>>>
  >({});

  // Interactive visual states
  const [moOrdering, setMoOrdering] = useState<MoOrdering>('type-1');
  const [moCounts, setMoCounts] = useState<MoSlotCounts>(EMPTY_MO_COUNTS);
  const [moHighlightSlots, setMoHighlightSlots] = useState<readonly MoSlotId[]>([]);
  const [moShakeSlots, setMoShakeSlots] = useState<readonly MoSlotId[]>([]);

  const [vbSelectedBonds, setVbSelectedBonds] = useState<readonly string[]>([]);
  const [thermoGasIds, setThermoGasIds] = useState<readonly string[]>([]);
  const [hessStates, setHessStates] = useState<readonly HessStepState[]>(() =>
    problem.visual.kind === 'thermo-diagram' && problem.visual.hessReactions
      ? problem.visual.hessReactions.map(r => ({ id: r.id, reversed: false, multiplier: 1 }))
      : [],
  );

  const allCompleted = completedStepIds.length === problem.steps.length;

  const markStepResult = (step: SemiEssayStep, ok: boolean, message: string) => {
    setFeedbackByStep(prev => ({
      ...prev,
      [step.id]: { status: ok ? 'correct' : 'incorrect', message },
    }));
    if (ok) {
      setMoHighlightSlots([]);
      setMoShakeSlots([]);
      setCompletedStepIds(prev => (prev.includes(step.id) ? prev : [...prev, step.id]));
      const idx = problem.steps.findIndex(s => s.id === step.id);
      if (idx >= 0 && idx < problem.steps.length - 1) {
        setActiveStepIdx(idx + 1);
      }
    }
  };

  const handleCheckStep = (step: SemiEssayStep) => {
    const inter = step.interaction;

    if (inter.type === 'clause-choice') {
      const chosenId = selectedClauseByStep[step.id];
      if (!chosenId) {
        markStepResult(step, false, 'Hãy chọn một mệnh đề trình bày trước khi kiểm tra.');
        return;
      }
      if (chosenId === inter.expectedOptionId) {
        markStepResult(step, true, 'Chính xác! Mệnh đề này đã được ghi vào tờ bài giải tự luận.');
      } else {
        const wrongOpt = inter.options.find(o => o.id === chosenId);
        markStepResult(
          step,
          false,
          wrongOpt?.wrongReason ?? 'Mệnh đề chưa chính xác. Hãy kiểm tra lại điều kiện hóa học.',
        );
      }
      return;
    }

    if (inter.type === 'numeric-blanks') {
      const values = blankValuesByStep[step.id] ?? {};
      for (const field of inter.fields) {
        const raw = values[field.id] ?? '';
        if (!isNumericAnswerMatch(raw, field.expected, field.tolerance)) {
          markStepResult(step, false, `${field.label}: ${field.wrongHint}`);
          return;
        }
      }
      markStepResult(step, true, 'Chính xác! Số liệu đã khớp và được ghi nhận vào bài giải.');
      return;
    }

    if (inter.type === 'mo-diagram-interactive' && problem.visual.kind === 'mo-diagram') {
      const diagnosis = diagnoseMoFill(
        moCounts,
        problem.visual.expectedOrdering,
        moOrdering,
        problem.visual.expectedTotalElectrons,
      );
      if (!diagnosis.ok) {
        setMoHighlightSlots(diagnosis.highlightSlotIds);
        setMoShakeSlots(diagnosis.highlightSlotIds);
        window.setTimeout(() => setMoShakeSlots([]), 380);
      }
      markStepResult(step, diagnosis.ok, diagnosis.message);
      return;
    }

    if (inter.type === 'vb-overlap-interactive' && problem.visual.kind === 'vb-hybridization') {
      const expectedSet = new Set(inter.expectedBondIds);
      const selectedSet = new Set(vbSelectedBonds);
      const wrongChosen = problem.visual.candidateBonds.find(
        b => selectedSet.has(b.id) && !expectedSet.has(b.id),
      );
      if (wrongChosen) {
        markStepResult(step, false, `Chưa đúng ở "${wrongChosen.label}": ${wrongChosen.description}`);
        return;
      }
      const missingCount = inter.expectedBondIds.filter(id => !selectedSet.has(id)).length;
      if (missingCount > 0) {
        markStepResult(
          step,
          false,
          `Bạn còn thiếu ${missingCount} cặp xen phủ đúng. Kiểm tra đủ cả liên kết σ và π toàn phân tử.`,
        );
        return;
      }
      markStepResult(step, true, 'Chính xác! Bạn đã phân tách đúng toàn bộ các cặp xen phủ σ và π.');
      return;
    }

    if (inter.type === 'thermo-gas-select' && problem.visual.kind === 'thermo-diagram' && problem.visual.species) {
      const diagnosis = diagnoseGasSelection(problem.visual.species, thermoGasIds);
      markStepResult(step, diagnosis.ok, diagnosis.message);
      return;
    }

    if (
      inter.type === 'hess-cycle-interactive' &&
      problem.visual.kind === 'thermo-diagram' &&
      problem.visual.hessReactions
    ) {
      const baseMap: Record<string, number> = {};
      for (const r of problem.visual.hessReactions) baseMap[r.id] = r.deltaH;
      const net = computeHessSum(baseMap, hessStates);
      if (Math.abs(net - inter.expectedDeltaH) <= 0.5) {
        markStepResult(
          step,
          true,
          `Chính xác! Tổ hợp chu trình Hess cho ΔH° = ${net > 0 ? `+${net}` : net} kJ.`,
        );
      } else {
        markStepResult(
          step,
          false,
          `Tổng hiện tại là ${net > 0 ? `+${net}` : net} kJ (chưa khớp). Kiểm tra xem phản ứng nào cần nhân ×2 và phản ứng nào cần đảo chiều ⇄.`,
        );
      }
    }
  };

  const resetProblem = () => {
    setActiveStepIdx(0);
    setCompletedStepIds([]);
    setFeedbackByStep({});
    setSelectedClauseByStep({});
    setBlankValuesByStep({});
    setMoCounts(EMPTY_MO_COUNTS);
    setMoHighlightSlots([]);
    setVbSelectedBonds([]);
    setThermoGasIds([]);
    if (problem.visual.kind === 'thermo-diagram' && problem.visual.hessReactions) {
      setHessStates(
        problem.visual.hessReactions.map(r => ({ id: r.id, reversed: false, multiplier: 1 })),
      );
    }
  };

  return (
    <div className="mt-5 space-y-5">
      {/* Full-width Problem Statement Banner (keeps the left visual stage compact so it fits in 1 screen) */}
      <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-surface-subtle/65 px-4 py-3.5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent">{problem.examTag}</Badge>
            <span className="text-xs font-medium text-ink-muted">{problem.title}</span>
          </div>
          <p className="text-sm leading-relaxed text-ink">{problem.statement}</p>
        </div>
        <button
          type="button"
          onClick={resetProblem}
          className="hus-btn hus-btn-secondary min-h-[34px] shrink-0 px-3 py-1 text-xs"
        >
          <RotateCcwIcon width={13} height={13} />
          Làm lại bài
        </button>
      </div>

      {/* Spacious 2-column Desktop Workspace (full max-w-7xl width: ~640px Visual Stage | ~520px Essay Sheet) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:items-start">
        {/* LEFT COLUMN: Sticky Interactive Animated Visual Stage */}
        <div className="min-w-0 space-y-3.5 lg:sticky lg:top-24">
          {problem.visual.kind === 'mo-diagram' ? (
            <MoDiagramCanvas
              config={problem.visual}
              ordering={moOrdering}
              counts={moCounts}
              highlightSlotIds={moHighlightSlots}
              shakeSlotIds={moShakeSlots}
              onOrderingChange={setMoOrdering}
              onCountsChange={setMoCounts}
            />
          ) : null}

          {problem.visual.kind === 'vb-hybridization' ? (
            <VbOverlapCanvas config={problem.visual} selectedBondIds={vbSelectedBonds} />
          ) : null}

          {problem.visual.kind === 'thermo-diagram' ? (
            <ThermoDiagramCanvas
              config={problem.visual}
              selectedGasIds={thermoGasIds}
              onToggleGasId={id =>
                setThermoGasIds(prev =>
                  prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
                )
              }
              hessStates={hessStates}
              onHessStateChange={setHessStates}
            />
          ) : null}

          {problem.visual.kind === 'equil-buffer' || problem.visual.kind === 'electro-cell' ? (
            <EquilElectroCanvas config={problem.visual} />
          ) : null}
        </div>

        {/* RIGHT COLUMN: Semi-Essay Step-by-Step Sheet */}
        <div className="min-w-0 space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-lg font-medium text-ink">
            Tờ bài giải bán tự luận
          </h4>
          <span className="font-mono text-xs tabular-nums text-ink-muted">
            {completedStepIds.length}/{problem.steps.length} bước hoàn thành
          </span>
        </div>

        <ol className="space-y-3">
          {problem.steps.map((step, index) => {
            const isCompleted = completedStepIds.includes(step.id);
            const isActive = index === activeStepIdx;
            const feedback = feedbackByStep[step.id];

            return (
              <li
                key={step.id}
                className={`rounded-[var(--radius-lg)] border transition-colors duration-200 ${
                  isCompleted && !isActive
                    ? 'border-success/35 bg-success-subtle/35'
                    : isActive
                      ? 'border-accent/55 bg-canvas'
                      : 'border-border bg-surface-subtle/40 opacity-85'
                }`}
              >
                {/* Step Header */}
                <button
                  type="button"
                  onClick={() => setActiveStepIdx(index)}
                  aria-expanded={isActive}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold ${
                        isCompleted
                          ? 'bg-success text-white'
                          : isActive
                            ? 'bg-accent-solid text-white'
                            : 'border border-border-strong bg-surface text-ink-muted'
                      }`}
                    >
                      {isCompleted ? '✓' : index + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink">{step.title}</span>
                  </div>
                  {isCompleted ? <Badge tone="success">Đạt</Badge> : null}
                </button>

                {/* Completed collapsed essay line preview */}
                {isCompleted && !isActive ? (
                  <p className="border-t border-border/60 px-4 py-2.5 text-sm leading-relaxed text-ink-secondary">
                    {step.completedEssayLine}
                  </p>
                ) : null}

                {/* Expanded Active Step Body */}
                {isActive ? (
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      handleCheckStep(step);
                    }}
                    className="space-y-3.5 border-t border-border px-4 py-4"
                  >
                    <p className="text-sm leading-relaxed text-ink">{step.interaction.prompt}</p>

                    {/* Concise Rule & Trap Card (Only when showRules is ON) */}
                    {showRules ? (
                      <div className="rounded-[var(--radius-md)] border border-border bg-surface-subtle/75 px-3.5 py-2.5 text-xs leading-relaxed">
                        <p className="text-ink">
                          <strong className="text-accent">Quy tắc áp dụng:</strong> {step.ruleTip}
                        </p>
                        <p className="mt-1 text-ink-secondary">
                          <strong className="text-warning">{step.trapNote.split(':')[0]}:</strong>
                          {step.trapNote.includes(':')
                            ? step.trapNote.slice(step.trapNote.indexOf(':') + 1)
                            : step.trapNote}
                        </p>
                      </div>
                    ) : null}

                    {/* Interaction Controls */}
                    {step.interaction.type === 'clause-choice' ? (
                      <fieldset className="space-y-2 border-0 p-0">
                        <legend className="sr-only">{step.title}</legend>
                        {step.interaction.options.map(option => {
                          const checked = selectedClauseByStep[step.id] === option.id;
                          return (
                            <label
                              key={option.id}
                              className={`flex min-h-[44px] cursor-pointer items-start gap-3 rounded-[var(--radius-md)] border px-3.5 py-2.5 text-sm transition-colors ${
                                checked
                                  ? 'border-accent bg-accent-subtle/80 font-medium text-accent-ink'
                                  : 'border-border bg-surface text-ink hover:border-border-strong'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`clause-${step.id}`}
                                checked={checked}
                                onChange={() =>
                                  setSelectedClauseByStep(prev => ({ ...prev, [step.id]: option.id }))
                                }
                                className="mt-1 h-4 w-4 shrink-0 accent-[var(--hus-accent)]"
                              />
                              <span className="leading-relaxed">{option.text}</span>
                            </label>
                          );
                        })}
                      </fieldset>
                    ) : null}

                    {step.interaction.type === 'numeric-blanks' ? (
                      <div className="space-y-2.5">
                        {step.interaction.formulaPrefix ? (
                          <p className="font-mono text-xs font-semibold text-accent">
                            {step.interaction.formulaPrefix}
                          </p>
                        ) : null}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {step.interaction.fields.map(field => {
                            const val = blankValuesByStep[step.id]?.[field.id] ?? '';
                            const inputId = `${step.id}-${field.id}`;
                            return (
                              <div key={field.id} className="space-y-1">
                                <label
                                  htmlFor={inputId}
                                  className="block text-xs font-medium text-ink-secondary"
                                >
                                  {field.label}
                                </label>
                                <div className="flex items-center gap-2">
                                  <input
                                    id={inputId}
                                    type="text"
                                    inputMode="decimal"
                                    value={val}
                                    placeholder={field.placeholder}
                                    onChange={e =>
                                      setBlankValuesByStep(prev => ({
                                        ...prev,
                                        [step.id]: {
                                          ...(prev[step.id] ?? {}),
                                          [field.id]: e.target.value,
                                        },
                                      }))
                                    }
                                    className="min-h-[40px] w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 py-1.5 font-mono text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                                  />
                                  {field.unit ? (
                                    <span className="shrink-0 font-mono text-xs text-ink-muted">
                                      {field.unit}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}

                    {step.interaction.type === 'vb-overlap-interactive' &&
                    problem.visual.kind === 'vb-hybridization' ? (
                      <fieldset className="space-y-2 border-0 p-0">
                        <legend className="sr-only">Chọn các cặp xen phủ orbital</legend>
                        {problem.visual.candidateBonds.map(bond => {
                          const checked = vbSelectedBonds.includes(bond.id);
                          return (
                            <label
                              key={bond.id}
                              className={`flex min-h-[42px] cursor-pointer items-start gap-3 rounded-[var(--radius-md)] border px-3.5 py-2 text-xs transition-colors ${
                                checked
                                  ? 'border-accent bg-accent-subtle/80 font-medium text-accent-ink'
                                  : 'border-border bg-surface text-ink hover:border-border-strong'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={e =>
                                  setVbSelectedBonds(prev =>
                                    e.target.checked
                                      ? [...prev, bond.id]
                                      : prev.filter(id => id !== bond.id),
                                  )
                                }
                                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--hus-accent)]"
                              />
                              <span className="leading-relaxed">
                                {bond.label}{' '}
                                <Badge tone={bond.kind === 'sigma' ? 'accent' : 'warning'}>
                                  {bond.kind === 'sigma' ? 'σ' : 'π'}
                                </Badge>
                              </span>
                            </label>
                          );
                        })}
                      </fieldset>
                    ) : null}

                    {/* Check Button */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        type="submit"
                        className="hus-btn hus-btn-primary min-h-[40px] px-4 text-xs"
                      >
                        Kiểm tra bước {index + 1}
                      </button>
                    </div>

                    {/* Step Feedback */}
                    {feedback ? (
                      <div
                        role="status"
                        aria-live="polite"
                        className={`flex items-start gap-2 rounded-[var(--radius-md)] border px-3.5 py-2.5 text-xs leading-relaxed ${
                          feedback.status === 'correct'
                            ? 'border-success/35 bg-success-subtle text-success'
                            : 'border-danger/35 bg-danger-subtle text-danger'
                        }`}
                      >
                        {feedback.status === 'correct' ? (
                          <CheckCircleIcon width={15} height={15} className="mt-0.5 shrink-0" />
                        ) : (
                          <AlertCircleIcon width={15} height={15} className="mt-0.5 shrink-0" />
                        )}
                        <span>{feedback.message}</span>
                      </div>
                    ) : null}
                  </form>
                ) : null}
              </li>
            );
          })}
        </ol>

        {/* Assembled Exam-Ready Essay Output once all steps are complete */}
        {allCompleted ? (
          <div className="rounded-[var(--radius-xl)] border border-success/40 bg-success-subtle/35 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-success">
                <CheckCircleIcon width={18} height={18} />
                <h5 className="font-display text-lg font-medium text-ink">
                  Bài giải tự luận hoàn chỉnh
                </h5>
              </div>
              <Badge tone="success">Đủ ý chuẩn điểm thi</Badge>
            </div>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink">
              {problem.steps.map(step => (
                <li key={step.id}>{step.completedEssayLine}</li>
              ))}
            </ol>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onNextProblem}
                className="hus-btn hus-btn-primary min-h-[40px] px-4 text-xs"
              >
                <span>Sang bài tiếp theo</span>
                <ArrowRightIcon width={14} height={14} />
              </button>
              <button
                type="button"
                onClick={resetProblem}
                className="hus-btn hus-btn-secondary min-h-[40px] px-4 text-xs"
              >
                <RotateCcwIcon width={13} height={13} />
                Làm lại không gợi ý
              </button>
            </div>
          </div>
        ) : null}
        </div>
      </div>
    </div>
  );
}
