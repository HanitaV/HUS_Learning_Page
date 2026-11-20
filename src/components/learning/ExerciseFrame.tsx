import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { Badge } from '../ui/Badge';
import { AlertCircleIcon, CheckCircleIcon, RotateCcwIcon } from '../ui/Icons';

export type ExercisePresentationKind =
  | 'multiple-choice'
  | 'multiple-answer'
  | 'numerical'
  | 'short-answer'
  | 'guided-steps';

export interface ExerciseChoice {
  readonly id: string;
  readonly label: ReactNode;
}

export interface ExerciseFeedback {
  readonly status: 'correct' | 'incorrect' | 'partial' | 'info';
  readonly message: string;
}

export interface ExerciseFrameProps {
  readonly title: string;
  readonly kind: ExercisePresentationKind;
  readonly prompt: ReactNode;
  readonly choices?: readonly ExerciseChoice[];
  readonly unit?: string;
  readonly hints?: readonly string[];
  readonly solution?: ReactNode;
  readonly feedback?: ExerciseFeedback | null;
  readonly completed?: boolean;
  readonly attemptSummary?: string | undefined;
  readonly onReset?: () => void;
  /** Answer evaluation must live in core logic; UI only dispatches the student's response. */
  readonly onSubmit?: (answer: string | readonly string[]) => void;
}

const KIND_LABEL: Record<ExercisePresentationKind, string> = {
  'multiple-choice': 'Trắc nghiệm',
  'multiple-answer': 'Chọn nhiều đáp án',
  numerical: 'Tính toán số',
  'short-answer': 'Trả lời ngắn',
  'guided-steps': 'Giải theo từng bước',
};

const FEEDBACK_CLASSES: Record<ExerciseFeedback['status'], string> = {
  correct: 'border-success/35 bg-success-subtle text-success',
  incorrect: 'border-danger/35 bg-danger-subtle text-danger',
  partial: 'border-warning/35 bg-warning-subtle text-warning',
  info: 'border-accent/25 bg-accent-subtle text-accent-ink',
};

