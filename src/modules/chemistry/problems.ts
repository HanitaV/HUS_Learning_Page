import type { EquationSpecies, MoOrdering } from '../../core/chemistry/essay-engine';

export type ChemistryTopicId =
  | 'mo-diagram'
  | 'vb-hybridization'
  | 'thermo-diagram'
  | 'equil-buffer'
  | 'electro-cell';

export interface EssayClauseOption {
  readonly id: string;
  readonly text: string;
  readonly wrongReason?: string;
}

export interface EssayBlankField {
  readonly id: string;
  readonly label: string;
  readonly unit?: string;
  readonly placeholder: string;
  readonly expected: number;
  readonly tolerance: number;
  readonly wrongHint: string;
}

export type EssayStepKind =
  | {
      readonly type: 'clause-choice';
      readonly prompt: string;
      readonly options: readonly EssayClauseOption[];
      readonly expectedOptionId: string;
    }
  | {
      readonly type: 'numeric-blanks';
      readonly prompt: string;
      readonly formulaPrefix?: string;
      readonly fields: readonly EssayBlankField[];
    }
  | {
      readonly type: 'mo-diagram-interactive';
      readonly prompt: string;
    }
  | {
      readonly type: 'vb-overlap-interactive';
      readonly prompt: string;
      readonly expectedBondIds: readonly string[];
    }
  | {
      readonly type: 'thermo-gas-select';
      readonly prompt: string;
    }
  | {
      readonly type: 'hess-cycle-interactive';
      readonly prompt: string;
      readonly expectedDeltaH: number;
    };

export interface SemiEssayStep {
  readonly id: string;
  readonly title: string;
  readonly ruleTip: string;
  readonly trapNote: string;
  /** Clean exam-ready essay sentence shown once the student solves this step. */
  readonly completedEssayLine: string;
  readonly interaction: EssayStepKind;
}

export interface MoProblemConfig {
  readonly kind: 'mo-diagram';
  readonly speciesLabel: string;
  readonly atomLeft: string;
  readonly atomRight: string;
  readonly expectedOrdering: MoOrdering;
  readonly expectedTotalElectrons: number;
  readonly expectedBondOrder: number;
  readonly expectedMagnetism: 'paramagnetic' | 'diamagnetic';
}

export interface VbOrbitalBox {
  readonly id: string;
  readonly label: string;
  readonly electrons: 0 | 1 | 2;
  readonly role: 'lone-pair' | 'sigma-bond' | 'pi-bond';
}

export interface VbBondPair {
  readonly id: string;
  readonly label: string;
  readonly kind: 'sigma' | 'pi';
  readonly description: string;
  readonly isCorrectForMolecule: boolean;
}

export interface VbProblemConfig {
  readonly kind: 'vb-hybridization';
  readonly moleculeLabel: string;
  readonly centralAtom: string;
  readonly hybridization: 'sp' | 'sp2' | 'sp3';
  readonly stericNumber: number;
  readonly lonePairs: number;
  readonly geometryLabel: string;
  readonly angleLabel: string;
  readonly sigmaTotal: number;
  readonly piTotal: number;
  readonly hybridBoxes: readonly VbOrbitalBox[];
  readonly unhybridizedPBoxes: readonly VbOrbitalBox[];
  readonly candidateBonds: readonly VbBondPair[];
}

export interface ThermoRow {
  readonly formula: string;
  readonly role: 'Chất đầu' | 'Sản phẩm';
  readonly coeff: number;
  readonly deltaHf: number;
  readonly entropy: number;
}

export interface HessReactionItem {
  readonly id: string;
  readonly equation: string;
  readonly deltaH: number;
  readonly targetReversed: boolean;
  readonly targetMultiplier: number;
}

export interface ThermoProblemConfig {
  readonly kind: 'thermo-diagram';
  readonly subMode: 'gibbs-line' | 'gibbs-and-deltaU' | 'hess-cycle';
  readonly equationDisplay: string;
  readonly deltaH_kJ: number;
  readonly deltaS_J_per_K: number;
  readonly tempRange: readonly [number, number];
  readonly defaultTempK: number;
  readonly dataTable?: readonly ThermoRow[];
  readonly species?: readonly EquationSpecies[];
  readonly hessReactions?: readonly HessReactionItem[];
  readonly hessTargetEquation?: string;
}

export interface EquilBufferProblemConfig {
  readonly kind: 'equil-buffer';
  readonly reactionEquation: string;
  readonly kEq: number;
  readonly defaultQ: number;
  readonly qRangeLog10: readonly [number, number];
  readonly bufferLabel: string;
  readonly pKa: number;
  readonly defaultAcidConc: number;
  readonly defaultBaseConc: number;
}

export interface ElectroCellProblemConfig {
  readonly kind: 'electro-cell';
  readonly cellNotation: string;
  readonly anodeHalfReaction: string;
  readonly cathodeHalfReaction: string;
  readonly anodeMetal: string;
  readonly cathodeMetal: string;
  readonly anodeIon: string;
  readonly cathodeIon: string;
  readonly eAnode: number;
  readonly eCathode: number;
  readonly electronsTransferred: number;
  readonly defaultQ: number;
}

export interface ChemistrySemiEssayProblem {
  readonly id: string;
  readonly topicId: ChemistryTopicId;
  readonly title: string;
  readonly examTag: string;
  readonly statement: string;
  readonly visual:
    | MoProblemConfig
    | VbProblemConfig
    | ThermoProblemConfig
    | EquilBufferProblemConfig
    | ElectroCellProblemConfig;
  readonly steps: readonly SemiEssayStep[];
}

export const CHEMISTRY_TOPICS: readonly {
  readonly id: ChemistryTopicId;
  readonly title: string;
  readonly shortDesc: string;
}[] = [
  {
    id: 'mo-diagram',
    title: 'Giản đồ MO',
    shortDesc: 'Đảo mức Loại I/II, điền electron động theo Aufbau–Hund–Pauli, bậc liên kết & từ tính.',
  },
  {
    id: 'vb-hybridization',
    title: 'Thuyết VB & Lai hóa',
    shortDesc: 'Tổ hợp ô lượng tử sp/sp²/sp³, xen phủ dọc trục σ và xen phủ bên π, hình học phân tử.',
  },
  {
    id: 'thermo-diagram',
    title: 'Biểu đồ nhiệt động',
    shortDesc: 'Đường ΔG°(T) tương tác, tô màu chất khí tính ΔU và đảo chiều chu trình Hess.',
  },
  {
    id: 'equil-buffer',
    title: 'Cân bằng ICE & Đệm',
    shortDesc: 'So sánh Q với K xác định chiều chuyển dịch, tính pH dung dịch đệm Henderson–Hasselbalch.',
  },
  {
    id: 'electro-cell',
    title: 'Pin Galvani & Nernst',
    shortDesc: 'Dòng electron Anode → Cathode, cầu muối và thế điện cực Nernst E_pin(Q).',
  },
];

