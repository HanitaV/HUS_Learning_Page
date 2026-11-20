import type { FbdForceDef, SemiEssayExercise } from '../../../domain/semi-essay';

const NEWTON_FORCE_CATALOG: Readonly<Record<string, FbdForceDef>> = {
  P: {
    id: 'P',
    label: 'P',
    name: 'Trọng lực',
    missing: 'Thiếu trọng lực P. Mọi vật có khối lượng gần mặt đất đều chịu trọng lực hướng thẳng đứng xuống (270°).',
    extra: 'Mỗi vật chỉ có một trọng lực P duy nhất.',
  },
  N: {
    id: 'N',
    label: 'N',
    name: 'Phản lực',
    missing: 'Thiếu phản lực N. Bề mặt mà vật tì lên luôn đẩy vật theo phương vuông góc với bề mặt.',
    extra: 'Vật này không tì lên bề mặt nào nên không có phản lực N.',
  },
  T: {
    id: 'T',
    label: 'T',
    name: 'Lực căng dây',
    missing: 'Thiếu lực căng dây T. Sợi dây buộc vào vật luôn kéo vật dọc theo phương dây, về phía dây.',
    extra: 'Không có đoạn dây nào kéo theo hướng này.',
  },
  Fms: {
    id: 'Fms',
    label: 'F',
    subscript: 'ms',
    name: 'Lực ma sát trượt',
    missing: 'Thiếu lực ma sát trượt Fms. Đề bài cho hệ số ma sát μ = 0,1 và vật A đang trượt lên dốc nên Fms hướng dọc xuống dốc (210°).',
    extra: 'Vật này không tiếp xúc với bề mặt có ma sát.',
  },
  Fdi: {
    id: 'Fdi',
    label: 'F',
    subscript: 'đ',
    name: 'Lực đẩy theo chiều chuyển động',
    missing: '',
    extra: 'Không có "lực đẩy theo chiều chuyển động". Mỗi lực thật phải do một vật cụ thể tác dụng lên vật đang xét.',
  },
  Fqt: {
    id: 'Fqt',
    label: 'F',
    subscript: 'qt',
    name: 'Lực quán tính',
    missing: '',
    extra: 'Trong hệ quy chiếu quán tính gắn với mặt đất không xuất hiện lực quán tính.',
  },
};

