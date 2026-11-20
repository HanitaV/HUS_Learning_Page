import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { SemiEssayExercise } from '../domain/semi-essay';
import { courseLessons } from '../core/learning/content';
import { courseRegistry } from '../infrastructure/content/catalogue';
import { learningContent, loadLessonExercises } from '../infrastructure/content/learning';
import { progressStore } from '../infrastructure/progress/store';
import { useLearningProgress } from '../app/useLearningProgress';
import { SemiEssayStudio } from '../components/learning/SemiEssayStudio';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ArrowLeftIcon } from '../components/ui/Icons';
import { PageSkeleton } from '../components/ui/Skeleton';

export default function PracticePage() {
  const { courseId, lessonId, exerciseId } = useParams();
  const { progress } = useLearningProgress();
  const course = courseRegistry.get(courseId ?? '');
  const lesson = courseLessons(learningContent, course).find(l => l.id === lessonId);

  const [exercise, setExercise] = useState<SemiEssayExercise | null | undefined>(undefined);

  useEffect(() => {
    let active = true;
    if (!course || !lesson || !exerciseId) {
      setExercise(null);
      return;
    }
    setExercise(undefined);
    loadLessonExercises(course.id, lesson.id)
      .then(list => {
        if (!active) return;
        const found = list.find(e => e.id === exerciseId && e.lessonId === lesson.id);
        setExercise(found && found.kind === 'semi-essay' ? found : null);
      })
      .catch(() => {
        if (active) setExercise(null);
      });
    return () => {
      active = false;
    };
  }, [course, lesson, exerciseId]);

  if (!course || !lesson || exercise === null) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Tổng quan', to: '/' },
            { label: 'Học phần', to: '/courses' },
            ...(course ? [{ label: course.title, to: `/courses/${course.id}` }] : []),
            { label: 'Không tìm thấy bài luyện tập' },
          ]}
        />
        <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-6">
          <h1 className="font-display text-2xl font-medium text-ink">Không tìm thấy bài bán tự luận</h1>
          <p className="mt-2 text-sm text-ink-secondary">
            Bài tập này không tồn tại, không thuộc bài học đã chọn, hoặc chưa hỗ trợ không gian giải bán tự luận.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {course && lesson ? (
              <Link to={`/courses/${course.id}/lessons/${lesson.id}`} className="hus-btn hus-btn-primary">
                <ArrowLeftIcon width={15} height={15} />
                Quay lại bài học
              </Link>
            ) : (
              <Link to="/courses" className="hus-btn hus-btn-secondary">
                <ArrowLeftIcon width={15} height={15} />
                Về danh sách học phần
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (exercise === undefined) {
    return <PageSkeleton />;
  }

  const previouslySolved = progress.attempts.some(
    attempt => attempt.exerciseId === exercise.id && attempt.correct,
  );
  const lessonUrl = `/courses/${course.id}/lessons/${lesson.id}`;

  return (
    <div className="mx-auto max-w-7xl space-y-5 overflow-x-clip">
      <Breadcrumbs
        items={[
          { label: 'Học phần', to: '/courses' },
          { label: course.title, to: `/courses/${course.id}` },
          { label: lesson.title, to: lessonUrl },
          { label: 'Giải bán tự luận' },
        ]}
      />
      <SemiEssayStudio
        key={exercise.id}
        exercise={exercise}
        lessonTitle={lesson.title}
        lessonUrl={lessonUrl}
        previouslySolved={previouslySolved}
        onCompleteExercise={outcome => {
          if (outcome === 'self-reviewed') return;
          progressStore.dispatch({
            type: 'attempt',
            exerciseId: exercise.id,
            correct: true,
            at: new Date().toISOString(),
          });
        }}
      />
    </div>
  );
}
