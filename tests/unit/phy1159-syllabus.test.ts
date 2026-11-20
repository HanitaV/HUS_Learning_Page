import { describe, expect, it } from 'vitest';
import { PHY1159_SYLLABUS_CHAPTERS } from '../../src/content/courses/phy1159/syllabus-ocw';
import {
  EMPTY_SYLLABUS_PROGRESS,
  filterSyllabusChapters,
  getMitVideosForLesson,
  parseSyllabusProgress,
  readSyllabusProgress,
  resolveChapterByPreset,
  toggleChapterCompletion,
  writeSyllabusProgress,
  type StorageLike,
} from '../../src/core/physics/syllabus-ocw';
import { learningContent } from '../../src/infrastructure/content/learning';

describe('PHY1159 syllabus & MIT OCW logic', () => {
  it('covers all 9 syllabus chapters with verified Tự học labels and valid lesson IDs', () => {
    expect(PHY1159_SYLLABUS_CHAPTERS).toHaveLength(9);
    expect(PHY1159_SYLLABUS_CHAPTERS.map(c => c.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const ch2 = PHY1159_SYLLABUS_CHAPTERS.find(c => c.id === 'ch-2');
    expect(ch2?.sections.find(s => s.code === '2.3')?.selfStudy).toBe(true);

    const ch5 = PHY1159_SYLLABUS_CHAPTERS.find(c => c.id === 'ch-5');
    expect(ch5?.selfStudy).toBe(true);

    const ch8 = PHY1159_SYLLABUS_CHAPTERS.find(c => c.id === 'ch-8');
    expect(ch8?.mitResources).toHaveLength(0);
    expect(ch8?.mitGapNoteVi).toBeTruthy();

    const validLessonIds = new Set(learningContent.lessons.map(l => l.id));
    for (const chapter of PHY1159_SYLLABUS_CHAPTERS) {
      for (const lessonId of chapter.webLessonIds) {
        expect(validLessonIds.has(lessonId), `Unknown webLessonId ${lessonId}`).toBe(true);
      }
      for (const mit of chapter.mitResources) {
        expect(mit.url.startsWith('https://ocw.mit.edu/courses/')).toBe(true);
        if (mit.resourceType === 'textbook-pdf' || mit.resourceType === 'notes-slides-pdf') {
          expect(mit.youtubeId).toBeUndefined();
        }
        if (mit.youtubeId) {
          expect(mit.youtubeId).toMatch(/^[a-zA-Z0-9_-]{11}$/);
        }
        if (mit.courseCode === '8.044') {
          expect(mit.category).toBe('further-reading');
          expect(mit.resourceType).toBe('notes-slides-pdf');
        }
      }
    }

    expect(getMitVideosForLesson(PHY1159_SYLLABUS_CHAPTERS, 'phy1159-t1-1').length).toBeGreaterThan(0);
    expect(getMitVideosForLesson(PHY1159_SYLLABUS_CHAPTERS, 'phy1159-t11-1').length).toBe(3);
    expect(getMitVideosForLesson(PHY1159_SYLLABUS_CHAPTERS, 'gc-atomic-structure')).toEqual([]);
  });

  it('filters chapters accent-insensitively and resolves presets safely', () => {
    expect(resolveChapterByPreset(PHY1159_SYLLABUS_CHAPTERS, 'ch-6')?.number).toBe(6);
    expect(resolveChapterByPreset(PHY1159_SYLLABUS_CHAPTERS, 'unknown')?.number).toBe(1);

    const coriolisMatches = filterSyllabusChapters(PHY1159_SYLLABUS_CHAPTERS, 'coriolis');
    expect(coriolisMatches.map(c => c.id)).toEqual(['ch-2']);

    const entropyMatches = filterSyllabusChapters(PHY1159_SYLLABUS_CHAPTERS, 'entropi');
    expect(entropyMatches.map(c => c.id)).toEqual(['ch-9']);
  });

  it('toggles completion and handles blocked or malformed storage safely', () => {
    const step1 = toggleChapterCompletion(EMPTY_SYLLABUS_PROGRESS, 'ch-1');
    expect(step1.completedChapterIds).toEqual(['ch-1']);
    const step2 = toggleChapterCompletion(step1, 'ch-1');
    expect(step2.completedChapterIds).toEqual([]);

    expect(parseSyllabusProgress('{bad-json')).toEqual(EMPTY_SYLLABUS_PROGRESS);
    expect(parseSyllabusProgress('{"schemaVersion":2,"completedChapterIds":["ch-1"]}')).toEqual(
      EMPTY_SYLLABUS_PROGRESS,
    );

    const blockedStorage: StorageLike = {
      getItem() {
        throw new Error('blocked');
      },
      setItem() {
        throw new Error('blocked');
      },
    };
    expect(readSyllabusProgress(blockedStorage)).toEqual({
      progress: EMPTY_SYLLABUS_PROGRESS,
      storageAvailable: false,
    });
    expect(writeSyllabusProgress(blockedStorage, step1)).toBe(false);

    const store = new Map<string, string>();
    const memoryStorage: StorageLike = {
      getItem: k => store.get(k) ?? null,
      setItem: (k, v) => {
        store.set(k, v);
      },
    };
    expect(writeSyllabusProgress(memoryStorage, step1)).toBe(true);
    expect(readSyllabusProgress(memoryStorage)).toEqual({
      progress: step1,
      storageAvailable: true,
    });
  });
});
