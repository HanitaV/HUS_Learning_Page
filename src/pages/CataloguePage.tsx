import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { navigateSmooth, preloadCoursesPage } from '../app/route-transition';
import { useLearningProgress } from '../app/useLearningProgress';
import type { EntityId } from '../domain/learning';
import { courseLessons } from '../core/learning/content';
import { courseProgress } from '../core/learning/progress';
import { learningContent } from '../infrastructure/content/learning';
import { filterCourses, getCourseSubject, groupCoursesBySubject } from '../core/courses/search';
import { courseRegistry, subjectList } from '../infrastructure/content/catalogue';
import { CourseCard } from '../components/courses/CourseCard';
import { ResourceList } from '../components/learning/ResourceList';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';
import { ObservatoryCanvas } from '../components/ui/ObservatoryCanvas';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SearchInput } from '../components/ui/SearchInput';
import { TaglineReveal } from '../components/ui/TaglineReveal';
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ClockIcon,
} from '../components/ui/Icons';

/** Pure geometric orbital mark indexed by position (no subject-name branching). */
function ConstellationGlyph({ index }: { readonly index: number }) {
  const rotation = (index * 37 - 22) % 180;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      fill="none"
      className="h-9 w-9 shrink-0 text-accent"
    >
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <ellipse
        cx="20"
        cy="20"
        rx="16"
        ry="6.5"
        transform={`rotate(${rotation} 20 20)`}
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
      <circle
        cx={20 + Math.round(Math.cos((rotation * Math.PI) / 180) * 14)}
        cy={20 + Math.round(Math.sin((rotation * Math.PI) / 180) * 14)}
        r="2"
        fill="var(--hus-starlight)"
      />
    </svg>
  );
}

