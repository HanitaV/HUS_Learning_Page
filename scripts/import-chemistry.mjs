// Deterministic migration of General Chemistry content from docs/Chemistry.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const REVISION = 'ad043333d24f67da5d11611678754397f4595e49';
const REPO = 'https://github.com/HanitaV/Chemistry';
const SOURCE_ROOT = 'docs/Chemistry/src/content/courses/general-chemistry';
const TARGET_ROOT = 'src/content/courses/general-chemistry';

const DOC_RESOURCE_MAP = {
  'doc-ch1-theory': 'chemistry-doc-ch1-theory',
  'doc-ch1-exercises': 'chemistry-doc-ch1-exercises',
  'doc-ch2-theory': 'chemistry-doc-ch2-theory',
  'doc-ch3-theory': 'chemistry-doc-ch3-theory',
};

const CALLOUT_LABELS = {
  key: 'Trọng tâm',
  mistake: 'Lỗi thường gặp',
  note: 'Ghi chú',
  warning: 'Lưu ý',
  tip: 'Mẹo học nhanh',
};

const provenance = (path, attribution) => ({
  repository: REPO,
  revision: REVISION,
  path,
  rights: 'approved',
  ...(attribution ? { attribution } : {}),
});

const stableSlug = raw =>
  String(raw)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const chapterIdOf = ch => `gc-ch-${ch.order}`;
const lessonIdOf = slug => `gc-${stableSlug(slug)}`;
const topicIdOf = slug => `gc-${stableSlug(slug)}-topic`;
const exerciseIdOf = id => `gc-${stableSlug(id)}`;

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const lines = match[1].split(/\r?\n/);
  const meta = {
    objectives: [],
    prerequisites: [],
    formulaIds: [],
    videoSegmentIds: [],
    documentIds: [],
  };
  let currentList = null;
  for (const line of lines) {
    if (!line.trim()) continue;
    const docMatch = line.match(/^\s*-?\s*documentId:\s*(\S+)/);
    if (docMatch) {
      meta.documentIds.push(docMatch[1].trim());
      currentList = null;
      continue;
    }
    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentList) {
      const val = listItem[1].trim().replace(/^['"]|['"]$/g, '');
      if (val) meta[currentList].push(val);
      continue;
    }
    const kv = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!kv) {
      currentList = null;
      continue;
    }
    const [, key, rawVal] = kv;
    const val = rawVal.trim();
    if (val === '') {
      currentList = Array.isArray(meta[key]) ? key : null;
      continue;
    }
    currentList = null;
    if (val.startsWith('[') && val.endsWith(']')) {
      const items = val
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
      meta[key] = items;
    } else {
      meta[key] = val.replace(/^['"]|['"]$/g, '');
    }
  }
  return { meta, body: match[2] };
}

function renderFormulaBlock(formula) {
  const lines = [`> **Công thức — ${formula.name}**`, '>', `> $$${formula.latex}$$`];
  if (Array.isArray(formula.symbols) && formula.symbols.length > 0) {
    const syms = formula.symbols
      .map(s => `$${s.symbol}$: ${s.meaning}${s.unit ? ` (${s.unit})` : ''}`)
      .join('; ');
    lines.push('>', `> Trong đó: ${syms}.`);
  }
  if (Array.isArray(formula.conditions) && formula.conditions.length > 0) {
    lines.push('>', `> *Điều kiện:* ${formula.conditions.join(' ')}`);
  }
  return lines.join('\n');
}

function formatTimestamp(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const pad = n => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

function transformMarkdown(body, meta, formulaById, segmentById, validLessonSlugs) {
  let out = body.replace(/\r\n/g, '\n');

  // 1. Convert :::callout ... ::: blocks into Markdown blockquotes
  out = out.replace(/^:::(key|mistake|note|warning|tip)\s*\n([\s\S]*?)^:::\s*$/gm, (_, kind, inner) => {
    const label = CALLOUT_LABELS[kind] ?? 'Ghi chú';
    const quoted = inner
      .trim()
      .split('\n')
      .map(line => (line.trim() ? `> ${line}` : '>'))
      .join('\n');
    return `\n\n> **${label}**\n>\n${quoted}\n\n`;
  });

  // 2. Expand inline ::formula{id=...}
  const usedFormulas = new Set();
  out = out.replace(/^::formula\{id=([^}]+)\}\s*$/gm, (_, rawId) => {
    const id = rawId.trim().replace(/^['"]|['"]$/g, '');
    const formula = formulaById.get(id);
    if (!formula) return '';
    usedFormulas.add(id);
    return `\n\n${renderFormulaBlock(formula)}\n\n`;
  });

  // 3. Expand ::formulas with remaining frontmatter formulaIds
  out = out.replace(/^::formulas\s*$/gm, () => {
    const remaining = (meta.formulaIds ?? [])
      .filter(id => !usedFormulas.has(id) && formulaById.has(id))
      .map(id => {
        usedFormulas.add(id);
        return renderFormulaBlock(formulaById.get(id));
      });
    if (remaining.length === 0) return '';
    return `\n\n### Công thức trọng tâm\n\n${remaining.join('\n\n')}\n\n`;
  });

  // 4. Expand ::videos with linked YouTube timestamps
  out = out.replace(/^::videos\s*$/gm, () => {
    const segs = (meta.videoSegmentIds ?? [])
      .map(id => segmentById.get(id))
      .filter(Boolean);
    if (segs.length === 0) return '';
    const items = segs.map(seg => {
      const url = `https://www.youtube.com/watch?v=${seg.youtubeId}&t=${seg.startSeconds}s`;
      const range = `${formatTimestamp(seg.startSeconds)}–${formatTimestamp(seg.endSeconds)}`;
      return `- [${seg.titleVi || seg.title} (${range})](${url})`;
    });
    return `\n\n### Video bài giảng tham khảo\n\n${items.join('\n')}\n\n`;
  });

  // 5. Strip exercise embed placeholders (LessonPage renders interactive exercises below)
  out = out.replace(/^::(?:exercise\{[^}]*\}|guided-exercises|practice-exercises)\s*$/gm, '');

  // 6. Rewrite internal links to HashRouter routes and strip dead legacy drawing-lab links
  out = out.replace(/\(\/courses\/general-chemistry\/lessons\/([a-z0-9-]+)\)/g, (_, slug) =>
    validLessonSlugs.has(slug)
      ? `(#/courses/general-chemistry/lessons/${lessonIdOf(slug)})`
      : '(#/courses/general-chemistry)',
  );
  out = out.replace(/\(\/courses\/general-chemistry(?:\/[^)]*)?\)/g, '(#/courses/general-chemistry)');
  out = out.replace(/\[([^\]]+)\]\(\/drawing-lab[^)]*\)/g, '$1');

  // 7. Clean excessive blank lines and prepend H1 title
  out = out.replace(/\n{3,}/g, '\n\n').trim();
  const titleHeading = `# ${meta.title}`;
  if (!out.startsWith('# ')) {
    out = `${titleHeading}\n\n${out}`;
  }
  return `${out}\n`;
}

