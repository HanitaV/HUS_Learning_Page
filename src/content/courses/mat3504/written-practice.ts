import type { SemiEssayExercise } from '../../../domain/semi-essay';

const provenance = {
  repository: 'https://github.com/HanitaV/DSA-HUS',
  revision: '01e2385bc1bbf16e3b7a2ab527e1b572ae06360d',
  rights: 'unreviewed',
  attribution: 'HanitaV, DSA-HUS; source license not declared, rights unreviewed.',
} as const;

export default [
  {
    id: 'mat3504-bfs-written',
    lessonId: 'mat3504-bfs',
    kind: 'semi-essay',
    title: 'Lập luận vì sao BFS tìm đường ít cạnh nhất',
    prompt: 'Vì sao BFS cho đường ngắn nhất theo số cạnh?',
    given: [],
    theoryAnchors: [],
    steps: [
      {
        id: 'mat3504-bfs-written-layers', kind: 'written-reasoning',
        title: 'Nêu thứ tự xử lý các lớp',
        prompt: 'Giải thích hàng đợi FIFO bảo đảm điều gì giữa lớp i và lớp i + 1. Nêu điều kiện về trọng số cạnh để lập luận phù hợp.',
        theoryAnchorIds: [],
        hint: 'Nhìn lại định nghĩa lớp Aᵢ và thời điểm một đỉnh được đưa vào hàng đợi.',
        modelAnswer: 'FIFO lấy mọi đỉnh ở lớp i trước mọi đỉnh ở lớp i + 1. Lập luận về số cạnh áp dụng cho đồ thị không trọng số, hoặc mọi cạnh cùng trọng số.',
        rubric: [
          { id: 'fifo', prompt: 'Tôi đã liên hệ FIFO với việc xử lý hết lớp i trước lớp i + 1.' },
          { id: 'scope', prompt: 'Tôi đã nêu điều kiện không trọng số hoặc mọi cạnh cùng trọng số.' },
        ],
        summaryTemplate: 'FIFO xử lý các đỉnh theo từng lớp khoảng cách tăng dần.',
      },
      {
        id: 'mat3504-bfs-written-minimal', kind: 'written-reasoning',
        title: 'Từ lần phát hiện đầu tiên đến kết luận',
        prompt: 'Vì sao khoảng cách ở lần phát hiện đầu tiên là nhỏ nhất? Giải thích thêm thời điểm đánh dấu đã thăm.',
        theoryAnchorIds: [],
        hints: ['Nếu có một đường ít cạnh hơn, lớp đứng trước đỉnh cuối của đường đó phải được xử lý khi nào?', 'Phân biệt đưa vào hàng đợi với lấy ra khỏi hàng đợi.'],
        modelAnswer: 'Một đỉnh được phát hiện lần đầu từ lớp nhỏ nhất có thể, vì mọi lớp nhỏ hơn đã được xử lý trước. Do đó khoảng cách ghi nhận là số cạnh nhỏ nhất. Đánh dấu ngay khi đưa vào hàng đợi để mỗi đỉnh chỉ được đưa vào một lần.',
        rubric: [
          { id: 'minimal', prompt: 'Tôi đã giải thích vì sao một lớp nhỏ hơn không thể bị bỏ qua.' },
          { id: 'mark', prompt: 'Tôi đã nêu đánh dấu ngay khi đưa đỉnh vào hàng đợi.' },
        ],
        summaryTemplate: 'Lần phát hiện đầu tiên qua lớp nhỏ nhất xác định khoảng cách ít cạnh nhất.',
      },
    ],
    explanation: 'Hàng đợi FIFO lấy mọi đỉnh lớp i trước lớp i + 1, nên đỉnh nào cũng được phát hiện lần đầu qua lớp nhỏ nhất có thể, và khoảng cách lúc đó chính là số cạnh nhỏ nhất.',
    provenance: { ...provenance, path: 'content/lessons/bfs.md' },
  },
  {
    id: 'mat3504-activity-selection-written', lessonId: 'mat3504-activity-selection', kind: 'semi-essay',
    title: 'Viết chứng minh hoán đổi cho lựa chọn tham lam',
    prompt: 'Vì sao có thể thay hoạt động đầu của nghiệm tối ưu bằng hoạt động kết thúc sớm nhất mà không làm xấu nghiệm?',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'mat3504-activity-selection-written-exchange', kind: 'written-reasoning',
        title: 'Thiết lập phép thay thế',
        prompt: 'Gọi hoạt động đầu của một nghiệm tối ưu là b, hoạt động kết thúc sớm nhất là a. Viết bất đẳng thức giữa thời điểm kết thúc của chúng và giải thích phép thay b bằng a.',
        theoryAnchorIds: [], hint: 'Tiêu chí tham lam so sánh thời điểm kết thúc, không phải thời điểm bắt đầu hay độ dài.',
        modelAnswer: 'Vì a kết thúc sớm nhất nên f_a ≤ f_b. Thay hoạt động đầu b bằng a trong nghiệm tối ưu, giữ nguyên các hoạt động sau.',
        rubric: [
          { id: 'finish', prompt: 'Tôi đã viết đúng f_a ≤ f_b từ tiêu chí kết thúc sớm nhất.' },
          { id: 'replace', prompt: 'Tôi đã chỉ rõ chỉ thay hoạt động đầu và giữ nguyên phần còn lại.' },
        ],
        summaryTemplate: 'Thay hoạt động đầu b của nghiệm tối ưu bằng a có f_a ≤ f_b.',
      },
      {
        id: 'mat3504-activity-selection-written-preserve', kind: 'written-reasoning',
        title: 'Kiểm tra tương thích và số lượng',
        prompt: 'Chứng minh các hoạt động còn lại vẫn tương thích sau phép thay. Kết luận về số lượng và tính tối ưu.',
        theoryAnchorIds: [], hint: 'Một hoạt động vốn bắt đầu sau f_b có còn bắt đầu sau f_a không?',
        modelAnswer: 'Mọi hoạt động còn lại bắt đầu không sớm hơn f_b, nên cũng không sớm hơn f_a. Phép thay không gây chồng lấn và không đổi số hoạt động. Vì vậy tồn tại một nghiệm tối ưu chứa hoạt động kết thúc sớm nhất.',
        rubric: [
          { id: 'compatible', prompt: 'Tôi đã dùng bất đẳng thức thời điểm để giải thích không chồng lấn.' },
          { id: 'count', prompt: 'Tôi đã nêu số hoạt động không đổi và kết luận nghiệm vẫn tối ưu.' },
        ],
        summaryTemplate: 'Phần còn lại vẫn tương thích và số hoạt động không đổi, nên phép thay bảo toàn tính tối ưu.',
      },
    ],
    explanation: 'Hoạt động kết thúc sớm nhất không kết thúc muộn hơn hoạt động bị thay, nên mọi hoạt động còn lại vốn bắt đầu sau hoạt động bị thay cũng bắt đầu sau nó. Số hoạt động không đổi.',
    provenance: { ...provenance, path: 'content/lessons/activity-selection.md' },
  },
] as const satisfies readonly SemiEssayExercise[];
