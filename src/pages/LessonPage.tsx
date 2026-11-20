import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { Course, Lesson } from '../domain/learning';
import type { ExerciseDefinition } from '../domain/workspace';
import { courseLessons } from '../core/learning/content';
import { extractMarkdownOutline } from '../core/learning/outline';
import { courseRegistry, getSubjectModule } from '../infrastructure/content/catalogue';
import { learningContent, loadLessonExercises, loadLessonMarkdown } from '../infrastructure/content/learning';
import { progressStore } from '../infrastructure/progress/store';
import { useLearningProgress } from '../app/useLearningProgress';
import { useWorkspacePreferences } from '../app/useWorkspacePreferences';
import { LessonWorkspaceShell } from '../components/learning/LessonWorkspaceShell';
import { ResourceList } from '../components/learning/ResourceList';
import { getDiagramLabel } from '../modules/diagrams/registry';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { LessonSkeleton } from '../components/ui/Skeleton';
import {
  AlertCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '../components/ui/Icons';

const Markdown = lazy(() => import('../components/learning/Markdown'));
const ExerciseSession = lazy(() => import('../components/learning/ExerciseSession'));

export default function LessonPage() {
  const { courseId, lessonId } = useParams();
  const course = courseRegistry.get(courseId ?? '');
  const lesson = courseLessons(learningContent, course).find(l => l.id === lessonId);

  if (!course) {
    return (
      <div className="max-w-xl space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Tổng quan', to: '/' },
            { label: 'Học phần', to: '/courses' },
            { label: 'Không tìm thấy' },
          ]}
        />
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
          <h1 className="text-2xl font-semibold text-ink">Không tìm thấy học phần</h1>
          <p className="mt-2 text-sm text-ink-secondary">
            Học phần bạn đang truy cập không tồn tại trong danh mục hiện tại.
          </p>
          <Link to="/courses" className="hus-btn hus-btn-secondary mt-5">
            <ArrowLeftIcon width={15} height={15} />
            Về danh sách học phần
          </Link>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Học phần', to: '/courses' },
            { label: course.title, to: `/courses/${course.id}` },
            { label: 'Bài học chưa sẵn sàng' },
          ]}
        />
        <LessonWorkspaceShell
          courseTitle={course.title}
          courseUrl={`/courses/${course.id}`}
          chapters={[]}
        >
          <h1>Bài học chưa sẵn sàng</h1>
          <p>Bài học này chưa được chuyển đổi hoặc không thuộc học phần hiện tại.</p>
          <p className="mt-6">
            <Link to={`/courses/${course.id}`} className="hus-btn hus-btn-secondary !no-underline">
              <ArrowLeftIcon width={15} height={15} />
              Quay lại trang học phần
            </Link>
          </p>
        </LessonWorkspaceShell>
      </div>
    );
  }

  return <LessonReader key={lesson.id} course={course} lesson={lesson} />;
}

