import type { LearningContent } from '../../../domain/workspace';
import { withWrittenPractice } from '../../../core/learning/written-content';
import writtenPractice from './written-practice';

export default withWrittenPractice({
  "chapters": [
    {
      "id": "oop-c1",
      "courseId": "oop",
      "title": "Nền tảng Java và Bộ nhớ",
      "topicIds": [
        "oop-topic-cb-java-program-bytecode",
        "oop-topic-oop-variables-types",
        "oop-topic-oop-stack-heap-memory",
        "oop-topic-oop-parameter-passing"
      ]
    },
    {
      "id": "oop-c2",
      "courseId": "oop",
      "title": "Khởi đầu Hướng đối tượng và Thiết kế lớp",
      "topicIds": [
        "oop-topic-oop-paradigm-class-object",
        "oop-topic-oop-encapsulation-modifiers",
        "oop-topic-oop-constructors-this",
        "oop-topic-oop-java-api-wrapper"
      ]
    },
    {
      "id": "oop-c3",
      "courseId": "oop",
      "title": "Kế thừa và Đa hình",
      "topicIds": [
        "oop-topic-oop-inheritance-super",
        "oop-topic-oop-object-class-contract",
        "oop-topic-oop-casting-instanceof",
        "oop-topic-oop-polymorphism-dispatch"
      ]
    },
    {
      "id": "oop-c4",
      "courseId": "oop",
      "title": "Trừu tượng hóa, ADT và UML",
      "topicIds": [
        "oop-topic-java-interface-abstract",
        "oop-topic-abstraction-adt",
        "oop-topic-oop-uml-class-diagram"
      ]
    },
    {
      "id": "oop-c5",
      "courseId": "oop",
      "title": "Java Collections Framework",
      "topicIds": [
        "oop-topic-oop-jcf-hierarchy-list",
        "oop-topic-oop-set-queue-map",
        "oop-topic-oop-iterator-collections-utils"
      ]
    },
    {
      "id": "oop-c6",
      "courseId": "oop",
      "title": "Nguyên lý SOLID và Xử lý ngoại lệ",
      "topicIds": [
        "oop-topic-oop-solid-principles",
        "oop-topic-cb-exceptions-checked-unchecked",
        "oop-topic-cb-try-catch-finally-throw"
      ]
    },
    {
      "id": "oop-c7",
      "courseId": "oop",
      "title": "Mẫu thiết kế: Khởi tạo và Cấu trúc",
      "topicIds": [
        "oop-topic-oop-design-patterns-intro",
        "oop-topic-oop-singleton-pattern",
        "oop-topic-oop-factory-method-abstract-factory",
        "oop-topic-oop-adapter-facade",
        "oop-topic-oop-decorator-pattern",
        "oop-topic-oop-bridge-proxy"
      ]
    },
    {
      "id": "oop-c8",
      "courseId": "oop",
      "title": "Mẫu thiết kế: Hành vi",
      "topicIds": [
        "oop-topic-oop-strategy-pattern",
        "oop-topic-oop-observer-pattern",
        "oop-topic-oop-template-method-iterator",
        "oop-topic-oop-command-state",
        "oop-topic-oop-chain-mediator-visitor"
      ]
    },
    {
      "id": "oop-c9",
      "courseId": "oop",
      "title": "Lập trình tổng quát (Java Generics)",
      "topicIds": [
        "oop-topic-java-generics",
        "oop-topic-comparable-interface",
        "oop-topic-oop-generic-methods-bounded",
        "oop-topic-oop-generics-wildcards",
        "oop-topic-oop-type-erasure-restrictions"
      ]
    },
    {
      "id": "oop-c10",
      "courseId": "oop",
      "title": "Lập trình hàm và Stream API",
      "topicIds": [
        "oop-topic-oop-functional-interface-lambda",
        "oop-topic-oop-standard-functional-interfaces",
        "oop-topic-oop-stream-api-basics",
        "oop-topic-oop-stream-operations-collectors"
      ]
    },
    {
      "id": "oop-c11",
      "courseId": "oop",
      "title": "Bài tập tổng hợp và Đề thi",
      "topicIds": [
        "oop-topic-oop-ex-matrix",
        "oop-topic-oop-ex-integration",
        "oop-topic-oop-ex-statistics",
        "oop-topic-oop-ex-student-manager"
      ]
    }
  ],
  "topics": [
    {
      "id": "oop-topic-cb-java-program-bytecode",
      "chapterId": "oop-c1",
      "title": "Chương trình Java, biên dịch và JVM",
      "lessonIds": [
        "oop-cb-java-program-bytecode"
      ]
    },
    {
      "id": "oop-topic-oop-variables-types",
      "chapterId": "oop-c1",
      "title": "Kiểu dữ liệu và phạm vi biến trong Java",
      "lessonIds": [
        "oop-oop-variables-types"
      ],
      "prerequisiteIds": [
        "oop-topic-cb-java-program-bytecode"
      ]
    },
    {
      "id": "oop-topic-oop-stack-heap-memory",
      "chapterId": "oop-c1",
      "title": "Bộ nhớ Stack và Heap trong JVM",
      "lessonIds": [
        "oop-oop-stack-heap-memory"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-variables-types"
      ]
    },
    {
      "id": "oop-topic-oop-parameter-passing",
      "chapterId": "oop-c1",
      "title": "Cơ chế truyền tham số trong Java",
      "lessonIds": [
        "oop-oop-parameter-passing"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-stack-heap-memory"
      ]
    },
    {
      "id": "oop-topic-oop-paradigm-class-object",
      "chapterId": "oop-c2",
      "title": "Từ lập trình thủ tục đến Lớp và Đối tượng",
      "lessonIds": [
        "oop-oop-paradigm-class-object"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-variables-types"
      ]
    },
    {
      "id": "oop-topic-oop-encapsulation-modifiers",
      "chapterId": "oop-c2",
      "title": "Đóng gói và bộ từ khóa truy cập",
      "lessonIds": [
        "oop-oop-encapsulation-modifiers"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-paradigm-class-object"
      ]
    },
    {
      "id": "oop-topic-oop-constructors-this",
      "chapterId": "oop-c2",
      "title": "Constructor, nạp chồng, this và static",
      "lessonIds": [
        "oop-oop-constructors-this"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-paradigm-class-object"
      ]
    },
    {
      "id": "oop-topic-oop-java-api-wrapper",
      "chapterId": "oop-c2",
      "title": "Thư viện chuẩn Java, Wrapper và Autoboxing",
      "lessonIds": [
        "oop-oop-java-api-wrapper"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-variables-types",
        "oop-topic-oop-constructors-this"
      ]
    },
    {
      "id": "oop-topic-oop-inheritance-super",
      "chapterId": "oop-c3",
      "title": "Kế thừa, từ khóa super và final",
      "lessonIds": [
        "oop-oop-inheritance-super"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-encapsulation-modifiers",
        "oop-topic-oop-constructors-this"
      ]
    },
    {
      "id": "oop-topic-oop-object-class-contract",
      "chapterId": "oop-c3",
      "title": "Lớp gốc Object và hợp đồng equals/hashCode",
      "lessonIds": [
        "oop-oop-object-class-contract"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-inheritance-super"
      ]
    },
    {
      "id": "oop-topic-oop-casting-instanceof",
      "chapterId": "oop-c3",
      "title": "Upcasting, Downcasting và instanceof",
      "lessonIds": [
        "oop-oop-casting-instanceof"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-inheritance-super"
      ]
    },
    {
      "id": "oop-topic-oop-polymorphism-dispatch",
      "chapterId": "oop-c3",
      "title": "Đa hình tĩnh, đa hình động và liên kết động",
      "lessonIds": [
        "oop-oop-polymorphism-dispatch"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-inheritance-super",
        "oop-topic-oop-casting-instanceof"
      ]
    },
    {
      "id": "oop-topic-java-interface-abstract",
      "chapterId": "oop-c4",
      "title": "Lớp trừu tượng và giao diện (Java)",
      "lessonIds": [
        "oop-java-interface-abstract"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-inheritance-super",
        "oop-topic-oop-polymorphism-dispatch"
      ]
    },
    {
      "id": "oop-topic-abstraction-adt",
      "chapterId": "oop-c4",
      "title": "Kiểu dữ liệu trừu tượng (ADT)",
      "lessonIds": [
        "oop-abstraction-adt"
      ],
      "prerequisiteIds": [
        "oop-topic-java-interface-abstract",
        "oop-topic-oop-encapsulation-modifiers"
      ]
    },
    {
      "id": "oop-topic-oop-uml-class-diagram",
      "chapterId": "oop-c4",
      "title": "Biểu đồ lớp UML và các quan hệ",
      "lessonIds": [
        "oop-oop-uml-class-diagram"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-inheritance-super",
        "oop-topic-java-interface-abstract"
      ]
    },
    {
      "id": "oop-topic-oop-jcf-hierarchy-list",
      "chapterId": "oop-c5",
      "title": "Kiến trúc Java Collections Framework và List",
      "lessonIds": [
        "oop-oop-jcf-hierarchy-list"
      ],
      "prerequisiteIds": [
        "oop-topic-java-interface-abstract",
        "oop-topic-oop-java-api-wrapper"
      ]
    },
    {
      "id": "oop-topic-oop-set-queue-map",
      "chapterId": "oop-c5",
      "title": "Set, Queue và Map trong JCF",
      "lessonIds": [
        "oop-oop-set-queue-map"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-jcf-hierarchy-list",
        "oop-topic-oop-object-class-contract"
      ]
    },
    {
      "id": "oop-topic-oop-iterator-collections-utils",
      "chapterId": "oop-c5",
      "title": "Iterator, duyệt an toàn và lớp Collections",
      "lessonIds": [
        "oop-oop-iterator-collections-utils"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-jcf-hierarchy-list"
      ]
    },
    {
      "id": "oop-topic-oop-solid-principles",
      "chapterId": "oop-c6",
      "title": "Năm nguyên lý thiết kế SOLID",
      "lessonIds": [
        "oop-oop-solid-principles"
      ],
      "prerequisiteIds": [
        "oop-topic-java-interface-abstract",
        "oop-topic-oop-polymorphism-dispatch"
      ]
    },
    {
      "id": "oop-topic-cb-exceptions-checked-unchecked",
      "chapterId": "oop-c6",
      "title": "Ngoại lệ: Checked và Unchecked",
      "lessonIds": [
        "oop-cb-exceptions-checked-unchecked"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-inheritance-super"
      ]
    },
    {
      "id": "oop-topic-cb-try-catch-finally-throw",
      "chapterId": "oop-c6",
      "title": "Xử lý ngoại lệ với try-catch-finally, throw và throws",
      "lessonIds": [
        "oop-cb-try-catch-finally-throw"
      ],
      "prerequisiteIds": [
        "oop-topic-cb-exceptions-checked-unchecked"
      ]
    },
    {
      "id": "oop-topic-oop-design-patterns-intro",
      "chapterId": "oop-c7",
      "title": "Tổng quan Mẫu thiết kế (Design Patterns)",
      "lessonIds": [
        "oop-oop-design-patterns-intro"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-solid-principles"
      ]
    },
    {
      "id": "oop-topic-oop-singleton-pattern",
      "chapterId": "oop-c7",
      "title": "Mẫu Singleton",
      "lessonIds": [
        "oop-oop-singleton-pattern"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-factory-method-abstract-factory",
      "chapterId": "oop-c7",
      "title": "Factory Method và Abstract Factory",
      "lessonIds": [
        "oop-oop-factory-method-abstract-factory"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-adapter-facade",
      "chapterId": "oop-c7",
      "title": "Mẫu Adapter và Facade",
      "lessonIds": [
        "oop-oop-adapter-facade"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-decorator-pattern",
      "chapterId": "oop-c7",
      "title": "Mẫu Decorator",
      "lessonIds": [
        "oop-oop-decorator-pattern"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-bridge-proxy",
      "chapterId": "oop-c7",
      "title": "Mẫu Bridge và Proxy",
      "lessonIds": [
        "oop-oop-bridge-proxy"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-strategy-pattern",
      "chapterId": "oop-c8",
      "title": "Mẫu Strategy",
      "lessonIds": [
        "oop-oop-strategy-pattern"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-observer-pattern",
      "chapterId": "oop-c8",
      "title": "Mẫu Observer",
      "lessonIds": [
        "oop-oop-observer-pattern"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-template-method-iterator",
      "chapterId": "oop-c8",
      "title": "Mẫu Template Method và Iterator",
      "lessonIds": [
        "oop-oop-template-method-iterator"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro",
        "oop-topic-oop-iterator-collections-utils"
      ]
    },
    {
      "id": "oop-topic-oop-command-state",
      "chapterId": "oop-c8",
      "title": "Mẫu Command và State",
      "lessonIds": [
        "oop-oop-command-state"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-oop-chain-mediator-visitor",
      "chapterId": "oop-c8",
      "title": "Chain of Responsibility, Mediator và Visitor",
      "lessonIds": [
        "oop-oop-chain-mediator-visitor"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-design-patterns-intro"
      ]
    },
    {
      "id": "oop-topic-java-generics",
      "chapterId": "oop-c9",
      "title": "Lập trình tổng quát (Generics)",
      "lessonIds": [
        "oop-java-generics"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-java-api-wrapper"
      ]
    },
    {
      "id": "oop-topic-comparable-interface",
      "chapterId": "oop-c9",
      "title": "Giao diện Comparable<T>",
      "lessonIds": [
        "oop-comparable-interface"
      ],
      "prerequisiteIds": [
        "oop-topic-java-interface-abstract",
        "oop-topic-java-generics"
      ]
    },
    {
      "id": "oop-topic-oop-generic-methods-bounded",
      "chapterId": "oop-c9",
      "title": "Phương thức tổng quát và Bounded Type Parameters",
      "lessonIds": [
        "oop-oop-generic-methods-bounded"
      ],
      "prerequisiteIds": [
        "oop-topic-java-generics",
        "oop-topic-comparable-interface"
      ]
    },
    {
      "id": "oop-topic-oop-generics-wildcards",
      "chapterId": "oop-c9",
      "title": "Wildcards trong Generics và quy tắc PECS",
      "lessonIds": [
        "oop-oop-generics-wildcards"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-generic-methods-bounded"
      ]
    },
    {
      "id": "oop-topic-oop-type-erasure-restrictions",
      "chapterId": "oop-c9",
      "title": "Type Erasure và 7 hạn chế của Java Generics",
      "lessonIds": [
        "oop-oop-type-erasure-restrictions"
      ],
      "prerequisiteIds": [
        "oop-topic-java-generics"
      ]
    },
    {
      "id": "oop-topic-oop-functional-interface-lambda",
      "chapterId": "oop-c10",
      "title": "Giao diện hàm và Biểu thức Lambda",
      "lessonIds": [
        "oop-oop-functional-interface-lambda"
      ],
      "prerequisiteIds": [
        "oop-topic-java-interface-abstract"
      ]
    },
    {
      "id": "oop-topic-oop-standard-functional-interfaces",
      "chapterId": "oop-c10",
      "title": "Giao diện hàm chuẩn java.util.function và Optional",
      "lessonIds": [
        "oop-oop-standard-functional-interfaces"
      ],
      "prerequisiteIds": [
        "oop-topic-java-generics",
        "oop-topic-oop-functional-interface-lambda"
      ]
    },
    {
      "id": "oop-topic-oop-stream-api-basics",
      "chapterId": "oop-c10",
      "title": "Java Stream API: bản chất Lazy và Pipeline",
      "lessonIds": [
        "oop-oop-stream-api-basics"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-jcf-hierarchy-list",
        "oop-topic-oop-standard-functional-interfaces"
      ]
    },
    {
      "id": "oop-topic-oop-stream-operations-collectors",
      "chapterId": "oop-c10",
      "title": "Phép toán trung gian, kết thúc và Collectors",
      "lessonIds": [
        "oop-oop-stream-operations-collectors"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-stream-api-basics"
      ]
    },
    {
      "id": "oop-topic-oop-ex-matrix",
      "chapterId": "oop-c11",
      "title": "Bài tập: Ma trận vuông MySquareMatrix",
      "lessonIds": [
        "oop-oop-ex-matrix"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-encapsulation-modifiers",
        "oop-topic-oop-constructors-this"
      ]
    },
    {
      "id": "oop-topic-oop-ex-integration",
      "chapterId": "oop-c11",
      "title": "Bài tập: Tính tích phân số (Strategy & Đa thức)",
      "lessonIds": [
        "oop-oop-ex-integration"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-strategy-pattern",
        "oop-topic-java-interface-abstract"
      ]
    },
    {
      "id": "oop-topic-oop-ex-statistics",
      "chapterId": "oop-c11",
      "title": "Bài tập: Thống kê và tự cài đặt MyList",
      "lessonIds": [
        "oop-oop-ex-statistics"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-template-method-iterator",
        "oop-topic-abstraction-adt"
      ]
    },
    {
      "id": "oop-topic-oop-ex-student-manager",
      "chapterId": "oop-c11",
      "title": "Bài tập: Quản lý sinh viên StudentManager",
      "lessonIds": [
        "oop-oop-ex-student-manager"
      ],
      "prerequisiteIds": [
        "oop-topic-oop-singleton-pattern",
        "oop-topic-comparable-interface",
        "oop-topic-oop-jcf-hierarchy-list"
      ]
    }
  ],
  "lessons": [
    {
      "id": "oop-cb-java-program-bytecode",
      "topicId": "oop-topic-cb-java-program-bytecode",
      "title": "Chương trình Java, biên dịch và JVM",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-cb-java-program-bytecode.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mã nguồn Java (.java) được trình biên dịch javac dịch thành bytecode (.class) độc lập nền tảng và thực thi trên máy ảo JVM từ phương thức main(String[] args).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-java-program-bytecode.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-variables-types",
      "topicId": "oop-topic-oop-variables-types",
      "title": "Kiểu dữ liệu và phạm vi biến trong Java",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-variables-types.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Phân biệt 8 kiểu nguyên thủy với kiểu tham chiếu, cùng 3 phạm vi biến: local, instance và static.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-variables-types.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-stack-heap-memory",
      "topicId": "oop-topic-oop-stack-heap-memory",
      "title": "Bộ nhớ Stack và Heap trong JVM",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-stack-heap-memory.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cách JVM lưu khung lời gọi hàm, biến nguyên thủy và tham chiếu trên Stack, còn đối tượng thực sự nằm trên Heap.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-stack-heap-memory.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-parameter-passing",
      "topicId": "oop-topic-oop-parameter-passing",
      "title": "Cơ chế truyền tham số trong Java",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-parameter-passing.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Java luôn truyền theo giá trị (pass-by-value): sao chép giá trị nguyên thủy hoặc sao chép địa chỉ tham chiếu khi gọi phương thức.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-parameter-passing.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-paradigm-class-object",
      "topicId": "oop-topic-oop-paradigm-class-object",
      "title": "Từ lập trình thủ tục đến Lớp và Đối tượng",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-paradigm-class-object.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chuyển dịch từ tách rời dữ liệu–hàm sang đóng gói thành lớp (bản thiết kế), đối tượng (thể hiện), thông điệp và 4 trụ cột OOP.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-paradigm-class-object.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-encapsulation-modifiers",
      "topicId": "oop-topic-oop-encapsulation-modifiers",
      "title": "Đóng gói và bộ từ khóa truy cập",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-encapsulation-modifiers.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Che giấu dữ liệu nội bộ bằng private/protected/public, kết hợp getter và setter để kiểm soát truy cập.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-encapsulation-modifiers.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-constructors-this",
      "topicId": "oop-topic-oop-constructors-this",
      "title": "Constructor, nạp chồng, this và static",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-constructors-this.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khởi tạo đối tượng qua constructor, nạp chồng phương thức, tham chiếu đối tượng hiện tại bằng this và thành viên dùng chung static.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-constructors-this.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-java-api-wrapper",
      "topicId": "oop-topic-oop-java-api-wrapper",
      "title": "Thư viện chuẩn Java, Wrapper và Autoboxing",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-java-api-wrapper.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Sử dụng String, Scanner, Math, ghi đè toString(), cùng các lớp bọc (Integer, Double...) và cơ chế autoboxing/unboxing.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-java-api-wrapper.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-inheritance-super",
      "topicId": "oop-topic-oop-inheritance-super",
      "title": "Kế thừa, từ khóa super và final",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-inheritance-super.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Quan hệ IS-A và đơn kế thừa bằng extends, ghi đè phương thức, dùng super khởi tạo lớp cha và final để chặn kế thừa/ghi đè.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-inheritance-super.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-object-class-contract",
      "topicId": "oop-topic-oop-object-class-contract",
      "title": "Lớp gốc Object và hợp đồng equals/hashCode",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-object-class-contract.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Các dịch vụ chung của java.lang.Object: toString(), equals(), hashCode() (bắt buộc đồng bộ khi ghi đè equals) và clone().",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-object-class-contract.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-casting-instanceof",
      "topicId": "oop-topic-oop-casting-instanceof",
      "title": "Upcasting, Downcasting và instanceof",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-casting-instanceof.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Ép kiểu lên tự động (upcasting), ép kiểu xuống tường minh (downcasting) và kiểm tra kiểu an toàn lúc chạy với instanceof.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-casting-instanceof.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-polymorphism-dispatch",
      "topicId": "oop-topic-oop-polymorphism-dispatch",
      "title": "Đa hình tĩnh, đa hình động và liên kết động",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-polymorphism-dispatch.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Phân biệt đa hình lúc biên dịch (overloading) và đa hình lúc chạy (overriding, dynamic method dispatch qua bảng phương thức ảo).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-polymorphism-dispatch.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-java-interface-abstract",
      "topicId": "oop-topic-java-interface-abstract",
      "title": "Lớp trừu tượng và giao diện (Java)",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-java-interface-abstract.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lớp trừu tượng không thể được khởi tạo trực tiếp và có thể khai báo phương thức chưa có thân; giao diện mô tả các thao tác mà lớp cài đặt phải cung cấp. Slide minh họa một lớp cài đặt nhiều giao diện.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/java-interface-abstract.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-abstraction-adt",
      "topicId": "oop-topic-abstraction-adt",
      "title": "Kiểu dữ liệu trừu tượng (ADT)",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-abstraction-adt.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "ADT = dữ liệu + các thao tác. Đặc tả (thao tác hỗ trợ) tách khỏi cài đặt (cấu trúc dữ liệu cụ thể), như một \"bức tường\" che chi tiết khỏi người dùng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/abstraction-adt.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-uml-class-diagram",
      "topicId": "oop-topic-oop-uml-class-diagram",
      "title": "Biểu đồ lớp UML và các quan hệ",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-uml-class-diagram.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Ký hiệu lớp, giao diện và phân biệt kế thừa, thực thi, liên kết (association), tập hợp (aggregation) và hợp thành (composition).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-uml-class-diagram.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-jcf-hierarchy-list",
      "topicId": "oop-topic-oop-jcf-hierarchy-list",
      "title": "Kiến trúc Java Collections Framework và List",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-jcf-hierarchy-list.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Hệ thống giao diện Iterable, Collection, List<E> và đánh đổi hiệu năng giữa ArrayList (truy cập $O(1)$) với LinkedList (chèn/xóa đầu $O(1)$).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-jcf-hierarchy-list.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-set-queue-map",
      "topicId": "oop-topic-oop-set-queue-map",
      "title": "Set, Queue và Map trong JCF",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-set-queue-map.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Các cấu trúc không trùng lặp Set (HashSet, TreeSet), hàng đợi Queue/PriorityQueue và ánh xạ khóa–giá trị Map (HashMap, TreeMap).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-set-queue-map.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-iterator-collections-utils",
      "topicId": "oop-topic-oop-iterator-collections-utils",
      "title": "Iterator, duyệt an toàn và lớp Collections",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-iterator-collections-utils.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tách hành vi duyệt với Iterator/ListIterator, tránh ConcurrentModificationException khi xóa phần tử và dùng thuật toán sẵn trong Collections.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-iterator-collections-utils.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-solid-principles",
      "topicId": "oop-topic-oop-solid-principles",
      "title": "Năm nguyên lý thiết kế SOLID",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-solid-principles.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "SRP, OCP, LSP, ISP và DIP — bộ nguyên lý giúp mã hướng đối tượng dễ mở rộng, giảm phụ thuộc cứng và dễ bảo trì.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-solid-principles.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-cb-exceptions-checked-unchecked",
      "topicId": "oop-topic-cb-exceptions-checked-unchecked",
      "title": "Ngoại lệ: Checked và Unchecked",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-cb-exceptions-checked-unchecked.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Phân biệt Checked Exception bắt buộc xử lý lúc biên dịch (IOException, FileNotFoundException) với Unchecked Exception lúc chạy (RuntimeException) và cách tự tạo lớp ngoại lệ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-exceptions-checked-unchecked.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-cb-try-catch-finally-throw",
      "topicId": "oop-topic-cb-try-catch-finally-throw",
      "title": "Xử lý ngoại lệ với try-catch-finally, throw và throws",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-cb-try-catch-finally-throw.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bắt ngoại lệ bằng try và nhiều khối catch theo thứ tự từ cụ thể đến tổng quát, dọn tài nguyên trong finally, chủ động ném lỗi với throw và khai báo throws.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-try-catch-finally-throw.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-design-patterns-intro",
      "topicId": "oop-topic-oop-design-patterns-intro",
      "title": "Tổng quan Mẫu thiết kế (Design Patterns)",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-design-patterns-intro.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khái niệm Design Pattern của nhóm GoF và phân loại 23 mẫu thành 3 nhóm: Creational, Structural và Behavioral.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-design-patterns-intro.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-singleton-pattern",
      "topicId": "oop-topic-oop-singleton-pattern",
      "title": "Mẫu Singleton",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-singleton-pattern.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đảm bảo một lớp chỉ có duy nhất một thể hiện với constructor private và phương thức tĩnh getInstance().",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-singleton-pattern.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-factory-method-abstract-factory",
      "topicId": "oop-topic-oop-factory-method-abstract-factory",
      "title": "Factory Method và Abstract Factory",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-factory-method-abstract-factory.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đóng gói quá trình khởi tạo đối tượng (1 sản phẩm qua lớp con hoặc cả họ sản phẩm qua giao diện factory) theo nguyên lý DIP.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-factory-method-abstract-factory.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-adapter-facade",
      "topicId": "oop-topic-oop-adapter-facade",
      "title": "Mẫu Adapter và Facade",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-adapter-facade.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Adapter chuyển đổi hai giao diện không tương thích để làm việc chung; Facade cung cấp giao diện đơn giản cho cả hệ thống con.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-adapter-facade.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-decorator-pattern",
      "topicId": "oop-topic-oop-decorator-pattern",
      "title": "Mẫu Decorator",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-decorator-pattern.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Gắn thêm hành vi cho từng đối tượng lúc chạy bằng cách bọc lồng các lớp trang trí, tránh bùng nổ lớp con (như Java I/O).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-decorator-pattern.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-bridge-proxy",
      "topicId": "oop-topic-oop-bridge-proxy",
      "title": "Mẫu Bridge và Proxy",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-bridge-proxy.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bridge tách trừu tượng khỏi cài đặt để hai chiều phát triển độc lập; Proxy cung cấp đại diện kiểm soát truy cập hoặc trì hoãn khởi tạo.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-bridge-proxy.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-strategy-pattern",
      "topicId": "oop-topic-oop-strategy-pattern",
      "title": "Mẫu Strategy",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-strategy-pattern.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đóng gói họ thuật toán sau một giao diện chung để hoán đổi linh hoạt lúc chạy, ưu tiên composition hơn inheritance.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-strategy-pattern.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-observer-pattern",
      "topicId": "oop-topic-oop-observer-pattern",
      "title": "Mẫu Observer",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-observer-pattern.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thiết lập quan hệ một–nhiều kết nối lỏng giữa Subject và các Observer để tự động thông báo khi trạng thái thay đổi.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-observer-pattern.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-template-method-iterator",
      "topicId": "oop-topic-oop-template-method-iterator",
      "title": "Mẫu Template Method và Iterator",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-template-method-iterator.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Template Method cố định khung thuật toán ở lớp cha và giao bước chi tiết cho lớp con; Iterator duyệt tuần tự ẩn cấu trúc bên trong.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-template-method-iterator.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-command-state",
      "topicId": "oop-topic-oop-command-state",
      "title": "Mẫu Command và State",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-command-state.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Command đóng gói yêu cầu thành đối tượng hỗ trợ Undo/hàng đợi; State cho phép đối tượng đổi hành vi theo trạng thái nội tại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-command-state.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-chain-mediator-visitor",
      "topicId": "oop-topic-oop-chain-mediator-visitor",
      "title": "Chain of Responsibility, Mediator và Visitor",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-chain-mediator-visitor.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Truyền yêu cầu qua chuỗi xử lý (Chain), điều phối tập trung (Mediator) và tách thuật toán khỏi cấu trúc phần tử (Visitor).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-chain-mediator-visitor.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-java-generics",
      "topicId": "oop-topic-java-generics",
      "title": "Lập trình tổng quát (Generics)",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-java-generics.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lớp tham số hóa theo kiểu `T` cho phép tập hợp đồng nhất, lấy phần tử không cần ép kiểu; không thể viết `new T()` hay `new T[5]`.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/java-generics.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-comparable-interface",
      "topicId": "oop-topic-comparable-interface",
      "title": "Giao diện Comparable<T>",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-comparable-interface.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "`compareTo` trả về số âm, 0 hoặc dương để xác định thứ tự tự nhiên của đối tượng; các ví dụ dùng nó trong sắp xếp tổng quát.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/comparable-interface.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-generic-methods-bounded",
      "topicId": "oop-topic-oop-generic-methods-bounded",
      "title": "Phương thức tổng quát và Bounded Type Parameters",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-generic-methods-bounded.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khai báo tham số kiểu riêng cho phương thức và giới hạn cận trên `<T extends Bound>` để gọi được phương thức của kiểu chặn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-generic-methods-bounded.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-generics-wildcards",
      "topicId": "oop-topic-oop-generics-wildcards",
      "title": "Wildcards trong Generics và quy tắc PECS",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-generics-wildcards.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Dùng `?`, `? extends T` (đọc — Producer) và `? super T` (ghi — Consumer) để khắc phục tính bất biến của kiểu tham số hóa.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-generics-wildcards.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-type-erasure-restrictions",
      "topicId": "oop-topic-oop-type-erasure-restrictions",
      "title": "Type Erasure và 7 hạn chế của Java Generics",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-type-erasure-restrictions.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cơ chế trình biên dịch xóa tham số kiểu thành Object hoặc cận trên, dẫn tới các lệnh cấm như `new T()`, mảng `T[]` và `instanceof`.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-type-erasure-restrictions.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-functional-interface-lambda",
      "topicId": "oop-topic-oop-functional-interface-lambda",
      "title": "Giao diện hàm và Biểu thức Lambda",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-functional-interface-lambda.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Từ lớp vô danh đến biểu thức Lambda cho giao diện có đúng 1 phương thức trừu tượng (`@FunctionalInterface`), hỗ trợ tham số hóa hành vi.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-functional-interface-lambda.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-standard-functional-interfaces",
      "topicId": "oop-topic-oop-standard-functional-interfaces",
      "title": "Giao diện hàm chuẩn java.util.function và Optional",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-standard-functional-interfaces.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bốn giao diện cốt lõi Predicate, Function, Consumer, Supplier cùng hộp chứa Optional giúp tránh NullPointerException.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-standard-functional-interfaces.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-stream-api-basics",
      "topicId": "oop-topic-oop-stream-api-basics",
      "title": "Java Stream API: bản chất Lazy và Pipeline",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-stream-api-basics.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khác biệt giữa Stream và Collection (không lưu trữ, không sửa nguồn, đánh giá lười, dùng một lần) và các cách tạo Stream.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-stream-api-basics.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-stream-operations-collectors",
      "topicId": "oop-topic-oop-stream-operations-collectors",
      "title": "Phép toán trung gian, kết thúc và Collectors",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-stream-operations-collectors.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chuỗi xử lý với `filter`, `map`, `sorted`, `flatMap` kết hợp các phép kết thúc `collect`, `reduce`, `count`, `match` và `findFirst`.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-stream-operations-collectors.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-ex-matrix",
      "topicId": "oop-topic-oop-ex-matrix",
      "title": "Bài tập: Ma trận vuông MySquareMatrix",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-ex-matrix.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đóng gói mảng 2 chiều biểu diễn ma trận vuông, trích xuất đường chéo chính/phụ, lọc số nguyên tố và tạo ma trận biến đổi mới.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-ex-matrix.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-ex-integration",
      "topicId": "oop-topic-oop-ex-integration",
      "title": "Bài tập: Tính tích phân số (Strategy & Đa thức)",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-ex-integration.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thiết kế `IntegrationCalculator` kết hợp đa hình `MyPolynomial` (`MyArrayPolynomial`, `MyListPolynomial`) và mẫu Strategy `MyIntegrator`.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-ex-integration.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-ex-statistics",
      "topicId": "oop-topic-oop-ex-statistics",
      "title": "Bài tập: Thống kê và tự cài đặt MyList",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-ex-statistics.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tự cài đặt `MyArrayList`/`MyLinkedList` cùng `MyIterable`/`MyIterator`, tách biệt cho lớp `Statistics` tính max, min, mean, variance.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-ex-statistics.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "oop-oop-ex-student-manager",
      "topicId": "oop-topic-oop-ex-student-manager",
      "title": "Bài tập: Quản lý sinh viên StudentManager",
      "content": {
        "format": "markdown",
        "assetPath": "oop/lessons/oop-oop-ex-student-manager.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Kết hợp mẫu Singleton, `List<Student>` và `Comparator`/`Comparable` để lưu trữ, lọc và sắp xếp danh sách sinh viên theo nhiều tiêu chí.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/oop-ex-student-manager.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    }
  ],
  "exercises": [],
  "resources": []
} as const satisfies LearningContent, writtenPractice);
