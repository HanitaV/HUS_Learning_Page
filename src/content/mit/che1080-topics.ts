import type { Che1080Topic } from '../../domain/mit-che1080';

/**
 * 11 CHE1080 question types (frequency over the 6 exams analysed in
 * docs/HUS-learning-resource/CHE1080_de_tu_2020_latex, "Phân tích đề từ 2020", Bảng P.2).
 * Lecture identities were verified against the local OCW metadata by
 * scripts/import-mit-che1080.mjs (see tests/unit/che1080-mit.test.ts).
 * `confirmed` = lecture title verified and mapped by the task brief; `suggested` = supplementary,
 * numbering differs between 5.60 notes and videos so each resource shows its own title.
 */
const HUB = '/courses/general-chemistry?tool=chemistry-essay-lab';
const lesson = (id: string) => `/courses/general-chemistry/lessons/${id}`;

export const CHE1080_TOPICS: readonly Che1080Topic[] = [
  {
    id: 'che1080-d1-hydrogen',
    number: 1,
    title: 'Nguyên tử hydro, ion giống hydro và photon',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Cấu tạo nguyên tử',
    keywords: ['hydrogen atom', 'photon', 'bohr', 'energy level', 'rydberg', 'ionization energy', 'năng lượng ion hóa', 'bước sóng'],
    prerequisiteTopicIds: [],
    lessonIds: ['gc-light-photon', 'gc-bohr-model', 'gc-electronic-transitions'],
    mit: [
      { courseId: '5.111sc', lectures: [5], status: 'confirmed', level: 'foundation', relevanceVi: 'Mức năng lượng nguyên tử hydro và chuyển mức electron.' },
    ],
    hus: [{ label: 'Bộ đề Chương 1 (cấu tạo nguyên tử)', to: `${HUB}&preset=chapter-1` }],
  },
  {
    id: 'che1080-d2-mo',
    number: 2,
    title: 'Thuyết orbital phân tử (MO)',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Cấu tạo nguyên tử',
    keywords: ['molecular orbital', 'mo theory', 'bond order', 'bậc liên kết', 'paramagnetic', 'thuận từ', 'bonding', 'antibonding'],
    prerequisiteTopicIds: ['che1080-d1-hydrogen'],
    lessonIds: ['gc-mo-theory', 'gc-mo-bond-order'],
    mit: [
      { courseId: '5.111sc', lectures: [13], status: 'confirmed', level: 'standard', relevanceVi: 'Thuyết MO cho phân tử hai nguyên tử.' },
      { courseId: '5.112', lectures: [26, 27], status: 'confirmed', level: 'advanced', relevanceVi: 'Giải thích MO chi tiết hơn cho phân tử hai nguyên tử.' },
    ],
    hus: [{ label: 'Luyện dựng giản đồ MO', to: `${HUB}&preset=mo-diagram` }],
  },
  {
    id: 'che1080-d3-gibbs',
    number: 3,
    title: 'Năng lượng Gibbs và chiều phản ứng',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Nhiệt động học',
    keywords: ['gibbs', 'free energy', 'entropy', 'spontaneous', 'tự diễn biến', 'delta g'],
    prerequisiteTopicIds: ['che1080-d4-hess'],
    lessonIds: ['gc-gibbs', 'gc-gibbs-equilibrium', 'gc-entropy'],
    mit: [
      { courseId: '5.111sc', lectures: [16, 17], status: 'confirmed', level: 'standard', relevanceVi: 'Năng lượng Gibbs, entropy và ảnh hưởng của nhiệt độ.' },
      { courseId: '5.60', lectures: [13], status: 'suggested', level: 'advanced', relevanceVi: 'Giải thích nhiệt động học nâng cao.', note: 'Số bài giảng giữa ghi chú và video 5.60 không trùng tên; đối chiếu tiêu đề.' },
    ],
    hus: [{ label: 'Luyện đồ thị ΔG°(T)', to: `${HUB}&preset=thermo-diagram` }],
  },
  {
    id: 'che1080-d4-hess',
    number: 4,
    title: 'Định luật Hess, ΔH và ΔU',
    examFrequency: { appeared: 5, of: 6 },
    chapterTitle: 'Nhiệt động học',
    keywords: ['hess', 'enthalpy', 'entalpi', 'internal energy', 'bond enthalpy', 'thermochemistry'],
    prerequisiteTopicIds: [],
    lessonIds: ['gc-hess-law', 'gc-enthalpy', 'gc-formation-enthalpy', 'gc-first-law'],
    mit: [
      { courseId: '5.111sc', lectures: [15], status: 'confirmed', level: 'foundation', relevanceVi: 'Enthalpy liên kết và enthalpy phản ứng.' },
      { courseId: '5.60', lectures: [6], status: 'suggested', level: 'advanced', relevanceVi: 'Nhiệt hóa học nâng cao.', note: 'Đối chiếu tiêu đề từng tài liệu 5.60.' },
    ],
    hus: [{ label: 'Luyện chu trình Hess', to: `${HUB}&preset=thermo-diagram` }],
  },
  {
    id: 'che1080-d5-equilibrium',
    number: 5,
    title: 'Cân bằng hóa học Kp, Kc',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Cân bằng hóa học',
    keywords: ['chemical equilibrium', 'le chatelier', 'ice table', 'equilibrium constant', 'kp', 'kc'],
    prerequisiteTopicIds: ['che1080-d3-gibbs'],
    lessonIds: ['gc-eq-constant', 'gc-eq-ice-table', 'gc-eq-composition'],
    mit: [
      { courseId: '5.111sc', lectures: [18, 19], status: 'confirmed', level: 'standard', relevanceVi: 'Hằng số cân bằng và nguyên lý Le Châtelier.' },
      { courseId: '5.60', lectures: [15], status: 'suggested', level: 'advanced', relevanceVi: 'Cân bằng hóa học theo nhiệt động học.', note: 'Đối chiếu tiêu đề từng tài liệu 5.60.' },
    ],
    hus: [{ label: 'Bộ đề Chương 4 (cân bằng hóa học)', to: `${HUB}&preset=chapter-4` }],
  },
  {
    id: 'che1080-d6-first-order',
    number: 6,
    title: 'Động học phản ứng bậc một',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Động học phản ứng',
    keywords: ['first order', 'kinetics', 'rate law', 'half life', 'chu kỳ bán hủy', 'tốc độ phản ứng'],
    prerequisiteTopicIds: [],
    lessonIds: ['gc-kin-rate', 'gc-kin-first-order'],
    mit: [
      { courseId: '5.111sc', lectures: [30, 31], status: 'confirmed', level: 'standard', relevanceVi: 'Định luật tốc độ; bài 31 gồm phân rã hạt nhân bậc một.' },
      { courseId: '5.60', lectures: [30], status: 'suggested', level: 'advanced', relevanceVi: 'Động học nâng cao.', note: 'Đối chiếu tiêu đề từng tài liệu 5.60.' },
    ],
    hus: [{ label: 'Bộ đề Chương 5 (động học)', to: `${HUB}&preset=chapter-5` }],
  },
  {
    id: 'che1080-d7-arrhenius',
    number: 7,
    title: 'Phương trình Arrhenius và năng lượng hoạt hóa',
    examFrequency: { appeared: 4, of: 6 },
    chapterTitle: 'Động học phản ứng',
    keywords: ['arrhenius', 'activation energy', 'ea', 'temperature dependence', 'catalyst'],
    prerequisiteTopicIds: ['che1080-d6-first-order'],
    lessonIds: ['gc-kin-arrhenius'],
    mit: [
      { courseId: '5.111sc', lectures: [33], status: 'confirmed', level: 'standard', relevanceVi: 'Động học và nhiệt độ (Arrhenius).' },
      { courseId: '5.60', lectures: [34], status: 'suggested', level: 'advanced', relevanceVi: 'Phụ thuộc nhiệt độ của hằng số tốc độ.', note: 'Đối chiếu tiêu đề từng tài liệu 5.60.' },
    ],
    hus: [{ label: 'Bộ đề Chương 5 (động học)', to: `${HUB}&preset=chapter-5` }],
  },
  {
    id: 'che1080-d8-ph',
    number: 8,
    title: 'pH của axit yếu, bazơ yếu và muối',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Dung dịch: axit – bazơ và độ tan',
    keywords: ['ph', 'weak acid', 'weak base', 'ka', 'kb', 'acid base', 'salt hydrolysis', 'thủy phân'],
    prerequisiteTopicIds: [],
    lessonIds: ['gc-sol-foundations', 'gc-sol-weak-acid-base', 'gc-sol-salt'],
    mit: [
      { courseId: '5.111sc', lectures: [21, 22], status: 'confirmed', level: 'standard', relevanceVi: 'Cân bằng axit–bazơ và dung dịch muối.' },
    ],
    hus: [{ label: 'Bộ đề Chương 6 (dung dịch)', to: `${HUB}&preset=chapter-6` }],
  },
  {
    id: 'che1080-d9-buffer',
    number: 9,
    title: 'Dung dịch đệm',
    examFrequency: { appeared: 5, of: 6 },
    chapterTitle: 'Dung dịch: axit – bazơ và độ tan',
    keywords: ['buffer', 'henderson', 'titration', 'chuẩn độ', 'đệm'],
    prerequisiteTopicIds: ['che1080-d8-ph'],
    lessonIds: ['gc-sol-buffer'],
    mit: [
      { courseId: '5.111sc', lectures: [22, 23, 24], status: 'confirmed', level: 'standard', relevanceVi: 'Dung dịch đệm và chuẩn độ axit–bazơ.' },
    ],
    hus: [{ label: 'Bộ đề Chương 6 (dung dịch)', to: `${HUB}&preset=chapter-6` }],
  },
  {
    id: 'che1080-d10-ksp',
    number: 10,
    title: 'Độ tan và tích số tan Ksp',
    examFrequency: { appeared: 3, of: 6 },
    chapterTitle: 'Dung dịch: axit – bazơ và độ tan',
    keywords: ['solubility', 'ksp', 'precipitation', 'kết tủa', 'độ tan'],
    prerequisiteTopicIds: ['che1080-d5-equilibrium', 'che1080-d8-ph'],
    lessonIds: ['gc-sol-solubility'],
    mit: [
      { courseId: '5.111sc', lectures: [20], status: 'confirmed', level: 'standard', relevanceVi: 'Cân bằng độ tan.' },
    ],
    hus: [{ label: 'Bộ đề Chương 6 (dung dịch)', to: `${HUB}&preset=chapter-6` }],
  },
  {
    id: 'che1080-d11-cell',
    number: 11,
    title: 'Pin điện hóa và phương trình Nernst',
    examFrequency: { appeared: 6, of: 6 },
    chapterTitle: 'Điện hóa học',
    keywords: ['electrochemistry', 'galvanic cell', 'nernst', 'redox', 'cell potential', 'anode', 'cathode', 'điện cực'],
    prerequisiteTopicIds: ['che1080-d3-gibbs'],
    lessonIds: ['gc-ec-redox', 'gc-ec-galvanic-cell', 'gc-ec-nernst'],
    mit: [
      { courseId: '5.111sc', lectures: [25], status: 'confirmed', level: 'standard', relevanceVi: 'Oxi hóa–khử và pin điện hóa.' },
      { courseId: '5.112', lectures: [22, 23], status: 'confirmed', level: 'advanced', relevanceVi: 'Quá trình redox, thế pin và năng lượng tự do.' },
    ],
    hus: [{ label: 'Bộ đề Chương 7 (điện hóa)', to: `${HUB}&preset=chapter-7` }, { label: 'Pin Galvani & Nernst trực quan', to: `${HUB}&preset=electro-cell` }],
  },
];

export const lessonPath = lesson;
