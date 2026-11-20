import type { ExerciseDefinition } from '../../../domain/workspace';
import { gcSemiEssays } from './semi-essays';
import writtenPractice from './written-practice';

export default [...[
  {
    "id": "gc-c1-atom-001",
    "lessonId": "gc-atomic-structure",
    "title": "Đồng vị uranium-235 và uranium-238",
    "prompt": "Bài giảng (trang 13) minh họa hai nguyên tử $^{235}_{92}\\mathrm{U}$ và $^{238}_{92}\\mathrm{U}$.\n\na) Xác định số proton, số neutron và số electron của mỗi nguyên tử.\n\nb) Hai nguyên tử này có quan hệ gì với nhau?\n\n**Câu hỏi:** Trong kí hiệu $^{A}_{Z}\\mathrm{X}$, số ở dưới (Z) cho biết điều gì?",
    "explanation": "Z là số hiệu nguyên tử = số proton trong hạt nhân. Với nguyên tử trung hòa, số electron cũng bằng Z.\n\n**Lời giải đầy đủ:**\n\nVới kí hiệu $^{A}_{Z}\\mathrm{X}$: số proton $= Z$, số neutron $N = A - Z$; nguyên tử trung hòa có số electron $= Z$.\n\n| Nguyên tử | Proton | Neutron | Electron |\n|---|---|---|---|\n| $^{235}_{92}\\mathrm{U}$ | 92 | $235 - 92 = 143$ | 92 |\n| $^{238}_{92}\\mathrm{U}$ | 92 | $238 - 92 = 146$ | 92 |\n\nHai nguyên tử có cùng số proton nhưng khác số neutron nên là **hai đồng vị** của uranium.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/atomic-structure.json",
      "rights": "approved",
      "attribution": "Biên soạn lại từ hình minh họa nguyên tử uranium trong bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Số proton (số hiệu nguyên tử)"
      },
      {
        "id": "option-2",
        "label": "Số neutron"
      },
      {
        "id": "option-3",
        "label": "Số khối"
      },
      {
        "id": "option-4",
        "label": "Số electron hóa trị"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-atom-002",
    "lessonId": "gc-atomic-structure",
    "title": "Số hạt trong ion Fe³⁺",
    "prompt": "Xác định số proton, neutron và electron trong ion $^{56}_{26}\\mathrm{Fe}^{3+}$.\n\n**Câu hỏi:** Số proton?",
    "explanation": "Số proton = Z = 26; không thay đổi khi tạo ion.\n\n**Lời giải đầy đủ:**\n\n- Proton: $Z = 26$.\n- Neutron: $N = 56 - 26 = 30$.\n- Electron: ion $3+$ thiếu 3 electron so với nguyên tử trung hòa: $26 - 3 = 23$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/atomic-structure.json",
      "rights": "approved",
      "attribution": "Bài bổ sung luyện kỹ năng."
    },
    "kind": "short-answer",
    "answers": [
      "26"
    ]
  },
  {
    "id": "gc-c1-qn-001",
    "lessonId": "gc-quantum-numbers",
    "title": "Lớp electron n = 3",
    "prompt": "Xét lớp electron có $n = 3$.\n\na) Các giá trị có thể có của số lượng tử phụ $l$ và tên phân lớp tương ứng.\n\nb) Tổng số orbital và số electron tối đa của lớp này.\n\n**Câu hỏi:** Chọn TẤT CẢ các giá trị $l$ có thể có khi $n = 3$.",
    "explanation": "$l$ nhận các giá trị nguyên từ 0 đến $n - 1 = 2$: ứng với các phân lớp 3s, 3p, 3d.\n\n**Lời giải đầy đủ:**\n\na) $l = 0, 1, 2$ → các phân lớp **3s, 3p, 3d**.\n\nb) Số orbital: 3s có 1, 3p có 3, 3d có 5 → tổng $9 = n^2$ orbital. Theo nguyên lý Pauli, mỗi orbital chứa tối đa 2 electron → tối đa $2n^2 = 18$ electron.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/quantum-numbers.json",
      "rights": "approved",
      "attribution": "Bổ sung; bài giảng trình bày hình dạng orbital s, p, d ở trang 16–17."
    },
    "kind": "multiple-answer",
    "choices": [
      {
        "id": "option-1",
        "label": "$l = 0$"
      },
      {
        "id": "option-2",
        "label": "$l = 1$"
      },
      {
        "id": "option-3",
        "label": "$l = 2$"
      },
      {
        "id": "option-4",
        "label": "$l = 3$"
      }
    ],
    "answers": [
      "option-1",
      "option-2",
      "option-3"
    ]
  },
  {
    "id": "gc-c1-qn-002",
    "lessonId": "gc-quantum-numbers",
    "title": "Bộ số lượng tử không hợp lệ",
    "prompt": "Bộ số lượng tử $(n, l, m_l, m_s)$ nào dưới đây **không** thể tồn tại? Giải thích.\n\n**Câu hỏi:** Điều kiện của $l$ theo $n$ là gì?",
    "explanation": "$l$ nhận giá trị nguyên từ 0 đến $n - 1$.\n\n**Lời giải đầy đủ:**\n\nĐiều kiện: $n \\ge 1$; $0 \\le l \\le n-1$; $-l \\le m_l \\le +l$; $m_s = \\pm\\tfrac12$.\n\n- $(2, 1, -1, +\\tfrac12)$: hợp lệ (orbital 2p).\n- $(3, 2, 2, -\\tfrac12)$: hợp lệ (orbital 3d).\n- $(2, 2, 0, +\\tfrac12)$: **không hợp lệ** vì $l = 2 > n - 1 = 1$ (không có phân lớp 2d).\n- $(1, 0, 0, -\\tfrac12)$: hợp lệ (orbital 1s).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/quantum-numbers.json",
      "rights": "approved"
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$0 \\le l \\le n - 1$"
      },
      {
        "id": "option-2",
        "label": "$0 \\le l \\le n$"
      },
      {
        "id": "option-3",
        "label": "$1 \\le l \\le n$"
      },
      {
        "id": "option-4",
        "label": "$-n \\le l \\le n$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-qn-003",
    "lessonId": "gc-quantum-numbers",
    "title": "Tên phân lớp từ n và l",
    "prompt": "Một phân lớp có $n = 4$ và $l = 2$. Cho biết tên phân lớp và số electron tối đa của nó.\n\n**Câu hỏi:** Tên phân lớp (ví dụ: 3p)?",
    "explanation": "$l = 0, 1, 2, 3$ ứng với s, p, d, f → $l = 2$ là d; $n = 4$ → **4d**.\n\n**Lời giải đầy đủ:**\n\n$l = 2$ ứng với phân lớp d, nên đây là phân lớp **4d**. Phân lớp d có $2l + 1 = 5$ orbital → tối đa **10 electron**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/quantum-numbers.json",
      "rights": "approved"
    },
    "kind": "short-answer",
    "answers": [
      "4d"
    ]
  },
  {
    "id": "gc-c1-ec-001",
    "lessonId": "gc-electron-configuration",
    "title": "Cấu hình electron của Fe",
    "prompt": "Viết cấu hình electron của nguyên tử sắt ($Z = 26$) và cho biết số electron độc thân ở trạng thái cơ bản.\n\n**Câu hỏi:** Theo nguyên lý vững bền (sơ đồ trang 14), sau 3p electron điền vào phân lớp nào?",
    "explanation": "Thứ tự năng lượng: 1s 2s 2p 3s 3p **4s** 3d 4p… — phân lớp 4s có năng lượng thấp hơn 3d nên được điền trước.\n\n**Lời giải đầy đủ:**\n\nThứ tự điền: 1s 2s 2p 3s 3p 4s 3d…\n\n$$\\mathrm{Fe}: 1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,3d^6\\,4s^2 \\quad\\equiv\\quad [\\mathrm{Ar}]\\,3d^6\\,4s^2$$\n\nPhân lớp 3d⁶ trên 5 orbital: $\\uparrow\\downarrow\\ \\uparrow\\ \\uparrow\\ \\uparrow\\ \\uparrow$ → **4 electron độc thân** (quy tắc Hund).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/electron-configuration.json",
      "rights": "approved",
      "attribution": "Bổ sung; dựa trên sơ đồ thứ tự mức năng lượng trang 14."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "3d"
      },
      {
        "id": "option-2",
        "label": "4s"
      },
      {
        "id": "option-3",
        "label": "4p"
      },
      {
        "id": "option-4",
        "label": "3f"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-ec-002",
    "lessonId": "gc-electron-configuration",
    "title": "Electron độc thân của các nguyên tố chu kỳ 3",
    "prompt": "Bảng ở trang 15 của bài giảng cho cấu hình electron từ Na đến Ar. Dựa vào quy tắc Hund, xác định số electron độc thân của nguyên tử P ($Z = 15$) và S ($Z = 16$).\n\n**Câu hỏi:** Cấu hình electron lớp ngoài cùng của P (ví dụ: 3s23p1)?",
    "explanation": "P: $[\\mathrm{Ne}]\\,3s^2 3p^3$.\n\n**Lời giải đầy đủ:**\n\n- P: $[\\mathrm{Ne}]\\,3s^2 3p^3$ → 3p: $\\uparrow\\ \\uparrow\\ \\uparrow$ → **3** electron độc thân.\n- S: $[\\mathrm{Ne}]\\,3s^2 3p^4$ → 3p: $\\uparrow\\downarrow\\ \\uparrow\\ \\uparrow$ → **2** electron độc thân.\n\nQuy tắc Hund: electron điền vào các orbital cùng năng lượng sao cho số electron độc thân là lớn nhất.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/electron-configuration.json",
      "rights": "approved",
      "attribution": "Biên soạn lại từ bảng cấu hình electron Na–Ar."
    },
    "kind": "short-answer",
    "answers": [
      "3s23p3",
      "[Ne]3s23p3"
    ]
  },
  {
    "id": "gc-c1-ec-003",
    "lessonId": "gc-electron-configuration",
    "title": "Cấu hình electron của ion Fe²⁺ và Fe³⁺",
    "prompt": "Từ cấu hình của Fe ($[\\mathrm{Ar}]\\,3d^6 4s^2$), viết cấu hình electron của $\\mathrm{Fe^{2+}}$ và $\\mathrm{Fe^{3+}}$. Ion nào có nhiều electron độc thân hơn?\n\n**Câu hỏi:** Khi tạo ion dương, electron bị tách khỏi phân lớp nào trước?",
    "explanation": "Electron bị tách khỏi lớp có n lớn nhất (lớp ngoài cùng) trước, tức là 4s — dù 4s được điền trước 3d.\n\n**Lời giải đầy đủ:**\n\nKhi tạo cation, electron lớp ngoài cùng (4s) bị tách trước:\n\n- $\\mathrm{Fe^{2+}}: [\\mathrm{Ar}]\\,3d^6$ → 4 electron độc thân.\n- $\\mathrm{Fe^{3+}}: [\\mathrm{Ar}]\\,3d^5$ → 5 electron độc thân (phân lớp d bán bão hòa).\n\n$\\mathrm{Fe^{3+}}$ có nhiều electron độc thân hơn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/electron-configuration.json",
      "rights": "approved"
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "3d (điền sau cùng)"
      },
      {
        "id": "option-2",
        "label": "4s (lớp ngoài cùng, n lớn nhất)"
      },
      {
        "id": "option-3",
        "label": "3p"
      },
      {
        "id": "option-4",
        "label": "Ngẫu nhiên"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-ec-004",
    "lessonId": "gc-electron-configuration",
    "title": "Trường hợp ngoại lệ: Cr và Cu",
    "prompt": "Theo thứ tự điền thông thường, Cr ($Z = 24$) sẽ có cấu hình $[\\mathrm{Ar}]\\,3d^4 4s^2$. Tuy nhiên thực nghiệm cho thấy cấu hình khác. Hãy viết cấu hình thực tế của Cr và Cu ($Z = 29$) và giải thích.\n\n**Câu hỏi:** Nguyên nhân chính?",
    "explanation": "3d và 4s có năng lượng rất gần nhau; cấu hình d⁵, d¹⁰ bền hơn nên electron 4s chuyển sang 3d.\n\n**Lời giải đầy đủ:**\n\n- $\\mathrm{Cr}: [\\mathrm{Ar}]\\,3d^5 4s^1$ (không phải $3d^4 4s^2$).\n- $\\mathrm{Cu}: [\\mathrm{Ar}]\\,3d^{10} 4s^1$ (không phải $3d^9 4s^2$).\n\nNăng lượng của 3d và 4s rất gần nhau; cấu hình phân lớp d **bán bão hòa** ($d^5$) hoặc **bão hòa** ($d^{10}$) có năng lượng thấp hơn nên bền hơn.\n\n> Đây là kiến thức bổ sung, không có trong slide bài giảng; cần kiểm tra yêu cầu của giảng viên.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/electron-configuration.json",
      "rights": "approved",
      "attribution": "Kiến thức mở rộng ngoài slide bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Phân lớp d bán bão hòa (d⁵) hoặc bão hòa (d¹⁰) có năng lượng thấp, bền hơn"
      },
      {
        "id": "option-2",
        "label": "4s có năng lượng cao hơn 3p"
      },
      {
        "id": "option-3",
        "label": "Nguyên lý Pauli bị vi phạm"
      },
      {
        "id": "option-4",
        "label": "Do số neutron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-015",
    "lessonId": "gc-light-photon",
    "title": "Đề ĐT18 C1: Năng lượng photon",
    "prompt": "Để phá vỡ liên kết A–A trong một mol $\\mathrm{A_{2}}$ đòi hỏi phải cung cấp một năng lượng là 185,48 kJ dưới dạng ánh sáng kích thích. Hãy tính bước sóng đó ứng với giá trị là bao nhiêu nm.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Cần biểu diễn quá trình nào trước khi tính photon?",
    "explanation": "Đây là phân li liên kết A–A, không phải chuyển mức Bohr. Mỗi phân tử hấp thụ năng lượng liên kết trên một phân tử.\n\n**Lời giải đầy đủ:**\n\n-  Năng lượng cho 1 mol photon là $185480$ J; một photon: $E = \\dfrac{185480}{N_A} = \\dfrac{185480}{6{,}022\\cdot10^{23}} = 3{,}08\\cdot10^{-19}$ J. \n\n-  Biến đổi $E = \\dfrac{hc}{\\lambda}$: $\\lambda = \\dfrac{hc}{E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{3{,}08\\cdot10^{-19}} = 6{,}45\\cdot10^{-7}$ m.\n\n$\\lambda \\approx 645$ nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C1 (Đề tổng hợp 8, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Mũi tên hấp thụ năng lượng từ phân tử đến hai nguyên tử tách rời"
      },
      {
        "id": "option-2",
        "label": "Mũi tên phát xạ trong nguyên tử H"
      },
      {
        "id": "option-3",
        "label": "Mũi tên ion hóa H từ n = 1 đến ∞"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-016",
    "lessonId": "gc-light-photon",
    "title": "Đề ĐT20 C1: Năng lượng photon",
    "prompt": "Co-60 là một đồng vị sử dụng để chữa ung thư. Đồng vị này phát ra tia $\\gamma$ có năng lượng $1{,}6\\cdot10^{6}$ eV. Hãy tính tần số và bước sóng của tia $\\gamma$ này.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Photon gamma đã được phát ra: chọn sơ đồ nào?",
    "explanation": "Co-60 phát xạ gamma do chuyển mức hạt nhân. Dùng quan hệ photon, không dùng công thức Bohr của H.\n\n**Lời giải đầy đủ:**\n\n-  Đổi năng lượng: $E = 1{,}6\\cdot10^{6} \\times 1{,}6\\cdot10^{-19} = 2{,}56\\cdot10^{-13}$ J. \n\n-  Từ $E = h\\nu$: $\\nu = \\dfrac{E}{h} = \\dfrac{2{,}56\\cdot10^{-13}}{6{,}626\\cdot10^{-34}} = 3{,}86\\cdot10^{20}$ Hz. \n\n-  Từ $c = \\lambda\\nu$: $\\lambda = \\dfrac{c}{\\nu} = \\dfrac{3\\cdot10^{8}}{3{,}86\\cdot10^{20}} = 7{,}77\\cdot10^{-13}$ m.\n\n$\\nu \\approx 3{,}86\\cdot10^{20}$ Hz; $\\lambda \\approx 7{,}8\\cdot10^{-13}$ m.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C1 (Đề tổng hợp 10, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Năng lượng hạt nhân đi xuống và phát photon gamma"
      },
      {
        "id": "option-2",
        "label": "Mức Bohr n = 2 → n = 1 của H"
      },
      {
        "id": "option-3",
        "label": "Năng lượng đi lên khi nguyên tử H hấp thụ"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-photon-001",
    "lessonId": "gc-light-photon",
    "title": "Năng lượng photon ở các vùng phổ",
    "prompt": "Tính năng lượng một photon của:\n\na) tia tử ngoại ($\\lambda = 10$ nm); b) ánh sáng nhìn thấy ($\\lambda = 500$ nm); c) tia hồng ngoại ($\\lambda = 5000$ nm); d) sóng radio ($\\lambda = 1{,}2$ cm).\n\nCho $h = 6{,}626\\times10^{-34}$ J·s, $c = 3{,}00\\times10^8$ m/s.\n\n**Câu hỏi:** Chọn công thức tính năng lượng một photon từ bước sóng.",
    "explanation": "Năng lượng photon $E = h\\nu$, kết hợp $c = \\lambda\\nu$ → $E = hc/\\lambda$.\n\n**Lời giải đầy đủ:**\n\nCông thức: $E = \\dfrac{hc}{\\lambda}$, với $hc = 6{,}626\\times10^{-34}\\cdot3{,}00\\times10^{8} = 1{,}988\\times10^{-25}$ J·m.\n\n| Bức xạ | λ (m) | E (J) |\n|---|---|---|\n| Tử ngoại | $1{,}0\\times10^{-8}$ | $1{,}99\\times10^{-17}$ |\n| Nhìn thấy | $5{,}00\\times10^{-7}$ | $3{,}98\\times10^{-19}$ |\n| Hồng ngoại | $5{,}00\\times10^{-6}$ | $3{,}98\\times10^{-20}$ |\n| Radio | $1{,}2\\times10^{-2}$ | $1{,}66\\times10^{-23}$ |\n\n**Kết luận:** bước sóng càng ngắn, năng lượng photon càng lớn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 1 trang 22 bài giảng; lời giải do website biên soạn."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$E = h\\nu = \\dfrac{hc}{\\lambda}$"
      },
      {
        "id": "option-2",
        "label": "$E = -13{,}6\\,\\dfrac{Z^2}{n^2}$ eV"
      },
      {
        "id": "option-3",
        "label": "$c = \\dfrac{\\lambda}{\\nu}$"
      },
      {
        "id": "option-4",
        "label": "$E = mc^2$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-photon-002",
    "lessonId": "gc-light-photon",
    "title": "Sóng của đài phát thanh",
    "prompt": "a) Một đài phát thanh phát ở tần số 950 kHz. Tính bước sóng của đài.\n\nb) Một đài khác phát ở tần số 93,5 MHz. Tính năng lượng photon của đài này.\n\n**Câu hỏi:** Đổi 950 kHz sang Hz.\n\n*(Nhập giá trị số theo đơn vị Hz)*",
    "explanation": "$1$ kHz $= 10^3$ Hz → $9{,}50\\times10^5$ Hz.\n\n**Lời giải đầy đủ:**\n\na) $\\lambda = \\dfrac{c}{\\nu} = \\dfrac{3{,}00\\times10^8}{9{,}50\\times10^5} = 316$ m.\n\nb) $E = h\\nu = 6{,}626\\times10^{-34}\\times 9{,}35\\times10^{7} = 6{,}20\\times10^{-26}$ J.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 4 trang 32 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "950000"
    ]
  },
  {
    "id": "gc-c1-photon-003",
    "lessonId": "gc-light-photon",
    "title": "Tia γ của đồng vị Co-60",
    "prompt": "Co-60 là đồng vị dùng trong xạ trị ung thư, phát tia γ có năng lượng 1,33 MeV. Tính tần số và bước sóng của tia γ này.\n\nCho $1$ eV $= 1{,}6023\\times10^{-19}$ J.\n\n**Câu hỏi:** Năng lượng photon tính bằng J?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "$E = 1{,}33\\times10^{6}$ eV $\\times 1{,}6023\\times10^{-19}$ J/eV $= 2{,}13\\times10^{-13}$ J.\n\n**Lời giải đầy đủ:**\n\n$E = 1{,}33\\times10^{6}\\times1{,}6023\\times10^{-19} = 2{,}13\\times10^{-13}$ J\n\n$\\nu = \\dfrac{E}{h} = \\dfrac{2{,}13\\times10^{-13}}{6{,}626\\times10^{-34}} = 3{,}22\\times10^{20}$ Hz\n\n$\\lambda = \\dfrac{c}{\\nu} = 9{,}33\\times10^{-13}$ m (khoảng $10^{-3}$ nm — vùng tia γ).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 5 trang 32 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "2.13106e-13",
      "2,13106e-13"
    ]
  },
  {
    "id": "gc-c1-photon-004",
    "lessonId": "gc-light-photon",
    "title": "Bức xạ tầng ozone hấp thụ",
    "prompt": "Tầng ozone bảo vệ Trái Đất bằng cách hấp thụ bức xạ tử ngoại có bước sóng 242 nm. Tính tần số và năng lượng photon của bước sóng này.\n\n**Câu hỏi:** Tần số?\n\n*(Nhập giá trị số theo đơn vị Hz)*",
    "explanation": "$\\nu = c/\\lambda = 3{,}00\\times10^8/2{,}42\\times10^{-7} = 1{,}24\\times10^{15}$ s⁻¹.\n\n**Lời giải đầy đủ:**\n\n$\\nu = \\dfrac{c}{\\lambda} = \\dfrac{3{,}00\\times10^8}{242\\times10^{-9}} = 1{,}24\\times10^{15}$ Hz\n\n$E = h\\nu = 6{,}626\\times10^{-34}\\times1{,}24\\times10^{15} = 8{,}21\\times10^{-19}$ J",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 6 trang 33 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "1239670000000000"
    ]
  },
  {
    "id": "gc-c1-photon-005",
    "lessonId": "gc-light-photon",
    "title": "Số photon kích hoạt xung thần kinh",
    "prompt": "Năng lượng tối thiểu để kích hoạt xung thần kinh truyền tới não là $2{,}0\\times10^{-17}$ J. Cần tối thiểu bao nhiêu photon ánh sáng đỏ (700 nm) hoặc ánh sáng xanh (475 nm) để cung cấp năng lượng này?\n\n**Câu hỏi:** Năng lượng một photon đỏ (700 nm)?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "$E = hc/\\lambda = 2{,}84\\times10^{-19}$ J.\n\n**Lời giải đầy đủ:**\n\n- Photon đỏ: $E = \\dfrac{hc}{700\\times10^{-9}} = 2{,}84\\times10^{-19}$ J → $n = \\dfrac{2{,}0\\times10^{-17}}{2{,}84\\times10^{-19}} = 70{,}4$ → **71 photon**.\n- Photon xanh: $E = 4{,}18\\times10^{-19}$ J → $n = 47{,}8$ → **48 photon**.\n\nPhoton xanh có năng lượng lớn hơn nên cần ít photon hơn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 7 trang 33 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "2.83971e-19",
      "2,83971e-19"
    ]
  },
  {
    "id": "gc-c1-photon-006",
    "lessonId": "gc-light-photon",
    "title": "Liên kết Hb–CO hấp thụ bức xạ hồng ngoại",
    "prompt": "CO rất độc vì liên kết với hemoglobin mạnh hơn $\\mathrm{O_2}$. Liên kết Hb–CO hấp thụ bức xạ có số sóng 1953 cm⁻¹. Tính bước sóng và năng lượng photon hấp thụ.\n\n**Câu hỏi:** Bước sóng tính bằng cm?\n\n*(Nhập giá trị số theo đơn vị cm)*",
    "explanation": "$\\lambda = 1/\\tilde{\\nu} = 1/1953 = 5{,}12\\times10^{-4}$ cm.\n\n**Lời giải đầy đủ:**\n\n$\\lambda = \\dfrac{1}{1953\\ \\text{cm}^{-1}} = 5{,}12\\times10^{-4}$ cm $= 5{,}12\\times10^{-6}$ m\n\n$E = \\dfrac{hc}{\\lambda} = 3{,}88\\times10^{-20}$ J/photon (≈ $23{,}4$ kJ/mol).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 9 trang 33 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "0.000512033",
      "0,000512033"
    ]
  },
  {
    "id": "gc-c1-photon-007",
    "lessonId": "gc-light-photon",
    "title": "Hâm nóng súp bằng lò vi sóng",
    "prompt": "Một bát súp chứa 252 g $\\mathrm{H_2O}$ được làm nóng bằng lò vi sóng từ 20 °C lên 98 °C, bức xạ có bước sóng $1{,}55\\times10^{-2}$ m. Tính số photon mà bát súp hấp thụ. Biết $Q = m\\,C\\,\\Delta t$ với $C = 4{,}184$ J/(g·°C).\n\n**Câu hỏi:** Nhiệt lượng nước nhận Q?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "$Q = 252\\cdot4{,}184\\cdot(98-20) = 82241$ J.\n\n**Lời giải đầy đủ:**\n\n$Q = 252 \\times 4{,}184 \\times 78 = 82241$ J\n\n$E_\\text{photon} = \\dfrac{6{,}626\\times10^{-34}\\times3{,}00\\times10^8}{1{,}55\\times10^{-2}} = 1{,}28\\times10^{-23}$ J\n\n$n = \\dfrac{Q}{E} = 6{,}41\\times10^{27}$ photon.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 12 trang 35 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "82240.7",
      "82240,7"
    ]
  },
  {
    "id": "gc-c1-photon-008",
    "lessonId": "gc-light-photon",
    "title": "Photon từ bóng đèn sợi đốt",
    "prompt": "Một bóng đèn sợi đốt 75 W chuyển 95% điện năng thành nhiệt và 5% thành ánh sáng. Nếu 10% lượng ánh sáng đó chiếu vào cuốn sách, mỗi giây có bao nhiêu photon chiếu vào sách? Giả sử photon có bước sóng 550 nm. ($1$ W $= 1$ J/s)\n\n**Câu hỏi:** Năng lượng ánh sáng chiếu vào sách mỗi giây?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "$75 \\times 0{,}05 \\times 0{,}10 = 0{,}375$ J/s.\n\n**Lời giải đầy đủ:**\n\nNăng lượng ánh sáng tới sách mỗi giây: $75 \\times 5\\% \\times 10\\% = 0{,}375$ J.\n\n$E_\\text{photon} = \\dfrac{hc}{550\\times10^{-9}} = 3{,}61\\times10^{-19}$ J → $n = \\dfrac{0{,}375}{3{,}61\\times10^{-19}} = 1{,}04\\times10^{18}$ photon/s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 16 trang 36 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "0.375",
      "0,375"
    ]
  },
  {
    "id": "gc-c1-photon-009",
    "lessonId": "gc-light-photon",
    "title": "Vụ án trong trò chơi Clue",
    "prompt": "Trong trò chơi “Clue”, bà White bị sát hại trong phòng nhạc. Máy quang phổ ở mỗi phòng ghi lại ánh sáng phản xạ từ trang phục của người có mặt (ví dụ người mặc màu vàng phản xạ 580 nm). Các nghi phạm: Đại tá Mustard (vàng), GS. Plum (tím), ông Green (xanh lá), bà Peacock (xanh lam) và bà Scarlet (đỏ).\n\nLúc xảy ra án: phòng ăn ghi phản xạ 520 nm; phòng khách và phòng làm việc ghi **tần số thấp hơn**; thư viện ghi **bước sóng ngắn nhất có thể**. Ai là thủ phạm?\n\n**Câu hỏi:** 520 nm thuộc màu nào? Ai ở phòng ăn?",
    "explanation": "Vùng xanh lá khoảng 500–560 nm → ông Green ở phòng ăn.\n\n**Lời giải đầy đủ:**\n\n- Phòng ăn: 520 nm (xanh lá) → **ông Green**.\n- Phòng khách, phòng làm việc: tần số thấp hơn → bước sóng dài hơn 520 nm → vàng (580 nm) và đỏ (~700 nm) → **Đại tá Mustard** và **bà Scarlet**.\n- Thư viện: bước sóng ngắn nhất (tím) → **GS. Plum**.\n\nCòn lại **bà Peacock** (xanh lam, ~490 nm) — người có mặt ở phòng nhạc → thủ phạm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/light-photon.json",
      "rights": "approved",
      "attribution": "Bài 17 trang 37 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Xanh lá — ông Green"
      },
      {
        "id": "option-2",
        "label": "Đỏ — bà Scarlet"
      },
      {
        "id": "option-3",
        "label": "Tím — GS. Plum"
      },
      {
        "id": "option-4",
        "label": "Vàng — Đại tá Mustard"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-bohr-001",
    "lessonId": "gc-bohr-model",
    "title": "Nguyên tử H hấp thụ photon lên n = 4",
    "prompt": "Nguyên tử H hấp thụ photon và nhảy lên trạng thái kích thích $n = 4$ (từ trạng thái cơ bản). Tính biến thiên năng lượng $\\Delta E$ và bước sóng của photon.\n\n**Câu hỏi:** Chọn công thức tính ΔE khi electron chuyển mức trong nguyên tử H.",
    "explanation": "Mẫu Bohr: $E_n = -2{,}18\\times10^{-18}/n^2$ J (Z = 1), nên $\\Delta E = E_\\text{cuối} - E_\\text{đầu}$.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta E = -2{,}18\\times10^{-18}\\left(\\frac{1}{4^2}-\\frac{1}{1^2}\\right) = -2{,}18\\times10^{-18}\\left(\\frac{1}{16}-1\\right) = 2{,}04\\times10^{-18}\\ \\text{J}$$\n\n$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{6{,}626\\times10^{-34}\\times3{,}00\\times10^8}{2{,}04\\times10^{-18}} = 9{,}73\\times10^{-8}\\ \\text{m} \\approx 97{,}3\\ \\text{nm}$$\n\n(Bài giảng làm tròn: $2{,}04\\times10^{-18}$ J và $9{,}74\\times10^{-8}$ m.)",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Ví dụ 1 trang 31 bài giảng (có lời giải mẫu)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\Delta E = -2{,}18\\times10^{-18}\\left(\\dfrac{1}{n_\\text{cuối}^2}-\\dfrac{1}{n_\\text{đầu}^2}\\right)$ J"
      },
      {
        "id": "option-2",
        "label": "$\\Delta E = 2{,}18\\times10^{-18}\\left(n_\\text{cuối}^2-n_\\text{đầu}^2\\right)$ J"
      },
      {
        "id": "option-3",
        "label": "$\\Delta E = h c \\lambda$"
      },
      {
        "id": "option-4",
        "label": "$\\Delta E = -13{,}6\\, n^2$ eV"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-bohr-002",
    "lessonId": "gc-bohr-model",
    "title": "H hấp thụ photon lên n = 6 và n = 8",
    "prompt": "Nguyên tử H ở trạng thái cơ bản hấp thụ photon và nhảy lên trạng thái kích thích:\n\na) $n = 6$; b) $n = 8$.\n\nTính $\\Delta E$ và bước sóng photon trong mỗi trường hợp.\n\n**Câu hỏi:** ΔE cho $1 \\to 6$?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "$\\Delta E = -2{,}18\\times10^{-18}(1/36 - 1) = 2{,}12\\times10^{-18}$ J.\n\n**Lời giải đầy đủ:**\n\na) $\\Delta E = -2{,}18\\times10^{-18}\\left(\\tfrac{1}{36} - 1\\right) = 2{,}12\\times10^{-18}$ J; $\\lambda = 93{,}8$ nm.\n\nb) $\\Delta E = -2{,}18\\times10^{-18}\\left(\\tfrac{1}{64} - 1\\right) = 2{,}15\\times10^{-18}$ J; $\\lambda = 92{,}6$ nm.\n\n> **Lưu ý:** đề bài trong slide ghi “vùng IR” cho $n = 6$, nhưng chuyển mức xuất phát từ $n = 1$ luôn thuộc dãy Lyman (vùng tử ngoại, λ < 122 nm). Đề chỉ đúng vùng IR nếu xuất phát từ mức $n \\ge 3$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 2 và 3 trang 32 bài giảng; giả định trạng thái đầu là n = 1 (theo ví dụ trang 31)."
    },
    "kind": "short-answer",
    "answers": [
      "2.11944e-18",
      "2,11944e-18"
    ]
  },
  {
    "id": "gc-c1-exam-001",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT04 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Tính năng lượng cần thiết để kích thích electron trong nguyên tử hiđro từ mức $n = 1$ lên mức $n = 2$. Tính bước sóng của bức xạ điện từ theo đơn vị (nm). (1 eV = $1{,}6\\cdot10^{-19}$ J, 1 m = $10^9$ nm)\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron lên mức cao hơn nên nhận năng lượng.\n\n**Lời giải đầy đủ:**\n\n-  Công thức: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, nên năng lượng photon khi electron chuyển giữa hai mức là $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV ($n_1 < n_2$). \n\n-  Thế số ($Z = 1$, $n_1 = 1$, $n_2 = 2$): $\\Delta E = 13{,}6 \\times 1 \\times \\left(\\dfrac1{1} - \\dfrac1{4}\\right) = 13{,}6 \\times 0{,}75 = 10{,}2$ eV. \n\n-  Đổi ra J: $\\Delta E = 10{,}2 \\times 1{,}6\\cdot10^{-19} = 1{,}632\\cdot10^{-18}$ J. \n\n-  Biến đổi $\\Delta E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{1{,}632\\cdot10^{-18}} = 1{,}218\\cdot10^{-7}$ m. \n\n-  Đổi đơn vị: $\\lambda = 1{,}218\\cdot10^{-7} \\times 10^9 = 121{,}8$ nm.\n\nΔE ≈ 10,2 eV = 1,632e-18 J; λ ≈ 121,801 nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C1 (HK1 2013–2014, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-exam-002",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT05 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Tính bước sóng của bức xạ điện từ (đơn vị nm) có năng lượng cần thiết để kích thích electron trong nguyên tử hidro từ mức $n = 1$ lên mức $n = 5$, biết $E_H = -1{,}6\\cdot10^{-18}$ J; $R_H = 10^7$ m$^{-1}$.\n\nGhi chú: Giá trị $E_H$ chuẩn là $-2{,}18\\cdot10^{-18}$ J (một số bản in đề ghi $-1{,}6\\cdot10^{-18}$ J; nếu dùng hằng số $R_H$ thì không cần dùng $E_H$).\n\nDữ kiện và quy ước: $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron lên mức cao hơn nên nhận năng lượng.\n\n**Lời giải đầy đủ:**\n\n-  Đề cho $R_H$ nên dùng dạng Rydberg: $\\dfrac1\\lambda = R_H\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ với $n_1 = 1$, $n_2 = 5$. \n\n-  Thế số: $\\dfrac1\\lambda = 10^7 \\times \\left(1 - \\dfrac1{25}\\right) = 10^7 \\times 0{,}96 = 9{,}6\\cdot10^{6}$ m$^{-1}$. \n\n-  Lấy nghịch đảo: $\\lambda = \\dfrac{1}{9{,}6\\cdot10^{6}} = 1{,}042\\cdot10^{-7}$ m $= 104{,}2$ nm. \n\n-  Năng lượng cần: $\\Delta E = |E_H|\\left(1 - \\tfrac1{25}\\right) = 1{,}6\\cdot10^{-18} \\times 0{,}96 = 1{,}54\\cdot10^{-18}$ J (theo số của đề).\n\nλ ≈ 104,167 nm theo R_H; ΔE = 1,536e-18 J theo E_H.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C1 (HK2 2013–2014, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-exam-003",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT07 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Tính bước sóng (theo nm) của ánh sáng phát xạ khi electron chuyển từ $n = 3$ về $n = 2$ trong nguyên tử hiđro.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Công thức: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, nên năng lượng photon khi electron chuyển giữa hai mức là $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV ($n_1 < n_2$). \n\n-  Thế số ($Z = 1$, $n_1 = 2$, $n_2 = 3$): $\\Delta E = 13{,}6 \\times 1 \\times \\left(\\dfrac1{4} - \\dfrac1{9}\\right) = 13{,}6 \\times 0{,}1389 = 1{,}889$ eV. \n\n-  Đổi ra J: $\\Delta E = 1{,}889 \\times 1{,}6\\cdot10^{-19} = 3{,}022\\cdot10^{-19}$ J. \n\n-  Biến đổi $\\Delta E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{3{,}022\\cdot10^{-19}} = 6{,}577\\cdot10^{-7}$ m. \n\n-  Đổi đơn vị: $\\lambda = 6{,}577\\cdot10^{-7} \\times 10^9 = 657{,}7$ nm.\n\nΔE ≈ 1,88889 eV = 3,02222e-19 J; λ ≈ 657,728 nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C1 (HK1 2015–2016, 1 điểm; trùng Đề tổng hợp 1)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-004",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT09 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Tính bước sóng (theo nm) của ánh sáng phát xạ khi electron chuyển từ $n = 3$ về $n = 2$ trong ion $\\mathrm{Li^{2+}}$.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\cdot10^{-19}$ J; $T$(K) = $t$(°C) + 273.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Công thức: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, nên năng lượng photon khi electron chuyển giữa hai mức là $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV ($n_1 < n_2$). \n\n-  Thế số ($Z^2 = 9$, $n_1 = 2$, $n_2 = 3$): $\\Delta E = 13{,}6 \\times 9 \\times \\left(\\dfrac1{4} - \\dfrac1{9}\\right) = 122{,}4 \\times 0{,}1389 = 17$ eV. \n\n-  Đổi ra J: $\\Delta E = 17 \\times 1{,}6\\cdot10^{-19} = 2{,}72\\cdot10^{-18}$ J. \n\n-  Biến đổi $\\Delta E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{2{,}72\\cdot10^{-18}} = 7{,}308\\cdot10^{-8}$ m. \n\n-  Đổi đơn vị: $\\lambda = 7{,}308\\cdot10^{-8} \\times 10^9 = 73{,}08$ nm.\n\nΔE ≈ 17 eV = 2,72e-18 J; λ ≈ 73,0809 nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C1 (HK2 2015–2016, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-005",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT10 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Tính bước sóng (theo đơn vị nm) của ánh sáng phát xạ khi electron chuyển từ $n = 3$ về $n = 2$ trong ion nguyên tử $\\mathrm{He^{+}}$ (1,0 eV = $1{,}6\\cdot10^{-19}$ J, 1 m = $10^9$ nm).\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Công thức: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, nên năng lượng photon khi electron chuyển giữa hai mức là $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV ($n_1 < n_2$). \n\n-  Thế số ($Z^2 = 4$, $n_1 = 2$, $n_2 = 3$): $\\Delta E = 13{,}6 \\times 4 \\times \\left(\\dfrac1{4} - \\dfrac1{9}\\right) = 54{,}4 \\times 0{,}1389 = 7{,}556$ eV. \n\n-  Đổi ra J: $\\Delta E = 7{,}556 \\times 1{,}6\\cdot10^{-19} = 1{,}209\\cdot10^{-18}$ J. \n\n-  Biến đổi $\\Delta E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{1{,}209\\cdot10^{-18}} = 1{,}644\\cdot10^{-7}$ m. \n\n-  Đổi đơn vị: $\\lambda = 1{,}644\\cdot10^{-7} \\times 10^9 = 164{,}4$ nm.\n\nΔE ≈ 7,55556 eV = 1,20889e-18 J; λ ≈ 164,432 nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C1 (HK1 2016–2017, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-006",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT11 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Tính bước sóng (theo nm và Å) của ánh sáng phát xạ khi electron chuyển từ $n = 5$ về $n = 2$ trong ion nguyên tử $\\mathrm{He^{+}}$ (1,0 eV = $1{,}6\\cdot10^{-19}$ J, 1 nm = $10^{-9}$ m, 1 Å = $10^{-10}$ m).\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Công thức: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, nên năng lượng photon khi electron chuyển giữa hai mức là $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV ($n_1 < n_2$). \n\n-  Thế số ($Z^2 = 4$, $n_1 = 2$, $n_2 = 5$): $\\Delta E = 13{,}6 \\times 4 \\times \\left(\\dfrac1{4} - \\dfrac1{25}\\right) = 54{,}4 \\times 0{,}21 = 11{,}42$ eV. \n\n-  Đổi ra J: $\\Delta E = 11{,}42 \\times 1{,}6\\cdot10^{-19} = 1{,}828\\cdot10^{-18}$ J. \n\n-  Biến đổi $\\Delta E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{1{,}828\\cdot10^{-18}} = 1{,}088\\cdot10^{-7}$ m. \n\n-  Đổi đơn vị: $\\lambda = 108{,}8$ nm $= 1088$ Å.\n\nΔE ≈ 11,424 eV = 1,82784e-18 J; λ ≈ 108,751 nm. Tức 1087,51 Å.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C1 (HK2 2016–2017, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-007",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT14 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Electron của nguyên tử hidro (H) đang ở trạng thái kích thích $n = 5$ phát xạ ánh sáng có bước sóng $\\lambda = 434{,}5$ nm để trở về mức năng lượng thấp hơn. Hãy xác định số lượng tử chính của mức năng lượng sau khi electron trở về?\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Năng lượng photon phát ra: $\\Delta E = \\dfrac{hc}{\\lambda} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{434{,}5\\cdot10^{-9}} = 4{,}575\\cdot10^{-19}$ J $= \\dfrac{4{,}575\\cdot10^{-19}}{1{,}6\\cdot10^{-19}} = 2{,}859$ eV. \n\n-  Electron đi từ $n_2 = 5$ xuống $n_1$: $\\Delta E = 13{,}6\\left(\\dfrac1{n_1^2} - \\dfrac1{25}\\right)$. \n\n-  Biến đổi tìm $n_1$: $\\dfrac1{n_1^2} = \\dfrac{\\Delta E}{13{,}6} + \\dfrac1{25} = 0{,}2102 + 0{,}04 = 0{,}2502$. \n\n-  Suy ra $n_1^2 = 4 \\approx 4$, $n_1 = 2$.\n\n$n = 2$ (vạch $\\mathrm{H_\\gamma}$ dãy Balmer).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C1 (Đề tổng hợp 3, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-008",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT16 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Nguyên tử He ($Z = 2$) bị mất 1 electron để thành ion $\\mathrm{He^{+}}$. Tính độ dài bước sóng $\\lambda$ của $\\mathrm{He^{+}}$ khi electron chuyển từ trạng thái kích thích $n = 3$ về trạng thái cơ bản.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Công thức: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, nên năng lượng photon khi electron chuyển giữa hai mức là $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV ($n_1 < n_2$). \n\n-  Thế số ($Z^2 = 4$, $n_1 = 1$, $n_2 = 3$): $\\Delta E = 13{,}6 \\times 4 \\times \\left(\\dfrac1{1} - \\dfrac1{9}\\right) = 54{,}4 \\times 0{,}8889 = 48{,}36$ eV. \n\n-  Đổi ra J: $\\Delta E = 48{,}36 \\times 1{,}6\\cdot10^{-19} = 7{,}737\\cdot10^{-18}$ J. \n\n-  Biến đổi $\\Delta E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{7{,}737\\cdot10^{-18}} = 2{,}569\\cdot10^{-8}$ m. \n\n-  Đổi đơn vị: $\\lambda = 2{,}569\\cdot10^{-8} \\times 10^9 = 25{,}69$ nm.\n\nΔE ≈ 48,3556 eV = 7,73689e-18 J; λ ≈ 25,6925 nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C1 (Đề tổng hợp 6, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-009",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT19 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Đối với phổ phát xạ của nguyên tử hiđro người ta thu được hàng loạt các dãy phổ quan trọng như Lyman, Balmer, Paschen. Hãy tính độ dài bước sóng lớn nhất nằm trong vùng trông thấy và bước sóng nhỏ nhất nằm trong vùng UV.\n\nDùng giá trị $R_H = 1{,}097\\cdot10^7$ m$^{-1}$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  Vùng khả kiến là dãy Balmer (electron về $n_1 = 2$). Bước sóng lớn nhất ứng với năng lượng nhỏ nhất, tức bước nhảy ngắn nhất $3 \\to 2$. \n\n-  $\\dfrac1{\\lambda_{max}} = R_H\\left(\\dfrac14 - \\dfrac19\\right) = 1{,}097\\cdot10^{7} \\times \\dfrac{5}{36} = 1{,}524\\cdot10^{6}$ m$^{-1}$ nên $\\lambda_{max} = 6{,}56\\cdot10^{-7}$ m. \n\n-  Vùng tử ngoại là dãy Lyman (về $n_1 = 1$). Bước sóng nhỏ nhất ứng với năng lượng lớn nhất, tức $n_2 = \\infty$. \n\n-  $\\dfrac1{\\lambda_{min}} = R_H\\left(1 - 0\\right) = 1{,}097\\cdot10^{7}$ m$^{-1}$ nên $\\lambda_{min} = 9{,}12\\cdot10^{-8}$ m.\n\n$\\lambda_{max} \\approx 656$ nm; $\\lambda_{min} \\approx 91{,}2$ nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C1 (Đề tổng hợp 9, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-exam-010",
    "lessonId": "gc-electronic-transitions",
    "title": "Đề ĐT21 C1: Bước sóng khi electron chuyển mức",
    "prompt": "Nguyên tử He ($Z = 2$) bị mất một electron để thành ion $\\mathrm{He^{+}}$. Với ion $\\mathrm{He^{+}}$:\n\n\n\n-  Tính độ dài bước sóng $\\lambda$ (theo nm) phát ra khi điện tử chuyển từ trạng thái kích thích $n = 4$ về trạng thái cơ bản.\n\n\n-  Tính năng lượng cần thiết vừa đủ (theo Jun) để chuyển một điện tử từ trạng thái $n = 2$ lên $n = 3$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron về mức thấp hơn nên phát photon.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{He^{+}}$ có $Z = 2$, $Z^2 = 4$; dùng $\\Delta E = 13{,}6Z^2\\left(\\dfrac1{n_1^2} - \\dfrac1{n_2^2}\\right)$ eV. \n\n-  a) $4 \\to 1$: $\\Delta E = 54{,}4\\left(1 - \\dfrac1{16}\\right) = 51$ eV $= 8{,}16\\cdot10^{-18}$ J; $\\lambda = \\dfrac{hc}{\\Delta E} = 2{,}436\\cdot10^{-8}$ m. \n\n-  b) $2 \\to 3$ (hấp thụ): $\\Delta E = 54{,}4\\left(\\dfrac14 - \\dfrac19\\right) = 7{,}556$ eV; nhân $1{,}6\\cdot10^{-19}$ ra J.\n\nΔE ≈ 51 eV = 8,16e-18 J; λ ≈ 24,3603 nm. Ý b: 1,20889e-18 J.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C1 (Đề tổng hợp 11, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-trans-001",
    "lessonId": "gc-electronic-transitions",
    "title": "Bước sóng chuyển mức 1 ↔ 2 theo Rydberg",
    "prompt": "Dùng công thức Rydberg với $R = 1{,}096776\\times10^7$ m⁻¹, tính bước sóng ứng với chuyển mức giữa $n_1 = 1$ và $n_2 = 2$ của nguyên tử H.\n\n**Câu hỏi:** Chọn công thức Rydberg.",
    "explanation": "Công thức Rydberg cho nghịch đảo bước sóng; với $n_1 < n_2$ ta được $1/\\lambda > 0$.\n\n**Lời giải đầy đủ:**\n\n$$\\frac{1}{\\lambda} = R\\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = 1{,}096776\\times10^7\\times\\frac{3}{4} = 8{,}2258\\times10^{6}\\ \\text{m}^{-1}$$\n\n$$\\lambda = 1{,}216\\times10^{-7}\\ \\text{m} = 121{,}6\\ \\text{nm}$$\n\nĐây là vạch đầu tiên của dãy Lyman (vùng tử ngoại).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Câu hỏi trang 24 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\dfrac{1}{\\lambda} = R\\left(\\dfrac{1}{n_1^2} - \\dfrac{1}{n_2^2}\\right)$"
      },
      {
        "id": "option-2",
        "label": "$\\lambda = R\\left(\\dfrac{1}{n_1^2} - \\dfrac{1}{n_2^2}\\right)$"
      },
      {
        "id": "option-3",
        "label": "$\\dfrac{1}{\\lambda} = R\\,(n_2^2 - n_1^2)$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-trans-002",
    "lessonId": "gc-electronic-transitions",
    "title": "Phát xạ 3 → 2 của ion He⁺",
    "prompt": "Tính bước sóng của ánh sáng phát xạ khi electron chuyển từ $n = 3$ về $n = 2$ trong nguyên tử He.\n\n**Câu hỏi:** Mẫu Bohr $E_n = -2{,}18\\times10^{-18}Z^2/n^2$ áp dụng chính xác cho hệ nào?",
    "explanation": "Công thức Bohr đúng cho hệ một electron. Nguyên tử He có 2 electron nên ở đây ta hiểu đề bài theo mô hình ion giống hydro He⁺ (Z = 2), đúng ý đồ của bài tập.\n\n**Lời giải đầy đủ:**\n\nÁp dụng mẫu Bohr cho hệ một electron với $Z = 2$ (ion He⁺):\n\n$$\\Delta E = -2{,}18\\times10^{-18}\\cdot 2^2\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right) = -1{,}21\\times10^{-18}\\ \\text{J}$$\n\n$$\\lambda = \\frac{hc}{|\\Delta E|} = 1{,}641\\times10^{-7}\\ \\text{m} \\approx 164{,}1\\ \\text{nm}$$\n\n> **Phạm vi áp dụng:** với nguyên tử He trung hòa (2 electron), lực đẩy giữa các electron làm các mức năng lượng khác mẫu Bohr; kết quả trên đúng cho **He⁺**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 1 tệp bài tập chương 1; lời giải diễn giải theo ion He⁺."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Mọi nguyên tử"
      },
      {
        "id": "option-2",
        "label": "Chỉ hệ một electron: H, He⁺, Li²⁺…"
      },
      {
        "id": "option-3",
        "label": "Chỉ nguyên tử H"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-trans-003",
    "lessonId": "gc-electronic-transitions",
    "title": "Tìm mức kích thích ban đầu từ bước sóng phát xạ",
    "prompt": "Một nguyên tử H ở trạng thái kích thích phát xạ ánh sáng có bước sóng 1282,4 nm để trở về mức $n = 3$. Hỏi mức năng lượng kích thích ban đầu của nguyên tử H là bao nhiêu?\n\n**Câu hỏi:** Chọn biểu thức để tìm $n_2$.",
    "explanation": "Từ $1/\\lambda = R(1/n_1^2 - 1/n_2^2)$ với $n_1 = 3$: $1/n_2^2 = 1/9 - 1/(R\\lambda)$.\n\n**Lời giải đầy đủ:**\n\nDãy Paschen (về $n_1 = 3$):\n\n$$\\frac{1}{n_2^2} = \\frac{1}{9} - \\frac{1}{R\\lambda} = 0{,}1111 - \\frac{1}{1{,}096776\\times10^7\\times1{,}2824\\times10^{-6}} = 0{,}04001$$\n\n$$n_2 = 4{,}999 \\approx 5$$\n\nNguyên tử ban đầu ở mức **n = 5**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 3 tệp bài tập chương 1."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\dfrac{1}{n_2^2} = \\dfrac{1}{3^2} - \\dfrac{1}{R\\lambda}$"
      },
      {
        "id": "option-2",
        "label": "$\\dfrac{1}{n_2^2} = \\dfrac{1}{3^2} + \\dfrac{1}{R\\lambda}$"
      },
      {
        "id": "option-3",
        "label": "$n_2 = 3 + R\\lambda$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-trans-004",
    "lessonId": "gc-electronic-transitions",
    "title": "He⁺ từ n = 5 phát xạ về các mức thấp hơn",
    "prompt": "Một ion He⁺ ở trạng thái kích thích $n = 5$ phát xạ ánh sáng có bước sóng bao nhiêu để trở về các mức: a) $n = 1$; b) $n = 4$; c) $n = 3$?\n\n(Lưu ý: đề gốc ghi “nguyên tử He”, nhưng mẫu Bohr chỉ áp dụng chính xác cho hệ một electron là ion He⁺ với $Z = 2$.)\n\n**Câu hỏi:** Chuyển mức nào phát ra photon năng lượng lớn nhất?",
    "explanation": "Khoảng cách năng lượng 5 → 1 lớn nhất nên photon có năng lượng lớn nhất và bước sóng ngắn nhất.\n\n**Lời giải đầy đủ:**\n\nVới He⁺ ($Z = 2$): $|\\Delta E| = 2{,}18\\times10^{-18}\\cdot 4\\left(\\dfrac{1}{n_f^2} - \\dfrac{1}{25}\\right)$, $\\lambda = hc/|\\Delta E|$.\n\n| Chuyển mức | $\\lvert\\Delta E\\rvert$ (J) | λ (nm) |\n|---|---|---|\n| 5 → 1 | $8{,}37\\times10^{-18}$ | $23{,}75$ |\n| 5 → 4 | $1{,}96\\times10^{-19}$ | $1013$ |\n| 5 → 3 | $6{,}20\\times10^{-19}$ | $320{,}6$ |",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 4 tệp bài tập chương 1; lời giải theo ion He⁺."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "5 → 1"
      },
      {
        "id": "option-2",
        "label": "5 → 4"
      },
      {
        "id": "option-3",
        "label": "5 → 3"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-trans-005",
    "lessonId": "gc-electronic-transitions",
    "title": "Dãy Lyman của H, D và He⁺",
    "prompt": "Tính vị trí của 3 vạch đầu tiên và vạch giới hạn của dãy Lyman trong phổ phát xạ của H. Đối với nguyên tử đơteri (D) và ion He⁺ thì các vạch đó nằm ở đâu?\n\n**Câu hỏi:** Dãy Lyman gồm các chuyển mức nào?",
    "explanation": "Lyman: về $n_1 = 1$ (tử ngoại); Balmer: về 2 (nhìn thấy); Paschen: về 3 (hồng ngoại).\n\n**Lời giải đầy đủ:**\n\nCông thức: $\\dfrac{1}{\\lambda} = R Z^2\\left(1 - \\dfrac{1}{n^2}\\right)$, $R_H = 1{,}096776\\times10^7$ m⁻¹.\n\n| Vạch | H (nm) | D (nm) | He⁺ (nm) |\n|---|---|---|---|\n| 2 → 1 | $121{,}6$ | $121{,}54$ | $30{,}39$ |\n| 3 → 1 | $102{,}6$ | $102{,}55$ | $25{,}64$ |\n| 4 → 1 | $97{,}25$ | $97{,}228$ | $24{,}31$ |\n| ∞ → 1 (giới hạn) | $91{,}18$ | $91{,}152$ | $22{,}79$ |\n\n- **He⁺:** $Z^2 = 4$ → mọi bước sóng nhỏ hơn 4 lần.\n- **D:** cùng $Z = 1$ nhưng hạt nhân nặng hơn nên hằng số Rydberg $R_D = R_\\infty/(1 + m_e/m_D) \\approx 1{,}09707\\times10^7$ m⁻¹ (lớn hơn $R_H$ khoảng 0,03%) → các vạch dịch rất ít (~0,03 nm) về phía sóng ngắn. Hiệu ứng này đã giúp phát hiện ra đơteri.\n\n> Phần đơteri dùng hiệu chỉnh khối lượng rút gọn — kiến thức mở rộng ngoài bài giảng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 5 tệp bài tập chương 1; phần đơteri dùng hiệu chỉnh khối lượng rút gọn (bổ sung)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$n \\to 1$"
      },
      {
        "id": "option-2",
        "label": "$n \\to 2$"
      },
      {
        "id": "option-3",
        "label": "$n \\to 3$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-trans-006",
    "lessonId": "gc-electronic-transitions",
    "title": "Phân loại phát xạ – hấp thụ trên sơ đồ",
    "prompt": "Sơ đồ (tệp bài tập chương 1, bài 6) biểu diễn các chuyển mức của electron trong nguyên tử H:\n\n![Sơ đồ chuyển mức bài 6](images/chapter-1/bt6-chuyen-muc.png)\n\nĐọc từ sơ đồ: **A**: 2 → 5; **B**: 6 → 1; **C**: 3 → 6; **D**: 1 → 5; **E**: 5 → 3; **F**: 4 → 1 (đầu mũi tên là mức cuối).\n\na) Chuyển mức nào là phát xạ, chuyển mức nào là hấp thụ (thu xạ)?\n\nb) Sắp xếp các quá trình phát xạ theo năng lượng tăng dần.\n\nc) Sắp xếp các quá trình hấp thụ theo bước sóng tăng dần.\n\n**Câu hỏi:** Thứ tự năng lượng phát xạ tăng dần?",
    "explanation": "$|\\Delta E| \\propto 1/n_f^2 - 1/n_i^2$: E: $1/9 - 1/25 = 0{,}071$; F: $1 - 1/16 = 0{,}938$; B: $1 - 1/36 = 0{,}972$.\n\n**Lời giải đầy đủ:**\n\nHệ số năng lượng $k = \\left|\\dfrac{1}{n_\\text{thấp}^2} - \\dfrac{1}{n_\\text{cao}^2}\\right|$ (với H, $|\\Delta E| = 2{,}18\\times10^{-18}\\,k$ J):\n\n| Chuyển mức | Loại | $k$ |\n|---|---|---|\n| A: 2 → 5 | hấp thụ | $1/4 - 1/25 = 0{,}210$ |\n| B: 6 → 1 | phát xạ | $1 - 1/36 = 0{,}972$ |\n| C: 3 → 6 | hấp thụ | $1/9 - 1/36 = 0{,}083$ |\n| D: 1 → 5 | hấp thụ | $1 - 1/25 = 0{,}960$ |\n| E: 5 → 3 | phát xạ | $1/9 - 1/25 = 0{,}071$ |\n| F: 4 → 1 | phát xạ | $1 - 1/16 = 0{,}938$ |\n\na) Phát xạ: **B, E, F**; hấp thụ: **A, C, D**.\n\nb) Năng lượng phát xạ tăng dần: **E < F < B**.\n\nc) Bước sóng tỉ lệ nghịch với năng lượng → bước sóng hấp thụ tăng dần: **D < A < C**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 6 tệp bài tập chương 1; các chuyển mức được đọc từ hình vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "E < F < B"
      },
      {
        "id": "option-2",
        "label": "F < E < B"
      },
      {
        "id": "option-3",
        "label": "B < F < E"
      },
      {
        "id": "option-4",
        "label": "E < B < F"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-trans-007",
    "lessonId": "gc-electronic-transitions",
    "title": "Electron hấp thụ photon 97,2 nm",
    "prompt": "Electron của nguyên tử H ở mức $n = 1$ hấp thụ một photon có bước sóng 97,2 nm. Electron này dịch chuyển lên mức năng lượng nào?\n\n**Câu hỏi:** Năng lượng photon?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "$E = hc/\\lambda = 2{,}05\\times10^{-18}$ J.\n\n**Lời giải đầy đủ:**\n\n$$E = \\frac{hc}{\\lambda} = \\frac{6{,}626\\times10^{-34}\\times3{,}00\\times10^8}{97{,}2\\times10^{-9}} = 2{,}05\\times10^{-18}\\ \\text{J}$$\n\n$$E = 2{,}18\\times10^{-18}\\left(1 - \\frac{1}{n^2}\\right) \\Rightarrow \\frac{1}{n^2} = 1 - \\frac{2{,}05\\times10^{-18}}{2{,}18\\times10^{-18}} = 0{,}0619 \\Rightarrow n \\approx 4$$\n\nElectron chuyển lên mức **n = 4**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/transitions.json",
      "rights": "approved",
      "attribution": "Bài 7 tệp bài tập chương 1."
    },
    "kind": "short-answer",
    "answers": [
      "2.04506e-18",
      "2,04506e-18"
    ]
  },
  {
    "id": "gc-c1-exam-011",
    "lessonId": "gc-ionization-energy",
    "title": "Đề ĐT06 C1: Năng lượng ion hóa và mức kích thích",
    "prompt": "Nguyên tử $\\mathrm{_3Li}$ mất 2 electron để trở thành ion $\\mathrm{_3Li^{2+}}$ là ion giống H.\n\n\n\n-  Viết phương trình năng lượng $E_n$ của electron chuyển động trên quỹ đạo $n$ trong ion $\\mathrm{_3Li^{2+}}$.\n\n\n-  Tính năng lượng ion hóa tách electron cuối cùng của $\\mathrm{Li^{2+}}$ để thu được ion $\\mathrm{Li^{3+}}$.\n\n\n\nHằng số cho kèm đề: $m_e = 9{,}11\\cdot10^{-31}$ kg; $h = 6{,}625\\cdot10^{-34}$ J.s; $e = 1{,}6\\cdot10^{-19}$ C; 1 eV = $1{,}6\\cdot10^{-19}$ J; 1 m = $10^9$ nm = $10^{10}$ Å; $c = 3\\cdot10^{8}$ m/s; $k_e = 9\\cdot10^{9}$ N.m$^2$/C$^2$.\n\nDữ kiện và quy ước: $m_e = 9{,}11\\cdot10^{-31}$ kg; $h = 6{,}625\\cdot10^{-34}$ J.s; $e = 1{,}6\\cdot10^{-19}$ C; 1 eV = $1{,}6\\cdot10^{-19}$ J; 1 m = $10^9$ nm = $10^{10}$ Å; $c = 3\\cdot10^{8}$ m/s; $k_e = 9\\cdot10^{9}$ N.m$^2$/C$^2$.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Ion hóa từ trạng thái cơ bản đưa electron từ mức âm lên E = 0.\n\n**Lời giải đầy đủ:**\n\n-  a) Ion giống H: $E_n = -13{,}6\\dfrac{Z^2}{n^2}$ eV, với $Z = 3$: $E_n = -\\dfrac{122{,}4}{n^2}$ eV. \n\n-  Ion hóa là đưa electron từ trạng thái cơ bản $n = 1$ lên $n = \\infty$ (thoát khỏi nguyên tử); coi $1/\\infty = 0$ nên $E_\\infty = 0$. \n\n-  b) $I = E_\\infty - E_1 = 0 - \\left(-\\dfrac{122{,}4}{1^2}\\right) = 122{,}4$ eV. \n\n-  Đổi về J: $I = 122{,}4 \\times 1{,}6\\cdot10^{-19} = 1{,}958\\cdot10^{-17}$ J/ion; nhân $N_A$: $1{,}958\\cdot10^{-17} \\times 6{,}022\\cdot10^{23} = 1{,}18\\cdot10^{7}$ J/mol.\n\na) $E_n = -122{,}4/n^2$ eV. b) $I = 122{,}4$ eV $= 1{,}96\\cdot10^{-17}$ J/ion ($\\approx 11800$ kJ/mol).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT06 C1 (Hè 2013–2014, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c1-exam-012",
    "lessonId": "gc-ionization-energy",
    "title": "Đề ĐT12 C1: Năng lượng ion hóa và mức kích thích",
    "prompt": "Năng lượng ion hóa là năng lượng cần thiết loại bỏ electron để chuyển 1 mol nguyên tử ở trạng thái khí thành 1 mol ion nguyên tử ở trạng thái khí. Tính năng lượng ion hóa của nguyên tử H (theo đơn vị kJ/mol, cho biết: 1 eV = $1{,}6\\cdot10^{-19}$ J, 1 m = $10^9$ nm).\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Ion hóa từ trạng thái cơ bản đưa electron từ mức âm lên E = 0.\n\n**Lời giải đầy đủ:**\n\n-  Ion hóa là đưa electron từ trạng thái cơ bản $n = 1$ lên $n = \\infty$ (thoát khỏi nguyên tử); coi $1/\\infty = 0$ nên $E_\\infty = 0$. \n\n-  $I = E_\\infty - E_1 = 0 - \\left(-\\dfrac{13{,}6}{1^2}\\right) = 13{,}6$ eV/nguyên tử. \n\n-  Đổi về J: $13{,}6 \\times 1{,}6\\cdot10^{-19} = 2{,}176\\cdot10^{-18}$ J/nguyên tử. \n\n-  Cho 1 mol: nhân $N_A$: $2{,}176\\cdot10^{-18} \\times 6{,}022\\cdot10^{23} = 1{,}31\\cdot10^{6}$ J/mol.\n\n$I \\approx 1310$ kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C1 (HK1 2017–2018, 1 điểm; trùng Đề tổng hợp 4)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c1-exam-013",
    "lessonId": "gc-ionization-energy",
    "title": "Đề ĐT17 C1: Năng lượng ion hóa và mức kích thích",
    "prompt": "Trong một thí nghiệm người ta cung cấp một năng lượng gấp 1,5 lần năng lượng tối thiểu để làm bứt một electron ra khỏi trạng thái cơ bản của nguyên tử hydro. Hỏi bước sóng $\\lambda$ (Å) bức xạ trong trường hợp này bằng bao nhiêu?\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Ion hóa từ trạng thái cơ bản đưa electron từ mức âm lên E = 0.\n\n**Lời giải đầy đủ:**\n\n-  Ion hóa là đưa electron từ trạng thái cơ bản $n = 1$ lên $n = \\infty$ (thoát khỏi nguyên tử); coi $1/\\infty = 0$ nên $E_\\infty = 0$. Năng lượng tối thiểu: $I = 0 - (-13{,}6) = 13{,}6$ eV. \n\n-  Năng lượng cung cấp: $E = 1{,}5I = 20{,}4$ eV; đổi về J: $20{,}4 \\times 1{,}6\\cdot10^{-19} = 3{,}264\\cdot10^{-18}$ J. \n\n-  Biến đổi $E = \\dfrac{hc}{\\lambda}$ thành $\\lambda = \\dfrac{hc}{E} = \\dfrac{6{,}626\\cdot10^{-34} \\times 3\\cdot10^{8}}{3{,}264\\cdot10^{-18}} = 6{,}09\\cdot10^{-8}$ m; nhân $10^{10}$ ra Å.\n\n$\\lambda \\approx 609$ Å.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C1 (Đề tổng hợp 7, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c1-exam-014",
    "lessonId": "gc-ionization-energy",
    "title": "Đề ĐT22 C1: Năng lượng ion hóa và mức kích thích",
    "prompt": "Năng lượng ion hóa của một nguyên tử hay phân tử là năng lượng cần thiết để tách một electron từ nguyên tử hay phân tử đó ở trạng thái cơ bản.\n\n\n\n-  Một nguyên tử hidro ở trạng thái cơ bản nhận một năng lượng bằng 99,0\\% năng lượng ion hóa của nó. Hãy tính mức năng lượng của electron trong nguyên tử hiđro khi ở trạng thái bị kích thích.\n\n\n-  Cho biết bước sóng phát ra khi electron ở trạng thái kích thích như trên trở về trạng thái cơ bản bằng bao nhiêu nanomet?\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Trên thang mức năng lượng, cần vẽ mũi tên nào?",
    "explanation": "Electron lên mức cao hơn nên nhận năng lượng.\n\n**Lời giải đầy đủ:**\n\n-  Ion hóa là đưa electron từ trạng thái cơ bản $n = 1$ lên $n = \\infty$ (thoát khỏi nguyên tử); coi $1/\\infty = 0$ nên $E_\\infty = 0$. Nên $I = 13{,}6$ eV. \n\n-  a) Electron nhận $0{,}99I$: $E_n = E_1 + 0{,}99 \\times 13{,}6 = -13{,}6 + 13{,}464 = -0{,}136$ eV. \n\n-  Biến đổi $E_n = -\\dfrac{13{,}6}{n^2}$ thành $n^2 = \\dfrac{13{,}6}{0{,}136} = 100$, nên $n = 10$. \n\n-  b) Về $n = 1$: $\\Delta E = 13{,}464$ eV; đổi về J: $13{,}464 \\times 1{,}6\\cdot10^{-19} = 2{,}154\\cdot10^{-18}$ J; $\\lambda = \\dfrac{hc}{\\Delta E} = 9{,}23\\cdot10^{-8}$ m.\n\na) $E = -0{,}136$ eV ($n = 10$). b) $\\lambda \\approx 92{,}3$ nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/exam-dang-1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C1 (Đề tổng hợp 12, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Đi lên giữa hai mức hữu hạn: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Đi từ n = 1 đến ∞: ion hóa"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-ion-001",
    "lessonId": "gc-ionization-energy",
    "title": "Năng lượng ion hóa theo mẫu Bohr: He, F, Na",
    "prompt": "Tính năng lượng ion hóa của các nguyên tử sau và năng lượng để ion hóa 1 mol mỗi chất: a) He; b) F; c) Na.\n\n*(Bài tập này dùng mẫu Bohr cho hệ một electron, trạng thái cơ bản $n = 1$ — xem phần lưu ý trong lời giải.)*\n\n**Câu hỏi:** Theo mẫu Bohr, năng lượng ion hóa từ $n = 1$ của hệ một electron là:",
    "explanation": "$IE = E_\\infty - E_1 = 0 - (-2{,}18\\times10^{-18}Z^2) = 2{,}18\\times10^{-18}Z^2$ J.\n\n**Lời giải đầy đủ:**\n\n$IE = 2{,}18\\times10^{-18}\\,Z^2$ J/nguyên tử $= 13{,}6\\,Z^2$ eV; nhân $N_A$ để được J/mol.\n\n| Chất | Z | IE (J/nguyên tử) | IE (eV) | IE cho 1 mol (kJ/mol) |\n|---|---|---|---|---|\n| He | 2 | $8{,}72\\times10^{-18}$ | $54{,}42$ | $5251$ |\n| F | 9 | $1{,}77\\times10^{-16}$ | $1102$ | $1{,}06\\times10^{5}$ |\n| Na | 11 | $2{,}64\\times10^{-16}$ | $1646$ | $1{,}59\\times10^{5}$ |\n\n> **Lưu ý phạm vi áp dụng:** công thức Bohr chỉ đúng cho hệ **một electron**. Các giá trị trên là năng lượng tách electron **cuối cùng** khỏi ion giống hydro (He⁺, F⁸⁺, Na¹⁰⁺) ở trạng thái cơ bản. Năng lượng ion hóa thứ nhất thực nghiệm của nguyên tử trung hòa nhỏ hơn rất nhiều: He 24,6 eV; F 17,4 eV; Na 5,14 eV (do hiệu ứng chắn của các electron bên trong và electron ngoài cùng ở lớp n > 1).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/ionization-energy.json",
      "rights": "approved",
      "attribution": "Bài 2 tệp bài tập chương 1; lời giải nêu rõ giới hạn của mẫu Bohr."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$IE = 2{,}18\\times10^{-18}\\,Z^2$ J"
      },
      {
        "id": "option-2",
        "label": "$IE = 2{,}18\\times10^{-18}/Z^2$ J"
      },
      {
        "id": "option-3",
        "label": "$IE = 13{,}6\\,Z$ eV"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-ion-002",
    "lessonId": "gc-ionization-energy",
    "title": "Xác định nguyên tố từ năng lượng ion hóa",
    "prompt": "Năng lượng ion hóa là năng lượng cần thiết để bứt electron ra khỏi nguyên tử ở trạng thái khí. Năng lượng ion hóa 1 electron từ trạng thái cơ bản của 1 mol nguyên tố X (xét như hệ một electron) là $3{,}36\\times10^5$ kJ/mol. Xác định nguyên tố X.\n\n**Câu hỏi:** Kí hiệu nguyên tố X?",
    "explanation": "Z = 16 là lưu huỳnh (S); quá trình là $\\mathrm{S^{15+} \\to S^{16+}}$.\n\n**Lời giải đầy đủ:**\n\n$$IE_\\text{nguyên tử} = \\frac{3{,}36\\times10^{5}\\times10^3\\ \\text{J/mol}}{6{,}022\\times10^{23}\\ \\text{mol}^{-1}} = 5{,}58\\times10^{-16}\\ \\text{J}$$\n\n$$Z^2 = \\frac{IE}{2{,}18\\times10^{-18}} = 256 \\approx 256 \\Rightarrow Z = 16$$\n\nX là **lưu huỳnh (S)**; giá trị này ứng với việc tách electron cuối cùng ($\\mathrm{S^{15+}} \\to \\mathrm{S^{16+}}$).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/ionization-energy.json",
      "rights": "approved",
      "attribution": "Bài 8 tệp bài tập chương 1."
    },
    "kind": "short-answer",
    "answers": [
      "S",
      "lưu huỳnh",
      "luu huynh",
      "sulfur"
    ]
  },
  {
    "id": "gc-c1-ion-003",
    "lessonId": "gc-ionization-energy",
    "title": "Xác định ion một electron từ tần số phát xạ",
    "prompt": "Một ion có 1 electron phát ra năng lượng ứng với tần số $2{,}961\\times10^{16}$ Hz. Hãy xác định ion kim loại này.\n\n*Gợi ý: thử các chuyển mức về $n = 1$ và tìm trường hợp cho $Z$ nguyên.*\n\n**Câu hỏi:** Chuyển mức nào cho Z nguyên?",
    "explanation": "Chỉ $\\infty \\to 1$ (electron tự do bị bắt về trạng thái cơ bản, tức năng lượng ion hóa) cho $Z^2 = 9$, $Z = 3$.\n\n**Lời giải đầy đủ:**\n\n$E = h\\nu = 1{,}962\\times10^{-17}$ J; $\\dfrac{E}{2{,}18\\times10^{-18}} = 9{,}000 = Z^2\\left(\\dfrac{1}{n_f^2} - \\dfrac{1}{n_i^2}\\right)$.\n\n- $2 \\to 1$: $Z^2 = 9{,}00/0{,}75 = 12$ → không nguyên.\n- $3 \\to 1$: $Z^2 = 9{,}00/0{,}889 = 10{,}1$ → không nguyên.\n- $\\infty \\to 1$: $Z^2 = 9{,}00$ → $Z = 3$ ✔.\n\nIon là **Li²⁺** (năng lượng tương ứng $13{,}6 \\times 9 = 122{,}4$ eV, đúng bằng năng lượng ion hóa của Li²⁺).\n\n> Đề bài không nêu chuyển mức; lời giải chọn trường hợp duy nhất cho Z nguyên.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/ionization-energy.json",
      "rights": "approved",
      "attribution": "Bài 8 trang 33 bài giảng; giả thiết chuyển mức do website suy luận."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$2 \\to 1$: $Z^2 = 9{,}00/0{,}75 = 12$"
      },
      {
        "id": "option-2",
        "label": "$\\infty \\to 1$: $Z^2 = 9{,}00$"
      },
      {
        "id": "option-3",
        "label": "$3 \\to 1$: $Z^2 = 10{,}1$"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c1-draw-001",
    "lessonId": "gc-atom-drawing-guide",
    "title": "Đề ĐT28 C1: Li²⁺ chuyển từ n = 4 về n = 2",
    "prompt": "Ion $\\mathrm{Li^{2+}}$ ($Z = 3$) là một ion giống hydro, có điện tử chuyển từ mức kích thích $n = 4$ về mức $n = 2$.\n\na) Tính năng lượng photon phát ra (theo eV và J).\n\nb) Tính bước sóng của bức xạ phát ra (theo nm).\n\nCho $h = 6{,}625\\cdot10^{-34}$ J.s; $c = 3\\cdot10^8$ m/s; 1 eV = $1{,}6\\cdot10^{-19}$ J.\n\n**Câu hỏi:** Trên thang mức năng lượng, quá trình này là mũi tên nào?",
    "explanation": "Từ $n = 4$ **về** $n = 2$: electron xuống mức thấp hơn, giải phóng photon → phát xạ.\n\n**Lời giải đầy đủ:**\n\nMũi tên đi xuống $4 \\to 2$ (phát xạ), $Z^2 = 9$.\n\n$\\Delta E = 13{,}6 \\times 9 \\times (1/4 - 1/16) = 22{,}95$ eV $= 3{,}672\\cdot10^{-18}$ J.\n\n$\\lambda = hc/\\Delta E = 5{,}41\\cdot10^{-8}$ m $\\approx 54{,}1$ nm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C1 (Hè 2025–2026). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Mũi tên đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Mũi tên đi lên: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Mũi tên từ n = 1 lên ∞: ion hóa"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-draw-002",
    "lessonId": "gc-atom-drawing-guide",
    "title": "Đề ĐT25 C1 (= ĐT27 C1): tìm nguyên tố từ năng lượng ion hóa",
    "prompt": "Năng lượng ion hóa của một ion hydrogenoid $\\mathrm{X^{n+}}$ (ion giống nguyên tử H) là năng lượng cần thiết để bứt electron còn lại của nó từ trạng thái cơ bản ra khỏi nguyên tử. Năng lượng ion hóa của một mol $\\mathrm{X^{n+}}$ có giá trị là $1{,}181\\cdot10^4$ kJ/mol.\n\na) Hãy xác định nguyên tố X.\n\nb) Hãy xác định bước sóng (Å) của bức xạ trong trường hợp electron của ion $\\mathrm{X^{n+}}$ trên chuyển từ trạng thái $n = 5$ về $n = 2$.\n\nCho $h = 6{,}625\\cdot10^{-34}$ J.s; $c = 3\\cdot10^8$ m/s; 1 eV = $1{,}602\\cdot10^{-19}$ J; $N_A = 6{,}023\\cdot10^{23}$.\n\n**Câu hỏi:** Ion hóa là mũi tên nào trên thang?",
    "explanation": "Bứt electron từ trạng thái cơ bản: từ $n = 1$ lên $n = \\infty$ ($E_\\infty = 0$), nên $I = 13{,}6Z^2$ eV cho một ion.\n\n**Lời giải đầy đủ:**\n\na) $I = 1312Z^2$ kJ/mol → $Z^2 = 11\\,810/1312 = 9$ → $Z = 3$, X là Li (ion Li²⁺).\n\nb) $\\Delta E = 13{,}6 \\times 9 \\times (1/4 - 1/25) = 25{,}70$ eV $= 4{,}118\\cdot10^{-18}$ J; $\\lambda = hc/\\Delta E = 4{,}83\\cdot10^{-8}$ m $\\approx 483$ Å.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C1 (HK2 2023–2024), lặp lại ở ĐT27 C1. Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Mũi tên đi xuống: phát xạ"
      },
      {
        "id": "option-2",
        "label": "Mũi tên đi lên: hấp thụ"
      },
      {
        "id": "option-3",
        "label": "Mũi tên từ n = 1 lên ∞: ion hóa"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c1-draw-003",
    "lessonId": "gc-atom-drawing-guide",
    "title": "Đề ĐT24 C1: nguyên tố nào có I = 4,729·10⁴ kJ/mol?",
    "prompt": "Năng lượng ion hóa là năng lượng cần thiết để bứt electron ra khỏi nguyên tử ở trạng thái khí. Năng lượng ion hóa 1 electron từ trạng thái cơ bản của 1 mol nguyên tố hóa học X là $4{,}729\\cdot10^4$ kJ/mol. Hãy xác định nguyên tố hóa học X.\n\n**Câu hỏi:** X là nguyên tố nào (ion một electron tương ứng)?",
    "explanation": "Z = 6 là cacbon. Ion chỉ còn một electron là C⁵⁺.\n\n**Lời giải đầy đủ:**\n\nIon hóa từ $n = 1$ lên $\\infty$: $I = 1312Z^2$ kJ/mol → $Z^2 = 47\\,290/1312 = 36$ → $Z = 6$: cacbon (ion C⁵⁺).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C1 (HK1 2019–2020). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cacbon, ion C⁵⁺"
      },
      {
        "id": "option-2",
        "label": "Nitơ, ion N⁶⁺"
      },
      {
        "id": "option-3",
        "label": "Liti, ion Li²⁺"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c1-draw-004",
    "lessonId": "gc-atom-drawing-guide",
    "title": "Đề ĐT23 C1: số photon để có 2 J",
    "prompt": "Hãy tính số lượng photon ánh sáng cần thiết để tạo ra năng lượng là 2 J. Biết bước sóng của ánh sáng đã cho là 4000 Å. Cho $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^8$ m/s.\n\n**Câu hỏi:** Đổi bước sóng ra mét:\n\n*(Nhập giá trị số theo đơn vị m)*",
    "explanation": "4000 Å $= 4000 \\times 10^{-10} = 4\\cdot10^{-7}$ m.\n\n**Lời giải đầy đủ:**\n\nλ = 4·10⁻⁷ m; $\\varepsilon = hc/\\lambda = 4{,}97\\cdot10^{-19}$ J; $N = 2/\\varepsilon \\approx 4{,}0\\cdot10^{18}$ photon.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C1 (HK1 2022–2023, Ca 2). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "short-answer",
    "answers": [
      "4e-7"
    ]
  },
  {
    "id": "gc-c1-draw-005",
    "lessonId": "gc-atom-drawing-guide",
    "title": "Tìm lỗi: vạch Balmer 3 → 2 của H (đề ĐT26 C1)",
    "prompt": "Đề ĐT26 C1: *Trong dãy Balmer của quang phổ phát xạ của nguyên tử hidro, hãy xác định năng lượng (theo jun) và bước sóng (theo nm) của photon ứng với bước nhảy điện tử từ mức n = 3 về n = 2.*\n\nMột sinh viên làm như sau:\n\n> $\\Delta E = 13{,}6\\left(\\dfrac14 - \\dfrac19\\right) = 1{,}889$; $\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6{,}625\\cdot10^{-34} \\times 3\\cdot10^8}{1{,}889} = 1{,}05\\cdot10^{-25}$ m.\n\nHãy tìm lỗi và sửa lại. Cho 1 eV = $1{,}6\\cdot10^{-19}$ J.\n\n**Câu hỏi:** Lỗi của sinh viên là gì?",
    "explanation": "ΔE = 1,889 là theo **eV**. Công thức $\\lambda = hc/\\Delta E$ cần ΔE theo J. H có $Z = 1$ nên không cần nhân thêm.\n\n**Lời giải đầy đủ:**\n\nLỗi: thế ΔE theo eV vào $\\lambda = hc/\\Delta E$. Sửa: $\\Delta E = 1{,}889$ eV $= 3{,}02\\cdot10^{-19}$ J; $\\lambda = hc/\\Delta E \\approx 6{,}57\\cdot10^{-7}$ m ≈ 656–657 nm (vạch đỏ của dãy Balmer).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-1/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C1 (HK1 2024–2025), dạng bài tìm lỗi. Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Quên nhân $Z^2$"
      },
      {
        "id": "option-2",
        "label": "Thế ΔE theo eV vào $hc/\\lambda$ (chưa đổi ra J)"
      },
      {
        "id": "option-3",
        "label": "Đảo mức đầu và mức cuối"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-bond-001",
    "lessonId": "gc-bond-concepts",
    "title": "Bậc liên kết, năng lượng và độ dài liên kết C–C",
    "prompt": "Bảng số liệu (bài giảng trang 4):\n\n| Liên kết | C–C | C=C | C≡C |\n|---|---|---|---|\n| E (kcal/mol) | 83 | 143 | 194 |\n| d (Å) | 1,54 | 1,34 | 1,20 |\n\na) Nhận xét quan hệ giữa bậc liên kết với năng lượng và độ dài liên kết.\n\nb) Năng lượng liên kết π trong C=C xấp xỉ bao nhiêu kcal/mol?\n\n**Câu hỏi:** Khi bậc liên kết tăng (đơn → đôi → ba):",
    "explanation": "Bảng cho thấy E: 83 → 143 → 194 kcal/mol và d: 1,54 → 1,34 → 1,20 Å.\n\n**Lời giải đầy đủ:**\n\na) Bậc liên kết tăng → **năng lượng liên kết tăng**, **độ dài liên kết giảm**.\n\nb) Liên kết đôi C=C gồm 1σ + 1π. Coi năng lượng σ gần bằng liên kết đơn C–C:\n\n$$E_\\pi \\approx E_{C=C} - E_{C-C} = 143 - 83 = 60\\ \\text{kcal/mol}$$\n\nLiên kết π kém bền hơn liên kết σ (xen phủ bên nhỏ hơn xen phủ trục) — đó là lý do liên kết π dễ bị phá vỡ trong phản ứng cộng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/bond-concepts.json",
      "rights": "approved",
      "attribution": "Số liệu từ bảng trang 4; câu b là phần mở rộng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Năng lượng liên kết tăng, độ dài liên kết giảm"
      },
      {
        "id": "option-2",
        "label": "Năng lượng giảm, độ dài tăng"
      },
      {
        "id": "option-3",
        "label": "Cả hai cùng tăng"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-bond-002",
    "lessonId": "gc-bond-concepts",
    "title": "Năng lượng liên kết C–H từ nhiệt nguyên tử hóa CH₄",
    "prompt": "Theo bài giảng (trang 2), với $\\mathrm{CH_4(k) \\xrightarrow{Q} C(k) + 4H(k)}$ thì $E_{C-H} = \\dfrac{1}{4}Q$.\n\nBiết nhiệt nguyên tử hóa của metan $Q = 1662$ kJ/mol. Tính năng lượng liên kết C–H trung bình.\n\n**Câu hỏi:** Vì sao chia Q cho 4?",
    "explanation": "Nguyên tử hóa CH₄ phá vỡ đồng thời 4 liên kết C–H; năng lượng trung bình mỗi liên kết = Q/4.\n\n**Lời giải đầy đủ:**\n\nQuá trình nguyên tử hóa phá vỡ 4 liên kết C–H:\n\n$$E_{C-H} = \\frac{Q}{4} = \\frac{1662}{4} = 415{,}5\\ \\text{kJ/mol}$$\n\n(Bài giảng quy ước năng lượng liên kết là năng lượng **giải phóng** khi tạo liên kết, nên có thể viết $E_{C-H} = -415{,}5$ kJ/mol, tương tự $E_{H-H} = -414{,}4$ kJ/mol ở trang 2.)",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/bond-concepts.json",
      "rights": "approved",
      "attribution": "Công thức từ trang 2; giá trị Q = 1662 kJ/mol là số liệu bổ sung."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Phân tử CH₄ có 4 liên kết C–H tương đương bị phá vỡ"
      },
      {
        "id": "option-2",
        "label": "Có 4 nguyên tử trong CH₄"
      },
      {
        "id": "option-3",
        "label": "C có 4 electron lớp ngoài"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-ionic-001",
    "lessonId": "gc-ionic-bond",
    "title": "Năng lượng mạng lưới và nhiệt độ nóng chảy của muối natri halogenua",
    "prompt": "Bảng số liệu (bài giảng trang 8):\n\n| Tinh thể | NaF | NaCl | NaBr | NaI |\n|---|---|---|---|---|\n| $U_{ml}$ (kcal/mol) | 217 | 183 | 176 | 164 |\n| t° sôi (°C) | 1695 | 1441 | 1393 | 1300 |\n| t° nóng chảy (°C) | 993 | 801 | 766 | 665 |\n\nNhận xét và giải thích xu hướng biến đổi.\n\n**Câu hỏi:** Từ NaF đến NaI, năng lượng mạng lưới:",
    "explanation": "217 → 183 → 176 → 164 kcal/mol.\n\n**Lời giải đầy đủ:**\n\n- Từ NaF → NaI: năng lượng mạng lưới **giảm**, nhiệt độ sôi và nóng chảy cũng **giảm**.\n- Giải thích: các ion đều có điện tích ±1; bán kính anion tăng (F⁻ < Cl⁻ < Br⁻ < I⁻) nên khoảng cách giữa tâm các ion tăng, lực hút tĩnh điện giảm → mạng tinh thể kém bền → cần ít năng lượng hơn để nóng chảy, sôi.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/ionic-bond.json",
      "rights": "approved",
      "attribution": "Bảng số liệu trang 8 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Giảm dần"
      },
      {
        "id": "option-2",
        "label": "Tăng dần"
      },
      {
        "id": "option-3",
        "label": "Không đổi"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-ionic-002",
    "lessonId": "gc-ionic-bond",
    "title": "Sự hình thành MgCl₂",
    "prompt": "Mô tả sự hình thành liên kết trong $\\mathrm{MgCl_2}$ (Mg: $Z = 12$; Cl: $Z = 17$) theo thuyết Kossel.\n\n**Câu hỏi:** Vì sao tỉ lệ là 1 Mg : 2 Cl?",
    "explanation": "1 Mg nhường 2e cần 2 Cl, mỗi Cl nhận 1e.\n\n**Lời giải đầy đủ:**\n\n$$\\mathrm{Mg} \\to \\mathrm{Mg^{2+}} + 2e \\qquad 2\\,\\mathrm{Cl} + 2e \\to 2\\,\\mathrm{Cl^-}$$\n\nIon $\\mathrm{Mg^{2+}}$ (cấu hình Ne) và 2 ion $\\mathrm{Cl^-}$ (cấu hình Ar) hút nhau bằng lực tĩnh điện → $\\mathrm{MgCl_2}$. Tỉ lệ 1 : 2 đảm bảo số electron nhường bằng số electron nhận.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/ionic-bond.json",
      "rights": "approved",
      "attribution": "Biên soạn lại từ ví dụ MgCl₂ trang 7."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tổng số electron nhường = tổng số electron nhận (trung hòa điện)"
      },
      {
        "id": "option-2",
        "label": "Do khối lượng mol"
      },
      {
        "id": "option-3",
        "label": "Do Cl là khí"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-lewis-001",
    "lessonId": "gc-covalent-lewis",
    "title": "Công thức Lewis của CO₂",
    "prompt": "Xây dựng công thức Lewis của $\\mathrm{CO_2}$ (C là nguyên tử trung tâm).\n\n**Câu hỏi:** Công thức Lewis đúng:",
    "explanation": "O=C=O: mỗi nguyên tử đều đạt bát tử, điện tích hình thức bằng 0.\n\n**Lời giải đầy đủ:**\n\n1. Electron hóa trị: $4 + 2\\times6 = 16$.\n2. Khung O–C–O dùng 4 e; điền bát tử cho O: dùng hết 12 e còn lại → C chỉ có 4 e ⇒ chuyển cặp tự do của O thành liên kết đôi.\n3. Kết quả: $\\mathrm{O{=}C{=}O}$, mỗi O còn 2 cặp electron tự do; C và O đều đạt bát tử.\n\n> Quy trình viết công thức Lewis chi tiết là nội dung bổ sung (bài giảng nêu thuyết Lewis ở trang 9–10).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/covalent-lewis.json",
      "rights": "approved"
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "O=C=O, mỗi O có 2 cặp e tự do"
      },
      {
        "id": "option-2",
        "label": "O–C–O, mỗi O có 3 cặp e tự do"
      },
      {
        "id": "option-3",
        "label": "O≡C–O"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-lewis-002",
    "lessonId": "gc-covalent-lewis",
    "title": "Liên kết cho – nhận trong ion NH₄⁺",
    "prompt": "Trong ion amoni $\\mathrm{NH_4^+}$, cả 4 liên kết N–H đều giống nhau. Hãy giải thích sự hình thành ion từ $\\mathrm{NH_3}$ và $\\mathrm{H^+}$.\n\n**Câu hỏi:** Liên kết thứ tư N–H trong NH₄⁺ thuộc loại nào?",
    "explanation": "Cặp electron dùng chung chỉ do một nguyên tử (N) đóng góp → liên kết cho – nhận.\n\n**Lời giải đầy đủ:**\n\n$\\mathrm{NH_3}$ có một cặp electron tự do trên N; $\\mathrm{H^+}$ có orbital 1s trống. N cho cặp electron vào orbital trống của $\\mathrm{H^+}$ → **liên kết cho – nhận**:\n\n$$\\mathrm{H_3N{:} + H^+ \\to [H_3N{\\to}H]^+}$$\n\nSau khi hình thành, liên kết cho – nhận không khác các liên kết N–H còn lại → 4 liên kết tương đương (ion tứ diện).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/covalent-lewis.json",
      "rights": "approved",
      "attribution": "Dựa trên định nghĩa liên kết cho – nhận trang 10."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Liên kết cho – nhận (phối trí)"
      },
      {
        "id": "option-2",
        "label": "Liên kết ion"
      },
      {
        "id": "option-3",
        "label": "Liên kết cộng hóa trị không phân cực"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-lewis-003",
    "lessonId": "gc-covalent-lewis",
    "title": "Hạn chế của quy tắc bát tử",
    "prompt": "Bài giảng (trang 11) liệt kê các hạn chế của quy tắc bát tử. Trong các phân tử sau, phân tử nào **không** tuân theo quy tắc bát tử: $\\mathrm{PF_5}$, $\\mathrm{SF_6}$, $\\mathrm{CH_4}$, $\\mathrm{NO}$, $\\mathrm{H_2O}$?\n\n**Câu hỏi:** Chọn TẤT CẢ phân tử không tuân theo quy tắc bát tử.",
    "explanation": "PF₅ (P có 10 e), SF₆ (S có 12 e): vượt bát tử; NO có số lẻ electron (11 e hóa trị) nên không thể mọi nguyên tử đều đạt 8.\n\n**Lời giải đầy đủ:**\n\n- $\\mathrm{PF_5}$: P có 5 liên kết → 10 electron (vượt bát tử).\n- $\\mathrm{SF_6}$: S có 6 liên kết → 12 electron (vượt bát tử).\n- $\\mathrm{NO}$: tổng 11 electron hóa trị (số lẻ) → không thể tất cả các nguyên tử đều có 8 electron.\n- $\\mathrm{CH_4}$, $\\mathrm{H_2O}$: tuân theo quy tắc bát tử (H tuân theo quy tắc “bộ đôi”).\n\nNhững trường hợp này được giải thích bởi thuyết cơ học lượng tử (VB, MO).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/covalent-lewis.json",
      "rights": "approved",
      "attribution": "Các ví dụ PF₅, SF₆ và phân tử số lẻ electron ở trang 11."
    },
    "kind": "multiple-answer",
    "choices": [
      {
        "id": "option-1",
        "label": "PF₅"
      },
      {
        "id": "option-2",
        "label": "SF₆"
      },
      {
        "id": "option-3",
        "label": "CH₄"
      },
      {
        "id": "option-4",
        "label": "NO"
      },
      {
        "id": "option-5",
        "label": "H₂O"
      }
    ],
    "answers": [
      "option-1",
      "option-2",
      "option-4"
    ]
  },
  {
    "id": "gc-c2-vb-001",
    "lessonId": "gc-vb-theory",
    "title": "Đếm liên kết σ và π",
    "prompt": "Xác định số liên kết σ và π trong các phân tử: $\\mathrm{C_2H_4}$ (etilen), $\\mathrm{C_2H_2}$ (axetilen), $\\mathrm{HCN}$.\n\n**Câu hỏi:** Một liên kết ba gồm:",
    "explanation": "Giữa hai nguyên tử chỉ có một liên kết σ (xen phủ trục); các liên kết còn lại là π (xen phủ bên).\n\n**Lời giải đầy đủ:**\n\n| Phân tử | Cấu tạo | σ | π |\n|---|---|---|---|\n| $\\mathrm{C_2H_4}$ | $\\mathrm{H_2C{=}CH_2}$ | 5 | 1 |\n| $\\mathrm{C_2H_2}$ | $\\mathrm{HC{\\equiv}CH}$ | 3 | 2 |\n| $\\mathrm{HCN}$ | $\\mathrm{H{-}C{\\equiv}N}$ | 2 | 2 |\n\nQuy tắc: liên kết đơn = 1σ; liên kết đôi = 1σ + 1π; liên kết ba = 1σ + 2π.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/vb-theory.json",
      "rights": "approved",
      "attribution": "Bổ sung, dựa trên phân loại σ/π trang 15–16."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "1σ + 2π"
      },
      {
        "id": "option-2",
        "label": "3σ"
      },
      {
        "id": "option-3",
        "label": "2σ + 1π"
      },
      {
        "id": "option-4",
        "label": "3π"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-vb-002",
    "lessonId": "gc-vb-theory",
    "title": "Thuyết VB và góc liên kết",
    "prompt": "Theo thuyết VB thuần túy (không lai hóa), liên kết trong $\\mathrm{H_2S}$ và $\\mathrm{H_2O}$ tạo bởi xen phủ AO 1s của H với hai AO p của S hoặc O. Bài giảng (trang 17) cho góc liên kết thực tế: $\\mathrm{H_2S}$ 92°, $\\mathrm{H_2O}$ 105,5°, $\\mathrm{NH_3}$ 107,3°, $\\mathrm{CH_4}$ 109,5°.\n\na) Thuyết VB thuần túy dự đoán góc HXH bằng bao nhiêu?\n\nb) Phân tử nào phù hợp nhất với dự đoán đó? Phân tử nào cần đến thuyết lai hóa?\n\n**Câu hỏi:** Phân tử có góc gần dự đoán nhất:",
    "explanation": "92° gần 90° nhất.\n\n**Lời giải đầy đủ:**\n\na) Hai AO p vuông góc nên thuyết VB thuần túy dự đoán góc **90°**.\n\nb) $\\mathrm{H_2S}$ (92°) gần đúng với dự đoán. $\\mathrm{H_2O}$, $\\mathrm{NH_3}$, $\\mathrm{CH_4}$ có góc gần 109,5° và CH₄ có 4 liên kết tương đương — thuyết VB thuần túy không giải thích được → cần **thuyết lai hóa** (sp³).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/vb-theory.json",
      "rights": "approved",
      "attribution": "Số liệu góc liên kết trang 17."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "H₂S (92°)"
      },
      {
        "id": "option-2",
        "label": "H₂O (105,5°)"
      },
      {
        "id": "option-3",
        "label": "CH₄ (109,5°)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-hyb-001",
    "lessonId": "gc-hybridization",
    "title": "Dự đoán trạng thái lai hóa bằng số T",
    "prompt": "Dùng $T = $ số nguyên tử liên kết + số cặp electron tự do (bài giảng trang 23), xác định trạng thái lai hóa của nguyên tử trung tâm trong: $\\mathrm{C_2H_6}$ (C), $\\mathrm{H_2O}$ (O), $\\mathrm{C_2H_2}$ (C), $\\mathrm{NH_3}$ (N).\n\n**Câu hỏi:** Trạng thái lai hóa của O trong H₂O?",
    "explanation": "T = 4 → sp³ (góc thực tế 104,5–105,5° do cặp e tự do đẩy mạnh).\n\n**Lời giải đầy đủ:**\n\n| Phân tử | Nguyên tử trung tâm | Nguyên tử liên kết | Cặp e tự do | T | Lai hóa |\n|---|---|---|---|---|---|\n| $\\mathrm{C_2H_6}$ | C | 4 | 0 | 4 | sp³ |\n| $\\mathrm{H_2O}$ | O | 2 | 2 | 4 | sp³ |\n| $\\mathrm{C_2H_2}$ | C | 2 | 0 | 2 | sp |\n| $\\mathrm{NH_3}$ | N | 3 | 1 | 4 | sp³ |",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/hybridization.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 23 bài giảng (không có lời giải); lời giải do website biên soạn."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "sp"
      },
      {
        "id": "option-2",
        "label": "sp²"
      },
      {
        "id": "option-3",
        "label": "sp³"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c2-hyb-002",
    "lessonId": "gc-hybridization",
    "title": "BF₃ và NH₃: cùng dạng AB₃ nhưng khác hình học",
    "prompt": "$\\mathrm{BF_3}$ và $\\mathrm{NH_3}$ đều có dạng $\\mathrm{AB_3}$. Dùng bảng trang 22 của bài giảng, giải thích vì sao $\\mathrm{BF_3}$ phẳng còn $\\mathrm{NH_3}$ có dạng tháp.\n\n**Câu hỏi:** Trạng thái lai hóa và hình học của BF₃?",
    "explanation": "T = 3 + 0 = 3 → sp², tam giác phẳng.\n\n**Lời giải đầy đủ:**\n\n- $\\mathrm{BF_3}$: B có 3 liên kết, 0 cặp tự do → $T = 3$ → **sp²** → **tam giác phẳng**, góc 120°.\n- $\\mathrm{NH_3}$: N có 3 liên kết, 1 cặp tự do → $T = 4$ → **sp³**; cặp tự do chiếm một đỉnh của tứ diện nên khung nguyên tử có dạng **tháp tam giác** (góc ~107°).\n\nKhác biệt nằm ở cặp electron tự do của nguyên tử trung tâm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/hybridization.json",
      "rights": "approved",
      "attribution": "Dựa trên bảng dạng lai hóa – hình học trang 22."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "sp², tam giác phẳng 120°"
      },
      {
        "id": "option-2",
        "label": "sp³, tháp tam giác"
      },
      {
        "id": "option-3",
        "label": "sp, thẳng"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-geo-001",
    "lessonId": "gc-molecular-geometry",
    "title": "Hình học phân tử SO₂",
    "prompt": "Dự đoán trạng thái lai hóa của S và hình học phân tử $\\mathrm{SO_2}$ (S trung tâm, có một cặp electron tự do).\n\n**Câu hỏi:** Trạng thái lai hóa của S?",
    "explanation": "T = 3 → sp².\n\n**Lời giải đầy đủ:**\n\nS: 2 nguyên tử liên kết + 1 cặp electron tự do → $T = 3$ → lai hóa **sp²**. Ba vùng electron phân bố tam giác phẳng, nhưng một vùng là cặp tự do nên phân tử có dạng **chữ V** (bài giảng xếp $\\mathrm{SO_2}$ vào loại $\\mathrm{AB_2}$ chữ V của lai hóa sp²).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/molecular-geometry.json",
      "rights": "approved",
      "attribution": "SO₂ được nêu trong bảng trang 22."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "sp"
      },
      {
        "id": "option-2",
        "label": "sp²"
      },
      {
        "id": "option-3",
        "label": "sp³"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-pol-001",
    "lessonId": "gc-molecular-geometry",
    "title": "Phân tử phân cực hay không phân cực?",
    "prompt": "Trong các phân tử: $\\mathrm{CO_2}$, $\\mathrm{H_2O}$, $\\mathrm{BF_3}$, $\\mathrm{NH_3}$, $\\mathrm{CH_4}$ — phân tử nào phân cực?\n\n**Câu hỏi:** Phân tử CO₂ có liên kết C=O phân cực. Phân tử CO₂ có phân cực không?",
    "explanation": "Hình học đối xứng (thẳng 180°) làm tổng moment lưỡng cực bằng 0.\n\n**Lời giải đầy đủ:**\n\nPhân tử phân cực khi **tổng vectơ moment lưỡng cực ≠ 0**, phụ thuộc vào cả độ phân cực liên kết và hình học:\n\n| Phân tử | Hình học | Phân cực? |\n|---|---|---|\n| $\\mathrm{CO_2}$ | thẳng | không |\n| $\\mathrm{H_2O}$ | chữ V | **có** |\n| $\\mathrm{BF_3}$ | tam giác phẳng | không |\n| $\\mathrm{NH_3}$ | tháp tam giác | **có** |\n| $\\mathrm{CH_4}$ | tứ diện đều | không |",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/molecular-geometry.json",
      "rights": "approved",
      "attribution": "Nội dung độ phân cực phân tử là bổ sung (video Polarity)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Không — phân tử thẳng, hai moment lưỡng cực triệt tiêu"
      },
      {
        "id": "option-2",
        "label": "Có — vì liên kết phân cực"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-mo-001",
    "lessonId": "gc-mo-theory",
    "title": "H₂⁺, H₂⁻, He₂⁺, He₂ có tồn tại không?",
    "prompt": "Bài giảng (trang 30–32) vẽ giản đồ MO của $\\mathrm{H_2}$, $\\mathrm{H_2^+}$, $\\mathrm{H_2^-}$, $\\mathrm{He_2^+}$, $\\mathrm{He_2}$. Tính bậc liên kết và cho biết tiểu phân nào tồn tại.\n\n**Câu hỏi:** Công thức bậc liên kết theo thuyết MO:",
    "explanation": "$N$ = (số e trên MO liên kết − số e trên MO phản liên kết)/2.\n\n**Lời giải đầy đủ:**\n\n| Tiểu phân | Số e | Cấu hình MO | N | Tồn tại? | Từ tính |\n|---|---|---|---|---|---|\n| $\\mathrm{H_2}$ | 2 | $(\\sigma_{1s})^2$ | 1 | có | nghịch từ |\n| $\\mathrm{H_2^+}$ | 1 | $(\\sigma_{1s})^1$ | 0,5 | có | thuận từ |\n| $\\mathrm{H_2^-}$ | 3 | $(\\sigma_{1s})^2(\\sigma^*_{1s})^1$ | 0,5 | có | thuận từ |\n| $\\mathrm{He_2^+}$ | 3 | $(\\sigma_{1s})^2(\\sigma^*_{1s})^1$ | 0,5 | có | thuận từ |\n| $\\mathrm{He_2}$ | 4 | $(\\sigma_{1s})^2(\\sigma^*_{1s})^2$ | 0 | **không** | — |\n\nThuyết MO giải thích được sự tồn tại của các tiểu phân có số lẻ electron ($\\mathrm{H_2^+}$, $\\mathrm{He_2^+}$) — điều mà quy tắc bát tử không làm được.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/mo-theory.json",
      "rights": "approved",
      "attribution": "Giản đồ MO trang 30–32 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$N = \\dfrac{n_\\text{lk} - n_\\text{plk}}{2}$"
      },
      {
        "id": "option-2",
        "label": "$N = n_\\text{lk} + n_\\text{plk}$"
      },
      {
        "id": "option-3",
        "label": "$N = \\dfrac{n_\\text{lk}}{n_\\text{plk}}$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-001",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT01 C1: MO của F2, F2-, F2+",
    "prompt": "Theo thuyết MO, hãy:\n\n\n\n-  Vẽ giản đồ năng lượng của phân tử $\\mathrm{F_{2}}$.\n\n\n-  Viết cấu hình electron của các phân tử và ion phân tử: $\\mathrm{F_{2}}$; $\\mathrm{F_{2}-}$; $\\mathrm{F_{2}+}$. So sánh độ bền của các phân tử và ion phân tử trên. Biết F ($Z = 9$).\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho F2 và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| F2 | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n| F2- | 15 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4} {\\sigma^*_{2p}}^{1}$ | 8 | 7 | 0,5 | 1 | thuận từ |\n| F2+ | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền F2+ > F2 > F2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C1 (HK1 2010–2011); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-002",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT03 C1: MO của F2, F2+",
    "prompt": "-  Bằng phương pháp MO-LCAO, vẽ giản đồ năng lượng và viết cấu hình electron của các phân tử và ion phân tử: $\\mathrm{F_{2}}$, $\\mathrm{F_{2}+}$.\n\n\n-  Xác định từ tính của phân tử và ion phân tử trên. So sánh độ bền của $\\mathrm{F_{2}+}$ và $\\mathrm{F_{2}}$. Biết F ($Z = 9$).\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho F2 và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| F2 | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n| F2+ | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền F2+ > F2. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT03 C1 (HK1 2012–2013); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-003",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT04 C2: MO của O2+, O2, O2-",
    "prompt": "Hãy xây dựng giản đồ MO của ion phân tử $\\mathrm{O_{2}+}$. Chỉ ra cấu hình electron, bậc liên kết, từ tính của ion phân tử trên. Dựa vào giản đồ MO của ion phân tử $\\mathrm{O_{2}+}$, hãy so sánh độ bền của các ion $\\mathrm{O_{2}-}$, $\\mathrm{O_{2}}$, $\\mathrm{O_{2}+}$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho O2+ và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| O2+ | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n| O2 | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n| O2- | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền O2+ > O2 > O2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C2 (HK1 2013–2014, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-004",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT05 C2: MO của N2+",
    "prompt": "Hãy xây dựng giản đồ MO của ion phân tử $\\mathrm{N_{2}+}$, chỉ rõ cấu hình electron, bậc liên kết, từ tính của ion phân tử trên.\n\nDữ kiện và quy ước: $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\n**Câu hỏi:** Chọn giản đồ MO cho N2+ và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| N2+ | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền N2+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C2 (HK2 2013–2014, 1 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-005",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT07 C2: MO của F2-, F2, F2+",
    "prompt": "Hãy xây dựng giản đồ MO và viết cấu hình electron của ion phân tử $\\mathrm{F_{2}-}$. Hãy tính bậc liên kết của các ion phân tử $\\mathrm{F_{2}}$, $\\mathrm{F_{2}-}$, $\\mathrm{F_{2}+}$ và cho biết chúng là thuận từ hay nghịch từ.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\n**Câu hỏi:** Chọn giản đồ MO cho F2- và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| F2- | 15 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4} {\\sigma^*_{2p}}^{1}$ | 8 | 7 | 0,5 | 1 | thuận từ |\n| F2 | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n| F2+ | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền F2+ > F2 > F2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C2 (HK1 2015–2016, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-006",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT09 C2: MO của O2-, O2, O2+",
    "prompt": "Viết cấu hình electron (theo thuyết MO) của ion phân tử $\\mathrm{O_{2}-}$. Tính bậc liên kết của các ion và phân tử $\\mathrm{O_{2}}$, $\\mathrm{O_{2}-}$, $\\mathrm{O_{2}+}$ và cho biết chúng là thuận từ hay nghịch từ.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\cdot10^{-19}$ J; $T$(K) = $t$(°C) + 273.\n\n**Câu hỏi:** Chọn giản đồ MO cho O2- và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| O2- | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n| O2 | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n| O2+ | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền O2+ > O2 > O2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C2 (HK2 2015–2016, 2 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-007",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT10 C2: MO của N2+, N2, N2-",
    "prompt": "Hãy xây dựng giản đồ MO và viết cấu hình electron của ion phân tử $\\mathrm{N_{2}+}$. Hãy tính bậc liên kết của các ion phân tử $\\mathrm{N_{2}}$, $\\mathrm{N_{2}-}$, $\\mathrm{N_{2}+}$ và cho biết chúng là thuận từ hay nghịch từ.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\n**Câu hỏi:** Chọn giản đồ MO cho N2+ và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| N2+ | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n| N2 | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| N2- | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền N2 > N2+ ≈ N2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C2 (HK1 2016–2017, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-008",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT12 C2: MO của O2+, O2, O2-",
    "prompt": "Hãy xây dựng giản đồ MO (orbitan phân tử) và viết cấu hình electron của ion phân tử $\\mathrm{O_{2}+}$. Dựa vào giản đồ MO của $\\mathrm{O_{2}+}$ hãy cho biết từ tính của các ion phân tử $\\mathrm{O_{2}}$, $\\mathrm{O_{2}-}$, $\\mathrm{O_{2}+}$ và cho biết ion nào có độ dài liên kết ngắn nhất.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\n**Câu hỏi:** Chọn giản đồ MO cho O2+ và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| O2+ | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n| O2 | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n| O2- | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền O2+ > O2 > O2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C2 (HK1 2017–2018, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-009",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT20 C2: MO của F2, F2-, F2+, F2^2-",
    "prompt": "Hãy xây dựng giản đồ MO (orbital phân tử) và viết cấu hình electron của phân tử $\\mathrm{F_{2}}$. Cho biết khoảng cách giữa các nguyên tử trong ion phân tử $\\mathrm{F_{2}-}$, $\\mathrm{F_{2}+}$ thay đổi như thế nào so với $\\mathrm{F_{2}}$? Cho biết có tồn tại ion $\\mathrm{F_{2}^{2-}}$ không? Vì sao?\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho F2 và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| F2 | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n| F2- | 15 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4} {\\sigma^*_{2p}}^{1}$ | 8 | 7 | 0,5 | 1 | thuận từ |\n| F2+ | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n| F2^2- | 16 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4} {\\sigma^*_{2p}}^{2}$ | 8 | 8 | 0 | 0 | nghịch từ |\n\nTheo BO trong mô hình đề: độ bền F2+ > F2 > F2- > F2^2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau. F₂²⁻ có BO = 0, không có liên kết bền theo mô hình MO đang dùng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C2 (Đề tổng hợp 10, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-010",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT21 C2: MO của N2, N2-, N2+",
    "prompt": "Áp dụng lý thuyết Orbital Phân tử:\n\n\n\n-  Hãy vẽ giản đồ orbital phân tử của $\\mathrm{N_{2}}$ ($Z = 7$).\n\n\n-  Hãy viết cấu hình điện tử của dãy phân tử, ion gồm $\\mathrm{N_{2}}$, $\\mathrm{N_{2}-}$, $\\mathrm{N_{2}+}$ và cho biết tính chất từ cũng như so sánh độ bền của chúng.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho N2 và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. \n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| N2 | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| N2- | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n| N2+ | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền N2 > N2- ≈ N2+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C2 (Đề tổng hợp 11, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-011",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT11 C2: MO của OF^2-, OF-, OF+",
    "prompt": "Xây dựng giản đồ MO và viết cấu hình electron của ion phân tử $\\mathrm{OF^{2-}}$. Tính bậc liên kết của các ion phân tử $\\mathrm{OF^{2-}}$, $\\mathrm{OF^{-}}$, $\\mathrm{OF^{+}}$ và cho biết chúng là thuận từ hay nghịch từ.\n\nLưu ý: Xét ion hai nguyên tử $\\mathrm{OF^{2-}}$ (không phải phân tử $\\mathrm{OF_{2}}$).\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\n**Câu hỏi:** Chọn giản đồ MO cho OF^2- và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| OF^2- | 15 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4} {\\sigma^*_{2p}}^{1}$ | 8 | 7 | 0,5 | 1 | thuận từ |\n| OF- | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n| OF+ | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền OF+ > OF- > OF^2-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C2 (HK2 2016–2017, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-012",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT14 C2: MO của FO+, FO, FO-",
    "prompt": "Hãy xây dựng giản đồ MO (orbitan phân tử) và viết cấu hình electron của ion phân tử $\\mathrm{FO^{+}}$. Dựa vào giản đồ MO của $\\mathrm{FO^{+}}$ hãy cho biết từ tính của các ion phân tử $\\mathrm{FO^{-}}$, FO, $\\mathrm{FO^{+}}$ và cho biết chất nào bền nhất.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho FO+ và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| FO+ | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n| FO | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n| FO- | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n\nTheo BO trong mô hình đề: độ bền FO+ > FO > FO-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C2 (Đề tổng hợp 3, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-013",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT15 C1: MO của CN-, CN, CN^2+",
    "prompt": "Sử dụng thuyết MO, hãy xây dựng giản đồ năng lượng của anion $\\mathrm{CN^{-}}$. Viết cấu hình electron, xác định số liên kết và cho biết ion trên có từ tính hay không? Dựa vào giản đồ MO của ion $\\mathrm{CN^{-}}$, hãy sắp xếp năng lượng liên kết theo trật tự tăng dần của các ion hay phân tử: $\\mathrm{CN^{-}}$, CN, $\\mathrm{CN^{2+}}$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho CN- và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| CN- | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| CN | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n| CN^2+ | 7 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{3}$ | 5 | 2 | 1,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền CN- > CN > CN^2+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C1 (Đề tổng hợp 5, 1,75 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-014",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT16 C2: MO của NO, NO-, NO+, NO^2+",
    "prompt": "Vẽ giản đồ obitan phân tử MO của phân tử NO. Viết cấu hình electron, tính bậc liên kết, cho biết tính thuận từ, nghịch từ của NO, $\\mathrm{NO^{-}}$, $\\mathrm{NO^{+}}$ và $\\mathrm{NO^{2+}}$, và so sánh độ bền liên kết của chúng.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho NO và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| NO | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n| NO- | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n| NO+ | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| NO^2+ | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền NO+ > NO ≈ NO^2+ > NO-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C2 (Đề tổng hợp 6, 2 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-015",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT17 C2: MO của NO, NO+, NO-",
    "prompt": "Vẽ giản đồ orbital phân tử (MO) và viết cấu hình electron của NO. Viết cấu hình electron, tính bậc liên kết của NO, $\\mathrm{NO^{+}}$, $\\mathrm{NO^{-}}$, từ tính và so sánh độ bền và độ dài liên kết của chúng.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho NO và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| NO | 11 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2} {\\pi^*_{2p}}^{1}$ | 8 | 3 | 2,5 | 1 | thuận từ |\n| NO+ | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| NO- | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền NO+ > NO > NO-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C2 (Đề tổng hợp 7, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-016",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT18 C2: MO của FO, FO-, FO+",
    "prompt": "Áp dụng lý thuyết orbital phân tử (MO), hãy viết cấu hình electron, so sánh độ bền liên kết và cho biết tính chất từ của các cấu tử FO, $\\mathrm{FO^{-}}$, $\\mathrm{FO^{+}}$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho FO và các ion cùng dãy.",
    "explanation": "O₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\n**Lời giải đầy đủ:**\n\nO₂, F₂, OF (FO) và các ion của chúng giữ giản đồ loại I; σ2p thấp hơn π2p.\n\nTừ dưới lên, vẽ σ2s, σ*2s, σ2p, hai vạch π2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| FO | 13 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{3}$ | 8 | 5 | 1,5 | 1 | thuận từ |\n| FO- | 14 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{4}$ | 8 | 6 | 1 | 0 | nghịch từ |\n| FO+ | 12 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\sigma_{2p}}^{2} {\\pi_{2p}}^{4} {\\pi^*_{2p}}^{2}$ | 8 | 4 | 2 | 2 | thuận từ |\n\nTheo BO trong mô hình đề: độ bền FO+ > FO > FO-. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C2 (Đề tổng hợp 8, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-exam-017",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT19 C2: MO của CO+, CO, CO^2+",
    "prompt": "Sử dụng thuyết MO, hãy xây dựng giản đồ năng lượng của ion $\\mathrm{CO^{+}}$. Viết cấu hình electron, xác định số liên kết và cho biết ion trên có từ tính hay không? Dựa vào giản đồ MO của ion $\\mathrm{CO^{+}}$, hãy sắp xếp năng lượng liên kết theo trật tự tăng dần của các ion hay phân tử: $\\mathrm{CO^{+}}$, CO, $\\mathrm{CO^{2+}}$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho CO+ và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| CO+ | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n| CO | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| CO^2+ | 8 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4}$ | 6 | 2 | 2 | 0 | nghịch từ |\n\nTheo BO trong mô hình đề: độ bền CO > CO+ > CO^2+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C2 (Đề tổng hợp 9, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-018",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT22 C2: MO của CN, CN+, CN-",
    "prompt": "Hãy xây dựng giản đồ MO của phân tử CN. Dựa vào giản đồ MO của CN hãy viết cấu hình electron, cho biết từ tính và so sánh độ bền liên kết của phân tử và ion phân tử CN, $\\mathrm{CN^{+}}$, $\\mathrm{CN^{-}}$.\n\nDữ kiện và quy ước: Không có dữ kiện chung riêng cho đề này; dùng $h = 6{,}626\\cdot10^{-34}$ J.s, $c = 3\\cdot10^8$ m/s, $N_A = 6{,}022\\cdot10^{23}$ mol$^{-1}$ và 1 eV $= 1{,}6\\cdot10^{-19}$ J theo quy ước Phụ lục A.\n\n**Câu hỏi:** Chọn giản đồ MO cho CN và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| CN | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n| CN+ | 8 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4}$ | 6 | 2 | 2 | 0 | nghịch từ |\n| CN- | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n\nTheo BO trong mô hình đề: độ bền CN- > CN > CN+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C2 (Đề tổng hợp 12, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-019",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT24 C2: MO của CN-, CN, CN+",
    "prompt": "Hãy xây dựng giản đồ MO (orbitan phân tử) và viết cấu hình electron của ion phân tử $\\mathrm{CN^{-}}$. Dựa vào giản đồ MO của $\\mathrm{CN^{-}}$ hãy cho biết từ tính của các ion phân tử $\\mathrm{CN^{-}}$, CN, $\\mathrm{CN^{+}}$ và cho biết chất nào bền nhất.\n\nDữ kiện và quy ước: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3{,}0\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; $F = 96\\,500$ C/mol; 1 m = $10^9$ nm; 1 eV = $1{,}602\\cdot10^{-19}$ J; $N_A = 6{,}023\\cdot10^{23}$; có in bảng tuần hoàn.\n\n**Câu hỏi:** Chọn giản đồ MO cho CN- và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| CN- | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n| CN | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n| CN+ | 8 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4}$ | 6 | 2 | 2 | 0 | nghịch từ |\n\nTheo BO trong mô hình đề: độ bền CN- > CN > CN+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C2 (HK1 2019–2020, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-exam-020",
    "lessonId": "gc-mo-bond-order",
    "title": "Đề ĐT28 C2: MO của CN, CN+, CN-",
    "prompt": "-  Hãy vẽ giản đồ năng lượng MO của phân tử CN, viết cấu hình electron cho các phân tử, ion phân tử: CN, $\\mathrm{CN^{+}}$, $\\mathrm{CN^{-}}$.\n\n\n-  Tính số liên kết và nhận xét từ tính của các phân tử, ion phân tử trên.\n\nDữ kiện và quy ước: $c = 3\\cdot10^{8}$ m/s; $h = 6{,}625\\cdot10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\cdot10^{-19}$ J.\n\n**Câu hỏi:** Chọn giản đồ MO cho CN và các ion cùng dãy.",
    "explanation": "N₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\n**Lời giải đầy đủ:**\n\nN₂, CN, CO, NO và các ion của chúng giữ giản đồ loại II; π2p thấp hơn σ2p. Ion giữ giản đồ phân tử trung hòa, chỉ đổi số electron.\n\nTừ dưới lên, vẽ σ2s, σ*2s, hai vạch π2p, σ2p, hai vạch π*2p, σ*2p. Điền các mũi tên theo cấu hình trong bảng. Với phân tử dị hạch, AO của nguyên tử âm điện hơn đặt thấp hơn (O thấp hơn N trong NO, N thấp hơn C trong CN, O thấp hơn C trong CO, F thấp hơn O trong FO).\n\n| Tiểu phân | e hóa trị | Cấu hình MO hóa trị | Nlk | Nplk | BO | e độc thân | Từ tính |\n|---|---|---|---|---|---|---|---|\n| CN | 9 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{1}$ | 7 | 2 | 2,5 | 1 | thuận từ |\n| CN+ | 8 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4}$ | 6 | 2 | 2 | 0 | nghịch từ |\n| CN- | 10 | ${\\sigma_{2s}}^{2} {\\sigma^*_{2s}}^{2} {\\pi_{2p}}^{4} {\\sigma_{2p}}^{2}$ | 8 | 2 | 3 | 0 | nghịch từ |\n\nTheo BO trong mô hình đề: độ bền CN- > CN > CN+. BO càng lớn, liên kết thường càng ngắn; thứ tự độ dài ngược lại. Dấu ≈ ở đây chỉ có nghĩa cùng BO trong mô hình này, không khẳng định năng lượng liên kết thực nghiệm bằng nhau.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/exam-dang-2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C2 (Hè 2025–2026, 1,5 điểm); đối chiếu bảng 1.2 và tuyển tập bài tập."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Loại II: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-mo-002",
    "lessonId": "gc-mo-bond-order",
    "title": "Họ O₂: O₂, O₂⁺, O₂⁻, O₂²⁻",
    "prompt": "(Trích Bài 1, trang 41.) Viết cấu hình electron MO (electron hóa trị), tính bậc liên kết và xác định tính thuận từ/nghịch từ của $\\mathrm{O_2}$, $\\mathrm{O_2^+}$, $\\mathrm{O_2^-}$, $\\mathrm{O_2^{2-}}$. Sắp xếp theo độ bền liên kết giảm dần.\n\n**Câu hỏi:** O₂ thuộc nhóm nào trong giản đồ MO (trang 34–35)?",
    "explanation": "O₂, F₂, Ne₂: không có tương tác 2s–2p ⇒ thứ tự σ2s < σ*2s < σ2p < π2p < π*2p < σ*2p.\n\n**Lời giải đầy đủ:**\n\nThứ tự MO (O₂, F₂, Ne₂ — không tương tác 2s–2p): $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$.\n\n| Tiểu phân | e hóa trị | Cấu hình MO | Bậc liên kết | e độc thân | Từ tính |\n|---|---|---|---|---|---|\n| O₂ | 12 | $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^2$ | 2 | 2 | thuận từ |\n| O₂⁺ | 11 | $\\dots(\\pi_{2p})^4(\\pi^*_{2p})^1$ | 2,5 | 1 | thuận từ |\n| O₂⁻ | 13 | $\\dots(\\pi_{2p})^4(\\pi^*_{2p})^3$ | 1,5 | 1 | thuận từ |\n| O₂²⁻ | 14 | $\\dots(\\pi_{2p})^4(\\pi^*_{2p})^4$ | 1 | 0 | nghịch từ |\n\nĐộ bền liên kết (theo bậc liên kết): $\\mathrm{O_2^+ > O_2 > O_2^- > O_2^{2-}}$. Tính thuận từ của $\\mathrm{O_2}$ (dòng O₂ lỏng bị giữ lại trong từ trường — trang 39) là bằng chứng nổi bật ủng hộ thuyết MO.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/mo-theory.json",
      "rights": "approved",
      "attribution": "Bài 1 trang 41; giản đồ và bảng cấu hình trang 34–38."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Không có tương tác 2s–2p: σ2p thấp hơn π2p"
      },
      {
        "id": "option-2",
        "label": "Có tương tác 2s–2p: π2p thấp hơn σ2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-mo-003",
    "lessonId": "gc-mo-bond-order",
    "title": "Họ N₂: N₂, N₂⁺, N₂⁻",
    "prompt": "(Trích Bài 1, trang 41.) Viết cấu hình MO, tính bậc liên kết và xác định từ tính của $\\mathrm{N_2}$, $\\mathrm{N_2^+}$, $\\mathrm{N_2^-}$.\n\n**Câu hỏi:** Thứ tự MO dùng cho N₂ (có tương tác 2s–2p):",
    "explanation": "B₂, C₂, N₂: tương tác 2s–2p đẩy σ2p lên cao hơn π2p (trang 35, 36).\n\n**Lời giải đầy đủ:**\n\nThứ tự MO (B₂, C₂, N₂): $\\sigma_{2s} < \\sigma^*_{2s} < \\pi_{2p} < \\sigma_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$.\n\n| Tiểu phân | e hóa trị | Cấu hình MO | Bậc liên kết | e độc thân | Từ tính |\n|---|---|---|---|---|---|\n| N₂ | 10 | $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\pi_{2p})^4(\\sigma_{2p})^2$ | 3 | 0 | nghịch từ |\n| N₂⁺ | 9 | $\\dots(\\pi_{2p})^4(\\sigma_{2p})^1$ | 2,5 | 1 | thuận từ |\n| N₂⁻ | 11 | $\\dots(\\pi_{2p})^4(\\sigma_{2p})^2(\\pi^*_{2p})^1$ | 2,5 | 1 | thuận từ |\n\n$\\mathrm{N_2}$ có bậc liên kết 3 (liên kết ba) — là một trong những phân tử hai nguyên tử bền nhất. Cả $\\mathrm{N_2^+}$ và $\\mathrm{N_2^-}$ đều có bậc 2,5 nhưng vì lý do khác nhau: N₂⁺ mất electron liên kết, N₂⁻ thêm electron phản liên kết.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/mo-theory.json",
      "rights": "approved",
      "attribution": "Bài 1 trang 41; giản đồ và bảng cấu hình trang 35–38."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "σ2s < σ*2s < π2p < σ2p < π*2p < σ*2p"
      },
      {
        "id": "option-2",
        "label": "σ2s < σ*2s < σ2p < π2p < π*2p < σ*2p"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-mo-004",
    "lessonId": "gc-mo-bond-order",
    "title": "Phân tử nào tồn tại: Li₂, Be₂, B₂, C₂, F₂, Ne₂, Ne₂²⁺?",
    "prompt": "(Trích Bài 1, trang 41.) Tính bậc liên kết, xác định từ tính và cho biết phân tử/ion nào tồn tại được: $\\mathrm{Li_2}$, $\\mathrm{Be_2}$, $\\mathrm{B_2}$, $\\mathrm{C_2}$, $\\mathrm{F_2}$, $\\mathrm{Ne_2}$, $\\mathrm{Ne_2^{2+}}$.\n\n**Câu hỏi:** B₂ (6 e hóa trị) thuận từ hay nghịch từ?",
    "explanation": "Với tương tác 2s–2p, 2 electron cuối vào hai MO π2p suy biến → 2 e độc thân (Hund) → thuận từ. Đây là bằng chứng cho thứ tự π2p < σ2p.\n\n**Lời giải đầy đủ:**\n\n| Tiểu phân | e hóa trị | Cấu hình (rút gọn) | N | Tồn tại? | Từ tính |\n|---|---|---|---|---|---|\n| Li₂ | 2 | $(\\sigma_{2s})^2$ | 1 | có | nghịch từ |\n| Be₂ | 4 | $(\\sigma_{2s})^2(\\sigma^*_{2s})^2$ | 0 | không | — |\n| B₂ | 6 | $\\dots(\\pi_{2p})^2$ | 1 | có | thuận từ |\n| C₂ | 8 | $\\dots(\\pi_{2p})^4$ | 2 | có | nghịch từ |\n| F₂ | 14 | $\\dots(\\pi^*_{2p})^4$ | 1 | có | nghịch từ |\n| Ne₂ | 16 | $\\dots(\\pi^*_{2p})^4(\\sigma^*_{2p})^2$ | 0 | không | — |\n| Ne₂²⁺ | 14 | $\\dots(\\pi^*_{2p})^4$ | 1 | có | nghịch từ |\n\nLi₂ … N₂ dùng thứ tự có tương tác 2s–2p; O₂ … Ne₂ dùng thứ tự không tương tác (trang 37–38).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/mo-theory.json",
      "rights": "approved",
      "attribution": "Bài 1 trang 41 (một phần danh sách)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thuận từ"
      },
      {
        "id": "option-2",
        "label": "Nghịch từ"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-mo-005",
    "lessonId": "gc-mo-bond-order",
    "title": "Phân tử dị hạch: CO, CN⁻, NO⁺, NO",
    "prompt": "(Trích Bài 1, trang 41.) Bài giảng (trang 40) dùng một giản đồ năng lượng chung cho $\\mathrm{CO}$, $\\mathrm{NO^+}$, $\\mathrm{CN^-}$. Xác định bậc liên kết và từ tính của $\\mathrm{CO}$, $\\mathrm{CO^+}$, $\\mathrm{CN}$, $\\mathrm{CN^-}$, $\\mathrm{NO^+}$, $\\mathrm{NO}$, $\\mathrm{NO^-}$.\n\n**Câu hỏi:** CO, CN⁻, NO⁺ có điểm chung gì?",
    "explanation": "Ba tiểu phân đẳng electron với N₂ nên có cấu hình MO và bậc liên kết giống N₂.\n\n**Lời giải đầy đủ:**\n\nPhân tử dị hạch có thể suy ra từ phân tử đồng hạch **đẳng electron** (cùng số electron hóa trị):\n\n| Tiểu phân | e hóa trị | Đẳng e với | N | Từ tính |\n|---|---|---|---|---|\n| CO | 10 | N₂ | 3 | nghịch từ |\n| CO⁺ | 9 | N₂⁺/N₂⁻ | 2,5 | thuận từ |\n| CN⁻ | 10 | N₂ | 3 | nghịch từ |\n| CN | 9 | N₂⁺/N₂⁻ | 2,5 | thuận từ |\n| NO⁺ | 10 | N₂ | 3 | nghịch từ |\n| NO | 11 | N₂⁺/N₂⁻ | 2,5 | thuận từ |\n| NO⁻ | 12 | O₂ | 2 | thuận từ |\n\n> Lưu ý: với phân tử dị hạch, các AO của nguyên tử âm điện hơn (O) có năng lượng thấp hơn nên MO không đối xứng (trang 40); bậc liên kết vẫn tính bằng cùng công thức.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/mo-theory.json",
      "rights": "approved",
      "attribution": "Bài 1 trang 41 (một phần danh sách); giản đồ AB trang 40."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cùng 10 electron hóa trị (đẳng electron với N₂) → bậc liên kết 3"
      },
      {
        "id": "option-2",
        "label": "Cùng khối lượng"
      },
      {
        "id": "option-3",
        "label": "Cùng điện tích"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-mo-006",
    "lessonId": "gc-mo-bond-order",
    "title": "Vì sao O₂⁺ bền hơn O₂ và F₂⁺ bền hơn F₂?",
    "prompt": "(Bài 2, trang 41.) Cho năng lượng liên kết:\n\n| Phân tử (ion) | O₂ | O₂⁺ | F₂ | F₂⁺ |\n|---|---|---|---|---|\n| $E_{lk}$ (kJ/mol) | −498 | −664 | −159 | −310 |\n\nBằng thuyết MO, hãy so sánh và giải thích các dữ kiện đó.\n\n**Câu hỏi:** Khi tách 1 electron khỏi O₂ hoặc F₂, electron bị tách ra từ:",
    "explanation": "Electron có năng lượng cao nhất (HOMO) của O₂ và F₂ nằm trên π*2p.\n\n**Lời giải đầy đủ:**\n\n| Tiểu phân | Bậc liên kết | $\\lvert E_{lk}\\rvert$ (kJ/mol) |\n|---|---|---|\n| $\\mathrm{O_2}$ | 2 | 498 |\n| $\\mathrm{O_2^+}$ | 2,5 | 664 |\n| $\\mathrm{F_2}$ | 1 | 159 |\n| $\\mathrm{F_2^+}$ | 1,5 | 310 |\n\nElectron bị tách khi tạo $\\mathrm{O_2^+}$, $\\mathrm{F_2^+}$ là electron trên MO **phản liên kết** $\\pi^*_{2p}$. Mất electron phản liên kết làm bậc liên kết tăng 0,5 → liên kết bền hơn, năng lượng liên kết (về độ lớn) tăng — đúng như số liệu.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/mo-theory.json",
      "rights": "approved",
      "attribution": "Bài 2 trang 41 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "MO phản liên kết π*2p"
      },
      {
        "id": "option-2",
        "label": "MO liên kết σ2p"
      },
      {
        "id": "option-3",
        "label": "AO 1s"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-draw-001",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Đề ĐT23 C2: giản đồ MO của O₂⁻ và họ O₂",
    "prompt": "Hãy xây dựng giản đồ MO và viết cấu hình electron của ion phân tử $\\mathrm{O_2^-}$. Dựa vào giản đồ MO của $\\mathrm{O_2^-}$ hãy cho biết từ tính của các ion phân tử $\\mathrm{O_2}$, $\\mathrm{O_2^-}$, $\\mathrm{O_2^+}$ và cho biết phân tử hay ion nào có độ dài liên kết ngắn nhất.\n\n**Câu hỏi:** Câu hỏi này cần vẽ loại hình nào?",
    "explanation": "Đề hỏi bậc liên kết và từ tính của một ion → vẽ giản đồ MO. Công thức Lewis không dự đoán đúng từ tính của O₂ và các ion của nó.\n\n**Lời giải đầy đủ:**\n\nO₂⁻ có 13 e hóa trị. Giản đồ **Loại I** (như O₂): $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^3$, BO = (8 − 5)/2 = 1,5, 1 e độc thân → thuận từ.\n\nDùng chung giản đồ: O₂ (12 e) có $(\\pi^*_{2p})^2$, BO = 2, 2 e độc thân; O₂⁺ (11 e) có $(\\pi^*_{2p})^1$, BO = 2,5, 1 e độc thân. Cả ba đều **thuận từ**. O₂⁺ có BO lớn nhất nên liên kết **ngắn nhất**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C2 (HK1 2022–2023, Ca 2). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Công thức Lewis"
      },
      {
        "id": "option-2",
        "label": "Ô lượng tử lai hóa"
      },
      {
        "id": "option-3",
        "label": "Giản đồ năng lượng MO"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c2-draw-002",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "HCN: từ ô lượng tử đến liên kết σ và π",
    "prompt": "Phân tử HCN (H–C≡N). Hãy vẽ ô lượng tử lai hóa của C và hình xen phủ để trả lời: C lai hóa kiểu gì, phân tử có bao nhiêu liên kết σ và π, và liên kết π được tạo từ những AO nào.\n\n**Câu hỏi:** Trạng thái lai hóa của C và góc H–C–N?",
    "explanation": "T = 2 → sp, hai AO lai hóa hướng ngược nhau → phân tử thẳng.\n\n**Lời giải đầy đủ:**\n\nLewis: H–C≡N. Với C: T = 2 → lai hóa sp, phân tử thẳng 180°. Ô lượng tử: kích thích $2s^12p^3$ → 2 AO sp + 2 AO p không lai hóa. Hai AO sp tạo 2σ (C–H, C–N). Hai AO p ($p_x$, $p_y$) xen phủ bên với $p_x$, $p_y$ của N tạo 2π. Tổng cộng 2σ + 2π.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài bổ sung luyện kỹ năng vẽ ô lượng tử lai hóa."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "sp, 180°"
      },
      {
        "id": "option-2",
        "label": "sp², 120°"
      },
      {
        "id": "option-3",
        "label": "sp³, 109,5°"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-draw-003",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Tìm lỗi: giản đồ MO của B₂",
    "prompt": "Một sinh viên vẽ giản đồ MO của B₂ theo giản đồ **Loại I** $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\ldots$, điền được cấu hình $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2$, rồi kết luận: **B₂ có bậc liên kết 1 và nghịch từ**. Thực nghiệm cho thấy B₂ **thuận từ**. Hãy tìm chỗ sai và sửa lại.\n\n**Câu hỏi:** Sinh viên sai ở bước nào?",
    "explanation": "B₂ thuộc **Loại II** (Li₂ … N₂ và ion): $\\pi_{2p}$ phải nằm dưới $\\sigma_{2p}$. Số e (6) và công thức BO đều đúng.\n\n**Lời giải đầy đủ:**\n\nLỗi: dùng giản đồ Loại I (của O₂) cho B₂. B₂ thuộc **Loại II**: $\\pi_{2p} < \\sigma_{2p}$. Cấu hình đúng: $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\pi_{2p})^1(\\pi_{2p})^1$. Bậc liên kết BO = 1 (không đổi), nhưng có 2 e độc thân → thuận từ, khớp thực nghiệm. Đây cũng là đề ĐT25 C2a.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tìm lỗi (erroneous example) bổ sung."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đếm sai số electron hóa trị"
      },
      {
        "id": "option-2",
        "label": "Dùng giản đồ Loại I (của O₂) cho B₂"
      },
      {
        "id": "option-3",
        "label": "Tính sai công thức bậc liên kết"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-draw-004",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Tìm lỗi: lai hóa và liên kết π trong C₂H₄, CO₂",
    "prompt": "Dưới đây là các phát biểu một sinh viên rút ra từ hình vẽ của mình. Hãy xác định phát biểu nào **đúng**.\n\n**Câu hỏi:** Chọn tất cả các phát biểu đúng.",
    "explanation": "(a) sai: π tạo từ AO p không lai hóa, AO sp² chỉ tạo σ. (b) đúng: 4 C–H + 1 C–C = 5σ, cộng 1π. (c) sai: liên kết đôi chỉ tính 1 nguyên tử, T = 2 → sp. (d) đúng: vì vậy vùng xen phủ π nằm trên và dưới mặt phẳng. (e) sai: liên kết dùng 2s sẽ khác 3 liên kết dùng 2p, và góc sẽ là 90°.\n\n**Lời giải đầy đủ:**\n\nPhát biểu đúng: (b) và (d). Các lỗi gặp ở đây: gán π cho AO lai hóa (a), đếm liên kết bội như nhiều nguyên tử khi tính T (c), bỏ qua lai hóa nên không giải thích được 4 liên kết C–H tương đương (e).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tìm lỗi (erroneous example) bổ sung."
    },
    "kind": "multiple-answer",
    "choices": [
      {
        "id": "option-1",
        "label": "Trong C₂H₄, liên kết π được tạo bởi hai AO sp² xen phủ bên."
      },
      {
        "id": "option-2",
        "label": "Trong C₂H₄ có 5 liên kết σ và 1 liên kết π."
      },
      {
        "id": "option-3",
        "label": "C trong CO₂ có T = 4 vì C tạo 4 liên kết, nên lai hóa sp³."
      },
      {
        "id": "option-4",
        "label": "AO p không lai hóa của mỗi C trong C₂H₄ vuông góc với mặt phẳng phân tử."
      },
      {
        "id": "option-5",
        "label": "Trong CH₄, nếu C dùng AO 2s và 3 AO 2p không lai hóa thì 4 liên kết C–H sẽ giống hệt nhau."
      }
    ],
    "answers": [
      "option-2",
      "option-4"
    ]
  },
  {
    "id": "gc-c2-draw-005",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Đề hỏi gì thì vẽ gì?",
    "prompt": "Với mỗi câu hỏi dưới đây, chọn **loại hình nên vẽ đầu tiên** để trả lời.\n\n**Câu hỏi:** “Góc liên kết H–N–H trong NH₃ khoảng bao nhiêu độ?”",
    "explanation": "Câu hỏi về góc là câu hỏi về hình học không gian: T = 4 → sp³, có 1 cặp tự do → góc ≈ 107°.\n\n**Lời giải đầy đủ:**\n\nGóc liên kết → ô lượng tử lai hóa + hình không gian; so sánh độ bền ion → giản đồ MO; AO nào xen phủ, σ hay π → hình xen phủ trên trục; từ tính → giản đồ MO.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài bổ sung luyện kỹ năng chọn mô hình."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ô lượng tử lai hóa + hình không gian"
      },
      {
        "id": "option-2",
        "label": "Giản đồ năng lượng MO"
      },
      {
        "id": "option-3",
        "label": "Hình xen phủ AO trên trục"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c2-draw-006",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Đề ĐT27 C2: NO, NO⁻, NO⁺ trên một giản đồ",
    "prompt": "Áp dụng lý thuyết Orbital Phân tử:\n\na) Hãy vẽ giản đồ orbital phân tử của NO, biết $Z(\\text{N}) = 7$; $Z(\\text{O}) = 8$.\n\nb) Hãy viết cấu hình điện tử của dãy phân tử, ion gồm NO, $\\mathrm{NO^-}$, $\\mathrm{NO^+}$ và cho biết tính chất từ cũng như so sánh độ bền của chúng.\n\n**Câu hỏi:** Chọn giản đồ cho NO:",
    "explanation": "Dị hạch, 11 e: hai loại cho cùng kết quả, quy ước vẽ **Loại II** (như N₂, CN, CO).\n\n**Lời giải đầy đủ:**\n\nNO có 11 e, vẽ giản đồ **Loại II**, AO của O thấp hơn AO của N.\n\n| | Số e | Cấu hình (phần cuối) | BO | Từ tính |\n|---|---|---|---|---|\n| NO⁺ | 10 | $\\ldots\\pi_{2p}^4\\sigma_{2p}^2$ | 3 | nghịch từ |\n| NO | 11 | $\\ldots\\pi_{2p}^4\\sigma_{2p}^2\\pi_{2p}^{*1}$ | 2,5 | thuận từ |\n| NO⁻ | 12 | $\\ldots\\pi_{2p}^4\\sigma_{2p}^2\\pi_{2p}^{*1}\\pi_{2p}^{*1}$ | 2 | thuận từ (2 e độc thân) |\n\nĐộ bền: NO⁺ > NO > NO⁻.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT27 C2 (HK1 2025–2026). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$"
      },
      {
        "id": "option-2",
        "label": "Loại II: $\\sigma_{2s} < \\sigma^*_{2s} < \\pi_{2p} < \\sigma_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-draw-007",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Đề ĐT26 C2: CN, CN⁻, CN²⁺",
    "prompt": "Áp dụng lý thuyết Orbital Phân tử (MO):\n\na) Hãy vẽ giản đồ MO của ion $\\mathrm{CN^-}$. Biết $Z(\\text{C}) = 6$, $Z(\\text{N}) = 7$.\n\nb) Hãy viết cấu hình MO, so sánh độ bền liên kết và cho biết tính chất từ của các cấu tử CN, $\\mathrm{CN^-}$, $\\mathrm{CN^{2+}}$.\n\n**Câu hỏi:** Chọn giản đồ cho CN⁻ (10 e):",
    "explanation": "Dị hạch, 10 e (như N₂) → **Loại II**. CN và CN²⁺ dùng chung giản đồ này.\n\n**Lời giải đầy đủ:**\n\nGiản đồ **Loại II** (CN⁻ 10 e, như N₂). CN⁻: $\\ldots\\pi_{2p}^4\\sigma_{2p}^2$, BO 3, nghịch từ. CN: $\\ldots\\pi_{2p}^4\\sigma_{2p}^1$, BO 2,5, thuận từ. CN²⁺: $\\sigma_{2s}^2\\sigma_{2s}^{*2}\\pi_{2p}^3$, BO 1,5, thuận từ. Độ bền CN⁻ > CN > CN²⁺.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C2 (HK1 2024–2025). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$"
      },
      {
        "id": "option-2",
        "label": "Loại II: $\\sigma_{2s} < \\sigma^*_{2s} < \\pi_{2p} < \\sigma_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c2-draw-008",
    "lessonId": "gc-bonding-drawing-guide",
    "title": "Đề ĐT25 C2: B₂, B₂⁻, B₂⁺",
    "prompt": "Áp dụng lý thuyết Orbital Phân tử (MO):\n\na) Hãy vẽ giản đồ orbital phân tử của cấu tử $\\mathrm{B_2}$ ($Z = 5$).\n\nb) Hãy viết cấu hình điện tử của dãy phân tử, ion gồm $\\mathrm{B_2}$, $\\mathrm{B_2^-}$, $\\mathrm{B_2^+}$ và cho biết tính chất từ cũng như so sánh độ bền của chúng.\n\n**Câu hỏi:** Chọn giản đồ cho B₂:",
    "explanation": "B₂ thuộc nhóm Li₂ … N₂ → **Loại II**. Đây là chỗ dễ sai nhất của bài.\n\n**Lời giải đầy đủ:**\n\nGiản đồ **Loại II**. B₂ (6 e): $\\sigma_{2s}^2\\sigma_{2s}^{*2}\\pi_x^1\\pi_y^1$, BO 1, 2 e độc thân. B₂⁻ (7 e): $\\pi^3$, BO 1,5. B₂⁺ (5 e): $\\pi^1$, BO 0,5. Cả ba thuận từ. Độ bền B₂⁻ > B₂ > B₂⁺.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-2/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C2 (HK2 2023–2024). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Loại I: $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$"
      },
      {
        "id": "option-2",
        "label": "Loại II: $\\sigma_{2s} < \\sigma^*_{2s} < \\pi_{2p} < \\sigma_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c3-sys-001",
    "lessonId": "gc-thermo-systems",
    "title": "Phân loại hệ nhiệt động",
    "prompt": "Phân loại các hệ sau thành hệ mở, hệ kín hoặc hệ cô lập (gần đúng):\n\n1. Cốc nước nóng để hở trên bàn.\n2. Bình thủy tinh kín chứa khí, đặt trong phòng.\n3. Bình giữ nhiệt (phích) lý tưởng đậy kín.\n\n**Câu hỏi:** Cốc nước nóng để hở:",
    "explanation": "Trao đổi cả chất (hơi nước bay ra) và năng lượng (tỏa nhiệt) → hệ mở.\n\n**Lời giải đầy đủ:**\n\n| Hệ | Trao đổi chất | Trao đổi năng lượng | Loại |\n|---|---|---|---|\n| Cốc nước để hở | có | có | **hệ mở** |\n| Bình kín chứa khí | không | có | **hệ kín** |\n| Phích lý tưởng | không | không | **hệ cô lập** |",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/thermo-systems.json",
      "rights": "approved",
      "attribution": "Bổ sung, dựa trên định nghĩa trang 3."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Hệ mở"
      },
      {
        "id": "option-2",
        "label": "Hệ kín"
      },
      {
        "id": "option-3",
        "label": "Hệ cô lập"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-first-001",
    "lessonId": "gc-first-law",
    "title": "Áp dụng nguyên lý I với quy ước dấu",
    "prompt": "Một hệ khí nhận 250 J nhiệt từ môi trường và đồng thời giãn nở, sinh công 120 J ra môi trường. Tính biến thiên nội năng của hệ.\n\n**Câu hỏi:** Q (theo quy ước: hệ nhận là dương)?\n\n*(Nhập giá trị số theo đơn vị J)*",
    "explanation": "Hệ nhận nhiệt → Q = +250 J.\n\n**Lời giải đầy đủ:**\n\nQuy ước của bài giảng: $\\Delta U = Q + A$, với Q và A là nhiệt và công **hệ nhận**.\n\n- Hệ nhận nhiệt: $Q = +250$ J.\n- Hệ sinh công 120 J: $A = -120$ J.\n\n$$\\Delta U = 250 + (-120) = +130\\ \\text{J}$$\n\nNội năng của hệ tăng 130 J.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/first-law.json",
      "rights": "approved"
    },
    "kind": "short-answer",
    "answers": [
      "250"
    ]
  },
  {
    "id": "gc-c3-first-002",
    "lessonId": "gc-first-law",
    "title": "Đổi đơn vị năng lượng calo – joule",
    "prompt": "Một gói bánh ghi giá trị năng lượng 250 kcal. Đổi giá trị này sang kJ. (Bài giảng trang 7: 1 cal = 4,184 J.)\n\n**Câu hỏi:** 250 kcal bằng bao nhiêu kJ?\n\n*(Nhập giá trị số theo đơn vị kJ)*",
    "explanation": "$250 \\times 4{,}184 = 1046$ kJ.\n\n**Lời giải đầy đủ:**\n\n$$250\\ \\text{kcal} \\times 4{,}184\\ \\frac{\\text{kJ}}{\\text{kcal}} = 1046\\ \\text{kJ}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/first-law.json",
      "rights": "approved",
      "attribution": "Hệ số đổi đơn vị trang 7."
    },
    "kind": "short-answer",
    "answers": [
      "1046"
    ]
  },
  {
    "id": "gc-c3-enth-001",
    "lessonId": "gc-enthalpy",
    "title": "Nhiệt lượng nung nóng một vật",
    "prompt": "(Ví dụ trang 10.) Tính nhiệt lượng cần để nung 125 g một kim loại có nhiệt dung riêng $c = 0{,}387$ J/(g·K) từ 25 °C lên 300 °C.\n\n**Câu hỏi:** Chọn công thức.",
    "explanation": "Nhiệt lượng tỉ lệ với khối lượng, nhiệt dung riêng và độ biến thiên nhiệt độ.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta T = 300 - 25 = 275\\ \\text{K}$$\n\n$$q = m\\,c\\,\\Delta T = 125 \\times 0{,}387 \\times 275 = 13303\\ \\text{J}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/enthalpy.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 10 bài giảng (có lời giải mẫu)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$q = m\\,c\\,\\Delta T$"
      },
      {
        "id": "option-2",
        "label": "$q = \\dfrac{m\\,\\Delta T}{c}$"
      },
      {
        "id": "option-3",
        "label": "$q = n\\,R\\,T$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-enth-002",
    "lessonId": "gc-enthalpy",
    "title": "Chênh lệch giữa ΔH và ΔU",
    "prompt": "Cho phản ứng $\\mathrm{N_2(g) + 3H_2(g) \\to 2NH_3(g)}$ ở 298 K có $\\Delta H = -91{,}8$ kJ. Tính $\\Delta U$.\n\n**Câu hỏi:** Δn khí?",
    "explanation": "$\\Delta n = 2 - (1 + 3) = -2$ mol.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta n_\\text{khí} = 2 - 4 = -2\\ \\text{mol}$$\n\n$$\\Delta U = \\Delta H - \\Delta n RT = -91{,}8 - (-2)(8{,}314\\times10^{-3})(298) = -86{,}8\\ \\text{kJ}$$\n\nDo số mol khí giảm, môi trường thực hiện công lên hệ; $|\\Delta U| < |\\Delta H|$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/enthalpy.json",
      "rights": "approved",
      "attribution": "Số liệu ΔH lấy từ Bài 6 trang 39."
    },
    "kind": "short-answer",
    "answers": [
      "-2"
    ]
  },
  {
    "id": "gc-c3-enth-003",
    "lessonId": "gc-enthalpy",
    "title": "Công giãn nở của khí",
    "prompt": "Một lượng khí giãn nở từ 1,0 L lên 3,0 L chống lại áp suất ngoài không đổi 1,0 atm. Tính công hệ nhận (J). Cho 1 L·atm = 101,3 J.\n\n**Câu hỏi:** ΔV (L)?\n\n*(Nhập giá trị số theo đơn vị L)*",
    "explanation": "$3{,}0 - 1{,}0 = 2{,}0$ L.\n\n**Lời giải đầy đủ:**\n\n$$A = -P\\,\\Delta V = -(1{,}0\\ \\text{atm})(2{,}0\\ \\text{L}) = -2{,}0\\ \\text{L·atm} = -203\\ \\text{J}$$\n\nA < 0: hệ giãn nở, sinh công ra môi trường.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/enthalpy.json",
      "rights": "approved",
      "attribution": "Dựa trên A = −PΔV trang 9."
    },
    "kind": "short-answer",
    "answers": [
      "2"
    ]
  },
  {
    "id": "gc-c3-enth-004",
    "lessonId": "gc-enthalpy",
    "title": "Nhận biết phản ứng thu nhiệt, tỏa nhiệt",
    "prompt": "(Trang 12.) Cho:\n\n(a) $\\mathrm{H_2(g) + \\tfrac12 O_2(g) \\to H_2O(l)} + 285{,}8$ kJ\n\n(b) $40{,}7\\ \\text{kJ} + \\mathrm{H_2O(l) \\to H_2O(g)}$\n\nXác định ΔH và cho biết quá trình nào tỏa nhiệt, quá trình nào thu nhiệt.\n\n**Câu hỏi:** Kết luận:",
    "explanation": "ΔH < 0: tỏa nhiệt; ΔH > 0: thu nhiệt.\n\n**Lời giải đầy đủ:**\n\n- (a) $\\Delta H = -285{,}8$ kJ < 0 → **tỏa nhiệt** (enthalpy sản phẩm thấp hơn chất đầu).\n- (b) $\\Delta H = +40{,}7$ kJ > 0 → **thu nhiệt** (bay hơi cần cung cấp nhiệt).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/enthalpy.json",
      "rights": "approved",
      "attribution": "Giản đồ enthalpy trang 12 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "(a) tỏa nhiệt, (b) thu nhiệt"
      },
      {
        "id": "option-2",
        "label": "(a) thu nhiệt, (b) tỏa nhiệt"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-enth-005",
    "lessonId": "gc-enthalpy",
    "title": "Đảo chiều và thay đổi hệ số phương trình nhiệt hóa học",
    "prompt": "(Trang 13.) Cho $\\mathrm{2H_2O(l) \\to 2H_2(g) + O_2(g)}$, $\\Delta H = 572$ kJ.\n\nTính ΔH của phản ứng $\\mathrm{H_2(g) + \\tfrac12 O_2(g) \\to H_2O(l)}$.\n\n**Câu hỏi:** Quy tắc biến đổi:",
    "explanation": "ΔH là đại lượng khuếch độ (tỉ lệ lượng chất) và đổi dấu khi đảo chiều.\n\n**Lời giải đầy đủ:**\n\nPhản ứng cần tìm = phản ứng đã cho × $\\left(-\\tfrac12\\right)$:\n\n$$\\Delta H = -\\tfrac12 \\times 572 = -286\\ \\text{kJ}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/enthalpy.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 13 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đảo chiều phương trình → đổi dấu ΔH; nhân phương trình với k → nhân ΔH với k"
      },
      {
        "id": "option-2",
        "label": "Đảo chiều phương trình → giữ nguyên ΔH"
      },
      {
        "id": "option-3",
        "label": "Nhân phương trình với k → ΔH không đổi"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-018",
    "lessonId": "gc-hess-law",
    "title": "Đề ĐT01 C3a: chu trình Hess tạo axetilen",
    "prompt": "Cho các phản ứng:\n\n$$\n\\begin{aligned}\n&\\mathrm{C_{2}H_{2}(k) + 5/2O_{2}(k) \\to 2CO_{2}(k) + H_{2}O(l)} && \\Delta H^\\circ = -1300{,}0 \\text{ kJ}\\\\\n&\\mathrm{C(r) + O_{2}(k) \\to CO_{2}(k)} && \\Delta H^\\circ = -394{,}0 \\text{ kJ}\\\\\n&\\mathrm{H_{2}(k) + 1/2O_{2}(k) \\to H_{2}O(l)} && \\Delta H^\\circ = -286{,}0 \\text{ kJ}\n\\end{aligned}\n$$\n\nHãy tính $\\Delta H^\\circ$ của phản ứng sau: $\\mathrm{2C(r) + H_{2}(k) \\to C_{2}H_{2}(k)}$\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Vẽ chu trình Hess: phải ghép các phản ứng đã cho thế nào?",
    "explanation": "Đích cần 2C và H₂ ở vế trái, C₂H₂ ở vế phải. Đảo phản ứng cháy C₂H₂ để tạo C₂H₂; CO₂, H₂O và O₂ triệt tiêu.\n\n**Lời giải đầy đủ:**\n\nĐích cần 2C và H₂ ở vế trái, C₂H₂ ở vế phải. Đảo phản ứng cháy C₂H₂ để tạo C₂H₂; CO₂, H₂O và O₂ triệt tiêu.\n\nĐảo chiều phương trình thì đổi dấu enthalpy: −1300 thành +1300.\n\n$2(-394)+(-286)+1300=+226$ kJ/mol.\n\nNhân (2) với 2: 2C + 2O₂ → 2CO₂ (−788 kJ); giữ (3): H₂ + ½O₂ → H₂O (−286 kJ); đảo (1): 2CO₂ + H₂O → C₂H₂ + ⁵⁄₂O₂ (+1300 kJ). Cộng rồi gạch bỏ các chất xuất hiện ở hai vế cho phản ứng đích.\n\nΔH°f(C₂H₂,k) = +226 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C3a (HK1 2010–2011)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "2×(2) + (3) − (1)"
      },
      {
        "id": "option-2",
        "label": "(1) + (2) + (3)"
      },
      {
        "id": "option-3",
        "label": "2×(1) − (2) − (3)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-019",
    "lessonId": "gc-hess-law",
    "title": "Đề ĐT03 C5: ΔH° và ΔU° khi oxi hóa HCl",
    "prompt": "Cho phản ứng: $\\mathrm{4HCl(k) + O_{2}(k) \\to 2Cl_{2}(k) + 2H_{2}O(l)}$. Tính entanpi tiêu chuẩn $\\Delta H^\\circ$ và biến thiên nội năng tiêu chuẩn $\\Delta U^\\circ$ của phản ứng trên. Biết sinh nhiệt tiêu chuẩn của một số chất như sau: $\\Delta H^\\circ_{298}(\\mathrm{HCl}, k) = -92{,}30$ kJ.mol$^{-1}$; $\\Delta H^\\circ_{298}(\\mathrm{H_{2}O}, l) = -285{,}84$ kJ.mol$^{-1}$.\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Để tính ΔU°, cần đánh dấu và đếm chất nào?",
    "explanation": "Trạng thái (l) của H₂O quyết định rằng nước không nằm trong Δn khí.\n\n**Lời giải đầy đủ:**\n\nTrạng thái (l) của H₂O quyết định rằng nước không nằm trong Δn khí.\n\n$2(-285{,}84)-4(-92{,}30)$.\n\nKhí sản phẩm có 2Cl₂, khí chất đầu có 4HCl + O₂: 2 − (4 + 1) = −3.\n\n$\\Delta U^\\circ=-202{,}48-(-3)(8{,}314)(298)/1000=-195{,}0473$ kJ.\n\n\n\nΔH° = -202,48 kJ; Δn khí = −3; ΔU° = -195,0473 kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT03 C5 (HK1 2012–2013)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chỉ HCl(k), O₂(k), Cl₂(k); loại nước lỏng"
      },
      {
        "id": "option-2",
        "label": "Tính cả H₂O(l) vào số mol khí"
      },
      {
        "id": "option-3",
        "label": "Chỉ đếm các chất có ΔH°f khác 0"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-020",
    "lessonId": "gc-hess-law",
    "title": "Đề ĐT17 C3: cháy methanol và sinh nhiệt",
    "prompt": "Phản ứng đốt cháy 1 mol rượu metylic ở 298 K: $\\mathrm{CH_{3}OH(l) + 3/2O_{2}(k) = CO_{2}(k) + 2H_{2}O(l)}$, $\\Delta U^\\circ_{298} = -726{,}55$ kJ/mol\n\n-  Tính $\\Delta H^\\circ_{298}$ của phản ứng. Coi các chất khí sinh ra là chất khí lý tưởng.\n\n-  Biết sinh nhiệt tiêu chuẩn của $\\mathrm{H_{2}O(l)}$ và $\\mathrm{CO_{2}(k)}$ tương ứng là $-285{,}85$ kJ/mol và $-393{,}51$ kJ/mol. Tính sinh nhiệt tiêu chuẩn của $\\mathrm{CH_{3}OH(l)}$.\n\n-  Biết nhiệt bay hơi của $\\mathrm{CH_{3}OH(l)}$ là 34,89 kJ/mol. Tính sinh nhiệt tiêu chuẩn của $\\mathrm{CH_{3}OH(k)}$.\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Cần vẽ hoặc đánh dấu gì trước khi đổi ΔU° sang ΔH°?",
    "explanation": "Chỉ CO₂(k) và O₂(k) đóng góp vào Δn khí. Sau đó dùng chu trình tạo thành/cháy để suy ra sinh nhiệt methanol.\n\n**Lời giải đầy đủ:**\n\nChỉ CO₂(k) và O₂(k) đóng góp vào Δn khí. Sau đó dùng chu trình tạo thành/cháy để suy ra sinh nhiệt methanol.\n\n1 mol CO₂ sản phẩm trừ 1,5 mol O₂ ban đầu: −0,5.\n\n$\\Delta H^\\circ=\\Delta U^\\circ+\\Delta n_{\\text{khí}}RT=-726{,}55-0{,}5(8{,}314)(298)/1000=-727{,}7888$.\n\nTừ ΔH° cháy = Hf(CO₂) + 2Hf(H₂O) − Hf(CH₃OH,l), suy ra $-393{,}51+2(-285{,}85)-(-727{,}7888)=-237{,}4212$.\n\nBay hơi thu nhiệt: $\\Delta H_f^\\circ(k)=\\Delta H_f^\\circ(l)+34{,}89=-202{,}5312$ kJ/mol.\n\n\n\nΔH° cháy = -727,7888 kJ/mol; Hf°[CH₃OH(l)] = -237,4212 kJ/mol; Hf°[CH₃OH(k)] = -202,5312 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C3 (Đề tổng hợp 7, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tô các chất khí CO₂ và O₂; nước và methanol đều lỏng"
      },
      {
        "id": "option-2",
        "label": "Tính mọi chất trong phương trình như khí"
      },
      {
        "id": "option-3",
        "label": "Dùng chu trình Hess nhưng bỏ qua trạng thái"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-021",
    "lessonId": "gc-hess-law",
    "title": "Đề ĐT18 C3: nhiệt tạo thành etan",
    "prompt": "Tính nhiệt tạo thành của etan ở điều kiện chuẩn biết:\n\n$$\n\\begin{aligned}\n&\\mathrm{C_{\\mathrm{graphit}} + O_{2}(k) = CO_{2}(k)} && \\Delta H^\\circ = -393{,}5 \\text{ kJ/mol}\\\\\n&\\mathrm{H_{2}(k) + 1/2O_{2}(k) = H_{2}O(l)} && \\Delta H^\\circ = -285{,}8 \\text{ kJ/mol}\\\\\n&\\mathrm{2C_{2}H_{6}(k) + 7O_{2}(k) = 4CO_{2}(k) + 6H_{2}O(l)} && \\Delta H^\\circ = -3119{,}6 \\text{ kJ/mol}\n\\end{aligned}\n$$\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Chu trình Hess cho 1 mol etan cần tổ hợp nào?",
    "explanation": "Phản ứng đích 2C(graphit) + 3H₂(k) → C₂H₆(k). Đảo một nửa phản ứng cháy tạo đúng 1 mol etan.\n\n**Lời giải đầy đủ:**\n\nPhản ứng đích 2C(graphit) + 3H₂(k) → C₂H₆(k). Đảo một nửa phản ứng cháy tạo đúng 1 mol etan.\n\nĐảo chiều đổi dấu và chia đôi hệ số cũng chia đôi ΔH°: +3119,6/2.\n\n$2(-393{,}5)+3(-285{,}8)+3119{,}6/2=-84{,}6$ kJ/mol.\n\nHai phản ứng tạo CO₂ và H₂O cộng lại tiêu thụ 2C + 3H₂ + ⁷⁄₂O₂. Đảo nửa phản ứng cháy trả lại đúng CO₂, H₂O và O₂ ở phía đối diện; sau triệt tiêu chỉ còn 2C + 3H₂ → C₂H₆.\n\nΔH°f(C₂H₆,k) = -84,6 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C3 (Đề tổng hợp 8, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "2×(1) + 3×(2) − ½×(3)"
      },
      {
        "id": "option-2",
        "label": "(1) + (2) − (3)"
      },
      {
        "id": "option-3",
        "label": "2×(1) + 3×(2) + ½×(3)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-hess-001",
    "lessonId": "gc-hess-law",
    "title": "Graphit → kim cương",
    "prompt": "(Trang 16–19.) Cho:\n\n(1) $\\mathrm{C(graphit) + O_2(g) \\to CO_2(g)}$, $\\Delta H_1$\n\n(2) $\\mathrm{C(kim\\ cương) + O_2(g) \\to CO_2(g)}$, $\\Delta H_2$\n\na) Biểu diễn $\\Delta H_3$ của $\\mathrm{C(graphit) \\to C(kim\\ cương)}$ theo $\\Delta H_1$, $\\Delta H_2$.\n\nb) Với $\\Delta H_1 = -393{,}5$ kJ, $\\Delta H_2 = -395{,}4$ kJ, tính $\\Delta H_3$.\n\n**Câu hỏi:** Ý nghĩa:",
    "explanation": "ΔH₃ > 0: kim cương có enthalpy cao hơn graphit.\n\n**Lời giải đầy đủ:**\n\nLấy (1) − (2):\n\n$$\\mathrm{C(graphit) - C(kim\\ cương) \\to 0} \\;\\Rightarrow\\; \\mathrm{C(graphit) \\to C(kim\\ cương)}$$\n\n$$\\Delta H_3 = \\Delta H_1 - \\Delta H_2 = -393{,}5 - (-395{,}4) = +1{,}9\\ \\text{kJ}$$\n\nBài giảng trình bày ba cách (sơ đồ vòng, đảo chiều, cộng trừ phương trình) đều cho cùng kết quả — minh họa định luật Hess.\n\n> Số liệu ở câu b là số liệu tham khảo bổ sung.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Phần a trích bài giảng; số liệu phần b bổ sung."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Graphit bền hơn kim cương về enthalpy (chuyển thành kim cương phải thu nhiệt)"
      },
      {
        "id": "option-2",
        "label": "Kim cương bền hơn graphit"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-hess-002",
    "lessonId": "gc-hess-law",
    "title": "Ví dụ 1: tính ΔH tạo SO₃ từ S",
    "prompt": "(Ví dụ 1, trang 21.) Cho:\n\n(1) $\\mathrm{S(s) + O_2(g) \\to SO_2(g)}$, $\\Delta H_1 = -296{,}8$ kJ\n\n(2) $\\mathrm{2SO_2(g) + O_2(g) \\to 2SO_3(g)}$, $\\Delta H_2 = -198{,}4$ kJ\n\nTính $\\Delta H_3$ của $\\mathrm{S(s) + \\tfrac32 O_2(g) \\to SO_3(g)}$.\n\n**Câu hỏi:** Tổ hợp nào cho phương trình (3)?",
    "explanation": "Cần 1 SO₃ → lấy ½(2); SO₂ trung gian triệt tiêu khi cộng với (1).\n\n**Lời giải đầy đủ:**\n\n$$(1) + \\tfrac12(2):\\ \\mathrm{S + O_2 + SO_2 + \\tfrac12O_2 \\to SO_2 + SO_3} \\;\\Rightarrow\\; \\mathrm{S + \\tfrac32 O_2 \\to SO_3}$$\n\n$$\\Delta H_3 = \\Delta H_1 + \\tfrac12\\Delta H_2 = -296{,}8 + \\tfrac12(-198{,}4) = -396{,}0\\ \\text{kJ}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Ví dụ 1 trang 21–23 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "(3) = (1) + ½(2)"
      },
      {
        "id": "option-2",
        "label": "(3) = (1) + (2)"
      },
      {
        "id": "option-3",
        "label": "(3) = (1) − ½(2)"
      },
      {
        "id": "option-4",
        "label": "(3) = 2(1) + (2)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-hess-003",
    "lessonId": "gc-hess-law",
    "title": "Ví dụ 2: CO + NO → CO₂ + ½N₂",
    "prompt": "(Ví dụ 2, trang 21.) Tính ΔH của $\\mathrm{CO(g) + NO(g) \\to CO_2(g) + \\tfrac12 N_2(g)}$, biết:\n\n(1) $\\mathrm{CO(g) + \\tfrac12O_2(g) \\to CO_2(g)}$, $\\Delta H_1 = -283{,}0$ kJ\n\n(2) $\\mathrm{N_2(g) + O_2(g) \\to 2NO(g)}$, $\\Delta H_2 = 180{,}6$ kJ\n\n**Câu hỏi:** Tổ hợp:",
    "explanation": "NO là chất đầu → đảo chiều (2) và nhân ½: NO → ½N₂ + ½O₂ (ΔH = −90,3 kJ); ½O₂ triệt tiêu với (1).\n\n**Lời giải đầy đủ:**\n\n$$\\mathrm{NO \\to \\tfrac12N_2 + \\tfrac12O_2}\\qquad \\Delta H = -\\tfrac12(180{,}6) = -90{,}3\\ \\text{kJ}$$\n\n$$\\mathrm{CO + \\tfrac12O_2 \\to CO_2}\\qquad \\Delta H = -283{,}0\\ \\text{kJ}$$\n\nCộng lại: $\\Delta H = -283{,}0 - 90{,}3 = -373{,}3$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Ví dụ 2 trang 21 bài giảng (không có lời giải)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "(1) − ½(2)"
      },
      {
        "id": "option-2",
        "label": "(1) + ½(2)"
      },
      {
        "id": "option-3",
        "label": "(1) − (2)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-hess-004",
    "lessonId": "gc-hess-law",
    "title": "Bài 1: tạo CaCO₃ từ Ca, O₂, CO₂",
    "prompt": "(Bài 1, trang 37.) Cho:\n\n(1) $\\mathrm{Ca(s) + \\tfrac12O_2(g) \\to CaO(s)}$, $\\Delta H = -635{,}1$ kJ\n\n(2) $\\mathrm{CaCO_3(s) \\to CaO(s) + CO_2(g)}$, $\\Delta H = 178{,}3$ kJ\n\nTính ΔH của $\\mathrm{Ca(s) + \\tfrac12O_2(g) + CO_2(g) \\to CaCO_3(s)}$.\n\n**Câu hỏi:** Tổ hợp:",
    "explanation": "CaCO₃ là sản phẩm → đảo chiều (2): CaO + CO₂ → CaCO₃ (ΔH = −178,3 kJ); CaO triệt tiêu.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta H = \\Delta H_1 - \\Delta H_2 = -635{,}1 - 178{,}3 = -813{,}4\\ \\text{kJ}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Bài 1 trang 37 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "(1) − (2)"
      },
      {
        "id": "option-2",
        "label": "(1) + (2)"
      },
      {
        "id": "option-3",
        "label": "(2) − (1)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-hess-005",
    "lessonId": "gc-hess-law",
    "title": "Bài 2: phân hủy NOCl",
    "prompt": "(Bài 2, trang 37.) Cho:\n\n(1) $\\mathrm{\\tfrac12N_2(g) + \\tfrac12O_2(g) \\to NO(g)}$, $\\Delta H = 90{,}3$ kJ\n\n(2) $\\mathrm{NO(g) + \\tfrac12Cl_2(g) \\to NOCl(g)}$, $\\Delta H = -38{,}6$ kJ\n\nTính ΔH của $\\mathrm{2NOCl(g) \\to N_2(g) + O_2(g) + Cl_2(g)}$.\n\n**Câu hỏi:** Tổ hợp:",
    "explanation": "Phản ứng cần tìm là ngược lại của 2[(1) + (2)].\n\n**Lời giải đầy đủ:**\n\n(1) + (2): $\\mathrm{\\tfrac12N_2 + \\tfrac12O_2 + \\tfrac12Cl_2 \\to NOCl}$, $\\Delta H = 90{,}3 - 38{,}6 = 51{,}7$ kJ.\n\nPhản ứng cần tìm = $-2\\times$ phản ứng trên:\n\n$$\\Delta H = -2 \\times 51{,}7 = -103{,}4\\ \\text{kJ}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Bài 2 trang 37 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "−2(1) − 2(2)"
      },
      {
        "id": "option-2",
        "label": "2(1) + 2(2)"
      },
      {
        "id": "option-3",
        "label": "−(1) − (2)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-hess-006",
    "lessonId": "gc-hess-law",
    "title": "Bài 3: khử Fe₂O₃ bằng CO",
    "prompt": "(Bài 3, trang 38.) Tính ΔH của phản ứng (đã cân bằng) $\\mathrm{Fe_2O_3(s) + 3CO(g) \\to 2Fe(s) + 3CO_2(g)}$, biết:\n\n(1) $\\mathrm{3Fe_2O_3(s) + CO(g) \\to 2Fe_3O_4(s) + CO_2(g)}$, $\\Delta H^\\circ = -48{,}5$ kJ\n\n(2) $\\mathrm{Fe(s) + CO_2(g) \\to FeO(s) + CO(g)}$, $\\Delta H^\\circ = -11{,}0$ kJ\n\n(3) $\\mathrm{Fe_3O_4(s) + CO(g) \\to 3FeO(s) + CO_2(g)}$, $\\Delta H^\\circ = 22$ kJ\n\n**Câu hỏi:** Hệ số của (1) để có 1 Fe₂O₃ ở vế trái?",
    "explanation": "Nhân (1) với ⅓.\n\n**Lời giải đầy đủ:**\n\n$$\\tfrac13(1):\\ \\mathrm{Fe_2O_3 + \\tfrac13CO \\to \\tfrac23Fe_3O_4 + \\tfrac13CO_2}\\quad \\Delta H = -16{,}17\\ \\text{kJ}$$\n\n$$\\tfrac23(3):\\ \\mathrm{\\tfrac23Fe_3O_4 + \\tfrac23CO \\to 2FeO + \\tfrac23CO_2}\\quad \\Delta H = +14{,}67\\ \\text{kJ}$$\n\n$$-2(2):\\ \\mathrm{2FeO + 2CO \\to 2Fe + 2CO_2}\\quad \\Delta H = +22{,}0\\ \\text{kJ}$$\n\nCộng lại: $\\mathrm{Fe_2O_3 + 3CO \\to 2Fe + 3CO_2}$, $\\Delta H = -16{,}17 + 14{,}67 + 22{,}0 = +20{,}5$ kJ.\n\n> Phương trình trong slide chưa cân bằng; lời giải dùng phương trình đã cân bằng. Kết quả phụ thuộc số liệu đề bài cho (giá trị tra bảng thực nghiệm có thể khác).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Bài 3 trang 38 bài giảng; phương trình được cân bằng lại."
    },
    "kind": "short-answer",
    "answers": [
      "0.333333",
      "0,333333"
    ]
  },
  {
    "id": "gc-c3-hess-007",
    "lessonId": "gc-hess-law",
    "title": "Bài 4: ClF + F₂ → ClF₃",
    "prompt": "(Bài 4, trang 38.) Tính ΔH của $\\mathrm{ClF(g) + F_2(g) \\to ClF_3(l)}$, biết:\n\n(1) $\\mathrm{2ClF(g) + O_2(g) \\to Cl_2O(g) + OF_2(g)}$, $\\Delta H^\\circ = 167{,}5$ kJ\n\n(2) $\\mathrm{2F_2(g) + O_2(g) \\to 2OF_2(g)}$, $\\Delta H^\\circ = -43{,}5$ kJ\n\n(3) $\\mathrm{2ClF_3(l) + 2O_2(g) \\to Cl_2O(g) + 3OF_2(g)}$, $\\Delta H^\\circ = 394{,}1$ kJ\n\n**Câu hỏi:** ΔH (kJ)?\n\n*(Nhập giá trị số theo đơn vị kJ)*",
    "explanation": "$\\tfrac12(167{,}5 - 43{,}5 - 394{,}1) = -135{,}05$ kJ.\n\n**Lời giải đầy đủ:**\n\n$$\\tfrac12(1):\\ \\mathrm{ClF + \\tfrac12O_2 \\to \\tfrac12Cl_2O + \\tfrac12OF_2}\\quad +83{,}75\\ \\text{kJ}$$\n\n$$\\tfrac12(2):\\ \\mathrm{F_2 + \\tfrac12O_2 \\to OF_2}\\quad -21{,}75\\ \\text{kJ}$$\n\n$$-\\tfrac12(3):\\ \\mathrm{\\tfrac12Cl_2O + \\tfrac32OF_2 \\to ClF_3 + O_2}\\quad -197{,}05\\ \\text{kJ}$$\n\nCộng lại: $\\mathrm{ClF + F_2 \\to ClF_3}$, $\\Delta H = 83{,}75 - 21{,}75 - 197{,}05 = -135{,}05 \\approx -135{,}1$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Bài 4 trang 38 bài giảng."
    },
    "kind": "short-answer",
    "answers": [
      "-135.05",
      "-135,05"
    ]
  },
  {
    "id": "gc-c3-hess-008",
    "lessonId": "gc-hess-law",
    "title": "Bài 5: N₂O₃ + N₂O₅(s) → 2N₂O₄",
    "prompt": "(Bài 5, trang 39.) Tính ΔH của $\\mathrm{N_2O_3(g) + N_2O_5(s) \\to 2N_2O_4(g)}$, biết:\n\n(1) $\\mathrm{NO + NO_2 \\to N_2O_3}$, $-39{,}8$ kJ\n\n(2) $\\mathrm{NO + NO_2 + O_2 \\to N_2O_5(g)}$, $-112{,}5$ kJ\n\n(3) $\\mathrm{2NO_2 \\to N_2O_4}$, $-57{,}2$ kJ\n\n(4) $\\mathrm{2NO + O_2 \\to 2NO_2}$, $-114{,}2$ kJ\n\n(5) $\\mathrm{N_2O_5(s) \\to N_2O_5(g)}$, $54{,}1$ kJ\n\n**Câu hỏi:** Những phương trình nào cần ĐẢO CHIỀU?",
    "explanation": "N₂O₃ là chất đầu → đảo (1); N₂O₅(g) sinh ra từ (5) phải bị tiêu thụ → đảo (2).\n\n**Lời giải đầy đủ:**\n\nTổ hợp: $-(1) - (2) + 2(3) + (4) + (5)$\n\n| Phương trình | Biến đổi | ΔH (kJ) |\n|---|---|---|\n| $\\mathrm{N_2O_3 \\to NO + NO_2}$ | −(1) | +39,8 |\n| $\\mathrm{N_2O_5(g) \\to NO + NO_2 + O_2}$ | −(2) | +112,5 |\n| $\\mathrm{4NO_2 \\to 2N_2O_4}$ | 2×(3) | −114,4 |\n| $\\mathrm{2NO + O_2 \\to 2NO_2}$ | (4) | −114,2 |\n| $\\mathrm{N_2O_5(s) \\to N_2O_5(g)}$ | (5) | +54,1 |\n\nKiểm tra: NO, NO₂, O₂, N₂O₅(g) đều triệt tiêu. Tổng: $\\Delta H = 39{,}8 + 112{,}5 - 114{,}4 - 114{,}2 + 54{,}1 = -22{,}2$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Bài 5 trang 39 bài giảng."
    },
    "kind": "multiple-answer",
    "choices": [
      {
        "id": "option-1",
        "label": "(1)"
      },
      {
        "id": "option-2",
        "label": "(2)"
      },
      {
        "id": "option-3",
        "label": "(3)"
      },
      {
        "id": "option-4",
        "label": "(4)"
      },
      {
        "id": "option-5",
        "label": "(5)"
      }
    ],
    "answers": [
      "option-1",
      "option-2"
    ]
  },
  {
    "id": "gc-c3-form-001",
    "lessonId": "gc-formation-enthalpy",
    "title": "Phân hủy KClO₃: tính ΔH° từ nhiệt tạo thành",
    "prompt": "(Trang 33.) Tính $\\Delta H^\\circ$ của $\\mathrm{4KClO_3(s) \\to 3KClO_4(s) + KCl(s)}$, biết $\\Delta H^\\circ_f$ (kJ/mol): $\\mathrm{KClO_3}$ −397,7; $\\mathrm{KClO_4}$ −432,8; $\\mathrm{KCl}$ −436,7.\n\n**Câu hỏi:** Chọn công thức.",
    "explanation": "Sản phẩm trừ chất đầu, nhân với hệ số tỉ lượng.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta H^\\circ = [3(-432{,}8) + (-436{,}7)] - 4(-397{,}7) = -1735{,}1 + 1590{,}8 = -144{,}3\\ \\text{kJ} \\approx -144\\ \\text{kJ}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/formation-enthalpy.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 33 bài giảng (có lời giải mẫu)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\Delta H^\\circ = \\sum\\nu\\Delta H^\\circ_f(\\text{sp}) - \\sum\\nu\\Delta H^\\circ_f(\\text{cđ})$"
      },
      {
        "id": "option-2",
        "label": "$\\Delta H^\\circ = \\sum\\nu\\Delta H^\\circ_f(\\text{cđ}) - \\sum\\nu\\Delta H^\\circ_f(\\text{sp})$"
      },
      {
        "id": "option-3",
        "label": "$\\Delta H^\\circ = \\sum\\Delta H^\\circ_f$ (không nhân hệ số)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-form-002",
    "lessonId": "gc-formation-enthalpy",
    "title": "Oxi hóa amoniac",
    "prompt": "(Ví dụ trang 25.) Tính $\\Delta H^\\circ$ của $\\mathrm{4NH_3(g) + 5O_2(g) \\to 4NO(g) + 6H_2O(g)}$.\n\nSố liệu tham khảo (bổ sung): $\\Delta H^\\circ_f$ (kJ/mol): $\\mathrm{NH_3(g)}$ −45,9; $\\mathrm{NO(g)}$ +90,3; $\\mathrm{H_2O(g)}$ −241,8.\n\n**Câu hỏi:** ΔH°f của O₂(g)?\n\n*(Nhập giá trị số theo đơn vị kJ/mol)*",
    "explanation": "Đơn chất bền ở điều kiện chuẩn: ΔH°f = 0.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta H^\\circ = \\{4\\Delta H^\\circ_f[\\mathrm{NO}] + 6\\Delta H^\\circ_f[\\mathrm{H_2O(g)}]\\} - \\{4\\Delta H^\\circ_f[\\mathrm{NH_3}] + 5\\Delta H^\\circ_f[\\mathrm{O_2}]\\}$$\n\n$$= [4(90{,}3) + 6(-241{,}8)] - [4(-45{,}9) + 0] = 361{,}2 - 1450{,}8 + 183{,}6 = -906{,}0\\ \\text{kJ}$$\n\n> Bài giảng chỉ nêu biểu thức; các giá trị $\\Delta H^\\circ_f$ ở đây là số liệu tham khảo bổ sung, hãy đối chiếu với bảng số liệu của giảng viên.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/formation-enthalpy.json",
      "rights": "approved",
      "attribution": "Biểu thức từ ví dụ trang 25; số liệu ΔH°f bổ sung."
    },
    "kind": "short-answer",
    "answers": [
      "0"
    ]
  },
  {
    "id": "gc-c3-hess-009",
    "lessonId": "gc-formation-enthalpy",
    "title": "Bài 6: nhiệt tạo thành của HCl(g)",
    "prompt": "(Bài 6, trang 39.) Tính nhiệt tạo thành của $\\mathrm{HCl(g)}$, biết:\n\n(1) $\\mathrm{N_2(g) + 3H_2(g) \\to 2NH_3(g)}$, $-91{,}8$ kJ\n\n(2) $\\mathrm{N_2(g) + 4H_2(g) + Cl_2(g) \\to 2NH_4Cl(s)}$, $-628{,}8$ kJ\n\n(3) $\\mathrm{NH_3(g) + HCl(g) \\to NH_4Cl(s)}$, $-176{,}2$ kJ\n\n**Câu hỏi:** Phương trình nhiệt tạo thành HCl(g):",
    "explanation": "Nhiệt tạo thành: tạo **1 mol** chất từ đơn chất bền ở trạng thái chuẩn.\n\n**Lời giải đầy đủ:**\n\n$$-\\tfrac12(1):\\ \\mathrm{NH_3 \\to \\tfrac12N_2 + \\tfrac32H_2}\\quad +45{,}9\\ \\text{kJ}$$\n\n$$\\tfrac12(2):\\ \\mathrm{\\tfrac12N_2 + 2H_2 + \\tfrac12Cl_2 \\to NH_4Cl}\\quad -314{,}4\\ \\text{kJ}$$\n\n$$-(3):\\ \\mathrm{NH_4Cl \\to NH_3 + HCl}\\quad +176{,}2\\ \\text{kJ}$$\n\nCộng lại: $\\mathrm{\\tfrac12H_2 + \\tfrac12Cl_2 \\to HCl}$,\n\n$$\\Delta H^\\circ_f(\\mathrm{HCl}) = 45{,}9 - 314{,}4 + 176{,}2 = -92{,}3\\ \\text{kJ/mol}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/hess-law.json",
      "rights": "approved",
      "attribution": "Bài 6 trang 39 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "½H₂(g) + ½Cl₂(g) → HCl(g)"
      },
      {
        "id": "option-2",
        "label": "H₂(g) + Cl₂(g) → 2HCl(g)"
      },
      {
        "id": "option-3",
        "label": "H(g) + Cl(g) → HCl(g)"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-ent-001",
    "lessonId": "gc-entropy",
    "title": "Dự đoán dấu của ΔS",
    "prompt": "(Trang 30–31.) Dự đoán dấu của $\\Delta S$ cho các phản ứng:\n\n(a) $\\mathrm{H_2(g) + I_2(s) \\to 2HI(g)}$\n\n(b) $\\mathrm{N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)}$\n\n(c) $\\mathrm{C_6H_{12}O_6(s) + 6O_2(g) \\to 6CO_2(g) + 6H_2O(g)}$\n\n**Câu hỏi:** (a):",
    "explanation": "Số mol khí tăng từ 1 lên 2 (và chất rắn chuyển thành khí) → ΔS > 0.\n\n**Lời giải đầy đủ:**\n\nQuy tắc nhanh: số mol **khí** tăng → $\\Delta S > 0$; giảm → $\\Delta S < 0$.\n\n| Phản ứng | $\\Delta n_\\text{khí}$ | Dấu ΔS |\n|---|---|---|\n| (a) | $2 - 1 = +1$ | **> 0** |\n| (b) | $2 - 4 = -2$ | **< 0** |\n| (c) | $12 - 6 = +6$ | **> 0** |",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/entropy.json",
      "rights": "approved",
      "attribution": "Các phản ứng ở trang 30–31 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "ΔS > 0"
      },
      {
        "id": "option-2",
        "label": "ΔS < 0"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-ent-002",
    "lessonId": "gc-entropy",
    "title": "Tính ΔS° của phản ứng tổng hợp NH₃",
    "prompt": "(Ví dụ trang 31.) Tính $\\Delta S^\\circ$ của $\\mathrm{N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)}$, biết $S^\\circ$ (J/(mol·K)): $\\mathrm{NH_3}$ 193; $\\mathrm{N_2}$ 191,5; $\\mathrm{H_2}$ 130,6.\n\n**Câu hỏi:** Entropy chuẩn của đơn chất (N₂, H₂):",
    "explanation": "Khác với $\\Delta H^\\circ_f$, entropy tuyệt đối $S^\\circ$ của đơn chất khác 0.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta S^\\circ = 2S^\\circ(\\mathrm{NH_3}) - [S^\\circ(\\mathrm{N_2}) + 3S^\\circ(\\mathrm{H_2})] = 2(193) - [191{,}5 + 3(130{,}6)] = -197\\ \\text{J/K}$$\n\nΔS° < 0, phù hợp với việc số mol khí giảm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/entropy.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 31 bài giảng (có lời giải mẫu)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Khác 0, phải đưa vào tính"
      },
      {
        "id": "option-2",
        "label": "Bằng 0 như ΔH°f"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-ent-003",
    "lessonId": "gc-entropy",
    "title": "ΔS° của phản ứng phân hủy KClO₃",
    "prompt": "(Trang 33.) Tính $\\Delta S^\\circ$ của $\\mathrm{4KClO_3(s) \\to 3KClO_4(s) + KCl(s)}$, biết $S^\\circ$ (J/(mol·K)): $\\mathrm{KClO_3}$ 143,1; $\\mathrm{KClO_4}$ 151,0; $\\mathrm{KCl}$ 82,6.\n\n**Câu hỏi:** Tổng S° sản phẩm (J/K)?\n\n*(Nhập giá trị số theo đơn vị J/K)*",
    "explanation": "$3(151{,}0) + 82{,}6 = 535{,}6$ J/K.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta S^\\circ = [3(151{,}0) + 82{,}6] - 4(143{,}1) = 535{,}6 - 572{,}4 = -36{,}8\\ \\text{J/K}$$",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/entropy.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 33 bài giảng (có lời giải mẫu)."
    },
    "kind": "short-answer",
    "answers": [
      "535.6",
      "535,6"
    ]
  },
  {
    "id": "gc-c3-exam-001",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT01 C3b: oxi hóa SO₂ thành SO₃",
    "prompt": "Tính $\\Delta G^\\circ$ của phản ứng dưới đây ở 25 °C và 1 atm: $\\mathrm{2SO_{2}(k) + O_{2}(k) \\to 2SO_{3}(k)}$. Cho các dữ kiện nhiệt động sau:\n\n| — | $\\mathrm{SO_{2}(k)}$ | $\\mathrm{SO_{3}(k)}$ | $\\mathrm{O_{2}(k)}$ |\n| --- | --- | --- | --- |\n| $\\Delta H^\\circ_{sn}$ (kJ/mol) | $-297{,}0$ | $-396{,}0$ | — |\n| $S^\\circ$ (J/mol.K) | 248,0 | 257,0 | 205,0 |\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-2)(-297) + (2)(-396)=-198$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-2)(248) + (2)(257) + (-1)(205)=-187$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}187$ kJ/K rồi $\\Delta G^\\circ=-198-298(-0{,}187)=-142{,}274$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -198 kJ; ΔS° = -187 J/K; ΔG°₂₉₈ = -142,274 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C3b (HK1 2010–2011)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-002",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT02 C2: oxi hóa HCl và trạng thái nước",
    "prompt": "Cho phản ứng: $\\mathrm{4HCl(k) + O_{2}(k) \\to 2H_{2}O(l) + 2Cl_{2}(k)}$. Hãy xác định chiều của phản ứng ở 25 °C. Biết:\n\n| — | $\\mathrm{HCl(k)}$ | $\\mathrm{O_{2}(k)}$ | $\\mathrm{Cl_{2}(k)}$ | $\\mathrm{H_{2}O(l)}$ |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{sn,298}$ (kJ/mol) | $-92{,}3$ | — | — | $-285{,}8$ |\n| $S^\\circ_{298}$ (J/mol.K) | 186,8 | 205,0 | 223,0 | 69,5 |\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-4)(-92{,}3) + (2)(-285{,}8)=-202{,}4$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-4)(186{,}8) + (-1)(205) + (2)(223) + (2)(69{,}5)=-367{,}2$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}3672$ kJ/K rồi $\\Delta G^\\circ=-202{,}4-298(-0{,}3672)=-92{,}9744$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -202,4 kJ; ΔS° = -367,2 J/K; ΔG°₂₉₈ = -92,9744 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT02 C2 (Hè 2012)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-003",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT04 C3: khử Fe₂O₃ bằng CO",
    "prompt": "Sắt được sản xuất bằng cách khử sắt (III) oxit bằng CO: $\\mathrm{Fe_{2}O_{3}(r) + 3CO(k) \\to 2Fe(r) + 3CO_{2}(k)}$\n\n| — | $\\mathrm{Fe_{2}O_{3}(r)}$ | $\\mathrm{CO(k)}$ | $\\mathrm{Fe(r)}$ | $\\mathrm{CO_{2}(k)}$ |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ$ (kJ/mol) | $-826$ | $-110$ | 0 | $-394$ |\n| $S^\\circ$ (J/mol.K) | 90 | 198 | 27 | 214 |\n\nHãy tính biến thiên năng lượng tự do chuẩn ($\\Delta G^\\circ$) ở 25 °C cho phản ứng trên và nhận xét chiều hướng phản ứng xảy ra ở điều kiện đó?\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-826) + (-3)(-110) + (3)(-394)=-26$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(90) + (-3)(198) + (2)(27) + (3)(214)=12$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}012$ kJ/K rồi $\\Delta G^\\circ=-26-298(0{,}012)=-29{,}576$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -26 kJ; ΔS° = 12 J/K; ΔG°₂₉₈ = -29,576 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C3 (HK1 2013–2014, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-004",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT05 C3: ΔG cho 1,22 lít axetilen",
    "prompt": "Phản ứng của canxi cacbua với nước ở 25 °C xảy ra như sau: $\\mathrm{CaC_{2}(r) + 2H_{2}O(l) \\to C_{2}H_{2}(k) + Ca(OH)2(r)}$\n\n| — | $\\mathrm{CaC_{2}(r)}$ | $\\mathrm{H_{2}O(l)}$ | $\\mathrm{C_{2}H_{2}(k)}$ | $\\mathrm{Ca(OH)2(r)}$ |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_f$ (kJ/mol) | $-63$ | $-286$ | 227 | $-987$ |\n| $S^\\circ$ (J/mol.K) | 70 | 70 | 201 | 83 |\n\nTính biến thiên năng lượng tự do chuẩn ($\\Delta G^\\circ$) của phản ứng tạo ra 1,22 lít khí $\\mathrm{C_{2}H_{2}}$ ở 25 °C và 1 atm.\n\nDữ kiện chung và quy ước tính: $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-63) + (-2)(-286) + (1)(227) + (1)(-987)=-125$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(70) + (-2)(70) + (1)(201) + (1)(83)=74$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}074$ kJ/K rồi $\\Delta G^\\circ=-125-298(0{,}074)=-147{,}052$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n$n=PV/(RT)=1\\times1{,}22/(0{,}082\\times298)$. Với hệ số C₂H₂ bằng 1, số mol phản ứng bằng số mol khí tạo thành.\n\nGiá trị theo một mol phản ứng là -147,052 kJ/mol; nhân với n = 0,04992634 mol được -7,341768 kJ.\n\n\n\nΔH° = -125 kJ; ΔS° = 74 J/K; ΔG°₂₉₈ = -147,052 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn. Với 1,22 L C₂H₂: n = 0,04992634 mol, ΔG° cho lượng đó = -7,341768 kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C3 (HK2 2013–2014, 1 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-005",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT07 C3: nhiên liệu tên lửa",
    "prompt": "Nhiên liệu tên lửa đẩy tầu vũ trụ trong không gian sử dụng phản ứng dưới đây:\n\n$$\n\\mathrm{3Al(r) + 3NH_{4}ClO_{4}(r) \\to Al_{2}O_{3}(r) + AlCl_{3}(r) + 3NO(k) + 6H_{2}O(k)}\n$$\n\n| — | $\\mathrm{Al(r)}$ | $\\mathrm{NH_{4}ClO_{4}(r)}$ | $\\mathrm{Al_{2}O_{3}(r)}$ | $\\mathrm{AlCl_{3}(r)}$ | $\\mathrm{NO(k)}$ | $\\mathrm{H_{2}O(k)}$ |\n| --- | --- | --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{SN}$ (kJ/mol) | — | $-295$ | $-1676$ | $-704$ | 90 | $-242$ |\n| $S^\\circ$ (J/mol.K) | 28 | 186 | 51 | 111 | 211 | 189 |\n\nHãy xác định $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C và cho biết chiều hướng phản ứng ở nhiệt độ này?\n\nDữ kiện chung và quy ước tính: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-3)(-295) + (1)(-1676) + (1)(-704) + (3)(90) + (6)(-242)=-2677$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-3)(28) + (-3)(186) + (1)(51) + (1)(111) + (3)(211) + (6)(189)=1287$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=1{,}287$ kJ/K rồi $\\Delta G^\\circ=-2677-298(1{,}287)=-3060{,}526$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -2677 kJ; ΔS° = 1287 J/K; ΔG°₂₉₈ = -3060,526 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C3 (HK1 2015–2016, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-006",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT09 C3: sự tạo thành gỉ sắt",
    "prompt": "Sự tạo thành gỉ sắt bởi oxi tuân theo phương trình phản ứng: $\\mathrm{4Fe(r) + 3O_{2}(k) \\to 2Fe_{2}O_{3}(r)}$\n\n| — | $\\mathrm{Fe(r)}$ | $\\mathrm{O_{2}(k)}$ | $\\mathrm{Fe_{2}O_{3}(r)}$ |\n| --- | --- | --- | --- |\n| $\\Delta H^\\circ_{sn}$ (kJ/mol) | 0 | 0 | $-826$ |\n| $S^\\circ$ (J/mol.K) | 27 | 205 | 90 |\n\nXác định $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C và cho biết chiều hướng phản ứng ở nhiệt độ này?\n\nDữ kiện chung và quy ước tính: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\cdot10^{-19}$ J; $T$(K) = $t$(°C) + 273.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(2)(-826)=-1652$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-4)(27) + (-3)(205) + (2)(90)=-543$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}543$ kJ/K rồi $\\Delta G^\\circ=-1652-298(-0{,}543)=-1490{,}186$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -1652 kJ; ΔS° = -543 J/K; ΔG°₂₉₈ = -1490,186 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C3 (HK2 2015–2016, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-007",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT10 C3: silica, cacbon và clo",
    "prompt": "Phản ứng giữa silica và cacbon trong khí clo xảy ra theo phương trình dưới đây:\n\n$$\n\\mathrm{SiO_{2}(r) + 2C(graphit) + 2Cl_{2}(k) \\to SiCl_{4}(k) + 2CO(k)}\n$$\n\n| — | $\\mathrm{SiO_{2}(r)}$ | C(graphit) | $\\mathrm{Cl_{2}(k)}$ | $\\mathrm{SiCl_{4}(k)}$ | $\\mathrm{CO(k)}$ |\n| --- | --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{SN}$ (kJ/mol) | $-910{,}9$ | — | — | $-657{,}0$ | $-110{,}5$ |\n| $S^\\circ$ (J/mol.K) | 41,84 | 5,74 | 223,0 | 330,6 | 197,6 |\n\nHãy xác định $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C và cho biết chiều hướng phản ứng ở nhiệt độ này?\n\n[Sửa OCR] Bản OCR dồn ba giá trị $\\Delta H^\\circ$ thành một dãy; đã xếp lại đúng cột ($\\mathrm{SiO_{2}}$, $\\mathrm{SiCl_{4}}$, CO). Ô trống là đơn chất bền, $\\Delta H^\\circ_f = 0$.\n\nDữ kiện chung và quy ước tính: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-910{,}9) + (1)(-657) + (2)(-110{,}5)=32{,}9$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(41{,}84) + (-2)(5{,}74) + (-2)(223) + (1)(330{,}6) + (2)(197{,}6)=226{,}48$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}22648$ kJ/K rồi $\\Delta G^\\circ=32{,}9-298(0{,}22648)=-34{,}59104$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = 32,9 kJ; ΔS° = 226,48 J/K; ΔG°₂₉₈ = -34,59104 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C3 (HK1 2016–2017, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-008",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT11 C3: tạo axit phosphoric",
    "prompt": "Axit $\\mathrm{H_{3}PO_{4}(r)}$ được hình thành từ $\\mathrm{P_{4}O_{10}(r)}$ theo phản ứng sau: $\\mathrm{P_{4}O_{10}(r) + 6H_{2}O(l) \\to 4H_{3}PO_{4}(r)}$\n\n| — | $\\mathrm{P_{4}O_{10}(r)}$ | $\\mathrm{H_{2}O(l)}$ | $\\mathrm{H_{3}PO_{4}(r)}$ |\n| --- | --- | --- | --- |\n| $\\Delta H^\\circ_{SN}$ (kJ/mol) | $-2984$ | $-285{,}8$ | $-1281$ |\n| $S^\\circ$ (J/mol.K) | 228,9 | 69,91 | 110,5 |\n\nXác định $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C và cho biết chiều hướng phản ứng ở nhiệt độ này.\n\nDữ kiện chung và quy ước tính: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-2984) + (-6)(-285{,}8) + (4)(-1281)=-425{,}2$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(228{,}9) + (-6)(69{,}91) + (4)(110{,}5)=-206{,}36$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}20636$ kJ/K rồi $\\Delta G^\\circ=-425{,}2-298(-0{,}20636)=-363{,}7047$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -425,2 kJ; ΔS° = -206,36 J/K; ΔG°₂₉₈ = -363,7047 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C3 (HK2 2016–2017, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-009",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT12 C3: phản ứng CH₆N₂ với N₂O₅",
    "prompt": "Cho phản ứng oxi hóa – khử sau: $\\mathrm{CH_{6}N_{2}(l) + N_{2}O_{5}(r) \\to 2N_{2}(k) + CO_{2}(k) + 3H_{2}O(l)}$\n\n| — | $\\mathrm{CH_{6}N_{2}(l)}$ | $\\mathrm{N_{2}O_{5}(r)}$ | $\\mathrm{N_{2}(k)}$ | $\\mathrm{CO_{2}(k)}$ | $\\mathrm{H_{2}O(l)}$ |\n| --- | --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{\\text{sinh nhiệt}}$ (kJ/mol) | 54,0 | $-42{,}0$ | 0 | $-393{,}5$ | $-286{,}0$ |\n| $S^\\circ$ (J/mol.K) | 166,0 | 178,0 | 192,0 | 214,0 | 70,0 |\n\nHãy xác định $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C và cho biết chiều hướng phản ứng ở nhiệt độ này?\n\nDữ kiện chung và quy ước tính: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(54) + (-1)(-42) + (1)(-393{,}5) + (3)(-286)=-1263{,}5$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(166) + (-1)(178) + (2)(192) + (1)(214) + (3)(70)=464$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}464$ kJ/K rồi $\\Delta G^\\circ=-1263{,}5-298(0{,}464)=-1401{,}772$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n\n\nΔH° = -1263,5 kJ; ΔS° = 464 J/K; ΔG°₂₉₈ = -1401,772 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C3 (HK1 2017–2018, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-010",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT16 C3: khử oxit sắt bằng hydro",
    "prompt": "Sắt, thành phần chính trong thép, thu được qua phản ứng khử oxit sắt (III) bởi hydro: $\\mathrm{Fe_{2}O_{3}(r) + 3H_{2}(k) \\to 2Fe(r) + 3H_{2}O(k)}$\n\n| — | $\\mathrm{Fe_{2}O_{3}(r)}$ | $\\mathrm{H_{2}(k)}$ | $\\mathrm{Fe(r)}$ | $\\mathrm{H_{2}O(k)}$ |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{\\text{sinh nhiệt}}$ (kJ/mol) | $-824{,}2$ | — | — | $-241{,}8$ |\n| $S^\\circ$ (J.mol$^{-1}$.K$^{-1}$) | $+87{,}4$ | $+130{,}6$ | $+27{,}3$ | $+188{,}7$ |\n\nHãy tính $\\Delta G^\\circ$ và cho biết chiều hướng diễn biến của phản ứng tại điều kiện này.\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-824{,}2) + (3)(-241{,}8)=98{,}8$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(87{,}4) + (-3)(130{,}6) + (2)(27{,}3) + (3)(188{,}7)=141{,}5$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}1415$ kJ/K rồi $\\Delta G^\\circ=98{,}8-298(0{,}1415)=56{,}633$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n$\\Delta G^\\circ=0$ cho $T^*=\\Delta H^\\circ/\\Delta S^\\circ=98{,}8/0{,}1415=698{,}2332$ K. Vì ΔS° > 0 nên chiều thuận thuận lợi khi T > T*.\n\n\n\nΔH° = 98,8 kJ; ΔS° = 141,5 J/K; ΔG°₂₉₈ = 56,633 kJ. Chiều thuận không tự diễn biến ở trạng thái chuẩn. Tự diễn biến thuận khi T > 698,2332 K (t > 425,2332 °C theo quy ước +273).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C3 (Đề tổng hợp 6, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-011",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT06 C3: nhiệt độ bắt đầu khử oxit sắt",
    "prompt": "Cho sinh nhiệt và entropi của các chất sau ở điều kiện chuẩn (25 °C) các số liệu sau:\n\n| — | $\\mathrm{Fe_{2}O_{3}}$ (rắn) | $\\mathrm{H_{2}O}$ (khí) | Fe (rắn) | $\\mathrm{H_{2}}$ (khí) |\n| --- | --- | --- | --- | --- |\n| $\\Delta H_{sn}$ (kJ/mol) | $-822{,}2$ | $-241{,}8$ | — | — |\n| $S$ (J/mol.K) | 87,4 | 188,7 | 27,2 | 130,5 |\n\n-  Viết phương trình phản ứng khử $\\mathrm{Fe_{2}O_{3}}$ bằng $\\mathrm{H_{2}}$. Bằng tính toán cụ thể hãy cho biết ở 25 °C, hidro có khử được oxit sắt không?\n\n-  Nếu ở nhiệt độ trên phản ứng vẫn chưa xảy ra, thì cần nâng nhiệt độ (theo °C) lên bao nhiêu để quá trình khử bắt đầu xảy ra?\n\nDữ kiện chung và quy ước tính: $m_e = 9{,}11\\cdot10^{-31}$ kg; $h = 6{,}625\\cdot10^{-34}$ J.s; $e = 1{,}6\\cdot10^{-19}$ C; 1 eV = $1{,}6\\cdot10^{-19}$ J; 1 m = $10^9$ nm = $10^{10}$ Å; $c = 3\\cdot10^{8}$ m/s; $k_e = 9\\cdot10^{9}$ N.m$^2$/C$^2$.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-822{,}2) + (3)(-241{,}8)=96{,}8$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(87{,}4) + (3)(188{,}7) + (2)(27{,}2) + (-3)(130{,}5)=141{,}6$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}1416$ kJ/K rồi $\\Delta G^\\circ=96{,}8-298(0{,}1416)=54{,}6032$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n$\\Delta G^\\circ=0$ cho $T^*=\\Delta H^\\circ/\\Delta S^\\circ=96{,}8/0{,}1416=683{,}6158$ K. Vì ΔS° > 0 nên chiều thuận thuận lợi khi T > T*.\n\n$t^*=683{,}6158-273=410{,}6158$ °C. Đúng tại ngưỡng ΔG° = 0; phải cao hơn ngưỡng để ΔG° < 0.\n\nPhương trình cân bằng: $\\mathrm{Fe_2O_3(r)+3H_2(k)\\to2Fe(r)+3H_2O(k)}$. Điều kiện nhiệt động chưa bảo đảm phản ứng xảy ra nhanh.\n\nΔH° = 96,8 kJ; ΔS° = 141,6 J/K; ΔG°₂₉₈ = 54,6032 kJ. Chiều thuận không tự diễn biến ở trạng thái chuẩn. Tự diễn biến thuận khi T > 683,6158 K (t > 410,6158 °C theo quy ước +273).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT06 C3 (Hè 2013–2014, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-012",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT14 C3: đốt FeS và biến thiên nội năng",
    "prompt": "Phản ứng đốt cháy sắt sunfua (FeS) bằng oxi không khí được thực hiện như sau: $\\mathrm{2FeS(r) + 3O_{2}(k) \\to 2FeO(r) + 2SO_{2}(k)}$\n\n| — | FeS (rắn) | $\\mathrm{O_{2}}$ (khí) | FeO (rắn) | $\\mathrm{SO_{2}}$ (khí) |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{\\text{sinh nhiệt}}$ (kJ/mol) | $-95{,}0$ | 0 | $-272{,}0$ | $-297{,}0$ |\n| $S^\\circ$ (J/mol.K) | 67,0 | 205,0 | 61,0 | 248,0 |\n\n-  Hãy xác định biến thiên năng lượng tự do chuẩn $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C?\n\n-  Tính biến thiên nội năng $\\Delta U$ (kJ/mol) của hệ nhiệt động ở 25 °C.\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-2)(-95) + (2)(-272) + (2)(-297)=-948$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-2)(67) + (-3)(205) + (2)(61) + (2)(248)=-131$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}131$ kJ/K rồi $\\Delta G^\\circ=-948-298(-0{,}131)=-908{,}962$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\nΔn khí là tổng hệ số khí sản phẩm trừ tổng hệ số khí chất đầu; rắn và lỏng không được tính.\n\nChỉ đếm chất khí: Δn khí = -1.\n\n$\\Delta U^\\circ=\\Delta H^\\circ-\\Delta n_{\\text{khí}}RT=-948-(-1)(8{,}314)(298)/1000=-945{,}5224$ kJ.\n\n\n\nΔH° = -948 kJ; ΔS° = -131 J/K; ΔG°₂₉₈ = -908,962 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn. ΔU°₂₉₈ = -945,5224 kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C3 (Đề tổng hợp 3, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-013",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT15 C2: N₂O₄ phân hủy ở 25 °C",
    "prompt": "Cho hệ phản ứng $\\mathrm{N_{2}O_{4}}$ phân hủy như sau: $\\mathrm{N_{2}O_{4}(k) \\to 2NO_{2}(k)}$ với các dữ kiện nhiệt động học chuẩn:\n\n| — | $\\mathrm{N_{2}O_{4}(k)}$ | $\\mathrm{NO_{2}(k)}$ |\n| --- | --- | --- |\n| $\\Delta H^\\circ_{298\\,K}$ (kJ/mol) | 10 | 34 |\n| $S^\\circ_{298\\,K}$ (J/mol.K) | 304 | 240 |\n\n-  Hãy tính biến thiên năng lượng tự do $\\Delta G^\\circ$ của phản ứng trên ở 25 °C và cho biết ở điều kiện này phản ứng phân hủy $\\mathrm{N_{2}O_{4}}$ có xảy ra không?\n\n-  Nếu nâng nhiệt độ hệ lên 47 °C thì cân bằng dịch chuyển theo chiều thuận hay chiều nghịch? Tính hằng số cân bằng $K_p$ ở 47 °C với giả thiết $\\Delta H$ của phản ứng không thay đổi theo nhiệt độ trong khoảng 25–47 °C.\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(10) + (2)(34)=58$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-1)(304) + (2)(240)=176$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=0{,}176$ kJ/K rồi $\\Delta G^\\circ=58-298(0{,}176)=5{,}552$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\nPhần tương tác ở đây giải ý a (Dạng 3). Ý b về chuyển dịch cân bằng và Kp(320 K) được giải trong phần R1 ở chương 4. Không suy ra “hoàn toàn không có NO₂” từ ΔG° > 0; chiều thực tế còn phụ thuộc thành phần qua Q.\n\nΔH° = 58 kJ; ΔS° = 176 J/K; ΔG°₂₉₈ = 5,552 kJ. Chiều thuận không tự diễn biến ở trạng thái chuẩn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C2 (Đề tổng hợp 5, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-014",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT19 C3: tổng hợp ethanol từ ethylene",
    "prompt": "Trong công nghiệp, $\\mathrm{C_{2}H_{5}OH}$ được tổng hợp từ khí ethylene với hơi nước theo phản ứng: $\\mathrm{C_{2}H_{4}(k) + H_{2}O(k) \\rightleftharpoons C_{2}H_{5}OH(k)}$. Và các giá trị:\n\n| — | $\\mathrm{C_{2}H_{5}OH(k)}$ | $\\mathrm{C_{2}H_{4}(k)}$ | $\\mathrm{H_{2}O(k)}$ |\n| --- | --- | --- | --- |\n| $\\Delta G^\\circ_{298}$ (kJ/mol) | $-168{,}6$ | 68,12 | $-228{,}59$ |\n| $S^\\circ_{298}$ (J/mol.K) | 282 | 219,45 | 188,72 |\n\n-  Tại điều kiện chuẩn, nhiệt độ và áp suất không đổi, phản ứng xảy ra theo chiều nào?\n\n-  Tính $\\Delta H^\\circ_{298}$ của phản ứng và cho biết khi đó phản ứng tỏa nhiệt hay thu nhiệt?\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Bảng cho ΔG° tạo thành, nên chọn phương pháp nào?",
    "explanation": "Đọc đúng tiêu đề bảng: cột Gibbs không phải cột enthalpy.\n\n**Lời giải đầy đủ:**\n\nĐọc đúng tiêu đề bảng: cột Gibbs không phải cột enthalpy.\n\n$\\Delta G^\\circ=-168{,}6-[68{,}12+(-228{,}59)]$.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\n$\\Delta S^\\circ=282-(219{,}45+188{,}72)$.\n\n$\\Delta H^\\circ=\\Delta G^\\circ+T\\Delta S^\\circ=-8{,}13+298(-0{,}12617)=-45{,}72866$ kJ, âm nên tỏa nhiệt.\n\n\n\nΔG°₂₉₈ = -8,13 kJ, chiều thuận; ΔS° = -126,17 J/K; ΔH°₂₉₈ = -45,72866 kJ, tỏa nhiệt.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C3 (Đề tổng hợp 9, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cộng theo hệ số để tính ΔG° phản ứng trực tiếp, rồi dùng ΔH° = ΔG° + TΔS°"
      },
      {
        "id": "option-2",
        "label": "Coi cột ΔG° tạo thành là ΔH° tạo thành"
      },
      {
        "id": "option-3",
        "label": "Cộng entropy mà không nhân hệ số"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-015",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT20 C3: chiều phản ứng ở 300 K",
    "prompt": "Cho phản ứng: $\\mathrm{NH_{4}OCONH_{2} \\to CO_{2} + 2NH_{3}}$\n\n| — | $\\mathrm{NH_{4}OCONH_{2}}$ | $\\mathrm{CO_{2}}$ | $\\mathrm{NH_{3}}$ |\n| --- | --- | --- | --- |\n| $\\Delta H_{sn,\\,300K}$ (kcal/mol) | $-154{,}4$ | $-94{,}1$ | $-11$ |\n| $\\Delta G_{300K}$ (kcal/mol) | $-109{,}6$ | $-94{,}4$ | $-3{,}98$ |\n\nHỏi ở điều kiện nhiệt độ 300 K phản ứng xảy ra theo chiều nào? Ở nhiệt độ nào phản ứng diễn ra theo chiều ngược lại?\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề dùng kcal và cho cả ΔH, ΔG ở 300 K: nên lập gì?",
    "explanation": "Giữ nhất quán đơn vị kcal và đúng nhiệt độ 300 K. Muốn ngoại suy ngưỡng đổi chiều phải coi ΔH, ΔS gần như không đổi.\n\n**Lời giải đầy đủ:**\n\nGiữ nhất quán đơn vị kcal và đúng nhiệt độ 300 K. Muốn ngoại suy ngưỡng đổi chiều phải coi ΔH, ΔS gần như không đổi.\n\n$[-94{,}1+2(-11)]-(-154{,}4)$.\n\n$[-94{,}4+2(-3{,}98)]-(-109{,}6)>0$, nên chiều nghịch tự diễn biến ở trạng thái chuẩn.\n\n$\\Delta S^\\circ=(38{,}3-7{,}24)/300=0{,}1035333$ kcal/K.\n\n$T^*=38{,}3/0{,}1035333=369{,}9292$ K. ΔH° > 0, ΔS° > 0: chiều thuận thuận lợi khi T > T*.\n\nĐường ΔG° = ΔH° − TΔS° dốc xuống: phía dưới trục hoành nằm bên phải giao điểm T*.\n\nCụm “chiều ngược lại” được hiểu là đảo so với chiều nghịch đang thuận lợi ở 300 K; tính ngưỡng nhiệt độ theo giả thiết ΔH°, ΔS° không đổi (giữ nguyên đề bài không ghi trạng thái các chất).\n\n300 K: ΔG° = +7,24 kcal, chiều nghịch. T* = 369,9292 K; thuận khi T > T*, nghịch khi T < T*.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C3 (Đề tổng hợp 10, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu; tính ΔS = (ΔH − ΔG)/300 rồi vẽ ΔG theo T"
      },
      {
        "id": "option-2",
        "label": "Dùng 298 K và đổi riêng ΔH sang kJ"
      },
      {
        "id": "option-3",
        "label": "Dùng số liệu kcal như số liệu J"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-016",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT21 C3: độ bền nhiệt động của O₂ và H₂S",
    "prompt": "Cho các dữ kiện nhiệt động sau:\n\n| — | $\\mathrm{O_{2}(k)}$ | S(r) | $\\mathrm{H_{2}S(k)}$ | $\\mathrm{H_{2}O(k)}$ |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{298}$ (kJ.mol$^{-1}$) | 0 | 0 | $-20{,}083$ | $-241{,}83$ |\n| $S^\\circ_{298}$ (J.mol$^{-1}$.K$^{-1}$) | 205,058 | 31,882 | 205,434 | 188,824 |\n\n-  Dựa trên tính toán các hàm nhiệt động, hãy cho biết hỗn hợp $\\mathrm{O_{2}}$ và $\\mathrm{H_{2}S}$ ở điều kiện tiêu chuẩn có bền không? Nếu như giả thiết có phản ứng theo sơ đồ sau: $\\mathrm{H_{2}S(k) + 1/2O_{2}(k) \\rightleftharpoons S(r) + H_{2}O(k)}$\n\n-  Tính biến thiên nội năng $\\Delta U$ của phản ứng nêu trên ở điều kiện tiêu chuẩn.\n\nDữ kiện chung và quy ước tính: Không in dữ kiện chung riêng; theo Phụ lục A dùng $R=8{,}314$ J/(mol·K) hoặc $0{,}082$ L·atm/(mol·K). Quy ước $T(\\mathrm{K})=t(^{\\circ}\\mathrm{C})+273$, nên 25 °C ứng với 298 K.\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-1)(-20{,}083) + (1)(-241{,}83)=-221{,}747$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-0{,}5)(205{,}058) + (1)(31{,}882) + (-1)(205{,}434) + (1)(188{,}824)=-87{,}257$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}087257$ kJ/K rồi $\\Delta G^\\circ=-221{,}747-298(-0{,}087257)=-195{,}7444$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\nΔn khí là tổng hệ số khí sản phẩm trừ tổng hệ số khí chất đầu; rắn và lỏng không được tính.\n\nChỉ đếm chất khí: Δn khí = -0,5.\n\n$\\Delta U^\\circ=\\Delta H^\\circ-\\Delta n_{\\text{khí}}RT=-221{,}747-(-0{,}5)(8{,}314)(298)/1000=-220{,}5082$ kJ.\n\n\n\nΔH° = -221,747 kJ; ΔS° = -87,257 J/K; ΔG°₂₉₈ = -195,7444 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn. ΔU°₂₉₈ = -220,5082 kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C3 (Đề tổng hợp 11, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-exam-017",
    "lessonId": "gc-gibbs",
    "title": "Đề ĐT23 C3: đốt CuS, ΔG° và ΔU",
    "prompt": "Phản ứng đốt cháy đồng sunfua (CuS) bằng oxi không khí được thực hiện như sau: $\\mathrm{2CuS(r) + 3O_{2}(k) \\to 2CuO(r) + 2SO_{2}(k)}$\n\n| — | CuS(r) | $\\mathrm{O_{2}(k)}$ | CuO(r) | $\\mathrm{SO_{2}(k)}$ |\n| --- | --- | --- | --- | --- |\n| $\\Delta H^\\circ_{sn}$ (kJ/mol) | $-93{,}1$ | 0 | $-156{,}0$ | $-296{,}8$ |\n| $S^\\circ$ (J/mol.K) | 66,5 | 205,0 | 42,6 | 248,0 |\n\n-  Hãy xác định biến thiên năng lượng tự do chuẩn $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C?\n\n-  Tính biến thiên nội năng $\\Delta U$ (kJ/mol) của hệ nhiệt động ở 25 °C.\n\nDữ kiện chung và quy ước tính: $h = 6{,}626\\cdot10^{-34}$ J.s; $c = 3\\cdot10^{8}$ m/s; $R_H = 109722$ cm$^{-1}$; 1 eV = $1{,}602\\cdot10^{-19}$ J; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; có in bảng tuần hoàn.\n\nTrong các phép tính nhiệt động ở 25 °C, dùng 298 K và R = 8,314 J/(mol·K); khi đổi sang kJ chia cho 1000. Khi tính thể tích khí dùng R = 0,082 L·atm/(mol·K).\n\n**Câu hỏi:** Đề cho bảng nhiệt động: nên vẽ hoặc lập gì trước khi tính?",
    "explanation": "Nhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n**Lời giải đầy đủ:**\n\nNhân giá trị của từng chất với hệ số trước khi cộng. Đơn chất bền có ΔH°f = 0 nhưng entropy S° vẫn khác 0.\n\n$\\Delta H^\\circ=(-2)(-93{,}1) + (2)(-156) + (2)(-296{,}8)=-719{,}4$ kJ. Các hệ số âm ứng với chất đầu, dương ứng với sản phẩm.\n\n$\\Delta S^\\circ=(-2)(66{,}5) + (-3)(205) + (2)(42{,}6) + (2)(248)=-166{,}8$ J/K. Không bỏ entropy của đơn chất.\n\nĐổi $\\Delta S^\\circ=-0{,}1668$ kJ/K rồi $\\Delta G^\\circ=-719{,}4-298(-0{,}1668)=-669{,}6936$ kJ.\n\nTiêu chuẩn chiều dùng ΔG ở thành phần thực tế; khi xét các chất ở trạng thái chuẩn, ΔG = ΔG°. Kết luận nhiệt động không cho biết tốc độ phản ứng.\n\nΔn khí là tổng hệ số khí sản phẩm trừ tổng hệ số khí chất đầu; rắn và lỏng không được tính.\n\nChỉ đếm chất khí: Δn khí = -1.\n\n$\\Delta U^\\circ=\\Delta H^\\circ-\\Delta n_{\\text{khí}}RT=-719{,}4-(-1)(8{,}314)(298)/1000=-716{,}9224$ kJ.\n\n\n\nΔH° = -719,4 kJ; ΔS° = -166,8 J/K; ΔG°₂₉₈ = -669,6936 kJ. Chiều thuận tự diễn biến ở trạng thái chuẩn. ΔU°₂₉₈ = -716,9224 kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/exam-dang-3-4.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C3 (HK1 2022–2023 Ca 2, Đề tổng hợp 13, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bảng sản phẩm − chất đầu có dòng hệ số phản ứng; sau đó xét dấu ΔG°"
      },
      {
        "id": "option-2",
        "label": "Thang mức Bohr và mũi tên photon"
      },
      {
        "id": "option-3",
        "label": "Sơ đồ pin và chiều electron"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-eq-003",
    "lessonId": "gc-gibbs",
    "title": "Ảnh hưởng của dấu ΔH, ΔS đến chiều phản ứng",
    "prompt": "Dựa vào $\\Delta G = \\Delta H - T\\Delta S$, cho biết phản ứng tự diễn biến ở điều kiện nào trong các trường hợp sau (coi ΔH, ΔS không đổi theo T):\n\n1. ΔH < 0, ΔS > 0\n2. ΔH > 0, ΔS < 0\n3. ΔH < 0, ΔS < 0\n4. ΔH > 0, ΔS > 0\n\n**Câu hỏi:** Trường hợp 1 (ΔH < 0, ΔS > 0):",
    "explanation": "Cả hai số hạng đều làm ΔG âm.\n\n**Lời giải đầy đủ:**\n\n| ΔH | ΔS | ΔG = ΔH − TΔS | Tự diễn biến |\n|---|---|---|---|\n| < 0 | > 0 | luôn < 0 | mọi nhiệt độ |\n| > 0 | < 0 | luôn > 0 | không bao giờ |\n| < 0 | < 0 | < 0 khi T nhỏ | khi $T < \\Delta H/\\Delta S$ |\n| > 0 | > 0 | < 0 khi T lớn | khi $T > \\Delta H/\\Delta S$ |",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs-equilibrium.json",
      "rights": "approved",
      "attribution": "Tổng hợp từ tiêu chí ΔG trang 32."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tự diễn biến ở mọi nhiệt độ"
      },
      {
        "id": "option-2",
        "label": "Không bao giờ"
      },
      {
        "id": "option-3",
        "label": "Chỉ ở T thấp"
      },
      {
        "id": "option-4",
        "label": "Chỉ ở T cao"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-gibbs-001",
    "lessonId": "gc-gibbs",
    "title": "ΔG° của phản ứng phân hủy KClO₃",
    "prompt": "(Trang 33.) Với $\\mathrm{4KClO_3(s) \\to 3KClO_4(s) + KCl(s)}$: $\\Delta H^\\circ = -144$ kJ; $\\Delta S^\\circ = -36{,}8$ J/K. Tính $\\Delta G^\\circ$ ở 298 K và kết luận.\n\n**Câu hỏi:** Kết luận:",
    "explanation": "ΔG° < 0.\n\n**Lời giải đầy đủ:**\n\n$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -144 - 298\\times\\left(\\frac{-36{,}8}{1000}\\right) = -144 + 11{,}0 = -133\\ \\text{kJ}$$\n\n$\\Delta G^\\circ < 0$ → phản ứng tự diễn biến ở điều kiện chuẩn, 298 K.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 33 bài giảng (có lời giải mẫu)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Phản ứng tự diễn biến ở 298 K"
      },
      {
        "id": "option-2",
        "label": "Phản ứng không tự diễn biến"
      },
      {
        "id": "option-3",
        "label": "Hệ ở trạng thái cân bằng"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-gibbs-002",
    "lessonId": "gc-gibbs",
    "title": "Bài 18: Hỗn hợp O₂ và H₂S có bền không?",
    "prompt": "(Bài 18, trang 40.) Cho:\n\n| Chất | $\\Delta H^\\circ_{298}$ (kJ/mol) | $S^\\circ_{298}$ (J/(mol·K)) |\n|---|---|---|\n| $\\mathrm{O_2(k)}$ | 0 | 205,058 |\n| $\\mathrm{S(r)}$ | 0 | 31,882 |\n| $\\mathrm{H_2O(k)}$ | −241,835 | 188,824 |\n| $\\mathrm{H_2S(k)}$ | −20,083 | 205,434 |\n\nHỗn hợp oxi và $\\mathrm{H_2S}$ ở điều kiện tiêu chuẩn có bền không, giả thiết có phản ứng $\\mathrm{H_2S(k) + \\tfrac12O_2(k) \\to H_2O(k) + S(r)}$?\n\n**Câu hỏi:** Kết luận về hỗn hợp:",
    "explanation": "ΔG° < 0 → phản ứng tự diễn biến; hỗn hợp chỉ có thể tồn tại nếu tốc độ phản ứng rất chậm (yếu tố động học).\n\n**Lời giải đầy đủ:**\n\n$$\\Delta H^\\circ = (-241{,}835 + 0) - (-20{,}083 + 0) = -221{,}75\\ \\text{kJ}$$\n\n$$\\Delta S^\\circ = (188{,}824 + 31{,}882) - \\left(205{,}434 + \\tfrac12\\times205{,}058\\right) = -87{,}26\\ \\text{J/K}$$\n\n$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -221{,}75 - 298{,}15\\times(-0{,}08726) = -195{,}7\\ \\text{kJ}$$\n\n$\\Delta G^\\circ \\ll 0$ → hỗn hợp $\\mathrm{H_2S}$ và $\\mathrm{O_2}$ **không bền về mặt nhiệt động**. (Nhiệt động học không cho biết tốc độ — trên thực tế phản ứng có thể chậm ở nhiệt độ thường.)",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs.json",
      "rights": "approved",
      "attribution": "Bài 18 trang 40 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Không bền về mặt nhiệt động: phản ứng có xu hướng tự xảy ra"
      },
      {
        "id": "option-2",
        "label": "Bền về mặt nhiệt động"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-gibbs-003",
    "lessonId": "gc-gibbs",
    "title": "Bài 19: Nhiệt độ bắt đầu phân hủy PCl₅",
    "prompt": "(Bài 19, trang 41.) Ở nhiệt độ nào phản ứng $\\mathrm{PCl_5 \\to PCl_3 + Cl_2}$ bắt đầu xảy ra? Cho:\n\n| Chất | $\\Delta H^\\circ_{298}$ (kJ/mol) | $S^\\circ_{298}$ (J/(mol·K)) |\n|---|---|---|\n| $\\mathrm{PCl_5}$ | −369,447 | 352,7 |\n| $\\mathrm{PCl_3}$ | −279,073 | 312,1 |\n| $\\mathrm{Cl_2}$ | 0 | 223,0 |\n\n**Câu hỏi:** ΔH° > 0 và ΔS° > 0 nên phản ứng tự diễn biến khi:",
    "explanation": "ΔG = ΔH − TΔS < 0 ⇔ T > ΔH/ΔS (số hạng −TΔS thắng ΔH ở nhiệt độ cao).\n\n**Lời giải đầy đủ:**\n\n$$\\Delta H^\\circ = -279{,}073 + 0 - (-369{,}447) = 90{,}37\\ \\text{kJ}$$\n\n$$\\Delta S^\\circ = 312{,}1 + 223{,}0 - 352{,}7 = 182{,}4\\ \\text{J/K}$$\n\nPhản ứng bắt đầu tự diễn biến khi $\\Delta G^\\circ < 0$:\n\n$$T > \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{90374\\ \\text{J}}{182{,}4\\ \\text{J/K}} \\approx 495\\ \\text{K}\\ (\\approx 222\\ ^\\circ\\text{C})$$\n\n(Giả thiết ΔH° và ΔS° không phụ thuộc nhiệt độ.)",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs.json",
      "rights": "approved",
      "attribution": "Bài 19 trang 41 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "T > ΔH°/ΔS°"
      },
      {
        "id": "option-2",
        "label": "T < ΔH°/ΔS°"
      },
      {
        "id": "option-3",
        "label": "Mọi nhiệt độ"
      },
      {
        "id": "option-4",
        "label": "Không bao giờ"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-gibbs-004",
    "lessonId": "gc-gibbs",
    "title": "Tổ hợp ΔG: khử Cu₂O bằng C",
    "prompt": "(Trang 34.) Ở 375 K:\n\n(1) $\\mathrm{Cu_2O(s) \\to 2Cu(s) + \\tfrac12O_2(g)}$, $\\Delta G_{375} = 140{,}0$ kJ\n\n(2) $\\mathrm{C(s) + \\tfrac12O_2(g) \\to CO(g)}$, $\\Delta G_{375} = -143{,}8$ kJ\n\nTính $\\Delta G_{375}$ của $\\mathrm{Cu_2O(s) + C(s) \\to 2Cu(s) + CO(g)}$. Phản ứng có tự diễn biến ở 375 K không?\n\n**Câu hỏi:** Kết luận:",
    "explanation": "Phản ứng (1) không tự xảy ra nhưng được “ghép” với phản ứng (2) có ΔG âm hơn.\n\n**Lời giải đầy đủ:**\n\nCộng (1) và (2) (½O₂ triệt tiêu):\n\n$$\\Delta G_{375} = 140{,}0 + (-143{,}8) = -3{,}8\\ \\text{kJ} < 0$$\n\nPhản ứng tự diễn biến ở 375 K. Đây là nguyên tắc **ghép cặp phản ứng**: phản ứng không thuận lợi được thúc đẩy bởi phản ứng rất thuận lợi.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs.json",
      "rights": "approved",
      "attribution": "Ví dụ trang 34 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tự diễn biến (ΔG < 0)"
      },
      {
        "id": "option-2",
        "label": "Không tự diễn biến"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-gibbs-005",
    "lessonId": "gc-gibbs",
    "title": "Câu 3: tổng hợp etanol từ etilen",
    "prompt": "(Câu 3, trang 47.) Trong công nghiệp, $\\mathrm{C_2H_5OH}$ được tổng hợp theo phản ứng $\\mathrm{C_2H_4(k) + H_2O(k) \\rightleftharpoons C_2H_5OH(k)}$. Cho:\n\n| | $\\mathrm{C_2H_5OH(k)}$ | $\\mathrm{C_2H_4(k)}$ | $\\mathrm{H_2O(k)}$ |\n|---|---|---|---|\n| $\\Delta G^\\circ_{298}$ (kJ/mol) | −168,6 | 68,12 | −228,59 |\n| $S^\\circ_{298}$ (J/(mol·K)) | 282 | 219,45 | 188,72 |\n\na) Ở điều kiện chuẩn, phản ứng xảy ra theo chiều nào?\n\nb) Tính $\\Delta H^\\circ_{298}$ và cho biết phản ứng tỏa nhiệt hay thu nhiệt.\n\n**Câu hỏi:** Chiều phản ứng ở điều kiện chuẩn:",
    "explanation": "ΔG° < 0 → chiều thuận.\n\n**Lời giải đầy đủ:**\n\na) $\\Delta G^\\circ = -168{,}6 - (68{,}12 - 228{,}59) = -8{,}13$ kJ < 0 → phản ứng xảy ra theo **chiều thuận**.\n\nb) $\\Delta S^\\circ = 282 - (219{,}45 + 188{,}72) = -126{,}17$ J/K.\n\n$$\\Delta H^\\circ = \\Delta G^\\circ + T\\Delta S^\\circ = -8{,}13 + 298\\times(-0{,}1262) = -45{,}7\\ \\text{kJ}$$\n\n$\\Delta H^\\circ < 0$ → phản ứng **tỏa nhiệt**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs.json",
      "rights": "approved",
      "attribution": "Câu 3 trang 47 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chiều thuận"
      },
      {
        "id": "option-2",
        "label": "Chiều nghịch"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-gibbs-006",
    "lessonId": "gc-gibbs",
    "title": "Quang hợp: không tự xảy ra nhưng nhờ ánh sáng",
    "prompt": "(Trang 46.) Quá trình quang hợp chuyển $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$ thành glucose và $\\mathrm{O_2}$.\n\na) Viết phương trình quang hợp tạo $\\mathrm{C_6H_{12}O_6(s)}$ và $\\mathrm{O_2(g)}$.\n\nb) Tính $\\Delta G^\\circ$ và chứng minh quá trình không tự xảy ra.\n\nc) Cây hấp thụ ánh sáng $\\lambda = 560$ nm. Tính số mol photon cần để tạo 1 mol glucose nếu hiệu suất chuyển hóa năng lượng là 32%.\n\n| | $\\mathrm{C_6H_{12}O_6(s)}$ | $\\mathrm{O_2(g)}$ | $\\mathrm{CO_2(g)}$ | $\\mathrm{H_2O(g)}$ |\n|---|---|---|---|---|\n| $\\Delta H^\\circ$ (kJ/mol) | −1268 | 0 | −393,5 | −241,8 |\n| $S^\\circ$ (J/(mol·K)) | 212 | 205,14 | 213,74* | 188,83 |\n\n\\*Slide ghi $S^\\circ(\\mathrm{CO_2}) = -213{,}74$; entropy tuyệt đối không thể âm, lời giải dùng giá trị **+213,74**.\n\n**Câu hỏi:** Hệ số của CO₂ trong phương trình cân bằng (1 mol glucose)?",
    "explanation": "$\\mathrm{6CO_2 + 6H_2O \\to C_6H_{12}O_6 + 6O_2}$.\n\n**Lời giải đầy đủ:**\n\na) $\\mathrm{6CO_2(g) + 6H_2O(g) \\to C_6H_{12}O_6(s) + 6O_2(g)}$\n\nb)\n$$\\Delta H^\\circ = -1268 - [6(-393{,}5) + 6(-241{,}8)] = 2543{,}8\\ \\text{kJ}$$\n\n$$\\Delta S^\\circ = [212 + 6(205{,}14)] - [6(213{,}74) + 6(188{,}83)] = -972{,}6\\ \\text{J/K}$$\n\n$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 2543{,}8 - 298\\times(-0{,}9726) = 2834\\ \\text{kJ} > 0$$\n\nΔH° > 0 và ΔS° < 0 nên ΔG° > 0 ở **mọi** nhiệt độ → quang hợp không tự xảy ra; cần năng lượng ánh sáng.\n\nc) Năng lượng 1 mol photon: $E = \\dfrac{hcN_A}{\\lambda} = \\dfrac{6{,}626\\times10^{-34}\\times3{,}00\\times10^8\\times6{,}022\\times10^{23}}{560\\times10^{-9}} = 213{,}8$ kJ/mol.\n\nCoi năng lượng cần tích trữ là $\\Delta G^\\circ$; với hiệu suất 32%:\n\n$$n_\\text{photon} = \\frac{2834}{0{,}32\\times213{,}8} \\approx 41{,}4\\ \\text{mol photon}$$\n\n> Câu c có thể được hiểu theo ΔH° thay vì ΔG°; nếu dùng ΔH° thì kết quả là ≈ 37{,}2 mol photon. Hãy đối chiếu với cách hiểu của giảng viên.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs.json",
      "rights": "approved",
      "attribution": "Bài trang 46; sửa dấu S°(CO₂) bị in nhầm."
    },
    "kind": "short-answer",
    "answers": [
      "6"
    ]
  },
  {
    "id": "gc-c3-eq-001",
    "lessonId": "gc-gibbs-equilibrium",
    "title": "Bài 22: cân bằng 2NO₂ ⇌ N₂O₄",
    "prompt": "(Bài 22, trang 42.) Xét phản ứng $\\mathrm{2NO_2 \\rightleftharpoons N_2O_4}$. Cho $\\Delta G^\\circ_f(\\mathrm{N_2O_4}) = 97{,}82$ kJ/mol; $\\Delta G^\\circ_f(\\mathrm{NO_2}) = 51{,}30$ kJ/mol.\n\na) Xác định $\\Delta G^\\circ$ và $K_P$ ở 25 °C.\n\nb) Xác định $\\Delta G^\\circ$ và $K_P$ của phản ứng nghịch $\\mathrm{N_2O_4 \\rightleftharpoons 2NO_2}$.\n\nc) Xác định $\\Delta G^\\circ$ và $K_P$ của phản ứng $\\mathrm{NO_2 \\rightleftharpoons \\tfrac12 N_2O_4}$.\n\n**Câu hỏi:** Công thức liên hệ ΔG° và K:",
    "explanation": "$\\Delta G^\\circ = -RT\\ln K$ → $K = e^{-\\Delta G^\\circ/RT}$.\n\n**Lời giải đầy đủ:**\n\na) $\\Delta G^\\circ = 97{,}82 - 2(51{,}30) = -4{,}78$ kJ;\n$K_P = \\exp\\left(\\dfrac{4780}{8{,}314\\times298{,}15}\\right) = 6{,}88$.\n\nb) Phản ứng nghịch: $\\Delta G^\\circ = +4{,}78$ kJ; $K_P = \\dfrac{1}{6{,}88} = 0{,}145$.\n\nc) Nhân phương trình với ½: $\\Delta G^\\circ = -2{,}39$ kJ; $K_P = (6{,}88)^{1/2} = 2{,}62$.\n\nQuy tắc: đảo chiều → $K' = 1/K$; nhân hệ số n → $K' = K^n$ (tương ứng ΔG° đổi dấu hoặc nhân n).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs-equilibrium.json",
      "rights": "approved",
      "attribution": "Bài 22 trang 42 bài giảng."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$K = e^{-\\Delta G^\\circ/RT}$"
      },
      {
        "id": "option-2",
        "label": "$K = e^{\\Delta G^\\circ/RT}$"
      },
      {
        "id": "option-3",
        "label": "$K = -RT\\ln\\Delta G^\\circ$"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-eq-002",
    "lessonId": "gc-gibbs-equilibrium",
    "title": "Bài 7: Hỗn hợp A₂, B₂ và AB",
    "prompt": "(Bài 7, trang 43–45.) $\\mathrm{A_2}$ (màu đen) và $\\mathrm{B_2}$ (màu xanh lá) phản ứng tạo AB: $\\mathrm{A_2(g) + B_2(g) \\rightleftharpoons 2AB(g)}$, $\\Delta G^\\circ = -3{,}4$ kJ/mol. Giả thiết mỗi phân tử trong hình đóng góp áp suất riêng phần 0,1 atm.\n\n![Ba hỗn hợp A2, B2, AB](images/chapter-3/bai7-a2-b2.png)\n\nĐếm phân tử: hỗn hợp 1: 2 A₂, 2 B₂, 4 AB; hỗn hợp 2: 3 A₂, 3 B₂, 2 AB; hỗn hợp 3: 1 A₂, 1 B₂, 6 AB.\n\na) Nếu hỗn hợp 1 là trạng thái cân bằng, tính $K_P$.\n\nb) Tính ΔG của các hỗn hợp 1, 2, 3 (dùng nhiệt độ ứng với K ở câu a).\n\nc) Nếu $P_{A_2} = P_{B_2} = P_{AB} = 1$ atm, phản ứng diễn ra theo chiều nào?\n\n**Câu hỏi:** Hỗn hợp 3 sẽ dịch chuyển theo chiều:",
    "explanation": "ΔG > 0 (Q > K) → chiều nghịch.\n\n**Lời giải đầy đủ:**\n\na) $K_P = \\dfrac{P_{AB}^2}{P_{A_2}P_{B_2}} = \\dfrac{(0{,}40)^2}{(0{,}20)(0{,}20)} = 4{,}0$ → $T = \\dfrac{3400}{8{,}314\\ln4{,}0} = 295$ K.\n\nb) $\\Delta G = \\Delta G^\\circ + RT\\ln Q$:\n\n| Hỗn hợp | Q | ΔG (J) | Kết luận |\n|---|---|---|---|\n| 1 | 4,0 | 0 | cân bằng |\n| 2 | 0,444 | $-5389$ | chiều thuận |\n| 3 | 36 | $5389$ | chiều nghịch |\n\nc) $Q = \\dfrac{1^2}{1\\cdot1} = 1$ → $\\Delta G = \\Delta G^\\circ = -3{,}4$ kJ < 0 → phản ứng diễn ra theo **chiều thuận**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/gibbs-equilibrium.json",
      "rights": "approved",
      "attribution": "Bài 7 trang 43–45 bài giảng (có lời giải mẫu)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nghịch (tạo thêm A₂, B₂)"
      },
      {
        "id": "option-2",
        "label": "Thuận"
      },
      {
        "id": "option-3",
        "label": "Đã cân bằng"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-draw-001",
    "lessonId": "gc-thermo-drawing-guide",
    "title": "Đề ĐT25 C3: nhiệt phân NH₄Cl và nhiệt độ đổi chiều",
    "prompt": "Cho phản ứng: $\\mathrm{NH_4Cl(r) \\to HCl(k) + NH_3(k)}$.\n\n| Hợp chất | $\\Delta H^\\circ_{sn}$ (kJ/mol) | $S^\\circ$ (J/mol·K) |\n|---|---|---|\n| NH₄Cl(r) | −314 | 95 |\n| HCl(k) | −92 | 187 |\n| NH₃(k) | −46 | 193 |\n\nCoi $\\Delta H^\\circ$ và $\\Delta S^\\circ$ không phụ thuộc vào nhiệt độ.\n\na) Tính $\\Delta H^\\circ$ và $\\Delta S^\\circ$ của phản ứng ở 25 °C.\n\nb) Tính $\\Delta G^\\circ$ ở 25 °C và cho biết chiều hướng của phản ứng ở nhiệt độ này.\n\nc) Ở khoảng nhiệt độ nào phản ứng tự xảy ra?\n\n**Câu hỏi:** Đường ΔG° theo T của phản ứng này thuộc trường hợp nào?",
    "explanation": "ΔH° > 0 (cắt trục tung ở trên), ΔS° > 0 (đường đi xuống) → cắt trục hoành tại T*.\n\n**Lời giải đầy đủ:**\n\n$\\Delta H^\\circ = +176$ kJ; $\\Delta S^\\circ = +285$ J/K; $\\Delta G^\\circ_{298} = 176 - 298 \\times 0{,}285 = +91{,}07$ kJ > 0: không tự xảy ra ở 25 °C.\n\nΔH° > 0, ΔS° > 0: $T^* = 176/0{,}285 = 617{,}5$ K; phản ứng tự xảy ra khi **T > 617,5 K**.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C3 (HK2 2023–2024). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "ΔH° < 0, ΔS° > 0: luôn tự xảy ra"
      },
      {
        "id": "option-2",
        "label": "ΔH° > 0, ΔS° < 0: không bao giờ tự xảy ra"
      },
      {
        "id": "option-3",
        "label": "ΔH° < 0, ΔS° < 0: tự xảy ra khi T < T*"
      },
      {
        "id": "option-4",
        "label": "ΔH° > 0, ΔS° > 0: tự xảy ra khi T > T*"
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c3-draw-002",
    "lessonId": "gc-thermo-drawing-guide",
    "title": "Đề ĐT28 C3: đốt CO — ΔH°, ΔS°, ΔG°, ΔU°",
    "prompt": "Cho phản ứng ở 298 K: $\\mathrm{2CO(k) + O_2(k) \\to 2CO_2(k)}$.\n\n| | O₂(k) | CO(k) | CO₂(k) |\n|---|---|---|---|\n| $\\Delta H^\\circ_{sn}$ (kJ/mol) | 0 | −110,5 | −393,5 |\n| $S^\\circ$ (J/mol·K) | 205,0 | 197,7 | 213,7 |\n\nTính $\\Delta H^\\circ$, $\\Delta S^\\circ$, $\\Delta G^\\circ$, $\\Delta U^\\circ$ của phản ứng và cho biết chiều phản ứng.\n\n**Câu hỏi:** Đường ΔG° theo T thuộc trường hợp nào?",
    "explanation": "ΔH° < 0, ΔS° < 0: phản ứng tự xảy ra ở nhiệt độ thấp (T < T* ≈ 3272 K). Tăng nhiệt độ làm cân bằng dịch theo chiều nghịch (phản ứng tỏa nhiệt).\n\n**Lời giải đầy đủ:**\n\n$\\Delta H^\\circ = -566$ kJ; $\\Delta S^\\circ = -173$ J/K; $\\Delta G^\\circ = -514{,}45$ kJ < 0: chiều thuận. $\\Delta n_\\text{khí} = -1$ nên $\\Delta U^\\circ = -566 + 2{,}478 = -563{,}5$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C3 (Hè 2025–2026). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "ΔH° < 0, ΔS° > 0: luôn tự xảy ra"
      },
      {
        "id": "option-2",
        "label": "ΔH° > 0, ΔS° < 0: không bao giờ tự xảy ra"
      },
      {
        "id": "option-3",
        "label": "ΔH° < 0, ΔS° < 0: tự xảy ra khi T < T*"
      },
      {
        "id": "option-4",
        "label": "ΔH° > 0, ΔS° > 0: tự xảy ra khi T > T*"
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c3-draw-003",
    "lessonId": "gc-thermo-drawing-guide",
    "title": "Đề ĐT26 C3: tính ngược ΔH° từ ΔG°",
    "prompt": "Phản ứng tổng hợp C₂H₅OH ở 298 K: $\\mathrm{2C(r) + 3H_2(k) + \\tfrac12 O_2(k) \\to C_2H_5OH(k)}$ có $\\Delta G^\\circ = -168{,}57$ kJ/mol. Biết $S^\\circ$ (J/mol·K): C(r) 5,74; H₂(k) 130,57; O₂(k) 205,04; C₂H₅OH(k) 274,2. Hãy tính $\\Delta H^\\circ$ và $\\Delta U^\\circ$ của phản ứng.\n\n**Câu hỏi:** $\\Delta S^\\circ$ (J/K)?\n\n*(Nhập giá trị số theo đơn vị J/K)*",
    "explanation": "$274{,}2 - [2(5{,}74) + 3(130{,}57) + 0{,}5(205{,}04)] = -231{,}51$ J/K.\n\n**Lời giải đầy đủ:**\n\n$\\Delta S^\\circ = -231{,}51$ J/K. $\\Delta H^\\circ = \\Delta G^\\circ + T\\Delta S^\\circ = -237{,}56$ kJ. $\\Delta n_\\text{khí} = -2{,}5$ (C rắn không tính) nên $\\Delta U^\\circ = -237{,}56 + 2{,}5 \\times 2{,}478 = -231{,}37$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C3 (HK1 2024–2025). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "short-answer",
    "answers": [
      "-231.51",
      "-231,51"
    ]
  },
  {
    "id": "gc-c3-draw-004",
    "lessonId": "gc-thermo-drawing-guide",
    "title": "Tìm lỗi: bài HCN (đề ĐT24 C3)",
    "prompt": "Đề ĐT24 C3: $\\mathrm{2CH_4(k) + 2NH_3(k) + 3O_2(k) \\to 2HCN(k) + 6H_2O(l)}$.\n\n| | CH₄(k) | NH₃(k) | O₂(k) | HCN(k) | H₂O(l) |\n|---|---|---|---|---|---|\n| $\\Delta H^\\circ_f$ (kJ/mol) | −75,0 | −46,0 | 0 | 135,1 | −286,0 |\n| $S^\\circ$ (J/mol·K) | 240,0 | 193,0 | 205,0 | 201,8 | 70,0 |\n\nMột sinh viên tính đúng $\\Delta H^\\circ = -1203{,}8$ kJ và $\\Delta S^\\circ = -657{,}4$ J/K, rồi viết:\n\n> $\\Delta G^\\circ = -1203{,}8 - 298 \\times (-657{,}4) = +194\\,701$ kJ > 0 → không tự xảy ra.\n>\n> $\\Delta n = (2 + 6) - (2 + 2 + 3) = +1$; $\\Delta U = -1203{,}8 - (1)(2{,}478) = -1206{,}3$ kJ.\n\nHãy tìm các lỗi và sửa lại. (Số liệu dùng đúng như đề in; $S^\\circ(\\mathrm{CH_4}) = 240{,}0$ khác giá trị bảng tra 186,3.)\n\n**Câu hỏi:** Dấu hiệu nào lẽ ra giúp phát hiện lỗi ở ΔG°?",
    "explanation": "Với ΔS° cỡ vài trăm J/K, số hạng TΔS° chỉ cỡ vài trăm kJ. Kết quả cỡ 10⁵ kJ là dấu hiệu chắc chắn của lỗi J/kJ.\n\n**Lời giải đầy đủ:**\n\nHai lỗi: (1) trộn J với kJ khi tính $T\\Delta S^\\circ$; (2) đếm H₂O(l) vào Δn.\n\nSửa: $\\Delta G^\\circ = -1203{,}8 - 298 \\times (-0{,}6574) = -1007{,}9$ kJ < 0 (tự xảy ra). $\\Delta n_\\text{khí} = 2 - 7 = -5$; $\\Delta U = -1203{,}8 + 5 \\times 2{,}478 = -1191{,}4$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C3 (HK1 2019–2020), dạng bài tìm lỗi. Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "|ΔG°| lên tới hàng trăm nghìn kJ, lớn hơn ΔH° hàng trăm lần: vô lý"
      },
      {
        "id": "option-2",
        "label": "ΔG° dương thì luôn sai"
      },
      {
        "id": "option-3",
        "label": "Không có dấu hiệu"
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c3-draw-005",
    "lessonId": "gc-thermo-drawing-guide",
    "title": "Đề ĐT27 C3: nung quặng ZnS",
    "prompt": "Bước đầu tiên của quá trình luyện kẽm là nung quặng sphalerite trong không khí dư: $\\mathrm{2ZnS(r) + 3O_2(k) \\to 2ZnO(r) + 2SO_2(k)}$.\n\n| | ZnS(r) | O₂(k) | ZnO(r) | SO₂(k) |\n|---|---|---|---|---|\n| $\\Delta H^\\circ_f$ (kJ/mol) | −206,0 | 0 | −348,3 | −296,8 |\n| $S^\\circ$ (J/mol·K) | 57,7 | 205,0 | 43,6 | 248,1 |\n\na) Xác định $\\Delta H^\\circ$ và $\\Delta S^\\circ$.\n\nb) Tính $\\Delta G^\\circ$ tại 25 °C; phản ứng có tự diễn biến không?\n\nc) Tính $\\Delta U^\\circ$ tại 25 °C.\n\n**Câu hỏi:** Nếu tăng nhiệt độ rất cao, phản ứng còn tự diễn biến không?",
    "explanation": "ΔH° < 0, ΔS° < 0: đường ΔG° đi lên, cắt trục hoành tại $T^* = 878{,}2/0{,}147 \\approx 5974$ K. Trong thực tế lò nung luôn ở dưới mức này.\n\n**Lời giải đầy đủ:**\n\n$\\Delta H^\\circ = -878{,}2$ kJ; $\\Delta S^\\circ = -147$ J/K; $\\Delta G^\\circ = -834{,}39$ kJ < 0: tự diễn biến. $\\Delta n_\\text{khí} = -1$ nên $\\Delta U^\\circ = -875{,}72$ kJ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-3/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT27 C3 (HK1 2025–2026). Các bước giải chia nhỏ để luyện kỹ năng vẽ."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Luôn tự diễn biến ở mọi nhiệt độ"
      },
      {
        "id": "option-2",
        "label": "Chỉ tự diễn biến khi T < T* ≈ 5974 K"
      },
      {
        "id": "option-3",
        "label": "Chỉ tự diễn biến khi T > T*"
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c4-eq-012",
    "lessonId": "gc-eq-foundations",
    "title": "Đề ĐT25 C5: Tính K từ thành phần cân bằng",
    "prompt": "Trong một thí nghiệm, người ta đặt một ămpun chứa $\\mathrm{N_{2}O_{4}}$ lỏng có khối lượng $m = 4{,}6$ g vào một bình phản ứng kín đã đuổi hết không khí có dung tích 5,7 L. Đập vỡ ămpun và đưa nhiệt độ của bình phản ứng lên 50 °C. Kết quả là $\\mathrm{N_{2}O_{4}}$ bay hơi và bị phân li theo cân bằng sau: $\\mathrm{N_{2}O_{4}(k) \\rightleftharpoons 2NO_{2}(k)}$. Khi đó, áp suất trong bình đo được là 0,4586 atm. Tính độ phân li của $\\mathrm{N_{2}O_{4}}$ và hằng số cân bằng $K_p$ của phản ứng ở nhiệt độ trên.\n\nDữ kiện chung cuối đề (Phụ lục A): $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1.602e-19$ J; $Z(\\text{Li}) = 3$; $Z(\\text{B}) = 5$; $T$(K) = $t$(°C) + 273; $M$(N) = 14 g/mol, $M$(O) = 16 g/mol; $N_A = 6.023e23$, $F = 96\\,500$ C.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Quy đổi lượng $\\mathrm{N_2O_4}$ ban đầu thành áp suất giả định $P_0 = n_0RT/V$ ($T = 323\\text{ K}, R = 0{,}082$), lập bảng ba dòng theo áp suất để tìm $\\alpha$ từ $P_{\\text{cb}} = P_0(1+\\alpha)$ và thế thành phần cân bằng vào $K_p$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\nỞ cùng V,T, đặt P₀=n₀RT/V:\n\n| atm | N₂O₄ | NO₂ | Tổng |\n|---|---|---|---|\n| Ban đầu nếu chưa phân li | P₀ | 0 | P₀ |\n| Phản ứng | −αP₀ | +2αP₀ | +αP₀ |\n| Cân bằng | (1−α)P₀ | 2αP₀ | (1+α)P₀ |\n\n1. $n_0=4{,}6/92=0{,}05$ mol, $T=323$ K; $P_0=n_0RT/V$.\n\n2. $P=P_0(1+\\alpha)$ nên $\\alpha=P/P_0-1$.\n\n3. $P(\\mathrm{NO_2})=2\\alpha P_0$ và $P(\\mathrm{N_2O_4})=P_0(1-\\alpha)$. Giữ số chưa làm tròn vì mẫu nhỏ.\n\nKết quả tính lại từ dữ kiện: P₀ nếu chưa phân li = $0{,}2323333$ atm; độ phân li α (dạng thập phân) = $0{,}9738881$ ; Kp = $33{,}756$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C5 (HK2 2023–2024, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Gán $P_{\\text{cb}}(\\mathrm{N_2O_4}) = 0{,}4586\\text{ atm}$ thay vì nhận ra đó là áp suất tổng của hỗn hợp $\\mathrm{N_2O_4}$ và $\\mathrm{NO_2}$."
      },
      {
        "id": "option-2",
        "label": "Dùng $t = 50$ làm nhiệt độ tuyệt đối hoặc dùng $R = 8{,}314$ trong công thức $P_0 = n_0RT/V$."
      },
      {
        "id": "option-3",
        "label": "Tính $P_0 = n_0RT/V$ với $T = 323\\text{ K}$, lập bảng ba dòng theo áp suất với $\\alpha$, tìm $\\alpha$ từ $P_{\\text{cb}} = P_0(1+\\alpha)$ rồi thế các $P_i$ cân bằng vào $K_p$."
      },
      {
        "id": "option-4",
        "label": "Tính $K_p = (2\\alpha)^2/(1-\\alpha)$ mà quên nhân áp suất đầu $P_0$ và quên bậc lũy thừa theo $\\Delta n_{\\text{khí}} = 1$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-006",
    "lessonId": "gc-eq-constant",
    "title": "Đề ĐT12 C5: Tính K từ thành phần cân bằng",
    "prompt": "Metan ($\\mathrm{CH_{4}}$) và hidro sunfua ($\\mathrm{H_{2}S}$) phản ứng với nhau: $\\mathrm{CH_{4}(k) + 2H_{2}S(k) \\rightleftharpoons CS_{2}(k) + 4H_{2}(k)}$. Khi hệ phản ứng đạt trạng thái cân bằng ở 727 °C, áp suất riêng phần của $\\mathrm{CH_{4}}$ là 0,20 atm; $\\mathrm{H_{2}S}$ là 0,25 atm; $\\mathrm{CS_{2}}$ là 0,52 atm; $\\mathrm{H_{2}}$ là 0,10 atm. Tính $K_p$ và $K_c$ của phản ứng ở nhiệt độ trên.\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Đề đã cho sẵn áp suất riêng phần lúc cân bằng của cả $4$ khí nên không cần tìm lượng phản ứng: chỉ cần thế đúng số mũ theo hệ số vào $K_p$ rồi tính $K_c = K_p/(RT)^2$ với $R = 0{,}082$ và $T = 1000\\text{ K}$.\n\n**Lời giải đầy đủ:**\n\n1. $K_p=P(\\mathrm{CS_2})P(\\mathrm{H_2})^4/[P(\\mathrm{CH_4})P(\\mathrm{H_2S})^2]$.\n\n2. $\\Delta n=(1+4)-(1+2)=2$ và $T=1000$ K.\n\nKết quả tính lại từ dữ kiện: Kp = $0{,}00416$ ; Kc = $6{,}186794\\times10^{-7}$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C5 (HK1 2017–2018, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bỏ qua số mũ $2$ của $\\mathrm{H_2S}$ và số mũ $4$ của $\\mathrm{H_2}$ trong $K_p$, hoặc nhân thêm hệ số $2$, $4$ vào trước áp suất."
      },
      {
        "id": "option-2",
        "label": "Cho rằng $\\Delta n_{\\text{khí}} = 0$ vì mọi chất trong phương trình đều ở thể khí, nên kết luận $K_c = K_p$."
      },
      {
        "id": "option-3",
        "label": "Dùng $R = 8{,}314$ và giữ $t = 727$ thay vì đổi $T = 1000\\text{ K}$ khi tính $K_c$ từ $K_p$."
      },
      {
        "id": "option-4",
        "label": "Đề đã cho đủ áp suất riêng phần cân bằng của cả $4$ khí: thế trực tiếp vào $K_p$ với đúng số mũ hệ số ($4, 1, 1, 2$), rồi đổi sang $K_c$ với $\\Delta n_{\\text{khí}} = 2$, $T = 1000\\text{ K}$, $R = 0{,}082$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-013",
    "lessonId": "gc-eq-constant",
    "title": "Đề ĐT26 C5: Tính K từ thành phần cân bằng",
    "prompt": "Cho 2 mol $\\mathrm{N_{2}}$ và 8 mol $\\mathrm{H_{2}}$ vào bình kín có thể tích là 2 lít: $\\mathrm{N_{2}(k) + 3H_{2}(k) \\rightleftharpoons 2NH_{3}(k)}$. Sau khi phản ứng đạt trạng thái cân bằng, đưa về nhiệt độ ban đầu thì áp suất trong bình bằng 0,9 lần áp suất ban đầu.\n\n\n\n1.  Tính hằng số cân bằng $K_c$ của phản ứng.\n\n1.  Ở điều kiện các hỗn hợp có thành phần gồm 1 mol $\\mathrm{N_{2}}$; 6 mol $\\mathrm{H_{2}}$; 3 mol $\\mathrm{NH_{3}}$, phản ứng sẽ diễn ra theo chiều nào?\n\nDữ kiện chung cuối đề (Phụ lục A): $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1.6e-19$ J; $R_H = 109678$ cm$^{-1}$; $F = 96\\,500$ C/mol; $T$(K) = 273 + $t$(°C).\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Vì $V, T$ như nhau nên $P_{\\text{cb}}/P_{\\text{đầu}} = n_{\\text{cb}}/n_{\\text{đầu}} = 0{,}9$; lập bảng mol tìm $x$, chia $V = 2\\text{ L}$ trước khi tính $K_c$ và $Q$ (vì $\\Delta n_{\\text{khí}} \\ne 0$). Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\nBảng theo mol trong bình 2 L:\n\n| mol | N₂ | H₂ | NH₃ | Tổng |\n|---|---|---|---|---|\n| Ban đầu | 2 | 8 | 0 | 10 |\n| Phản ứng | −x | −3x | +2x | −2x |\n| Cân bằng | 2−x | 8−3x | 2x | 10−2x |\n\n1. Tổng số mol cân bằng $10-2x=0{,}9\\times10$, do V và T không đổi.\n\n2. Chia mol cân bằng cho 2 L: $0{,}75$; $3{,}25$; $0{,}50$ M.\n\n3. $Q=1{,}5^2/(0{,}5\\times3^3)>K_c$ nên phản ứng theo chiều nghịch. Dùng cùng bình 2 L và cùng nhiệt độ như ý a.\n\nKết quả tính lại từ dữ kiện: mức tiến triển x = $0{,}5$ mol; Kc = $0{,}009710211$ ; Q của hỗn hợp ở ý b = $0{,}1666667$ .\n\nQ lớn hơn K nên hệ giảm NH₃, tạo thêm N₂ và H₂: chiều nghịch.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C5 (HK1 2024–2025, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lập bảng theo mol để tìm $x$ từ $n_{\\text{cb}}/n_{\\text{đầu}} = 0{,}9$, chia $V = 2\\text{ L}$ sang $\\text{mol/L}$ để tính $K_c$, rồi tính $Q$ của hỗn hợp mới (cũng chia $2\\text{ L}$) để so sánh với $K_c$."
      },
      {
        "id": "option-2",
        "label": "Thế thẳng số mol cân bằng vào $K_c$ và thế số mol ở ý (b) vào $Q$ mà không chia cho thể tích $2\\text{ L}$."
      },
      {
        "id": "option-3",
        "label": "Cho rằng ở cùng bình và nhiệt độ thì tổng số mol không đổi ($n_{\\text{cb}} = n_{\\text{đầu}}$) nên không liên hệ được $P_{\\text{cb}} = 0{,}9P_{\\text{đầu}}$ với $x$."
      },
      {
        "id": "option-4",
        "label": "Thế trực tiếp số mol ban đầu ($2\\text{ mol N}_2$, $8\\text{ mol H}_2$) vào biểu thức $K_c$ mà không trừ lượng đã phản ứng."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-002",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT07 C5: Tính K từ thành phần cân bằng",
    "prompt": "Một mẫu khí $\\mathrm{PCl_{5}}$ được cho vào bình chân không, áp suất ban đầu của $\\mathrm{PCl_{5}}$ là 0,5 atm ở 250 °C. Ở điều kiện này, $\\mathrm{PCl_{5}}$ phân hủy theo phản ứng: $\\mathrm{PCl_{5}(k) \\rightleftharpoons PCl_{3}(k) + Cl_{2}(k)}$. Áp suất tổng cộng của hệ khi đạt cân bằng là 0,84 atm. Hãy tính $K_p$ và $K_c$ của phản ứng ở nhiệt độ này.\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3e8$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo một đơn vị thống nhất (atm), lấy thành phần cân bằng để tính $K_p$, rồi đổi sang $K_c$ bằng $R = 0{,}082\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$ và $T = 523\\text{ K}$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $x=P-P_0$; $K_p=x^2/(P_0-x)$.\n\n2. $\\Delta n=1$, $T=523$ K nên $K_c=K_p/(0{,}082T)$.\n\nKết quả tính lại từ dữ kiện: Kp = $0{,}7225$ ; Kc = $0{,}01684699$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C5 (HK1 2015–2016, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thế trực tiếp áp suất ban đầu $0{,}5\\text{ atm}$ của $\\mathrm{PCl_5}$ vào mẫu số $K_p$ mà không lập bảng biến đổi cân bằng."
      },
      {
        "id": "option-2",
        "label": "Coi $K_c = K_p$ (quên $\\Delta n_{\\text{khí}} = 1$) hoặc dùng $R = 8{,}314$ và $t = 250\\ ^\\circ\\text{C}$ khi đổi $K_p$ sang $K_c$."
      },
      {
        "id": "option-3",
        "label": "Lập bảng ba dòng theo áp suất riêng phần (atm) để tìm $K_p$, sau đó đổi sang $K_c$ bằng $K_p = K_c(RT)^{\\Delta n}$ với $R = 0{,}082$ và $T = 523\\text{ K}$."
      },
      {
        "id": "option-4",
        "label": "Lấy tổng áp suất cân bằng $0{,}84\\text{ atm}$ làm áp suất riêng phần của $\\mathrm{PCl_3}$ và $\\mathrm{Cl_2}$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-003",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT09 C5: Tính K từ thành phần cân bằng",
    "prompt": "Một mẫu $\\mathrm{S_{8}(k)}$ được cho vào bình chân không ở 1325 K, áp suất ban đầu của $\\mathrm{S_{8}(k)}$ là 1 atm. Ở điều kiện này, $\\mathrm{S_{8}(k)}$ phân hủy theo phản ứng: $\\mathrm{S_{8}(k) \\rightleftharpoons 4S_{2}(k)}$. Khi hệ đạt cân bằng, áp suất riêng phần của $\\mathrm{S_{8}(k)}$ là 0,3 atm. Tính $K_p$ và $K_c$ của phản ứng ở nhiệt độ này.\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3e8$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1.6e-19$ J; $T$(K) = $t$(°C) + 273.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo atm chú ý hệ số $4$ của $\\mathrm{S_2}$ (cả trong biến thiên $4x$ lẫn số mũ $4$ của $K_p$); giữ $T = 1325\\text{ K}$ và $R = 0{,}082$ với $\\Delta n_{\\text{khí}} = 3$ khi đổi sang $K_c$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $x=1-0{,}3=0{,}7$ atm; $P(\\mathrm{S_2})=4x$; $K_p=(4x)^4/0{,}3$.\n\n2. $\\Delta n=4-1=3$ nên $K_c=K_p/(RT)^3$.\n\nKết quả tính lại từ dữ kiện: Kp = $204{,}8853$ ; Kc = $1{,}597429\\times10^{-4}$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C5 (HK2 2015–2016, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Quên nhân hệ số $4$ cho lượng $\\mathrm{S_2}$ tạo thành và quên lũy thừa bậc $4$ trong biểu thức $K_p$."
      },
      {
        "id": "option-2",
        "label": "Lấy $\\Delta n_{\\text{khí}} = 1 - 4 = -3$ hoặc $\\Delta n_{\\text{khí}} = 0$ khi quy đổi từ $K_p$ sang $K_c$."
      },
      {
        "id": "option-3",
        "label": "Cộng thêm $273$ vào $1325\\text{ K}$ và dùng $R = 8{,}314$ khi đổi $K_p$ sang $K_c$."
      },
      {
        "id": "option-4",
        "label": "Lập bảng ba dòng theo áp suất (atm) với $P(\\mathrm{S_2}) = 4x$, tính $K_p = P(\\mathrm{S_2})^4/P(\\mathrm{S_8})$ rồi đổi sang $K_c$ bằng $\\Delta n_{\\text{khí}} = 3$, $T = 1325\\text{ K}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-004",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT10 C5: Tính K từ thành phần cân bằng",
    "prompt": "Một mẫu khí $\\mathrm{NH_{3}}$ được nạp vào bình chân không ở 1052 °C, áp suất ban đầu của $\\mathrm{NH_{3}}$ là 1,0 atm. Ở điều kiện này, khí $\\mathrm{NH_{3}}$ phân hủy theo phản ứng: $\\mathrm{NH_{3}(k) \\rightleftharpoons 1/2N_{2}(k) + 3/2H_{2}(k)}$. Khi hệ đạt cân bằng, áp suất riêng phần của $\\mathrm{NH_{3}}$ là 0,3 atm. Tính $K_p$ và $K_c$ của phản ứng ở nhiệt độ trên.\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo đúng hệ số $1$, $1/2$, $3/2$ của phương trình đã cho (giữ nguyên số mũ phân số trong $K_p$), đổi $T = 1052 + 273 = 1325\\text{ K}$ và dùng $R = 0{,}082$ để tính $K_c$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $P(\\mathrm{N_2})=0{,}35$, $P(\\mathrm{H_2})=1{,}05$ atm. Dùng số mũ $1/2$ và $3/2$ theo phương trình đề.\n\n2. $T=1052+273=1325$ K; $\\Delta n=1$.\n\nKết quả tính lại từ dữ kiện: Kp = $2{,}121762$ ; Kc = $0{,}01952841$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C5 (HK1 2016–2017, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lập bảng ba dòng theo áp suất (atm) theo đúng hệ số $1$, $1/2$, $3/2$ của phương trình, giữ số mũ phân số khi tính $K_p$ rồi đổi sang $K_c$ với $\\Delta n_{\\text{khí}} = 1$."
      },
      {
        "id": "option-2",
        "label": "Nhân đôi hệ số phương trình để bỏ phân số nhưng vẫn giữ nguyên giá trị $K_p$ tìm được."
      },
      {
        "id": "option-3",
        "label": "Thế $T = 1052\\text{ K}$ (quên cộng $273$) và dùng $R = 8{,}314$ khi tính $K_c = K_p/(RT)^{\\Delta n}$."
      },
      {
        "id": "option-4",
        "label": "Gán $P(\\mathrm{N_2}) = P(\\mathrm{H_2}) = 0{,}7\\text{ atm}$ tại cân bằng mà không nhân theo tỉ lệ hệ số $1/2$ và $3/2$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-005",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT11 C5: Tính K từ thành phần cân bằng",
    "prompt": "Một mẫu khí $\\mathrm{PCl_{5}}$ được cho vào bình chân không, áp suất ban đầu của $\\mathrm{PCl_{5}}$ là 1,5 atm ở 230 °C. Ở điều kiện này, $\\mathrm{PCl_{5}}$ phân hủy theo phản ứng: $\\mathrm{PCl_{5}(k) \\rightleftharpoons PCl_{3}(k) + Cl_{2}(k)}$. Áp suất tổng cộng của hệ khi đạt cân bằng là 1,84 atm. Tính $K_p$ và $K_c$ của phản ứng ở nhiệt độ này.\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo atm để tìm $x = 1{,}84 - 1{,}5 = 0{,}34\\text{ atm}$, tính $K_p$ từ thành phần cân bằng rồi chia cho $(0{,}082 \\times 503)$ vì $\\Delta n_{\\text{khí}} = +1$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $x=P-P_0$; $K_p=x^2/(P_0-x)$.\n\n2. $\\Delta n=1$, $T=503$ K nên $K_c=K_p/(0{,}082T)$.\n\nKết quả tính lại từ dữ kiện: Kp = $0{,}09965517$ ; Kc = $0{,}002416117$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C5 (HK2 2016–2017, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Gán thẳng $P(\\mathrm{PCl_3}) = P(\\mathrm{Cl_2}) = 1{,}84\\text{ atm}$ và $P(\\mathrm{PCl_5}) = 1{,}5\\text{ atm}$ vào biểu thức $K_p$."
      },
      {
        "id": "option-2",
        "label": "Tính $K_c = K_p \\cdot (RT)^1$ (nhầm dấu $\\Delta n_{\\text{khí}}$) hoặc giữ $t = 230\\ ^\\circ\\text{C}$ và dùng $R = 8{,}314$."
      },
      {
        "id": "option-3",
        "label": "Lập bảng ba dòng theo áp suất (atm) để tìm lượng phân hủy $x$ từ $P_{\\text{tổng}} = 1{,}5 + x = 1{,}84$, tính $K_p$ rồi suy ra $K_c = K_p/(0{,}082 \\times 503)$."
      },
      {
        "id": "option-4",
        "label": "Lấy thể tích bình bằng $22{,}4\\text{ L}$ để đổi áp suất sang số mol trước khi lập bảng."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-007",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT14 C5: Tính K từ thành phần cân bằng",
    "prompt": "Phản ứng phân hủy $\\mathrm{C_{5}H_{6}O_{3}}$ thành hỗn hợp khí theo phương trình: $\\mathrm{C_{5}H_{6}O_{3}(k) \\rightleftharpoons C_{2}H_{6}(k) + 3CO(k)}$. Người ta cho 5,70 gam chất $\\mathrm{C_{5}H_{6}O_{3}}$ tinh khiết vào bình kín, chân không dung tích 2,50 L ở 200 °C và đợi đến khi hệ đạt trạng thái cân bằng, áp suất tổng của hệ tại thời điểm cân bằng là 1,55 atm. Hãy xác định hằng số cân bằng $K_c$ của phản ứng trên?\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo một đơn vị duy nhất (atm qua $P_0 = n_0RT/V$ với $T = 473\\text{ K}$), giải $x$ từ tổng áp suất cân bằng rồi đổi sang nồng độ mol/L (chia $RT$) để tính $K_c$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $n_0=5{,}70/114=0{,}05$ mol; $P_0=n_0RT/V$.\n\n2. Bảng áp suất: $P_0-x$, $x$, $3x$; tổng $P_0+3x=1{,}55$. Chia từng áp suất cho RT trước khi tính $K_c$.\n\nKết quả tính lại từ dữ kiện: áp suất ban đầu nếu chưa phân hủy = $0{,}77572$ atm; Kc = $3{,}966699\\times10^{-6}$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C5 (Đề tổng hợp 3, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $n_0$, đổi sang $P_0 = n_0RT/V$, lập bảng ba dòng theo atm để giải $x$ từ $P_{\\text{cb}}$, rồi chia các áp suất cân bằng cho $RT$ (hoặc đổi $K_p$ sang $K_c$ với $\\Delta n_{\\text{khí}} = 3$)."
      },
      {
        "id": "option-2",
        "label": "Thế thẳng số mol cân bằng $n$ vào $K_c$ mà không chia thể tích bình $2{,}50\\text{ L}$ (dù $\\Delta n_{\\text{khí}} = 3 \\ne 0$)."
      },
      {
        "id": "option-3",
        "label": "Tính $K_p$ từ bảng áp suất rồi lấy luôn giá trị đó làm $K_c$ mà không chia cho $(RT)^3$."
      },
      {
        "id": "option-4",
        "label": "Lập bảng trộn lẫn số mol ở chất đầu với áp suất tổng $1{,}55\\text{ atm}$ ở sản phẩm mà không quy về một đơn vị."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-008",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT16 C5: Tính K từ thành phần cân bằng",
    "prompt": "Cho phản ứng thuận nghịch: $\\mathrm{N_{2}O_{4}(k) \\rightleftharpoons 2NO_{2}(k)}$. Phản ứng tiến hành ở nhiệt độ 300 K trong bình kín có thể tích 10 L. Ở cân bằng có 2 mol $\\mathrm{N_{2}O_{4}}$ và 1 mol $\\mathrm{NO_{2}}$. Hãy tính hằng số cân bằng $K_C$, $K_P$ của phản ứng.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Đề cho số mol ở cân bằng trong bình $10\\text{ L}$ nên phải chia $V = 10\\text{ L}$ sang $\\text{mol/L}$ trước khi thế vào $K_c$, rồi dùng $K_p = K_c(0{,}082 \\times 300)^1$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. Chia số mol từng chất cho 10 L trước khi thế vào $K_c$.\n\n2. $\\Delta n=1$, $K_p=K_cRT$.\n\nKết quả tính lại từ dữ kiện: Kc = $0{,}05$ ; Kp = $1{,}23$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C5 (Đề tổng hợp 6, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thế trực tiếp số mol cân bằng ($2\\text{ mol}$ và $1\\text{ mol}$) vào $K_c = 1^2/2 = 0{,}5$ mà quên chia thể tích $10\\text{ L}$."
      },
      {
        "id": "option-2",
        "label": "Chia số mol cân bằng cho thể tích $V = 10\\text{ L}$ để đổi sang nồng độ $\\text{mol/L}$ rồi tính $K_c$, sau đó dùng $K_p = K_c(RT)^{\\Delta n}$ với $\\Delta n_{\\text{khí}} = 1$, $R = 0{,}082$."
      },
      {
        "id": "option-3",
        "label": "Lấy $\\Delta n_{\\text{khí}} = 1 - 2 = -1$ hoặc $\\Delta n_{\\text{khí}} = 0$ nên tính $K_p = K_c/(RT)$ hoặc $K_p = K_c$."
      },
      {
        "id": "option-4",
        "label": "Dùng $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$ trong công thức $K_p = K_c RT$ và cộng thêm $273$ vào $300\\text{ K}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c4-eq-009",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT17 C5: Tính K từ thành phần cân bằng",
    "prompt": "Phản ứng este hóa giữa 1 mol rượu etylic nguyên chất và 1 mol axit axetic được tiến hành ở nhiệt độ phòng. Tại trạng thái cân bằng, hỗn hợp sản phẩm thu được gồm 3/5 mol este và 3/5 mol nước. Các chất đều ở trạng thái lỏng.\n\n\n\n1.  Xác định hằng số cân bằng của phản ứng.\n\n1.  Có bao nhiêu mol este ở trạng thái cân bằng, nếu phản ứng xảy ra khi trộn 3 mol rượu etylic nguyên chất và 1 mol axit axetic ở nhiệt độ phòng.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng mol cho cả $4$ chất trong cùng pha lỏng (rượu, axit đều còn $0{,}4\\text{ mol}$; este, nước đều $0{,}6\\text{ mol}$), giữ nguyên các chất hòa tan trong biểu thức $K$ theo mô hình dung dịch của đề. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. Bảng cân bằng: rượu, axit đều 0,4 mol; este, nước đều 0,6 mol. Trong mô hình dung dịch lý tưởng của đề, thể tích triệt tiêu trong thương số.\n\n2. Giải $x^2/[(3-x)(1-x)]=2{,}25$, chỉ nhận nghiệm $0<x<1$.\n\nKết quả tính lại từ dữ kiện: K = $2{,}25$ ; số mol este khi trộn 3 mol rượu và 1 mol axit = $0{,}8504546$ mol.\n\nCác chất lỏng đang tạo một hỗn hợp; không được coi từng chất là một pha lỏng nguyên chất có hoạt độ 1. Đáp số theo giả thiết dung dịch lý tưởng trong hướng giải.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C5 (Đề tổng hợp 7, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Coi mọi chất lỏng đều có hoạt độ bằng $1$ nên loại toàn bộ $4$ chất khỏi biểu thức $K$ (cho $K = 1$)."
      },
      {
        "id": "option-2",
        "label": "Lấy luôn số mol tạo thành $3/5$ làm số mol còn lại của rượu và axit thay vì trừ $1 - 3/5 = 2/5$."
      },
      {
        "id": "option-3",
        "label": "Thế số mol ban đầu $(1; 1)$ vào $K$ hoặc quy đổi các chất lỏng sang áp suất riêng phần bằng $PV = nRT$."
      },
      {
        "id": "option-4",
        "label": "Lập bảng mol cho cả $4$ chất (rượu, axit, este, nước) ở cả hai trường hợp, rồi tính $K$ theo tỉ số cân bằng của mô hình dung dịch lý tưởng (thể tích triệt tiêu vì $\\Delta n = 0$)."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-010",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT20 C5: Tính K từ thành phần cân bằng",
    "prompt": "Một mẫu khí $\\mathrm{PCl_{5}}$ được cho vào bình chân không, áp suất ban đầu của $\\mathrm{PCl_{5}}$ là 0,5 atm ở 250 °C. Ở điều kiện này, $\\mathrm{PCl_{5}}$ phân hủy theo phản ứng: $\\mathrm{PCl_{5}(k) \\rightleftharpoons PCl_{3}(k) + Cl_{2}(k)}$. Áp suất tổng cộng của hệ khi đạt cân bằng là 0,84 atm. Hãy tính $K_p$ và $K_c$ của phản ứng ở nhiệt độ này. Tính $\\Delta G$ của phản ứng ở nhiệt độ này.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo atm để tính $K_p$, dùng $R = 0{,}082$ khi đổi sang $K_c$, còn khi tính $\\Delta G^\\circ = -RT\\ln K_p$ phải dùng $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$ rồi đổi sang $\\text{kJ/mol}$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $x=P-P_0$; $K_p=x^2/(P_0-x)$.\n\n2. $\\Delta n=1$, $T=523$ K nên $K_c=K_p/(0{,}082T)$.\n\n3. $\\Delta G^\\circ=-8{,}314T\\ln K_p$. Đề ghi ΔG, hướng giải dùng giá trị chuẩn; tại cân bằng ΔG thực tế bằng 0.\n\nKết quả tính lại từ dữ kiện: Kp = $0{,}7225$ ; Kc = $0{,}01684699$ ; ΔG° = $1{,}413337$ kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C5 (Đề tổng hợp 10, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lập bảng ba dòng theo atm để tìm $K_p$, đổi sang $K_c$ với $R = 0{,}082$, rồi tính $\\Delta G^\\circ = -RT\\ln K_p$ với $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$ và chia $1000$ sang $\\text{kJ/mol}$."
      },
      {
        "id": "option-2",
        "label": "Dùng $R = 0{,}082$ khi tính $\\Delta G^\\circ = -RT\\ln K_p$ hoặc giữ kết quả theo $\\text{J/mol}$ thay vì $\\text{kJ/mol}$."
      },
      {
        "id": "option-3",
        "label": "Thế $K_c$ thay vì $K_p$ vào công thức $\\Delta G^\\circ = -RT\\ln K$ cho phản ứng chất khí."
      },
      {
        "id": "option-4",
        "label": "Thế thẳng áp suất ban đầu $0{,}5\\text{ atm}$ vào mẫu số $K_p$ mà không lập bảng biến thiên theo $x$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-011",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT23 C5: Tính K từ thành phần cân bằng",
    "prompt": "$\\mathrm{CO_{2}}$ phân ly ở nhiệt độ cao theo phản ứng: $\\mathrm{2CO_{2}(k) \\rightleftharpoons 2CO(k) + O_{2}(k)}$; áp suất cân bằng của hệ là 1 atm.\n\n\n\n1.  Tính độ phân ly $\\alpha$ của $\\mathrm{CO_{2}}$ ở nhiệt độ 2227 °C biết rằng ở nhiệt độ này, khi phản ứng đạt trạng thái cân bằng thì 1,0 L hỗn hợp khí nặng 0,2 g.\n\n1.  Tính $K_p$.\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R_H = 109722$ cm$^{-1}$; 1 eV = $1.602e-19$ J; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; có in bảng tuần hoàn.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Tính khối lượng mol trung bình của hỗn hợp khí cân bằng $M_{\\text{tb}} = mRT/(PV)$ với $T = 2500\\text{ K}$, $R = 0{,}082$, suy ra $\\alpha$ từ bảo toàn khối lượng rồi quy đổi phần mol sang áp suất riêng phần để tính $K_p$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\nChọn cơ sở 2 mol CO₂:\n\n| mol | CO₂ | CO | O₂ | Tổng |\n|---|---|---|---|---|\n| Ban đầu | 2 | 0 | 0 | 2 |\n| Phản ứng | −2α | +2α | +α | +α |\n| Cân bằng | 2−2α | 2α | α | 2+α |\n\n1. $M_{tb}=mRT/(PV)=0{,}2\\times0{,}082\\times2500$.\n\n2. Cơ sở 2 mol CO₂: $n_{cb}=2+\\alpha$, khối lượng 88 g nên $88/(2+\\alpha)=M_{tb}$.\n\n3. Phần mol CO₂, CO, O₂ lần lượt là $2(1-\\alpha)/(2+\\alpha)$, $2\\alpha/(2+\\alpha)$, $\\alpha/(2+\\alpha)$. Nhân P rồi tính $K_p=P_{CO}^2P_{O_2}/P_{CO_2}^2$.\n\nKết quả tính lại từ dữ kiện: khối lượng mol trung bình = $41$ g/mol; độ phân li α (dạng thập phân) = $0{,}1463415$ ; Kp = $0{,}002003711$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C5 (HK1 2022–2023 Ca 2, Đề tổng hợp 13, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng trực tiếp $t = 2227\\ ^\\circ\\text{C}$ (quên cộng $273$ thành $2500\\text{ K}$) hoặc dùng $R = 8{,}314$ khi tính $M_{\\text{tb}}$."
      },
      {
        "id": "option-2",
        "label": "Tính $M_{\\text{tb}} = mRT/(PV)$, lập bảng trên cơ sở $2\\text{ mol CO}_2$ với độ phân li $\\alpha$ để tìm $\\alpha$ từ bảo toàn khối lượng $88/(2+\\alpha) = M_{\\text{tb}}$, rồi đổi phần mol sang $P_i$ để tính $K_p$."
      },
      {
        "id": "option-3",
        "label": "Thế trực tiếp số mol cân bằng $n_i$ vào biểu thức $K_p = n_{\\mathrm{CO}}^2 n_{\\mathrm{O_2}} / n_{\\mathrm{CO_2}}^2$ mà quên đổi sang áp suất riêng phần."
      },
      {
        "id": "option-4",
        "label": "Coi khối lượng $0{,}2\\text{ g}$ trong $1{,}0\\text{ L}$ là của riêng $\\mathrm{CO_2}$ chưa phân li nên bỏ qua $\\mathrm{CO}$ và $\\mathrm{O_2}$ khi tính $M_{\\text{tb}}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c4-eq-014",
    "lessonId": "gc-eq-ice-table",
    "title": "Đề ĐT28 C5: Tính K từ thành phần cân bằng",
    "prompt": "Cho phản ứng sau ở một nhiệt độ xác định: $\\mathrm{N_{2}(k) + 3H_{2}(k) \\rightleftharpoons 2NH_{3}(k)}$. Trong một bình kín dung tích 2,0 L, ban đầu có 1,00 mol $\\mathrm{N_{2}}$ và 3,00 mol $\\mathrm{H_{2}}$. Khi cân bằng, có 0,40 mol $\\mathrm{NH_{3}}$.\n\n\n\n1.  Tính nồng độ cân bằng của $\\mathrm{N_{2}}$, $\\mathrm{H_{2}}$ và $\\mathrm{NH_{3}}$, sau đó tính hằng số cân bằng $K_c$.\n\n1.  Nếu tăng áp suất của hệ bằng cách giảm thể tích bình ở cùng nhiệt độ thì cân bằng chuyển dịch theo chiều nào? Giải thích.\n\nDữ kiện chung cuối đề (Phụ lục A): $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1.6e-19$ J.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng ba dòng theo mol với $n(\\mathrm{NH_3}) = 2x = 0{,}40\\text{ mol} \\Rightarrow x = 0{,}20\\text{ mol}$, chia toàn bộ dòng cân bằng cho $V = 2{,}0\\text{ L}$ sang $\\text{mol/L}$ rồi thế vào $K_c$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\nBảng theo mol trong bình 2 L:\n\n| mol | N₂ | H₂ | NH₃ |\n|---|---|---|---|\n| Ban đầu | 1 | 3 | 0 |\n| Phản ứng | −x | −3x | +2x |\n| Cân bằng | 1−x | 3−3x | 2x |\n\n1. $2x=0{,}40$ nên $x=0{,}20$ mol. $[\\mathrm{N_2}]=(1-x)/2$.\n\n2. $[\\mathrm{H_2}]=(3-3x)/2$.\n\n3. $[\\mathrm{NH_3}]=0{,}40/2$.\n\n4. Thế nồng độ cân bằng và giữ số mũ 2, 1, 3. Giảm V ở T không đổi làm cân bằng dịch thuận: 4 mol khí thành 2 mol khí.\n\nKết quả tính lại từ dữ kiện: nồng độ N₂ cân bằng = $0{,}4$ mol/L; nồng độ H₂ cân bằng = $1{,}2$ mol/L; nồng độ NH₃ cân bằng = $0{,}2$ mol/L; Kc = $0{,}05787037$ .\n\nGiảm thể tích ở cùng T: cân bằng dịch thuận về phía 2 mol NH₃, phía ít mol khí (trái có 4 mol). K không đổi.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C5 (Hè 2025–2026, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt mức phản ứng $x = 0{,}40\\text{ mol}$ (quên hệ số $2$ của $\\mathrm{NH_3}$) nên tính $\\mathrm{N_2}$ còn $1{,}00 - 0{,}40 = 0{,}60\\text{ mol}$."
      },
      {
        "id": "option-2",
        "label": "Lập bảng ba dòng theo mol với $2x = 0{,}40$, chia tất cả số mol cân bằng cho $V = 2{,}0\\text{ L}$ sang nồng độ $\\text{mol/L}$ rồi thế vào $K_c$."
      },
      {
        "id": "option-3",
        "label": "Thế thẳng số mol cân bằng vào $K_c$ mà quên chia cho thể tích $2{,}0\\text{ L}$."
      },
      {
        "id": "option-4",
        "label": "Lấy số mol ban đầu ($1{,}00\\text{ mol N}_2$ và $3{,}00\\text{ mol H}_2$) làm lượng cân bằng khi thế vào $K_c$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c4-eq-015",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT02 C1: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Cân bằng sau được thiết lập ở 0 °C: $\\mathrm{N_{2}O_{4}(k) \\rightleftharpoons 2NO_{2}(k)}$\n\n\n\n1.  Tính hằng số cân bằng $K_P$ ở 0 °C, biết rằng ở nhiệt độ này có 11% $\\mathrm{N_{2}O_{4}}$ phân ly thành $\\mathrm{NO_{2}}$ và áp suất của hệ khi cân bằng là 1 atm.\n\n1.  Nếu áp suất lúc cân bằng là 0,5 atm thì độ phân ly của $\\mathrm{N_{2}O_{4}}$ là bao nhiêu? Kết quả này có phù hợp với nguyên lý chuyển dịch cân bằng Lơ Satơlie không?\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng mol với $1\\text{ mol}$ $\\mathrm{N_2O_4}$ và độ phân li $\\alpha$; tính $P_i = (n_i / (1+\\alpha))P$ để suy ra $K_p = 4\\alpha^2 P/(1-\\alpha^2)$, rồi giữ $K_p$ không đổi ở $0\\ ^\\circ\\text{C}$ khi $P = 0{,}5\\text{ atm}$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $K_p=4\\alpha^2P/(1-\\alpha^2)$ với $\\alpha=0{,}11$, P=1 atm.\n\n2. Giữ K ở cùng nhiệt độ; $\\alpha=\\sqrt{K_p/(K_p+4P)}$. Giảm áp làm tăng phân li, đúng Le Chatelier.\n\nKết quả tính lại từ dữ kiện: Kp = $0{,}04899281$ ; α ở 0,5 atm (dạng thập phân) = $0{,}1546308$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT02 C1 (Hè 2012); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thế thẳng $1 - \\alpha$ và $2\\alpha$ vào biểu thức $K_p$ mà quên chia cho tổng số mol $(1 + \\alpha)$ và nhân áp suất $P$."
      },
      {
        "id": "option-2",
        "label": "Giữ nguyên độ phân li $\\alpha = 11\\%$ khi giảm áp suất từ $1\\text{ atm}$ xuống $0{,}5\\text{ atm}$."
      },
      {
        "id": "option-3",
        "label": "Viết $K_p = 2\\alpha^2 P / (1 - \\alpha)$ do quên bình phương hệ số $2$ của $\\mathrm{NO_2}$."
      },
      {
        "id": "option-4",
        "label": "Lập bảng mol với $1\\text{ mol}$ chất đầu và độ phân li $\\alpha$; đổi phần mol thành áp suất riêng phần bằng $P_i = x_i P$, sau đó giữ nguyên $K_p$ khi đổi $P$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-016",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT19 C5: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Ở nhiệt độ xác định và dưới áp suất 1 atm, độ phân ly của $\\mathrm{N_{2}O_{4}}$ thành $\\mathrm{NO_{2}}$ bằng 11%.\n\n\n\n1.  Tính hằng số cân bằng $K_p$ của phản ứng này.\n\n1.  Độ phân ly sẽ thay đổi như thế nào khi áp suất giảm từ 1 atm xuống 0,8 atm?\n\n1.  Để cho độ phân ly giảm xuống tới 8% thì phải nén hỗn hợp khí tới áp suất nào? Kết quả nhận được có phù hợp với nguyên lý chuyển dịch cân bằng Le Chatelier không? Vì sao?\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng mol với $1\\text{ mol}$ chất đầu và độ phân li $\\alpha$; đổi phần mol thành áp suất riêng phần để tính $K_p$, rồi dùng $K_p$ không đổi ở cùng nhiệt độ cho các áp suất $0{,}8\\text{ atm}$ và $\\alpha = 8\\%$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $K_p=4\\alpha^2P/(1-\\alpha^2)$.\n\n2. Giữ K và thay P=0,8 atm.\n\n3. Giải $P=K_p(1-\\alpha^2)/(4\\alpha^2)$. Tăng áp làm giảm phân li vì phía N₂O₄ ít mol khí hơn.\n\nKết quả tính lại từ dữ kiện: Kp = $0{,}04899281$ ; α ở 0,8 atm (dạng thập phân) = $0{,}1227981$ ; áp suất để α=8% = $1{,}901534$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C5 (Đề tổng hợp 9, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lập bảng mol với $1\\text{ mol}$ $\\mathrm{N_2O_4}$ và độ phân li $\\alpha$; đổi phần mol sang áp suất riêng phần để tìm $K_p$, rồi giữ nguyên $K_p$ khi đổi áp suất $P$."
      },
      {
        "id": "option-2",
        "label": "Lập tỉ lệ thuận $\\alpha_1/\\alpha_2 = P_1/P_2$ để tính ngay độ phân li ở $0{,}8\\text{ atm}$ và áp suất khi $\\alpha = 8\\%$ mà không qua $K_p$."
      },
      {
        "id": "option-3",
        "label": "Thế trực tiếp $n_{\\mathrm{N_2O_4}} = 1 - \\alpha$ và $n_{\\mathrm{NO_2}} = 2\\alpha$ vào $K_p$ mà quên chia tổng số mol $(1 + \\alpha)$."
      },
      {
        "id": "option-4",
        "label": "Cho rằng $K_p$ tăng hoặc giảm tỉ lệ với áp suất chung $P$ khi nén hệ."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-017",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT04 C4: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Cho phản ứng: $\\mathrm{N_{2}O_{4}(k) \\rightleftharpoons 2NO_{2}(k)}$\n\n\n\n1.  Cho 18,4 gam khí $\\mathrm{N_{2}O_{4}}$ vào bình chân không dung tích 5,904 lít ở 27 °C. Lúc cân bằng, áp suất trong bình là 1,0 atm. Tính áp suất riêng phần của mỗi khí khi hệ đạt trạng thái cân bằng.\n\n1.  Nếu áp suất hệ khi cân bằng là 0,5 atm thì áp suất riêng phần của $\\mathrm{N_{2}O_{4}}$ và $\\mathrm{NO_{2}}$ là bao nhiêu?\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Viết biểu thức $K_p$ và bảng cân bằng theo áp suất (atm) với $P_0 = n_0RT/V$ ($R = 0{,}082$, $T = 300\\text{ K}$), giữ $K_p$ không đổi khi sang $P = 0{,}5\\text{ atm}$ và chọn nghiệm trong miền lượng chất không âm. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $P_0=n_0RT/V$; $P(N_2O_4)=2P_0-P$.\n\n2. $P(NO_2)=2(P-P_0)$.\n\n3. Giữ $K_p=P(NO_2)^2/P(N_2O_4)=1/6$. Đặt $y=P(N_2O_4)$, giải $(0{,}5-y)^2/y=1/6$ với $0<y<0{,}5$.\n\n4. Tổng áp suất riêng phần phải bằng 0,5 atm.\n\nKết quả tính lại từ dữ kiện: P(N₂O₄) ở P=1 atm = $0{,}6666667$ atm; P(NO₂) ở P=1 atm = $0{,}3333333$ atm; P(N₂O₄) ở P=0,5 atm = $0{,}2828707$ atm; P(NO₂) ở P=0,5 atm = $0{,}2171293$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C4 (HK1 2013–2014, 2 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chia đôi các áp suất riêng phần của ý (a) khi giảm áp suất cân bằng từ $1{,}0\\text{ atm}$ xuống $0{,}5\\text{ atm}$ (bỏ qua sự dịch chuyển cân bằng)."
      },
      {
        "id": "option-2",
        "label": "Tính $P_0 = n_0RT/V$ ($T = 300\\text{ K}$), lập bảng ba dòng theo atm ở $P = 1{,}0\\text{ atm}$ để tìm $K_p$, rồi giữ $K_p$ giải phương trình bậc hai ở $P = 0{,}5\\text{ atm}$ trong miền $0 < y < 0{,}5$."
      },
      {
        "id": "option-3",
        "label": "Tính $P_0$ bằng $R = 8{,}314$ hoặc giữ nguyên $t = 27\\ ^\\circ\\text{C}$ trong công thức khí lý tưởng."
      },
      {
        "id": "option-4",
        "label": "Thế số mol ban đầu $n_0$ trực tiếp vào biểu thức $K_p$ mà không quy đổi áp suất và không xét biến đổi cân bằng."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c4-eq-018",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT06 C4: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Ở 873 K, phản ứng dưới đây có hằng số cân bằng $K_p = 4{,}86$: $\\mathrm{COCl_{2}(k) \\rightleftharpoons CO(k) + Cl_{2}(k)}$. Cho 1 mol $\\mathrm{COCl_{2}}$ vào một bình chân không dung tích 22,4 L và giữ nhiệt độ của bình ở 873 K. Tính độ chuyển hóa của $\\mathrm{COCl_{2}}$ và áp suất chung của hệ (theo đơn vị atm) khi hệ đạt trạng thái cân bằng. Giả sử các khí được coi là khí lý tưởng.\n\nDữ kiện chung cuối đề (Phụ lục A): $m_e = 9.11e-31$ kg; $h = 6.625e-34$ J.s; $e = 1.6e-19$ C; 1 eV = $1.6e-19$ J; 1 m = $10^9$ nm = $10^{10}$ Å; $c = 3e8$ m/s; $k_e = 9e9$ N.m$^2$/C$^2$.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Viết biểu thức $K_p$ và bảng cân bằng theo atm (với $P_0 = RT/V$ ở $873\\text{ K}$), đặt một ẩn $\\alpha$, chọn nghiệm trong miền $0 < \\alpha < 1$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $P_0=RT/V$; giải $P_0\\alpha^2/(1-\\alpha)=4{,}86$ với $0<\\alpha<1$.\n\n2. Bảng mol: $1-\\alpha$, $\\alpha$, $\\alpha$, tổng $1+\\alpha$; $P=P_0(1+\\alpha)$.\n\nKết quả tính lại từ dữ kiện: độ chuyển hóa α (dạng thập phân) = $0{,}6883894$ ; áp suất tổng = $5{,}395761$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT06 C4 (Hè 2013–2014, 2 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $P_0 = n_0RT/V$ với $R = 0{,}082$ và $T = 873\\text{ K}$, lập bảng ba dòng theo atm, đặt $0 < \\alpha < 1$ để giải $P_0\\alpha^2/(1 - \\alpha) = 4{,}86$."
      },
      {
        "id": "option-2",
        "label": "Cho rằng $1\\text{ mol}$ khí trong bình $22{,}4\\text{ L}$ luôn có $P_0 = 1\\text{ atm}$ (quên rằng nhiệt độ bình là $873\\text{ K}$ chứ không phải $273\\text{ K}$)."
      },
      {
        "id": "option-3",
        "label": "Giải trực tiếp $\\alpha^2/(1 - \\alpha) = K_p$ mà quên nhân áp suất ban đầu $P_0$."
      },
      {
        "id": "option-4",
        "label": "Tính $P_0$ bằng $R = 8{,}314$ rồi thế vào phương trình với $K_p = 4{,}86$ (đơn vị atm)."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-019",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT15 C4: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Cho phản ứng: $\\mathrm{N_{2}(k) + O_{2}(k) \\to 2NO(k)}$ có $K_c = 4.1e-4$ ở 2000 °C.\n\n\n\n1.  Hãy xác định nồng độ của khí NO tại nhiệt độ phản ứng trên khi phản ứng đạt trạng thái cân bằng, biết hỗn hợp khí ban đầu gồm 0,40 mol $\\mathrm{N_{2}}$ và 0,30 mol $\\mathrm{O_{2}}$ chứa trong bình phản ứng kín dung tích 2,0 L.\n\n1.  Hãy tính $K_p$ của phản ứng: $\\mathrm{1/2N_{2}(k) + 1/2O_{2}(k) \\to NO(k)}$ ở 2000 °C.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Đổi sang nồng độ $\\text{mol/L}$ (chia $2{,}0\\text{ L}$), viết biểu thức $K_c$ và bảng cân bằng để tìm $x \\in (0; 0{,}15)$; khi chia đôi hệ số phương trình thì lấy căn bậc hai $K$ và chú ý $\\Delta n_{\\text{khí}} = 0$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. Giải chính xác $4x^2/[(0{,}20-x)(0{,}15-x)]=4{,}1\\times10^{-4}$ với $0<x<0{,}15$.\n\n2. Chia hệ số cho 2 thì lấy căn K; $\\Delta n=0$ nên $K_p=K_c$ cho mỗi cách viết phương trình.\n\nKết quả tính lại từ dữ kiện: nồng độ NO = $0{,}00347162$ mol/L; Kp khi chia đôi hệ số = $0{,}02024846$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C4 (Đề tổng hợp 5, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ở ý (b), chia đôi hằng số cân bằng thành $K_c/2$ khi chia đôi hệ số phương trình."
      },
      {
        "id": "option-2",
        "label": "Thế thẳng số mol ban đầu $0{,}40$ và $0{,}30$ vào phương trình cân bằng mà quên chia cho thể tích $2{,}0\\text{ L}$."
      },
      {
        "id": "option-3",
        "label": "Chia mol ban đầu cho $V = 2{,}0\\text{ L}$ sang nồng độ, lập bảng ba dòng giải $[\\mathrm{NO}]$ ($0 < x < 0{,}15$), rồi lấy $\\sqrt{K_c}$ cho phương trình chia đôi và dùng $\\Delta n_{\\text{khí}} = 0$ suy ra $K_p$."
      },
      {
        "id": "option-4",
        "label": "Dùng $K_p = K_c(RT)^2$ với $T = 2000\\text{ K}$ do quên đếm tổng số mol khí hai vế bằng nhau."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-020",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT18 C5: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Ở 1000 K: $\\mathrm{2SO_{2}(k) + O_{2}(k) \\rightleftharpoons 2SO_{3}(k)}$, $K_p = 3{,}50$.\n\n\n\n1.  Khi cân bằng áp suất của hệ là 1 atm, $P(\\mathrm{O_{2}}) = 0{,}09$ atm. Tính $K_c$, $P(\\mathrm{SO_{2}})$ và $P(\\mathrm{SO_{3}})$.\n\n1.  Ở 1000 K, nếu điều chỉnh hỗn hợp đầu có $P(\\mathrm{SO_{2}}) = P(\\mathrm{O_{2}}) = 0{,}1$ atm, $P(\\mathrm{SO_{3}}) = 1$ atm thì cân bằng sẽ chuyển dịch theo chiều nào. Tính áp suất riêng phần của các thành phần trong hệ khi trạng thái cân bằng mới được thiết lập.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Đếm $\\Delta n_{\\text{khí}} = 2 - 3 = -1$ để đổi $K_c = K_p RT$ ($R = 0{,}082$); ở ý (b) phải tính $Q$ so với $K_p$ trước khi đặt dấu $\\pm$ trong bảng cân bằng. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $\\Delta n=-1$, vì vậy $K_c=K_pRT$.\n\n2. $P(SO_2)+P(SO_3)=0{,}91$; $P(SO_3)/P(SO_2)=\\sqrt{3{,}50\\times0{,}09}$.\n\n3. Lấy 0,91 trừ áp suất SO₂.\n\n4. $Q=1000>K_p$ nên chiều nghịch; giải $(1-2x)^2/[(0{,}1+2x)^2(0{,}1+x)]=3{,}50$.\n\n5. SO₂ tăng $2x$ theo hệ số.\n\n6. O₂ tăng x theo hệ số. Tổng áp suất tăng khi hệ dịch nghịch ở V,T không đổi.\n\nKết quả tính lại từ dữ kiện: Kc = $287$ ; P(SO₂) ở ý a = $0{,}5828668$ atm; P(SO₃) ở ý a = $0{,}3271332$ atm; P(SO₃) cân bằng mới = $0{,}5645897$ atm; P(SO₂) cân bằng mới = $0{,}5354103$ atm; P(O₂) cân bằng mới = $0{,}3177052$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C5 (Đề tổng hợp 8, 1,5 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng $K_p = K_c(RT)^{\\Delta n}$ với $\\Delta n_{\\text{khí}} = -1$ để tính $K_c$ và giải áp suất ý (a); ở ý (b) tính $Q$ so với $K_p$ xác định chiều dịch chuyển rồi lập bảng ba dòng theo atm."
      },
      {
        "id": "option-2",
        "label": "Tính $\\Delta n_{\\text{khí}} = +1$ (lấy chất đầu trừ sản phẩm) nên viết nhầm $K_c = K_p/(RT)$."
      },
      {
        "id": "option-3",
        "label": "Ở ý (b), mặc định phản ứng chạy theo chiều thuận ($-2x, -x, +2x$) mà không tính $Q$ để so sánh với $K_p$."
      },
      {
        "id": "option-4",
        "label": "Dùng $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$ khi đổi giữa $K_p$ và $K_c$ ở $1000\\text{ K}$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-021",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT21 C5: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Trong bình phản ứng kín dung tích 1 lít, ở nhiệt độ 448 °C, có phản ứng: $\\mathrm{H_{2}(k) + I_{2}(k) \\rightleftharpoons 2HI(k)}$. Ban đầu trong bình chỉ chứa 1 mol khí $\\mathrm{H_{2}}$ và 2 mol khí $\\mathrm{I_{2}}$. Phản ứng có hằng số cân bằng $K_c = 50{,}5$ ở 448 °C:\n\n\n\n1.  Hãy tính nồng độ (mol/L) của các chất ở thời điểm cân bằng.\n\n1.  Hãy tính hằng số cân bằng $K_p$ của phản ứng ở nhiệt độ trên.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Viết biểu thức $K_c$ đúng số mũ $2$ của $\\mathrm{HI}$ và lập bảng cân bằng trong bình $1\\text{ L}$, chọn nghiệm $0 < x < 1$ để mọi nồng độ dương, chú ý $\\Delta n_{\\text{khí}} = 0$ nên $K_p = K_c$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $4x^2/[(1-x)(2-x)]=50{,}5$; chỉ nhận nghiệm $0<x<1$.\n\n2. I₂ còn $2-x$ mol trong 1 L.\n\n3. HI tạo thành 2x mol trong 1 L.\n\n4. $\\Delta n=2-1-1=0$, nên $K_p=K_c$.\n\nKết quả tính lại từ dữ kiện: nồng độ H₂ = $0{,}06501607$ mol/L; nồng độ I₂ = $1{,}065016$ mol/L; nồng độ HI = $1{,}869968$ mol/L; Kp = $50{,}5$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C5 (Đề tổng hợp 11, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Viết $K_c = 2x^2/[(1 - x)(2 - x)]$ (quên bình phương hệ số $2$ của $\\mathrm{HI}$ thành $4x^2$)."
      },
      {
        "id": "option-2",
        "label": "Tính $K_p = K_c(RT)^2$ với $T = 448\\text{ K}$ hoặc $R = 8{,}314$ do quên trừ số mol khí chất đầu."
      },
      {
        "id": "option-3",
        "label": "Lập bảng ba dòng theo $\\text{mol/L}$ (trong bình $1\\text{ L}$), giải $4x^2/[(1 - x)(2 - x)] = 50{,}5$ với $0 < x < 1$, rồi dùng $\\Delta n_{\\text{khí}} = 0$ suy ra $K_p = K_c$."
      },
      {
        "id": "option-4",
        "label": "Chọn nghiệm $x > 1$ của phương trình bậc hai dẫn tới nồng độ $\\mathrm{H_2}$ lúc cân bằng bị âm."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-022",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT22 C5: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Cho cân bằng: $\\mathrm{2CO(k) \\rightleftharpoons C(gr) + CO_{2}(k)}$ có hằng số cân bằng $K_p = 0{,}74$. Tính áp suất riêng phần của CO và $\\mathrm{CO_{2}}$ nếu áp suất lúc cân bằng là 1,0 atm, nhiệt độ là 727 °C. Nếu áp suất lúc cân bằng chỉ là 0,5 atm, thì áp suất của CO và $\\mathrm{CO_{2}}$ lúc này là bao nhiêu? Từ kết quả đó cho biết áp suất ảnh hưởng thế nào đến chiều hướng diễn biến của cân bằng trên theo nguyên lý Le Chatelier?\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Chất rắn $\\mathrm{C(gr)}$ không có mặt trong $K_p$; đặt ẩn $p = P(\\mathrm{CO})$ suy ra $P(\\mathrm{CO_2}) = P - p$ và giải $(P - p)/p^2 = 0{,}74$ với $0 < p < P$ cho cả hai áp suất. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. Bỏ C rắn khỏi K; $K_p=(P-p)/p^2=0{,}74$. Chọn nghiệm dương nhỏ hơn P.\n\n2. Tổng áp suất là P. Khi giảm áp, phần mol CO tăng: cân bằng dịch nghịch về phía nhiều mol khí.\n\n3. Bỏ C rắn khỏi K; $K_p=(P-p)/p^2=0{,}74$. Chọn nghiệm dương nhỏ hơn P.\n\n4. Tổng áp suất là P. Khi giảm áp, phần mol CO tăng: cân bằng dịch nghịch về phía nhiều mol khí.\n\nKết quả tính lại từ dữ kiện: P(CO) khi P=1 = $0{,}6689019$ atm; P(CO₂) khi P=1 = $0{,}3310981$ atm; P(CO) khi P=0.5 = $0{,}3883794$ atm; P(CO₂) khi P=0.5 = $0{,}1116206$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C5 (Đề tổng hợp 12, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đưa chất rắn $\\mathrm{C(gr)}$ vào tử số của biểu thức $K_p$ và đếm $\\mathrm{C(gr)}$ vào $\\Delta n_{\\text{khí}}$."
      },
      {
        "id": "option-2",
        "label": "Khi $P$ giảm xuống $0{,}5\\text{ atm}$, chia đôi trực tiếp $P(\\mathrm{CO})$ và $P(\\mathrm{CO_2})$ tính được ở $1{,}0\\text{ atm}$."
      },
      {
        "id": "option-3",
        "label": "Gán $P(\\mathrm{CO}) = P(\\mathrm{CO_2}) = P/2$ tại cân bằng mà không giải phương trình theo $K_p = 0{,}74$."
      },
      {
        "id": "option-4",
        "label": "Bỏ chất rắn $\\mathrm{C(gr)}$ khỏi $K_p = P(\\mathrm{CO_2})/P(\\mathrm{CO})^2$, đặt ẩn $p = P(\\mathrm{CO})$ và $P(\\mathrm{CO_2}) = P - p$ để giải nghiệm $0 < p < P$ ở từng áp suất $P$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-023",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT24 C5: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Ở 25 °C hằng số $K_p = 2.9e-3$ cho phương trình phản ứng sau: $\\mathrm{NH_{4}OCONH_{2}(r) \\rightleftharpoons 2NH_{3}(k) + CO_{2}(k)}$. Người ta đặt một lượng nhất định $\\mathrm{NH_{4}OCONH_{2}}$ trong bình kín chân không ở 25 °C và đợi cho đến khi hệ đạt trạng thái cân bằng. Hãy cho biết tổng áp suất của hệ là bao nhiêu ở trạng thái cân bằng?\n\nDữ kiện chung cuối đề (Phụ lục A): $h = 6.626e-34$ J.s; $c = 3.0e8$ m/s; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; $F = 96\\,500$ C/mol; 1 m = $10^9$ nm; 1 eV = $1.602e-19$ J; $N_A = 6.023e23$; có in bảng tuần hoàn.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Viết biểu thức $K_p = P(\\mathrm{NH_3})^2 P(\\mathrm{CO_2})$ (không chứa chất rắn), dùng tỉ lệ hệ số $2:1$ để đặt $P(\\mathrm{CO_2}) = p$, $P(\\mathrm{NH_3}) = 2p$ trong miền $p > 0$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. Chất rắn không vào K; áp suất NH₃ gấp đôi CO₂. $K_p=(2p)^2p=4p^3$.\n\n2. $P_{\\text{tổng}}=P(NH_3)+P(CO_2)=3p$, giả sử còn pha rắn tại cân bằng.\n\nKết quả tính lại từ dữ kiện: P(CO₂) = $0{,}08983509$ atm; áp suất tổng = $0{,}2695053$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C5 (HK1 2019–2020, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bỏ chất rắn $\\mathrm{NH_4OCONH_2(r)}$ khỏi $K_p$, đặt $P(\\mathrm{CO_2}) = p$ và $P(\\mathrm{NH_3}) = 2p$ theo tỉ lệ hệ số khí rồi giải $K_p = (2p)^2 p = 4p^3$."
      },
      {
        "id": "option-2",
        "label": "Viết mẫu số có áp suất chất rắn hoặc đặt $K_p = p^2 \\cdot p = p^3$ (quên hệ số $2$ của $\\mathrm{NH_3}$)."
      },
      {
        "id": "option-3",
        "label": "Lấy $P(\\mathrm{CO_2}) = p$ làm áp suất tổng của hệ thay vì cộng $P(\\mathrm{NH_3}) + P(\\mathrm{CO_2}) = 3p$."
      },
      {
        "id": "option-4",
        "label": "Đặt áp suất ban đầu của chất rắn bằng $1\\text{ atm}$ rồi lập bảng $1 - p$ cho $\\mathrm{NH_4OCONH_2(r)}$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-024",
    "lessonId": "gc-eq-composition",
    "title": "Đề ĐT27 C5: Tìm thành phần và chiều dịch chuyển",
    "prompt": "Ở 500 °C, phản ứng dưới đây có hằng số cân bằng $K_p = 2.56e2$ atm: $\\mathrm{NH_{3} \\rightleftharpoons 1/2N_{2} + 3/2H_{2}}$. Phản ứng được tiến hành trong bình kín và ban đầu chỉ có khí $\\mathrm{NH_{3}}$ với áp suất 1 atm. Hãy tính áp suất riêng phần của các khí $\\mathrm{H_{2}}$, $\\mathrm{N_{2}}$, $\\mathrm{NH_{3}}$ khi hệ đạt cân bằng.\n\nDữ kiện chung cuối đề (Phụ lục A): $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; $R_H = 109678$ cm$^{-1}$; $N_A = 6.023e23$; $F = 96\\,500$ C/mol; 1 eV = $1.602e-19$ J; $T$(K) = 273 + $t$(°C); $Z$(He) = 2; $Z$(Li) = 3.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Viết biểu thức $K_p$ theo đúng hệ số $1, 1/2, 3/2$ của đề và bảng cân bằng theo atm; chọn nghiệm $0 < x < 1$ và giữ chính xác $1 - x$ dù $K_p$ lớn. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\nỞ V,T không đổi, đặt x là phần áp suất NH₃ đã phản ứng:\n\n| atm | NH₃ | N₂ | H₂ |\n|---|---|---|---|\n| Ban đầu | 1 | 0 | 0 |\n| Phản ứng | −x | +x/2 | +3x/2 |\n| Cân bằng | 1−x | x/2 | 3x/2 |\n\nMiền nghiệm: 0<x<1. Không nhân đôi phương trình rồi giữ nguyên K, vì nhân hệ số với 2 sẽ làm K mới bằng K².\n\n1. Bảng: $1-x$, $x/2$, $3x/2$. Giải $(x/2)^{1/2}(3x/2)^{3/2}/(1-x)=256$ với $0<x<1$.\n\n2. NH₃ còn $1-x$. K lớn làm chất đầu còn rất ít; không làm tròn x thành 1.\n\n3. N₂ tăng x/2.\n\n4. H₂ tăng 3x/2. Kiểm tra $P(H_2)/P(N_2)=3$.\n\nKết quả tính lại từ dữ kiện: mức biến thiên áp suất x = $0{,}9949765$ atm; P(NH₃) = $0{,}005023513$ atm; P(N₂) = $0{,}4974882$ atm; P(H₂) = $1{,}492465$ atm.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT27 C5 (HK1 2025–2026, 1 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân đôi phương trình thành $\\mathrm{2NH_3 \\rightleftharpoons N_2 + 3H_2}$ cho tiện số mũ nguyên nhưng vẫn giữ nguyên $K_p = 256$ (thay vì $256^2$)."
      },
      {
        "id": "option-2",
        "label": "Cho rằng vì $K_p = 256$ lớn nên $\\mathrm{NH_3}$ phân hủy hoàn toàn ($P(\\mathrm{NH_3}) = 0$)."
      },
      {
        "id": "option-3",
        "label": "Lập bảng theo atm đúng hệ số $1, 1/2, 3/2$ và giữ đúng $K_p = 256$, giải nghiệm $0 < x < 1$ mà không làm tròn $1 - x$ về $0$."
      },
      {
        "id": "option-4",
        "label": "Bỏ qua số mũ phân số $1/2$ và $3/2$ trong biểu thức $K_p$ hoặc thế nồng độ $\\text{mol/L}$ trực tiếp vào $K_p$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-001",
    "lessonId": "gc-eq-temperature",
    "title": "Đề ĐT05 C4: Tính K từ thành phần cân bằng",
    "prompt": "Phản ứng $\\mathrm{N_{2}}$ tạo cân bằng ở nhiệt độ cao theo phương trình: $\\mathrm{N_{2}(k) \\rightleftharpoons 2N(k)}$. Ở 4000 K, đối với một mẫu nitơ có áp suất tổng cộng $P_t = 1{,}00$ atm, lượng $\\mathrm{N_{2}}$ phân hủy ở trạng thái cân bằng là 0,65%. Ở 5000 K với cùng áp suất tổng cộng $P_t = 1{,}00$ atm, lượng $\\mathrm{N_{2}}$ phân hủy ở trạng thái cân bằng tăng lên thành 11,6%.\n\n\n\n1.  Tính hằng số cân bằng ($K_p$) của phản ứng phân hủy $\\mathrm{N_{2}}$ ở 4000 K và 5000 K.\n\n1.  Tính $\\Delta H$ của phản ứng trên giả sử biến thiên entalpy không thay đổi theo nhiệt độ.\n\nDữ kiện chung cuối đề (Phụ lục A): $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Lập bảng mol với $1\\text{ mol}$ chất đầu $\\mathrm{N_2}$ và độ phân li $\\alpha$; đổi phần mol $x_i = n_i/n_{\\text{tổng}}$ thành áp suất riêng phần $P_i = x_i P_t$. Chỉ thành phần cân bằng mới dùng để tính $K$.\n\n**Lời giải đầy đủ:**\n\n1. $K_p=4\\alpha^2P/(1-\\alpha^2)$, với $\\alpha=0{,}0065$.\n\n2. Giữ cách lập bảng nhưng thay $\\alpha=0{,}116$.\n\n3. Trừ hai phương trình $-RT\\ln K=\\Delta H^\\circ-T\\Delta S^\\circ$; đổi J sang kJ.\n\nKết quả tính lại từ dữ kiện: Kp ở 4000 K = $1{,}690071\\times10^{-4}$ ; Kp ở 5000 K = $0{,}05455813$ ; ΔH° = $960{,}6131$ kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-5a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C4 (HK2 2013–2014, 2 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thế thẳng $\\alpha$ và $1 - \\alpha$ như áp suất riêng phần vào $K_p$ mà không chia cho tổng số mol $(1 + \\alpha)$."
      },
      {
        "id": "option-2",
        "label": "Lập bảng mol với $1\\text{ mol}$ chất đầu và độ phân li $\\alpha$; đổi phần mol thành áp suất riêng phần theo $P_i = x_i P_t$."
      },
      {
        "id": "option-3",
        "label": "Dùng $P_t = 1{,}00\\text{ atm}$ làm áp suất riêng phần của cả $\\mathrm{N_2}$ và $\\mathrm{N}$ tại cân bằng."
      },
      {
        "id": "option-4",
        "label": "Lập bảng nồng độ $\\text{mol/L}$ với $R = 0{,}082$ rồi suy ra $\\Delta H$ bằng công thức $K_p = K_c(RT)^{\\Delta n}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c4-eq-025",
    "lessonId": "gc-eq-temperature",
    "title": "Đề ĐT01 C2: K theo nhiệt độ và Gibbs",
    "prompt": "Phản ứng tổng hợp ammoniac có giá trị $K_p$ ở 900 K là $3.7e-6$. Coi $\\Delta H^\\circ$ của phản ứng không phụ thuộc vào nhiệt độ và có giá trị là $-92$ kJ. Tính hằng số cân bằng $K_p$ ở 550 K và cho biết chiều hướng chuyển dịch cân bằng khi nhiệt độ giảm từ 900 K xuống 550 K.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Dùng liên hệ Gibbs với $K$ ($\\Delta G^\\circ = -RT\\ln K = \\Delta H^\\circ - T\\Delta S^\\circ$) và giữ năng lượng đồng nhất theo $\\text{J}$ ($R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$, $\\Delta H^\\circ = -92\\,000\\text{ J}$); nếu có hai nhiệt độ thì lập hai phương trình.\n\n**Lời giải đầy đủ:**\n\n1. Ở 900 K, tính $\\Delta G^\\circ=-RT\\ln K$ rồi $\\Delta S^\\circ=(\\Delta H^\\circ-\\Delta G^\\circ)/900$. Dùng −92000 J.\n\n2. Tính $\\Delta G^\\circ_{550}=\\Delta H^\\circ-550\\Delta S^\\circ$ rồi $K_p=e^{-\\Delta G^\\circ/(8{,}314\\times550)}$. Tỏa nhiệt: giảm T làm K tăng, dịch thuận.\n\nKết quả tính lại từ dữ kiện: ΔS° = $-206{,}2069$ J/(mol·K); Kp ở 550 K = $0{,}009251543$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-r1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C2 (HK1 2010–2011); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng $R = 0{,}082\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$ trong $\\Delta G^\\circ = -RT\\ln K_p$ và giữ nguyên $\\Delta H^\\circ = -92\\text{ kJ}$."
      },
      {
        "id": "option-2",
        "label": "Lập tỉ lệ tuyến tính $K_{p,550}/K_{p,900} = 550/900$ mà không qua $\\ln K$ hay hàm Gibbs."
      },
      {
        "id": "option-3",
        "label": "Đổi $K_p$ sang $K_c$ với $\\Delta n_{\\text{khí}} = 0$ rồi dùng $\\Delta G^\\circ = -RT\\ln K_c$ theo nhiệt độ $^{\\circ}\\text{C}$."
      },
      {
        "id": "option-4",
        "label": "Dùng liên hệ Gibbs với $K$ ($\\Delta G^\\circ = -RT\\ln K = \\Delta H^\\circ - T\\Delta S^\\circ$) và quy đổi đồng nhất năng lượng theo $\\text{J}$ với $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-026",
    "lessonId": "gc-eq-temperature",
    "title": "Đề ĐT19 C6a: K theo nhiệt độ và Gibbs",
    "prompt": "Một dung dịch axit yếu HX 0,1 M có pH = 5,83 ở 25 °C. Hãy tính biến thiên năng lượng tự do Gibbs ($\\Delta G$) của phản ứng phân li HX ở 25 °C.\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Tính $[\\text{H}^+] = 10^{-5{,}83}$ và $K_a$, sau đó dùng liên hệ Gibbs với $K$ ($\\Delta G^\\circ = -RT\\ln K_a$) với $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$, $T = 298\\text{ K}$ rồi chia $1000$ sang $\\text{kJ/mol}$.\n\n**Lời giải đầy đủ:**\n\n1. Với giả thiết axit đơn chức và bỏ qua sự tự phân li của nước, $K_a=[H^+]^2/(C-[H^+])$, $[H^+]=10^{-5{,}83}$ (mô hình gần đúng).\n\n2. $\\Delta G^\\circ=-RT\\ln K_a$, tính theo J rồi chia 1000 để đổi sang kJ (tính giá trị chuẩn $\\Delta G^\\circ$; lưu ý $\\Delta G$ của phản ứng tại trạng thái cân bằng bằng 0).\n\nKết quả tính lại từ dữ kiện: Ka = $2{,}187794\\times10^{-11}$ ; ΔG° = $60{,}81335$ kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-r1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C6a (Đề tổng hợp 9); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Từ $\\text{pH} = 5{,}83$ tính $[\\text{H}^+] = 10^{-\\text{pH}}$ và $K_a = [\\text{H}^+]^2/(C - [\\text{H}^+])$, rồi dùng $\\Delta G^\\circ = -RT\\ln K_a$ với $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$, $T = 298\\text{ K}$ và đổi sang $\\text{kJ/mol}$."
      },
      {
        "id": "option-2",
        "label": "Dùng $R = 0{,}082\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$ và nhiệt độ $t = 25\\ ^\\circ\\text{C}$ trong công thức $\\Delta G^\\circ = -RT\\ln K_a$."
      },
      {
        "id": "option-3",
        "label": "Cho rằng tại trạng thái cân bằng $\\Delta G^\\circ$ luôn bằng $0$ nên không cần tính $K_a$."
      },
      {
        "id": "option-4",
        "label": "Thế trực tiếp giá trị $\\text{pH} = 5{,}83$ thay cho $K_a$ vào công thức $\\Delta G^\\circ = -RT\\ln K_a$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c4-eq-027",
    "lessonId": "gc-eq-temperature",
    "title": "Đề ĐT22 C3: K theo nhiệt độ và Gibbs",
    "prompt": "Cho các dữ kiện nhiệt động sau:\n\n| | O₂(k) | Cl₂(k) | HCl(k) | H₂O(k) |\n|---|---|---|---|---|\n| ΔH°f,298 (kJ/mol) | 0 | 0 | −92,31 | −241,83 |\n| S°298 (J/(mol·K)) | 205,03 | 222,9 | 186,7 | 188,7 |\n\n1. Tính hằng số cân bằng của phản ứng oxy hoá HCl ở 298 K: $\\mathrm{4HCl(k)+O_2(k)\\rightleftharpoons2Cl_2(k)+2H_2O(k)}$.\n2. Giả thiết rằng ΔH°, ΔS° là hằng số đối với nhiệt độ, tính hằng số cân bằng của phản ứng ở 698 K.\n3. Muốn tăng hiệu suất oxy hóa HCl thì nên tiến hành phản ứng ở những điều kiện nào?\n\nDữ kiện chung cuối đề (Phụ lục A): Không in dữ kiện chung. Khi cần, dùng $R=0{,}082$ L·atm/(mol·K) cho khí và $R=8{,}314$ J/(mol·K) cho năng lượng.\n\n**Câu hỏi:** Nên chọn phương pháp nào trước khi tính?",
    "explanation": "Dùng liên hệ Gibbs với $K$ ($\\Delta G^\\circ_T = \\Delta H^\\circ - T\\Delta S^\\circ = -RT\\ln K_T$) và giữ năng lượng đồng nhất theo $\\text{J}$ ($R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$); chú ý nhân đủ hệ số và không bỏ $S^\\circ$ của đơn chất.\n\n**Lời giải đầy đủ:**\n\n1. Lấy tổng nhiệt tạo thành của sản phẩm trừ chất đầu, có nhân hệ số.\n\n2. $2S(Cl_2)+2S(H_2O)-4S(HCl)-S(O_2)$.\n\n3. $K=\\exp[-(\\Delta H^\\circ-T\\Delta S^\\circ)/(RT)]$, đổi ΔH sang J.\n\n4. Giữ ΔH°, ΔS° không đổi. Tỏa nhiệt, Δn khí=−1: nhiệt độ thấp, áp suất cao, dư O₂ giúp tăng hiệu suất cân bằng; tốc độ phản ứng có thể chậm ở T thấp.\n\nKết quả tính lại từ dữ kiện: ΔH° = $-114{,}42$ kJ/mol; ΔS° = $-128{,}63$ J/(mol·K); K ở 298 K = $2{,}175396\\times10^{13}$ ; K ở 698 K = $69{,}77734$ .",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/kieu-r1.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C3 (Đề tổng hợp 12, 2 điểm); lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $\\Delta H^\\circ$ (kJ) và $\\Delta S^\\circ$ (J/K) rồi trừ thẳng $\\Delta H^\\circ - T\\Delta S^\\circ$ mà không đổi về cùng đơn vị năng lượng."
      },
      {
        "id": "option-2",
        "label": "Dùng $R = 0{,}082\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$ khi tính $K = \\exp(-\\Delta G^\\circ/RT)$ ở $298\\text{ K}$ và $698\\text{ K}$."
      },
      {
        "id": "option-3",
        "label": "Tính $\\Delta H^\\circ$, $\\Delta S^\\circ$ có nhân hệ số phản ứng, đổi về cùng đơn vị (J hoặc kJ), rồi dùng $\\Delta G^\\circ_T = \\Delta H^\\circ - T\\Delta S^\\circ$ và $K = \\exp(-\\Delta G^\\circ_T/RT)$ với $R = 8{,}314$."
      },
      {
        "id": "option-4",
        "label": "Bỏ qua $S^\\circ$ của đơn chất $\\mathrm{O_2(k)}$ và $\\mathrm{Cl_2(k)}$ khi tính $\\Delta S^\\circ$ vì $\\Delta H^\\circ_f$ của chúng bằng $0$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c4-eq-028",
    "lessonId": "gc-eq-drawing-guide",
    "title": "Tìm lỗi: đổi Kp sang Kc",
    "prompt": "Một bạn viết cho $\\mathrm{PCl_5(k)\\rightleftharpoons PCl_3(k)+Cl_2(k)}$ ở 250 °C: “Δn=0; $K_c=K_p/(8{,}314\\times250)$”. Hãy tìm và sửa các lỗi.\n\n**Câu hỏi:** Chọn tất cả lỗi.",
    "explanation": "Cả ba chất trong đề đều là khí; Δn=1. R dùng cho áp suất atm là 0,082, và T phải theo kelvin.\n\n**Lời giải đầy đủ:**\n\n$\\Delta n=1$, $T=523$ K, $R=0{,}082$. Do đó $K_c\\approx0{,}01685$. Số mũ trong K phải theo hệ số; bỏ pha rắn/lỏng nguyên chất nếu có.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Biên soạn từ mục Lỗi hay gặp của Dạng 5."
    },
    "kind": "multiple-answer",
    "choices": [
      {
        "id": "option-1",
        "label": "Δn phải bằng 2−1=1."
      },
      {
        "id": "option-2",
        "label": "Phải thêm PCl₅ rắn vào K."
      },
      {
        "id": "option-3",
        "label": "Dùng R=0,082 với L, atm và mol."
      },
      {
        "id": "option-4",
        "label": "Đổi T=250+273=523 K."
      }
    ],
    "answers": [
      "option-1",
      "option-3",
      "option-4"
    ]
  },
  {
    "id": "gc-c4-eq-029",
    "lessonId": "gc-eq-drawing-guide",
    "title": "Đề hỏi gì thì vẽ/dùng gì?",
    "prompt": "Đề cho số mol ban đầu, thể tích bình và lượng sản phẩm ở cân bằng, yêu cầu tính Kc. Sau đó đề cho một hỗn hợp chưa cân bằng và hỏi chiều diễn biến.\n\n**Câu hỏi:** Cách trình bày nào giải quyết đủ hai phần?",
    "explanation": "Bảng ba dòng giữ quan hệ hệ số phản ứng. Trục Q/K cho chiều: Q<K thuận, Q>K nghịch.\n\n**Lời giải đầy đủ:**\n\nLập bảng một đơn vị duy nhất, đặt biến đổi theo hệ số. Chia mol cho V trước khi thế Kc. Với hỗn hợp chưa cân bằng, viết cùng biểu thức nhưng gọi Q; so Q với K.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-4/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Biên soạn theo phương pháp ba dòng và lỗi hay gặp Dạng 5."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chỉ vẽ thang năng lượng electron."
      },
      {
        "id": "option-2",
        "label": "Bảng ba dòng theo mol → chia V → Kc; với hỗn hợp mới tính Q rồi đặt Q cạnh K trên trục số."
      },
      {
        "id": "option-3",
        "label": "Dùng áp suất tổng thay mọi áp suất riêng phần trong K."
      },
      {
        "id": "option-4",
        "label": "Thế thẳng số mol cân bằng vào $K_c$ bỏ qua thể tích $V$, rồi coi $Q = K_c$ cho hỗn hợp mới."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-012",
    "lessonId": "gc-kin-rate",
    "title": "Đề ĐT28 C4: động học bậc 1",
    "prompt": "Phản ứng phân hủy $\\mathrm{N_{2}O_{5}}$ trong pha khí là phản ứng bậc 1. Ở 298 K, hằng số tốc độ phản ứng là 3.20e-5 s$^{-1}$. Nồng độ ban đầu của $\\mathrm{N_{2}O_{5}}$ là 0,20 M:\n\n\n\n-  Tính nồng độ $\\mathrm{N_{2}O_{5}}$ sau 2,0 giờ.\n\n\n-  Cần thời gian bao lâu để 25% $\\mathrm{N_{2}O_{5}}$ đã phản ứng?\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Bài ĐT28 ở 298 K có $k = 3{,}20\\times10^{-5}\\text{ s}^{-1}$. Để tính $C$ sau 2,0 giờ và thời gian 25% đã phản ứng, bước chuẩn bị nào đúng?",
    "explanation": "Phản ứng bậc 1 ở nhiệt độ không đổi 298 K: đổi $2{,}0$ giờ $= 7200\\text{ s}$ theo đơn vị $\\text{s}^{-1}$ của $k$, và tô phần còn lại 75% ($f = 0{,}75$) trước khi tính $t$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  a) $t = 7200$ s; $kt = 3.20e-5 \\times 7200 = 0{,}2304$; $C = 0{,}20 \\times e^{-0{,}2304} = 0{,}20 \\times 0{,}794$. \n\n-  b) 25% đã phản ứng nên còn 75%: $t = \\dfrac{\\ln(1/0{,}75)}{k} = \\dfrac{0{,}2877}{3.20e-5}$.\n\n$t=2\\times3600=7200$ s vì k có đơn vị s⁻¹. Kết quả: 7200 s.\n\n$C=0{,}20e^{-3{,}20\\times10^{-5}\\times7200}$. Kết quả: 0,158843 M.\n\nCòn 75%, nên $t=\\ln(1/0{,}75)/(3{,}20\\times10^{-5})$. Kết quả: 8990,06 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C4 (Hè 2025--2026, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đổi $2{,}0$ giờ $= 7200\\text{ s}$ khớp với $\\text{s}^{-1}$ của $k$, và dùng phần còn lại $f = 0{,}75$ khi 25% đã phản ứng."
      },
      {
        "id": "option-2",
        "label": "Đặt phần còn lại $f = 0{,}25$ vào $t = \\ln(1/f)/k$ vì đề nêu 25% $\\mathrm{N_2O_5}$ đã phản ứng."
      },
      {
        "id": "option-3",
        "label": "Thế thẳng $t = 2{,}0$ giờ vào $C = 0{,}20e^{-kt}$ hoặc dùng Arrhenius dù đề chỉ cho một nhiệt độ."
      },
      {
        "id": "option-4",
        "label": "Tính nồng độ sau $2{,}0$ giờ theo phương trình bậc 0 là $C = C_0 - kt$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c5-kin-001",
    "lessonId": "gc-kin-rate",
    "title": "Đề ĐT05 C5: động học bậc 1",
    "prompt": "Ở 30 °C, dinitơ tetraoxit ($\\mathrm{N_{2}O_{4}}$) phân hủy theo động học bậc một như sau: $\\mathrm{N_{2}O_{4}(k) \\to  2NO_{2}(k)}$. Ở điều kiện trên, hằng số tốc độ phản ứng là 5.1e-3 s$^{-1}$. Tính thời gian (s) cần thiết để áp suất riêng phần của $\\mathrm{N_{2}O_{4}}$ giảm từ 0,10 atm xuống còn 0,010 atm.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Với dữ kiện áp suất riêng phần chất đầu của phản ứng bậc 1 này, cách thiết lập nào đúng?",
    "explanation": "Ở $T, V$ không đổi, áp suất riêng phần của $\\mathrm{N_2O_4}$ tỉ lệ thuận với nồng độ nên dùng trực tiếp $\\ln(P_0/P) = kt$; không dùng áp suất toàn phần và không nhân $k$ theo hệ số của $\\mathrm{NO_2}$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  Biến đổi tìm $t$: $t = \\dfrac1k\\ln\\dfrac{P_0}{P} = \\dfrac{\\ln(0{,}10/0{,}010)}{5.1e-3} = \\dfrac{2{,}303}{5.1e-3}$.\n\n$t=\\ln(P_0/P)/k=\\ln10/(5{,}1\\times10^{-3})$. Dùng áp suất riêng phần của chất đầu, không dùng tổng áp suất. Kết quả: 451,487 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C5 (HK2 2013--2014, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng tỉ số áp suất toàn phần thay cho áp suất riêng phần $\\mathrm{N_2O_4}$ trong $\\ln(P_0/P) = kt$."
      },
      {
        "id": "option-2",
        "label": "Dùng áp suất riêng phần $\\mathrm{N_2O_4}$ lập tỉ số $P_0/P$ trong $\\ln(P_0/P) = kt$ (hay $\\ln(P/P_0) = -kt$)."
      },
      {
        "id": "option-3",
        "label": "Dùng $\\lg(P_0/P) = kt$ trực tiếp mà không nhân thêm hệ số chuyển đổi $2{,}303$."
      },
      {
        "id": "option-4",
        "label": "Nhân hằng số tốc độ $k$ với hệ số $2$ của $\\mathrm{NO_2}$ rồi mới thế vào $t = \\ln(P_0/P)/k$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-008",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT23 C4: động học bậc 1",
    "prompt": "Đối với phản ứng bậc 1, ở 27 °C, nồng độ chất tham gia phản ứng giảm đi một nửa sau 5000 giây. Tại 37 °C nồng độ giảm đi một nửa sau 1000 giây.\n\n\n\n-  Tính hằng số tốc độ phản ứng ở 27 °C.\n\n\n-  Tính thời gian để nồng độ chất phản ứng giảm xuống còn 1/4.\n\n\n-  Tính năng lượng hoạt hóa.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Bài ĐT23 hỏi $k$ ở 27 °C, thời gian còn $1/4$ (ở 27 °C) và $E_a$ từ hai bán hủy ($5000\\text{ s}$ và $1000\\text{ s}$). Cách tính nào đúng?",
    "explanation": "Đổi $t_{1/2}$ sang $k$ bằng $k = \\ln 2/t_{1/2}$; còn $1/4$ là 2 chu kỳ bán hủy ($10000\\text{ s}$ ở 27 °C); lập tỉ số nghịch $k_2/k_1 = 5$ và đổi °C sang K để tính $E_a$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  a) $k = \\dfrac{\\ln2}{t_{1/2}} = \\dfrac{0{,}693}{5000} = 1.39e-4$ s$^{-1}$. \n\n-  b) Còn $\\tfrac14 = \\left(\\tfrac12\\right)^2$ nên $t = 2t_{1/2} = 10000$ s. \n\n-  c) Bậc 1: $\\dfrac{k_2}{k_1} = \\dfrac{t_{1/2,1}}{t_{1/2,2}} = \\dfrac{5000}{1000} = 5$; $E_a = \\dfrac{R\\ln 5}{1/300 - 1/310} = \\dfrac{8{,}314 \\times 1{,}609}{1.075e-4}$.\n\n$k_1=\\ln2/5000$. Kết quả: 0,000138629 s⁻¹.\n\n$1/4=(1/2)^2$ nên $t=2t_{1/2}=10000$ s. Kết quả: 10000 s.\n\n$k_2/k_1=5000/1000=5$; $E_a=8{,}314\\ln5/(1/300-1/310)$ J/mol, chia 1000 để ra kJ/mol. Kết quả: 124,442 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C4 (HK1 2022--2023 Ca 2, Đề tổng hợp 13, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $k_1 = 1/5000$ và lấy tỉ số thuận $k_2/k_1 = 1000/5000 = 0{,}2$ khi thế vào Arrhenius."
      },
      {
        "id": "option-2",
        "label": "Tính $k_1 = \\ln 2/5000$, lấy $t_{1/4} = 2\\,t_{1/2}(27\\,^\\circ\\text{C})$, và dùng tỉ lệ nghịch $k_2/k_1 = 5$ ở $300\\text{ K}, 310\\text{ K}$."
      },
      {
        "id": "option-3",
        "label": "Lấy thời gian còn $1/4$ bằng $4\\,t_{1/2}$ và thay nhiệt độ $27, 37\\ ^\\circ\\text{C}$ trực tiếp vào $1/T_1 - 1/T_2$."
      },
      {
        "id": "option-4",
        "label": "Nhân $\\lg 5$ với $8{,}314/(1/300 - 1/310)$ rồi giữ nguyên đơn vị J/mol cho đáp số $E_a$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-010",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT25 C4: động học bậc 1",
    "prompt": "Cho phản ứng bậc nhất A $\\to$ Sản phẩm. Biết rằng ở 80 °C, nồng độ chất A giảm từ 800 mol/L xuống 100 mol/L trong 1.3e4 giây.\n\n\n\n-  Hãy tính hằng số tốc độ phản ứng trên ở 80 °C.\n\n\n-  Hãy tính năng lượng hoạt hóa $E_A$ của phản ứng, biết ở 90 °C, phản ứng có hằng số tốc độ $k = 3.3e-4$ s$^{-1}$.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Đề ĐT25 ghi nồng độ A ở 80 °C giảm từ $800\\text{ mol/L}$ xuống $100\\text{ mol/L}$ trong $1{,}3\\times10^4\\text{ s}$. Cách xử lí nào đúng?",
    "explanation": "Vì định luật bậc 1 chỉ dùng tỉ số $C_0/C = 800/100 = 8$, giữ nguyên nồng độ đề in thay vì tự sửa; giữ $k_1$ chưa làm tròn và đổi °C sang K khi tính $E_a$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  a) Biến đổi tìm $k$: $k = \\dfrac1t\\ln\\dfrac{C_0}{C} = \\dfrac{\\ln 8}{1.3e4} = \\dfrac{2{,}079}{13000} = 1.60e-4$ s$^{-1}$. \n\n-  b) $E_a = \\dfrac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2}$; $\\dfrac1{353} - \\dfrac1{363} = 7.80e-5$; $\\ln\\dfrac{3.3e-4}{1.60e-4} = 0{,}724$; $E_a = \\dfrac{8{,}314 \\times 0{,}724}{7.80e-5}$.\n\n$k_1=\\ln(800/100)/13000$. Giữ nguyên nồng độ in trong đề; chỉ tỉ số đi vào kết quả. Kết quả: 0,000159957 s⁻¹.\n\n$T_2=90+273=363$ K; $T_1=353$ K. Kết quả: 363 K.\n\n$E_a=R\\ln(k_2/k_1)/(1/353-1/363)$ J/mol. Dùng $k_1$ chưa làm tròn, sau đó chia 1000. Kết quả: 77,1511 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C4 (HK2 2023--2024, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tự sửa $800\\text{ mol/L}$ thành $0{,}800\\text{ mol/L}$ vì cho rằng nồng độ $800\\text{ mol/L}$ không thực tế."
      },
      {
        "id": "option-2",
        "label": "Áp dụng công thức bậc 0 $k_1 = (800 - 100)/13000$ để tính hằng số tốc độ ở 80 °C."
      },
      {
        "id": "option-3",
        "label": "Làm tròn mạnh $k_1 \\approx 1{,}6\\times10^{-4}$ rồi thế nhiệt độ $80$ và $90\\ ^\\circ\\text{C}$ vào Arrhenius."
      },
      {
        "id": "option-4",
        "label": "Giữ nguyên $800$ và $100\\text{ mol/L}$ để tính $k_1 = \\frac{\\ln(800/100)}{13000}$, rồi đổi $353\\text{ K}, 363\\text{ K}$ tính $E_a$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c5-kin-011",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT26 C4: động học bậc 1",
    "prompt": "Cho biết phản ứng phân hủy $\\mathrm{N_{2}O_{5}}$ có phương trình động học $v = k[\\mathrm{N_{2}O_{5}}]$ với hằng số tốc độ $k = 0{,}00840$ s$^{-1}$ tại 28 °C theo phản ứng như sau: $\\mathrm{2N_{2}O_{5}(k) \\to  2N_{2}O_{4}(k) + O_{2}(k)}$.\n\n\n\n-  Nếu cho vào 1,5 mol $\\mathrm{N_{2}O_{5}}$ vào bình phản ứng có dung tích 2 L ở 28 °C, thì sau 3 phút nồng độ $\\mathrm{N_{2}O_{5}}$ còn lại bằng bao nhiêu?\n\n\n-  Cũng ở 28 °C, hỏi sau bao lâu phản ứng sẽ chuyển hóa hết 95% $\\mathrm{N_{2}O_{5}}$?\n\n\n-  Khi phản ứng được tiến hành tại 40 °C người ta thu được hằng số tốc độ $k = 0{,}01890$ s$^{-1}$. Tính năng lượng hoạt hoá của phản ứng hoá học trên.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Đề ĐT26 cho $1{,}5\\text{ mol }\\mathrm{N_2O_5}$ trong $2\\text{ L}$, $k = 0{,}00840\\text{ s}^{-1}$ ở 28 °C, chuyển hóa 95%, và $k = 0{,}01890\\text{ s}^{-1}$ ở 40 °C. Cách làm nào đúng?",
    "explanation": "Tính nồng độ đầu $C_0 = 1{,}5/2 = 0{,}75\\text{ M}$, đổi $3$ phút $= 180\\text{ s}$ khớp $\\text{s}^{-1}$, lấy phần còn 5% ($C_0/C = 20$) và đổi $301\\text{ K}, 313\\text{ K}$ khi tính $E_a$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  a) $C_0 = 1{,}5/2 = 0{,}75$ M; $t = 3$ phút $= 180$ s; $kt = 0{,}0084 \\times 180 = 1{,}512$; $C = 0{,}75 \\times e^{-1{,}512} = 0{,}75 \\times 0{,}2205$. \n\n-  b) Chuyển hóa 95% còn 5%: $t = \\dfrac{\\ln 20}{k} = \\dfrac{2{,}996}{0{,}0084} = 357$ s. \n\n-  c) $E_a = \\dfrac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2} = \\dfrac{8{,}314 \\times \\ln(0{,}0189/0{,}0084)}{1/301 - 1/313} = \\dfrac{8{,}314 \\times 0{,}811}{1.274e-4}$.\n\n$C_0=1{,}5/2=0{,}75$ M, $t=180$ s; $C=C_0e^{-kt}$. Kết quả: 0,165351 M.\n\nCòn 5%, nên $t=\\ln20/0{,}00840$. Kết quả: 356,635 s.\n\n$T_1=301$ K, $T_2=313$ K; $E_a=R\\ln(0{,}01890/0{,}00840)/(1/301-1/313)$ J/mol, rồi đổi kJ/mol. Kết quả: 52,9326 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C4 (HK1 2024--2025, 1,5 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy luôn $C_0 = 1{,}5\\text{ M}$ (bỏ qua $V = 2\\text{ L}$) và thế thẳng $t = 3$ phút với $k$ theo $\\text{s}^{-1}$."
      },
      {
        "id": "option-2",
        "label": "Ở ý chuyển hóa 95%, đặt phần còn lại $f = 0{,}95$ vào công thức $t = \\ln(1/f)/k$."
      },
      {
        "id": "option-3",
        "label": "Đổi $C_0 = 1{,}5/2 = 0{,}75\\text{ M}$ và $t = 180\\text{ s}$, lấy $f = 0{,}05$ khi chuyển hóa 95%, dùng $301\\text{ K}, 313\\text{ K}$ cho $E_a$."
      },
      {
        "id": "option-4",
        "label": "Nhân $k$ với hệ số $2$ của $2\\mathrm{N_2O_5}$ dù đề đã cho phương trình động học $v = k[\\mathrm{N_2O_5}]$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c5-kin-002",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT12 C4: động học bậc 1",
    "prompt": "Phản ứng phân hủy $\\mathrm{H_{2}O_{2}}$ thành $\\mathrm{H_{2}O}$ và $\\mathrm{O_{2}}$ ở 20 °C là phản ứng bậc 1 có hằng số tốc độ của phản ứng là $k = 1.8e-5$ s$^{-1}$. Tính thời gian bán hủy ($t_{1/2}$) của phản ứng phân hủy trên. Nếu nồng độ ban đầu của $\\mathrm{H_{2}O_{2}}$ là 0,30 M thì hỏi sau bao lâu sẽ phân hủy hết 90% $\\mathrm{H_{2}O_{2}}$ ban đầu?\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Khi tính $t_{1/2}$ và thời gian phân hủy hết 90% $\\mathrm{H_2O_2}$ theo bậc 1, cách xử lí nào đúng?",
    "explanation": "Phân hủy 90% nghĩa là còn 10% ($C_0/C = 10$), nên $\\ln(C_0/C) = \\ln 10$. Với bậc 1, $C_0 = 0{,}30\\text{ M}$ triệt tiêu trong cả $t_{1/2}$ lẫn $t$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  $t_{1/2} = \\dfrac{0{,}693}{1.8e-5} = 3.85e4$ s. \n\n-  Phân hủy 90% nên còn 10%: $\\dfrac{C_0}{C} = 10$, $t = \\dfrac{\\ln10}{k} = \\dfrac{2{,}303}{1.8e-5} = 1.28e5$ s.\n\n$t_{1/2}=\\ln2/k$. Kết quả: 38508,2 s.\n\nCòn 10% nên $t=\\ln10/k$, không phải $\\ln(1/0{,}9)/k$. Kết quả: 127921 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C4 (HK1 2017--2018, 1 điểm; trùng nguyên văn ĐT19 C4); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy phần trăm đã phân hủy ($f = 0{,}90$) thay thẳng vào công thức $t = \\ln(1/f)/k$."
      },
      {
        "id": "option-2",
        "label": "Nhân nồng độ ban đầu $C_0 = 0{,}30\\text{ M}$ vào công thức bán hủy $t_{1/2} = C_0\\ln 2/k$."
      },
      {
        "id": "option-3",
        "label": "Dùng công thức $t_{90\\%} = \\lg(1/0{,}10)/k$ mà không đổi $\\ln 10 = 2{,}303\\lg 10$."
      },
      {
        "id": "option-4",
        "label": "Tô phần còn lại $f = 0{,}10$ để tính $t = \\ln(1/0{,}10)/k$; cả $t_{1/2}$ và $t$ đều không phụ thuộc $C_0$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c5-kin-003",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT14 C4: động học bậc 1",
    "prompt": "Phản ứng đồng phân hoá methyl isonitrile ($\\mathrm{CH_{3}NC}$) thành acetonitrile ($\\mathrm{CH_{3}CN}$) là phản ứng bậc 1 ở 427 K có hằng số tốc độ phản ứng là 5.11e-5 giây$^{-1}$: $\\mathrm{CH_{3}-N\\equiv C(k) \\to  CH_{3}-C\\equiv N(k)}$. Nồng độ ban đầu của $\\mathrm{CH_{3}NC}$ là 0,25 M. Hãy cho biết nồng độ mol/L của $\\mathrm{CH_{3}NC}$ sau 2,0 giờ phản ứng? Cần thời gian bao nhiêu lâu để 20% $\\mathrm{CH_{3}NC}$ tham gia vào phản ứng đồng phân hoá?\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Trước khi tính nồng độ $\\mathrm{CH_3NC}$ sau 2,0 giờ và thời gian để 20% phản ứng, cần chuẩn bị gì?",
    "explanation": "Hằng số $k$ có đơn vị $\\text{s}^{-1}$ nên phải đổi $2{,}0$ giờ $= 7200\\text{ s}$; 20% đã tham gia phản ứng nghĩa là còn lại 80% ($f = 0{,}80$).\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  $t = 2{,}0$ h $= 7200$ s; $kt = 5.11e-5 \\times 7200 = 0{,}368$; $C = 0{,}25 \\times e^{-0{,}368} = 0{,}25 \\times 0{,}692$. \n\n-  Phản ứng 20% nên còn 80%: $t = \\dfrac{\\ln(1/0{,}8)}{k} = \\dfrac{0{,}223}{5.11e-5}$.\n\n$t=7200$ s; $C=0{,}25e^{-5{,}11\\times10^{-5}\\times7200}$. Kết quả: 0,173043 M.\n\nCòn 80%, nên $t=\\ln(1/0{,}8)/k$. Kết quả: 4366,8 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C4 (Đề tổng hợp 3, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thế thẳng $t = 2{,}0$ giờ vào $C = 0{,}25e^{-kt}$ mà không cần đổi đơn vị theo $k$."
      },
      {
        "id": "option-2",
        "label": "Thay phần đã phản ứng $f = 0{,}20$ trực tiếp vào $t = \\ln(1/f)/k$ khi tìm thời gian."
      },
      {
        "id": "option-3",
        "label": "Đổi $2{,}0$ giờ $= 7200\\text{ s}$ khớp $\\text{s}^{-1}$ của $k$, và lấy phần còn lại $f = 0{,}80$ khi 20% đã phản ứng."
      },
      {
        "id": "option-4",
        "label": "Dùng phương trình $C = C_0 - kt$ với $t = 7200\\text{ s}$ vì tốc độ phân hủy bậc 1 không đổi."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c5-kin-004",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT17 C4: động học bậc 1",
    "prompt": "Poloni ($\\mathrm{^{210}Po}$) phân hủy theo động học bậc nhất với chu kỳ bán hủy là 138 ngày. Hãy tính hằng số phân hủy $k$. Nếu ban đầu có 1 mg $\\mathrm{^{210}Po}$ hãy tính lượng $\\mathrm{^{210}Po}$ còn lại sau 18 năm. Tính tuổi của cây tính từ lúc trồng cùng với 1 mg $\\mathrm{^{210}Po}$ cho đến khi hàm lượng $\\mathrm{^{210}Po}$ chỉ còn 0,01% so với lượng ban đầu.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Với bài phóng xạ $^{210}\\mathrm{Po}$ ($t_{1/2} = 138$ ngày), cách xử lí đơn vị và dữ kiện nào đúng?",
    "explanation": "Đổi $t$ về cùng đơn vị ngày với $t_{1/2}$ ($18\\times365 = 6570$ ngày), giữ $k = \\ln 2/138$ chưa làm tròn vì số mũ $kt \\approx 33$ rất nhạy sai số, và lưu ý $0{,}01\\% = 10^{-4}$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  $k = \\dfrac{\\ln2}{138} = 5.02e-3$ ngày$^{-1}$. \n\n-  18 năm $= 6570$ ngày: $m = 1 \\times e^{-5.02e-3 \\times 6570} = e^{-33}$ mg. \n\n-  Còn 0,01% nên $\\dfrac{m_0}{m} = 10^4$: $t = \\dfrac{\\ln 10^4}{k} = \\dfrac{9{,}21}{5.02e-3}$ ngày.\n\nTính không làm tròn trung gian: $m=2^{-6570/138}\\approx4{,}65966\\times10^{-15}$ mg (làm tròn 1 chữ số có nghĩa là khoảng $5\\times10^{-15}$ mg; nên giữ giá trị chưa làm tròn khi nhập kết quả).\n\n$k=\\ln2/138$. Kết quả: 0,00502281 ngày⁻¹.\n\n$t=18\\times365=6570$ ngày; $m=1\\times2^{-6570/138}$ mg. Giữ đủ chữ số vì số mũ rất lớn. Kết quả: 4,65966e-15 mg.\n\n$0{,}01\\%=10^{-4}$; $t=\\ln(10^4)/k$, khoảng 5,02 năm. Kết quả: 1833,7 ngày.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C4 (Đề tổng hợp 7, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $k = \\ln 2/138$ ngày$^{-1}$, đổi $18$ năm $= 6570$ ngày, và đổi $0{,}01\\%$ thành $f = 10^{-4}$."
      },
      {
        "id": "option-2",
        "label": "Tính $k = \\ln 2/138$ ngày$^{-1}$ và đổi $0{,}01\\%$ thành $f = 0{,}01$ để thế vào $t = \\ln(1/f)/k$."
      },
      {
        "id": "option-3",
        "label": "Thế trực tiếp $t = 18$ năm vào $m = m_0e^{-kt}$ khi $k$ đang tính theo đơn vị ngày$^{-1}$."
      },
      {
        "id": "option-4",
        "label": "Tính $k = 1/t_{1/2}$ rồi làm tròn $k$ còn 1 chữ số có nghĩa trước khi tính lượng còn sau 18 năm."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c5-kin-005",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT18 C4: động học bậc 1",
    "prompt": "Astatine (At) là một nguyên tố halogen có thể tổng hợp nhân tạo bằng phản ứng bắn phá hạt nhân. $\\mathrm{^{211}At}$ có hoạt tính phóng xạ tạo tia alpha, Astatine rất hữu ích trong điều trị một số bệnh ung thư tuyến giáp. Một bệnh nhân được chỉ định dùng 0,100 mg Astatine lúc 9 giờ sáng, hỏi sau 14 giờ chiều lượng Astatine còn lại bao nhiêu, biết thời gian bán hủy của $\\mathrm{^{211}At}$ là 7,21 giờ và phản ứng là bậc một.\n\n\n\n**Lưu ý đề bài:** “Sau 14 giờ chiều” hiểu là đến thời điểm 14 giờ (2 giờ chiều), tức là sau 5 giờ kể từ 9 giờ sáng. Nếu hiểu là sau 14 giờ đồng hồ thì kết quả khác; cần ghi rõ cách hiểu khi trình bày tự luận.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Với bài $^{211}\\mathrm{At}$ tiêm $0{,}100\\text{ mg}$ lúc 9 h sáng ($t_{1/2} = 7{,}21$ giờ), cách tính lượng còn lúc 14 h chiều nào đúng?",
    "explanation": "Từ 9 h sáng đến 14 h chiều là $t = 5$ giờ; cùng đơn vị giờ với $t_{1/2}$ nên dùng $m = m_0(1/2)^{t/t_{1/2}}$, và vì $t < t_{1/2}$ nên kết quả lớn hơn $0{,}050\\text{ mg}$.\n\n**Lời giải đầy đủ:**\n\n-  Từ 9 h đến 14 h là $t = 5$ h. Dạng theo chu kỳ bán hủy: $m = m_0\\left(\\tfrac12\\right)^{t/t_{1/2}}$ (tương đương $m_0e^{-kt}$ với $k = \\ln2/t_{1/2}$). \n\n-  $\\dfrac{t}{t_{1/2}} = \\dfrac{5}{7{,}21} = 0{,}693$; $m = 0{,}100 \\times 0{,}5^{0{,}693} = 0{,}100 \\times 0{,}618$.\n\nHiểu 14 giờ là thời điểm trong ngày: 14 − 9 = 5 giờ. Kết quả: 5 h.\n\n$m=0{,}100\\times2^{-5/7{,}21}\\approx0{,}0618$ mg. Kết quả: 0,061836 mg.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C4 (Đề tổng hợp 8, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy thời gian trôi qua $t = 14$ giờ và tính khối lượng đã phân hủy $m_0(1 - 2^{-t/t_{1/2}})$."
      },
      {
        "id": "option-2",
        "label": "Đổi $t = 5$ giờ $= 18000\\text{ s}$ rồi chia cho $t_{1/2} = 7{,}21$ giờ trong số mũ $2^{-t/t_{1/2}}$."
      },
      {
        "id": "option-3",
        "label": "Vì $t = 5$ giờ $< 7{,}21$ giờ nên khối lượng còn lại phải nhỏ hơn $0{,}050\\text{ mg}$."
      },
      {
        "id": "option-4",
        "label": "Lấy khoảng thời gian $t = 14 - 9 = 5$ giờ cùng đơn vị với $t_{1/2}$ để tính $m = m_0\\cdot2^{-t/t_{1/2}}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c5-kin-006",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT20 C4: động học bậc 1",
    "prompt": "Phản ứng phân hủy: $\\mathrm{CS_{2} \\to  CS + S}$ là phản ứng bậc một. Ở 1000 °C, hằng số tốc độ phản ứng $k = 2.8e-5$ giây$^{-1}$.\n\n\n\n-  Hãy xác định thời gian bán hủy của phản ứng trên ở 1000 °C.\n\n\n-  Cần bao lâu để phân hủy hết 62,5% lượng $\\mathrm{CS_{2}}$ ban đầu là 2,0 gam.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Khi tính $t_{1/2}$ và thời gian phân hủy hết 62,5% lượng $\\mathrm{CS_2}$ ban đầu ($2{,}0\\text{ g}$), cách làm nào đúng?",
    "explanation": "Phân hủy 62,5% tức là còn 37,5% ($C_0/C = 1/0{,}375$); với phản ứng bậc 1, cả $t_{1/2}$ và thời gian phân hủy theo phần trăm đều độc lập với khối lượng đầu $2{,}0\\text{ g}$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  $t_{1/2} = \\dfrac{0{,}693}{2.8e-5} = 2.48e4$ s. \n\n-  Phân hủy 62,5% còn 37,5%: $t = \\dfrac{\\ln(1/0{,}375)}{k} = \\dfrac{0{,}981}{2.8e-5}$. (Khối lượng 2,0 g không cần, vì bậc 1 không phụ thuộc lượng đầu.)\n\n$t_{1/2}=\\ln2/k$. Kết quả: 24755,3 s.\n\nCòn $1-0{,}625=0{,}375$; $t=\\ln(1/0{,}375)/k$. Khối lượng ban đầu triệt tiêu. Kết quả: 35029,6 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C4 (Đề tổng hợp 10, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy phần đã phân hủy $f = 0{,}625$ đưa vào $t = \\ln(1/f)/k$ rồi nhân với $m_0 = 2{,}0\\text{ g}$."
      },
      {
        "id": "option-2",
        "label": "Lấy phần còn lại $f = 1 - 0{,}625 = 0{,}375$ để tính $t = \\ln(1/0{,}375)/k$; khối lượng $2{,}0\\text{ g}$ triệt tiêu."
      },
      {
        "id": "option-3",
        "label": "Dùng $\\lg(1/0{,}375)/k$ thay cho $\\ln(1/0{,}375)/k$ và tính $t_{1/2} = m_0\\ln 2/k$."
      },
      {
        "id": "option-4",
        "label": "Nhân hằng số $k$ với nhiệt độ $T = 1273\\text{ K}$ ($1000\\ ^\\circ\\text{C}$) trước khi tính $t_{1/2}$ và $t$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-007",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT22 C4: động học bậc 1",
    "prompt": "Sự phân huỷ $\\mathrm{N_{2}O_{5}}$ theo phản ứng bậc một: $\\mathrm{N_{2}O_{5} \\to  N_{2}O_{4} + 1/2O_{2}}$. Ở 25 °C, hằng số tốc độ phản ứng là $10^{-3}$ phút$^{-1}$. Áp suất ban đầu của $\\mathrm{N_{2}O_{5}}$ ở nhiệt độ này là 25e3 Pa. Hỏi sau 2 giờ, áp suất riêng phần của $\\mathrm{N_{2}O_{4}}$ và $\\mathrm{O_{2}}$ là bao nhiêu?\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Để tìm áp suất riêng phần $\\mathrm{N_2O_4}$ và $\\mathrm{O_2}$ sau 2 giờ từ $k = 10^{-3}$ phút$^{-1}$, cách tính nào đúng?",
    "explanation": "$k$ cho theo phút$^{-1}$ nên đổi $t = 2$ giờ $= 120$ phút; lượng $\\mathrm{N_2O_5}$ đã phân hủy $P_0(1 - e^{-kt})$ tạo $\\mathrm{N_2O_4}$ theo tỉ lệ $1:1$ và $\\mathrm{O_2}$ theo tỉ lệ $1/2$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  $t = 2$ h $= 120$ phút; $P_{\\mathrm{N_{2}O_{5}}} = 25000 \\times e^{-10^{-3} \\times 120} = 25000 \\times 0{,}887 = 22170$ Pa. \n\n-  Theo hệ số $\\mathrm{N_{2}O_{5} \\to  N_{2}O_{4} + 1/2O_{2}}$: lượng $\\mathrm{N_{2}O_{5}}$ mất $= 2830$ Pa $= P_{\\mathrm{N_{2}O_{4}}}$; $P_{\\mathrm{O_{2}}} = \\tfrac12 P_{\\mathrm{N_{2}O_{4}}}$.\n\n$t=120$ phút; $P_{N_2O_4}=P_0-P_{N_2O_5}=25000(1-e^{-0{,}12})$. Kết quả: 2826,99 Pa.\n\nHệ số $\\tfrac12$ của O₂ cho $P_{O_2}=\\tfrac12P_{N_2O_4}$ ở cùng T,V. Kết quả: 1413,49 Pa.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C4 (Đề tổng hợp 12, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đổi $2$ giờ $= 120$ phút khớp đơn vị $k$, tìm $P_{\\mathrm{N_2O_5}}$ còn lại rồi lấy $P_0 - P_{\\mathrm{N_2O_5}}$ nhân hệ số ($1$ và $1/2$)."
      },
      {
        "id": "option-2",
        "label": "Đổi $2$ giờ $= 7200\\text{ s}$ rồi nhân trực tiếp với $k = 10^{-3}$ phút$^{-1}$ trong $e^{-kt}$."
      },
      {
        "id": "option-3",
        "label": "Tính $P_{\\mathrm{N_2O_5}}$ còn lại sau 2 giờ và lấy chính giá trị đó làm áp suất riêng phần $\\mathrm{N_2O_4}$."
      },
      {
        "id": "option-4",
        "label": "Lấy áp suất $\\mathrm{O_2}$ sinh ra gấp đôi áp suất $\\mathrm{N_2O_4}$ theo phương trình $\\mathrm{N_2O_5} \\to \\mathrm{N_2O_4} + \\tfrac12\\mathrm{O_2}$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c5-kin-009",
    "lessonId": "gc-kin-first-order",
    "title": "Đề ĐT24 C4: động học bậc 1",
    "prompt": "Sulfuryl chloride phân hủy theo phương trình động học bậc 1 ở 320 °C có thời gian bán hủy ($t_{1/2}$) là 8,75 giờ. Phản ứng: $\\mathrm{SO_{2}Cl_{2}(k) \\to  SO_{2}(k) + Cl_{2}(k)}$. Nếu áp suất ban đầu của $\\mathrm{SO_{2}Cl_{2}}$ là 1,05 at và phản ứng xảy ra trong bình kín dung tích 1,25 L. Hãy cho biết hằng số tốc độ phản ứng $k$ là bao nhiêu? Có bao nhiêu phân tử $\\mathrm{SO_{2}Cl_{2}}$ còn lại trong bình phản ứng sau 12,5 giờ?\n\n\n**Lưu ý đề bài:** Đề gốc in “$\\mathrm{SOCl_{2}}$” ở câu hỏi, thực chất là cùng chất $\\mathrm{SO_{2}Cl_{2}}$ trong phương trình phản ứng. Để tính số phân tử, tìm $n = PV/RT$ rồi nhân $N_A$.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần. Với khí lý tưởng dùng $R=0{,}082$ L·at/(mol·K) và $N_A=6{,}023\\times10^{23}$ mol⁻¹ theo đúng hằng số đề cho (áp suất tính theo at).\n\n**Câu hỏi:** Bài $\\mathrm{SO_2Cl_2}$ cho $t_{1/2} = 8{,}75$ giờ, $P_0 = 1{,}05\\text{ at}$, $V = 1{,}25\\text{ L}$ ở 320 °C và hỏi số phân tử còn lại sau 12,5 giờ. Quy trình nào đúng?",
    "explanation": "Đổi $t_{1/2} = 8{,}75\\times3600\\text{ s}$ để có $k$ theo $\\text{s}^{-1}$; sau đó tính $n_0 = PV/(RT)$ ở $T = 593\\text{ K}$ với $R = 0{,}082\\text{ L}\\cdot\\text{at}/(\\text{mol}\\cdot\\text{K})$ rồi nhân tỉ phần còn lại $f$ và $N_A$.\n\n**Lời giải đầy đủ:**\n\n-  Công thức bậc 1: $\\ln\\dfrac{C_0}{C} = kt$, tương đương $C = C_0e^{-kt}$, $t = \\dfrac1k\\ln\\dfrac{C_0}{C}$, $t_{1/2} = \\dfrac{\\ln2}{k}$. \n\n-  $k = \\dfrac{\\ln2}{8{,}75} = 0{,}0792$ h$^{-1}$ $= \\dfrac{0{,}0792}{3600} = 2.2e-5$ s$^{-1}$. \n\n-  Phần còn sau 12,5 h: $e^{-0{,}0792 \\times 12{,}5} = e^{-0{,}990} = 0{,}371$. \n\n-  Số mol ban đầu: $n_0 = \\dfrac{PV}{RT} = \\dfrac{1{,}05 \\times 1{,}25}{0{,}082 \\times 593} = 0{,}0270$ mol; số phân tử còn $= 0{,}371 \\times 0{,}0270 \\times 6.023e23$.\n\n$k=\\ln2/(8{,}75\\times3600)$. Kết quả: 2,20047e-05 s⁻¹.\n\n$f=2^{-12{,}5/8{,}75}\\approx0{,}3715$. Kết quả: 0,371499 .\n\n$n_0=PV/(RT)=1{,}05\\times1{,}25/(0{,}082\\times593)$ mol; $N=n_0fN_A$. Kết quả: 6,0395e+21 phân tử.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-6.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C4 (HK1 2019--2020, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính phần còn $f = 2^{-12{,}5/8{,}75}$ rồi nhân thẳng áp suất còn lại $P = P_0 f$ với $N_A$ để ra số phân tử."
      },
      {
        "id": "option-2",
        "label": "Tính $k = \\ln 2/8{,}75$ (giữ giờ$^{-1}$ cho ô $\\text{s}^{-1}$) và dùng $T = 320\\text{ K}$ trong $n_0 = PV/(RT)$."
      },
      {
        "id": "option-3",
        "label": "Đổi $t_{1/2}$ sang giây để tính $k$ ($\\text{s}^{-1}$), tìm tỉ phần còn $f$, rồi tính $n_0 = PV/(RT)$ ($T = 593\\text{ K}$) và nhân $f\\cdot N_A$."
      },
      {
        "id": "option-4",
        "label": "Tính $n_0 = PV/(RT)$ với $R = 8{,}314$, sau đó nhân với phần trăm đã phân hủy $(1 - f)\\cdot N_A$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c5-kin-019",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT27 C4: năng lượng hoạt hóa",
    "prompt": "Phản ứng bậc một: $\\mathrm{CH_{3}-CH_{3} \\to  CH_{2}{=}CH_{2} + H_{2}}$, có hằng số tốc độ $k_1 = 2.3e-4$ s$^{-1}$ ở 507 °C. Hằng số tốc độ của phản ứng tăng lên gấp đôi ở 527 °C.\n\n\n\n-  Tính năng lượng hoạt hoá ($E_a$, kJ/mol).\n\n\n-  Cho biết thời gian bán hủy của phản ứng trên ở 527 °C bằng bao nhiêu?\n\n\n-  Nếu nồng độ ban đầu của $\\mathrm{CH_{3}-CH_{3}}$ là 1,0 M thì sau 5 giờ ở 507 °C sẽ phân hủy hết bao nhiêu % $\\mathrm{CH_{3}-CH_{3}}$ ban đầu?\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Đề ĐT27 kết hợp Arrhenius (507 °C → 527 °C, $k$ gấp đôi) và bậc 1 (sau 5 giờ ở 507 °C). Phối hợp nào đúng?",
    "explanation": "Gắn đúng $k$ theo nhiệt độ: $t_{1/2}$ ở 527 °C dùng $k_2 = 2k_1$, còn phần trăm phân hủy ở 507 °C dùng $k_1$, đổi $5$ giờ $= 18000\\text{ s}$ và lấy $100(1 - e^{-k_1 t})$.\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 780$ K, $T_2 = 800$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 3.205e-05$ K$^{-1}$. \n\n-  Hằng số tăng gấp đôi: $\\ln\\dfrac{k_2}{k_1} = \\ln 2 = 0{,}693$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 0.6931}{3.205e-05} = 1.798e+05$ J/mol. \n\n-  b) $t_{1/2} = \\dfrac{\\ln2}{k_2} = \\dfrac{0{,}693}{4.6e-4} = 1507$ s. \n\n-  c) Ở 507 °C dùng $k_1$; $t = 5$ h $= 18000$ s; phần còn $e^{-k_1t} = e^{-4{,}14} = 0{,}0159$; phần phân hủy $= 1 - 0{,}0159$.\n\n$T_1=780$ K, $T_2=800$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 179,8 kJ/mol.\n\nỞ 527 °C, $k_2=4{,}6\\times10^{-4}$ s⁻¹; $t_{1/2}=\\ln2/k_2$. Kết quả: 1506,84 s.\n\n$t=18000$ s; phần phân hủy $=100(1-e^{-k_1t})$. Dùng k tại 507 °C. Kết quả: 98,4077 %.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT27 C4 (HK1 2025--2026, 1,5 điểm; mở rộng ĐT16 C4); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng cùng hằng số $k_1$ ở 507 °C cho cả $t_{1/2}$ ở 527 °C lẫn phần trăm phân hủy sau 5 giờ."
      },
      {
        "id": "option-2",
        "label": "Thế $t = 5$ giờ chưa đổi ra giây vào $e^{-k_1 t}$ rồi lấy kết quả đó làm phần trăm phân hủy."
      },
      {
        "id": "option-3",
        "label": "Lấy $k_2 = 2k_1$ tính phần trăm phân hủy ở 507 °C và giữ nguyên $E_a$ theo đơn vị J/mol."
      },
      {
        "id": "option-4",
        "label": "Dùng $k_2/k_1 = 2$ ở $780\\text{ K}, 800\\text{ K}$ tìm $E_a$ (kJ/mol); $t_{1/2}$ ở 527 °C $= \\ln 2/k_2$; còn ở 507 °C lấy $100(1 - e^{-k_1\\cdot18000})\\%$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c5-kin-013",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT03 C4: năng lượng hoạt hóa",
    "prompt": "Sự phân hủy $\\mathrm{C_{2}H_{5}I}$ xảy ra theo phản ứng: $\\mathrm{C_{2}H_{5}I \\to  C_{2}H_{4} + HI}$. Ở 600 K, giá trị hằng số tốc độ phản ứng $k = 1.60e-5$ s$^{-1}$. Khi tăng nhiệt độ phản ứng lên 700 K thì hằng số tốc độ phản ứng tăng tới 6.36e-3 s$^{-1}$. Tính năng lượng hoạt hóa của phản ứng này? Cho $R = 8{,}314$ J/mol.K\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Với hai hằng số tốc độ ở 600 K và 700 K, cách lập phương trình Arrhenius nào cho đúng $E_a$ (kJ/mol)?",
    "explanation": "Nhiệt độ đã ở đơn vị K; dùng $\\ln(k_2/k_1)$ ghép đúng cặp $(T_1,k_1)$ và $(T_2,k_2)$ để $E_a > 0$, sau đó chia $1000$ đổi J/mol sang kJ/mol.\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 600$ K, $T_2 = 700$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 0.0002381$ K$^{-1}$. \n\n-  $\\ln\\dfrac{k_2}{k_1} = \\ln\\dfrac{0.00636}{1.6e-05} = 5.985$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 5.985}{0.0002381} = 2.09e+05$ J/mol.\n\n$T_1=600$ K, $T_2=700$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 208,996 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT03 C4 (HK1 2012--2013); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng $\\lg(k_2/k_1) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$ không nhân thêm hệ số chuyển đổi $2{,}303$."
      },
      {
        "id": "option-2",
        "label": "Lấy $\\ln(k_1/k_2)$ ở vế trái nhưng giữ nguyên hiệu $\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$ ở vế phải."
      },
      {
        "id": "option-3",
        "label": "Dùng $\\ln(k_2/k_1) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$ với $T$ theo K, $R = 8{,}314$, rồi chia $1000$ sang kJ/mol."
      },
      {
        "id": "option-4",
        "label": "Tính $E_a$ với $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$ rồi giữ nguyên giá trị vừa tìm được cho đơn vị kJ/mol."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c5-kin-014",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT07 C4: năng lượng hoạt hóa",
    "prompt": "Cho phản ứng phân hủy $\\mathrm{N_{2}O_{5}}$: $\\mathrm{2N_{2}O_{5}(k) \\to  4NO_{2}(k) + O_{2}(k)}$. Ở 25 °C hằng số tốc độ phản ứng là $k_1 = 1.72e-5$ s$^{-1}$. Ở 35 °C hằng số tốc độ phản ứng là $k_2 = 6.65e-5$ s$^{-1}$. Tính năng lượng hoạt hoá ($E_a$) của phản ứng phân hủy $\\mathrm{N_{2}O_{5}}$ ở trên.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Trước khi tính $E_a$ của phản ứng $\\mathrm{N_2O_5}$ ở 25 °C và 35 °C, thao tác nào đúng?",
    "explanation": "Mẫu số $1/T_1 - 1/T_2 = (T_2-T_1)/(T_1T_2)$ phụ thuộc $T_1T_2$ nên bắt buộc đổi sang K ($298\\text{ K}$ và $308\\text{ K}$); dùng $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$ và chia $1000$ sang kJ/mol.\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 298$ K, $T_2 = 308$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 0.000109$ K$^{-1}$. \n\n-  $\\ln\\dfrac{k_2}{k_1} = \\ln\\dfrac{6.65e-05}{1.72e-05} = 1.352$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 1.352}{0.000109} = 1.032e+05$ J/mol.\n\n$T_1=298$ K, $T_2=308$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 103,192 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C4 (HK1 2015--2016, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đổi $T_1 = 298\\text{ K},\\, T_2 = 308\\text{ K}$, tính $E_a = \\frac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2}$ với $R = 8{,}314$ rồi chia $1000$."
      },
      {
        "id": "option-2",
        "label": "Thế thẳng $25\\ ^\\circ\\text{C}$ và $35\\ ^\\circ\\text{C}$ vào $1/T_1 - 1/T_2$ vì hiệu nhiệt độ đều bằng $10$."
      },
      {
        "id": "option-3",
        "label": "Chia tỉ số $k_2/k_1$ cho $2$ theo hệ số của $\\mathrm{N_2O_5}$ trong phương trình $2\\mathrm{N_2O_5} \\to 4\\mathrm{NO_2} + \\mathrm{O_2}$."
      },
      {
        "id": "option-4",
        "label": "Dùng hằng số $R = 0{,}082\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$ để tính trực tiếp $E_a$ theo kJ/mol."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c5-kin-015",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT09 C4: năng lượng hoạt hóa",
    "prompt": "-  Xét phản ứng phân hủy $\\mathrm{PH_{3}}$ thành P và $\\mathrm{H_{2}}$. Ở 25 °C, hằng số tốc độ của phản ứng là $k_1 = 3.2e-3$ s$^{-1}$. Ở 35 °C hằng số tốc độ của phản ứng là $k_2 = 7.8e-3$ s$^{-1}$. Tính năng lượng hoạt hoá ($E_a$) của phản ứng phân hủy $\\mathrm{PH_{3}}$ ở trên.\n\n\n-  Một phản ứng khi tăng nhiệt độ từ 298 K lên 328 K thì tốc độ tăng lên gấp 2,5 lần. Tính năng lượng hoạt hóa của phản ứng.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Đề gồm ý a (cho $k_1, k_2$ ở 25 °C và 35 °C) và ý b (tốc độ tăng 2,5 lần từ 298 K lên 328 K). Cách xử lí nào đúng?",
    "explanation": "Ở cùng nồng độ, tốc độ tăng $2{,}5$ lần suy ra $k_2/k_1 = 2{,}5$ để thế vào Arrhenius 2 nhiệt độ (với $T$ theo K và chia $1000$ đổi J/mol sang kJ/mol).\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 298$ K, $T_2 = 308$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 0.000109$ K$^{-1}$. \n\n-  $\\ln\\dfrac{k_2}{k_1} = \\ln\\dfrac{0.0078}{0.0032} = 0.891$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 0.891}{0.000109} = 6.799e+04$ J/mol. \n\n-  b) “Tốc độ tăng 2,5 lần” (cùng nồng độ) nghĩa là $k_2/k_1 = 2{,}5$: $E_a = \\dfrac{8{,}314 \\times \\ln 2{,}5}{1/298 - 1/328} = \\dfrac{8{,}314 \\times 0{,}916}{3.07e-4}$.\n\n$T_1=298$ K, $T_2=308$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 67,9894 kJ/mol.\n\nỞ cùng nồng độ, $k_2/k_1=2{,}5$; $E_a=R\\ln2{,}5/(1/298-1/328)$, đổi J sang kJ. Kết quả: 24,8206 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C4 (HK2 2015--2016, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ở ý b thiếu giá trị $k_1, k_2$ cụ thể nên không thể áp dụng được phương trình Arrhenius."
      },
      {
        "id": "option-2",
        "label": "Thế $25\\ ^\\circ\\text{C}, 35\\ ^\\circ\\text{C}$ vào ý a và dùng $\\lg 2{,}5$ không nhân $2{,}303$ ở ý b."
      },
      {
        "id": "option-3",
        "label": "Đặt $k_2/k_1 = 1/2{,}5 = 0{,}4$ ở ý b vì hằng số tốc độ tỉ lệ nghịch với tốc độ phản ứng."
      },
      {
        "id": "option-4",
        "label": "Ý a đổi sang $298\\text{ K}, 308\\text{ K}$; ý b đặt $k_2/k_1 = 2{,}5$ (cùng nồng độ) rồi tính $E_a$ và chia $1000$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c5-kin-016",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT10 C4: năng lượng hoạt hóa",
    "prompt": "Phản ứng phân hủy $\\mathrm{AsH_{3}}$ thành As và $\\mathrm{H_{2}}$ ở 25 °C có hằng số tốc độ của phản ứng là $k_1 = 3.8e-3$ s$^{-1}$. Ở 35 °C hằng số tốc độ của phản ứng là $k_2 = 7.2e-3$ s$^{-1}$. Tính năng lượng hoạt hoá ($E_a$, kJ/mol) của phản ứng phân hủy $\\mathrm{AsH_{3}}$ ở trên.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Để tính đúng $E_a$ (kJ/mol) cho phản ứng phân hủy $\\mathrm{AsH_3}$ ở 25 °C và 35 °C, cần chọn phương án nào?",
    "explanation": "Áp dụng Arrhenius ở $298\\text{ K}$ và $308\\text{ K}$ với logarit tự nhiên $\\ln$ và $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$, rồi chia $1000$ sang kJ/mol.\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 298$ K, $T_2 = 308$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 0.000109$ K$^{-1}$. \n\n-  $\\ln\\dfrac{k_2}{k_1} = \\ln\\dfrac{0.0072}{0.0038} = 0.6391$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 0.6391}{0.000109} = 4.877e+04$ J/mol.\n\n$T_1=298$ K, $T_2=308$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 48,7677 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C4 (HK1 2016--2017, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thay $\\ln$ bằng $\\lg(7{,}2/3{,}8)$ và thế $t_1 = 25\\ ^\\circ\\text{C},\\, t_2 = 35\\ ^\\circ\\text{C}$ vào công thức."
      },
      {
        "id": "option-2",
        "label": "Đổi $T_1 = 298\\text{ K},\\, T_2 = 308\\text{ K}$, tính $E_a = \\frac{8{,}314\\ln(7{,}2/3{,}8)}{1/298 - 1/308}$ rồi chia $1000$ sang kJ/mol."
      },
      {
        "id": "option-3",
        "label": "Lấy trực tiếp hệ số nhiệt độ Van 't Hoff $\\gamma = k_2/k_1$ làm năng lượng hoạt hóa $E_a$."
      },
      {
        "id": "option-4",
        "label": "Tính ra kết quả ở đơn vị J/mol (khoảng $48\\,768$) và giữ nguyên số đó cho ô kJ/mol."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-017",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT11 C4: năng lượng hoạt hóa",
    "prompt": "Cho phản ứng phân hủy $\\mathrm{N_{2}O(k)}$: $\\mathrm{2N_{2}O(k) \\to  2N_{2}(k) + O_{2}(k)}$. Ở 300 °C, hằng số tốc độ phản ứng là $k_1 = 2.6e-11$ s$^{-1}$; ở 330 °C, hằng số tốc độ phản ứng là $k_2 = 2.1e-10$ s$^{-1}$. Tính năng lượng hoạt hoá ($E_a$ theo kJ/mol) của phản ứng phân hủy $\\mathrm{N_{2}O(k)}$ ở trên.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Với dữ kiện 300 °C ($k_1 = 2{,}6\\times10^{-11}$) và 330 °C ($k_2 = 2{,}1\\times10^{-10}$), lưu ý nào đúng?",
    "explanation": "Chú ý tỉ lệ lũy thừa $10^{-10}/10^{-11} = 10$ khi tính $k_2/k_1 \\approx 8{,}077$, đổi $T_1 = 573\\text{ K}, T_2 = 603\\text{ K}$, dùng $\\ln$ và chia $1000$ sang kJ/mol.\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 573$ K, $T_2 = 603$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 8.683e-05$ K$^{-1}$. \n\n-  $\\ln\\dfrac{k_2}{k_1} = \\ln\\dfrac{2.1e-10}{2.6e-11} = 2.089$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 2.089}{8.683e-05} = 2e+05$ J/mol.\n\n$T_1=573$ K, $T_2=603$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 200,033 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C4 (HK2 2016--2017, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt $k_2/k_1 = 2{,}1/2{,}6$ vì bỏ qua phần lũy thừa $10^{-10}$ và $10^{-11}$ khác bậc."
      },
      {
        "id": "option-2",
        "label": "Thế trực tiếp $T_1 = 300$ và $T_2 = 330$ vào mẫu số $\\frac{1}{T_1} - \\frac{1}{T_2}$ của Arrhenius."
      },
      {
        "id": "option-3",
        "label": "Đổi $T_1 = 573\\text{ K},\\, T_2 = 603\\text{ K}$, lập đúng tỉ số $k_2/k_1 = \\frac{2{,}1\\times10^{-10}}{2{,}6\\times10^{-11}}$ và đổi J sang kJ."
      },
      {
        "id": "option-4",
        "label": "Nhân thêm hệ số $2$ của $\\mathrm{N_2O}$ vào kết quả $E_a$ sau khi dùng phương trình Arrhenius."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c5-kin-018",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT16 C4: năng lượng hoạt hóa",
    "prompt": "Phản ứng $\\mathrm{CH_{3}-CH_{3} \\to  CH_{2}{=}CH_{2} + H_{2}}$ có hằng số tốc độ của phản ứng là $k_1 = 2.3e-4$ s$^{-1}$ ở 507 °C. Hằng số tốc độ của phản ứng tăng lên gấp đôi ở 527 °C. Tính năng lượng hoạt hoá ($E_a$, kJ/mol) và cho biết thời gian bán hủy của phản ứng trên ở 527 °C bằng bao nhiêu.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Đề cho $k_1 = 2{,}3\\times10^{-4}\\text{ s}^{-1}$ ở 507 °C và $k$ tăng gấp đôi ở 527 °C. Cách thiết lập nào đúng cho cả hai ý?",
    "explanation": "Đổi $T_1 = 780\\text{ K}, T_2 = 800\\text{ K}$ và đặt $k_2/k_1 = 2$ để tìm $E_a$ (chia $1000$ sang kJ/mol). Khi $k$ tăng gấp đôi ($k_2 = 4{,}6\\times10^{-4}\\text{ s}^{-1}$), $t_{1/2} = \\ln 2/k_2$ giảm một nửa.\n\n**Lời giải đầy đủ:**\n\n-  Arrhenius cho hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac1{T_1} - \\dfrac1{T_2}\\right)$; biến đổi: $E_a = \\dfrac{R\\ln(k_2/k_1)}{\\dfrac1{T_1} - \\dfrac1{T_2}}$. \n\n-  Đổi nhiệt độ: $T_1 = 780$ K, $T_2 = 800$ K; $\\dfrac1{T_1} - \\dfrac1{T_2} = \\dfrac{T_2 - T_1}{T_1T_2} = 3.205e-05$ K$^{-1}$. \n\n-  Hằng số tăng gấp đôi: $\\ln\\dfrac{k_2}{k_1} = \\ln 2 = 0{,}693$. \n\n-  $E_a = \\dfrac{8{,}314 \\times 0.6931}{3.205e-05} = 1.798e+05$ J/mol. \n\n-  $t_{1/2}$ ở 527 °C: $k_2 = 4.6e-4$ s$^{-1}$; $t_{1/2} = \\dfrac{\\ln2}{k_2} = \\dfrac{0{,}693}{4.6e-4}$.\n\n$T_1=780$ K, $T_2=800$ K; $E_a=R\\ln(k_2/k_1)/(1/T_1-1/T_2)$ J/mol, rồi chia 1000. Kết quả: 179,8 kJ/mol.\n\nỞ 527 °C, $k_2=4{,}6\\times10^{-4}$ s⁻¹; $t_{1/2}=\\ln2/k_2$. Kết quả: 1506,84 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C4 (Đề tổng hợp 6, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng $k_1$ để tính $t_{1/2}$ ở 527 °C và thế thẳng $507, 527\\ ^\\circ\\text{C}$ vào công thức tính $E_a$."
      },
      {
        "id": "option-2",
        "label": "Thay $k_2/k_1 = 2$ với $T_1 = 780\\text{ K}, T_2 = 800\\text{ K}$ để tìm $E_a$, rồi dùng $k_2 = 2k_1$ tính $t_{1/2}$ ở 527 °C."
      },
      {
        "id": "option-3",
        "label": "Tính thời gian bán hủy ở 527 °C bằng công thức $t_{1/2} = 1/k_2$ thay cho $\\ln 2/k_2$."
      },
      {
        "id": "option-4",
        "label": "Vì $k$ tăng gấp đôi khi tăng nhiệt độ nên thời gian bán hủy ở 527 °C cũng tăng gấp đôi."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-020",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT15 C3: năng lượng hoạt hóa",
    "prompt": "Phản ứng phân hủy $\\mathrm{N_{2}O_{5}(k)}$ thành $\\mathrm{NO_{2}(k)}$ và $\\mathrm{NO_{3}(k)}$ là phản ứng bậc một. Ở 25 °C, phản ứng có thời gian bán hủy là 2,81 giây. Ở 45 °C, phản ứng có thời gian bán hủy là 0,31 giây. Hãy xác định năng lượng hoạt hóa ($E_a$) của phản ứng trên.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Đề ĐT15 cho $t_{1/2}$ của phản ứng bậc 1 ở 25 °C là $2{,}81\\text{ s}$ và ở 45 °C là $0{,}31\\text{ s}$. Tỉ số nào đúng để tìm $E_a$?",
    "explanation": "Ở bậc 1, $k = \\ln 2/t_{1/2}$ nên $k$ tỉ lệ nghịch với $t_{1/2}$: ở 45 °C bán hủy ngắn hơn nên $k_2 > k_1$ và $k_2/k_1 = 2{,}81/0{,}31$.\n\n**Lời giải đầy đủ:**\n\n-  Bậc 1: $k = \\ln2/t_{1/2}$ nên $\\dfrac{k_2}{k_1} = \\dfrac{t_{1/2}(T_1)}{t_{1/2}(T_2)} = \\dfrac{2{,}81}{0{,}31} = 9{,}06$. \n\n-  $\\dfrac1{298} - \\dfrac1{318} = 2.11e-4$ K$^{-1}$. \n\n-  $E_a = \\dfrac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2} = \\dfrac{8{,}314 \\times 2{,}204}{2.11e-4}$.\n\n$k_2/k_1=t_{1/2,1}/t_{1/2,2}=2{,}81/0{,}31$. Kết quả: 9,06452 .\n\n$E_a=8{,}314\\ln(2{,}81/0{,}31)/(1/298-1/318)$ J/mol, rồi chia 1000. Kết quả: 86,8375 kJ/mol.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C3 (Đề tổng hợp 5, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy tỉ số thuận $k_2/k_1 = t_{1/2}(45\\ ^\\circ\\text{C})/t_{1/2}(25\\ ^\\circ\\text{C}) = 0{,}31/2{,}81$."
      },
      {
        "id": "option-2",
        "label": "Lấy hiệu hai thời gian bán hủy để đưa vào $\\ln(2{,}81 - 0{,}31)$ trong Arrhenius."
      },
      {
        "id": "option-3",
        "label": "Đặt $k_2/k_1 = 2{,}81/0{,}31$ nhưng thế trực tiếp $T_1 = 25$ và $T_2 = 45$ theo °C."
      },
      {
        "id": "option-4",
        "label": "Lấy tỉ số nghịch $k_2/k_1 = t_{1/2}(25\\ ^\\circ\\text{C})/t_{1/2}(45\\ ^\\circ\\text{C}) = 2{,}81/0{,}31$ cùng $T_1 = 298\\text{ K}, T_2 = 318\\text{ K}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c5-kin-021",
    "lessonId": "gc-kin-arrhenius",
    "title": "Đề ĐT21 C4: năng lượng hoạt hóa",
    "prompt": "Trong một phản ứng bậc 1, nồng độ chất phản ứng ban đầu giảm đi một nửa sau 5000 giây khi tiến hành ở 27 °C, và sau 1000 giây khi tiến hành ở 37 °C. Hãy tính:\n\n\n\n-  Năng lượng hoạt hóa của phản ứng (theo kJ/mol).\n\n\n-  Thời gian cần thiết để nồng độ chất phản ứng giảm xuống còn 25% so với nồng độ ban đầu khi phản ứng tiến hành ở 37 °C.\n\nDùng $R=8{,}314$ J/(mol·K) và $T(\\mathrm K)=t(°C)+273$ khi cần.\n\n**Câu hỏi:** Với $t_{1/2}(27\\,^\\circ\\text{C}) = 5000\\text{ s}$ và $t_{1/2}(37\\,^\\circ\\text{C}) = 1000\\text{ s}$, cách lập nào đúng cho cả $E_a$ và thời gian còn 25% ở 37 °C?",
    "explanation": "Bán hủy giảm 5 lần khi tăng từ 27 °C lên 37 °C nên $k_2/k_1 = 5$ (ghép $T_1 = 300\\text{ K}, T_2 = 310\\text{ K}$). Ở 37 °C ($t_{1/2} = 1000\\text{ s}$), còn 25% $= (1/2)^2$ ứng với $2$ chu kỳ bán hủy.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\dfrac{k_2}{k_1} = \\dfrac{t_{1/2}(27\\,^\\circ\\text{C})}{t_{1/2}(37\\,^\\circ\\text{C})} = \\dfrac{5000}{1000} = 5$. \n\n-  $\\dfrac1{300} - \\dfrac1{310} = 1.075e-4$; $E_a = \\dfrac{8{,}314 \\times \\ln5}{1.075e-4} = \\dfrac{8{,}314 \\times 1{,}609}{1.075e-4}$. \n\n-  b) Còn 25% $= \\left(\\tfrac12\\right)^2$: $t = 2t_{1/2}(37\\,^\\circ\\text{C}) = 2 \\times 1000$.\n\nTỉ số nghịch của thời gian bán hủy cho $k_2/k_1=5$; áp dụng Arrhenius ở 300 và 310 K. Kết quả: 124,442 kJ/mol.\n\nCòn 1/4 là hai chu kỳ bán hủy; ở 37 °C, $t_{1/2}=1000$ s, nên $t=2000$ s. Kết quả: 2000 s.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/kieu-7b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C4 (Đề tổng hợp 11, 1 điểm); đối chiếu tuyển tập bài tập, lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy $k_2/k_1 = 5000/1000 = 5$ ở $300\\text{ K}, 310\\text{ K}$ để tìm $E_a$; còn 25% ở 37 °C cần $2\\,t_{1/2}(37\\,^\\circ\\text{C})$."
      },
      {
        "id": "option-2",
        "label": "Lấy tỉ số thuận $k_2/k_1 = 1000/5000 = 0{,}2$ đưa vào $\\ln(k_2/k_1)$ để tính $E_a$."
      },
      {
        "id": "option-3",
        "label": "Tính thời gian còn 25% bằng $2\\,t_{1/2}(27\\,^\\circ\\text{C}) = 10000\\text{ s}$ hoặc $4\\,t_{1/2}(37\\,^\\circ\\text{C})$."
      },
      {
        "id": "option-4",
        "label": "Dùng $k_2/k_1 = 5$ nhưng dùng $\\lg 5$ không đổi sang $\\ln 5$ và giữ nguyên kết quả theo J/mol."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c5-kin-022",
    "lessonId": "gc-kin-drawing-guide",
    "title": "Chọn cách vẽ theo câu hỏi",
    "prompt": "Một phản ứng bậc 1 ở nhiệt độ không đổi. Câu hỏi thứ nhất cho C₀ và k, hỏi C sau t; câu hỏi thứ hai cho k ở hai nhiệt độ, hỏi Eₐ. Hãy chọn đồ thị phù hợp.\n\n**Câu hỏi:** Câu hỏi C theo t dùng hình nào?",
    "explanation": "Đồ thị thời gian thể hiện lượng chất còn lại ở nhiệt độ cố định.\n\n**Lời giải đầy đủ:**\n\nĐồ thị thời gian thể hiện lượng chất còn lại ở nhiệt độ cố định.\n\nĐộ dốc của ln k theo 1/T bằng −Eₐ/R; cần dữ kiện ở hai nhiệt độ.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài biên soạn từ mục Lỗi hay gặp và phương pháp Dạng 6–7, tài liệu Tổng ôn CHE1080."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Vẽ $\\ln k$ theo $1/T$ dù chỉ có một nhiệt độ không đổi."
      },
      {
        "id": "option-2",
        "label": "Vẽ $C/C_0$ theo $t$ hoặc $\\ln(C/C_0)$ theo $t$."
      },
      {
        "id": "option-3",
        "label": "Vẽ $k$ theo $t$ vì cho rằng hằng số tốc độ giảm theo thời gian."
      },
      {
        "id": "option-4",
        "label": "Vẽ phần trăm đã phản ứng thay cho $C/C_0$ với độ dốc $-k$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c5-kin-023",
    "lessonId": "gc-kin-drawing-guide",
    "title": "Tìm lỗi — phân hủy 90%",
    "prompt": "Với $k=1{,}8\\times10^{-5}$ s⁻¹, một bạn tính thời gian phân hủy 90% bằng $t=\\ln(1/0{,}90)/k$. Hãy tìm lỗi rồi sửa.\n\n**Câu hỏi:** Lỗi nằm ở đâu?",
    "explanation": "Trong ln(C₀/C), C là lượng còn lại, không phải lượng đã phản ứng.\n\n**Lời giải đầy đủ:**\n\nTrong ln(C₀/C), C là lượng còn lại, không phải lượng đã phản ứng.\n\n$t=\\ln10/(1{,}8\\times10^{-5})$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài biên soạn từ mục Lỗi hay gặp và phương pháp Dạng 6–7, tài liệu Tổng ôn CHE1080."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đã phản ứng 90% nghĩa là còn 10%, nên phải dùng $f = 0{,}10$ (tức $\\ln 10$) thay cho $0{,}90$."
      },
      {
        "id": "option-2",
        "label": "Cần thay $\\ln$ bằng $\\lg$ mà không cần nhân hệ số chuyển đổi $2{,}303$."
      },
      {
        "id": "option-3",
        "label": "Công thức đúng phải là $t = \\ln(0{,}90)/k$ nên thời gian có giá trị âm."
      },
      {
        "id": "option-4",
        "label": "Đề thiếu nồng độ ban đầu $C_0$ nên không tính được thời gian phân hủy 90%."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c5-kin-024",
    "lessonId": "gc-kin-drawing-guide",
    "title": "Tìm lỗi — đảo tỉ số bán hủy",
    "prompt": "Ở 27 °C, t½ = 5000 s; ở 37 °C, t½ = 1000 s. Một bạn lấy $k_2/k_1=1000/5000=0{,}2$ và tìm được Eₐ âm. Hãy sửa.\n\n**Câu hỏi:** Tỉ số đúng là gì?",
    "explanation": "k = ln2/t½; bán hủy ngắn hơn thì k lớn hơn.\n\n**Lời giải đầy đủ:**\n\nk = ln2/t½; bán hủy ngắn hơn thì k lớn hơn.\n\n$E_a=R\\ln5/(1/300-1/310)$ J/mol, sau đó chia 1000.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-5/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài biên soạn từ mục Lỗi hay gặp và phương pháp Dạng 6–7, tài liệu Tổng ôn CHE1080."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$k_2/k_1 = 1000/5000 = 0{,}2$, chỉ cần đổi dấu kết quả $E_a$ ở bước cuối."
      },
      {
        "id": "option-2",
        "label": "$k_2/k_1 = 5000/1000 = 5$ vì $k = \\ln 2/t_{1/2}$ nên $k$ tỉ lệ nghịch với $t_{1/2}$."
      },
      {
        "id": "option-3",
        "label": "$k_2/k_1 = \\ln(5000/1000) = \\ln 5 \\approx 1{,}609$."
      },
      {
        "id": "option-4",
        "label": "$k_2/k_1 = (5000/1000)^2 = 25$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-001",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT01 C4a: Axit yếu hoặc bazơ yếu",
    "prompt": "Cho dung dịch amoniac $10^{-2}$ M. $K_b$ của amoniac là $1{,}8\\times10^{-5}$. a) Tính pH của dung dịch.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với dung dịch $\\mathrm{NH_3}$ $10^{-2}\\text{ M}$ ($K_b = 1{,}8\\times 10^{-5}$), hướng xử lý nào đúng?",
    "explanation": "$\\mathrm{NH_3}$ là bazơ yếu nên $x = [\\mathrm{OH^-}] \\approx \\sqrt{K_b C}$; kiểm tra điều kiện gần đúng $x/C \\le 5\\%$ và $CK_b \\gg 10^{-14}$, sau đó đổi $\\mathrm{pOH}$ sang $\\mathrm{pH} = 14 - \\mathrm{pOH}$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{NH_{3} + H_{2}O \\rightleftharpoons  NH_{4}^{+} + OH^{-}}$: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}01$ (và bỏ qua phân li của nước vì $CK_b = 1{,}8\\times10^{-7} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}000424$ M. \n-  Kiểm tra: $x/C = 4{,}2\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 3{,}37$; pH $= 14 - $ pOH $= 10{,}63$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C4a (HK1 2010--2011)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy thẳng $\\mathrm{pH} = 14 + \\lg 10^{-2} = 12{,}00$ vì coi $\\mathrm{NH_3}$ phân li hoàn toàn."
      },
      {
        "id": "option-2",
        "label": "Tính $x = [\\mathrm{OH^-}] \\approx \\sqrt{K_b C}$, kiểm tra $x/C \\le 5\\%$ rồi suy ra $\\mathrm{pH} = 14 + \\lg x$."
      },
      {
        "id": "option-3",
        "label": "Tính $x = \\sqrt{K_b C}$ rồi gán trực tiếp $\\mathrm{pH} = -\\lg x$, bỏ qua bước đổi từ $\\mathrm{pOH}$."
      },
      {
        "id": "option-4",
        "label": "Đổi sang $K_a = K_w/K_b$ và tính $[\\mathrm{H^+}] = \\sqrt{K_a C}$ như dung dịch muối $\\mathrm{NH_4Cl}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-002",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT05 C6a: Axit yếu hoặc bazơ yếu",
    "prompt": "Tính pH của dung dịch axit focmic (HCOOH) 0,10 M, biết $K_a = 1{,}77\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với dung dịch axit yếu $\\mathrm{HCOOH}$ $0{,}10\\text{ M}$ ($K_a = 1{,}77\\times 10^{-4}$), cách tính phù hợp là gì?",
    "explanation": "$\\mathrm{HCOOH}$ là axit yếu phân li một phần: dùng $x \\approx \\sqrt{K_a C}$ nếu thỏa $x/C \\le 5\\%$ (ở đây $4{,}2\\% < 5\\%$) và $CK_a \\gg 10^{-14}$, nếu vượt $5\\%$ mới giải bậc hai.\n\n**Lời giải đầy đủ:**\n\n-  Giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}1$ (và bỏ qua phân li của nước vì $CK_a = 1{,}77\\times10^{-5} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}00421$ M. \n-  Kiểm tra: $x/C = 4{,}2\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}38$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C6a (HK2 2013--2014)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy $\\mathrm{pH} = -\\lg 0{,}10 = 1{,}00$ vì $\\mathrm{HCOOH}$ là axit đơn chức có một $\\mathrm{H}$ linh động."
      },
      {
        "id": "option-2",
        "label": "Đổi sang $K_b = K_w / K_a$ trước khi tính vì dung dịch có chứa nước làm dung môi."
      },
      {
        "id": "option-3",
        "label": "Thử $x = [\\mathrm{H^+}] \\approx \\sqrt{K_a C}$, kiểm tra $x/C \\le 5\\%$ và $CK_a \\gg 10^{-14}$ rồi tính $\\mathrm{pH} = -\\lg x$."
      },
      {
        "id": "option-4",
        "label": "Lấy luôn $[\\mathrm{H^+}] = K_a = 1{,}77\\times 10^{-4}\\text{ M}$ mà không nhân với nồng độ $C$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-003",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT09 C6a: Axit yếu hoặc bazơ yếu",
    "prompt": "Tính pH của dung dịch axit axetic $\\mathrm{CH_{3}COOH}$ 0,2 M có $K_a = 4{,}8\\times10^{-5}$.\n\n\n\n\n**Lưu ý đề bài:** $K_a$ của axit axetic thường dùng là $1{,}8\\times10^{-5}$ (giá trị $4{,}8\\times10^{-5}$ có thể do lỗi in từ $1{,}8\\times10^{-5}$; khi làm bài nên tính theo số đề cho và có thể nêu thêm kết quả với $1{,}8\\times10^{-5}$).\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J; $T$(K) = $t$(°C) + 273.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính pH dung dịch $\\mathrm{CH_3COOH}$ $0{,}2\\text{ M}$ ($K_a = 4{,}8\\times 10^{-5}$), nhận định nào đúng?",
    "explanation": "$\\mathrm{CH_3COOH}$ là axit yếu đơn chức (không phải hệ đệm vì không có muối thêm sẵn); sau khi kiểm tra $x/C = 1{,}5\\% < 5\\%$ và $CK_a \\gg 10^{-14}$ thì tính $\\mathrm{pH} = -\\lg x$.\n\n**Lời giải đầy đủ:**\n\n-  Giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}2$ (và bỏ qua phân li của nước vì $CK_a = 9{,}6\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}0031$ M. \n-  Kiểm tra: $x/C = 1{,}5\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}51$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C6a (HK2 2015--2016)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Coi $\\mathrm{CH_3COOH}$ điện li hoàn toàn nên $[\\mathrm{H^+}] = 0{,}2\\text{ M}$ và $\\mathrm{pH} = 0{,}70$."
      },
      {
        "id": "option-2",
        "label": "Dùng công thức đệm $\\mathrm{pH} = \\mathrm{p}K_a$ vì cân bằng tạo đồng thời $\\mathrm{CH_3COOH}$ và $\\mathrm{CH_3COO^-}$."
      },
      {
        "id": "option-3",
        "label": "Tính $x = \\sqrt{K_a C}$ rồi lấy $\\mathrm{pH} = 14 + \\lg x$ giống trường hợp dung dịch bazơ yếu."
      },
      {
        "id": "option-4",
        "label": "Lập cân bằng phân li axit yếu, tính $x = [\\mathrm{H^+}] \\approx \\sqrt{K_a C}$ và kiểm tra $x/C \\le 5\\%$ trước khi lấy $-\\lg x$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-004",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT12 C6ab: Axit yếu hoặc bazơ yếu",
    "prompt": "a) Metylamin ($\\mathrm{CH_{3}NH_{2}}$) tan trong nước hình thành ion $\\mathrm{CH_{3}NH_{3}^{+}}$ và $\\mathrm{OH^{-}}$. Tính nồng độ $\\mathrm{CH_{3}NH_{3}^{+}}$ và pH của dung dịch $\\mathrm{CH_{3}NH_{2}}$ 0,50 M ở 25 °C, cho biết $K_{\\mathrm{CH_{3}NH_{2}}} = 4{,}38\\times10^{-4}$.\n\nb) Tính pH của dung dịch muối tan NaCN 0,25 M ở 25 °C, cho biết hằng số điện li $K_{\\mathrm{HCN}} = 6{,}2\\times10^{-10}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Bài gồm hai dung dịch riêng $\\mathrm{CH_3NH_2}$ $0{,}50\\text{ M}$ ($K_b$) và $\\mathrm{NaCN}$ $0{,}25\\text{ M}$ (biết $K_a(\\mathrm{HCN})$): chọn cách tiếp cận đúng?",
    "explanation": "Hai dung dịch hoàn toàn độc lập: $\\mathrm{CH_3NH_2}$ là bazơ yếu dùng $K_b$, còn $\\mathrm{NaCN}$ chứa $\\mathrm{CN^-}$ nhận proton từ nước nên phải đổi sang $K_b = K_w / K_a(\\mathrm{HCN})$.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\mathrm{CH_{3}NH_{2} + H_{2}O \\rightleftharpoons  CH_{3}NH_{3}^{+} + OH^{-}}$: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_b = 0{,}000219 \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}0148$ M. \n-  Kiểm tra: $x/C = 3\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 1{,}83$; pH $= 14 - $ pOH $= 12{,}17$. \n-  $[\\mathrm{CH_{3}NH_{3}^{+}}] = [\\mathrm{OH^{-}}] = x$. \n-  b) $\\mathrm{CN^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{6{,}2\\times10^{-10}} = 1{,}61\\times10^{-5}$. \n-  b) Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}25$ (và bỏ qua phân li của nước vì $CK_b = 4{,}03\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}00201$ M. \n-  Kiểm tra: $x/C = 0{,}8\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 2{,}70$; pH $= 14 - $ pOH $= 11{,}30$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C6ab (HK1 2017--2018)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ý a dùng trực tiếp $K_b$ của $\\mathrm{CH_3NH_2}$; ý b xét $\\mathrm{CN^-}$ là bazơ liên hợp nên đổi $K_b = K_w / K_a$, cả hai đều kiểm tra $x/C \\le 5\\%$."
      },
      {
        "id": "option-2",
        "label": "Ý a dùng $K_b$, còn ý b dùng trực tiếp $K_a(\\mathrm{HCN})$ để tính $[\\mathrm{H^+}]$ cho dung dịch muối $\\mathrm{NaCN}$."
      },
      {
        "id": "option-3",
        "label": "Gộp $\\mathrm{CH_3NH_2}$ và $\\mathrm{NaCN}$ thành một hệ đệm chung rồi áp dụng Henderson–Hasselbalch."
      },
      {
        "id": "option-4",
        "label": "Kết luận muối $\\mathrm{NaCN}$ ở ý b trung tính ($\\mathrm{pH} = 7$) vì đây là dung dịch muối tan."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-005",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT14 C6ab: Axit yếu hoặc bazơ yếu",
    "prompt": "a) Acid yếu HA nồng độ 0,15 M có độ phân ly ($\\alpha$%) ở 25 °C là 3,0%. Hãy xác định hằng số điện ly của axit HA.\n\nb) Tính pH của dung dịch muối KOCl 0,15 M ở 25 °C, biết hằng số điện li axit yếu $K_{\\mathrm{HOCl}} = 3{,}5\\times10^{-8}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Ở ý a ($\\mathrm{HA}$ cho độ điện li $\\alpha = 3{,}0\\%$) và ý b ($\\mathrm{KOCl}$ biết $K_{\\mathrm{HOCl}}$), cách giải đúng là gì?",
    "explanation": "Độ điện li phải đổi sang dạng thập phân ($\\alpha = 0{,}03$) trong $K_a = \\frac{C\\alpha^2}{1-\\alpha}$; ở ý b, $\\mathrm{OCl^-}$ là bazơ liên hợp của $\\mathrm{HOCl}$ nên dùng $K_b = K_w/K_{\\mathrm{HOCl}}$.\n\n**Lời giải đầy đủ:**\n\n-  a) 3 dòng với độ điện li: ban đầu $C$; phân li $\\alpha C$; cân bằng $C(1 - \\alpha)$ | $\\alpha C$ | $\\alpha C$. \n-  $K_a = \\dfrac{(\\alpha C)^2}{C(1 - \\alpha)} = \\dfrac{C\\alpha^2}{1 - \\alpha} = \\dfrac{0{,}15 \\times 0{,}03^2}{0{,}97} = 1{,}39\\times10^{-4}$. \n-  b) $\\mathrm{OCl^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{3{,}5\\times10^{-8}} = 2{,}86\\times10^{-7}$. \n-  b) Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}15$ (và bỏ qua phân li của nước vì $CK_b = 4{,}29\\times10^{-8} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}000207$ M. \n-  Kiểm tra: $x/C = 0{,}14\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 3{,}68$; pH $= 14 - $ pOH $= 10{,}32$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C6ab (Đề tổng hợp 3)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ý a thay nguyên số phần trăm $\\alpha = 3$ vào $K_a = C\\alpha^2$; ý b dùng thẳng $K_{\\mathrm{HOCl}}$ để tính $[\\mathrm{H^+}]$."
      },
      {
        "id": "option-2",
        "label": "Ý a tính $K_a = \\alpha C = 0{,}03 \\times 0{,}15$; ý b coi $\\mathrm{KOCl}$ là muối trung tính có $\\mathrm{pH} = 7{,}00$."
      },
      {
        "id": "option-3",
        "label": "Ý a tính $K_a = \\frac{C\\alpha^2}{1-\\alpha}$ với $\\alpha = 0{,}03$; ý b xét $\\mathrm{OCl^-}$ thủy phân tạo $\\mathrm{OH^-}$ với $K_b = K_w/K_{\\mathrm{HOCl}}$."
      },
      {
        "id": "option-4",
        "label": "Dùng giá trị $K_a$ tìm được ở ý a thay vào phép tính thủy phân muối $\\mathrm{KOCl}$ ở ý b."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-006",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT15 C5ab: Axit yếu hoặc bazơ yếu",
    "prompt": "Hằng số cân bằng $K_a$ của $\\mathrm{HNO_{2}}$ là $4{,}0\\times10^{-4}$. a) Tính pH của dung dịch $\\mathrm{HNO_{2}}$ 0,5 M. b) Tính pH của dung dịch chứa $\\mathrm{NaNO_{2}}$ 0,5 M.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với hai dung dịch riêng $\\mathrm{HNO_2}$ $0{,}5\\text{ M}$ và $\\mathrm{NaNO_2}$ $0{,}5\\text{ M}$ ($K_a = 4{,}0\\times 10^{-4}$), cách lập cân bằng nào đúng?",
    "explanation": "$\\mathrm{HNO_2}$ là axit yếu và $\\mathrm{NaNO_2}$ là muối của axit yếu với bazơ mạnh ở hai cốc riêng biệt; do đó ý a dùng $K_a$, ý b phải đổi $K_b = K_w/K_a$.\n\n**Lời giải đầy đủ:**\n\n-  a) Giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_a = 0{,}0002 \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}0141$ M. \n-  Kiểm tra: $x/C = 2{,}8\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 1{,}85$. \n-  b) $\\mathrm{NO_{2}^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{0{,}0004} = 2{,}5\\times10^{-11}$. \n-  b) Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_b = 1{,}25\\times10^{-11} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 3{,}54\\times10^{-6}$ M. \n-  Kiểm tra: $x/C = 0{,}00071\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 5{,}45$; pH $= 14 - $ pOH $= 8{,}55$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C5ab (Đề tổng hợp 5)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\mathrm{HNO_2}$ phân li axit dùng $K_a$ ($\\mathrm{pH} < 7$); $\\mathrm{NO_2^-}$ trong $\\mathrm{NaNO_2}$ thủy phân tạo $\\mathrm{OH^-}$ dùng $K_b = K_w / K_a$ ($\\mathrm{pH} > 7$)."
      },
      {
        "id": "option-2",
        "label": "Cả hai dung dịch cùng chứa gốc $\\mathrm{NO_2^-}$ nên dùng chung $K_a = 4{,}0\\times 10^{-4}$ để tính $[\\mathrm{H^+}]$."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{NaNO_2}$ là muối của axit yếu nên coi như dung dịch đệm có $\\mathrm{pH} = \\mathrm{p}K_a$."
      },
      {
        "id": "option-4",
        "label": "Không cần kiểm tra $x/C \\le 5\\%$ cho $\\mathrm{HNO_2}$ vì nồng độ $0{,}5\\text{ M}$ khiến axit phân li hoàn toàn."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-007",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT21 C6ab: Axit yếu hoặc bazơ yếu",
    "prompt": "a) Tính pH của dung dịch $\\mathrm{NH_{3}}$ 0,5 M, biết $K_b(\\mathrm{NH_{3}}) = 1{,}8\\times10^{-5}$.\n\nb) Tính pH của dung dịch axit $\\mathrm{CH_{3}COOH}$ 0,5 M. Biết $K_a(\\mathrm{CH_{3}COOH}) = 1{,}8\\times10^{-5}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Hai dung dịch $\\mathrm{NH_3}$ $0{,}5\\text{ M}$ ($K_b = 1{,}8\\times 10^{-5}$) và $\\mathrm{CH_3COOH}$ $0{,}5\\text{ M}$ ($K_a = 1{,}8\\times 10^{-5}$) có điểm gì cần chú ý?",
    "explanation": "Dù $x$ bằng nhau về độ lớn ($0{,}003\\text{ M}$), với bazơ yếu $\\mathrm{NH_3}$ thì $-\\lg x$ là $\\mathrm{pOH}$ (cần lấy $14 - \\mathrm{pOH}$), còn với $\\mathrm{CH_3COOH}$ thì $-\\lg x$ là $\\mathrm{pH}$.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\mathrm{NH_{3}}$: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_b = 9\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}003$ M. \n-  Kiểm tra: $x/C = 0{,}6\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 2{,}52$; pH $= 14 - $ pOH $= 11{,}48$. \n-  b) $\\mathrm{CH_{3}COOH}$: giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_a = 9\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}003$ M. \n-  Kiểm tra: $x/C = 0{,}6\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}52$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C6ab (Đề tổng hợp 11)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Vì $K_b(\\mathrm{NH_3}) = K_a(\\mathrm{CH_3COOH})$ và cùng nồng độ $0{,}5\\text{ M}$ nên hai dung dịch có cùng giá trị $\\mathrm{pH}$."
      },
      {
        "id": "option-2",
        "label": "Phải đổi $K_b(\\mathrm{NH_3})$ sang $K_a = K_w / K_b$ trước khi tính cân bằng của dung dịch $\\mathrm{NH_3}$."
      },
      {
        "id": "option-3",
        "label": "Dung dịch $\\mathrm{NH_3}$ phân li hoàn toàn vì là bazơ vô cơ, chỉ có $\\mathrm{CH_3COOH}$ mới dùng gần đúng $\\sqrt{K_a C}$."
      },
      {
        "id": "option-4",
        "label": "Cùng có $x \\approx \\sqrt{KC} = 0{,}003\\text{ M}$ ($x/C = 0{,}6\\% < 5\\%$), nhưng $\\mathrm{NH_3}$ cho $x = [\\mathrm{OH^-}]$ còn $\\mathrm{CH_3COOH}$ cho $x = [\\mathrm{H^+}]$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-008",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT22 C6ab: Axit yếu hoặc bazơ yếu",
    "prompt": "Tính pH của các dung dịch sau: a) $\\mathrm{(CH_{3})_{2}NH}$ 1,0 M biết $K_b = 5{,}9\\times10^{-4}$. b) $\\mathrm{CH_{3}CH_{2}COOH}$ 0,1 M biết $K_a = 1{,}3\\times10^{-5}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính pH dung dịch $\\mathrm{(CH_3)_2NH}$ $1{,}0\\text{ M}$ ($K_b$) và $\\mathrm{CH_3CH_2COOH}$ $0{,}1\\text{ M}$ ($K_a$), bước nào đúng?",
    "explanation": "$\\mathrm{(CH_3)_2NH}$ là bazơ yếu ($x = [\\mathrm{OH^-}]$, $x/C = 2{,}4\\% < 5\\%$) và $\\mathrm{CH_3CH_2COOH}$ là axit yếu ($x = [\\mathrm{H^+}]$, $x/C = 1{,}1\\% < 5\\%$); mỗi dung dịch dùng đúng hằng số đề cho.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\mathrm{(CH_{3})_{2}NH}$: giả sử $x = [\\mathrm{OH^{-}}] \\ll 1$ (và bỏ qua phân li của nước vì $CK_b = 0{,}00059 \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}0243$ M. \n-  Kiểm tra: $x/C = 2{,}4\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 1{,}61$; pH $= 14 - $ pOH $= 12{,}39$. \n-  b) $\\mathrm{CH_{3}CH_{2}COOH}$: giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}1$ (và bỏ qua phân li của nước vì $CK_a = 1{,}3\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}00114$ M. \n-  Kiểm tra: $x/C = 1{,}1\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}94$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C6ab (Đề tổng hợp 12)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\mathrm{(CH_3)_2NH}$ dùng $K_b$ tính $[\\mathrm{OH^-}] \\approx \\sqrt{K_b C}$ rồi đổi $\\mathrm{pOH} \\to \\mathrm{pH}$; $\\mathrm{CH_3CH_2COOH}$ dùng $K_a$ tính $[\\mathrm{H^+}] \\approx \\sqrt{K_a C}$; kiểm tra $x/C \\le 5\\%$."
      },
      {
        "id": "option-2",
        "label": "Lấy $\\mathrm{pH} = -\\lg\\sqrt{K_b C}$ trực tiếp cho dung dịch $\\mathrm{(CH_3)_2NH}$ mà không cần trừ từ $14$."
      },
      {
        "id": "option-3",
        "label": "Đổi sang $K_b = K_w / K_a$ cho $\\mathrm{CH_3CH_2COOH}$ vì đây là axit hữu cơ mạch dài."
      },
      {
        "id": "option-4",
        "label": "Vì $K_b = 5{,}9\\times 10^{-4}$ tương đối lớn nên bỏ qua gần đúng và lấy $[\\mathrm{OH^-}] = 1{,}0\\text{ M}$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-009",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT23 C6a: Axit yếu hoặc bazơ yếu",
    "prompt": "Tính pH của dung dịch axit fomic HCOOH 0,2 M có $K_a = 5\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R_H = 109722$ cm$^{-1}$; 1 eV = $1{,}602\\times10^{-19}$ J; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; có in bảng tuần hoàn.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với $\\mathrm{HCOOH}$ $0{,}2\\text{ M}$ ($K_a = 5\\times 10^{-4}$), tại sao không nên dừng ở công thức gần đúng $x \\approx \\sqrt{K_a C}$?",
    "explanation": "Khi $x/C$ chạm ngưỡng $5\\%$, phép gần đúng $C - x \\approx C$ gây sai số đáng kể; giải $x^2 + K_a x - K_a C = 0$ cho nghiệm chính xác $x = 9{,}75\\times 10^{-3}\\text{ M}$.\n\n**Lời giải đầy đủ:**\n\n-  Giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}2$ (và bỏ qua phân li của nước vì $CK_a = 0{,}0001 \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}01$ M. \n-  Kiểm tra: $x/C = 5\\%$, sát ngưỡng 5%: coi giả sử sai, quay về giải theo 3 dòng. \n-  3 dòng (mol/L): ban đầu $0{,}2$ | 0 | 0; phân li $-x$ | $+x$ | $+x$; cân bằng $0{,}2 - x$ | $x$ | $x$ $\\Rightarrow \\dfrac{x^2}{0{,}2 - x} = K_a = 0{,}0005$, tức $x^2 + K_ax - K_aC = 0 \\Rightarrow x = 0{,}00975$ M. \n-  pH $= -\\lg x = 2{,}01$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C6a (HK1 2022--2023 Ca 2, Đề tổng hợp 13)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Vì $K_a = 5\\times 10^{-4}$ quá nhỏ nên sự tự phân li của nước đóng góp $[\\mathrm{H^+}]$ đáng kể."
      },
      {
        "id": "option-2",
        "label": "Vì $\\sqrt{K_a C} = 0{,}01\\text{ M}$ cho $x/C = 5{,}0\\%$ ngay ngưỡng giới hạn, nên cần giải bậc hai $x^2 + K_a x - K_a C = 0$."
      },
      {
        "id": "option-3",
        "label": "Vì $\\mathrm{HCOOH}$ là axit mạnh phân li $100\\%$, chỉ cần tính $\\mathrm{pH} = -\\lg(0{,}2)$."
      },
      {
        "id": "option-4",
        "label": "Vì phải đổi sang hằng số thủy phân $K_b = K_w / K_a$ trước khi tìm nồng độ $\\mathrm{H^+}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-010",
    "lessonId": "gc-sol-weak-acid-base",
    "title": "Đề ĐT24 C6ab: Axit yếu hoặc bazơ yếu",
    "prompt": "a) Hãy xác định pH của dung dịch axit propanoic $\\mathrm{C_{2}H_{5}COOH}$ có nồng độ 0,20 M ở 25 °C biết hằng số điện ly $K_a$ của axit propanoic là $1{,}3\\times10^{-5}$.\n\nb) Tính pH của dung dịch muối $\\mathrm{KNO_{2}}$ 0,75 M ở 25 °C, biết hằng số điện li $K_{\\mathrm{HNO_{2}}} = 4{,}0\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3{,}0\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; $F = 96\\,500$ C/mol; 1 m = $10^9$ nm; 1 eV = $1{,}602\\times10^{-19}$ J; $N_A = 6{,}023\\times10^{23}$; có in bảng tuần hoàn.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với $\\mathrm{C_2H_5COOH}$ $0{,}20\\text{ M}$ ($K_a$) và muối $\\mathrm{KNO_2}$ $0{,}75\\text{ M}$ (cho $K_{\\mathrm{HNO_2}}$), lựa chọn nào đúng?",
    "explanation": "$\\mathrm{C_2H_5COOH}$ là axit yếu dùng $K_a$; $\\mathrm{KNO_2}$ là muối của bazơ mạnh và axit yếu nên $\\mathrm{NO_2^-}$ thủy phân tạo $\\mathrm{OH^-}$, bắt buộc đổi $K_b = K_w / K_{\\mathrm{HNO_2}}$.\n\n**Lời giải đầy đủ:**\n\n-  a) Giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}2$ (và bỏ qua phân li của nước vì $CK_a = 2{,}6\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}00161$ M. \n-  Kiểm tra: $x/C = 0{,}81\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}79$. \n-  b) $\\mathrm{NO_{2}^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{0{,}0004} = 2{,}5\\times10^{-11}$. \n-  b) Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}75$ (và bỏ qua phân li của nước vì $CK_b = 1{,}87\\times10^{-11} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 4{,}33\\times10^{-6}$ M. \n-  Kiểm tra: $x/C = 0{,}00058\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 5{,}36$; pH $= 14 - $ pOH $= 8{,}64$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C6ab (HK1 2019--2020)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\mathrm{KNO_2}$ chứa $\\mathrm{K^+}$ nên dung dịch trung tính ($\\mathrm{pH} = 7$), chỉ cần tính cân bằng ý a."
      },
      {
        "id": "option-2",
        "label": "Ở ý b lấy thẳng $K_{\\mathrm{HNO_2}} = 4{,}0\\times 10^{-4}$ thay vào $[\\mathrm{H^+}] = \\sqrt{K_a C}$ cho $\\mathrm{KNO_2}$."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{C_2H_5COOH}$ dùng trực tiếp $K_a$ tìm $[\\mathrm{H^+}]$; $\\mathrm{KNO_2}$ có $\\mathrm{NO_2^-}$ thủy phân nên dùng $K_b = K_w / K_{\\mathrm{HNO_2}}$ tìm $[\\mathrm{OH^-}]$."
      },
      {
        "id": "option-4",
        "label": "Ở ý a dùng $K_b = K_w / K_a$ vì axit propanoic là axit yếu hơn axit fomic."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-011",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT04 C5a: Dung dịch muối (thủy phân)",
    "prompt": "Tính pH của dung dịch muối NaF 0,3 M. Cho biết $K_a$ của HF là $7{,}2\\times10^{-4}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Dung dịch muối $\\mathrm{NaF}$ $0{,}3\\text{ M}$ ($K_a(\\mathrm{HF}) = 7{,}2\\times 10^{-4}$) có môi trường và cách tính pH nào đúng?",
    "explanation": "$\\mathrm{Na^+}$ trung tính còn $\\mathrm{F^- + H_2O \\rightleftharpoons HF + OH^-}$ tạo môi trường kiềm ($\\mathrm{pH} > 7$); sau khi tính $K_b = K_w/K_a$ và kiểm tra $x/C \\le 5\\%$, phải đổi $\\mathrm{pOH}$ sang $\\mathrm{pH}$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{F^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{0{,}00072} = 1{,}39\\times10^{-11}$. \n-  Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}3$ (và bỏ qua phân li của nước vì $CK_b = 4{,}17\\times10^{-12} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 2{,}04\\times10^{-6}$ M. \n-  Kiểm tra: $x/C = 0{,}00068\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 5{,}69$; pH $= 14 - $ pOH $= 8{,}31$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C5a (HK1 2013--2014)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng trực tiếp $K_a(\\mathrm{HF})$ để tính $[\\mathrm{H^+}] = \\sqrt{K_a C}$ rồi lấy $\\mathrm{pH} = -\\lg[\\mathrm{H^+}]$."
      },
      {
        "id": "option-2",
        "label": "$\\mathrm{NaF}$ là muối tan hoàn toàn, không chứa $\\mathrm{H^+}$ hay $\\mathrm{OH^-}$ nên dung dịch có $\\mathrm{pH} = 7{,}00$."
      },
      {
        "id": "option-3",
        "label": "Tính $x = \\sqrt{K_b C}$ rồi kết luận ngay $\\mathrm{pH} = -\\lg x$, bỏ qua bước đổi từ $\\mathrm{pOH}$ sang $\\mathrm{pH}$."
      },
      {
        "id": "option-4",
        "label": "$\\mathrm{F^-}$ là bazơ liên hợp thủy phân tạo $\\mathrm{OH^-}$; tính $K_b = K_w / K_a$, tìm $[\\mathrm{OH^-}] \\approx \\sqrt{K_b C}$ rồi $\\mathrm{pH} = 14 + \\lg[\\mathrm{OH^-}]$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-012",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT17 C6a: Dung dịch muối (thủy phân)",
    "prompt": "Cho dung dịch muối KCN 0,5 M, biết $K_a(\\mathrm{HCN}) = 5{,}8\\times10^{-10}$. Hãy tính: pH của dung dịch muối và độ thuỷ phân của dung dịch muối trên.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi tính pH và độ thủy phân của $\\mathrm{KCN}$ $0{,}5\\text{ M}$ ($K_a(\\mathrm{HCN}) = 5{,}8\\times 10^{-10}$), cách làm nào đúng?",
    "explanation": "$\\mathrm{CN^-}$ là bazơ liên hợp nên dùng $K_b = K_w / K_a$; sau khi tìm được $x = [\\mathrm{OH^-}]$, độ thủy phân là tỉ lệ lượng ion đã thủy phân trên nồng độ đầu ($h = x/C$) và $\\mathrm{pH} = 14 + \\lg x$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{CN^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{5{,}8\\times10^{-10}} = 1{,}72\\times10^{-5}$. \n-  Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_b = 8{,}62\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}00294$ M. \n-  Kiểm tra: $x/C = 0{,}59\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 2{,}53$; pH $= 14 - $ pOH $= 11{,}47$. \n-  Độ thủy phân $h = \\dfrac{x}{C} = \\dfrac{0{,}00294}{0{,}5} = 0{,}59\\%$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C6a (Đề tổng hợp 7)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Coi $\\mathrm{KCN}$ phân li ra $\\mathrm{HCN}$ nên dùng luôn $K_a = 5{,}8\\times 10^{-10}$ để tính $[\\mathrm{H^+}]$ và $\\mathrm{pH} < 7$."
      },
      {
        "id": "option-2",
        "label": "$\\mathrm{CN^-}$ thủy phân với $K_b = K_w/K_a$; tìm $x = [\\mathrm{OH^-}] \\approx \\sqrt{K_b C}$ (kiểm tra $x/C \\le 5\\%$), rồi $\\mathrm{pH} = 14 + \\lg x$ và $h = x/C$."
      },
      {
        "id": "option-3",
        "label": "Tính độ thủy phân bằng cách lấy $h = \\mathrm{pH} / C$ thay vì lấy nồng độ đã thủy phân chia cho $C$."
      },
      {
        "id": "option-4",
        "label": "Dùng công thức đệm $\\mathrm{pH} = \\mathrm{p}K_a$ vì $\\mathrm{CN^-}$ và $\\mathrm{HCN}$ cùng tồn tại trong cân bằng thủy phân."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-013",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT26 C6a: Dung dịch muối (thủy phân)",
    "prompt": "Cho dung dịch muối KCN 0,5 M, biết $K_a(\\mathrm{HCN}) = 5{,}8\\times10^{-10}$. Hãy tính pH của dung dịch muối.\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J; $R_H = 109678$ cm$^{-1}$; $F = 96\\,500$ C/mol; $T$(K) = 273 + $t$(°C).\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Xác định bản chất cân bằng và công thức tính pH cho dung dịch $\\mathrm{KCN}$ $0{,}5\\text{ M}$ ($K_a(\\mathrm{HCN}) = 5{,}8\\times 10^{-10}$)?",
    "explanation": "$\\mathrm{KCN}$ là muối của bazơ mạnh và axit yếu nên $\\mathrm{CN^-}$ quyết định tính kiềm ($\\mathrm{pH} > 7$); cần đổi $K_b = K_w / K_a$ và nhớ bước $\\mathrm{pH} = 14 - \\mathrm{pOH}$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{CN^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{5{,}8\\times10^{-10}} = 1{,}72\\times10^{-5}$. \n-  Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}5$ (và bỏ qua phân li của nước vì $CK_b = 8{,}62\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}00294$ M. \n-  Kiểm tra: $x/C = 0{,}59\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 2{,}53$; pH $= 14 - $ pOH $= 11{,}47$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C6a (HK1 2024--2025)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cả $\\mathrm{K^+}$ và $\\mathrm{CN^-}$ đều thủy phân mạnh nên $\\mathrm{pH}$ dung dịch bằng trung bình cộng của $\\mathrm{p}K_a$ và $\\mathrm{p}K_w$."
      },
      {
        "id": "option-2",
        "label": "Đưa $K_a = 5{,}8\\times 10^{-10}$ thẳng vào $[\\mathrm{H^+}] = \\sqrt{K_a C}$, cho ra dung dịch có tính axit."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{K^+}$ trung tính, $\\mathrm{CN^- + H_2O \\rightleftharpoons HCN + OH^-}$ có $K_b = K_w / K_a$; kiểm tra $x/C \\le 5\\%$ rồi tính $\\mathrm{pH} = 14 - \\mathrm{pOH}$."
      },
      {
        "id": "option-4",
        "label": "Tính $x = \\sqrt{K_b C}$ rồi gán trực tiếp $\\mathrm{pH} = -\\lg x \\approx 2{,}53$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-014",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT28 C6a: Dung dịch muối (thủy phân)",
    "prompt": "Tính pH của dung dịch $\\mathrm{CH_{3}COONa}$ nồng độ 0,10 M, biết hằng số điện li $K_{\\mathrm{CH_{3}COOH}} = 1{,}8\\times10^{-5}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Tính pH dung dịch $\\mathrm{CH_3COONa}$ $0{,}10\\text{ M}$ khi đề cho $K_a(\\mathrm{CH_3COOH}) = 1{,}8\\times 10^{-5}$: bước nào đúng?",
    "explanation": "Dù đề cho $K_a(\\mathrm{CH_3COOH})$, chất tan là muối $\\mathrm{CH_3COONa}$ nên ion hoạt động là $\\mathrm{CH_3COO^-}$ (bazơ liên hợp) với $K_b = K_w/K_a$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{CH_{3}COO^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{1{,}8\\times10^{-5}} = 5{,}56\\times10^{-10}$. \n-  Giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}1$ (và bỏ qua phân li của nước vì $CK_b = 5{,}56\\times10^{-11} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 7{,}45\\times10^{-6}$ M. \n-  Kiểm tra: $x/C = 0{,}0075\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 5{,}13$; pH $= 14 - $ pOH $= 8{,}87$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C6a (Hè 2025--2026)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Xác định $\\mathrm{CH_3COO^-}$ là bazơ liên hợp, tính $K_b = K_w/K_a = 5{,}56\\times 10^{-10}$, tính $x = [\\mathrm{OH^-}] \\approx \\sqrt{K_b C}$ (kiểm tra $x/C \\le 5\\%$) và đổi sang $\\mathrm{pH} > 7$."
      },
      {
        "id": "option-2",
        "label": "Thay thẳng $K_a = 1{,}8\\times 10^{-5}$ vào công thức $[\\mathrm{H^+}] = \\sqrt{K_a C}$ như đối với dung dịch $\\mathrm{CH_3COOH}$."
      },
      {
        "id": "option-3",
        "label": "Tính $[\\mathrm{OH^-}] = 0{,}10\\text{ M}$ vì muối natri điện li hoàn toàn $100\\%$ trong nước."
      },
      {
        "id": "option-4",
        "label": "Dùng công thức đệm $\\mathrm{pH} = \\mathrm{p}K_a = 4{,}74$ vì $\\mathrm{CH_3COO^-}$ tự sinh ra $\\mathrm{CH_3COOH}$ khi thủy phân."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-015",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT07 C6a: Axit yếu và muối trong cùng một ý",
    "prompt": "Tính pH của dung dịch axit benzoic $\\mathrm{C_{6}H_{5}COOH}$ 0,2 M có $K_a = 6{,}4\\times10^{-5}$ và pH của dung dịch KCN 0,1 M có $K_{\\mathrm{HCN}} = 7{,}9\\times10^{-10}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Đề yêu cầu tính pH của dung dịch $\\mathrm{C_6H_5COOH}$ $0{,}2\\text{ M}$ và dung dịch $\\mathrm{KCN}$ $0{,}1\\text{ M}$: cách xử lý nào đúng?",
    "explanation": "Đề hỏi pH của hai dung dịch riêng biệt (không phải trộn chung hay hệ đệm): axit benzoic dùng $K_a$, muối $\\mathrm{KCN}$ thủy phân bazơ dùng $K_b = K_w / K_{\\mathrm{HCN}}$.\n\n**Lời giải đầy đủ:**\n\n-  Axit: giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}2$ (và bỏ qua phân li của nước vì $CK_a = 1{,}28\\times10^{-5} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}00358$ M. \n-  Kiểm tra: $x/C = 1{,}8\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}45$. \n-  Muối: $\\mathrm{CN^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{7{,}9\\times10^{-10}} = 1{,}27\\times10^{-5}$. \n-  Muối: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}1$ (và bỏ qua phân li của nước vì $CK_b = 1{,}27\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}00113$ M. \n-  Kiểm tra: $x/C = 1{,}1\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 2{,}95$; pH $= 14 - $ pOH $= 11{,}05$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C6a (HK1 2015--2016)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Trộn hai chất thành một hệ đệm và dùng Henderson–Hasselbalch với tỉ số $0{,}1/0{,}2$."
      },
      {
        "id": "option-2",
        "label": "Xét hai dung dịch độc lập: $\\mathrm{C_6H_5COOH}$ dùng $K_a$ tính $[\\mathrm{H^+}]$, còn $\\mathrm{CN^-}$ trong $\\mathrm{KCN}$ dùng $K_b = K_w / K_{\\mathrm{HCN}}$ tính $[\\mathrm{OH^-}]$."
      },
      {
        "id": "option-3",
        "label": "Dùng trực tiếp $K_a$ cho $\\mathrm{C_6H_5COOH}$ và dùng trực tiếp $K_{\\mathrm{HCN}}$ cho $\\mathrm{KCN}$ mà không đổi sang $K_b$."
      },
      {
        "id": "option-4",
        "label": "Coi cả hai chất đều điện li mạnh nên $\\mathrm{pH}$ lần lượt là $-\\lg(0{,}2)$ và $14 + \\lg(0{,}1)$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-016",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT10 C6a: Axit yếu và muối trong cùng một ý",
    "prompt": "Tính pH của dung dịch axit propanoic $\\mathrm{C_{2}H_{5}COOH}$ 0,15 M có $K_a = 1{,}3\\times10^{-5}$ và tính pH của dung dịch muối NaOCl 0,20 M, biết hằng số điện li $K_{\\mathrm{HOCl}} = 3{,}5\\times10^{-8}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính pH của hai dung dịch riêng $\\mathrm{C_2H_5COOH}$ $0{,}15\\text{ M}$ ($K_a$) và $\\mathrm{NaOCl}$ $0{,}20\\text{ M}$ ($K_{\\mathrm{HOCl}}$), mô hình nào đúng?",
    "explanation": "Đây là hai dung dịch độc lập: axit propanoic phân li cho $\\mathrm{H^+}$ theo $K_a$, còn $\\mathrm{OCl^-}$ thủy phân cho $\\mathrm{OH^-}$ theo $K_b = K_w / K_{\\mathrm{HOCl}}$ rồi đổi $\\mathrm{pOH}$ sang $\\mathrm{pH}$.\n\n**Lời giải đầy đủ:**\n\n-  Axit: giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}15$ (và bỏ qua phân li của nước vì $CK_a = 1{,}95\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}0014$ M. \n-  Kiểm tra: $x/C = 0{,}93\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}85$. \n-  Muối: $\\mathrm{OCl^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{3{,}5\\times10^{-8}} = 2{,}86\\times10^{-7}$. \n-  Muối: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}2$ (và bỏ qua phân li của nước vì $CK_b = 5{,}71\\times10^{-8} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}000239$ M. \n-  Kiểm tra: $x/C = 0{,}12\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 3{,}62$; pH $= 14 - $ pOH $= 10{,}38$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C6a (HK1 2016--2017)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\mathrm{NaOCl}$ là muối trung tính nên có $\\mathrm{pH} = 7{,}00$, chỉ cần giải cân bằng cho $\\mathrm{C_2H_5COOH}$."
      },
      {
        "id": "option-2",
        "label": "Lập bảng phản ứng giữa $\\mathrm{C_2H_5COOH}$ và $\\mathrm{NaOCl}$ để tính lượng còn lại rồi áp dụng công thức đệm."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{C_2H_5COOH}$ là axit yếu dùng $K_a$ ($\\mathrm{pH} < 7$); $\\mathrm{NaOCl}$ có $\\mathrm{OCl^-}$ thủy phân dùng $K_b = K_w / K_{\\mathrm{HOCl}}$ ($\\mathrm{pH} > 7$)."
      },
      {
        "id": "option-4",
        "label": "Tính $[\\mathrm{OH^-}] = \\sqrt{K_b C}$ cho $\\mathrm{NaOCl}$ rồi lấy luôn $\\mathrm{pH} = -\\lg[\\mathrm{OH^-}] \\approx 3{,}62$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-017",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT11 C6a: Axit yếu và muối trong cùng một ý",
    "prompt": "Tính pH của dung dịch axit benzoic $\\mathrm{C_{6}H_{5}COOH}$ 0,4 M có $K_a = 6{,}4\\times10^{-5}$ và pH của dung dịch KCN 0,15 M có $K_a(\\mathrm{HCN}) = 7{,}9\\times10^{-10}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với hai dung dịch độc lập $\\mathrm{C_6H_5COOH}$ $0{,}4\\text{ M}$ và $\\mathrm{KCN}$ $0{,}15\\text{ M}$, khẳng định nào đúng?",
    "explanation": "Hai dung dịch không trộn với nhau nên không tạo hệ đệm; axit benzoic cho $\\mathrm{pH} < 7$ và dung dịch muối $\\mathrm{KCN}$ thủy phân bazơ cho $\\mathrm{pH} > 7$.\n\n**Lời giải đầy đủ:**\n\n-  Axit: giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}4$ (và bỏ qua phân li của nước vì $CK_a = 2{,}56\\times10^{-5} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}00506$ M. \n-  Kiểm tra: $x/C = 1{,}3\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}30$. \n-  Muối: $\\mathrm{CN^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{7{,}9\\times10^{-10}} = 1{,}27\\times10^{-5}$. \n-  Muối: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}15$ (và bỏ qua phân li của nước vì $CK_b = 1{,}9\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 0{,}00138$ M. \n-  Kiểm tra: $x/C = 0{,}92\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 2{,}86$; pH $= 14 - $ pOH $= 11{,}14$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C6a (HK2 2016--2017)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt $\\mathrm{KCN}$ và $\\mathrm{C_6H_5COOH}$ vào cùng bảng phản ứng để tìm lượng dư rồi tính pH hỗn hợp."
      },
      {
        "id": "option-2",
        "label": "Không đổi $K_b$ cho $\\mathrm{KCN}$ mà thay $K_a(\\mathrm{HCN}) = 7{,}9\\times 10^{-10}$ thẳng vào $[\\mathrm{H^+}] = \\sqrt{K_a C}$."
      },
      {
        "id": "option-3",
        "label": "Dùng công thức $\\mathrm{pH} = -\\lg C$ cho axit benzoic và $\\mathrm{pH} = 7$ cho dung dịch muối $\\mathrm{KCN}$."
      },
      {
        "id": "option-4",
        "label": "Giải riêng hai cân bằng: axit benzoic dùng $K_a$ tìm $[\\mathrm{H^+}]$, muối $\\mathrm{KCN}$ dùng $K_b = K_w / K_a(\\mathrm{HCN})$ tìm $[\\mathrm{OH^-}]$ rồi đổi sang $\\mathrm{pH}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-018",
    "lessonId": "gc-sol-salt",
    "title": "Đề ĐT25 C6a: Axit yếu và muối trong cùng một ý",
    "prompt": "Axit acrylic ($\\mathrm{CH_{2}=CH-COOH}$) là nguyên liệu quan trọng trong sản xuất nhựa, có $K_a = 5{,}6\\times10^{-5}$. Tính pH của dung dịch axit acrylic có nồng độ 0,1 M và độ điện li của dung dịch. Tính pH của dung dịch muối natri acrylat ($\\mathrm{CH_{2}=CH-COONa}$) nồng độ 0,05 M.\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}602\\times10^{-19}$ J; $Z(\\text{Li}) = 3$; $Z(\\text{B}) = 5$; $T$(K) = $t$(°C) + 273; $M$(N) = 14 g/mol, $M$(O) = 16 g/mol; $N_A = 6{,}023\\times10^{23}$, $F = 96\\,500$ C.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với hai dung dịch riêng axit acrylic $0{,}1\\text{ M}$ ($K_a = 5{,}6\\times 10^{-5}$) và natri acrylat $0{,}05\\text{ M}$, cách giải đúng là gì?",
    "explanation": "Dù có chung gốc axit, đề yêu cầu tính cho hai dung dịch riêng lẻ nên không dùng công thức đệm; natri acrylat là muối bazơ liên hợp nên cần đổi $K_b = K_w/K_a$.\n\n**Lời giải đầy đủ:**\n\n-  Axit: giả sử $x = [\\mathrm{H^{+}}] \\ll 0{,}1$ (và bỏ qua phân li của nước vì $CK_a = 5{,}6\\times10^{-6} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_aC} = 0{,}00237$ M. \n-  Kiểm tra: $x/C = 2{,}4\\% < 5\\%$: giả sử đúng. \n-  pH $= -\\lg x = 2{,}63$. \n-  Muối: $\\mathrm{CH_{2}=CH-COO^{-}}$ là bazơ liên hợp: $K_b = \\dfrac{K_w}{K_a} = \\dfrac{10^{-14}}{5{,}6\\times10^{-5}} = 1{,}79\\times10^{-10}$. \n-  Muối: giả sử $x = [\\mathrm{OH^{-}}] \\ll 0{,}05$ (và bỏ qua phân li của nước vì $CK_b = 8{,}93\\times10^{-12} \\gg 10^{-14}$). \n-  Công thức gần đúng: $x \\approx \\sqrt{K_bC} = 2{,}99\\times10^{-6}$ M. \n-  Kiểm tra: $x/C = 0{,}006\\% < 5\\%$: giả sử đúng. \n-  pOH $= -\\lg x = 5{,}52$; pH $= 14 - $ pOH $= 8{,}48$. \n-  Độ điện li $\\alpha = x/C = 0{,}00237/0{,}1 = 2{,}4\\%$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-8c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C6a (HK2 2023--2024)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Axit acrylic dùng $K_a$ tìm $x = [\\mathrm{H^+}]$, tính $\\mathrm{pH}$ và $\\alpha = x/C$; natri acrylat dùng $K_b = K_w / K_a$ tìm $[\\mathrm{OH^-}]$ và $\\mathrm{pH} > 7$."
      },
      {
        "id": "option-2",
        "label": "Gộp axit acrylic $0{,}1\\text{ M}$ và natri acrylat $0{,}05\\text{ M}$ vào công thức đệm $\\mathrm{pH} = \\mathrm{p}K_a + \\lg(0{,}05/0{,}1)$."
      },
      {
        "id": "option-3",
        "label": "Tính độ điện li axit bằng $\\alpha = \\mathrm{pH}/C$ thay vì $\\alpha = [\\mathrm{H^+}]/C$."
      },
      {
        "id": "option-4",
        "label": "Dùng $K_a = 5{,}6\\times 10^{-5}$ trực tiếp cho cả hai dung dịch vì anion acrylat và axit acrylic cùng gốc axit."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-019",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT01 C4b: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Cho dung dịch amoniac $10^{-2}$ M, $K_b = 1{,}8\\times10^{-5}$. b) Nếu hòa tan 0,535 g $\\mathrm{NH_{4}Cl}$ vào trong 100 mL dung dịch trên (coi thể tích dung dịch không thay đổi) thì pH của dung dịch sẽ là bao nhiêu? Biết Cl ($M = 35{,}5$), N ($M = 14$), H ($M = 1$).\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi hòa tan $0{,}535\\text{ g}$ $\\mathrm{NH_4Cl}$ vào $100\\text{ mL}$ $\\mathrm{NH_3}$ $10^{-2}\\text{ M}$ ($K_b = 1{,}8\\times 10^{-5}$), hướng giải đúng là gì?",
    "explanation": "$\\mathrm{NH_3}$ và $\\mathrm{NH_4^+}$ là cặp bazơ–axit liên hợp nên không trung hòa nhau mà tạo hệ đệm bazơ; cần đổi khối lượng $\\mathrm{NH_4Cl}$ ra mol rồi tính $\\mathrm{pOH}$ trước khi suy ra $\\mathrm{pH}$.\n\n**Lời giải đầy đủ:**\n\n-  $n(\\mathrm{NH_{4}Cl}) = \\dfrac{0{,}535}{53{,}5} = 0{,}01$ mol trong 0,1 L nên $[\\mathrm{NH_{4}^{+}}] = 0{,}1$ M; $[\\mathrm{NH_{3}}] = 0{,}01$ M. \n-  Đệm bazơ: pOH $= \\text{p}K_b + \\lg\\dfrac{[\\mathrm{NH_{4}^{+}}]}{[\\mathrm{NH_{3}}]} = 4{,}745 + \\lg 10 = 5{,}745$. \n-  pH $= 14 - 5{,}745$. \n-  Kiểm tra giả sử: $[\\mathrm{OH^{-}}] = 1{,}8\\times10^{-6}$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}01$ M) khoảng 5500 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C4b (HK1 2010--2011)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính nồng độ $\\mathrm{NH_3}$ và $\\mathrm{NH_4^+}$ trong $100\\text{ mL}$, áp dụng đệm bazơ $\\mathrm{pOH} = \\mathrm{p}K_b + \\lg\\frac{[\\mathrm{NH_4^+}]}{[\\mathrm{NH_3}]}$ rồi đổi $\\mathrm{pH} = 14 - \\mathrm{pOH}$."
      },
      {
        "id": "option-2",
        "label": "Viết phản ứng trung hòa giữa $\\mathrm{NH_4Cl}$ và $\\mathrm{NH_3}$ để trừ bớt số mol rồi tính chất dư."
      },
      {
        "id": "option-3",
        "label": "Thay tỉ số $\\frac{[\\mathrm{NH_4^+}]}{[\\mathrm{NH_3}]}$ vào công thức $\\mathrm{pH} = \\mathrm{p}K_b + \\lg\\frac{[\\mathrm{NH_4^+}]}{[\\mathrm{NH_3}]}$, quên đổi từ $\\mathrm{pOH}$."
      },
      {
        "id": "option-4",
        "label": "Đưa thẳng khối lượng $0{,}535\\text{ g}$ thay cho số mol $\\mathrm{NH_4^+}$ vào biểu thức logarit của công thức đệm."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-020",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT02 C3: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Tính nồng độ ion $\\mathrm{H_{3}O^{+}}$ trong dung dịch chứa đồng thời axit cloaxetic $\\mathrm{ClCH_{2}COOH}$ nồng độ 0,01 M và muối natri cloaxetat nồng độ 0,002 M. Biết $K_a$ của axit cloaxetic là $1{,}36\\times10^{-3}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với hỗn hợp $\\mathrm{ClCH_2COOH}$ $0{,}01\\text{ M}$ và $\\mathrm{ClCH_2COONa}$ $0{,}002\\text{ M}$ ($K_a = 1{,}36\\times 10^{-3}$), tại sao KHÔNG dùng công thức Henderson–Hasselbalch?",
    "explanation": "Công thức Henderson–Hasselbalch chỉ đúng khi $[\\mathrm{H^+}], [\\mathrm{OH^-}] \\ll C_a, C_b$; ở đây gần đúng cho $[\\mathrm{H^+}] \\approx 6{,}8\\times 10^{-3}\\text{ M}$ vượt quá $C_b = 0{,}002\\text{ M}$ nên bắt buộc giải phương trình bậc hai.\n\n**Lời giải đầy đủ:**\n\n-  Đặt $x = [\\mathrm{H_{3}O^{+}}]$: $\\mathrm{HA}$ còn $0{,}01 - x$, $\\mathrm{A^{-}}$ là $0{,}002 + x$ (muối cho sẵn 0,002 M). \n-  $K_a = \\dfrac{x(0{,}002 + x)}{0{,}01 - x}$; khai triển: $x^2 + (0{,}002 + K_a)x - 0{,}01K_a = 0 \\Rightarrow x^2 + 3{,}36\\times10^{-3}x - 1{,}36\\times10^{-5} = 0$. \n-  $x = \\dfrac{-3{,}36\\times10^{-3} + \\sqrt{(3{,}36\\times10^{-3})^2 + 4 \\times 1{,}36\\times10^{-5}}}{2}$. \n-  Lưu ý: $x$ cùng cỡ với 0,002 nên không được dùng Henderson–Hasselbalch (sẽ ra $6{,}8\\times10^{-3}$, sai).\n\nGiữ thêm chữ số trung gian cho kết quả: [H₃O⁺] ≈ 2,37×10⁻³ M; pH ≈ 2,62 (nếu làm tròn 2 chữ số có nghĩa thì pH ≈ 2,6; hệ thống chấp nhận cả hai cách làm tròn).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT02 C3 (Hè 2012)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Vì $\\mathrm{ClCH_2COOH}$ là axit mạnh phân li hoàn toàn nên $[\\mathrm{H_3O^+}] = 0{,}01\\text{ M}$."
      },
      {
        "id": "option-2",
        "label": "Vì $\\mathrm{ClCH_2COONa}$ không phải bazơ liên hợp của axit cloaxetic."
      },
      {
        "id": "option-3",
        "label": "Vì $K_a = 1{,}36\\times 10^{-3}$ khá lớn so với $C_a, C_b$ nên $x = [\\mathrm{H_3O^+}]$ không nhỏ hơn $0{,}002\\text{ M}$; phải giải bậc hai $\\frac{x(0{,}002+x)}{0{,}01-x} = K_a$."
      },
      {
        "id": "option-4",
        "label": "Vì phải tính thủy phân của $\\mathrm{ClCH_2COO^-}$ với $K_b = K_w / K_a$ rồi mới cộng thêm $\\mathrm{H^+}$ từ axit."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-021",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT04 C5b: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Để điều chế dung dịch đệm chứa HF và NaF, người ta thêm 0,32 mol axit HF vào 1 lít dung dịch NaF 0,3 M. Tính pH của dung dịch đệm thu được ($K_{\\mathrm{HF}} = 7{,}2\\times10^{-4}$).\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi thêm $0{,}32\\text{ mol}$ $\\mathrm{HF}$ vào $1\\text{ L}$ dung dịch $\\mathrm{NaF}$ $0{,}3\\text{ M}$ ($K_{\\mathrm{HF}} = 7{,}2\\times 10^{-4}$), cách xác định pH đúng là gì?",
    "explanation": "$\\mathrm{HF}$ và $\\mathrm{F^-}$ là cặp axit–bazơ liên hợp cùng tồn tại trong $1\\text{ L}$; tỉ số đệm luôn đặt bazơ liên hợp $[\\mathrm{F^-}]$ ở tử và axit $[\\mathrm{HF}]$ ở mẫu.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  $n(\\mathrm{HF}) = 0{,}32$ mol; $n(\\mathrm{F^{-}}) = 0{,}30$ mol; p$K_a = -\\lg(7{,}2\\times10^{-4}) = 3{,}14$. \n-  pH $= 3{,}14 + \\lg\\dfrac{0{,}30}{0{,}32} = 3{,}14 - 0{,}028$. \n-  Kiểm tra giả sử: $[\\mathrm{H^{+}}] = 0{,}00078$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}3$ M) khoảng 390 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C5b (HK1 2013--2014)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Trừ $0{,}32 - 0{,}30 = 0{,}02\\text{ mol}$ như phản ứng trung hòa giữa axit với kiềm mạnh rồi tính $\\mathrm{HF}$ dư."
      },
      {
        "id": "option-2",
        "label": "Đảo tỉ số thành $\\mathrm{pH} = \\mathrm{p}K_a + \\lg\\frac{[\\mathrm{HF}]}{[\\mathrm{F^-}]}$ vì lượng $\\mathrm{HF}$ lớn hơn $\\mathrm{NaF}$."
      },
      {
        "id": "option-3",
        "label": "Bỏ qua $\\mathrm{NaF}$ và tính $[\\mathrm{H^+}] = \\sqrt{K_a \\cdot 0{,}32}$ như dung dịch $\\mathrm{HF}$ nguyên chất."
      },
      {
        "id": "option-4",
        "label": "Nhận dạng hệ đệm $\\mathrm{HF}/\\mathrm{F^-}$ không có phản ứng trung hòa: áp dụng $\\mathrm{pH} = \\mathrm{p}K_a + \\lg\\frac{[\\mathrm{F^-}]}{[\\mathrm{HF}]}$ và kiểm tra điều kiện gần đúng."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-022",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT06 C5: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "-  Tính pH của dung dịch hỗn hợp $\\mathrm{CH_{3}COOH}$ 0,1 M và $\\mathrm{CH_{3}COONa}$ 0,1 M.\n\n-  Thêm 0,001 mol $\\mathrm{Fe^{3+}}$ vào 1 L dung dịch trên. Hỏi có tạo thành kết tủa $\\mathrm{Fe(OH)_{3}}$ không? Biết axit axetic có p$K_a = 4{,}75$; tích số tan của $\\mathrm{Fe(OH)_{3}}$ là $T = 3{,}8\\times10^{-38}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $m_e = 9{,}11\\times10^{-31}$ kg; $h = 6{,}625\\times10^{-34}$ J.s; $e = 1{,}6\\times10^{-19}$ C; 1 eV = $1{,}6\\times10^{-19}$ J; 1 m = $10^9$ nm = $10^{10}$ Å; $c = 3\\times10^{8}$ m/s; $k_e = 9\\times10^{9}$ N.m$^2$/C$^2$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với dung dịch chứa $\\mathrm{CH_3COOH}$ $0{,}1\\text{ M}$ và $\\mathrm{CH_3COONa}$ $0{,}1\\text{ M}$ ($\\mathrm{p}K_a = 4{,}75$), cách làm đúng ở phần a là gì?",
    "explanation": "Hỗn hợp gồm axit yếu và bazơ liên hợp cùng nồng độ $0{,}1\\text{ M}$ là hệ đệm đẳng mol, có $\\lg(0{,}1/0{,}1) = 0$ nên $\\mathrm{pH} = \\mathrm{p}K_a = 4{,}75$.\n\n**Lời giải đầy đủ:**\n\n-  a) $[\\mathrm{CH_{3}COOH}] = [\\mathrm{CH_{3}COO^{-}}]$ nên $\\lg 1 = 0$: pH = p$K_a$ = 4,75. \n-  b) pOH $= 14 - 4{,}75 = 9{,}25$; $[\\mathrm{OH^{-}}] = 10^{-9{,}25} = 5{,}6\\times10^{-10}$ M. \n-  Tích ion: $Q = [\\mathrm{Fe^{3+}}][\\mathrm{OH^{-}}]^3 = 10^{-3} \\times (5{,}6\\times10^{-10})^3 = 1{,}8\\times10^{-31}$; so với $T = 3{,}8\\times10^{-38}$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT06 C5 (Hè 2013--2014, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhận dạng hệ đệm có $C_{\\mathrm{HA}} = C_{\\mathrm{A^-}} = 0{,}1\\text{ M}$ nên $\\mathrm{pH} = \\mathrm{p}K_a = 4{,}75$, rồi từ đó suy ra $\\mathrm{pOH}$ và $[\\mathrm{OH^-}]$ cho ý b."
      },
      {
        "id": "option-2",
        "label": "Lập phản ứng trung hòa giữa $\\mathrm{CH_3COOH}$ và $\\mathrm{CH_3COONa}$ để tìm lượng muối hoặc axit còn dư."
      },
      {
        "id": "option-3",
        "label": "Tính thủy phân muối $\\mathrm{CH_3COONa}$ bằng $K_b = K_w / K_a$ rồi cộng vào $\\mathrm{pH}$ của axit axetic."
      },
      {
        "id": "option-4",
        "label": "Cho rằng $\\mathrm{pH} = 7$ vì nồng độ axit và muối bằng nhau nên trung hòa nhau hoàn toàn."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-023",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT07 C6b: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Trộn 100 mL dung dịch HCOOH 0,1 M với 100 mL dung dịch NaOH 0,05 M được 200 mL dung dịch A. Hãy xác định pH của dung dịch A. Biết HCOOH ở cùng điều kiện có hằng số điện ly $K_a = 1{,}7\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trộn $100\\text{ mL}$ $\\mathrm{HCOOH}$ $0{,}1\\text{ M}$ với $100\\text{ mL}$ $\\mathrm{NaOH}$ $0{,}05\\text{ M}$: bước đầu tiên phải làm gì?",
    "explanation": "Kiềm mạnh $\\mathrm{NaOH}$ phản ứng hết với một phần axit yếu để tạo bazơ liên hợp $\\mathrm{HCOO^-}$; chỉ sau khi lập bảng mmol mới biết còn cả $\\mathrm{HCOOH}$ và $\\mathrm{HCOO^-}$ (đệm nửa tương đương).\n\n**Lời giải đầy đủ:**\n\n-  Đổi mmol: HCOOH $100 \\times 0{,}1 = 10$; NaOH $100 \\times 0{,}05 = 5$. \n-  $\\mathrm{HCOOH + OH^{-} \\rightarrow  HCOO^{-} + H_{2}O}$: còn 5 mmol axit, tạo 5 mmol muối. \n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Số mol bằng nhau: pH = p$K_a = -\\lg(1{,}7\\times10^{-4})$. \n-  Kiểm tra giả sử: $[\\mathrm{H^{+}}] = 0{,}00017$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}025$ M) khoảng 150 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C6b (HK1 2015--2016)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thay ngay $C_{\\mathrm{NaOH}} = 0{,}05\\text{ M}$ và $C_{\\mathrm{HCOOH}} = 0{,}1\\text{ M}$ vào công thức đệm mà không xét phản ứng."
      },
      {
        "id": "option-2",
        "label": "Lập bảng mmol trung hòa $\\mathrm{HCOOH + OH^- \\to HCOO^- + H_2O}$: còn $5\\text{ mmol}$ $\\mathrm{HCOOH}$ và tạo $5\\text{ mmol}$ $\\mathrm{HCOO^-}$, rồi mới dùng công thức đệm."
      },
      {
        "id": "option-3",
        "label": "Coi như điểm tương đương vì trộn hai thể tích bằng nhau ($100\\text{ mL}$ và $100\\text{ mL}$), rồi tính thủy phân $\\mathrm{HCOO^-}$."
      },
      {
        "id": "option-4",
        "label": "Trừ nồng độ được $0{,}05\\text{ M}$ axit dư và tính $[\\mathrm{H^+}] = 0{,}05\\text{ M}$ như axit mạnh."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-024",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT10 C6b: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Tính pH của dung dịch đệm điều chế bằng cách trộn 900 mL dung dịch HCOOH 0,5 M với 100 mL dung dịch NaOH 1,5 M biết hằng số điện li $K_{\\mathrm{HCOOH}} = 1{,}8\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trộn $900\\text{ mL}$ $\\mathrm{HCOOH}$ $0{,}5\\text{ M}$ với $100\\text{ mL}$ $\\mathrm{NaOH}$ $1{,}5\\text{ M}$: xác định đúng thành phần sau phản ứng?",
    "explanation": "Vì hai dung dịch có nồng độ và thể tích khác nhau, bắt buộc tính số mmol trước phản ứng ($450$ và $150\\text{ mmol}$), lập bảng phản ứng để lấy lượng $\\mathrm{HCOOH}/\\mathrm{HCOO^-}$ sau trung hòa.\n\n**Lời giải đầy đủ:**\n\n-  HCOOH: $900 \\times 0{,}5 = 450$ mmol; NaOH: $100 \\times 1{,}5 = 150$ mmol. \n-  Sau phản ứng: axit 300 mmol, muối 150 mmol. \n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  pH $= -\\lg(1{,}8\\times10^{-4}) + \\lg\\dfrac{150}{300} = 3{,}745 - 0{,}301$. \n-  Kiểm tra giả sử: $[\\mathrm{H^{+}}] = 0{,}00036$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}15$ M) khoảng 410 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C6b (HK1 2016--2017)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Thế tỉ số thể tích $\\lg(100/900)$ vào công thức đệm thay cho tỉ số số mmol sau phản ứng."
      },
      {
        "id": "option-2",
        "label": "Thay trực tiếp tỉ số nồng độ đầu $\\lg(1{,}5/0{,}5)$ vào công thức Henderson–Hasselbalch."
      },
      {
        "id": "option-3",
        "label": "Tính thủy phân muối $\\mathrm{HCOONa}$ với $K_b = K_w / K_a$ vì $\\mathrm{NaOH}$ đã tạo ra muối trong dung dịch."
      },
      {
        "id": "option-4",
        "label": "Đổi mmol ($450\\text{ mmol}$ axit, $150\\text{ mmol}$ kiềm), trừ trung hòa còn $300\\text{ mmol}$ $\\mathrm{HCOOH}$ và $150\\text{ mmol}$ $\\mathrm{HCOO^-}$, rồi dùng công thức đệm."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-025",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT11 C6b: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Trộn 100 mL dung dịch $\\mathrm{CH_{3}COOH}$ 0,1 M với 100 mL dung dịch KOH 0,05 M được 200 mL dung dịch A. Xác định pH của dung dịch A. Biết $\\mathrm{CH_{3}COOH}$ ở cùng điều kiện có hằng số điện ly $K_a = 1{,}7\\times10^{-4}$.\n\n\n\n\n**Lưu ý đề bài:** $K_a = 1{,}7\\times10^{-4}$ thực tế là hằng số của HCOOH, không phải của $\\mathrm{CH_{3}COOH}$ ($1{,}8\\times10^{-5}$). Khi làm bài, tính theo đúng số liệu $K_a$ mà đề bài đã cho và có thể ghi chú thêm.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trộn $100\\text{ mL}$ $\\mathrm{CH_3COOH}$ $0{,}1\\text{ M}$ với $100\\text{ mL}$ $\\mathrm{KOH}$ $0{,}05\\text{ M}$: quy trình nào đúng?",
    "explanation": "$\\mathrm{KOH}$ trung hòa một nửa lượng $\\mathrm{CH_3COOH}$ ($5$ trên $10\\text{ mmol}$), tạo đúng điểm nửa tương đương nên $n_{\\mathrm{HA}} = n_{\\mathrm{A^-}}$ và $\\mathrm{pH} = \\mathrm{p}K_a$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{CH_{3}COOH}$: 10 mmol; KOH: 5 mmol $\\Rightarrow$ còn 5 mmol axit, 5 mmol muối. \n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  pH = p$K_a = -\\lg(1{,}7\\times10^{-4})$ (theo $K_a$ đề cho). \n-  Kiểm tra giả sử: $[\\mathrm{H^{+}}] = 0{,}00017$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}025$ M) khoảng 150 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C6b (HK2 2016--2017)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bỏ qua trung hòa, thay $0{,}05/0{,}1$ vào công thức đệm với $\\mathrm{KOH}$ đóng vai trò bazơ liên hợp."
      },
      {
        "id": "option-2",
        "label": "Vì $\\mathrm{KOH}$ là kiềm mạnh nên dung dịch sau trộn luôn có $\\mathrm{pH} > 7$, tính theo $[\\mathrm{OH^-}]$ dư."
      },
      {
        "id": "option-3",
        "label": "Lập bảng mmol ($\\mathrm{CH_3COOH}$ $10\\text{ mmol}$, $\\mathrm{KOH}$ $5\\text{ mmol}$), xác định còn $5\\text{ mmol}$ axit và $5\\text{ mmol}$ muối liên hợp để tính $\\mathrm{pH} = \\mathrm{p}K_a$."
      },
      {
        "id": "option-4",
        "label": "Cộng hai thể tích được $200\\text{ mL}$ rồi dùng $[\\mathrm{H^+}] = \\sqrt{K_a \\cdot 0{,}05}$ như axit yếu bị pha loãng."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-026",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT16 C6: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Biết hằng số bazơ của $\\mathrm{NH_{3}}$ là $1{,}75\\times10^{-5}$.\n\n\n\n-  Tính pH dung dịch $\\mathrm{NH_{3}}$ 2,0 M và pH của dung dịch $\\mathrm{NH_{4}Cl}$ 2,0 M.\n\n-  Trộn 10 mL dung dịch $\\mathrm{NH_{3}}$ 2,0 M vào 10 mL dung dịch $\\mathrm{NH_{4}Cl}$ 2,0 M ta thu được 20 mL dung dịch đệm có pH bằng bao nhiêu?\n\n-  Trộn 20 mL dung dịch $\\mathrm{MgCl_{2}}$ 0,02 M với 20 mL dung dịch đệm ở trên. Hỏi có kết tủa $\\mathrm{Mg(OH)_{2}}$ không, biết rằng tích số tan của $\\mathrm{Mg(OH)_{2}}$ là $5\\times10^{-12}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Bài gồm tính pH $\\mathrm{NH_3}$, $\\mathrm{NH_4Cl}$ riêng, trộn đệm rồi thêm $\\mathrm{MgCl_2}$: chiến lược nào đúng?",
    "explanation": "Tách đúng ba phần: $\\mathrm{NH_4Cl}$ là muối axit dùng $K_a = K_w/K_b$; khi trộn $10 + 10\\text{ mL}$ $\\mathrm{NH_3}/\\mathrm{NH_4Cl}$ tạo đệm bazơ; khi trộn tiếp $20 + 20\\text{ mL}$ $\\mathrm{MgCl_2}$ phải chia đôi nồng độ $\\mathrm{Mg^{2+}}$ còn $[\\mathrm{OH^-}]$ giữ theo tỉ lệ đệm.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\mathrm{NH_{3}}$ 2,0 M: $x = \\sqrt{K_bC} = \\sqrt{1{,}75\\times10^{-5} \\times 2} = 5{,}9\\times10^{-3}$ M $[\\mathrm{OH^{-}}]$; pH $= 14 + \\lg x$. \n-  $\\mathrm{NH_{4}Cl}$ 2,0 M: $\\mathrm{NH_{4}^{+}}$ là axit với $K_a = \\dfrac{10^{-14}}{1{,}75\\times10^{-5}} = 5{,}7\\times10^{-10}$; $[\\mathrm{H^{+}}] = \\sqrt{K_aC} = 3{,}4\\times10^{-5}$ M. \n-  b) Trộn thể tích bằng nhau: mỗi chất 1,0 M nên pOH = p$K_b = 4{,}757$; pH $= 14 - 4{,}757$. \n-  c) Trộn 20 mL + 20 mL: $[\\mathrm{Mg^{2+}}] = 0{,}01$ M; đệm loãng ra nhưng tỉ lệ giữ nguyên nên $[\\mathrm{OH^{-}}] = K_b = 1{,}75\\times10^{-5}$ M. \n-  $Q = [\\mathrm{Mg^{2+}}][\\mathrm{OH^{-}}]^2 = 0{,}01 \\times (1{,}75\\times10^{-5})^2 = 3{,}1\\times10^{-12}$; so với $T = 5\\times10^{-12}$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C6 (Đề tổng hợp 6, 2 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ý a giải cân bằng riêng ($K_b$ cho $\\mathrm{NH_3}$, $K_a = K_w/K_b$ cho $\\mathrm{NH_4^+}$); ý b dùng đệm $\\mathrm{NH_3}/\\mathrm{NH_4^+}$; ý c tính $[\\mathrm{Mg^{2+}}]$ sau trộn $40\\text{ mL}$ rồi so $Q$ với $K_{sp}$."
      },
      {
        "id": "option-2",
        "label": "Ở ý a tính $\\mathrm{NH_4Cl}$ bằng chính $K_b(\\mathrm{NH_3})$ mà không cần đổi sang $K_a = K_w / K_b$."
      },
      {
        "id": "option-3",
        "label": "Ở ý c giữ nguyên nồng độ $\\mathrm{MgCl_2}$ $0{,}02\\text{ M}$ trước trộn để tính $Q = 0{,}02 \\times [\\mathrm{OH^-}]^2$."
      },
      {
        "id": "option-4",
        "label": "Ở ý b lập bảng phản ứng trung hòa giữa $\\mathrm{NH_3}$ và $\\mathrm{NH_4Cl}$ khiến hai chất triệt tiêu lẫn nhau."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-027",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT28 C6b: Tính pH dung dịch đệm (pha sẵn hoặc trộn axit với kiềm)",
    "prompt": "Một dung dịch đệm được điều chế bằng cách trộn 500 mL dung dịch $\\mathrm{CH_{3}COOH}$ 0,40 M với 100 mL dung dịch NaOH 1,00 M. Tính pH của dung dịch đệm. ($K_{\\mathrm{CH_{3}COOH}} = 1{,}8\\times10^{-5}$.)\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trộn $500\\text{ mL}$ $\\mathrm{CH_3COOH}$ $0{,}40\\text{ M}$ với $100\\text{ mL}$ $\\mathrm{NaOH}$ $1{,}00\\text{ M}$: bước nào đúng?",
    "explanation": "Nồng độ $\\mathrm{NaOH}$ lớn hơn nhưng thể tích nhỏ hơn ($100\\text{ mL}$ so với $500\\text{ mL}$), nên số mmol $\\mathrm{NaOH}$ ($100$) chỉ bằng một nửa $\\mathrm{CH_3COOH}$ ($200$): sau trung hòa thu được hệ đệm đẳng mol.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{CH_{3}COOH}$: $500 \\times 0{,}40 = 200$ mmol; NaOH: $100 \\times 1{,}00 = 100$ mmol. \n-  Sau phản ứng: 100 mmol axit, 100 mmol $\\mathrm{CH_{3}COO^{-}}$. \n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  pH $= -\\lg(1{,}8\\times10^{-5}) + \\lg 1$. \n-  Kiểm tra giả sử: $[\\mathrm{H^{+}}] = 1{,}8\\times10^{-5}$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}17$ M) khoảng 9160 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C6b (Hè 2025--2026)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy tỉ số nồng độ đầu $1{,}00 / 0{,}40$ thay thẳng vào công thức đệm mà không tính số mmol trung hòa."
      },
      {
        "id": "option-2",
        "label": "Tính mmol ($200\\text{ mmol}$ axit, $100\\text{ mmol}$ $\\mathrm{NaOH}$), lập bảng phản ứng còn $100\\text{ mmol}$ $\\mathrm{CH_3COOH}$ và $100\\text{ mmol}$ $\\mathrm{CH_3COO^-}$, rồi tính $\\mathrm{pH} = \\mathrm{p}K_a$."
      },
      {
        "id": "option-3",
        "label": "Chia cho tổng thể tích $600\\text{ mL}$ trước rồi dùng công thức thủy phân muối $\\mathrm{CH_3COONa}$."
      },
      {
        "id": "option-4",
        "label": "Tính $[\\mathrm{OH^-}]$ dư từ $100\\text{ mL}$ $\\mathrm{NaOH}$ $1{,}00\\text{ M}$ vì nồng độ $\\mathrm{NaOH}$ lớn hơn nồng độ axit."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-028",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT05 C6b: Pha dung dịch đệm có pH cho trước",
    "prompt": "(Axit HCOOH 0,10 M, $K_a = 1{,}77\\times10^{-4}$.) Tính thể tích của dung dịch NaOH 0,05 M cần thêm vào 500 mL của dung dịch axit trên để thu được dung dịch đệm có pH = 4,00.\n\nDữ kiện chung in kèm đề (Phụ lục A): $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính thể tích $\\mathrm{NaOH}$ $0{,}05\\text{ M}$ cần thêm vào $500\\text{ mL}$ $\\mathrm{HCOOH}$ $0{,}10\\text{ M}$ cho $\\mathrm{pH} = 4{,}00$, cách thiết lập đúng là gì?",
    "explanation": "$\\mathrm{NaOH}$ thêm vào chuyển $y\\text{ mmol}$ axit thành $y\\text{ mmol}$ muối $\\mathrm{HCOO^-}$, làm lượng $\\mathrm{HCOOH}$ giảm còn $50 - y$; do đó tỉ số đệm sau phản ứng là $\\frac{y}{50 - y}$.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Có 50 mmol HCOOH; thêm $y$ mmol NaOH tạo $y$ mmol $\\mathrm{HCOO^{-}}$, còn $50 - y$ axit. \n-  Biến đổi: $\\dfrac{y}{50 - y} = 10^{4{,}00 - 3{,}752} = 1{,}77 \\Rightarrow y = \\dfrac{50 \\times 1{,}77}{2{,}77} = 31{,}9$ mmol. \n-  Thể tích NaOH: $V = \\dfrac{n}{C} = \\dfrac{31{,}9}{0{,}05}$ mL.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C6b (HK2 2013--2014)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt trực tiếp $\\frac{n_{\\mathrm{NaOH}}}{50} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, quên rằng $\\mathrm{NaOH}$ tiêu thụ $\\mathrm{HCOOH}$ để tạo $\\mathrm{HCOO^-}$."
      },
      {
        "id": "option-2",
        "label": "Lấy tỉ số thể tích $\\frac{V_{\\mathrm{NaOH}}}{500} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, bỏ qua nồng độ khác nhau $0{,}05\\text{ M}$ và $0{,}10\\text{ M}$."
      },
      {
        "id": "option-3",
        "label": "Đặt $y$ là mmol $\\mathrm{NaOH}$ thêm vào; sau phản ứng tạo $y\\text{ mmol}$ $\\mathrm{HCOO^-}$ và còn $(50 - y)\\text{ mmol}$ $\\mathrm{HCOOH}$, giải $\\frac{y}{50-y} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$."
      },
      {
        "id": "option-4",
        "label": "Lập phương trình điểm tương đương $0{,}05 V_{\\mathrm{NaOH}} = 500 \\times 0{,}10$ rồi suy ra thể tích $\\mathrm{NaOH}$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-029",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT09 C6b: Pha dung dịch đệm có pH cho trước",
    "prompt": "($\\mathrm{CH_{3}COOH}$, $K_a$ như ý a.) Cần trộn bao nhiêu mL dung dịch $\\mathrm{CH_{3}COOH}$ 0,2 M với bao nhiêu mL dung dịch $\\mathrm{CH_{3}COONa}$ 0,3 M để thu được 1 L dung dịch có pH = 5,2.\n\nDữ kiện ý a dùng lại: $K_a = 4{,}8\\times10^{-5}$ (giá trị chuẩn thường gặp của axit axetic là $1{,}8\\times10^{-5}$; tính theo đúng số liệu đề bài cho).\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J; $T$(K) = $t$(°C) + 273.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Pha $1\\text{ L}$ đệm $\\mathrm{pH} = 5{,}2$ từ $\\mathrm{CH_3COOH}$ $0{,}2\\text{ M}$ và $\\mathrm{CH_3COONa}$ $0{,}3\\text{ M}$: hệ phương trình đúng là gì?",
    "explanation": "Công thức Henderson–Hasselbalch dùng tỉ số số mol $n_{\\mathrm{A^-}}/n_{\\mathrm{HA}} = (C_b V_b)/(C_a V_a)$, không được dùng tỉ số thể tích $V_b/V_a$ khi $C_a \\ne C_b$.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Biến đổi: $\\dfrac{n_{\\mathrm{A^{-}}}}{n_{\\mathrm{HA}}} = 10^{\\text{pH} - \\text{p}K_a} = 10^{5{,}2 - 4{,}319} = 7{,}607$. \n-  Gọi $V_a$, $V_b$ (L): $\\dfrac{0{,}3V_b}{0{,}2V_a} = 7{,}607$ và $V_a + V_b = 1$. \n-  Thế $V_b = 1 - V_a$: $V_a = \\dfrac{1}{1 + 7{,}607 \\times 0{,}2/0{,}3} = 0{,}165$ L.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C6b (HK2 2015--2016)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy thẳng tỉ số thể tích $\\frac{V_b}{V_a} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, bỏ qua hai nồng độ $0{,}2\\text{ M}$ và $0{,}3\\text{ M}$."
      },
      {
        "id": "option-2",
        "label": "Đảo ngược công thức đệm thành $\\frac{0{,}2 V_a}{0{,}3 V_b} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$."
      },
      {
        "id": "option-3",
        "label": "Viết bảng phản ứng trung hòa giữa $\\mathrm{CH_3COOH}$ và $\\mathrm{CH_3COONa}$ trước khi dùng công thức đệm."
      },
      {
        "id": "option-4",
        "label": "Tìm tỉ số mol $r = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, rồi giải hệ $\\frac{0{,}3 V_b}{0{,}2 V_a} = r$ và $V_a + V_b = 1000\\text{ mL}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-030",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT12 C6c: Pha dung dịch đệm có pH cho trước",
    "prompt": "Tính thể tích $\\mathrm{HNO_{2}}$ 0,60 M và thể tích $\\mathrm{NaNO_{2}}$ 0,45 M cần thiết để trộn vào nhau thu được 1,0 L dung dịch đệm có pH = 3,574 ở 25 °C, biết hằng số điện li $K_{\\mathrm{HNO_{2}}} = 4{,}0\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Pha $1{,}0\\text{ L}$ đệm $\\mathrm{pH} = 3{,}574$ từ $\\mathrm{HNO_2}$ $0{,}60\\text{ M}$ và $\\mathrm{NaNO_2}$ $0{,}45\\text{ M}$: bước thiết lập nào đúng?",
    "explanation": "$\\mathrm{HNO_2}$ và $\\mathrm{NaNO_2}$ có nồng độ khác nhau ($0{,}60\\text{ M}$ và $0{,}45\\text{ M}$) nên phải giữ nguyên $C_b V_b$ ở tử số và $C_a V_a$ ở mẫu số.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Biến đổi: $\\dfrac{n_{\\mathrm{A^{-}}}}{n_{\\mathrm{HA}}} = 10^{\\text{pH} - \\text{p}K_a} = 10^{3{,}574 - 3{,}398} = 1{,}5$. \n-  Gọi $V_a$, $V_b$ (L): $\\dfrac{0{,}45V_b}{0{,}6V_a} = 1{,}5$ và $V_a + V_b = 1$. \n-  Thế $V_b = 1 - V_a$: $V_a = \\dfrac{1}{1 + 1{,}5 \\times 0{,}6/0{,}45} = 0{,}333$ L.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C6c (HK1 2017--2018)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Xác định $r = \\frac{n_{\\mathrm{NO_2^-}}}{n_{\\mathrm{HNO_2}}} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, kết hợp $\\frac{0{,}45 V_b}{0{,}60 V_a} = r$ và $V_a + V_b = 1{,}0\\text{ L}$."
      },
      {
        "id": "option-2",
        "label": "Đặt $\\frac{V_b}{V_a} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$ vì hai dung dịch cùng pha vào $1{,}0\\text{ L}$ nên không cần nhân nồng độ."
      },
      {
        "id": "option-3",
        "label": "Đặt $\\frac{0{,}60 V_a}{0{,}45 V_b} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$ (đặt axit ở tử số và muối ở mẫu số)."
      },
      {
        "id": "option-4",
        "label": "Đổi $\\mathrm{pOH} = 14 - 3{,}574$ rồi thay vào công thức đệm bazơ với $K_a$ ban đầu."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-031",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT15 C5c: Pha dung dịch đệm có pH cho trước",
    "prompt": "($K_a$ của $\\mathrm{HNO_{2}}$ là $4{,}0\\times10^{-4}$.) Cần trộn bao nhiêu mL dung dịch $\\mathrm{HNO_{2}}$ ở trên và bao nhiêu mL dung dịch $\\mathrm{NaNO_{2}}$ trên để được 1,0 L dung dịch đệm có pH = 3,55.\n\nHai dung dịch ở ý trước đều có nồng độ 0,50 M.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trộn $\\mathrm{HNO_2}$ $0{,}50\\text{ M}$ và $\\mathrm{NaNO_2}$ $0{,}50\\text{ M}$ được $1{,}0\\text{ L}$ đệm $\\mathrm{pH} = 3{,}55$: cách giải đúng là gì?",
    "explanation": "Vì $\\mathrm{pH} = 3{,}55 > \\mathrm{p}K_a = 3{,}398$, tỉ số muối/axit phải lớn hơn $1$ ($r \\approx 1{,}42$) chứ không phải trộn $1:1$; khi $C_a = C_b = 0{,}50\\text{ M}$ thì $V_b / V_a = r$.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Biến đổi: $\\dfrac{n_{\\mathrm{A^{-}}}}{n_{\\mathrm{HA}}} = 10^{\\text{pH} - \\text{p}K_a} = 10^{3{,}55 - 3{,}398} = 1{,}419$. \n-  Gọi $V_a$, $V_b$ (L): $\\dfrac{0{,}5V_b}{0{,}5V_a} = 1{,}419$ và $V_a + V_b = 1$. \n-  Thế $V_b = 1 - V_a$: $V_a = \\dfrac{1}{1 + 1{,}419 \\times 0{,}5/0{,}5} = 0{,}413$ L.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C5c (Đề tổng hợp 5)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chia đều $V_a = V_b = 500\\text{ mL}$ vì nồng độ hai dung dịch ban đầu bằng nhau ($0{,}50\\text{ M}$)."
      },
      {
        "id": "option-2",
        "label": "Tính tỉ số mol $r = \\frac{n_{\\mathrm{NO_2^-}}}{n_{\\mathrm{HNO_2}}} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, sau đó giải $\\frac{0{,}50 V_b}{0{,}50 V_a} = r$ cùng $V_a + V_b = 1000\\text{ mL}$."
      },
      {
        "id": "option-3",
        "label": "Dùng $r = 10^{\\mathrm{p}K_a - \\mathrm{pH}}$ khiến lượng axit tính ra lớn hơn lượng muối dù $\\mathrm{pH} > \\mathrm{p}K_a$."
      },
      {
        "id": "option-4",
        "label": "Giải phương trình bậc hai với $x = [\\mathrm{H^+}]$ cho riêng $\\mathrm{HNO_2}$ rồi trừ ra thể tích $V_b$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-032",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT23 C6b: Pha dung dịch đệm có pH cho trước",
    "prompt": "($K_a$ của HCOOH là $5\\times10^{-4}$.) Cần trộn bao nhiêu mL dung dịch HCOOH 0,2 M với bao nhiêu mL dung dịch HCOONa 0,3 M để thu được 1 L dung dịch có pH = 4,2.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R_H = 109722$ cm$^{-1}$; 1 eV = $1{,}602\\times10^{-19}$ J; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; có in bảng tuần hoàn.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để pha $1\\text{ L}$ đệm $\\mathrm{pH} = 4{,}2$ từ $\\mathrm{HCOOH}$ $0{,}2\\text{ M}$ và $\\mathrm{HCOONa}$ $0{,}3\\text{ M}$, thiết lập nào đúng?",
    "explanation": "Với $\\mathrm{pH} = 4{,}2 > \\mathrm{p}K_a = 3{,}301$, muối $\\mathrm{HCOO^-}$ phải nhiều hơn axit ($r \\approx 7{,}92$); giải đúng hệ $0{,}3 V_b / (0{,}2 V_a) = r$ và $V_a + V_b = 1000\\text{ mL}$.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Biến đổi: $\\dfrac{n_{\\mathrm{A^{-}}}}{n_{\\mathrm{HA}}} = 10^{\\text{pH} - \\text{p}K_a} = 10^{4{,}2 - 3{,}301} = 7{,}924$. \n-  Gọi $V_a$, $V_b$ (L): $\\dfrac{0{,}3V_b}{0{,}2V_a} = 7{,}924$ và $V_a + V_b = 1$. \n-  Thế $V_b = 1 - V_a$: $V_a = \\dfrac{1}{1 + 7{,}924 \\times 0{,}2/0{,}3} = 0{,}159$ L.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C6b (HK1 2022--2023 Ca 2, Đề tổng hợp 13)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính tỉ số $r = \\frac{n_{\\mathrm{HCOO^-}}}{n_{\\mathrm{HCOOH}}} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, rồi giải hệ $\\frac{0{,}3 V_b}{0{,}2 V_a} = r$ với $V_a + V_b = 1000\\text{ mL}$."
      },
      {
        "id": "option-2",
        "label": "Thay trực tiếp tỉ lệ thể tích $V_b/V_a = 10^{\\mathrm{pH}-\\mathrm{p}K_a}$ và bỏ qua nồng độ $0{,}2\\text{ M}, 0{,}3\\text{ M}$."
      },
      {
        "id": "option-3",
        "label": "Đảo ngược tỉ số thành $\\frac{0{,}2 V_a}{0{,}3 V_b} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$ nên thể tích axit lớn hơn muối."
      },
      {
        "id": "option-4",
        "label": "Tính thủy phân của $\\mathrm{HCOO^-}$ với $K_b = K_w / K_a$ để suy ra thể tích dung dịch muối."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-033",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT24 C6c: Pha dung dịch đệm có pH cho trước",
    "prompt": "Hãy tính thể tích dung dịch $\\mathrm{HNO_{2}}$ 0,25 M và thể tích dung dịch $\\mathrm{NaNO_{2}}$ 0,5 M cần thiết trộn vào nhau thu được 1,0 L dung dịch đệm có pH = 3,875 ở 25 °C, biết hằng số điện li $K_{\\mathrm{HNO_{2}}} = 4{,}0\\times10^{-4}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3{,}0\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; $F = 96\\,500$ C/mol; 1 m = $10^9$ nm; 1 eV = $1{,}602\\times10^{-19}$ J; $N_A = 6{,}023\\times10^{23}$; có in bảng tuần hoàn.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Cần trộn $\\mathrm{HNO_2}$ $0{,}25\\text{ M}$ và $\\mathrm{NaNO_2}$ $0{,}5\\text{ M}$ để được $1{,}0\\text{ L}$ đệm $\\mathrm{pH} = 3{,}875$: cách tính đúng là gì?",
    "explanation": "Thay đúng số mol từng cấu tử ($n_{\\mathrm{NO_2^-}} = 0{,}5 V_b$ và $n_{\\mathrm{HNO_2}} = 0{,}25 V_a$) vào tỉ số $10^{\\mathrm{pH} - \\mathrm{p}K_a}$ cùng ràng buộc tổng thể tích $1{,}0\\text{ L}$.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  Biến đổi: $\\dfrac{n_{\\mathrm{A^{-}}}}{n_{\\mathrm{HA}}} = 10^{\\text{pH} - \\text{p}K_a} = 10^{3{,}875 - 3{,}398} = 3$. \n-  Gọi $V_a$, $V_b$ (L): $\\dfrac{0{,}5V_b}{0{,}25V_a} = 3$ và $V_a + V_b = 1$. \n-  Thế $V_b = 1 - V_a$: $V_a = \\dfrac{1}{1 + 3 \\times 0{,}25/0{,}5} = 0{,}4$ L.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C6c (HK1 2019--2020)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cộng hai nồng độ $0{,}25 + 0{,}5 = 0{,}75\\text{ M}$ rồi chia đều thể tích cho $1000\\text{ mL}$."
      },
      {
        "id": "option-2",
        "label": "Bỏ qua hệ số nồng độ $0{,}5$ và $0{,}25$, đặt $\\frac{V_b}{V_a} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$."
      },
      {
        "id": "option-3",
        "label": "Viết phương trình $\\mathrm{HNO_2}$ phản ứng với $\\mathrm{NaNO_2}$ theo tỉ lệ $1:1$ rồi lấy chất dư."
      },
      {
        "id": "option-4",
        "label": "Tính tỉ số $\\frac{n_{\\mathrm{NO_2^-}}}{n_{\\mathrm{HNO_2}}} = 10^{\\mathrm{pH} - \\mathrm{p}K_a}$, rồi giải $\\frac{0{,}5 V_b}{0{,}25 V_a} = r$ kết hợp $V_a + V_b = 1000\\text{ mL}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-034",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT14 C6c: Thêm axit hoặc bazơ mạnh vào dung dịch đệm",
    "prompt": "Một hệ dung dịch đệm được điều chế bằng cách trộn 45,0 mL dung dịch axit yếu $\\mathrm{C_{2}H_{5}COOH}$ 0,6 M với 55,0 mL dung dịch muối $\\mathrm{C_{2}H_{5}COONa}$ 0,2 M. Hãy xác định khối lượng NaOH tinh khiết cần thiết cho vào hệ đệm trên để pH dung dịch tăng lên 2% (giả thiết chất rắn thêm vào không làm thay đổi thể tích), biết hằng số điện ly của axit yếu $\\mathrm{C_{2}H_{5}COOH}$ là $K_a = 1{,}3\\times10^{-5}$.\n\n\n\n\n**Lưu ý:** “pH tăng lên 2%” được hiểu là pH mới $= 1{,}02 \\times$ pH ban đầu.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Thêm $\\mathrm{NaOH}$ rắn vào đệm $\\mathrm{C_2H_5COOH}/\\mathrm{C_2H_5COONa}$ làm pH tăng $2\\%$: cách lập mô hình đúng là gì?",
    "explanation": "pH tăng $2\\%$ nghĩa là $\\mathrm{pH}_{\\text{mới}} = 1{,}02\\,\\mathrm{pH}_0$; đồng thời $\\mathrm{OH^-}$ chuyển $y\\text{ mmol}$ axit thành muối nên $n_{\\mathrm{A^-}}$ tăng thêm $y$ và $n_{\\mathrm{HA}}$ giảm đi $y$.\n\n**Lời giải đầy đủ:**\n\n-  mmol: axit $45 \\times 0{,}6 = 27$; muối $55 \\times 0{,}2 = 11$; p$K_a = 4{,}886$. \n-  pH$_0 = 4{,}886 + \\lg\\dfrac{11}{27} = 4{,}496$; pH mới $= 1{,}02 \\times 4{,}496 = 4{,}586$. \n-  Thêm $y$ mmol NaOH: muối $11 + y$, axit $27 - y$; biến đổi $\\dfrac{11 + y}{27 - y} = 10^{4{,}586 - 4{,}886} = 0{,}501 \\Rightarrow y = \\dfrac{27 \\times 0{,}501 - 11}{1{,}501} = 1{,}69$ mmol. \n-  Khối lượng: $m = 1{,}69 \\times 10^{-3} \\times 40$ g.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C6c (Đề tổng hợp 3)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cộng thêm $0{,}02$ vào $\\mathrm{pH}_0$ ($\\mathrm{pH}_{\\text{mới}} = \\mathrm{pH}_0 + 0{,}02$) và chỉ tăng tử số thành $(11 + y)/27$."
      },
      {
        "id": "option-2",
        "label": "Tính $\\mathrm{pH}_0$, hiểu pH mới $= 1{,}02 \\times \\mathrm{pH}_0$; đặt $y\\text{ mmol}$ $\\mathrm{NaOH}$ phản ứng với $\\mathrm{C_2H_5COOH}$ tạo $\\mathrm{C_2H_5COO^-}$ nên tỉ số mới là $\\frac{11+y}{27-y}$."
      },
      {
        "id": "option-3",
        "label": "Cộng thẳng $y\\text{ mmol}$ $\\mathrm{OH^-}$ vào công thức $\\mathrm{pOH} = -\\lg[\\mathrm{OH^-}]$ mà không qua cân bằng đệm."
      },
      {
        "id": "option-4",
        "label": "Trừ $y$ ở cả muối và axit vì $\\mathrm{NaOH}$ phản ứng đồng thời với cả hai cấu tử của hệ đệm."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-035",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT17 C6b: Thêm axit hoặc bazơ mạnh vào dung dịch đệm",
    "prompt": "Cho 50 mL dung dịch chứa 12,5 mmol HCN và 7,25 mmol KCN, $K_a(\\mathrm{HCN}) = 5{,}8\\times10^{-10}$. Hãy tính pH của dung dịch trên. Nếu thêm 2 mL dung dịch HCl 0,6 M vào dung dịch trên thì giá trị pH thu được là bao nhiêu?\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi thêm $2\\text{ mL}$ $\\mathrm{HCl}$ $0{,}6\\text{ M}$ ($1{,}2\\text{ mmol}$) vào hệ đệm $\\mathrm{HCN}/\\mathrm{CN^-}$, phản ứng và công thức nào đúng?",
    "explanation": "Thành phần bazơ của đệm ($\\mathrm{CN^-}$) trung hòa axit mạnh thêm vào theo $\\mathrm{CN^- + H^+ \\to HCN}$, làm giảm $\\mathrm{CN^-}$ và tăng $\\mathrm{HCN}$ một lượng đúng bằng $1{,}2\\text{ mmol}$.\n\n**Lời giải đầy đủ:**\n\n-  Henderson–Hasselbalch: từ $K_a = \\dfrac{[\\mathrm{H^{+}}][\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ lấy $-\\lg$ hai vế được pH $= \\text{p}K_a + \\lg\\dfrac{[\\mathrm{A^{-}}]}{[\\mathrm{HA}]}$ (dùng số mol cũng được vì cùng thể tích). \n-  p$K_a = -\\lg(5{,}8\\times10^{-10}) = 9{,}24$; pH $= 9{,}24 + \\lg\\dfrac{7{,}25}{12{,}5} = 9{,}24 - 0{,}24 = 9{,}00$. \n-  Thêm HCl $2 \\times 0{,}6 = 1{,}2$ mmol: $\\mathrm{CN^{-} + H^{+} \\rightarrow  HCN}$: $\\mathrm{CN^{-}}$ còn 6,05; HCN thành 13,7 mmol. \n-  pH $= 9{,}24 + \\lg\\dfrac{6{,}05}{13{,}7}$. \n-  Kiểm tra giả sử: $[\\mathrm{OH^{-}}] = 1\\times10^{-5}$ M, nhỏ hơn nồng độ axit và bazơ liên hợp (nhỏ nhất $0{,}14$ M) khoảng 14500 lần: giả sử đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C6b (Đề tổng hợp 7)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Bỏ qua phản ứng với $\\mathrm{CN^-}$ và tính thẳng $\\mathrm{pH} = -\\lg(1{,}2/52)$ từ $\\mathrm{HCl}$ dư."
      },
      {
        "id": "option-2",
        "label": "Cho $\\mathrm{H^+}$ phản ứng với $\\mathrm{HCN}$ làm giảm số mmol $\\mathrm{HCN}$ và tăng số mmol $\\mathrm{CN^-}$."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{H^+}$ phản ứng với $\\mathrm{CN^-}$ tạo thêm $\\mathrm{HCN}$ ($n_{\\mathrm{CN^-}}$ giảm $1{,}2$, $n_{\\mathrm{HCN}}$ tăng $1{,}2\\text{ mmol}$), rồi áp dụng lại $\\mathrm{pH} = \\mathrm{p}K_a + \\lg\\frac{n_{\\mathrm{CN^-}}}{n_{\\mathrm{HCN}}}$."
      },
      {
        "id": "option-4",
        "label": "Cộng nguyên $1{,}2\\text{ mmol}$ vào $\\mathrm{HCN}$ mà giữ nguyên $n_{\\mathrm{CN^-}} = 7{,}25\\text{ mmol}$ không đổi."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-036",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT26 C6b: Thêm axit hoặc bazơ mạnh vào dung dịch đệm",
    "prompt": "Cho 50 mL dung dịch chứa 12,5 mmol $\\mathrm{HClO_{2}}$ và 7,25 mmol $\\mathrm{KClO_{2}}$, $K_a(\\mathrm{HClO_{2}}) = 1{,}1\\times10^{-2}$.\n\n\n\n-  Hãy tính pH của dung dịch đệm tạo thành.\n\n-  Nếu thêm 2 mL dung dịch HCl 0,6 M vào dung dịch trên thì giá trị pH thu được là bao nhiêu?\n\n\n\n\n**Lưu ý phương pháp:** Vì $K_a$ của $\\mathrm{HClO_{2}}$ khá lớn nên $[\\mathrm{H_{3}O^{+}}]$ không còn nhỏ so với nồng độ axit; cần giải phương trình bậc hai đầy đủ thay vì dùng công thức gần đúng Henderson–Hasselbalch.\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J; $R_H = 109678$ cm$^{-1}$; $F = 96\\,500$ C/mol; $T$(K) = 273 + $t$(°C).\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Hệ đệm $\\mathrm{HClO_2}/\\mathrm{KClO_2}$ có $K_a = 1{,}1\\times 10^{-2}$ (và có thêm $2\\text{ mL}$ $\\mathrm{HCl}$): điểm quyết định để tính đúng là gì?",
    "explanation": "Khi $K_a$ lớn ($1{,}1\\times 10^{-2}$), $[\\mathrm{H_3O^+}]$ cùng cỡ với $C_b$ nên Henderson–Hasselbalch sai số lớn; bắt buộc giải phương trình bậc hai bằng nồng độ thực sau pha loãng ($50$ và $52\\text{ mL}$).\n\n**Lời giải đầy đủ:**\n\n-  Nồng độ trong 50 mL: $C_a = 12{,}5/50 = 0{,}25$ M; $C_b = 7{,}25/50 = 0{,}145$ M. $K_a = 1{,}1\\times10^{-2}$ lớn nên không dùng Henderson–Hasselbalch. \n-  Đặt $x = [\\mathrm{H_{3}O^{+}}]$: $\\dfrac{x(C_b + x)}{C_a - x} = K_a \\Rightarrow x^2 + (C_b + K_a)x - K_aC_a = 0$. \n-  $x^2 + 0{,}156x - 2{,}75\\times10^{-3} = 0 \\Rightarrow x = \\dfrac{-0{,}156 + \\sqrt{0{,}156^2 + 0{,}011}}{2} = 0{,}0160$ M. \n-  Thêm HCl 1,2 mmol (thể tích 52 mL): $C_a = 13{,}7/52$, $C_b = 6{,}05/52$; giải lại cùng phương trình.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C6b (HK1 2024--2025)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng ngay công thức Henderson–Hasselbalch $\\mathrm{pH} = \\mathrm{p}K_a + \\lg(n_{\\mathrm{ClO_2^-}}/n_{\\mathrm{HClO_2}})$ vì đây là hệ đệm chuẩn."
      },
      {
        "id": "option-2",
        "label": "Tính theo công thức axit yếu độc lập $[\\mathrm{H^+}] = \\sqrt{K_a C_a}$, bỏ qua vai trò của muối $\\mathrm{KClO_2}$."
      },
      {
        "id": "option-3",
        "label": "Dùng số mmol thay cho nồng độ mol/L khi giải bậc hai và bỏ qua thể tích $2\\text{ mL}$ $\\mathrm{HCl}$ thêm vào."
      },
      {
        "id": "option-4",
        "label": "Vì $K_a = 1{,}1\\times 10^{-2}$ lớn, giả sử $x \\ll C_a, C_b$ bị sai; tính nồng độ thực $C_a, C_b$ (theo tổng $52\\text{ mL}$ sau thêm $\\mathrm{HCl}$) rồi giải bậc hai $x^2 + (C_b + K_a)x - K_a C_a = 0$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-037",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT18 C6a: Chuẩn độ axit yếu bằng bazơ mạnh",
    "prompt": "Biết p$K_a(\\mathrm{HCN}) = 9{,}21$. Tiến hành chuẩn độ 50 mL dung dịch HCN 0,1 M trong bình nón bằng cách thêm từ từ dung dịch NaOH 0,5 M vào. Tính pH của các dung dịch thu được trong các trường hợp sau: (i) sau khi thêm 5 mL dung dịch NaOH; (ii) sau khi thêm 10 mL dung dịch NaOH; (iii) sau khi thêm 50 mL dung dịch NaOH.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Chuẩn độ $50\\text{ mL}$ $\\mathrm{HCN}$ $0{,}1\\text{ M}$ bằng $\\mathrm{NaOH}$ $0{,}5\\text{ M}$ ($V_{\\mathrm{tđ}} = 10\\text{ mL}$): nhận diện đúng vùng cho ba mốc $5, 10, 50\\text{ mL}$?",
    "explanation": "Lập bảng mmol cho thấy $n_{\\mathrm{HCN}} = 5\\text{ mmol}$ ($V_{\\mathrm{tđ}} = 10\\text{ mL}$): trước tương đương là đệm, tại tương đương chỉ còn muối $\\mathrm{CN^-}$ thủy phân, sau tương đương kiềm dư quyết định pH.\n\n**Lời giải đầy đủ:**\n\n-  $n(\\mathrm{HCN}) = 50 \\times 0{,}1 = 5$ mmol; điểm tương đương cần $5/0{,}5 = 10$ mL NaOH. \n-  (i) 5 mL: 2,5 mmol NaOH, còn 2,5 axit + 2,5 muối (nửa tương đương): pH = p$K_a$ = 9,21. \n-  (ii) 10 mL: tương đương, dung dịch chỉ có $\\mathrm{CN^{-}}$: $C = 5/60 = 0{,}0833$ M; $K_b = 10^{-14}/10^{-9{,}21} = 1{,}62\\times10^{-5}$; $[\\mathrm{OH^{-}}] = \\sqrt{K_bC} = 1{,}16\\times10^{-3}$ M. \n-  (iii) 50 mL: dư $25 - 5 = 20$ mmol $\\mathrm{OH^{-}}$ trong 100 mL, $[\\mathrm{OH^{-}}] = 0{,}2$ M; pH $= 14 + \\lg 0{,}2$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9d.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C6a (Đề tổng hợp 8)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tại $5\\text{ mL}$ (nửa tương đương) dùng đệm $\\mathrm{pH} = \\mathrm{p}K_a$; tại $10\\text{ mL}$ (tương đương) tính thủy phân $\\mathrm{CN^-}$ với $K_b = K_w/K_a$; tại $50\\text{ mL}$ tính $\\mathrm{OH^-}$ dư theo tổng $100\\text{ mL}$."
      },
      {
        "id": "option-2",
        "label": "Áp dụng công thức đệm Henderson–Hasselbalch cho cả ba mốc thể tích $5$, $10$ và $50\\text{ mL}$."
      },
      {
        "id": "option-3",
        "label": "Tại điểm tương đương $10\\text{ mL}$ kết luận $\\mathrm{pH} = 7{,}00$ vì axit đã trung hòa hết kiềm."
      },
      {
        "id": "option-4",
        "label": "Tại $50\\text{ mL}$ dùng thủy phân $\\mathrm{CN^-}$ và bỏ qua $\\mathrm{NaOH}$ dư vì $\\mathrm{NaOH}$ chỉ là chất chuẩn độ."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-038",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT20 C6a: Chuẩn độ axit yếu bằng bazơ mạnh",
    "prompt": "Người ta lấy vào bình nón 50 mL dung dịch axit fomic HCOOH 0,2 M và tiến hành chuẩn độ bằng cách nhỏ từ từ dung dịch NaOH nồng độ 0,2 M vào bình nón. Tính pH của dung dịch axit HCOOH 0,2 M ban đầu và pH của dung dịch trong bình nón trong 2 trường hợp: (1) thêm 25 mL dung dịch NaOH và (2) thêm 50 mL dung dịch NaOH. Biết $K_a = 5\\times10^{-4}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Chuẩn độ $50\\text{ mL}$ $\\mathrm{HCOOH}$ $0{,}2\\text{ M}$ ($K_a = 5\\times 10^{-4}$) bằng $\\mathrm{NaOH}$ $0{,}2\\text{ M}$: cách chọn mô hình đúng cho 3 thời điểm là gì?",
    "explanation": "Ban đầu là $\\mathrm{HCOOH}$ $0{,}2\\text{ M}$ có $x/C = 5\\%$ nên giải bậc hai; $25\\text{ mL}$ là nửa tương đương ($50\\text{ mL}$ là tương đương với $C_{\\mathrm{HCOO^-}} = 10/100 = 0{,}1\\text{ M}$).\n\n**Lời giải đầy đủ:**\n\n-  Ban đầu: axit yếu $x = \\dfrac{-K_a + \\sqrt{K_a^2 + 4K_aC}}{2}$ với $C = 0{,}2$, $K_a = 5\\times10^{-4}$: $x = 9{,}75\\times10^{-3}$ M. \n-  Tương đương ở $10/0{,}2 = 50$ mL. (1) 25 mL: nửa tương đương, pH = p$K_a = -\\lg(5\\times10^{-4})$. \n-  (2) 50 mL: dung dịch $\\mathrm{HCOO^{-}}$ $C = 10/100 = 0{,}1$ M; $K_b = 10^{-14}/5\\times10^{-4} = 2\\times10^{-11}$; $[\\mathrm{OH^{-}}] = \\sqrt{2\\times10^{-12}} = 1{,}41\\times10^{-6}$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9d.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C6a (Đề tổng hợp 10)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Ban đầu dùng công thức đệm, tại $25\\text{ mL}$ lấy $\\mathrm{pH} = 7$, tại $50\\text{ mL}$ tính $\\mathrm{pH} = 14 + \\lg 0{,}2$."
      },
      {
        "id": "option-2",
        "label": "Ban đầu giải bậc hai $x^2 + K_a x - K_a C = 0$ (vì $x/C \\approx 5\\%$); tại $25\\text{ mL}$ dùng nửa tương đương $\\mathrm{pH} = \\mathrm{p}K_a$; tại $50\\text{ mL}$ tính thủy phân $\\mathrm{HCOO^-}$ ($K_b = K_w/K_a$)."
      },
      {
        "id": "option-3",
        "label": "Tại $50\\text{ mL}$ (điểm tương đương) dùng công thức đệm hoặc kết luận ngay $\\mathrm{pH} = 7{,}00$."
      },
      {
        "id": "option-4",
        "label": "Tại $50\\text{ mL}$ lấy luôn nồng độ muối $\\mathrm{HCOO^-}$ bằng $0{,}2\\text{ M}$, quên thể tích đã tăng lên $100\\text{ mL}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-039",
    "lessonId": "gc-sol-buffer",
    "title": "Đề ĐT27 C6: Chuẩn độ axit yếu bằng bazơ mạnh",
    "prompt": "Cho dung dịch kiềm KOH 0,08 M phản ứng với 25 mL dung dịch axit $\\mathrm{CH_{3}COOH}$ 0,10 M chứa trong một bình nón. Biết: $K_a(\\mathrm{CH_{3}COOH}) = 1{,}8\\times10^{-5}$. Hãy tính pH của dung dịch phản ứng tại các thời điểm sau:\n\n\n\n-  Khi chưa cho dung dịch kiềm KOH 0,08 M.\n\n-  Sau khi đã thêm 13,6 mL dung dịch KOH 0,08 M.\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; $R_H = 109678$ cm$^{-1}$; $N_A = 6{,}023\\times10^{23}$; $F = 96\\,500$ C/mol; 1 eV = $1{,}602\\times10^{-19}$ J; $T$(K) = 273 + $t$(°C); $Z$(He) = 2; $Z$(Li) = 3.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Chuẩn độ $25\\text{ mL}$ $\\mathrm{CH_3COOH}$ $0{,}10\\text{ M}$ ($2{,}5\\text{ mmol}$) bằng $\\mathrm{KOH}$ $0{,}08\\text{ M}$: hướng xử lý đúng cho hai ý là gì?",
    "explanation": "Điểm tương đương cần $2{,}5/0{,}08 = 31{,}25\\text{ mL}$ $\\mathrm{KOH}$, nên tại $13{,}6\\text{ mL}$ dung dịch vẫn đang ở vùng đệm (trước tương đương) với $n_{\\mathrm{HA}} = 1{,}412$ và $n_{\\mathrm{A^-}} = 1{,}088\\text{ mmol}$.\n\n**Lời giải đầy đủ:**\n\n-  a) $x = \\dfrac{-K_a + \\sqrt{K_a^2 + 4K_aC}}{2}$ với $C = 0{,}10$: $x = 1{,}33\\times10^{-3}$ M; pH $= -\\lg x$. \n-  b) mmol: axit 2,5; KOH $13{,}6 \\times 0{,}08 = 1{,}088$; tương đương cần 31,25 mL nên đang ở vùng đệm. \n-  Sau phản ứng: axit 1,412; muối 1,088 mmol. pH $= 4{,}745 + \\lg\\dfrac{1{,}088}{1{,}412} = 4{,}745 - 0{,}113$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-9d.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT27 C6 (HK1 2025--2026, 1,5 điểm)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Sau thêm $13{,}6\\text{ mL}$ $\\mathrm{KOH}$, thay tỉ số nồng độ đầu $0{,}08/0{,}10$ vào công thức đệm mà không lập bảng mmol."
      },
      {
        "id": "option-2",
        "label": "Tại $13{,}6\\text{ mL}$ coi là điểm tương đương nên tính thủy phân $\\mathrm{CH_3COO^-}$ với $K_b = K_w / K_a$."
      },
      {
        "id": "option-3",
        "label": "Ban đầu tính cân bằng $\\mathrm{CH_3COOH}$ ($K_a$); sau thêm $13{,}6\\text{ mL}$ ($1{,}088\\text{ mmol}$ $\\mathrm{KOH} < 2{,}5\\text{ mmol}$), lập bảng mmol còn $1{,}412\\text{ mmol}$ axit và $1{,}088\\text{ mmol}$ muối để dùng đệm."
      },
      {
        "id": "option-4",
        "label": "Sau thêm $13{,}6\\text{ mL}$ $\\mathrm{KOH}$, lấy $\\mathrm{pH} = 14 + \\lg(1{,}088 / 38{,}6)$ như trường hợp kiềm dư."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-040",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT04 C5c: Độ tan trong nước",
    "prompt": "Tính độ tan của muối ít tan $\\mathrm{CaF_{2}}$ trong môi trường nước ở 25 °C biết $T_{\\mathrm{CaF_{2}}} = 4{,}0\\times10^{-11}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính độ tan $s$ của $\\mathrm{CaF_2}$ trong nước ($K_{sp} = 4{,}0\\times 10^{-11}$), thiết lập biểu thức nào đúng?",
    "explanation": "Hệ số $2$ của $\\mathrm{F^-}$ vừa nhân đôi nồng độ ($[\\mathrm{F^-}] = 2s$) vừa trở thành số mũ trong tích số tan, nên $K_{sp} = s(2s)^2 = 4s^3$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{AB_{2}(r) \\rightleftharpoons  A^{2+} + 2B^{-}}$: $[\\mathrm{A^{2+}}] = s$, $[\\mathrm{B^{-}}] = 2s$; $T = s(2s)^2 = 4s^3$. \n-  Biến đổi: $s = \\sqrt[3]{T/4} = \\sqrt[3]{1\\times10^{-11}} = 0{,}000215$ M.\n\nGiữ thêm chữ số trung gian cho kết quả: s ≈ 2,15×10⁻⁴ mol/L (nếu làm tròn 2 chữ số có nghĩa là 2,1×10⁻⁴ mol/L; hệ thống chấp nhận cả hai cách làm tròn).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C5c (HK1 2013--2014)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt $[\\mathrm{F^-}] = 2s$ nhưng quên bình phương nên viết $K_{sp} = s \\cdot 2s = 2s^2$."
      },
      {
        "id": "option-2",
        "label": "Áp dụng công thức chung $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}}$ cho mọi muối ít tan."
      },
      {
        "id": "option-3",
        "label": "Viết $K_{sp} = (2s)^2 = 4s^2$ vì coi nồng độ $\\mathrm{Ca^{2+}}$ bằng $1$."
      },
      {
        "id": "option-4",
        "label": "Từ $\\mathrm{CaF_2(r) \\rightleftharpoons Ca^{2+} + 2F^-}$, đặt $[\\mathrm{Ca^{2+}}] = s$ và $[\\mathrm{F^-}] = 2s$ nên $K_{sp} = s(2s)^2 = 4s^3$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-041",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT05 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan của muối ít tan $\\mathrm{Ag_{3}PO_{4}}$ trong môi trường nước ở 25 °C biết $T_{\\mathrm{Ag_{3}PO_{4}}} = 1{,}8\\times10^{-18}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính độ tan $s$ của $\\mathrm{Ag_3PO_4}$ trong nước ($K_{sp} = 1{,}8\\times 10^{-18}$), biểu thức đúng theo $s$ là gì?",
    "explanation": "Một mol $\\mathrm{Ag_3PO_4}$ tan cho $3s\\text{ mol/L}$ $\\mathrm{Ag^+}$ và $s\\text{ mol/L}$ $\\mathrm{PO_4^{3-}}$; đưa hệ số $3$ lên thành số mũ cho $K_{sp} = (3s)^3 s = 27s^4$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{Ag_{3}PO_{4}(r) \\rightleftharpoons  3Ag^{+} + PO_{4}^{3-}}$: $[\\mathrm{Ag^{+}}] = 3s$, $[\\mathrm{PO_{4}^{3-}}] = s$; $T = (3s)^3s = 27s^4$. \n-  Biến đổi: $s = \\sqrt[4]{T/27} = \\sqrt[4]{6{,}67\\times10^{-20}} = 1{,}61\\times10^{-5}$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C6c (HK2 2013--2014)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Quên lập phương $[\\mathrm{Ag^+}]$ nên viết $K_{sp} = 3s \\cdot s = 3s^2$."
      },
      {
        "id": "option-2",
        "label": "Từ $\\mathrm{Ag_3PO_4(r) \\rightleftharpoons 3Ag^+ + PO_4^{3-}}$, có $[\\mathrm{Ag^+}] = 3s$, $[\\mathrm{PO_4^{3-}}] = s$ nên $K_{sp} = (3s)^3 s = 27s^4$."
      },
      {
        "id": "option-3",
        "label": "Đặt $[\\mathrm{Ag^+}] = 3s$ nhưng quên lập phương hệ số $3$ nên viết $K_{sp} = 3s^4$."
      },
      {
        "id": "option-4",
        "label": "Áp dụng công thức đơn giản $K_{sp} = s^2 \\implies s = \\sqrt{1{,}8\\times 10^{-18}}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-042",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT07 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan ($s$) của $\\mathrm{Mg(OH)_{2}}$ biết tích số tan tương ứng $T_{\\mathrm{Mg(OH)_{2}}} = 8{,}9\\times10^{-12}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi tính độ tan $s$ của $\\mathrm{Mg(OH)_2}$ ($K_{sp} = 8{,}9\\times 10^{-12}$), liên hệ $K_{sp}$ và $s$ nào đúng?",
    "explanation": "Muối kiểu $\\mathrm{AB_2}$ như $\\mathrm{Mg(OH)_2}$ luôn có $K_{sp} = [\\mathrm{Mg^{2+}}][\\mathrm{OH^-}]^2 = s(2s)^2 = 4s^3$, không dùng $s = \\sqrt{K_{sp}}$ hay $2s^2$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{AB_{2}(r) \\rightleftharpoons  A^{2+} + 2B^{-}}$: $[\\mathrm{A^{2+}}] = s$, $[\\mathrm{B^{-}}] = 2s$; $T = s(2s)^2 = 4s^3$. \n-  Biến đổi: $s = \\sqrt[3]{T/4} = \\sqrt[3]{2{,}22\\times10^{-12}} = 0{,}000131$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C6c (HK1 2015--2016)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Coi $K_{sp} = s^2$ nên tính ngay $s = \\sqrt{8{,}9\\times 10^{-12}}$."
      },
      {
        "id": "option-2",
        "label": "Quên số mũ $2$ của $[\\mathrm{OH^-}]$, viết $K_{sp} = s \\cdot 2s = 2s^2$."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{Mg(OH)_2(r) \\rightleftharpoons Mg^{2+} + 2OH^-}$ cho $[\\mathrm{Mg^{2+}}] = s$, $[\\mathrm{OH^-}] = 2s$, nên $K_{sp} = s(2s)^2 = 4s^3$."
      },
      {
        "id": "option-4",
        "label": "Chỉ bình phương $s$ mà quên nhân hệ số $2$ bên trong ngoặc, viết $K_{sp} = s \\cdot s^2 = s^3$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-043",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT09 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan ($s$) của $\\mathrm{BaSO_{4}}$ biết tích số tan của $\\mathrm{BaSO_{4}}$ là $T = 1{,}2\\times10^{-10}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J; $T$(K) = $t$(°C) + 273.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Tính độ tan $s$ của $\\mathrm{BaSO_4}$ trong nước ($K_{sp} = 1{,}2\\times 10^{-10}$): cách lập biểu thức nào đúng?",
    "explanation": "Số mũ trong $K_{sp}$ lấy theo hệ số tỉ lượng của các ion trong phương trình hòa tan ($1:1$), không lấy theo điện tích ion hay chỉ số oxi trong gốc $\\mathrm{SO_4^{2-}}$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{AB(r) \\rightleftharpoons  A^{+} + B^{-}}$: $[\\mathrm{A}] = [\\mathrm{B}] = s$; $T = s \\cdot s = s^2$. \n-  Biến đổi: $s = \\sqrt{T} = \\sqrt{1{,}2\\times10^{-10}} = 1{,}1\\times10^{-5}$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C6c (HK2 2015--2016)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$\\mathrm{BaSO_4(r) \\rightleftharpoons Ba^{2+} + SO_4^{2-}}$ phân li tỉ lệ $1:1$ nên $[\\mathrm{Ba^{2+}}] = [\\mathrm{SO_4^{2-}}] = s$ và $K_{sp} = s^2$."
      },
      {
        "id": "option-2",
        "label": "Vì $\\mathrm{SO_4^{2-}}$ có điện tích $2-$ nên phải viết $K_{sp} = [\\mathrm{Ba^{2+}}][\\mathrm{SO_4^{2-}}]^2 = 4s^3$."
      },
      {
        "id": "option-3",
        "label": "Đưa nồng độ chất rắn $[\\mathrm{BaSO_4(r)}]$ vào mẫu số của $K_{sp}$ trước khi rút $s$."
      },
      {
        "id": "option-4",
        "label": "Lấy $K_{sp} = (4s)^2 = 16s^2$ vì có $4$ nguyên tử oxi trong nhóm sunfat."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-044",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT10 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan ($s$) của muối $\\mathrm{Ag_{3}PO_{4}}$ biết tích số tan tương ứng $T_{\\mathrm{Ag_{3}PO_{4}}} = 1{,}8\\times10^{-18}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Viết đúng biểu thức tích số tan theo độ tan $s$ của $\\mathrm{Ag_3PO_4}$ ($K_{sp} = 1{,}8\\times 10^{-18}$)?",
    "explanation": "$\\mathrm{Ag_3PO_4}$ là muối kiểu $\\mathrm{A_3B}$ nên $[\\mathrm{Ag^+}] = 3s$ và được nâng lũy thừa bậc $3$, tạo hệ số $3^3 = 27$ và số mũ tổng là $4$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{Ag_{3}PO_{4}(r) \\rightleftharpoons  3Ag^{+} + PO_{4}^{3-}}$: $[\\mathrm{Ag^{+}}] = 3s$, $[\\mathrm{PO_{4}^{3-}}] = s$; $T = (3s)^3s = 27s^4$. \n-  Biến đổi: $s = \\sqrt[4]{T/27} = \\sqrt[4]{6{,}67\\times10^{-20}} = 1{,}61\\times10^{-5}$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C6c (HK1 2016--2017)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$K_{sp} = [\\mathrm{Ag^+}][\\mathrm{PO_4^{3-}}] = s^2$, nên $s = \\sqrt{K_{sp}}$."
      },
      {
        "id": "option-2",
        "label": "$K_{sp} = 3s \\cdot s = 3s^2$, không đưa hệ số $3$ lên thành số mũ của $[\\mathrm{Ag^+}]$."
      },
      {
        "id": "option-3",
        "label": "$K_{sp} = (3s)^2 \\cdot s = 9s^3$, nhầm hệ số $3$ của $\\mathrm{Ag^+}$ thành số mũ $2$."
      },
      {
        "id": "option-4",
        "label": "$K_{sp} = [\\mathrm{Ag^+}]^3[\\mathrm{PO_4^{3-}}] = (3s)^3 \\cdot s = 27s^4$, từ đó $s = \\sqrt[4]{K_{sp}/27}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-045",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT11 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan ($s$ theo mol/L) của AgI biết tích số tan tương ứng $T_{\\mathrm{AgI}} = 1{,}19\\times10^{-16}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Để tính độ tan $s$ ($\\text{mol/L}$) của $\\mathrm{AgI}$ trong nước ($K_{sp} = 1{,}19\\times 10^{-16}$), nhận định nào đúng?",
    "explanation": "$\\mathrm{AgI}$ là muối kiểu $\\mathrm{AB}$ phân li cho $1$ $\\mathrm{Ag^+}$ và $1$ $\\mathrm{I^-}$, nên $K_{sp} = s^2$ và độ tan $\\text{mol/L}$ là $s = \\sqrt{K_{sp}}$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{AB(r) \\rightleftharpoons  A^{+} + B^{-}}$: $[\\mathrm{A}] = [\\mathrm{B}] = s$; $T = s \\cdot s = s^2$. \n-  Biến đổi: $s = \\sqrt{T} = \\sqrt{1{,}19\\times10^{-16}} = 1{,}09\\times10^{-8}$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C6c (HK2 2016--2017)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Áp dụng $K_{sp} = 4s^3$ vì coi $\\mathrm{AgI}$ phân li ra $3$ ion như muối loại $\\mathrm{AB_2}$."
      },
      {
        "id": "option-2",
        "label": "Cân bằng $\\mathrm{AgI(r) \\rightleftharpoons Ag^+ + I^-}$ có tỉ lệ $1:1$ nên $K_{sp} = [\\mathrm{Ag^+}][\\mathrm{I^-}] = s^2$ và $s = \\sqrt{K_{sp}}$."
      },
      {
        "id": "option-3",
        "label": "Lấy $s = K_{sp}$ vì mỗi mol muối chỉ tan một lượng rất nhỏ trong nước."
      },
      {
        "id": "option-4",
        "label": "Tính độ tan $\\text{mol/L}$ bằng cách chia trực tiếp $K_{sp}$ cho khối lượng mol $M(\\mathrm{AgI})$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-046",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT20 C6b: Độ tan trong nước",
    "prompt": "Tính độ tan của muối ít tan $\\mathrm{CaF_{2}}$ trong môi trường nước ở 25 °C biết $T_{\\mathrm{CaF_{2}}} = 4{,}0\\times10^{-11}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Xác định công thức tính độ tan $s$ của $\\mathrm{CaF_2}$ khi biết $K_{sp} = 4{,}0\\times 10^{-11}$?",
    "explanation": "Với $\\mathrm{CaF_2}$, hệ số $2$ của $\\mathrm{F^-}$ bắt buộc phải được bình phương: $K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2 = s(2s)^2 = 4s^3 \\implies s = \\sqrt[3]{K_{sp}/4}$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{AB_{2}(r) \\rightleftharpoons  A^{2+} + 2B^{-}}$: $[\\mathrm{A^{2+}}] = s$, $[\\mathrm{B^{-}}] = 2s$; $T = s(2s)^2 = 4s^3$. \n-  Biến đổi: $s = \\sqrt[3]{T/4} = \\sqrt[3]{1\\times10^{-11}} = 0{,}000215$ M.\n\nGiữ thêm chữ số trung gian cho kết quả: s ≈ 2,15×10⁻⁴ mol/L (nếu làm tròn 2 chữ số có nghĩa là 2,1×10⁻⁴ mol/L; hệ thống chấp nhận cả hai cách làm tròn).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C6b (Đề tổng hợp 10)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng $s = \\sqrt{K_{sp}}$ cho mọi muối ít tan nên $s = \\sqrt{4{,}0\\times 10^{-11}}$."
      },
      {
        "id": "option-2",
        "label": "Viết $K_{sp} = s(2s) = 2s^2$ (quên bình phương $[\\mathrm{F^-}]$) nên rút $s = \\sqrt{K_{sp}/2}$."
      },
      {
        "id": "option-3",
        "label": "Viết $\\mathrm{CaF_2(r) \\rightleftharpoons Ca^{2+} + 2F^-}$, thế $[\\mathrm{Ca^{2+}}] = s$, $[\\mathrm{F^-}] = 2s$ vào $K_{sp} = s(2s)^2 = 4s^3$ để rút $s = \\sqrt[3]{K_{sp}/4}$."
      },
      {
        "id": "option-4",
        "label": "Viết $K_{sp} = (2s)^2 s^2 = 4s^4$ (nhân thừa lũy thừa cho $[\\mathrm{Ca^{2+}}]$)."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-047",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT22 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan ($S$) của muối $\\mathrm{Ag_{3}PO_{4}}$ biết tích số tan tương ứng $T_{\\mathrm{Ag_{3}PO_{4}}} = 1{,}8\\times10^{-18}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi tìm độ tan $s$ của $\\mathrm{Ag_3PO_4}$ ($K_{sp} = 1{,}8\\times 10^{-18}$), bước lập biểu thức nào đúng?",
    "explanation": "Cần đúng cả nồng độ từng ion ($[\\mathrm{Ag^+}] = 3s$) lẫn số mũ trong tích số tan ($[\\mathrm{Ag^+}]^3$), dẫn đến hệ số $3^3 = 27$ trước $s^4$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{Ag_{3}PO_{4}(r) \\rightleftharpoons  3Ag^{+} + PO_{4}^{3-}}$: $[\\mathrm{Ag^{+}}] = 3s$, $[\\mathrm{PO_{4}^{3-}}] = s$; $T = (3s)^3s = 27s^4$. \n-  Biến đổi: $s = \\sqrt[4]{T/27} = \\sqrt[4]{6{,}67\\times10^{-20}} = 1{,}61\\times10^{-5}$ M.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C6c (Đề tổng hợp 12)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Theo $\\mathrm{Ag_3PO_4(r) \\rightleftharpoons 3Ag^+ + PO_4^{3-}}$, $[\\mathrm{Ag^+}] = 3s$ và $[\\mathrm{PO_4^{3-}}] = s$ nên $K_{sp} = (3s)^3 s = 27s^4$."
      },
      {
        "id": "option-2",
        "label": "Đặt $[\\mathrm{Ag^+}] = s$ và $[\\mathrm{PO_4^{3-}}] = 3s$, gán sai nồng độ ion có hệ số $3$."
      },
      {
        "id": "option-3",
        "label": "Viết $K_{sp} = 3s^4$ vì chỉ lấy lũy thừa cho $s$ mà quên lập phương hệ số $3$ ($3^3 = 27$)."
      },
      {
        "id": "option-4",
        "label": "Dùng $s = \\sqrt{K_{sp}}$ vì không đưa hệ số tỉ lượng thành số mũ trong $K_{sp}$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-048",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT28 C6c: Độ tan trong nước",
    "prompt": "Tính độ tan $S$ (mol/L) của muối $\\mathrm{CaF_{2}}$ biết tích số tan $T_{\\mathrm{CaF_{2}}} = 3{,}9\\times10^{-11}$.\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}6\\times10^{-19}$ J.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Với $\\mathrm{CaF_2}$ ($K_{sp} = 3{,}9\\times 10^{-11}$), mối liên hệ giữa tích số tan và độ tan $s$ nào đúng?",
    "explanation": "Hệ số ion quyết định cả biểu thức nồng độ theo $s$ ($[\\mathrm{F^-}] = 2s$) lẫn số mũ ($[\\mathrm{F^-}]^2$), nên $K_{sp} = 4s^3$.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{AB_{2}(r) \\rightleftharpoons  A^{2+} + 2B^{-}}$: $[\\mathrm{A^{2+}}] = s$, $[\\mathrm{B^{-}}] = 2s$; $T = s(2s)^2 = 4s^3$. \n-  Biến đổi: $s = \\sqrt[3]{T/4} = \\sqrt[3]{9{,}75\\times10^{-12}} = 0{,}000214$ M.\n\nGiữ thêm chữ số trung gian cho kết quả: s ≈ 2,14×10⁻⁴ mol/L (nếu làm tròn 2 chữ số có nghĩa là 2,1×10⁻⁴ mol/L; hệ thống chấp nhận cả hai cách làm tròn).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C6c (Hè 2025--2026)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "$K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}] = s(2s) = 2s^2$ (thiếu bình phương nồng độ $\\mathrm{F^-}$)."
      },
      {
        "id": "option-2",
        "label": "$K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2 = s^3$ (quên rằng $[\\mathrm{F^-}] = 2s$ chứ không phải $s$)."
      },
      {
        "id": "option-3",
        "label": "$K_{sp} = s^2 \\implies s = \\sqrt{3{,}9\\times 10^{-11}}$ (áp dụng nhầm công thức muối $1:1$)."
      },
      {
        "id": "option-4",
        "label": "Vì $1\\text{ mol}$ $\\mathrm{CaF_2}$ tan tạo $1\\text{ mol}$ $\\mathrm{Ca^{2+}}$ và $2\\text{ mol}$ $\\mathrm{F^-}$, nên $K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2 = s(2s)^2 = 4s^3$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-049",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT03 C3: Độ tan khi có ion chung",
    "prompt": "Dung dịch bão hòa của AgCl có pH = 7. Trộn 950 mL dung dịch bão hòa AgCl vào 50 mL dung dịch HCl 1 M. Tính pH của dung dịch và nồng độ của $\\mathrm{Ag^{+}}$ sau khi trộn. Biết $T_{\\mathrm{AgCl}} = 1{,}6\\times10^{-10}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi trộn $950\\text{ mL}$ dung dịch bão hòa $\\mathrm{AgCl}$ với $50\\text{ mL}$ $\\mathrm{HCl}$ $1\\text{ M}$, trình tự xử lý nào đúng?",
    "explanation": "Khi trộn phải chia cho tổng thể tích $1\\text{ L}$ trước khi tính $Q$; vì $Q > K_{sp}$ nên $\\mathrm{AgCl}$ kết tủa lại và đạt cân bằng mới với ion chung $\\mathrm{Cl^-}$ ($0{,}05\\text{ M}$).\n\n**Lời giải đầy đủ:**\n\n-  Dung dịch AgCl bão hòa: $s = \\sqrt{T} = \\sqrt{1{,}6\\times10^{-10}} = 1{,}26\\times10^{-5}$ M. Trong 950 mL có $n(\\mathrm{Ag^{+}}) = 0{,}95 \\times 1{,}26\\times10^{-5} = 1{,}20\\times10^{-5}$ mol. \n-  Sau trộn (tổng 1 L): $[\\mathrm{Ag^{+}}] = 1{,}20\\times10^{-5}$ M; $[\\mathrm{Cl^{-}}] = \\dfrac{0{,}05 + 1{,}20\\times10^{-5}}{1} \\approx 0{,}05$ M; $[\\mathrm{H^{+}}] = 0{,}05$ M nên pH $= -\\lg 0{,}05 = 1{,}30$. \n-  Xét kết tủa: $Q = [\\mathrm{Ag^{+}}][\\mathrm{Cl^{-}}] = 1{,}20\\times10^{-5} \\times 0{,}05 = 6{,}0\\times10^{-7} > T$: một phần AgCl kết tủa lại. \n-  Cân bằng mới với ion chung $\\mathrm{Cl^{-}}$: 3 dòng cho $\\mathrm{AgCl(r) \\rightleftharpoons  Ag^{+} + Cl^{-}}$: lúc cân bằng $[\\mathrm{Ag^{+}}] = y$, $[\\mathrm{Cl^{-}}] = 0{,}05 + y \\approx 0{,}05$ (giả sử $y \\ll 0{,}05$). \n-  $T = y \\times 0{,}05 \\Rightarrow y = \\dfrac{1{,}6\\times10^{-10}}{0{,}05} = 3{,}2\\times10^{-9}$ M. Kiểm tra $y \\ll 0{,}05$: đúng.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT03 C3 (HK1 2012--2013)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Giữ nguyên nồng độ $\\mathrm{Ag^+} = \\sqrt{K_{sp}}$ và $\\mathrm{Cl^-} = 1\\text{ M}$ trước trộn để so $Q$ với $K_{sp}$."
      },
      {
        "id": "option-2",
        "label": "Tính nồng độ $\\mathrm{Ag^+}$ và $\\mathrm{Cl^-}$ sau pha loãng trong $1\\text{ L}$ để so $Q$ với $K_{sp}$; vì $Q > K_{sp}$ nên lập cân bằng mới với ion chung $[\\mathrm{Cl^-}] \\approx 0{,}05\\text{ M}$."
      },
      {
        "id": "option-3",
        "label": "Cho rằng $\\mathrm{HCl}$ hòa tan thêm $\\mathrm{AgCl}$ vì $\\mathrm{H^+}$ làm tăng độ tan của mọi muối ít tan."
      },
      {
        "id": "option-4",
        "label": "Tính nồng độ $[\\mathrm{Ag^+}]$ cuối cùng bằng $\\sqrt{K_{sp}}$ mà bỏ qua ion chung $\\mathrm{Cl^-}$ từ $\\mathrm{HCl}$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-050",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT18 C6b: Độ tan khi có ion chung",
    "prompt": "Tính độ tan của $\\mathrm{BaSO_{4}}$ trong dung dịch $\\mathrm{Na_{2}SO_{4}}$ $10^{-4}$ M. Biết tích số tan của $\\mathrm{BaSO_{4}}$ là $1{,}5\\times10^{-9}$.\n\n\n\n\n**Lưu ý số liệu:** Các đề khác thường cho $K_{sp}(\\mathrm{BaSO_{4}})$ cỡ $10^{-10}$ (ĐT09: $1{,}2\\times10^{-10}$; ĐT17: $1{,}1\\times10^{-10}$), nhưng trong bài này tính theo đúng giá trị $1{,}5\\times10^{-9}$ mà đề bài đã cho.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Tính độ tan của $\\mathrm{BaSO_4}$ ($K_{sp} = 1{,}5\\times 10^{-9}$) trong $\\mathrm{Na_2SO_4}$ $10^{-4}\\text{ M}$: tại sao cần kiểm tra giả sử?",
    "explanation": "Nếu bỏ qua $s$ so với $10^{-4}\\text{ M}$ thì $s = 1{,}5\\times 10^{-5}\\text{ M}$ chiếm tới $15\\% > 5\\%$ nồng độ ion chung, vi phạm điều kiện gần đúng nên bắt buộc giải phương trình bậc hai.\n\n**Lời giải đầy đủ:**\n\n-  $\\mathrm{Na_{2}SO_{4}}$ tan hoàn toàn cho $[\\mathrm{SO_{4}^{2-}}] = 10^{-4}$ M: ion chung với $\\mathrm{BaSO_{4}}$. \n-  3 dòng cho $\\mathrm{BaSO_{4}(r) \\rightleftharpoons  Ba^{2+} + SO_{4}^{2-}}$ (mol/L): ban đầu 0 | $10^{-4}$; tan $+s$ | $+s$; cân bằng $s$ | $10^{-4} + s$. \n-  $T = s(10^{-4} + s) = 1{,}5\\times10^{-9}$. \n-  Giả sử $s \\ll 10^{-4}$: $s \\approx \\dfrac{1{,}5\\times10^{-9}}{10^{-4}} = 1{,}5\\times10^{-5}$ M. Kiểm tra: $s/10^{-4} = 15\\% > 5\\%$: giả sử sai. \n-  Quay về 3 dòng: $s^2 + 10^{-4}s - 1{,}5\\times10^{-9} = 0 \\Rightarrow s = \\dfrac{-10^{-4} + \\sqrt{10^{-8} + 6\\times10^{-9}}}{2} = 1{,}32\\times10^{-5}$ M. \n-  So sánh: trong nước $s_0 = \\sqrt{T} = 3{,}9\\times10^{-5}$ M; ion chung làm độ tan giảm khoảng 3 lần.\n\nGiữ thêm chữ số trung gian cho kết quả: s ≈ 1,32×10⁻⁵ mol/L (nếu làm tròn 2 chữ số có nghĩa là 1,3×10⁻⁵ mol/L; hệ thống chấp nhận cả hai cách làm tròn).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C6b (Đề tổng hợp 8)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lập bảng $[\\mathrm{Ba^{2+}}] = s$, $[\\mathrm{SO_4^{2-}}] = 10^{-4} + s$; nếu bỏ qua $s$ sẽ ra $s/10^{-4} = 15\\% > 5\\%$, nên phải giải phương trình bậc hai $s^2 + 10^{-4}s - 1{,}5\\times 10^{-9} = 0$."
      },
      {
        "id": "option-2",
        "label": "Áp dụng $s = \\sqrt{K_{sp}}$ như trong nước tinh khiết và bỏ qua $\\mathrm{SO_4^{2-}}$ có sẵn từ $\\mathrm{Na_2SO_4}$."
      },
      {
        "id": "option-3",
        "label": "Chỉ cần lấy $s = K_{sp}/10^{-4} = 1{,}5\\times 10^{-5}\\text{ M}$ mà không cần kiểm tra điều kiện $s \\ll 10^{-4}$."
      },
      {
        "id": "option-4",
        "label": "Viết $K_{sp} = s(10^{-4} + 2s)^2$ vì coi $\\mathrm{Na_2SO_4}$ cung cấp gấp đôi số mol ion sunfat."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-051",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT17 C6c: Điều kiện xuất hiện kết tủa",
    "prompt": "Hòa tan 0,01 mol $\\mathrm{Ba(OH)_{2}}$ vào 1 lít nước, sau đó thêm từ từ dung dịch $\\mathrm{Na_{2}SO_{4}}$ 0,1 M cho đến khi xuất hiện kết tủa $\\mathrm{BaSO_{4}}$. Tính thể tích $\\mathrm{Na_{2}SO_{4}}$ cần thêm để bắt đầu và hoàn toàn kết tủa. Biết tích số tan của $\\mathrm{BaSO_{4}}$ là $1{,}1\\times10^{-10}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Thêm từ từ $\\mathrm{Na_2SO_4}$ $0{,}1\\text{ M}$ vào $1\\text{ L}$ dung dịch $\\mathrm{Ba(OH)_2}$ $0{,}01\\text{ M}$: cách xác định hai mốc thể tích đúng là gì?",
    "explanation": "Giọt kết tủa đầu tiên xuất hiện ngay khi tích ion đạt $K_{sp}$; còn kết tủa hoàn toàn theo bài toán tỉ lượng tương ứng lượng $\\mathrm{SO_4^{2-}}$ vừa đủ kết tủa hết $0{,}01\\text{ mol}$ $\\mathrm{Ba^{2+}}$.\n\n**Lời giải đầy đủ:**\n\n-  $[\\mathrm{Ba^{2+}}] = 0{,}01$ M. Bắt đầu kết tủa khi $Q = T$: $[\\mathrm{SO_{4}^{2-}}] = \\dfrac{T}{[\\mathrm{Ba^{2+}}]} = \\dfrac{1{,}1\\times10^{-10}}{0{,}01} = 1{,}1\\times10^{-8}$ M. \n-  Thể tích cần: $V \\approx \\dfrac{1{,}1\\times10^{-8} \\times 1}{0{,}1} = 1{,}1\\times10^{-7}$ L (coi như giọt đầu). \n-  Kết tủa hoàn toàn: cần $n(\\mathrm{SO_{4}^{2-}}) = n(\\mathrm{Ba^{2+}}) = 0{,}01$ mol, $V = 0{,}01/0{,}1$ L.\n\nGiữ thêm chữ số trung gian cho kết quả: Bắt đầu ≈ 1,10×10⁻⁷ L; gần hết theo tỉ lượng ≈ 100 mL (hệ thống chấp nhận cả giá trị tính chuẩn và giá trị làm tròn 2 chữ số có nghĩa).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C6c (Đề tổng hợp 7)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt $Q = K_{sp}$ cho cả hai ý vì bắt đầu kết tủa và kết tủa hoàn toàn là cùng một ngưỡng cân bằng."
      },
      {
        "id": "option-2",
        "label": "Tính thể tích kết tủa hoàn toàn bằng cách đặt $[\\mathrm{Ba^{2+}}] = 0$ trong biểu thức $K_{sp}$."
      },
      {
        "id": "option-3",
        "label": "Dùng $[\\mathrm{OH^-}] = 0{,}02\\text{ M}$ thay cho $[\\mathrm{Ba^{2+}}]$ khi xét điều kiện kết tủa $\\mathrm{BaSO_4}$."
      },
      {
        "id": "option-4",
        "label": "Bắt đầu kết tủa tại ngưỡng $Q = [\\mathrm{Ba^{2+}}][\\mathrm{SO_4^{2-}}] = K_{sp}$; kết tủa hoàn toàn (theo tỉ lượng) khi $n(\\mathrm{SO_4^{2-}}) = n(\\mathrm{Ba^{2+}}) = 0{,}01\\text{ mol}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-052",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT19 C6b: Điều kiện xuất hiện kết tủa",
    "prompt": "Trộn lẫn hai thể tích bằng nhau của dung dịch $\\mathrm{SrCl_{2}}$ 0,04 M và dung dịch $\\mathrm{K_{2}SO_{4}}$ 0,04 M. Biết tích số tan của $\\mathrm{SrSO_{4}}$ là $3{,}6\\times10^{-7}$. Hỏi có tạo kết tủa khi trộn lẫn 2 dung dịch này không?\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi trộn hai thể tích bằng nhau của $\\mathrm{SrCl_2}$ $0{,}04\\text{ M}$ và $\\mathrm{K_2SO_4}$ $0{,}04\\text{ M}$, bước nào bắt buộc trước khi tính $Q$?",
    "explanation": "Trộn hai thể tích bằng nhau làm thể tích hỗn hợp tăng gấp đôi, nên nồng độ mỗi ion ngay sau trộn giảm đi một nửa trước khi lập tích ion $Q = [\\mathrm{Sr^{2+}}][\\mathrm{SO_4^{2-}}]$.\n\n**Lời giải đầy đủ:**\n\n-  Trộn thể tích bằng nhau: nồng độ giảm một nửa, $[\\mathrm{Sr^{2+}}] = [\\mathrm{SO_{4}^{2-}}] = 0{,}02$ M. \n-  $Q = 0{,}02 \\times 0{,}02 = 4\\times10^{-4}$; so với $T = 3{,}6\\times10^{-7}$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C6b (Đề tổng hợp 9)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chia đôi nồng độ ban đầu của $\\mathrm{Sr^{2+}}$ và $\\mathrm{SO_4^{2-}}$ (vì tổng thể tích tăng gấp đôi) rồi tính $Q = [\\mathrm{Sr^{2+}}][\\mathrm{SO_4^{2-}}]$ so với $K_{sp}$."
      },
      {
        "id": "option-2",
        "label": "Lấy thẳng nồng độ trước trộn $0{,}04 \\times 0{,}04$ để tính $Q$ rồi so với $K_{sp}$."
      },
      {
        "id": "option-3",
        "label": "Tính độ tan $s = \\sqrt{K_{sp}}$ rồi cộng với nồng độ $\\mathrm{SrCl_2}$ ban đầu."
      },
      {
        "id": "option-4",
        "label": "Lập biểu thức $Q = [\\mathrm{Sr^{2+}}][\\mathrm{SO_4^{2-}}]^2$ vì muối $\\mathrm{K_2SO_4}$ có hệ số $2$ ở kali."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c6-sol-053",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT23 C6c: Điều kiện xuất hiện kết tủa",
    "prompt": "Trong quá trình hiến máu, để chống máu bị đông, nhân viên y tế sẽ dùng $\\mathrm{Na_{2}C_{2}O_{4}}$ để kết tủa ion $\\mathrm{Ca^{2+}}$. Người ta bổ sung 100 mL $\\mathrm{Na_{2}C_{2}O_{4}}$ 0,155 M vào ống nghiệm chứa 104 mL máu với nồng độ $\\mathrm{Ca^{2+}}$ là $9{,}7\\times10^{-5}$ g/mL. Hãy chứng minh có kết tủa $\\mathrm{CaC_{2}O_{4}}$ tạo thành và tính nồng độ $\\mathrm{Ca^{2+}}$ sau xử lý, biết tích số tan của $\\mathrm{CaC_{2}O_{4}}$ là $1{,}3\\times10^{-8}$.\n\nDùng $M(\\mathrm{Ca}) = 40$ g/mol theo bảng tuần hoàn kèm đề.\n\nDữ kiện chung in kèm đề (Phụ lục A): $h = 6{,}626\\times10^{-34}$ J.s; $c = 3\\times10^{8}$ m/s; $R_H = 109722$ cm$^{-1}$; 1 eV = $1{,}602\\times10^{-19}$ J; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; có in bảng tuần hoàn.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trộn $100\\text{ mL}$ $\\mathrm{Na_2C_2O_4}$ $0{,}155\\text{ M}$ vào $104\\text{ mL}$ máu chứa $\\mathrm{Ca^{2+}}$: quy trình đúng là gì?",
    "explanation": "Cả bước xét kết tủa ($Q$) lẫn bước tính nồng độ dư sau kết tủa đều phải tính trong tổng thể tích $204\\text{ mL} = 0{,}204\\text{ L}$; sau khi tủa vẫn còn lượng nhỏ $[\\mathrm{Ca^{2+}}] = K_{sp}/[\\mathrm{C_2O_4^{2-}}]_{\\text{dư}}$.\n\n**Lời giải đầy đủ:**\n\n-  $n(\\mathrm{Ca^{2+}}) = \\dfrac{104 \\times 9{,}7\\times10^{-5}}{40} = 2{,}52\\times10^{-4}$ mol; tổng thể tích 0,204 L: $[\\mathrm{Ca^{2+}}] = 1{,}24\\times10^{-3}$ M. \n-  $[\\mathrm{C_{2}O_{4}^{2-}}] = \\dfrac{0{,}1 \\times 0{,}155}{0{,}204} = 0{,}0760$ M; $Q = 1{,}24\\times10^{-3} \\times 0{,}076 = 9{,}4\\times10^{-5} > T$: có kết tủa. \n-  Sau kết tủa $\\mathrm{C_{2}O_{4}^{2-}}$ dư $0{,}0760 - 0{,}00124 = 0{,}0747$ M; biến đổi $T = [\\mathrm{Ca^{2+}}][\\mathrm{C_{2}O_{4}^{2-}}]$ thành $[\\mathrm{Ca^{2+}}] = \\dfrac{1{,}3\\times10^{-8}}{0{,}0747}$.\n\nGiữ thêm chữ số trung gian cho kết quả: Có kết tủa; [Ca²⁺] sau xử lý ≈ 1,74×10⁻⁷ M (hệ thống chấp nhận cả giá trị tính chuẩn và giá trị làm tròn 2 chữ số có nghĩa).",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C6c (HK1 2022--2023 Ca 2, Đề tổng hợp 13)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "So $Q$ trực tiếp bằng nồng độ $\\mathrm{Ca^{2+}}$ trong máu và $0{,}155\\text{ M}$ mà quên chia tổng thể tích $204\\text{ mL}$."
      },
      {
        "id": "option-2",
        "label": "Đổi lượng $\\mathrm{Ca^{2+}}$ ra mol, chia số mol mỗi ion cho tổng $0{,}204\\text{ L}$ để xét $Q > K_{sp}$; trừ theo tỉ lệ $1:1$ lấy $[\\mathrm{C_2O_4^{2-}}]_{\\text{dư}}$ rồi tính $[\\mathrm{Ca^{2+}}] = K_{sp}/[\\mathrm{C_2O_4^{2-}}]_{\\text{dư}}$."
      },
      {
        "id": "option-3",
        "label": "Kết luận $[\\mathrm{Ca^{2+}}] = 0$ sau xử lý vì $\\mathrm{C_2O_4^{2-}}$ dư đã kết tủa hoàn toàn ion $\\mathrm{Ca^{2+}}$."
      },
      {
        "id": "option-4",
        "label": "Lấy luôn nồng độ $\\mathrm{C_2O_4^{2-}}$ ban đầu $0{,}155\\text{ M}$ làm mẫu số khi tính $[\\mathrm{Ca^{2+}}]$ cân bằng cuối cùng."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-054",
    "lessonId": "gc-sol-solubility",
    "title": "Đề ĐT25 C6b: Điều kiện xuất hiện kết tủa",
    "prompt": "Trộn lẫn hai thể tích bằng nhau của dung dịch $\\mathrm{SrCl_{2}}$ 0,1 M và dung dịch $\\mathrm{K_{2}SO_{4}}$ 0,02 M. Biết tích số tan của $\\mathrm{SrSO_{4}}$ là $3{,}6\\times10^{-7}$. Hỏi có tạo kết tủa khi trộn lẫn 2 dung dịch này không?\n\nDữ kiện chung in kèm đề (Phụ lục A): $c = 3\\times10^{8}$ m/s; $h = 6{,}625\\times10^{-34}$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = $1{,}602\\times10^{-19}$ J; $Z(\\text{Li}) = 3$; $Z(\\text{B}) = 5$; $T$(K) = $t$(°C) + 273; $M$(N) = 14 g/mol, $M$(O) = 16 g/mol; $N_A = 6{,}023\\times10^{23}$, $F = 96\\,500$ C.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Khi xét khả năng kết tủa nếu trộn thể tích bằng nhau của $\\mathrm{SrCl_2}$ $0{,}1\\text{ M}$ và $\\mathrm{K_2SO_4}$ $0{,}02\\text{ M}$, cách làm nào đúng?",
    "explanation": "Không dùng nồng độ trước trộn để tính $Q$; khi trộn hai thể tích bằng nhau, mỗi nồng độ ban đầu giảm đi một nửa trước khi nhân lại thành $Q$.\n\n**Lời giải đầy đủ:**\n\n-  Trộn thể tích bằng nhau: $[\\mathrm{Sr^{2+}}] = 0{,}1/2 = 0{,}05$ M; $[\\mathrm{SO_{4}^{2-}}] = 0{,}02/2 = 0{,}01$ M. \n-  $Q = 0{,}05 \\times 0{,}01 = 5\\times10^{-4}$; so với $T = 3{,}6\\times10^{-7}$.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-10c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C6b (HK2 2023--2024)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy thẳng nồng độ trước trộn $0{,}1 \\times 0{,}02 = 2\\times 10^{-3}$ làm tích ion $Q$."
      },
      {
        "id": "option-2",
        "label": "Tính độ tan trong nước $s = \\sqrt{K_{sp}}$ rồi so trực tiếp với nồng độ $\\mathrm{K_2SO_4}$ $0{,}02\\text{ M}$."
      },
      {
        "id": "option-3",
        "label": "Cộng hai nồng độ $(0{,}1 + 0{,}02)/2$ làm nồng độ ion chung trước khi bình phương."
      },
      {
        "id": "option-4",
        "label": "Tính nồng độ ngay sau trộn trong tổng thể tích gấp đôi ($[\\mathrm{Sr^{2+}}] = 0{,}05\\text{ M}$, $[\\mathrm{SO_4^{2-}}] = 0{,}01\\text{ M}$), rồi tính $Q = [\\mathrm{Sr^{2+}}][\\mathrm{SO_4^{2-}}]$ so với $K_{sp}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-055",
    "lessonId": "gc-sol-acid-mixture",
    "title": "Đề ĐT02 C4: pH hỗn hợp axit",
    "prompt": "Tính nồng độ ion $\\mathrm{H_{3}O^{+}}$ và $\\mathrm{CH_{3}COO^{-}}$ trong dung dịch chứa đồng thời HCl nồng độ 0,05 M và $\\mathrm{CH_{3}COOH}$ nồng độ 0,1 M. Biết $K_a$ của axit axetic là $1{,}75\\times10^{-5}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Dung dịch chứa đồng thời axit mạnh $\\mathrm{HCl}$ $0{,}05\\text{ M}$ và axit yếu $\\mathrm{CH_3COOH}$ $0{,}1\\text{ M}$: cách lập cân bằng nào đúng?",
    "explanation": "Không được cộng pH hay tính $\\mathrm{CH_3COOH}$ tách rời; $\\mathrm{H^+}$ từ $\\mathrm{HCl}$ đóng vai trò ion chung làm giảm mạnh độ phân li của $\\mathrm{CH_3COOH}$.\n\n**Lời giải đầy đủ:**\n\n-  HCl là axit mạnh, phân li hoàn toàn: $[\\mathrm{H^{+}}]$ từ HCl $= 0{,}05$ M. $\\mathrm{H^{+}}$ này là ion chung với cân bằng $\\mathrm{CH_{3}COOH \\rightleftharpoons  H^{+} + CH_{3}COO^{-}}$. \n-  3 dòng (mol/L): ban đầu $\\mathrm{CH_{3}COOH}$ 0,1 | $\\mathrm{H^{+}}$ 0,05 | $\\mathrm{CH_{3}COO^{-}}$ 0; phân li $-x$ | $+x$ | $+x$; cân bằng $0{,}1 - x$ | $0{,}05 + x$ | $x$. \n-  $K_a = \\dfrac{(0{,}05 + x)x}{0{,}1 - x} = 1{,}75\\times10^{-5}$. \n-  Giả sử $x \\ll 0{,}05$ (axit yếu bị $\\mathrm{H^{+}}$ nén phân li): $\\dfrac{0{,}05x}{0{,}1} = 1{,}75\\times10^{-5} \\Rightarrow x = 3{,}5\\times10^{-5}$ M. \n-  Kiểm tra: $x/0{,}05 = 0{,}07\\% \\ll 5\\%$: giả sử đúng. Vậy $[\\mathrm{H_{3}O^{+}}] = 0{,}05 + x \\approx 0{,}05$ M, $[\\mathrm{CH_{3}COO^{-}}] = x$. \n-  So sánh: không có HCl, $\\mathrm{CH_{3}COOH}$ 0,1 M cho $[\\mathrm{CH_{3}COO^{-}}] = \\sqrt{K_aC} = 1{,}3\\times10^{-3}$ M, tức gấp gần 40 lần. Đó là hiệu ứng ion chung.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-r2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT02 C4 (Hè 2012)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính riêng $\\mathrm{pH}$ của $\\mathrm{HCl}$ $0{,}05\\text{ M}$ và $\\mathrm{CH_3COOH}$ $0{,}1\\text{ M}$ rồi cộng hai giá trị $\\mathrm{pH}$ lại."
      },
      {
        "id": "option-2",
        "label": "Tính $[\\mathrm{H^+}] = \\sqrt{K_a \\cdot 0{,}1}$ cho $\\mathrm{CH_3COOH}$ riêng lẻ rồi cộng vào $0{,}05\\text{ M}$, bỏ qua ion chung $\\mathrm{H^+}$."
      },
      {
        "id": "option-3",
        "label": "$\\mathrm{HCl}$ phân li hoàn toàn tạo $[\\mathrm{H^+}]_0 = 0{,}05\\text{ M}$ ở dòng đầu của $\\mathrm{CH_3COOH}$; giải $K_a = \\frac{(0{,}05+x)x}{0{,}1-x}$ với $x = [\\mathrm{CH_3COO^-}]$."
      },
      {
        "id": "option-4",
        "label": "Lập phản ứng trung hòa giữa axit mạnh $\\mathrm{HCl}$ và axit yếu $\\mathrm{CH_3COOH}$ theo tỉ lệ $1:1$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c6-sol-056",
    "lessonId": "gc-sol-acid-mixture",
    "title": "Đề ĐT21 C6c: pH hỗn hợp axit",
    "prompt": "Tính pH của dung dịch có chứa axit axetic $\\mathrm{CH_{3}COOH}$ 0,02 M và axit benzoic $\\mathrm{C_{6}H_{5}COOH}$ 0,01 M. Biết hằng số $K_a$ của $\\mathrm{CH_{3}COOH}$ là $1{,}8\\times10^{-5}$, $K_a$ của $\\mathrm{C_{6}H_{5}COOH}$ là $6{,}3\\times10^{-5}$.\n\nQuy ước dung dịch ở 25 °C: $K_w = 10^{-14}$; hoạt độ lấy bằng nồng độ mol/L, thể tích khi trộn được coi là cộng được.\n\n**Câu hỏi:** Trong dung dịch chứa đồng thời hai axit yếu $\\mathrm{CH_3COOH}$ ($K_1, C_1$) và $\\mathrm{C_6H_5COOH}$ ($K_2, C_2$), cách tính $[\\mathrm{H^+}]$ nào đúng?",
    "explanation": "Hai axit trong cùng dung dịch dùng chung một nồng độ $[\\mathrm{H^+}] = h$; cân bằng điện tích $h \\approx K_1 C_1/h + K_2 C_2/h$ dẫn đến $h \\approx \\sqrt{K_1 C_1 + K_2 C_2}$ (cần kiểm tra điều kiện phân li ít).\n\n**Lời giải đầy đủ:**\n\n-  Hai axit yếu cùng góp $\\mathrm{H^{+}}$: $[\\mathrm{H^{+}}] = [\\mathrm{A^{-}}_1] + [\\mathrm{A^{-}}_2] = \\dfrac{K_1C_1}{[\\mathrm{H^{+}}]} + \\dfrac{K_2C_2}{[\\mathrm{H^{+}}]}$. \n-  Nhân hai vế với $[\\mathrm{H^{+}}]$: $[\\mathrm{H^{+}}]^2 = K_1C_1 + K_2C_2 = 3{,}6\\times10^{-7} + 6{,}3\\times10^{-7} = 9{,}9\\times10^{-7}$.\n\nKiểm tra gần đúng: axit benzoic có K₂/[H⁺] ≈ 6,3%, hơi vượt ngưỡng 5%. Giải cân bằng điện tích đầy đủ cho pH ≈ 3,012 (làm tròn 3,01), sát với giá trị ước lượng 3,00 ở trên.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/kieu-r2.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C6c (Đề tổng hợp 11)."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $\\mathrm{pH}$ của từng axit riêng lẻ rồi cộng hai giá trị $\\mathrm{pH}$ hoặc lấy trung bình cộng."
      },
      {
        "id": "option-2",
        "label": "Tính riêng $[\\mathrm{H^+}]_1 = \\sqrt{K_1 C_1}$ và $[\\mathrm{H^+}]_2 = \\sqrt{K_2 C_2}$ rồi cộng trực tiếp: $[\\mathrm{H^+}] = \\sqrt{K_1 C_1} + \\sqrt{K_2 C_2}$."
      },
      {
        "id": "option-3",
        "label": "Bỏ hoàn toàn $\\mathrm{CH_3COOH}$ vì $K_1 < K_2$ nên chỉ có axit benzoic đóng góp $\\mathrm{H^+}$."
      },
      {
        "id": "option-4",
        "label": "Hai axit cùng chia sẻ một $[\\mathrm{H^+}]$ chung qua cân bằng điện tích $h \\approx [\\mathrm{A_1^-}] + [\\mathrm{A_2^-}]$, cho $h \\approx \\sqrt{K_1 C_1 + K_2 C_2}$ khi phân li ít."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c6-sol-057",
    "lessonId": "gc-sol-drawing-guide",
    "title": "Tìm lỗi khi viết tích số tan của CaF₂",
    "prompt": "Một bạn viết: CaF₂ tan s mol/L thì [Ca²⁺] = s, [F⁻] = 2s, nên Ksp = s×2s = 2s². Tìm lỗi và sửa. Cho Ksp = 4,0×10⁻¹¹.\n\n**Câu hỏi:** Bạn viết $K_{sp} = s \\times 2s = 2s^2$ cho $\\mathrm{CaF_2}$ đã mắc lỗi nào?",
    "explanation": "Hệ số $2$ của $\\mathrm{F^-}$ trong phương trình tan $\\mathrm{CaF_2(r) \\rightleftharpoons Ca^{2+} + 2F^-}$ trở thành số mũ trong biểu thức cân bằng: $K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2 = s(2s)^2 = 4s^3$.\n\n**Lời giải đầy đủ:**\n\nCân bằng tan: $\\mathrm{CaF_2(r)} \\rightleftharpoons \\mathrm{Ca^{2+}} + 2\\mathrm{F^-}$. Vì $K_{sp}=[\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2=s(2s)^2=4s^3$, độ tan là $s=2{,}15\\times10^{-4}$ mol/L.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tìm lỗi tự soạn từ Lỗi hay gặp Dạng 10."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Đặt sai nồng độ ion; phải lấy $[\\mathrm{F^-}] = s$ và $[\\mathrm{Ca^{2+}}] = 2s$."
      },
      {
        "id": "option-2",
        "label": "Thiếu bình phương $[\\mathrm{F^-}]$; đúng phải là $K_{sp} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2 = s(2s)^2 = 4s^3$."
      },
      {
        "id": "option-3",
        "label": "Bỏ sót nồng độ chất rắn $[\\mathrm{CaF_2(r)}]$ ở mẫu số của biểu thức tích số tan."
      },
      {
        "id": "option-4",
        "label": "Nhân thừa hệ số $2$; biểu thức đúng chỉ là $K_{sp} = s \\cdot s^2 = s^3$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c6-sol-058",
    "lessonId": "gc-sol-drawing-guide",
    "title": "Đề hỏi gì thì dùng gì khi chuẩn độ?",
    "prompt": "Chuẩn độ 50 mL HCN 0,1 M bằng NaOH 0,5 M. Chọn phương pháp tại 5 mL, 10 mL và 50 mL NaOH đã thêm.\n\n**Câu hỏi:** Trước khi tính pH tại ba thể tích $5$, $10$ và $50\\text{ mL}$ $\\mathrm{NaOH}$, nên lập gì trước?",
    "explanation": "$\\mathrm{HCN}$ có $50 \\times 0{,}1 = 5\\text{ mmol}$ nên $V_{\\mathrm{tđ}} = 5/0{,}5 = 10\\text{ mL}$ $\\mathrm{NaOH}$; xác định mốc này trước giúp phân vùng đúng cho $5$, $10$ và $50\\text{ mL}$.\n\n**Lời giải đầy đủ:**\n\nTính mốc tương đương từ số mmol trước. Trước mốc còn HA/A⁻, tại mốc chỉ còn muối thủy phân, sau mốc dùng kiềm mạnh dư.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-6/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài chọn phương pháp tự soạn theo Dạng 9d."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Áp dụng công thức đệm Henderson–Hasselbalch cho cả ba mốc thể tích đã cho."
      },
      {
        "id": "option-2",
        "label": "Coi $\\mathrm{pH} = 7$ tại $V = 50\\text{ mL}$ vì thể tích $\\mathrm{NaOH}$ bằng thể tích $\\mathrm{HCN}$."
      },
      {
        "id": "option-3",
        "label": "Lấy thẳng nồng độ đầu $C_{\\mathrm{NaOH}}/C_{\\mathrm{HCN}} = 0{,}5/0{,}1$ đưa vào công thức đệm."
      },
      {
        "id": "option-4",
        "label": "Lập bảng mmol phản ứng trung hòa và xác định mốc tương đương $V_{\\mathrm{tđ}} = 10\\text{ mL}$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-029",
    "lessonId": "gc-ec-redox",
    "title": "Cân bằng nửa phản ứng vanadi trong axit",
    "prompt": "Cân bằng VO₂⁺ → VO²⁺ trong dung dịch axit.\n\n**Câu hỏi:** Nửa phản ứng nào cân bằng cả nguyên tố và điện tích?",
    "explanation": "Trong môi trường axit, thêm H₂O vào vế thiếu O, thêm 2H⁺ vào vế đối diện để cân bằng H, rồi thêm 1 e⁻ bên trái để hai vế cùng có điện tích +2 (V giảm từ +5 xuống +4).\n\n**Lời giải đầy đủ:**\n\nThêm H₂O để cân bằng O, thêm 2H⁺ để cân bằng H. Thêm một electron bên trái để hai vế đều có điện tích +2.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tự soạn theo lỗi hay gặp và phương pháp trong Tổng ôn CHE1080, Dạng 11."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "VO₂⁺ + e⁻ → VO²⁺"
      },
      {
        "id": "option-2",
        "label": "VO₂⁺ + 2H⁺ + 2e⁻ → VO²⁺ + H₂O"
      },
      {
        "id": "option-3",
        "label": "VO₂⁺ + 2H⁺ → VO²⁺ + H₂O + e⁻"
      },
      {
        "id": "option-4",
        "label": "VO₂⁺ + 2H⁺ + e⁻ → VO²⁺ + H₂O"
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-030",
    "lessonId": "gc-ec-galvanic-cell",
    "title": "Chiều electron và ion qua cầu muối",
    "prompt": "Pin Zn | Zn²⁺ || Fe³⁺, Fe²⁺ | Pt có Zn là anot.\n\n**Câu hỏi:** Mô tả nào đúng?",
    "explanation": "Zn nhường electron ở anot nên electron đi theo dây dẫn ngoài từ Zn đến Pt. Trong dung dịch, Zn²⁺ sinh ra làm tăng điện tích dương ở ngăn Zn nên anion từ cầu muối đi về ngăn Zn (electron không đi qua dung dịch/cầu muối).\n\n**Lời giải đầy đủ:**\n\nZn nhường electron ở anot. Zn²⁺ tạo ra làm tăng điện tích dương trong ngăn Zn nên anion đi về đó; electron chỉ qua dây ngoài.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tự soạn theo lỗi hay gặp và phương pháp trong Tổng ôn CHE1080, Dạng 11."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Electron qua dây ngoài từ Zn đến Pt; anion cầu muối về ngăn Zn."
      },
      {
        "id": "option-2",
        "label": "Electron đi qua cầu muối từ Pt đến Zn; cation về ngăn Zn."
      },
      {
        "id": "option-3",
        "label": "Electron qua dây ngoài từ Pt đến Zn; anion cầu muối về ngăn Pt."
      },
      {
        "id": "option-4",
        "label": "Electron qua dây ngoài từ Zn đến Pt; cation cầu muối về ngăn Zn để bù Zn²⁺."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-001",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT02 C5: pin điện hóa và Nernst",
    "prompt": "Có một pin gồm 2 điện cực chuẩn ở 25 °C. Một điện cực là điện cực trơ Pt nhúng trong dung dịch $\\mathrm{Sn^{4+}}$/$\\mathrm{Sn^{2+}}$, điện cực kia là điện cực trơ Pt nhúng trong dung dịch $\\mathrm{Fe^{3+}}$/$\\mathrm{Fe^{2+}}$.\n\n-  Tính sức điện động của pin biết thế điện cực tiêu chuẩn của cặp $\\mathrm{Fe^{3+}}$/$\\mathrm{Fe^{2+}}$ bằng 0,77 V và của cặp $\\mathrm{Sn^{4+}}$/$\\mathrm{Sn^{2+}}$ là bằng 0,15 V.\n\n-  Nếu nồng độ của $\\mathrm{Sn^{4+}}$ là 0,1 M, của $\\mathrm{Sn^{2+}}$ là 1 M, của $\\mathrm{Fe^{3+}}$ là 1 M và của $\\mathrm{Fe^{2+}}$ là 0,01 M thì sức điện động của pin tại 25 °C bằng bao nhiêu?\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Cặp có thế khử $E$ cao hơn đóng vai trò catot (nhận electron). Ở nồng độ khác chuẩn phải tính $E$ thực tế từng cực theo Nernst với tỉ số $[\\text{Ox}]/[\\text{Kh}]$ và không nhân $E$ với hệ số.\n\n**Lời giải đầy đủ:**\n\n-  a) $E^\\circ_{pin} = E^\\circ_{catot} - E^\\circ_{anot} = 0{,}77 - 0{,}15 = 0{,}62$ V (catot là cặp Fe). \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  b) $E_{\\mathrm{Fe}} = 0{,}77 + 0{,}059\\lg\\dfrac{1}{0{,}01} = 0{,}77 + 0{,}118 = 0{,}888$ V; $E_{\\mathrm{Sn}} = 0{,}15 + \\dfrac{0{,}059}{2}\\lg\\dfrac{0{,}1}{1} = 0{,}15 - 0{,}0295 = 0{,}1205$ V. \n\n-  $E_{pin} = 0{,}888 - 0{,}1205$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Sn²⁺ + 2Fe³⁺ → Sn⁴⁺ + 2Fe²⁺; Ecatot = 0,888 V; Eanot = 0,1205 V; Epin = 0,7675 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT02 C5 (Hè 2012), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}})$ với 2 cho bằng số electron của $\\mathrm{Sn^{4+}/Sn^{2+}}$ rồi mới so sánh thế."
      },
      {
        "id": "option-2",
        "label": "Tính thế khử $E$ của hai cặp $\\mathrm{Fe^{3+}/Fe^{2+}}$ và $\\mathrm{Sn^{4+}/Sn^{2+}}$ theo Nernst ($\\lg([\\text{Ox}]/[\\text{Kh}])$), rồi chọn cặp có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với tỉ số $[\\text{Kh}]/[\\text{Ox}]$ (tức $[\\mathrm{Fe^{2+}}]/[\\mathrm{Fe^{3+}}]$ và $[\\mathrm{Sn^{2+}}]/[\\mathrm{Sn^{4+}}]$) để tìm catot."
      },
      {
        "id": "option-4",
        "label": "Chỉ so sánh hệ số cân bằng hoặc chọn cặp có nồng độ ion ban đầu lớn hơn làm catot."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-002",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT04 C6: pin điện hóa và Nernst",
    "prompt": "Pin galvani được thiết lập gồm điện cực Ag nhúng trong dung dịch $\\mathrm{Ag^{+}}$ 0,1 M và điện cực Pt nhúng trong dung dịch hỗn hợp $\\mathrm{FeCl_{3}}$ 0,005 M và $\\mathrm{FeCl_{2}}$ 0,15 M. Thế điện cực của các cặp oxi hóa-khử liên hợp: $E^\\circ(\\mathrm{Ag^{+}/Ag})$ = 0,80 V; $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}})$ = 0,77 V. Viết phương trình oxi hóa khử khi pin làm việc và xác định sức điện động (hay thế điện cực chuẩn) $\\Delta E$ của pin ở 25 °C.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Hai thế chuẩn ($0{,}80$ V và $0{,}77$ V) rất gần nhau nên nồng độ có thể làm đổi chiều pin; cần tính $E$ thực tế từng cực theo Nernst với $[\\text{Ox}]/[\\text{Kh}]$ (hoạt độ Ag rắn bằng 1, $n=1$).\n\n**Lời giải đầy đủ:**\n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  $E_{\\mathrm{Ag}} = 0{,}80 + 0{,}059\\lg 0{,}1 = 0{,}741$ V. \n\n-  $E_{\\mathrm{Fe}} = 0{,}77 + 0{,}059\\lg\\dfrac{0{,}005}{0{,}15} = 0{,}77 - 0{,}087 = 0{,}683$ V. \n\n-  $E_{\\mathrm{Ag}} > E_{\\mathrm{Fe}}$ nên Ag là catot: $\\mathrm{Ag^{+} + Fe^{2+} \\to  Ag + Fe^{3+}}$; $\\Delta E = 0{,}741 - 0{,}683$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Ag⁺ + Fe²⁺ → Ag + Fe³⁺; Ecatot = 0,741 V; Eanot = 0,6828498 V; Epin = 0,05815015 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT04 C6 (HK1 2013--2014, 1 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chỉ dựa vào $E^\\circ(\\mathrm{Ag^+/Ag}) = 0{,}80\\text{ V} > E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77\\text{ V}$ mà không cần tính $E$ thực tế dù hai $E^\\circ$ rất gần nhau."
      },
      {
        "id": "option-2",
        "label": "Viết Nernst với tỉ số nghịch đảo $[\\text{Kh}]/[\\text{Ox}]$ (tức $\\lg([\\mathrm{Fe^{2+}}]/[\\mathrm{Fe^{3+}}])$ và $\\lg(1/[\\mathrm{Ag^+}])$) rồi so sánh $E$."
      },
      {
        "id": "option-3",
        "label": "Tính thế thực tế $E(\\mathrm{Ag^+/Ag})$ và $E(\\mathrm{Fe^{3+}/Fe^{2+}})$ bằng Nernst với $[\\text{Ox}]/[\\text{Kh}]$, rồi so sánh $E$ để chọn catot."
      },
      {
        "id": "option-4",
        "label": "Đưa hoạt độ kim loại Ag rắn vào mẫu số khác 1 hoặc lấy $n = 2$ trong Nernst của cực $\\mathrm{Ag^+/Ag}$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-003",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT05 C7: pin điện hóa và Nernst",
    "prompt": "Pin gavani được tạo bởi hai nửa phương trình sau: $\\mathrm{Au^{3+} + 3e^{-} \\to  Au}$, $E^\\circ(\\mathrm{Au^{3+}/Au})$ = 1,50 V; $\\mathrm{Tl^{+} + e^{-} \\to  Tl}$, $E^\\circ(\\mathrm{Tl^{+}/Tl})$ = $-0{,}34$ V. Viết phương trình oxi hóa khử khi pin làm việc, chỉ ra catot, anot và tính sức điện động (hay thế điện cực chuẩn) $\\Delta E$ của pin ở 25 °C, biết: $[\\mathrm{Au^{3+}}] = 0{,}01$ M, $[\\mathrm{Tl^{+}}] = 1.0e-3$ M.\n\nDữ kiện chung in kèm đề: $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; H = 1, N = 14, Ca = 40, C = 12, O = 16, Na = 23, Au = 197, Tl = 204, Ag = 108, P = 31; $F = 96\\,500$ C/mol electron. (Bản gốc in thiếu giá trị của N; tuyển tập điền 14.)\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Thế khử $E$ là đại lượng cường độ nên không nhân theo hệ số cân bằng. Mỗi nửa phản ứng dùng đúng $n$ riêng ($n=3$ cho Au³⁺/Au, $n=1$ cho Tl⁺/Tl) và tỉ số $[\\text{Ox}]/[\\text{Kh}]$.\n\n**Lời giải đầy đủ:**\n\n-  $1{,}50 > -0{,}34$ nên catot Au, anot Tl; cân bằng electron: $\\mathrm{Au^{3+} + 3Tl \\to  Au + 3Tl^{+}}$. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  $E_{\\mathrm{Au}} = 1{,}50 + \\dfrac{0{,}059}{3}\\lg 0{,}01 = 1{,}50 - 0{,}039 = 1{,}461$ V; $E_{\\mathrm{Tl}} = -0{,}34 + 0{,}059\\lg 10^{-3} = -0{,}517$ V. \n\n-  $\\Delta E = 1{,}461 - (-0{,}517)$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Au³⁺ + 3Tl → Au + 3Tl⁺; Ecatot = 1,460667 V; Eanot = -0,517 V; Epin = 1,977667 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT05 C7 (HK2 2013--2014, 1 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Tl^{+}/Tl}) = -0{,}34$ V với 3 để cân bằng số electron rồi mới tính $E$ từng cực."
      },
      {
        "id": "option-2",
        "label": "Dùng cùng $n = 3$ cho cả phương trình Nernst của $\\mathrm{Tl^{+}/Tl}$ vì phản ứng tổng trao đổi 3 electron."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với $\\lg(1/[\\mathrm{Au^{3+}}])$ và $\\lg(1/[\\mathrm{Tl^{+}}])$ trước khi so sánh thế hai cực."
      },
      {
        "id": "option-4",
        "label": "Tính Nernst cho $\\mathrm{Au^{3+}/Au}$ ($n=3$) và $\\mathrm{Tl^{+}/Tl}$ ($n=1$) với $\\lg[\\text{Ox}]$, rồi chọn cực có $E$ cao hơn làm catot."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-004",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT06 C6: pin điện hóa và Nernst",
    "prompt": "Cho thế điện cực tiêu chuẩn sau: $E^\\circ(\\mathrm{Cu^{2+}/Cu})$ = 0,337 V; $E^\\circ(\\mathrm{Zn^{2+}/Zn})$ = $-0{,}763$ V. Xác định chiều dòng điện, tính sức điện động và viết các phản ứng xảy ra ở mỗi điện cực trong pin điện hoá sau: Zn $|$ $\\mathrm{Zn^{2+}}$ 0,01 M $\\|$ $\\mathrm{Cu^{2+}}$ 0,1 M $|$ Cu\n\nDữ kiện chung in kèm đề: $m_e = 9.11e-31$ kg; $h = 6.625e-34$ J.s; $e = 1.6e-19$ C; 1 eV = 1.6e-19 J; 1 m = $10^9$ nm = $10^{10}$ Å; $c = 3e8$ m/s; $k_e = 9e9$ N.m$^2$/C$^2$.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Theo quy ước sơ đồ pin, anot (−) ở bên trái và catot (+) ở bên phải. Cả hai cặp đều có $n=2$, tính $E = E^\\circ + \\frac{0{,}059}{2}\\lg[\\mathrm{M^{2+}}]$ để kiểm tra chiều phản ứng.\n\n**Lời giải đầy đủ:**\n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  $E_{\\mathrm{Cu}} = 0{,}337 + 0{,}0295\\lg 0{,}1 = 0{,}3075$ V; $E_{\\mathrm{Zn}} = -0{,}763 + 0{,}0295\\lg 0{,}01 = -0{,}822$ V. \n\n-  Catot Cu (+), anot Zn (–); electron đi từ Zn sang Cu ở mạch ngoài, dòng điện ngược lại. \n\n-  $\\Delta E = 0{,}3075 - (-0{,}822)$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Zn + Cu²⁺ → Zn²⁺ + Cu; Ecatot = 0,3075 V; Eanot = -0,822 V; Epin = 1,1295 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT06 C6 (Hè 2013--2014, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính Nernst cho $\\mathrm{Cu^{2+}/Cu}$ và $\\mathrm{Zn^{2+}/Zn}$ (đều có $n=2$, tỉ số $[\\text{Ox}]/[\\text{Kh}]$), rồi chọn cực có $E$ cao hơn làm catot."
      },
      {
        "id": "option-2",
        "label": "Dựa vào sơ đồ pin và chọn Zn (điện cực bên trái) làm catot (+), còn Cu làm anot (−)."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với dấu trừ trước $\\frac{0{,}059}{2}\\lg[\\mathrm{M^{2+}}]$ (tức đảo tỉ số thành $[\\text{Kh}]/[\\text{Ox}]$)."
      },
      {
        "id": "option-4",
        "label": "Lấy $n = 1$ trong phương trình Nernst của mỗi cực vì mỗi phương trình chỉ có một loại ion kim loại."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-005",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT07 C7: pin điện hóa và Nernst",
    "prompt": "Pin gavani được xây dựng từ 2 nửa phương trình và thế điện cực ($\\varphi^\\circ$) tương ứng: $\\mathrm{Ag^{+} + e \\to  Ag}$, $\\varphi^\\circ(\\mathrm{Ag^{+}/Ag}) = +0{,}80$ V; $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $\\varphi^\\circ(\\mathrm{Cu^{2+}/Cu}) = +0{,}34$ V.\n\n-  Hãy viết phương trình làm việc của pin gavani trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ của phản ứng ở 25 °C.\n\n-  Tính sức điện động ($\\Delta E^\\circ$) của pin làm việc ở nồng độ các chất là $[\\mathrm{Ag^{+}}] = 0{,}01$ M và $[\\mathrm{Cu^{2+}}] = 0{,}01$ M.\n\n**Ghi chú của tuyển tập:** Ý c hỏi ở nồng độ khác chuẩn nên đại lượng cần tính là $\\Delta E$, không phải $\\Delta E^\\circ$ (cùng tình huống ở ĐT11 C7c).\n\n**Lưu ý:** ý hỏi nồng độ khác chuẩn được hiểu là $E$, dù bản đề ghi $E^\\circ$.\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3e8$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Không nhân $E$ với hệ số; dùng đúng $n=1$ cho $\\mathrm{Ag^+/Ag}$ và $n=2$ cho $\\mathrm{Cu^{2+}/Cu}$ cùng tỉ số $[\\text{Ox}]/[\\text{Kh}]$ trong Nernst rồi so sánh hai thế thực tế.\n\n**Lời giải đầy đủ:**\n\n-  So sánh: $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0.8 > E^\\circ(\\mathrm{Cu^{2+}/Cu}) = 0.34$ nên catot là $\\mathrm{Ag^{+}/Ag}$, anot là $\\mathrm{Cu^{2+}/Cu}$. Phản ứng: $\\mathrm{2Ag^{+} + Cu \\to  2Ag + Cu^{2+}}$. \n\n-  $E^\\circ_{pin} = 0.8 - (0.34) = 0.46$ V; $\\Delta G^\\circ = -nFE^\\circ = -2 \\times 96500 \\times 0.46 = -8.878e+04$ J. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  Catot: $E = 0.8 + \\dfrac{0{,}059}{1}\\lg 0.01 = 0.682$ V; anot: $E = 0.34 + \\dfrac{0{,}059}{2}\\lg 0.01 = 0.281$ V. \n\n-  $\\Delta E = E_{catot} - E_{anot} = 0.401$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Cu + 2Ag⁺ → Cu²⁺ + 2Ag; Ecatot = 0,682 V; Eanot = 0,281 V; Epin = 0,401 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT07 C7 (HK1 2015--2016, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0{,}80$ V với 2 để cân bằng với $\\mathrm{Cu^{2+}/Cu}$ trước khi tính $E_{\\text{pin}}$."
      },
      {
        "id": "option-2",
        "label": "Viết Nernst với $\\lg(1/[\\mathrm{Ag^{+}}])$ và $\\lg(1/[\\mathrm{Cu^{2+}}])$ rồi cộng hai thế cực lại."
      },
      {
        "id": "option-3",
        "label": "Tính thế thực tế $E(\\mathrm{Ag^{+}/Ag})$ ($n=1$) và $E(\\mathrm{Cu^{2+}/Cu})$ ($n=2$) bằng Nernst, rồi chọn cặp có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-4",
        "label": "Dùng $n = 2$ cho nửa phản ứng $\\mathrm{Ag^{+}/Ag}$ vì phương trình tổng có hệ số 2 trước $\\mathrm{Ag^{+}}$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-006",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT09 C7: pin điện hóa và Nernst",
    "prompt": "Một pin được xây dựng từ 2 nửa phương trình và thế điện cực chuẩn ($E^\\circ$) tương ứng: $\\mathrm{Ag^{+} + e \\to  Ag}$, $E^\\circ(\\mathrm{Ag^{+}/Ag}) = +0{,}80$ V; $\\mathrm{Zn^{2+} + 2e \\to  Zn}$, $E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76$ V.\n\n-  Viết phương trình phản ứng xảy ra trong pin trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ (theo J/mol) của phản ứng ở 25 °C.\n\n-  Tính sức điện động của pin làm việc ở nồng độ các chất là $[\\mathrm{Ag^{+}}] = 0{,}01$ M và $[\\mathrm{Zn^{2+}}] = 0{,}01$ M.\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3e8$ m/s; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = 1.6e-19 J; $T$(K) = $t$(°C) + 273.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Tính $E$ thực tế từng cực với đúng $n$ riêng ($n=1$ cho Ag, $n=2$ cho Zn) và tỉ số $[\\text{Ox}]/[\\text{Kh}]$; không nhân $E$ với hệ số và luôn lấy $E_{\\text{pin}} = E_{\\text{catot}} - E_{\\text{anot}}$.\n\n**Lời giải đầy đủ:**\n\n-  So sánh: $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0.8 > E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0.76$ nên catot là $\\mathrm{Ag^{+}/Ag}$, anot là $\\mathrm{Zn^{2+}/Zn}$. Phản ứng: $\\mathrm{2Ag^{+} + Zn \\to  2Ag + Zn^{2+}}$. \n\n-  $E^\\circ_{pin} = 0.8 - (-0.76) = 1.56$ V; $\\Delta G^\\circ = -nFE^\\circ = -2 \\times 96500 \\times 1.56 = -3.011e+05$ J. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  Catot: $E = 0.8 + \\dfrac{0{,}059}{1}\\lg 0.01 = 0.682$ V; anot: $E = -0.76 + \\dfrac{0{,}059}{2}\\lg 0.01 = -0.819$ V. \n\n-  $\\Delta E = E_{catot} - E_{anot} = 1.501$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Zn + 2Ag⁺ → Zn²⁺ + 2Ag; Ecatot = 0,682 V; Eanot = -0,819 V; Epin = 1,501 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT09 C7 (HK2 2015--2016, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag})$ với 2 theo hệ số phương trình tổng rồi trừ $E^\\circ(\\mathrm{Zn^{2+}/Zn})$."
      },
      {
        "id": "option-2",
        "label": "Tính Nernst cho $\\mathrm{Ag^{+}/Ag}$ ($n=1$) và $\\mathrm{Zn^{2+}/Zn}$ ($n=2$) với $\\lg[\\text{Ox}]$, rồi chọn cặp có $E$ cao hơn làm catot."
      },
      {
        "id": "option-3",
        "label": "Tính $E_{\\text{pin}} = E_{\\mathrm{Zn}} - E_{\\mathrm{Ag}}$ (lấy thế anot trừ thế catot) rồi lấy trị tuyệt đối."
      },
      {
        "id": "option-4",
        "label": "Thay tỉ số nghịch đảo $[\\text{Kh}]/[\\text{Ox}]$ vào phương trình Nernst của từng điện cực."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-007",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT10 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa/khử có thế điện cực chuẩn ($E^\\circ$) tương ứng: $\\mathrm{Ag^{+} + e \\to  Ag}$, $E^\\circ(\\mathrm{Ag^{+}/Ag})$ = +0,80 V; $\\mathrm{Fe^{2+} + 2e \\to  Fe}$, $E^\\circ(\\mathrm{Fe^{2+}/Fe})$ = $-0{,}44$ V.\n\n-  Hãy viết phương trình làm việc của pin điện hóa kể trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ (theo kJ/mol) của phản ứng ở 25 °C.\n\n-  Tính sức điện động ($\\Delta E$) của pin làm việc ở 25 °C khi nồng độ: $[\\mathrm{Ag^{+}}] = 0{,}01$ M và $[\\mathrm{Fe^{2+}}] = 0{,}01$ M.\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Mỗi cực viết Nernst với $n$ của riêng nửa phản ứng đó ($n=1$ cho Ag⁺/Ag, $n=2$ cho Fe²⁺/Fe) và tỉ số $[\\text{Ox}]/[\\text{Kh}]$; thế khử không nhân theo hệ số cân bằng.\n\n**Lời giải đầy đủ:**\n\n-  So sánh: $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0.8 > E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0.44$ nên catot là $\\mathrm{Ag^{+}/Ag}$, anot là $\\mathrm{Fe^{2+}/Fe}$. Phản ứng: $\\mathrm{2Ag^{+} + Fe \\to  2Ag + Fe^{2+}}$. \n\n-  $E^\\circ_{pin} = 0.8 - (-0.44) = 1.24$ V; $\\Delta G^\\circ = -nFE^\\circ = -2 \\times 96500 \\times 1.24 = -2.393e+05$ J. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  Catot: $E = 0.8 + \\dfrac{0{,}059}{1}\\lg 0.01 = 0.682$ V; anot: $E = -0.44 + \\dfrac{0{,}059}{2}\\lg 0.01 = -0.499$ V. \n\n-  $\\Delta E = E_{catot} - E_{anot} = 1.181$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Fe + 2Ag⁺ → Fe²⁺ + 2Ag; Ecatot = 0,682 V; Eanot = -0,499 V; Epin = 1,181 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT10 C7 (HK1 2016--2017, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0{,}80$ V với 2 cho khớp số electron của $\\mathrm{Fe^{2+}/Fe}$ khi tính $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-2",
        "label": "Dùng $n = 2$ trong phương trình Nernst của $\\mathrm{Ag^{+}/Ag}$ vì phản ứng pin có $2\\mathrm{Ag^{+}}$."
      },
      {
        "id": "option-3",
        "label": "Đảo tỉ số thành $[\\text{Kh}]/[\\text{Ox}]$ trong Nernst rồi chọn cực có $E$ nhỏ hơn làm catot."
      },
      {
        "id": "option-4",
        "label": "Tính thế thực tế $E(\\mathrm{Ag^{+}/Ag})$ ($n=1$) và $E(\\mathrm{Fe^{2+}/Fe})$ ($n=2$) bằng Nernst, rồi so sánh $E$ để xác định catot và anot."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-008",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT11 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện được xây dựng từ 2 nửa phương trình và thế điện cực chuẩn ($E^\\circ$) tương ứng: $\\mathrm{Fe^{2+} + 2e \\to  Fe}$, $E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44$ V; $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = +0{,}34$ V.\n\n-  Viết phương trình làm việc của pin điện trên. Chỉ ra đâu là catot và anot, giải thích.\n\n-  Tính $\\Delta G^\\circ$ (kJ/mol) của phản ứng ở 25 °C ($F = 96\\,500$ C/mol).\n\n-  Tính sức điện động ($\\Delta E^\\circ$ theo V) của pin làm việc ở nồng độ các chất là $[\\mathrm{Fe^{2+}}] = 0{,}12$ M và $[\\mathrm{Cu^{2+}}] = 0{,}25$ M tại nhiệt độ 25 °C.\n\n**Lưu ý:** ý hỏi nồng độ khác chuẩn được hiểu là $E$, dù bản đề ghi $E^\\circ$.\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $T$(K) = $t$(°C) + 273.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Catot luôn là cực có thế khử $E$ lớn hơn (ở đây là Cu²⁺/Cu), không phụ thuộc thứ tự viết trong đề. Hai nửa phản ứng đều trao đổi $n=2$ electron và Nernst dùng $\\lg([\\text{Ox}]/[\\text{Kh}])$.\n\n**Lời giải đầy đủ:**\n\n-  So sánh: $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = 0.34 > E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0.44$ nên catot là $\\mathrm{Cu^{2+}/Cu}$, anot là $\\mathrm{Fe^{2+}/Fe}$. Phản ứng: $\\mathrm{Cu^{2+} + Fe \\to  Cu + Fe^{2+}}$. \n\n-  $E^\\circ_{pin} = 0.34 - (-0.44) = 0.78$ V; $\\Delta G^\\circ = -nFE^\\circ = -2 \\times 96500 \\times 0.78 = -1.505e+05$ J. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  Catot: $E = 0.34 + \\dfrac{0{,}059}{2}\\lg 0.25 = 0.3222$ V; anot: $E = -0.44 + \\dfrac{0{,}059}{2}\\lg 0.12 = -0.4672$ V. \n\n-  $\\Delta E = E_{catot} - E_{anot} = 0.7894$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Fe + Cu²⁺ → Fe²⁺ + Cu; Ecatot = 0,3222392 V; Eanot = -0,4671642 V; Epin = 0,7894034 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT11 C7 (HK2 2016--2017, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính Nernst cho $\\mathrm{Cu^{2+}/Cu}$ và $\\mathrm{Fe^{2+}/Fe}$ (đều có $n=2$, tỉ số $[\\text{Ox}]/[\\text{Kh}]$), rồi chọn cực có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-2",
        "label": "Chọn $\\mathrm{Fe^{2+}/Fe}$ làm catot vì được cho trước trong đề, rồi tính $E_{\\mathrm{Fe}} - E_{\\mathrm{Cu}}$."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với $\\lg(1/[\\mathrm{Cu^{2+}}])$ và $\\lg(1/[\\mathrm{Fe^{2+}}])$ vì ion kim loại bị khử ở catot."
      },
      {
        "id": "option-4",
        "label": "Thay $n = 4$ vào công thức Nernst và $\\Delta G^\\circ$ vì cộng số electron của cả hai nửa phản ứng."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-009",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT14 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa/khử có thế điện cực chuẩn ($E^\\circ$) tương ứng:\n$$\\mathrm{Zn^{2+}(dd) + 2e^{-} \\to  Zn(r)}\\qquad E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\ \\text{V}$$\n$$\\mathrm{VO_2^+(dd) + 2H^+(dd) + e^{-} \\to  VO^{2+}(dd) + H_{2}O(l)}\\qquad E^\\circ(\\mathrm{VO_{2}^{+}/VO^{2+}}) = +1{,}00\\ \\text{V}$$\n\n-  Hãy viết phương trình làm việc của pin điện hóa trên và chỉ ra đâu là catot và anot?\n\n-  Tính sức điện động $\\Delta E$ của pin làm việc ở 25 °C với nồng độ các chất $[\\mathrm{Zn^{2+}}] = 2.0e-1$ M; $[\\mathrm{H^{+}}] = 0{,}60$ M; $[\\mathrm{VO_{2}^{+}}] = 1{,}5$ M; $[\\mathrm{VO^{2+}}] = 1.3e-2$ M?\n\n**Ghi chú của tuyển tập:** Bản OCR mất chỉ số và điện tích, in thành ``VO2+/VO2+''. Đã viết lại đúng cặp $\\mathrm{VO_{2}^{+}}$ (dioxovanadi(V)) / $\\mathrm{VO^{2+}}$ (oxovanadi(IV)) theo nửa phản ứng.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Trong nửa phản ứng $\\mathrm{VO_2^+ + 2H^+ + e^- \\to VO^{2+} + H_2O}$, $\\mathrm{H^+}$ ở vế oxi hóa với hệ số 2 nên nằm ở tử số của Nernst với số mũ 2 ($n=1$); không nhân thế với hệ số 2.\n\n**Lời giải đầy đủ:**\n\n-  $1{,}00 > -0{,}76$: catot Pt (cặp V), anot Zn. Nhân nửa phản ứng V với 2: $\\mathrm{Zn + 2VO_{2}^{+} + 4H^{+} \\to  Zn^{2+} + 2VO^{2+} + 2H_{2}O}$. \n\n-  Nernst cho cặp V có $\\mathrm{H^{+}}$ ($\\mathrm{H^{+}}$ nằm bên Ox): $E_V = 1{,}00 + 0{,}059\\lg\\dfrac{[\\mathrm{VO_{2}^{+}}][\\mathrm{H^{+}}]^2}{[\\mathrm{VO^{2+}}]} = 1{,}00 + 0{,}059\\lg\\dfrac{1{,}5 \\times 0{,}36}{0{,}013} = 1{,}095$ V. \n\n-  $E_{\\mathrm{Zn}} = -0{,}76 + 0{,}0295\\lg 0{,}2 = -0{,}781$ V. \n\n-  $\\Delta E = 1{,}095 - (-0{,}781)$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Zn + 2VO₂⁺ + 4H⁺ → Zn²⁺ + 2VO²⁺ + 2H₂O; Ecatot = 1,095489 V; Eanot = -0,7806196 V; Epin = 1,876108 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT14 C7 (Đề tổng hợp 3, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Viết Nernst cho $\\mathrm{VO_{2}^{+}/VO^{2+}}$ mà bỏ qua $[\\mathrm{H^{+}}]$ hoặc không lấy lũy thừa bậc 2 của $[\\mathrm{H^{+}}]$."
      },
      {
        "id": "option-2",
        "label": "Nhân $E^\\circ(\\mathrm{VO_{2}^{+}/VO^{2+}}) = 1{,}00$ V với 2 để cân bằng 2 electron của $\\mathrm{Zn^{2+}/Zn}$ trước khi tính $E_{\\text{pin}}$."
      },
      {
        "id": "option-3",
        "label": "Tính Nernst cho $\\mathrm{VO_{2}^{+}/VO^{2+}}$ ($n=1$, có $[\\mathrm{H^{+}}]^2$ ở tử số) và $\\mathrm{Zn^{2+}/Zn}$ ($n=2$), rồi chọn cực có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-4",
        "label": "Đặt $[\\mathrm{VO^{2+}}]/([\\mathrm{VO_{2}^{+}}][\\mathrm{H^{+}}]^2)$ trong logarit của phương trình Nernst cực vanadi."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-010",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT15 C6: pin điện hóa và Nernst",
    "prompt": "Một pin gavani được xây dựng từ 2 điện cực: điện cực thứ nhất là kim loại Pt nhúng trong dung dịch $\\mathrm{Sn^{4+}}$/$\\mathrm{Sn^{2+}}$ còn điện cực thứ hai là kim loại Pt nhúng trong dung dịch $\\mathrm{Fe^{3+}}$/$\\mathrm{Fe^{2+}}$.\n\n-  Hãy viết phương trình làm việc và tính suất điện động ($\\Delta E$) của pin gavani ở 25 °C biết rằng thế điện cực chuẩn của các cặp oxi hóa – khử liên hợp: $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}})$ = 0,15 V; $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}})$ = 0,77 V.\n\n-  Nếu nồng độ của dung dịch $\\mathrm{Sn^{4+}}$ = 0,01 M; $\\mathrm{Sn^{2+}}$ = 0,1 M; $\\mathrm{Fe^{3+}}$ = 0,1 M và $\\mathrm{Fe^{2+}}$ = 0,001 M thì sức điện động $\\Delta E$ ở 25 °C của pin bằng bao nhiêu?\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Thế khử $E$ không nhân theo hệ số cân bằng và luôn dùng tỉ số $[\\text{Ox}]/[\\text{Kh}]$ với đúng số $n$ của từng nửa phản ứng ($n=1$ cho Fe, $n=2$ cho Sn).\n\n**Lời giải đầy đủ:**\n\n-  a) Catot $\\mathrm{Fe^{3+}/Fe^{2+}}$ (0,77), anot $\\mathrm{Sn^{4+}/Sn^{2+}}$ (0,15): $\\mathrm{Sn^{2+} + 2Fe^{3+} \\to  Sn^{4+} + 2Fe^{2+}}$; $E^\\circ = 0{,}62$ V. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  b) $E_{\\mathrm{Fe}} = 0{,}77 + 0{,}059\\lg\\dfrac{0{,}1}{0{,}001} = 0{,}888$ V; $E_{\\mathrm{Sn}} = 0{,}15 + 0{,}0295\\lg\\dfrac{0{,}01}{0{,}1} = 0{,}1205$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Sn²⁺ + 2Fe³⁺ → Sn⁴⁺ + 2Fe²⁺; Ecatot = 0,888 V; Eanot = 0,1205 V; Epin = 0,7675 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT15 C6 (Đề tổng hợp 5, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77$ V với 2 để cân bằng 2 electron với $\\mathrm{Sn^{4+}/Sn^{2+}}$ khi tính $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-2",
        "label": "Tính Nernst cho $\\mathrm{Fe^{3+}/Fe^{2+}}$ ($n=1$) và $\\mathrm{Sn^{4+}/Sn^{2+}}$ ($n=2$) theo $\\lg([\\text{Ox}]/[\\text{Kh}])$, rồi chọn cặp có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với tỉ số nghịch đảo $[\\text{Kh}]/[\\text{Ox}]$ (tức $[\\mathrm{Fe^{2+}}]/[\\mathrm{Fe^{3+}}]$ và $[\\mathrm{Sn^{2+}}]/[\\mathrm{Sn^{4+}}]$)."
      },
      {
        "id": "option-4",
        "label": "Dùng $n = 2$ cho phương trình Nernst của cả hai điện cực vì phản ứng tổng trao đổi 2 electron."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-011",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT19 C7: pin điện hóa và Nernst",
    "prompt": "Xét hai nửa phản ứng oxi hoá khử sau: $\\mathrm{Au^{3+} + 3e \\to  Au}$, $E^\\circ = +1{,}50$ V; $\\mathrm{Tl^{+} + e \\to  Tl}$, $E^\\circ = -0{,}34$ V.\n\n-  Viết phương trình phản ứng tổng cộng khi pin làm việc và tính sức điện động ($\\Delta E$) của pin ở 25 °C.\n\n-  Tính $\\Delta G^\\circ$ và $K$ cho phản ứng pin làm việc ở 25 °C.\n\n-  Tính $E_{pin}$ ở 25 °C khi $[\\mathrm{Au^{3+}}] = 10^{-2}$ M và $[\\mathrm{Tl^{+}}] = 10^{-4}$ M.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Không nhân $E$ với hệ số; Nernst từng cực dùng $n$ riêng ($n=3$ cho Au, $n=1$ cho Tl) với $\\lg[\\text{Ox}]$, còn $\\Delta G^\\circ$ và $\\lg K$ của phản ứng tổng dùng $n = 3$ electron trao đổi.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\mathrm{Au^{3+} + 3Tl \\to  Au + 3Tl^{+}}$; $E^\\circ = 1{,}50 - (-0{,}34) = 1{,}84$ V. \n\n-  b) $n = 3$: $\\Delta G^\\circ = -3 \\times 96500 \\times 1{,}84 = -5.33e5$ J; $\\lg K = \\dfrac{nE^\\circ}{0{,}059} = \\dfrac{3 \\times 1{,}84}{0{,}059} = 93{,}6$. \n\n-  c) $E_{\\mathrm{Au}} = 1{,}50 + \\dfrac{0{,}059}{3}\\lg 10^{-2} = 1{,}461$; $E_{\\mathrm{Tl}} = -0{,}34 + 0{,}059\\lg 10^{-4} = -0{,}576$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Au³⁺ + 3Tl → Au + 3Tl⁺; Ecatot = 1,460667 V; Eanot = -0,576 V; Epin = 2,036667 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT19 C7 (Đề tổng hợp 9, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Tl^{+}/Tl}) = -0{,}34$ V với 3 cho đủ 3 electron rồi mới tính $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-2",
        "label": "Lấy $n = 1$ khi tính $\\Delta G^\\circ$ và $\\lg K$ vì cặp $\\mathrm{Tl^{+}/Tl}$ chỉ trao đổi 1 electron."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với $\\lg(1/[\\mathrm{Au^{3+}}])$ và $\\lg(1/[\\mathrm{Tl^{+}}])$ trước khi lấy hiệu hai cực."
      },
      {
        "id": "option-4",
        "label": "Tính thế thực tế $E(\\mathrm{Au^{3+}/Au})$ ($n=3$) và $E(\\mathrm{Tl^{+}/Tl})$ ($n=1$) bằng Nernst, rồi chọn cực có $E$ lớn hơn làm catot."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-012",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT22 C7: pin điện hóa và Nernst",
    "prompt": "Cho pin Galvani với phản ứng sau: $\\mathrm{2Ag^+(dd) + Cd(r) \\to  2Ag(r) + Cd^{2+}(dd)}$. Biết $\\varphi^\\circ_{\\mathrm{Ag^{+}/Ag}} = +0{,}80$ V, $\\varphi^\\circ_{\\mathrm{Cd^{2+}/Cd}} = -0{,}40$ V.\n\n-  Hãy viết phương trình nửa phản ứng trên các điện cực anot và catot.\n\n-  Hãy tính thế điện cực tiêu chuẩn của pin.\n\n-  Tính hằng số cân bằng $K$ ở điều kiện tiêu chuẩn.\n\n-  Hãy tính thế điện cực của pin khi nồng độ $[\\mathrm{Ag^{+}}] = 0{,}01$ M, $[\\mathrm{Cd^{2+}}] = 0{,}01$ M.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Mỗi nửa phản ứng dùng đúng $n$ riêng ($n=1$ cho Ag⁺/Ag, $n=2$ cho Cd²⁺/Cd) và tỉ số $[\\text{Ox}]/[\\text{Kh}]$; không nhân $E$ với hệ số 2.\n\n**Lời giải đầy đủ:**\n\n-  a) Anot: $\\mathrm{Cd \\to  Cd^{2+} + 2e}$; catot: $\\mathrm{Ag^{+} + e \\to  Ag}$. b) $E^\\circ = 0{,}80 - (-0{,}40) = 1{,}20$ V. \n\n-  c) $\\lg K = \\dfrac{2 \\times 1{,}20}{0{,}059} = 40{,}7$. \n\n-  d) $E_{\\mathrm{Ag}} = 0{,}80 + 0{,}059\\lg 0{,}01 = 0{,}682$; $E_{\\mathrm{Cd}} = -0{,}40 + 0{,}0295\\lg 0{,}01 = -0{,}459$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Cd + 2Ag⁺ → Cd²⁺ + 2Ag; Ecatot = 0,682 V; Eanot = -0,459 V; Epin = 1,141 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT22 C7 (Đề tổng hợp 12, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính Nernst cho $\\mathrm{Ag^{+}/Ag}$ ($n=1$) và $\\mathrm{Cd^{2+}/Cd}$ ($n=2$) theo $\\lg[\\text{Ox}]$, rồi chọn cặp có $E$ cao hơn làm catot."
      },
      {
        "id": "option-2",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0{,}80$ V với 2 theo hệ số phương trình rồi mới tính $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-3",
        "label": "Dùng $n = 2$ trong phương trình Nernst của $\\mathrm{Ag^{+}/Ag}$ vì phản ứng tổng có $2\\mathrm{Ag^{+}}$."
      },
      {
        "id": "option-4",
        "label": "Đảo tỉ số trong Nernst thành $1/[\\mathrm{Ag^{+}}]$ và $1/[\\mathrm{Cd^{2+}}]$ khi tính thế từng cực."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-013",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT23 C7: pin điện hóa và Nernst",
    "prompt": "Một pin gồm 2 điện cực chuẩn ở 25 °C. Một điện cực là Pt trong dung dịch $\\mathrm{Sn^{4+}}$/$\\mathrm{Sn^{2+}}$, điện cực kia là Pt nhúng trong dung dịch $\\mathrm{Fe^{3+}}$/$\\mathrm{Fe^{2+}}$. Biết rằng $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}})$ = 0,15 V; $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}})$ = 0,77 V.\n\n-  Viết các phương trình nửa phản ứng và thiết lập sơ đồ pin.\n\n-  Tính suất điện động của pin.\n\n-  Nếu nồng độ của dung dịch $\\mathrm{Sn^{4+}}$ = 0,01 M; $\\mathrm{Sn^{2+}}$ = 0,1 M; $\\mathrm{Fe^{3+}}$ = 0,1 M và $\\mathrm{Fe^{2+}}$ = 0,001 M thì sức điện động ở 25 °C của pin này bằng bao nhiêu.\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R_H = 109722$ cm$^{-1}$; 1 eV = 1.602e-19 J; 1 m = $10^9$ nm; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; có in bảng tuần hoàn.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Thế khử $E$ không nhân với hệ số và cực có $E$ cao hơn là catot (+) đặt ở bên phải sơ đồ pin; Nernst luôn lấy $\\lg([\\text{Ox}]/[\\text{Kh}])$ với $n$ của từng nửa phản ứng.\n\n**Lời giải đầy đủ:**\n\n-  a) Catot: $\\mathrm{Fe^{3+} + e \\to  Fe^{2+}}$; anot: $\\mathrm{Sn^{2+} \\to  Sn^{4+} + 2e}$; sơ đồ (–) Pt $|$ $\\mathrm{Sn^{4+}}$, $\\mathrm{Sn^{2+}}$ $\\|$ $\\mathrm{Fe^{3+}}$, $\\mathrm{Fe^{2+}}$ $|$ Pt (+). \n\n-  b) $E^\\circ = 0{,}77 - 0{,}15$. \n\n-  c) Như ĐT15 C6b: $E_{\\mathrm{Fe}} = 0{,}888$; $E_{\\mathrm{Sn}} = 0{,}1205$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Sn²⁺ + 2Fe³⁺ → Sn⁴⁺ + 2Fe²⁺; Ecatot = 0,888 V; Eanot = 0,1205 V; Epin = 0,7675 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT23 C7 (HK1 2022--2023 Ca 2, Đề tổng hợp 13, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}})$ với 2 trước khi so sánh với $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}})$ để lập sơ đồ pin."
      },
      {
        "id": "option-2",
        "label": "Chọn cặp $\\mathrm{Sn^{4+}/Sn^{2+}}$ làm catot (+) ở bên phải sơ đồ pin vì được viết trước trong đề."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst cho $\\mathrm{Fe^{3+}/Fe^{2+}}$ ($n=1$) và $\\mathrm{Sn^{4+}/Sn^{2+}}$ ($n=2$) với tỉ số $[\\text{Ox}]/[\\text{Kh}]$, rồi chọn cực có $E$ cao hơn làm catot."
      },
      {
        "id": "option-4",
        "label": "Dùng tỉ số nghịch đảo $[\\text{Kh}]/[\\text{Ox}]$ trong phương trình Nernst của hai điện cực Pt."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-014",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT24 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa/khử có thế điện cực chuẩn ($\\varphi^\\circ$) tương ứng: $\\mathrm{Zn^{2+}(dd) + 2e \\to  Zn(r)}$, $\\varphi^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76$ V; $\\mathrm{2H^+(dd) + 2e \\to  H_{2}(k)}$, $\\varphi^\\circ(\\mathrm{H^{+}/H_{2}}) = 0{,}00$ V.\n\n-  Hãy viết phương trình làm việc của pin điện hóa trên và chỉ ra đâu là catot và anot?\n\n-  Tính sức điện động $\\Delta E^\\circ$ và hằng số cân bằng $K$ của phản ứng của pin làm việc ở 25 °C.\n\n-  Ở 25 °C nếu nồng độ ban đầu $[\\mathrm{Zn^{2+}}]_0 = 0{,}010$ M và nồng độ ban đầu $[\\mathrm{H^{+}}]_0 = 2{,}5$ M, áp suất dòng khí hidro là $P_{\\mathrm{H_{2}}} = 0{,}30$ atm thì sức điện động của pin ($\\Delta E$) là bao nhiêu?\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3.0e8$ m/s; $R = 8{,}314$ J/mol.K hoặc 0,082 L.at/mol.K; $F = 96\\,500$ C/mol; 1 m = $10^9$ nm; 1 eV = 1.602e-19 J; $N_A = 6.023e23$; có in bảng tuần hoàn.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Với nửa phản ứng $2\\mathrm{H^+ + 2e \\to H_2}$ ($n=2$), dạng oxi hóa là $\\mathrm{H^+}$ (mũ 2) ở tử số và áp suất khí $P_{\\mathrm{H_2}}$ ở mẫu số; catot là cực có thế đại số lớn hơn ($0{,}0389$ V > $-0{,}819$ V).\n\n**Lời giải đầy đủ:**\n\n-  a) $0{,}00 > -0{,}76$: catot là điện cực hiđro: $\\mathrm{Zn + 2H^{+} \\to  Zn^{2+} + H_{2}}$. \n\n-  b) $\\Delta E^\\circ = 0 - (-0{,}76) = 0{,}76$ V; $\\lg K = \\dfrac{2 \\times 0{,}76}{0{,}059} = 25{,}8$. \n\n-  c) Điện cực hiđro (khí theo atm): $E_{\\mathrm{H}} = 0 + \\dfrac{0{,}059}{2}\\lg\\dfrac{[\\mathrm{H^{+}}]^2}{P_{\\mathrm{H_{2}}}} = 0{,}0295\\lg\\dfrac{2{,}5^2}{0{,}30} = 0{,}0389$ V. \n\n-  $E_{\\mathrm{Zn}} = -0{,}76 + 0{,}0295\\lg 0{,}010 = -0{,}819$ V; $\\Delta E = 0{,}0389 - (-0{,}819)$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Zn + 2H⁺ → Zn²⁺ + H₂; Ecatot = 0,03890338 V; Eanot = -0,819 V; Epin = 0,8579034 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT24 C7 (HK1 2019--2020, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Viết Nernst cho cực hiđro với $[\\mathrm{H^{+}}]/P_{\\mathrm{H_{2}}}$ (bỏ số mũ 2 của $[\\mathrm{H^{+}}]$) hoặc đặt $P_{\\mathrm{H_{2}}}$ lên tử số."
      },
      {
        "id": "option-2",
        "label": "Tính Nernst cho $\\mathrm{H^{+}/H_{2}}$ ($n=2$, tỉ số $[\\mathrm{H^{+}}]^2/P_{\\mathrm{H_{2}}}$) và $\\mathrm{Zn^{2+}/Zn}$ ($n=2$), rồi chọn cực có $E$ cao hơn làm catot."
      },
      {
        "id": "option-3",
        "label": "Chọn $\\mathrm{Zn^{2+}/Zn}$ làm catot vì có trị tuyệt đối $|E^\\circ|$ lớn hơn, rồi tính $E_{\\mathrm{Zn}} - E_{\\mathrm{H}}$."
      },
      {
        "id": "option-4",
        "label": "Lấy $n = 1$ trong cả phương trình Nernst của $\\mathrm{H^{+}/H_{2}}$ và biểu thức $\\lg K$ của phản ứng pin."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-015",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT25 C7: pin điện hóa và Nernst",
    "prompt": "Một pin được thiết lập bởi hai nửa phản ứng sau: $\\mathrm{Co^{2+} + 2e \\to  Co}$, $\\varphi^\\circ(\\mathrm{Co^{2+}/Co}) = -0{,}28$ V; $\\mathrm{Ag^{+} + e \\to  Ag}$, $\\varphi^\\circ(\\mathrm{Ag^{+}/Ag}) = +0{,}80$ V.\n\n-  Cho biết phương trình hoạt động của pin và sơ đồ pin.\n\n-  Tính $\\Delta G^\\circ$ của phản ứng xảy ra trong pin.\n\n-  Tính sức điện động của pin ở điều kiện tiêu chuẩn.\n\n-  Tính sức điện động của pin khi pin có $[\\mathrm{Ag^{+}}] = 0{,}1$ M, $[\\mathrm{Co^{2+}}] = 0{,}1$ M.\n\nDữ kiện chung in kèm đề: $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = 1.602e-19 J; $Z(\\text{Li}) = 3$; $Z(\\text{B}) = 5$; $T$(K) = $t$(°C) + 273; $M$(N) = 14 g/mol, $M$(O) = 16 g/mol; $N_A = 6.023e23$, $F = 96\\,500$ C.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Không nhân $E$ với hệ số; Nernst cực Ag⁺/Ag dùng $n=1$ còn Co²⁺/Co dùng $n=2$ với tỉ số $[\\text{Ox}]/[\\text{Kh}]$, sau đó tính $E_{\\text{pin}} = E_{\\text{catot}} - E_{\\text{anot}}$.\n\n**Lời giải đầy đủ:**\n\n-  So sánh: $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0.8 > E^\\circ(\\mathrm{Co^{2+}/Co}) = -0.28$ nên catot là $\\mathrm{Ag^{+}/Ag}$, anot là $\\mathrm{Co^{2+}/Co}$. Phản ứng: $\\mathrm{Co + 2Ag^{+} \\to  Co^{2+} + 2Ag}$; sơ đồ (–) Co $|$ $\\mathrm{Co^{2+}}$ $\\|$ $\\mathrm{Ag^{+}}$ $|$ Ag (+). \n\n-  $E^\\circ_{pin} = 0.8 - (-0.28) = 1.08$ V; $\\Delta G^\\circ = -nFE^\\circ = -2 \\times 96500 \\times 1.08 = -2.084e+05$ J. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  Catot: $E = 0.8 + \\dfrac{0{,}059}{1}\\lg 0.1 = 0.741$ V; anot: $E = -0.28 + \\dfrac{0{,}059}{2}\\lg 0.1 = -0.3095$ V. \n\n-  $\\Delta E = E_{catot} - E_{anot} = 1.05$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Co + 2Ag⁺ → Co²⁺ + 2Ag; Ecatot = 0,741 V; Eanot = -0,3095 V; Epin = 1,0505 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT25 C7 (HK2 2023--2024, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0{,}80$ V với 2 để cân bằng electron với $\\mathrm{Co^{2+}/Co}$ khi tính $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-2",
        "label": "Thay $n = 2$ vào phương trình Nernst của cực $\\mathrm{Ag^{+}/Ag}$ vì phản ứng tổng có $2\\mathrm{Ag^{+}}$."
      },
      {
        "id": "option-3",
        "label": "Tính sức điện động bằng tổng $E_{\\mathrm{Ag}} + E_{\\mathrm{Co}}$ thay vì hiệu $E_{\\text{catot}} - E_{\\text{anot}}$."
      },
      {
        "id": "option-4",
        "label": "Tính Nernst cho $\\mathrm{Ag^{+}/Ag}$ ($n=1$) và $\\mathrm{Co^{2+}/Co}$ ($n=2$) với tỉ số $[\\text{Ox}]/[\\text{Kh}]$, rồi chọn cặp có $E$ lớn hơn làm catot."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-016",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT27 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện được xây dựng từ 2 điện cực, trong đó một điện cực gồm một tấm Cu nhúng trong dung dịch $\\mathrm{CuSO_{4}}$ 1,0 M, và một điện cực gồm một dây Pt nhúng vào dung dịch $\\mathrm{Sn^{4+}}$/$\\mathrm{Sn^{2+}}$ với nồng độ $[\\mathrm{Sn^{4+}}] = 1{,}0$ M và $[\\mathrm{Sn^{2+}}] = 1{,}0$ M. Dùng một dây dẫn nối 2 đầu Cu và Pt. Biết thế chuẩn của các cặp ôxi hóa khử ($E^\\circ$) như sau: $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = 0{,}34$ V; $\\mathrm{Sn^{4+} + 2e \\to  Sn^{2+}}$, $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}}) = 0{,}15$ V.\n\n-  Hãy thiết lập sơ đồ pin và viết phương trình làm việc của pin ở điều kiện tiêu chuẩn.\n\n-  Tính sức điện động của pin ($E^\\circ_{pin}$) và hằng số cân bằng $K$ của phản ứng điện hóa ở điều kiện tiêu chuẩn.\n\n-  Khi nồng độ $\\mathrm{Cu^{2+}}$ trong dung dịch còn lại 0,5 M, hãy tính sức điện động của pin ($E_{pin}$).\n\n**Ghi chú của tuyển tập:** Ý c: $\\mathrm{Cu^{2+}}$ bị khử ở catot nên giảm từ 1,0 về 0,5 M; nếu hai dung dịch cùng thể tích thì $\\mathrm{Sn^{2+}}$ cũng giảm 0,5 M và $\\mathrm{Sn^{4+}}$ tăng 0,5 M. Đề không cho thể tích, ghi rõ giả thiết khi làm.\n\nDữ kiện chung in kèm đề: $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; $R_H = 109678$ cm$^{-1}$; $N_A = 6.023e23$; $F = 96\\,500$ C/mol; 1 eV = 1.602e-19 J; $T$(K) = 273 + $t$(°C); $Z$(He) = 2; $Z$(Li) = 3.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\nỞ bước nhập số của ý c, giả sử hai ngăn có cùng thể tích; hãy nêu thêm kết quả khi coi cặp Sn không đổi.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Cặp Cu²⁺/Cu có thế cao hơn nên là catot, Sn⁴⁺/Sn²⁺ là anot ($n=2$). Trong Nernst luôn dùng $[\\text{Ox}]/[\\text{Kh}]$ (tức $[\\mathrm{Sn^{4+}}]/[\\mathrm{Sn^{2+}}]$), đồng thời xét sự thay đổi nồng độ đồng bộ khi phản ứng diễn ra.\n\n**Lời giải đầy đủ:**\n\n-  a) $0{,}34 > 0{,}15$: catot Cu, anot Pt ($\\mathrm{Sn^{2+}}$ bị oxi hóa): $\\mathrm{Cu^{2+} + Sn^{2+} \\to  Cu + Sn^{4+}}$; sơ đồ (–) Pt $|$ $\\mathrm{Sn^{2+}}$, $\\mathrm{Sn^{4+}}$ $\\|$ $\\mathrm{Cu^{2+}}$ $|$ Cu (+). \n\n-  b) $E^\\circ = 0{,}34 - 0{,}15 = 0{,}19$ V; $\\lg K = \\dfrac{2 \\times 0{,}19}{0{,}059} = 6{,}44$. \n\n-  c) $E_{\\mathrm{Cu}} = 0{,}34 + 0{,}0295\\lg 0{,}5 = 0{,}331$ V. Nếu coi $\\mathrm{Sn}$ không đổi: $E_{\\mathrm{Sn}} = 0{,}15$; nếu hai dung dịch cùng thể tích: $\\mathrm{Sn^{2+}}$ 0,5, $\\mathrm{Sn^{4+}}$ 1,5 M, $E_{\\mathrm{Sn}} = 0{,}15 + 0{,}0295\\lg 3 = 0{,}164$ V.\n\nKiểm tra từ dữ kiện chưa làm tròn: Sn²⁺ + Cu²⁺ → Sn⁴⁺ + Cu; Ecatot = 0,3311196 V; Eanot = 0,1640751 V; Epin = 0,1670445 V.\n\nHai ngăn cùng thể tích: [Sn²⁺] = 0,5 M, [Sn⁴⁺] = 1,5 M. Nếu coi cặp Sn giữ nguyên, E = 0,1811196 V. Đề thiếu thể tích nên không có một đáp số duy nhất cho ý c.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT27 C7 (HK1 2025--2026, 2 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chọn $\\mathrm{Sn^{4+}/Sn^{2+}}$ làm catot và $\\mathrm{Cu^{2+}/Cu}$ làm anot rồi tính $E_{\\mathrm{Sn}} - E_{\\mathrm{Cu}}$."
      },
      {
        "id": "option-2",
        "label": "Đảo tỉ số nồng độ cặp thiếc thành $[\\mathrm{Sn^{2+}}]/[\\mathrm{Sn^{4+}}]$ trong phương trình Nernst."
      },
      {
        "id": "option-3",
        "label": "Tính Nernst cho $\\mathrm{Cu^{2+}/Cu}$ và $\\mathrm{Sn^{4+}/Sn^{2+}}$ ($n=2$, tỉ số $[\\text{Ox}]/[\\text{Kh}]$), chú ý biến đổi nồng độ của $\\mathrm{Sn^{4+}}$ và $\\mathrm{Sn^{2+}}$ khi $[\\mathrm{Cu^{2+}}]$ giảm."
      },
      {
        "id": "option-4",
        "label": "Lấy $n = 4$ trong biểu thức Nernst và $\\lg K$ vì cộng số electron của hai nửa phản ứng."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-017",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT28 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện được tạo ra từ hai điện cực, trong đó một điện cực gồm một tấm Zn nhúng trong dung dịch $\\mathrm{Zn^{2+}}$. Điện cực thứ hai là một dây Pt nhúng vào dung dịch $\\mathrm{Fe^{3+}}$, $\\mathrm{Fe^{2+}}$. Cho biết: $\\mathrm{Zn^{2+} + 2e \\to  Zn}$, $\\varphi^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76$ V; $\\mathrm{Fe^{3+} + e \\to  Fe^{2+}}$, $\\varphi^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}}) = +0{,}77$ V.\n\n-  Viết phản ứng xảy ra trong pin và sơ đồ pin điện hóa.\n\n-  Tính sức điện động chuẩn của pin.\n\n-  Ở 25 °C, tính sức điện động của pin khi $[\\mathrm{Fe^{3+}}] = 0{,}20$ M; $[\\mathrm{Fe^{2+}}] = 0{,}10$ M và $[\\mathrm{Zn^{2+}}] = 0{,}10$ M.\n\nDữ kiện chung in kèm đề: $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = 1.6e-19 J.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Để xác định chiều phản ứng ở nồng độ đã cho, chọn cách nào?",
    "explanation": "Thế điện cực không nhân với hệ số; Nernst cực Fe³⁺/Fe²⁺ dùng $n=1$ và tỉ số $[\\mathrm{Fe^{3+}}]/[\\mathrm{Fe^{2+}}]$, còn cực Zn²⁺/Zn dùng $n=2$ và $[\\mathrm{Zn^{2+}}]$.\n\n**Lời giải đầy đủ:**\n\n-  a) $0{,}77 > -0{,}76$: catot Pt (cặp Fe), anot Zn: $\\mathrm{Zn + 2Fe^{3+} \\to  Zn^{2+} + 2Fe^{2+}}$. \n\n-  b) $E^\\circ = 0{,}77 - (-0{,}76) = 1{,}53$ V (không nhân 0,77 với 2). \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  c) $E_{\\mathrm{Fe}} = 0{,}77 + 0{,}059\\lg\\dfrac{0{,}20}{0{,}10} = 0{,}788$ V; $E_{\\mathrm{Zn}} = -0{,}76 + 0{,}0295\\lg 0{,}10 = -0{,}790$ V; $E = 0{,}788 + 0{,}790$.\n\nKiểm tra từ dữ kiện chưa làm tròn: Zn + 2Fe³⁺ → Zn²⁺ + 2Fe²⁺; Ecatot = 0,7877608 V; Eanot = -0,7895 V; Epin = 1,577261 V.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11a.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT28 C7 (Hè 2025--2026, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính Nernst cho $\\mathrm{Fe^{3+}/Fe^{2+}}$ ($n=1$) và $\\mathrm{Zn^{2+}/Zn}$ ($n=2$) với tỉ số $[\\text{Ox}]/[\\text{Kh}]$, rồi chọn cực có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-2",
        "label": "Nhân $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77$ V với 2 để cân bằng với 2 electron của $\\mathrm{Zn^{2+}/Zn}$ khi tính $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst cực sắt với tỉ số $[\\mathrm{Fe^{2+}}]/[\\mathrm{Fe^{3+}}]$ vì $\\mathrm{Fe^{2+}}$ là sản phẩm của nửa phản ứng khử."
      },
      {
        "id": "option-4",
        "label": "Thay $n = 2$ vào Nernst của cặp $\\mathrm{Fe^{3+}/Fe^{2+}}$ vì phản ứng tổng nhân hệ số 2 trước ion sắt."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-018",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT01 C5: pin điện hóa và Nernst",
    "prompt": "Một pin gồm một điện cực dương là điện cực hydro tiêu chuẩn, điện cực âm là điện cực Ni nhúng vào dung dịch $\\mathrm{NiSO_{4}}$ 0,01 M có sức điện động là 0,309 V. Tính thế điện cực tiêu chuẩn của điện cực Ni.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn cách thiết lập đúng để tìm $E^\\circ(\\mathrm{Ni^{2+}/Ni})$ từ $E_{\\text{pin}} = 0{,}309$ V và $E(\\mathrm{H^{+}/H_{2}}) = 0$ V.",
    "explanation": "Ni là cực âm (anot) còn điện cực hiđro chuẩn ($E=0$) là cực dương (catot), nên $E_{\\text{pin}} = 0 - E_{\\mathrm{Ni}} \\Rightarrow E_{\\mathrm{Ni}} = -0{,}309$ V; dùng Nernst với $n=2$ và $\\lg[\\mathrm{Ni^{2+}}]$ để rút $E^\\circ_{\\mathrm{Ni}}$.\n\n**Lời giải đầy đủ:**\n\n-  Cực dương là điện cực hiđro chuẩn ($E = 0$), nên $E_{pin} = 0 - E_{\\mathrm{Ni}}$, suy ra $E_{\\mathrm{Ni}} = -0{,}309$ V. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  $E_{\\mathrm{Ni}} = E^\\circ + \\dfrac{0{,}059}{2}\\lg[\\mathrm{Ni^{2+}}]$; biến đổi: $E^\\circ = E_{\\mathrm{Ni}} - 0{,}0295\\lg 0{,}01 = -0{,}309 + 0{,}059$.\n\nTính lại không làm tròn giữa chừng:\n- Thế khử Ni thực tế? -0,309 V. Epin = 0 − ENi.\n- Thế khử chuẩn của Ni? -0,25 V. E°Ni = −0,309 − (0,059/2)lg 0,01.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT01 C5 (HK1 2010--2011), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Lấy $E_{\\mathrm{Ni}} = +0{,}309$ V (vì $E_{\\text{pin}} > 0$) rồi thế vào phương trình Nernst để tìm $E^\\circ_{\\mathrm{Ni}}$."
      },
      {
        "id": "option-2",
        "label": "Dùng $n = 1$ trong phương trình Nernst $E_{\\mathrm{Ni}} = E^\\circ_{\\mathrm{Ni}} + 0{,}059\\lg[\\mathrm{Ni^{2+}}]$."
      },
      {
        "id": "option-3",
        "label": "Từ $E_{\\text{pin}} = 0 - E_{\\mathrm{Ni}}$ suy ra $E_{\\mathrm{Ni}} = -0{,}309$ V, rồi viết $E_{\\mathrm{Ni}} = E^\\circ_{\\mathrm{Ni}} + \\frac{0{,}059}{2}\\lg[\\mathrm{Ni^{2+}}]$ để cô lập $E^\\circ_{\\mathrm{Ni}}$."
      },
      {
        "id": "option-4",
        "label": "Viết Nernst với tỉ số nghịch đảo: $E_{\\mathrm{Ni}} = E^\\circ_{\\mathrm{Ni}} + \\frac{0{,}059}{2}\\lg\\frac{1}{[\\mathrm{Ni^{2+}}]}$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-019",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT03 C2: pin điện hóa và Nernst",
    "prompt": "Cho pin gồm hai điện cực: Cd kim loại nhúng trong dung dịch $\\mathrm{Cd^{2+}}$ và Cu kim loại nhúng trong dung dịch $\\mathrm{Cu^{2+}}$. Sức điện động của pin đo được là 0,745 V. Hãy xác định nồng độ của dung dịch $\\mathrm{Cu^{2+}}$. Biết thế tiêu chuẩn $E^\\circ$ của cặp $\\mathrm{Cu^{2+}/Cu}$ là 0,34 V, của cặp $\\mathrm{Cd^{2+}/Cd}$ là $-0{,}4$ V và nồng độ dung dịch $\\mathrm{Cd^{2+}}$ là 0,05 M.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn cách thiết lập đúng để tìm $[\\mathrm{Cu^{2+}}]$ từ $E_{\\text{pin}} = 0{,}745$ V.",
    "explanation": "Catot là Cu và anot là Cd, nên $E_{\\text{pin}} = E_{\\mathrm{Cu}} - E_{\\mathrm{Cd}} \\Rightarrow E_{\\mathrm{Cu}} = E_{\\text{pin}} + E_{\\mathrm{Cd}}$. Cần tính đúng $E_{\\mathrm{Cd}}$ tại $0{,}05$ M rồi cô lập $[\\mathrm{Cu^{2+}}]$ với $n=2$.\n\n**Lời giải đầy đủ:**\n\n-  Catot Cu, anot Cd. $E_{\\mathrm{Cd}} = -0{,}40 + 0{,}0295\\lg 0{,}05 = -0{,}438$ V. \n\n-  $E_{pin} = E_{\\mathrm{Cu}} - E_{\\mathrm{Cd}}$ nên $E_{\\mathrm{Cu}} = 0{,}745 + (-0{,}438) = 0{,}307$ V. \n\n-  Biến đổi Nernst: $0{,}307 = 0{,}34 + 0{,}0295\\lg[\\mathrm{Cu^{2+}}] \\Rightarrow \\lg[\\mathrm{Cu^{2+}}] = \\dfrac{0{,}307 - 0{,}34}{0{,}0295} = -1{,}13$.\n\nTính lại không làm tròn giữa chừng:\n- Thế khử Cd thực tế? -0,4383804 V. ECd = −0,4 + (0,059/2)lg 0,05.\n- Nồng độ Cu²⁺ (mol/L)? 0,07386888 mol/L. Epin = 0,74 + (0,059/2)lg([Cu²⁺]/0,05); giữ số chưa làm tròn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT03 C2 (HK1 2012--2013), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $E_{\\mathrm{Cd}}$ bằng Nernst ($n=2$), suy ra $E_{\\mathrm{Cu}} = E_{\\text{pin}} + E_{\\mathrm{Cd}}$, rồi cô lập $\\lg[\\mathrm{Cu^{2+}}]$ từ Nernst của cực Cu."
      },
      {
        "id": "option-2",
        "label": "Lấy $E_{\\mathrm{Cu}} = E_{\\text{pin}} - E_{\\mathrm{Cd}}$ (cộng thành dương thay vì cộng đại số $E_{\\mathrm{Cd}} < 0$) trước khi giải Nernst."
      },
      {
        "id": "option-3",
        "label": "Bỏ qua nồng độ $\\mathrm{Cd^{2+}} = 0{,}05$ M, lấy thẳng $E_{\\mathrm{Cd}} = -0{,}4$ V rồi tính $[\\mathrm{Cu^{2+}}]$."
      },
      {
        "id": "option-4",
        "label": "Viết Nernst cho toàn pin dạng $E_{\\text{pin}} = E^\\circ_{\\text{pin}} - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Cu^{2+}}]}{[\\mathrm{Cd^{2+}}]}$ (đảo ngược tỉ số $Q$)."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-020",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT12 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa/khử có thế điện cực chuẩn (kí hiệu là $\\varphi^\\circ$ hoặc $E^\\circ$) tương ứng: $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $\\varphi^\\circ(\\mathrm{Cu^{2+}/Cu}) = +0{,}34$ V; $\\mathrm{Fe^{2+} + 2e \\to  Fe}$, $\\varphi^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44$ V.\n\n-  Hãy viết phương trình làm việc của pin điện hóa trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ (theo J/mol) và hằng số cân bằng $K$ của phản ứng điện hóa trên ở 25 °C.\n\n-  Ở 25 °C nếu nồng độ $[\\mathrm{Cu^{2+}}] = 0{,}30$ M thì cần nồng độ $[\\mathrm{Fe^{2+}}]$ là bao nhiêu để sức điện động của pin ($\\Delta E$) đạt được 1,03 V.\n\n**Ghi chú của tuyển tập:** Bản gốc in nhầm ``$\\varphi^\\circ(\\mathrm{Ag^{2+}/Ag})$''; tuyển tập đã sửa thành $\\varphi^\\circ(\\mathrm{Cu^{2+}/Cu})$ cho khớp với nửa phản ứng.\n\nDữ kiện chung in kèm đề: $h = 6.626e-34$ J.s; $c = 3e8$ m/s; $R = 8{,}314$ J/mol.K, 0,082 L.at/mol.K; $F = 96\\,500$ C/mol.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương pháp đúng để tính $\\Delta G^\\circ$, $K$ và tìm $[\\mathrm{Fe^{2+}}]$ khi biết $E = 1{,}03$ V.",
    "explanation": "Pin có $n=2$ electron trao đổi, catot Cu ($+0{,}34$ V) và anot Fe ($-0{,}44$ V). Phản ứng $\\mathrm{Cu^{2+} + Fe \\to Cu + Fe^{2+}}$ có $Q = [\\mathrm{Fe^{2+}}]/[\\mathrm{Cu^{2+}}]$.\n\n**Lời giải đầy đủ:**\n\n-  a) Catot Cu (0,34), anot Fe ($-0{,}44$): $\\mathrm{Cu^{2+} + Fe \\to  Cu + Fe^{2+}}$. \n\n-  b) $E^\\circ = 0{,}78$ V; $\\Delta G^\\circ = -2 \\times 96500 \\times 0{,}78 = -1.51e5$ J; $\\lg K = \\dfrac{2 \\times 0{,}78}{0{,}059} = 26{,}4$. \n\n-  c) Viết cho cả pin: $E = E^\\circ - \\dfrac{0{,}059}{2}\\lg\\dfrac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]}$; biến đổi: $\\lg\\dfrac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]} = \\dfrac{2(E^\\circ - E)}{0{,}059}$. \n\n-  Thế số: $\\lg\\dfrac{[\\mathrm{Fe^{2+}}]}{0.3} = \\dfrac{2(0{,}78 - 1.03)}{0{,}059} = -8.475$ nên $[\\mathrm{Fe^{2+}}] = 0.3 \\times 10^{-8.475}$.\n\nTính lại không làm tròn giữa chừng:\n- E°pin (V)? 0,78 V. 0,34 − (−0,44) = 0,78 V.\n- ΔG° (J/mol)? -150540 J/mol. n=2; ΔG°=−2×96500×0,78.\n- lg K? 26,44068 . lg K = 2E°/0,059.\n- Nồng độ Fe²⁺ cần có (mol/L)? 1,005877e-09 mol/L. [Fe²⁺] = [Cu²⁺] × 10^[2(E°−E)/0,059].",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT12 C7 (HK1 2017--2018, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Viết Nernst toàn pin dạng $E = E^\\circ - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Cu^{2+}}]}{[\\mathrm{Fe^{2+}}]}$ (đảo ngược tỉ số $Q$) rồi giải $[\\mathrm{Fe^{2+}}]$."
      },
      {
        "id": "option-2",
        "label": "Lấy $n = 4$ (cộng số electron hai nửa phản ứng) khi tính $\\Delta G^\\circ$, $\\lg K$ và trong hệ số Nernst."
      },
      {
        "id": "option-3",
        "label": "Chọn Fe là catot và Cu là anot, đặt $E^\\circ_{\\text{pin}} = -0{,}44 - 0{,}34 = -0{,}78$ V để tính $\\Delta G^\\circ$."
      },
      {
        "id": "option-4",
        "label": "Xác định catot Cu, anot Fe ($n=2$), tính $\\Delta G^\\circ = -nFE^\\circ$, $\\lg K = \\frac{nE^\\circ}{0{,}059}$, rồi viết $E = E^\\circ - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]}$ để cô lập $[\\mathrm{Fe^{2+}}]$."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-021",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT16 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa/khử có thế điện cực chuẩn ($E^\\circ$) tương ứng: $\\mathrm{Ag^{+} + e \\to  Ag}$, $E^\\circ(\\mathrm{Ag^{+}/Ag}) = +0{,}80$ V; $\\mathrm{Fe^{2+} + 2e \\to  Fe}$, $E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44$ V.\n\n-  Hãy viết phương trình làm việc của pin điện hóa trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ (theo kJ/mol) và hằng số cân bằng $K$ của phản ứng điện hóa trên ở 25 °C.\n\n-  Ở 25 °C, trong quá trình làm pin điện hóa trên, người thợ đã ăn bớt dung dịch $\\mathrm{Ag^{+}}$ nên sức điện động của pin thực tế là 1,21 V. Giả sử rằng $[\\mathrm{Fe^{2+}}] = 1{,}0$ M hãy tính nồng độ $[\\mathrm{Ag^{+}}]$ thực tế đã dùng.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương pháp đúng để tính $\\Delta G^\\circ$, $K$ và tìm $[\\mathrm{Ag^{+}}]$ khi biết $E = 1{,}21$ V.",
    "explanation": "Không nhân $E^\\circ(\\mathrm{Ag^+/Ag})$ với 2. Phản ứng $2\\mathrm{Ag^+ + Fe \\to 2Ag + Fe^{2+}}$ có $n=2$, $Q = [\\mathrm{Fe^{2+}}]/[\\mathrm{Ag^+}]^2 = 1/[\\mathrm{Ag^+}]^2$, nên $E = E^\\circ + \\frac{0{,}059}{2}\\lg[\\mathrm{Ag^+}]^2 = E^\\circ + 0{,}059\\lg[\\mathrm{Ag^+}]$.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\mathrm{2Ag^{+} + Fe \\to  2Ag + Fe^{2+}}$; b) $E^\\circ = 1{,}24$ V; $\\Delta G^\\circ = -2 \\times 96500 \\times 1{,}24 = -2.39e5$ J; $\\lg K = \\dfrac{2 \\times 1{,}24}{0{,}059} = 42{,}0$. \n\n-  c) $[\\mathrm{Fe^{2+}}] = 1$ nên $E_{\\mathrm{Fe}} = E^\\circ = -0{,}44$ V; $E_{\\mathrm{Ag}} = E_{pin} + E_{\\mathrm{Fe}} = 1{,}21 - 0{,}44 = 0{,}77$ V. \n\n-  Biến đổi Nernst: $0{,}77 = 0{,}80 + 0{,}059\\lg[\\mathrm{Ag^{+}}] \\Rightarrow \\lg[\\mathrm{Ag^{+}}] = \\dfrac{0{,}77 - 0{,}80}{0{,}059} = -0{,}508$.\n\nTính lại không làm tròn giữa chừng:\n- E°pin (V)? 1,24 V. 0,80 − (−0,44) = 1,24 V.\n- ΔG° (kJ/mol)? -239,32 kJ/mol. Đổi J sang kJ sau khi tính −nFE°.\n- lg K? 42,0339 . lg K = nE°/0,059.\n- Nồng độ Ag⁺ thực tế (mol/L)? 0,3101169 mol/L. E = 1,24 + 0,059 lg[Ag⁺] vì [Fe²⁺]=1.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT16 C7 (Đề tổng hợp 6, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0{,}80$ V với 2 theo hệ số cân bằng trước khi tính $E^\\circ_{\\text{pin}}$ và $\\Delta G^\\circ$."
      },
      {
        "id": "option-2",
        "label": "Xác định catot Ag, anot Fe ($n=2$), tính $\\Delta G^\\circ$ và $\\lg K$ với $n=2$, rồi cô lập $[\\mathrm{Ag^{+}}]$ từ $E = E^\\circ + 0{,}059\\lg[\\mathrm{Ag^{+}}]$ (do $[\\mathrm{Fe^{2+}}] = 1{,}0$ M)."
      },
      {
        "id": "option-3",
        "label": "Viết $E_{\\mathrm{Ag}} = 0{,}80 + \\frac{0{,}059}{2}\\lg[\\mathrm{Ag^{+}}]$ (lấy $n=2$ nhưng không bình phương $[\\mathrm{Ag^{+}}]$)."
      },
      {
        "id": "option-4",
        "label": "Viết Nernst dạng $E = E^\\circ - 0{,}059\\lg[\\mathrm{Ag^{+}}]$ (sai dấu trước số hạng $\\lg[\\mathrm{Ag^{+}}]$) để giải nồng độ."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-022",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT20 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa/khử có thế điện cực chuẩn ($E^\\circ$) tương ứng: $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = +0{,}34$ V; $\\mathrm{Fe^{2+} + 2e \\to  Fe}$, $E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44$ V.\n\n-  Hãy viết phương trình làm việc của pin điện hóa trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ (theo J/mol) và hằng số cân bằng $K$ của phản ứng điện hóa trên ở 25 °C.\n\n-  Ở 25 °C nếu nồng độ $[\\mathrm{Cu^{2+}}] = 0{,}20$ M thì cần nồng độ $[\\mathrm{Fe^{2+}}]$ là bao nhiêu để sức điện động của pin ($\\Delta E$) đạt được 1,15 V.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương pháp đúng để tính $\\Delta G^\\circ$, $K$ và tìm $[\\mathrm{Fe^{2+}}]$ khi biết $E = 1{,}15$ V.",
    "explanation": "Phản ứng $\\mathrm{Cu^{2+} + Fe \\to Cu + Fe^{2+}}$ trao đổi $n=2$ electron với $Q = [\\mathrm{Fe^{2+}}]/[\\mathrm{Cu^{2+}}]$, nên $E = E^\\circ - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]}$.\n\n**Lời giải đầy đủ:**\n\n-  a) Catot Cu (0,34), anot Fe ($-0{,}44$): $\\mathrm{Cu^{2+} + Fe \\to  Cu + Fe^{2+}}$. \n\n-  b) $E^\\circ = 0{,}78$ V; $\\Delta G^\\circ = -2 \\times 96500 \\times 0{,}78 = -1.51e5$ J; $\\lg K = \\dfrac{2 \\times 0{,}78}{0{,}059} = 26{,}4$. \n\n-  c) Viết cho cả pin: $E = E^\\circ - \\dfrac{0{,}059}{2}\\lg\\dfrac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]}$; biến đổi: $\\lg\\dfrac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]} = \\dfrac{2(E^\\circ - E)}{0{,}059}$. \n\n-  Thế số: $\\lg\\dfrac{[\\mathrm{Fe^{2+}}]}{0.2} = \\dfrac{2(0{,}78 - 1.15)}{0{,}059} = -12.54$ nên $[\\mathrm{Fe^{2+}}] = 0.2 \\times 10^{-12.54}$.\n\nTính lại không làm tròn giữa chừng:\n- E°pin (V)? 0,78 V. 0,34 − (−0,44) = 0,78 V.\n- ΔG° (J/mol)? -150540 J/mol. n=2; ΔG°=−2×96500×0,78.\n- lg K? 26,44068 . lg K = 2E°/0,059.\n- Nồng độ Fe²⁺ cần có (mol/L)? 5,736634e-14 mol/L. [Fe²⁺] = [Cu²⁺] × 10^[2(E°−E)/0,059].",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT20 C7 (Đề tổng hợp 10, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Tính $E^\\circ_{\\text{pin}} = 0{,}78$ V, $\\Delta G^\\circ$ và $\\lg K$ với $n=2$, rồi cô lập $[\\mathrm{Fe^{2+}}]$ từ $E = E^\\circ - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]}$."
      },
      {
        "id": "option-2",
        "label": "Đặt $Q = [\\mathrm{Cu^{2+}}]/[\\mathrm{Fe^{2+}}]$ trong $E = E^\\circ - \\frac{0{,}059}{2}\\lg Q$ khi giải nồng độ $\\mathrm{Fe^{2+}}$."
      },
      {
        "id": "option-3",
        "label": "Dùng $n = 1$ trong $\\Delta G^\\circ = -nFE^\\circ$ và $\\lg K = \\frac{nE^\\circ}{0{,}059}$ vì hệ số các chất trong phương trình đều bằng 1."
      },
      {
        "id": "option-4",
        "label": "Dùng dấu cộng $E = E^\\circ + \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Fe^{2+}}]}{[\\mathrm{Cu^{2+}}]}$ rồi cô lập $[\\mathrm{Fe^{2+}}]$."
      }
    ],
    "answers": [
      "option-1"
    ]
  },
  {
    "id": "gc-c7-ec-023",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT18 C7: pin điện hóa và Nernst",
    "prompt": "Điện cực hidro được dùng để đo pH dựa trên phản ứng: $\\mathrm{H^{+} + e^{-} \\to  1/2H_{2}}$, có thế khử chuẩn $\\varphi^\\circ(\\mathrm{H^{+}/H_{2}}) = 0{,}00$ V.\n\n-  Viết phương trình Nernst cho thế điện cực $\\varphi$ của nửa phản ứng này.\n\n-  Nếu áp suất $\\mathrm{H_{2}}$ = 1 atm, hãy tính thế điện cực $\\varphi$ khi pH = 2 và pH = 7.\n\n-  Nếu $\\varphi = -0{,}059$ V, tính giá trị pH của dung dịch.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương trình Nernst và công thức liên hệ pH đúng cho điện cực hiđro ở $P_{\\mathrm{H_{2}}} = 1$ atm.",
    "explanation": "Với nửa phản ứng $\\mathrm{H^+ + e^- \\to \\frac{1}{2}H_2}$ ($n=1$, $\\varphi^\\circ = 0$), $\\varphi = 0{,}059\\lg\\frac{[\\mathrm{H^+}]}{P_{\\mathrm{H_2}}^{1/2}}$. Khi $P_{\\mathrm{H_2}} = 1$ atm, $\\varphi = 0{,}059\\lg[\\mathrm{H^+}] = -0{,}059\\,\\text{pH}$.\n\n**Lời giải đầy đủ:**\n\n-  a) $\\varphi = \\varphi^\\circ + \\dfrac{0{,}059}{1}\\lg\\dfrac{[\\mathrm{H^{+}}]}{P^{1/2}_{\\mathrm{H_{2}}}}$; với $P = 1$: $\\varphi = 0{,}059\\lg[\\mathrm{H^{+}}] = -0{,}059\\,\\text{pH}$. \n\n-  b) pH 2: $-0{,}059 \\times 2$; pH 7: $-0{,}059 \\times 7$. \n\n-  c) Biến đổi: pH $= -\\dfrac{\\varphi}{0{,}059} = \\dfrac{0{,}059}{0{,}059}$.\n\nTính lại không làm tròn giữa chừng:\n- E khi pH=2? -0,118 V. PH₂=1 atm nên E=−0,059 pH.\n- E khi pH=7? -0,413 V. E=−0,059×7.\n- pH khi E=−0,059 V? 1 . pH = −E/0,059.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT18 C7 (Đề tổng hợp 8, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Dùng $\\varphi = +0{,}059\\,\\text{pH}$ vì nhầm $\\lg[\\mathrm{H^{+}}] = +\\text{pH}$."
      },
      {
        "id": "option-2",
        "label": "Dùng $\\varphi = \\frac{0{,}059}{2}\\lg[\\mathrm{H^{+}}] = -0{,}0295\\,\\text{pH}$ (chia 2 nhưng quên bình phương $[\\mathrm{H^{+}}]$)."
      },
      {
        "id": "option-3",
        "label": "Viết $\\varphi = 0{,}059\\lg([\\mathrm{H^{+}}]/P_{\\mathrm{H_{2}}}^{1/2}) = -0{,}059\\,\\text{pH}$ khi $P_{\\mathrm{H_{2}}} = 1$ atm, rồi thay pH hoặc rút $\\text{pH} = -\\varphi/0{,}059$."
      },
      {
        "id": "option-4",
        "label": "Viết $\\varphi = 0{,}059\\lg(P_{\\mathrm{H_{2}}}^{1/2}/[\\mathrm{H^{+}}])$ rồi thế $\\text{pH}$ để tính $\\varphi$."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-024",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT21 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện được tạo ra từ 2 điện cực, trong đó một điện cực gồm một tấm Cu nhúng trong dung dịch $\\mathrm{CuSO_{4}}$. Điện cực thứ hai là một dây Pt nhúng vào dung dịch $\\mathrm{Fe^{3+}}$, $\\mathrm{Fe^{2+}}$. Dùng một dây dẫn nối 2 đầu tấm Cu và dây Pt. Như vậy, trên mỗi điện cực của pin có các nửa phản ứng và thế oxi hóa khử chuẩn tương ứng như sau: $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $\\varphi^\\circ(\\mathrm{Cu^{2+}/Cu}) = 0{,}34$ V; $\\mathrm{Fe^{3+} + 1e \\to  Fe^{2+}}$, $\\varphi^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77$ V.\n\n-  Ở điều kiện chuẩn, viết phản ứng tổng quát khi pin hoạt động và thiết lập sơ đồ pin.\n\n-  Tính sức điện động của pin ở thời điểm nồng độ đầu của dung dịch $\\mathrm{CuSO_{4}}$ là 0,4 M và dung dịch $\\mathrm{Fe^{3+}}$, $\\mathrm{Fe^{2+}}$ có tỉ lệ nồng độ $[\\mathrm{Fe^{3+}}]/[\\mathrm{Fe^{2+}}]$ bằng 3.\n\n-  Biết rằng thể tích của dung dịch $\\mathrm{CuSO_{4}}$ 0,4 M khá lớn so với dung dịch $\\mathrm{Fe^{3+}}$, $\\mathrm{Fe^{2+}}$. Hãy tìm tỷ số $[\\mathrm{Fe^{3+}}]/[\\mathrm{Fe^{2+}}]$ khi pin ngừng hoạt động.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương pháp đúng để tính $E_{\\text{pin}}$ ban đầu và tỉ số $[\\mathrm{Fe^{3+}}]/[\\mathrm{Fe^{2+}}]$ khi pin ngừng hoạt động.",
    "explanation": "Không nhân $E$ với 2; dùng $n=1$ cho $\\mathrm{Fe^{3+}/Fe^{2+}}$ với $[\\text{Ox}]/[\\text{Kh}] = [\\mathrm{Fe^{3+}}]/[\\mathrm{Fe^{2+}}]$. Pin ngừng hoạt động khi đạt cân bằng $E_{\\text{pin}} = 0$, tức $E_{\\mathrm{Fe}} = E_{\\mathrm{Cu}}$.\n\n**Lời giải đầy đủ:**\n\n-  a) $0{,}77 > 0{,}34$: catot Pt (Fe), anot Cu: $\\mathrm{Cu + 2Fe^{3+} \\to  Cu^{2+} + 2Fe^{2+}}$. \n\n-  Nernst ở 25 °C cho nửa phản ứng $\\text{Ox} + ne \\to \\text{Kh}$: $E = E^\\circ + \\dfrac{0{,}059}{n}\\lg\\dfrac{[\\text{Ox}]}{[\\text{Kh}]}$ (kim loại rắn có hoạt độ 1). \n\n-  b) $E_{\\mathrm{Fe}} = 0{,}77 + 0{,}059\\lg 3 = 0{,}798$ V; $E_{\\mathrm{Cu}} = 0{,}34 + 0{,}0295\\lg 0{,}4 = 0{,}328$ V; $E = 0{,}798 - 0{,}328$. \n\n-  c) Pin ngừng khi $E_{\\mathrm{Fe}} = E_{\\mathrm{Cu}}$; $\\mathrm{Cu^{2+}}$ gần như không đổi (thể tích lớn): $0{,}77 + 0{,}059\\lg r = 0{,}328 \\Rightarrow \\lg r = \\dfrac{0{,}328 - 0{,}77}{0{,}059} = -7{,}49$.\n\nTính lại không làm tròn giữa chừng:\n- Epin ban đầu? 0,4698894 V. EFe = 0,77+0,059lg3; ECu=0,34+0,0295lg0,4.\n- Tỉ số [Fe³⁺]/[Fe²⁺] khi pin ngừng? 3,257575e-08 . Pin ngừng: EFe=ECu. [Cu²⁺]≈0,4 M vì ngăn Cu có thể tích lớn.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT21 C7 (Đề tổng hợp 11, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Nhân $E^\\circ(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77$ V với 2 cho bằng số electron của đồng rồi mới trừ $E_{\\mathrm{Cu}}$."
      },
      {
        "id": "option-2",
        "label": "Cho rằng khi pin ngừng hoạt động thì $E_{\\mathrm{Fe}} = 0$ hoặc tỉ số $[\\mathrm{Fe^{3+}}]/[\\mathrm{Fe^{2+}}] = 1$."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst cho cực sắt theo tỉ số nghịch đảo $[\\mathrm{Fe^{2+}}]/[\\mathrm{Fe^{3+}}]$ nên thay $\\lg(1/3)$ ở trạng thái đầu."
      },
      {
        "id": "option-4",
        "label": "Tính riêng $E_{\\mathrm{Fe}}$ ($n=1$) và $E_{\\mathrm{Cu}}$ ($n=2$); khi pin ngừng thì $E_{\\mathrm{Fe}} = E_{\\mathrm{Cu}}$ với $[\\mathrm{Cu^{2+}}] \\approx 0{,}4$ M không đổi, từ đó giải tỉ số."
      }
    ],
    "answers": [
      "option-4"
    ]
  },
  {
    "id": "gc-c7-ec-025",
    "lessonId": "gc-ec-nernst",
    "title": "Đề ĐT26 C7: pin điện hóa và Nernst",
    "prompt": "Một pin điện hóa được xây dựng từ 2 nửa phương trình phản ứng oxi hóa-khử có thế điện cực chuẩn ($\\varphi^\\circ$) tương ứng: $\\mathrm{Cu^{2+} + 2e \\to  Cu}$, $\\varphi^\\circ(\\mathrm{Cu^{2+}/Cu}) = +0{,}34$ V; $\\mathrm{Ag^{+} + e \\to  Ag}$, $\\varphi^\\circ(\\mathrm{Ag^{+}/Ag}) = +0{,}80$ V.\n\n-  Hãy viết phương trình làm việc của pin điện hóa trên và chỉ ra đâu là catot và anot?\n\n-  Tính $\\Delta G^\\circ$ (theo J/mol) và hằng số cân bằng $K$ của phản ứng điện hóa trên ở 25 °C.\n\n-  Ở 25 °C nếu nồng độ $[\\mathrm{Cu^{2+}}] = 0{,}1$ M thì cần nồng độ $[\\mathrm{Ag^{+}}]$ là bao nhiêu để sức điện động của pin ($E_{pin}$) đạt được 0,4 V.\n\nDữ kiện chung in kèm đề: $c = 3e8$ m/s; $h = 6.625e-34$ J.s; $R = 8{,}314$ J/mol.K = 0,082 L.atm/mol.K; 1 eV = 1.6e-19 J; $R_H = 109678$ cm$^{-1}$; $F = 96\\,500$ C/mol; $T$(K) = 273 + $t$(°C).\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương pháp đúng để tính $\\Delta G^\\circ$, $K$ và tìm $[\\mathrm{Ag^{+}}]$ khi $E_{\\text{pin}} = 0{,}4$ V.",
    "explanation": "Phản ứng $\\mathrm{Cu + 2Ag^+ \\to Cu^{2+} + 2Ag}$ có $n=2$, không nhân $E^\\circ(\\mathrm{Ag^+/Ag})$ với 2, và thương phản ứng là $Q = [\\mathrm{Cu^{2+}}]/[\\mathrm{Ag^+}]^2$.\n\n**Lời giải đầy đủ:**\n\n-  a) $0{,}80 > 0{,}34$: catot Ag, anot Cu: $\\mathrm{Cu + 2Ag^{+} \\to  Cu^{2+} + 2Ag}$. \n\n-  b) $E^\\circ = 0{,}46$ V; $\\Delta G^\\circ = -2 \\times 96500 \\times 0{,}46 = -8.88e4$ J; $\\lg K = \\dfrac{2 \\times 0{,}46}{0{,}059} = 15{,}6$. \n\n-  c) $E = E^\\circ - \\dfrac{0{,}059}{2}\\lg\\dfrac{[\\mathrm{Cu^{2+}}]}{[\\mathrm{Ag^{+}}]^2}$; biến đổi: $\\lg\\dfrac{0{,}1}{[\\mathrm{Ag^{+}}]^2} = \\dfrac{2(0{,}46 - 0{,}4)}{0{,}059} = 2{,}03$. \n\n-  $[\\mathrm{Ag^{+}}]^2 = 0{,}1 \\times 10^{-2{,}03} = 9.3e-4$, lấy căn.\n\nTính lại không làm tròn giữa chừng:\n- E°pin (V)? 0,46 V. 0,80 − 0,34 = 0,46 V.\n- ΔG° (J/mol)? -88780 J/mol. n = 2; ΔG° = −nFE°.\n- lg K? 15,59322 . lg K = nE°/0,059.\n- Nồng độ Ag⁺ để Epin=0,4 V (mol/L)? 0,03041241 mol/L. Q=[Cu²⁺]/[Ag⁺]²; cô lập [Ag⁺]² rồi lấy căn dương.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11b.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT26 C7 (HK1 2024--2025, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Viết Nernst với $Q = [\\mathrm{Cu^{2+}}]/[\\mathrm{Ag^{+}}]$ (quên bình phương $[\\mathrm{Ag^{+}}]$ theo hệ số cân bằng 2)."
      },
      {
        "id": "option-2",
        "label": "Xác định catot Ag, anot Cu ($n=2$), tính $\\Delta G^\\circ$ và $\\lg K$ theo $n=2$, rồi giải $[\\mathrm{Ag^{+}}]$ từ $E = E^\\circ - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Cu^{2+}}]}{[\\mathrm{Ag^{+}}]^2}$ (nhớ lấy căn bậc hai)."
      },
      {
        "id": "option-3",
        "label": "Nhân $E^\\circ(\\mathrm{Ag^{+}/Ag}) = 0{,}80$ V với 2 trước khi trừ $E^\\circ(\\mathrm{Cu^{2+}/Cu})$ để tìm $E^\\circ_{\\text{pin}}$."
      },
      {
        "id": "option-4",
        "label": "Viết Nernst toàn pin dạng $E = E^\\circ - \\frac{0{,}059}{2}\\lg\\frac{[\\mathrm{Ag^{+}}]^2}{[\\mathrm{Cu^{2+}}]}$ (đảo ngược $Q$) rồi giải $[\\mathrm{Ag^{+}}]$."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-026",
    "lessonId": "gc-ec-luther",
    "title": "Đề ĐT17 C7: tổ hợp thế Luther",
    "prompt": "Cho biết thế khử chuẩn ở 25 °C của các cặp oxi hóa khử sau: $\\mathrm{Sn^{2+} + 2e \\to  Sn}$, $\\varphi^\\circ(\\mathrm{Sn^{2+}/Sn}) = -0{,}14$ V; $\\mathrm{Sn^{4+} + 4e \\to  Sn}$, $\\varphi^\\circ(\\mathrm{Sn^{4+}/Sn}) = +0{,}005$ V.\n\n-  Tính thế khử chuẩn ở 25 °C của cặp $\\mathrm{Sn^{4+}/Sn^{2+}}$.\n\n-  Dựa trên 2 cặp oxi hóa khử $\\mathrm{Sn^{2+}/Sn}$ và $\\mathrm{Sn^{4+}/Sn^{2+}}$, người ta thiết lập một pin ở điều kiện tiêu chuẩn. Viết các phương trình nửa phản ứng ở các điện cực anot và catot khi pin làm việc. Tính sức điện động ($\\Delta E^\\circ$) của pin ở 25 °C.\n\nDùng hệ số Nernst 0,059 V ở 25 °C; khi cần, $F=96500$ C/mol electron.\n\n**Câu hỏi:** Chọn phương pháp đúng để tính thế khử chuẩn $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}})$ theo quy tắc Luther.",
    "explanation": "Đại lượng có tính cộng khi tổ hợp nửa phản ứng là $\\Delta G^\\circ = -nFE^\\circ$, nên phải viết bảo toàn $nE^\\circ$: $4E^\\circ(\\mathrm{Sn^{4+}/Sn}) = 2E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}}) + 2E^\\circ(\\mathrm{Sn^{2+}/Sn})$, không cộng $E^\\circ$ trực tiếp.\n\n**Lời giải đầy đủ:**\n\n-  Năng lượng Gibbs cộng được, thế thì không: $\\Delta G^\\circ = -nFE^\\circ$ nên $\\mathrm{Sn^{4+} + 4e \\to  Sn}$ (4 e) = $\\mathrm{Sn^{4+} + 2e \\to  Sn^{2+}}$ (2 e) + $\\mathrm{Sn^{2+} + 2e \\to  Sn}$ (2 e). \n\n-  Viết theo $nE^\\circ$: $4E^\\circ(\\mathrm{Sn^{4+}/Sn}) = 2E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}}) + 2E^\\circ(\\mathrm{Sn^{2+}/Sn})$; biến đổi: $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}}) = \\dfrac{4(0{,}005) - 2(-0{,}14)}{2}$. \n\n-  b) Catot $\\mathrm{Sn^{4+}/Sn^{2+}}$ (0,15), anot $\\mathrm{Sn^{2+}/Sn}$ ($-0{,}14$); $\\Delta E^\\circ = 0{,}15 - (-0{,}14)$.\n\nTính lại không làm tròn giữa chừng:\n- E°(Sn⁴⁺/Sn²⁺) (V)? 0,15 V. 4×0,005 = 2E° + 2×(−0,14).\n- E°pin (V)? 0,29 V. Catot: Sn⁴⁺+2e→Sn²⁺; anot: Sn→Sn²⁺+2e. Tổng Sn⁴⁺+Sn→2Sn²⁺.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/kieu-11c.json",
      "rights": "approved",
      "attribution": "Đề thi kết thúc học phần CHE1080 ĐT17 C7 (Đề tổng hợp 7, 1,5 điểm), đối chiếu tuyển tập bài tập. Lời giải tính lại từ dữ kiện đề."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Cộng trực tiếp các thế chuẩn: $E^\\circ(\\mathrm{Sn^{4+}/Sn}) = E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}}) + E^\\circ(\\mathrm{Sn^{2+}/Sn})$."
      },
      {
        "id": "option-2",
        "label": "Dùng tính cộng của $\\Delta G^\\circ = -nFE^\\circ$ để lập $4E^\\circ(\\mathrm{Sn^{4+}/Sn}) = 2E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}}) + 2E^\\circ(\\mathrm{Sn^{2+}/Sn})$, rồi cô lập $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}})$."
      },
      {
        "id": "option-3",
        "label": "Lấy $4E^\\circ(\\mathrm{Sn^{4+}/Sn}) + 2E^\\circ(\\mathrm{Sn^{2+}/Sn})$ rồi chia 2 để tìm $E^\\circ(\\mathrm{Sn^{4+}/Sn^{2+}})$."
      },
      {
        "id": "option-4",
        "label": "Chia $E^\\circ$ cho số electron $n$ thay vì nhân $nE^\\circ$ khi tổ hợp hai nửa phản ứng."
      }
    ],
    "answers": [
      "option-2"
    ]
  },
  {
    "id": "gc-c7-ec-027",
    "lessonId": "gc-ec-drawing-guide",
    "title": "Tìm lỗi Luther: cộng thế trực tiếp",
    "prompt": "Một bạn viết E°(Sn⁴⁺/Sn) = E°(Sn⁴⁺/Sn²⁺) + E°(Sn²⁺/Sn). Biết hai thế lần lượt 0,005 V và −0,14 V, bạn suy ra thế còn thiếu là 0,145 V.\n\n**Câu hỏi:** Sai ở đâu?",
    "explanation": "Hai đường có cùng $\\Delta G^\\circ = -nFE^\\circ$ nên cộng $nE^\\circ$: $4\\times 0{,}005 = 2E^\\circ + 2\\times(-0{,}14)$, suy ra $E^\\circ = 0{,}15$ V; không thể cộng hay lấy trung bình $E^\\circ$ trực tiếp.\n\n**Lời giải đầy đủ:**\n\nHai đường có cùng ΔG° nên 4×0,005 = 2E° + 2×(−0,14). Thế cần tìm là 0,15 V; không thể cộng E° trực tiếp.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tự soạn theo lỗi hay gặp và phương pháp trong Tổng ôn CHE1080, Dạng 11."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Không sai phương pháp vì các nửa phản ứng cộng được nên $E^\\circ$ cũng cộng trực tiếp."
      },
      {
        "id": "option-2",
        "label": "Chỉ sai dấu khi chuyển vế; lấy $0{,}005 + (-0{,}14)$ cho thế đúng là $-0{,}135$ V."
      },
      {
        "id": "option-3",
        "label": "Phải cộng $nE^\\circ$ (do $\\Delta G^\\circ = -nFE^\\circ$ có tính cộng); thế đúng là $0{,}15$ V."
      },
      {
        "id": "option-4",
        "label": "Phải lấy trung bình cộng $(0{,}005 - 0{,}14)/2$, cho thế đúng là $-0{,}0675$ V."
      }
    ],
    "answers": [
      "option-3"
    ]
  },
  {
    "id": "gc-c7-ec-028",
    "lessonId": "gc-ec-drawing-guide",
    "title": "Đề hỏi gì thì vẽ hoặc dùng gì?",
    "prompt": "Đề cho nồng độ không chuẩn rồi hỏi cực nào nhận electron và Epin.\n\n**Câu hỏi:** Bắt đầu bằng thao tác nào?",
    "explanation": "Nồng độ làm thế khử $E$ dịch khỏi $E^\\circ$ (theo tỉ số $[\\text{Ox}]/[\\text{Kh}]$ và không nhân $E$ với hệ số). Cần tính $E$ thực tế của từng cực rồi chọn catot là cực có $E$ lớn hơn, sau đó tính $E_{\\text{pin}} = E_{\\text{catot}} - E_{\\text{anot}}$.\n\n**Lời giải đầy đủ:**\n\nNồng độ làm E dịch khỏi E°. Chọn cực theo thế khử thực tế, sau đó tính hiệu Ecatot−Eanot.",
    "provenance": {
      "repository": "https://github.com/HanitaV/Chemistry",
      "revision": "ad043333d24f67da5d11611678754397f4595e49",
      "path": "src/content/courses/general-chemistry/chapters/chapter-7/exercises/drawing-guide.json",
      "rights": "approved",
      "attribution": "Bài tự soạn theo lỗi hay gặp và phương pháp trong Tổng ôn CHE1080, Dạng 11."
    },
    "kind": "multiple-choice",
    "choices": [
      {
        "id": "option-1",
        "label": "Chỉ xếp thứ tự $E^\\circ$ chuẩn để cố định catot và anot, bỏ qua ảnh hưởng nồng độ."
      },
      {
        "id": "option-2",
        "label": "Viết Nernst cho từng cực, vẽ thang $E$ thực tế rồi chọn cực có $E$ lớn hơn làm catot."
      },
      {
        "id": "option-3",
        "label": "Viết Nernst với tỉ số nghịch đảo $[\\text{Kh}]/[\\text{Ox}]$ trước khi so sánh thế hai cực."
      },
      {
        "id": "option-4",
        "label": "Nhân $E^\\circ$ với hệ số cân bằng electron của mỗi nửa phản ứng rồi mới xác định cực."
      }
    ],
    "answers": [
      "option-2"
    ]
  }
], ...writtenPractice, ...gcSemiEssays] as const satisfies readonly ExerciseDefinition[];
