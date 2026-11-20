// Selective DSA-HUS migration. Reads JSON as data and Markdown as text; never evaluates legacy JS.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.join(root, 'docs/DSA-HUS');
const revision = '01e2385bc1bbf16e3b7a2ab527e1b572ae06360d';
const repo = 'https://github.com/HanitaV/DSA-HUS';
const hashManifest = JSON.parse(readFileSync(path.join(root, 'docs/architecture/DSA_SOURCE_HASHES.json'), 'utf8'));
if (hashManifest.revision !== revision) throw new Error('Unexpected DSA source revision');
const read = p => {
  if (p.includes('..') || path.isAbsolute(p)) throw new Error(`Unsafe source path: ${p}`);
  const file = path.join(sourceRoot, p);
  if (!existsSync(file)) throw new Error(`Missing source: ${p}`);
  const raw = readFileSync(file, 'utf8');
  const normalized = raw.replaceAll('\r\n', '\n');
  const gitHash = text => createHash('sha1').update(`blob ${Buffer.byteLength(text)}\0`).update(text).digest('hex');
  if (hashManifest.hashes[p] !== gitHash(normalized) && hashManifest.hashes[p] !== gitHash(raw)) throw new Error(`Source mismatch: ${p}`);
  return normalized;
};
const parse = p => JSON.parse(read(p));
// Verify every source before writing any generated output.
for (const input of Object.keys(hashManifest.hashes)) read(input);
const courseCodes = ['MAT3504', 'MAT3514', 'THCS4', 'OOP'];
const courses = new Map();
const piecesDoc = parse('data/pieces.json');
const pieces = new Map(piecesDoc.pieces.map(p => [p.id, p]));
const memberships = new Map();
for (const code of courseCodes) {
  const source = parse(`data/courses/${code}.json`);
  if (source.id !== code || !Array.isArray(source.chapters)) throw new Error(`Invalid course ${code}`);
  for (const chapter of source.chapters) for (const id of chapter.pieces) {
    if (!pieces.has(id)) throw new Error(`Unknown piece ${id} in ${code}`);
    const list = memberships.get(id) ?? []; list.push(code.toLowerCase()); memberships.set(id, list);
  }
  courses.set(code.toLowerCase(), source);
}
if (memberships.size !== pieces.size) throw new Error('Course membership does not cover all source pieces');
const scoped = (course, id) => `${course}-topic-${id}`;
const lessonId = (course, id) => `${course}-${id}`;
const provenance = (p, attribution = 'HanitaV, DSA-HUS; source license not declared, rights unreviewed.') => ({ repository: repo, revision, path: p, rights: 'unreviewed', attribution });
const out = path.join(root, 'src/content/courses');
const idMap = { repository: repo, revision, rights: 'unreviewed', sourceHashes: hashManifest.hashes, legacyToScoped: {}, courses: {} };
const edges = piecesDoc.edges.filter(e => e.relation === 'prerequisite');

