import { expect, it } from 'vitest';
import type { LearningContent } from '../../src/domain/workspace';
import type { SemiEssayExercise } from '../../src/domain/semi-essay';
import { courseWrittenPractice, withWrittenPractice } from '../../src/core/learning/written-content';

const base: LearningContent = {
  chapters: [], topics: [], exercises: [], resources: [],
  lessons: [{ id: 'c-lesson', topicId: 'c-topic', title: 'Lesson', content: { format: 'markdown', assetPath: 'c/lesson.md' }, exerciseIds: ['existing'], resourceIds: [] }],
};
const practice: SemiEssayExercise = { id: 'c-written', lessonId: 'c-lesson', kind: 'semi-essay', title: 'Practice', prompt: 'Explain', given: [], theoryAnchors: [], steps: [] };

it('attaches authored practice to its lesson while preserving the input and existing IDs', () => {
  const result = withWrittenPractice(base, [practice]);
  expect(result.lessons[0]?.exerciseIds).toEqual(['existing', 'c-written']);
  expect(result.exercises).toEqual([practice]);
  expect(base.lessons[0]?.exerciseIds).toEqual(['existing']);
});

it('rejects orphan and duplicate practice registrations', () => {
  expect(() => withWrittenPractice(base, [{ ...practice, lessonId: 'unknown' }])).toThrow();
  expect(() => withWrittenPractice(base, [practice, practice])).toThrow();
  expect(() => withWrittenPractice({ ...base, exercises: [practice] }, [practice])).toThrow();
});

it('shows only attached writing exercises belonging to the course in lesson order', () => {
  const content = withWrittenPractice({ ...base, chapters: [{ id: 'c-chapter', courseId: 'c', title: 'Chapter', topicIds: ['c-topic'] }], topics: [{ id: 'c-topic', chapterId: 'c-chapter', title: 'Topic', lessonIds: ['c-lesson'] }] }, [practice]);
  const course = { schemaVersion: 1, id: 'c', title: 'C', subjectId: 's', language: 'vi', status: 'available', chapterIds: ['c-chapter'], resourceIds: [], provenance: { repository: 'local:c', revision: 'source', path: 'source', rights: 'approved' } } as const;
  expect(courseWrittenPractice(content, course, [practice, { ...practice, id: 'foreign', lessonId: 'other' }])).toEqual([practice]);
});