export function ExerciseFrame({
  title,
  kind,
  prompt,
  choices = [],
  unit,
  hints = [],
  solution,
  feedback = null,
  completed = false,
  attemptSummary,
  onReset,
  onSubmit,
}: ExerciseFrameProps) {
  const fieldId = useId();
  const [answer, setAnswer] = useState('');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [revealedHints, setRevealedHints] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const hasAnswer = kind === 'multiple-answer' ? selected.length > 0 : answer.trim().length > 0;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!onSubmit || !hasAnswer) return;
    if (kind === 'multiple-answer') {
      onSubmit(selected);
    } else {
      onSubmit(answer.trim());
    }
  };

  const handleRetry = () => {
    setAnswer('');
    setSelected([]);
    setShowSolution(false);
    onReset?.();
  };

  return (
    <section
      aria-label={title}
      className="rounded-[var(--radius-xl)] border border-border bg-canvas/80 p-5 sm:p-6"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="!my-0 font-display text-lg font-medium text-ink">{title}</h3>
          <Badge tone="neutral">{KIND_LABEL[kind]}</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {attemptSummary ? (
            <span className="text-xs text-ink-muted tabular-nums">{attemptSummary}</span>
          ) : null}
          {completed ? <Badge tone="success">Đã hoàn thành</Badge> : null}
        </div>
      </div>

      {/* Question area */}
      <div className="mt-4 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3.5 text-sm leading-relaxed text-ink [&>p:first-child]:!mt-0 [&>p:last-child]:!mb-0">
        {prompt}
      </div>

      {/* Answer area */}
      {onSubmit ? (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {(kind === 'multiple-choice' || kind === 'multiple-answer') && choices.length > 0 ? (
            <fieldset className="space-y-2 border-0 p-0">
              <legend className="mb-2 text-xs font-medium text-ink-muted">
                {kind === 'multiple-answer' ? 'Chọn tất cả đáp án đúng' : 'Chọn một đáp án'}
              </legend>
              {choices.map(choice => {
                const isChecked =
                  kind === 'multiple-answer'
                    ? selected.includes(choice.id)
                    : answer === choice.id;
                return (
                  <label
                    key={choice.id}
                    className={`flex min-h-[44px] cursor-pointer items-start gap-3 rounded-[var(--radius-md)] border px-3.5 py-2.5 text-sm transition-colors duration-200 ${
                      isChecked
                        ? 'border-accent bg-accent-subtle font-medium text-accent-ink'
                        : 'border-border bg-surface text-ink hover:border-border-strong hover:bg-surface-subtle/50'
                    }`}
                  >
                    <input
                      type={kind === 'multiple-answer' ? 'checkbox' : 'radio'}
                      name={fieldId}
                      value={choice.id}
                      checked={isChecked}
                      onChange={event => {
                        if (feedback) onReset?.();
                        if (kind === 'multiple-answer') {
                          setSelected(prev =>
                            event.target.checked
                              ? [...prev, choice.id]
                              : prev.filter(id => id !== choice.id),
                          );
                        } else {
                          setAnswer(event.target.value);
                        }
                      }}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--hus-accent)]"
                    />
                    <span className="min-w-0 flex-1 leading-relaxed">{choice.label}</span>
                  </label>
                );
              })}
            </fieldset>
          ) : (
            <div className="space-y-2">
              <label htmlFor={fieldId} className="block text-xs font-medium text-ink-muted">
                Câu trả lời của bạn
              </label>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  id={fieldId}
                  type="text"
                  inputMode={kind === 'numerical' ? 'decimal' : 'text'}
                  value={answer}
                  onChange={event => {
                    if (feedback) onReset?.();
                    setAnswer(event.target.value);
                  }}
                  placeholder={
                    kind === 'numerical' ? 'Nhập giá trị số…' : 'Nhập câu trả lời của bạn…'
                  }
                  className="min-h-[44px] min-w-[12rem] flex-1 rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                />
                {unit ? (
                  <span className="font-mono text-xs text-ink-muted" aria-label={`Đơn vị ${unit}`}>
                    {unit}
                  </span>
                ) : null}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <button type="submit" disabled={!hasAnswer} className="hus-btn hus-btn-primary">
              Kiểm tra đáp án
            </button>

            {feedback ? (
              <button type="button" onClick={handleRetry} className="hus-btn hus-btn-secondary">
                <RotateCcwIcon width={14} height={14} />
                Làm lại
              </button>
            ) : null}

            {hints.length > 0 && revealedHints < hints.length ? (
              <button
                type="button"
                onClick={() => setRevealedHints(count => Math.min(hints.length, count + 1))}
                className="hus-btn hus-btn-secondary"
              >
                Xem gợi ý ({revealedHints}/{hints.length})
              </button>
            ) : null}

            {solution ? (
              <button
                type="button"
                onClick={() => setShowSolution(open => !open)}
                aria-expanded={showSolution}
                className="hus-btn hus-btn-secondary"
              >
                {showSolution ? 'Ẩn lời giải' : 'Xem lời giải'}
              </button>
            ) : null}
          </div>
        </form>
      ) : (
        <p className="mt-4 rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-2.5 text-xs text-ink-muted">
          Bộ chấm bài tự động cho dạng bài tập này chưa được kết nối với tầng xử lý cốt lõi.
        </p>
      )}

      {/* Feedback banner */}
      {feedback ? (
        <div
          role="status"
          aria-live="polite"
          className={`mt-4 flex items-start gap-2.5 rounded-[var(--radius-md)] border px-4 py-3 text-sm ${FEEDBACK_CLASSES[feedback.status]}`}
        >
          {feedback.status === 'correct' ? (
            <CheckCircleIcon width={17} height={17} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircleIcon width={17} height={17} className="mt-0.5 shrink-0" />
          )}
          <span>{feedback.message}</span>
        </div>
      ) : null}

      {revealedHints > 0 ? (
        <div className="mt-4 space-y-2 border-t border-border pt-3">
          <p className="!my-0 text-xs font-semibold text-ink-muted">Gợi ý</p>
          <ol className="!my-1 list-decimal space-y-1.5 pl-5 text-sm text-ink-secondary">
            {hints.slice(0, revealedHints).map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ol>
        </div>
      ) : null}

      {showSolution && solution ? (
        <div className="mt-4 rounded-[var(--radius-md)] border border-border bg-surface p-4">
          <p className="!my-0 text-xs font-semibold text-ink-muted">Giải thích &amp; lời giải</p>
          <div className="mt-2 text-sm leading-relaxed text-ink-secondary [&>p:first-child]:!mt-0 [&>p:last-child]:!mb-0">
            {solution}
          </div>
        </div>
      ) : null}
    </section>
  );
}
