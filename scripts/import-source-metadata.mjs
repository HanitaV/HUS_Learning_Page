// Metadata/link migration only: no third-party academic bodies or assets copied.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
function json(path, sha) {
  const b = Buffer.from(readFileSync(path, 'utf8').replaceAll('\r\n', '\n'));
  if (createHash('sha1').update(`blob ${b.length}\0`).update(b).digest('hex') !== sha) throw new Error(`Source mismatch: ${path}`);
  return JSON.parse(b.toString('utf8'));
}
function write(folder, course, content) {
  const target = `src/content/courses/${folder}`;
  mkdirSync(target, { recursive: true });
  writeFileSync(`${target}/course.ts`, `import type { Course } from '../../../domain/learning';\n\nexport default ${JSON.stringify(course, null, 2)} as const satisfies Course;\n`);
  writeFileSync(`${target}/content.ts`, `import type { LearningContent } from '../../../domain/workspace';\n\nexport default ${JSON.stringify(content, null, 2)} as const satisfies LearningContent;\n`);
}
const revision = '01e2385bc1bbf16e3b7a2ab527e1b572ae06360d';
for (const [code, sha] of [['MAT3514', 'd1c5102f783bebf29d0b22cac026b71f4252c1a8'], ['THCS4', '2e7f770731a2fab1dcbf546903055c5d4e23361f'], ['OOP', 'b39190c0347264e7338b8bacd64053b0321ec220']]) {
  const source = json(`docs/DSA-HUS/data/courses/${code}.json`, sha);
  if (source.id !== code || typeof source.name !== 'string') throw new Error('Invalid source metadata');
  const id = code.toLowerCase();
  const provenance = { repository: 'https://github.com/HanitaV/DSA-HUS', revision, path: `data/courses/${code}.json`, rights: 'unreviewed' };
  write(id, { schemaVersion: 1, id, academicCode: code, subjectId: 'computer-science', title: source.name, language: 'vi', status: 'metadata-only', chapterIds: [], resourceIds: [id + '-source'], provenance }, { chapters: [], topics: [], lessons: [], exercises: [], resources: [{ id: id + '-source', title: source.name + ' — nguồn DSA-HUS', kind: 'external', url: `${provenance.repository}/blob/${revision}/${provenance.path}`, provenance }] });
}
const chemRevision = 'ad043333d24f67da5d11611678754397f4595e49';
const repository = 'https://github.com/HanitaV/Chemistry';
const base = 'src/content/courses/general-chemistry/';
const provenance = path => ({ repository, revision: chemRevision, path, rights: 'unreviewed' });
const documents = json('docs/Chemistry/' + base + 'documents.json', '1a337957b059f9f40600ec49b9a3a58b1e653691');
const videos = json('docs/Chemistry/' + base + 'video-segments.json', '7a324ef621c2aa22f945d64521125c61d977d78d');
if (!Array.isArray(documents.documents) || !Array.isArray(videos.videos)) throw new Error('Invalid source lists');
const resources = [{ id: 'chemistry-source', title: 'Hóa học đại cương — nguồn Chemistry', kind: 'external', url: `${repository}/tree/${chemRevision}/${base}`, provenance: provenance(base) }];
for (const doc of documents.documents) {
  if (typeof doc.id !== 'string' || typeof doc.title !== 'string' || typeof doc.path !== 'string' || !doc.path.startsWith('documents/')) throw new Error('Invalid document');
  resources.push({ id: 'chemistry-' + doc.id, title: doc.title, kind: 'pdf', url: `${repository}/blob/${chemRevision}/public/${doc.path.split('/').map(encodeURIComponent).join('/')}`, provenance: provenance('public/' + doc.path) });
}
for (const video of videos.videos) {
  if (typeof video.title !== 'string' || !/^[a-zA-Z0-9_-]{11}$/.test(video.youtubeId)) throw new Error('Invalid video');
  resources.push({ id: 'chemistry-general-video', title: video.title, kind: 'youtube', url: `https://www.youtube.com/watch?v=${video.youtubeId}`, provenance: provenance(base + 'video-segments.json') });
}
write('general-chemistry', { schemaVersion: 1, id: 'general-chemistry', subjectId: 'chemistry', title: 'Hóa học đại cương', language: 'vi', status: 'metadata-only', chapterIds: [], resourceIds: resources.map(r => r.id), provenance: provenance(base + 'course.json') }, { chapters: [], topics: [], lessons: [], exercises: [], resources });
console.log('Imported 3 DSA course metadata records and Chemistry source/PDF/video links; no academic files copied.');
