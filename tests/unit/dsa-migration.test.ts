import { existsSync, readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import { courseRegistry } from '../../src/infrastructure/content/catalogue';
import { learningContent, loadLessonMarkdown } from '../../src/infrastructure/content/learning';

const codes = ['MAT3504', 'MAT3514', 'THCS4', 'OOP'] as const;
type SourceCourse = { id: string; chapters: { id: string; pieces: string[] }[] };
type SourcePiece = { id: string; lesson: string; sources?: { file: string; page?: string }[] };
const hasArchive = existsSync('docs/DSA-HUS/data');

it.skipIf(!hasArchive)('migrates the four DSA courses with scoped, ordered chapter pieces and source provenance', async () => {
  const sourceCourses = codes.map(code => JSON.parse(readFileSync(`docs/DSA-HUS/data/courses/${code}.json`, 'utf8')) as SourceCourse);
  const sourcePieces = (JSON.parse(readFileSync('docs/DSA-HUS/data/pieces.json', 'utf8')) as { pieces: SourcePiece[] }).pieces;
  const scopedPieceIds = new Map<string, string[]>();
  for (const source of sourceCourses) {
    const courseId = source.id.toLowerCase();
    const course = courseRegistry.get(courseId);
    if (!course) throw new Error(`Missing course: ${courseId}`);
    expect(course.status).toBe('available');
    const chapters = learningContent.chapters.filter(chapter => chapter.courseId === courseId);
    const topics = learningContent.topics.filter(topic => chapters.some(chapter => chapter.topicIds.includes(topic.id)));
    expect(chapters).toHaveLength(source.chapters.length);
    expect(topics).toHaveLength(source.chapters.reduce((n, chapter) => n + chapter.pieces.length, 0));
    expect(course.chapterIds).toEqual(source.chapters.map(chapter => `${courseId}-${chapter.id}`));

    for (const [index, sourceChapter] of source.chapters.entries()) {
      const chapter = chapters[index];
      if (!chapter) throw new Error(`Missing chapter ${sourceChapter.id} for ${courseId}`);
      expect(chapter.id).toBe(`${courseId}-${sourceChapter.id}`);
      expect(chapter.topicIds).toEqual(sourceChapter.pieces.map(piece => `${courseId}-topic-${piece}`));
      for (const [pieceIndex, pieceId] of sourceChapter.pieces.entries()) {
        const topic = learningContent.topics.find(item => item.id === chapter.topicIds[pieceIndex]);
        if (!topic) throw new Error(`Missing topic ${pieceId} for ${courseId}`);
        const lesson = learningContent.lessons.find(item => item.id === topic.lessonIds[0]);
        if (!lesson) throw new Error(`Missing lesson ${pieceId} for ${courseId}`);
        expect(topic?.id).toBe(`${courseId}-topic-${pieceId}`);
        expect(lesson.id).toBe(`${courseId}-${pieceId}`);
        const sourcePiece = sourcePieces.find(piece => piece.id === pieceId);
        if (!sourcePiece) throw new Error(`Unknown source piece: ${pieceId}`);
        expect(lesson.provenance?.path).toBe(sourcePiece.lesson);
        expect(lesson.resourceIds).toEqual([]);
        expect((await loadLessonMarkdown(lesson.id)).trim().length).toBeGreaterThan(0);
        const ids = scopedPieceIds.get(pieceId) ?? [];
        ids.push(lesson.id);
        scopedPieceIds.set(pieceId, ids);
      }
    }
    expect(course.resourceIds).toEqual([]);
  }
  for (const [pieceId, lessonIds] of scopedPieceIds) {
    if (lessonIds.length > 1) expect(new Set(lessonIds).size).toBe(lessonIds.length);
    expect(lessonIds.every(id => id.endsWith(`-${pieceId}`))).toBe(true);
  }
  expect(learningContent.resources.filter(resource => resource.provenance.repository.includes('DSA-HUS')).length).toBe(0);
});

it('contains available DSA courses with scoped lessons and no copied resources', async () => {
  for (const code of codes) {
    const courseId = code.toLowerCase();
    const course = courseRegistry.get(courseId);
    if (!course) throw new Error(`Missing course: ${courseId}`);
    expect(course.status).toBe('available');
    expect(course.resourceIds).toEqual([]);
    const chapters = learningContent.chapters.filter(chapter => chapter.courseId === courseId);
    expect(course.chapterIds).toEqual(chapters.map(chapter => chapter.id));
    expect(chapters.length).toBeGreaterThan(0);
    for (const chapter of chapters) {
      expect(chapter.id.startsWith(`${courseId}-`)).toBe(true);
      expect(chapter.topicIds.length).toBeGreaterThan(0);
      for (const topicId of chapter.topicIds) {
        const topic = learningContent.topics.find(item => item.id === topicId);
        if (!topic) throw new Error(`Missing topic: ${topicId}`);
        expect(topic.id.startsWith(`${courseId}-topic-`)).toBe(true);
        const lesson = learningContent.lessons.find(item => item.id === topic.lessonIds[0]);
        if (!lesson) throw new Error(`Missing lesson for topic: ${topicId}`);
        expect(lesson.id).toBe(topic.id.replace(`${courseId}-topic-`, `${courseId}-`));
        expect(lesson.resourceIds).toEqual([]);
        expect((await loadLessonMarkdown(lesson.id)).trim().length).toBeGreaterThan(0);
      }
    }
  }
  expect(learningContent.resources.filter(resource => resource.provenance.repository.includes('DSA-HUS'))).toHaveLength(0);
});
