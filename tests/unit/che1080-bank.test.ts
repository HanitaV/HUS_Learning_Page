import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import type { Che1080BankExercise, Che1080Difficulty } from '../../src/domain/che1080-bank';
import {
  checkAnswerAgainstFinal,
  DIFFICULTY_META,
  DIFFICULTY_ORDER,
  extractNumericTargets,
  filterPracticeExercises,
  selectFeaturedAcrossChapters,
  selectFeaturedByDifficulty,
} from '../../src/core/chemistry/practice-bank';

function makeExercise(
  overrides: Partial<Che1080BankExercise> & Pick<Che1080BankExercise, 'id' | 'chapterNumber' | 'difficulty'>,
): Che1080BankExercise {
  return {
    code: overrides.id.toUpperCase(),
    source: 'HK1 2022-2023',
    chapterTitle: `Chương ${overrides.chapterNumber}: Chuyên đề ${overrides.chapterNumber}`,
    formTitle: 'Dạng 1: Tính toán cơ bản',
    subTypeTitle: 'Tính đại lượng đặc trưng',
    isRecent: false,
    visualHint: 'none',
    prompt: 'Tính giá trị biến thiên năng lượng của hệ.',
    solutionSteps: ['Bước 1: Áp dụng công thức chuẩn.'],
    finalAnswer: '100',
    sourceFile: `docs/HUS-learning-resource/CHE1080_bai_tap_latex/c${overrides.chapterNumber}.tex`,
    ...overrides,
  };
}

const MOCK_EXERCISES: readonly Che1080BankExercise[] = [
  makeExercise({
    id: 'c1-basic-old',
    chapterNumber: 1,
    difficulty: 'basic',
    isRecent: false,
    code: 'ĐT18 C1',
    prompt: 'Tính bước sóng de Broglie của electron.',
    finalAnswer: '1,6 × 10⁻¹⁹ J',
  }),
  makeExercise({
    id: 'c1-basic-recent',
    chapterNumber: 1,
    difficulty: 'basic',
    isRecent: true,
    code: 'ĐT22 C1',
    prompt: 'Xác định bộ 4 số lượng tử của electron cuối cùng.',
    finalAnswer: 'n = 3, l = 1',
  }),
  makeExercise({
    id: 'c1-standard-recent',
    chapterNumber: 1,
    difficulty: 'standard',
    isRecent: true,
    code: 'ĐT23 C1',
    formTitle: 'Dạng 2: Giản đồ MO',
    visualHint: 'mo-diagram',
    prompt: 'Vẽ giản đồ MO và tính bậc liên kết của phân tử O₂⁻.',
    finalAnswer: '1,5',
  }),
  makeExercise({
    id: 'c1-advanced-old',
    chapterNumber: 1,
    difficulty: 'advanced',
    isRecent: false,
    code: 'ĐT17 C1',
    subTypeTitle: 'Lai hóa và hình học phân tử',
    visualHint: 'vb-hybridization',
    prompt: 'Giải thích góc liên kết và độ phân cực của NH₃ và NF₃.',
    finalAnswer: '107,3°',
  }),
  makeExercise({
    id: 'c1-standard-extra',
    chapterNumber: 1,
    difficulty: 'standard',
    isRecent: false,
    code: 'ĐT19 C1',
    prompt: 'So sánh năng lượng ion hóa thứ nhất của N và O.',
    finalAnswer: '1402 kJ/mol',
  }),
  makeExercise({
    id: 'c2-basic-recent',
    chapterNumber: 2,
    difficulty: 'basic',
    isRecent: true,
    code: 'ĐT24 C2',
    chapterTitle: 'Chương 2: Nhiệt động hóa học',
    visualHint: 'thermo-diagram',
    prompt: 'Tính ΔH° của phản ứng đốt cháy.',
    finalAnswer: '−669,7 kJ',
  }),
  makeExercise({
    id: 'c2-standard-old',
    chapterNumber: 2,
    difficulty: 'standard',
    isRecent: false,
    code: 'ĐT16 C2',
    chapterTitle: 'Chương 2: Nhiệt động hóa học',
    prompt: 'Tính nhiệt độ chuyển dấu T* của phản ứng.',
    finalAnswer: '617,5 K',
  }),
  makeExercise({
    id: 'c2-advanced-recent',
    chapterNumber: 2,
    difficulty: 'advanced',
    isRecent: true,
    code: 'ĐT25 C2',
    chapterTitle: 'Chương 2: Nhiệt động hóa học',
    prompt: 'Áp dụng định luật Hess xác định biến thiên entanpi.',
    finalAnswer: '-285,8 kJ/mol',
  }),
];

