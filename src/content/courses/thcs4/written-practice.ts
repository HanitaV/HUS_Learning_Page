import type { SemiEssayExercise } from '../../../domain/semi-essay';

const provenance = {
  repository: 'https://github.com/HanitaV/DSA-HUS',
  revision: '01e2385bc1bbf16e3b7a2ab527e1b572ae06360d',
  rights: 'unreviewed',
  attribution: 'HanitaV, DSA-HUS; source license not declared, rights unreviewed.',
} as const;

export default [
  {
    id: 'thcs4-cb-array-1d-written', lessonId: 'thcs4-cb-array-1d', kind: 'semi-essay',
    title: 'Phân biệt độ dài và chỉ số cuối của mảng',
    prompt: 'Mảng `double[] v = {0.5, 4.0, 3.25, 10, 2};` có `v.length` bằng bao nhiêu và chỉ số của phần tử cuối cùng là gì?',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'thcs4-cb-array-1d-written-length', kind: 'written-reasoning',
        title: 'Đếm phần tử và nêu quy tắc chỉ số',
        prompt: 'Đếm số phần tử được khởi tạo. Nêu điểm bắt đầu và giới hạn hợp lệ của chỉ số mảng Java.',
        theoryAnchorIds: [], hint: 'Độ dài là số ô, còn chỉ số là nhãn vị trí bắt đầu từ 0.',
        modelAnswer: 'Dãy khởi tạo có 5 phần tử nên v.length = 5. Chỉ số mảng bắt đầu từ 0 và kết thúc ở n - 1 với n là độ dài.',
        rubric: [
          { id: 'count', prompt: 'Tôi đã xác định độ dài từ số phần tử trong dãy khởi tạo.' },
          { id: 'zero', prompt: 'Tôi đã nêu chỉ số bắt đầu từ 0 và kết thúc ở n - 1.' },
        ],
        summaryTemplate: 'Mảng có 5 phần tử; chỉ số bắt đầu từ 0.',
      },
      {
        id: 'thcs4-cb-array-1d-written-last', kind: 'written-reasoning',
        title: 'Kết luận và kiểm tra biên',
        prompt: 'Tính chỉ số cuối, nêu giá trị ở đó và giải thích vì sao v[v.length] không phải phần tử cuối.',
        theoryAnchorIds: [], hint: 'Đối chiếu n - 1 với chính n; bài học nêu lỗi vượt biên mảng.',
        modelAnswer: 'Chỉ số cuối là v.length - 1 = 4 và v[4] = 2.0. v[v.length] là v[5], vượt khỏi các chỉ số hợp lệ 0 đến 4 và gây ArrayIndexOutOfBoundsException khi chạy.',
        rubric: [
          { id: 'last', prompt: 'Tôi đã phân biệt chỉ số cuối 4 với độ dài 5 và nêu v[4] = 2.0.' },
          { id: 'bounds', prompt: 'Tôi đã giải thích vì sao chỉ số bằng độ dài vượt biên mảng.' },
        ],
        summaryTemplate: 'Chỉ số cuối là 4, v[4] = 2.0; v[5] vượt biên.',
      },
    ],
    explanation: 'v.length bằng 5 và chỉ số phần tử cuối cùng là 4 (v[4] == 2.0).',
    provenance: { ...provenance, path: 'content/lessons/cb-array-1d.md' },
  },
  {
    id: 'thcs4-cb-branching-if-switch-written', lessonId: 'thcs4-cb-branching-if-switch', kind: 'semi-essay',
    title: 'Lần theo luồng chạy khi switch thiếu break',
    prompt: 'Trong `printSeason("Jan")`, nếu bỏ câu lệnh `break;` ở nhánh `"Mar"`, chương trình sẽ in ra những gì?',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'thcs4-cb-branching-if-switch-written-entry', kind: 'written-reasoning',
        title: 'Xác định điểm vào switch',
        prompt: 'Dựa trên code printSeason trong bài học, nêu nhóm case khớp với "Jan" và dòng in đầu tiên.',
        theoryAnchorIds: [], hint: 'Các nhãn Jan, Feb, Mar dùng chung một khối lệnh.',
        modelAnswer: 'Giá trị month là "Jan" nên đi vào nhóm case Jan/Feb/Mar và thực hiện dòng in Jan -> Spring.',
        rubric: [
          { id: 'match', prompt: 'Tôi đã xác định đúng nhóm case Jan/Feb/Mar.' },
          { id: 'first', prompt: 'Tôi đã giữ giá trị month là Jan khi viết dòng in đầu tiên.' },
        ],
        summaryTemplate: 'Jan khớp nhóm đầu và in Jan -> Spring.',
      },
      {
        id: 'thcs4-cb-branching-if-switch-written-fallthrough', kind: 'written-reasoning',
        title: 'Giải thích chạy tiếp và điểm dừng',
        prompt: 'Sau khi bỏ break đầu tiên, chương trình chạy tới đâu, in thêm gì và dừng ở lệnh nào? Viết đầy đủ thứ tự đầu ra.',
        theoryAnchorIds: [], hint: 'Thiếu break không khiến switch kiểm tra lại giá trị month ở nhóm case tiếp theo.',
        modelAnswer: 'Thiếu break làm chương trình chạy tiếp xuống nhóm Apr/May/Jun, in thêm Jan -> Summer rồi gặp break ở đó và thoát switch. Đầu ra lần lượt là Jan -> Spring, Jan -> Summer.',
        rubric: [
          { id: 'flow', prompt: 'Tôi đã giải thích chạy tiếp xuống nhóm Apr/May/Jun dù month vẫn là Jan.' },
          { id: 'stop', prompt: 'Tôi đã nêu hai dòng theo đúng thứ tự và break tiếp theo là điểm dừng.' },
        ],
        summaryTemplate: 'Thiếu break gây chạy tiếp: in Jan -> Summer rồi thoát ở break tiếp theo.',
      },
    ],
    explanation: 'Chương trình in Jan -> Spring rồi chạy tiếp xuống nhánh Apr/May/Jun và in thêm Jan -> Summer trước khi gặp break;',
    provenance: { ...provenance, path: 'content/lessons/cb-branching-if-switch.md' },
  },
] as const satisfies readonly SemiEssayExercise[];
