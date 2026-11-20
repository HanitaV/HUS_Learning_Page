import { useState } from 'react';
import type { WrittenReasoningStep, WrittenStepDraft } from '../../domain/semi-essay';
import { evaluateWrittenReasoningReview } from '../../core/learning/semi-essay';
import Markdown from './Markdown';

export function WrittenReasoningStepView({ step, draft, update, onReviewed }: {
  readonly step: WrittenReasoningStep;
  readonly draft: WrittenStepDraft;
  readonly update: (changes: Partial<WrittenStepDraft>) => void;
  readonly onReviewed: () => void;
}) {
  const [hintCount, setHintCount] = useState(0);
  const review = evaluateWrittenReasoningReview(step, draft);
  const hints = [...(step.hint ? [step.hint] : []), ...(step.hints ?? [])];
  const stage = review.complete ? 4 : draft.revision.trim() ? 3 : draft.modelRevealed ? 2 : draft.response.trim() ? 1 : 0;
  const stages = ['Viết nháp', 'Đối chiếu', 'Sửa bài', 'Tự rà soát'];
  return (
    <div className="written-practice space-y-4">
      <div aria-label="Các giai đoạn tự viết và đối chiếu">
        <ol className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs sm:grid-cols-4">
          {stages.map((label, index) => (
            <li key={label} aria-current={Math.min(stage, 3) === index ? 'step' : undefined} className={index < stage ? 'font-semibold text-accent' : 'text-ink-muted'}>{label}</li>
          ))}
        </ol>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-subtle" aria-hidden="true"><div className="written-practice-progress h-full bg-accent-solid" style={{ width: `${stage * 25}%` }} /></div>
        <span className="sr-only">Đã thực hiện {stage} trên 4 giai đoạn</span>
      </div>
      <p className="text-sm text-ink-secondary">Viết cách lập luận của bạn trước khi xem lời giải tham khảo. Nội dung viết không được chấm tự động.</p>
      <div className="space-y-2">
        <label htmlFor={`${step.id}-response`} className="block text-sm font-semibold text-ink">Lập luận của bạn</label>
        <textarea id={`${step.id}-response`} value={draft.response} onChange={event => update({ response: event.target.value })} rows={5} maxLength={20000} className="written-practice-input" />
      </div>
      {hints.length ? <div className="space-y-2">
        <button type="button" className="hus-btn hus-btn-secondary" disabled={hintCount >= hints.length} onClick={() => setHintCount(count => count + 1)}>Xem gợi ý tiếp theo ({hintCount}/{hints.length})</button>
        {hints.slice(0, hintCount).map((hint, index) => <div key={index} className="written-practice-reveal rounded-[var(--radius-md)] border border-border bg-surface-subtle p-3 text-sm text-ink-secondary"><Markdown>{hint}</Markdown></div>)}
      </div> : null}
      {!draft.modelRevealed ? <button type="button" disabled={!draft.response.trim()} onClick={() => update({ modelRevealed: true })} className="hus-btn hus-btn-primary">Xem lời giải tham khảo</button> : <div className="written-practice-reveal space-y-4 border-t border-border pt-4">
        <section aria-labelledby={`${step.id}-reference`} className="rounded-[var(--radius-md)] border border-border bg-surface-subtle p-4">
          <h3 id={`${step.id}-reference`} className="font-semibold text-ink">Lời giải tham khảo</h3>
          <div className="mt-2 text-sm leading-relaxed text-ink-secondary"><Markdown>{step.modelAnswer}</Markdown></div>
        </section>
        <fieldset data-written-review className="space-y-2 border-0 p-0">
          <legend className="mb-2 text-sm font-semibold text-ink">Tự đối chiếu bài làm</legend>
          {step.rubric.map(criterion => <label key={criterion.id} className="flex min-h-[44px] items-start gap-3 text-sm text-ink"><input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[var(--hus-accent)]" checked={draft.reviewedCriterionIds.includes(criterion.id)} onChange={event => update({ reviewedCriterionIds: event.target.checked ? [...draft.reviewedCriterionIds, criterion.id] : draft.reviewedCriterionIds.filter(id => id !== criterion.id) })} /><span>{criterion.prompt}</span></label>)}
        </fieldset>
        <div className="space-y-2"><label htmlFor={`${step.id}-revision`} className="block text-sm font-semibold text-ink">Bản sửa của bạn</label><textarea id={`${step.id}-revision`} value={draft.revision} onChange={event => update({ revision: event.target.value })} rows={5} maxLength={20000} className="written-practice-input" /></div>
        <button type="button" disabled={!review.readyToComplete || review.complete} onClick={onReviewed} className="hus-btn hus-btn-primary">Hoàn tất tự đối chiếu</button>
        {review.complete ? <p role="status" className="text-sm font-semibold text-success">Đã tự đối chiếu</p> : null}
      </div>}
    </div>
  );
}