export const phy1159SemiEssays: readonly SemiEssayExercise[] = [
  {
    id: 'phy1159-se-3-1',
    lessonId: 'phy1159-t3-1',
    kind: 'semi-essay',
    title: 'Bài 3.1: Hệ vật trên mặt phẳng nghiêng có ròng rọc',
    fadeLevel: 0,
    prompt:
      'Một vật A khối lượng $m_1 = 3\\text{ kg}$ nằm trên mặt phẳng nghiêng góc $\\alpha = 30^\\circ$ so với phương nằm ngang. Vật A được nối với vật B có khối lượng $m_2 = 2\\text{ kg}$ bằng một sợi dây không co dãn qua một ròng rọc cố định. Xác định gia tốc $a$ của các vật, lực căng dây $T$ và áp lực $F$ lên trục ròng rọc. Bỏ qua khối lượng dây, ròng rọc và ma sát ở trục ròng rọc. Biết hệ số ma sát trượt giữa vật A và mặt phẳng nghiêng là $\\mu = 0{,}1$, lấy $g = 9{,}8\\text{ m/s}^2$.',
    given: [
      { symbolLatex: 'm_1', value: '3', unit: 'kg', label: 'Khối lượng vật A' },
      { symbolLatex: 'm_2', value: '2', unit: 'kg', label: 'Khối lượng vật B' },
      { symbolLatex: '\\alpha', value: '30', unit: '°', label: 'Góc nghiêng' },
      { symbolLatex: '\\mu', value: '0,1', label: 'Hệ số ma sát' },
      { symbolLatex: 'g', value: '9,8', unit: 'm/s²', label: 'Gia tốc trọng trường' },
    ],
    theoryAnchors: [
      {
        id: 'newton-frame',
        title: 'Hệ quy chiếu quán tính & Định luật II Newton',
        formula: '\\sum \\vec{F} = m\\vec{a}',
        summary:
          'Chọn hệ quy chiếu gắn với mặt đất (mặt phẳng nghiêng và trục ròng rọc đứng yên) để chỉ cần xét các lực thật do tương tác vật lý.',
        conditions: [
          'Chỉ vẽ các lực THẬT tác dụng LÊN từng vật đang xét.',
          'Không vẽ lực quán tính hay "lực đẩy theo chiều chuyển động" trong hệ quy chiếu quán tính.',
          'Dây không dãn, bỏ qua khối lượng dây và ròng rọc $\\Rightarrow$ độ lớn gia tốc hai vật bằng nhau ($a_1 = a_2 = a$) và lực căng hai nhánh dây bằng nhau ($T_1 = T_2 = T$).',
        ],
      },
      {
        id: 'friction-law',
        title: 'Lực ma sát trượt & Chiếu trục xoay',
        formula: 'F_{ms} = \\mu N, \\qquad N = m_1 g \\cos\\alpha',
        summary:
          'Với vật trên mặt phẳng nghiêng, xoay trục $Ox\'$ dọc theo phương chuyển động và $Oy\'$ vuông góc mặt nghiêng để $a_{y\'} = 0$.',
        conditions: [
          'Trọng lực $\\vec{P}_1$ tách thành thành phần dọc dốc $m_1 g\\sin\\alpha$ (xuống dốc) và vuông góc dốc $m_1 g\\cos\\alpha$.',
          'Lực ma sát trượt $\\vec{F}_{ms}$ luôn ngược chiều chuyển động tương đối của vật đối với mặt tiếp xúc.',
        ],
      },
      {
        id: 'elim-tension',
        title: 'Chiến lược giải hệ bằng chữ: Khử nội lực căng dây',
        formula: 'a = \\dfrac{g(m_2 - m_1\\sin\\alpha - \\mu m_1\\cos\\alpha)}{m_1 + m_2}',
        summary:
          'Cộng vế với vế hai phương trình chuyển động của vật A và vật B giúp lực căng $T$ tự triệt tiêu, tránh phải thay số sớm gây sai số tích lũy.',
        conditions: [
          'Luôn rút công thức bằng chữ và kiểm tra trường hợp biên (vd $\\alpha = 90^\\circ, \\mu = 0$) trước khi bấm máy tính.',
          'Áp lực lên trục ròng rọc là hợp lực hai nhánh dây có cùng độ lớn $T$, hợp với nhau góc $90^\\circ - \\alpha$: $F = 2T\\cos\\dfrac{90^\\circ - \\alpha}{2}$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-3-1-predict',
        kind: 'choice-reasoning',
        title: 'Dự đoán chiều chuyển động của hệ',
        prompt:
          'Tạm bỏ qua ma sát để xác định chiều có xu hướng chuyển động của hệ (từ đó biết chiều lực ma sát trên vật A). Hệ sẽ chuyển động theo chiều nào?',
        theoryAnchorIds: ['newton-frame', 'friction-law'],
        choices: [
          {
            id: 'a-up',
            label: 'Vật A trượt lên dốc, vật B đi xuống',
            rationale:
              'Đúng. So sánh hai lực kéo dọc dây: $m_2 g = 19{,}6\\text{ N}$ lớn hơn $m_1 g\\sin 30^\\circ = 14{,}7\\text{ N}$. Vì vậy B kéo A trượt lên dốc, nên lực ma sát trên A hướng dọc xuống dốc.',
          },
          {
            id: 'a-down',
            label: 'Vật A trượt xuống dốc, vật B đi lên',
            rationale:
              'Chưa đúng. Tuy $m_1 > m_2$, nhưng chỉ thành phần $m_1 g\\sin 30^\\circ = 14{,}7\\text{ N}$ kéo A xuống dốc, nhỏ hơn trọng lượng $m_2 g = 19{,}6\\text{ N}$ của vật B.',
          },
          {
            id: 'rest',
            label: 'Hệ đứng yên vì hai vật cân bằng nhau',
            rationale:
              'Chưa đúng. Khi bỏ qua ma sát, chênh lệch kéo dọc dây là $19{,}6 - 14{,}7 = 4{,}9\\text{ N} \\ne 0$ nên hệ không thể đứng yên.',
          },
        ],
        answers: ['a-up'],
        hint: 'Hãy so sánh $m_2 g$ với thành phần trọng lực dọc theo mặt phẳng nghiêng $m_1 g\\sin\\alpha$.',
        summaryTemplate:
          'So sánh lực kéo dọc dây: $m_2 g = 19{,}6\\text{ N} > m_1 g\\sin 30^\\circ = 14{,}7\\text{ N}$, nên vật A trượt lên dốc, vật B đi xuống và ma sát trên A hướng xuống dốc.',
      },
      {
        id: 'se-3-1-frame',
        kind: 'choice-reasoning',
        title: 'Chọn hệ quy chiếu giải bài',
        prompt: 'Nên giải bài toán động lực học này trong hệ quy chiếu nào để lập phương trình gọn và ít sai sót nhất?',
        theoryAnchorIds: ['newton-frame'],
        choices: [
          {
            id: 'ground',
            label: 'Hệ quy chiếu gắn với mặt đất (quán tính)',
            rationale:
              'Chính xác. Mặt phẳng nghiêng và ròng rọc đứng yên so với mặt đất nên chỉ cần vẽ các lực thật, không phải thêm lực quán tính.',
          },
          {
            id: 'body-a',
            label: 'Hệ quy chiếu gắn với vật A',
            rationale:
              'Vật A đang chuyển động có gia tốc nên hệ quy chiếu gắn với A là phi quán tính, phải thêm lực quán tính phức tạp hơn cần thiết.',
          },
        ],
        answers: ['ground'],
        summaryTemplate:
          'Chọn hệ quy chiếu quán tính gắn với mặt đất: chỉ xét các lực thật tác dụng lên từng vật.',
      },
      {
        id: 'se-3-1-fbd',
        kind: 'diagram',
        title: 'Vẽ sơ đồ lực (Free Body Diagram)',
        prompt:
          'Vẽ tất cả các lực thật tác dụng lên **Vật A** (trên mặt nghiêng $30^\\circ$, đang trượt lên dốc) và **Vật B** (treo thẳng đứng). Lưu ý không vẽ các lực ảo.',
        theoryAnchorIds: ['newton-frame', 'friction-law'],
        diagramKind: 'fbd',
        spec: {
          kind: 'fbd',
          note: 'Góc tính ngược chiều kim đồng hồ từ phương ngang sang phải (0° = sang phải, 90° = lên trên, 270° = xuống dưới). Mặt nghiêng dốc 30°.',
          forceCatalog: NEWTON_FORCE_CATALOG,
          bodies: [
            {
              id: 'A',
              label: 'Vật A (trên dốc 30°)',
              surfaceAngle: 30,
              palette: ['P', 'N', 'T', 'Fms', 'Fdi', 'Fqt'],
              expected: [
                { type: 'P', angle: 270 },
                { type: 'N', angle: 120 },
                { type: 'T', angle: 30 },
                { type: 'Fms', angle: 210 },
              ],
              toleranceDeg: 12,
            },
            {
              id: 'B',
              label: 'Vật B (treo dây)',
              ropeAngle: 90,
              palette: ['P', 'N', 'T', 'Fdi'],
              expected: [
                { type: 'P', angle: 270 },
                { type: 'T', angle: 90 },
              ],
              toleranceDeg: 12,
            },
          ],
        },
        summaryTemplate:
          'Sơ đồ lực: Vật A chịu $\\vec{P}_1$ (270°), $\\vec{N}$ (120°), $\\vec{T}$ (30°), $\\vec{F}_{ms}$ (210°); Vật B chịu $\\vec{P}_2$ (270°) và $\\vec{T}$ (90°).',
      },
      {
        id: 'se-3-1-projection',
        kind: 'axis-projection',
        title: 'Chiếu phương trình vectơ lên trục tọa độ',
        prompt:
          'Từ sơ đồ lực của **Vật A**, chọn dấu và thành phần hình chiếu của từng lực lên trục $Oy\'$ (vuông góc mặt nghiêng, hướng lên) và trục $Ox\'$ (dọc theo mặt nghiêng, chiều dương hướng lên dốc).',
        theoryAnchorIds: ['friction-law'],
        contextNote: 'Chọn đúng dấu (+ / − / 0) và biểu thức độ lớn hình chiếu cho mỗi lực.',
        axes: [
          {
            id: 'oy',
            label: "Vật A — Trục Oy' (vuông góc mặt nghiêng)",
            rhsLatex: '0',
            resultingEquationLatex: 'N - m_1 g\\cos\\alpha = 0 \\Rightarrow N = m_1 g\\cos\\alpha',
            rows: [
              {
                forceId: 'N',
                forceLatex: '\\vec{N}',
                expectedSign: '+',
                expectedComponent: 'N',
                componentOptions: [
                  { id: 'N', latex: 'N' },
                  { id: 'Nsin', latex: 'N\\sin\\alpha' },
                ],
                hint: 'Phản lực N cùng chiều dương trục Oy\' nên hình chiếu là +N.',
              },
              {
                forceId: 'P1',
                forceLatex: '\\vec{P}_1',
                expectedSign: '-',
                expectedComponent: 'cos',
                componentOptions: [
                  { id: 'sin', latex: 'm_1 g\\sin\\alpha' },
                  { id: 'cos', latex: 'm_1 g\\cos\\alpha' },
                ],
                hint: 'Góc giữa P1 và phương vuông góc mặt nghiêng là α, nên hình chiếu lên Oy\' là −m₁g cos α.',
              },
              {
                forceId: 'T',
                forceLatex: '\\vec{T}',
                expectedSign: '0',
                expectedComponent: '0',
                componentOptions: [{ id: 'T', latex: 'T' }],
                hint: 'Lực căng dây T song song mặt nghiêng nên vuông góc trục Oy\' (hình chiếu = 0).',
              },
            ],
          },
          {
            id: 'ox',
            label: "Vật A — Trục Ox' (dọc dốc hướng lên)",
            rhsLatex: 'm_1 a',
            resultingEquationLatex: 'T - m_1 g\\sin\\alpha - F_{ms} = m_1 a',
            rows: [
              {
                forceId: 'T',
                forceLatex: '\\vec{T}',
                expectedSign: '+',
                expectedComponent: 'T',
                componentOptions: [
                  { id: 'T', latex: 'T' },
                  { id: 'Tcos', latex: 'T\\cos\\alpha' },
                ],
                hint: 'Lực căng T hướng dọc lên dốc, cùng chiều dương Ox\' nên là +T.',
              },
              {
                forceId: 'P1',
                forceLatex: '\\vec{P}_1',
                expectedSign: '-',
                expectedComponent: 'sin',
                componentOptions: [
                  { id: 'sin', latex: 'm_1 g\\sin\\alpha' },
                  { id: 'cos', latex: 'm_1 g\\cos\\alpha' },
                ],
                hint: 'Thành phần trọng lực dọc mặt nghiêng kéo vật xuống dốc (ngược Ox\') là −m₁g sin α.',
              },
              {
                forceId: 'Fms',
                forceLatex: '\\vec{F}_{ms}',
                expectedSign: '-',
                expectedComponent: 'Fms',
                componentOptions: [
                  { id: 'Fms', latex: 'F_{ms}' },
                  { id: 'Fmscos', latex: 'F_{ms}\\cos\\alpha' },
                ],
                hint: 'Vật A trượt lên dốc nên ma sát trượt Fms hướng dọc xuống dốc (−Fms).',
              },
            ],
          },
        ],
        summaryTemplate:
          'Chiếu định luật II cho vật A: $N = m_1 g\\cos\\alpha$ và $T - m_1 g\\sin\\alpha - F_{ms} = m_1 a$. Với vật B (chiều dương đi xuống): $m_2 g - T = m_2 a$.',
      },
      {
        id: 'se-3-1-transform',
        kind: 'equation-transform',
        title: 'Biến đổi hệ phương trình bằng chữ để rút gia tốc a',
        prompt:
          'Chọn lần lượt các thao tác biến đổi đại số chiến lược để khử nội lực căng dây $T$ và cô lập gia tốc $a$ dưới dạng công thức chữ.',
        theoryAnchorIds: ['elim-tension', 'friction-law'],
        initialEquations: [
          { label: '(1)', latex: 'T - m_1 g\\sin\\alpha - F_{ms} = m_1 a' },
          { label: '(2)', latex: 'm_2 g - T = m_2 a' },
          { label: '(3)', latex: 'F_{ms} = \\mu N = \\mu m_1 g\\cos\\alpha' },
        ],
        goalLatex: 'a = \\dfrac{g(m_2 - m_1\\sin\\alpha - \\mu m_1\\cos\\alpha)}{m_1 + m_2}',
        stages: [
          {
            id: 'st-sub-fms',
            prompt: 'Loại bỏ ẩn trung gian $F_{ms}$ khỏi phương trình (1):',
            operations: [
              {
                id: 'sub-fms',
                label: 'Thế (3) $F_{ms} = \\mu m_1 g\\cos\\alpha$ vào (1)',
                resultLatex: 'T - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = m_1 a \\quad (1\')',
                optimal: true,
                feedback: 'Chính xác! Phương trình (1\') giờ chỉ còn hai ẩn chung là $T$ và $a$.',
              },
              {
                id: 'ignore-fms',
                label: 'Đặt $F_{ms} = \\mu m_1 g$ vào (1)',
                resultLatex: 'T - m_1 g\\sin\\alpha - \\mu m_1 g = m_1 a',
                optimal: false,
                feedback: 'Sai vật lý: trên mặt phẳng nghiêng, phản lực $N = m_1 g\\cos\\alpha$, không phải $m_1 g$.',
              },
            ],
          },
          {
            id: 'st-elim-t',
            prompt: 'Kết hợp (1\') và (2) để khử lực căng dây $T$:',
            operations: [
              {
                id: 'sub-eq',
                label: 'Trừ vế với vế $(1\') - (2)$',
                resultLatex: '2T - m_2 g - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = (m_1 - m_2)a',
                optimal: false,
                feedback: 'Phép trừ đúng về mặt toán học nhưng làm xuất hiện $2T$ thay vì khử $T$. Hãy thử phép toán làm $+T$ và $-T$ triệt tiêu nhau.',
              },
              {
                id: 'add-eq',
                label: 'Cộng vế với vế $(1\') + (2)$',
                resultLatex: 'm_2 g - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = (m_1 + m_2)a',
                canceledLatex: '+T - T = 0',
                optimal: true,
                feedback: 'Rất tốt! Lực căng dây $T$ đã triệt tiêu hoàn toàn và vế phải gom gọn thành $(m_1 + m_2)a$.',
              },
            ],
          },
          {
            id: 'st-isolate-a',
            prompt: 'Cô lập $a$ để thu được công thức chữ cuối cùng:',
            operations: [
              {
                id: 'div-sum',
                label: 'Chia hai vế cho tổng khối lượng $(m_1 + m_2)$',
                resultLatex: 'a = \\dfrac{g(m_2 - m_1\\sin\\alpha - \\mu m_1\\cos\\alpha)}{m_1 + m_2}',
                optimal: true,
                feedback: 'Hoàn hảo! Bạn đã rút được công thức tổng quát cho gia tốc $a$.',
              },
              {
                id: 'div-m1',
                label: 'Chia hai vế cho $m_1$',
                resultLatex: 'a = \\dfrac{g(m_2 - m_1\\sin\\alpha - \\mu m_1\\cos\\alpha)}{m_1}',
                optimal: false,
                feedback: 'Chưa đúng: vế phải là $(m_1 + m_2)a$ vì cả hai vật cùng có gia tốc $a$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Thế $F_{ms} = \\mu m_1 g\\cos\\alpha$ rồi cộng vế $(1\') + (2)$ để khử $T$: $a = \\dfrac{g(m_2 - m_1\\sin\\alpha - \\mu m_1\\cos\\alpha)}{m_1 + m_2}$. Từ (2) suy ra $T = m_2(g - a)$ và $F = 2T\\cos\\dfrac{90^\\circ - \\alpha}{2}$.',
      },
      {
        id: 'se-3-1-numeric',
        kind: 'numeric-unit',
        title: 'Kiểm chứng biên & Tính giá trị số',
        prompt:
          'Trước khi thay số, kiểm tra công thức chữ ở trường hợp đặc biệt rồi tính các đại lượng $a, T, F$ (lấy $g = 9{,}8\\text{ m/s}^2$, làm tròn 1–2 chữ số thập phân).',
        theoryAnchorIds: ['elim-tension'],
        limitingCheck: {
          prompt:
            'Nếu đặt mặt nghiêng dựng thẳng đứng ($\\alpha = 90^\\circ$) và bỏ qua ma sát ($\\mu = 0$), công thức $a = \\dfrac{g(m_2 - m_1\\sin\\alpha - \\mu m_1\\cos\\alpha)}{m_1 + m_2}$ rút gọn về kết quả nào?',
          choices: [
            {
              id: 'atwood',
              label: '$a = g\\dfrac{m_2 - m_1}{m_1 + m_2}$ (đúng bằng gia tốc máy Atwood treo hai vật thẳng đứng)',
              rationale: 'Chính xác! Vì $\\sin 90^\\circ = 1, \\cos 90^\\circ = 0$, công thức tự khớp với máy Atwood kinh điển.',
            },
            {
              id: 'zero',
              label: '$a = 0$ với mọi khối lượng',
              rationale: 'Chưa đúng: khi $\\alpha = 90^\\circ$, $\\sin 90^\\circ = 1$, nên $a$ chỉ bằng 0 khi $m_1 = m_2$.',
            },
          ],
          answerId: 'atwood',
        },
        fields: [
          {
            id: 'a',
            label: 'Gia tốc hệ vật',
            symbolLatex: 'a',
            expected: 0.47,
            tolerance: 0.04,
            toleranceMode: 'absolute',
            unit: 'm/s²',
          },
          {
            id: 'T',
            label: 'Lực căng dây',
            symbolLatex: 'T',
            expected: 18.7,
            tolerance: 0.4,
            toleranceMode: 'absolute',
            unit: 'N',
          },
          {
            id: 'F',
            label: 'Áp lực lên ròng rọc',
            symbolLatex: 'F',
            expected: 32.3,
            tolerance: 0.7,
            toleranceMode: 'absolute',
            unit: 'N',
          },
        ],
        explanation:
          'Thay số: $a = \\dfrac{9{,}8(2 - 3\\cdot 0{,}5 - 0{,}1\\cdot 3\\cdot 0{,}866)}{5} \\approx 0{,}47\\text{ m/s}^2$; $T = 2(9{,}8 - 0{,}47) \\approx 18{,}7\\text{ N}$; $F = 2T\\cos 30^\\circ \\approx 32{,}3\\text{ N}$.',
        summaryTemplate:
          'Kiểm chứng biên tại $\\alpha = 90^\\circ, \\mu = 0$ khớp máy Atwood. Thay số thu được $a \\approx 0{,}47\\text{ m/s}^2$, $T \\approx 18{,}7\\text{ N}$, $F \\approx 32{,}3\\text{ N}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/ch3.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-8-1',
    lessonId: 'phy1159-t8-1',
    kind: 'semi-essay',
    title: 'Phân tích bản đồ nhiệt 2D, chiều dòng nhiệt & cân bằng nhiệt',
    fadeLevel: 0,
    prompt:
      'Xét một tấm kim loại phẳng đồng chất có trường nhiệt độ dừng $T(x, y)$ (đơn vị $^\\circ\\text{C}$) đo trên lưới $3 \\times 4$ như bản đồ nhiệt bên phải (mép trái tiếp xúc nguồn nóng, mép phải tiếp xúc nguồn lạnh). Hãy xác định vùng đẳng nhiệt, hướng dòng nhiệt theo định luật Fourier, và tính nhiệt độ cân bằng $t_{cb}$ khi thả một khối nhôm $m_1 = 0{,}5\\text{ kg}$ ở $t_1 = 90^\\circ\\text{C}$ ($c_1 = 880\\text{ J/(kg}\\cdot\\text{K)}$) vào $m_2 = 1{,}0\\text{ kg}$ nước ở $t_2 = 20^\\circ\\text{C}$ ($c_2 = 4200\\text{ J/(kg}\\cdot\\text{K)}$) trong bình cách nhiệt.',
    given: [
      { symbolLatex: 'm_1', value: '0,5', unit: 'kg', label: 'Khối lượng nhôm' },
      { symbolLatex: 'c_1', value: '880', unit: 'J/(kg·K)', label: 'Nhiệt dung riêng nhôm' },
      { symbolLatex: 't_1', value: '90', unit: '°C', label: 'Nhiệt độ đầu của nhôm' },
      { symbolLatex: 'm_2', value: '1,0', unit: 'kg', label: 'Khối lượng nước' },
      { symbolLatex: 'c_2', value: '4200', unit: 'J/(kg·K)', label: 'Nhiệt dung riêng nước' },
      { symbolLatex: 't_2', value: '20', unit: '°C', label: 'Nhiệt độ đầu của nước' },
    ],
    theoryAnchors: [
      {
        id: 'zeroth-law',
        title: 'Nguyên lý số 0 & Chiều truyền nhiệt tự phát',
        formula: '\\vec{q} = -k \\nabla T',
        summary:
          'Nhiệt độ là đại lượng trạng thái đặc trưng cho trạng thái cân bằng nhiệt. Khi có chênh lệch nhiệt độ, nhiệt lượng tự phát truyền từ nơi nhiệt độ cao sang nơi nhiệt độ thấp (ngược chiều gradient $\\nabla T$).',
        conditions: [
          'Các điểm có cùng nhiệt độ tạo thành đường đẳng nhiệt; dòng nhiệt $\\vec{q}$ vuông góc với đường đẳng nhiệt.',
          'Khi hai vật đạt cân bằng nhiệt ($T_1 = T_2$), dòng nhiệt ròng giữa chúng bằng không.',
        ],
      },
      {
        id: 'heat-balance',
        title: 'Phương trình cân bằng nhiệt cho hệ cô lập',
        formula: 'Q_{\\text{tỏa}} + Q_{\\text{thu}} = 0 \\iff m_1 c_1 (t_{cb} - t_1) + m_2 c_2 (t_{cb} - t_2) = 0',
        summary:
          'Trong bình cách nhiệt (không trao đổi nhiệt với môi trường và không chuyển pha), tổng đại số nhiệt lượng trao đổi giữa các vật bằng không.',
        conditions: [
          'Nhiệt độ cân bằng luôn nằm giữa nhiệt độ ban đầu của hai vật: $t_2 < t_{cb} < t_1$.',
          'Chú ý độ chênh nhiệt độ tính theo $^\\circ\\text{C}$ và $\\text{K}$ có giá trị bằng nhau ($\\Delta t = \\Delta T$).',
        ],
      },
    ],
    steps: [
      {
        id: 'se-8-1-isotherm',
        kind: 'diagram',
        title: 'Nhận diện đường đẳng nhiệt nóng nhất trên bản đồ nhiệt',
        prompt:
          'Quan sát bản đồ phân bố nhiệt độ $T(x, y)$ bên dưới. Hãy chọn **tất cả các ô** nằm trên đường đẳng nhiệt $T = 90^\\circ\\text{C}$ (mép tiếp xúc nguồn nóng).',
        theoryAnchorIds: ['zeroth-law'],
        diagramKind: 'heatmap',
        spec: {
          kind: 'heatmap',
          mode: 'select-cells',
          rows: 3,
          cols: 4,
          values: [
            [90, 65, 40, 20],
            [90, 65, 40, 20],
            [90, 65, 40, 20],
          ],
          unit: '°C',
          xLabel: 'Khoảng cách x (cm)',
          yLabel: 'Vị trí y (cm)',
          rowLabels: ['y1', 'y2', 'y3'],
          colLabels: ['x1', 'x2', 'x3', 'x4'],
          note: 'Click hoặc dùng phím mũi tên + Space để chọn các ô có cùng nhiệt độ 90°C.',
          expectedCells: ['0-0', '1-0', '2-0'],
          cellRationale: 'Chính xác! Cột x1 gồm 3 ô cùng ở 90°C tạo thành một đường đẳng nhiệt thẳng đứng.',
        },
        summaryTemplate:
          'Trên bản đồ nhiệt $T(x,y)$, các ô cùng nhiệt độ $90^\\circ\\text{C}$ nằm dọc theo cột $x_1$, tạo thành đường đẳng nhiệt thẳng đứng.',
      },
      {
        id: 'se-8-1-flow',
        kind: 'diagram',
        title: 'Xác định vectơ chiều dòng nhiệt trên bản đồ nhiệt',
        prompt:
          'Tại hai điểm **M** và **N** trong lòng tấm kim loại, chọn hướng của vectơ dòng nhiệt $\\vec{q} = -k\\nabla T$.',
        theoryAnchorIds: ['zeroth-law'],
        diagramKind: 'heatmap',
        spec: {
          kind: 'heatmap',
          mode: 'place-flow',
          rows: 3,
          cols: 4,
          values: [
            [90, 65, 40, 20],
            [90, 65, 40, 20],
            [90, 65, 40, 20],
          ],
          unit: '°C',
          xLabel: 'Khoảng cách x (cm)',
          yLabel: 'Vị trí y (cm)',
          rowLabels: ['y1', 'y2', 'y3'],
          colLabels: ['x1', 'x2', 'x3', 'x4'],
          note: 'Bấm điểm M hoặc N trên bản đồ rồi chọn hướng truyền nhiệt tương ứng.',
          flowPoints: [
            {
              id: 'M',
              row: 0,
              col: 1,
              label: 'M',
              expectedAngle: 0,
              toleranceDeg: 25,
              hint: 'Nhiệt độ giảm từ trái (90°C) sang phải (20°C), nên dòng nhiệt hướng sang phải (→).',
            },
            {
              id: 'N',
              row: 2,
              col: 2,
              label: 'N',
              expectedAngle: 0,
              toleranceDeg: 25,
              hint: 'Các đường đẳng nhiệt thẳng đứng nên dòng nhiệt vuông góc với chúng, hướng sang phải (→).',
            },
          ],
        },
        summaryTemplate:
          'Theo định luật Fourier $\\vec{q} = -k\\nabla T$, dòng nhiệt vuông góc các đường đẳng nhiệt và hướng từ vùng nóng (trái) sang vùng lạnh (phải).',
      },
      {
        id: 'se-8-1-transform',
        kind: 'equation-transform',
        title: 'Biến đổi phương trình cân bằng nhiệt để cô lập nhiệt độ cân bằng',
        prompt:
          'Từ phương trình cân bằng nhiệt của hệ nhôm + nước trong bình cách nhiệt, biến đổi bằng chữ để rút ra công thức tính $t_{cb}$.',
        theoryAnchorIds: ['heat-balance'],
        initialEquations: [
          { label: '(1)', latex: 'm_1 c_1 (t_{cb} - t_1) + m_2 c_2 (t_{cb} - t_2) = 0' },
        ],
        goalLatex: 't_{cb} = \\dfrac{m_1 c_1 t_1 + m_2 c_2 t_2}{m_1 c_1 + m_2 c_2}',
        stages: [
          {
            id: 'st-group',
            prompt: 'Khai triển và gom các số hạng chứa ẩn $t_{cb}$ về vế trái:',
            operations: [
              {
                id: 'group-tcb',
                label: 'Gom hệ số của $t_{cb}$ sang vế trái, chuyển $m_1 c_1 t_1 + m_2 c_2 t_2$ sang vế phải',
                resultLatex: '(m_1 c_1 + m_2 c_2)\\,t_{cb} = m_1 c_1 t_1 + m_2 c_2 t_2',
                optimal: true,
                feedback: 'Chính xác! Cả hai số hạng mang dấu trừ khi chuyển vế đều đổi sang dấu cộng.',
              },
              {
                id: 'wrong-sign',
                label: 'Chuyển vế nhưng giữ nguyên dấu trừ: $(m_1 c_1 + m_2 c_2)t_{cb} = -(m_1 c_1 t_1 + m_2 c_2 t_2)$',
                resultLatex: '(m_1 c_1 + m_2 c_2)\\,t_{cb} = -(m_1 c_1 t_1 + m_2 c_2 t_2)',
                optimal: false,
                feedback: 'Sai dấu khi chuyển vế! Kết quả này sẽ cho $t_{cb}$ âm, vô lý về mặt vật lý.',
              },
            ],
          },
          {
            id: 'st-div',
            prompt: 'Cô lập $t_{cb}$:',
            operations: [
              {
                id: 'div-cap',
                label: 'Chia hai vế cho tổng nhiệt dung $(m_1 c_1 + m_2 c_2)$',
                resultLatex: 't_{cb} = \\dfrac{m_1 c_1 t_1 + m_2 c_2 t_2}{m_1 c_1 + m_2 c_2}',
                optimal: true,
                feedback: 'Chính xác! Đây là trung bình cộng có trọng số theo nhiệt dung $C_i = m_i c_i$.',
              },
              {
                id: 'div-mass',
                label: 'Chia hai vế cho $(m_1 + m_2)$',
                resultLatex: 't_{cb} = \\dfrac{m_1 c_1 t_1 + m_2 c_2 t_2}{m_1 + m_2}',
                optimal: false,
                feedback: 'Sai thứ nguyên: tử có đơn vị J·°C/(K) còn mẫu chỉ có kg, chưa khử được nhiệt dung riêng $c$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Từ $m_1 c_1 (t_{cb} - t_1) + m_2 c_2 (t_{cb} - t_2) = 0$ suy ra $t_{cb} = \\dfrac{m_1 c_1 t_1 + m_2 c_2 t_2}{m_1 c_1 + m_2 c_2}$.',
      },
      {
        id: 'se-8-1-numeric',
        kind: 'numeric-unit',
        title: 'Kiểm chứng biên & Tính nhiệt độ cân bằng',
        prompt: 'Kiểm tra ý nghĩa vật lý của công thức và tính giá trị $t_{cb}$.',
        theoryAnchorIds: ['heat-balance'],
        limitingCheck: {
          prompt: 'Vì nhiệt dung của nước ($m_2 c_2 = 4200\\text{ J/K}$) lớn gấp gần 10 lần nhôm ($m_1 c_1 = 440\\text{ J/K}$), giá trị $t_{cb}$ phải nằm gần mức nào hơn?',
          choices: [
            {
              id: 'near-water',
              label: 'Gần nhiệt độ ban đầu của nước ($20^\\circ\\text{C}$) hơn nhiều so với $90^\\circ\\text{C}$',
              rationale: 'Đúng! Nhiệt dung càng lớn thì vật thay đổi nhiệt độ càng ít khi trao đổi cùng một nhiệt lượng.',
            },
            {
              id: 'mid',
              label: 'Đúng chính giữa hai nhiệt độ ($55^\\circ\\text{C}$)',
              rationale: 'Chỉ đúng giữa khi $m_1 c_1 = m_2 c_2$. Ở đây nhiệt dung của nước lớn hơn rất nhiều.',
            },
          ],
          answerId: 'near-water',
        },
        fields: [
          {
            id: 'tcb',
            label: 'Nhiệt độ cân bằng',
            symbolLatex: 't_{cb}',
            expected: 26.6,
            tolerance: 0.3,
            toleranceMode: 'absolute',
            unit: '°C',
          },
        ],
        explanation:
          'Thay số: $t_{cb} = \\dfrac{0{,}5\\cdot 880\\cdot 90 + 1{,}0\\cdot 4200\\cdot 20}{0{,}5\\cdot 880 + 1{,}0\\cdot 4200} = \\dfrac{39600 + 84000}{4640} \\approx 26{,}6^\\circ\\text{C}$.',
        summaryTemplate:
          'Thay số thu được $t_{cb} \\approx 26{,}6^\\circ\\text{C}$ (nằm gần $20^\\circ\\text{C}$ đúng như dự đoán theo nhiệt dung).',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/thermo.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from PHY1159 thermodynamics curriculum.',
    },
  },
  {
    id: 'phy1159-se-2-1',
    lessonId: 'phy1159-t2-1',
    kind: 'semi-essay',
    title: 'Bài 2.1: Quãng đường và gia tốc từ đồ thị vận tốc v(t)',
    fadeLevel: 0,
    prompt:
      'Một người chạy đua có vận tốc thay đổi theo thời gian được biểu diễn bởi đồ thị $v(t)$ gấp khúc qua các điểm $(0; 0)$, $(2; 8)$, $(10; 8)$, $(12; 4)$ và $(16; 4)$ (với $t$ tính bằng $\\text{s}$ và $v$ tính bằng $\\text{m/s}$). Hãy phân tích các giai đoạn chuyển động trên đồ thị và xác định tổng quãng đường người đó chạy được trong $16\\text{ s}$.',
    given: [
      { symbolLatex: 't_{\\text{tổng}}', value: '16', unit: 's', label: 'Tổng thời gian chạy' },
      { symbolLatex: 'v_{\\max}', value: '8', unit: 'm/s', label: 'Vận tốc cực đại' },
      { symbolLatex: 'v_{\\text{cuối}}', value: '4', unit: 'm/s', label: 'Vận tốc giai đoạn cuối' },
    ],
    theoryAnchors: [
      {
        id: 'vt-meaning',
        title: 'Ý nghĩa hình học của đồ thị vận tốc v(t)',
        formula: 's = \\int_{t_1}^{t_2} v(t)\\,dt, \\qquad a(t) = \\dfrac{dv}{dt}',
        summary:
          'Trên đồ thị $v(t)$ khi $v \\ge 0$, quãng đường đi được bằng diện tích hình phẳng giới hạn bởi đường biểu diễn $v(t)$ và trục thời gian $Ot$; còn gia tốc tức thời bằng độ dốc (hệ số góc) của đường đồ thị.',
        conditions: [
          'Đoạn nằm ngang ($\\text{độ dốc} = 0$) ứng với chuyển động thẳng đều ($a = 0$).',
          'Đoạn đi lên ứng với $a > 0$ (nhanh dần), đoạn đi xuống ứng với $a < 0$ (chậm dần).',
          'Với đồ thị gấp khúc, chia miền diện tích thành các tam giác, hình chữ nhật và hình thang để tính chính xác.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-2-1-concept',
        kind: 'choice-reasoning',
        title: 'Liên hệ đại lượng hình học trên đồ thị v(t)',
        prompt: 'Trên đồ thị $v(t)$ (với $v \\ge 0$), quãng đường đi được trong khoảng $[0, 16\\text{ s}]$ tương ứng với đại lượng hình học nào?',
        theoryAnchorIds: ['vt-meaning'],
        choices: [
          {
            id: 'area',
            label: 'Diện tích phần nằm dưới đường biểu diễn $v(t)$ giới hạn bởi trục thời gian $Ot$',
            rationale: 'Chính xác! Trong mỗi khoảng ngắn $\\Delta t$, quãng đường $v\\,\\Delta t$ chính là diện tích một dải hình chữ nhật hẹp dưới đồ thị.',
          },
          {
            id: 'slope',
            label: 'Độ dốc (hệ số góc) của từng đoạn thẳng trên đồ thị',
            rationale: 'Độ dốc của đồ thị $v(t)$ là gia tốc $a = dv/dt$, không phải quãng đường.',
          },
          {
            id: 'vmax-t',
            label: 'Tích $v_{\\max} \\cdot 16\\text{ s}$',
            rationale: 'Chỉ đúng nếu người chạy giữ nguyên vận tốc $8\\text{ m/s}$ suốt cả $16\\text{ s}$.',
          },
        ],
        answers: ['area'],
        summaryTemplate: 'Quãng đường đi được bằng diện tích miền giới hạn bởi đồ thị $v(t)$ và trục thời gian $Ot$: $s = \\int_0^{16} v(t)\\,dt$.',
      },
      {
        id: 'se-2-1-graph',
        kind: 'diagram',
        title: 'Nhận diện giai đoạn chuyển động thẳng đều trên đồ thị v(t)',
        prompt:
          'Quan sát đồ thị $v(t)$ đã chia thành 4 miền diện tích cơ bản (tam giác, chữ nhật, hình thang, chữ nhật). Hãy chọn **tất cả các đoạn** mà người chạy chuyển động thẳng đều ($a = 0$).',
        theoryAnchorIds: ['vt-meaning'],
        diagramKind: 'curve-2d',
        spec: {
          kind: 'curve-2d',
          mode: 'select-regions',
          xLabel: 't',
          yLabel: 'v',
          xUnit: 's',
          yUnit: 'm/s',
          xMax: 16,
          yMax: 10,
          shadeUnderCurve: true,
          note: 'Click trực tiếp lên miền diện tích trên đồ thị hoặc bấm các nút giai đoạn bên dưới.',
          points: [
            { x: 0, y: 0, label: '0' },
            { x: 2, y: 8, label: 'A' },
            { x: 10, y: 8, label: 'B' },
            { x: 12, y: 4, label: 'C' },
            { x: 16, y: 4, label: 'D' },
          ],
          segments: [
            { id: 'seg-1', label: '0–2 s (Tam giác, tăng tốc)', fromIndex: 0, toIndex: 1, areaLabel: 'S1' },
            { id: 'seg-2', label: '2–10 s (Chữ nhật, v = 8 m/s)', fromIndex: 1, toIndex: 2, areaLabel: 'S2' },
            { id: 'seg-3', label: '10–12 s (Hình thang, giảm tốc)', fromIndex: 2, toIndex: 3, areaLabel: 'S3' },
            { id: 'seg-4', label: '12–16 s (Chữ nhật, v = 4 m/s)', fromIndex: 3, toIndex: 4, areaLabel: 'S4' },
          ],
          expectedSegmentIds: ['seg-2', 'seg-4'],
          regionRationale: 'Chính xác! Hai đoạn 2–10 s và 12–16 s nằm ngang (độ dốc = 0) ứng với chuyển động thẳng đều.',
        },
        summaryTemplate: 'Đồ thị chia thành 4 miền: tam giác $S_1$ (0–2 s), chữ nhật $S_2$ (2–10 s, thẳng đều), hình thang $S_3$ (10–12 s), và chữ nhật $S_4$ (12–16 s, thẳng đều).',
      },
      {
        id: 'se-2-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính diện tích từng miền và tổng quãng đường',
        prompt: 'Tính diện tích miền hình thang $S_3$ (giai đoạn $10$–$12\\text{ s}$) và tổng quãng đường $s$ trong cả $16\\text{ s}$.',
        theoryAnchorIds: ['vt-meaning'],
        fields: [
          {
            id: 's3',
            label: 'Quãng đường giai đoạn 10–12 s',
            symbolLatex: 'S_3',
            expected: 12,
            tolerance: 0.2,
            toleranceMode: 'absolute',
            unit: 'm',
          },
          {
            id: 'total',
            label: 'Tổng quãng đường',
            symbolLatex: 's',
            expected: 100,
            tolerance: 0.5,
            toleranceMode: 'absolute',
            unit: 'm',
          },
        ],
        explanation:
          'Diện tích từng miền: $S_1 = \\tfrac{1}{2}\\cdot 2\\cdot 8 = 8\\text{ m}$; $S_2 = 8\\cdot 8 = 64\\text{ m}$; $S_3 = \\tfrac{1}{2}(8 + 4)\\cdot 2 = 12\\text{ m}$; $S_4 = 4\\cdot 4 = 16\\text{ m}$. Tổng $s = 8 + 64 + 12 + 16 = 100\\text{ m}$.',
        summaryTemplate: 'Tính tổng diện tích: $s = 8 + 64 + 12 + 16 = 100\\text{ m}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/ch2.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-4-1',
    lessonId: 'phy1159-t4-1',
    kind: 'semi-essay',
    title: 'Bài 4.1: Ném vật lên dốc có ma sát (Biểu đồ năng lượng LOL)',
    fadeLevel: 0,
    prompt:
      'Một vật khối lượng $m = 2\\text{ kg}$ được ném lên dọc theo mặt phẳng nghiêng góc $\\alpha = 30^\\circ$ với vận tốc ban đầu $v_0 = 10\\text{ m/s}$. Hệ số ma sát trượt giữa vật và mặt dốc là $\\mu = 0{,}2$. Lấy $g = 9{,}8\\text{ m/s}^2$. Dùng phương pháp năng lượng xác định quãng đường $S$ vật đi được đến khi dừng lại và công $A_{ms}$ của lực ma sát trên đoạn đường đó.',
    given: [
      { symbolLatex: 'm', value: '2', unit: 'kg', label: 'Khối lượng vật' },
      { symbolLatex: 'v_0', value: '10', unit: 'm/s', label: 'Vận tốc ném đầu' },
      { symbolLatex: '\\alpha', value: '30', unit: '°', label: 'Góc nghiêng' },
      { symbolLatex: '\\mu', value: '0,2', label: 'Hệ số ma sát trượt' },
      { symbolLatex: 'g', value: '9,8', unit: 'm/s²', label: 'Gia tốc trọng trường' },
    ],
    theoryAnchors: [
      {
        id: 'work-energy',
        title: 'Định lý biến thiên cơ năng & Biểu đồ LOL',
        formula: '(K_2 + U_2) - (K_1 + U_1) = A_{\\text{không thế}} = A_{ms}',
        summary:
          'Chọn hệ gồm Vật + Trái Đất (mặt phẳng nghiêng ngoài hệ): trọng lực là nội lực thế (tính vào thế năng $U = mgh$), phản lực vuông góc chuyển động không sinh công, còn lực ma sát sinh công âm làm giảm cơ năng hệ.',
        conditions: [
          'Chọn mốc thế năng tại chân dốc: $U_1 = 0$, tại vị trí dừng sau quãng đường $S$: $h = S\\sin\\alpha \\Rightarrow U_2 = mgS\\sin\\alpha$.',
          'Công của lực ma sát trượt trên đoạn dốc dài $S$: $A_{ms} = -\\mu N S = -\\mu mgS\\cos\\alpha < 0$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-4-1-sign',
        kind: 'choice-reasoning',
        title: 'Xác định dấu công của lực ma sát và phản lực',
        prompt: 'Khi vật trượt lên dọc mặt phẳng nghiêng, công của lực ma sát $A_{ms}$ mang dấu nào?',
        theoryAnchorIds: ['work-energy'],
        choices: [
          {
            id: 'neg',
            label: 'Âm ($A_{ms} < 0$)',
            rationale: 'Đúng! Lực ma sát luôn ngược chiều dịch chuyển ($\\theta = 180^\\circ$) nên $A_{ms} = F_{ms} S \\cos 180^\\circ < 0$, làm tiêu hao cơ năng thành nhiệt.',
          },
          {
            id: 'pos',
            label: 'Dương ($A_{ms} > 0$)',
            rationale: 'Sai: lực ma sát cản trở chuyển động đi lên, không đẩy vật đi lên.',
          },
          {
            id: 'zero',
            label: 'Bằng không ($A_{ms} = 0$)',
            rationale: 'Chỉ phản lực $\\vec{N}$ vuông góc với phương dịch chuyển mới có công bằng không.',
          },
        ],
        answers: ['neg'],
        summaryTemplate: 'Lực ma sát ngược chiều chuyển động nên sinh công âm $A_{ms} = -\\mu mgS\\cos\\alpha < 0$; phản lực vuông góc chuyển động nên $A_N = 0$.',
      },
      {
        id: 'se-4-1-lol',
        kind: 'diagram',
        title: 'Lập biểu đồ cột năng lượng LOL',
        prompt:
          'Xây dựng biểu đồ LOL cho hệ **Vật + Trái Đất** (mốc thế năng ở chân dốc) từ lúc ném đến lúc vật dừng ở điểm cao nhất. Chú ý tổng số vạch năng lượng phải phản ánh đúng sự tiêu hao do công ma sát âm!',
        theoryAnchorIds: ['work-energy'],
        diagramKind: 'balance-flow',
        spec: {
          kind: 'balance-flow',
          systemLabel: 'Hệ: Vật + Trái Đất',
          initialLabel: 'Lúc ném (chân dốc)',
          finalLabel: 'Điểm dừng cao nhất',
          maxLevel: 4,
          note: 'Điều chỉnh số vạch (+ / −) cho các cột năng lượng đầu, cuối và chọn dấu công lực ma sát ở giữa.',
          initialBars: [
            { id: 'K1', label: 'Động năng đầu', symbolLatex: 'K_1', expectedState: 'positive', hint: 'Lúc ném vật có vận tốc v₀ = 10 m/s nên K₁ > 0.' },
            { id: 'U1', label: 'Thế năng đầu', symbolLatex: 'U_1', expectedState: 'zero', hint: 'Chọn mốc thế năng tại chân dốc nên U₁ = 0.' },
          ],
          finalBars: [
            { id: 'K2', label: 'Động năng cuối', symbolLatex: 'K_2', expectedState: 'zero', hint: 'Tại điểm dừng cao nhất v = 0 nên K₂ = 0.' },
            { id: 'U2', label: 'Thế năng cuối', symbolLatex: 'U_2', expectedState: 'positive', hint: 'Vật ở độ cao h = S sin α > 0 nên U₂ > 0, và nhỏ hơn K₁ do ma sát.' },
          ],
          transferLabel: 'Công ma sát',
          transferSymbolLatex: 'A_{ms}',
          expectedTransferSign: '-',
          transferHint: 'Ma sát làm giảm cơ năng hệ nên Ams mang dấu âm (−).',
          requireConservation: true,
        },
        summaryTemplate: 'Biểu đồ LOL: đầu có $K_1 = \\tfrac{1}{2}mv_0^2, U_1 = 0$; công ma sát $A_{ms} < 0$; cuối có $K_2 = 0, U_2 = mgS\\sin\\alpha < K_1$.',
      },
      {
        id: 'se-4-1-transform',
        kind: 'equation-transform',
        title: 'Biến đổi phương trình năng lượng để rút quãng đường S',
        prompt: 'Từ phương trình định lý cơ năng (hoặc định lý động năng), rút ra công thức chữ cho quãng đường $S$.',
        theoryAnchorIds: ['work-energy'],
        initialEquations: [
          { label: '(1)', latex: 'mgS\\sin\\alpha - \\dfrac{1}{2}mv_0^2 = -\\mu mgS\\cos\\alpha' },
        ],
        goalLatex: 'S = \\dfrac{v_0^2}{2g(\\sin\\alpha + \\mu\\cos\\alpha)}',
        stages: [
          {
            id: 'st-cancel-m',
            prompt: 'Rút gọn khối lượng $m$ và gom các số hạng chứa $S$ về một vế:',
            operations: [
              {
                id: 'group-s',
                label: 'Khử $m$ ở hai vế và chuyển $-\\mu gS\\cos\\alpha$ sang vế trái',
                resultLatex: 'gS(\\sin\\alpha + \\mu\\cos\\alpha) = \\dfrac{1}{2}v_0^2',
                canceledLatex: 'm',
                optimal: true,
                feedback: 'Chính xác! Khối lượng $m$ tự triệt tiêu — quãng đường dừng $S$ không phụ thuộc khối lượng vật.',
              },
              {
                id: 'wrong-sign-s',
                label: 'Chuyển vế nhưng giữ dấu trừ: $gS(\\sin\\alpha - \\mu\\cos\\alpha) = \\tfrac{1}{2}v_0^2$',
                resultLatex: 'gS(\\sin\\alpha - \\mu\\cos\\alpha) = \\dfrac{1}{2}v_0^2',
                optimal: false,
                feedback: 'Sai dấu khi chuyển vế! Ma sát tăng thêm cản trở nên $S$ phải nhỏ đi (mẫu phải là $\\sin\\alpha + \\mu\\cos\\alpha$).',
              },
            ],
          },
          {
            id: 'st-div-s',
            prompt: 'Cô lập quãng đường $S$:',
            operations: [
              {
                id: 'isolate-s',
                label: 'Chia hai vế cho $g(\\sin\\alpha + \\mu\\cos\\alpha)$',
                resultLatex: 'S = \\dfrac{v_0^2}{2g(\\sin\\alpha + \\mu\\cos\\alpha)}',
                optimal: true,
                feedback: 'Hoàn hảo! Bạn đã rút xong công thức chữ cho $S$.',
              },
            ],
          },
        ],
        summaryTemplate: 'Biến đổi định lý cơ năng: $gS(\\sin\\alpha + \\mu\\cos\\alpha) = \\tfrac{1}{2}v_0^2 \\Rightarrow S = \\dfrac{v_0^2}{2g(\\sin\\alpha + \\mu\\cos\\alpha)}$.',
      },
      {
        id: 'se-4-1-numeric',
        kind: 'numeric-unit',
        title: 'Kiểm chứng biên & Tính giá trị S, A_ms',
        prompt: 'Kiểm tra công thức khi không có ma sát rồi thay số tính $S$ và $A_{ms}$.',
        theoryAnchorIds: ['work-energy'],
        limitingCheck: {
          prompt: 'Nếu bỏ qua ma sát ($\\mu = 0$) và ném thẳng đứng lên ($\\alpha = 90^\\circ$), công thức $S = \\dfrac{v_0^2}{2g(\\sin\\alpha + \\mu\\cos\\alpha)}$ rút gọn về gì?',
          choices: [
            {
              id: 'hmax',
              label: '$S = \\dfrac{v_0^2}{2g}$ (đúng bằng độ cao cực đại khi ném thẳng đứng lên)',
              rationale: 'Chính xác! Vì $\\sin 90^\\circ = 1$ và $\\mu = 0$.',
            },
            {
              id: 'inf',
              label: '$S \\to \\infty$',
              rationale: 'Chưa đúng: vẫn còn trọng lực kéo lại với $\\sin 90^\\circ = 1$.',
            },
          ],
          answerId: 'hmax',
        },
        fields: [
          {
            id: 'S',
            label: 'Quãng đường đến khi dừng',
            symbolLatex: 'S',
            expected: 7.58,
            tolerance: 0.2,
            toleranceMode: 'absolute',
            unit: 'm',
          },
          {
            id: 'Ams',
            label: 'Công lực ma sát',
            symbolLatex: 'A_{ms}',
            expected: -25.7,
            tolerance: 0.8,
            toleranceMode: 'absolute',
            unit: 'J',
          },
        ],
        explanation:
          'Thay số: $S = \\dfrac{10^2}{2\\cdot 9{,}8(\\sin 30^\\circ + 0{,}2\\cos 30^\\circ)} \\approx 7{,}58\\text{ m}$; $A_{ms} = -0{,}2\\cdot 2\\cdot 9{,}8\\cdot \\cos 30^\\circ \\cdot 7{,}58 \\approx -25{,}7\\text{ J}$.',
        summaryTemplate: 'Kiểm chứng biên khớp ném thẳng đứng ($v_0^2/2g$). Thay số: $S \\approx 7{,}58\\text{ m}$, $A_{ms} \\approx -25{,}7\\text{ J}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/ch4.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-9-1',
    lessonId: 'phy1159-t9-1',
    kind: 'semi-essay',
    title: 'Chu trình khí lý tưởng trên đồ thị P–V & Bảng dấu ΔU, A, Q',
    fadeLevel: 0,
    prompt:
      'Một lượng khí lý tưởng đơn nguyên tử ($i = 3$) thực hiện quá trình $1 \\to 2 \\to 3$ trên giản đồ $P$–$V$: trạng thái $1$ có $(P_1 = 2\\cdot 10^5\\text{ Pa}, V_1 = 2\\text{ L})$, giãn nở đẳng áp sang trạng thái $2$ có $(P_2 = 2\\cdot 10^5\\text{ Pa}, V_2 = 5\\text{ L})$, rồi làm lạnh đẳng tích xuống trạng thái $3$ có $(P_3 = 1\\cdot 10^5\\text{ Pa}, V_3 = 5\\text{ L})$. Hãy xác định dấu của $\\Delta U, A, Q$ trên từng quá trình và tính công $A_{12}$, nhiệt lượng $Q_{12}$ trong quá trình đẳng áp $1 \\to 2$.',
    given: [
      { symbolLatex: 'i', value: '3', label: 'Bậc tự do (khí đơn nguyên tử)' },
      { symbolLatex: 'P_1 = P_2', value: '2 \\times 10^5', unit: 'Pa', label: 'Áp suất quá trình 1→2' },
      { symbolLatex: 'V_1', value: '2', unit: 'L (2×10⁻³ m³)', label: 'Thể tích trạng thái 1' },
      { symbolLatex: 'V_2 = V_3', value: '5', unit: 'L (5×10⁻³ m³)', label: 'Thể tích trạng thái 2, 3' },
      { symbolLatex: 'P_3', value: '1 \\times 10^5', unit: 'Pa', label: 'Áp suất trạng thái 3' },
    ],
    theoryAnchors: [
      {
        id: 'first-law',
        title: 'Nguyên lý I Nhiệt động lực học & Dấu đại lượng',
        formula: 'Q = \\Delta U + A, \\qquad A = \\int P\\,dV, \\qquad \\Delta U = \\dfrac{i}{2}\\nu R\\Delta T',
        summary:
          'Quy ước trong Cơ – Nhiệt HUS: $Q > 0$ hệ nhận nhiệt, $A > 0$ hệ sinh công (giãn nở $dV > 0$), $\\Delta U > 0$ nội năng/nhiệt độ tăng ($\\Delta(PV) > 0$).',
        conditions: [
          'Đẳng áp ($P = \\text{const}$): $A = P(V_2 - V_1)$ và $\\Delta U = \\tfrac{i}{2}P(V_2 - V_1)$.',
          'Đẳng tích ($V = \\text{const}$): $A = 0 \\Rightarrow Q = \\Delta U$.',
          'Chú ý đổi đơn vị thể tích sang hệ SI: $1\\text{ L} = 10^{-3}\\text{ m}^3$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-9-1-pv',
        kind: 'diagram',
        title: 'Điền bảng dấu (ΔU, A, Q) trực tiếp theo đồ thị P–V',
        prompt:
          'Quan sát đường biểu diễn $1 \\to 2$ (đẳng áp giãn nở) và $2 \\to 3$ (đẳng tích giảm áp) trên giản đồ $P$–$V$. Chọn dấu (`+`, `−`, `0`) cho $\\Delta U$, công $A$ hệ sinh ra, và nhiệt lượng $Q$ hệ nhận vào ở từng quá trình.',
        theoryAnchorIds: ['first-law'],
        diagramKind: 'curve-2d',
        spec: {
          kind: 'curve-2d',
          mode: 'sign-matrix',
          xLabel: 'V',
          yLabel: 'P',
          xUnit: 'L',
          yUnit: '10⁵ Pa',
          xMax: 6,
          yMax: 3,
          shadeUnderCurve: true,
          note: 'Di chuột hoặc chọn hàng quá trình để xem đoạn tương ứng trên giản đồ P–V.',
          points: [
            { x: 2, y: 2, label: '1' },
            { x: 5, y: 2, label: '2' },
            { x: 5, y: 1, label: '3' },
          ],
          segments: [
            { id: 'p12', label: '1 → 2 (Đẳng áp giãn nở)', fromIndex: 0, toIndex: 1, areaLabel: 'A₁₂' },
            { id: 'p23', label: '2 → 3 (Đẳng tích giảm áp)', fromIndex: 1, toIndex: 2 },
          ],
          matrixColumns: [
            { id: 'dU', labelLatex: '\\Delta U' },
            { id: 'A', labelLatex: 'A' },
            { id: 'Q', labelLatex: 'Q' },
          ],
          signRows: [
            {
              segmentId: 'p12',
              label: 'Quá trình 1 → 2 (Đẳng áp giãn nở)',
              expectedSigns: { dU: '+', A: '+', Q: '+' },
              hint: 'Giãn nở đẳng áp: V tăng nên A > 0; PV tăng nên T tăng (ΔU > 0); do đó Q = ΔU + A > 0.',
            },
            {
              segmentId: 'p23',
              label: 'Quá trình 2 → 3 (Đẳng tích giảm áp)',
              expectedSigns: { dU: '-', A: '0', Q: '-' },
              hint: 'Đẳng tích: V không đổi nên A = 0; P giảm nên T giảm (ΔU < 0); suy ra Q = ΔU < 0 (hệ tỏa nhiệt).',
            },
          ],
        },
        summaryTemplate: 'Bảng dấu: $1 \\to 2$ có $\\Delta U > 0, A > 0, Q > 0$; $2 \\to 3$ có $A = 0, \\Delta U < 0, Q < 0$.',
      },
      {
        id: 'se-9-1-transform',
        kind: 'equation-transform',
        title: 'Thế phương trình trạng thái để rút biểu thức Q₁₂ theo P và ΔV',
        prompt: 'Kết hợp Nguyên lý I và phương trình khí lý tưởng $PV = \\nu RT$ để biểu diễn $Q_{12}$ trực tiếp qua $P_1, V_1, V_2$ (không cần biết số mol $\\nu$).',
        theoryAnchorIds: ['first-law'],
        initialEquations: [
          { label: '(1)', latex: 'Q_{12} = \\Delta U_{12} + A_{12}' },
          { label: '(2)', latex: '\\Delta U_{12} = \\dfrac{i}{2}\\nu R(T_2 - T_1), \\quad A_{12} = P_1(V_2 - V_1)' },
          { label: '(3)', latex: '\\nu R(T_2 - T_1) = P_1(V_2 - V_1) \\text{ (đẳng áp)}' },
        ],
        goalLatex: 'Q_{12} = \\dfrac{i + 2}{2} P_1 (V_2 - V_1)',
        stages: [
          {
            id: 'st-sub-pv',
            prompt: 'Khử ẩn chưa cho $\\nu R\\Delta T$ khỏi biểu thức $\\Delta U_{12}$:',
            operations: [
              {
                id: 'sub-pv',
                label: 'Thế (3) $\\nu R(T_2 - T_1) = P_1(V_2 - V_1)$ vào $\\Delta U_{12}$ rồi cộng với $A_{12}$',
                resultLatex: 'Q_{12} = \\dfrac{i}{2}P_1(V_2 - V_1) + P_1(V_2 - V_1) = \\dfrac{i + 2}{2}P_1(V_2 - V_1)',
                canceledLatex: '\\nu R\\Delta T',
                optimal: true,
                feedback: 'Chính xác! Với khí đơn nguyên tử ($i = 3$), ta có $Q_{12} = \\tfrac{5}{2} P_1(V_2 - V_1)$.',
              },
              {
                id: 'forget-work',
                label: 'Đặt $Q_{12} = \\Delta U_{12} = \\dfrac{i}{2}P_1(V_2 - V_1)$',
                resultLatex: 'Q_{12} = \\dfrac{i}{2}P_1(V_2 - V_1)',
                optimal: false,
                feedback: 'Bị thiếu công $A_{12}$! Trong quá trình đẳng áp giãn nở, hệ vừa tăng nội năng vừa sinh công đẩy pít-tông.',
              },
            ],
          },
        ],
        summaryTemplate: 'Thế $\\nu R\\Delta T = P_1(V_2 - V_1)$ vào Nguyên lý I thu được $Q_{12} = \\dfrac{i + 2}{2}P_1(V_2 - V_1) = \\dfrac{5}{2}P_1(V_2 - V_1)$.',
      },
      {
        id: 'se-9-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính công A₁₂ và nhiệt lượng Q₁₂ theo đơn vị Joule',
        prompt: 'Chú ý đổi $V_2 - V_1 = 3\\text{ L} = 3 \\times 10^{-3}\\text{ m}^3$ sang hệ SI rồi tính $A_{12}$ và $Q_{12}$.',
        theoryAnchorIds: ['first-law'],
        fields: [
          {
            id: 'A12',
            label: 'Công hệ sinh ra A₁₂',
            symbolLatex: 'A_{12}',
            expected: 600,
            tolerance: 10,
            toleranceMode: 'absolute',
            unit: 'J',
          },
          {
            id: 'Q12',
            label: 'Nhiệt lượng hệ nhận Q₁₂',
            symbolLatex: 'Q_{12}',
            expected: 1500,
            tolerance: 25,
            toleranceMode: 'absolute',
            unit: 'J',
          },
        ],
        explanation:
          'Đổi đơn vị: $\\Delta V = 3\\text{ L} = 3\\cdot 10^{-3}\\text{ m}^3$. Công $A_{12} = 2\\cdot 10^5 \\cdot 3\\cdot 10^{-3} = 600\\text{ J}$. Nhiệt lượng $Q_{12} = \\tfrac{5}{2} A_{12} = 1500\\text{ J}$.',
        summaryTemplate: 'Đổi sang SI thu được $A_{12} = 600\\text{ J}$ và $Q_{12} = 1500\\text{ J}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/thermo.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from PHY1159 thermodynamics curriculum.',
    },
  },
  {
    id: 'phy1159-se-1-1',
    lessonId: 'phy1159-t1-1',
    kind: 'semi-essay',
    title: 'Bài 1.1: Phân tích thứ nguyên con lắc đơn & Sai số phép đo g',
    fadeLevel: 0,
    prompt:
      'Chu kỳ dao động nhỏ $T$ của con lắc đơn có thể phụ thuộc vào chiều dài dây treo $l$, gia tốc trọng trường $g$ và khối lượng quả nặng $m$ theo dạng $T = k\\,l^a g^b m^c$ (với $k$ là hằng số không thứ nguyên). Dùng phương pháp phân tích thứ nguyên để tìm $a, b, c$. Sau đó, với $k = 2\\pi$ và kết quả đo thực nghiệm $l = 1{,}00 \\pm 0{,}01\\text{ m}$, $T = 2{,}01 \\pm 0{,}02\\text{ s}$, hãy tính giá trị trung bình $\\bar{g}$ và sai số tuyệt đối $\\Delta g$.',
    given: [
      { symbolLatex: 'l', value: '1,00 ± 0,01', unit: 'm', label: 'Chiều dài dây treo' },
      { symbolLatex: 'T', value: '2,01 ± 0,02', unit: 's', label: 'Chu kỳ dao động đo được' },
      { symbolLatex: 'k', value: '2\\pi', label: 'Hằng số không thứ nguyên' },
    ],
    theoryAnchors: [
      {
        id: 'dim-analysis',
        title: 'Nguyên lý đồng nhất thứ nguyên',
        formula: '[T] = \\text{T}^1 = \\text{L}^a (\\text{L}\\text{T}^{-2})^b \\text{M}^c',
        summary:
          'Hai vế của mọi phương trình vật lý đúng bắt buộc phải có cùng thứ nguyên theo các đại lượng cơ bản ($\\text{L}, \\text{M}, \\text{T}$).',
        conditions: [
          'Hằng số toán học ($2\\pi$) là đại lượng không thứ nguyên.',
          'Nếu một thứ nguyên cơ bản chỉ xuất hiện ở một thừa số bên vế phải mà không có ở vế trái, số mũ của thừa số đó phải bằng $0$.',
        ],
      },
      {
        id: 'error-prop',
        title: 'Lan truyền sai số phép đo gián tiếp',
        formula: '\\dfrac{\\Delta g}{\\bar{g}} = \\dfrac{\\Delta l}{\\bar{l}} + 2\\dfrac{\\Delta T}{\\bar{T}}',
        summary:
          'Với đại lượng dạng tích/thương lũy thừa $g = 4\\pi^2 l \\cdot T^{-2}$, sai số tương đối tổng hợp bằng tổng các sai số tương đối nhân với trị tuyệt đối số mũ tương ứng.',
        conditions: [
          'Các sai số ngẫu nhiên cộng dồn theo giá trị tuyệt đối trong ước lượng cận trên tuyến tính.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-1-1-mass',
        kind: 'choice-reasoning',
        title: 'Xác định vai trò thứ nguyên của khối lượng m',
        prompt:
          'Quan sát phương trình thứ nguyên $\\text{T}^1 = \\text{L}^{a+b}\\,\\text{T}^{-2b}\\,\\text{M}^c$. Số mũ $c$ của khối lượng $m$ phải nhận giá trị nào?',
        theoryAnchorIds: ['dim-analysis'],
        choices: [
          {
            id: 'c-zero',
            label: '$c = 0$ (chu kỳ không phụ thuộc khối lượng $m$)',
            rationale:
              'Chính xác! Vế trái chỉ có thứ nguyên thời gian $\\text{T}^1$ (tức $\\text{M}^0$), còn bên vế phải chỉ $m$ mang thứ nguyên $\\text{M}$, nên bắt buộc $c = 0$.',
          },
          {
            id: 'c-half',
            label: '$c = 1/2$ (khối lượng lớn dao động chậm hơn)',
            rationale:
              'Sai thứ nguyên: nếu $c = 1/2$ thì vế phải xuất hiện $\\text{M}^{1/2}$ không thể triệt tiêu với vế trái.',
          },
          {
            id: 'c-minus-one',
            label: '$c = -1$',
            rationale:
              'Sai thứ nguyên: không có đại lượng nào khác mang thứ nguyên khối lượng $\\text{M}$ để khử $\\text{M}^{-1}$.',
          },
        ],
        answers: ['c-zero'],
        summaryTemplate:
          'Theo nguyên lý đồng nhất thứ nguyên, vế trái không chứa $\\text{M}$ nên $c = 0$: chu kỳ con lắc đơn độc lập với khối lượng.',
      },
      {
        id: 'se-1-1-transform',
        kind: 'equation-transform',
        title: 'Cân bằng số mũ thứ nguyên để rút công thức T',
        prompt: 'Giải hệ phương trình số mũ cho $\\text{T}$ và $\\text{L}$ để tìm $b, a$ và công thức $T$.',
        theoryAnchorIds: ['dim-analysis'],
        initialEquations: [
          { label: '(1)', latex: '\\text{L}^0 \\text{T}^1 = \\text{L}^{a+b} \\text{T}^{-2b}' },
        ],
        goalLatex: 'a = \\dfrac{1}{2}, \\quad b = -\\dfrac{1}{2} \\Rightarrow T = k\\sqrt{\\dfrac{l}{g}}',
        stages: [
          {
            id: 'st-exp-t',
            prompt: 'Cân bằng số mũ của thứ nguyên thời gian $\\text{T}$:',
            operations: [
              {
                id: 'solve-b',
                label: 'Đặt $-2b = 1 \\Rightarrow b = -\\dfrac{1}{2}$',
                resultLatex: 'b = -\\dfrac{1}{2}',
                optimal: true,
                feedback: 'Đúng! Chỉ có $g$ chứa thứ nguyên $\\text{T}^{-2}$ nên $-2b = 1 \\Rightarrow b = -1/2$.',
              },
              {
                id: 'wrong-b',
                label: 'Đặt $2b = 1 \\Rightarrow b = \\dfrac{1}{2}$',
                resultLatex: 'b = \\dfrac{1}{2}',
                optimal: false,
                feedback: 'Nhầm dấu số mũ của $\\text{T}$ trong gia tốc $[g] = \\text{L}\\text{T}^{-2}$.',
              },
            ],
          },
          {
            id: 'st-exp-l',
            prompt: 'Cân bằng số mũ của thứ nguyên độ dài $\\text{L}$:',
            operations: [
              {
                id: 'solve-a',
                label: 'Đặt $a + b = 0 \\Rightarrow a = -b = \\dfrac{1}{2}$',
                resultLatex: 'a = \\dfrac{1}{2} \\Rightarrow T = k\\sqrt{\\dfrac{l}{g}}',
                optimal: true,
                feedback: 'Chính xác! Ta thu được cấu trúc chuẩn $T = k\\sqrt{l/g}$ chỉ bằng phân tích thứ nguyên.',
              },
              {
                id: 'wrong-a',
                label: 'Đặt $a + b = 1 \\Rightarrow a = \\dfrac{3}{2}$',
                resultLatex: 'a = \\dfrac{3}{2}',
                optimal: false,
                feedback: 'Vế trái là chu kỳ $[T]$ không chứa độ dài $\\text{L}$, nên số mũ của $\\text{L}$ phải bằng $0$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Cân bằng số mũ thu được $b = -1/2$ và $a = 1/2$, suy ra $T = k\\sqrt{l/g}$ và $g = 4\\pi^2 l / T^2$.',
      },
      {
        id: 'se-1-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính giá trị trung bình g và sai số tuyệt đối Δg',
        prompt: 'Từ $g = \\dfrac{4\\pi^2 l}{T^2}$, thay số $l = 1{,}00 \\pm 0{,}01\\text{ m}$ và $T = 2{,}01 \\pm 0{,}02\\text{ s}$ để tính $\\bar{g}$ và $\\Delta g$.',
        theoryAnchorIds: ['error-prop'],
        limitingCheck: {
          prompt: 'Nếu sai số tương đối khi đo chu kỳ $T$ là $1\\%$, nó đóng góp bao nhiêu phần trăm vào sai số tương đối của $g$?',
          choices: [
            {
              id: 'two-pct',
              label: '$2\\%$ (vì $T$ nằm ở lũy thừa bậc $2$)',
              rationale: 'Chính xác! Số mũ $2$ trong $T^2$ nhân đôi sai số tương đối của $T$.',
            },
            {
              id: 'one-pct',
              label: '$1\\%$ (bằng đúng sai số của $T$)',
              rationale: 'Chưa đúng: phải nhân thêm hệ số $|{-2}| = 2$ từ số mũ của $T$.',
            },
          ],
          answerId: 'two-pct',
        },
        fields: [
          {
            id: 'g',
            label: 'Gia tốc trọng trường trung bình',
            symbolLatex: '\\bar{g}',
            expected: 9.77,
            tolerance: 0.05,
            toleranceMode: 'absolute',
            unit: 'm/s²',
          },
          {
            id: 'dg',
            label: 'Sai số tuyệt đối Δg',
            symbolLatex: '\\Delta g',
            expected: 0.29,
            tolerance: 0.03,
            toleranceMode: 'absolute',
            unit: 'm/s²',
          },
        ],
        explanation:
          '$\\bar{g} = \\dfrac{4\\pi^2 \\cdot 1{,}00}{2{,}01^2} \\approx 9{,}77\\text{ m/s}^2$. Sai số tương đối $\\varepsilon_g = \\dfrac{0{,}01}{1{,}00} + 2\\dfrac{0{,}02}{2{,}01} \\approx 0{,}0299 \\Rightarrow \\Delta g = 9{,}77 \\cdot 0{,}0299 \\approx 0{,}29\\text{ m/s}^2$.',
        summaryTemplate: 'Thay số đo thực nghiệm thu được $g = 9{,}77 \\pm 0{,}29\\text{ m/s}^2$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/mech.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-5-1',
    lessonId: 'phy1159-t5-2',
    kind: 'semi-essay',
    title: 'Bài 5.1: Trụ đặc lăn không trượt trên mặt phẳng nghiêng',
    fadeLevel: 0,
    prompt:
      'Một hình trụ đặc đồng chất khối lượng $m = 4\\text{ kg}$, bán kính $R = 0{,}2\\text{ m}$ (mômen quán tính đối với trục đối xứng $I = \\tfrac{1}{2}mR^2$) bắt đầu lăn không trượt từ trạng thái nghỉ xuống một mặt phẳng nghiêng góc $\\alpha = 30^\\circ$ so với phương ngang. Lấy $g = 9{,}8\\text{ m/s}^2$. Hãy xác định gia tốc tịnh tiến $a$ của khối tâm, lực ma sát nghỉ $F_{msn}$ tác dụng lên hình trụ, và vận tốc khối tâm $v$ sau khi lăn được quãng đường $S = 3\\text{ m}$.',
    given: [
      { symbolLatex: 'm', value: '4', unit: 'kg', label: 'Khối lượng hình trụ đặc' },
      { symbolLatex: 'R', value: '0,2', unit: 'm', label: 'Bán kính hình trụ' },
      { symbolLatex: 'I', value: '\\tfrac{1}{2}mR^2', label: 'Mômen quán tính quanh trục' },
      { symbolLatex: '\\alpha', value: '30', unit: '°', label: 'Góc nghiêng mặt phẳng' },
      { symbolLatex: 'S', value: '3', unit: 'm', label: 'Quãng đường lăn' },
    ],
    theoryAnchors: [
      {
        id: 'rolling-dynamics',
        title: 'Động lực học vật rắn chuyển động song phẳng',
        formula: '\\sum \\vec{F} = m\\vec{a}_{C}, \\qquad \\sum M_C = I_C\\beta',
        summary:
          'Chuyển động lăn không trượt gồm chuyển động tịnh tiến của khối tâm $C$ và chuyển động quay quanh trục qua $C$, liên hệ bởi $a_C = \\beta R$.',
        conditions: [
          'Trọng lực $\\vec{P}$ và phản lực $\\vec{N}$ đi qua khối tâm $C$ nên mômen đối với $C$ bằng $0$.',
          'Chính lực ma sát nghỉ $\\vec{F}_{msn}$ tại điểm tiếp xúc tạo ra mômen quay $M_C = F_{msn}R$.',
        ],
      },
      {
        id: 'no-slip-cond',
        title: 'Điều kiện lăn không trượt',
        formula: 'v_C = \\omega R, \\qquad a_C = \\beta R',
        summary:
          'Điểm tiếp xúc tức thời đứng yên so với mặt dốc (ma sát là ma sát nghỉ, không sinh công tiêu hao cơ năng).',
        conditions: [
          'Không dùng công thức ma sát trượt $F_{ms} = \\mu N$ cho ma sát nghỉ khi lăn không trượt.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-5-1-fbd',
        kind: 'diagram',
        title: 'Vẽ sơ đồ lực tác dụng lên hình trụ đặc',
        prompt:
          'Vẽ tất cả các lực thật tác dụng lên hình trụ đặc đang lăn không trượt **xuống dốc** (dốc nghiêng $30^\\circ$ nâng lên bên phải, nên chiều xuống dốc là $210^\\circ$). Chú ý hướng của lực ma sát nghỉ tạo mômen làm trụ lăn xuống.',
        theoryAnchorIds: ['rolling-dynamics'],
        diagramKind: 'fbd',
        spec: {
          kind: 'fbd',
          note: 'Mặt nghiêng dốc 30° (hướng lên dốc là 30°, xuống dốc là 210°). Để trụ lăn xuống dốc (quay ngược chiều kim đồng hồ), lực ma sát nghỉ tác dụng ở đáy trụ phải hướng về phía nào?',
          forceCatalog: {
            P: NEWTON_FORCE_CATALOG.P!,
            N: NEWTON_FORCE_CATALOG.N!,
            Fmsn: {
              id: 'Fmsn',
              label: 'F',
              subscript: 'msn',
              name: 'Lực ma sát nghỉ',
              missing: 'Thiếu lực ma sát nghỉ Fmsn. Để tạo mômen quay giúp trụ lăn xuống dốc, Fmsn hướng dọc lên dốc (30°).',
              extra: 'Không có lực ma sát thừa.',
            },
            Fdi: NEWTON_FORCE_CATALOG.Fdi!,
            Fqt: NEWTON_FORCE_CATALOG.Fqt!,
          },
          bodies: [
            {
              id: 'cylinder',
              label: 'Hình trụ đặc (lăn xuống dốc 30°)',
              surfaceAngle: 30,
              palette: ['P', 'N', 'Fmsn', 'Fdi', 'Fqt'],
              expected: [
                { type: 'P', angle: 270 },
                { type: 'N', angle: 120 },
                { type: 'Fmsn', angle: 30 },
              ],
              toleranceDeg: 12,
            },
          ],
        },
        summaryTemplate:
          'Sơ đồ lực hình trụ: trọng lực $\\vec{P}$ (270°), phản lực $\\vec{N}$ (120°) và lực ma sát nghỉ $\\vec{F}_{msn}$ hướng lên dốc (30°) tạo mômen quay.',
      },
      {
        id: 'se-5-1-proj',
        kind: 'axis-projection',
        title: 'Chiếu phương trình tịnh tiến khối tâm lên trục Ox\' (xuống dốc) và Oy\'',
        prompt: 'Chọn chiều dương $Ox\'$ dọc mặt nghiêng hướng **xuống dốc** và $Oy\'$ vuông góc mặt nghiêng hướng lên.',
        theoryAnchorIds: ['rolling-dynamics'],
        axes: [
          {
            id: 'oy',
            label: "Trục Oy' (vuông góc mặt nghiêng)",
            rhsLatex: '0',
            resultingEquationLatex: 'N - mg\\cos\\alpha = 0',
            rows: [
              {
                forceId: 'N',
                forceLatex: '\\vec{N}',
                expectedSign: '+',
                expectedComponent: 'N',
                componentOptions: [
                  { id: 'N', latex: 'N' },
                  { id: 'Ncos', latex: 'N\\cos\\alpha' },
                ],
                hint: 'Phản lực N cùng chiều dương Oy\' nên hình chiếu là +N.',
              },
              {
                forceId: 'P',
                forceLatex: '\\vec{P}',
                expectedSign: '-',
                expectedComponent: 'cos',
                componentOptions: [
                  { id: 'sin', latex: 'mg\\sin\\alpha' },
                  { id: 'cos', latex: 'mg\\cos\\alpha' },
                ],
                hint: 'Hình chiếu trọng lực lên Oy\' hướng ngược chiều dương nên là −mg cos α.',
              },
            ],
          },
          {
            id: 'ox',
            label: "Trục Ox' (dọc dốc hướng xuống)",
            rhsLatex: 'ma',
            resultingEquationLatex: 'mg\\sin\\alpha - F_{msn} = ma',
            rows: [
              {
                forceId: 'P',
                forceLatex: '\\vec{P}',
                expectedSign: '+',
                expectedComponent: 'sin',
                componentOptions: [
                  { id: 'sin', latex: 'mg\\sin\\alpha' },
                  { id: 'cos', latex: 'mg\\cos\\alpha' },
                ],
                hint: 'Thành phần trọng lực kéo trụ xuống dốc cùng chiều Ox\' là +mg sin α.',
              },
              {
                forceId: 'Fmsn',
                forceLatex: '\\vec{F}_{msn}',
                expectedSign: '-',
                expectedComponent: 'Fmsn',
                componentOptions: [
                  { id: 'Fmsn', latex: 'F_{msn}' },
                  { id: 'Fmsncos', latex: 'F_{msn}\\cos\\alpha' },
                ],
                hint: 'Lực ma sát nghỉ hướng lên dốc, ngược chiều Ox\' nên là −Fmsn.',
              },
              {
                forceId: 'N',
                forceLatex: '\\vec{N}',
                expectedSign: '0',
                expectedComponent: '0',
                componentOptions: [{ id: 'N', latex: 'N' }],
                hint: 'Phản lực N vuông góc với phương Ox\' nên hình chiếu bằng 0.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Chiếu phương trình chuyển động khối tâm dọc dốc: $mg\\sin\\alpha - F_{msn} = ma$.',
      },
      {
        id: 'se-5-1-transform',
        kind: 'equation-transform',
        title: 'Kết hợp phương trình quay và điều kiện lăn không trượt',
        prompt: 'Khử ẩn $F_{msn}$ và $\\beta$ để rút công thức chữ cho gia tốc khối tâm $a$.',
        theoryAnchorIds: ['rolling-dynamics', 'no-slip-cond'],
        initialEquations: [
          { label: '(1)', latex: 'mg\\sin\\alpha - F_{msn} = ma' },
          { label: '(2)', latex: 'F_{msn} R = I\\beta = \\left(\\dfrac{1}{2}mR^2\\right)\\left(\\dfrac{a}{R}\\right) \\Rightarrow F_{msn} = \\dfrac{1}{2}ma' },
        ],
        goalLatex: 'a = \\dfrac{2}{3}g\\sin\\alpha',
        stages: [
          {
            id: 'st-sub-fmsn',
            prompt: 'Thế $F_{msn} = \\frac{1}{2}ma$ từ (2) vào (1) và gom số hạng chứa $a$:',
            operations: [
              {
                id: 'sub-fmsn',
                label: 'Thế $F_{msn} = \\frac{1}{2}ma$ vào (1) và chuyển vế',
                resultLatex: 'mg\\sin\\alpha = \\dfrac{3}{2}ma',
                optimal: true,
                feedback: 'Chính xác! Quán tính quay làm mẫu số tăng từ $1$ lên $3/2$.',
              },
              {
                id: 'drop-i',
                label: 'Bỏ qua mômen quán tính, đặt $F_{msn} = 0$',
                resultLatex: 'mg\\sin\\alpha = ma',
                optimal: false,
                feedback: 'Nếu $F_{msn} = 0$ thì trụ chỉ trượt không ma sát chứ không lăn!',
              },
            ],
          },
          {
            id: 'st-isolate-a5',
            prompt: 'Khử khối lượng $m$ và cô lập gia tốc $a$:',
            operations: [
              {
                id: 'div-3-2',
                label: 'Chia hai vế cho $\\frac{3}{2}m$',
                resultLatex: 'a = \\dfrac{2}{3}g\\sin\\alpha',
                canceledLatex: 'm',
                optimal: true,
                feedback: 'Hoàn hảo! Gia tốc trụ đặc lăn không trượt bằng $2/3$ gia tốc vật trượt không ma sát.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Từ $F_{msn} = \\tfrac{1}{2}ma$ thế vào phương trình tịnh tiến thu được $a = \\dfrac{2}{3}g\\sin\\alpha$.',
      },
      {
        id: 'se-5-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính gia tốc a, lực ma sát nghỉ Fmsn và vận tốc v',
        prompt: 'Thay số tính $a$, $F_{msn} = \\frac{1}{2}ma$, và vận tốc $v = \\sqrt{2aS}$ sau quãng đường $S = 3\\text{ m}$.',
        theoryAnchorIds: ['rolling-dynamics', 'no-slip-cond'],
        fields: [
          {
            id: 'a',
            label: 'Gia tốc khối tâm',
            symbolLatex: 'a',
            expected: 3.27,
            tolerance: 0.05,
            toleranceMode: 'absolute',
            unit: 'm/s²',
          },
          {
            id: 'Fmsn',
            label: 'Lực ma sát nghỉ',
            symbolLatex: 'F_{msn}',
            expected: 6.53,
            tolerance: 0.15,
            toleranceMode: 'absolute',
            unit: 'N',
          },
          {
            id: 'v',
            label: 'Vận tốc khối tâm sau 3 m',
            symbolLatex: 'v',
            expected: 4.43,
            tolerance: 0.08,
            toleranceMode: 'absolute',
            unit: 'm/s',
          },
        ],
        explanation:
          '$a = \\dfrac{2}{3}\\cdot 9{,}8\\cdot \\sin 30^\\circ \\approx 3{,}27\\text{ m/s}^2$; $F_{msn} = \\dfrac{1}{2}\\cdot 4\\cdot 3{,}27 \\approx 6{,}53\\text{ N}$; $v = \\sqrt{2\\cdot 3{,}27\\cdot 3} \\approx 4{,}43\\text{ m/s}$.',
        summaryTemplate: 'Thay số: $a \\approx 3{,}27\\text{ m/s}^2$, $F_{msn} \\approx 6{,}53\\text{ N}$, $v \\approx 4{,}43\\text{ m/s}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/mech.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-6-1',
    lessonId: 'phy1159-t6-2',
    kind: 'semi-essay',
    title: 'Bài 6.1: Giếng thế năng hiệu dụng U_eff(r) & Tốc độ vũ trụ',
    fadeLevel: 0,
    prompt:
      'Xét vệ tinh khối lượng $m$ chuyển động trong trường hấp dẫn của Trái Đất (khối lượng $M_E = 5{,}97\\times 10^{24}\\text{ kg}$, bán kính $R_E = 6{,}37\\times 10^6\\text{ m}$, $G = 6{,}67\\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$) với mômen động lượng $L \\ne 0$. Hàm thế năng hiệu dụng là $U_{\\text{eff}}(r) = -\\dfrac{GM_E m}{r} + \\dfrac{L^2}{2mr^2}$. Hãy phân tích miền chuyển động trên giếng thế năng hiệu dụng, rút công thức và tính tốc độ vũ trụ cấp I ($v_1$) và cấp II ($v_2$) ở sát mặt đất.',
    given: [
      { symbolLatex: 'G', value: '6,67 \\times 10^{-11}', unit: 'N·m²/kg²', label: 'Hằng số hấp dẫn' },
      { symbolLatex: 'M_E', value: '5,97 \\times 10^{24}', unit: 'kg', label: 'Khối lượng Trái Đất' },
      { symbolLatex: 'R_E', value: '6,37 \\times 10^6', unit: 'm', label: 'Bán kính Trái Đất' },
    ],
    theoryAnchors: [
      {
        id: 'effective-potential',
        title: 'Thế năng hiệu dụng trong trường xuyên tâm',
        formula: 'E = \\dfrac{1}{2}m\\dot{r}^2 + U_{\\text{eff}}(r), \\qquad U_{\\text{eff}}(r) = -\\dfrac{GM_E m}{r} + \\dfrac{L^2}{2mr^2}',
        summary:
          'Vì động năng hướng tâm $\\frac{1}{2}m\\dot{r}^2 \\ge 0$, vệ tinh chỉ có thể tồn tại ở miền $U_{\\text{eff}}(r) \\le E$. Khi $E < 0$, quỹ đạo là ellipse bị giam trong $[r_{\\min}, r_{\\max}]$.',
        conditions: [
          'Đáy giếng $r_0$ là vị trí cực tiểu của $U_{\\text{eff}}(r)$, ứng với quỹ đạo tròn.',
          'Số hạng $L^2/(2mr^2)$ đóng vai trò "hàng rào ly tâm" đẩy vật ra xa tâm khi $r \\to 0$.',
        ],
      },
      {
        id: 'cosmic-velocities',
        title: 'Tốc độ vũ trụ cấp I và cấp II',
        formula: 'v_1 = \\sqrt{\\dfrac{GM_E}{R_E}}, \\qquad v_2 = \\sqrt{\\dfrac{2GM_E}{R_E}} = \\sqrt{2}\\,v_1',
        summary:
          'Tốc độ vũ trụ cấp I là vận tốc bay quỹ đạo tròn sát bề mặt; tốc độ vũ trụ cấp II là vận tốc tối thiểu để cơ năng $E = 0$, giúp vật thoát khỏi trường hấp dẫn ra vô cực.',
        conditions: [
          'Cả $v_1$ và $v_2$ đều độc lập với khối lượng $m$ của vệ tinh.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-6-1-curve',
        kind: 'diagram',
        title: 'Xác định miền chuyển động cho phép trên giếng thế năng hiệu dụng',
        prompt:
          'Đồ thị biểu diễn thế năng hiệu dụng dịch chuẩn hóa $U_{\\text{eff}}(r) - U_{\\min}$ theo $r/R_E$, với mức năng lượng toàn phần $E - U_{\\min} = 2{,}0$ (ứng với $E < 0$, cắt đường cong tại $r_{\\min}$ và $r_{\\max}$). Hãy chọn các đoạn thuộc miền chuyển động hợp lệ của quỹ đạo ellipse ($U_{\\text{eff}}(r) \\le E$).',
        theoryAnchorIds: ['effective-potential'],
        diagramKind: 'curve-2d',
        spec: {
          kind: 'curve-2d',
          mode: 'select-regions',
          xLabel: 'r',
          yLabel: 'U_eff − U_min',
          xUnit: 'R_E',
          yUnit: '10⁷ J/kg',
          xMax: 4.5,
          yMax: 5,
          shadeUnderCurve: false,
          note: 'Chọn các đoạn mà đường thế năng hiệu dụng nằm dưới hoặc bằng mức năng lượng $E - U_{\\min} = 2{,}0$.',
          points: [
            { x: 0.6, y: 4.5, label: 'r_c' },
            { x: 1.0, y: 2.0, label: 'r_min' },
            { x: 1.6, y: 0.2, label: 'r₀' },
            { x: 2.8, y: 2.0, label: 'r_max' },
            { x: 4.0, y: 3.2, label: 'r→∞' },
          ],
          segments: [
            { id: 'wall', label: 'r < r_min (hàng rào ly tâm)', fromIndex: 0, toIndex: 1 },
            { id: 'inward', label: 'r_min → r₀ (đáy giếng)', fromIndex: 1, toIndex: 2 },
            { id: 'outward', label: 'r₀ → r_max (ra viễn điểm)', fromIndex: 2, toIndex: 3 },
            { id: 'outer', label: 'r > r_max (vượt mức E)', fromIndex: 3, toIndex: 4 },
          ],
          expectedSegmentIds: ['inward', 'outward'],
          regionRationale:
            'Do $\\frac{1}{2}m\\dot{r}^2 = E - U_{\\text{eff}}(r) \\ge 0$, hạt chỉ chuyển động được trong giếng $[r_{\\min}, r_{\\max}]$ gồm hai đoạn $r_{\\min} \\to r_0$ và $r_0 \\to r_{\\max}$.',
        },
        summaryTemplate:
          'Trên giếng thế năng hiệu dụng với $E < 0$, vệ tinh dao động xuyên tâm bị giam giữa cận điểm $r_{\\min}$ và viễn điểm $r_{\\max}$ quanh đáy giếng $r_0$.',
      },
      {
        id: 'se-6-1-transform',
        kind: 'equation-transform',
        title: 'Rút công thức tốc độ vũ trụ cấp I và cấp II',
        prompt: 'Từ điều kiện quỹ đạo tròn và điều kiện thoát khỏi trường hấp dẫn ($E = 0$), rút ra $v_1$ và $v_2$.',
        theoryAnchorIds: ['cosmic-velocities'],
        initialEquations: [
          { label: '(1)', latex: '\\dfrac{mv_1^2}{R_E} = \\dfrac{GM_E m}{R_E^2}' },
          { label: '(2)', latex: '\\dfrac{1}{2}mv_2^2 - \\dfrac{GM_E m}{R_E} = 0' },
        ],
        goalLatex: 'v_1 = \\sqrt{\\dfrac{GM_E}{R_E}}, \\qquad v_2 = \\sqrt{2}\\,v_1',
        stages: [
          {
            id: 'st-v1',
            prompt: 'Từ (1), rút gọn khối lượng $m$ và bán kính $R_E$ để tìm $v_1$:',
            operations: [
              {
                id: 'solve-v1',
                label: 'Khử $m$ và $R_E$ rồi lấy căn bậc hai',
                resultLatex: 'v_1 = \\sqrt{\\dfrac{GM_E}{R_E}}',
                canceledLatex: 'm, R_E',
                optimal: true,
                feedback: 'Chính xác! Tốc độ vũ trụ cấp I chỉ phụ thuộc vào $M_E$ và $R_E$.',
              },
              {
                id: 'wrong-v1',
                label: 'Giữ lại $R_E^2$ ở mẫu: $v_1 = \\sqrt{GM_E / R_E^2}$',
                resultLatex: 'v_1 = \\sqrt{\\dfrac{GM_E}{R_E^2}}',
                optimal: false,
                feedback: 'Quên nhân chéo $R_E$ từ vế trái $mv_1^2/R_E$!',
              },
            ],
          },
          {
            id: 'st-v2',
            prompt: 'Từ (2), chuyển vế và rút $v_2$ theo $v_1$:',
            operations: [
              {
                id: 'solve-v2',
                label: 'Khử $m$, nhân $2$ và thay $\\dfrac{GM_E}{R_E} = v_1^2$',
                resultLatex: 'v_2 = \\sqrt{\\dfrac{2GM_E}{R_E}} = \\sqrt{2}\\,v_1',
                canceledLatex: 'm',
                optimal: true,
                feedback: 'Hoàn hảo! Tốc độ thoát ly luôn gấp $\\sqrt{2}$ lần tốc độ quỹ đạo tròn cùng độ cao.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Rút gọn phương trình lực hướng tâm và bảo toàn cơ năng thu được $v_1 = \\sqrt{GM_E/R_E}$ và $v_2 = \\sqrt{2}\\,v_1$.',
      },
      {
        id: 'se-6-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính giá trị tốc độ vũ trụ cấp I và cấp II của Trái Đất',
        prompt: 'Thay số $G, M_E, R_E$ và quy đổi kết quả sang đơn vị $\\text{km/s}$.',
        theoryAnchorIds: ['cosmic-velocities', 'effective-potential'],
        limitingCheck: {
          prompt: 'Nếu phóng vệ tinh với vận tốc $v \\ge v_2$ (ứng với $E \\ge 0$), quỹ đạo còn bị giới hạn bởi $r_{\\max}$ trên đồ thị $U_{\\text{eff}}(r)$ không?',
          choices: [
            {
              id: 'escape',
              label: 'Không, vì $U_{\\text{eff}}(\\infty) = 0 \\le E$ nên vệ tinh thoát ra vô cực',
              rationale: 'Chính xác! Quỹ đạo mở (parabol khi $E = 0$, hyperbol khi $E > 0$).',
            },
            {
              id: 'bound',
              label: 'Vẫn bị giam thành ellipse khép kín',
              rationale: 'Chưa đúng: quỹ đạo bị giam chỉ xảy ra khi $E < 0$.',
            },
          ],
          answerId: 'escape',
        },
        fields: [
          {
            id: 'v1',
            label: 'Tốc độ vũ trụ cấp I',
            symbolLatex: 'v_1',
            expected: 7.91,
            tolerance: 0.08,
            toleranceMode: 'absolute',
            unit: 'km/s',
          },
          {
            id: 'v2',
            label: 'Tốc độ vũ trụ cấp II',
            symbolLatex: 'v_2',
            expected: 11.18,
            tolerance: 0.12,
            toleranceMode: 'absolute',
            unit: 'km/s',
          },
        ],
        explanation:
          '$v_1 = \\sqrt{\\dfrac{6{,}67\\cdot 10^{-11} \\cdot 5{,}97\\cdot 10^{24}}{6{,}37\\cdot 10^6}} \\approx 7906\\text{ m/s} \\approx 7{,}91\\text{ km/s}$; $v_2 = \\sqrt{2}\\,v_1 \\approx 11{,}18\\text{ km/s}$.',
        summaryTemplate: 'Thay số thu được $v_1 \\approx 7{,}91\\text{ km/s}$ và $v_2 \\approx 11{,}18\\text{ km/s}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/mech.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-7-1',
    lessonId: 'phy1159-t7-2',
    kind: 'semi-essay',
    title: 'Bài 7.1: Giãn nở thời gian & Năng lượng tương đối tính của hạt muon',
    fadeLevel: 0,
    prompt:
      'Một hạt muon được tạo ra ở tầng khí quyển trên cao chuyển động về phía mặt đất với tốc độ $v = 0{,}99c$. Thời gian sống riêng của muon khi đứng yên là $\\Delta t_0 = 2{,}2\\;\\mu\\text{s}$ và năng lượng nghỉ của nó là $E_0 = m_0 c^2 = 105{,}7\\text{ MeV}$. Hãy tính hệ số Lorentz $\\gamma$, thời gian sống $\\Delta t$ đo bởi người quan sát trên mặt đất, và động năng tương đối tính $K$ của muon.',
    given: [
      { symbolLatex: 'v', value: '0,99c', label: 'Tốc độ hạt muon' },
      { symbolLatex: '\\Delta t_0', value: '2,2', unit: 'µs', label: 'Thời gian sống riêng' },
      { symbolLatex: 'E_0', value: '105,7', unit: 'MeV', label: 'Năng lượng nghỉ' },
    ],
    theoryAnchors: [
      {
        id: 'lorentz-dilation',
        title: 'Hệ số Lorentz & Giãn nở thời gian',
        formula: '\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}} \\ge 1, \\qquad \\Delta t = \\gamma\\,\\Delta t_0',
        summary:
          'Thời gian riêng $\\Delta t_0$ là khoảng thời gian ngắn nhất giữa hai biến cố xảy ra tại cùng một vị trí (đo bằng đồng hồ gắn với hạt muon). Người quan sát chuyển động tương đối đo được khoảng thời gian giãn ra $\\Delta t = \\gamma\\Delta t_0$.',
        conditions: [
          'Không gán nhầm $\\Delta t_0$ cho đồng hồ trên mặt đất khi hai biến cố (sinh và phân rã muon) xảy ra ở hai độ cao khác nhau.',
        ],
      },
      {
        id: 'rel-energy',
        title: 'Năng lượng toàn phần & Động năng tương đối tính',
        formula: 'E = \\gamma m_0 c^2 = E_0 + K \\Rightarrow K = (\\gamma - 1)E_0',
        summary:
          'Động năng tương đối tính là phần năng lượng dôi ra so với năng lượng nghỉ $E_0$, không dùng công thức cổ điển $\\frac{1}{2}m_0 v^2$ khi $v$ tiệm cận $c$.',
        conditions: [
          'Khi $v \\ll c$, khai triển $\\gamma \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2}$ đưa $K$ về giới hạn cổ điển $\\frac{1}{2}m_0 v^2$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-7-1-frame',
        kind: 'choice-reasoning',
        title: 'Phân biệt thời gian riêng Δt₀ và thời gian đo trên mặt đất Δt',
        prompt: 'Trong bài toán này, khẳng định nào đúng về mối liên hệ giữa $\\Delta t$ (đo trên mặt đất) và $\\Delta t_0$ (thời gian sống riêng)?',
        theoryAnchorIds: ['lorentz-dilation'],
        choices: [
          {
            id: 'earth-longer',
            label: '$\\Delta t = \\gamma\\Delta t_0 > \\Delta t_0$ vì hai biến cố xảy ra tại cùng một điểm trong hệ gắn với muon',
            rationale:
              'Chính xác! Trong hệ gắn với muon, nơi sinh và nơi phân rã trùng nhau nên đồng hồ của muon đo thời gian riêng $\\Delta t_0$; trên mặt đất hai biến cố ở hai vị trí khác nhau nên $\\Delta t = \\gamma\\Delta t_0 > \\Delta t_0$.',
          },
          {
            id: 'earth-shorter',
            label: '$\\Delta t = \\Delta t_0 / \\gamma < \\Delta t_0$',
            rationale:
              'Nhầm lẫn với công thức co độ dài $l = l_0/\\gamma$ hoặc gán nhầm thời gian riêng cho mặt đất.',
          },
        ],
        answers: ['earth-longer'],
        summaryTemplate:
          'Đồng hồ gắn với muon đo thời gian riêng $\\Delta t_0$, nên người quan sát trên mặt đất đo thời gian sống giãn ra $\\Delta t = \\gamma\\Delta t_0$.',
      },
      {
        id: 'se-7-1-transform',
        kind: 'equation-transform',
        title: 'Biểu diễn động năng tương đối tính K theo γ và E₀',
        prompt: 'Từ hệ thức năng lượng toàn phần $E = \\gamma E_0$ và $E = E_0 + K$, rút công thức tính động năng $K$.',
        theoryAnchorIds: ['rel-energy'],
        initialEquations: [
          { label: '(1)', latex: 'E = \\gamma m_0 c^2 = \\gamma E_0' },
          { label: '(2)', latex: 'E = E_0 + K' },
        ],
        goalLatex: 'K = (\\gamma - 1)E_0',
        stages: [
          {
            id: 'st-k-rel',
            prompt: 'Cô lập động năng $K$:',
            operations: [
              {
                id: 'sub-e0',
                label: 'Thế (1) vào (2) rồi trừ $E_0$ ở hai vế',
                resultLatex: 'K = (\\gamma - 1)E_0',
                optimal: true,
                feedback: 'Chính xác! Động năng tương đối tính bằng $(\\gamma - 1)E_0$.',
              },
              {
                id: 'total-as-k',
                label: 'Đặt $K = \\gamma E_0$',
                resultLatex: 'K = \\gamma E_0',
                optimal: false,
                feedback: 'Đó là năng lượng toàn phần $E$, chưa trừ đi năng lượng nghỉ $E_0$.',
              },
            ],
          },
        ],
        summaryTemplate: 'Rút công thức động năng tương đối tính: $K = E - E_0 = (\\gamma - 1)E_0$.',
      },
      {
        id: 'se-7-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính hệ số Lorentz γ, thời gian sống Δt và động năng K',
        prompt: 'Thay $v = 0{,}99c$, $\\Delta t_0 = 2{,}2\\;\\mu\\text{s}$ và $E_0 = 105{,}7\\text{ MeV}$ để tính các giá trị.',
        theoryAnchorIds: ['lorentz-dilation', 'rel-energy'],
        limitingCheck: {
          prompt: 'Khi $v \\ll c$, khai triển $\\gamma \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2}$ đưa công thức $K = (\\gamma - 1)m_0 c^2$ về biểu thức nào?',
          choices: [
            {
              id: 'classical',
              label: '$K \\approx \\dfrac{1}{2}m_0 v^2$ (khớp cơ học Newton)',
              rationale: 'Chính xác! $(\\frac{1}{2}v^2/c^2)\\cdot m_0 c^2 = \\frac{1}{2}m_0 v^2$.',
            },
            {
              id: 'zero',
              label: '$K = 0$',
              rationale: 'Chưa đúng: số hạng bậc nhất theo $v^2/c^2$ vẫn còn $\\frac{1}{2}m_0 v^2$.',
            },
          ],
          answerId: 'classical',
        },
        fields: [
          {
            id: 'gamma',
            label: 'Hệ số Lorentz',
            symbolLatex: '\\gamma',
            expected: 7.09,
            tolerance: 0.05,
            toleranceMode: 'absolute',
            unit: 'không thứ nguyên',
          },
          {
            id: 'dt',
            label: 'Thời gian sống trên mặt đất',
            symbolLatex: '\\Delta t',
            expected: 15.6,
            tolerance: 0.2,
            toleranceMode: 'absolute',
            unit: 'µs',
          },
          {
            id: 'K',
            label: 'Động năng tương đối tính',
            symbolLatex: 'K',
            expected: 643.6,
            tolerance: 5,
            toleranceMode: 'absolute',
            unit: 'MeV',
          },
        ],
        explanation:
          '$\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}99^2}} = \\dfrac{1}{\\sqrt{0{,}0199}} \\approx 7{,}09$; $\\Delta t = 7{,}09 \\cdot 2{,}2 \\approx 15{,}6\\;\\mu\\text{s}$; $K = (7{,}09 - 1)\\cdot 105{,}7 \\approx 643{,}6\\text{ MeV}$.',
        summaryTemplate: 'Thay số: $\\gamma \\approx 7{,}09$, $\\Delta t \\approx 15{,}6\\;\\mu\\text{s}$ và $K \\approx 643{,}6\\text{ MeV}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/mech.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-10-1',
    lessonId: 'phy1159-t10-2',
    kind: 'semi-essay',
    title: 'Bài 10.1: Phân bố Maxwell, bậc tự do i & Nội năng khí nitơ',
    fadeLevel: 0,
    prompt:
      'Xét $n = 2\\text{ mol}$ khí nitơ ($\\text{N}_2$, phân tử lưỡng nguyên tử có khối lượng mol $\\mu = 0{,}028\\text{ kg/mol}$) ở nhiệt độ $T = 300\\text{ K}$ (chưa kích thích dao động). Lấy $R = 8{,}31\\text{ J/(mol}\\cdot\\text{K)}$. Hãy phân tích đường cong phân bố vận tốc Maxwell $f(v)$, rút công thức và tính vận tốc căn quân phương $v_{\\text{rms}}$ cùng nội năng $U$ của khối khí.',
    given: [
      { symbolLatex: 'n', value: '2', unit: 'mol', label: 'Số mol khí N₂' },
      { symbolLatex: 'i', value: '5', label: 'Số bậc tự do (lưỡng nguyên tử ở 300 K)' },
      { symbolLatex: '\\mu', value: '0,028', unit: 'kg/mol', label: 'Khối lượng mol N₂' },
      { symbolLatex: 'T', value: '300', unit: 'K', label: 'Nhiệt độ tuyệt đối' },
      { symbolLatex: 'R', value: '8,31', unit: 'J/(mol·K)', label: 'Hằng số khí lý tưởng' },
    ],
    theoryAnchors: [
      {
        id: 'equipartition',
        title: 'Định luật phân bố đều theo bậc tự do',
        formula: 'U = n\\dfrac{i}{2}RT, \\qquad \\overline{\\varepsilon_t} = \\dfrac{3}{2}k_B T = \\dfrac{1}{2}m_0 v_{\\text{rms}}^2',
        summary:
          'Mỗi bậc tự do nhận năng lượng trung bình $\\frac{1}{2}k_B T$. Ở nhiệt độ phòng ($300\\text{ K}$), phân tử lưỡng nguyên tử $\\text{N}_2$ có $i = 3 + 2 = 5$ (3 tịnh tiến, 2 quay).',
        conditions: [
          'Nội năng khí lý tưởng chỉ phụ thuộc nhiệt độ $T$, số mol $n$ và bậc tự do $i$.',
        ],
      },
      {
        id: 'maxwell-dist',
        title: 'Phân bố vận tốc Maxwell',
        formula: 'v_p = \\sqrt{\\dfrac{2RT}{\\mu}} < \\bar{v} = \\sqrt{\\dfrac{8RT}{\\pi\\mu}} < v_{\\text{rms}} = \\sqrt{\\dfrac{3RT}{\\mu}}',
        summary:
          'Đường cong $f(v)$ xuất phát từ $0$, đạt cực đại tại vận tốc xác suất lớn nhất $v_p$, rồi giảm bất đối xứng về phía vận tốc cao nên $v_p < \\bar{v} < v_{\\text{rms}}$.',
        conditions: [
          'Diện tích toàn phần dưới đường cong $f(v)$ luôn chuẩn hóa bằng $1$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-10-1-curve',
        kind: 'diagram',
        title: 'Phân tích đường cong phân bố vận tốc Maxwell f(v)',
        prompt:
          'Quan sát đồ thị hàm phân bố vận tốc Maxwell $f(v)$ của khí $\\text{N}_2$ ở $300\\text{ K}$. Chọn các đoạn thuộc miền mật độ xác suất **tăng** theo vận tốc ($f\'(v) > 0$, bên trái đỉnh $v_p$).',
        theoryAnchorIds: ['maxwell-dist'],
        diagramKind: 'curve-2d',
        spec: {
          kind: 'curve-2d',
          mode: 'select-regions',
          xLabel: 'v',
          yLabel: 'f(v)',
          xUnit: '10² m/s',
          yUnit: '10⁻³ s/m',
          xMax: 9,
          yMax: 2,
          shadeUnderCurve: true,
          note: 'Chọn các đoạn đồ thị nằm bên trái đỉnh cực đại v_p.',
          points: [
            { x: 0, y: 0, label: '0' },
            { x: 2.5, y: 1.1, label: 'v₁' },
            { x: 4.2, y: 1.7, label: 'v_p' },
            { x: 5.2, y: 1.5, label: 'v_rms' },
            { x: 8.0, y: 0.4, label: 'đuôi' },
          ],
          segments: [
            { id: 'rise', label: '0 → v₁ (khởi đầu từ gốc)', fromIndex: 0, toIndex: 1 },
            { id: 'peak', label: 'v₁ → v_p (tiến tới đỉnh cực đại)', fromIndex: 1, toIndex: 2 },
            { id: 'mid', label: 'v_p → v_rms (vùng sau đỉnh)', fromIndex: 2, toIndex: 3 },
            { id: 'tail', label: 'v_rms → đuôi (hạt năng lượng cao)', fromIndex: 3, toIndex: 4 },
          ],
          expectedSegmentIds: ['rise', 'peak'],
          regionRationale:
            'Hàm phân bố Maxwell tăng đơn điệu từ $v = 0$ đến cực đại tại $v_p$ (gồm hai đoạn $0 \\to v_1$ và $v_1 \\to v_p$), sau đó giảm dần ở vùng $v > v_p$.',
        },
        summaryTemplate:
          'Trên đường cong Maxwell, mật độ phân tử tăng từ $0$ đến đỉnh $v_p$, rồi giảm chậm về phía đuôi nên $v_{\\text{rms}} > v_p$.',
      },
      {
        id: 'se-10-1-transform',
        kind: 'equation-transform',
        title: 'Rút công thức v_rms theo đại lượng vĩ mô R, T, μ',
        prompt: 'Chuyển biểu thức động năng tịnh tiến trung bình sang các đại lượng mol $R$ và $\\mu$.',
        theoryAnchorIds: ['equipartition', 'maxwell-dist'],
        initialEquations: [
          { label: '(1)', latex: '\\dfrac{1}{2}m_0 v_{\\text{rms}}^2 = \\dfrac{3}{2}k_B T' },
          { label: '(2)', latex: 'N_A k_B = R, \\qquad N_A m_0 = \\mu' },
        ],
        goalLatex: 'v_{\\text{rms}} = \\sqrt{\\dfrac{3RT}{\\mu}}',
        stages: [
          {
            id: 'st-vrms',
            prompt: 'Cô lập $v_{\\text{rms}}$ và thế (2) vào (1):',
            operations: [
              {
                id: 'sub-na',
                label: 'Rút $v_{\\text{rms}}^2 = \\dfrac{3k_B T}{m_0}$ rồi nhân tử và mẫu với $N_A$',
                resultLatex: 'v_{\\text{rms}} = \\sqrt{\\dfrac{3 N_A k_B T}{N_A m_0}} = \\sqrt{\\dfrac{3RT}{\\mu}}',
                canceledLatex: 'N_A',
                optimal: true,
                feedback: 'Chính xác! Chú ý phải đổi $\\mu$ sang $\\text{kg/mol}$ khi thay số.',
              },
              {
                id: 'wrong-i',
                label: 'Thay hệ số $3$ bằng bậc tự do $i = 5$',
                resultLatex: 'v_{\\text{rms}} = \\sqrt{\\dfrac{5RT}{\\mu}}',
                optimal: false,
                feedback: 'Sai: động năng tịnh tiến của khối tâm chỉ liên quan $3$ bậc tự do tịnh tiến, không phải $i = 5$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Từ $\\frac{1}{2}m_0 v_{\\text{rms}}^2 = \\frac{3}{2}k_B T$ suy ra $v_{\\text{rms}} = \\sqrt{3RT/\\mu}$.',
      },
      {
        id: 'se-10-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính vận tốc căn quân phương v_rms và nội năng U',
        prompt: 'Thay số (với $\\mu = 0{,}028\\text{ kg/mol}$ và $i = 5$) để tính $v_{\\text{rms}}$ và $U$.',
        theoryAnchorIds: ['equipartition', 'maxwell-dist'],
        limitingCheck: {
          prompt: 'Nếu tăng nhiệt độ tuyệt đối $T$ của khối khí lên $4$ lần, vận tốc căn quân phương $v_{\\text{rms}}$ thay đổi thế nào?',
          choices: [
            {
              id: 'double',
              label: 'Tăng $2$ lần (vì $v_{\\text{rms}} \\propto \\sqrt{T}$)',
              rationale: 'Chính xác! $\\sqrt{4T} = 2\\sqrt{T}$.',
            },
            {
              id: 'quad',
              label: 'Tăng $4$ lần',
              rationale: 'Chưa đúng: đại lượng tỉ lệ bậc nhất với $T$ là động năng trung bình, còn vận tốc tỉ lệ với $\\sqrt{T}$.',
            },
          ],
          answerId: 'double',
        },
        fields: [
          {
            id: 'vrms',
            label: 'Vận tốc căn quân phương',
            symbolLatex: 'v_{\\text{rms}}',
            expected: 516.8,
            tolerance: 5,
            toleranceMode: 'absolute',
            unit: 'm/s',
          },
          {
            id: 'U',
            label: 'Nội năng của 2 mol khí N₂',
            symbolLatex: 'U',
            expected: 12465,
            tolerance: 50,
            toleranceMode: 'absolute',
            unit: 'J',
          },
        ],
        explanation:
          '$v_{\\text{rms}} = \\sqrt{\\dfrac{3\\cdot 8{,}31\\cdot 300}{0{,}028}} \\approx 516{,}8\\text{ m/s}$; $U = 2\\cdot \\dfrac{5}{2}\\cdot 8{,}31\\cdot 300 = 12465\\text{ J}$.',
        summaryTemplate: 'Thay số: $v_{\\text{rms}} \\approx 516{,}8\\text{ m/s}$ và $U = 12465\\text{ J}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/thermo.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from PHY1159 thermodynamics curriculum.',
    },
  },
  {
    id: 'phy1159-se-11-1',
    lessonId: 'phy1159-t11-2',
    kind: 'semi-essay',
    title: 'Bài 11.1: Chu trình Carnot, Hiệu suất & Biến thiên Entropi',
    fadeLevel: 0,
    prompt:
      'Một động cơ nhiệt hoạt động theo chu trình Carnot thuận nghịch giữa nguồn nóng có nhiệt độ $t_1 = 327^\\circ\\text{C}$ và nguồn lạnh có nhiệt độ $t_2 = 27^\\circ\\text{C}$. Trong mỗi chu trình, tác nhân nhận nhiệt lượng $Q_1 = 2400\\text{ J}$ từ nguồn nóng. Hãy lập sơ đồ cân bằng năng lượng cho một chu trình, rút công thức hiệu suất Carnot $\\eta_C$, rồi tính $\\eta_C$, công cơ học $A$ sinh ra và độ biến thiên entropi $\\Delta S_{\\text{nguồn nóng}}$ của nguồn nóng trong mỗi chu trình.',
    given: [
      { symbolLatex: 't_1', value: '327', unit: '°C (600 K)', label: 'Nhiệt độ nguồn nóng' },
      { symbolLatex: 't_2', value: '27', unit: '°C (300 K)', label: 'Nhiệt độ nguồn lạnh' },
      { symbolLatex: 'Q_1', value: '2400', unit: 'J', label: 'Nhiệt nhận từ nguồn nóng' },
    ],
    theoryAnchors: [
      {
        id: 'carnot-eff',
        title: 'Hiệu suất Carnot & Chu trình khép kín',
        formula: '\\eta_C = \\dfrac{A}{Q_1} = 1 - \\dfrac{|Q_2|}{Q_1} = 1 - \\dfrac{T_2}{T_1}',
        summary:
          'Sau một chu trình khép kín, nội năng tác nhân trở lại giá trị ban đầu ($\\Delta U_{\\text{chu trình}} = 0$), nên công sinh ra bằng hiệu nhiệt nhận và nhiệt nhả: $A = Q_1 - |Q_2|$.',
        conditions: [
          'Bắt buộc đổi $t_1, t_2$ từ °C sang độ Kelvin ($T = t + 273$) trước khi tính tỉ số $T_2/T_1$.',
        ],
      },
      {
        id: 'entropy-balance',
        title: 'Biến thiên Entropi trong chu trình thuận nghịch',
        formula: '\\Delta S_{\\text{chu trình}} = \\dfrac{Q_1}{T_1} - \\dfrac{|Q_2|}{T_2} = 0, \\qquad \\Delta S_{\\text{nguồn nóng}} = -\\dfrac{Q_1}{T_1}',
        summary:
          'Với chu trình thuận nghịch, tổng biến thiên entropi của tác nhân bằng $0$, dẫn tới $|Q_2|/Q_1 = T_2/T_1$. Nguồn nóng truyền nhiệt $Q_1$ đi nên entropi của nguồn nóng giảm ($\\Delta S < 0$).',
        conditions: [
          'Tổng biến thiên entropi của vũ trụ (tác nhân + 2 nguồn) bằng $0$ với chu trình Carnot thuận nghịch.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-11-1-flow',
        kind: 'diagram',
        title: 'Lập biểu đồ cân bằng năng lượng cho một chu trình động cơ nhiệt',
        prompt:
          'Xây dựng biểu đồ cân bằng năng lượng cho **1 chu trình khép kín** của tác nhân: trạng thái đầu gồm nội năng $U_1$ và nhiệt lượng nhận $Q_1$; trạng thái cuối gồm nội năng $U_2 = U_1$ và nhiệt nhả $|Q_2|$; phần năng lượng truyền ra ngoài là công cơ học $A$.',
        theoryAnchorIds: ['carnot-eff'],
        diagramKind: 'balance-flow',
        spec: {
          kind: 'balance-flow',
          systemLabel: 'Tác nhân động cơ Carnot (1 chu trình)',
          initialLabel: 'Năng lượng đầu vào (U₁ + Q₁)',
          finalLabel: 'Năng lượng còn lại (U₂ + |Q₂|)',
          maxLevel: 4,
          note: 'Vì động cơ sinh công A > 0 ra bên ngoài, tổng năng lượng còn lại (U₂ + |Q₂|) phải nhỏ hơn đầu vào (U₁ + Q₁).',
          initialBars: [
            { id: 'U1', label: 'Nội năng đầu chu trình', symbolLatex: 'U_1', expectedState: 'positive', hint: 'Tác nhân có nội năng ban đầu U₁ > 0.' },
            { id: 'Q1', label: 'Nhiệt nhận từ nguồn nóng', symbolLatex: 'Q_1', expectedState: 'positive', hint: 'Tác nhân nhận nhiệt Q₁ = 2400 J > 0 từ nguồn nóng.' },
          ],
          finalBars: [
            { id: 'U2', label: 'Nội năng cuối chu trình', symbolLatex: 'U_2', expectedState: 'positive', hint: 'Chu trình khép kín nên U₂ = U₁ > 0.' },
            { id: 'Q2', label: 'Nhiệt nhả cho nguồn lạnh', symbolLatex: '|Q_2|', expectedState: 'positive', hint: 'Theo Nguyên lý II, động cơ phải nhả nhiệt |Q₂| > 0 cho nguồn lạnh.' },
          ],
          transferLabel: 'Công sinh ra ngoài (−A)',
          transferSymbolLatex: '-A',
          expectedTransferSign: '-',
          transferHint: 'Động cơ sinh công cơ học A ra ngoài nên năng lượng rời khỏi tác nhân (−).',
          requireConservation: true,
        },
        summaryTemplate:
          'Cân bằng năng lượng 1 chu trình: $U_1 + Q_1 - A = U_2 + |Q_2|$ với $U_2 = U_1$, suy ra $A = Q_1 - |Q_2|$.',
      },
      {
        id: 'se-11-1-transform',
        kind: 'equation-transform',
        title: 'Suy ra hiệu suất Carnot theo nhiệt độ tuyệt đối',
        prompt: 'Kết hợp điều kiện chu trình thuận nghịch $\\Delta S_{\\text{chu trình}} = 0$ với định nghĩa hiệu suất $\\eta_C$.',
        theoryAnchorIds: ['carnot-eff', 'entropy-balance'],
        initialEquations: [
          { label: '(1)', latex: '\\eta_C = 1 - \\dfrac{|Q_2|}{Q_1}' },
          { label: '(2)', latex: '\\dfrac{Q_1}{T_1} - \\dfrac{|Q_2|}{T_2} = 0' },
        ],
        goalLatex: '\\eta_C = 1 - \\dfrac{T_2}{T_1}',
        stages: [
          {
            id: 'st-carnot-sub',
            prompt: 'Từ (2) rút tỉ số nhiệt lượng và thế vào (1):',
            operations: [
              {
                id: 'sub-t-ratio',
                label: 'Từ (2) suy ra $\\dfrac{|Q_2|}{Q_1} = \\dfrac{T_2}{T_1}$ rồi thế vào (1)',
                resultLatex: '\\eta_C = 1 - \\dfrac{T_2}{T_1}',
                optimal: true,
                feedback: 'Chính xác! Hiệu suất Carnot chỉ phụ thuộc nhiệt độ tuyệt đối của hai nguồn.',
              },
              {
                id: 'invert-ratio',
                label: 'Thế $\\dfrac{|Q_2|}{Q_1} = \\dfrac{T_1}{T_2}$ vào (1)',
                resultLatex: '\\eta_C = 1 - \\dfrac{T_1}{T_2}',
                optimal: false,
                feedback: 'Ngược tỉ số: vì $T_1 > T_2$ nên $1 - T_1/T_2$ sẽ âm (vô lý)!',
              },
            ],
          },
        ],
        summaryTemplate: 'Từ $\\Delta S_{\\text{chu trình}} = 0$ suy ra $|Q_2|/Q_1 = T_2/T_1$, nên $\\eta_C = 1 - T_2/T_1$.',
      },
      {
        id: 'se-11-1-numeric',
        kind: 'numeric-unit',
        title: 'Tính hiệu suất η_C, công A và biến thiên entropi nguồn nóng',
        prompt: 'Đổi nhiệt độ sang Kelvin rồi tính $\\eta_C$ (%), công $A$ (J) và $\\Delta S_{\\text{nguồn nóng}}$ (J/K).',
        theoryAnchorIds: ['carnot-eff', 'entropy-balance'],
        fields: [
          {
            id: 'eta',
            label: 'Hiệu suất Carnot',
            symbolLatex: '\\eta_C',
            expected: 50,
            tolerance: 0.5,
            toleranceMode: 'absolute',
            unit: '%',
          },
          {
            id: 'A',
            label: 'Công sinh ra mỗi chu trình',
            symbolLatex: 'A',
            expected: 1200,
            tolerance: 20,
            toleranceMode: 'absolute',
            unit: 'J',
          },
          {
            id: 'dS',
            label: 'Biến thiên entropi nguồn nóng',
            symbolLatex: '\\Delta S_{\\text{nguồn nóng}}',
            expected: -4,
            tolerance: 0.1,
            toleranceMode: 'absolute',
            unit: 'J/K',
          },
        ],
        explanation:
          '$T_1 = 327 + 273 = 600\\text{ K}$, $T_2 = 27 + 273 = 300\\text{ K}$. $\\eta_C = 1 - \\dfrac{300}{600} = 50\\%$; $A = 0{,}5\\cdot 2400 = 1200\\text{ J}$; $\\Delta S_{\\text{nguồn nóng}} = -\\dfrac{2400}{600} = -4\\text{ J/K}$.',
        summaryTemplate: 'Thay số: $\\eta_C = 50\\%$, $A = 1200\\text{ J}$ và $\\Delta S_{\\text{nguồn nóng}} = -4\\text{ J/K}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/theory/thermo.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from PHY1159 thermodynamics curriculum.',
    },
  },
  {
    id: 'phy1159-se-2-3',
    lessonId: 'phy1159-t2-2',
    kind: 'semi-essay',
    title: 'Bài 2.3: Toa tàu thứ n đi qua người quan sát',
    fadeLevel: 0,
    prompt:
      'Một người quan sát đứng ngang với đầu tàu hoả lúc nó bắt đầu chuyển động nhanh dần đều và nhận thấy toa đầu tiên chạy ngang qua mình mất khoảng thời gian $\\tau = 4\\text{ s}$. Hỏi toa tàu thứ $n = 7$ chạy ngang qua người đó trong khoảng thời gian $\\Delta t$ là bao nhiêu? Biết độ dài các toa như nhau bằng $L$ và bỏ qua chỗ nối giữa các toa.',
    given: [
      { symbolLatex: '\\tau', value: '4', unit: 's', label: 'Thời gian toa đầu tiên đi qua' },
      { symbolLatex: 'n', value: '7', label: 'Số thứ tự toa tàu' },
    ],
    theoryAnchors: [
      {
        id: 'ratio-elim',
        title: 'Phương pháp lập tỉ số khử ẩn (a, L)',
        formula: 's = \\dfrac{1}{2}at^2, \\qquad t_k = \\tau\\sqrt{k}',
        summary:
          'Bài toán không cho biết gia tốc $a$ và chiều dài mỗi toa $L$, nhưng khi lập tỉ số quãng đường đi được trong $k$ toa đầu so với toa thứ nhất, cả $a$ và $L$ tự triệt tiêu.',
        conditions: [
          'Tàu bắt đầu chuyển động từ trạng thái đứng yên ($v_0 = 0$) và gia tốc $a$ không đổi.',
          'Thời gian toa thứ $n$ đi qua là hiệu thời điểm kết thúc toa $n$ và toa $n-1$: $\\Delta t = t_n - t_{n-1}$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-2-3-predict',
        kind: 'choice-reasoning',
        title: 'Dự đoán định tính thời gian toa thứ 7',
        prompt:
          'Toa thứ 7 đi qua người quan sát mất thời gian thế nào so với toa đầu tiên ($\\tau = 4\\text{ s}$)?',
        theoryAnchorIds: ['ratio-elim'],
        choices: [
          {
            id: 'shorter',
            label: 'Ít hơn nhiều so với 4 s',
            rationale:
              'Đúng. Vì tàu chuyển động nhanh dần đều nên vận tốc tăng liên tục; các toa sau đi qua người quan sát nhanh hơn nhiều so với toa đầu.',
          },
          {
            id: 'equal',
            label: 'Bằng 4 s',
            rationale:
              'Chỉ đúng nếu tàu chuyển động thẳng đều. Ở đây tàu đang chuyển động nhanh dần đều.',
          },
          {
            id: 'longer',
            label: 'Lâu hơn 4 s',
            rationale:
              'Ngược với tính chất nhanh dần đều: tốc độ tăng thì thời gian qua cùng một độ dài $L$ phải giảm.',
          },
        ],
        answers: ['shorter'],
        hint: 'Vận tốc tàu tăng dần theo thời gian hay không đổi?',
        summaryTemplate:
          'Tàu nhanh dần đều nên các toa sau đi qua nhanh hơn nhiều so với toa đầu ($\\Delta t < 4\\text{ s}$).',
      },
      {
        id: 'se-2-3-transform',
        kind: 'equation-transform',
        title: 'Lập tỉ số để khử gia tốc a và chiều dài toa L',
        prompt:
          'Từ phương trình quãng đường toa đầu $L = \\tfrac{1}{2}a\\tau^2$ và $k$ toa đầu $kL = \\tfrac{1}{2}a t_k^2$, hãy khử $a, L$ và tìm $\\Delta t = t_n - t_{n-1}$.',
        theoryAnchorIds: ['ratio-elim'],
        initialEquations: [
          { label: '(1)', latex: 'L = \\dfrac{1}{2}a\\tau^2' },
          { label: '(2)', latex: 'kL = \\dfrac{1}{2}a t_k^2' },
        ],
        goalLatex: '\\Delta t = \\tau(\\sqrt{n} - \\sqrt{n-1})',
        stages: [
          {
            id: 'st-ratio-k',
            prompt: 'Khử các ẩn trung gian $a$ và $L$ từ (1) và (2):',
            operations: [
              {
                id: 'div-eq',
                label: 'Chia vế theo vế (2) cho (1) rồi lấy căn bậc hai (với $t_k > 0$)',
                resultLatex: 't_k = \\tau\\sqrt{k}',
                canceledLatex: 'a, L',
                optimal: true,
                feedback:
                  'Chính xác! Cả $a$ và $L$ đều triệt tiêu gọn gàng, cho thấy $t_k$ tỉ lệ với $\\sqrt{k}$.',
              },
              {
                id: 'sub-eq',
                label: 'Trừ (2) cho (1) để được $(k-1)L = \\tfrac{1}{2}a(t_k^2 - \\tau^2)$',
                resultLatex: '(k-1)L = \\dfrac{1}{2}a(t_k^2 - \\tau^2)',
                optimal: false,
                feedback:
                  'Phép trừ không làm mất $a$ và $L$, nên vẫn chưa giải được $t_k$ theo $\\tau$.',
              },
            ],
          },
          {
            id: 'st-diff-n',
            prompt: 'Tính khoảng thời gian $\\Delta t$ toa thứ $n$ đi qua người quan sát:',
            operations: [
              {
                id: 'diff-tn',
                label: 'Lấy hiệu thời điểm kết thúc toa $n$ và toa $n-1$: $\\Delta t = t_n - t_{n-1}$',
                resultLatex: '\\Delta t = \\tau(\\sqrt{n} - \\sqrt{n-1})',
                optimal: true,
                feedback:
                  'Hoàn hảo! Lưu ý không lấy $\\tau\\sqrt{n}$ vì đó là tổng thời gian cả $n$ toa đi qua.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Chia (2) cho (1) khử $a, L$ được $t_k = \\tau\\sqrt{k}$, suy ra $\\Delta t = t_n - t_{n-1} = \\tau(\\sqrt{n} - \\sqrt{n-1})$.',
      },
      {
        id: 'se-2-3-numeric',
        kind: 'numeric-unit',
        title: 'Kiểm chứng trường hợp biên & Tính thời gian Δt',
        prompt: 'Kiểm tra công thức với toa đầu tiên ($n = 1$) rồi thay số tính $\\Delta t$ cho toa thứ $7$.',
        theoryAnchorIds: ['ratio-elim'],
        limitingCheck: {
          prompt: 'Khi thay $n = 1$ vào $\\Delta t = \\tau(\\sqrt{n} - \\sqrt{n-1})$, kết quả là gì?',
          choices: [
            {
              id: 'tau',
              label: '$\\Delta t = \\tau$ (khớp đúng thời gian toa thứ nhất đi qua)',
              rationale: 'Chính xác! $\\tau(\\sqrt{1} - \\sqrt{0}) = \\tau$.',
            },
            {
              id: 'zero',
              label: '$\\Delta t = 0$',
              rationale: 'Chưa đúng: $\\sqrt{1} - \\sqrt{0} = 1$.',
            },
          ],
          answerId: 'tau',
        },
        fields: [
          {
            id: 'dt',
            label: 'Thời gian toa thứ 7 đi qua',
            symbolLatex: '\\Delta t',
            expected: 0.785,
            tolerance: 0.02,
            toleranceMode: 'absolute',
            unit: 's',
          },
        ],
        explanation:
          'Thay $\\tau = 4\\text{ s}$ và $n = 7$: $\\Delta t = 4(\\sqrt{7} - \\sqrt{6}) \\approx 4(2{,}6458 - 2{,}4495) \\approx 0{,}785\\text{ s}$.',
        summaryTemplate: 'Thay số: $\\Delta t = 4(\\sqrt{7} - \\sqrt{6}) \\approx 0{,}785\\text{ s}$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/ch2.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-4-6',
    lessonId: 'phy1159-t4-2',
    kind: 'semi-essay',
    title: 'Bài 4.6: Điều kiện đi hết vòng tròn thẳng đứng',
    fadeLevel: 1,
    prompt:
      'Vật nhỏ trượt không ma sát trong máng có vòng tròn thẳng đứng bán kính $R = 1\\text{ m}$. Tìm độ cao thả tối thiểu $H_{\\min}$ so với đáy để vật không rời máng ở đỉnh. Nếu thả ở độ cao $H\' = 2\\text{ m}$ (thỏa $R < H\' < 2{,}5R$), tìm độ cao $h\'$ tại điểm vật rời máng. Bỏ qua chuyển động quay của vật, lấy $g = 9{,}8\\text{ m/s}^2$.',
    given: [
      { symbolLatex: 'R', value: '1', unit: 'm', label: 'Bán kính vòng tròn' },
      { symbolLatex: "H'", value: '2', unit: 'm', label: 'Độ cao thả cho câu b' },
      { symbolLatex: 'g', value: '9,8', unit: 'm/s²', label: 'Gia tốc trọng trường' },
    ],
    theoryAnchors: [
      {
        id: 'mech-energy',
        title: 'Bảo toàn cơ năng trong trường trọng lực',
        formula: 'mgH = mgh + \\dfrac{1}{2}mv^2',
        summary:
          'Máng nhẵn không ma sát và phản lực $\\vec{N}$ luôn vuông góc quỹ đạo nên không sinh công; cơ năng của hệ Vật + Trái Đất được bảo toàn.',
        conditions: [
          'Chọn mốc thế năng tại đáy vòng tròn ($h = 0$).',
          'Độ cao đỉnh vòng tròn là $h_{\\text{đỉnh}} = 2R$.',
        ],
      },
      {
        id: 'loop-normal',
        title: 'Điều kiện động lực học trên vòng tròn thẳng đứng',
        formula: 'N + mg\\cos\\theta = \\dfrac{mv^2}{R}, \\qquad N \\ge 0',
        summary:
          'Ở nửa trên vòng tròn (góc $\\theta$ hợp bởi bán kính và phương thẳng đứng hướng lên, $\\cos\\theta = \\dfrac{h - R}{R}$), lực hướng tâm gồm phản lực $N$ hướng vào tâm và thành phần trọng lực $mg\\cos\\theta$. Vật còn bám máng khi $N \\ge 0$, và rời máng ngay khi $N = 0$.',
        conditions: [
          'Tại đỉnh vòng tròn ($\\theta = 0^\\circ, \\cos\\theta = 1$): $N \\ge 0 \\Leftrightarrow v_{\\text{đỉnh}}^2 \\ge gR$.',
          'Tại điểm rời máng ở nửa trên ($N = 0$): $v^2 = gR\\cos\\theta = g(h\' - R)$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-4-6-balance',
        kind: 'diagram',
        title: 'Lập biểu đồ bảo toàn cơ năng LOL từ lúc thả đến đỉnh vòng',
        prompt:
          'Xây dựng biểu đồ LOL cho hệ **Vật + Trái Đất** (mốc thế năng tại đáy máng) từ lúc thả không vận tốc đầu ở độ cao $H_{\\min}$ đến khi vật tới đỉnh vòng tròn.',
        theoryAnchorIds: ['mech-energy'],
        diagramKind: 'balance-flow',
        spec: {
          kind: 'balance-flow',
          systemLabel: 'Hệ: Vật + Trái Đất',
          initialLabel: 'Lúc thả (độ cao H_min)',
          finalLabel: 'Tại đỉnh vòng (độ cao 2R)',
          maxLevel: 4,
          note: 'Máng không ma sát và phản lực N không sinh công nên tổng cơ năng được bảo toàn.',
          initialBars: [
            { id: 'K1', label: 'Động năng đầu', symbolLatex: 'K_1', expectedState: 'zero', hint: 'Vật được thả nhẹ không vận tốc đầu nên K₁ = 0.' },
            { id: 'U1', label: 'Thế năng đầu', symbolLatex: 'U_1', expectedState: 'positive', hint: 'Vật ở độ cao H_min > 0 nên U₁ > 0.' },
          ],
          finalBars: [
            { id: 'K2', label: 'Động năng tại đỉnh', symbolLatex: 'K_2', expectedState: 'positive', hint: 'Để không rơi ở đỉnh, vật phải còn vận tốc v_đỉnh ≥ √(gR) > 0 nên K₂ > 0.' },
            { id: 'U2', label: 'Thế năng tại đỉnh', symbolLatex: 'U_2', expectedState: 'positive', hint: 'Đỉnh vòng ở độ cao 2R > 0 nên U₂ = 2mgR > 0.' },
          ],
          transferLabel: 'Công lực không thế',
          transferSymbolLatex: 'A_{kt}',
          expectedTransferSign: '0',
          transferHint: 'Không có ma sát, phản lực N vuông góc quỹ đạo nên A_kt = 0.',
          requireConservation: true,
        },
        summaryTemplate:
          'Cơ năng bảo toàn ($A_{kt} = 0$): $U_1 = K_2 + U_2$ với $K_2 > 0$ tại đỉnh.',
      },
      {
        id: 'se-4-6-top-cond',
        kind: 'choice-reasoning',
        title: 'Điều kiện động lực học tại đỉnh vòng tròn',
        prompt:
          'Tại đỉnh vòng tròn, điều kiện vừa đủ để vật không rời máng là gì?',
        theoryAnchorIds: ['loop-normal'],
        choices: [
          {
            id: 'n-ge-0',
            label: '$N \\ge 0 \\Rightarrow v_{\\text{đỉnh}}^2 \\ge gR$',
            rationale:
              'Đúng! Tại đỉnh, cả trọng lực và phản lực đều hướng xuống tâm: $N + mg = \\dfrac{mv_{\\text{đỉnh}}^2}{R}$, nên $N \\ge 0$ đòi hỏi $v_{\\text{đỉnh}}^2 \\ge gR$.',
          },
          {
            id: 'v-ge-0',
            label: '$v_{\\text{đỉnh}} \\ge 0$ (chỉ cần lên tới độ cao $2R$)',
            rationale:
              'Sai: nếu $v_{\\text{đỉnh}} = 0$, trọng lực $mg$ kéo vật rơi tự do rời khỏi máng trước khi lên tới đỉnh.',
          },
          {
            id: 'n-eq-mg',
            label: '$N = mg$ tại đỉnh',
            rationale:
              'Sai: phản lực tối thiểu khi sắp rời máng là $N = 0$, không phải $N = mg$.',
          },
        ],
        answers: ['n-ge-0'],
        hint: 'Viết phương trình định luật II Newton theo phương hướng tâm tại đỉnh vòng tròn.',
        summaryTemplate:
          'Điều kiện $N \\ge 0$ tại đỉnh cho $v_{\\text{đỉnh}}^2 \\ge gR$, kết hợp bảo toàn cơ năng suy ra $H_{\\min} = 2{,}5R$.',
      },
      {
        id: 'se-4-6-transform',
        kind: 'equation-transform',
        title: "Tìm độ cao h' tại điểm vật rời máng",
        prompt:
          "Khi thả ở $H' \\in (R; 2{,}5R)$, vật lên tới nửa trên và rời máng khi $N = 0$. Kết hợp bảo toàn cơ năng và điều kiện hướng tâm để rút $h'$.",
        theoryAnchorIds: ['mech-energy', 'loop-normal'],
        initialEquations: [
          { label: '(1)', latex: "gH' = gh' + \\dfrac{1}{2}v^2" },
          { label: '(2)', latex: "v^2 = g(h' - R)" },
        ],
        goalLatex: "h' = \\dfrac{2H' + R}{3}",
        stages: [
          {
            id: 'st-sub-v2',
            prompt: 'Thế biểu thức $v^2$ từ điều kiện rời máng (2) vào phương trình cơ năng (1):',
            operations: [
              {
                id: 'sub-v2-ok',
                label: "Thế $v^2 = g(h' - R)$ vào (1) và khử $g$ hai vế",
                resultLatex: "H' = h' + \\dfrac{h' - R}{2}",
                canceledLatex: 'g',
                optimal: true,
                feedback: 'Chính xác! Cả $m$ và $g$ đều tự triệt tiêu.',
              },
              {
                id: 'wrong-h-sign',
                label: "Thế nhầm $v^2 = g(R - h')$ vào (1)",
                resultLatex: "H' = h' + \\dfrac{R - h'}{2}",
                optimal: false,
                feedback:
                  "Kiểm tra lại dấu: vật ở nửa trên vòng tròn ($h' > R$) nên $\\cos\\theta = \\dfrac{h' - R}{R} > 0$.",
              },
            ],
          },
          {
            id: 'st-solve-hp',
            prompt: "Quy đồng và rút $h'$ theo $H'$ và $R$:",
            operations: [
              {
                id: 'isolate-hp',
                label: "Nhân hai vế với 2 rồi chuyển $-R$ sang vế trái để rút $h'$",
                resultLatex: "h' = \\dfrac{2H' + R}{3}",
                optimal: true,
                feedback: "Hoàn hảo! Ta thu được công thức $h' = \\dfrac{2H' + R}{3}$.",
              },
            ],
          },
        ],
        summaryTemplate:
          "Thế $v^2 = g(h' - R)$ vào bảo toàn cơ năng, rút gọn được $h' = \\dfrac{2H' + R}{3}$.",
      },
      {
        id: 'se-4-6-numeric',
        kind: 'numeric-unit',
        title: 'Kiểm chứng biên & Tính H_min, h\'',
        prompt: "Kiểm tra công thức tại giới hạn $H' = 2{,}5R$ rồi tính $H_{\\min}$ và $h'$.",
        theoryAnchorIds: ['mech-energy', 'loop-normal'],
        limitingCheck: {
          prompt: "Nếu thay $H' = 2{,}5R$ vào công thức $h' = \\dfrac{2H' + R}{3}$, kết quả là bao nhiêu?",
          choices: [
            {
              id: 'top-2r',
              label: "$h' = 2R$ (vật rời máng ngay tại đỉnh vòng tròn)",
              rationale: 'Chính xác! $(2\\cdot 2{,}5R + R)/3 = 6R/3 = 2R$, khớp hoàn toàn với phần a.',
            },
            {
              id: 'center-r',
              label: "$h' = R$",
              rationale: 'Chưa đúng: $h\' = R$ ứng với $H\' = R$, khi vật chỉ lên tới ngang tâm.',
            },
          ],
          answerId: 'top-2r',
        },
        fields: [
          {
            id: 'Hmin',
            label: 'Độ cao thả tối thiểu',
            symbolLatex: 'H_{\\min}',
            expected: 2.5,
            tolerance: 0.05,
            toleranceMode: 'absolute',
            unit: 'm',
          },
          {
            id: 'hp',
            label: 'Độ cao điểm rời máng',
            symbolLatex: "h'",
            expected: 1.67,
            tolerance: 0.05,
            toleranceMode: 'absolute',
            unit: 'm',
          },
        ],
        explanation:
          "Với $R = 1\\text{ m}$: $H_{\\min} = \\dfrac{5}{2}R = 2{,}5\\text{ m}$. Với $H' = 2\\text{ m}$: $h' = \\dfrac{2\\cdot 2 + 1}{3} = \\dfrac{5}{3} \\approx 1{,}67\\text{ m}$.",
        summaryTemplate: "Thay số: $H_{\\min} = 2{,}5\\text{ m}$, $h' \\approx 1{,}67\\text{ m}$.",
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/ch4.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
  {
    id: 'phy1159-se-4-7',
    lessonId: 'phy1159-t4-3',
    kind: 'semi-essay',
    title: 'Bài 4.7: Neutron va chạm đàn hồi với hạt nhân carbon',
    fadeLevel: 0,
    prompt:
      'Một neutron khối lượng $m$ va chạm đàn hồi với hạt nhân carbon đứng yên có khối lượng $M = 12m$. Sau va chạm, neutron chuyển động theo phương vuông góc với hướng chuyển động ban đầu của nó. Tìm tỉ số $n = K_{\\text{trước}}/K_{\\text{sau}}$ giữa động năng trước và sau va chạm của neutron.',
    given: [
      { symbolLatex: 'M/m', value: '12', label: 'Tỉ số khối lượng hạt nhân carbon và neutron' },
    ],
    theoryAnchors: [
      {
        id: 'elastic-2d',
        title: 'Bảo toàn động lượng 2D & Bảo toàn động năng',
        formula: 'm\\vec{v} = m\\vec{u} + \\vec{P}, \\qquad \\dfrac{1}{2}mv^2 = \\dfrac{1}{2}mu^2 + \\dfrac{P^2}{2M}',
        summary:
          'Va chạm đàn hồi bảo toàn cả vectơ động lượng và tổng động năng của hệ (neutron + hạt nhân carbon). Vì hạt nhân carbon ban đầu đứng yên, động lượng của nó sau va chạm là $\\vec{P} = m\\vec{v} - m\\vec{u}$.',
        conditions: [
          'Vận tốc sau $\\vec{u}$ vuông góc với vận tốc đầu $\\vec{v}$ ($\\vec{v} \\perp \\vec{u}$), tạo thành tam giác động lượng vuông.',
          'Động năng viết theo động lượng: $K_C = \\dfrac{P^2}{2M}$.',
        ],
      },
    ],
    steps: [
      {
        id: 'se-4-7-momentum',
        kind: 'choice-reasoning',
        title: 'Liên hệ động lượng theo hai trục vuông góc',
        prompt:
          'Gọi $v$ là tốc độ đầu và $u$ là tốc độ sau va chạm của neutron ($\\vec{u} \\perp \\vec{v}$). Bình phương động lượng $P^2$ của hạt nhân carbon sau va chạm thỏa hệ thức nào?',
        theoryAnchorIds: ['elastic-2d'],
        choices: [
          {
            id: 'pythagoras',
            label: '$P^2 = m^2(v^2 + u^2)$',
            rationale:
              'Chính xác! Từ $\\vec{P} = m\\vec{v} - m\\vec{u}$ và $\\vec{v} \\perp \\vec{u}$, định lý Pythagore cho $P^2 = (mv)^2 + (mu)^2 = m^2(v^2 + u^2)$.',
          },
          {
            id: 'diff-sq',
            label: '$P^2 = m^2(v - u)^2$',
            rationale:
              'Sai: biểu thức này chỉ đúng nếu $\\vec{u}$ cùng phương $\\vec{v}$, không phải vuông góc.',
          },
          {
            id: 'sum-sq',
            label: '$P^2 = m^2(v + u)^2$',
            rationale:
              'Sai: động lượng là đại lượng vectơ, không cộng đại số khi hai vận tốc vuông góc.',
          },
        ],
        answers: ['pythagoras'],
        hint: 'Vẽ tam giác vectơ $\\vec{P} = m\\vec{v} - m\\vec{u}$ với hai cạnh $m\\vec{v}$ và $m\\vec{u}$ vuông góc nhau.',
        summaryTemplate:
          'Do $\\vec{v} \\perp \\vec{u}$, bảo toàn động lượng cho $P^2 = m^2(v^2 + u^2)$.',
      },
      {
        id: 'se-4-7-transform',
        kind: 'equation-transform',
        title: 'Rút tỉ số động năng n từ bảo toàn động năng',
        prompt:
          'Thế $P^2 = m^2(v^2 + u^2)$ vào phương trình bảo toàn động năng để rút tỉ số $n = \\dfrac{K_{\\text{trước}}}{K_{\\text{sau}}} = \\dfrac{v^2}{u^2}$.',
        theoryAnchorIds: ['elastic-2d'],
        initialEquations: [
          { label: '(1)', latex: '\\dfrac{1}{2}mv^2 = \\dfrac{1}{2}mu^2 + \\dfrac{P^2}{2M}' },
          { label: '(2)', latex: 'P^2 = m^2(v^2 + u^2)' },
        ],
        goalLatex: 'n = \\dfrac{M + m}{M - m}',
        stages: [
          {
            id: 'st-sub-p2',
            prompt: 'Thế (2) vào (1) và khử các thừa số chung:',
            operations: [
              {
                id: 'sub-p2-ok',
                label: 'Thế $P^2 = m^2(v^2 + u^2)$ vào (1) rồi nhân hai vế với $\\dfrac{2}{m}$',
                resultLatex: 'v^2 = u^2 + \\dfrac{m}{M}(v^2 + u^2)',
                canceledLatex: '\\frac{1}{2}m',
                optimal: true,
                feedback: 'Chính xác! Phương trình chỉ còn liên hệ giữa $v^2, u^2$ và tỉ số $m/M$.',
              },
              {
                id: 'forget-m2',
                label: 'Thế $P^2 = m(v^2 + u^2)$ (quên bình phương $m$)',
                resultLatex: 'v^2 = u^2 + \\dfrac{1}{M}(v^2 + u^2)',
                optimal: false,
                feedback: 'Sai thứ nguyên! $P = mv$ nên $P^2$ phải chứa $m^2$.',
              },
            ],
          },
          {
            id: 'st-ratio-n',
            prompt: 'Gom các số hạng chứa $v^2$ và $u^2$ về hai vế để rút $n = v^2/u^2$:',
            operations: [
              {
                id: 'isolate-n',
                label: 'Nhân $M$ hai vế: $(M - m)v^2 = (M + m)u^2 \\Rightarrow n = \\dfrac{v^2}{u^2}$',
                resultLatex: 'n = \\dfrac{M + m}{M - m}',
                optimal: true,
                feedback: 'Hoàn hảo! Tỉ số động năng chỉ phụ thuộc vào $M$ và $m$.',
              },
            ],
          },
        ],
        summaryTemplate:
          'Thế $P^2 = m^2(v^2 + u^2)$ vào bảo toàn động năng cho $(M-m)v^2 = (M+m)u^2$, suy ra $n = \\dfrac{M+m}{M-m}$.',
      },
      {
        id: 'se-4-7-numeric',
        kind: 'numeric-unit',
        title: 'Kiểm chứng giới hạn M ≫ m & Tính tỉ số n',
        prompt: 'Kiểm tra trường hợp bia rất nặng rồi tính giá trị số của $n$ với $M = 12m$.',
        theoryAnchorIds: ['elastic-2d'],
        limitingCheck: {
          prompt: 'Khi hạt nhân bia rất nặng ($M \\gg m$), tỉ số $n = \\dfrac{M+m}{M-m}$ tiến tới giá trị nào?',
          choices: [
            {
              id: 'one',
              label: '$n \\to 1$ (neutron bật vuông góc gần như không truyền động năng cho bia nặng)',
              rationale: 'Chính xác! Bia quá nặng hầu như đứng yên nên động năng neutron bảo toàn ($K_{\\text{sau}} \\approx K_{\\text{trước}}$).',
            },
            {
              id: 'inf',
              label: '$n \\to \\infty$',
              rationale: 'Chưa đúng: khi $M \\gg m$, cả tử và mẫu đều xấp xỉ $M$ nên tỉ số tiến tới $1$.',
            },
          ],
          answerId: 'one',
        },
        fields: [
          {
            id: 'n',
            label: 'Tỉ số động năng trước / sau',
            symbolLatex: 'n',
            expected: 1.182,
            tolerance: 0.02,
            toleranceMode: 'absolute',
            unit: 'lần',
          },
        ],
        explanation:
          'Thay $M = 12m$: $n = \\dfrac{12m + m}{12m - m} = \\dfrac{13}{11} \\approx 1{,}182$.',
        summaryTemplate: 'Thay số: $n = \\dfrac{13}{11} \\approx 1{,}182$.',
      },
    ],
    provenance: {
      repository: 'https://github.com/HanitaV/VLDC-HUS',
      revision: '5d6301638664dc18b4913b944c0224761d705a2e',
      path: 'js/data/ch4.js',
      rights: 'approved',
      attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted into Semi-Essay Studio format.',
    },
  },
];
