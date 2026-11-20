import type { LearningContent } from '../../../domain/workspace';
import { withWrittenPractice } from '../../../core/learning/written-content';
import writtenPractice from './written-practice';

export default withWrittenPractice({
  "chapters": [
    {
      "id": "thcs4-c1",
      "courseId": "thcs4",
      "title": "Kiểu dữ liệu, biến, toán tử và phương thức",
      "topicIds": [
        "thcs4-topic-cb-java-program-bytecode",
        "thcs4-topic-cb-primitive-types-variables",
        "thcs4-topic-cb-operators-expressions",
        "thcs4-topic-cb-methods-intro"
      ]
    },
    {
      "id": "thcs4-c2",
      "courseId": "thcs4",
      "title": "Phạm vi biến, nhập xuất, rẽ nhánh và vòng lặp",
      "topicIds": [
        "thcs4-topic-cb-variable-scope",
        "thcs4-topic-cb-scanner-io-format",
        "thcs4-topic-cb-branching-if-switch",
        "thcs4-topic-cb-loops-break-continue",
        "thcs4-topic-cb-coding-style"
      ]
    },
    {
      "id": "thcs4-c3",
      "courseId": "thcs4",
      "title": "Mảng và đệ quy",
      "topicIds": [
        "thcs4-topic-cb-array-1d",
        "thcs4-topic-cb-array-2d",
        "thcs4-topic-cb-array-methods",
        "thcs4-topic-recursion",
        "thcs4-topic-cb-ex-array-sort-search"
      ]
    },
    {
      "id": "thcs4-c4",
      "courseId": "thcs4",
      "title": "Java API, lớp và đối tượng",
      "topicIds": [
        "thcs4-topic-cb-java-api-math-string",
        "thcs4-topic-cb-class-object-constructor",
        "thcs4-topic-cb-reference-vs-primitive",
        "thcs4-topic-cb-static-members",
        "thcs4-topic-cb-ex-string-vigenere"
      ]
    },
    {
      "id": "thcs4-c5",
      "courseId": "thcs4",
      "title": "Quyền truy cập, từ khóa this và tổ chức gói",
      "topicIds": [
        "thcs4-topic-cb-access-control",
        "thcs4-topic-cb-class-scope-this",
        "thcs4-topic-cb-packages-arraylist"
      ]
    },
    {
      "id": "thcs4-c6",
      "courseId": "thcs4",
      "title": "Đóng gói và giao diện lớp",
      "topicIds": [
        "thcs4-topic-cb-encapsulation-debug",
        "thcs4-topic-cb-interface-contract"
      ]
    },
    {
      "id": "thcs4-c7",
      "courseId": "thcs4",
      "title": "Kế thừa và xử lý ngoại lệ",
      "topicIds": [
        "thcs4-topic-cb-inheritance-oop",
        "thcs4-topic-cb-exceptions-checked-unchecked",
        "thcs4-topic-cb-try-catch-finally-throw"
      ]
    },
    {
      "id": "thcs4-c8",
      "courseId": "thcs4",
      "title": "Thư viện nhập xuất và giao diện Swing",
      "topicIds": [
        "thcs4-topic-cb-io-streams-files",
        "thcs4-topic-cb-text-binary-serialization",
        "thcs4-topic-cb-swing-gui-basics"
      ]
    }
  ],
  "topics": [
    {
      "id": "thcs4-topic-cb-java-program-bytecode",
      "chapterId": "thcs4-c1",
      "title": "Chương trình Java, biên dịch và JVM",
      "lessonIds": [
        "thcs4-cb-java-program-bytecode"
      ]
    },
    {
      "id": "thcs4-topic-cb-primitive-types-variables",
      "chapterId": "thcs4-c1",
      "title": "Kiểu dữ liệu nguyên thủy và biến",
      "lessonIds": [
        "thcs4-cb-primitive-types-variables"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-java-program-bytecode"
      ]
    },
    {
      "id": "thcs4-topic-cb-operators-expressions",
      "chapterId": "thcs4-c1",
      "title": "Toán tử, phép gán và biểu thức",
      "lessonIds": [
        "thcs4-cb-operators-expressions"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-primitive-types-variables"
      ]
    },
    {
      "id": "thcs4-topic-cb-methods-intro",
      "chapterId": "thcs4-c1",
      "title": "Phương thức và lời gọi hàm",
      "lessonIds": [
        "thcs4-cb-methods-intro"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-operators-expressions"
      ]
    },
    {
      "id": "thcs4-topic-cb-variable-scope",
      "chapterId": "thcs4-c2",
      "title": "Phạm vi hiệu lực của biến",
      "lessonIds": [
        "thcs4-cb-variable-scope"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-methods-intro"
      ]
    },
    {
      "id": "thcs4-topic-cb-scanner-io-format",
      "chapterId": "thcs4-c2",
      "title": "Nhập xuất chuẩn với Scanner và printf",
      "lessonIds": [
        "thcs4-cb-scanner-io-format"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-primitive-types-variables"
      ]
    },
    {
      "id": "thcs4-topic-cb-branching-if-switch",
      "chapterId": "thcs4-c2",
      "title": "Cấu trúc rẽ nhánh if-else và switch-case",
      "lessonIds": [
        "thcs4-cb-branching-if-switch"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-operators-expressions"
      ]
    },
    {
      "id": "thcs4-topic-cb-loops-break-continue",
      "chapterId": "thcs4-c2",
      "title": "Cấu trúc lặp while, do-while, for",
      "lessonIds": [
        "thcs4-cb-loops-break-continue"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-branching-if-switch"
      ]
    },
    {
      "id": "thcs4-topic-cb-coding-style",
      "chapterId": "thcs4-c2",
      "title": "Phong cách lập trình tốt",
      "lessonIds": [
        "thcs4-cb-coding-style"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-methods-intro",
        "thcs4-topic-cb-loops-break-continue"
      ]
    },
    {
      "id": "thcs4-topic-cb-array-1d",
      "chapterId": "thcs4-c3",
      "title": "Mảng một chiều và duyệt mảng",
      "lessonIds": [
        "thcs4-cb-array-1d"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-loops-break-continue"
      ]
    },
    {
      "id": "thcs4-topic-cb-array-2d",
      "chapterId": "thcs4-c3",
      "title": "Mảng nhiều chiều",
      "lessonIds": [
        "thcs4-cb-array-2d"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-array-1d"
      ]
    },
    {
      "id": "thcs4-topic-cb-array-methods",
      "chapterId": "thcs4-c3",
      "title": "Mảng làm tham số và giá trị trả về",
      "lessonIds": [
        "thcs4-cb-array-methods"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-methods-intro",
        "thcs4-topic-cb-array-1d"
      ]
    },
    {
      "id": "thcs4-topic-recursion",
      "chapterId": "thcs4-c3",
      "title": "Đệ quy",
      "lessonIds": [
        "thcs4-recursion"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-methods-intro",
        "thcs4-topic-cb-branching-if-switch"
      ]
    },
    {
      "id": "thcs4-topic-cb-ex-array-sort-search",
      "chapterId": "thcs4-c3",
      "title": "Bài tập: Mảng, sắp xếp và tìm kiếm nhị phân",
      "lessonIds": [
        "thcs4-cb-ex-array-sort-search"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-array-methods"
      ]
    },
    {
      "id": "thcs4-topic-cb-java-api-math-string",
      "chapterId": "thcs4-c4",
      "title": "Thư viện Java API: Math và String",
      "lessonIds": [
        "thcs4-cb-java-api-math-string"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-scanner-io-format"
      ]
    },
    {
      "id": "thcs4-topic-cb-class-object-constructor",
      "chapterId": "thcs4-c4",
      "title": "Lớp, đối tượng và hàm dựng",
      "lessonIds": [
        "thcs4-cb-class-object-constructor"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-methods-intro",
        "thcs4-topic-cb-primitive-types-variables"
      ]
    },
    {
      "id": "thcs4-topic-cb-reference-vs-primitive",
      "chapterId": "thcs4-c4",
      "title": "Kiểu nguyên thủy và kiểu tham chiếu",
      "lessonIds": [
        "thcs4-cb-reference-vs-primitive"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-class-object-constructor",
        "thcs4-topic-cb-array-1d"
      ]
    },
    {
      "id": "thcs4-topic-cb-static-members",
      "chapterId": "thcs4-c4",
      "title": "Biến tĩnh và phương thức tĩnh (static)",
      "lessonIds": [
        "thcs4-cb-static-members"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-class-object-constructor"
      ]
    },
    {
      "id": "thcs4-topic-cb-ex-string-vigenere",
      "chapterId": "thcs4-c4",
      "title": "Bài tập: Xử lý xâu và mật mã Vigenère",
      "lessonIds": [
        "thcs4-cb-ex-string-vigenere"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-java-api-math-string",
        "thcs4-topic-cb-loops-break-continue"
      ]
    },
    {
      "id": "thcs4-topic-cb-access-control",
      "chapterId": "thcs4-c5",
      "title": "Kiểm soát quyền truy cập (public, private)",
      "lessonIds": [
        "thcs4-cb-access-control"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-class-object-constructor"
      ]
    },
    {
      "id": "thcs4-topic-cb-class-scope-this",
      "chapterId": "thcs4-c5",
      "title": "Phạm vi biến trong lớp và từ khóa this",
      "lessonIds": [
        "thcs4-cb-class-scope-this"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-variable-scope",
        "thcs4-topic-cb-class-object-constructor"
      ]
    },
    {
      "id": "thcs4-topic-cb-packages-arraylist",
      "chapterId": "thcs4-c5",
      "title": "Tổ chức gói (package) và ArrayList",
      "lessonIds": [
        "thcs4-cb-packages-arraylist"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-access-control",
        "thcs4-topic-cb-array-1d"
      ]
    },
    {
      "id": "thcs4-topic-cb-encapsulation-debug",
      "chapterId": "thcs4-c6",
      "title": "Đóng gói, quy ước đặt tên và gỡ lỗi",
      "lessonIds": [
        "thcs4-cb-encapsulation-debug"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-access-control",
        "thcs4-topic-cb-coding-style"
      ]
    },
    {
      "id": "thcs4-topic-cb-interface-contract",
      "chapterId": "thcs4-c6",
      "title": "Giao diện (interface), nạp chồng và ghi đè",
      "lessonIds": [
        "thcs4-cb-interface-contract"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-encapsulation-debug"
      ]
    },
    {
      "id": "thcs4-topic-cb-inheritance-oop",
      "chapterId": "thcs4-c7",
      "title": "Kế thừa, từ khóa super và 4 đặc trưng OOP",
      "lessonIds": [
        "thcs4-cb-inheritance-oop"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-class-object-constructor",
        "thcs4-topic-cb-access-control"
      ]
    },
    {
      "id": "thcs4-topic-cb-exceptions-checked-unchecked",
      "chapterId": "thcs4-c7",
      "title": "Ngoại lệ: Checked và Unchecked",
      "lessonIds": [
        "thcs4-cb-exceptions-checked-unchecked"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-inheritance-oop"
      ]
    },
    {
      "id": "thcs4-topic-cb-try-catch-finally-throw",
      "chapterId": "thcs4-c7",
      "title": "Xử lý ngoại lệ với try-catch-finally, throw và throws",
      "lessonIds": [
        "thcs4-cb-try-catch-finally-throw"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-exceptions-checked-unchecked"
      ]
    },
    {
      "id": "thcs4-topic-cb-io-streams-files",
      "chapterId": "thcs4-c8",
      "title": "Luồng vào/ra (I/O) và xử lý tệp",
      "lessonIds": [
        "thcs4-cb-io-streams-files"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-try-catch-finally-throw"
      ]
    },
    {
      "id": "thcs4-topic-cb-text-binary-serialization",
      "chapterId": "thcs4-c8",
      "title": "Đọc ghi tệp tuần tự và tuần tự hóa đối tượng",
      "lessonIds": [
        "thcs4-cb-text-binary-serialization"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-io-streams-files",
        "thcs4-topic-cb-interface-contract"
      ]
    },
    {
      "id": "thcs4-topic-cb-swing-gui-basics",
      "chapterId": "thcs4-c8",
      "title": "Giới thiệu giao diện đồ họa Swing",
      "lessonIds": [
        "thcs4-cb-swing-gui-basics"
      ],
      "prerequisiteIds": [
        "thcs4-topic-cb-inheritance-oop",
        "thcs4-topic-cb-interface-contract"
      ]
    }
  ],
  "lessons": [
    {
      "id": "thcs4-cb-java-program-bytecode",
      "topicId": "thcs4-topic-cb-java-program-bytecode",
      "title": "Chương trình Java, biên dịch và JVM",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-java-program-bytecode.md"
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
      "id": "thcs4-cb-primitive-types-variables",
      "topicId": "thcs4-topic-cb-primitive-types-variables",
      "title": "Kiểu dữ liệu nguyên thủy và biến",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-primitive-types-variables.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Java phân biệt 8 kiểu nguyên thủy (boolean, char, byte, short, int, long, float, double) với kiểu tham chiếu như String; biến phải được khai báo trước khi dùng và phân biệt hoa thường.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-primitive-types-variables.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-operators-expressions",
      "topicId": "thcs4-topic-cb-operators-expressions",
      "title": "Toán tử, phép gán và biểu thức",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-operators-expressions.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Các nhóm toán tử gán, số học, quan hệ, logic, ghép xâu, tăng giảm tiền tố/hậu tố (++/--) và phép gán kết hợp (+=, *=) cùng thứ tự ưu tiên khi tính biểu thức.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-operators-expressions.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-methods-intro",
      "topicId": "thcs4-topic-cb-methods-intro",
      "title": "Phương thức và lời gọi hàm",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-methods-intro.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tổ chức chương trình thành các phương thức (void hoặc trả về giá trị qua return), truyền đối số theo kiểu khai báo để phân rã bài toán và tái sử dụng mã.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-methods-intro.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-variable-scope",
      "topicId": "thcs4-topic-cb-variable-scope",
      "title": "Phạm vi hiệu lực của biến",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-variable-scope.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tham số có hiệu lực trong toàn phương thức, còn biến cục bộ chỉ tồn tại từ chỗ khai báo tới dấu } kết thúc khối chứa nó; kiểu nguyên thủy truyền theo giá trị.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-variable-scope.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-scanner-io-format",
      "topicId": "thcs4-topic-cb-scanner-io-format",
      "title": "Nhập xuất chuẩn với Scanner và printf",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-scanner-io-format.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đọc dữ liệu từ bàn phím bằng java.util.Scanner, chuyển hướng luồng vào/ra bằng dòng lệnh, sinh số ngẫu nhiên với Math.random() và xuất định dạng bằng System.out.printf.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-scanner-io-format.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-branching-if-switch",
      "topicId": "thcs4-topic-cb-branching-if-switch",
      "title": "Cấu trúc rẽ nhánh if-else và switch-case",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-branching-if-switch.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Điều khiển rẽ nhánh theo biểu thức boolean với if, if-else, chuỗi else if (ưu tiên !, &&, ||) và rẽ nhánh theo giá trị rời rạc với switch-case, break, default.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-branching-if-switch.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-loops-break-continue",
      "topicId": "thcs4-topic-cb-loops-break-continue",
      "title": "Cấu trúc lặp while, do-while, for",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-loops-break-continue.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lặp kiểm tra trước (while, for) và lặp kiểm tra sau (do-while), vòng lặp lồng nhau cùng lệnh break thoát vòng và continue bỏ qua phần còn lại của lượt lặp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-loops-break-continue.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-coding-style",
      "topicId": "thcs4-topic-cb-coding-style",
      "title": "Phong cách lập trình tốt",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-coding-style.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bảy quy tắc viết mã sạch: đặt tên gợi nhớ, canh lề, khoảng trống và dòng trống hợp lý, ngắt dòng lệnh dài, tối ưu biểu thức điều kiện và tách hàm tính toán khỏi việc in.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-coding-style.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-array-1d",
      "topicId": "thcs4-topic-cb-array-1d",
      "title": "Mảng một chiều và duyệt mảng",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-array-1d.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mảng là đối tượng lưu dãy phần tử cùng kiểu đánh chỉ số từ 0 đến length - 1; khởi tạo bằng new hoặc {...} và duyệt qua chỉ số hoặc vòng lặp for-each.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-array-1d.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-array-2d",
      "topicId": "thcs4-topic-cb-array-2d",
      "title": "Mảng nhiều chiều",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-array-2d.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mảng n chiều là mảng chứa tham chiếu tới các mảng n - 1 chiều; hỗ trợ cả bảng đều (new int[2][3]) lẫn mảng răng cưa có các hàng độ dài khác nhau.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-array-2d.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-array-methods",
      "topicId": "thcs4-topic-cb-array-methods",
      "title": "Mảng làm tham số và giá trị trả về",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-array-methods.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Truyền mảng vào phương thức cho phép cập nhật trực tiếp phần tử mảng gốc; phương thức có thể cấp phát và trả về một mảng mới.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-array-methods.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-recursion",
      "topicId": "thcs4-topic-recursion",
      "title": "Đệ quy",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-recursion.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Giải bài toán qua lời giải của chính nó với tham số nhỏ hơn; cần trường hợp suy biến (base case) và bước đệ quy tiến dần về đó. Lời gọi được quản lý bằng ngăn xếp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/recursion.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-ex-array-sort-search",
      "topicId": "thcs4-topic-cb-ex-array-sort-search",
      "title": "Bài tập: Mảng, sắp xếp và tìm kiếm nhị phân",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-ex-array-sort-search.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Sinh mảng số nguyên ngẫu nhiên trong [1, 100], sắp xếp giảm dần bằng thuật toán nổi bọt (Bubble Sort) và tìm kiếm nhị phân trên mảng giảm dần.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-ex-array-sort-search.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-java-api-math-string",
      "topicId": "thcs4-topic-cb-java-api-math-string",
      "title": "Thư viện Java API: Math và String",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-java-api-math-string.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Sử dụng thư viện chuẩn java.lang: lớp Math (PI, sqrt, pow, abs, max, min) và lớp String (length, charAt, substring, indexOf, so sánh bằng equals).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-java-api-math-string.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-class-object-constructor",
      "topicId": "thcs4-topic-cb-class-object-constructor",
      "title": "Lớp, đối tượng và hàm dựng",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-class-object-constructor.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Định nghĩa lớp gồm trường dữ liệu và phương thức thực thể, tạo đối tượng bằng new và viết hàm dựng ngầm định hoặc có tham số để khởi tạo trạng thái.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-class-object-constructor.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-reference-vs-primitive",
      "topicId": "thcs4-topic-cb-reference-vs-primitive",
      "title": "Kiểu nguyên thủy và kiểu tham chiếu",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-reference-vs-primitive.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Phân biệt biến nguyên thủy lưu giá trị trực tiếp với biến tham chiếu lưu địa chỉ vùng nhớ đối tượng; lý giải phép so sánh ==, phép gán tham chiếu và truyền tham số.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-reference-vs-primitive.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-static-members",
      "topicId": "thcs4-topic-cb-static-members",
      "title": "Biến tĩnh và phương thức tĩnh (static)",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-static-members.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thành viên static thuộc về lớp và dùng chung cho mọi đối tượng; phương thức tĩnh truy cập qua tên lớp và không gọi trực tiếp được thành viên không tĩnh.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-static-members.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-ex-string-vigenere",
      "topicId": "thcs4-topic-cb-ex-string-vigenere",
      "title": "Bài tập: Xử lý xâu và mật mã Vigenère",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-ex-string-vigenere.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đảo ngược từng từ trong xâu, tìm ký tự không lặp đầu tiên và cài đặt mã hóa Vigenère $C_i = (P_i + K_j) \\bmod 26$ trên các chữ cái A–Z.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-ex-string-vigenere.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-access-control",
      "topicId": "thcs4-topic-cb-access-control",
      "title": "Kiểm soát quyền truy cập (public, private)",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-access-control.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Dùng private để ẩn trường dữ liệu nhạy cảm khỏi truy cập trực tiếp từ bên ngoài và cung cấp phương thức public có kiểm soát để tách biệt cài đặt với giao diện lớp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-access-control.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-class-scope-this",
      "topicId": "thcs4-topic-cb-class-scope-this",
      "title": "Phạm vi biến trong lớp và từ khóa this",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-class-scope-this.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Biến thành viên có phạm vi toàn lớp; khi tham số phương thức trùng tên với biến thành viên, dùng this để trỏ tới biến của đối tượng hiện tại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-class-scope-this.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-packages-arraylist",
      "topicId": "thcs4-topic-cb-packages-arraylist",
      "title": "Tổ chức gói (package) và ArrayList",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-packages-arraylist.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Gom nhóm lớp vào package tương ứng thư mục và nạp bằng import (trừ cùng gói và java.lang); dùng ArrayList cho danh sách có kích thước thay đổi linh hoạt.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-packages-arraylist.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-encapsulation-debug",
      "topicId": "thcs4-topic-cb-encapsulation-debug",
      "title": "Đóng gói, quy ước đặt tên và gỡ lỗi",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-encapsulation-debug.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Quy ước đặt tên camelCase/PascalCase, thiết kế lớp đóng gói với thuộc tính private kèm get/set, và kỹ thuật tìm sửa lỗi từ mã giả tới cảnh báo của IDE.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-encapsulation-debug.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-interface-contract",
      "topicId": "thcs4-topic-cb-interface-contract",
      "title": "Giao diện (interface), nạp chồng và ghi đè",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-interface-contract.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khai báo interface và cài đặt nhiều giao diện bằng implements; phân biệt nạp chồng phương thức (overload, khác tham số) với ghi đè phương thức (override).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-interface-contract.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-inheritance-oop",
      "topicId": "thcs4-topic-cb-inheritance-oop",
      "title": "Kế thừa, từ khóa super và 4 đặc trưng OOP",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-inheritance-oop.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mở rộng lớp cha bằng extends (đơn kế thừa), gọi hàm dựng và phương thức lớp cha qua super, cùng tổng hợp 4 đặc trưng OOP: trừu tượng, đóng gói, đa hình, kế thừa.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-inheritance-oop.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-exceptions-checked-unchecked",
      "topicId": "thcs4-topic-cb-exceptions-checked-unchecked",
      "title": "Ngoại lệ: Checked và Unchecked",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-exceptions-checked-unchecked.md"
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
      "id": "thcs4-cb-try-catch-finally-throw",
      "topicId": "thcs4-topic-cb-try-catch-finally-throw",
      "title": "Xử lý ngoại lệ với try-catch-finally, throw và throws",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-try-catch-finally-throw.md"
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
      "id": "thcs4-cb-io-streams-files",
      "topicId": "thcs4-topic-cb-io-streams-files",
      "title": "Luồng vào/ra (I/O) và xử lý tệp",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-io-streams-files.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khái niệm luồng (Stream), 3 luồng chuẩn, đọc ghi tệp nhị phân (FileInputStream/FileOutputStream) và tệp văn bản (FileReader/FileWriter), cùng lớp File kiểm tra đường dẫn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-io-streams-files.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-text-binary-serialization",
      "topicId": "thcs4-topic-cb-text-binary-serialization",
      "title": "Đọc ghi tệp tuần tự và tuần tự hóa đối tượng",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-text-binary-serialization.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Ghi và đọc tệp văn bản tuần tự bằng Formatter và Scanner; lưu trữ và khôi phục đối tượng trên tệp nhị phân thông qua giao diện Serializable.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-text-binary-serialization.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "thcs4-cb-swing-gui-basics",
      "topicId": "thcs4-topic-cb-swing-gui-basics",
      "title": "Giới thiệu giao diện đồ họa Swing",
      "content": {
        "format": "markdown",
        "assetPath": "thcs4/lessons/thcs4-cb-swing-gui-basics.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "So sánh AWT và Swing đa nền tảng, các thành phần cơ bản (JLabel, JTextField, JButton, JPanel, ...) và quản lý bố cục bằng LayoutManager (FlowLayout, GridLayout).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/cb-swing-gui-basics.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    }
  ],
  "exercises": [],
  "resources": []
} as const satisfies LearningContent, writtenPractice);
