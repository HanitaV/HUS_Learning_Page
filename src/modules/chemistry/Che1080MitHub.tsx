import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import type { SubjectToolProps } from '../../contracts/subject-module';
import type { Che1080Progress, MitResource, MitResourceKind } from '../../domain/mit-che1080';
import { CHE1080_TOPICS, lessonPath } from '../../content/mit/che1080-topics';
import { MIT_CHE1080_RESOURCES } from '../../content/mit/che1080-resources';
import {
  CHE1080_MIT_STORAGE_KEY,
  filterResources,
  parseProgress,
  resolveTopicRefs,
  resourceDoneId,
  searchHub,
  toggleDone,
  topicDoneId,
  topicProgress,
} from '../../core/chemistry/mit-mapping';
import { Badge } from '../../components/ui/Badge';
import { ExternalLinkIcon } from '../../components/ui/Icons';
import { Che1080QuickCalc } from './Che1080QuickCalc';

const TYPE_LABEL: Record<MitResourceKind, string> = {
  video: 'Video (YouTube chính thức của MIT OCW)',
  'lecture-notes': 'Ghi chú bài giảng (PDF)',
  exercise: 'Bài tập (PDF)',
  solution: 'Lời giải (PDF)',
};
const LEVEL_LABEL = { foundation: 'Nền tảng', standard: 'Tiêu chuẩn', advanced: 'Nâng cao' } as const;
const COURSE_LABEL: Record<string, string> = {
  '5.111sc': 'MIT 5.111SC',
  '5.112': 'MIT 5.112',
  '5.60': 'MIT 5.60',
};

function storage(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null;
  } catch {
    return null;
  }
}
function load(): Che1080Progress {
  try {
    return parseProgress(storage()?.getItem(CHE1080_MIT_STORAGE_KEY) ?? null);
  } catch {
    return parseProgress(null);
  }
}
function save(p: Che1080Progress): boolean {
  try {
    storage()?.setItem(CHE1080_MIT_STORAGE_KEY, JSON.stringify(p));
    return storage() !== null;
  } catch {
    return false;
  }
}