function LessonReader({ course, lesson }: { readonly course: Course; readonly lesson: Lesson }) {
  const { progress, error } = useLearningProgress();
  const { preferences, setReadingSize } = useWorkspacePreferences();
  const [body, setBody] = useState<string | null>(null);
  const [lessonExercises, setLessonExercises] = useState<readonly ExerciseDefinition[]>(() =>
    learningContent.exercises.filter(e => lesson.exerciseIds.includes(e.id)),
  );
  const [loadError, setLoadError] = useState<string | null>(null);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setLoadError(null);
    loadLessonMarkdown(lesson.id)
      .then(text => {
        if (active) setBody(text);
      })
      .catch(() => {
        if (active) setLoadError('Không thể tải bài học. Hãy thử lại.');
      });
    if (lesson.exerciseIds.length > 0) {
      loadLessonExercises(course.id, lesson.id)
        .then(exercises => {
          if (active) setLessonExercises(exercises);
        })
        .catch(() => {
          if (active) setLessonExercises([]);
        });
    } else {
      setLessonExercises([]);
    }
    progressStore.dispatch({
      type: 'visit',
      topicId: lesson.topicId,
      lessonId: lesson.id,
      courseId: course.id,
      at: new Date().toISOString(),
    });
    return () => {
      active = false;
    };
  }, [lesson.id, lesson.topicId, lesson.exerciseIds.length, course.id, retry]);

  const lessons = useMemo(() => courseLessons(learningContent, course), [course]);
  const index = lessons.findIndex(l => l.id === lesson.id);
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const completed = progress.completedLessonIds.includes(lesson.id);

  const topic = learningContent.topics.find(t => t.id === lesson.topicId);
  const chapter = topic ? learningContent.chapters.find(ch => ch.id === topic.chapterId) : undefined;
  const linkedTools = useMemo(() => {
    const mod = getSubjectModule(course.subjectId);
    if (!mod?.tools) return [];
    return mod.tools.flatMap(tool =>
      (tool.lessonLinks ?? [])
        .filter(link => link.lessonId === lesson.id)
        .map(link => ({
          toolId: tool.id,
          preset: link.preset,
          label: link.label,
        })),
    );
  }, [course.subjectId, lesson.id]);
  const lessonResources = useMemo(
    () => learningContent.resources.filter(r => lesson.resourceIds.includes(r.id)),
    [lesson.resourceIds],
  );
  const prerequisites = useMemo(
    () =>
      (topic?.prerequisiteIds ?? [])
        .map(id => learningContent.topics.find(t => t.id === id))
        .filter(t => t !== undefined),
    [topic?.prerequisiteIds],
  );

  const outline = useMemo(() => {
    if (!body) return [];
    const headings = extractMarkdownOutline(body);
    return headings.length >= 2 ? headings : [];
  }, [body]);

  const chapters = useMemo(
    () =>
      course.chapterIds
        .flatMap(id => learningContent.chapters.filter(ch => ch.id === id))
        .map(ch => ({
          id: ch.id,
          title: ch.title,
          lessons: ch.topicIds
            .flatMap(id => learningContent.topics.find(t => t.id === id)?.lessonIds ?? [])
            .flatMap(id => learningContent.lessons.filter(l => l.id === id))
            .map(l => ({
              id: l.id,
              title: l.title,
              to: `/courses/${course.id}/lessons/${l.id}`,
              completed: progress.completedLessonIds.includes(l.id),
            })),
        })),
    [course.chapterIds, course.id, progress.completedLessonIds],
  );

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Học phần', to: '/courses' },
          { label: course.title, to: `/courses/${course.id}` },
          { label: lesson.title },
        ]}
      />

      {error ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-[var(--radius-md)] border border-warning/30 bg-warning-subtle px-4 py-3 text-sm text-warning"
        >
          <AlertCircleIcon width={16} height={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : null}

      <LessonWorkspaceShell
        courseTitle={course.title}
        courseUrl={`/courses/${course.id}`}
        chapters={chapters}
        currentLessonId={lesson.id}
        outline={outline}
      >
        {/* Lesson context bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
            {course.academicCode ? (
              <Badge tone="accent" mono>
                {course.academicCode}
              </Badge>
            ) : null}
            {chapter ? <span>{chapter.title}</span> : null}
            {lessons.length > 0 ? (
              <span className="font-mono tabular-nums">
                · Bài {index + 1}/{lessons.length}
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            {completed ? <Badge tone="success">Đã hoàn thành</Badge> : null}
            <button
              type="button"
              onClick={() =>
                setReadingSize(preferences.readingSize === 'normal' ? 'comfortable' : 'normal')
              }
              aria-pressed={preferences.readingSize === 'comfortable'}
              aria-label={
                preferences.readingSize === 'comfortable'
                  ? 'Chuyển cỡ chữ đọc về tiêu chuẩn'
                  : 'Tăng cỡ chữ đọc thoải mái'
              }
              title={
                preferences.readingSize === 'comfortable'
                  ? 'Cỡ chữ: Thoải mái (nhấn để thu nhỏ)'
                  : 'Cỡ chữ: Tiêu chuẩn (nhấn để phóng lớn)'
              }
              className="inline-flex min-h-[34px] items-center rounded-[var(--radius-md)] border border-border bg-surface-subtle px-2.5 py-1 font-sans text-xs font-medium text-ink-secondary transition-colors duration-200 hover:border-border-strong hover:text-ink active:scale-95"
            >
              {preferences.readingSize === 'comfortable' ? 'Aa−' : 'Aa+'}
            </button>
          </div>
        </div>

        {/* Prerequisites callout */}
        {prerequisites.length > 0 ? (
          <section
            aria-label="Chủ đề tiên quyết"
            className="mb-6 rounded-[var(--radius-md)] border border-border bg-surface-subtle/60 px-4 py-3"
          >
            <p className="!my-0 text-xs font-semibold text-ink-muted">Chủ đề tiên quyết</p>
            <ul className="!my-2 !list-none !pl-0 flex flex-wrap gap-2">
              {prerequisites.map(prereq => {
                const owner = learningContent.chapters.find(ch => ch.id === prereq.chapterId)?.courseId;
                const firstLesson = prereq.lessonIds[0];
                return (
                  <li key={prereq.id} className="!my-0">
                    {owner && firstLesson ? (
                      <Link
                        to={`/courses/${owner}/lessons/${firstLesson}`}
                        className="inline-flex min-h-[34px] items-center rounded-[var(--radius-sm)] border border-border bg-surface px-2.5 py-1 text-xs font-medium text-accent !no-underline transition-colors hover:border-border-strong hover:bg-surface-hover"
                      >
                        {prereq.title}
                      </Link>
                    ) : (
                      <span className="inline-flex min-h-[34px] items-center rounded-[var(--radius-sm)] border border-border bg-surface px-2.5 py-1 text-xs text-ink-secondary">
                        {prereq.title}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {/* Lesson body */}
        {loadError ? (
          <div
            role="alert"
            className="rounded-[var(--radius-md)] border border-danger/30 bg-danger-subtle p-4 text-sm text-danger"
          >
            <p className="!my-0 !text-danger">{loadError}</p>
            <button
              type="button"
              onClick={() => setRetry(n => n + 1)}
              className="hus-btn hus-btn-secondary mt-3 text-xs"
            >
              Thử lại
            </button>
          </div>
        ) : body === null ? (
          <LessonSkeleton label="Đang tải bài học…" />
        ) : (
          <Suspense fallback={<LessonSkeleton label="Đang tải trình đọc…" />}>
            <Markdown>{body}</Markdown>
          </Suspense>
        )}

        {/* Exercises, Resources & Completion */}
        {body !== null && !loadError ? (
          <>
            {linkedTools.length > 0 ? (
              <section
                aria-label="Công cụ thực hành liên quan"
                className="mt-8 flex flex-col gap-3 rounded-[var(--radius-xl)] border border-accent/30 bg-accent-subtle/40 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="!my-0 text-sm font-semibold text-ink">
                    Thực hành tương tác trực quan
                  </p>
                  <p className="!my-1 text-xs text-ink-secondary">
                    Mở bảng tương tác từng bước có hoạt ảnh hướng dẫn để luyện cách giải bài tự luận cho nội dung này.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  {linkedTools.map(item => {
                    const params = new URLSearchParams({ tool: item.toolId });
                    if (item.preset) params.set('preset', item.preset);
                    return (
                      <Link
                        key={`${item.toolId}-${item.preset ?? ''}`}
                        to={`/courses/${course.id}?${params.toString()}`}
                        className="hus-btn hus-btn-primary !no-underline text-xs"
                      >
                        <span>{item.label}</span>
                        <ArrowRightIcon width={14} height={14} />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ) : null}

            {lessonExercises.length > 0 ? (
              <section
                aria-labelledby="lesson-exercises-heading"
                className="mt-10 space-y-5 border-t border-border pt-8"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h2
                    id="lesson-exercises-heading"
                    className="!my-0 !border-0 !pb-0 text-lg font-semibold text-ink"
                  >
                    Bài tập tự luyện
                  </h2>
                  <span className="font-mono text-xs tabular-nums text-ink-muted">
                    {lessonExercises.length} câu hỏi
                  </span>
                </div>
                <Suspense
                  fallback={
                    <p role="status" className="text-sm text-ink-muted">
                      Đang tải bài tập…
                    </p>
                  }
                >
                  {lessonExercises.map(exercise => {
                    if (exercise.kind === 'semi-essay') {
                      const solved = progress.attempts.some(
                        attempt => attempt.exerciseId === exercise.id && attempt.correct,
                      );
                      const diagramKinds = [
                        ...new Set(
                          exercise.steps
                            .filter(s => s.kind === 'diagram')
                            .map(s => getDiagramLabel(s.diagramKind)),
                        ),
                      ];
                      return (
                        <section
                          key={exercise.id}
                          aria-label={exercise.title}
                          className="rounded-[var(--radius-xl)] border border-border bg-surface p-5 sm:p-6"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="space-y-1.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge tone="accent">Bán tự luận ({exercise.steps.length} bước)</Badge>
                                {diagramKinds.map(label => (
                                  <Badge key={label} tone="neutral">
                                    {label}
                                  </Badge>
                                ))}
                                {solved ? <Badge tone="success">Đã hoàn thành</Badge> : null}
                              </div>
                              <h3 className="!my-0 font-display text-lg font-medium text-ink">
                                {exercise.title}
                              </h3>
                              <p className="!my-0 text-sm text-ink-secondary">
                                Kết hợp lý thuyết tham chiếu trực tiếp, biểu đồ tương tác và biến đổi phương trình từng bước.
                              </p>
                            </div>
                            <Link
                              to={`/courses/${course.id}/lessons/${lesson.id}/practice/${exercise.id}`}
                              className="hus-btn hus-btn-primary !no-underline"
                            >
                              {solved ? 'Ôn lại bài bán tự luận' : 'Mở không gian giải bài'}
                              <ArrowRightIcon width={15} height={15} />
                            </Link>
                          </div>
                        </section>
                      );
                    }
                    return <ExerciseSession key={exercise.id} exercise={exercise} />;
                  })}
                </Suspense>
              </section>
            ) : null}

            {lessonResources.length > 0 ? (
              <section
                aria-labelledby="lesson-resources-heading"
                className="mt-10 space-y-4 border-t border-border pt-8"
              >
                <h2
                  id="lesson-resources-heading"
                  className="!my-0 !border-0 !pb-0 text-lg font-semibold text-ink"
                >
                  Tài liệu bài học
                </h2>
                <ResourceList resources={lessonResources} />
              </section>
            ) : null}

            {/* Completion control bar */}
            <div className="mt-10 flex flex-col gap-4 rounded-[var(--radius-xl)] border border-border bg-surface-subtle/65 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="!my-0 text-sm font-semibold text-ink">
                  {completed ? 'Bạn đã hoàn thành bài học này' : 'Hoàn thành bài học'}
                </p>
                <p className="!my-1 text-xs text-ink-muted">
                  Trạng thái được lưu cục bộ trên trình duyệt này.
                </p>
              </div>
              <button
                type="button"
                aria-pressed={completed}
                onClick={() =>
                  progressStore.dispatch({
                    type: 'complete',
                    lessonId: lesson.id,
                    completed: !completed,
                  })
                }
                className={`hus-btn shrink-0 ${
                  completed
                    ? 'border border-success/40 bg-success-subtle text-success hover:border-success'
                    : 'hus-btn-primary'
                }`}
              >
                <CheckCircleIcon width={16} height={16} />
                {completed ? 'Bỏ hoàn thành' : 'Đánh dấu hoàn thành'}
              </button>
            </div>
          </>
        ) : null}

        {/* Previous / Next lesson navigation */}
        {previous || next ? (
          <nav
            aria-label="Chuyển bài học"
            className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                to={`/courses/${course.id}/lessons/${previous.id}`}
                data-lesson-nav="prev"
                className="group flex min-h-[68px] flex-col justify-center rounded-[var(--radius-xl)] border border-border bg-canvas px-4 py-3.5 !no-underline transition-[border-color,background-color,transform] duration-300 ease-[var(--hus-ease)] hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-subtle"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                  <ArrowLeftIcon width={13} height={13} />
                  Bài trước
                </span>
                <span className="mt-1 line-clamp-1 font-display text-base font-medium text-ink group-hover:text-accent">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {next ? (
              <Link
                to={`/courses/${course.id}/lessons/${next.id}`}
                data-lesson-nav="next"
                className="group flex min-h-[68px] flex-col justify-center rounded-[var(--radius-xl)] border border-border bg-canvas px-4 py-3.5 text-left !no-underline transition-[border-color,background-color,transform] duration-300 ease-[var(--hus-ease)] hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-subtle sm:items-end sm:text-right"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                  Bài tiếp theo
                  <ArrowRightIcon width={13} height={13} />
                </span>
                <span className="mt-1 line-clamp-1 font-display text-base font-medium text-ink group-hover:text-accent">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}

        {lesson.provenance?.attribution ? (
          <footer className="mt-8 border-t border-border pt-4 text-xs leading-relaxed text-ink-muted">
            {lesson.provenance.attribution}
          </footer>
        ) : null}
      </LessonWorkspaceShell>
    </div>
  );
}
