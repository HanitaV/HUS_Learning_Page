import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const LATEX_DIR = path.join(ROOT_DIR, 'docs', 'HUS-learning-resource', 'CHE1080_bai_tap_latex');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src', 'content', 'courses', 'general-chemistry', 'che1080-bank.ts');

const SUBSCRIPT_MAP = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
};

const SUPERSCRIPT_MAP = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ',
};

function toSubscript(str) {
  return [...str].map((ch) => SUBSCRIPT_MAP[ch] ?? ch).join('');
}

function toSuperscript(str) {
  return [...str].map((ch) => SUPERSCRIPT_MAP[ch] ?? ch).join('');
}

/**
 * Reads a balanced `{...}` group starting at `startIdx` (which must point to `{`).
 * Returns `{ content, nextIdx }` where `nextIdx` is the index right after the closing `}`.
 */
function readBracedGroup(text, startIdx) {
  if (text[startIdx] !== '{') {
    throw new Error(`Expected '{' at index ${startIdx}, found '${text[startIdx] ?? 'EOF'}'`);
  }
  let depth = 0;
  let i = startIdx;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '\\' && i + 1 < text.length) {
      i += 2;
      continue;
    }
    if (ch === '{') {
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) {
        return {
          content: text.slice(startIdx + 1, i),
          nextIdx: i + 1,
        };
      }
    }
    i++;
  }
  throw new Error(`Unclosed '{' starting at index ${startIdx}`);
}

/**
 * Skips whitespace and LaTeX `%` comments starting from `idx`.
 */
function skipWsAndComments(text, idx) {
  let i = idx;
  while (i < text.length) {
    if (/\s/.test(text[i])) {
      i++;
    } else if (text[i] === '%') {
      const nl = text.indexOf('\n', i);
      if (nl === -1) return text.length;
      i = nl + 1;
    } else {
      break;
    }
  }
  return i;
}

/**
 * Replaces all occurrences of `\cmd{...}` with `replacer(arg, isMath)`.
 * Uses balanced-brace parsing so nested braces inside `arg` are handled cleanly.
 */
function replaceBracedCommand(text, cmdName, replacer) {
  const needle = `\\${cmdName}{`;
  let out = '';
  let i = 0;
  while (i < text.length) {
    const idx = text.indexOf(needle, i);
    if (idx === -1) {
      out += text.slice(i);
      break;
    }
    // Ensure command boundary (not e.g. \cefoo)
    const prev = idx > 0 ? text[idx - 1] : '';
    if (prev === '\\') {
      out += text.slice(i, idx + needle.length);
      i = idx + needle.length;
      continue;
    }
    out += text.slice(i, idx);
    const braceStart = idx + needle.length - 1;
    const { content, nextIdx } = readBracedGroup(text, braceStart);
    out += replacer(content, idx);
    i = nextIdx;
  }
  return out;
}

/**
 * Converts `\num{...}` value to Vietnamese decimal format.
 */
function formatNum(raw, inMath) {
  const trimmed = raw.trim();
  const match = trimmed.match(/^([+-]?\d+(?:\.\d+)?)[eE]([+-]?\d+)$/);
  if (match) {
    const mantissa = match[1].replace('.', inMath ? '{,}' : ',');
    const exp = match[2].replace(/^\+/, '');
    if (inMath) {
      return `${mantissa} \\times 10^{${exp}}`;
    }
    return `${mantissa} × 10${toSuperscript(exp)}`;
  }
  return trimmed.replace('.', inMath ? '{,}' : ',');
}

/**
 * Converts a `\ce{...}` formula into plain Unicode (text mode) or KaTeX-safe `\mathrm{...}` (math mode).
 */
