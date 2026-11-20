import type { LearningContent } from '../../../domain/workspace';
import { withWrittenPractice } from '../../../core/learning/written-content';
import { phy1159SemiEssays } from './semi-essays';
import writtenPractice from './written-practice';

export default withWrittenPractice(withWrittenPractice({
  "chapters": [
    {
      "id": "phy1159-ch-1",
      "courseId": "phy1159",
      "title": "Mở đầu vật lý học",
      "topicIds": [
        "phy1159-t1-1-topic",
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-ch-2",
      "courseId": "phy1159",
      "title": "Động học chất điểm",
      "topicIds": [
        "phy1159-t2-1-topic",
        "phy1159-t2-2-topic",
        "phy1159-t2-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-3",
      "courseId": "phy1159",
      "title": "Động lực học chất điểm",
      "topicIds": [
        "phy1159-t3-1-topic",
        "phy1159-t3-2-topic",
        "phy1159-t3-3-topic",
        "phy1159-t3-4-topic"
      ]
    },
    {
      "id": "phy1159-ch-4",
      "courseId": "phy1159",
      "title": "Công và năng lượng",
      "topicIds": [
        "phy1159-t4-1-topic",
        "phy1159-t4-2-topic",
        "phy1159-t4-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-5",
      "courseId": "phy1159",
      "title": "Chuyển động của vật rắn",
      "topicIds": [
        "phy1159-t5-1-topic",
        "phy1159-t5-2-topic",
        "phy1159-t5-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-6",
      "courseId": "phy1159",
      "title": "Trường hấp dẫn và chuyển động trong trường xuyên tâm",
      "topicIds": [
        "phy1159-t6-1-topic",
        "phy1159-t6-2-topic",
        "phy1159-t6-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-7",
      "courseId": "phy1159",
      "title": "Cơ sở của thuyết tương đối hẹp",
      "topicIds": [
        "phy1159-t7-1-topic",
        "phy1159-t7-2-topic",
        "phy1159-t7-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-8",
      "courseId": "phy1159",
      "title": "Nhiệt độ",
      "topicIds": [
        "phy1159-t8-1-topic",
        "phy1159-t8-2-topic",
        "phy1159-t8-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-9",
      "courseId": "phy1159",
      "title": "Nhiệt và nguyên lý thứ nhất của nhiệt động lực học",
      "topicIds": [
        "phy1159-t9-1-topic",
        "phy1159-t9-2-topic",
        "phy1159-t9-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-10",
      "courseId": "phy1159",
      "title": "Thuyết động học chất khí",
      "topicIds": [
        "phy1159-t10-1-topic",
        "phy1159-t10-2-topic",
        "phy1159-t10-3-topic"
      ]
    },
    {
      "id": "phy1159-ch-11",
      "courseId": "phy1159",
      "title": "Entropi và nguyên lý thứ hai của nhiệt động lực học",
      "topicIds": [
        "phy1159-t11-1-topic",
        "phy1159-t11-2-topic",
        "phy1159-t11-3-topic"
      ]
    }
  ],
  "topics": [
    {
      "id": "phy1159-t1-1-topic",
      "chapterId": "phy1159-ch-1",
      "title": "Phương pháp thực nghiệm và phạm vi mô hình",
      "lessonIds": [
        "phy1159-t1-1"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "phy1159-t1-2-topic",
      "chapterId": "phy1159-ch-1",
      "title": "Hệ đơn vị SI và phương pháp phân tích thứ nguyên",
      "lessonIds": [
        "phy1159-t1-2"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "phy1159-t2-1-topic",
      "chapterId": "phy1159-ch-2",
      "title": "Hệ quy chiếu, độ dịch chuyển, vận tốc và đồ thị v(t)",
      "lessonIds": [
        "phy1159-t2-1"
      ],
      "prerequisiteIds": [
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-t2-2-topic",
      "chapterId": "phy1159-ch-2",
      "title": "Gia tốc tiếp tuyến, gia tốc pháp tuyến và chuyển động cong",
      "lessonIds": [
        "phy1159-t2-2"
      ],
      "prerequisiteIds": [
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-t2-3-topic",
      "chapterId": "phy1159-ch-2",
      "title": "Phép cộng vận tốc và chuyển động tương đối",
      "lessonIds": [
        "phy1159-t2-3"
      ],
      "prerequisiteIds": [
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-t3-1-topic",
      "chapterId": "phy1159-ch-3",
      "title": "Ba định luật Newton và nguyên tắc chỉ vẽ lực thật",
      "lessonIds": [
        "phy1159-t3-1"
      ],
      "prerequisiteIds": [
        "phy1159-t2-1-topic"
      ]
    },
    {
      "id": "phy1159-t3-2-topic",
      "chapterId": "phy1159-ch-3",
      "title": "Động lực học chuyển động tròn đều",
      "lessonIds": [
        "phy1159-t3-2"
      ],
      "prerequisiteIds": [
        "phy1159-t2-1-topic"
      ]
    },
    {
      "id": "phy1159-t3-3-topic",
      "chapterId": "phy1159-ch-3",
      "title": "Động lượng, xung lượng và chuyển động tên lửa",
      "lessonIds": [
        "phy1159-t3-3"
      ],
      "prerequisiteIds": [
        "phy1159-t2-1-topic"
      ]
    },
    {
      "id": "phy1159-t3-4-topic",
      "chapterId": "phy1159-ch-3",
      "title": "Hệ quy chiếu phi quán tính, lực quán tính và Coriolis",
      "lessonIds": [
        "phy1159-t3-4"
      ],
      "prerequisiteIds": [
        "phy1159-t2-1-topic"
      ]
    },
    {
      "id": "phy1159-t4-1-topic",
      "chapterId": "phy1159-ch-4",
      "title": "Công, công suất và định lý động năng",
      "lessonIds": [
        "phy1159-t4-1"
      ],
      "prerequisiteIds": [
        "phy1159-t3-1-topic"
      ]
    },
    {
      "id": "phy1159-t4-2-topic",
      "chapterId": "phy1159-ch-4",
      "title": "Lực thế, thế năng và định lý biến thiên – bảo toàn cơ năng",
      "lessonIds": [
        "phy1159-t4-2"
      ],
      "prerequisiteIds": [
        "phy1159-t3-1-topic"
      ]
    },
    {
      "id": "phy1159-t4-3-topic",
      "chapterId": "phy1159-ch-4",
      "title": "Phân biệt va chạm đàn hồi và va chạm mềm theo giai đoạn",
      "lessonIds": [
        "phy1159-t4-3"
      ],
      "prerequisiteIds": [
        "phy1159-t3-1-topic"
      ]
    },
    {
      "id": "phy1159-t5-1-topic",
      "chapterId": "phy1159-ch-5",
      "title": "Khối tâm hệ chất điểm và chuyển động tịnh tiến",
      "lessonIds": [
        "phy1159-t5-1"
      ],
      "prerequisiteIds": [
        "phy1159-t4-1-topic"
      ]
    },
    {
      "id": "phy1159-t5-2-topic",
      "chapterId": "phy1159-ch-5",
      "title": "Phương trình quay quanh trục cố định và định lý Steiner–Huygens",
      "lessonIds": [
        "phy1159-t5-2"
      ],
      "prerequisiteIds": [
        "phy1159-t4-1-topic"
      ]
    },
    {
      "id": "phy1159-t5-3-topic",
      "chapterId": "phy1159-ch-5",
      "title": "Mômen động lượng và động năng lăn không trượt",
      "lessonIds": [
        "phy1159-t5-3"
      ],
      "prerequisiteIds": [
        "phy1159-t4-1-topic"
      ]
    },
    {
      "id": "phy1159-t6-1-topic",
      "chapterId": "phy1159-ch-6",
      "title": "Định luật hấp dẫn vũ trụ và nguyên lý chồng chất",
      "lessonIds": [
        "phy1159-t6-1"
      ],
      "prerequisiteIds": [
        "phy1159-t3-2-topic",
        "phy1159-t4-2-topic"
      ]
    },
    {
      "id": "phy1159-t6-2-topic",
      "chapterId": "phy1159-ch-6",
      "title": "Trường xuyên tâm và ba định luật Kepler",
      "lessonIds": [
        "phy1159-t6-2"
      ],
      "prerequisiteIds": [
        "phy1159-t3-2-topic",
        "phy1159-t4-2-topic"
      ]
    },
    {
      "id": "phy1159-t6-3-topic",
      "chapterId": "phy1159-ch-6",
      "title": "Thế năng hấp dẫn và vận tốc vũ trụ cấp I, cấp II",
      "lessonIds": [
        "phy1159-t6-3"
      ],
      "prerequisiteIds": [
        "phy1159-t3-2-topic",
        "phy1159-t4-2-topic"
      ]
    },
    {
      "id": "phy1159-t7-1-topic",
      "chapterId": "phy1159-ch-7",
      "title": "Từ biến đổi Galileo đến hai tiên đề Einstein",
      "lessonIds": [
        "phy1159-t7-1"
      ],
      "prerequisiteIds": [
        "phy1159-t2-3-topic"
      ]
    },
    {
      "id": "phy1159-t7-2-topic",
      "chapterId": "phy1159-ch-7",
      "title": "Biến đổi Lorentz, dãn thời gian và co độ dài",
      "lessonIds": [
        "phy1159-t7-2"
      ],
      "prerequisiteIds": [
        "phy1159-t2-3-topic"
      ]
    },
    {
      "id": "phy1159-t7-3-topic",
      "chapterId": "phy1159-ch-7",
      "title": "Động lực học tương đối tính và hệ thức E = mc²",
      "lessonIds": [
        "phy1159-t7-3"
      ],
      "prerequisiteIds": [
        "phy1159-t2-3-topic"
      ]
    },
    {
      "id": "phy1159-t8-1-topic",
      "chapterId": "phy1159-ch-8",
      "title": "Nguyên lý số 0 và ý nghĩa nhiệt độ",
      "lessonIds": [
        "phy1159-t8-1"
      ],
      "prerequisiteIds": [
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-t8-2-topic",
      "chapterId": "phy1159-ch-8",
      "title": "Các thang nhiệt giai và quy tắc nội suy tuyến tính",
      "lessonIds": [
        "phy1159-t8-2"
      ],
      "prerequisiteIds": [
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-t8-3-topic",
      "chapterId": "phy1159-ch-8",
      "title": "Sự nở vì nhiệt của chất rắn và chất lỏng",
      "lessonIds": [
        "phy1159-t8-3"
      ],
      "prerequisiteIds": [
        "phy1159-t1-2-topic"
      ]
    },
    {
      "id": "phy1159-t9-1-topic",
      "chapterId": "phy1159-ch-9",
      "title": "Nội năng (hàm trạng thái) và Nhiệt, Công (hàm quá trình)",
      "lessonIds": [
        "phy1159-t9-1"
      ],
      "prerequisiteIds": [
        "phy1159-t4-1-topic",
        "phy1159-t8-1-topic"
      ]
    },
    {
      "id": "phy1159-t9-2-topic",
      "chapterId": "phy1159-ch-9",
      "title": "Nguyên lý I Nhiệt động lực học và các quá trình đặc biệt",
      "lessonIds": [
        "phy1159-t9-2"
      ],
      "prerequisiteIds": [
        "phy1159-t4-1-topic",
        "phy1159-t8-1-topic"
      ]
    },
    {
      "id": "phy1159-t9-3-topic",
      "chapterId": "phy1159-ch-9",
      "title": "Nhiệt dung, nhiệt chuyển pha và dẫn nhiệt trạng thái dừng",
      "lessonIds": [
        "phy1159-t9-3"
      ],
      "prerequisiteIds": [
        "phy1159-t4-1-topic",
        "phy1159-t8-1-topic"
      ]
    },
    {
      "id": "phy1159-t10-1-topic",
      "chapterId": "phy1159-ch-10",
      "title": "Phương trình cơ bản thuyết động học và quãng đường tự do trung bình",
      "lessonIds": [
        "phy1159-t10-1"
      ],
      "prerequisiteIds": [
        "phy1159-t9-1-topic"
      ]
    },
    {
      "id": "phy1159-t10-2-topic",
      "chapterId": "phy1159-ch-10",
      "title": "Phân bố đều theo bậc tự do và nội năng khí lý tưởng",
      "lessonIds": [
        "phy1159-t10-2"
      ],
      "prerequisiteIds": [
        "phy1159-t9-1-topic"
      ]
    },
    {
      "id": "phy1159-t10-3-topic",
      "chapterId": "phy1159-ch-10",
      "title": "Nhiệt dung mol, hệ thức Mayer và đẳng nhiệt – đoạn nhiệt",
      "lessonIds": [
        "phy1159-t10-3"
      ],
      "prerequisiteIds": [
        "phy1159-t9-1-topic"
      ]
    },
    {
      "id": "phy1159-t11-1-topic",
      "chapterId": "phy1159-ch-11",
      "title": "Quá trình thuận nghịch và Nguyên lý II (Thomson – Clausius)",
      "lessonIds": [
        "phy1159-t11-1"
      ],
      "prerequisiteIds": [
        "phy1159-t9-2-topic",
        "phy1159-t10-1-topic"
      ]
    },
    {
      "id": "phy1159-t11-2-topic",
      "chapterId": "phy1159-ch-11",
      "title": "Chu trình Carnot và Định lý Carnot",
      "lessonIds": [
        "phy1159-t11-2"
      ],
      "prerequisiteIds": [
        "phy1159-t9-2-topic",
        "phy1159-t10-1-topic"
      ]
    },
    {
      "id": "phy1159-t11-3-topic",
      "chapterId": "phy1159-ch-11",
      "title": "Bất đẳng thức Clausius, Entropi và nguyên lý tăng Entropi",
      "lessonIds": [
        "phy1159-t11-3"
      ],
      "prerequisiteIds": [
        "phy1159-t9-2-topic",
        "phy1159-t10-1-topic"
      ]
    }
  ],
  "lessons": [
    {
      "id": "phy1159-t1-1",
      "topicId": "phy1159-t1-1-topic",
      "title": "Phương pháp thực nghiệm và phạm vi mô hình",
      "summary": "Vật lý bắt đầu từ quan sát hiện tượng và đo lường định lượng các đại lượng đặc trưng (không chỉ mô tả cảm tính).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t1-1.md"
      },
      "exerciseIds": [
        "phy1159-l1-1",
        "phy1159-probe-t1-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t1-2",
      "topicId": "phy1159-t1-2-topic",
      "title": "Hệ đơn vị SI và phương pháp phân tích thứ nguyên",
      "summary": "Mỗi phép đo là so sánh đại lượng với một đơn vị chuẩn. Hệ SI chọn 7 đại lượng cơ bản (trong Cơ – Nhiệt dùng chủ yếu chiều dài $L$, khối lượng $M$, thời gian $T$, nhiệt độ $\\Theta$, lượng chất $N$).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t1-2.md"
      },
      "exerciseIds": [
        "phy1159-l1-2",
        "phy1159-probe-t1-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t2-1",
      "topicId": "phy1159-t2-1-topic",
      "title": "Hệ quy chiếu, độ dịch chuyển, vận tốc và đồ thị v(t)",
      "summary": "Vị trí chỉ có nghĩa khi gắn với hệ quy chiếu (vật mốc + hệ tọa độ + đồng hồ + gốc thời gian). Trong $\\Delta t$, chất điểm thay đổi vị trí theo véc-tơ $\\Delta\\vec r = \\vec r(t+\\Delta t) - \\vec r(t)$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t2-1.md"
      },
      "exerciseIds": [
        "phy1159-l2-1",
        "phy1159-probe-t2-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t2-2",
      "topicId": "phy1159-t2-2-topic",
      "title": "Gia tốc tiếp tuyến, gia tốc pháp tuyến và chuyển động cong",
      "summary": "Véc-tơ vận tốc $\\vec\\upsilon$ có thể đổi cả độ lớn lẫn phương, nên đạo hàm $\\vec a = d\\vec\\upsilon/dt$ tách thành hai thành phần trực giao tại mỗi điểm quỹ đạo.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t2-2.md"
      },
      "exerciseIds": [
        "phy1159-l2-2",
        "phy1159-probe-t2-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t2-3",
      "topicId": "phy1159-t2-3-topic",
      "title": "Phép cộng vận tốc và chuyển động tương đối",
      "summary": "Vị trí vật trong hai hệ quy chiếu liên hệ bởi $\\vec r = \\vec r' + \\vec R$. Đạo hàm theo thời gian thu được quy tắc cộng vận tốc $\\vec\\upsilon = \\vec\\upsilon' + \\vec V$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t2-3.md"
      },
      "exerciseIds": [
        "phy1159-probe-t2-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t3-1",
      "topicId": "phy1159-t3-1-topic",
      "title": "Ba định luật Newton và nguyên tắc chỉ vẽ lực thật",
      "summary": "Định luật I chọn ra hệ quy chiếu quán tính (nơi vật tự do có $\\vec a = 0$). Trong hệ đó, tương tác giữa các vật gây ra gia tốc theo Định luật II $\\sum\\vec F = m\\vec a$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t3-1.md"
      },
      "exerciseIds": [
        "phy1159-l3-1",
        "phy1159-probe-t3-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t3-2",
      "topicId": "phy1159-t3-2-topic",
      "title": "Động lực học chuyển động tròn đều",
      "summary": "Vật chuyển động tròn đều trong mặt phẳng ngang có gia tốc hướng tâm $a_n = \\upsilon^2/r = \\omega^2 r$ hướng về tâm đường tròn.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t3-2.md"
      },
      "exerciseIds": [
        "phy1159-l3-2",
        "phy1159-probe-t3-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t3-3",
      "topicId": "phy1159-t3-3-topic",
      "title": "Động lượng, xung lượng và chuyển động tên lửa",
      "summary": "Dạng tổng quát của Định luật II là $\\vec F = d\\vec P/dt$ với $\\vec P = m\\vec\\upsilon$. Nhân $dt$ rồi tích phân theo thời gian cho định lý biến thiên động lượng $\\Delta\\vec P = \\vec J = \\int \\vec F\\,dt$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t3-3.md"
      },
      "exerciseIds": [
        "phy1159-l3-3",
        "phy1159-probe-t3-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t3-4",
      "topicId": "phy1159-t3-4-topic",
      "title": "Hệ quy chiếu phi quán tính, lực quán tính và Coriolis",
      "summary": "Nếu hệ quy chiếu $O'$ chuyển động với gia tốc $\\vec a_0$ so với hệ quán tính $O$, đạo hàm vị trí cho $\\vec a = \\vec a' + \\vec a_0$. Nhân $m$ rồi chuyển vế thu được $m\\vec a' = \\vec F_{\\text{thật}} - m\\vec a_0$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t3-4.md"
      },
      "exerciseIds": [
        "phy1159-l3-5",
        "phy1159-probe-t3-4"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t4-1",
      "topicId": "phy1159-t4-1-topic",
      "title": "Công, công suất và định lý động năng",
      "summary": "Khi chất điểm chịu lực $\\vec F$ dịch chuyển đoạn $d\\vec r$, lực thực hiện công nguyên tố $dA = \\vec F\\cdot d\\vec r$, với tốc độ sinh công tức thời $P = dA/dt = \\vec F\\cdot\\vec\\upsilon$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t4-1.md"
      },
      "exerciseIds": [
        "phy1159-probe-t4-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t4-2",
      "topicId": "phy1159-t4-2-topic",
      "title": "Lực thế, thế năng và định lý biến thiên – bảo toàn cơ năng",
      "summary": "Với trọng lực, lực đàn hồi, lực hấp dẫn, công dịch chuyển giữa hai điểm chỉ phụ thuộc điểm đầu và điểm cuối (không phụ thuộc đường đi): đó là trường lực thế, có thể định nghĩa thế năng sao cho $A_{\\text{thế}} = W_{t1} - W_{t2}$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t4-2.md"
      },
      "exerciseIds": [
        "phy1159-l4-1",
        "phy1159-probe-t4-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t4-3",
      "topicId": "phy1159-t4-3-topic",
      "title": "Phân biệt va chạm đàn hồi và va chạm mềm theo giai đoạn",
      "summary": "Va chạm là tương tác rất ngắn với nội lực cực lớn so với ngoại lực (trọng lực, ma sát nhỏ trong $\\Delta t \\to 0$).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t4-3.md"
      },
      "exerciseIds": [
        "phy1159-l4-2",
        "phy1159-probe-t4-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t5-1",
      "topicId": "phy1159-t5-1-topic",
      "title": "Khối tâm hệ chất điểm và chuyển động tịnh tiến",
      "summary": "Viết $\\vec F_i + \\vec f_i = m_i \\vec a_i$ cho từng hạt rồi cộng tất cả $N$ hạt lại. Theo Định luật III Newton, các cặp nội lực $\\vec f_{ij} + \\vec f_{ji} = 0$ tự triệt tiêu hoàn toàn.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t5-1.md"
      },
      "exerciseIds": [
        "phy1159-probe-t5-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t5-2",
      "topicId": "phy1159-t5-2-topic",
      "title": "Phương trình quay quanh trục cố định và định lý Steiner–Huygens",
      "summary": "Lực $\\vec F$ tác dụng vào vật rắn quay quanh trục cố định chỉ làm quay nhờ thành phần tiếp tuyến qua mômen lực $\\vec M = \\vec r \\times \\vec F$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t5-2.md"
      },
      "exerciseIds": [
        "phy1159-l5-2",
        "phy1159-probe-t5-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t5-3",
      "topicId": "phy1159-t5-3-topic",
      "title": "Mômen động lượng và động năng lăn không trượt",
      "summary": "Đạo hàm mômen động lượng $\\vec L = \\sum \\vec r_i \\times m_i\\vec\\upsilon_i$ cho $\\frac{d\\vec L}{dt} = \\vec M_{\\text{ngoại}}$ vì $\\vec\\upsilon_i \\times m_i\\vec\\upsilon_i = 0$ và mômen của cặp nội lực trực đối cùng giá triệt tiêu.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t5-3.md"
      },
      "exerciseIds": [
        "phy1159-l5-1",
        "phy1159-probe-t5-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t6-1",
      "topicId": "phy1159-t6-1-topic",
      "title": "Định luật hấp dẫn vũ trụ và nguyên lý chồng chất",
      "summary": "Hai chất điểm khối lượng $M, m$ cách nhau $r$ hút nhau với lực $F = G\\frac{Mm}{r^2}$ dọc theo đường nối hai tâm.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t6-1.md"
      },
      "exerciseIds": [
        "phy1159-probe-t6-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t6-2",
      "topicId": "phy1159-t6-2-topic",
      "title": "Trường xuyên tâm và ba định luật Kepler",
      "summary": "Lực hấp dẫn từ tâm $M$ luôn hướng về tâm $O$, nên mômen lực đối với $O$ là $\\vec M = \\vec r \\times \\vec F = \\vec 0$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t6-2.md"
      },
      "exerciseIds": [
        "phy1159-l6-1",
        "phy1159-probe-t6-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t6-3",
      "topicId": "phy1159-t6-3-topic",
      "title": "Thế năng hấp dẫn và vận tốc vũ trụ cấp I, cấp II",
      "summary": "Lực hấp dẫn $F \\propto 1/r^2$ là lực thế; chọn mốc thế năng $U(\\infty) = 0$ cho $U(r) = -G\\frac{Mm}{r}$ (âm vì lực là lực hút).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t6-3.md"
      },
      "exerciseIds": [
        "phy1159-l6-2",
        "phy1159-probe-t6-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t7-1",
      "topicId": "phy1159-t7-1-topic",
      "title": "Từ biến đổi Galileo đến hai tiên đề Einstein",
      "summary": "Các định luật Newton bất biến dưới biến đổi Galileo ($x'=x-Vt,\\ t'=t$), nhưng phương trình điện từ Maxwell cho tốc độ ánh sáng $c$ không đổi trong chân không, mâu thuẫn với công thức cộng vận tốc cổ điển.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t7-1.md"
      },
      "exerciseIds": [
        "phy1159-l7-2",
        "phy1159-probe-t7-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t7-2",
      "topicId": "phy1159-t7-2-topic",
      "title": "Biến đổi Lorentz, dãn thời gian và co độ dài",
      "summary": "Đòi hỏi tọa độ sáng $x^2 - c^2 t^2 = x'^2 - c^2 t'^2$ bất biến dẫn tới phép biến đổi Lorentz với hệ số $\\gamma = \\frac{1}{\\sqrt{1 - \\upsilon^2/c^2}} \\ge 1$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t7-2.md"
      },
      "exerciseIds": [
        "phy1159-l7-1",
        "phy1159-probe-t7-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t7-3",
      "topicId": "phy1159-t7-3-topic",
      "title": "Động lực học tương đối tính và hệ thức E = mc²",
      "summary": "Để bảo toàn động lượng đúng với biến đổi Lorentz ở mọi tốc độ gần $c$, động lượng phải định nghĩa là $\\vec p = \\gamma m_0\\vec\\upsilon$ (với $m_0$ là khối lượng nghỉ).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t7-3.md"
      },
      "exerciseIds": [
        "phy1159-probe-t7-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/mech.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t8-1",
      "topicId": "phy1159-t8-1-topic",
      "title": "Nguyên lý số 0 và ý nghĩa nhiệt độ",
      "summary": "Đưa hai vật tiếp xúc nhiệt sẽ có sự trao đổi năng lượng đến khi trạng thái vĩ mô không đổi nữa (cân bằng nhiệt).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t8-1.md"
      },
      "exerciseIds": [
        "phy1159-l8-1",
        "phy1159-probe-t8-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t8-2",
      "topicId": "phy1159-t8-2-topic",
      "title": "Các thang nhiệt giai và quy tắc nội suy tuyến tính",
      "summary": "Mỗi thang nhiệt giai chọn hai điểm chuẩn cố định (điểm ba/đóng băng và điểm sôi chuẩn của nước) rồi chia khoảng giữa thành số độ đều nhau.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t8-2.md"
      },
      "exerciseIds": [
        "phy1159-probe-t8-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t8-3",
      "topicId": "phy1159-t8-3-topic",
      "title": "Sự nở vì nhiệt của chất rắn và chất lỏng",
      "summary": "Khi nhiệt độ tăng, biên độ dao động nhiệt quanh vị trí cân bằng tăng làm khoảng cách trung bình giữa các nguyên tử tăng lên.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t8-3.md"
      },
      "exerciseIds": [
        "phy1159-l8-2",
        "phy1159-probe-t8-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t9-1",
      "topicId": "phy1159-t9-1-topic",
      "title": "Nội năng (hàm trạng thái) và Nhiệt, Công (hàm quá trình)",
      "summary": "Khí trong xi-lanh chuyển từ trạng thái 1 sang trạng thái 2 theo nhiều đường khác nhau trên giản đồ $pV$. Công hệ sinh ra là $A = \\int_1^2 p\\,dV$ (diện tích dưới đường biểu diễn), còn nhiệt $Q$ cũng phụ thuộc đường đi.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t9-1.md"
      },
      "exerciseIds": [
        "phy1159-l9-1",
        "phy1159-probe-t9-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t9-2",
      "topicId": "phy1159-t9-2-topic",
      "title": "Nguyên lý I Nhiệt động lực học và các quá trình đặc biệt",
      "summary": "Thực nghiệm chứng minh dù $Q$ và $A$ thay đổi theo đường đi giữa hai trạng thái cho trước, hiệu $Q - A$ luôn giữ cùng một giá trị.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t9-2.md"
      },
      "exerciseIds": [
        "phy1159-l9-2",
        "phy1159-probe-t9-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t9-3",
      "topicId": "phy1159-t9-3-topic",
      "title": "Nhiệt dung, nhiệt chuyển pha và dẫn nhiệt trạng thái dừng",
      "summary": "Khi nhận nhiệt, vật có thể tăng nhiệt độ ($Q = mc\\Delta T$) hoặc chuyển pha đẳng nhiệt ($Q = mL$). Khi có chênh lệch nhiệt độ qua tường nhiều lớp, nhiệt truyền từ nóng sang lạnh.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t9-3.md"
      },
      "exerciseIds": [
        "phy1159-probe-t9-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t10-1",
      "topicId": "phy1159-t10-1-topic",
      "title": "Phương trình cơ bản thuyết động học và quãng đường tự do trung bình",
      "summary": "Xét $N$ phân tử khí lý tưởng va chạm đàn hồi lên thành bình lập phương cạnh $L$: mỗi lần va chạm vào mặt vuông góc $Ox$ truyền xung lượng $2m\\upsilon_{ix}$ trong chu kỳ $2L/\\upsilon_{ix}$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t10-1.md"
      },
      "exerciseIds": [
        "phy1159-l10-2",
        "phy1159-probe-t10-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t10-2",
      "topicId": "phy1159-t10-2-topic",
      "title": "Phân bố đều theo bậc tự do và nội năng khí lý tưởng",
      "summary": "Phân tử không chỉ tịnh tiến mà còn có thể quay nếu gồm nhiều nguyên tử (tại nhiệt độ phòng chưa kích thích dao động).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t10-2.md"
      },
      "exerciseIds": [
        "phy1159-probe-t10-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t10-3",
      "topicId": "phy1159-t10-3-topic",
      "title": "Nhiệt dung mol, hệ thức Mayer và đẳng nhiệt – đoạn nhiệt",
      "summary": "So sánh nhiệt lượng cần cấp để tăng $n$ mol khí thêm $\\Delta T$ trong quá trình đẳng tích (không sinh công) và đẳng áp (vừa tăng nội năng vừa sinh công $A = p\\Delta V = nR\\Delta T$).",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t10-3.md"
      },
      "exerciseIds": [
        "phy1159-l10-1",
        "phy1159-probe-t10-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t11-1",
      "topicId": "phy1159-t11-1-topic",
      "title": "Quá trình thuận nghịch và Nguyên lý II (Thomson – Clausius)",
      "summary": "Nguyên lý I cho phép mọi quá trình bảo toàn năng lượng, nhưng thực tế nhiệt chỉ tự truyền từ nóng sang lạnh và ma sát chỉ biến công thành nhiệt chứ không tự ngược lại.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t11-1.md"
      },
      "exerciseIds": [
        "phy1159-probe-t11-1"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t11-2",
      "topicId": "phy1159-t11-2-topic",
      "title": "Chu trình Carnot và Định lý Carnot",
      "summary": "Ghép 2 quá trình đẳng nhiệt thuận nghịch ở $T_1, T_2$ với 2 quá trình đoạn nhiệt thuận nghịch tạo thành chu trình Carnot khép kín.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t11-2.md"
      },
      "exerciseIds": [
        "phy1159-probe-t11-2"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-t11-3",
      "topicId": "phy1159-t11-3-topic",
      "title": "Bất đẳng thức Clausius, Entropi và nguyên lý tăng Entropi",
      "summary": "Từ $\\frac{Q_1 - |Q_2|}{Q_1} \\le \\frac{T_1 - T_2}{T_1}$, quy ước nhiệt nhận dương và tỏa âm cho $\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} \\le 0$. Chia nhỏ chu trình bất kỳ thành vô số chu trình Carnot sơ cấp cho bất đẳng thức Clausius $\\oint \\frac{\\delta Q}{T} \\le 0$.",
      "content": {
        "format": "markdown",
        "assetPath": "phy1159/lessons/phy1159-t11-3.md"
      },
      "exerciseIds": [
        "phy1159-l11-1",
        "phy1159-l11-2",
        "phy1159-probe-t11-3"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/thermo.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    }
  ],
  "exercises": [
    {
      "id": "phy1159-l1-1",
      "lessonId": "phy1159-t1-1",
      "title": "Quy trình xây dựng thuyết vật lý thực nghiệm",
      "kind": "short-answer",
      "prompt": "Sắp xếp 5 bước nghiên cứu của vật lý học theo đúng mạch logic thực nghiệm (Slide Chương 1):\n\n**5** — Kiểm chứng giới hạn đúng của lý thuyết và ứng dụng vào thực tiễn.\n\n**4** — Hệ thống hóa giả thuyết, định luật và hệ quả thành thuyết vật lý.\n\n**3** — Xử lý số liệu đo để tìm quy luật và đề xuất giả thuyết.\n\n**2** — Thực hiện thí nghiệm định tính và định lượng để đo các đại lượng liên quan.\n\n**1** — Quan sát hiện tượng tự nhiên và đặt câu hỏi định lượng.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 5 4 3 2 1).",
      "answers": [
        "1 2 3 4 5"
      ],
      "explanation": "Kiến thức vật lý đi từ quan sát và đo lường → quy luật thực nghiệm → giả thuyết/định luật → lý thuyết hoàn chỉnh → kiểm chứng ứng dụng, không tự suy đoán tách rời đo lường.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t1-1",
      "lessonId": "phy1159-t1-1",
      "title": "Kiểm tra nhanh quan niệm — Phương pháp thực nghiệm và phạm vi mô hình",
      "prompt": "Một công thức rất đẹp và chứng minh toán học chặt chẽ nhưng thí nghiệm đo được lại lệch rõ rệt. Vật lý học xử lý thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Công thức phải được xem lại hoặc giới hạn phạm vi áp dụng, vì thí nghiệm là tiêu chuẩn kiểm chứng"
        },
        {
          "id": "option-2",
          "label": "Giữ công thức vì toán học đã chứng minh, coi số đo là sai"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Vật lý bắt đầu và kết thúc ở đo lường; mô hình chỉ đúng trong phạm vi đã kiểm chứng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l1-2",
      "lessonId": "phy1159-t1-2",
      "title": "Giới hạn của phép kiểm tra thứ nguyên",
      "prompt": "Trong một bài làm, sinh viên rút ra chu kỳ con lắc lò xo là $T = 4\\pi \\sqrt{\\dfrac{m}{k}}$ (với $[k] = [F]/L = M/T^2$). Phân tích thứ nguyên cho ta kết luận nào chính xác nhất?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Thứ nguyên hai vế khớp nhau, nhưng vẫn chưa kết luận được hệ số $4\\pi$ đúng hay sai"
        },
        {
          "id": "option-2",
          "label": "Vì thứ nguyên hai vế khớp nên công thức chắc chắn đúng hoàn toàn"
        },
        {
          "id": "option-3",
          "label": "Thứ nguyên của $\\sqrt{m/k}$ là $1/T$ nên công thức sai ngay từ thứ nguyên"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. $\\sqrt{M/(M/T^2)} = T$ nên công thức đúng về thứ nguyên; nhưng phân tích thứ nguyên không phát hiện được sai số ở hằng số không thứ nguyên ($4\\pi$ thay vì $2\\pi$).",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t1-2",
      "lessonId": "phy1159-t1-2",
      "title": "Kiểm tra nhanh quan niệm — Hệ đơn vị SI và phương pháp phân tích thứ nguyên",
      "prompt": "Một công thức cho kết quả có thứ nguyên đúng. Điều đó cho phép kết luận gì?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Công thức không bị sai về thứ nguyên, nhưng hệ số số học vẫn có thể sai"
        },
        {
          "id": "option-2",
          "label": "Công thức chắc chắn đúng hoàn toàn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Thứ nguyên là điều kiện cần, chưa phải điều kiện đủ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l2-1",
      "lessonId": "phy1159-t2-1",
      "title": "Tốc độ không đổi có đồng nghĩa với gia tốc bằng không?",
      "prompt": "Một chất điểm chuyển động tròn đều trên đường tròn bán kính $R$ với tốc độ $\\upsilon$ không đổi. Phát biểu nào mô tả đúng trạng thái gia tốc của chất điểm?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Gia tốc tiếp tuyến $a_t = 0$, nhưng gia tốc toàn phần khác 0 vì còn gia tốc pháp tuyến $a_n = \\upsilon^2/R$"
        },
        {
          "id": "option-2",
          "label": "Vì tốc độ không đổi nên gia tốc bằng 0"
        },
        {
          "id": "option-3",
          "label": "Gia tốc khác 0 nhưng luôn tiếp tuyến với quỹ đạo để giữ vật đi theo vòng tròn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. $a_t = d\\upsilon/dt = 0$ chỉ nói độ lớn không đổi; phương của $\\vec\\upsilon$ liên tục quay vào tâm nên $a_n = \\upsilon^2/R \\ne 0$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t2-1",
      "lessonId": "phy1159-t2-1",
      "title": "Kiểm tra nhanh quan niệm — Hệ quy chiếu, độ dịch chuyển, vận tốc và đồ thị v(t)",
      "prompt": "Xe chạy một vòng sân vận động rồi về đúng điểm xuất phát. Độ lớn vận tốc trung bình của cả vòng là bao nhiêu?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Bằng 0, vì độ dịch chuyển bằng 0"
        },
        {
          "id": "option-2",
          "label": "Bằng quãng đường một vòng chia cho thời gian"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Vận tốc trung bình lấy độ dịch chuyển (véc-tơ) chia cho thời gian, không lấy quãng đường.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l2-2",
      "lessonId": "phy1159-t2-2",
      "title": "Mạch suy luận bán kính cong của quỹ đạo ném xiên",
      "kind": "short-answer",
      "prompt": "Sắp xếp chuỗi suy luận để tìm bán kính cong $R$ của quỹ đạo ném xiên từ vận tốc đầu $\\upsilon_0$, góc ném $\\alpha$ (nền cho Bài 2.6):\n\n**4** — Tại điểm chạm đất đối xứng, $\\upsilon = \\upsilon_0$ hợp phương ngang góc $\\alpha$, nên thành phần vuông góc $\\vec\\upsilon$ là $a_n = g\\cos\\alpha$ và $R_C = \\upsilon_0^2/(g\\cos\\alpha)$.\n\n**3** — Tại điểm cao nhất, $\\vec\\upsilon$ nằm ngang có độ lớn $\\upsilon_0\\cos\\alpha$ và vuông góc $\\vec g$, nên $a_n = g$ và $R_B = \\upsilon_0^2\\cos^2\\alpha/g$.\n\n**2** — Phân tích $\\vec a$ theo phương vuông góc với $\\vec\\upsilon$ để tìm gia tốc pháp tuyến $a_n = \\upsilon^2/R$.\n\n**1** — Bỏ qua sức cản nên tại mọi điểm vật chỉ có gia tốc trọng trường $\\vec a = \\vec g$ hướng thẳng đứng xuống.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Bán kính cong tại điểm bất kỳ luôn rút từ $R = \\upsilon^2/a_n$, trong đó $a_n$ là hình chiếu của tổng gia tốc $\\vec g$ lên pháp tuyến quỹ đạo.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t2-2",
      "lessonId": "phy1159-t2-2",
      "title": "Kiểm tra nhanh quan niệm — Gia tốc tiếp tuyến, gia tốc pháp tuyến và chuyển động cong",
      "prompt": "Vật chuyển động tròn với tốc độ không đổi. Gia tốc của nó thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Khác 0 và hướng vào tâm, vì phương của vận tốc liên tục đổi"
        },
        {
          "id": "option-2",
          "label": "Bằng 0, vì tốc độ không đổi"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Gia tốc đo sự đổi của véc-tơ vận tốc, gồm cả đổi phương.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t2-3",
      "lessonId": "phy1159-t2-3",
      "title": "Kiểm tra nhanh quan niệm — Phép cộng vận tốc và chuyển động tương đối",
      "prompt": "Hai viên đá cùng được ném trong không khí, bỏ qua sức cản. Người ngồi trên viên đá thứ nhất nhìn thấy viên thứ hai chuyển động thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Thẳng đều, vì hai vật cùng gia tốc g nên hiệu gia tốc bằng 0"
        },
        {
          "id": "option-2",
          "label": "Rơi nhanh dần xuống dưới như trong hệ mặt đất"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Trong hệ gắn với vật rơi tự do, vật rơi tự do khác chuyển động thẳng đều.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l3-1",
      "lessonId": "phy1159-t3-1",
      "title": "Phân biệt lực thật và ngộ nhận Định luật III",
      "prompt": "Khi một hòn đá được ném trượt lên mặt dốc có ma sát (sau khi đã rời tay), lập luận nào sau đây ĐÚNG theo Định luật Newton trong hệ quy chiếu mặt đất?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Chỉ còn trọng lực, phản lực của dốc và lực ma sát; không còn lực ném nào tác dụng lên hòn đá"
        },
        {
          "id": "option-2",
          "label": "Phải vẽ thêm lực ném hướng lên dốc vì vật vẫn đang đi lên"
        },
        {
          "id": "option-3",
          "label": "Trọng lực và phản lực của mặt dốc là cặp lực – phản lực của Định luật III nên luôn cân bằng nhau"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Sau khi rời tay, tay không còn tiếp xúc hòn đá nữa nên lực ném chấm dứt. Vật đi lên được nhờ vận tốc ban đầu (quán tính) và bị trọng lực + ma sát làm chậm dần.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t3-1",
      "lessonId": "phy1159-t3-1",
      "title": "Kiểm tra nhanh quan niệm — Ba định luật Newton và nguyên tắc chỉ vẽ lực thật",
      "prompt": "Một quả bóng vừa rời tay bay lên. Ngoài trọng lực (bỏ qua sức cản), còn lực nào tác dụng lên bóng?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không còn lực nào khác; bóng lên nhờ quán tính"
        },
        {
          "id": "option-2",
          "label": "Còn lực ném của tay theo chiều chuyển động"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Mỗi lực phải chỉ ra được vật gây lực. Sau khi rời tay không còn \"lực ném\".",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l3-2",
      "lessonId": "phy1159-t3-2",
      "title": "Bản chất lực hướng tâm trong hệ quy chiếu quán tính",
      "prompt": "Khi giải bài con lắc nón (Bài 3.3) trong hệ quy chiếu mặt đất, có nên vẽ thêm một mũi tên \"lực hướng tâm\" bên cạnh trọng lực và lực căng dây không?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không: lực hướng tâm chỉ là tên gọi của hợp lực theo phương hướng tâm do P và T tạo ra"
        },
        {
          "id": "option-2",
          "label": "Có: vì chuyển động tròn luôn phải có một lực hướng tâm riêng tác dụng lên vật"
        },
        {
          "id": "option-3",
          "label": "Không cần lực hướng tâm, chỉ cần thêm lực ly tâm kéo ra ngoài để vật cân bằng"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Nếu vẽ thêm $F_{ht}$ cùng $P$ và $T$ sẽ bị đếm trùng lực hai lần khi viết $\\sum\\vec F = m\\vec a$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t3-2",
      "lessonId": "phy1159-t3-2",
      "title": "Kiểm tra nhanh quan niệm — Động lực học chuyển động tròn đều",
      "prompt": "Con lắc nón quay đều trong mặt phẳng ngang. Lực nào là \"lực hướng tâm\"?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Hợp lực của các lực thật (trọng lực, lực căng) theo phương hướng vào tâm"
        },
        {
          "id": "option-2",
          "label": "Một lực riêng, cộng thêm vào trọng lực và lực căng"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Lực hướng tâm là tên gọi của hợp lực theo phương hướng tâm, không phải một lực thứ ba.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l3-3",
      "lessonId": "phy1159-t3-3",
      "title": "Chứng minh công thức tên lửa Tsiolkovsky",
      "kind": "short-answer",
      "prompt": "Sắp xếp trình tự suy luận công thức vận tốc tên lửa $\\upsilon = u\\ln(m_0/m)$ (Slide 3.3):\n\n**4** — Chiếu ngược chiều phụt khí và tích phân từ $(m_0, \\upsilon_0=0)$ đến $(m, \\upsilon)$ được $\\upsilon = u\\ln(m_0/m)$.\n\n**3** — Bỏ qua số hạng vô cùng nhỏ bậc hai $dm\\,d\\vec\\upsilon$ thu được $m\\,d\\vec\\upsilon + \\vec u\\,dm = 0$.\n\n**2** — Viết động lượng trước và sau khi phụt $dm$ với vận tốc khí là $\\vec\\upsilon + \\vec u$: $m\\vec\\upsilon = (m - dm)(\\vec\\upsilon + d\\vec\\upsilon) + dm(\\vec\\upsilon + \\vec u)$.\n\n**1** — Coi hệ tên lửa + khối khí phụt là cô lập nên tổng động lượng $\\vec P$ bảo toàn trong khoảng phụt $dm$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Khối lượng của tên lửa giảm dần ($dm < 0$ nếu xét tăng khối lượng khí, hoặc $m$ giảm từ $m_0$ về $m$) nên phải tích phân phương trình bảo toàn động lượng vi phân.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t3-3",
      "lessonId": "phy1159-t3-3",
      "title": "Kiểm tra nhanh quan niệm — Động lượng, xung lượng và chuyển động tên lửa",
      "prompt": "Hai xe trượt trên băng không ma sát, một xe đẩy xe kia rồi tách ra. Đại lượng nào của cả hệ giữ nguyên?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Tổng động lượng"
        },
        {
          "id": "option-2",
          "label": "Tổng động năng"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Hệ cô lập: ngoại lực theo phương ngang bằng 0 nên động lượng toàn phần bảo toàn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l3-5",
      "lessonId": "phy1159-t3-4",
      "title": "Điều kiện xuất hiện lực quán tính và lực Coriolis",
      "prompt": "Trong hệ quy chiếu gắn với Trái Đất đang quay với vận tốc góc $\\vec\\omega$, khi nào một vật chịu thêm lực Coriolis $\\vec F_C = -2m(\\vec\\omega \\times \\vec\\upsilon')$?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Chỉ khi vật có vận tốc $\\vec\\upsilon' \\ne 0$ đối với mặt đất (và không song song trục quay Trái Đất)"
        },
        {
          "id": "option-2",
          "label": "Mọi vật có khối lượng trên Trái Đất đều chịu lực Coriolis kể cả khi nằm yên trên bàn"
        },
        {
          "id": "option-3",
          "label": "Lực Coriolis là lực hút do Trái Đất tác dụng nên có phản lực đặt vào tâm Trái Đất"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Nếu vật đứng yên trên mặt đất ($\\vec\\upsilon' = 0$) thì lực Coriolis bằng 0, vật chỉ chịu lực quán tính ly tâm $-m\\omega^2\\vec r_\\perp$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t3-4",
      "lessonId": "phy1159-t3-4",
      "title": "Kiểm tra nhanh quan niệm — Hệ quy chiếu phi quán tính, lực quán tính và Coriolis",
      "prompt": "Bạn đứng trong thang máy đang đi lên và chậm dần. Số chỉ của cân dưới chân thay đổi thế nào so với khi thang máy đứng yên?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Nhỏ hơn, vì gia tốc hướng xuống"
        },
        {
          "id": "option-2",
          "label": "Lớn hơn, vì thang đang đi lên"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Chiều gia tốc quyết định số cân, không phải chiều chuyển động.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t4-1",
      "lessonId": "phy1159-t4-1",
      "title": "Kiểm tra nhanh quan niệm — Công, công suất và định lý động năng",
      "prompt": "Vật trượt lên dốc có ma sát rồi dừng lại. Muốn tìm quãng đường lên, cách nhanh nhất là gì?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Dùng định lý động năng: độ biến thiên động năng bằng tổng công của mọi lực"
        },
        {
          "id": "option-2",
          "label": "Dùng bảo toàn cơ năng như khi không có ma sát"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Không cần tính gia tốc và thời gian, chỉ cần công của trọng lực và ma sát.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l4-1",
      "lessonId": "phy1159-t4-2",
      "title": "Chứng minh Định lý biến thiên cơ năng",
      "kind": "short-answer",
      "prompt": "Sắp xếp chuỗi logic chứng minh định lý $W_2 - W_1 = A_{kt}$ (Slide 4.4.2):\n\n**4** — Chuyển vế gộp động năng và thế năng cùng thời điểm: $(W_{đ2}+W_{t2}) - (W_{đ1}+W_{t1}) = A_{kt}$.\n\n**3** — Thay công của lực thế theo Định lý Thế năng: $A_t = W_{t1} - W_{t2}$.\n\n**2** — Viết Định lý Động năng cho mọi lực: $W_{đ2} - W_{đ1} = A_t + A_{kt}$.\n\n**1** — Phân chia mọi lực tác dụng lên chất điểm thành hai nhóm: lực thế $\\vec F_t$ và lực không thế $\\vec F_{kt}$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Định lý biến thiên cơ năng thực chất là hệ quả trực tiếp khi ghép Định lý Động năng (đúng cho mọi lực) với định nghĩa Thế năng (chỉ tách riêng công của lực thế).",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t4-2",
      "lessonId": "phy1159-t4-2",
      "title": "Kiểm tra nhanh quan niệm — Lực thế, thế năng và định lý biến thiên – bảo toàn cơ năng",
      "prompt": "Một vật trượt không ma sát từ hai dốc có hình dạng khác nhau nhưng cùng độ cao. Tốc độ của vật ở chân hai dốc thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Bằng nhau, vì chỉ phụ thuộc độ giảm thế năng"
        },
        {
          "id": "option-2",
          "label": "Dốc thoải hơn cho tốc độ lớn hơn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Phản lực không sinh công nên cơ năng bảo toàn, tốc độ chỉ phụ thuộc độ cao.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l4-2",
      "lessonId": "phy1159-t4-3",
      "title": "Chọn đúng định luật bảo toàn cho hai giai đoạn con lắc thử đạn",
      "prompt": "Trong bài con lắc thử đạn (Bài 4.8: đạn bay ngang cắm vào bao cát treo dây rồi cùng lên tới góc lệch $\\alpha$), vì sao KHÔNG viết ngay $\\tfrac12 m\\upsilon^2 = (M+m)gl(1-\\cos\\alpha)$?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Vì quá trình đạn găm vào vật là va chạm mềm, phần lớn động năng biến thành nội năng nên cơ năng KHÔNG bảo toàn lúc va chạm"
        },
        {
          "id": "option-2",
          "label": "Vì lực căng dây làm tổng động lượng không bảo toàn theo phương ngang"
        },
        {
          "id": "option-3",
          "label": "Vì sau khi găm vào vật, lực ma sát của không khí làm cơ năng không bảo toàn khi con lắc đi lên"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Phải tách 2 giai đoạn: (1) trong va chạm ngắn bảo toàn động lượng ngang để tìm vận tốc ngay sau va chạm $V$; (2) từ sau va chạm trở đi mới dùng bảo toàn cơ năng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t4-3",
      "lessonId": "phy1159-t4-3",
      "title": "Kiểm tra nhanh quan niệm — Phân biệt va chạm đàn hồi và va chạm mềm theo giai đoạn",
      "prompt": "Đạn găm vào bao cát treo. Ngay sau va chạm, đại lượng nào bảo toàn?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Động lượng; cơ năng thì không vì một phần thành nhiệt và biến dạng"
        },
        {
          "id": "option-2",
          "label": "Cơ năng, vì không có ma sát"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Va chạm mềm bảo toàn động lượng, còn bảo toàn cơ năng chỉ dùng sau va chạm.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t5-1",
      "lessonId": "phy1159-t5-1",
      "title": "Kiểm tra nhanh quan niệm — Khối tâm hệ chất điểm và chuyển động tịnh tiến",
      "prompt": "Một người đi từ đầu này sang đầu kia của chiếc thuyền trên mặt nước lặng. Khối tâm của hệ người và thuyền sẽ thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Đứng yên, vì nội lực không làm đổi chuyển động khối tâm"
        },
        {
          "id": "option-2",
          "label": "Dịch về phía người đi"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Chỉ ngoại lực mới làm khối tâm có gia tốc, thuyền sẽ trôi ngược lại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l5-2",
      "lessonId": "phy1159-t5-2",
      "title": "Bảo toàn mômen động lượng khi có ma sát nội bộ",
      "prompt": "Hai đĩa đồng trục quay tự do với tốc độ góc khác nhau $\\omega_1, \\omega_2$. Khi thả đĩa trên rơi xuống đĩa dưới, ma sát giữa hai mặt đĩa làm chúng quay chung tốc độ góc $\\omega$. Đại lượng nào bảo toàn?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Tổng mômen động lượng bảo toàn vì ma sát giữa hai đĩa là nội lực; động năng quay giảm do ma sát sinh nhiệt"
        },
        {
          "id": "option-2",
          "label": "Cả mômen động lượng lẫn động năng quay đều bảo toàn vì trục quay không có ma sát"
        },
        {
          "id": "option-3",
          "label": "Cả mômen động lượng lẫn động năng đều giảm vì lực ma sát sinh mômen cản"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng (Bài 5.7 PDF). Cặp lực ma sát giữa hai đĩa có mômen trực đối triệt tiêu nhau nên $\\sum M_{ng} = 0 \\Rightarrow L = \\text{const}$, còn công ma sát trượt làm giảm động năng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t5-2",
      "lessonId": "phy1159-t5-2",
      "title": "Kiểm tra nhanh quan niệm — Phương trình quay quanh trục cố định và định lý Steiner–Huygens",
      "prompt": "Ròng rọc có khối lượng quay khi kéo vật. Lực căng dây ở hai nhánh bên ròng rọc thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Khác nhau, vì hiệu hai lực tạo mômen làm ròng rọc quay nhanh dần"
        },
        {
          "id": "option-2",
          "label": "Luôn bằng nhau"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Với ròng rọc có mômen quán tính, hiệu hai lực căng nhân bán kính bằng Iβ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l5-1",
      "lessonId": "phy1159-t5-3",
      "title": "Chứng minh Định lý biến thiên mômen động lượng",
      "kind": "short-answer",
      "prompt": "Sắp xếp chuỗi logic chứng minh $\\frac{d\\vec L}{dt} = \\vec M_{ng}$ cho hệ chất điểm (Slide 5.5.2):\n\n**4** — Triệt tiêu tổng mômen nội lực $\\sum \\vec r_i \\times \\vec f_i = 0$ theo Định luật III Newton để còn $\\sum \\vec r_i \\times \\vec F_i = \\vec M_{ng}$.\n\n**3** — Nhận xét $\\vec\\upsilon_i \\times m_i\\vec\\upsilon_i = 0$ (cùng phương) và thay $m_i\\vec a_i = \\vec f_i + \\vec F_i$.\n\n**2** — Lấy đạo hàm theo thời gian bằng quy tắc tích: $\\frac{d\\vec L}{dt} = \\sum \\left(\\vec\\upsilon_i \\times m_i\\vec\\upsilon_i + \\vec r_i \\times m_i\\vec a_i\\right)$.\n\n**1** — Xuất phát từ định nghĩa mômen động lượng toàn hệ $\\vec L = \\sum \\vec r_i \\times m_i\\vec\\upsilon_i$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Tương tự phương trình khối tâm, chính Định luật III Newton (cặp nội lực trực đối cùng giá) làm tổng mômen nội lực triệt tiêu sạch.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t5-3",
      "lessonId": "phy1159-t5-3",
      "title": "Kiểm tra nhanh quan niệm — Mômen động lượng và động năng lăn không trượt",
      "prompt": "Hai đĩa quay cùng trục, đĩa nhanh rơi lên đĩa chậm và cuối cùng quay chung. Đại lượng nào bảo toàn?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Mômen động lượng; động năng giảm vì ma sát toả nhiệt"
        },
        {
          "id": "option-2",
          "label": "Động năng quay"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Ma sát là nội lực nên không đổi mômen động lượng nhưng vẫn tiêu hao động năng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t6-1",
      "lessonId": "phy1159-t6-1",
      "title": "Kiểm tra nhanh quan niệm — Định luật hấp dẫn vũ trụ và nguyên lý chồng chất",
      "prompt": "Lực hấp dẫn của một quả cầu đồng chất lên chất điểm bên ngoài tính thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Như thể toàn bộ khối lượng tập trung ở tâm cầu"
        },
        {
          "id": "option-2",
          "label": "Không tính được nếu không biết cấu trúc bên trong"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Đó là hệ quả của nguyên lý chồng chất cho vật đối xứng cầu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l6-1",
      "lessonId": "phy1159-t6-2",
      "title": "Định luật Kepler II từ bản chất trường xuyên tâm",
      "prompt": "Vì sao hành tinh chuyển động quanh Mặt Trời luôn đi nhanh hơn khi ở cận điểm (gần Mặt Trời) và chậm hơn khi ở viễn điểm?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Lực hấp dẫn là lực xuyên tâm nên mômen lực đối với Mặt Trời bằng 0; mômen động lượng $\\vec L = \\vec r \\times m\\vec\\upsilon$ bảo toàn, nên $r$ giảm thì $\\upsilon$ tăng"
        },
        {
          "id": "option-2",
          "label": "Vì cơ năng ở cận điểm lớn hơn ở viễn điểm"
        },
        {
          "id": "option-3",
          "label": "Vì ở gần Mặt Trời, lực hấp dẫn có thêm thành phần tiếp tuyến đẩy hành tinh tăng tốc"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Khi $r$ nhỏ nhất (cận điểm), $\\vec r \\perp \\vec\\upsilon$ nên $L = m r \\upsilon$; $L$ không đổi buộc $\\upsilon$ cực đại tại cận điểm. Điều này tương đương định luật diện tích Kepler II.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t6-2",
      "lessonId": "phy1159-t6-2",
      "title": "Kiểm tra nhanh quan niệm — Trường xuyên tâm và ba định luật Kepler",
      "prompt": "Hành tinh quay quanh Mặt Trời trên quỹ đạo ellipse. Hành tinh chuyển động nhanh nhất ở đâu?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Gần Mặt Trời nhất, vì mômen động lượng bảo toàn"
        },
        {
          "id": "option-2",
          "label": "Xa Mặt Trời nhất, vì lực hút yếu nhất"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Lực hấp dẫn xuyên tâm nên L = m r v sinθ không đổi, r nhỏ thì v lớn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l6-2",
      "lessonId": "phy1159-t6-3",
      "title": "Tìm vận tốc vũ trụ cấp II bằng bảo toàn cơ năng",
      "kind": "short-answer",
      "prompt": "Sắp xếp chuỗi logic xác định vận tốc thoát $\\upsilon_2$ từ bề mặt hành tinh bán kính $R$, khối lượng $M$:\n\n**4** — Giải $\\frac12 m\\upsilon_2^2 - G\\frac{Mm}{R} = 0$ để thu được $\\upsilon_2 = \\sqrt{2GM/R} = \\sqrt{2}\\upsilon_1$.\n\n**3** — Đặt điều kiện thoát tối thiểu khi vật ra tới $r \\to \\infty$ vừa dừng ($\\upsilon_\\infty = 0$), tức tổng cơ năng $E = 0$.\n\n**2** — Áp dụng bảo toàn cơ năng vì chỉ có trọng trường hấp dẫn là lực thế tác dụng sau khi phóng.\n\n**1** — Chọn mốc thế năng hấp dẫn ở vô cực $U(\\infty) = 0$ nên tại mặt hành tinh $U(R) = -G\\frac{Mm}{R}$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Vì thế năng hấp dẫn mang dấu âm, cần động năng ban đầu đúng bằng $|U(R)|$ để tổng cơ năng không âm và tàu không bị kéo quay lại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t6-3",
      "lessonId": "phy1159-t6-3",
      "title": "Kiểm tra nhanh quan niệm — Thế năng hấp dẫn và vận tốc vũ trụ cấp I, cấp II",
      "prompt": "So với tàu 1 tấn, tàu 10 tấn cần vận tốc thoát khỏi Trái Đất thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Như nhau, vì khối lượng m triệt tiêu trong phương trình cơ năng"
        },
        {
          "id": "option-2",
          "label": "Tàu nặng cần vận tốc lớn hơn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Động năng và thế năng đều tỉ lệ m nên vận tốc thoát không phụ thuộc m.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l7-2",
      "lessonId": "phy1159-t7-1",
      "title": "Mạch logic hình thành thuyết tương đối hẹp",
      "kind": "short-answer",
      "prompt": "Sắp xếp 4 mắt xích dẫn từ cơ học cổ điển sang biến đổi Lorentz:\n\n**4** — Suy ra dãn thời gian, co chiều dài và khôi phục lại phép biến đổi Galileo khi $\\upsilon \\ll c$.\n\n**3** — Từ yêu cầu $x^2 - c^2 t^2 = x'^2 - c^2 t'^2$ rút ra phép biến đổi Lorentz và nhân tử $\\gamma = (1 - \\upsilon^2/c^2)^{-1/2}$.\n\n**2** — Đặt hai tiên đề Einstein: đồng nhất các định luật trong mọi hệ quán tính và c bất biến trong chân không.\n\n**1** — Phát hiện phép cộng vận tốc Galileo mâu thuẫn với tính bất biến của tốc độ ánh sáng c trong điện từ học.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Thuyết tương đối hẹp không bác bỏ cơ học Newton ở tốc độ thường mà mở rộng nó để tương thích với $c$ bất biến.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t7-1",
      "lessonId": "phy1159-t7-1",
      "title": "Kiểm tra nhanh quan niệm — Từ biến đổi Galileo đến hai tiên đề Einstein",
      "prompt": "Một phi công bật đèn pha khi tàu chạy với tốc độ 0,5c. Người đứng yên trên mặt đất đo được tốc độ ánh sáng từ đèn là bao nhiêu?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "c, không phải 1,5c"
        },
        {
          "id": "option-2",
          "label": "1,5c theo quy tắc cộng vận tốc"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Tiên đề Einstein: tốc độ ánh sáng trong chân không như nhau trong mọi hệ quán tính.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l7-1",
      "lessonId": "phy1159-t7-2",
      "title": "Nhận diện thời gian riêng và chiều dài riêng",
      "prompt": "Một hạt không bền sống được thời gian riêng $\\tau_0$ khi đứng yên trong phòng thí nghiệm. Khi nó bay qua phòng thí nghiệm với tốc độ $\\upsilon = 0{,}8c$, quan sát viên trong phòng thí nghiệm đo được thời gian sống của hạt là bao nhiêu?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "$\\tau = \\gamma\\tau_0 > \\tau_0$, vì thời gian sống ngắn nhất $\\tau_0$ chỉ đo được trong hệ quy chiếu gắn với hạt"
        },
        {
          "id": "option-2",
          "label": "$\\tau = \\tau_0/\\gamma < \\tau_0$, vì thời gian bị co ngắn khi chuyển động nhanh"
        },
        {
          "id": "option-3",
          "label": "Bằng đúng $\\tau_0$ vì đồng hồ phòng thí nghiệm luôn chạy chuẩn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Hai sự kiện (hạt sinh ra và phân rã) xảy ra tại cùng một điểm trong hệ gắn với hạt nên $\\tau_0$ là thời gian riêng; người đứng ở phòng thí nghiệm thấy hạt bay lâu hơn ($\\gamma = 5/3$).",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t7-2",
      "lessonId": "phy1159-t7-2",
      "title": "Kiểm tra nhanh quan niệm — Biến đổi Lorentz, dãn thời gian và co độ dài",
      "prompt": "Phi hành gia trên tàu đo một khoảng thời gian bằng đồng hồ của mình. Người trên mặt đất đo khoảng này thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Dài hơn; đồng hồ gắn với vật đo được thời gian riêng, ngắn nhất"
        },
        {
          "id": "option-2",
          "label": "Ngắn hơn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Hai biến cố xảy ra cùng một chỗ trên tàu nên đồng hồ tàu đo thời gian riêng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t7-3",
      "lessonId": "phy1159-t7-3",
      "title": "Kiểm tra nhanh quan niệm — Động lực học tương đối tính và hệ thức E = mc²",
      "prompt": "Một hạt chuyển động với tốc độ 0,9c. Động năng của nó có tính được bằng ½ m₀v² không?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không; phải dùng K = (γ − 1)m₀c²"
        },
        {
          "id": "option-2",
          "label": "Có, công thức đó luôn đúng"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Công thức Newton chỉ là giới hạn khi v rất nhỏ so với c.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l8-1",
      "lessonId": "phy1159-t8-1",
      "title": "Thang nhiệt độ, độ biến thiên và lỗ khoét dãn nở nhiệt",
      "prompt": "Phát biểu nào sau đây ĐÚNG về nhiệt độ và sự nở vì nhiệt?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Độ tăng nhiệt độ $\\Delta T = 25^\\circ\\text{C}$ đúng bằng $\\Delta T = 25\\text{ K}$, và khi nung nóng một vòng kim loại, đường kính lỗ rỗng bên trong nở to ra"
        },
        {
          "id": "option-2",
          "label": "Độ tăng nhiệt độ $25^\\circ\\text{C}$ ứng với độ tăng $298\\text{ K}$"
        },
        {
          "id": "option-3",
          "label": "Khi nung nóng tấm kim loại có lỗ tròn, phần kim loại nở vào trong làm lỗ nhỏ lại"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Độ lớn 1 K bằng 1 °C nên hiệu nhiệt độ như nhau; và mọi kích thước hình học của vật đẳng hướng (kể cả lỗ rỗng) đều tăng theo hệ số $1+\\alpha\\Delta T$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t8-1",
      "lessonId": "phy1159-t8-1",
      "title": "Kiểm tra nhanh quan niệm — Nguyên lý số 0 và ý nghĩa nhiệt độ",
      "prompt": "Hai vật A và B cùng nhiệt độ. Khi cho tiếp xúc nhau chúng có trao đổi nhiệt ròng không?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không, vì đã ở cân bằng nhiệt"
        },
        {
          "id": "option-2",
          "label": "Có, vật nào có nhiệt năng lớn hơn sẽ truyền cho vật kia"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Nhiệt độ là đại lượng quyết định chiều truyền nhiệt, không phải nhiệt dung hay nhiệt năng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t8-2",
      "lessonId": "phy1159-t8-2",
      "title": "Kiểm tra nhanh quan niệm — Các thang nhiệt giai và quy tắc nội suy tuyến tính",
      "prompt": "Khi nhiệt độ tăng thêm 20 °C thì trên thang Kelvin tăng thêm bao nhiêu?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "20 K"
        },
        {
          "id": "option-2",
          "label": "293 K"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Một độ chia của hai thang bằng nhau nên độ biến thiên giống nhau.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l8-2",
      "lessonId": "phy1159-t8-3",
      "title": "Suy ra hệ số nở khối bằng ba lần hệ số nở dài",
      "kind": "short-answer",
      "prompt": "Sắp xếp trình tự chứng minh $\\beta \\approx 3\\alpha$ cho vật rắn đẳng hướng:\n\n**4** — Vì $\\alpha\\Delta T \\ll 1$, bỏ qua bậc hai và bậc ba để có $\\Delta V/V_0 \\approx 3\\alpha\\Delta T$, tức $\\beta \\approx 3\\alpha$.\n\n**3** — Tính thể tích mới $V = V_0(1 + \\alpha\\Delta T)^3 = V_0\\left[1 + 3\\alpha\\Delta T + 3(\\alpha\\Delta T)^2 + (\\alpha\\Delta T)^3\\right]$.\n\n**2** — Khi tăng nhiệt độ thêm $\\Delta T$, mỗi cạnh tăng theo công thức nở dài: $L_i' = L_i(1 + \\alpha\\Delta T)$.\n\n**1** — Xét khối hộp chữ nhật đồng chất đẳng hướng có kích thước ban đầu $L_1, L_2, L_3$ và thể tích $V_0 = L_1 L_2 L_3$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Liên hệ $\\beta = 3\\alpha$ chỉ là xấp xỉ bậc nhất đúng cho chất rắn đẳng hướng khi $\\alpha\\Delta T$ rất nhỏ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t8-3",
      "lessonId": "phy1159-t8-3",
      "title": "Kiểm tra nhanh quan niệm — Sự nở vì nhiệt của chất rắn và chất lỏng",
      "prompt": "Khi nung nóng một tấm kim loại có khoét lỗ tròn ở giữa, lỗ tròn sẽ thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Nở to ra, như thể lỗ cũng là kim loại"
        },
        {
          "id": "option-2",
          "label": "Co nhỏ lại vì kim loại nở vào trong"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Mọi khoảng cách giữa hai điểm trên vật đều tăng cùng hệ số.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l9-1",
      "lessonId": "phy1159-t9-1",
      "title": "Hàm trạng thái ΔU vs Hàm quá trình Q, A",
      "prompt": "Khí biến đổi từ trạng thái đầu A sang trạng thái cuối B theo ba đường khác nhau 1, 2, 3 trên giản đồ $pV$ (Bài 9.5 PDF). Kết luận nào đúng?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Cả ba đường có $\\Delta U$ bằng nhau, nhưng công $A$ (diện tích dưới mỗi đường) và nhiệt $Q = \\Delta U + A$ khác nhau"
        },
        {
          "id": "option-2",
          "label": "Vì điểm đầu và điểm cuối giống nhau nên nhiệt lượng $Q$ nhận được trên cả ba đường bằng nhau"
        },
        {
          "id": "option-3",
          "label": "Nếu quá trình là dãn nở tự do vào chân không từ A đến B thì $\\Delta U$ khác 0 vì không sinh công"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Nội năng $U$ là hàm trạng thái chỉ phụ thuộc hai điểm đầu–cuối A và B; còn $A$ và $Q$ phụ thuộc đường đi giữa A và B.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t9-1",
      "lessonId": "phy1159-t9-1",
      "title": "Kiểm tra nhanh quan niệm — Nội năng (hàm trạng thái) và Nhiệt, Công (hàm quá trình)",
      "prompt": "Khí đi từ trạng thái 1 sang 2 theo hai đường khác nhau trên giản đồ pV. Đại lượng nào giống nhau ở hai đường?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Độ biến thiên nội năng"
        },
        {
          "id": "option-2",
          "label": "Công do khí sinh ra"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Nội năng là hàm trạng thái; công và nhiệt phụ thuộc đường đi.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l9-2",
      "lessonId": "phy1159-t9-2",
      "title": "Suy luận dấu nhiệt và công cho một chu trình kín trên giản đồ pV",
      "kind": "short-answer",
      "prompt": "Sắp xếp các bước logic phân tích một chu trình thuận chiều kim đồng hồ trên giản đồ $pV$ (theo quy ước $\\Delta U = Q - A$):\n\n**4** — Từ Nguyên lý I $\\Delta U = Q - A$ suy ra $Q = A > 0$: máy đã nhận nhiệt ròng để sinh công có ích.\n\n**3** — Sau một chu trình kín hệ trở về đúng trạng thái ban đầu nên biến thiên nội năng $\\Delta U = 0$.\n\n**2** — Tổng công cả chu trình $A = \\oint p\\,dV$ bằng diện tích hình kín và mang dấu dương ($A > 0$).\n\n**1** — Trên đường dãn nở phía trên (áp suất lớn), khí sinh công dương lớn hơn độ lớn công nhận vào ở đường nén phía dưới.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Diện tích khép kín trên giản đồ $pV$ cho công chu trình; $\\Delta U = 0$ nối thẳng công đó với nhiệt ròng trao đổi $Q$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t9-2",
      "lessonId": "phy1159-t9-2",
      "title": "Kiểm tra nhanh quan niệm — Nguyên lý I Nhiệt động lực học và các quá trình đặc biệt",
      "prompt": "Khí dãn nở đoạn nhiệt (không trao đổi nhiệt) và sinh công. Nhiệt độ của khí thay đổi thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Giảm, vì khí dùng chính nội năng để sinh công"
        },
        {
          "id": "option-2",
          "label": "Không đổi"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Q = 0 nên ΔU = −A, A > 0 thì nội năng và nhiệt độ giảm.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t9-3",
      "lessonId": "phy1159-t9-3",
      "title": "Kiểm tra nhanh quan niệm — Nhiệt dung, nhiệt chuyển pha và dẫn nhiệt trạng thái dừng",
      "prompt": "Cấp nhiệt cho cục đá ở −10 °C. Khi nhiệt độ đạt 0 °C đá bắt đầu nóng chảy. Trong suốt quá trình nóng chảy, nhiệt độ của khối đá thay đổi thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Giữ 0 °C đến khi đá tan hết"
        },
        {
          "id": "option-2",
          "label": "Tiếp tục tăng đều"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Nhiệt cấp vào dùng cho chuyển pha (Q = mλ), không làm tăng nhiệt độ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l10-2",
      "lessonId": "phy1159-t10-1",
      "title": "So sánh động năng vi mô, vận tốc căn quân phương và dãn nở đoạn nhiệt",
      "prompt": "Hai bình riêng chứa khí $H_2$ ($\\mu=2$) và $O_2$ ($\\mu=32$) ở CÙNG nhiệt độ $T$. Nhận xét nào sau đây ĐÚNG?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Động năng tịnh tiến trung bình của mỗi phân tử hai khí bằng nhau ($= \\tfrac32 kT$), nhưng $\\upsilon_{rms}$ của $H_2$ gấp $4$ lần $O_2$"
        },
        {
          "id": "option-2",
          "label": "Phân tử $O_2$ nặng hơn nên có động năng trung bình lớn hơn ở cùng nhiệt độ"
        },
        {
          "id": "option-3",
          "label": "Hai khí cùng nhiệt độ nên có tốc độ căn quân phương bằng nhau"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. $\\overline{E_đ} = \\tfrac32 kT$ chỉ phụ thuộc $T$; còn $\\upsilon_{rms} = \\sqrt{3RT/\\mu}$ tỉ lệ nghịch $\\sqrt{\\mu}$, nên $\\sqrt{32/2} = 4$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t10-1",
      "lessonId": "phy1159-t10-1",
      "title": "Kiểm tra nhanh quan niệm — Phương trình cơ bản thuyết động học và quãng đường tự do trung bình",
      "prompt": "Cùng nhiệt độ, khí hiđrô và khí ôxi có động năng tịnh tiến trung bình của một phân tử thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Bằng nhau, nhưng phân tử hiđrô chuyển động nhanh hơn"
        },
        {
          "id": "option-2",
          "label": "Hiđrô có động năng lớn hơn vì nhanh hơn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Động năng trung bình là 3kT/2, nên khí nhẹ có vận tốc lớn hơn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t10-2",
      "lessonId": "phy1159-t10-2",
      "title": "Kiểm tra nhanh quan niệm — Phân bố đều theo bậc tự do và nội năng khí lý tưởng",
      "prompt": "Nội năng của khí lý tưởng thay đổi thế nào trong quá trình đẳng nhiệt?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không đổi, vì nội năng chỉ phụ thuộc nhiệt độ"
        },
        {
          "id": "option-2",
          "label": "Tăng khi thể tích tăng"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Khi T không đổi thì ΔU = 0 và nhiệt nhận vào đúng bằng công sinh ra.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l10-1",
      "lessonId": "phy1159-t10-3",
      "title": "Chứng minh Hệ thức Mayer Cp − Cv = R",
      "kind": "short-answer",
      "prompt": "Sắp xếp trình tự logic chứng minh $C_P - C_V = R$ cho $n$ mol khí lý tưởng (Slide 10.6):\n\n**4** — Thay $\\Delta U$, $Q$ và $A$ vào Nguyên lý I $\\Delta U = Q - A$ rồi chia cho $n\\Delta T$ được $C_P - C_V = R$.\n\n**3** — Từ phương trình trạng thái $pV = nRT$ với $p = \\text{const}$ suy ra công dãn nở $A = n R \\Delta T$.\n\n**2** — Nếu quá trình là đẳng áp ($p = \\text{const}$), khí nhận nhiệt $Q = n C_P \\Delta T$ và dãn nở sinh công $A = p\\Delta V$.\n\n**1** — Xét $n$ mol khí lý tưởng nhận nhiệt tăng thêm $\\Delta T$: độ biến thiên nội năng luôn là $\\Delta U = n C_V \\Delta T$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Sở dĩ $C_P > C_V$ đúng bằng $R$ vì khi đun đẳng áp, ngoài phần tăng nội năng như đẳng tích, hệ phải tốn thêm nhiệt để sinh công dãn nở $nR\\Delta T$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t10-3",
      "lessonId": "phy1159-t10-3",
      "title": "Kiểm tra nhanh quan niệm — Nhiệt dung mol, hệ thức Mayer và đẳng nhiệt – đoạn nhiệt",
      "prompt": "Từ cùng trạng thái, khí dãn đến cùng thể tích theo đường đẳng nhiệt và đoạn nhiệt. Đường nào sinh nhiều công hơn?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Đẳng nhiệt, vì khí được nhận nhiệt bù vào nên áp suất giảm chậm hơn"
        },
        {
          "id": "option-2",
          "label": "Đoạn nhiệt"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Ở quá trình đoạn nhiệt khí tự mất nội năng nên áp suất giảm nhanh hơn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t11-1",
      "lessonId": "phy1159-t11-1",
      "title": "Kiểm tra nhanh quan niệm — Quá trình thuận nghịch và Nguyên lý II (Thomson – Clausius)",
      "prompt": "Nguyên lý I cho phép nhiệt tự truyền từ vật lạnh sang vật nóng nếu năng lượng vẫn bảo toàn. Điều đó có xảy ra không?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không tự xảy ra; Nguyên lý II quy định chiều của quá trình"
        },
        {
          "id": "option-2",
          "label": "Có, vì năng lượng vẫn bảo toàn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Bảo toàn năng lượng chưa đủ để xác định quá trình nào có thể tự diễn ra.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t11-2",
      "lessonId": "phy1159-t11-2",
      "title": "Kiểm tra nhanh quan niệm — Chu trình Carnot và Định lý Carnot",
      "prompt": "Có thể chế tạo động cơ nhiệt hiệu suất 100% nếu loại hết ma sát không?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không; hiệu suất tối đa bị giới hạn bởi hai nguồn nhiệt (1 − T₂/T₁)"
        },
        {
          "id": "option-2",
          "label": "Có, nếu không còn ma sát"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Giới hạn này là của Nguyên lý II, không phụ thuộc vật liệu hay ma sát.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l11-1",
      "lessonId": "phy1159-t11-3",
      "title": "Cách tính biến thiên Entropi cho quá trình bất thuận nghịch",
      "prompt": "Khí lý tưởng dãn nở tự do (cách nhiệt, $Q=0$) từ thể tích $V_1$ sang $V_2 > V_1$ vào chân không. Vì sao biến thiên Entropi $\\Delta S$ của khí lại LỚN HƠN 0 dù không trao đổi nhiệt ($Q=0$)?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Vì $S$ là hàm trạng thái nên phải tính $\\Delta S = \\int (\\delta Q/T)_{tn}$ dọc theo một quá trình thuận nghịch (như dãn đẳng nhiệt) nối cùng hai trạng thái đầu–cuối"
        },
        {
          "id": "option-2",
          "label": "Thực ra $\\Delta S = 0$ vì $Q = 0$ nên $\\int \\delta Q/T = 0$"
        },
        {
          "id": "option-3",
          "label": "Vì trong dãn nở tự do, nhiệt độ khí tăng vọt nên entropi tăng"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Bất đẳng thức $\\Delta S > \\int \\delta Q/T$ luôn xảy ra ở quá trình bất thuận nghịch; thay bằng dãn đẳng nhiệt thuận nghịch cho $\\Delta S = nR\\ln(V_2/V_1) > 0$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-l11-2",
      "lessonId": "phy1159-t11-3",
      "title": "Mạch suy luận từ Định lý Carnot tới Nguyên lý tăng Entropi",
      "kind": "short-answer",
      "prompt": "Sắp xếp 4 bước nối tiếp xây dựng khái niệm Entropi từ Định lý Carnot (Slide 11.5):\n\n**4** — Kết hợp $\\Delta S \\ge \\int \\frac{\\delta Q}{T}$ với hệ cô lập ($\\delta Q = 0$) để rút ra Nguyên lý tăng Entropi $\\Delta S \\ge 0$.\n\n**3** — Từ trường hợp thuận nghịch ($\\oint (\\delta Q/T)_{tn} = 0$) suy ra $\\Delta S = \\int_1^2 (\\delta Q/T)_{tn}$ không phụ thuộc đường đi: $S$ là hàm trạng thái.\n\n**2** — Chia nhỏ chu trình bất kỳ thành vô số chu trình Carnot sơ cấp để thu được bất đẳng thức Clausius $\\oint \\frac{\\delta Q}{T} \\le 0$.\n\n**1** — Từ Định lý Carnot viết bất đẳng thức cho chu trình hai nguồn: $\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} \\le 0$.\n\nNhập các số theo thứ tự, cách nhau bằng dấu cách (ví dụ: 4 3 2 1).",
      "answers": [
        "1 2 3 4"
      ],
      "explanation": "Entropi không xuất hiện ngẫu nhiên mà được chứng minh chặt chẽ là hàm trạng thái nhờ dấu \"=\" trong bất đẳng thức Clausius cho chu trình thuận nghịch.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/exercises.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    },
    {
      "id": "phy1159-probe-t11-3",
      "lessonId": "phy1159-t11-3",
      "title": "Kiểm tra nhanh quan niệm — Bất đẳng thức Clausius, Entropi và nguyên lý tăng Entropi",
      "prompt": "Một hệ cô lập thực hiện quá trình tự phát. Entropi của hệ thay đổi thế nào?",
      "kind": "multiple-choice",
      "choices": [
        {
          "id": "option-1",
          "label": "Không giảm; quá trình thuận nghịch giữ nguyên, bất thuận nghịch làm tăng"
        },
        {
          "id": "option-2",
          "label": "Có thể giảm nếu hệ tự sắp xếp trật tự hơn"
        }
      ],
      "answers": [
        "option-1"
      ],
      "explanation": "Đúng. Entropi hệ cô lập luôn không giảm.",
      "provenance": {
        "repository": "https://github.com/HanitaV/VLDC-HUS",
        "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
        "path": "js/data/theory/probes.js",
        "rights": "approved",
        "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
      }
    }
  ],
  "resources": []
} as const satisfies LearningContent, phy1159SemiEssays), writtenPractice);
