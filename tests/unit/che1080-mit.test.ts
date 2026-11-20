import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { MIT_CHE1080_RESOURCES } from '../../src/content/mit/che1080-resources';
import { CHE1080_TOPICS } from '../../src/content/mit/che1080-topics';
import { courseLessons } from '../../src/core/learning/content';
import { courseRegistry } from '../../src/infrastructure/content/catalogue';
import { learningContent } from '../../src/infrastructure/content/learning';
import {
  getChe1080MitSupplementForLesson,
  parseProgress,
  resolveTopicRefs,
  searchHub,
  toggleDone,
  topicDoneId,
  topicProgress,
  validateMapping,
} from '../../src/core/chemistry/mit-mapping';
import {
  activationEnergy,
  arrheniusK2,
  hendersonPh,
  hydrogenLevelEv,
  hydrogenTransition,
  kFromHalfLife,
  nernst,
  weakAcidPh,
  halfLifeFromK,
} from '../../src/core/chemistry/che1080-calc';

describe('CHE1080 \u2194 MIT mapping', () => {
  it('has the 11 question types with the documented exam frequencies', () => {
    expect(CHE1080_TOPICS.map(t => t.examFrequency.appeared)).toEqual([6, 6, 6, 5, 6, 6, 4, 6, 5, 3, 6]);
    expect(CHE1080_TOPICS.map(t => t.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it('resolves every referenced lecture and has acyclic prerequisites', () => {
    expect(validateMapping(CHE1080_TOPICS, MIT_CHE1080_RESOURCES)).toEqual([]);
  });
  it('only links lessons that exist in general-chemistry', () => {
    const course = courseRegistry.get('general-chemistry');
    const ids = new Set(courseLessons(learningContent, course).map(l => l.id));
    for (const t of CHE1080_TOPICS) for (const id of t.lessonIds) expect(ids.has(id), id).toBe(true);
  });
  it('OCW urls are https', () => {
    for (const r of MIT_CHE1080_RESOURCES) expect(r.ocwUrl.startsWith('https://ocw.mit.edu/courses/')).toBe(true);
  });
  for (const archive of ['5.111sc-fall-2014', '5.60-spring-2008']) {
    it.skipIf(!existsSync(`docs/${archive}`))(`verified local files exist in ${archive}`, () => {
      for (const r of MIT_CHE1080_RESOURCES) {
        if (r.localPath?.startsWith(`docs/${archive}/`)) expect(existsSync(r.localPath), r.localPath).toBe(true);
      }
    });
  }
  it('maps lecture 13 of 5.111SC to MO theory with all four resource types', () => {
    const mo = CHE1080_TOPICS.find(t => t.number === 2)!;
    const first = resolveTopicRefs(mo, MIT_CHE1080_RESOURCES)[0]!;
    expect(first.resources.map(r => r.type).sort()).toEqual(['exercise', 'lecture-notes', 'solution', 'video']);
    expect(first.resources[0]!.title).toContain('Molecular Orbital');
  });
  it('searches Vietnamese and English terms', () => {
    const hits = searchHub('Gibbs', CHE1080_TOPICS, MIT_CHE1080_RESOURCES);
    expect(hits.some(h => h.kind === 'topic' && h.title.includes('D\u1ea1ng 3'))).toBe(true);
    expect(hits.some(h => h.kind === 'resource')).toBe(true);
    expect(searchHub('dung dich dem', CHE1080_TOPICS, MIT_CHE1080_RESOURCES).some(h => h.id === 'che1080-d9-buffer')).toBe(true);
  });
  it('tracks progress and tolerates malformed storage', () => {
    const t = CHE1080_TOPICS[0]!;
    const p = toggleDone(parseProgress(null), topicDoneId(t.id));
    expect(topicProgress(t, MIT_CHE1080_RESOURCES, p).done).toBe(1);
    expect(parseProgress('{bad')).toEqual({ schemaVersion: 1, doneIds: [] });
    expect(parseProgress(JSON.stringify(p)).doneIds).toEqual([topicDoneId(t.id)]);
  });
  it('generated manifest is not hand-edited (header present)', () => {
    expect(readFileSync('src/content/mit/che1080-resources.ts', 'utf8').startsWith('// GENERATED')).toBe(true);
  });
  it('returns targeted supplementary MIT items and optional advanced reading per lesson', () => {
    const mo = getChe1080MitSupplementForLesson(CHE1080_TOPICS, MIT_CHE1080_RESOURCES, 'gc-mo-theory');
    expect(mo.supplement.length).toBeGreaterThan(0);
    expect(mo.supplement[0]?.resourceType).toBe('video-lecture');
    expect(mo.supplement[0]?.youtubeId).toMatch(/^[a-zA-Z0-9_-]{11}$/);
    expect(mo.furtherReading.length).toBeGreaterThan(0);
    expect(mo.furtherReading.every(r => r.courseCode === '5.112')).toBe(true);

    const empty = getChe1080MitSupplementForLesson(CHE1080_TOPICS, MIT_CHE1080_RESOURCES, 'phy1159-t1-1');
    expect(empty.supplement).toEqual([]);
    expect(empty.furtherReading).toEqual([]);
  });
});

describe('CHE1080 calculations', () => {
  it('hydrogen levels and Lyman/Balmer wavelengths', () => {
    expect(hydrogenLevelEv(1)).toBeCloseTo(-13.6057, 3);
    expect(hydrogenLevelEv(2, 2)).toBeCloseTo(-13.6057, 3);
    expect(hydrogenTransition(2, 1).wavelengthNm!).toBeCloseTo(121.5, 0);
    expect(hydrogenTransition(3, 2)).toMatchObject({ kind: 'emission' });
    expect(hydrogenTransition(3, 2).wavelengthNm!).toBeCloseTo(656.1, 0);
    expect(hydrogenTransition(1, 3).kind).toBe('absorption');
  });
  it('first-order and Arrhenius relations round-trip', () => {
    expect(halfLifeFromK(kFromHalfLife(10))).toBeCloseTo(10, 10);
    const ea = 75000;
    const k2 = arrheniusK2(1e-3, 300, 320, ea);
    expect(activationEnergy(1e-3, 300, k2, 320)).toBeCloseTo(ea, 3);
  });
  it('pH of weak acid, buffer and Nernst', () => {
    expect(weakAcidPh(1.8e-5, 0.1)).toBeCloseTo(2.88, 2);
    expect(hendersonPh(4.76, 0.1, 0.1)).toBeCloseTo(4.76, 10);
    expect(nernst(1.1, 2, 1)).toBeCloseTo(1.1, 10);
    expect(nernst(1.1, 2, 10)).toBeCloseTo(1.1 - 0.02958, 3);
  });
});
