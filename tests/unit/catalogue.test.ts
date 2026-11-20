import { expect, it } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { courseRegistry } from '../../src/infrastructure/content/catalogue';
import {
  learningContent,
  loadAllLazyCourseExercises,
  loadLessonExercises,
  loadLessonMarkdown,
} from '../../src/infrastructure/content/learning';
import { validateContent } from '../../src/core/learning/content';
import { searchEntries } from '../../src/infrastructure/content/search';
import { searchContent } from '../../src/core/learning/search';
import { resolveResourceUrl } from '../../src/infrastructure/content/resource-url';

it('validates every real manifest, lazy exercise bank, and registered Markdown body', async () => {
  const lazyExercises = await loadAllLazyCourseExercises();
  const fullContent = {
    ...learningContent,
    exercises: [...learningContent.exercises, ...lazyExercises],
  };
  expect(() => validateContent(courseRegistry.list(), fullContent)).not.toThrow();
  expect(learningContent.lessons).toHaveLength(308);
  expect(fullContent.exercises).toHaveLength(394);
  for (const lesson of learningContent.lessons) {
    const markdown = await loadLessonMarkdown(lesson.id);
    expect(markdown).toContain(lesson.title);
    expect(markdown.replace(/https?:\/\/\S+/g, '')).not.toMatch(/[a-zA-Z]\?[a-zA-Z]/);
    expect(markdown).not.toMatch(/^::(?:formula|formulas|videos|exercise|guided-exercises|practice-exercises)/m);
  }
  const chemExercises = await loadLessonExercises('general-chemistry', 'gc-atomic-structure');
  expect(chemExercises.length).toBeGreaterThan(0);
  for (const resource of learningContent.resources) if (resource.assetPath) expect(existsSync('public/' + resource.assetPath)).toBe(true);
  expect(learningContent.resources.map(r => ({ id: r.id, kind: r.kind }))).toEqual([
    { id: 'chemistry-general-video', kind: 'youtube' },
  ]);
  expect(readFileSync('public/licenses/VLDC-HUS-MIT.txt', 'utf8')).toContain('MIT License');
  expect(searchContent(searchEntries, 'khong thu nguyen').some(e => e.kind === 'lesson')).toBe(true);
  expect(searchContent(searchEntries, 'cau tao nguyen tu').some(e => e.id === 'gc-atomic-structure')).toBe(true);
  expect(searchContent(searchEntries, 'entropi').some(e => e.courseId === 'phy1159')).toBe(true);
  await expect(loadLessonMarkdown('unknown')).rejects.toThrow();
});

it('resolves Unicode PDF assets at a repository subpath with 1-based page references', () => {
  const resource = { id: 'pdf', title: 'PDF', kind: 'pdf' as const, assetPath: 'assets/vật lý/Bài 1.pdf', pages: [2], provenance: { repository: 'https://github.com/a/b', revision: 'a'.repeat(40), path: 'x', rights: 'approved' as const } };
  expect(resolveResourceUrl(resource, '/HUS_Learning_Page/')).toBe('/HUS_Learning_Page/assets/v%E1%BA%ADt%20l%C3%BD/B%C3%A0i%201.pdf#page=2');
});

it('preserves original step numbers in the reversed short-answer prompt', () => {
  const exercise = learningContent.exercises.find(e => e.id === 'phy1159-l1-1');
  expect(exercise?.prompt).toContain('**5**');
  expect(exercise?.prompt).toContain('**1**');
  expect(exercise?.prompt.indexOf('**5**')).toBeLessThan(exercise?.prompt.indexOf('**1**') ?? 0);
});
