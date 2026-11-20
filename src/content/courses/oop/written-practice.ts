import type { SemiEssayExercise } from '../../../domain/semi-essay';

const provenance = {
  repository: 'https://github.com/HanitaV/DSA-HUS',
  revision: '01e2385bc1bbf16e3b7a2ab527e1b572ae06360d',
  rights: 'unreviewed',
  attribution: 'HanitaV, DSA-HUS; source license not declared, rights unreviewed.',
} as const;

export default [
  {
    id: 'oop-oop-inheritance-super-written', lessonId: 'oop-oop-inheritance-super', kind: 'semi-essay',
    title: 'Giải thích thứ tự khởi tạo theo cây kế thừa',
    prompt: 'Nếu `ClassC extends ClassB` và `ClassB extends ClassA`, khi gọi `new ClassC()`, constructor của các lớp chạy theo thứ tự nào?',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'oop-oop-inheritance-super-written-chain', kind: 'written-reasoning',
        title: 'Xác định chuỗi lớp cha',
        prompt: 'Viết chuỗi kế thừa từ ClassC lên lớp gốc mặc định của Java. Nêu nguyên tắc khởi tạo phần cha và phần con trong ví dụ bài học.',
        theoryAnchorIds: [], hint: 'Nếu không ghi extends, lớp Java mặc định kế thừa lớp nào?',
        modelAnswer: 'ClassC kế thừa ClassB, ClassB kế thừa ClassA và ClassA mặc định kế thừa Object. Trong ví dụ này, phần cha được khởi tạo trước phần riêng của lớp con.',
        rubric: [
          { id: 'object', prompt: 'Tôi đã bổ sung Object vào chuỗi kế thừa.' },
          { id: 'parent', prompt: 'Tôi đã nêu nguyên tắc phần cha khởi tạo trước phần con trong ví dụ.' },
        ],
        summaryTemplate: 'Chuỗi lớp cha của ClassC là ClassB, ClassA, Object.',
      },
      {
        id: 'oop-oop-inheritance-super-written-order', kind: 'written-reasoning',
        title: 'Viết thứ tự và giải thích super',
        prompt: 'Kết luận thứ tự constructor trong ví dụ. Liên hệ thứ tự đó với việc gọi constructor cha bằng super(...) được trình bày trong bài học.',
        theoryAnchorIds: [], hint: 'Đọc thứ tự khởi tạo từ gốc cây xuống lớp được tạo.',
        modelAnswer: 'Theo chuỗi trong bài học, thứ tự là Object → ClassA → ClassB → ClassC. Lời gọi constructor cha bằng super(...) bảo đảm khởi tạo phần cha trước khi thực hiện phần riêng của constructor con.',
        rubric: [
          { id: 'order', prompt: 'Tôi đã viết đúng thứ tự Object → ClassA → ClassB → ClassC.' },
          { id: 'super', prompt: 'Tôi đã liên hệ thứ tự đó với lời gọi constructor cha super(...).' },
        ],
        summaryTemplate: 'Thứ tự trong ví dụ: Object → ClassA → ClassB → ClassC.',
      },
    ],
    explanation: 'Chạy từ trên xuống theo cây kế thừa: Object → ClassA → ClassB → ClassC.',
    provenance: { ...provenance, path: 'content/lessons/oop-inheritance-super.md' },
  },
  {
    id: 'oop-oop-polymorphism-dispatch-written', lessonId: 'oop-oop-polymorphism-dispatch', kind: 'semi-essay',
    title: 'Phân biệt liên kết động và phương thức static',
    prompt: 'Nếu `Parent p = new Child();` và cả `Parent` lẫn `Child` đều có phương thức `void show()`, khi gọi `p.show()` thì phiên bản của lớp nào chạy? Còn nếu `show()` là `static` thì sao?',
    given: [], theoryAnchors: [],
    steps: [
      {
        id: 'oop-oop-polymorphism-dispatch-written-instance', kind: 'written-reasoning',
        title: 'Tách kiểu tham chiếu và kiểu đối tượng',
        prompt: 'Nêu kiểu khai báo của p và kiểu đối tượng thật. Giải thích phiên bản show() được gọi khi đó là phương thức thực thể được ghi đè.',
        theoryAnchorIds: [], hint: 'Liên kết động xét đối tượng thật khi chạy hay chỉ xét kiểu khai báo?',
        modelAnswer: 'p có kiểu khai báo Parent nhưng tham chiếu tới đối tượng Child. Với phương thức thực thể được ghi đè, liên kết động chọn phiên bản theo kiểu đối tượng thật nên Child.show() chạy.',
        rubric: [
          { id: 'types', prompt: 'Tôi đã phân biệt kiểu khai báo Parent với kiểu đối tượng Child.' },
          { id: 'dynamic', prompt: 'Tôi đã dùng cơ chế liên kết động để giải thích vì sao gọi Child.show().' },
        ],
        summaryTemplate: 'Phương thức thực thể được ghi đè: đối tượng Child quyết định gọi Child.show().',
      },
      {
        id: 'oop-oop-polymorphism-dispatch-written-static', kind: 'written-reasoning',
        title: 'Đối chiếu trường hợp static',
        prompt: 'Nếu show() là static, nêu phiên bản được gọi và giải thích vì sao kết quả khác trường hợp phương thức thực thể.',
        theoryAnchorIds: [], hint: 'Bài học liệt kê static trong nhóm được liên kết theo kiểu khai báo.',
        modelAnswer: 'Nếu show() là static, việc chọn phương thức dựa vào kiểu khai báo Parent của p nên Parent.show() chạy. Phương thức static liên kết tĩnh, không được lựa chọn bằng liên kết động theo đối tượng Child.',
        rubric: [
          { id: 'static', prompt: 'Tôi đã chọn Parent.show() khi show là static.' },
          { id: 'declared', prompt: 'Tôi đã giải thích bằng liên kết tĩnh theo kiểu khai báo Parent.' },
        ],
        summaryTemplate: 'Phương thức static: kiểu khai báo Parent quyết định gọi Parent.show().',
      },
    ],
    explanation: 'Nếu show() là phương thức thực thể (không static), phiên bản của Child chạy (liên kết động). Nếu show() là static, phiên bản của Parent chạy (liên kết tĩnh theo kiểu tham chiếu p).',
    provenance: { ...provenance, path: 'content/lessons/oop-polymorphism-dispatch.md' },
  },
] as const satisfies readonly SemiEssayExercise[];