function ResourceRow({
  r,
  done,
  onToggle,
  onOpen,
}: {
  readonly r: MitResource;
  readonly done: boolean;
  readonly onToggle: () => void;
  readonly onOpen: () => void;
}) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const hasInlineVideo = r.type === 'video' && Boolean(r.youtubeId);
  return (
    <li className="space-y-3 rounded-[var(--radius-lg)] border border-border bg-canvas/60 p-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge tone="accent" mono>{COURSE_LABEL[r.courseId]} · L{r.lectureNumber}</Badge>
            <Badge tone="neutral">{TYPE_LABEL[r.type]}</Badge>
          </div>
          <p className="text-sm font-medium text-ink">{r.title}</p>
          <p className="text-xs text-ink-muted">
            {r.localPath ? 'Có bản trong kho tài liệu cục bộ của dự án (không phát hành trực tuyến); ' : ''}
            mở trên trang MIT OCW chính thức. CC BY-NC-SA 4.0.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <label className="flex min-h-[40px] items-center gap-2 text-xs text-ink">
            <input type="checkbox" checked={done} onChange={onToggle} className="h-4 w-4" />
            Đã học
          </label>
          {hasInlineVideo ? (
            <button
              type="button"
              aria-expanded={playerOpen}
              onClick={() => {
                setPlayerOpen(prev => !prev);
                onOpen();
              }}
              className={`hus-btn text-xs ${playerOpen ? 'hus-btn-secondary' : 'hus-btn-primary'}`}
            >
              {playerOpen ? 'Đóng video' : 'Xem video tại đây'}
            </button>
          ) : null}
          <a href={r.ocwUrl} target="_blank" rel="noopener noreferrer" onClick={onOpen} className="hus-btn hus-btn-secondary text-xs !no-underline">
            <span>Mở trên MIT OCW</span>
            <ExternalLinkIcon width={13} height={13} />
          </a>
        </div>
      </div>

      {playerOpen && hasInlineVideo && r.youtubeId ? (
        <div className="space-y-1.5">
          <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-md)] border border-border bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(r.youtubeId)}?rel=0`}
              title={`${r.title} — ${COURSE_LABEL[r.courseId]}`}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-[11px] text-ink-muted">
            Nguồn phát: YouTube / MIT OpenCourseWare (tiếng Anh).
          </p>
        </div>
      ) : null}
    </li>
  );
}

export default function Che1080MitHub({ initialPreset }: SubjectToolProps) {
  const presetNumber = /^topic-(\d{1,2})$/.exec(initialPreset ?? '')?.[1];
  const [topicId, setTopicId] = useState(
    () => CHE1080_TOPICS.find(t => String(t.number) === presetNumber)?.id ?? CHE1080_TOPICS[0]!.id,
  );
  const [view, setView] = useState<'topics' | 'library'>('topics');
  const [progress, setProgress] = useState<Che1080Progress>(load);
  const [storageOk, setStorageOk] = useState(true);
  const [query, setQuery] = useState('');
  const [course, setCourse] = useState('');
  const [kind, setKind] = useState('');

  const topic = CHE1080_TOPICS.find(t => t.id === topicId) ?? CHE1080_TOPICS[0]!;
  const refs = useMemo(() => resolveTopicRefs(topic, MIT_CHE1080_RESOURCES), [topic]);
  const hits = useMemo(() => searchHub(query, CHE1080_TOPICS, MIT_CHE1080_RESOURCES).slice(0, 12), [query]);
  const library = useMemo(
    () =>
      filterResources(MIT_CHE1080_RESOURCES, {
        ...(course ? { courseId: course } : {}),
        ...(kind ? { type: kind as MitResourceKind } : {}),
        query,
      }),
    [course, kind, query],
  );
  const lastResource = progress.lastResourceId
    ? MIT_CHE1080_RESOURCES.find(r => r.id === progress.lastResourceId)
    : undefined;

  const update = (next: Che1080Progress) => {
    setProgress(next);
    setStorageOk(save(next));
  };
  const toggle = (id: string) => update(toggleDone(progress, id));
  const open = (id: string) => update({ ...progress, lastResourceId: id });
  const all = CHE1080_TOPICS.map(t => topicProgress(t, MIT_CHE1080_RESOURCES, progress));
  const totalDone = all.reduce((s, x) => s + x.done, 0);
  const totalAll = all.reduce((s, x) => s + x.total, 0);

  return (
    <section aria-label="CHE1080 và MIT OpenCourseWare" className="hus-card-surface space-y-5 rounded-[var(--radius-xl)] border border-border bg-surface p-4 sm:p-6">
      <header className="space-y-3 border-b border-border pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent" mono>CHE1080</Badge>
          <Badge tone="neutral">11 dạng đề · MIT 5.111SC / 5.112 / 5.60</Badge>
        </div>
        <h3 className="font-display text-xl font-medium text-ink">Lộ trình CHE1080 kết hợp MIT OpenCourseWare</h3>
        <p className="text-sm text-ink-secondary">
          Tần suất xuất hiện lấy từ 6 đề thi phân tích trong tài liệu ôn tập HUS; không phải dự báo đề tương lai. Ước tính khối lượng học: mỗi dạng ~1–2 buổi (tự ước lượng, chưa đo).
        </p>
        <div className="flex items-center gap-3 text-xs">
          <progress className="hus-progress max-w-xs" max={totalAll} value={totalDone} aria-label="Tiến độ CHE1080 + MIT" />
          <span className="font-mono tabular-nums text-ink-muted">{totalDone}/{totalAll} mục</span>
        </div>
        {!storageOk ? <p role="alert" className="text-xs text-ink-muted">Không lưu được tiến độ trên trình duyệt này; tiến độ chỉ giữ trong phiên.</p> : null}
        {lastResource ? (
          <p className="text-xs text-ink-secondary">
            Tiếp tục: <a className="text-accent" href={lastResource.ocwUrl} target="_blank" rel="noopener noreferrer">{lastResource.title}</a>
          </p>
        ) : null}
        <div className="space-y-2">
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Tìm: Gibbs, MO, pH, lecture 13…"
            aria-label="Tìm dạng đề và học liệu MIT"
            className="min-h-[42px] w-full rounded-[var(--radius-md)] border border-border bg-canvas px-3 text-sm text-ink"
          />
          {query.trim() && view === 'topics' ? (
            <ul aria-label="Kết quả tìm kiếm" className="space-y-1 text-sm">
              {hits.length === 0 ? <li className="text-ink-muted">Không có kết quả.</li> : null}
              {hits.map(h => {
                const target = h.kind === 'topic' ? h.id : h.topicId;
                return (
                  <li key={`${h.kind}-${h.id}`}>
                    {target ? (
                      <button type="button" className="text-left text-accent hover:underline" onClick={() => { setTopicId(target); setQuery(''); }}>
                        {h.title}
                      </button>
                    ) : (
                      <span className="text-ink-secondary">{h.title}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="flex gap-2" role="group" aria-label="Chế độ xem">
          {(['topics', 'library'] as const).map(v => (
            <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)}
              className={`min-h-[40px] rounded-[var(--radius-md)] border px-3 text-sm font-medium ${view === v ? 'border-accent bg-accent-subtle text-accent-ink' : 'border-border bg-surface text-ink'}`}>
              {v === 'topics' ? 'Theo dạng đề' : 'Thư viện MIT'}
            </button>
          ))}
        </div>
      </header>

      {view === 'library' ? (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <select aria-label="Khóa MIT" value={course} onChange={e => setCourse(e.target.value)} className="min-h-[40px] rounded-[var(--radius-md)] border border-border bg-canvas px-2 text-sm">
              <option value="">Mọi khóa</option>
              {Object.entries(COURSE_LABEL).map(([id, l]) => <option key={id} value={id}>{l}</option>)}
            </select>
            <select aria-label="Loại tài liệu" value={kind} onChange={e => setKind(e.target.value)} className="min-h-[40px] rounded-[var(--radius-md)] border border-border bg-canvas px-2 text-sm">
              <option value="">Mọi loại</option>
              {Object.entries(TYPE_LABEL).map(([id, l]) => <option key={id} value={id}>{l}</option>)}
            </select>
          </div>
          <p className="text-xs text-ink-muted" role="status">{library.length} tài liệu (hiển thị tối đa 60).</p>
          <ul className="space-y-2">
            {library.slice(0, 60).map(r => (
              <ResourceRow key={r.id} r={r} done={progress.doneIds.includes(resourceDoneId(r.id))} onToggle={() => toggle(resourceDoneId(r.id))} onOpen={() => open(r.id)} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <nav aria-label="11 dạng đề CHE1080">
            <ol className="space-y-1">
              {CHE1080_TOPICS.map((t, i) => {
                const pr = all[i]!;
                return (
                  <li key={t.id}>
                    <button type="button" aria-current={t.id === topic.id ? 'true' : undefined} onClick={() => setTopicId(t.id)}
                      className={`flex min-h-[44px] w-full items-center justify-between gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-left text-sm ${t.id === topic.id ? 'border-accent bg-accent-subtle text-accent-ink' : 'border-transparent text-ink hover:bg-surface-subtle'}`}>
                      <span>Dạng {t.number}. {t.title}</span>
                      <span className="shrink-0 font-mono text-[11px] text-ink-muted">{pr.done}/{pr.total}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <article className="min-w-0 space-y-6" aria-label={`Dạng ${topic.number}`}>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge tone="neutral">{topic.chapterTitle}</Badge>
                <Badge tone="success">Ra thi {topic.examFrequency.appeared}/{topic.examFrequency.of} đề</Badge>
              </div>
              <h4 className="font-display text-lg font-medium text-ink">Dạng {topic.number} – {topic.title}</h4>
              {topic.prerequisiteTopicIds.length > 0 ? (
                <p className="text-xs text-ink-secondary">
                  Nên học trước:{' '}
                  {topic.prerequisiteTopicIds.map(id => {
                    const p = CHE1080_TOPICS.find(t => t.id === id);
                    return p ? (
                      <button key={id} type="button" className="mr-2 text-accent hover:underline" onClick={() => setTopicId(id)}>Dạng {p.number}</button>
                    ) : null;
                  })}
                </p>
              ) : null}
              <label className="flex min-h-[40px] items-center gap-2 text-sm text-ink">
                <input type="checkbox" className="h-4 w-4" checked={progress.doneIds.includes(topicDoneId(topic.id))} onChange={() => toggle(topicDoneId(topic.id))} />
                Đã ôn xong dạng này
              </label>
            </div>

            <section aria-labelledby="sec-hus" className="space-y-2">
              <h5 id="sec-hus" className="heading-section text-base">Bài học và bài tập HUS</h5>
              <ul className="space-y-1 text-sm">
                {topic.lessonIds.map(id => (
                  <li key={id}><Link className="text-accent" to={lessonPath(id)}>Bài học: {id}</Link></li>
                ))}
                {topic.hus.map(h => (
                  <li key={h.to + h.label}><Link className="text-accent" to={h.to}>{h.label}</Link></li>
                ))}
              </ul>
              <p className="text-xs text-ink-muted">Tự kiểm tra dùng các bộ đề đã nhập sẵn từ kho CHE1080; chưa thêm câu hỏi mới.</p>
            </section>

            <section aria-labelledby="sec-mit" className="space-y-3">
              <h5 id="sec-mit" className="heading-section text-base">Học với MIT OpenCourseWare</h5>
              {refs.map(({ ref, resources, missingLectures }) => (
                <div key={ref.courseId} className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge tone="accent" mono>{COURSE_LABEL[ref.courseId]} · bài {ref.lectures.join(', ')}</Badge>
                    <Badge tone={ref.status === 'confirmed' ? 'success' : 'warning'}>{ref.status === 'confirmed' ? 'Đã xác nhận' : 'Gợi ý'}</Badge>
                    <Badge tone="neutral">{LEVEL_LABEL[ref.level]}</Badge>
                  </div>
                  <p className="text-xs text-ink-secondary">{ref.relevanceVi}{ref.note ? ` ${ref.note}` : ''}</p>
                  {missingLectures.length > 0 ? <p role="alert" className="text-xs text-ink-muted">Chưa có học liệu cho bài {missingLectures.join(', ')}.</p> : null}
                  <ul className="space-y-2">
                    {resources.map(r => (
                      <ResourceRow key={r.id} r={r} done={progress.doneIds.includes(resourceDoneId(r.id))} onToggle={() => toggle(resourceDoneId(r.id))} onOpen={() => open(r.id)} />
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <Che1080QuickCalc topicNumber={topic.number} />
          </article>
        </div>
      )}

      <footer className="border-t border-border pt-3 text-xs text-ink-muted">
        Nguồn: MIT OpenCourseWare (5.111SC Prof. Catherine Drennan; 5.112 Profs. Christopher Cummins, Sylvia Ceyer; 5.60 Profs. Keith Nelson, Moungi Bawendi), giấy phép{' '}
        <a className="text-accent" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>. Tệp PDF/video không được sao chép vào trang; liên kết mở trên ocw.mit.edu hoặc YouTube chính thức và cần Internet.
      </footer>
    </section>
  );
}
