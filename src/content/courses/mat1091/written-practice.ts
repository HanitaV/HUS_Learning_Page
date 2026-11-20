import type { SemiEssayExercise } from '../../../domain/semi-essay';

const CH1_PROVENANCE = {
  repository: 'local:docs/HUS-learning-resource',
  revision: 'sha256:ff83b287470fec9cd707998066d33ef9f6387874f99f445ffdf7e1efe5ce05b0',
  path: 'gt1/chuong/02-ch1.tex',
  rights: 'approved',
} as const;

const CH2_PROVENANCE = {
  repository: 'local:docs/HUS-learning-resource',
  revision: 'sha256:20b9743e746c014b2fc71d0e726ad46449a0da063b723ea21d55c8a251acb325',
  path: 'gt1/chuong/03-ch2.tex',
  rights: 'approved',
} as const;

const CH3_PROVENANCE = {
  repository: 'local:docs/HUS-learning-resource',
  revision: 'sha256:be1558c68d29ed6b5377b209d4a09e2407c807ecff05c15eafd903386aef3b3c',
  path: 'gt1/chuong/04-ch3.tex',
  rights: 'approved',
} as const;

const CH4_PROVENANCE = {
  repository: 'local:docs/HUS-learning-resource',
  revision: 'sha256:d647b9d7e6a46760d84b9a47682da462432783b63e2976ecb02af8ab1fbf9c77',
  path: 'gt1/chuong/05-ch4.tex',
  rights: 'approved',
} as const;