export default function CataloguePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<EntityId | 'all'>('all');
  const { progress } = useLearningProgress();
  const allCourses = courseRegistry.list();

  // Warm the /courses chunk silently on idle so transitioning to the Orbital Atom Map is instant
  useEffect(() => {
    const id = window.setTimeout(() => {
      void preloadCoursesPage();
    }, 350);
    return () => window.clearTimeout(id);
  }, []);

  const totalLessons = learningContent.lessons.length;
  const totalExercises = learningContent.lessons.reduce((sum, l) => sum + l.exerciseIds.length, 0);
  const totalResources = learningContent.resources.length;

  const recentLessons = useMemo(
    () =>
      progress.recentTopics.flatMap(topic => {
        const course = courseRegistry.get(topic.courseId);
        if (!course) return [];
        const lessons = courseLessons(learningContent, course);
        const lesson = lessons.find(item => item.id === topic.lessonId);
        if (!lesson) return [];
        const lessonIds = lessons.map(item => item.id);
        return [
          {
            ...topic,
            title: lesson.title,
            courseTitle: course.title,
            courseCode: course.academicCode ?? course.id,
            completedCount: lessonIds.filter(id => progress.completedLessonIds.includes(id)).length,
            totalLessons: lessons.length,
            percentage: courseProgress(lessonIds, progress),
          },
        ];
      }),
    [progress],
  );

  const primaryRecent = recentLessons[0];
  const secondaryRecents = recentLessons.slice(1, 4);

  const bookmarkedResources = useMemo(
    () =>
      learningContent.resources
        .filter(resource => progress.bookmarkedResourceIds.includes(resource.id))
        .slice(0, 3),
    [progress.bookmarkedResourceIds],
  );

  const filteredCourses = useMemo(
    () => filterCourses(allCourses, subjectList, { search, subjectId: selectedSubject }),
    [allCourses, search, selectedSubject],
  );

  const subjectGroups = useMemo(
    () => groupCoursesBySubject(allCourses, subjectList),
    [allCourses],
  );

  const firstAvailableCourse = useMemo(
    () => allCourses.find(course => course.status === 'available'),
    [allCourses],
  );

  const firstAvailableLessons = useMemo(
    () => (firstAvailableCourse ? courseLessons(learningContent, firstAvailableCourse) : []),
    [firstAvailableCourse],
  );

  const goToCoursesSmoothly = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    void navigateSmooth(navigate, '/courses', preloadCoursesPage, {
      state: { focusOrbitalSearch: true },
      direction: 'pull-up',
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* First Viewport: Atmospheric Observatory Hero */}
      <section className="relative isolate flex min-h-[70dvh] flex-col justify-center overflow-hidden rounded-[var(--radius-xl)] py-12 sm:min-h-[76dvh] sm:py-20">
        <ObservatoryCanvas />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <h1
            className="hus-hero-enter heading-display max-w-[680px]"
            style={{ animationDelay: '0ms' }}
          >
            Tri thức tự nhiên,
            <br />
            mở ra giữa bầu trời tự{'\u00A0'}do.
          </h1>

          <p
            className="hus-hero-enter mt-6 max-w-[600px] text-base leading-relaxed text-ink-secondary sm:text-lg"
            style={{ animationDelay: '70ms' }}
          >
            Không gian học tập mở dành cho sinh viên Trường Đại học Khoa học Tự nhiên, ĐHQGHN. Đọc
            bài giảng chuẩn hóa, luyện tập tự chấm điểm và lưu tiến độ ngay trên trình duyệt.
          </p>

          {/* Single primary CTA + quiet secondary scroll action */}
          <div
            className="hus-hero-enter mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-5"
            style={{ animationDelay: '130ms' }}
          >
            {primaryRecent ? (
              <Link
                to={`/courses/${primaryRecent.courseId}/lessons/${primaryRecent.lessonId}`}
                className="hus-btn hus-btn-primary min-h-[44px] px-6 text-base"
              >
                <span>Tiếp tục: {primaryRecent.title}</span>
                <ArrowRightIcon width={16} height={16} />
              </Link>
            ) : firstAvailableCourse ? (
              <Link
                to={`/courses/${firstAvailableCourse.id}`}
                className="hus-btn hus-btn-primary min-h-[44px] px-6 text-base"
              >
                <span>Bắt đầu học ngay</span>
                <ArrowRightIcon width={16} height={16} />
              </Link>
            ) : (
              <Link
                to="/courses"
                className="hus-btn hus-btn-primary min-h-[44px] px-6 text-base"
              >
                <span>Khám phá học phần</span>
                <ArrowRightIcon width={16} height={16} />
              </Link>
            )}

            <Link
              to="/courses"
              onMouseEnter={() => void preloadCoursesPage()}
              onFocus={() => void preloadCoursesPage()}
              onClick={goToCoursesSmoothly}
              className="hus-btn hus-btn-ghost min-h-[44px] px-4 text-sm font-medium text-ink-secondary hover:text-ink"
            >
              <span>Xem danh sách học phần</span>
              <ChevronRightIcon width={15} height={15} />
            </Link>
          </div>

          {/* Grounded real-data observatory telemetry strip */}
          <dl
            className="hus-hero-enter mt-14 grid w-full max-w-3xl grid-cols-2 divide-y divide-border overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface/82 backdrop-blur-md sm:grid-cols-4 sm:divide-x sm:divide-y-0"
            style={{ animationDelay: '190ms' }}
          >
            <div className="px-4 py-3.5 text-center">
              <dd className="font-mono text-lg font-semibold tabular-nums text-ink">
                {allCourses.length}
              </dd>
              <dt className="mt-0.5 text-xs text-ink-muted">Học phần xác minh</dt>
            </div>
            <div className="px-4 py-3.5 text-center">
              <dd className="font-mono text-lg font-semibold tabular-nums text-ink">
                {subjectGroups.length}
              </dd>
              <dt className="mt-0.5 text-xs text-ink-muted">Lĩnh vực khoa học</dt>
            </div>
            <div className="px-4 py-3.5 text-center">
              <dd className="font-mono text-lg font-semibold tabular-nums text-ink">
                {totalLessons} · {totalExercises}
              </dd>
              <dt className="mt-0.5 text-xs text-ink-muted">Bài giảng &amp; bài tập</dt>
            </div>
            <div className="px-4 py-3.5 text-center">
              <dd className="font-mono text-lg font-semibold tabular-nums text-ink">
                {totalResources}
              </dd>
              <dt className="mt-0.5 text-xs text-ink-muted">Nguồn học liệu</dt>
            </div>
          </dl>
        </div>
      </section>

      {/* Scroll-activated poetic tagline reveal */}
      <section aria-label="Tuyên ngôn học tập" className="border-t border-border py-12 sm:py-20">
        <div className="mx-auto max-w-[680px]">
          <TaglineReveal text="Mỗi định luật vật lý, mỗi thuật toán và mỗi cấu trúc phân tử đều xứng đáng có một không gian yên tĩnh để suy ngẫm, kiểm chứng và thực hành." />
        </div>
      </section>

      {/* Personalized Continue Learning OR Asymmetric Observatory Spotlight */}
      <ScrollReveal>
        {primaryRecent ? (
          <section aria-labelledby="continue-heading" className="space-y-5">
            <div className="flex items-baseline justify-between gap-3">
              <h2 id="continue-heading" className="heading-section">
                Tiếp tục hành trình học tập
              </h2>
              <Link
                to="/progress"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent no-underline hover:underline"
              >
                Xem toàn bộ tiến độ
                <ChevronRightIcon width={15} height={15} />
              </Link>
            </div>

            <div className="hus-card-surface overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface">
              <Link
                to={`/courses/${primaryRecent.courseId}/lessons/${primaryRecent.lessonId}`}
                className="group flex flex-col gap-5 p-6 no-underline transition-colors duration-300 ease-[var(--hus-ease)] hover:bg-surface-subtle/50 sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div className="min-w-0 flex-1 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="accent" mono>
                      {primaryRecent.courseCode}
                    </Badge>
                    <span className="truncate text-xs text-ink-muted">
                      {primaryRecent.courseTitle}
                    </span>
                  </div>
                  <p className="font-display text-2xl font-medium text-ink transition-colors duration-300 ease-[var(--hus-ease)] group-hover:text-accent">
                    {primaryRecent.title}
                  </p>
                  {primaryRecent.totalLessons > 0 ? (
                    <div className="flex max-w-sm items-center gap-3 pt-1">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-subtle">
                        <div
                          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-[var(--hus-ease)]"
                          style={{ width: `${primaryRecent.percentage}%` }}
                        />
                      </div>
                      <span className="shrink-0 font-mono text-xs tabular-nums text-ink-muted">
                        {primaryRecent.completedCount}/{primaryRecent.totalLessons} bài
                      </span>
                    </div>
                  ) : null}
                </div>

                <span className="hus-btn hus-btn-primary shrink-0">
                  Mở bài học
                  <ArrowRightIcon width={15} height={15} />
                </span>
              </Link>

              {secondaryRecents.length > 0 ? (
                <div className="border-t border-border bg-surface-subtle/40 px-6 py-4 sm:px-8">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                    <ClockIcon width={13} height={13} />
                    Vừa truy cập gần đây
                  </p>
                  <ul className="divide-y divide-border">
                    {secondaryRecents.map(item => (
                      <li key={item.topicId}>
                        <Link
                          to={`/courses/${item.courseId}/lessons/${item.lessonId}`}
                          className="flex min-h-[42px] items-center justify-between gap-3 py-2 text-sm text-ink-secondary no-underline hover:text-accent"
                        >
                          <span className="truncate">{item.title}</span>
                          <span className="shrink-0 font-mono text-xs text-ink-muted">
                            {item.courseCode}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : firstAvailableCourse ? (
          <section aria-labelledby="spotlight-heading" className="space-y-5">
            <h2 id="spotlight-heading" className="heading-section">
              Sẵn sàng trải nghiệm ngay
            </h2>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
              {/* Primary live course spotlight */}
              <div className="hus-card-surface flex flex-col justify-between rounded-[var(--radius-xl)] border border-border bg-surface p-6 sm:p-8 lg:col-span-7">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="accent" mono>
                      {firstAvailableCourse.academicCode ?? firstAvailableCourse.id}
                    </Badge>
                    <Badge tone="success">Có nội dung học</Badge>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                    {firstAvailableCourse.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-ink-secondary">
                    Bao gồm {firstAvailableCourse.chapterIds.length} chương lý thuyết với{' '}
                    {firstAvailableLessons.length} bài giảng chuẩn hóa công thức toán học KaTeX và{' '}
                    {totalExercises} bài tập tự luyện có chấm đáp án trực tiếp.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/courses/${firstAvailableCourse.id}`}
                    className="hus-btn hus-btn-primary"
                  >
                    <span>Vào học phần</span>
                    <ArrowRightIcon width={15} height={15} />
                  </Link>
                  {firstAvailableLessons[0] ? (
                    <Link
                      to={`/courses/${firstAvailableCourse.id}/lessons/${firstAvailableLessons[0].id}`}
                      className="hus-btn hus-btn-secondary"
                    >
                      Đọc bài mở đầu
                    </Link>
                  ) : null}
                </div>
              </div>

              {/* Secondary observatory principles / local-first privacy card */}
              <div className="flex flex-col justify-between rounded-[var(--radius-xl)] border border-border bg-surface-subtle/65 p-6 sm:p-8 lg:col-span-5">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    Cục bộ, minh bạch và không xao nhãng
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    Mọi tiến độ đọc bài, lượt giải bài tập và tài liệu đánh dấu đều được lưu trực
                    tiếp trên trình duyệt của bạn, có thể xuất và khôi phục bằng tệp JSON bất cứ lúc
                    nào.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm">
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-1 font-medium text-accent no-underline hover:underline"
                  >
                    Thư viện tài liệu
                    <ChevronRightIcon width={14} height={14} />
                  </Link>
                  <Link
                    to="/progress"
                    className="inline-flex items-center gap-1 font-medium text-ink-secondary no-underline hover:text-ink hover:underline"
                  >
                    Sao lưu tiến độ
                    <ChevronRightIcon width={14} height={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </ScrollReveal>

      {/* Unified Courses & Subject Constellations Section */}
      <ScrollReveal>
        <section id="courses-section" aria-labelledby="courses-heading" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 id="courses-heading" className="heading-page">
                  Học phần
                </h2>
                <span className="font-mono text-xs tabular-nums text-ink-muted">
                  {filteredCourses.length}/{allCourses.length} · {subjectGroups.length} lĩnh vực
                </span>
              </div>
              <p className="text-sm text-ink-secondary">
                Chọn lĩnh vực môn học hoặc tra cứu nhanh theo mã học phần, tên môn để xem đề cương và xuất xứ.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <SearchInput
                id="dashboard-course-search"
                value={search}
                onChange={setSearch}
                placeholder="Tìm theo mã học phần, tên môn…"
                label="Tìm nhanh học phần"
                className="w-full md:w-80"
              />
              <Link
                to="/courses"
                onMouseEnter={() => void preloadCoursesPage()}
                onFocus={() => void preloadCoursesPage()}
                onClick={goToCoursesSmoothly}
                className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent no-underline hover:underline"
              >
                Bản đồ nguyên tử
                <ChevronRightIcon width={15} height={15} />
              </Link>
            </div>
          </div>

          {/* Integrated Subject Constellation Filter Cards */}
          <div
            role="group"
            aria-label="Lĩnh vực môn học"
            className="grid grid-cols-1 gap-3.5 md:grid-cols-3"
          >
            {subjectGroups.map(({ subject, courses }, index) => {
              const availableCount = courses.filter(c => c.status === 'available').length;
              const isSelected = selectedSubject === subject.id;
              return (
                <button
                  key={subject.id}
                  type="button"
                  onClick={() =>
                    setSelectedSubject(prev => (prev === subject.id ? 'all' : subject.id))
                  }
                  aria-pressed={isSelected}
                  className={`group hus-card-surface flex flex-col justify-between rounded-[var(--radius-xl)] border p-5 text-left transition-[border-color,transform,background-color,box-shadow] duration-300 ease-[var(--hus-ease)] hover:-translate-y-0.5 active:scale-[0.99] ${
                    isSelected
                      ? 'border-accent bg-accent-subtle/40 shadow-[0_8px_24px_-14px_rgb(26_86_219/0.35)]'
                      : 'border-border bg-surface hover:border-border-strong'
                  }`}
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <ConstellationGlyph index={index} />
                    <span className="font-mono text-xs tabular-nums text-ink-muted">
                      {courses.length} học phần
                    </span>
                  </div>

                  <div className="mt-4 space-y-1">
                    <h3
                      className={`font-display text-xl font-medium transition-colors duration-300 ease-[var(--hus-ease)] ${
                        isSelected ? 'text-accent' : 'text-ink group-hover:text-accent'
                      }`}
                    >
                      {subject.title}
                    </h3>
                    <p className="text-xs text-ink-muted">
                      {availableCount > 0
                        ? `${availableCount} học phần có bài giảng trực tuyến`
                        : 'Thông tin học phần và nguồn gốc xác minh'}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-medium text-accent">
                    <span>{isSelected ? 'Đang lọc · Bấm để xem tất cả' : 'Lọc theo lĩnh vực'}</span>
                    <ChevronRightIcon
                      width={14}
                      height={14}
                      className="transition-transform duration-300 ease-[var(--hus-ease)] group-hover:translate-x-0.5"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {filteredCourses.length > 0 ? (
            <div className="hus-card-surface overflow-hidden divide-y divide-border rounded-[var(--radius-xl)] border border-border bg-surface">
              {filteredCourses.map(course => {
                const lessons = courseLessons(learningContent, course);
                const pct =
                  lessons.length > 0
                    ? courseProgress(
                        lessons.map(l => l.id),
                        progress,
                      )
                    : undefined;
                return (
                  <CourseCard
                    key={course.id}
                    course={course}
                    subject={getCourseSubject(course, subjectList)}
                    layout="list"
                    lessonCount={lessons.length}
                    progressPercent={pct}
                  />
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="Không tìm thấy học phần phù hợp"
              description={
                search.trim()
                  ? `Không có học phần nào khớp với từ khóa "${search}". Hãy thử tìm bằng mã học phần (ví dụ: MAT3504) hoặc xóa bộ lọc.`
                  : 'Không có học phần nào thuộc lĩnh vực đang chọn.'
              }
              action={
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setSelectedSubject('all');
                  }}
                  className="hus-btn hus-btn-secondary"
                >
                  Hiển thị lại tất cả học phần
                </button>
              }
            />
          )}
        </section>
      </ScrollReveal>

      {/* Bookmarked resources — shown only when user has saved bookmarks */}
      {bookmarkedResources.length > 0 ? (
        <ScrollReveal>
          <section aria-labelledby="bookmarks-heading" className="space-y-4">
            <div className="flex items-baseline justify-between gap-2">
              <h2 id="bookmarks-heading" className="heading-section">
                Tài liệu đã đánh dấu
              </h2>
              <Link
                to="/progress"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent no-underline hover:underline"
              >
                Xem tất cả ({progress.bookmarkedResourceIds.length})
                <ChevronRightIcon width={15} height={15} />
              </Link>
            </div>
            <ResourceList resources={bookmarkedResources} />
          </section>
        </ScrollReveal>
      ) : null}

      {/* Bottom Scroll Portal Cue — transitions seamlessly into /courses before footer */}
      <div
        data-scroll-portal="to-courses"
        className="flex flex-col items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-dashed border-border bg-surface-subtle/40 px-5 py-6 text-center"
      >
        <p className="text-xs font-medium text-ink-muted">
          Tiếp tục cuộn xuống để mở Bản đồ nguyên tử học phần
        </p>
        <Link
          to="/courses"
          onMouseEnter={() => void preloadCoursesPage()}
          onFocus={() => void preloadCoursesPage()}
          onClick={goToCoursesSmoothly}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline hover:underline"
        >
          <span>Chuyển sang Học phần ngay</span>
          <ArrowRightIcon width={14} height={14} />
        </Link>
      </div>
    </div>
  );
}
