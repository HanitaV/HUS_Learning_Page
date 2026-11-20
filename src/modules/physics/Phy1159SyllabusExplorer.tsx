import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import type { SubjectToolProps } from '../../contracts/subject-module';
import type { Phy1159SyllabusProgress } from '../../domain/phy1159-syllabus';
import {
  EMPTY_SYLLABUS_PROGRESS,
  filterSyllabusChapters,
  readSyllabusProgress,
  resolveChapterByPreset,
  toggleChapterCompletion,
  writeSyllabusProgress,
} from '../../core/physics/syllabus-ocw';
import {
  PHY1159_SHARED_INTERNAL_DOCS,
  PHY1159_SYLLABUS_CHAPTERS,
} from '../../content/courses/phy1159/syllabus-ocw';
import { learningContent } from '../../infrastructure/content/learning';
import { MitVideoCard } from '../../components/learning/MitVideoCard';
import { Badge } from '../../components/ui/Badge';
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
} from '../../components/ui/Icons';
import { SearchInput } from '../../components/ui/SearchInput';

const DOC_KIND_LABEL = {
  'syllabus-pdf': 'Đề cương PDF',
  'slide-pdf': 'Slide bài giảng',
  'exercise-pdf': 'Bài tập PDF',
} as const;

function getSafeStorage(): Storage | null {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      return window.localStorage;
    }
  } catch {
    return null;
  }
  return null;
}

