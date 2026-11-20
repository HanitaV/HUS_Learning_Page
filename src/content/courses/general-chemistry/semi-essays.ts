import type { SemiEssayExercise } from '../../../domain/semi-essay';

export const gcSemiEssays: readonly SemiEssayExercise[] = [
  {
    id: 'gc-se-1-1',
    lessonId: 'gc-quantum-numbers',
    kind: 'semi-essay',
    title: 'Bài 1.1: Bộ số lượng tử và quy tắc Slater cho nguyên tử Nitơ',
    fadeLevel: 0,
    prompt:
      'Xét nguyên tử Nitơ ($\\mathrm{N}, Z = 7$) ở trạng thái cơ bản với cấu hình electron $1s^2\\,2s^2\\,2p^3$.\n\na) Xác định bộ bốn số lượng tử $(n, l, m_l, m_s)$ của electron $2p$ cuối cùng (theo quy tắc Hund, điền $m_l$ từ $-1$ đến $+1$ với $m_s = +\\tfrac{1}{2}$).\n\nb) Áp dụng quy tắc Slater, tính hằng số chắn $\\sigma$, điện tích hạt nhân hiệu dụng $Z^*$ và năng lượng một electron $2p$ ($E_{2p}$, đơn vị $\\text{eV}$).',
    given: [
      { symbolLatex: 'Z', value: '7', label: 'Số hiệu nguyên tử N' },
      { symbolLatex: 'n^*', value: '2', label: 'Số lượng tử chính hiệu dụng (n = 2)' },
      { symbolLatex: 'E_0', value: '-13,6', unit: 'eV', label: 'Hằng số năng lượng nguyên tử H' },
    ],
    theoryAnchors: [
      {
        id: 'gc-qn-rules',
        title: 'Bốn số lượng tử & Quy tắc Hund',
        formula: '0 \\le l \\le n - 1, \\qquad -l \\le m_l \\le +l, \\qquad m_s = \\pm\\tfrac{1}{2}',
        summary:
          'Mỗi electron trong nguyên tử được xác định bởi bộ bốn số lượng tử $(n, l, m_l, m_s)$. Trong các orbital cùng phân lớp, electron ưu tiên phân bố độc thân với spin song song trước khi ghép đôi.',
        conditions: [
          'Phân lớp $2p$ có $n = 2, l = 1$, gồm 3 orbital ứng với $m_l = -1, 0, +1$.',
          'Ba electron $2p$ của Nitơ chiếm đều 3 orbital với cùng $m_s = +\\tfrac{1}{2}$.',
        ],
      },
      {
        id: 'gc-slater-rules',
        title: 'Quy tắc Slater tính hằng số chắn và năng lượng AO',
        formula: 'Z^* = Z - \\sigma, \\qquad E_{nl} = -13{,}6\\left(\\dfrac{Z^*}{n^*}\\right)^2\\text{ (eV)}',
        summary:
          'Phân nhóm Slater cho Nitơ là $(1s^2)(2s^2\\,2p^3)$. Với electron đang xét thuộc nhóm $(2s, 2p)$, mỗi electron cùng nhóm chắn $0{,}35$ và mỗi electron lớp $n-1$ ($1s$) chắn $0{,}85$.',
        conditions: [
          'Không tính electron đang xét vào tổng số electron gây chắn.',
          'Với $n = 2$, số lượng tử chính hiệu dụng $n^* = 2$.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-1-1-qn',
        kind: 'choice-reasoning',
        title: 'Xác định bộ 4 số lượng tử của electron 2p cuối cùng',
        prompt:
          'Với cấu hình $1s^2\\,2s^2\\,2p^3$ (điền $m_l$ tăng dần từ $-1 \\to 0 \\to +1$ với spin $+\\tfrac{1}{2}$), bộ số lượng tử $(n, l, m_l, m_s)$ của electron $2p$ thứ ba là bộ nào?',
        theoryAnchorIds: ['gc-qn-rules'],
        choices: [
          {
            id: 'valid-hund',
            label: '$(2, 1, +1, +\\tfrac{1}{2})$',
            rationale:
              'Chính xác. Electron thuộc lớp $n=2$, phân lớp $p$ ($l=1$), chiếm orbital thứ ba $m_l=+1$ với spin song song $+\\tfrac{1}{2}$ theo quy tắc Hund.',
          },
          {
            id: 'violate-hund',
            label: '$(2, 1, -1, -\\tfrac{1}{2})$',
            rationale:
              'Chưa đúng. Ghép đôi ngay tại $m_l=-1$ khi hai orbital $m_l=0, +1$ còn trống là vi phạm quy tắc Hund.',
          },
          {
            id: 'invalid-l',
            label: '$(2, 2, +1, +\\tfrac{1}{2})$',
            rationale:
              'Không hợp lệ. Với $n=2$, giá trị $l$ tối đa là $n-1=1$, không tồn tại $l=2$.',
          },
        ],
        answers: ['valid-hund'],
        hint: 'Phân lớp $p$ ứng với $l = 1$; theo quy tắc Hund, 3 electron $2p$ phân bố vào 3 orbital $m_l = -1, 0, +1$ với cùng spin $+\\tfrac{1}{2}$.',
        summaryTemplate:
          'Electron $2p$ thứ ba của $\\mathrm{N}$ có bộ số lượng tử $(n, l, m_l, m_s) = (2, 1, +1, +\\tfrac{1}{2})$.',
      },
      {
        id: 'gc-se-1-1-slater',
        kind: 'equation-transform',
        title: 'Thiết lập biểu thức Slater cho hằng số chắn và năng lượng',
        prompt:
          'Chọn lần lượt các bước thiết lập đúng để tính hằng số chắn $\\sigma$ và năng lượng $E_{2p}$ của một electron $2p$ trong nguyên tử $\\mathrm{N}$.',
        theoryAnchorIds: ['gc-slater-rules'],
        initialEquations: [
          { label: 'Phân nhóm Slater', latex: '(1s^2)(2s^2\\,2p^3)' },
          { label: 'Năng lượng AO', latex: 'E_{2p} = -13{,}6\\left(\\dfrac{Z - \\sigma}{n^*}\\right)^2' },
        ],
        goalLatex: 'E_{2p} = -13{,}6\\left(\\dfrac{7 - (4\\times 0{,}35 + 2\\times 0{,}85)}{2}\\right)^2',
        stages: [
          {
            id: 'stage-sigma',
            prompt: 'Bước 1: Tính hằng số chắn $\\sigma$ tác dụng lên 1 electron trong nhóm $(2s, 2p)$',
            operations: [
              {
                id: 'wrong-5',
                label: 'Tính cả 5 electron lớp 2: $\\sigma = 5 \\times 0{,}35 + 2 \\times 0{,}85$',
                resultLatex: '\\sigma = 3{,}45',
                optimal: false,
                feedback: 'Electron đang xét không tự chắn chính nó; nhóm $(2s, 2p)$ chỉ còn $5 - 1 = 4$ electron gây chắn.',
              },
              {
                id: 'correct-4',
                label: 'Trừ electron đang xét: $\\sigma = 4 \\times 0{,}35 + 2 \\times 0{,}85$',
                resultLatex: '\\sigma = 1{,}40 + 1{,}70 = 3{,}10',
                optimal: true,
                feedback: 'Chính xác. Có 4 electron cùng nhóm $(2s, 2p)$ chắn $0{,}35$ và 2 electron $1s$ chắn $0{,}85$.',
              },
            ],
          },
          {
            id: 'stage-energy',
            prompt: 'Bước 2: Thế $Z^* = Z - \\sigma$ và $n^* = 2$ vào công thức $E_{2p}$',
            operations: [
              {
                id: 'correct-e',
                label: 'Thế $Z^* = 7 - 3{,}10 = 3{,}90$ và $n^* = 2$',
                resultLatex: 'E_{2p} = -13{,}6\\left(\\dfrac{3{,}90}{2}\\right)^2',
                optimal: true,
                feedback: 'Đúng. Có thể bấm máy trực tiếp từ biểu thức chuẩn này.',
              },
              {
                id: 'wrong-nstar',
                label: 'Dùng $n^* = 3$ cho phân lớp $2p$',
                resultLatex: 'E_{2p} = -13{,}6\\left(\\dfrac{3{,}90}{3}\\right)^2',
                optimal: false,
                feedback: 'Với lớp $n = 2$, quy tắc Slater quy định $n^* = 2$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Áp dụng quy tắc Slater: $\\sigma = 4\\times 0{,}35 + 2\\times 0{,}85 = 3{,}10$; $Z^* = 7 - 3{,}10 = 3{,}90$; $E_{2p} = -13{,}6(3{,}90/2)^2$.',
      },
      {
        id: 'gc-se-1-1-calc',
        kind: 'numeric-unit',
        title: 'Tính hằng số chắn, điện tích hiệu dụng và năng lượng 2p',
        prompt: 'Tính các giá trị $\\sigma$, $Z^*$ và $E_{2p}$ của nguyên tử Nitơ.',
        theoryAnchorIds: ['gc-slater-rules'],
        fields: [
          {
            id: 'sigma',
            label: 'Hằng số chắn',
            symbolLatex: '\\sigma',
            expected: 3.1,
            tolerance: 0.02,
            toleranceMode: 'absolute',
            unit: 'đvđt',
          },
          {
            id: 'zeff',
            label: 'Điện tích hạt nhân hiệu dụng',
            symbolLatex: 'Z^*',
            expected: 3.9,
            tolerance: 0.02,
            toleranceMode: 'absolute',
            unit: 'đvđt',
          },
          {
            id: 'e2p',
            label: 'Năng lượng electron 2p',
            symbolLatex: 'E_{2p}',
            expected: -51.71,
            tolerance: 0.1,
            toleranceMode: 'absolute',
            unit: 'eV',
          },
        ],
        explanation:
          '$\\sigma = 4\\times 0{,}35 + 2\\times 0{,}85 = 3{,}10$; $Z^* = 7 - 3{,}10 = 3{,}90$; $E_{2p} = -13{,}6\\times (1{,}95)^2 = -51{,}71\\text{ eV}$.',
        summaryTemplate:
          'Kết quả: $\\sigma = 3{,}10$, $Z^* = 3{,}90$ và $E_{2p} \\approx -51{,}71\\text{ eV}$.',
      },
    ],
    explanation:
      'Electron $2p$ cuối cùng có bộ số lượng tử $(2, 1, +1, +\\tfrac{1}{2})$. Theo Slater, $\\sigma = 3{,}10$, $Z^* = 3{,}90$, suy ra $E_{2p} = -51{,}71\\text{ eV}$.',
  },
  {
    id: 'gc-se-2-1',
    lessonId: 'gc-mo-theory',
    kind: 'semi-essay',
    title: 'Bài 2.1: Giản đồ MO, bậc liên kết và từ tính của ion O₂⁺',
    fadeLevel: 0,
    prompt:
      'Xét tiểu phân $\\mathrm{O_2^+}$ theo thuyết orbital phân tử (MO) chỉ xét các electron hóa trị (từ $2s, 2p$).\n\na) Xác định số electron hóa trị và loại thứ tự mức năng lượng MO phù hợp.\n\nb) Viết cấu hình MO hóa trị, tính bậc liên kết $N$ (BO) và kết luận từ tính của $\\mathrm{O_2^+}$.',
    given: [
      { symbolLatex: 'v_{\\mathrm{O}}', value: '6', label: 'Số electron hóa trị của mỗi nguyên tử O' },
      { symbolLatex: 'q', value: '+1', label: 'Điện tích của ion O₂⁺' },
    ],
    theoryAnchors: [
      {
        id: 'gc-mo-order',
        title: 'Đếm electron hóa trị & Thứ tự mức năng lượng MO',
        formula: 'n_e = v_A + v_B - q',
        summary:
          'Với $\\mathrm{O_2}$, $\\mathrm{F_2}$ và dãy ion tương ứng, dùng thứ tự Loại I: $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$.',
        conditions: [
          'Mỗi ký hiệu $\\pi$ gồm 2 orbital suy biến (cùng mức năng lượng).',
          'Điền electron từ thấp lên cao, tuân thủ nguyên lý Pauli và quy tắc Hund.',
        ],
      },
      {
        id: 'gc-mo-bo',
        title: 'Bậc liên kết & Từ tính',
        formula: 'N = \\dfrac{n_{\\text{lk}} - n_{\\text{plk}}}{2}',
        summary:
          '$n_{\\text{lk}}$ là tổng số electron trên các MO liên kết (không dấu *); $n_{\\text{plk}}$ là tổng số electron trên các MO phản liên kết (có dấu *). Còn electron độc thân $\\Rightarrow$ thuận từ.',
        conditions: [
          'Chỉ đếm trên các MO hóa trị đã điền; tổng $n_{\\text{lk}} + n_{\\text{plk}}$ phải bằng $n_e$.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-2-1-setup',
        kind: 'choice-reasoning',
        title: 'Xác định số electron hóa trị, loại giản đồ và từ tính',
        prompt:
          'Ion $\\mathrm{O_2^+}$ có bao nhiêu electron hóa trị, dùng giản đồ Loại mấy và có từ tính gì?',
        theoryAnchorIds: ['gc-mo-order', 'gc-mo-bo'],
        choices: [
          {
            id: 'o2plus-ok',
            label: '11 electron hóa trị, Loại I, thuận từ (còn 1 electron độc thân ở $\\pi^*_{2p}$)',
            rationale:
              'Chính xác. $n_e = 6 + 6 - 1 = 11$; thuộc dãy $\\mathrm{O_2}$ nên dùng Loại I; mức $\\pi^*_{2p}$ chỉ có 1 electron nên thuận từ.',
          },
          {
            id: 'o2plus-type2',
            label: '11 electron hóa trị, Loại II, nghịch từ',
            rationale:
              'Chưa đúng. Thứ tự Loại II chỉ dùng từ $\\mathrm{Li_2}$ đến $\\mathrm{N_2}$ và dãy ion tương ứng; ngoài ra 11 electron là số lẻ nên chắc chắn còn electron độc thân (thuận từ).',
          },
          {
            id: 'o2plus-13',
            label: '13 electron hóa trị, Loại I, thuận từ',
            rationale:
              'Nhầm dấu điện tích. Ion dương $\\mathrm{O_2^+}$ mất 1 electron nên $n_e = 6 + 6 - 1 = 11$ (13 là của $\\mathrm{O_2^-}$).',
          },
        ],
        answers: ['o2plus-ok'],
        hint: 'Dùng $n_e = v_A + v_B - q$ với $q = +1$ và kiểm tra dãy áp dụng Loại I trong bài MO.',
        summaryTemplate:
          'Ion $\\mathrm{O_2^+}$ có $11$ electron hóa trị, áp dụng giản đồ Loại I và có tính thuận từ do còn $1$ electron độc thân ở $\\pi^*_{2p}$.',
      },
      {
        id: 'gc-se-2-1-config',
        kind: 'equation-transform',
        title: 'Điền cấu hình MO và rút công thức bậc liên kết',
        prompt:
          'Chọn bước điền cấu hình MO và đếm $n_{\\text{lk}}, n_{\\text{plk}}$ đúng cho 11 electron hóa trị của $\\mathrm{O_2^+}$.',
        theoryAnchorIds: ['gc-mo-order', 'gc-mo-bo'],
        initialEquations: [
          { label: 'Thứ tự Loại I', latex: '\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}' },
          { label: 'Công thức BO', latex: 'N = \\dfrac{n_{\\text{lk}} - n_{\\text{plk}}}{2}' },
        ],
        goalLatex: 'N = \\dfrac{8 - 3}{2} = 2{,}5',
        stages: [
          {
            id: 'stage-mo-fill',
            prompt: 'Bước 1: Điền đủ 11 electron vào các MO theo thứ tự Loại I',
            operations: [
              {
                id: 'fill-ok',
                label: 'Điền 10 e vào $\\sigma_{2s}^2 \\sigma_{2s}^{*2} \\sigma_{2p}^2 \\pi_{2p}^4$, electron thứ 11 vào $\\pi^*_{2p}$',
                resultLatex: '(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^1',
                optimal: true,
                feedback: 'Chính xác. Tổng số electron là $2+2+2+4+1 = 11$.',
              },
              {
                id: 'fill-wrong',
                label: 'Điền $\\sigma_{2s}^2 \\sigma_{2s}^{*2} \\pi_{2p}^4 \\sigma_{2p}^2 \\pi_{2p}^{*1}$',
                resultLatex: '(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\pi_{2p})^4(\\sigma_{2p})^2(\\pi^*_{2p})^1',
                optimal: false,
                feedback: 'Với Loại I ($\\mathrm{O_2}$), mức $\\sigma_{2p}$ nằm thấp hơn $\\pi_{2p}$.',
              },
            ],
          },
          {
            id: 'stage-mo-count',
            prompt: 'Bước 2: Tách $n_{\\text{lk}}$ và $n_{\\text{plk}}$ để tính bậc liên kết',
            operations: [
              {
                id: 'count-ok',
                label: 'Đếm $n_{\\text{lk}} = 2 + 2 + 4 = 8$ và $n_{\\text{plk}} = 2 + 1 = 3$',
                resultLatex: 'N = \\dfrac{8 - 3}{2}',
                optimal: true,
                feedback: 'Chính xác. $8 + 3 = 11$ khớp tổng electron hóa trị.',
              },
              {
                id: 'count-core',
                label: 'Cộng thêm 2 electron lõi $1s$ vào $n_{\\text{lk}}$ và $n_{\\text{plk}}$',
                resultLatex: 'N = \\dfrac{10 - 5}{2}',
                optimal: false,
                feedback: 'Không trộn electron lõi vào giản đồ MO hóa trị.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Cấu hình MO hóa trị: $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^1$ với $n_{\\text{lk}} = 8$, $n_{\\text{plk}} = 3$.',
      },
      {
        id: 'gc-se-2-1-calc',
        kind: 'numeric-unit',
        title: 'Kiểm tra số electron và bậc liên kết',
        prompt: 'Nhập $n_{\\text{lk}}$, $n_{\\text{plk}}$ và bậc liên kết $N$ của $\\mathrm{O_2^+}$.',
        theoryAnchorIds: ['gc-mo-bo'],
        fields: [
          {
            id: 'nlk',
            label: 'Số e liên kết',
            symbolLatex: 'n_{\\text{lk}}',
            expected: 8,
            tolerance: 0.01,
            toleranceMode: 'absolute',
            unit: 'e',
          },
          {
            id: 'nplk',
            label: 'Số e phản liên kết',
            symbolLatex: 'n_{\\text{plk}}',
            expected: 3,
            tolerance: 0.01,
            toleranceMode: 'absolute',
            unit: 'e',
          },
          {
            id: 'bo',
            label: 'Bậc liên kết',
            symbolLatex: 'N',
            expected: 2.5,
            tolerance: 0.01,
            toleranceMode: 'absolute',
            unit: 'liên kết',
          },
        ],
        explanation:
          '$n_{\\text{lk}} = 8$, $n_{\\text{plk}} = 3$, suy ra $N = (8 - 3)/2 = 2{,}5 > N(\\mathrm{O_2}) = 2$ nên $\\mathrm{O_2^+}$ bền hơn $\\mathrm{O_2}$.',
        summaryTemplate:
          'Kết quả: $n_{\\text{lk}} = 8$, $n_{\\text{plk}} = 3$, bậc liên kết $N = 2{,}5$.',
      },
    ],
    explanation:
      'Ion $\\mathrm{O_2^+}$ có 11 electron hóa trị, cấu hình $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^1$, bậc liên kết $N = 2{,}5$ và thuận từ.',
  },
  {
    id: 'gc-se-3-1',
    lessonId: 'gc-gibbs',
    kind: 'semi-essay',
    title: 'Bài 3.1: Định luật Hess và tiêu chuẩn tự diễn biến ΔG°(T)',
    fadeLevel: 0,
    prompt:
      'Xét phản ứng oxi hóa khí $\\mathrm{SO_2}$ ở $298\\text{ K}$:\n$$\\mathrm{2SO_2(g) + O_2(g) \\rightarrow 2SO_3(g)}$$\nBiết sinh nhiệt chuẩn $\\Delta H^\\circ_f(\\mathrm{SO_2(g)}) = -296{,}8\\text{ kJ/mol}$, $\\Delta H^\\circ_f(\\mathrm{SO_3(g)}) = -395{,}7\\text{ kJ/mol}$ và biến thiên entropy chuẩn của phản ứng $\\Delta S^\\circ_{\\text{pư}} = -188{,}0\\text{ J/K}$.\n\na) Biểu diễn định tính sơ đồ biến thiên enthalpy của hệ phản ứng.\n\nb) Tính $\\Delta H^\\circ_{\\text{pư}}$, $\\Delta G^\\circ_{298}$ (theo $\\text{kJ}$) và nhiệt độ đổi chiều $T_{\\text{đổi chiều}}$ (giả sử $\\Delta H^\\circ, \\Delta S^\\circ$ không đổi theo $T$).',
    given: [
      { symbolLatex: '\\Delta H^\\circ_f(\\mathrm{SO_2})', value: '-296,8', unit: 'kJ/mol', label: 'Sinh nhiệt chuẩn SO₂(g)' },
      { symbolLatex: '\\Delta H^\\circ_f(\\mathrm{SO_3})', value: '-395,7', unit: 'kJ/mol', label: 'Sinh nhiệt chuẩn SO₃(g)' },
      { symbolLatex: '\\Delta S^\\circ_{\\text{pư}}', value: '-188,0', unit: 'J/K', label: 'Biến thiên entropy chuẩn' },
      { symbolLatex: 'T', value: '298', unit: 'K', label: 'Nhiệt độ khảo sát' },
    ],
    theoryAnchors: [
      {
        id: 'gc-hess-enthalpy',
        title: 'Hệ quả định luật Hess theo sinh nhiệt chuẩn',
        formula: '\\Delta H^\\circ_{\\text{pư}} = \\sum \\nu\\,\\Delta H^\\circ_f(\\text{sp}) - \\sum \\nu\\,\\Delta H^\\circ_f(\\text{cđ})',
        summary:
          'Đơn chất bền ở điều kiện chuẩn như $\\mathrm{O_2(g)}$ có $\\Delta H^\\circ_f = 0$. Phản ứng có $\\Delta H^\\circ < 0$ là tỏa nhiệt.',
        conditions: [
          'Phải nhân $\\Delta H^\\circ_f$ với đúng hệ số tỉ lượng $\\nu$ trong phương trình phản ứng.',
        ],
      },
      {
        id: 'gc-gibbs-criterion',
        title: 'Năng lượng tự do Gibbs & Nhiệt độ đổi chiều',
        formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ, \\qquad T_{\\text{đổi chiều}} = \\dfrac{\\Delta H^\\circ}{\\Delta S^\\circ}',
        summary:
          'Đổi $\\Delta S^\\circ$ từ $\\text{J/K}$ sang $\\text{kJ/K}$ trước khi nhân với $T$. Khi $\\Delta H^\\circ < 0$ và $\\Delta S^\\circ < 0$, phản ứng tự diễn biến ở nhiệt độ thấp ($T < T_{\\text{đổi chiều}}$).',
        conditions: [
          'Nhiệt độ và áp suất không đổi.',
          '$\\Delta G^\\circ < 0$: tự diễn biến theo chiều thuận.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-3-1-flow',
        kind: 'diagram',
        title: 'Biểu diễn sơ đồ mức enthalpy của phản ứng tỏa nhiệt',
        prompt:
          'Xác định mức enthalpy tương đối của chất đầu ($H_{\\text{đầu}}$), sản phẩm ($H_{\\text{sp}}$) và dấu của $\\Delta H^\\circ$ cho phản ứng tỏa nhiệt $\\mathrm{2SO_2(g) + O_2(g) \\rightarrow 2SO_3(g)}$.',
        theoryAnchorIds: ['gc-hess-enthalpy'],
        diagramKind: 'balance-flow',
        spec: {
          kind: 'balance-flow',
          systemLabel: 'Hệ phản ứng 2SO₂(g) + O₂(g) → 2SO₃(g)',
          initialLabel: 'Chất đầu (2SO₂ + O₂)',
          finalLabel: 'Sản phẩm (2SO₃)',
          maxLevel: 4,
          initialBars: [
            {
              id: 'H_init',
              label: 'Enthalpy chất đầu',
              symbolLatex: 'H_{\\text{đầu}}',
              expectedState: 'positive',
              hint: 'Chất đầu ở mức enthalpy cao hơn sản phẩm (chọn > 0 vạch).',
            },
          ],
          finalBars: [
            {
              id: 'H_final',
              label: 'Enthalpy sản phẩm',
              symbolLatex: 'H_{\\text{sp}}',
              expectedState: 'positive',
              hint: 'Sản phẩm vẫn giữ mức dương trên thang minh họa (> 0 vạch) nhưng thấp hơn chất đầu.',
            },
          ],
          transferLabel: 'Biến thiên enthalpy ΔH°',
          transferSymbolLatex: '\\Delta H^\\circ',
          expectedTransferSign: '-',
          transferHint: 'Phản ứng tỏa nhiệt ra môi trường nên ΔH° < 0 (chọn dấu −) và H_sp < H_đầu.',
          requireConservation: true,
          note: 'Đặt số vạch H_đầu > H_sp > 0 và chọn dấu ΔH° là − để thể hiện phản ứng tỏa nhiệt.',
        },
        summaryTemplate:
          'Sơ đồ năng lượng: $H_{\\text{sp}} < H_{\\text{đầu}}$ và $\\Delta H^\\circ < 0$ (phản ứng tỏa nhiệt).',
      },
      {
        id: 'gc-se-3-1-transform',
        kind: 'equation-transform',
        title: 'Áp dụng định luật Hess và đồng nhất đơn vị trong phương trình Gibbs',
        prompt:
          'Chọn các bước biến đổi đúng để tính $\\Delta H^\\circ_{\\text{pư}}$ và $\\Delta G^\\circ_{298}$.',
        theoryAnchorIds: ['gc-hess-enthalpy', 'gc-gibbs-criterion'],
        initialEquations: [
          { label: 'Hess', latex: '\\Delta H^\\circ_{\\text{pư}} = 2\\Delta H^\\circ_f(\\mathrm{SO_3}) - 2\\Delta H^\\circ_f(\\mathrm{SO_2})' },
          { label: 'Gibbs', latex: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ' },
        ],
        goalLatex: '\\Delta G^\\circ_{298} = -197{,}8 - 298\\times(-0{,}1880)',
        stages: [
          {
            id: 'stage-hess',
            prompt: 'Bước 1: Tính $\\Delta H^\\circ_{\\text{pư}}$ theo hệ số phương trình',
            operations: [
              {
                id: 'hess-ok',
                label: 'Nhân hệ số 2: $\\Delta H^\\circ_{\\text{pư}} = 2(-395{,}7) - 2(-296{,}8)$',
                resultLatex: '\\Delta H^\\circ_{\\text{pư}} = -197{,}8\\text{ kJ}',
                optimal: true,
                feedback: 'Chính xác. $\\Delta H^\\circ_f(\\mathrm{O_2}) = 0$.',
              },
              {
                id: 'hess-no-coeff',
                label: 'Lấy hiệu trực tiếp $-395{,}7 - (-296{,}8)$ không nhân 2',
                resultLatex: '\\Delta H^\\circ_{\\text{pư}} = -98{,}9\\text{ kJ}',
                optimal: false,
                feedback: 'Phương trình phản ứng có hệ số 2 trước $\\mathrm{SO_2}$ và $\\mathrm{SO_3}$, phải nhân 2 để khớp với $\\Delta S^\\circ$ của cả phản ứng.',
              },
            ],
          },
          {
            id: 'stage-gibbs-unit',
            prompt: 'Bước 2: Đổi đơn vị $\\Delta S^\\circ$ sang $\\text{kJ/K}$ trước khi thế vào $\\Delta G^\\circ$',
            operations: [
              {
                id: 'unit-ok',
                label: 'Chia 1000: $\\Delta S^\\circ = -0{,}1880\\text{ kJ/K}$',
                resultLatex: '\\Delta G^\\circ_{298} = -197{,}8 - 298\\times(-0{,}1880)',
                optimal: true,
                feedback: 'Chính xác. Hai số hạng cùng đơn vị $\\text{kJ}$.',
              },
              {
                id: 'unit-raw',
                label: 'Giữ nguyên $\\Delta S^\\circ = -188{,}0\\text{ J/K}$',
                resultLatex: '\\Delta G^\\circ_{298} = -197{,}8 - 298\\times(-188{,}0)',
                optimal: false,
                feedback: 'Lệch đơn vị kJ và J sẽ làm kết quả sai lệch gấp 1000 lần.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Từ định luật Hess có $\\Delta H^\\circ_{\\text{pư}} = -197{,}8\\text{ kJ}$; đổi $\\Delta S^\\circ = -0{,}1880\\text{ kJ/K}$ để tính $\\Delta G^\\circ_{298}$.',
      },
      {
        id: 'gc-se-3-1-calc',
        kind: 'numeric-unit',
        title: 'Tính ΔH°, ΔG°₂₉₈ và nhiệt độ đổi chiều',
        prompt: 'Tính $\\Delta H^\\circ_{\\text{pư}}$, $\\Delta G^\\circ_{298}$ và nhiệt độ đổi chiều $T_{\\text{đổi chiều}}$.',
        theoryAnchorIds: ['gc-gibbs-criterion'],
        fields: [
          {
            id: 'dH',
            label: 'Biến thiên enthalpy chuẩn',
            symbolLatex: '\\Delta H^\\circ_{\\text{pư}}',
            expected: -197.8,
            tolerance: 0.2,
            toleranceMode: 'absolute',
            unit: 'kJ',
          },
          {
            id: 'dG',
            label: 'Biến thiên Gibbs ở 298 K',
            symbolLatex: '\\Delta G^\\circ_{298}',
            expected: -141.8,
            tolerance: 0.2,
            toleranceMode: 'absolute',
            unit: 'kJ',
          },
          {
            id: 'Trev',
            label: 'Nhiệt độ đổi chiều',
            symbolLatex: 'T_{\\text{đổi chiều}}',
            expected: 1052.1,
            tolerance: 1.5,
            toleranceMode: 'absolute',
            unit: 'K',
          },
        ],
        explanation:
          '$\\Delta G^\\circ_{298} = -197{,}8 - 298(-0{,}1880) = -141{,}78\\text{ kJ} < 0$ (tự diễn biến). $T_{\\text{đổi chiều}} = (-197{,}8)/(-0{,}1880) \\approx 1052{,}1\\text{ K}$.',
        summaryTemplate:
          'Kết quả: $\\Delta H^\\circ = -197{,}8\\text{ kJ}$, $\\Delta G^\\circ_{298} \\approx -141{,}8\\text{ kJ} < 0$ (tự diễn biến ở 298 K), $T_{\\text{đổi chiều}} \\approx 1052{,}1\\text{ K}$.',
      },
    ],
    explanation:
      'Phản ứng tỏa nhiệt ($\\Delta H^\\circ = -197{,}8\\text{ kJ}$) và giảm entropy ($\\Delta S^\\circ = -0{,}1880\\text{ kJ/K}$), tự diễn biến ở 298 K với $\\Delta G^\\circ_{298} = -141{,}8\\text{ kJ}$ và đổi chiều tại $1052{,}1\\text{ K}$.',
  },
  {
    id: 'gc-se-4-1',
    lessonId: 'gc-eq-ice-table',
    kind: 'semi-essay',
    title: 'Bài 4.1: Bảng ICE, hằng số cân bằng Kc/Kp và nguyên lý Le Chatelier',
    fadeLevel: 0,
    prompt:
      'Cho cân bằng pha khí trong bình kín dung tích $V = 2{,}0\\text{ L}$ ở $T = 500\\text{ K}$:\n$$\\mathrm{PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)}$$\nBan đầu nạp $0{,}80\\text{ mol PCl_5}$ vào bình trống. Khi đạt cân bằng, thu được $0{,}20\\text{ mol Cl_2}$.\n\na) Theo nguyên lý Le Chatelier, nếu nén bình làm tăng áp suất ở nhiệt độ không đổi thì cân bằng chuyển dịch theo chiều nào?\n\nb) Lập bảng 3 dòng (ICE), tính nồng độ cân bằng $[\\mathrm{PCl_5}]$, hằng số $K_c$ và $K_p$ (lấy $R = 0{,}082\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).',
    given: [
      { symbolLatex: 'V', value: '2,0', unit: 'L', label: 'Thể tích bình kín' },
      { symbolLatex: 'T', value: '500', unit: 'K', label: 'Nhiệt độ cân bằng' },
      { symbolLatex: 'n_0(\\mathrm{PCl_5})', value: '0,80', unit: 'mol', label: 'Số mol ban đầu PCl₅' },
      { symbolLatex: 'n_{cb}(\\mathrm{Cl_2})', value: '0,20', unit: 'mol', label: 'Số mol cân bằng Cl₂' },
      { symbolLatex: 'R', value: '0,082', unit: 'L·atm/(mol·K)', label: 'Hằng số khí' },
    ],
    theoryAnchors: [
      {
        id: 'gc-ice-method',
        title: 'Phương pháp bảng 3 dòng (ICE)',
        formula: 'K_c = \\dfrac{[\\mathrm{PCl_3}][\\mathrm{Cl_2}]}{[\\mathrm{PCl_5}]}',
        summary:
          'Lập bảng theo mol (Ban đầu – Phản ứng – Cân bằng) với một ẩn $x$, sau đó chia cho thể tích $V$ để lấy nồng độ mol/L trước khi thế vào $K_c$.',
        conditions: [
          'Không thế trực tiếp số mol vào $K_c$ khi $V \\ne 1\\text{ L}$ và $\\Delta n \\ne 0$.',
        ],
      },
      {
        id: 'gc-kp-kc-lechatelier',
        title: 'Liên hệ Kp – Kc & Nguyên lý Le Chatelier',
        formula: 'K_p = K_c(RT)^{\\Delta n}, \\qquad \\Delta n = \\sum \\nu_{\\text{khí, sp}} - \\sum \\nu_{\\text{khí, cđ}}',
        summary:
          'Khi tăng áp suất (nén bình), cân bằng chuyển dịch theo chiều làm giảm số mol khí. Với $\\mathrm{PCl_5 \\rightleftharpoons PCl_3 + Cl_2}$, $\\Delta n = 2 - 1 = +1$.',
        conditions: [
          'Dùng $R = 0{,}082\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ khi tính $K_p$ theo atm.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-4-1-lechatelier',
        kind: 'choice-reasoning',
        title: 'Dự đoán chuyển dịch cân bằng theo Le Chatelier',
        prompt:
          'Nếu nén bình (tăng áp suất chung ở $T$ không đổi), cân bằng $\\mathrm{PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)}$ chuyển dịch theo chiều nào?',
        theoryAnchorIds: ['gc-kp-kc-lechatelier'],
        choices: [
          {
            id: 'reverse',
            label: 'Chuyển dịch theo chiều nghịch (tạo thêm PCl₅)',
            rationale:
              'Chính xác. Chiều nghịch biến 2 mol khí ($\\mathrm{PCl_3 + Cl_2}$) thành 1 mol khí ($\\mathrm{PCl_5}$), giúp làm giảm áp suất chống lại tác động nén.',
          },
          {
            id: 'forward',
            label: 'Chuyển dịch theo chiều thuận (phân hủy thêm PCl₅)',
            rationale:
              'Chưa đúng. Chiều thuận làm tăng số mol khí (từ 1 mol lên 2 mol), càng làm áp suất tăng thêm.',
          },
          {
            id: 'unchanged',
            label: 'Không chuyển dịch vì K_p không đổi',
            rationale:
              '$K_p$ không đổi ở $T$ cố định, nhưng thương số phản ứng $Q_p$ thay đổi khi nén bình nên cân bằng vẫn phải chuyển dịch.',
          },
        ],
        answers: ['reverse'],
        hint: 'So sánh tổng hệ số khí vế trái (1 mol) và vế phải (2 mol).',
        summaryTemplate:
          'Theo nguyên lý Le Chatelier, tăng áp suất làm cân bằng chuyển dịch theo chiều nghịch (giảm từ 2 mol khí xuống 1 mol khí).',
      },
      {
        id: 'gc-se-4-1-ice',
        kind: 'equation-transform',
        title: 'Biến đổi bảng ICE sang nồng độ và liên hệ Kp – Kc',
        prompt:
          'Chọn lần lượt các thao tác đúng để chuyển từ bảng mol sang $K_c$ và $K_p$.',
        theoryAnchorIds: ['gc-ice-method', 'gc-kp-kc-lechatelier'],
        initialEquations: [
          { label: 'Dòng cân bằng (mol)', latex: 'n(\\mathrm{PCl_5}) = 0{,}80 - x,\\quad n(\\mathrm{PCl_3}) = n(\\mathrm{Cl_2}) = x' },
          { label: 'Ẩn x', latex: 'x = 0{,}20\\text{ mol}' },
        ],
        goalLatex: 'K_p = K_c(RT)^1',
        stages: [
          {
            id: 'stage-ice-conc',
            prompt: 'Bước 1: Chuyển số mol cân bằng sang nồng độ mol/L trong bình $V = 2{,}0\\text{ L}$',
            operations: [
              {
                id: 'div-v',
                label: 'Chia tất cả cho $V = 2{,}0\\text{ L}$: $[\\mathrm{PCl_5}] = 0{,}30\\text{ M}, [\\mathrm{PCl_3}] = [\\mathrm{Cl_2}] = 0{,}10\\text{ M}$',
                resultLatex: 'K_c = \\dfrac{0{,}10\\times 0{,}10}{0{,}30}',
                optimal: true,
                feedback: 'Chính xác. Luôn chia thể tích $V$ trước khi thế vào $K_c$.',
              },
              {
                id: 'no-div-v',
                label: 'Thế thẳng số mol $0{,}60; 0{,}20; 0{,}20$ vào biểu thức $K_c$',
                resultLatex: 'K_c = \\dfrac{0{,}20\\times 0{,}20}{0{,}60}',
                optimal: false,
                feedback: 'Vì $\\Delta n = 1 \\ne 0$ và $V = 2{,}0\\text{ L} \\ne 1\\text{ L}$, thế số mol sẽ cho kết quả sai gấp đôi.',
              },
            ],
          },
          {
            id: 'stage-kp',
            prompt: 'Bước 2: Xác định số mũ $\\Delta n$ trong công thức $K_p = K_c(RT)^{\\Delta n}$',
            operations: [
              {
                id: 'dn-1',
                label: 'Tính $\\Delta n = (1 + 1) - 1 = +1$',
                resultLatex: 'K_p = K_c(0{,}082\\times 500)^1',
                optimal: true,
                feedback: 'Chính xác. Hệ số sản phẩm khí là $1+1=2$, chất đầu khí là $1$.',
              },
              {
                id: 'dn-minus1',
                label: 'Dùng $\\Delta n = -1$',
                resultLatex: 'K_p = K_c(0{,}082\\times 500)^{-1}',
                optimal: false,
                feedback: '$\\Delta n = n_{\\text{sp}} - n_{\\text{cđ}} = 2 - 1 = +1$, không phải $-1$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Chia $V = 2{,}0\\text{ L}$ thu được $[\\mathrm{PCl_5}]=0{,}30\\text{ M}$, $[\\mathrm{PCl_3}]=[\\mathrm{Cl_2}]=0{,}10\\text{ M}$; suy ra $K_c = 1/30$ và $K_p = K_c(RT)^1$.',
      },
      {
        id: 'gc-se-4-1-calc',
        kind: 'numeric-unit',
        title: 'Tính nồng độ cân bằng và hằng số Kc, Kp',
        prompt: 'Nhập các giá trị $[\\mathrm{PCl_5}]_{cb}$, $K_c$ và $K_p$ ở $500\\text{ K}$.',
        theoryAnchorIds: ['gc-ice-method', 'gc-kp-kc-lechatelier'],
        fields: [
          {
            id: 'pcl5',
            label: 'Nồng độ cân bằng PCl₅',
            symbolLatex: '[\\mathrm{PCl_5}]_{cb}',
            expected: 0.3,
            tolerance: 0.01,
            toleranceMode: 'absolute',
            unit: 'M',
          },
          {
            id: 'kc',
            label: 'Hằng số cân bằng Kc',
            symbolLatex: 'K_c',
            expected: 0.0333,
            tolerance: 0.002,
            toleranceMode: 'absolute',
            unit: 'M',
          },
          {
            id: 'kp',
            label: 'Hằng số cân bằng Kp',
            symbolLatex: 'K_p',
            expected: 1.367,
            tolerance: 0.02,
            toleranceMode: 'absolute',
            unit: 'atm',
          },
        ],
        explanation:
          '$K_c = (0{,}10)^2 / 0{,}30 = 0{,}0333\\text{ M}$; $K_p = 0{,}03333\\times (0{,}082\\times 500) = 1{,}367\\text{ atm}$.',
        summaryTemplate:
          'Kết quả: $[\\mathrm{PCl_5}]_{cb} = 0{,}30\\text{ M}$, $K_c \\approx 0{,}0333\\text{ M}$ và $K_p \\approx 1{,}367\\text{ atm}$.',
      },
    ],
    explanation:
      'Tăng áp suất làm cân bằng dịch sang trái. Từ bảng ICE chia $V = 2{,}0\\text{ L}$, ta có $[\\mathrm{PCl_5}]_{cb} = 0{,}30\\text{ M}$, $K_c \\approx 0{,}0333\\text{ M}$ và $K_p \\approx 1{,}367\\text{ atm}$.',
  },
  {
    id: 'gc-se-5-1',
    lessonId: 'gc-kin-first-order',
    kind: 'semi-essay',
    title: 'Bài 5.1: Động học phản ứng bậc nhất, chu kỳ bán hủy và đồ thị C(t)',
    fadeLevel: 0,
    prompt:
      'Một phản ứng phân hủy bậc nhất $\\mathrm{A \\rightarrow \\text{sản phẩm}}$ ở nhiệt độ không đổi có nồng độ ban đầu $C_0 = 0{,}80\\text{ M}$ và chu kỳ bán hủy $t_{1/2} = 20\\text{ phút}$.\n\na) Trên đồ thị $C(t)$, chọn các khoảng chu kỳ bán hủy ứng với quá trình $75\\%$ lượng chất A ban đầu đã phản ứng (còn lại $0{,}20\\text{ M}$).\n\nb) Tính hằng số tốc độ $k$ ($\\text{phút}^{-1}$), thời gian $t_{75\\%}$ để $75\\%$ A phản ứng và nồng độ còn lại $C_{50}$ tại $t = 50\\text{ phút}$.',
    given: [
      { symbolLatex: 'C_0', value: '0,80', unit: 'M', label: 'Nồng độ ban đầu' },
      { symbolLatex: 't_{1/2}', value: '20', unit: 'phút', label: 'Chu kỳ bán hủy' },
      { symbolLatex: 't', value: '50', unit: 'phút', label: 'Thời điểm cần tính nồng độ' },
    ],
    theoryAnchors: [
      {
        id: 'gc-kin-law',
        title: 'Định luật tích phân bậc 1 & Chu kỳ bán hủy',
        formula: '\\ln\\dfrac{C_0}{C_t} = kt, \\qquad C_t = C_0 e^{-kt}, \\qquad t_{1/2} = \\dfrac{\\ln 2}{k}',
        summary:
          'Với phản ứng bậc nhất ở nhiệt độ không đổi, $t_{1/2}$ không phụ thuộc nồng độ đầu. Sau mỗi chu kỳ bán hủy, nồng độ chất đầu giảm đi một nửa.',
        conditions: [
          'Đơn vị của $k$ và $t$ phải đồng nhất (ở đây dùng phút và $\\text{phút}^{-1}$).',
          'Trong công thức $\\ln(C_0/C_t)$, $C_t$ là nồng độ **còn lại**, không phải lượng đã phản ứng.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-5-1-curve',
        kind: 'diagram',
        title: 'Đọc chu kỳ bán hủy trên đồ thị nồng độ C(t)',
        prompt:
          'Trên đồ thị $C(t)$ theo từng mốc $20\\text{ phút}$, chọn các đoạn tương ứng với quá trình chất A giảm từ $0{,}80\\text{ M}$ xuống còn $0{,}20\\text{ M}$ (tức $75\\%$ đã phản ứng).',
        theoryAnchorIds: ['gc-kin-law'],
        diagramKind: 'curve-2d',
        spec: {
          kind: 'curve-2d',
          mode: 'select-regions',
          xLabel: 't',
          yLabel: 'C',
          xUnit: 'phút',
          yUnit: 'M',
          xMax: 65,
          yMax: 0.9,
          points: [
            { x: 0, y: 0.8, label: '0,80 M' },
            { x: 20, y: 0.4, label: '0,40 M' },
            { x: 40, y: 0.2, label: '0,20 M' },
            { x: 60, y: 0.1, label: '0,10 M' },
          ],
          segments: [
            { id: 's1', label: '0–20 phút (t₁/₂ thứ 1: 0,80 → 0,40 M)', fromIndex: 0, toIndex: 1 },
            { id: 's2', label: '20–40 phút (t₁/₂ thứ 2: 0,40 → 0,20 M)', fromIndex: 1, toIndex: 2 },
            { id: 's3', label: '40–60 phút (t₁/₂ thứ 3: 0,20 → 0,10 M)', fromIndex: 2, toIndex: 3 },
          ],
          expectedSegmentIds: ['s1', 's2'],
          regionRationale:
            'Sau 1 chu kỳ bán hủy còn $50\\%$ ($0{,}40\\text{ M}$), sau 2 chu kỳ bán hủy còn $25\\%$ ($0{,}20\\text{ M}$, tức đã phản ứng $75\\%$).',
          note: 'Nhấp chọn hai đoạn đầu tiên trên đường cong C(t) từ 0,80 M về 0,20 M.',
        },
        summaryTemplate:
          'Từ đồ thị $C(t)$: sau 2 chu kỳ bán hủy ($0\\to 40\\text{ phút}$), nồng độ giảm $0{,}80 \\to 0{,}40 \\to 0{,}20\\text{ M}$ ($25\\%$ còn lại).',
      },
      {
        id: 'gc-se-5-1-transform',
        kind: 'equation-transform',
        title: 'Biến đổi công thức tính k và nồng độ còn lại C₅₀',
        prompt:
          'Chọn lần lượt các bước biến đổi đúng từ định luật tích phân bậc nhất.',
        theoryAnchorIds: ['gc-kin-law'],
        initialEquations: [
          { label: 'Định luật bậc 1', latex: '\\ln\\dfrac{C_0}{C_t} = kt' },
          { label: 'Chu kỳ bán hủy', latex: 't_{1/2} = \\dfrac{\\ln 2}{k}' },
        ],
        goalLatex: 'C_{50} = 0{,}80\\,e^{-k\\cdot 50}',
        stages: [
          {
            id: 'stage-kin-k',
            prompt: 'Bước 1: Rút hằng số tốc độ $k$ từ $t_{1/2} = 20\\text{ phút}$',
            operations: [
              {
                id: 'k-ok',
                label: 'Đảo vế: $k = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{\\ln 2}{20}$',
                resultLatex: 'k \\approx 0{,}03466\\text{ phút}^{-1}',
                optimal: true,
                feedback: 'Chính xác. Giữ đủ chữ số thập phân ở bước trung gian.',
              },
              {
                id: 'k-inv',
                label: 'Tính $k = \\dfrac{t_{1/2}}{\\ln 2}$',
                resultLatex: 'k \\approx 28{,}85',
                optimal: false,
                feedback: 'Sai thứ tự chia: $k = \\ln 2 / t_{1/2}$, đơn vị phải là $\\text{phút}^{-1}$.',
              },
            ],
          },
          {
            id: 'stage-kin-c50',
            prompt: 'Bước 2: Viết biểu thức nồng độ còn lại tại $t = 50\\text{ phút}$',
            operations: [
              {
                id: 'c50-ok',
                label: 'Dùng dạng hàm mũ: $C_{50} = C_0 e^{-kt}$',
                resultLatex: 'C_{50} = 0{,}80\\,e^{-0{,}03466\\times 50}',
                optimal: true,
                feedback: 'Chính xác. Tương đương $0{,}80\\times (1/2)^{50/20}$.',
              },
              {
                id: 'c50-linear',
                label: 'Lấy tuyến tính $C_{50} = C_0 - kt$',
                resultLatex: 'C_{50} = 0{,}80 - 0{,}03466\\times 50',
                optimal: false,
                feedback: 'Phản ứng bậc nhất suy giảm theo hàm mũ $e^{-kt}$, không giảm tuyến tính (công thức $C_0 - kt$ là của bậc 0).',
              },
            ],
          },
        ],
        summaryTemplate:
          'Rút $k = \\ln 2 / 20 \\approx 0{,}03466\\text{ phút}^{-1}$ và tính $C_{50} = 0{,}80\\,e^{-k\\cdot 50}$.',
      },
      {
        id: 'gc-se-5-1-calc',
        kind: 'numeric-unit',
        title: 'Tính hằng số tốc độ k, thời gian t₇₅% và nồng độ C₅₀',
        prompt: 'Nhập các giá trị $k$, $t_{75\\%}$ và $C_{50}$.',
        theoryAnchorIds: ['gc-kin-law'],
        fields: [
          {
            id: 'k',
            label: 'Hằng số tốc độ',
            symbolLatex: 'k',
            expected: 0.0347,
            tolerance: 0.001,
            toleranceMode: 'absolute',
            unit: 'phút⁻¹',
          },
          {
            id: 't75',
            label: 'Thời gian phản ứng 75%',
            symbolLatex: 't_{75\\%}',
            expected: 40,
            tolerance: 0.5,
            toleranceMode: 'absolute',
            unit: 'phút',
          },
          {
            id: 'c50',
            label: 'Nồng độ còn lại sau 50 phút',
            symbolLatex: 'C_{50}',
            expected: 0.141,
            tolerance: 0.005,
            toleranceMode: 'absolute',
            unit: 'M',
          },
        ],
        explanation:
          '$k = \\ln 2 / 20 \\approx 0{,}03466\\text{ phút}^{-1}$; $t_{75\\%} = 2t_{1/2} = 40\\text{ phút}$; $C_{50} = 0{,}80\\times 2^{-2{,}5} \\approx 0{,}1414\\text{ M}$.',
        summaryTemplate:
          'Kết quả: $k \\approx 0{,}0347\\text{ phút}^{-1}$, $t_{75\\%} = 40\\text{ phút}$ và $C_{50} \\approx 0{,}141\\text{ M}$.',
      },
    ],
    explanation:
      'Phản ứng bậc nhất có $k = \\ln 2 / 20 \\approx 0{,}0347\\text{ phút}^{-1}$, cần $2t_{1/2} = 40\\text{ phút}$ để phản ứng $75\\%$ và còn lại $0{,}141\\text{ M}$ ở $t = 50\\text{ phút}$.',
  },
  {
    id: 'gc-se-6-1',
    lessonId: 'gc-sol-buffer',
    kind: 'semi-essay',
    title: 'Bài 6.1: Dung dịch đệm Henderson–Hasselbalch và tích số tan Ksp',
    fadeLevel: 0,
    prompt:
      'a) Trộn $50{,}0\\text{ mL}$ dung dịch $\\mathrm{CH_3COOH}\\ 0{,}20\\text{ M}$ ($\\mathrm{p}K_a = 4{,}74$) với $50{,}0\\text{ mL}$ dung dịch $\\mathrm{CH_3COONa}\\ 0{,}20\\text{ M}$ thu được $100{,}0\\text{ mL}$ dung dịch đệm. Tính $\\mathrm{pH}$ của dung dịch.\n\nb) Xét cân bằng ít tan của $\\mathrm{CaF_2}$ trong nước nguyên chất có $K_{sp}(\\mathrm{CaF_2}) = 4{,}0\\times 10^{-11}$. Tính độ tan mol $s$ của $\\mathrm{CaF_2}$ theo đơn vị $\\text{mmol/L}$.',
    given: [
      { symbolLatex: 'n_{\\mathrm{HA}}', value: '10,0', unit: 'mmol', label: 'Số mmol CH₃COOH' },
      { symbolLatex: 'n_{\\mathrm{A^-}}', value: '10,0', unit: 'mmol', label: 'Số mmol CH₃COO⁻' },
      { symbolLatex: '\\mathrm{p}K_a', value: '4,74', label: 'Hằng số axit CH₃COOH' },
      { symbolLatex: 'K_{sp}(\\mathrm{CaF_2})', value: '4,0 × 10⁻¹¹', label: 'Tích số tan CaF₂' },
    ],
    theoryAnchors: [
      {
        id: 'gc-hh-buffer',
        title: 'Phương trình Henderson–Hasselbalch',
        formula: '\\mathrm{pH} = \\mathrm{p}K_a + \\lg\\dfrac{n_{\\mathrm{A^-}}}{n_{\\mathrm{HA}}}',
        summary:
          'Áp dụng khi cả axit yếu $\\mathrm{HA}$ và bazơ liên hợp $\\mathrm{A^-}$ cùng tồn tại với nồng độ đủ lớn hơn rất nhiều so với $[\\mathrm{H^+}]$ và $[\\mathrm{OH^-}]$.',
        conditions: [
          'Hai lượng chất $n_{\\mathrm{A^-}}$ và $n_{\\mathrm{HA}}$ dùng cùng đơn vị (mol hoặc mmol) trong cùng thể tích dung dịch.',
        ],
      },
      {
        id: 'gc-ksp-ab2',
        title: 'Cân bằng độ tan muối ít tan kiểu AB₂',
        formula: '\\mathrm{CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)}, \\qquad K_{sp} = s(2s)^2 = 4s^3',
        summary:
          'Nếu độ tan mol của $\\mathrm{CaF_2}$ trong nước nguyên chất là $s$ (mol/L) thì $[\\mathrm{Ca^{2+}}] = s$ và $[\\mathrm{F^-}] = 2s$.',
        conditions: [
          'Bỏ qua sự thủy phân của ion $\\mathrm{F^-}$ trong bài tính $K_{sp}$ cơ bản.',
          'Đổi kết quả từ $\\text{mol/L}$ sang $\\text{mmol/L}$ bằng cách nhân $10^3$.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-6-1-concept',
        kind: 'choice-reasoning',
        title: 'Kiểm tra điều kiện đệm và biểu thức tích số tan CaF₂',
        prompt:
          'Phát biểu nào đúng cho cả hai hệ dung dịch đang xét?',
        theoryAnchorIds: ['gc-hh-buffer', 'gc-ksp-ab2'],
        choices: [
          {
            id: 'both-ok',
            label: 'Hệ CH₃COOH/CH₃COO⁻ thỏa mãn điều kiện Henderson–Hasselbalch; CaF₂ có $K_{sp} = 4s^3$',
            rationale:
              'Chính xác. Nồng độ sau trộn của mỗi cấu tử là $0{,}10\\text{ M} \\gg [\\mathrm{H^+}] \\approx 1{,}8\\times 10^{-5}\\text{ M}$, và $\\mathrm{CaF_2}$ phân li tạo $s$ mol/L $\\mathrm{Ca^{2+}}$ cùng $2s$ mol/L $\\mathrm{F^-}$ nên $K_{sp} = s(2s)^2 = 4s^3$.',
          },
          {
            id: 'ksp-s2',
            label: 'Hệ đệm có pH = 7; CaF₂ có $K_{sp} = s^2$',
            rationale:
              'Chưa đúng. Đệm $\\mathrm{CH_3COOH/CH_3COO^-}$ có $\\mathrm{pH} = \\mathrm{p}K_a = 4{,}74$, còn $\\mathrm{CaF_2}$ phân li thành 3 ion nên $K_{sp} = 4s^3$.',
          },
          {
            id: 'ksp-2s3',
            label: 'CaF₂ có $K_{sp} = 2s^3$ vì hệ số $\\mathrm{F^-}$ là 2',
            rationale:
              'Quên bình phương hệ số 2: $[\\mathrm{F^-}]^2 = (2s)^2 = 4s^2$, nhân với $s$ thành $4s^3$.',
          },
        ],
        answers: ['both-ok'],
        hint: 'Kiểm tra số mũ trong biểu thức $K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2$.',
        summaryTemplate:
          'Dung dịch đệm thỏa mãn điều kiện Henderson–Hasselbalch; cân bằng tan $\\mathrm{CaF_2}$ có $K_{sp} = s(2s)^2 = 4s^3$.',
      },
      {
        id: 'gc-se-6-1-transform',
        kind: 'equation-transform',
        title: 'Biến đổi công thức pH đệm và giải độ tan s',
        prompt:
          'Chọn lần lượt các bước biến đổi đúng cho hai biểu thức.',
        theoryAnchorIds: ['gc-hh-buffer', 'gc-ksp-ab2'],
        initialEquations: [
          { label: 'Đệm', latex: '\\mathrm{pH} = \\mathrm{p}K_a + \\lg\\dfrac{n_{\\mathrm{A^-}}}{n_{\\mathrm{HA}}}' },
          { label: 'Độ tan', latex: 'K_{sp} = 4s^3' },
        ],
        goalLatex: 's = \\sqrt[3]{\\dfrac{K_{sp}}{4}}',
        stages: [
          {
            id: 'stage-hh',
            prompt: 'Bước 1: Thế số mmol vào công thức Henderson–Hasselbalch',
            operations: [
              {
                id: 'hh-ok',
                label: 'Thế $n_{\\mathrm{A^-}} = 10{,}0\\text{ mmol}, n_{\\mathrm{HA}} = 10{,}0\\text{ mmol}$',
                resultLatex: '\\mathrm{pH} = 4{,}74 + \\lg(1) = 4{,}74',
                optimal: true,
                feedback: 'Chính xác. Khi $n_{\\mathrm{A^-}} = n_{\\mathrm{HA}}$, $\\mathrm{pH} = \\mathrm{p}K_a$.',
              },
              {
                id: 'hh-minus',
                label: 'Dùng $\\mathrm{pH} = \\mathrm{p}K_a - \\lg(n_{\\mathrm{A^-}}/n_{\\mathrm{HA}})$',
                resultLatex: '\\mathrm{pH} = \\mathrm{p}K_a - \\lg(1)',
                optimal: false,
                feedback: 'Công thức chuẩn mang dấu cộng trước $\\lg(n_{\\mathrm{A^-}}/n_{\\mathrm{HA}})$.',
              },
            ],
          },
          {
            id: 'stage-ksp',
            prompt: 'Bước 2: Cô lập độ tan $s$ từ $K_{sp} = 4s^3$',
            operations: [
              {
                id: 'ksp-ok',
                label: 'Chia 4 rồi lấy căn bậc ba: $s = \\sqrt[3]{K_{sp}/4}$',
                resultLatex: 's = \\sqrt[3]{1{,}0\\times 10^{-11}}\\text{ mol/L}',
                optimal: true,
                feedback: 'Chính xác. Đổi tiếp sang $\\text{mmol/L}$ bằng cách nhân $10^3$.',
              },
              {
                id: 'ksp-sqrt',
                label: 'Lấy căn bậc hai $s = \\sqrt{K_{sp}/4}$',
                resultLatex: 's = \\sqrt{1{,}0\\times 10^{-11}}',
                optimal: false,
                feedback: 'Phương trình là $4s^3 = K_{sp}$ nên phải lấy căn bậc ba, không phải căn bậc hai.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Thế tỷ lệ đệm $1:1$ cho $\\mathrm{pH} = \\mathrm{p}K_a = 4{,}74$; từ $4s^3 = K_{sp}$ rút $s = \\sqrt[3]{K_{sp}/4}$.',
      },
      {
        id: 'gc-se-6-1-calc',
        kind: 'numeric-unit',
        title: 'Tính pH dung dịch đệm và độ tan CaF₂',
        prompt: 'Nhập giá trị $\\mathrm{pH}$ và độ tan $s$ (theo $\\text{mmol/L}$).',
        theoryAnchorIds: ['gc-hh-buffer', 'gc-ksp-ab2'],
        fields: [
          {
            id: 'ph',
            label: 'pH dung dịch đệm',
            symbolLatex: '\\mathrm{pH}',
            expected: 4.74,
            tolerance: 0.02,
            toleranceMode: 'absolute',
            unit: 'pH',
          },
          {
            id: 'solubility',
            label: 'Độ tan mol của CaF₂',
            symbolLatex: 's',
            expected: 0.215,
            tolerance: 0.008,
            toleranceMode: 'absolute',
            unit: 'mmol/L',
          },
        ],
        explanation:
          '$\\mathrm{pH} = 4{,}74 + \\lg(1) = 4{,}74$. Độ tan $s = \\sqrt[3]{10\\times 10^{-12}} = 2{,}154\\times 10^{-4}\\text{ mol/L} = 0{,}215\\text{ mmol/L}$.',
        summaryTemplate:
          'Kết quả: $\\mathrm{pH} = 4{,}74$ và độ tan $\\mathrm{CaF_2}$ là $s \\approx 0{,}215\\text{ mmol/L}$.',
      },
    ],
    explanation:
      'Dung dịch đệm có $n_{\\mathrm{A^-}} = n_{\\mathrm{HA}}$ nên $\\mathrm{pH} = \\mathrm{p}K_a = 4{,}74$; từ $K_{sp} = 4s^3$ thu được $s \\approx 0{,}215\\text{ mmol/L}$.',
  },
  {
    id: 'gc-se-7-1',
    lessonId: 'gc-ec-nernst',
    kind: 'semi-essay',
    title: 'Bài 7.1: Pin Galvani, phương trình Nernst và liên hệ ΔG° = −nFE°',
    fadeLevel: 0,
    prompt:
      'Xét pin Galvani ở $25^\\circ\\text{C}$ ($298\\text{ K}$):\n$$\\mathrm{Zn(s) \\mid Zn^{2+}(0{,}10\\text{ M}) \\parallel Cu^{2+}(1{,}0\\text{ M}) \\mid Cu(s)}$$\nBiết $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$, $E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\text{ V}$, hằng số Faraday $F = 96500\\text{ C/mol}$.\n\na) Biểu diễn xu hướng biến thiên năng lượng tự do Gibbs của pin đang tự phóng điện.\n\nb) Tính suất điện động chuẩn $E^\\circ_{\\text{pin}}$, suất điện động thực tế $E_{\\text{pin}}$ theo phương trình Nernst và $\\Delta G^\\circ$ của phản ứng pin (theo $\\text{kJ/mol}$).',
    given: [
      { symbolLatex: 'E^\\circ_{\\mathrm{Cu^{2+}/Cu}}', value: '+0,34', unit: 'V', label: 'Thế khử chuẩn cực Cu (catot)' },
      { symbolLatex: 'E^\\circ_{\\mathrm{Zn^{2+}/Zn}}', value: '-0,76', unit: 'V', label: 'Thế khử chuẩn cực Zn (anot)' },
      { symbolLatex: '[\\mathrm{Zn^{2+}}]', value: '0,10', unit: 'M', label: 'Nồng độ Zn²⁺' },
      { symbolLatex: '[\\mathrm{Cu^{2+}}]', value: '1,0', unit: 'M', label: 'Nồng độ Cu²⁺' },
      { symbolLatex: 'F', value: '96500', unit: 'C/mol', label: 'Hằng số Faraday' },
    ],
    theoryAnchors: [
      {
        id: 'gc-nernst-cell',
        title: 'Suất điện động chuẩn & Phương trình Nernst',
        formula: 'E^\\circ_{\\text{pin}} = E^\\circ_{\\text{catot}} - E^\\circ_{\\text{anot}}, \\qquad E_{\\text{pin}} = E^\\circ_{\\text{pin}} - \\dfrac{0{,}059}{n}\\lg Q',
        summary:
          'Phản ứng pin: $\\mathrm{Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)}$ có số electron trao đổi $n = 2$ và thương số phản ứng $Q = [\\mathrm{Zn^{2+}}]/[\\mathrm{Cu^{2+}}]$.',
        conditions: [
          'Chất rắn tinh khiết ($\mathrm{Zn}, \mathrm{Cu}$) có hoạt độ bằng 1 nên không xuất hiện trong $Q$.',
        ],
      },
      {
        id: 'gc-ec-gibbs',
        title: 'Liên hệ giữa E° và ΔG°',
        formula: '\\Delta G^\\circ = -nFE^\\circ_{\\text{pin}}',
        summary:
          'Pin tự hoạt động khi $E^\\circ_{\\text{pin}} > 0 \\Leftrightarrow \\Delta G^\\circ < 0$. Với $F = 96500\\text{ C/mol}$ và $E^\\circ$ tính bằng V, tích $-nFE^\\circ$ có đơn vị $\\text{J/mol}$; chia $1000$ để đổi sang $\\text{kJ/mol}$.',
        conditions: [
          'Dùng $E^\\circ_{\\text{pin}}$ (chuẩn) để tính $\\Delta G^\\circ$ (chuẩn), không dùng $E_{\\text{pin}}$ khác chuẩn.',
        ],
      },
    ],
    steps: [
      {
        id: 'gc-se-7-1-flow',
        kind: 'diagram',
        title: 'Biểu diễn mức năng lượng tự do của pin Galvani tự diễn biến',
        prompt:
          'Trong pin Galvani tự phóng điện ($E_{\\text{pin}} > 0$), xác định mức năng lượng tự do $G$ của chất đầu ($\\mathrm{Zn + Cu^{2+}}$), sản phẩm ($\\mathrm{Zn^{2+} + Cu}$) và dấu của $\\Delta G$.',
        theoryAnchorIds: ['gc-ec-gibbs'],
        diagramKind: 'balance-flow',
        spec: {
          kind: 'balance-flow',
          systemLabel: 'Pin Galvani Zn | Zn²⁺ || Cu²⁺ | Cu',
          initialLabel: 'Trạng thái đầu (Zn + Cu²⁺)',
          finalLabel: 'Trạng thái cuối (Zn²⁺ + Cu)',
          maxLevel: 4,
          initialBars: [
            {
              id: 'G_init',
              label: 'Năng lượng tự do đầu',
              symbolLatex: 'G_{\\text{đầu}}',
              expectedState: 'positive',
              hint: 'Hệ chất đầu có năng lượng tự do cao hơn sản phẩm (> 0 vạch).',
            },
          ],
          finalBars: [
            {
              id: 'G_final',
              label: 'Năng lượng tự do cuối',
              symbolLatex: 'G_{\\text{cuối}}',
              expectedState: 'positive',
              hint: 'Sản phẩm có năng lượng tự do dương trên thang minh họa (> 0 vạch) nhưng thấp hơn trạng thái đầu.',
            },
          ],
          transferLabel: 'Biến thiên năng lượng tự do ΔG',
          transferSymbolLatex: '\\Delta G',
          expectedTransferSign: '-',
          transferHint: 'Pin tự phóng điện sinh công điện hữu ích nên ΔG < 0 (chọn dấu −) và G_cuối < G_đầu.',
          requireConservation: true,
          note: 'Đặt số vạch G_đầu > G_cuối > 0 và chọn dấu ΔG là −.',
        },
        summaryTemplate:
          'Pin tự phóng điện tương ứng $G_{\\text{cuối}} < G_{\\text{đầu}}$ và $\\Delta G < 0$.',
      },
      {
        id: 'gc-se-7-1-transform',
        kind: 'equation-transform',
        title: 'Lập phương trình Nernst và công thức ΔG°',
        prompt:
          'Chọn lần lượt các bước đúng để thiết lập $E_{\\text{pin}}$ và $\\Delta G^\\circ$.',
        theoryAnchorIds: ['gc-nernst-cell', 'gc-ec-gibbs'],
        initialEquations: [
          { label: 'Phản ứng pin', latex: '\\mathrm{Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)}' },
          { label: 'Nernst (25 °C)', latex: 'E_{\\text{pin}} = E^\\circ_{\\text{pin}} - \\dfrac{0{,}059}{n}\\lg Q' },
        ],
        goalLatex: '\\Delta G^\\circ = -\\dfrac{2\\times 96500\\times E^\\circ_{\\text{pin}}}{1000}\\text{ (kJ/mol)}',
        stages: [
          {
            id: 'stage-nernst-q',
            prompt: 'Bước 1: Xác định $n$ và thương số phản ứng $Q$ trong phương trình Nernst',
            operations: [
              {
                id: 'nq-ok',
                label: 'Chọn $n = 2$ và $Q = \\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{Cu^{2+}}]} = 0{,}10$',
                resultLatex: 'E_{\\text{pin}} = 1{,}10 - \\dfrac{0{,}059}{2}\\lg(0{,}10)',
                optimal: true,
                feedback: 'Chính xác. Chất rắn $\\mathrm{Zn, Cu}$ có hoạt độ bằng 1.',
              },
              {
                id: 'nq-inv',
                label: 'Đặt $Q = \\dfrac{[\\mathrm{Cu^{2+}}]}{[\\mathrm{Zn^{2+}}]} = 10$',
                resultLatex: 'E_{\\text{pin}} = 1{,}10 - \\dfrac{0{,}059}{2}\\lg(10)',
                optimal: false,
                feedback: 'Với dấu trừ trong Nernst, $Q$ là [sản phẩm]/[chất đầu] $= [\\mathrm{Zn^{2+}}]/[\\mathrm{Cu^{2+}}]$.',
              },
            ],
          },
          {
            id: 'stage-dg-e0',
            prompt: 'Bước 2: Chọn đại lượng thế điện động đúng để tính $\\Delta G^\\circ$',
            operations: [
              {
                id: 'dg-e0',
                label: 'Dùng $E^\\circ_{\\text{pin}} = 1{,}10\\text{ V}$ và chia $1000$ sang $\\text{kJ/mol}$',
                resultLatex: '\\Delta G^\\circ = -\\dfrac{2\\times 96500\\times 1{,}10}{1000}\\text{ kJ/mol}',
                optimal: true,
                feedback: 'Chính xác. $\\Delta G^\\circ$ chuẩn phải tính từ $E^\\circ_{\\text{pin}}$ chuẩn.',
              },
              {
                id: 'dg-e',
                label: 'Dùng $E_{\\text{pin}}$ khác chuẩn để tính $\\Delta G^\\circ$',
                resultLatex: '\\Delta G^\\circ = -nFE_{\\text{pin}}',
                optimal: false,
                feedback: 'Không dùng $E$ khác chuẩn để tính $\\Delta G^\\circ$; $E_{\\text{pin}}$ cho biết $\\Delta G$, còn $E^\\circ_{\\text{pin}}$ cho biết $\\Delta G^\\circ$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Với $n=2$ và $Q = 0{,}10$, tính $E_{\\text{pin}} = 1{,}10 - \\tfrac{0{,}059}{2}\\lg(0{,}10)$ và $\\Delta G^\\circ = -2FE^\\circ_{\\text{pin}}/1000$.',
      },
      {
        id: 'gc-se-7-1-calc',
        kind: 'numeric-unit',
        title: 'Tính E°_pin, E_pin và ΔG°',
        prompt: 'Nhập các giá trị $E^\\circ_{\\text{pin}}$, $E_{\\text{pin}}$ và $\\Delta G^\\circ$.',
        theoryAnchorIds: ['gc-nernst-cell', 'gc-ec-gibbs'],
        fields: [
          {
            id: 'e0',
            label: 'Suất điện động chuẩn',
            symbolLatex: 'E^\\circ_{\\text{pin}}',
            expected: 1.1,
            tolerance: 0.01,
            toleranceMode: 'absolute',
            unit: 'V',
          },
          {
            id: 'epin',
            label: 'Suất điện động thực tế',
            symbolLatex: 'E_{\\text{pin}}',
            expected: 1.13,
            tolerance: 0.01,
            toleranceMode: 'absolute',
            unit: 'V',
          },
          {
            id: 'dg0',
            label: 'Biến thiên năng lượng tự do chuẩn',
            symbolLatex: '\\Delta G^\\circ',
            expected: -212.3,
            tolerance: 0.5,
            toleranceMode: 'absolute',
            unit: 'kJ/mol',
          },
        ],
        explanation:
          '$E^\\circ_{\\text{pin}} = 0{,}34 - (-0{,}76) = 1{,}10\\text{ V}$; $E_{\\text{pin}} = 1{,}10 - 0{,}0295(-1) = 1{,}1295 \\approx 1{,}13\\text{ V}$; $\\Delta G^\\circ = -2\\times 96500\\times 1{,}10 / 1000 = -212{,}3\\text{ kJ/mol}$.',
        summaryTemplate:
          'Kết quả: $E^\\circ_{\\text{pin}} = 1{,}10\\text{ V}$, $E_{\\text{pin}} \\approx 1{,}13\\text{ V}$ và $\\Delta G^\\circ = -212{,}3\\text{ kJ/mol}$.',
      },
    ],
    explanation:
      'Pin $\\mathrm{Zn/Cu}$ có $E^\\circ_{\\text{pin}} = 1{,}10\\text{ V}$, ở nồng độ $[\\mathrm{Zn^{2+}}]=0{,}10\\text{ M}, [\\mathrm{Cu^{2+}}]=1{,}0\\text{ M}$ tăng lên $E_{\\text{pin}} \\approx 1{,}13\\text{ V}$, và $\\Delta G^\\circ = -212{,}3\\text{ kJ/mol}$.',
  },
];
