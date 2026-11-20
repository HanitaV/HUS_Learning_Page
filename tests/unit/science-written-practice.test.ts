import { expect, it } from 'vitest';
import chemistry from '../../src/content/courses/general-chemistry/written-practice';
import physics from '../../src/content/courses/phy1159/written-practice';
import { learningContent, loadLessonExercises } from '../../src/infrastructure/content/learning';
import { courseRegistry } from '../../src/infrastructure/content/catalogue';
import { writtenPractice } from '../../src/infrastructure/content/written-practice';
import { courseWrittenPractice } from '../../src/core/learning/written-content';

it('reuses authored science questions in the shared writing studio without replacing graded exercises', async () => {
  for (const [courseId, bank] of [['general-chemistry', chemistry], ['phy1159', physics]] as const) {
    const example = bank[0];
    if (!example) throw new Error('Missing written example');
    const exercises = await loadLessonExercises(courseId, example.lessonId);
    expect(exercises.some(exercise => exercise.id === example.id)).toBe(true);
    expect(exercises.some(exercise => exercise.kind !== 'semi-essay')).toBe(true);
    const sourceId = courseId === 'general-chemistry' ? 'gc-c1-atom-001' : 'phy1159-l1-2';
    const source = exercises.find(exercise => exercise.id === sourceId);
    expect(source?.prompt.startsWith(example.prompt)).toBe(true);
    expect(example.provenance.path).toBe(source?.provenance?.path);
    expect(example.steps.every(step => step.kind === 'written-reasoning')).toBe(true);
    expect(learningContent.lessons.some(lesson => lesson.id === example.lessonId)).toBe(true);
  }
});

it('offers a registered writing activity in every course without changing the graded bank', () => {
  expect(writtenPractice).toHaveLength(20);
  for (const course of courseRegistry.list()) {
    expect(courseWrittenPractice(learningContent, course, writtenPractice).length).toBeGreaterThan(0);
  }
});
