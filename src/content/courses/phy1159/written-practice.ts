import type { SemiEssayExercise } from '../../../domain/semi-essay';

export default [{
  id: 'phy1159-t1-2-written',
  lessonId: 'phy1159-t1-2',
  kind: 'semi-essay',
  title: 'Giải thích giới hạn của phép kiểm tra thứ nguyên',
  prompt: 'Trong một bài làm, sinh viên rút ra chu kỳ con lắc lò xo là $T = 4\\pi \\sqrt{\\dfrac{m}{k}}$ (với $[k] = [F]/L = M/T^2$). Phân tích thứ nguyên cho ta kết luận nào chính xác nhất?',
  given: [],
  theoryAnchors: [],
  steps: [{
    id: 'phy1159-t1-2-written-dimensions', kind: 'written-reasoning',
    title: 'Viết phép phân tích thứ nguyên',
    prompt: 'Viết thứ nguyên của m/k rồi lấy căn. Giải thích vì sao hệ số 4π không làm thay đổi kết quả kiểm tra.',
    theoryAnchorIds: [],
    hints: ['Thay [m] = M và [k] = M/T² trước khi rút gọn.', 'Phân biệt một hệ số thuần số với một đại lượng mang thứ nguyên.'],
    modelAnswer: '$[m/k] = M/(M/T^2) = T^2$, nên $[\\sqrt{m/k}] = T$. Hệ số $4\\pi$ không có thứ nguyên, do đó vế phải mang thứ nguyên thời gian, khớp với chu kỳ ở vế trái.',
    rubric: [{ id: 'ratio', prompt: 'Tôi đã chỉ ra thứ nguyên của m/k là T² trước khi lấy căn.' }, { id: 'coefficient', prompt: 'Tôi đã giải thích hệ số 4π là thuần số.' }],
    summaryTemplate: 'Hai vế có cùng thứ nguyên thời gian; hệ số thuần số không bị kiểm tra bởi phương pháp này.',
  }, {
    id: 'phy1159-t1-2-written-conclusion', kind: 'written-reasoning',
    title: 'Nêu phạm vi kết luận',
    prompt: 'Từ kết quả trên, hãy viết điều có thể và điều chưa thể kết luận về công thức. Liên hệ với hệ số 4π trong đề.',
    theoryAnchorIds: [],
    hint: 'Cùng thứ nguyên là điều kiện cần; một hệ số thuần số sai vẫn vượt qua phép kiểm tra.',
    modelAnswer: 'Công thức không sai về thứ nguyên, nhưng điều đó chưa chứng minh công thức đúng hoàn toàn. Phép phân tích thứ nguyên không phát hiện được hệ số $4\\pi$ thay vì $2\\pi$ của công thức chu kỳ con lắc lò xo.',
    rubric: [{ id: 'necessary', prompt: 'Tôi đã phân biệt điều kiện cần về thứ nguyên với sự đúng hoàn toàn.' }, { id: 'factor', prompt: 'Tôi đã dùng hệ số trong đề để minh họa giới hạn của phép kiểm tra.' }],
    summaryTemplate: 'Kiểm tra thứ nguyên không xác nhận các hệ số thuần số; cần đối chiếu mô hình hoặc lập luận vật lý.',
  }],
  provenance: {
    repository: 'https://github.com/HanitaV/VLDC-HUS', revision: '5d6301638664dc18b4913b944c0224761d705a2e',
    path: 'js/data/theory/exercises.js', rights: 'approved',
    attribution: 'Trịnh Nam Phong (2026), VLDC-HUS — MIT. Chuyển câu hỏi kiểm tra thứ nguyên đã có thành các bước tự viết và tự đối chiếu.',
  },
}] as const satisfies readonly SemiEssayExercise[];
