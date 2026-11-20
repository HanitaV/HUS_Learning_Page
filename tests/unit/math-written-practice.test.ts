import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import mat1091 from '../../src/content/courses/mat1091/content';
import mat1101 from '../../src/content/courses/mat1101/content';
import mat1091Course from '../../src/content/courses/mat1091/course';
import mat1101Course from '../../src/content/courses/mat1101/course';
import { validateContent } from '../../src/core/learning/content';

it('links one real worked excerpt and written practice per owned math textbook', () => {
  expect(() => validateContent([mat1091Course], mat1091)).not.toThrow();
  expect(() => validateContent([mat1101Course], mat1101)).not.toThrow();
  for (const [courseId, content, lessonId, expectedChapters, expectedLessons, expectedExercises] of [
    ['mat1091', mat1091, 'mat1091-supremum-infimum', 5, 14, 4],
    ['mat1101', mat1101, 'mat1101-density-normalization', 7, 14, 6],
  ] as const) {
    expect(content.chapters).toHaveLength(expectedChapters);
    expect(content.topics).toHaveLength(expectedLessons);
    expect(content.lessons).toHaveLength(expectedLessons);
    expect(content.exercises).toHaveLength(expectedExercises);
    const lesson = content.lessons.find(item => item.id === lessonId);
    const exercise = content.exercises.find(item => item.id === `${lessonId}-written`);
    expect(lesson?.id).toBe(lessonId);
    expect(lesson?.exerciseIds).toEqual([`${lessonId}-written`]);
    expect(lesson?.resourceIds).toEqual([]);
    expect(exercise?.lessonId).toBe(lessonId);
    expect(exercise?.kind).toBe('semi-essay');
    expect(exercise?.provenance).toEqual(lesson?.provenance);
    for (const item of content.lessons) {
      expect(item.resourceIds).toEqual([]);
      expect(item.provenance?.repository).toBe('local:docs/HUS-learning-resource');
      expect(item.provenance?.rights).toBe('approved');
    }
    const body = readFileSync(`src/content/courses/${courseId}/lessons/${lessonId}.md`, 'utf8');
    expect(body).toContain(exercise?.prompt);
    if (exercise?.kind !== 'semi-essay') throw new Error('Expected semi-essay');
    expect(exercise.steps).toHaveLength(2);
    expect(exercise.steps.every(step => step.kind === 'written-reasoning')).toBe(true);
    expect(body).toContain(courseId === 'mat1091' ? '\\sup A=1\\notin A' : 'Suy ra $c=12$');
  }
});

it.skipIf(!existsSync('docs/HUS-learning-resource'))('matches math lesson provenance to the source archive', () => {
  for (const [courseId, content, lessonId] of [
    ['mat1091', mat1091, 'mat1091-supremum-infimum'],
    ['mat1101', mat1101, 'mat1101-density-normalization'],
  ] as const) {
    for (const item of content.lessons) {
      const src = readFileSync(`docs/HUS-learning-resource/${item.provenance?.path}`);
      expect(item.provenance?.revision).toBe(`sha256:${createHash('sha256').update(src).digest('hex')}`);
    }
    const lesson = content.lessons.find(item => item.id === lessonId);
    const provenance = lesson?.provenance;
    const source = readFileSync(`docs/HUS-learning-resource/${provenance?.path}`);
    expect(source.toString('utf8')).toContain(courseId === 'mat1091'
      ? '\\vd{Cận trên đúng, cận dưới đúng}\\label{vd:supinf}'
      : '\\begin{vidu}{Một tích phân chuẩn bị cho D07}');
  }
});
