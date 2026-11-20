import type {
  Che1080Progress,
  Che1080Topic,
  MitLectureRef,
  MitResource,
  MitResourceKind,
} from '../../domain/mit-che1080';
import { normalizeVietnamese } from '../courses/search';

export const CHE1080_MIT_STORAGE_KEY = 'hus-learning-hub:che1080-mit:v1';
export const EMPTY_CHE1080_PROGRESS: Che1080Progress = { schemaVersion: 1, doneIds: [] };

export interface ResolvedRef {
  readonly ref: MitLectureRef;
  readonly resources: readonly MitResource[];
  /** Lecture numbers in the ref with no resource in the registry. */
  readonly missingLectures: readonly number[];
}

export function resolveTopicRefs(topic: Che1080Topic, resources: readonly MitResource[]): readonly ResolvedRef[] {
  return topic.mit.map(ref => {
    const found = resources
      .filter(r => r.courseId === ref.courseId && ref.lectures.includes(r.lectureNumber))
      .sort((a, b) => a.lectureNumber - b.lectureNumber || a.type.localeCompare(b.type));
    const present = new Set(found.map(r => r.lectureNumber));
    return { ref, resources: found, missingLectures: ref.lectures.filter(n => !present.has(n)) };
  });
}

/** Mapping integrity: every referenced lecture must exist; prerequisites must resolve and be acyclic. */
export function validateMapping(topics: readonly Che1080Topic[], resources: readonly MitResource[]): readonly string[] {
  const errors: string[] = [];
  const ids = new Set(topics.map(t => t.id));
  if (ids.size !== topics.length) errors.push('duplicate topic ids');
  for (const t of topics) {
    for (const p of t.prerequisiteTopicIds) if (!ids.has(p)) errors.push(`${t.id}: unknown prerequisite ${p}`);
    for (const r of resolveTopicRefs(t, resources)) {
      for (const n of r.missingLectures) errors.push(`${t.id}: ${r.ref.courseId} lecture ${n} not found`);
    }
  }
  const state = new Map<string, 1 | 2>();
  const byId = new Map(topics.map(t => [t.id, t]));
  const visit = (id: string): boolean => {
    if (state.get(id) === 2) return false;
    if (state.get(id) === 1) return true;
    state.set(id, 1);
    for (const p of byId.get(id)?.prerequisiteTopicIds ?? []) if (visit(p)) return true;
    state.set(id, 2);
    return false;
  };
  for (const t of topics) if (visit(t.id)) errors.push(`prerequisite cycle at ${t.id}`);
  return errors;
}

export interface MitFilter {
  readonly courseId?: string;
  readonly type?: MitResourceKind;
  readonly query?: string;
}

export function filterResources(resources: readonly MitResource[], f: MitFilter): readonly MitResource[] {
  const q = normalizeVietnamese(f.query ?? '').trim();
  return resources.filter(r => {
    if (f.courseId && r.courseId !== f.courseId) return false;
    if (f.type && r.type !== f.type) return false;
    if (!q) return true;
    return normalizeVietnamese(`${r.courseLabel} lecture ${r.lectureNumber} bai ${r.lectureNumber} ${r.title}`).includes(q);
  });
}

export interface SearchHit {
  readonly kind: 'topic' | 'resource';
  readonly id: string;
  readonly title: string;
  readonly topicId?: string;
}

/** Topic and resource search; a resource also surfaces the topics that reference its lecture. */
export function searchHub(
  query: string,
  topics: readonly Che1080Topic[],
  resources: readonly MitResource[],
): readonly SearchHit[] {
  const q = normalizeVietnamese(query).trim();
  if (!q) return [];
  const hits: SearchHit[] = [];
  for (const t of topics) {
    const hay = normalizeVietnamese([`dang ${t.number}`, t.title, t.chapterTitle, ...t.keywords].join(' '));
    const mitTitles = resolveTopicRefs(t, resources).flatMap(r => r.resources.map(x => normalizeVietnamese(x.title)));
    if (hay.includes(q) || mitTitles.some(m => m.includes(q))) {
      hits.push({ kind: 'topic', id: t.id, title: `Dạng ${t.number} – ${t.title}` });
    }
  }
  for (const r of filterResources(resources, { query })) {
    const topic = topics.find(t => t.mit.some(m => m.courseId === r.courseId && m.lectures.includes(r.lectureNumber)));
    hits.push({ kind: 'resource', id: r.id, title: `MIT ${r.courseLabel} · ${r.title}`, ...(topic ? { topicId: topic.id } : {}) });
  }
  return hits;
}

// ---- progress (stable ids: `topic:<id>` reviewed, `res:<resourceId>` completed) ----
export const topicDoneId = (topicId: string) => `topic:${topicId}`;
export const resourceDoneId = (resourceId: string) => `res:${resourceId}`;

export function toggleDone(p: Che1080Progress, id: string): Che1080Progress {
  const doneIds = p.doneIds.includes(id) ? p.doneIds.filter(x => x !== id) : [...p.doneIds, id];
  return { ...p, doneIds };
}

export function topicProgress(
  topic: Che1080Topic,
  resources: readonly MitResource[],
  p: Che1080Progress,
): { readonly done: number; readonly total: number } {
  const ids = [topicDoneId(topic.id)];
  for (const r of resolveTopicRefs(topic, resources)) for (const x of r.resources) ids.push(resourceDoneId(x.id));
  return { done: ids.filter(id => p.doneIds.includes(id)).length, total: ids.length };
}

/** Parses stored JSON; unknown/renamed ids are kept harmlessly but ignored by counts. */
export function parseProgress(raw: string | null): Che1080Progress {
  if (!raw) return EMPTY_CHE1080_PROGRESS;
  try {
    const v: unknown = JSON.parse(raw);
    if (typeof v === 'object' && v !== null && 'schemaVersion' in v && v.schemaVersion === 1 && 'doneIds' in v && Array.isArray(v.doneIds)) {
      const doneIds = [...new Set(v.doneIds.filter((x): x is string => typeof x === 'string'))];
      const last = 'lastResourceId' in v && typeof v.lastResourceId === 'string' ? v.lastResourceId : undefined;
      return last ? { schemaVersion: 1, doneIds, lastResourceId: last } : { schemaVersion: 1, doneIds };
    }
  } catch {
    // fall through
  }
  return EMPTY_CHE1080_PROGRESS;
}