export const CHEMISTRY_SEMI_ESSAY_PROBLEMS: readonly ChemistrySemiEssayProblem[] = [
  // ===================== 1. MO DIAGRAM PROBLEMS =====================
  {
    id: 'mo-o2-family',
    topicId: 'mo-diagram',
    title: 'Ion O₂⁻ và so sánh họ O₂, O₂⁺, O₂⁻',
    examTag: 'Khuôn Câu 2 — ĐT23 / ĐT26',
    statement:
      'Dựng giản đồ MO hóa trị cho ion O₂⁻ (Z_O = 8). Từ đó tính bậc liên kết, xét từ tính và so sánh độ bền liên kết trong dãy O₂⁺, O₂, O₂⁻.',
    visual: {
      kind: 'mo-diagram',
      speciesLabel: 'O₂⁻',
      atomLeft: 'O (2s² 2p⁴)',
      atomRight: 'O⁻ (2s² 2p⁵)',
      expectedOrdering: 'type-1',
      expectedTotalElectrons: 13,
      expectedBondOrder: 1.5,
      expectedMagnetism: 'paramagnetic',
    },
    steps: [
      {
        id: 'o2m-s1',
        title: 'Bước 1. Đếm số electron hóa trị',
        ruleTip: 'Dùng n_e = v_A + v_B − q (O thuộc nhóm VIA nên v = 6; ion âm q = −1 nên cộng thêm 1 e).',
        trapNote: 'Bẫy: Không cộng 4 electron lõi 1s vào giản đồ MO hóa trị chu kỳ 2.',
        completedEssayLine: 'Tổng số electron hóa trị của O₂⁻: n_e = 6 + 6 − (−1) = 13 electron hóa trị.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính tổng số electron hóa trị cần điền vào giản đồ MO (2s, 2p) của O₂⁻:',
          formulaPrefix: 'n_e = v(O) + v(O) − q =',
          fields: [
            {
              id: 'ne',
              label: 'Số electron hóa trị',
              unit: 'e',
              placeholder: 'VD: 13',
              expected: 13,
              tolerance: 0,
              wrongHint: 'Mỗi nguyên tử O có 6 e hóa trị; điện tích −1 nghĩa là nhận thêm 1 e → 6 + 6 + 1 = 13.',
            },
          ],
        },
      },
      {
        id: 'o2m-s2',
        title: 'Bước 2. Chọn thứ tự mức & điền electron trên giản đồ MO',
        ruleTip: 'O₂, F₂ và họ ion của chúng dùng Loại I (σ2p < π2p). Nhấn trực tiếp vào từng ô orbital bên trái để điền mũi tên (hoặc bấm "Xem hướng dẫn động").',
        trapNote: 'Bẫy: Ở cặp đồng mức π*2p, phải điền [↑][↑] trước rồi mới ghép đôi thành [↑↓][↑].',
        completedEssayLine:
          'Sơ đồ Loại I (σ2p < π2p): cấu hình MO hóa trị của O₂⁻ là (σ2s)² (σ*2s)² (σ2p)² (π2p)⁴ (π*2p)³.',
        interaction: {
          type: 'mo-diagram-interactive',
          prompt:
            'Chọn đúng thứ tự mức năng lượng trên khung Giản đồ MO bên trái và điền đủ 13 electron hóa trị theo Aufbau – Hund – Pauli.',
        },
      },
      {
        id: 'o2m-s3',
        title: 'Bước 3. Tính bậc liên kết (BO) & xét từ tính',
        ruleTip: 'BO = (n_lk − n_plk) / 2. Đếm e trên MO không có dấu * (n_lk) và có dấu * (n_plk).',
        trapNote: 'Bẫy: Không đếm electron ở cột AO hai bên; chỉ đếm electron ở cột MO giữa.',
        completedEssayLine:
          'Ta có n_lk = 8, n_plk = 5 ⇒ BO(O₂⁻) = (8 − 5)/2 = 1,5. Còn 1 electron độc thân ở π*2p nên O₂⁻ thuận từ.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Đọc kết quả từ giản đồ MO vừa dựng để tính bậc liên kết của O₂⁻:',
          fields: [
            {
              id: 'nlk',
              label: 'n_lk (e liên kết)',
              placeholder: '8',
              expected: 8,
              tolerance: 0,
              wrongHint: 'Đếm tổng e trên σ2s (2), σ2p (2) và π2p (4) → 8.',
            },
            {
              id: 'nplk',
              label: 'n_plk (e phản liên kết *)',
              placeholder: '5',
              expected: 5,
              tolerance: 0,
              wrongHint: 'Đếm tổng e trên σ*2s (2) và π*2p (3) → 5.',
            },
            {
              id: 'bo',
              label: 'Bậc liên kết BO',
              placeholder: '1,5',
              expected: 1.5,
              tolerance: 0.01,
              wrongHint: 'BO = (8 − 5) / 2 = 1,5.',
            },
          ],
        },
      },
      {
        id: 'o2m-s4',
        title: 'Bước 4. Viết câu kết luận so sánh cả họ O₂⁺, O₂, O₂⁻',
        ruleTip: 'Tạo O₂⁺ là bớt 1 e phản liên kết π* → BO tăng (2,5). Tạo O₂⁻ là thêm 1 e vào π* → BO giảm (1,5). BO càng lớn liên kết càng bền và càng ngắn.',
        trapNote: 'Bẫy: Đừng mặc định ion dương luôn kém bền hơn phân tử trung hòa — phải xét e bị bớt nằm ở MO liên kết hay phản liên kết.',
        completedEssayLine:
          'So sánh: BO(O₂⁺) = 2,5 > BO(O₂) = 2,0 > BO(O₂⁻) = 1,5 ⇒ O₂⁺ có liên kết bền nhất và ngắn nhất; cả ba tiểu phân đều thuận từ.',
        interaction: {
          type: 'clause-choice',
          prompt: 'Chọn câu kết luận tự luận chính xác nhất cho dãy O₂⁺, O₂, O₂⁻:',
          expectedOptionId: 'c1',
          options: [
            {
              id: 'c1',
              text: 'Vì BO(O₂⁺) = 2,5 > BO(O₂) = 2 > BO(O₂⁻) = 1,5 nên liên kết của O₂⁺ bền nhất và ngắn nhất; cả ba đều thuận từ.',
            },
            {
              id: 'c2',
              text: 'Vì O₂ trung hòa có BO = 2 nên O₂ bền nhất, còn O₂⁺ mất electron nên kém bền hơn O₂.',
              wrongReason: 'O₂⁺ mất 1 electron trên orbital phản liên kết π*2p nên bậc liên kết tăng lên 2,5 (bền hơn O₂).',
            },
            {
              id: 'c3',
              text: 'Vì O₂⁻ có thêm 1 electron nên BO(O₂⁻) = 2,5 lớn nhất và O₂⁻ nghịch từ.',
              wrongReason: 'Electron thêm vào rơi vào π*2p (phản liên kết) nên BO giảm xuống 1,5 và vẫn còn 1 e độc thân (thuận từ).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'mo-b2-inversion',
    topicId: 'mo-diagram',
    title: 'Phân tử B₂ — Bẫy đảo mức năng lượng Loại II',
    examTag: 'Khuôn Câu 2 — ĐT27',
    statement:
      'Dựng giản đồ MO hóa trị của phân tử B₂ (Z_B = 5). Giải thích vì sao thực nghiệm cho thấy B₂ có tính thuận từ.',
    visual: {
      kind: 'mo-diagram',
      speciesLabel: 'B₂',
      atomLeft: 'B (2s² 2p¹)',
      atomRight: 'B (2s² 2p¹)',
      expectedOrdering: 'type-2',
      expectedTotalElectrons: 6,
      expectedBondOrder: 1,
      expectedMagnetism: 'paramagnetic',
    },
    steps: [
      {
        id: 'b2-s1',
        title: 'Bước 1. Đếm số electron hóa trị của B₂',
        ruleTip: 'Bo (Z = 5) có cấu hình 1s² 2s² 2p¹ → mỗi nguyên tử B đóng góp 3 electron hóa trị.',
        trapNote: 'Bẫy: Trộn 10 electron toàn phần vào sơ đồ MO hóa trị.',
        completedEssayLine: 'Mỗi nguyên tử B có 3 e hóa trị ⇒ B₂ có n_e = 3 + 3 = 6 electron hóa trị.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Điền tổng số electron hóa trị của phân tử B₂:',
          formulaPrefix: 'n_e = 2 × v(B) =',
          fields: [
            {
              id: 'ne',
              label: 'Tổng e hóa trị',
              unit: 'e',
              placeholder: '6',
              expected: 6,
              tolerance: 0,
              wrongHint: 'B ở nhóm IIIA có 3 e hóa trị → B₂ có 3 + 3 = 6 e hóa trị.',
            },
          ],
        },
      },
      {
        id: 'b2-s2',
        title: 'Bước 2. Chọn sơ đồ Loại II & điền 6 electron trên giản đồ',
        ruleTip: 'Từ Li₂ đến N₂ có sự trộn s–p mạnh nên π2p nằm thấp hơn σ2p (Loại II). Hãy bật Loại II để thấy hai mức trượt đổi chỗ!',
        trapNote: 'Bẫy: Nếu dùng nhầm Loại I, 2 e cuối sẽ ghép đôi hết trong σ2p khiến bạn kết luận sai là nghịch từ.',
        completedEssayLine: 'Dùng sơ đồ Loại II (π2p < σ2p): cấu hình MO của B₂ là (σ2s)² (σ*2s)² (π2p)¹ (π2p)¹.',
        interaction: {
          type: 'mo-diagram-interactive',
          prompt: 'Chuyển sang Loại II trên giản đồ bên trái và điền đúng 6 electron hóa trị cho B₂.',
        },
      },
      {
        id: 'b2-s3',
        title: 'Bước 3. Kết luận bậc liên kết và giải thích tính thuận từ',
        ruleTip: 'Đọc số e độc thân trên cặp π2p sau khi áp dụng quy tắc Hund.',
        trapNote: 'Bẫy: Quên chỉ rõ "nhờ đảo mức π2p < σ2p và quy tắc Hund" trong câu giải thích tự luận.',
        completedEssayLine:
          'BO(B₂) = (4 − 2)/2 = 1. Do π2p < σ2p nên 2 electron cuối phân bố vào 2 orbital π2p đồng mức theo Hund [↑][↑] → có 2 e độc thân ⇒ B₂ thuận từ.',
        interaction: {
          type: 'clause-choice',
          prompt: 'Chọn lập luận giải thích đúng bản chất tính thuận từ của B₂:',
          expectedOptionId: 'b2-c1',
          options: [
            {
              id: 'b2-c1',
              text: 'Do hiệu ứng trộn s–p (Loại II), cặp π2p nằm dưới σ2p nên 2 electron cuối điền [↑][↑] theo Hund → có 2 e độc thân, BO = 1, B₂ thuận từ.',
            },
            {
              id: 'b2-c2',
              text: 'Vì B₂ có tổng 6 electron chẵn nên mọi electron đều ghép đôi, B₂ nghịch từ.',
              wrongReason: 'Tổng electron chẵn không đảm bảo nghịch từ (tương tự O₂ có 12 e vẫn thuận từ do 2 orbital π đồng mức).',
            },
            {
              id: 'b2-c3',
              text: 'Do σ2p nằm dưới π2p nên 2 electron cuối ghép đôi trong σ2p, BO = 1.',
              wrongReason: 'Đó là thứ tự Loại I (chỉ dùng cho O₂, F₂), trái với thực nghiệm thuận từ của B₂.',
            },
          ],
        },
      },
    ],
  },

  // ===================== 2. VB & HYBRIDIZATION PROBLEMS =====================
  {
    id: 'vb-hcn',
    topicId: 'vb-hybridization',
    title: 'Phân tử HCN — Lai hóa sp và 2 mặt phẳng π vuông góc',
    examTag: 'Bài mẫu chuẩn Chương 2',
    statement:
      'Xác định trạng thái lai hóa của nguyên tử C trong HCN, mô tả sự xen phủ các orbital tạo liên kết σ và π, đếm tổng số liên kết toàn phân tử và nêu dạng hình học.',
    visual: {
      kind: 'vb-hybridization',
      moleculeLabel: 'H–C≡N',
      centralAtom: 'C',
      hybridization: 'sp',
      stericNumber: 2,
      lonePairs: 0,
      geometryLabel: 'Đường thẳng (180°)',
      angleLabel: '180°',
      sigmaTotal: 2,
      piTotal: 2,
      hybridBoxes: [
        { id: 'c-sp1', label: 'sp (1)', electrons: 1, role: 'sigma-bond' },
        { id: 'c-sp2', label: 'sp (2)', electrons: 1, role: 'sigma-bond' },
      ],
      unhybridizedPBoxes: [
        { id: 'c-py', label: '2py', electrons: 1, role: 'pi-bond' },
        { id: 'c-pz', label: '2pz', electrons: 1, role: 'pi-bond' },
      ],
      candidateBonds: [
        {
          id: 'h-c-sigma',
          label: '1s(H) – sp(C) xen phủ dọc trục → σ(H–C)',
          kind: 'sigma',
          description: 'Liên kết đơn H–C nằm dọc trục liên nhân.',
          isCorrectForMolecule: true,
        },
        {
          id: 'c-n-sigma',
          label: 'sp(C) – sp(N) xen phủ dọc trục → σ(C–N)',
          kind: 'sigma',
          description: 'Thành phần σ đầu tiên trong liên kết ba C≡N.',
          isCorrectForMolecule: true,
        },
        {
          id: 'c-n-pi-1',
          label: '2py(C) – 2py(N) xen phủ bên → π₁(C–N)',
          kind: 'pi',
          description: 'Xen phủ bên song song theo mặt phẳng xy.',
          isCorrectForMolecule: true,
        },
        {
          id: 'c-n-pi-2',
          label: '2pz(C) – 2pz(N) xen phủ bên → π₂(C–N)',
          kind: 'pi',
          description: 'Xen phủ bên song song theo mặt phẳng xz vuông góc.',
          isCorrectForMolecule: true,
        },
        {
          id: 'wrong-sp-pi',
          label: 'sp(C) – sp(N) xen phủ bên → π(C–N)',
          kind: 'pi',
          description: 'Orbital lai hóa hướng dọc trục, không xen phủ bên tạo π.',
          isCorrectForMolecule: false,
        },
      ],
    },
    steps: [
      {
        id: 'hcn-s1',
        title: 'Bước 1. Tính số vùng electron T quanh nguyên tử trung tâm C',
        ruleTip: 'T = (số nguyên tử liên kết trực tiếp) + (số cặp e tự do). Liên kết ba C≡N chỉ tính là 1 vùng electron.',
        trapNote: 'Bẫy: Đếm C≡N thành 3 vùng khiến chọn nhầm lai hóa sp³.',
        completedEssayLine: 'Công thức Lewis: H–C≡N:. Nguyên tử C liên kết với 2 nguyên tử (H, N) và có 0 cặp e tự do ⇒ T = 2 → C lai hóa sp.',
        interaction: {
          type: 'clause-choice',
          prompt: 'Xác định số vùng electron T và kiểu lai hóa của nguyên tử C trong H–C≡N:',
          expectedOptionId: 'hcn-sp',
          options: [
            {
              id: 'hcn-sp',
              text: 'C liên kết với 2 nguyên tử (H và N), không có cặp e tự do ⇒ T = 2 ⇒ C ở trạng thái lai hóa sp.',
            },
            {
              id: 'hcn-sp2',
              text: 'C có 1 liên kết đơn và 1 liên kết ba nên T = 3 ⇒ C lai hóa sp².',
              wrongReason: 'Liên kết ba chỉ tính là 1 vùng mật độ electron khi tính T, nên T = 1 + 1 = 2.',
            },
            {
              id: 'hcn-sp3',
              text: 'C có hóa trị IV tạo 4 liên kết nên luôn lai hóa sp³.',
              wrongReason: 'C chỉ lai hóa sp³ khi tạo 4 liên kết đơn; khi có liên kết ba (2 nối π) thì 2 orbital p không lai hóa.',
            },
          ],
        },
      },
      {
        id: 'hcn-s2',
        title: 'Bước 2. Chọn đúng các cặp orbital xen phủ σ và π',
        ruleTip: 'Xen phủ dọc trục (đầu–đầu) tạo σ; các orbital 2p chưa lai hóa song song xen phủ bên tạo π.',
        trapNote: 'Bẫy: Gọi orbital lai hóa sp là "orbital tạo liên kết π".',
        completedEssayLine:
          'Xen phủ: 1s(H)–sp(C) tạo σ(H–C); sp(C)–sp(N) tạo σ(C–N); hai cặp 2py–2py và 2pz–2pz chưa lai hóa xen phủ bên theo 2 mặt phẳng vuông góc tạo 2 liên kết π.',
        interaction: {
          type: 'vb-overlap-interactive',
          prompt: 'Chọn tất cả các cặp xen phủ đúng có mặt trong phân tử HCN (xem hình minh họa cập nhật trực tiếp bên trái):',
          expectedBondIds: ['h-c-sigma', 'c-n-sigma', 'c-n-pi-1', 'c-n-pi-2'],
        },
      },
      {
        id: 'hcn-s3',
        title: 'Bước 3. Đếm liên kết toàn phân tử & kết luận hình học',
        ruleTip: 'Cộng cả liên kết H–C (1σ) và C≡N (1σ + 2π). Cặp e tự do trên N không phải liên kết.',
        trapNote: 'Bẫy: Chỉ ghi 1σ + 2π (bỏ quên liên kết σ của H–C).',
        completedEssayLine:
          'Kết luận: Toàn phân tử HCN có 2 liên kết σ và 2 liên kết π; phân tử có dạng đường thẳng, góc liên kết H–C–N bằng 180°.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Điền tổng số liên kết σ và π trong toàn phân tử HCN:',
          fields: [
            {
              id: 'sigma',
              label: 'Tổng số liên kết σ',
              placeholder: '2',
              expected: 2,
              tolerance: 0,
              wrongHint: 'Gồm 1σ(H–C) và 1σ(C–N) → tổng 2 liên kết σ.',
            },
            {
              id: 'pi',
              label: 'Tổng số liên kết π',
              placeholder: '2',
              expected: 2,
              tolerance: 0,
              wrongHint: 'Trong nối ba C≡N có 2 liên kết π.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'vb-h2o',
    topicId: 'vb-hybridization',
    title: 'Phân tử H₂O — Bẫy lai hóa sp³ nhưng hình học chữ V',
    examTag: 'Bài mẫu kinh điển Chương 2',
    statement:
      'Xác định trạng thái lai hóa của O trong H₂O, phân biệt orbital chứa cặp e tự do với orbital tạo liên kết σ, và giải thích dạng hình học phân tử.',
    visual: {
      kind: 'vb-hybridization',
      moleculeLabel: 'H–O–H',
      centralAtom: 'O',
      hybridization: 'sp3',
      stericNumber: 4,
      lonePairs: 2,
      geometryLabel: 'Góc / chữ V (~104,5°)',
      angleLabel: '104,5°',
      sigmaTotal: 2,
      piTotal: 0,
      hybridBoxes: [
        { id: 'o-lp1', label: 'sp³ (tự do)', electrons: 2, role: 'lone-pair' },
        { id: 'o-lp2', label: 'sp³ (tự do)', electrons: 2, role: 'lone-pair' },
        { id: 'o-b1', label: 'sp³ (O–H)', electrons: 1, role: 'sigma-bond' },
        { id: 'o-b2', label: 'sp³ (O–H)', electrons: 1, role: 'sigma-bond' },
      ],
      unhybridizedPBoxes: [],
      candidateBonds: [
        {
          id: 'o-h-1',
          label: 'sp³(O) bán đầy – 1s(H₁) xen phủ dọc trục → σ(O–H₁)',
          kind: 'sigma',
          description: 'Liên kết cộng hóa trị đơn thứ nhất.',
          isCorrectForMolecule: true,
        },
        {
          id: 'o-h-2',
          label: 'sp³(O) bán đầy – 1s(H₂) xen phủ dọc trục → σ(O–H₂)',
          kind: 'sigma',
          description: 'Liên kết cộng hóa trị đơn thứ hai.',
          isCorrectForMolecule: true,
        },
        {
          id: 'wrong-lp-sigma',
          label: '2 orbital sp³ chứa cặp e tự do [↑↓] tạo thêm 2 liên kết σ',
          kind: 'sigma',
          description: 'Cặp e tự do không xen phủ với nguyên tử khác nên không tạo liên kết.',
          isCorrectForMolecule: false,
        },
      ],
    },
    steps: [
      {
        id: 'h2o-s1',
        title: 'Bước 1. Xác định số vùng electron T và kiểu lai hóa của O',
        ruleTip: 'O có 6 e hóa trị: dùng 2 e tạo 2 nối đơn O–H, còn 4 e = 2 cặp e tự do ⇒ T = 2 + 2 = 4.',
        trapNote: 'Bẫy: Quên cộng 2 cặp e tự do nên chọn nhầm lai hóa sp (đường thẳng).',
        completedEssayLine: 'Nguyên tử O có 2 nguyên tử H liên kết và 2 cặp electron tự do ⇒ T = 2 + 2 = 4 → O lai hóa sp³.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính số cặp e tự do trên O và số vùng electron T:',
          fields: [
            {
              id: 'lp',
              label: 'Số cặp e tự do trên O',
              placeholder: '2',
              expected: 2,
              tolerance: 0,
              wrongHint: 'O có 6 e hóa trị, dùng 2 e nối với 2 H, còn 4 e = 2 cặp tự do.',
            },
            {
              id: 'steric',
              label: 'Số vùng electron T',
              placeholder: '4',
              expected: 4,
              tolerance: 0,
              wrongHint: 'T = 2 (nguyên tử H) + 2 (cặp tự do) = 4 → sp³.',
            },
          ],
        },
      },
      {
        id: 'h2o-s2',
        title: 'Bước 2. Chọn đúng các cặp xen phủ tạo liên kết σ',
        ruleTip: 'Trong 4 orbital sp³ của O, chỉ 2 orbital độc thân [↑] tham gia xen phủ với 1s(H).',
        trapNote: 'Bẫy: Đếm cả 4 orbital sp³ thành "4 liên kết σ".',
        completedEssayLine:
          '2 orbital sp³ bán đầy của O xen phủ dọc trục với 2 orbital 1s(H) tạo 2 liên kết σ(O–H); 2 orbital sp³ còn lại chứa 2 cặp e tự do.',
        interaction: {
          type: 'vb-overlap-interactive',
          prompt: 'Chọn đúng các cặp xen phủ thực sự tạo liên kết trong H₂O:',
          expectedBondIds: ['o-h-1', 'o-h-2'],
        },
      },
      {
        id: 'h2o-s3',
        title: 'Bước 3. Kết luận dạng hình học & góc liên kết',
        ruleTip: 'Hình học phân tử đọc theo vị trí các hạt nhân nguyên tử (không tính cặp e tự do). Cặp tự do đẩy mạnh hơn cặp liên kết → góc thu hẹp dưới 109,5°.',
        trapNote: 'Bẫy: Gọi hình học H₂O là "tứ diện đều 109,5°".',
        completedEssayLine:
          'Kết luận: 4 vùng electron phân bố tứ diện, nhưng do có 2 cặp e tự do đẩy mạnh hơn nên H₂O có dạng hình học góc (chữ V) với góc H–O–H ≈ 104,5° (< 109,5°).',
        interaction: {
          type: 'clause-choice',
          prompt: 'Chọn câu kết luận hình học chuẩn tự luận cho H₂O:',
          expectedOptionId: 'h2o-bent',
          options: [
            {
              id: 'h2o-bent',
              text: 'O lai hóa sp³ nhưng có 2 cặp e tự do đẩy mạnh hơn cặp liên kết ⇒ phân tử có dạng góc (chữ V), góc H–O–H ≈ 104,5° < 109,5°.',
            },
            {
              id: 'h2o-tet',
              text: 'Vì O lai hóa sp³ nên phân tử H₂O có dạng tứ diện đều với góc 109,5°.',
              wrongReason: 'Tứ diện là hình học của 4 vùng electron; hình học phân tử chỉ xét vị trí 3 nguyên tử H–O–H nên là dạng góc (chữ V).',
            },
            {
              id: 'h2o-lin',
              text: 'Vì chỉ có 2 liên kết O–H nên phân tử H₂O thẳng (180°).',
              wrongReason: 'Hai cặp e tự do trên O đẩy 2 liên kết O–H gập xuống thành dạng chữ V.',
            },
          ],
        },
      },
    ],
  },

  // ===================== 3. THERMODYNAMICS DIAGRAM PROBLEMS =====================
  {
    id: 'thermo-nh4cl-gibbs',
    topicId: 'thermo-diagram',
    title: 'Nhiệt phân NH₄Cl — Đường ΔG°(T) & nhiệt độ đổi chiều T*',
    examTag: 'Khuôn Câu 3 — ĐT25',
    statement:
      'Cho phản ứng: NH₄Cl(r) → HCl(k) + NH₃(k). Tính ΔH°, ΔS°, ΔG° ở 25 °C (298 K) và xác định khoảng nhiệt độ để phản ứng tự diễn biến.',
    visual: {
      kind: 'thermo-diagram',
      subMode: 'gibbs-line',
      equationDisplay: 'NH₄Cl(r) → HCl(k) + NH₃(k)',
      deltaH_kJ: 176,
      deltaS_J_per_K: 285,
      tempRange: [0, 900],
      defaultTempK: 298,
      dataTable: [
        { formula: 'NH₄Cl(r)', role: 'Chất đầu', coeff: 1, deltaHf: -314, entropy: 95 },
        { formula: 'HCl(k)', role: 'Sản phẩm', coeff: 1, deltaHf: -92, entropy: 187 },
        { formula: 'NH₃(k)', role: 'Sản phẩm', coeff: 1, deltaHf: -46, entropy: 193 },
      ],
    },
    steps: [
      {
        id: 'nh4cl-s1',
        title: 'Bước 1. Tính ΔH° (kJ) và đổi ΔS° sang kJ/K',
        ruleTip: 'Lấy tổng (sản phẩm) − tổng (chất đầu). Chia ΔS° cho 1000 ngay tại bước này để cùng đơn vị kJ.',
        trapNote: 'Bẫy phổ biến nhất: để nguyên ΔS° = 285 J/K rồi trừ trực tiếp với ΔH° = 176 kJ.',
        completedEssayLine:
          'ΔH° = [(−92) + (−46)] − (−314) = +176 kJ; ΔS° = (187 + 193) − 95 = +285 J/K = +0,285 kJ/K.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Từ bảng số liệu bên trái, tính ΔH° và ΔS° (đã đổi sang kJ/K):',
          fields: [
            {
              id: 'dh',
              label: 'ΔH°',
              unit: 'kJ',
              placeholder: '176',
              expected: 176,
              tolerance: 0.2,
              wrongHint: 'ΔH° = (−92 − 46) − (−314) = +176 kJ.',
            },
            {
              id: 'ds',
              label: 'ΔS° (đổi sang kJ/K)',
              unit: 'kJ/K',
              placeholder: '0,285',
              expected: 0.285,
              tolerance: 0.002,
              wrongHint: 'ΔS° = (187 + 193) − 95 = 285 J/K = 0,285 kJ/K.',
            },
          ],
        },
      },
      {
        id: 'nh4cl-s2',
        title: 'Bước 2. Tính ΔG° ở 298 K và nhiệt độ đổi chiều T*',
        ruleTip: 'ΔG° = ΔH° − T·ΔS°. Tại nhiệt độ đổi chiều T*, đặt ΔG° = 0 ⇒ T* = ΔH° / ΔS° (cùng đơn vị kJ).',
        trapNote: 'Bẫy: T* hợp lý cỡ vài trăm K; nếu ra 0,6 K hay 617 500 K là dấu hiệu quên đổi J ↔ kJ.',
        completedEssayLine:
          'Ở 298 K: ΔG° = 176 − 298 × 0,285 = +91,07 kJ > 0 (không tự xảy ra). Nhiệt độ đổi chiều: T* = 176 / 0,285 ≈ 617,5 K.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính ΔG° ở 298 K và nhiệt độ đổi chiều T* (kéo thanh nhiệt độ trên đồ thị để đối chiếu):',
          fields: [
            {
              id: 'dg298',
              label: 'ΔG° (298 K)',
              unit: 'kJ',
              placeholder: '91,07',
              expected: 91.07,
              tolerance: 0.3,
              wrongHint: 'ΔG° = 176 − 298 × 0,285 = +91,07 kJ.',
            },
            {
              id: 'tstar',
              label: 'Nhiệt độ đổi chiều T*',
              unit: 'K',
              placeholder: '617,5',
              expected: 617.5,
              tolerance: 1.0,
              wrongHint: 'T* = 176 / 0,285 ≈ 617,5 K.',
            },
          ],
        },
      },
      {
        id: 'nh4cl-s3',
        title: 'Bước 3. Đọc đồ thị ΔG°(T) & kết luận khoảng nhiệt độ',
        ruleTip: 'Trên đồ thị ΔG°(T), phản ứng tự diễn biến ứng với phần đường thẳng nằm DƯỚI trục hoành (vùng tô xanh ΔG° < 0).',
        trapNote: 'Bẫy: Nhìn nhầm chiều bất đẳng thức khi giải tay; luôn đối chiếu với độ dốc −ΔS° trên đồ thị.',
        completedEssayLine:
          'Vì ΔH° > 0 và ΔS° > 0, đường ΔG°(T) đi xuống và nằm dưới trục hoành khi T > 617,5 K ⇒ phản ứng tự xảy ra ở nhiệt độ cao (T > 617,5 K hay t > 344,5 °C).',
        interaction: {
          type: 'clause-choice',
          prompt: 'Quan sát vùng màu xanh (ΔG° < 0) trên đồ thị ΔG°(T) bên trái và chọn kết luận đúng:',
          expectedOptionId: 'gt-high',
          options: [
            {
              id: 'gt-high',
              text: 'Đường ΔG°(T) cắt trục hoành tại T* = 617,5 K và nằm dưới trục hoành khi T > 617,5 K ⇒ phản ứng tự diễn biến ở nhiệt độ cao (T > 617,5 K).',
            },
            {
              id: 'gt-low',
              text: 'Phản ứng tự diễn biến ở nhiệt độ thấp (T < 617,5 K).',
              wrongReason: 'Khi T < 617,5 K (ví dụ 298 K), đường thẳng nằm trên trục hoành (ΔG° > 0) nên không tự xảy ra.',
            },
            {
              id: 'gt-never',
              text: 'Vì ΔH° > 0 nên phản ứng không tự xảy ra ở mọi nhiệt độ.',
              wrongReason: 'Do ΔS° > 0 (tạo 2 mol khí từ chất rắn), khi T đủ lớn số hạng −TΔS° thắng ΔH° làm ΔG° < 0.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'thermo-cus-delta-u',
    topicId: 'thermo-diagram',
    title: 'Đốt cháy CuS — Tính ΔG° và tô màu chất khí tìm ΔU',
    examTag: 'Khuôn Câu 3 — ĐT23',
    statement:
      'Cho phản ứng đốt cháy đồng sunfua: 2CuS(r) + 3O₂(k) → 2CuO(r) + 2SO₂(k) ở 25 °C. Tính ΔG° và biến thiên nội năng ΔU của phản ứng.',
    visual: {
      kind: 'thermo-diagram',
      subMode: 'gibbs-and-deltaU',
      equationDisplay: '2CuS(r) + 3O₂(k) → 2CuO(r) + 2SO₂(k)',
      deltaH_kJ: -719.4,
      deltaS_J_per_K: -166.8,
      tempRange: [0, 5000],
      defaultTempK: 298,
      dataTable: [
        { formula: 'CuS(r)', role: 'Chất đầu', coeff: 2, deltaHf: -93.1, entropy: 66.5 },
        { formula: 'O₂(k)', role: 'Chất đầu', coeff: 3, deltaHf: 0, entropy: 205.0 },
        { formula: 'CuO(r)', role: 'Sản phẩm', coeff: 2, deltaHf: -156.0, entropy: 42.6 },
        { formula: 'SO₂(k)', role: 'Sản phẩm', coeff: 2, deltaHf: -296.8, entropy: 248.0 },
      ],
      species: [
        { id: 'cus', formula: 'CuS', state: 'r', coefficient: 2, side: 'reactant' },
        { id: 'o2', formula: 'O₂', state: 'k', coefficient: 3, side: 'reactant' },
        { id: 'cuo', formula: 'CuO', state: 'r', coefficient: 2, side: 'product' },
        { id: 'so2', formula: 'SO₂', state: 'k', coefficient: 2, side: 'product' },
      ],
    },
    steps: [
      {
        id: 'cus-s1',
        title: 'Bước 1. Nhân hệ số ν để tính ΔH°, ΔS° và ΔG° (298 K)',
        ruleTip: 'Nhân đúng hệ số ν ở mỗi cột. Đơn chất O₂ có ΔH°f = 0 nhưng S° = 205,0 J/(mol·K) ≠ 0!',
        trapNote: 'Bẫy: Bỏ quên cột S° của O₂(k) hoặc quên nhân hệ số 3 cho O₂.',
        completedEssayLine:
          'ΔH° = [2(−156) + 2(−296,8)] − 2(−93,1) = −719,4 kJ; ΔS° = −166,8 J/K = −0,1668 kJ/K ⇒ ΔG°(298 K) = −669,7 kJ < 0 (tự diễn biến).',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính ΔH° và ΔG° của phản ứng ở 298 K:',
          fields: [
            {
              id: 'dh',
              label: 'ΔH°',
              unit: 'kJ',
              placeholder: '-719,4',
              expected: -719.4,
              tolerance: 0.4,
              wrongHint: 'ΔH° = [2(−156,0) + 2(−296,8)] − [2(−93,1) + 3(0)] = −719,4 kJ.',
            },
            {
              id: 'dg',
              label: 'ΔG° (298 K)',
              unit: 'kJ',
              placeholder: '-669,7',
              expected: -669.7,
              tolerance: 0.5,
              wrongHint: 'ΔS° = −0,1668 kJ/K ⇒ ΔG° = −719,4 − 298 × (−0,1668) ≈ −669,7 kJ.',
            },
          ],
        },
      },
      {
        id: 'cus-s2',
        title: 'Bước 2. Tô màu các chất khí (k) trên phương trình để đếm Δn_khí',
        ruleTip: 'Chỉ bấm chọn các chất có ký hiệu (k) trên phương trình bên trái. Bỏ qua mọi chất rắn (r) và lỏng (l).',
        trapNote: 'Bẫy: Đếm cả 2CuS(r) và 2CuO(r) vào Δn.',
        completedEssayLine: 'Chỉ tính các chất khí: Δn_khí = n(SO₂) − n(O₂) = 2 − 3 = −1 mol.',
        interaction: {
          type: 'thermo-gas-select',
          prompt: 'Nhấn chọn đúng các chất ở thể khí (k) trên phương trình bên trái để tự tổng hợp Δn_khí.',
        },
      },
      {
        id: 'cus-s3',
        title: 'Bước 3. Tính biến thiên nội năng ΔU ở 298 K',
        ruleTip: 'Từ ΔH = ΔU + Δn_khí·RT suy ra ΔU = ΔH − Δn_khí·RT, với RT = 8,314 × 298 × 10⁻³ ≈ 2,478 kJ/mol.',
        trapNote: 'Bẫy: Dùng R = 0,082 hoặc quên đổi J → kJ. Mẹo kiểm tra: |ΔU − ΔH| chỉ lệch cỡ vài kJ!',
        completedEssayLine:
          'ΔU = ΔH − Δn_khí·RT = −719,4 − (−1)(2,478) ≈ −716,9 kJ (lệch ΔH khoảng 2,5 kJ — hợp lý).',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Thế ΔH° = −719,4 kJ và Δn_khí = −1 vào công thức tính ΔU:',
          formulaPrefix: 'ΔU = ΔH − Δn_khí·RT =',
          fields: [
            {
              id: 'du',
              label: 'ΔU (298 K)',
              unit: 'kJ',
              placeholder: '-716,9',
              expected: -716.92,
              tolerance: 0.4,
              wrongHint: 'ΔU = −719,4 − (−1) × (8,314 × 298 × 10⁻³) = −719,4 + 2,478 ≈ −716,9 kJ.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'thermo-hess-c2h2',
    topicId: 'thermo-diagram',
    title: 'Chu trình Hess — Tổ hợp phản ứng tính ΔH° tạo C₂H₂',
    examTag: 'Nền tảng định luật Hess',
    statement:
      'Tính nhiệt tạo thành chuẩn ΔH° của phản ứng: 2C(r) + H₂(k) → C₂H₂(k) từ 3 phản ứng đốt cháy cho sẵn bằng cách đảo chiều và nhân hệ số trực tiếp trên chu trình Hess.',
    visual: {
      kind: 'thermo-diagram',
      subMode: 'hess-cycle',
      equationDisplay: '2C(r) + H₂(k) → C₂H₂(k)',
      deltaH_kJ: 226,
      deltaS_J_per_K: 0,
      tempRange: [0, 600],
      defaultTempK: 298,
      hessTargetEquation: '2C(r) + H₂(k) → C₂H₂(k)',
      hessReactions: [
        {
          id: 'h1',
          equation: 'C(r) + O₂(k) → CO₂(k)',
          deltaH: -394,
          targetReversed: false,
          targetMultiplier: 2,
        },
        {
          id: 'h2',
          equation: 'H₂(k) + ½O₂(k) → H₂O(l)',
          deltaH: -286,
          targetReversed: false,
          targetMultiplier: 1,
        },
        {
          id: 'h3',
          equation: 'C₂H₂(k) + ⁵⁄₂O₂(k) → 2CO₂(k) + H₂O(l)',
          deltaH: -1300,
          targetReversed: true,
          targetMultiplier: 1,
        },
      ],
    },
    steps: [
      {
        id: 'hess-s1',
        title: 'Bước 1. Đảo chiều & nhân hệ số trên chu trình Hess',
        ruleTip: 'Cần 2C(r) ở vế trái → nhân (1) với 2. Cần C₂H₂(k) ở vế phải → đảo chiều (3) và đổi dấu ΔH₃.',
        trapNote: 'Bẫy: Đảo chiều phản ứng nhưng quên đổi dấu của ΔH.',
        completedEssayLine:
          'Tổ hợp: 2×(1) + (2) − (3) ⇒ ΔH° = 2(−394) + (−286) + (+1300) = +226 kJ.',
        interaction: {
          type: 'hess-cycle-interactive',
          prompt:
            'Điều chỉnh nút Đảo chiều và Hệ số (×1 / ×2) trên chu trình Hess bên trái sao cho tổng phương trình khớp 2C(r) + H₂(k) → C₂H₂(k).',
          expectedDeltaH: 226,
        },
      },
      {
        id: 'hess-s2',
        title: 'Bước 2. Kết luận ý nghĩa nhiệt động của kết quả',
        ruleTip: 'ΔH° > 0 là phản ứng thu nhiệt; ΔH° < 0 là phản ứng tỏa nhiệt.',
        trapNote: 'Bẫy: Ghi thiếu dấu "+" trước kết quả thu nhiệt.',
        completedEssayLine:
          'Kết luận: ΔH° = +226 kJ/mol > 0 ⇒ phản ứng tạo thành C₂H₂ từ các đơn chất là phản ứng thu nhiệt.',
        interaction: {
          type: 'clause-choice',
          prompt: 'Chọn câu kết luận chuẩn tự luận cho kết quả ΔH° = +226 kJ:',
          expectedOptionId: 'hess-endo',
          options: [
            {
              id: 'hess-endo',
              text: 'Vì ΔH° = +226 kJ/mol > 0 nên phản ứng tổng hợp C₂H₂ từ đơn chất là phản ứng thu nhiệt.',
            },
            {
              id: 'hess-exo',
              text: 'Vì cả 3 phản ứng đốt cháy đều âm nên phản ứng tổng hợp C₂H₂ tỏa nhiệt.',
              wrongReason: 'Phản ứng (3) bị đảo chiều nên đóng góp +1300 kJ, lớn hơn tổng −1074 kJ của (1) và (2).',
            },
          ],
        },
      },
    ],
  },

  // ===================== 4. EQUILIBRIUM & BUFFER PROBLEMS =====================
  {
    id: 'equil-ice-nh3',
    topicId: 'equil-buffer',
    title: 'Cân bằng NH₃ / NH₄⁺ và dung dịch đệm',
    examTag: 'Ch 4 & 6 — CHE1080',
    statement:
      'Xét dung dịch NH₃ 0,10 M (Kb = 1,8·10⁻⁵; pKa(NH₄⁺) = 9,25) và hệ đệm NH₄⁺/NH₃. So sánh Q với K để xét chiều chuyển dịch cân bằng và tính pH khi [NH₃] = 0,20 M, [NH₄⁺] = 0,10 M.',
    visual: {
      kind: 'equil-buffer',
      reactionEquation: 'NH₃(dd) + H₂O(l) ⇌ NH₄⁺(dd) + OH⁻(dd)',
      kEq: 1.8e-5,
      defaultQ: 5.0e-6,
      qRangeLog10: [-7, -3],
      bufferLabel: 'Hệ đệm NH₄⁺ / NH₃',
      pKa: 9.25,
      defaultAcidConc: 0.1,
      defaultBaseConc: 0.2,
    },
    steps: [
      {
        id: 'eq-nh3-s1',
        title: 'Bước 1. Tính pH dung dịch NH₃ 0,10 M theo bảng ICE',
        ruleTip: 'Với bazơ yếu có Kb/C < 10⁻³, dùng gần đúng [OH⁻] ≈ √(Kb · C), sau đó pOH = −lg[OH⁻] và pH = 14 − pOH.',
        trapNote: 'Bẫy: Lấy −lg[OH⁻] rồi ghi thẳng là pH mà quên trừ từ 14.',
        completedEssayLine:
          'Từ bảng ICE: [OH⁻] ≈ √(1,8·10⁻⁵ × 0,10) = 1,34·10⁻³ M ⇒ pOH ≈ 2,87 ⇒ pH ≈ 11,13.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính pOH và pH của dung dịch NH₃ 0,10 M ở 25 °C:',
          fields: [
            {
              id: 'poh',
              label: 'pOH',
              placeholder: '2,87',
              expected: 2.87,
              tolerance: 0.05,
              wrongHint: '[OH⁻] ≈ √(1,8·10⁻⁵ × 0,10) ≈ 1,34·10⁻³ M → pOH = −lg(1,34·10⁻³) ≈ 2,87.',
            },
            {
              id: 'ph',
              label: 'pH',
              placeholder: '11,13',
              expected: 11.13,
              tolerance: 0.05,
              wrongHint: 'pH = 14 − pOH = 14 − 2,87 = 11,13.',
            },
          ],
        },
      },
      {
        id: 'eq-nh3-s2',
        title: 'Bước 2. So sánh Q với K để dự đoán chiều chuyển dịch',
        ruleTip: 'Nếu Q < K thì phản ứng tiếp tục chuyển dịch theo chiều thuận cho tới khi Q = K.',
        trapNote: 'Bẫy: Nhầm dấu bất đẳng thức giữa Q < K và Q > K.',
        completedEssayLine:
          'Khi Q = 5,0·10⁻⁶ < Kb = 1,8·10⁻⁵, cân bằng chuyển dịch theo chiều thuận để tăng nồng độ NH₄⁺ và OH⁻.',
        interaction: {
          type: 'clause-choice',
          prompt: 'Chọn nhận định đúng khi thương số phản ứng Q = 5,0·10⁻⁶ < Kb = 1,8·10⁻⁵:',
          expectedOptionId: 'eq-fwd',
          options: [
            {
              id: 'eq-fwd',
              text: 'Vì Q < Kb nên hệ chuyển dịch theo chiều thuận (tạo thêm NH₄⁺ và OH⁻) cho đến khi đạt cân bằng.',
            },
            {
              id: 'eq-rev',
              text: 'Vì Q < Kb nên hệ chuyển dịch theo chiều nghịch để giảm [OH⁻].',
              wrongReason: 'Khi Q < K, tử số (sản phẩm) còn nhỏ hơn trạng thái cân bằng nên phản ứng đi theo chiều thuận.',
            },
          ],
        },
      },
      {
        id: 'eq-nh3-s3',
        title: 'Bước 3. Tính pH hệ đệm NH₄⁺/NH₃ theo Henderson–Hasselbalch',
        ruleTip: 'Dùng pH = pKa + lg([NH₃] / [NH₄⁺]) với [NH₃] là bazơ liên hợp và [NH₄⁺] là axit liên hợp.',
        trapNote: 'Bẫy: Đảo ngược tỉ số [axit]/[bazơ] trong biểu thức logarit.',
        completedEssayLine:
          'Áp dụng Henderson–Hasselbalch: pH = 9,25 + lg(0,20 / 0,10) = 9,25 + 0,30 = 9,55.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính pH của dung dịch đệm có [NH₃] = 0,20 M và [NH₄⁺] = 0,10 M (pKa = 9,25):',
          formulaPrefix: 'pH = pKa + lg([NH₃]/[NH₄⁺]) =',
          fields: [
            {
              id: 'buffer-ph',
              label: 'pH hệ đệm',
              placeholder: '9,55',
              expected: 9.55,
              tolerance: 0.03,
              wrongHint: 'pH = 9,25 + lg(0,20 / 0,10) = 9,25 + 0,301 ≈ 9,55.',
            },
          ],
        },
      },
    ],
  },

  // ===================== 5. GALVANIC CELL & NERNST PROBLEMS =====================
  {
    id: 'electro-zn-cu-nernst',
    topicId: 'electro-cell',
    title: 'Pin Daniell Zn–Cu & Phương trình Nernst',
    examTag: 'Ch 7 — CHE1080',
    statement:
      'Xét pin Galvani: (−) Zn | Zn²⁺ (0,01 M) || Cu²⁺ (1,00 M) | Cu (+) ở 25 °C, biết E°(Zn²⁺/Zn) = −0,76 V và E°(Cu²⁺/Cu) = +0,34 V. Xác định cực, tính E°_pin, ΔG° và E_pin theo phương trình Nernst.',
    visual: {
      kind: 'electro-cell',
      cellNotation: '(−) Zn | Zn²⁺ || Cu²⁺ | Cu (+)',
      anodeHalfReaction: 'Zn(r) → Zn²⁺(dd) + 2e⁻',
      cathodeHalfReaction: 'Cu²⁺(dd) + 2e⁻ → Cu(r)',
      anodeMetal: 'Zn',
      cathodeMetal: 'Cu',
      anodeIon: 'Zn²⁺',
      cathodeIon: 'Cu²⁺',
      eAnode: -0.76,
      eCathode: 0.34,
      electronsTransferred: 2,
      defaultQ: 0.01,
    },
    steps: [
      {
        id: 'el-zncu-s1',
        title: 'Bước 1. Xác định Anode, Cathode và chiều dòng electron',
        ruleTip: 'Cực có E° nhỏ hơn là Anode (−, xảy ra sự oxi hóa); electron đi qua dây dẫn ngoài từ Anode sang Cathode (+).',
        trapNote: 'Bẫy: Nhầm chiều electron đi từ cực dương sang cực âm hoặc cho electron chạy qua cầu muối.',
        completedEssayLine:
          'Vì E°(Zn²⁺/Zn) = −0,76 V < E°(Cu²⁺/Cu) = +0,34 V nên Zn là Anode (−, oxi hóa), Cu là Cathode (+, khử); electron đi từ Zn sang Cu qua dây dẫn.',
        interaction: {
          type: 'clause-choice',
          prompt: 'Chọn mô tả chính xác về hai điện cực và dòng electron của pin Zn–Cu:',
          expectedOptionId: 'el-ok',
          options: [
            {
              id: 'el-ok',
              text: 'Zn là Anode (−) xảy ra oxi hóa Zn → Zn²⁺ + 2e⁻; electron theo dây dẫn sang Cathode (+) Cu để khử Cu²⁺.',
            },
            {
              id: 'el-bad',
              text: 'Cu là Anode vì có thế khử dương hơn, electron đi từ Cu sang Zn qua cầu muối.',
              wrongReason: 'Cực có thế khử chuẩn lớn hơn là Cathode (+); electron chỉ truyền qua dây dẫn kim loại ngoài.',
            },
          ],
        },
      },
      {
        id: 'el-zncu-s2',
        title: 'Bước 2. Tính E°_pin và ΔG° chuẩn',
        ruleTip: 'E°_pin = E°_cathode − E°_anode và ΔG° = −n·F·E°_pin (với n = 2, F = 96485 C/mol).',
        trapNote: 'Bẫy: Quên đổi dấu khi trừ E°_anode = −0,76 V hoặc quên đổi J sang kJ.',
        completedEssayLine:
          'Ta có E°_pin = 0,34 − (−0,76) = 1,10 V; ΔG° = −2 × 96485 × 1,10 / 1000 ≈ −212,3 kJ/mol < 0.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính sức điện động chuẩn E°_pin và biến thiên thế đẳng áp chuẩn ΔG°:',
          fields: [
            {
              id: 'e-std',
              label: 'E°_pin',
              unit: 'V',
              placeholder: '1,10',
              expected: 1.1,
              tolerance: 0.01,
              wrongHint: 'E°_pin = 0,34 − (−0,76) = 1,10 V.',
            },
            {
              id: 'dg-std',
              label: 'ΔG°',
              unit: 'kJ/mol',
              placeholder: '-212,3',
              expected: -212.3,
              tolerance: 1.0,
              wrongHint: 'ΔG° = −2 × 96,485 × 1,10 ≈ −212,3 kJ/mol.',
            },
          ],
        },
      },
      {
        id: 'el-zncu-s3',
        title: 'Bước 3. Tính E_pin(Q) theo phương trình Nernst ở 25 °C',
        ruleTip: 'E_pin = E°_pin − (0,0592 / n) · lg(Q) với Q = [Zn²⁺] / [Cu²⁺] = 0,01 / 1,00 = 0,01.',
        trapNote: 'Bẫy: Lấy Q nghịch đảo [Cu²⁺]/[Zn²⁺] hoặc quên chia 0,0592 cho n = 2.',
        completedEssayLine:
          'Với Q = 0,01, E_pin = 1,10 − (0,0592 / 2)·lg(0,01) = 1,10 + 0,0592 = 1,16 V.',
        interaction: {
          type: 'numeric-blanks',
          prompt: 'Tính E_pin khi [Zn²⁺] = 0,01 M và [Cu²⁺] = 1,00 M ở 25 °C:',
          formulaPrefix: 'E_pin =',
          fields: [
            {
              id: 'e-nernst',
              label: 'E_pin(Q)',
              unit: 'V',
              placeholder: '1,16',
              expected: 1.16,
              tolerance: 0.02,
              wrongHint: 'lg(0,01) = −2 ⇒ E_pin = 1,10 − (0,0592/2)×(−2) = 1,159 V ≈ 1,16 V.',
            },
          ],
        },
      },
    ],
  },
];