function convertCe(raw, inMath) {
  let s = raw.trim();
  if (inMath) {
    s = s
      .replace(/<=>/g, ' \\rightleftharpoons ')
      .replace(/->/g, ' \\rightarrow ')
      .replace(/<-/g, ' \\leftarrow ');

    // Split by spaces/operators to format individual species in \mathrm{...}
    const tokens = s.split(/(\s+|\\rightleftharpoons|\\rightarrow|\\leftarrow|\+)/);
    return tokens
      .map((tok) => {
        if (!tok || /^\s+$/.test(tok) || tok === '+' || tok.startsWith('\\')) {
          return tok;
        }
        return convertSpeciesToMath(tok);
      })
      .join('');
  }

  // Text mode: clean Unicode chemical notation
  s = s
    .replace(/<=>/g, ' ⇌ ')
    .replace(/->/g, ' → ')
    .replace(/<-/g, ' ← ')
    .replace(/\s+/g, ' ');

  const tokens = s.split(/(\s+|[⇌→←])/);
  return tokens
    .map((tok) => {
      if (!tok || /^\s+$/.test(tok) || tok === '⇌' || tok === '→' || tok === '←') {
        return tok;
      }
      if (tok === '+') return '+';
      return convertSpeciesToUnicode(tok);
    })
    .join('')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function convertSpeciesToMath(tok) {
  // Handle leading stoichiometric coefficient like 2SO2(k) or 5/2O2(k)
  let prefix = '';
  let rest = tok;
  const coeffMatch = rest.match(/^(\d+(?:\/\d+)?)(?=[A-Z_(])/);
  if (coeffMatch) {
    prefix = coeffMatch[1] + '\\,';
    rest = rest.slice(coeffMatch[0].length);
  }
  // Handle explicit ^charge or _sub
  rest = rest.replace(/\^([0-9]*[+-]|[0-9]+)/g, (_, sup) => `^{${sup}}`);
  rest = rest.replace(/_([0-9]+|\\[a-zA-Z]+)/g, (_, sub) => `_{${sub}}`);
  // Implicit element subscripts like H2O, SO4, Fe2O3 (digit after letter or ')')
  rest = rest.replace(/([A-Za-z)])(\d+)/g, (_, prev, digits) => `${prev}_{${digits}}`);
  // Trailing single + or - charge not preceded by ^ (e.g. H+, e-, Cl-, NH4+)
  rest = rest.replace(/([A-Za-z0-9}])([+-])$/, '$1^{$2}');
  return `${prefix}\\mathrm{${rest}}`;
}

function convertSpeciesToUnicode(tok) {
  // Strip inner braces like {2+} or \gamma
  let s = tok.replace(/\\gamma/g, 'γ').replace(/[{}]/g, '');
  // Leading isotope or subscript like _3Li^2+
  s = s.replace(/^_(\d+)/, (_, sub) => toSubscript(sub));
  // Explicit ^charge like ^2+, ^3-, ^{n+}
  s = s.replace(/\^([0-9]*[+-]|[0-9]+|n\+|n-)/g, (_, sup) => toSuperscript(sup));
  // Explicit _sub like _2, _\gamma
  s = s.replace(/_([0-9]+)/g, (_, sub) => toSubscript(sub));
  s = s.replace(/_γ/g, 'ᵧ');
  // Implicit subscripts after letter or ')' e.g. H2O -> H₂O, (NH4)2SO4 -> (NH₄)₂SO₄
  // Avoid converting leading stoichiometry like 2H2O
  let prefix = '';
  const coeffMatch = s.match(/^(\d+(?:\/\d+)?)(?=[A-Z(])/);
  if (coeffMatch) {
    prefix = coeffMatch[1];
    s = s.slice(coeffMatch[0].length);
  }
  s = s.replace(/([A-Za-z)])(\d+)/g, (_, prev, digits) => `${prev}${toSubscript(digits)}`);
  // Trailing single + or - charge (e.g. H+, Cl-, e-, Fe3+ already handled or O2-)
  s = s.replace(/([A-Za-z₀-₉)])([+-])$/, (_, prev, ch) => `${prev}${toSuperscript(ch)}`);
  return prefix + s;
}

/**
 * Converts a math-mode fragment (contents inside `$...$` or `$$...$$`).
 */
function convertMathContent(math) {
  let s = math;
  s = replaceBracedCommand(s, 'ce', (arg) => convertCe(arg, true));
  s = replaceBracedCommand(s, 'num', (arg) => formatNum(arg, true));
  s = replaceBracedCommand(s, 'Eo', (arg) => `E^\\circ(\\text{${convertCe(arg, false)}})`);
  // Clean Vietnamese diacritics or spaces inside math if any
  return s.trim();
}

/**
 * Converts a LaTeX `tabular` body to a Markdown GFM table.
 */
