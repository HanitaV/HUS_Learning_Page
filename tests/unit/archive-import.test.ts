import { existsSync } from 'node:fs';
import { expect, it } from 'vitest';
import mat1091 from '../../src/content/courses/mat1091/course';
import mat1091Content from '../../src/content/courses/mat1091/content';
import mat1101 from '../../src/content/courses/mat1101/course';
import mat1101Content from '../../src/content/courses/mat1101/content';

it('registers sourced lessons per imported course without publishing raw textbook PDFs', () => {
  const imports = [
    {
      course: mat1091,
      content: mat1091Content,
      asset: 'public/assets/mat1091/gt1.pdf',
      chapters: 5,
      lessons: 14,
      exercises: 4,
    },
    {
      course: mat1101,
      content: mat1101Content,
      asset: 'public/assets/mat1101/Giao_trinh_XSTK_MAT1101.pdf',
      chapters: 7,
      lessons: 14,
      exercises: 6,
    },
  ] as const;

  for (const item of imports) {
    expect(item.course.status).toBe('available');
    expect(item.course.chapterIds).toHaveLength(item.chapters);
    expect(item.course.resourceIds).toEqual([]);
    expect(item.content.chapters).toHaveLength(item.chapters);
    expect(item.content.topics).toHaveLength(item.lessons);
    expect(item.content.lessons).toHaveLength(item.lessons);
    expect(item.content.exercises).toHaveLength(item.exercises);
    expect(item.content.resources).toEqual([]);
    expect(existsSync(item.asset)).toBe(false);
  }
});