for (const [courseId, source] of courses) {
  const chapterIds = source.chapters.map(ch => `${courseId}-${ch.id}`);
  const learning = { chapters: [], topics: [], lessons: [], exercises: [], resources: [] };
  const searchText = {};
  const resourceByPath = new Map();
  const resourceFor = (src, fallback) => {
    if (!src?.file || typeof src.file !== 'string' || !src.file.startsWith('docs/')) return null;
    const rel = src.file.slice(5);
    if (rel.split('/').some(s => s === '..')) throw new Error(`Unsafe PDF path: ${src.file}`);
    const pathOnDisk = path.join(sourceRoot, src.file);
    if (!existsSync(pathOnDisk)) return null;
    let resourceId = resourceByPath.get(src.file)?.id;
    if (!resourceId) {
      resourceId = `${courseId}-reference-${resourceByPath.size + 1}`;
      const urlPath = src.file.split('/').map(encodeURIComponent).join('/');
      const record = { id: resourceId, title: path.basename(src.file), kind: 'pdf', url: `${repo}/blob/${revision}/${urlPath}`, provenance: provenance(src.file), pages: [] };
      resourceByPath.set(src.file, record);
      learning.resources.push(record);
    }
    const pageText = String(src.page ?? '');
    for (const range of pageText.split(',')) {
      const match = range.trim().match(/^(\d+)(?:-(\d+))?$/);
      if (!match) {
        if (range.trim()) throw new Error(`Invalid PDF page range: ${pageText}`);
        continue;
      }
      const first = Number(match[1]), last = Number(match[2] ?? match[1]);
      if (first < 1 || last < first || last - first > 1000) throw new Error(`Invalid PDF page range: ${pageText}`);
      const record = resourceByPath.get(src.file);
      for (let page = first; page <= last; page++) if (!record.pages.includes(page)) record.pages.push(page);
      record.pages.sort((a, b) => a - b);
    }
    return resourceId;
  };
  for (const chapter of source.chapters) {
    const chapterId = `${courseId}-${chapter.id}`;
    const chapterTopicIds = [];
    learning.chapters.push({ id: chapterId, courseId, title: chapter.title, topicIds: chapterTopicIds });
    for (const oldId of chapter.pieces) {
      const piece = pieces.get(oldId);
      const topicId = scoped(courseId, oldId), id = lessonId(courseId, oldId);
      chapterTopicIds.push(topicId);
      const sameCourseEdges = edges.filter(e => e.target === oldId && memberships.get(e.source)?.includes(courseId));
      learning.topics.push({ id: topicId, chapterId, title: piece.title, lessonIds: [id], ...(sameCourseEdges.length ? { prerequisiteIds: sameCourseEdges.map(e => scoped(courseId, e.source)) } : {}) });
      const original = piece.lesson;
      const markdown = read(original);
      let body = markdown.replace(/^:::\s*Đáp án\s*\n([\s\S]*?)^:::\s*$/gm, (_, answer) => `> **Đáp án**\n> ${answer.trim().replaceAll('\n', '\n> ')}\n`);
      body = body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (all, target, label) => {
        const targetId = target.split('|')[0].trim();
        if (!pieces.has(targetId)) return label ? `**${label}**` : `**${targetId}**`;
        const targetCourse = memberships.get(targetId)?.includes(courseId) ? courseId : memberships.get(targetId)?.[0];
        if (!targetCourse) return label ? `**${label}**` : `**${pieces.get(targetId).title}**`;
        return `[${label ?? pieces.get(targetId).title}](#/courses/${targetCourse}/lessons/${lessonId(targetCourse, targetId)})`;
      });
      body = `# ${piece.title}\n\n${body.trim()}\n`;
      searchText[id] = `${piece.title} ${piece.summary ?? ''} ${body}`;
      const markdownPath = `${courseId}/lessons/${id}.md`;
      const resourceIds = [];
      learning.lessons.push({ id, topicId, title: piece.title, content: { format: 'markdown', assetPath: markdownPath }, exerciseIds: [], resourceIds, summary: piece.summary, provenance: provenance(original) });
      idMap.legacyToScoped[`${courseId}:${oldId}`] = { topicId, lessonId: id };
      mkdirSync(path.join(out, courseId, 'lessons'), { recursive: true });
      writeFileSync(path.join(out, markdownPath), body);
    }
  }
  const sourcePath = `data/courses/${source.id}.json`;
  const courseRecord = { schemaVersion: 1, id: courseId, academicCode: source.id, subjectId: 'computer-science', title: source.name, language: 'vi', status: 'available', chapterIds, resourceIds: [], provenance: provenance(sourcePath) };
  const dir = path.join(out, courseId);
  writeFileSync(path.join(dir, 'course.ts'), `import type { Course } from '../../../domain/learning';\n\nexport const ${courseId} = ${JSON.stringify(courseRecord, null, 2)} as const satisfies Course;\nexport default ${courseId};\n`);
  const hasWrittenPractice = existsSync(path.join(dir, 'written-practice.ts'));
  const practiceImports = hasWrittenPractice ? `import { withWrittenPractice } from '../../../core/learning/written-content';\nimport writtenPractice from './written-practice';\n` : '';
  const contentLiteral = `${JSON.stringify(learning, null, 2)} as const satisfies LearningContent`;
  writeFileSync(path.join(dir, 'content.ts'), `import type { LearningContent } from '../../../domain/workspace';\n${practiceImports}\nexport default ${hasWrittenPractice ? `withWrittenPractice(${contentLiteral}, writtenPractice)` : contentLiteral};\n`);
  writeFileSync(path.join(dir, 'search-index.ts'), `export default ${JSON.stringify(searchText, null, 2)} satisfies Readonly<Record<string, string>>;\n`);
  idMap.courses[courseId] = { academicCode: source.id, chapterCount: learning.chapters.length, topicCount: learning.topics.length, lessonCount: learning.lessons.length, legacyIds: source.chapters.flatMap(ch => ch.pieces) };
}
writeFileSync(path.join(root, 'docs/architecture/DSA_ID_MAP.json'), JSON.stringify(idMap, null, 2) + '\n');
console.log('Imported DSA courses:', Object.entries(idMap.courses).map(([id, v]) => `${id}: ${v.chapterCount} chapters, ${v.topicCount} topics, ${v.lessonCount} lessons`).join('; '));
