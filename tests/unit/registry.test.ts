import { describe, expect, it } from 'vitest';
import { createCourseRegistry } from '../../src/core/courses/registry';
import { mat3504 } from '../../src/content/courses/mat3504/course';
import { subjects } from '../../src/content/subjects';

describe('course registry', () => {
  it('finds verified metadata by stable ID and returns undefined for an unknown course', () => {
    const registry = createCourseRegistry([mat3504], subjects);
    expect(registry.get('mat3504')?.academicCode).toBe('MAT3504');
    expect(registry.get('missing')).toBeUndefined();
    expect(registry.list()).toHaveLength(1);
  });
  it('rejects duplicate IDs instead of silently replacing courses', () => {
    expect(() => createCourseRegistry([mat3504, mat3504], subjects)).toThrow(/duplicate/i);
  });
  it('rejects unknown subject references', () => {
    expect(() => createCourseRegistry([{ ...mat3504, subjectId: 'missing' }], subjects)).toThrow(/subject/i);
  });
  it('rejects path-dependent IDs and repeated chapter references', () => {
    expect(() => createCourseRegistry([{ ...mat3504, id: '../course' }], subjects)).toThrow(/id/i);
    expect(() => createCourseRegistry([{ ...mat3504, chapterIds: ['intro', 'intro'] }], subjects)).toThrow(/chapter/i);
  });
  it('does not expose the caller array as mutable registry state', () => {
    const courses = [mat3504];
    const registry = createCourseRegistry(courses, subjects);
    courses.pop();
    expect(registry.list()).toHaveLength(1);
    expect(Object.isFrozen(registry.list())).toBe(true);
  });
});