export default [
  {
    id: 'mat1091-supremum-infimum-written',
    lessonId: 'mat1091-supremum-infimum',
    kind: 'semi-essay',
    title: 'Chứng minh cận trên đúng và cận dưới đúng',
    prompt: 'Tìm $\\sup A$, $\\inf A$ với $A=\\left\\{\\frac{n}{n+1}:n\\in\\mathbb N^*\\right\\}$.',
    given: [],
    theoryAnchors: [],
    steps: [
      {
        id: 'mat1091-supremum-infimum-written-infimum',
        kind: 'written-reasoning',
        title: 'Tìm cận dưới đúng và kiểm tra đạt được',
        prompt: 'Viết n/(n + 1) dưới dạng 1 − 1/(n + 1). Giải thích tính tăng, tìm giá trị nhỏ nhất và kết luận về inf A.',
        theoryAnchorIds: [],
        hint: 'Khi n tăng, phân số 1/(n + 1) thay đổi thế nào? N* bắt đầu từ giá trị nào?',
        modelAnswer: 'Vì n/(n + 1) = 1 − 1/(n + 1) tăng theo n và n ∈ N* bắt đầu từ 1, giá trị nhỏ nhất đạt tại n = 1, bằng 1/2. Do đó inf A = min A = 1/2.',
        rubric: [
          { id: 'monotone', prompt: 'Tôi đã giải thích tính tăng từ biểu thức 1 − 1/(n + 1).' },
          { id: 'attained', prompt: 'Tôi đã nêu giá trị 1/2 đạt tại n = 1 và kết luận inf A = min A.' },
        ],
        summaryTemplate: 'Dãy tăng, đạt giá trị nhỏ nhất 1/2 tại n = 1; inf A = min A = 1/2.',
      },
      {
        id: 'mat1091-supremum-infimum-written-supremum',
        kind: 'written-reasoning',
        title: 'Chứng minh cận trên đúng bằng ε',
        prompt: 'Chứng minh 1 là cận trên rồi dùng một ε > 0 tùy ý để giải thích không thể hạ cận trên đó. Nêu 1 có thuộc A hay không.',
        theoryAnchorIds: [],
        hints: [
          'Chỉ nêu mọi phần tử nhỏ hơn 1 chưa chứng minh 1 là cận trên nhỏ nhất.',
          'Trong nguồn, chọn n > 1/ε rồi so sánh 1/(n + 1) với ε.',
        ],
        modelAnswer: 'Mọi phần tử n/(n + 1) = 1 − 1/(n + 1) đều nhỏ hơn 1 nên 1 là cận trên và không thuộc A. Với mọi ε > 0, chọn số nguyên dương n > 1/ε thì n/(n + 1) > 1 − ε. Vậy sup A = 1, dù 1 không đạt được trong A.',
        rubric: [
          { id: 'upper', prompt: 'Tôi đã chứng minh mọi phần tử đều nhỏ hơn 1.' },
          { id: 'epsilon', prompt: 'Tôi đã dùng ε tùy ý và chọn n cụ thể để có phần tử lớn hơn 1 − ε.' },
          { id: 'unattained', prompt: 'Tôi đã phân biệt sup A = 1 với một giá trị lớn nhất thuộc A.' },
        ],
        summaryTemplate: 'Với mọi ε > 0 có phần tử lớn hơn 1 − ε; sup A = 1 và 1 không thuộc A.',
      },
    ],
    explanation: 'inf A = min A = 1/2; sup A = 1 không thuộc A. Cận trên nhỏ nhất được xác nhận bằng điều kiện ε.',
    provenance: CH1_PROVENANCE,
  },
  {
    id: 'mat1091-ch2-lagrange-written',
    lessonId: 'mat1091-ch2-mvt-lhospital',
    kind: 'semi-essay',
    title: 'Chứng minh bất đẳng thức bằng định lý Lagrange',
    prompt: 'Chứng minh $\\frac{x}{1+x} < \\ln(1+x) < x$ với mọi $x > 0$.',
    given: [],
    theoryAnchors: [],
    steps: [
      {
        id: 'mat1091-ch2-lagrange-written-apply',
        kind: 'written-reasoning',
        title: 'Áp dụng định lý Lagrange trên [0, x]',
        prompt: 'Chọn hàm f(t) = ln(1 + t) trên [0, x] với x > 0. Kiểm tra giả thuyết và viết biểu thức Lagrange theo điểm trung gian c.',
        theoryAnchorIds: [],
        hint: 'Hàm ln(1 + t) liên tục và khả vi trên [0, x] khi x > 0; tính ln(1 + 0).',
        modelAnswer: 'Với x > 0 cố định, f(t) = ln(1 + t) liên tục trên [0, x] và khả vi trên (0, x) với f\'(t) = 1/(1 + t). Theo định lý Lagrange, tồn tại c ∈ (0, x) sao cho ln(1 + x) − ln 1 = f\'(c)(x − 0), tức ln(1 + x) = x/(1 + c).',
        rubric: [
          { id: 'hypothesis', prompt: 'Tôi đã kiểm tra tính liên tục trên [0, x] và khả vi trên (0, x).' },
          { id: 'equation', prompt: 'Tôi đã suy ra ln(1 + x) = x/(1 + c) với c ∈ (0, x).' },
        ],
        summaryTemplate: 'Áp dụng Lagrange cho f(t) = ln(1 + t) trên [0, x] thu được ln(1 + x) = x/(1 + c) với c ∈ (0, x).',
      },
      {
        id: 'mat1091-ch2-lagrange-written-bound',
        kind: 'written-reasoning',
        title: 'Đánh giá c ∈ (0, x) để suy ra bất đẳng thức',
        prompt: 'Từ 0 < c < x, đánh giá 1/(1 + c) và nhân với x > 0 để kết luận.',
        theoryAnchorIds: [],
        hint: 'Khi c nằm giữa 0 và x thì 1 + c nằm giữa 1 và 1 + x.',
        modelAnswer: 'Vì 0 < c < x nên 1 < 1 + c < 1 + x, suy ra 1/(1 + x) < 1/(1 + c) < 1. Nhân cả ba vế với x > 0 ta được x/(1 + x) < ln(1 + x) < x với mọi x > 0.',
        rubric: [
          { id: 'reciprocal', prompt: 'Tôi đã đảo chiều bất đẳng thức đúng khi lấy nghịch đảo 1/(1 + c).' },
          { id: 'multiply', prompt: 'Tôi đã nhân với x > 0 và kết luận đủ hai chiều bất đẳng thức.' },
        ],
        summaryTemplate: 'Từ 1/(1 + x) < 1/(1 + c) < 1 và x > 0 suy ra x/(1 + x) < ln(1 + x) < x.',
      },
    ],
    explanation: 'Định lý Lagrange biến hiệu ln(1 + x) − ln 1 thành x/(1 + c) với c ∈ (0, x), cho phép kẹp trực tiếp giữa x/(1 + x) và x.',
    provenance: CH2_PROVENANCE,
  },
  {
    id: 'mat1091-ch3-improper-written',
    lessonId: 'mat1091-ch3-improper',
    kind: 'semi-essay',
    title: 'Chứng minh hội tụ và tính tích phân suy rộng',
    prompt: 'Chứng minh $I = \\int_1^{\\infty} \\frac{dx}{(x^2+3x+2)^2}$ hội tụ và tính giá trị.',
    given: [],
    theoryAnchors: [],
    steps: [
      {
        id: 'mat1091-ch3-improper-written-converge',
        kind: 'written-reasoning',
        title: 'Chứng minh tích phân hội tụ tại +∞',
        prompt: 'So sánh hàm dưới dấu tích phân với một hàm chuẩn dạng 1/x^α khi x → +∞ và kết luận sự hội tụ.',
        theoryAnchorIds: [],
        hint: 'Bậc cao nhất của (x^2 + 3x + 2)^2 là x^4; tích phân ∫_1^{+∞} x^{-α} dx hội tụ khi α > 1.',
        modelAnswer: 'Hàm dưới dấu tích phân liên tục và dương trên [1, +∞). Khi x → +∞, (x^2 + 3x + 2)^2 ~ x^4 nên f(x) ~ 1/x^4. Vì ∫_1^{+∞} dx/x^4 hội tụ (α = 4 > 1), theo tiêu chuẩn so sánh giới hạn thì I hội tụ.',
        rubric: [
          { id: 'asymptotic', prompt: 'Tôi đã chỉ ra f(x) ~ 1/x^4 khi x → +∞.' },
          { id: 'criterion', prompt: 'Tôi đã đối chiếu với α = 4 > 1 theo tiêu chuẩn so sánh giới hạn.' },
        ],
        summaryTemplate: 'f(x) ~ 1/x^4 khi x → +∞ với α = 4 > 1 nên tích phân hội tụ.',
      },
      {
        id: 'mat1091-ch3-improper-written-compute',
        kind: 'written-reasoning',
        title: 'Tách phân thức, gộp logarit và tính giới hạn',
        prompt: 'Tách 1/[(x + 1)(x + 2)]^2 thành tổng các phân thức đơn giản, tìm nguyên hàm (nhớ gộp logarit) rồi cho cận trên A → +∞.',
        theoryAnchorIds: [],
        hint: 'Bình phương đẳng thức 1/[(x + 1)(x + 2)] = 1/(x + 1) − 1/(x + 2).',
        modelAnswer: 'Vì 1/[(x+1)(x+2)] = 1/(x+1) − 1/(x+2), bình phương hai vế được 1/(x+1)^2 + 1/(x+2)^2 − 2/(x+1) + 2/(x+2). Nguyên hàm là F(x) = −1/(x+1) − 1/(x+2) − 2 ln[(x+1)/(x+2)]. Khi A → +∞, F(A) → 0; tại x = 1, F(1) = −1/2 − 1/3 − 2 ln(2/3). Vậy I = 0 − F(1) = 5/6 − 2 ln(3/2).',
        rubric: [
          { id: 'partial-fraction', prompt: 'Tôi đã tách đúng phân thức bằng cách bình phương 1/(x+1) − 1/(x+2).' },
          { id: 'log-merge', prompt: 'Tôi đã gộp các số hạng logarit thành ln[(x+1)/(x+2)] trước khi cho A → +∞.' },
          { id: 'value', prompt: 'Tôi đã tính đúng kết quả I = 5/6 − 2 ln(3/2).' },
        ],
        summaryTemplate: 'Tách phân thức và gộp logarit cho F(A) → 0, kết quả I = 5/6 − 2 ln(3/2).',
      },
    ],
    explanation: 'Hội tụ nhờ tương đương 1/x^4 (α = 4 > 1); giá trị tính qua tách phân thức và gộp logarit là 5/6 − 2 ln(3/2).',
    provenance: CH3_PROVENANCE,
  },
  {
    id: 'mat1091-ch4-power-series-written',
    lessonId: 'mat1091-ch4-power-series',
    kind: 'semi-essay',
    title: 'Tìm miền hội tụ của chuỗi lũy thừa',
    prompt: 'Tìm miền hội tụ của $\\sum_{n=1}^{\\infty} \\frac{n}{(n^2+1)3^n} x^n$.',
    given: [],
    theoryAnchors: [],
    steps: [
      {
        id: 'mat1091-ch4-power-series-written-radius',
        kind: 'written-reasoning',
        title: 'Tìm bán kính hội tụ và khoảng hội tụ',
        prompt: 'Xác định tâm x_0, hệ số a_n và tính ρ = lim |a_{n+1}/a_n| để suy ra bán kính hội tụ R.',
        theoryAnchorIds: [],
        hint: 'Chuỗi có tâm x_0 = 0; rút gọn tỉ số (n+1)/n và (n^2+1)/((n+1)^2+1) khi n → ∞.',
        modelAnswer: 'Chuỗi có tâm x_0 = 0 và a_n = n/[(n^2 + 1)3^n]. Ta có |a_{n+1}/a_n| = [(n + 1)/((n + 1)^2 + 1)] · [(n^2 + 1)/n] · (1/3) → 1/3 khi n → ∞. Do đó ρ = 1/3, bán kính hội tụ R = 3 và khoảng hội tụ là (−3, 3).',
        rubric: [
          { id: 'ratio', prompt: 'Tôi đã lập đúng tỉ số |a_{n+1}/a_n| và tính giới hạn ρ = 1/3.' },
          { id: 'radius', prompt: 'Tôi đã suy ra R = 1/ρ = 3 và khoảng (−3, 3).' },
        ],
        summaryTemplate: 'Tính ρ = 1/3, suy ra R = 3 và khoảng hội tụ (−3, 3).',
      },
      {
        id: 'mat1091-ch4-power-series-written-endpoints',
        kind: 'written-reasoning',
        title: 'Xét hai đầu mút x = 3 và x = −3',
        prompt: 'Thế lần lượt x = 3 và x = −3 vào chuỗi, xét tính hội tụ từng đầu mút và kết luận miền hội tụ.',
        theoryAnchorIds: [],
        hint: 'Tại x = 3 so sánh với 1/n; tại x = −3 kiểm tra điều kiện tiêu chuẩn Leibniz.',
        modelAnswer: 'Tại x = 3: chuỗi trở thành ∑ n/(n^2 + 1), tương đương ∑ 1/n nên phân kỳ. Tại x = −3: chuỗi trở thành ∑ (−1)^n n/(n^2 + 1). Đặt b_n = n/(n^2 + 1); vì f\'(x) = (1 − x^2)/(x^2 + 1)^2 < 0 với x > 1 nên b_n giảm từ n = 1, đồng thời lim b_n = 0, nên chuỗi hội tụ theo tiêu chuẩn Leibniz. Vậy miền hội tụ là [−3, 3).',
        rubric: [
          { id: 'right-end', prompt: 'Tôi đã xét x = 3 bằng so sánh với ∑ 1/n và kết luận phân kỳ.' },
          { id: 'left-end', prompt: 'Tôi đã xét x = −3 bằng tiêu chuẩn Leibniz (b_n giảm và tiến về 0) và kết luận hội tụ.' },
          { id: 'interval', prompt: 'Tôi đã kết luận đúng miền hội tụ [−3, 3).' },
        ],
        summaryTemplate: 'x = 3 phân kỳ, x = −3 hội tụ theo Leibniz; miền hội tụ là [−3, 3).',
      },
    ],
    explanation: 'Bán kính hội tụ R = 3; phân kỳ tại x = 3 và hội tụ tại x = −3 theo Leibniz nên miền hội tụ là [−3, 3).',
    provenance: CH4_PROVENANCE,
  },
] as const satisfies readonly SemiEssayExercise[];