function convertTabular(body) {
  // Remove column spec {lccc} at start
  let s = body.trim();
  if (s.startsWith('{')) {
    const { nextIdx } = readBracedGroup(s, 0);
    s = s.slice(nextIdx).trim();
  }
  s = s.replace(/\\toprule|\\midrule|\\bottomrule/g, '');
  const rawRows = s
    .split(/\\\\/)
    .map((r) => r.trim())
    .filter((r) => r.length > 0);

  if (rawRows.length === 0) return '';

  const rows = rawRows.map((row) =>
    row.split('&').map((cell) => convertInlineLatex(cell.trim()))
  );

  const colCount = Math.max(...rows.map((r) => r.length));
  const normalizeRow = (r) => {
    const padded = [...r];
    while (padded.length < colCount) padded.push('');
    return `| ${padded.join(' | ')} |`;
  };

  const lines = [
    normalizeRow(rows[0]),
    `| ${Array(colCount).fill('---').join(' | ')} |`,
    ...rows.slice(1).map(normalizeRow),
  ];
  return `\n\n${lines.join('\n')}\n\n`;
}

/**
 * Converts `\begin{enumerate}...\end{enumerate}` or `\begin{itemize}...\end{itemize}`
 */
function convertListEnv(body, ordered) {
  let s = body.trim();
  // Strip optional [...] like [label=\alph*)]
  if (s.startsWith('[')) {
    const endBracket = s.indexOf(']');
    if (endBracket !== -1) {
      s = s.slice(endBracket + 1).trim();
    }
  }
  const items = splitItems(s);
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const formatted = items.map((item, idx) => {
    const converted = convertInlineLatex(item.trim());
    return ordered ? `${letters[idx] ?? idx + 1}) ${converted}` : `- ${converted}`;
  });
  return `\n${formatted.join('\n')}\n`;
}

/**
 * Splits LaTeX `\item` entries cleanly.
 */
function splitItems(raw) {
  return raw
    .split(/\\item\b/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

/**
 * Converts inline/block LaTeX (environments, math spans, text macros) to Markdown + KaTeX.
 */
function convertInlineLatex(input) {
  let s = input;

  // Strip \moi, \small
  s = s.replace(/\\moi\b\s*/g, '');
  s = s.replace(/\\small\b\s*/g, '');

  // Unwrap \begin{center}...\end{center}
  s = s.replace(/\\begin\{center\}([\s\S]*?)\\end\{center\}/g, '$1');

  // Convert \begin{tabular}...\end{tabular}
  s = s.replace(/\\begin\{tabular\}([\s\S]*?)\\end\{tabular\}/g, (_, body) => convertTabular(body));

  // Convert \begin{enumerate}...\end{enumerate} and \begin{itemize}...\end{itemize}
  s = s.replace(/\\begin\{enumerate\}([\s\S]*?)\\end\{enumerate\}/g, (_, body) => convertListEnv(body, true));
  s = s.replace(/\\begin\{itemize\}([\s\S]*?)\\end\{itemize\}/g, (_, body) => convertListEnv(body, false));

  // Convert \begin{align*}...\end{align*} to $$ \begin{aligned} ... \end{aligned} $$
  s = s.replace(/\\begin\{align\*\}([\s\S]*?)\\end\{align\*\}/g, (_, body) => {
    const converted = convertMathContent(body.trim());
    return `\n\n$$\n\\begin{aligned}\n${converted}\n\\end{aligned}\n$$\n\n`;
  });

  // Convert \[...\] display math to $$...$$
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, (_, body) => {
    return `\n\n$$\n${convertMathContent(body.trim())}\n$$\n\n`;
  });

  // Process inline $...$ spans vs text segments (ignoring escaped \$)
  const segments = [];
  let i = 0;
  let buf = '';
  let inMath = false;

  while (i < s.length) {
    if (s[i] === '$' && (i === 0 || s[i - 1] !== '\\')) {
      // Check for $$...$$ already produced above
      if (s[i + 1] === '$') {
        if (!inMath) {
          segments.push({ math: false, text: buf });
          buf = '';
          const closeIdx = s.indexOf('$$', i + 2);
          if (closeIdx !== -1) {
            segments.push({ math: true, display: true, text: s.slice(i + 2, closeIdx) });
            i = closeIdx + 2;
            continue;
          }
        }
      }
      if (inMath) {
        segments.push({ math: true, display: false, text: buf });
        buf = '';
        inMath = false;
      } else {
        segments.push({ math: false, text: buf });
        buf = '';
        inMath = true;
      }
      i++;
      continue;
    }
    buf += s[i];
    i++;
  }
  if (buf.length > 0) {
    segments.push({ math: inMath, display: false, text: buf });
  }

  const rendered = segments
    .map((seg) => {
      if (seg.math) {
        if (seg.display) {
          return `$$\n${seg.text.trim()}\n$$`;
        }
        return `$${convertMathContent(seg.text)}$`;
      }
      return convertTextSegment(seg.text);
    })
    .join('');

  return rendered
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/ {2,}/g, ' ')
    .trim();
}