function toPlainSearchText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$\n]+\$/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`|~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatNumericAnswer(val) {
  if (typeof val !== 'number' || !Number.isFinite(val)) return String(val).trim();
  if (Number.isInteger(val)) return String(val);
  // Keep readable decimal precision without floating-point noise
  const rounded = Number(val.toPrecision(6));
  return String(rounded);
}

function convertExercise(ex, sourceRelPath, mappedLessonId) {
  const steps = Array.isArray(ex.steps) ? ex.steps : [];
  const chosen =
    steps.find(s => s.type === 'single-choice' || s.type === 'formula-selection') ??
    steps.find(s => s.type === 'multiple-choice') ??
    steps.find(s => s.type === 'short-answer') ??
    steps.find(s => s.type === 'numeric') ??
    steps.find(s => s.type === 'math-expression') ??
    null;

  if (!chosen) return null;

  const promptParts = [];
  if (ex.statement && ex.statement.trim()) promptParts.push(ex.statement.trim());
  if (chosen.prompt && chosen.prompt.trim() && chosen.prompt.trim() !== ex.statement?.trim()) {
    promptParts.push(`**Câu hỏi:** ${chosen.prompt.trim()}`);
  }
  if (chosen.type === 'numeric' && chosen.unit) {
    promptParts.push(`*(Nhập giá trị số theo đơn vị ${chosen.unit})*`);
  }
  const prompt = promptParts.join('\n\n');

  const explanationParts = [];
  if (chosen.explanation && chosen.explanation.trim()) explanationParts.push(chosen.explanation.trim());
  if (ex.solution && ex.solution.trim() && ex.solution.trim() !== chosen.explanation?.trim()) {
    explanationParts.push(`**Lời giải đầy đủ:**\n\n${ex.solution.trim()}`);
  } else if (ex.finalAnswer && ex.finalAnswer.trim()) {
    explanationParts.push(`**Đáp án:** ${ex.finalAnswer.trim()}`);
  }
  const explanation = explanationParts.join('\n\n') || undefined;

  const base = {
    id: exerciseIdOf(ex.id),
    lessonId: mappedLessonId,
    title: ex.title?.trim() || ex.skill?.trim() || ex.id,
    prompt,
    ...(explanation ? { explanation } : {}),
    provenance: provenance(sourceRelPath, ex.source?.note),
  };

  if (chosen.type === 'single-choice' || chosen.type === 'formula-selection') {
    const options = Array.isArray(chosen.options) ? chosen.options : [];
    const choices = options.map((opt, idx) => ({
      id: `option-${idx + 1}`,
      label: String(opt.text ?? opt.label ?? '').trim(),
      origId: String(opt.id),
    }));
    const correctChoice = choices.find(c => c.origId === String(chosen.correctAnswer));
    if (!correctChoice || choices.length < 2) return null;
    return {
      ...base,
      kind: 'multiple-choice',
      choices: choices.map(({ id, label }) => ({ id, label })),
      answers: [correctChoice.id],
    };
  }

  if (chosen.type === 'multiple-choice') {
    const options = Array.isArray(chosen.options) ? chosen.options : [];
    const choices = options.map((opt, idx) => ({
      id: `option-${idx + 1}`,
      label: String(opt.text ?? opt.label ?? '').trim(),
      origId: String(opt.id),
    }));
    const rawAnswers = Array.isArray(chosen.correctAnswer) ? chosen.correctAnswer.map(String) : [String(chosen.correctAnswer)];
    const answers = [...new Set(rawAnswers.map(a => choices.find(c => c.origId === a)?.id).filter(Boolean))];
    if (answers.length === 0 || choices.length < 2) return null;
    return {
      ...base,
      kind: answers.length === 1 ? 'multiple-choice' : 'multiple-answer',
      choices: choices.map(({ id, label }) => ({ id, label })),
      answers,
    };
  }

  // short-answer / numeric / math-expression -> short-answer
  let rawAnswers = [];
  if (chosen.type === 'numeric') {
    const canonical = formatNumericAnswer(chosen.correctAnswer);
    rawAnswers.push(canonical);
    if (canonical.includes('.')) rawAnswers.push(canonical.replace('.', ','));
  } else if (Array.isArray(chosen.correctAnswer)) {
    rawAnswers = chosen.correctAnswer.map(a => String(a).trim());
  } else if (chosen.correctAnswer !== undefined && chosen.correctAnswer !== null) {
    rawAnswers = [String(chosen.correctAnswer).trim()];
  }
  const answers = [...new Set(rawAnswers.filter(a => a.length > 0))];
  if (answers.length === 0) return null;

  return {
    ...base,
    kind: 'short-answer',
    answers,
  };
}

// --- Main migration ---
const courseJson = JSON.parse(readFileSync(join(SOURCE_ROOT, 'course.json'), 'utf8'));
const formulasJson = JSON.parse(readFileSync(join(SOURCE_ROOT, 'formulas.json'), 'utf8'));
const videosJson = JSON.parse(readFileSync(join(SOURCE_ROOT, 'video-segments.json'), 'utf8'));

const formulaById = new Map((formulasJson.formulas ?? []).map(f => [f.id, f]));
const segmentById = new Map((videosJson.segments ?? []).map(s => [s.id, s]));

// Only keep the public Chemistry YouTube course video; exclude all PDFs and external repo document links
const resources = [
  {
    id: 'chemistry-general-video',
    title: 'General Chemistry – Full University Course',
    kind: 'youtube',
    url: 'https://www.youtube.com/watch?v=6OV3tmt9uhs',
    provenance: provenance('src/content/courses/general-chemistry/video-segments.json'),
  },
];

// Pass 1: discover all valid lesson slugs across all chapters
const chapterRecords = courseJson.chapters.map(chFolder => {
  const chDir = join(SOURCE_ROOT, 'chapters', chFolder);
  const ch = JSON.parse(readFileSync(join(chDir, 'chapter.json'), 'utf8'));
  return { chFolder, chDir, ch };
});
const validLessonSlugs = new Set(chapterRecords.flatMap(({ ch }) => ch.lessonIds));

// Clean and recreate lessons directory
const lessonsOutDir = join(TARGET_ROOT, 'lessons');
rmSync(lessonsOutDir, { recursive: true, force: true });
mkdirSync(lessonsOutDir, { recursive: true });

const chapters = [];
const topics = [];
const lessons = [];
const exercises = [];
const searchText = {};
const idMap = { chapters: {}, lessons: {}, exercises: {} };
const seenExerciseIds = new Set();

for (const { chFolder, chDir, ch } of chapterRecords) {
  const mappedChapterId = chapterIdOf(ch);
  idMap.chapters[ch.id] = mappedChapterId;

  // Read all lesson markdown files in this chapter keyed by frontmatter id
  const lessonFilesById = new Map();
  for (const filename of readdirSync(join(chDir, 'lessons')).filter(f => f.endsWith('.md'))) {
    const raw = readFileSync(join(chDir, 'lessons', filename), 'utf8');
    const parsed = parseFrontmatter(raw);
    if (parsed.meta.id) {
      lessonFilesById.set(parsed.meta.id, {
        filename,
        relPath: `src/content/courses/general-chemistry/chapters/${chFolder}/lessons/${filename}`,
        ...parsed,
      });
    }
  }

  // Read all exercises in this chapter grouped by lessonId
  const exercisesByLessonSlug = new Map();
  for (const filename of readdirSync(join(chDir, 'exercises')).filter(f => f.endsWith('.json')).sort()) {
    const relPath = `src/content/courses/general-chemistry/chapters/${chFolder}/exercises/${filename}`;
    const data = JSON.parse(readFileSync(join(chDir, 'exercises', filename), 'utf8'));
    for (const ex of data.exercises ?? []) {
      const targetSlug = validLessonSlugs.has(ex.lessonId) ? ex.lessonId : ch.lessonIds[0];
      const mappedExId = exerciseIdOf(ex.id);
      if (seenExerciseIds.has(mappedExId)) continue;
      const converted = convertExercise(ex, relPath, lessonIdOf(targetSlug));
      if (!converted) continue;
      seenExerciseIds.add(mappedExId);
      idMap.exercises[ex.id] = mappedExId;
      if (!exercisesByLessonSlug.has(targetSlug)) exercisesByLessonSlug.set(targetSlug, []);
      exercisesByLessonSlug.get(targetSlug).push(converted);
    }
  }

  const chapterTopicIds = [];
  for (const slug of ch.lessonIds) {
    const file = lessonFilesById.get(slug);
    if (!file) throw new Error(`Missing lesson file for ${slug} in ${chFolder}`);
    const mappedLessonId = lessonIdOf(slug);
    const mappedTopicId = topicIdOf(slug);
    idMap.lessons[slug] = mappedLessonId;
    chapterTopicIds.push(mappedTopicId);

    // Filter prerequisites to valid existing topics and avoid self-reference
    const prereqTopicIds = [
      ...new Set(
        (file.meta.prerequisites ?? [])
          .filter(p => p !== slug && validLessonSlugs.has(p))
          .map(topicIdOf),
      ),
    ];

    topics.push({
      id: mappedTopicId,
      chapterId: mappedChapterId,
      title: file.meta.title,
      lessonIds: [mappedLessonId],
      prerequisiteIds: prereqTopicIds,
    });

    const lessonEx = exercisesByLessonSlug.get(slug) ?? [];
    exercises.push(...lessonEx);

    const resIds = new Set();
    if ((file.meta.videoSegmentIds ?? []).length > 0) {
      resIds.add('chemistry-general-video');
    }

    const transformedMd = transformMarkdown(file.body, file.meta, formulaById, segmentById, validLessonSlugs);
    writeFileSync(join(lessonsOutDir, `${mappedLessonId}.md`), transformedMd, 'utf8');
    searchText[mappedLessonId] = toPlainSearchText(transformedMd);

    lessons.push({
      id: mappedLessonId,
      topicId: mappedTopicId,
      title: file.meta.title,
      summary: file.meta.summary || undefined,
      content: {
        format: 'markdown',
        assetPath: `general-chemistry/lessons/${mappedLessonId}.md`,
      },
      exerciseIds: lessonEx.map(e => e.id),
      resourceIds: [...resIds],
      provenance: provenance(file.relPath, 'Biên soạn từ nguồn Hóa học đại cương (Chemistry).'),
    });
  }

  chapters.push({
    id: mappedChapterId,
    courseId: 'general-chemistry',
    title: ch.title,
    topicIds: chapterTopicIds,
  });
}

// Break any accidental prerequisite cycles if present (defensive check)
const visiting = new Set();
const visited = new Set();
const topicById = new Map(topics.map(t => [t.id, t]));
function breakCycles(id) {
  if (visited.has(id)) return;
  visiting.add(id);
  const topic = topicById.get(id);
  if (topic) {
    topic.prerequisiteIds = topic.prerequisiteIds.filter(pid => {
      if (visiting.has(pid)) return false;
      breakCycles(pid);
      return true;
    });
  }
  visiting.delete(id);
  visited.add(id);
}
for (const t of topics) breakCycles(t.id);

const contentData = {
  chapters,
  topics,
  lessons,
  exercises: [], // Lazy-loaded via exercises.ts to keep initial JS bundle lean
  resources,
};

const courseData = {
  schemaVersion: 1,
  id: 'general-chemistry',
  academicCode: 'CHE1080',
  subjectId: 'chemistry',
  title: courseJson.title,
  language: 'vi',
  status: 'available',
  chapterIds: chapters.map(c => c.id),
  resourceIds: resources.map(r => r.id),
  provenance: provenance('src/content/courses/general-chemistry/course.json'),
};

writeFileSync(
  join(TARGET_ROOT, 'course.ts'),
  `import type { Course } from '../../../domain/learning';\n\nexport default ${JSON.stringify(courseData, null, 2)} as const satisfies Course;\n`,
  'utf8',
);

const hasWrittenPractice = existsSync(join(TARGET_ROOT, 'written-practice.ts'));
const practiceImports = hasWrittenPractice ? `import writtenPractice from './written-practice';\nimport { withWrittenPractice } from '../../../core/learning/written-content';\n` : '';
const contentLiteral = `${JSON.stringify(contentData, null, 2)} as const satisfies LearningContent`;
writeFileSync(
  join(TARGET_ROOT, 'content.ts'),
  `import type { LearningContent } from '../../../domain/workspace';\n${practiceImports}\n${hasWrittenPractice ? `const content = withWrittenPractice(${contentLiteral}, writtenPractice);\nexport default { ...content, exercises: [] } satisfies LearningContent;` : `export default ${contentLiteral};`}\n`,
  'utf8',
);

writeFileSync(
  join(TARGET_ROOT, 'exercises.ts'),
  `import type { ExerciseDefinition } from '../../../domain/workspace';\n${hasWrittenPractice ? `import writtenPractice from './written-practice';\n` : ''}\nexport default ${hasWrittenPractice ? `[...${JSON.stringify(exercises, null, 2)}, ...writtenPractice]` : JSON.stringify(exercises, null, 2)} as const satisfies readonly ExerciseDefinition[];\n`,
  'utf8',
);

writeFileSync(
  join(TARGET_ROOT, 'search-index.ts'),
  `export default ${JSON.stringify(searchText, null, 2)} satisfies Readonly<Record<string, string>>;\n`,
  'utf8',
);

writeFileSync(
  'docs/architecture/CHEMISTRY_ID_MAP.json',
  JSON.stringify(
    {
      revision: REVISION,
      counts: {
        chapters: chapters.length,
        topics: topics.length,
        lessons: lessons.length,
        exercises: exercises.length,
      },
      mapping: idMap,
      adaptations: [
        'Markdown directives (:::key, :::mistake, :::note, :::warning, :::tip) converted to blockquotes',
        '::formula and ::formulas expanded inline from formulas.json',
        '::videos expanded to linked YouTube timestamps from video-segments.json',
        '::exercise, ::guided-exercises, ::practice-exercises stripped in favor of LessonPage interactive ExerciseSession',
        'Multi-step exercises adapted to single decisive interactive question with full worked solution preserved in explanation; loaded lazily via exercises.ts',
      ],
    },
    null,
    2,
  ) + '\n',
  'utf8',
);

console.log(
  `Migrated general-chemistry: ${chapters.length} chapters, ${topics.length} topics, ${lessons.length} lessons, ${exercises.length} exercises.`,
);