describe('CHE1080 practice bank core', () => {
  it('defines ordered difficulty levels and Vietnamese metadata', () => {
    expect(DIFFICULTY_ORDER).toEqual(['basic', 'standard', 'advanced']);
    expect(DIFFICULTY_META.basic.label).toBe('Cơ bản');
    expect(DIFFICULTY_META.standard.label).toBe('Chuẩn đề');
    expect(DIFFICULTY_META.advanced.label).toBe('Nâng cao');
  });

  it('selects at most 1 featured exercise per difficulty preferring isRecent', () => {
    const ch1Result = selectFeaturedByDifficulty(MOCK_EXERCISES, 1);
    const ch1Total = MOCK_EXERCISES.filter(e => e.chapterNumber === 1).length;

    expect(ch1Result.featured.map(e => e.difficulty)).toEqual(['basic', 'standard', 'advanced']);
    expect(ch1Result.featured.map(e => e.id)).toEqual([
      'c1-basic-recent',
      'c1-standard-recent',
      'c1-advanced-old',
    ]);
    expect(ch1Result.remaining.map(e => e.id)).toEqual(['c1-basic-old', 'c1-standard-extra']);
    expect(ch1Result.featured.length + ch1Result.remaining.length).toBe(ch1Total);
  });

  it('handles missing difficulty tiers gracefully in selectFeaturedByDifficulty', () => {
    const onlyBasic = MOCK_EXERCISES.filter(e => e.difficulty === 'basic');
    const result = selectFeaturedByDifficulty(onlyBasic, 1);

    expect(result.featured.map(e => e.id)).toEqual(['c1-basic-recent']);
    expect(result.remaining.map(e => e.id)).toEqual(['c1-basic-old']);
    expect(result.featured.length + result.remaining.length).toBe(2);
  });

  it('groups featured exercises across chapters and builds disjoint practiceBank', () => {
    const summary = selectFeaturedAcrossChapters(MOCK_EXERCISES);

    expect(summary.byChapter.map(c => c.chapterNumber)).toEqual([1, 2]);
    expect(summary.byChapter[0]?.featured.map(e => e.id)).toEqual([
      'c1-basic-recent',
      'c1-standard-recent',
      'c1-advanced-old',
    ]);
    expect(summary.byChapter[0]?.practiceCount).toBe(2);

    expect(summary.byChapter[1]?.chapterTitle).toBe('Chương 2: Nhiệt động hóa học');
    expect(summary.byChapter[1]?.featured.map(e => e.id)).toEqual([
      'c2-basic-recent',
      'c2-standard-old',
      'c2-advanced-recent',
    ]);
    expect(summary.byChapter[1]?.practiceCount).toBe(0);

    expect(summary.featuredIds.size).toBe(6);
    expect(summary.practiceBank.map(e => e.id)).toEqual(['c1-basic-old', 'c1-standard-extra']);
    expect(summary.featuredIds.size + summary.practiceBank.length).toBe(MOCK_EXERCISES.length);
  });

  it('filters exercises with accent-insensitive Vietnamese search and facets', () => {
    // Accent-insensitive Vietnamese search across chapterTitle, formTitle, subTypeTitle, prompt, code, finalAnswer
    expect(
      filterPracticeExercises(MOCK_EXERCISES, { query: 'nhiet dong' }).map(e => e.id),
    ).toEqual(['c2-basic-recent', 'c2-standard-old', 'c2-advanced-recent']);

    expect(
      filterPracticeExercises(MOCK_EXERCISES, { query: 'gian do mo' }).map(e => e.id),
    ).toEqual(['c1-standard-recent']);

    expect(
      filterPracticeExercises(MOCK_EXERCISES, { query: 'lai hoa' }).map(e => e.id),
    ).toEqual(['c1-advanced-old']);

    expect(
      filterPracticeExercises(MOCK_EXERCISES, { query: 'dt24 c2' }).map(e => e.id),
    ).toEqual(['c2-basic-recent']);

    expect(
      filterPracticeExercises(MOCK_EXERCISES, { query: '1402' }).map(e => e.id),
    ).toEqual(['c1-standard-extra']);

    // Facet combinations
    const recentCh1 = filterPracticeExercises(MOCK_EXERCISES, {
      chapterNumber: 1,
      onlyRecent: true,
    });
    expect(recentCh1.map(e => e.id)).toEqual(['c1-basic-recent', 'c1-standard-recent']);

    const excludeSet = new Set(['c1-basic-recent', 'c1-standard-recent']);
    const excluded = filterPracticeExercises(MOCK_EXERCISES, {
      chapterNumber: 1,
      difficulty: 'standard',
      excludeIds: excludeSet,
    });
    expect(excluded.map(e => e.id)).toEqual(['c1-standard-extra']);
  });

  it('extracts and checks Vietnamese decimals, negative signs, and scientific notation', () => {
    expect(extractNumericTargets('617,5 K')).toEqual([617.5]);
    expect(extractNumericTargets('−669,7 kJ')).toEqual([-669.7]);
    expect(extractNumericTargets('1,6 × 10⁻¹⁹ J')).toEqual([1.6e-19]);
    expect(extractNumericTargets('$1{,}6 \\times 10^{-19}$')).toEqual([1.6e-19]);
    expect(extractNumericTargets('10⁻⁵ mol/L')).toEqual([1e-5]);

    // Standard decimal & 2.5% relative tolerance
    expect(checkAnswerAgainstFinal('617,5', '617,5 K').ok).toBe(true);
    expect(checkAnswerAgainstFinal('610', '617,5 K').ok).toBe(true); // within 2.5%
    expect(checkAnswerAgainstFinal('590', '617,5 K').ok).toBe(false);

    // Unicode minus & negative values
    expect(checkAnswerAgainstFinal('-669,7', '−669,7 kJ').ok).toBe(true);
    expect(checkAnswerAgainstFinal('−670', '−669,7 kJ').ok).toBe(true);
    expect(checkAnswerAgainstFinal('669,7', '−669,7 kJ').ok).toBe(false);

    // Small ordinary numbers (0.05 absolute tolerance)
    expect(checkAnswerAgainstFinal('1,52', '1,5').ok).toBe(true);
    expect(checkAnswerAgainstFinal('1,60', '1,5').ok).toBe(false);

    // Scientific notation (pure 2.5% relative tolerance, 0 must NOT match 1.6e-19)
    expect(checkAnswerAgainstFinal('1.6e-19', '1,6 × 10⁻¹⁹ J').ok).toBe(true);
    expect(checkAnswerAgainstFinal('1,62 × 10⁻¹⁹', '1,6 × 10⁻¹⁹ J').ok).toBe(true);
    expect(checkAnswerAgainstFinal('0', '1,6 × 10⁻¹⁹ J').ok).toBe(false);

    // Multi-number answer
    expect(checkAnswerAgainstFinal('3', 'n = 3, l = 1').ok).toBe(true);
    expect(checkAnswerAgainstFinal('1', 'n = 3, l = 1').ok).toBe(true);

    // Qualitative & invalid inputs
    expect(checkAnswerAgainstFinal('1', 'Thuận từ, không có giá trị').ok).toBe(false);
    expect(checkAnswerAgainstFinal('abc', '617,5 K').ok).toBe(false);
  });

  it('validates the generated che1080-bank.ts dataset when present', async () => {
    const realBankPath = resolve(
      process.cwd(),
      'src/content/courses/general-chemistry/che1080-bank.ts',
    );
    if (!existsSync(realBankPath)) {
      return;
    }

    const bankModulePath = '../../src/content/courses/general-chemistry/che1080-bank';
    const mod = (await import(/* @vite-ignore */ bankModulePath)) as {
      default: readonly Che1080BankExercise[];
    };
    const bank: readonly Che1080BankExercise[] = mod.default;
    expect(bank.length).toBeGreaterThanOrEqual(200);

    const ids = new Set(bank.map(ex => ex.id));
    expect(ids.size).toBe(bank.length);

    const validDifficulties = new Set<Che1080Difficulty>(DIFFICULTY_ORDER);
    for (const ex of bank) {
      expect(validDifficulties.has(ex.difficulty)).toBe(true);
      expect(ex.prompt.trim().length).toBeGreaterThan(0);
      expect(ex.solutionSteps.length).toBeGreaterThan(0);
    }

    const summary = selectFeaturedAcrossChapters(bank);
    expect(summary.byChapter.length).toBeGreaterThanOrEqual(6);
    expect(summary.featuredIds.size + summary.practiceBank.length).toBe(bank.length);
  });
});