function convertTextSegment(text) {
  let s = text;
  s = replaceBracedCommand(s, 'ce', (arg) => convertCe(arg, false));
  s = replaceBracedCommand(s, 'num', (arg) => formatNum(arg, false));
  s = replaceBracedCommand(s, 'Eo', (arg) => `$E^\\circ(\\text{${convertCe(arg, false)}})$`);
  s = replaceBracedCommand(s, 'textbf', (arg) => `**${convertTextSegment(arg)}**`);
  s = replaceBracedCommand(s, 'emph', (arg) => `*${convertTextSegment(arg)}*`);
  s = replaceBracedCommand(s, 'text', (arg) => arg);

  s = s
    .replace(/\\qquad/g, ' ')
    .replace(/\\quad/g, ' ')
    .replace(/\\,/g, ' ')
    .replace(/\\ /g, ' ')
    .replace(/\\%/g, '%')
    .replace(/\\&/g, '&')
    .replace(/~/g, ' ')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/``/g, '"')
    .replace(/''/g, '"');

  return s;
}

/**
 * Generates a unique kebab-case ID starting with `che1080-`.
 */
function makeExerciseId(code, seenIds) {
  const normalized = code
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const base = `che1080-${normalized}`;
  if (!seenIds.has(base)) {
    seenIds.add(base);
    return base;
  }
  let suffix = 2;
  while (seenIds.has(`${base}-${suffix}`)) {
    suffix++;
  }
  const unique = `${base}-${suffix}`;
  seenIds.add(unique);
  return unique;
}

function assignVisualHint(chapterNumber, formTitle, subTypeTitle, prompt) {
  const combined = `${formTitle} ${subTypeTitle} ${prompt}`.toLowerCase();
  if (/dạng 2|\bmo\b|orbital phân tử/.test(combined)) {
    return 'mo-diagram';
  }
  if (/lai hóa|\bvb\b/.test(combined)) {
    return 'vb-hybridization';
  }
  if (chapterNumber === 2 || /\\delta\s*[gu]|định luật hess/.test(combined)) {
    return 'thermo-diagram';
  }
  return 'none';
}

function assignDifficulty({ rawPrompt, solutionSteps, note, isRecent, subTypeTitle, formTitle }) {
  const subPartsEnum = (rawPrompt.match(/\\item\b/g) || []).length;
  const subPartsInline = (rawPrompt.match(/\([ivx]+\)|(?:^|\s)[a-d]\)/g) || []).length;
  const subPartCount = Math.max(subPartsEnum, subPartsInline);
  const stepCount = solutionSteps.length;

  const combined = `${formTitle} ${subTypeTitle} ${rawPrompt}`.toLowerCase();
  const hasAdvancedSignal =
    subPartCount >= 3 ||
    stepCount >= 6 ||
    Boolean(note) ||
    /ngược|xác định nguyên tố|nhiệt độ đổi chiều|bậc hai|luther|tổ hợp|chuẩn độ|kết tủa|thêm .* vào|năng lượng ion hóa.*mol/i.test(combined);

  if (hasAdvancedSignal) {
    return 'advanced';
  }

  const hasStandardSignal =
    subPartCount === 2 ||
    (stepCount >= 4 && stepCount <= 5) ||
    isRecent ||
    /so sánh|giải thích|từ tính|độ bền/i.test(combined);

  if (hasStandardSignal) {
    return 'standard';
  }

  return 'basic';
}

