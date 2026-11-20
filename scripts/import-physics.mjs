// Reproducible migration of all 11 PHY1159 chapters from verified MIT software data. Never executes legacy JS.
import { createScanner, SyntaxKind } from 'typescript/unstable/ast';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const revision = '5d6301638664dc18b4913b944c0224761d705a2e';
const root = 'docs/VLDC-HUS/';

const CHAPTER_TITLES = {
  1: 'Mở đầu vật lý học',
  2: 'Động học chất điểm',
  3: 'Động lực học chất điểm',
  4: 'Công và năng lượng',
  5: 'Chuyển động của vật rắn',
  6: 'Trường hấp dẫn và chuyển động trong trường xuyên tâm',
  7: 'Cơ sở của thuyết tương đối hẹp',
  8: 'Nhiệt độ',
  9: 'Nhiệt và nguyên lý thứ nhất của nhiệt động lực học',
  10: 'Thuyết động học chất khí',
  11: 'Entropi và nguyên lý thứ hai của nhiệt động lực học',
};

const CHAPTER_PREREQUISITES = {
  1: [],
  2: ['phy1159-t1-2-topic'],
  3: ['phy1159-t2-1-topic'],
  4: ['phy1159-t3-1-topic'],
  5: ['phy1159-t4-1-topic'],
  6: ['phy1159-t3-2-topic', 'phy1159-t4-2-topic'],
  7: ['phy1159-t2-3-topic'],
  8: ['phy1159-t1-2-topic'],
  9: ['phy1159-t4-1-topic', 'phy1159-t8-1-topic'],
  10: ['phy1159-t9-1-topic'],
  11: ['phy1159-t9-2-topic', 'phy1159-t10-1-topic'],
};

function readData(path, expectedHash, name) {
  const bytes = readFileSync(root + path);
  const hash = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
  if (hash !== expectedHash) throw new Error(`Source changed: ${path} (got ${hash})`);
  const scanner = createScanner(true, undefined, bytes.toString('utf8'));
  let token = scanner.scan();
  const next = () => { token = scanner.scan(); };
  function literal() {
    if (token === SyntaxKind.Identifier && scanner.getTokenText() === 't') {
      next();
      if (token !== SyntaxKind.NoSubstitutionTemplateLiteral) throw new Error('Only raw static templates allowed');
      const value = scanner.getTokenText().slice(1, -1); next(); return value;
    }
    if (token === SyntaxKind.StringLiteral || token === SyntaxKind.NoSubstitutionTemplateLiteral) {
      const value = scanner.getTokenValue(); next(); return value;
    }
    if (token === SyntaxKind.MinusToken) {
      next();
      if (token !== SyntaxKind.NumericLiteral) throw new Error('Expected number after minus');
      const value = -Number(scanner.getTokenValue()); next(); return value;
    }
    if (token === SyntaxKind.NumericLiteral) { const value = Number(scanner.getTokenValue()); next(); return value; }
    if (token === SyntaxKind.TrueKeyword || token === SyntaxKind.FalseKeyword) { const value = token === SyntaxKind.TrueKeyword; next(); return value; }
    if (token === SyntaxKind.NullKeyword) { next(); return null; }
    if (token === SyntaxKind.OpenBracketToken) {
      next(); const value = [];
      while (token !== SyntaxKind.CloseBracketToken) {
        value.push(literal());
        if (token === SyntaxKind.CommaToken) next(); else if (token !== SyntaxKind.CloseBracketToken) throw new Error('Expected comma');
      }
      next(); return value;
    }
    if (token === SyntaxKind.OpenBraceToken) {
      next(); const value = {};
      while (token !== SyntaxKind.CloseBraceToken) {
        if (token !== SyntaxKind.Identifier && token !== SyntaxKind.StringLiteral) throw new Error('Expected static key');
        const key = scanner.getTokenValue() || scanner.getTokenText(); next();
        if (token !== SyntaxKind.ColonToken) throw new Error('Expected colon'); next();
        value[key] = literal();
        if (token === SyntaxKind.CommaToken) next(); else if (token !== SyntaxKind.CloseBraceToken) throw new Error('Expected comma');
      }
      next(); return value;
    }
    throw new Error('Unsupported static syntax: ' + scanner.getTokenText());
  }
  while (token !== SyntaxKind.EndOfFileToken) {
    if (scanner.getTokenText() === name) {
      next(); if (token !== SyntaxKind.EqualsToken) throw new Error('Expected assignment'); next(); return literal();
    }
    next();
  }
  throw new Error(`Missing ${name}`);
}