export default function Phy1159SyllabusExplorer({ initialPreset }: SubjectToolProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>(
    () => resolveChapterByPreset(PHY1159_SYLLABUS_CHAPTERS, initialPreset)?.id ?? 'ch-1',
  );
  const [storageWarning, setStorageWarning] = useState(false);
  const [progress, setProgress] = useState<Phy1159SyllabusProgress>(() => {
    const result = readSyllabusProgress(getSafeStorage());
    return result.progress;
  });

  useEffect(() => {
    const result = readSyllabusProgress(getSafeStorage());
    setProgress(result.progress);
    setStorageWarning(!result.storageAvailable);
  }, []);

  useEffect(() => {
    if (!initialPreset) return;
    const matched = resolveChapterByPreset(PHY1159_SYLLABUS_CHAPTERS, initialPreset);
    if (matched) setSelectedChapterId(matched.id);
  }, [initialPreset]);

  const filteredChapters = useMemo(
    () => filterSyllabusChapters(PHY1159_SYLLABUS_CHAPTERS, searchQuery),
    [searchQuery],
  );

  const activeChapter = useMemo(() => {
    return (
      filteredChapters.find(ch => ch.id === selectedChapterId) ??
      filteredChapters[0] ??
      PHY1159_SYLLABUS_CHAPTERS[0]
    );
  }, [filteredChapters, selectedChapterId]);

  const lessonsById = useMemo(
    () => new Map(learningContent.lessons.map(lesson => [lesson.id, lesson])),
    [],
  );

  const completedCount = progress.completedChapterIds.length;
  const totalChapters = PHY1159_SYLLABUS_CHAPTERS.length;

  const handleToggleChapter = (chapterId: string) => {
    const next = toggleChapterCompletion(progress ?? EMPTY_SYLLABUS_PROGRESS, chapterId);
    setProgress(next);
    const saved = writeSyllabusProgress(getSafeStorage(), next);
    setStorageWarning(!saved);
  };

  if (!activeChapter) return null;

  const isChapterCompleted = progress.completedChapterIds.includes(activeChapter.id);
  const supplementMit = activeChapter.mitResources.filter(r => r.category === 'supplement');
  const furtherMit = activeChapter.mitResources.filter(r => r.category === 'further-reading');
  const webLessons = activeChapter.webLessonIds
    .map(id => lessonsById.get(id))
    .filter((l): l is NonNullable<typeof l> => l !== undefined);

  return (
    <section
      aria-label="Đề cương PHY1159 và tài nguyên MIT OpenCourseWare"
      className="hus-card-surface rounded-[var(--radius-xl)] border border-border bg-surface p-4 sm:p-6"
    >
      <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent" mono>
              PHY1159 · V2 170826
            </Badge>
            <Badge tone="neutral">9 chương đề cương HUS</Badge>
            <span className="font-mono text-xs tabular-nums text-ink-muted">
              Đã ôn {completedCount}/{totalChapters} chương
            </span>
          </div>
          <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
            Học theo đề cương PHY1159 &amp; bài giảng MIT OpenCourseWare
          </h3>
          <p className="text-xs leading-relaxed text-ink-secondary">
            Đối chiếu trực tiếp từng chương của đề cương HUS với tài liệu nội bộ trong{' '}
            <code className="font-mono text-[11px]">docs/</code> và các bài học bổ trợ từ MIT
            OpenCourseWare (nguồn ngoài, học liệu bằng tiếng Anh).
          </p>
        </div>

        <SearchInput
          id="phy1159-syllabus-search"
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Lọc chương, mục hoặc bài MIT…"
          label="Lọc đề cương PHY1159"
          className="w-full sm:w-64"
        />
      </div>

      {storageWarning ? (
        <p
          role="status"
          className="mt-3 rounded-[var(--radius-md)] border border-warning/30 bg-warning-subtle px-3.5 py-2 text-xs text-warning"
        >
          Trình duyệt đang hạn chế lưu trữ cục bộ; trạng thái đánh dấu đã ôn chỉ giữ trong phiên
          học hiện tại.
        </p>
      ) : null}

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-[19rem_minmax(0,1fr)]">
        {/* Chapter navigation list */}
        <nav aria-label="Danh sách 9 chương đề cương PHY1159" className="space-y-1.5">
          {filteredChapters.length === 0 ? (
            <p className="rounded-[var(--radius-md)] border border-dashed border-border p-3 text-xs text-ink-muted">
              Không tìm thấy chương phù hợp với từ khóa.
            </p>
          ) : (
            filteredChapters.map(chapter => {
              const isActive = chapter.id === activeChapter.id;
              const done = progress.completedChapterIds.includes(chapter.id);
              return (
                <button
                  key={chapter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className={`flex w-full items-start gap-2.5 rounded-[var(--radius-lg)] border px-3 py-2.5 text-left transition-colors duration-150 ${
                    isActive
                      ? 'border-accent bg-accent-subtle text-accent-ink'
                      : 'border-border bg-canvas/50 text-ink hover:border-border-strong hover:bg-surface-subtle'
                  }`}
                >
                  <span className="mt-0.5 font-mono text-xs font-semibold tabular-nums text-ink-muted">
                    {String(chapter.number).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-sm font-medium leading-snug">{chapter.title}</span>
                    <span className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-ink-muted">
                      {chapter.selfStudy ? <Badge tone="warning">Tự học</Badge> : null}
                      {done ? (
                        <span className="inline-flex items-center gap-1 text-success">
                          <CheckCircleIcon width={12} height={12} />
                          Đã ôn
                        </span>
                      ) : null}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </nav>

        {/* Active chapter details */}
        <div className="min-w-0 space-y-6">
          <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-canvas/50 p-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="neutral" mono>
                  Chương {activeChapter.number}
                </Badge>
                {activeChapter.selfStudy ? <Badge tone="warning">Tự học</Badge> : null}
                <span className="font-mono text-[11px] text-ink-muted">
                  Chuẩn đầu ra: {activeChapter.outcomes.join(', ')}
                </span>
              </div>
              <h4 className="font-display text-lg font-medium text-ink">
                {activeChapter.title}
              </h4>
            </div>

            <button
              type="button"
              aria-pressed={isChapterCompleted}
              onClick={() => handleToggleChapter(activeChapter.id)}
              className={`hus-btn shrink-0 text-xs ${
                isChapterCompleted ? 'hus-btn-primary' : 'hus-btn-secondary'
              }`}
            >
              <CheckCircleIcon width={14} height={14} />
              <span>{isChapterCompleted ? 'Đã ôn chương này' : 'Đánh dấu đã ôn'}</span>
            </button>
          </div>

          {/* 1. Syllabus sections */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Nội dung cần học theo đề cương
            </h5>
            <ul className="divide-y divide-border rounded-[var(--radius-lg)] border border-border bg-canvas/40">
              {activeChapter.sections.map(sec => (
                <li key={sec.code} className="flex items-start justify-between gap-3 px-3.5 py-2.5">
                  <div className="min-w-0 text-sm text-ink">
                    <span className="mr-2 font-mono text-xs font-semibold text-accent">
                      {sec.code}
                    </span>
                    <span>{sec.title}</span>
                  </div>
                  {sec.selfStudy ? (
                    <span className="shrink-0">
                      <Badge tone="warning">Tự học</Badge>
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Tài liệu môn học (HUS web lessons + docs/) */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Tài liệu môn học (HUS &amp; bài giảng trên web)
            </h5>

            {webLessons.length > 0 ? (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {webLessons.map(lesson => (
                  <Link
                    key={lesson.id}
                    to={`/courses/phy1159/lessons/${lesson.id}`}
                    className="group flex items-center justify-between gap-2 rounded-[var(--radius-md)] border border-border bg-canvas/60 px-3 py-2.5 text-xs font-medium text-ink !no-underline transition-colors hover:border-accent hover:text-accent"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <BookOpenIcon width={14} height={14} className="shrink-0 text-accent" />
                      <span className="truncate">{lesson.title}</span>
                    </span>
                    <ArrowRightIcon
                      width={13}
                      height={13}
                      className="shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="rounded-[var(--radius-md)] border border-dashed border-border bg-surface-subtle/50 px-3.5 py-2.5 text-xs text-ink-secondary">
                Chương này hiện chưa có bài giảng web chuyển đổi; sinh viên học trực tiếp theo giáo
                trình HUS và đề cương.
              </p>
            )}

            <ul className="space-y-2">
              {activeChapter.internalDocs.map(doc => (
                <li
                  key={doc.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-md)] border border-border bg-surface-subtle/40 px-3.5 py-2.5 text-xs"
                >
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge tone="neutral">{DOC_KIND_LABEL[doc.kind]}</Badge>
                      {doc.pages && doc.pages.length > 0 ? (
                        <Badge tone="neutral" mono>
                          Trang {doc.pages.join(', ')}
                        </Badge>
                      ) : null}
                      <span className="font-medium text-ink">{doc.title}</span>
                    </div>
                    <p className="break-all font-mono text-[11px] text-ink-muted">{doc.docPath}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. MIT: bài học bổ trợ */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                MIT: bài học bổ trợ (nguồn ngoài · tiếng Anh)
              </h5>
            </div>

            {supplementMit.length > 0 ? (
              <ul className="space-y-2">
                {supplementMit.map(resource => (
                  <MitVideoCard key={resource.id} resource={resource} />
                ))}
              </ul>
            ) : (
              <p className="rounded-[var(--radius-md)] border border-dashed border-border bg-surface-subtle/50 px-3.5 py-2.5 text-xs text-ink-secondary">
                {activeChapter.mitGapNoteVi ??
                  'Chưa có bài MIT OpenCourseWare phù hợp được xác minh cho chương này.'}
              </p>
            )}
          </div>

          {/* 4. Đọc thêm (8.044) */}
          {furtherMit.length > 0 ? (
            <div className="space-y-2.5">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Đọc thêm (nâng cao · không bắt buộc)
              </h5>
              <ul className="space-y-2">
                {furtherMit.map(resource => (
                  <MitVideoCard key={resource.id} resource={resource} />
                ))}
              </ul>
            </div>
          ) : null}

          {/* 5. Comparison note: MIT support vs HUS textbook */}
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface-subtle/60 p-3.5 text-xs leading-relaxed text-ink-secondary">
            <strong className="font-semibold text-ink">Đối chiếu MIT &amp; giáo trình HUS: </strong>
            {activeChapter.comparisonNoteVi}
          </div>

          {/* Shared internal docs reference */}
          <details className="rounded-[var(--radius-lg)] border border-border bg-canvas/40 px-3.5 py-2.5 text-xs">
            <summary className="cursor-pointer font-medium text-ink">
              Danh mục tài liệu nội bộ chung trong thư mục docs/ ({PHY1159_SHARED_INTERNAL_DOCS.length})
            </summary>
            <ul className="mt-2.5 space-y-2 border-t border-border pt-2.5">
              {PHY1159_SHARED_INTERNAL_DOCS.map(doc => (
                <li key={doc.id} className="space-y-0.5">
                  <p className="font-medium text-ink">{doc.title}</p>
                  <p className="break-all font-mono text-[11px] text-ink-muted">{doc.docPath}</p>
                  <p className="text-ink-secondary">{doc.note}</p>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}