/**
 * Ensures every chapter 1..6 has at least 1 exercise of each difficulty (`basic`, `standard`, `advanced`)
 * by promoting/demoting the closest boundary exercise if any bucket is empty.
 */
function rebalanceChapterDifficulties(exercises) {
  const byChapter = new Map();
  for (const ex of exercises) {
    if (!byChapter.has(ex.chapterNumber)) {
      byChapter.set(ex.chapterNumber, []);
    }
    byChapter.get(ex.chapterNumber).push(ex);
  }

  for (const [ch, list] of byChapter.entries()) {
    if (ch > 6 || list.length < 3) continue;
    const countOf = (d) => list.filter((e) => e.difficulty === d).length;

    if (countOf('basic') === 0) {
      // Pick the exercise with fewest solutionSteps from 'standard' (or 'advanced')
      const candidate = [...list]
        .filter((e) => countOf(e.difficulty) > 1)
        .sort((a, b) => a.solutionSteps.length - b.solutionSteps.length || a.prompt.length - b.prompt.length)[0];
      if (candidate) candidate.difficulty = 'basic';
    }
    if (countOf('standard') === 0) {
      const candidate = [...list]
        .filter((e) => countOf(e.difficulty) > 1)
        .sort((a, b) => Math.abs(a.solutionSteps.length - 4) - Math.abs(b.solutionSteps.length - 4))[0];
      if (candidate) candidate.difficulty = 'standard';
    }
    if (countOf('advanced') === 0) {
      const candidate = [...list]
        .filter((e) => countOf(e.difficulty) > 1)
        .sort((a, b) => b.solutionSteps.length - a.solutionSteps.length || b.prompt.length - a.prompt.length)[0];
      if (candidate) candidate.difficulty = 'advanced';
    }
  }
}