const mechChapters = readData('js/data/theory/mech.js', 'e5bcda289c7e2acaa8d68bb76d5827a104a10bea', 'MECH_CHAPTERS');
const thermoChapters = readData('js/data/theory/thermo.js', '10aef0afa24967b7b2d4cbca7d026d64bf4b05e3', 'THERMO_CHAPTERS');
const sourceExercises = readData('js/data/theory/exercises.js', 'bd307cdc68370ff68b3c3744a3b83cc4816e6f2c', 'THEORY_EXERCISES');
const sourceProbes = readData('js/data/theory/probes.js', '4e09659b5f9273ddd0486e160ac101f6eb56b745', 'PROBES');

const chapters = [...mechChapters, ...thermoChapters].sort((a, b) => a.ch - b.ch);
const provenance = path => ({
  repository: 'https://github.com/HanitaV/VLDC-HUS',
  revision,
  path,
  rights: 'approved',
  attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded.',
});
const stable = id => 'phy1159-' + id.toLowerCase().replaceAll('.', '-');
const normalizeTex = text => String(text ?? '').replaceAll('\\\\', '\\');

const target = 'src/content/courses/phy1159';
rmSync(target + '/lessons', { recursive: true, force: true });
mkdirSync(target + '/lessons', { recursive: true });
mkdirSync('public/licenses', { recursive: true });
copyFileSync(root + 'LICENSE', 'public/licenses/VLDC-HUS-MIT.txt');

const data = { chapters: [], topics: [], lessons: [], exercises: [], resources: [] };
const searchText = {};
const mapping = {};

