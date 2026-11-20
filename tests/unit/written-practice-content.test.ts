import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import mat3504 from '../../src/content/courses/mat3504/written-practice';
import mat3514 from '../../src/content/courses/mat3514/written-practice';
import thcs4 from '../../src/content/courses/thcs4/written-practice';
import oop from '../../src/content/courses/oop/written-practice';

const banks = { mat3504, mat3514, thcs4, oop };

describe('source-backed written practice', () => {
  it('offers two original self-checks per imported DSA course with traceable provenance', () => {
    const ids = new Set<string>();
    for (const [courseId, exercises] of Object.entries(banks)) {
      expect(exercises).toHaveLength(2);
      for (const exercise of exercises) {
        expect(exercise.id).toBe(`${exercise.lessonId}-written`);
        expect(ids.has(exercise.id)).toBe(false);
        ids.add(exercise.id);
        const source = readFileSync(`src/content/courses/${courseId}/lessons/${exercise.lessonId}.md`, 'utf8');
        expect(source).toContain(exercise.prompt);
        expect(exercise.provenance?.revision).toBe('01e2385bc1bbf16e3b7a2ab527e1b572ae06360d');
        expect(exercise.provenance?.path).toMatch(/^content\/lessons\/.+\.md$/);
        expect(exercise.provenance?.rights).toBe('unreviewed');
        expect(exercise.explanation?.length).toBeGreaterThan(20);
        expect(exercise.steps.length).toBeGreaterThanOrEqual(2);
        expect(exercise.steps.length).toBeLessThanOrEqual(3);
        for (const step of exercise.steps) {
          expect(step.id.startsWith(`${exercise.id}-`)).toBe(true);
          expect(step.kind).toBe('written-reasoning');
          if (step.kind !== 'written-reasoning') throw new Error('Expected a written reasoning step');
          expect(step.modelAnswer.length).toBeGreaterThan(15);
          expect(step.rubric.length).toBeGreaterThan(0);
          expect(new Set(step.rubric.map(item => item.id)).size).toBe(step.rubric.length);
          expect(step.rubric.every(item => item.prompt.trim().length > 10)).toBe(true);
        }
      }
    }
    expect(ids.size).toBe(8);
  });
});