function parseChapterFile(chapterNumber, seenIds) {
  const fileName = `c${chapterNumber}.tex`;
  const filePath = path.join(LATEX_DIR, fileName);
  const text = fs.readFileSync(filePath, 'utf8');

  let chapterTitle = '';
  let formTitle = '';
  let subTypeTitle = '';
  const exercises = [];

  let i = 0;
  while (i < text.length) {
    if (text.startsWith('\\section{', i)) {
      const { content, nextIdx } = readBracedGroup(text, i + '\\section'.length);
      chapterTitle = convertInlineLatex(content);
      formTitle = '';
      subTypeTitle = '';
      i = nextIdx;
      continue;
    }
    if (text.startsWith('\\subsection{', i)) {
      const { content, nextIdx } = readBracedGroup(text, i + '\\subsection'.length);
      formTitle = convertInlineLatex(content);
      subTypeTitle = '';
      i = nextIdx;
      continue;
    }
    if (text.startsWith('\\subsubsection{', i)) {
      const { content, nextIdx } = readBracedGroup(text, i + '\\subsubsection'.length);
      subTypeTitle = convertInlineLatex(content);
      i = nextIdx;
      continue;
    }

    if (text.startsWith('\\begin{cau}', i)) {
      let cursor = i + '\\begin{cau}'.length;
      cursor = skipWsAndComments(text, cursor);
      const codeGrp = readBracedGroup(text, cursor);
      cursor = skipWsAndComments(text, codeGrp.nextIdx);
      const sourceGrp = readBracedGroup(text, cursor);
      cursor = sourceGrp.nextIdx;

      const endTag = '\\end{cau}';
      const endIdx = text.indexOf(endTag, cursor);
      if (endIdx === -1) {
        throw new Error(`Missing \\end{cau} in ${fileName} starting at index ${i}`);
      }
      let rawBody = text.slice(cursor, endIdx).trim();
      cursor = endIdx + endTag.length;

      const notes = [];
      // Extract any \ghichu{...} or \sua{...} inside \begin{cau}...\end{cau}
      rawBody = replaceBracedCommand(rawBody, 'ghichu', (arg) => {
        notes.push(convertInlineLatex(arg));
        return '';
      });
      rawBody = replaceBracedCommand(rawBody, 'sua', (arg) => {
        notes.push(`[Sửa OCR] ${convertInlineLatex(arg)}`);
        return '';
      });

      // Also check for \ghichu{...} or \sua{...} between \end{cau} and \hg{...}{...}
      while (true) {
        cursor = skipWsAndComments(text, cursor);
        if (text.startsWith('\\ghichu{', cursor)) {
          const grp = readBracedGroup(text, cursor + '\\ghichu'.length);
          notes.push(convertInlineLatex(grp.content));
          cursor = grp.nextIdx;
        } else if (text.startsWith('\\sua{', cursor)) {
          const grp = readBracedGroup(text, cursor + '\\sua'.length);
          notes.push(`[Sửa OCR] ${convertInlineLatex(grp.content)}`);
          cursor = grp.nextIdx;
        } else {
          break;
        }
      }

      cursor = skipWsAndComments(text, cursor);
      if (!text.startsWith('\\hg{', cursor)) {
        throw new Error(`Expected \\hg{...}{...} after \\end{cau} for ${codeGrp.content} in ${fileName}`);
      }
      const stepsGrp = readBracedGroup(text, cursor + '\\hg'.length);
      const ansCursor = skipWsAndComments(text, stepsGrp.nextIdx);
      const answerGrp = readBracedGroup(text, ansCursor);
      cursor = answerGrp.nextIdx;

      const isRecent = /\\moi\b/.test(codeGrp.content) || /\\moi\b/.test(sourceGrp.content);
      const code = convertInlineLatex(codeGrp.content);
      const source = convertInlineLatex(sourceGrp.content);
      const prompt = convertInlineLatex(rawBody);
      const solutionSteps = splitItems(stepsGrp.content).map((step) => convertInlineLatex(step));
      const finalAnswer = convertInlineLatex(answerGrp.content);
      const note = notes.length > 0 ? notes.join('\n') : undefined;

      if (!prompt) {
        throw new Error(`Empty prompt for ${code} in ${fileName}`);
      }
      if (solutionSteps.length === 0) {
        throw new Error(`Empty solutionSteps for ${code} in ${fileName}`);
      }

      const id = makeExerciseId(code, seenIds);
      const visualHint = assignVisualHint(chapterNumber, formTitle, subTypeTitle, rawBody);
      const difficulty = assignDifficulty({
        rawPrompt: rawBody,
        solutionSteps,
        note,
        isRecent,
        subTypeTitle,
        formTitle,
      });

      const entry = {
        id,
        code,
        source,
        chapterNumber,
        chapterTitle,
        formTitle,
        subTypeTitle,
        isRecent,
        difficulty,
        visualHint,
        prompt,
        ...(note ? { note } : {}),
        solutionSteps,
        finalAnswer,
        sourceFile: `docs/HUS-learning-resource/CHE1080_bai_tap_latex/${fileName}`,
      };
      exercises.push(entry);
      i = cursor;
      continue;
    }

    i++;
  }

  return exercises;
}

function main() {
  const seenIds = new Set();
  const allExercises = [];

  for (let ch = 1; ch <= 7; ch++) {
    const parsed = parseChapterFile(ch, seenIds);
    allExercises.push(...parsed);
  }

  rebalanceChapterDifficulties(allExercises);

  const tsContent = [
    '// Auto-generated by scripts/import-che1080-bank.mjs from docs/HUS-learning-resource/CHE1080_bai_tap_latex/c1.tex..c7.tex',
    "import type { Che1080BankExercise } from '../../../domain/che1080-bank';",
    '',
    `const che1080Bank = ${JSON.stringify(allExercises, null, 2)} as const satisfies readonly Che1080BankExercise[];`,
    '',
    'export default che1080Bank;',
    '',
  ].join('\n');

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');

  // Print summary counts per chapter and difficulty
  console.log(`Generated ${allExercises.length} exercises -> ${path.relative(ROOT_DIR, OUTPUT_FILE)}`);
  for (let ch = 1; ch <= 7; ch++) {
    const list = allExercises.filter((e) => e.chapterNumber === ch);
    const counts = {
      basic: list.filter((e) => e.difficulty === 'basic').length,
      standard: list.filter((e) => e.difficulty === 'standard').length,
      advanced: list.filter((e) => e.difficulty === 'advanced').length,
      recent: list.filter((e) => e.isRecent).length,
    };
    console.log(
      `Chapter ${ch}: total=${list.length} | basic=${counts.basic}, standard=${counts.standard}, advanced=${counts.advanced} | recent=${counts.recent}`
    );
  }
}

main();
