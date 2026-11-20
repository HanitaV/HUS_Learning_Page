import type { LearningContent } from '../../../domain/workspace';
import { gcSemiEssays } from './semi-essays';
import writtenPractice from './written-practice';
import { withWrittenPractice } from '../../../core/learning/written-content';

const content = withWrittenPractice(withWrittenPractice({
  "chapters": [
    {
      "id": "gc-ch-1",
      "courseId": "general-chemistry",
      "title": "Cấu tạo nguyên tử",
      "topicIds": [
        "gc-atomic-structure-topic",
        "gc-quantum-numbers-topic",
        "gc-electron-configuration-topic",
        "gc-light-photon-topic",
        "gc-bohr-model-topic",
        "gc-electronic-transitions-topic",
        "gc-ionization-energy-topic",
        "gc-atom-drawing-guide-topic"
      ]
    },
    {
      "id": "gc-ch-2",
      "courseId": "general-chemistry",
      "title": "Cấu tạo phân tử và liên kết hóa học",
      "topicIds": [
        "gc-bond-concepts-topic",
        "gc-ionic-bond-topic",
        "gc-covalent-lewis-topic",
        "gc-vb-theory-topic",
        "gc-hybridization-topic",
        "gc-molecular-geometry-topic",
        "gc-mo-theory-topic",
        "gc-mo-bond-order-topic",
        "gc-bonding-drawing-guide-topic"
      ]
    },
    {
      "id": "gc-ch-3",
      "courseId": "general-chemistry",
      "title": "Nhiệt động hóa học",
      "topicIds": [
        "gc-thermo-systems-topic",
        "gc-first-law-topic",
        "gc-enthalpy-topic",
        "gc-hess-law-topic",
        "gc-formation-enthalpy-topic",
        "gc-entropy-topic",
        "gc-gibbs-topic",
        "gc-gibbs-equilibrium-topic",
        "gc-thermo-drawing-guide-topic"
      ]
    },
    {
      "id": "gc-ch-4",
      "courseId": "general-chemistry",
      "title": "Cân bằng hóa học",
      "topicIds": [
        "gc-eq-foundations-topic",
        "gc-eq-constant-topic",
        "gc-eq-ice-table-topic",
        "gc-eq-composition-topic",
        "gc-eq-temperature-topic",
        "gc-eq-drawing-guide-topic"
      ]
    },
    {
      "id": "gc-ch-5",
      "courseId": "general-chemistry",
      "title": "Động học phản ứng",
      "topicIds": [
        "gc-kin-rate-topic",
        "gc-kin-first-order-topic",
        "gc-kin-arrhenius-topic",
        "gc-kin-drawing-guide-topic"
      ]
    },
    {
      "id": "gc-ch-6",
      "courseId": "general-chemistry",
      "title": "Dung dịch: axit – bazơ và độ tan",
      "topicIds": [
        "gc-sol-foundations-topic",
        "gc-sol-weak-acid-base-topic",
        "gc-sol-salt-topic",
        "gc-sol-buffer-topic",
        "gc-sol-solubility-topic",
        "gc-sol-acid-mixture-topic",
        "gc-sol-drawing-guide-topic"
      ]
    },
    {
      "id": "gc-ch-7",
      "courseId": "general-chemistry",
      "title": "Điện hóa học",
      "topicIds": [
        "gc-ec-redox-topic",
        "gc-ec-galvanic-cell-topic",
        "gc-ec-nernst-topic",
        "gc-ec-luther-topic",
        "gc-ec-drawing-guide-topic"
      ]
    }
  ],
  "topics": [
    {
      "id": "gc-atomic-structure-topic",
      "chapterId": "gc-ch-1",
      "title": "Cấu tạo nguyên tử",
      "lessonIds": [
        "gc-atomic-structure"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-quantum-numbers-topic",
      "chapterId": "gc-ch-1",
      "title": "Số lượng tử và orbital nguyên tử",
      "lessonIds": [
        "gc-quantum-numbers"
      ],
      "prerequisiteIds": [
        "gc-atomic-structure-topic"
      ]
    },
    {
      "id": "gc-electron-configuration-topic",
      "chapterId": "gc-ch-1",
      "title": "Cấu hình electron",
      "lessonIds": [
        "gc-electron-configuration"
      ],
      "prerequisiteIds": [
        "gc-quantum-numbers-topic"
      ]
    },
    {
      "id": "gc-light-photon-topic",
      "chapterId": "gc-ch-1",
      "title": "Ánh sáng và photon",
      "lessonIds": [
        "gc-light-photon"
      ],
      "prerequisiteIds": [
        "gc-atomic-structure-topic"
      ]
    },
    {
      "id": "gc-bohr-model-topic",
      "chapterId": "gc-ch-1",
      "title": "Mẫu nguyên tử Bohr",
      "lessonIds": [
        "gc-bohr-model"
      ],
      "prerequisiteIds": [
        "gc-light-photon-topic"
      ]
    },
    {
      "id": "gc-electronic-transitions-topic",
      "chapterId": "gc-ch-1",
      "title": "Chuyển mức năng lượng và phổ nguyên tử",
      "lessonIds": [
        "gc-electronic-transitions"
      ],
      "prerequisiteIds": [
        "gc-bohr-model-topic"
      ]
    },
    {
      "id": "gc-ionization-energy-topic",
      "chapterId": "gc-ch-1",
      "title": "Năng lượng ion hóa",
      "lessonIds": [
        "gc-ionization-energy"
      ],
      "prerequisiteIds": [
        "gc-electronic-transitions-topic",
        "gc-electron-configuration-topic"
      ]
    },
    {
      "id": "gc-atom-drawing-guide-topic",
      "chapterId": "gc-ch-1",
      "title": "Vẽ gì, nghĩ gì — nguyên tử H và ion giống H qua hình vẽ",
      "lessonIds": [
        "gc-atom-drawing-guide"
      ],
      "prerequisiteIds": [
        "gc-electronic-transitions-topic",
        "gc-ionization-energy-topic"
      ]
    },
    {
      "id": "gc-bond-concepts-topic",
      "chapterId": "gc-ch-2",
      "title": "Khái niệm liên kết hóa học",
      "lessonIds": [
        "gc-bond-concepts"
      ],
      "prerequisiteIds": [
        "gc-electron-configuration-topic"
      ]
    },
    {
      "id": "gc-ionic-bond-topic",
      "chapterId": "gc-ch-2",
      "title": "Quy tắc bát tử và liên kết ion",
      "lessonIds": [
        "gc-ionic-bond"
      ],
      "prerequisiteIds": [
        "gc-bond-concepts-topic"
      ]
    },
    {
      "id": "gc-covalent-lewis-topic",
      "chapterId": "gc-ch-2",
      "title": "Liên kết cộng hóa trị và công thức Lewis",
      "lessonIds": [
        "gc-covalent-lewis"
      ],
      "prerequisiteIds": [
        "gc-ionic-bond-topic"
      ]
    },
    {
      "id": "gc-vb-theory-topic",
      "chapterId": "gc-ch-2",
      "title": "Thuyết liên kết hóa trị (VB) — liên kết σ và π",
      "lessonIds": [
        "gc-vb-theory"
      ],
      "prerequisiteIds": [
        "gc-covalent-lewis-topic",
        "gc-quantum-numbers-topic"
      ]
    },
    {
      "id": "gc-hybridization-topic",
      "chapterId": "gc-ch-2",
      "title": "Lai hóa orbital",
      "lessonIds": [
        "gc-hybridization"
      ],
      "prerequisiteIds": [
        "gc-vb-theory-topic"
      ]
    },
    {
      "id": "gc-molecular-geometry-topic",
      "chapterId": "gc-ch-2",
      "title": "Hình học phân tử và độ phân cực",
      "lessonIds": [
        "gc-molecular-geometry"
      ],
      "prerequisiteIds": [
        "gc-hybridization-topic",
        "gc-covalent-lewis-topic"
      ]
    },
    {
      "id": "gc-mo-theory-topic",
      "chapterId": "gc-ch-2",
      "title": "Thuyết orbital phân tử (MO)",
      "lessonIds": [
        "gc-mo-theory"
      ],
      "prerequisiteIds": [
        "gc-vb-theory-topic",
        "gc-electron-configuration-topic"
      ]
    },
    {
      "id": "gc-mo-bond-order-topic",
      "chapterId": "gc-ch-2",
      "title": "Bậc liên kết, từ tính và độ bền theo thuyết MO",
      "lessonIds": [
        "gc-mo-bond-order"
      ],
      "prerequisiteIds": [
        "gc-mo-theory-topic"
      ]
    },
    {
      "id": "gc-bonding-drawing-guide-topic",
      "chapterId": "gc-ch-2",
      "title": "Vẽ gì, nghĩ gì — VB, lai hóa và MO qua hình vẽ",
      "lessonIds": [
        "gc-bonding-drawing-guide"
      ],
      "prerequisiteIds": [
        "gc-hybridization-topic",
        "gc-mo-bond-order-topic"
      ]
    },
    {
      "id": "gc-thermo-systems-topic",
      "chapterId": "gc-ch-3",
      "title": "Hệ nhiệt động",
      "lessonIds": [
        "gc-thermo-systems"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-first-law-topic",
      "chapterId": "gc-ch-3",
      "title": "Nội năng và nguyên lý I nhiệt động học",
      "lessonIds": [
        "gc-first-law"
      ],
      "prerequisiteIds": [
        "gc-thermo-systems-topic"
      ]
    },
    {
      "id": "gc-enthalpy-topic",
      "chapterId": "gc-ch-3",
      "title": "Enthalpy, công giãn nở và nhiệt dung",
      "lessonIds": [
        "gc-enthalpy"
      ],
      "prerequisiteIds": [
        "gc-first-law-topic"
      ]
    },
    {
      "id": "gc-hess-law-topic",
      "chapterId": "gc-ch-3",
      "title": "Định luật Hess",
      "lessonIds": [
        "gc-hess-law"
      ],
      "prerequisiteIds": [
        "gc-enthalpy-topic"
      ]
    },
    {
      "id": "gc-formation-enthalpy-topic",
      "chapterId": "gc-ch-3",
      "title": "Nhiệt tạo thành và enthalpy chuẩn",
      "lessonIds": [
        "gc-formation-enthalpy"
      ],
      "prerequisiteIds": [
        "gc-hess-law-topic"
      ]
    },
    {
      "id": "gc-entropy-topic",
      "chapterId": "gc-ch-3",
      "title": "Entropy",
      "lessonIds": [
        "gc-entropy"
      ],
      "prerequisiteIds": [
        "gc-formation-enthalpy-topic"
      ]
    },
    {
      "id": "gc-gibbs-topic",
      "chapterId": "gc-ch-3",
      "title": "Năng lượng tự do Gibbs và điều kiện tự diễn biến",
      "lessonIds": [
        "gc-gibbs"
      ],
      "prerequisiteIds": [
        "gc-entropy-topic"
      ]
    },
    {
      "id": "gc-gibbs-equilibrium-topic",
      "chapterId": "gc-ch-3",
      "title": "Năng lượng tự do Gibbs và hằng số cân bằng",
      "lessonIds": [
        "gc-gibbs-equilibrium"
      ],
      "prerequisiteIds": [
        "gc-gibbs-topic"
      ]
    },
    {
      "id": "gc-thermo-drawing-guide-topic",
      "chapterId": "gc-ch-3",
      "title": "Vẽ gì, nghĩ gì — ΔG°, chiều phản ứng và ΔU qua hình vẽ",
      "lessonIds": [
        "gc-thermo-drawing-guide"
      ],
      "prerequisiteIds": [
        "gc-gibbs-topic",
        "gc-hess-law-topic"
      ]
    },
    {
      "id": "gc-eq-foundations-topic",
      "chapterId": "gc-ch-4",
      "title": "Mol, khí lý tưởng và áp suất riêng phần",
      "lessonIds": [
        "gc-eq-foundations"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-eq-constant-topic",
      "chapterId": "gc-ch-4",
      "title": "Hằng số cân bằng Kc, Kp và thương số Q",
      "lessonIds": [
        "gc-eq-constant"
      ],
      "prerequisiteIds": [
        "gc-eq-foundations-topic",
        "gc-gibbs-equilibrium-topic"
      ]
    },
    {
      "id": "gc-eq-ice-table-topic",
      "chapterId": "gc-ch-4",
      "title": "Phương pháp 3 dòng: tính K từ thành phần cân bằng",
      "lessonIds": [
        "gc-eq-ice-table"
      ],
      "prerequisiteIds": [
        "gc-eq-constant-topic"
      ]
    },
    {
      "id": "gc-eq-composition-topic",
      "chapterId": "gc-ch-4",
      "title": "Biết K tìm thành phần; ảnh hưởng của áp suất",
      "lessonIds": [
        "gc-eq-composition"
      ],
      "prerequisiteIds": [
        "gc-eq-ice-table-topic"
      ]
    },
    {
      "id": "gc-eq-temperature-topic",
      "chapterId": "gc-ch-4",
      "title": "K theo nhiệt độ và liên hệ Gibbs",
      "lessonIds": [
        "gc-eq-temperature"
      ],
      "prerequisiteIds": [
        "gc-eq-composition-topic",
        "gc-gibbs-equilibrium-topic"
      ]
    },
    {
      "id": "gc-eq-drawing-guide-topic",
      "chapterId": "gc-ch-4",
      "title": "Vẽ gì, nghĩ gì — bảng 3 dòng, Q so với K",
      "lessonIds": [
        "gc-eq-drawing-guide"
      ],
      "prerequisiteIds": [
        "gc-eq-composition-topic",
        "gc-eq-temperature-topic"
      ]
    },
    {
      "id": "gc-kin-rate-topic",
      "chapterId": "gc-ch-5",
      "title": "Tốc độ phản ứng và bậc phản ứng",
      "lessonIds": [
        "gc-kin-rate"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-kin-first-order-topic",
      "chapterId": "gc-ch-5",
      "title": "Phản ứng bậc 1 và thời gian bán hủy",
      "lessonIds": [
        "gc-kin-first-order"
      ],
      "prerequisiteIds": [
        "gc-kin-rate-topic"
      ]
    },
    {
      "id": "gc-kin-arrhenius-topic",
      "chapterId": "gc-ch-5",
      "title": "Năng lượng hoạt hóa và phương trình Arrhenius",
      "lessonIds": [
        "gc-kin-arrhenius"
      ],
      "prerequisiteIds": [
        "gc-kin-first-order-topic"
      ]
    },
    {
      "id": "gc-kin-drawing-guide-topic",
      "chapterId": "gc-ch-5",
      "title": "Vẽ gì, nghĩ gì — đồ thị ln C theo t và ln k theo 1/T",
      "lessonIds": [
        "gc-kin-drawing-guide"
      ],
      "prerequisiteIds": [
        "gc-kin-first-order-topic",
        "gc-kin-arrhenius-topic"
      ]
    },
    {
      "id": "gc-sol-foundations-topic",
      "chapterId": "gc-ch-6",
      "title": "Nồng độ, pha loãng, logarit và pH",
      "lessonIds": [
        "gc-sol-foundations"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-sol-weak-acid-base-topic",
      "chapterId": "gc-ch-6",
      "title": "pH dung dịch axit yếu, bazơ yếu",
      "lessonIds": [
        "gc-sol-weak-acid-base"
      ],
      "prerequisiteIds": [
        "gc-sol-foundations-topic",
        "gc-eq-ice-table-topic"
      ]
    },
    {
      "id": "gc-sol-salt-topic",
      "chapterId": "gc-ch-6",
      "title": "pH dung dịch muối (thủy phân)",
      "lessonIds": [
        "gc-sol-salt"
      ],
      "prerequisiteIds": [
        "gc-sol-weak-acid-base-topic"
      ]
    },
    {
      "id": "gc-sol-buffer-topic",
      "chapterId": "gc-ch-6",
      "title": "Dung dịch đệm",
      "lessonIds": [
        "gc-sol-buffer"
      ],
      "prerequisiteIds": [
        "gc-sol-salt-topic",
        "gc-eq-ice-table-topic"
      ]
    },
    {
      "id": "gc-sol-solubility-topic",
      "chapterId": "gc-ch-6",
      "title": "Độ tan và tích số tan",
      "lessonIds": [
        "gc-sol-solubility"
      ],
      "prerequisiteIds": [
        "gc-eq-constant-topic",
        "gc-sol-foundations-topic"
      ]
    },
    {
      "id": "gc-sol-acid-mixture-topic",
      "chapterId": "gc-ch-6",
      "title": "pH hỗn hợp axit",
      "lessonIds": [
        "gc-sol-acid-mixture"
      ],
      "prerequisiteIds": [
        "gc-sol-weak-acid-base-topic"
      ]
    },
    {
      "id": "gc-sol-drawing-guide-topic",
      "chapterId": "gc-ch-6",
      "title": "Vẽ gì, nghĩ gì — bảng 3 dòng theo mmol, thang pH",
      "lessonIds": [
        "gc-sol-drawing-guide"
      ],
      "prerequisiteIds": [
        "gc-sol-acid-mixture-topic"
      ]
    },
    {
      "id": "gc-ec-redox-topic",
      "chapterId": "gc-ch-7",
      "title": "Số oxi hóa và nửa phản ứng",
      "lessonIds": [
        "gc-ec-redox"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-ec-galvanic-cell-topic",
      "chapterId": "gc-ch-7",
      "title": "Pin điện hóa: quy ước, sơ đồ pin, thế chuẩn",
      "lessonIds": [
        "gc-ec-galvanic-cell"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-ec-nernst-topic",
      "chapterId": "gc-ch-7",
      "title": "Phương trình Nernst; liên hệ E°, ΔG°, K",
      "lessonIds": [
        "gc-ec-nernst"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-ec-luther-topic",
      "chapterId": "gc-ch-7",
      "title": "Tổ hợp thế điện cực (quy tắc Luther)",
      "lessonIds": [
        "gc-ec-luther"
      ],
      "prerequisiteIds": []
    },
    {
      "id": "gc-ec-drawing-guide-topic",
      "chapterId": "gc-ch-7",
      "title": "Vẽ gì, nghĩ gì — thang thế điện cực, sơ đồ pin",
      "lessonIds": [
        "gc-ec-drawing-guide"
      ],
      "prerequisiteIds": []
    }
  ],
  "lessons": [
    {
      "id": "gc-atomic-structure",
      "topicId": "gc-atomic-structure-topic",
      "title": "Cấu tạo nguyên tử",
      "summary": "Thành phần của nguyên tử (proton, neutron, electron), số hiệu nguyên tử Z, số khối A, đồng vị và ion.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-atomic-structure.md"
      },
      "exerciseIds": [
        "gc-c1-atom-001",
        "gc-c1-atom-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/01-atomic-structure.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-quantum-numbers",
      "topicId": "gc-quantum-numbers-topic",
      "title": "Số lượng tử và orbital nguyên tử",
      "summary": "Bốn số lượng tử n, l, mₗ, mₛ; khái niệm orbital và hình dạng orbital s, p, d.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-quantum-numbers.md"
      },
      "exerciseIds": [
        "gc-c1-qn-001",
        "gc-c1-qn-002",
        "gc-c1-qn-003"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/02-quantum-numbers.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-electron-configuration",
      "topicId": "gc-electron-configuration-topic",
      "title": "Cấu hình electron",
      "summary": "Nguyên lý vững bền, nguyên lý Pauli, quy tắc Hund; cách viết cấu hình electron của nguyên tử và ion.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-electron-configuration.md"
      },
      "exerciseIds": [
        "gc-c1-ec-001",
        "gc-c1-ec-002",
        "gc-c1-ec-003",
        "gc-c1-ec-004"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/03-electron-configuration.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-light-photon",
      "topicId": "gc-light-photon-topic",
      "title": "Ánh sáng và photon",
      "summary": "Bản chất sóng – hạt của ánh sáng; tần số, bước sóng, số sóng; năng lượng photon E = hν = hc/λ.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-light-photon.md"
      },
      "exerciseIds": [
        "gc-c1-exam-015",
        "gc-c1-exam-016",
        "gc-c1-photon-001",
        "gc-c1-photon-002",
        "gc-c1-photon-003",
        "gc-c1-photon-004",
        "gc-c1-photon-005",
        "gc-c1-photon-006",
        "gc-c1-photon-007",
        "gc-c1-photon-008",
        "gc-c1-photon-009"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/04-light-photon.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-bohr-model",
      "topicId": "gc-bohr-model-topic",
      "title": "Mẫu nguyên tử Bohr",
      "summary": "Các tiên đề của Bohr; năng lượng mức n của nguyên tử H và ion một electron; trạng thái cơ bản và kích thích.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-bohr-model.md"
      },
      "exerciseIds": [
        "gc-c1-bohr-001",
        "gc-c1-bohr-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/05-bohr-model.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-electronic-transitions",
      "topicId": "gc-electronic-transitions-topic",
      "title": "Chuyển mức năng lượng và phổ nguyên tử",
      "summary": "Hấp thụ và phát xạ photon khi electron chuyển mức; phổ vạch của hydro; các dãy Lyman, Balmer, Paschen, Brackett; công thức Rydberg.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-electronic-transitions.md"
      },
      "exerciseIds": [
        "gc-c1-exam-001",
        "gc-c1-exam-002",
        "gc-c1-exam-003",
        "gc-c1-exam-004",
        "gc-c1-exam-005",
        "gc-c1-exam-006",
        "gc-c1-exam-007",
        "gc-c1-exam-008",
        "gc-c1-exam-009",
        "gc-c1-exam-010",
        "gc-c1-trans-001",
        "gc-c1-trans-002",
        "gc-c1-trans-003",
        "gc-c1-trans-004",
        "gc-c1-trans-005",
        "gc-c1-trans-006",
        "gc-c1-trans-007"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/06-electronic-transitions.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ionization-energy",
      "topicId": "gc-ionization-energy-topic",
      "title": "Năng lượng ion hóa",
      "summary": "Định nghĩa năng lượng ion hóa; tính năng lượng ion hóa của hệ một electron theo mẫu Bohr; giới hạn khi áp dụng cho nguyên tử nhiều electron.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ionization-energy.md"
      },
      "exerciseIds": [
        "gc-c1-exam-011",
        "gc-c1-exam-012",
        "gc-c1-exam-013",
        "gc-c1-exam-014",
        "gc-c1-ion-001",
        "gc-c1-ion-002",
        "gc-c1-ion-003"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/07-ionization-energy.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-atom-drawing-guide",
      "topicId": "gc-atom-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — nguyên tử H và ion giống H qua hình vẽ",
      "summary": "Bài tổng hợp kỹ năng cho Dạng 1 của đề thi (có ở mọi đề từ 2020). Hai hình cần vẽ là thang mức năng lượng và chuỗi đổi đơn vị; luyện trên các câu đề thật ĐT23–ĐT28.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-atom-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c1-draw-001",
        "gc-c1-draw-002",
        "gc-c1-draw-003",
        "gc-c1-draw-004",
        "gc-c1-draw-005"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-1/lessons/08-atom-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-bond-concepts",
      "topicId": "gc-bond-concepts-topic",
      "title": "Khái niệm liên kết hóa học",
      "summary": "Phân tử và liên kết hóa học; năng lượng liên kết, độ dài liên kết, góc liên kết và bậc liên kết.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-bond-concepts.md"
      },
      "exerciseIds": [
        "gc-c2-bond-001",
        "gc-c2-bond-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/01-bond-concepts.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ionic-bond",
      "topicId": "gc-ionic-bond-topic",
      "title": "Quy tắc bát tử và liên kết ion",
      "summary": "Phân loại liên kết; quy tắc bát tử; liên kết ion theo thuyết Kossel; mạng tinh thể ion và năng lượng mạng lưới.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ionic-bond.md"
      },
      "exerciseIds": [
        "gc-c2-ionic-001",
        "gc-c2-ionic-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/02-ionic-bond.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-covalent-lewis",
      "topicId": "gc-covalent-lewis-topic",
      "title": "Liên kết cộng hóa trị và công thức Lewis",
      "summary": "Thuyết Lewis về cặp electron dùng chung; liên kết không phân cực, phân cực, cho – nhận; công thức Lewis; hạn chế của quy tắc bát tử.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-covalent-lewis.md"
      },
      "exerciseIds": [
        "gc-c2-lewis-001",
        "gc-c2-lewis-002",
        "gc-c2-lewis-003"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/03-covalent-lewis.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-vb-theory",
      "topicId": "gc-vb-theory-topic",
      "title": "Thuyết liên kết hóa trị (VB) — liên kết σ và π",
      "summary": "Giải bài VB theo từng bước: viết Lewis, chọn AO, vẽ trục và vùng xen phủ, đếm σ/π; làm mẫu HCl và N₂ rồi tự vẽ trong trình duyệt.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-vb-theory.md"
      },
      "exerciseIds": [
        "gc-c2-vb-001",
        "gc-c2-vb-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/04-vb-theory.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-hybridization",
      "topicId": "gc-hybridization-topic",
      "title": "Lai hóa orbital",
      "summary": "Từ Lewis đến số T, ô lượng tử và hình xen phủ; giải trọn CH₄, C₂H₄, NH₃, H₂O, phân biệt cặp tự do với liên kết σ rồi tự vẽ.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-hybridization.md"
      },
      "exerciseIds": [
        "gc-c2-hyb-001",
        "gc-c2-hyb-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/05-hybridization.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-molecular-geometry",
      "topicId": "gc-molecular-geometry-topic",
      "title": "Hình học phân tử và độ phân cực",
      "summary": "Từ trạng thái lai hóa đến hình học phân tử; ảnh hưởng của cặp electron tự do; liên kết phân cực và phân tử phân cực.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-molecular-geometry.md"
      },
      "exerciseIds": [
        "gc-c2-geo-001",
        "gc-c2-pol-001"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/06-molecular-geometry.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-mo-theory",
      "topicId": "gc-mo-theory-topic",
      "title": "Thuyết orbital phân tử (MO)",
      "summary": "Tự dựng giản đồ AO–MO–AO: đếm electron, chọn thứ tự năng lượng, điền mũi tên theo Pauli và Hund; làm mẫu H₂, O₂, N₂ và thực hành vẽ.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-mo-theory.md"
      },
      "exerciseIds": [
        "gc-c2-mo-001"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/07-mo-theory.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-mo-bond-order",
      "topicId": "gc-mo-bond-order-topic",
      "title": "Bậc liên kết, từ tính và độ bền theo thuyết MO",
      "summary": "Đọc BO và electron độc thân từ giản đồ; giải từng bước họ O₂, họ N₂, CO và CN⁻; theo dõi MO nhận hoặc mất electron để so sánh ion.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-mo-bond-order.md"
      },
      "exerciseIds": [
        "gc-c2-exam-001",
        "gc-c2-exam-002",
        "gc-c2-exam-003",
        "gc-c2-exam-004",
        "gc-c2-exam-005",
        "gc-c2-exam-006",
        "gc-c2-exam-007",
        "gc-c2-exam-008",
        "gc-c2-exam-009",
        "gc-c2-exam-010",
        "gc-c2-exam-011",
        "gc-c2-exam-012",
        "gc-c2-exam-013",
        "gc-c2-exam-014",
        "gc-c2-exam-015",
        "gc-c2-exam-016",
        "gc-c2-exam-017",
        "gc-c2-exam-018",
        "gc-c2-exam-019",
        "gc-c2-exam-020",
        "gc-c2-mo-002",
        "gc-c2-mo-003",
        "gc-c2-mo-004",
        "gc-c2-mo-005",
        "gc-c2-mo-006"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/08-mo-bond-order.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-bonding-drawing-guide",
      "topicId": "gc-bonding-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — VB, lai hóa và MO qua hình vẽ",
      "summary": "Buổi thực hành giải và vẽ ngay trong trình duyệt: làm mẫu HCN và họ O₂, tự giải B₂, kiểm electron và sửa lỗi trước khi kết luận.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-bonding-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c2-draw-001",
        "gc-c2-draw-002",
        "gc-c2-draw-003",
        "gc-c2-draw-004",
        "gc-c2-draw-005",
        "gc-c2-draw-006",
        "gc-c2-draw-007",
        "gc-c2-draw-008"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-2/lessons/09-bonding-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-thermo-systems",
      "topicId": "gc-thermo-systems-topic",
      "title": "Hệ nhiệt động",
      "summary": "Đối tượng của nhiệt động học hóa học; hệ và môi trường; hệ mở, hệ kín, hệ cô lập.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-thermo-systems.md"
      },
      "exerciseIds": [
        "gc-c3-sys-001"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/01-thermo-systems.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-first-law",
      "topicId": "gc-first-law-topic",
      "title": "Nội năng và nguyên lý I nhiệt động học",
      "summary": "Năng lượng và sự chuyển hóa năng lượng; nội năng U; nguyên lý I ΔU = Q + A; nhiệt, công và quy ước dấu; đơn vị năng lượng.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-first-law.md"
      },
      "exerciseIds": [
        "gc-c3-first-001",
        "gc-c3-first-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/02-first-law.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-enthalpy",
      "topicId": "gc-enthalpy-topic",
      "title": "Enthalpy, công giãn nở và nhiệt dung",
      "summary": "Công giãn nở A = −PΔV; định nghĩa enthalpy H = U + PV; Q_p = ΔH và Q_V = ΔU; ΔH = ΔU + ΔnRT; nhiệt dung; phản ứng thu nhiệt và tỏa nhiệt.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-enthalpy.md"
      },
      "exerciseIds": [
        "gc-c3-enth-001",
        "gc-c3-enth-002",
        "gc-c3-enth-003",
        "gc-c3-enth-004",
        "gc-c3-enth-005"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/03-enthalpy.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-hess-law",
      "topicId": "gc-hess-law-topic",
      "title": "Định luật Hess",
      "summary": "Phát biểu định luật Hess; ba cách vận dụng (sơ đồ vòng, đảo chiều, cộng trừ phương trình); tổ hợp nhiều phương trình nhiệt hóa học.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-hess-law.md"
      },
      "exerciseIds": [
        "gc-c3-exam-018",
        "gc-c3-exam-019",
        "gc-c3-exam-020",
        "gc-c3-exam-021",
        "gc-c3-hess-001",
        "gc-c3-hess-002",
        "gc-c3-hess-003",
        "gc-c3-hess-004",
        "gc-c3-hess-005",
        "gc-c3-hess-006",
        "gc-c3-hess-007",
        "gc-c3-hess-008"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/04-hess-law.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-formation-enthalpy",
      "topicId": "gc-formation-enthalpy-topic",
      "title": "Nhiệt tạo thành và enthalpy chuẩn",
      "summary": "Điều kiện chuẩn; nhiệt tạo thành chuẩn ΔH°f; quy ước đơn chất bằng 0; tính ΔH° phản ứng từ ΔH°f.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-formation-enthalpy.md"
      },
      "exerciseIds": [
        "gc-c3-form-001",
        "gc-c3-form-002",
        "gc-c3-hess-009"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/05-formation-enthalpy.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-entropy",
      "topicId": "gc-entropy-topic",
      "title": "Entropy",
      "summary": "Vì sao ΔH không quyết định chiều phản ứng; entropy S = k lnW và độ hỗn độn; ΔS của phản ứng; dự đoán dấu ΔS.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-entropy.md"
      },
      "exerciseIds": [
        "gc-c3-ent-001",
        "gc-c3-ent-002",
        "gc-c3-ent-003"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/06-entropy.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-gibbs",
      "topicId": "gc-gibbs-topic",
      "title": "Năng lượng tự do Gibbs và điều kiện tự diễn biến",
      "summary": "G = H − TS; ΔG = ΔH − TΔS; tiêu chí tự diễn biến; ảnh hưởng của nhiệt độ; tính cộng tính của ΔG và ghép cặp phản ứng.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-gibbs.md"
      },
      "exerciseIds": [
        "gc-c3-exam-001",
        "gc-c3-exam-002",
        "gc-c3-exam-003",
        "gc-c3-exam-004",
        "gc-c3-exam-005",
        "gc-c3-exam-006",
        "gc-c3-exam-007",
        "gc-c3-exam-008",
        "gc-c3-exam-009",
        "gc-c3-exam-010",
        "gc-c3-exam-011",
        "gc-c3-exam-012",
        "gc-c3-exam-013",
        "gc-c3-exam-014",
        "gc-c3-exam-015",
        "gc-c3-exam-016",
        "gc-c3-exam-017",
        "gc-c3-eq-003",
        "gc-c3-gibbs-001",
        "gc-c3-gibbs-002",
        "gc-c3-gibbs-003",
        "gc-c3-gibbs-004",
        "gc-c3-gibbs-005",
        "gc-c3-gibbs-006"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/07-gibbs.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-gibbs-equilibrium",
      "topicId": "gc-gibbs-equilibrium-topic",
      "title": "Năng lượng tự do Gibbs và hằng số cân bằng",
      "summary": "ΔG = ΔG° + RT lnQ; ΔG° = −RT lnK; so sánh Q và K; quan hệ K theo nhiệt độ (van 't Hoff).",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-gibbs-equilibrium.md"
      },
      "exerciseIds": [
        "gc-c3-eq-001",
        "gc-c3-eq-002"
      ],
      "resourceIds": [
        "chemistry-general-video"
      ],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/08-gibbs-equilibrium.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-thermo-drawing-guide",
      "topicId": "gc-thermo-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — ΔG°, chiều phản ứng và ΔU qua hình vẽ",
      "summary": "Bài tổng hợp kỹ năng cho Dạng 3 (ΔG° và chiều phản ứng) và Dạng 4 (Hess, ΔH và ΔU). Gồm bảng tính theo hệ số, đường ΔG° theo T, cách tô màu chất khí để đếm Δn và chu trình Hess; luyện trên các câu đề thật ĐT24–ĐT28.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-thermo-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c3-draw-001",
        "gc-c3-draw-002",
        "gc-c3-draw-003",
        "gc-c3-draw-004",
        "gc-c3-draw-005"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-3/lessons/09-thermo-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-eq-foundations",
      "topicId": "gc-eq-foundations-topic",
      "title": "Mol, khí lý tưởng và áp suất riêng phần",
      "summary": "Đổi khối lượng thành mol; dùng PV=nRT và phần mol để tìm áp suất của mỗi khí trong hỗn hợp.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-eq-foundations.md"
      },
      "exerciseIds": [
        "gc-c4-eq-012"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-4/lessons/01-eq-foundations.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-eq-constant",
      "topicId": "gc-eq-constant-topic",
      "title": "Hằng số cân bằng Kc, Kp và thương số Q",
      "summary": "Viết biểu thức K, đổi Kp/Kc bằng Δn khí và dùng Q để xác định chiều diễn biến.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-eq-constant.md"
      },
      "exerciseIds": [
        "gc-c4-eq-006",
        "gc-c4-eq-013"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-4/lessons/02-eq-constant.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-eq-ice-table",
      "topicId": "gc-eq-ice-table-topic",
      "title": "Phương pháp 3 dòng: tính K từ thành phần cân bằng",
      "summary": "Lập bảng ban đầu, phản ứng, cân bằng theo mol, áp suất hoặc độ phân li; thế thành phần cân bằng vào K.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-eq-ice-table.md"
      },
      "exerciseIds": [
        "gc-c4-eq-002",
        "gc-c4-eq-003",
        "gc-c4-eq-004",
        "gc-c4-eq-005",
        "gc-c4-eq-007",
        "gc-c4-eq-008",
        "gc-c4-eq-009",
        "gc-c4-eq-010",
        "gc-c4-eq-011",
        "gc-c4-eq-014"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-4/lessons/03-eq-ice-table.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-eq-composition",
      "topicId": "gc-eq-composition-topic",
      "title": "Biết K tìm thành phần; ảnh hưởng của áp suất",
      "summary": "Giải phương trình cân bằng với miền nghiệm vật lý và kiểm tra chiều dịch chuyển theo Le Chatelier.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-eq-composition.md"
      },
      "exerciseIds": [
        "gc-c4-eq-015",
        "gc-c4-eq-016",
        "gc-c4-eq-017",
        "gc-c4-eq-018",
        "gc-c4-eq-019",
        "gc-c4-eq-020",
        "gc-c4-eq-021",
        "gc-c4-eq-022",
        "gc-c4-eq-023",
        "gc-c4-eq-024"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-4/lessons/04-eq-composition.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-eq-temperature",
      "topicId": "gc-eq-temperature-topic",
      "title": "K theo nhiệt độ và liên hệ Gibbs",
      "summary": "Dùng lại bài Gibbs của chương 3 để tính K ở nhiệt độ mới hoặc tìm ΔH°, ΔS° từ hai giá trị K.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-eq-temperature.md"
      },
      "exerciseIds": [
        "gc-c4-eq-001",
        "gc-c4-eq-025",
        "gc-c4-eq-026",
        "gc-c4-eq-027"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-4/lessons/05-eq-temperature.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-eq-drawing-guide",
      "topicId": "gc-eq-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — bảng 3 dòng, Q so với K",
      "summary": "Chọn bảng và hình phù hợp với yêu cầu đề; luyện nghĩ thành lời, phát hiện lỗi hệ số, áp suất và đơn vị.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-eq-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c4-eq-028",
        "gc-c4-eq-029"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-4/lessons/06-eq-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-kin-rate",
      "topicId": "gc-kin-rate-topic",
      "title": "Tốc độ phản ứng và bậc phản ứng",
      "summary": "Phân biệt tốc độ tức thời, hằng số tốc độ và bậc phản ứng.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-kin-rate.md"
      },
      "exerciseIds": [
        "gc-c5-kin-012",
        "gc-c5-kin-001"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-5/lessons/01-kin-rate.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-kin-first-order",
      "topicId": "gc-kin-first-order-topic",
      "title": "Phản ứng bậc 1 và thời gian bán hủy",
      "summary": "Tính lượng còn lại, thời gian phản ứng và sản phẩm sinh ra.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-kin-first-order.md"
      },
      "exerciseIds": [
        "gc-c5-kin-008",
        "gc-c5-kin-010",
        "gc-c5-kin-011",
        "gc-c5-kin-002",
        "gc-c5-kin-003",
        "gc-c5-kin-004",
        "gc-c5-kin-005",
        "gc-c5-kin-006",
        "gc-c5-kin-007",
        "gc-c5-kin-009"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-5/lessons/02-kin-first-order.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-kin-arrhenius",
      "topicId": "gc-kin-arrhenius-topic",
      "title": "Năng lượng hoạt hóa và phương trình Arrhenius",
      "summary": "Dùng hai hằng số tốc độ hoặc hai thời gian bán hủy để tìm Eₐ.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-kin-arrhenius.md"
      },
      "exerciseIds": [
        "gc-c5-kin-019",
        "gc-c5-kin-013",
        "gc-c5-kin-014",
        "gc-c5-kin-015",
        "gc-c5-kin-016",
        "gc-c5-kin-017",
        "gc-c5-kin-018",
        "gc-c5-kin-020",
        "gc-c5-kin-021"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-5/lessons/03-kin-arrhenius.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-kin-drawing-guide",
      "topicId": "gc-kin-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — đồ thị ln C theo t và ln k theo 1/T",
      "summary": "Chọn thanh phần còn lại hoặc đồ thị theo thời gian, nhiệt độ trước khi tính.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-kin-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c5-kin-022",
        "gc-c5-kin-023",
        "gc-c5-kin-024"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-5/lessons/04-kin-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-foundations",
      "topicId": "gc-sol-foundations-topic",
      "title": "Nồng độ, pha loãng, logarit và pH",
      "summary": "Số mol, tổng thể tích và logarit là nền để tính pH.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-foundations.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/01-sol-foundations.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-weak-acid-base",
      "topicId": "gc-sol-weak-acid-base-topic",
      "title": "pH dung dịch axit yếu, bazơ yếu",
      "summary": "Tính lượng phân li, kiểm tra gần đúng rồi xác định pH.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-weak-acid-base.md"
      },
      "exerciseIds": [
        "gc-c6-sol-001",
        "gc-c6-sol-002",
        "gc-c6-sol-003",
        "gc-c6-sol-004",
        "gc-c6-sol-005",
        "gc-c6-sol-006",
        "gc-c6-sol-007",
        "gc-c6-sol-008",
        "gc-c6-sol-009",
        "gc-c6-sol-010"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/02-sol-weak-acid-base.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-salt",
      "topicId": "gc-sol-salt-topic",
      "title": "pH dung dịch muối (thủy phân)",
      "summary": "Chọn đúng ion thủy phân và hằng số liên hợp.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-salt.md"
      },
      "exerciseIds": [
        "gc-c6-sol-011",
        "gc-c6-sol-012",
        "gc-c6-sol-013",
        "gc-c6-sol-014",
        "gc-c6-sol-015",
        "gc-c6-sol-016",
        "gc-c6-sol-017",
        "gc-c6-sol-018"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/03-sol-salt.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-buffer",
      "topicId": "gc-sol-buffer-topic",
      "title": "Dung dịch đệm",
      "summary": "Trung hòa theo mmol rồi chọn công thức theo chất còn lại.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-buffer.md"
      },
      "exerciseIds": [
        "gc-c6-sol-019",
        "gc-c6-sol-020",
        "gc-c6-sol-021",
        "gc-c6-sol-022",
        "gc-c6-sol-023",
        "gc-c6-sol-024",
        "gc-c6-sol-025",
        "gc-c6-sol-026",
        "gc-c6-sol-027",
        "gc-c6-sol-028",
        "gc-c6-sol-029",
        "gc-c6-sol-030",
        "gc-c6-sol-031",
        "gc-c6-sol-032",
        "gc-c6-sol-033",
        "gc-c6-sol-034",
        "gc-c6-sol-035",
        "gc-c6-sol-036",
        "gc-c6-sol-037",
        "gc-c6-sol-038",
        "gc-c6-sol-039"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/04-sol-buffer.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-solubility",
      "topicId": "gc-sol-solubility-topic",
      "title": "Độ tan và tích số tan",
      "summary": "Hệ số ion, ion chung và nồng độ sau trộn quyết định độ tan và kết tủa.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-solubility.md"
      },
      "exerciseIds": [
        "gc-c6-sol-040",
        "gc-c6-sol-041",
        "gc-c6-sol-042",
        "gc-c6-sol-043",
        "gc-c6-sol-044",
        "gc-c6-sol-045",
        "gc-c6-sol-046",
        "gc-c6-sol-047",
        "gc-c6-sol-048",
        "gc-c6-sol-049",
        "gc-c6-sol-050",
        "gc-c6-sol-051",
        "gc-c6-sol-052",
        "gc-c6-sol-053",
        "gc-c6-sol-054"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/05-sol-solubility.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-acid-mixture",
      "topicId": "gc-sol-acid-mixture-topic",
      "title": "pH hỗn hợp axit",
      "summary": "Các axit trong một dung dịch dùng chung nồng độ H⁺.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-acid-mixture.md"
      },
      "exerciseIds": [
        "gc-c6-sol-055",
        "gc-c6-sol-056"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/06-sol-acid-mixture.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-sol-drawing-guide",
      "topicId": "gc-sol-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — bảng 3 dòng theo mmol, thang pH",
      "summary": "Bảng mmol, thang pH và mốc tương đương giúp chọn đúng phương pháp.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-sol-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c6-sol-057",
        "gc-c6-sol-058"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-6/lessons/07-sol-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ec-redox",
      "topicId": "gc-ec-redox-topic",
      "title": "Số oxi hóa và nửa phản ứng",
      "summary": "Xác định số oxi hóa và chất nhường, nhận electron.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ec-redox.md"
      },
      "exerciseIds": [
        "gc-c7-ec-029"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-7/lessons/01-ec-redox.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ec-galvanic-cell",
      "topicId": "gc-ec-galvanic-cell-topic",
      "title": "Pin điện hóa: quy ước, sơ đồ pin, thế chuẩn",
      "summary": "Chọn catot và anot từ thang thế khử.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ec-galvanic-cell.md"
      },
      "exerciseIds": [
        "gc-c7-ec-030"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-7/lessons/02-ec-galvanic-cell.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ec-nernst",
      "topicId": "gc-ec-nernst-topic",
      "title": "Phương trình Nernst; liên hệ E°, ΔG°, K",
      "summary": "Tính thế khử từng cực và suất điện động pin bằng Nernst.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ec-nernst.md"
      },
      "exerciseIds": [
        "gc-c7-ec-001",
        "gc-c7-ec-002",
        "gc-c7-ec-003",
        "gc-c7-ec-004",
        "gc-c7-ec-005",
        "gc-c7-ec-006",
        "gc-c7-ec-007",
        "gc-c7-ec-008",
        "gc-c7-ec-009",
        "gc-c7-ec-010",
        "gc-c7-ec-011",
        "gc-c7-ec-012",
        "gc-c7-ec-013",
        "gc-c7-ec-014",
        "gc-c7-ec-015",
        "gc-c7-ec-016",
        "gc-c7-ec-017",
        "gc-c7-ec-018",
        "gc-c7-ec-019",
        "gc-c7-ec-020",
        "gc-c7-ec-021",
        "gc-c7-ec-022",
        "gc-c7-ec-023",
        "gc-c7-ec-024",
        "gc-c7-ec-025"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-7/lessons/03-ec-nernst.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ec-luther",
      "topicId": "gc-ec-luther-topic",
      "title": "Tổ hợp thế điện cực (quy tắc Luther)",
      "summary": "Lập phương trình nE° để tìm thế khử chưa biết.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ec-luther.md"
      },
      "exerciseIds": [
        "gc-c7-ec-026"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-7/lessons/04-ec-luther.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    },
    {
      "id": "gc-ec-drawing-guide",
      "topicId": "gc-ec-drawing-guide-topic",
      "title": "Vẽ gì, nghĩ gì — thang thế điện cực, sơ đồ pin",
      "summary": "Chọn hình nháp phù hợp với yêu cầu đề pin điện hóa.",
      "content": {
        "format": "markdown",
        "assetPath": "general-chemistry/lessons/gc-ec-drawing-guide.md"
      },
      "exerciseIds": [
        "gc-c7-ec-027",
        "gc-c7-ec-028"
      ],
      "resourceIds": [],
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/chapters/chapter-7/lessons/05-ec-drawing-guide.md",
        "rights": "approved",
        "attribution": "Biên soạn từ nguồn Hóa học đại cương (Chemistry)."
      }
    }
  ],
  "exercises": [],
  "resources": [
    {
      "id": "chemistry-general-video",
      "title": "General Chemistry – Full University Course",
      "kind": "youtube",
      "url": "https://www.youtube.com/watch?v=6OV3tmt9uhs",
      "provenance": {
        "repository": "https://github.com/HanitaV/Chemistry",
        "revision": "ad043333d24f67da5d11611678754397f4595e49",
        "path": "src/content/courses/general-chemistry/video-segments.json",
        "rights": "approved"
      }
    }
  ]
} as const satisfies LearningContent, writtenPractice), gcSemiEssays);
export default { ...content, exercises: [] } satisfies LearningContent;
