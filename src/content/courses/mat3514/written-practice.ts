import type { SemiEssayExercise } from '../../../domain/semi-essay';

const provenance = {
  repository: 'https://github.com/HanitaV/DSA-HUS',
  revision: '01e2385bc1bbf16e3b7a2ab527e1b572ae06360d',
  rights: 'unreviewed',
  attribution: 'HanitaV, DSA-HUS; source license not declared, rights unreviewed.',
} as const;

export default [
  {
    id: 'mat3514-array-list-written', lessonId: 'mat3514-array-list', kind: 'semi-essay',
    title: 'Giải thích chiều dịch chuyển trong danh sách mảng',
    prompt: 'Vì sao khi xóa phần tử ở vị trí `idx` thì phải duyệt xuôi từ `idx` tới `size - 2`, còn khi chèn tại `idx` lại phải duyệt ngược từ `size - 1` về `idx`?',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'mat3514-array-list-written-delete', kind: 'written-reasoning',
        title: 'Giải thích khi xóa',
        prompt: 'Mô tả ô nguồn và ô đích của phép dịch khi xóa. Vì sao chiều duyệt xuôi giữ được dữ liệu chưa đọc?',
        theoryAnchorIds: [], hint: 'Đối chiếu phép gán data[i] = data[i + 1] trong bài học.',
        modelAnswer: 'Khi xóa, lấy data[i + 1] gán vào data[i] từ idx tới size - 2. Duyệt xuôi kéo phần tử bên phải sang ô trống bên trái, không ghi đè các phần tử bên phải chưa đọc.',
        rubric: [
          { id: 'assignment', prompt: 'Tôi đã nêu đúng ô nguồn i + 1 và ô đích i.' },
          { id: 'unread', prompt: 'Tôi đã giải thích vì sao dữ liệu chưa đọc không bị ghi đè khi duyệt xuôi.' },
        ],
        summaryTemplate: 'Xóa: duyệt xuôi, kéo phần tử bên phải vào ô trống bên trái.',
      },
      {
        id: 'mat3514-array-list-written-insert', kind: 'written-reasoning',
        title: 'Giải thích khi chèn và đối chiếu',
        prompt: 'Mô tả chiều dịch khi chèn và giải thích điều xảy ra nếu duyệt xuôi. Kết luận nguyên tắc chung của hai thao tác.',
        theoryAnchorIds: [], hints: ['Ô trống để dịch vào ban đầu nằm ở bên nào?', 'Theo dõi data[idx] nếu liên tiếp gán data[i + 1] = data[i] theo chiều xuôi.'],
        modelAnswer: 'Khi chèn, duyệt ngược từ size - 1 về idx, gán data[i + 1] = data[i] để đẩy sang ô trống phía sau. Nếu duyệt xuôi, phần tử vừa ghi sẽ bị đọc lại và ghi đè các phần tử sau bằng data[idx]. Cả hai thao tác chọn chiều để không phá dữ liệu chưa đọc.',
        rubric: [
          { id: 'backward', prompt: 'Tôi đã nêu chiều từ size - 1 về idx và phép gán sang i + 1.' },
          { id: 'overwrite', prompt: 'Tôi đã giải thích lỗi ghi đè khi chèn theo chiều xuôi.' },
        ],
        summaryTemplate: 'Chèn: duyệt ngược để dịch sang phải mà không ghi đè dữ liệu chưa đọc.',
      },
    ],
    explanation: 'Duyệt xuôi khi xóa kéo phần tử bên phải sang trái vào ô vừa trống mà không ghi đè dữ liệu chưa đọc; duyệt ngược khi chèn đẩy phần tử bên phải sang ô trống phía sau để chừa chỗ tại idx.',
    provenance: { ...provenance, path: 'content/lessons/array-list.md' },
  },
  {
    id: 'mat3514-big-o-written', lessonId: 'mat3514-big-o', kind: 'semi-essay',
    title: 'Viết chứng minh O lớn bằng định nghĩa',
    prompt: 'Chứng minh $3n^2 + 10n = O(n^2)$ bằng cách chọn $C$, $n_0$.',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'mat3514-big-o-written-bound', kind: 'written-reasoning',
        title: 'Tạo một cận chung',
        prompt: 'Chọn một ngưỡng cho n và chặn số hạng 10n bởi một bội của n². Viết đầy đủ chuỗi bất đẳng thức cho cả biểu thức.',
        theoryAnchorIds: [], hint: 'Với n ≥ 1, hãy so sánh n với n².',
        modelAnswer: 'Với mọi n ≥ 1, n ≤ n² nên 10n ≤ 10n². Do đó 3n² + 10n ≤ 3n² + 10n² = 13n².',
        rubric: [
          { id: 'threshold', prompt: 'Tôi đã nêu rõ bất đẳng thức đúng với mọi n ≥ 1.' },
          { id: 'bound', prompt: 'Tôi đã chặn 10n và cộng lại để được cận cho toàn biểu thức.' },
        ],
        summaryTemplate: 'Với n ≥ 1: 3n² + 10n ≤ 13n².',
      },
      {
        id: 'mat3514-big-o-written-definition', kind: 'written-reasoning',
        title: 'Đối chiếu với định nghĩa',
        prompt: 'Nêu một cặp C, n₀ từ cận vừa tìm và giải thích vì sao cặp đó đủ để kết luận theo định nghĩa O lớn.',
        theoryAnchorIds: [], hint: 'Phân biệt hệ số nhân C và ngưỡng n₀. Không cần tìm cặp nhỏ nhất.',
        modelAnswer: 'Chọn C = 13 và n₀ = 1. Ta đã có 3n² + 10n ≤ Cn² với mọi n ≥ n₀, nên theo định nghĩa 3n² + 10n = O(n²).',
        rubric: [
          { id: 'constants', prompt: 'Tôi đã chỉ ra một hệ số C > 0 và một ngưỡng n₀ cụ thể.' },
          { id: 'all-n', prompt: 'Tôi đã liên hệ cận đúng với mọi n ≥ n₀ với định nghĩa O lớn.' },
        ],
        summaryTemplate: 'C = 13, n₀ = 1 thỏa định nghĩa, do đó biểu thức là O(n²).',
      },
    ],
    explanation: 'Với n ≥ 1: 10n ≤ 10n², nên 3n² + 10n ≤ 13n². Chọn C = 13, n₀ = 1.',
    provenance: { ...provenance, path: 'content/lessons/big-o.md' },
  },
] as const satisfies readonly SemiEssayExercise[];
