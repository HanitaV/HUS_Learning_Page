import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import {
  checkAnswerAgainstFinal,
  DIFFICULTY_META,
  DIFFICULTY_ORDER,
  extractNumericTargets,
  filterPracticeExercises,
  type AnswerCheckResult,
} from '../../core/chemistry/practice-bank';
import type {
  Che1080BankExercise,
  Che1080Difficulty,
} from '../../domain/che1080-bank';
import { Badge, type BadgeTone } from '../../components/ui/Badge';
import {
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RotateCcwIcon,
  SearchIcon,
} from '../../components/ui/Icons';

const LazyMarkdown = lazy(() => import('../../components/learning/Markdown'));

const SOLVED_STORAGE_KEY = 'hus-che1080-practice-solved:v1';
const PAGE_SIZE = 20;

export const DIFFICULTY_BADGE_TONE: Readonly<Record<Che1080Difficulty, BadgeTone>> = {
  basic: 'success',
  standard: 'accent',
  advanced: 'warning',
};

export function loadSolvedExerciseIds(): ReadonlySet<string> {
  try {
    const raw = window.localStorage.getItem(SOLVED_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((item): item is string => typeof item === 'string'));
  } catch {
    return new Set();
  }
}

export function saveSolvedExerciseIds(ids: ReadonlySet<string>): void {
  try {
    window.localStorage.setItem(SOLVED_STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    // Ignore storage errors in restricted or private browsing contexts.
  }
}

export interface Che1080ExercisePracticeCardProps {
  readonly exercise: Che1080BankExercise;
  readonly isSolved: boolean;
  readonly onToggleSolved: (id: string) => void;
  readonly onOpenVisualTool?:
    | ((hint: 'mo-diagram' | 'vb-hybridization' | 'thermo-diagram') => void)
    | undefined;
}

export function Che1080ExercisePracticeCard({
  exercise,
  isSolved,
  onToggleSolved,
  onOpenVisualTool,
}: Che1080ExercisePracticeCardProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [numericInput, setNumericInput] = useState('');
  const [checkResult, setCheckResult] = useState<AnswerCheckResult | null>(null);

  useEffect(() => {
    setRevealedCount(0);
    setNumericInput('');
    setCheckResult(null);
  }, [exercise.id]);

  const totalSteps = exercise.solutionSteps.length;
  const hasNumericTarget = useMemo(
    () => extractNumericTargets(exercise.finalAnswer).length > 0,
    [exercise.finalAnswer],
  );
  const difficultyMeta = DIFFICULTY_META[exercise.difficulty];
  const allStepsRevealed = revealedCount >= totalSteps;

  const handleCheckNumeric = (event: React.FormEvent) => {
    event.preventDefault();
    setCheckResult(checkAnswerAgainstFinal(numericInput, exercise.finalAnswer));
  };

  return (
    <article
      aria-label={`Bài tập ${exercise.code}`}
      className="hus-card-surface rounded-[var(--radius-xl)] border border-border bg-surface p-4 sm:p-5"
    >
      {/* Header metadata */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-3">
        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge tone="neutral" mono>
              {exercise.code}
            </Badge>
            <Badge tone={DIFFICULTY_BADGE_TONE[exercise.difficulty]}>
              {difficultyMeta.label}
            </Badge>
            {exercise.isRecent ? (
              <Badge tone="warning">★ Đề từ 2020</Badge>
            ) : null}
            {isSolved ? (
              <Badge tone="success">Đã làm</Badge>
            ) : null}
          </div>
          <p className="text-xs text-ink-muted">
            Chương {exercise.chapterNumber}: {exercise.chapterTitle}
            {exercise.formTitle ? ` · ${exercise.formTitle}` : ''}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {exercise.source ? (
            <span className="font-mono text-xs tabular-nums text-ink-muted">
              {exercise.source}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => onToggleSolved(exercise.id)}
            aria-pressed={isSolved}
            className={`min-h-[40px] rounded-[var(--radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
              isSolved
                ? 'border-success/40 bg-success-subtle text-success'
                : 'border-border bg-canvas text-ink-secondary hover:border-border-strong hover:text-ink'
            }`}
          >
            {isSolved ? '✓ Đã hoàn thành' : 'Đánh dấu đã làm'}
          </button>
        </div>
      </div>

      {/* Prompt */}
      <div className="mt-4 text-sm leading-relaxed text-ink">
        <Suspense fallback={<p className="whitespace-pre-line">{exercise.prompt}</p>}>
          <LazyMarkdown>{exercise.prompt}</LazyMarkdown>
        </Suspense>
      </div>

      {/* Optional note (\ghichu) */}
      {exercise.note ? (
        <div className="mt-3 rounded-[var(--radius-md)] border border-border bg-surface-subtle px-3.5 py-2.5 text-xs leading-relaxed text-ink-secondary">
          <span className="font-semibold text-ink">Lưu ý: </span>
          <Suspense fallback={<span>{exercise.note}</span>}>
            <LazyMarkdown inline>{exercise.note}</LazyMarkdown>
          </Suspense>
        </div>
      ) : null}

      {/* Visual tool shortcut */}
      {exercise.visualHint !== 'none' && onOpenVisualTool ? (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => {
              if (exercise.visualHint !== 'none') {
                onOpenVisualTool(exercise.visualHint);
              }
            }}
            className="hus-btn hus-btn-secondary min-h-[40px] px-3.5 text-xs text-accent"
          >
            <span>Mở bảng vẽ trực quan tương ứng</span>
            <ArrowRightIcon width={14} height={14} />
          </button>
        </div>
      ) : null}

      {/* Quick self-check numeric input */}
      <div className="mt-4 rounded-[var(--radius-lg)] border border-border bg-canvas p-3.5">
        {hasNumericTarget ? (
          <form onSubmit={handleCheckNumeric} className="space-y-2.5">
            <label
              htmlFor={`che1080-check-${exercise.id}`}
              className="block text-xs font-semibold text-ink"
            >
              Tự kiểm tra đáp số (nhập giá trị số chính)
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id={`che1080-check-${exercise.id}`}
                type="text"
                inputMode="decimal"
                value={numericInput}
                onChange={e => setNumericInput(e.target.value)}
                placeholder="Ví dụ: 617,5 hoặc 1,6e-19"
                className="min-h-[40px] flex-1 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-1.5 font-mono text-sm tabular-nums text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="hus-btn hus-btn-primary min-h-[40px] shrink-0 px-4 text-xs"
              >
                Kiểm tra đáp số
              </button>
            </div>
            {checkResult ? (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-start gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-xs leading-relaxed ${
                  checkResult.ok
                    ? 'border-success/35 bg-success-subtle text-success'
                    : 'border-danger/35 bg-danger-subtle text-danger'
                }`}
              >
                {checkResult.ok ? (
                  <CheckCircleIcon width={15} height={15} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircleIcon width={15} height={15} className="mt-0.5 shrink-0" />
                )}
                <span>{checkResult.message}</span>
              </div>
            ) : null}
          </form>
        ) : (
          <p className="text-xs leading-relaxed text-ink-secondary">
            Bài tự luận định tính hoặc thiết lập biểu thức — hãy tự viết lời giải ra giấy rồi mở từng bước hướng dẫn bên dưới để đối chiếu.
          </p>
        )}
      </div>

      {/* Step-by-step guided reveal */}
      <div className="mt-4 space-y-3 border-t border-border pt-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-display text-base font-medium text-ink">
            Hướng dẫn giải từng bước
            <span className="ml-2 font-mono text-xs tabular-nums text-ink-muted">
              ({revealedCount}/{totalSteps})
            </span>
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {!allStepsRevealed ? (
              <>
                <button
                  type="button"
                  onClick={() => setRevealedCount(prev => Math.min(totalSteps, prev + 1))}
                  className="hus-btn hus-btn-primary min-h-[40px] px-3.5 text-xs"
                >
                  {revealedCount === 0
                    ? `Hiện bước 1/${totalSteps}`
                    : 'Hiện bước tiếp theo'}
                </button>
                <button
                  type="button"
                  onClick={() => setRevealedCount(totalSteps)}
                  className="hus-btn hus-btn-secondary min-h-[40px] px-3.5 text-xs"
                >
                  Hiện toàn bộ hướng giải
                </button>
              </>
            ) : null}
            {revealedCount > 0 ? (
              <button
                type="button"
                onClick={() => setRevealedCount(0)}
                className="hus-btn hus-btn-ghost min-h-[40px] px-3 text-xs"
              >
                <RotateCcwIcon width={13} height={13} />
                <span>Ẩn bớt</span>
              </button>
            ) : null}
          </div>
        </div>

        {revealedCount > 0 ? (
          <ol className="space-y-2.5">
            {exercise.solutionSteps.slice(0, revealedCount).map((step, index) => (
              <li
                key={`${exercise.id}-step-${index}`}
                className="rounded-[var(--radius-md)] border border-border bg-surface-subtle/70 p-3 text-sm leading-relaxed text-ink"
              >
                <div className="mb-1 font-mono text-xs font-semibold tabular-nums text-accent">
                  Bước {index + 1}
                </div>
                <Suspense fallback={<p>{step}</p>}>
                  <LazyMarkdown>{step}</LazyMarkdown>
                </Suspense>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-xs text-ink-muted">
            Nhấn &ldquo;Hiện bước 1/{totalSteps}&rdquo; khi bạn cần gợi ý trình bày từng ý theo chuẩn thang điểm CHE1080.
          </p>
        )}

        {allStepsRevealed && exercise.finalAnswer ? (
          <div className="rounded-[var(--radius-lg)] border border-success/40 bg-success-subtle/35 p-3.5 text-sm text-ink">
            <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-success">
              <CheckCircleIcon width={15} height={15} />
              <span>Đáp số chuẩn</span>
            </div>
            <Suspense fallback={<p>{exercise.finalAnswer}</p>}>
              <LazyMarkdown>{exercise.finalAnswer}</LazyMarkdown>
            </Suspense>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export interface Che1080PracticeBankProps {
  readonly exercises: readonly Che1080BankExercise[];
  readonly featuredIds: ReadonlySet<string>;
  readonly onOpenVisualTool?:
    | ((hint: 'mo-diagram' | 'vb-hybridization' | 'thermo-diagram') => void)
    | undefined;
}

export function Che1080PracticeBank({
  exercises,
  featuredIds,
  onOpenVisualTool,
}: Che1080PracticeBankProps) {
  const [onlyExtra, setOnlyExtra] = useState(true);
  const [query, setQuery] = useState('');
  const [chapterFilter, setChapterFilter] = useState<number | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Che1080Difficulty | 'all'>('all');
  const [onlyRecent, setOnlyRecent] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(PAGE_SIZE);
  const [solvedIds, setSolvedIds] = useState<ReadonlySet<string>>(() => loadSolvedExerciseIds());

  const chapters = useMemo(() => {
    const map = new Map<number, string>();
    for (const ex of exercises) {
      if (!map.has(ex.chapterNumber)) {
        map.set(ex.chapterNumber, ex.chapterTitle);
      }
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, [exercises]);

  const filteredExercises = useMemo(
    () =>
      filterPracticeExercises(exercises, {
        query,
        chapterNumber: chapterFilter,
        difficulty: difficultyFilter,
        onlyRecent,
        ...(onlyExtra ? { excludeIds: featuredIds } : {}),
      }),
    [exercises, query, chapterFilter, difficultyFilter, onlyRecent, onlyExtra, featuredIds],
  );

  const [selectedId, setSelectedId] = useState<string>(() => filteredExercises[0]?.id ?? '');

  useEffect(() => {
    setVisibleLimit(PAGE_SIZE);
  }, [query, chapterFilter, difficultyFilter, onlyRecent, onlyExtra]);

  useEffect(() => {
    if (filteredExercises.length === 0) return;
    if (!filteredExercises.some(ex => ex.id === selectedId)) {
      setSelectedId(filteredExercises[0]!.id);
    }
  }, [filteredExercises, selectedId]);

  const visibleExercises = useMemo(
    () => filteredExercises.slice(0, visibleLimit),
    [filteredExercises, visibleLimit],
  );

  const selectedExercise = useMemo(
    () => filteredExercises.find(ex => ex.id === selectedId) ?? filteredExercises[0] ?? null,
    [filteredExercises, selectedId],
  );

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

  const solvedInFilteredCount = useMemo(
    () => filteredExercises.filter(ex => solvedIds.has(ex.id)).length,
    [filteredExercises, solvedIds],
  );

  return (
    <div className="mt-5 space-y-4">
      {/* Header & scope toggle */}
      <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-canvas p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="font-display text-lg font-medium text-ink">
            Kho luyện tập CHE1080
          </h4>
          <p className="mt-0.5 text-xs text-ink-secondary">
            Hiển thị{' '}
            <span className="font-mono font-semibold tabular-nums text-ink">
              {filteredExercises.length}
            </span>{' '}
            bài phù hợp · Đã hoàn thành{' '}
            <span className="font-mono font-semibold tabular-nums text-success">
              {solvedInFilteredCount}/{filteredExercises.length}
            </span>
          </p>
        </div>

        <div
          className="inline-flex rounded-[var(--radius-md)] border border-border bg-surface-subtle p-0.5"
          role="group"
          aria-label="Phạm vi bài tập hiển thị"
        >
          <button
            type="button"
            onClick={() => setOnlyExtra(true)}
            aria-pressed={onlyExtra}
            className={`min-h-[40px] whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-medium transition-colors ${
              onlyExtra ? 'bg-surface text-accent shadow-xs' : 'text-ink-muted hover:text-ink'
            }`}
          >
            Chỉ hiện bài luyện thêm
          </button>
          <button
            type="button"
            onClick={() => setOnlyExtra(false)}
            aria-pressed={!onlyExtra}
            className={`min-h-[40px] whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-medium transition-colors ${
              !onlyExtra ? 'bg-surface text-accent shadow-xs' : 'text-ink-muted hover:text-ink'
            }`}
          >
            Tất cả {exercises.length} bài
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="space-y-3 rounded-[var(--radius-lg)] border border-border bg-canvas p-3.5">
        <div className="grid gap-3 md:grid-cols-12">
          {/* Vietnamese search */}
          <div className="relative md:col-span-6">
            <label htmlFor="che1080-bank-search" className="sr-only">
              Tìm kiếm bài tập CHE1080
            </label>
            <SearchIcon
              width={16}
              height={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
            />
            <input
              id="che1080-bank-search"
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Tìm mã đề (ĐT25 C1), công thức, từ khóa..."
              className="min-h-[40px] w-full rounded-[var(--radius-md)] border border-border bg-surface py-1.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
            />
          </div>

          {/* Chapter selector */}
          <div className="md:col-span-3">
            <label htmlFor="che1080-bank-chapter" className="sr-only">
              Lọc theo chương
            </label>
            <select
              id="che1080-bank-chapter"
              value={chapterFilter}
              onChange={e =>
                setChapterFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
              }
              className="min-h-[40px] w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 py-1.5 text-sm text-ink focus:border-accent focus:outline-none"
            >
              <option value="all">Tất cả chương</option>
              {chapters.map(([num, title]) => (
                <option key={num} value={num}>
                  Chương {num}: {title}
                </option>
              ))}
            </select>
          </div>

          {/* Recent toggle */}
          <div className="md:col-span-3">
            <button
              type="button"
              onClick={() => setOnlyRecent(prev => !prev)}
              aria-pressed={onlyRecent}
              className={`min-h-[40px] w-full rounded-[var(--radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                onlyRecent
                  ? 'border-warning/50 bg-warning-subtle text-warning'
                  : 'border-border bg-surface text-ink-secondary hover:border-border-strong hover:text-ink'
              }`}
            >
              Chỉ đề từ 2020 (★)
            </button>
          </div>
        </div>

        {/* Difficulty pills */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Lọc theo cấp độ khó">
          <button
            type="button"
            onClick={() => setDifficultyFilter('all')}
            aria-pressed={difficultyFilter === 'all'}
            className={`min-h-[40px] rounded-[var(--radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
              difficultyFilter === 'all'
                ? 'border-accent bg-accent-subtle text-accent-ink'
                : 'border-border bg-surface text-ink-secondary hover:border-border-strong hover:text-ink'
            }`}
          >
            Tất cả
          </button>
          {DIFFICULTY_ORDER.map(level => {
            const active = difficultyFilter === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setDifficultyFilter(level)}
                aria-pressed={active}
                className={`min-h-[40px] rounded-[var(--radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? 'border-accent bg-accent-subtle text-accent-ink'
                    : 'border-border bg-surface text-ink-secondary hover:border-border-strong hover:text-ink'
                }`}
              >
                {DIFFICULTY_META[level].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty state */}
      {filteredExercises.length === 0 ? (
        <div className="rounded-[var(--radius-xl)] border border-border bg-canvas p-8 text-center">
          <p className="font-display text-base font-medium text-ink">
            Không tìm thấy bài tập phù hợp
          </p>
          <p className="mt-1 text-xs text-ink-secondary">
            Hãy thử xóa bớt bộ lọc hoặc chuyển sang chế độ &ldquo;Tất cả {exercises.length} bài&rdquo;.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Exercise List */}
          <div className="space-y-2.5 lg:col-span-5">
            <ul className="space-y-2">
              {visibleExercises.map(exercise => {
                const isSelected = selectedExercise?.id === exercise.id;
                const isSolved = solvedIds.has(exercise.id);
                return (
                  <li key={exercise.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(exercise.id)}
                      aria-pressed={isSelected}
                      className={`w-full rounded-[var(--radius-lg)] border p-3 text-left transition-colors ${
                        isSelected
                          ? 'border-accent bg-accent-subtle/60'
                          : 'border-border bg-canvas hover:border-border-strong hover:bg-surface-subtle/50'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-xs font-semibold tabular-nums text-ink">
                            {exercise.code}
                          </span>
                          <Badge tone={DIFFICULTY_BADGE_TONE[exercise.difficulty]}>
                            {DIFFICULTY_META[exercise.difficulty].label}
                          </Badge>
                          {exercise.isRecent ? (
                            <span className="text-xs text-warning" title="Đề từ 2020 trở lại đây">
                              ★
                            </span>
                          ) : null}
                        </div>
                        {isSolved ? (
                          <span className="text-xs font-medium text-success">✓ Đã làm</span>
                        ) : null}
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-secondary">
                        {exercise.prompt}
                      </p>
                      <p className="mt-1 text-xs text-ink-muted">
                        Chương {exercise.chapterNumber}
                        {exercise.source ? ` · ${exercise.source}` : ''}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>

            {visibleLimit < filteredExercises.length ? (
              <button
                type="button"
                onClick={() => setVisibleLimit(prev => prev + PAGE_SIZE)}
                className="hus-btn hus-btn-secondary min-h-[40px] w-full text-xs"
              >
                Xem thêm ({filteredExercises.length - visibleLimit} bài còn lại)
              </button>
            ) : null}
          </div>

          {/* Inline / Side Practice Card */}
          <div className="order-first lg:order-last lg:col-span-7">
            {selectedExercise ? (
              <div className="lg:sticky lg:top-24">
                <Che1080ExercisePracticeCard
                  exercise={selectedExercise}
                  isSolved={solvedIds.has(selectedExercise.id)}
                  onToggleSolved={handleToggleSolved}
                  onOpenVisualTool={onOpenVisualTool}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