for (const ch of chapters) {
  const isThermo = ch.ch >= 8;
  const sourcePath = isThermo ? 'js/data/theory/thermo.js' : 'js/data/theory/mech.js';
  const sourceResId = isThermo ? 'phy1159-thermo-source' : 'phy1159-theory-source';
  const chapterId = `phy1159-ch-${ch.ch}`;
  const chapterTitle = CHAPTER_TITLES[ch.ch] ?? `Chương ${ch.ch}`;

  data.chapters.push({
    id: chapterId,
    courseId: 'phy1159',
    title: chapterTitle,
    topicIds: ch.stages.map(s => stable(s.id) + '-topic'),
  });

  for (const stage of ch.stages) {
    const lessonId = stable(stage.id);
    mapping[stage.id] = lessonId;

    data.topics.push({
      id: lessonId + '-topic',
      chapterId,
      title: stage.title,
      lessonIds: [lessonId],
      prerequisiteIds: CHAPTER_PREREQUISITES[ch.ch] ?? [],
    });

    const lessonExerciseIds = [];

    // 1. Add compatible THEORY_EXERCISES (order -> exact short-answer, choice -> multiple-choice)
    const stageEx = sourceExercises.filter(e => e.stage === stage.id && (e.kind === 'order' || e.kind === 'choice'));
    for (const e of stageEx) {
      const exId = stable(e.id);
      mapping[e.id] = exId;
      lessonExerciseIds.push(exId);

      if (e.kind === 'order') {
        const steps = e.steps ?? [];
        const answerSeq = steps.map((_, i) => String(i + 1)).join(' ');
        const reversedSeq = steps.map((_, i) => String(steps.length - i)).join(' ');
        const promptLines = steps.map((s, i) => `**${i + 1}** — ${normalizeTex(s)}`).reverse().join('\n\n');
        data.exercises.push({
          id: exId,
          lessonId,
          title: e.title,
          kind: 'short-answer',
          prompt: `${normalizeTex(e.prompt)}\n\n${promptLines}\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: ${reversedSeq}).`,
          answers: [answerSeq],
          explanation: normalizeTex(e.why),
          provenance: provenance('js/data/theory/exercises.js'),
        });
      } else if (e.kind === 'choice') {
        data.exercises.push({
          id: exId,
          lessonId,
          title: e.title,
          prompt: normalizeTex(e.q),
          kind: 'multiple-choice',
          choices: e.options.map((o, i) => ({ id: `option-${i + 1}`, label: normalizeTex(o.text) })),
          answers: e.options.flatMap((o, i) => (o.ok ? [`option-${i + 1}`] : [])),
          explanation: normalizeTex(e.options.find(o => o.ok)?.why ?? ''),
          provenance: provenance('js/data/theory/exercises.js'),
        });
      }
    }

    // 2. Add ConceptTest probe for this stage if present
    const probe = sourceProbes[stage.id];
    if (probe && Array.isArray(probe.options) && probe.options.some(o => o.ok)) {
      const probeId = `phy1159-probe-${stage.id.toLowerCase().replaceAll('.', '-')}`;
      mapping[`probe:${stage.id}`] = probeId;
      lessonExerciseIds.push(probeId);
      data.exercises.push({
        id: probeId,
        lessonId,
        title: `Kiểm tra nhanh quan niệm — ${stage.title}`,
        prompt: normalizeTex(probe.q),
        kind: 'multiple-choice',
        choices: probe.options.map((o, i) => ({ id: `option-${i + 1}`, label: normalizeTex(o.text) })),
        answers: probe.options.flatMap((o, i) => (o.ok ? [`option-${i + 1}`] : [])),
        explanation: normalizeTex(probe.options.find(o => o.ok)?.why ?? ''),
        provenance: provenance('js/data/theory/probes.js'),
      });
    }

    searchText[lessonId] = [stage.title, stage.origin, stage.law, stage.trap, stage.consequence]
      .filter(Boolean)
      .map(normalizeTex)
      .join(' ');

    data.lessons.push({
      id: lessonId,
      topicId: lessonId + '-topic',
      title: stage.title,
      summary: normalizeTex(stage.origin),
      content: { format: 'markdown', assetPath: `phy1159/lessons/${lessonId}.md` },
      exerciseIds: lessonExerciseIds,
      resourceIds: [],
      provenance: provenance(sourcePath),
    });

    const sections = [
      ['Khởi đầu', stage.origin],
      ['Quy luật', stage.law],
      ['Lỗi thường gặp', stage.trap],
      ['Áp dụng', stage.consequence],
    ].filter(([, text]) => Boolean(text));

    const body = `# ${stage.title}\n\n${sections
      .map(([label, text]) => `## ${label}\n\n${normalizeTex(text)}`)
      .join('\n\n')}\n\n---\n\nChuyển từ ghi chú lý thuyết phần mềm VLDC-HUS, mục ${stage.id}. Trịnh Nam Phong, 2026, MIT.\n`;
    writeFileSync(`${target}/lessons/${lessonId}.md`, body, 'utf8');
  }
}

// Public document resources are intentionally omitted.

const extensionBanks = [
  ...(existsSync(`${target}/semi-essays.ts`) ? [{ name: 'phy1159SemiEssays', path: './semi-essays', named: true }] : []),
  ...(existsSync(`${target}/written-practice.ts`) ? [{ name: 'writtenPractice', path: './written-practice', named: false }] : []),
];
const extensionImports = extensionBanks.length ? `import { withWrittenPractice } from '../../../core/learning/written-content';\n${extensionBanks.map(bank => `import ${bank.named ? `{ ${bank.name} }` : bank.name} from '${bank.path}';`).join('\n')}\n` : '';
const extendedContent = extensionBanks.reduce((content, bank) => `withWrittenPractice(${content}, ${bank.name})`, `${JSON.stringify(data, null, 2)} as const satisfies LearningContent`);
writeFileSync(
  `${target}/content.ts`,
  `import type { LearningContent } from '../../../domain/workspace';\n${extensionImports}\nexport default ${extendedContent};\n`,
  'utf8',
);
writeFileSync(
  `${target}/search-index.ts`,
  `export default ${JSON.stringify(searchText, null, 2)} satisfies Readonly<Record<string, string>>;\n`,
  'utf8',
);
writeFileSync(
  `${target}/course.ts`,
  `import type { Course } from '../../../domain/learning';\n\nexport default ${JSON.stringify(
    {
      schemaVersion: 1,
      id: 'phy1159',
      academicCode: 'PHY1159',
      subjectId: 'physics',
      title: 'Cơ – Nhiệt',
      language: 'vi',
      status: 'available',
      chapterIds: data.chapters.map(c => c.id),
      resourceIds: data.resources.map(r => r.id),
      provenance: provenance('js/data/theory/mech.js'),
    },
    null,
    2,
  )} as const satisfies Course;\n`,
  'utf8',
);
writeFileSync(
  'docs/architecture/PHYSICS_ID_MAP.json',
  JSON.stringify(
    {
      revision,
      counts: {
        chapters: data.chapters.length,
        topics: data.topics.length,
        lessons: data.lessons.length,
        exercises: data.exercises.length,
      },
      mapping,
      adaptations: [
        'All 11 chapters (MECH_CHAPTERS ch 1–7 + THERMO_CHAPTERS ch 8–11) migrated from verified MIT software data',
        'Order exercises (L1.1–L11.1): numbered ordering prompts → exact short-answer; no expression evaluation',
        'Choice exercises and ConceptTest PROBES → multiple-choice with worked explanations',
        'Formula-sampling exercises deferred until non-eval symbolic/numeric evaluator is integrated',
        'Doubled LaTeX backslashes normalized for Markdown',
      ],
    },
    null,
    2,
  ) + '\n',
  'utf8',
);

console.log(
  `Migrated phy1159: ${data.chapters.length} chapters, ${data.topics.length} topics, ${data.lessons.length} lessons, ${data.exercises.length} exercises.`,
);
