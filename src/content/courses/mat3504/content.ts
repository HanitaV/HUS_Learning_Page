import type { LearningContent } from '../../../domain/workspace';
import { withWrittenPractice } from '../../../core/learning/written-content';
import writtenPractice from './written-practice';

export default withWrittenPractice({
  "chapters": [
    {
      "id": "mat3504-b0",
      "courseId": "mat3504",
      "title": "Nền tảng dùng chung từ cấu trúc dữ liệu",
      "topicIds": [
        "mat3504-topic-abstraction-adt",
        "mat3504-topic-list-adt",
        "mat3504-topic-queue-adt",
        "mat3504-topic-sorting-problem",
        "mat3504-topic-tree-concepts"
      ]
    },
    {
      "id": "mat3504-b1",
      "courseId": "mat3504",
      "title": "Các khái niệm cơ bản",
      "topicIds": [
        "mat3504-topic-algorithm-problem",
        "mat3504-topic-running-time-model",
        "mat3504-topic-big-o",
        "mat3504-topic-sum-product-rules",
        "mat3504-topic-best-worst-average",
        "mat3504-topic-complexity-classes"
      ]
    },
    {
      "id": "mat3504-b2",
      "courseId": "mat3504",
      "title": "Mô hình toán học: máy Turing",
      "topicIds": [
        "mat3504-topic-turing-machine",
        "mat3504-topic-hw-turing"
      ]
    },
    {
      "id": "mat3504-b3",
      "courseId": "mat3504",
      "title": "Đệ quy và khử đệ quy",
      "topicIds": [
        "mat3504-topic-recursion",
        "mat3504-topic-recursion-correctness",
        "mat3504-topic-fibonacci",
        "mat3504-topic-tower-of-hanoi",
        "mat3504-topic-recurrence-relation",
        "mat3504-topic-substitution-method",
        "mat3504-topic-master-theorem",
        "mat3504-topic-recursion-elimination",
        "mat3504-topic-hw-recurrences",
        "mat3504-topic-graph-concepts",
        "mat3504-topic-graph-representation",
        "mat3504-topic-dfs",
        "mat3504-topic-bfs"
      ]
    },
    {
      "id": "mat3504-b4",
      "courseId": "mat3504",
      "title": "Chia để trị",
      "topicIds": [
        "mat3504-topic-divide-and-conquer",
        "mat3504-topic-binary-search",
        "mat3504-topic-minmax-dc",
        "mat3504-topic-quick-sort",
        "mat3504-topic-merge-sort",
        "mat3504-topic-strassen",
        "mat3504-topic-tromino-tiling",
        "mat3504-topic-decrease-transform-conquer"
      ]
    },
    {
      "id": "mat3504-b5",
      "courseId": "mat3504",
      "title": "Các phương pháp thử sai",
      "topicIds": [
        "mat3504-topic-brute-force",
        "mat3504-topic-string-matching-bf",
        "mat3504-topic-backtracking",
        "mat3504-topic-binary-strings",
        "mat3504-topic-n-queens",
        "mat3504-topic-maze-path-backtracking",
        "mat3504-topic-branch-and-bound",
        "mat3504-topic-tsp-bnb",
        "mat3504-topic-hw-trial-error"
      ]
    },
    {
      "id": "mat3504-b6",
      "courseId": "mat3504",
      "title": "Phương pháp tham lam",
      "topicIds": [
        "mat3504-topic-greedy-method",
        "mat3504-topic-coin-change-greedy",
        "mat3504-topic-activity-selection",
        "mat3504-topic-mst",
        "mat3504-topic-prim",
        "mat3504-topic-kruskal",
        "mat3504-topic-dijkstra",
        "mat3504-topic-hw-greedy"
      ]
    },
    {
      "id": "mat3504-b7",
      "courseId": "mat3504",
      "title": "Quy hoạch động",
      "topicIds": [
        "mat3504-topic-dynamic-programming",
        "mat3504-topic-dp-elements",
        "mat3504-topic-binomial-dp",
        "mat3504-topic-lis",
        "mat3504-topic-knapsack-01",
        "mat3504-topic-grid-path-dp",
        "mat3504-topic-floyd",
        "mat3504-topic-lcs",
        "mat3504-topic-hw-dp"
      ]
    }
  ],
  "topics": [
    {
      "id": "mat3504-topic-abstraction-adt",
      "chapterId": "mat3504-b0",
      "title": "Kiểu dữ liệu trừu tượng (ADT)",
      "lessonIds": [
        "mat3504-abstraction-adt"
      ]
    },
    {
      "id": "mat3504-topic-list-adt",
      "chapterId": "mat3504-b0",
      "title": "List ADT",
      "lessonIds": [
        "mat3504-list-adt"
      ],
      "prerequisiteIds": [
        "mat3504-topic-abstraction-adt"
      ]
    },
    {
      "id": "mat3504-topic-queue-adt",
      "chapterId": "mat3504-b0",
      "title": "Hàng đợi (Queue)",
      "lessonIds": [
        "mat3504-queue-adt"
      ],
      "prerequisiteIds": [
        "mat3504-topic-list-adt"
      ]
    },
    {
      "id": "mat3504-topic-sorting-problem",
      "chapterId": "mat3504-b0",
      "title": "Bài toán sắp xếp",
      "lessonIds": [
        "mat3504-sorting-problem"
      ]
    },
    {
      "id": "mat3504-topic-tree-concepts",
      "chapterId": "mat3504-b0",
      "title": "Cây: định nghĩa và thuật ngữ",
      "lessonIds": [
        "mat3504-tree-concepts"
      ]
    },
    {
      "id": "mat3504-topic-algorithm-problem",
      "chapterId": "mat3504-b1",
      "title": "Bài toán và thuật toán",
      "lessonIds": [
        "mat3504-algorithm-problem"
      ]
    },
    {
      "id": "mat3504-topic-running-time-model",
      "chapterId": "mat3504-b1",
      "title": "Thời gian thực hiện và mô hình RAM",
      "lessonIds": [
        "mat3504-running-time-model"
      ],
      "prerequisiteIds": [
        "mat3504-topic-algorithm-problem"
      ]
    },
    {
      "id": "mat3504-topic-big-o",
      "chapterId": "mat3504-b1",
      "title": "Ký hiệu O lớn",
      "lessonIds": [
        "mat3504-big-o"
      ],
      "prerequisiteIds": [
        "mat3504-topic-running-time-model"
      ]
    },
    {
      "id": "mat3504-topic-sum-product-rules",
      "chapterId": "mat3504-b1",
      "title": "Quy tắc tổng và quy tắc nhân",
      "lessonIds": [
        "mat3504-sum-product-rules"
      ],
      "prerequisiteIds": [
        "mat3504-topic-big-o"
      ]
    },
    {
      "id": "mat3504-topic-best-worst-average",
      "chapterId": "mat3504-b1",
      "title": "Trường hợp tốt nhất, xấu nhất, trung bình",
      "lessonIds": [
        "mat3504-best-worst-average"
      ],
      "prerequisiteIds": [
        "mat3504-topic-running-time-model"
      ]
    },
    {
      "id": "mat3504-topic-complexity-classes",
      "chapterId": "mat3504-b1",
      "title": "Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ",
      "lessonIds": [
        "mat3504-complexity-classes"
      ],
      "prerequisiteIds": [
        "mat3504-topic-big-o"
      ]
    },
    {
      "id": "mat3504-topic-turing-machine",
      "chapterId": "mat3504-b2",
      "title": "Máy Turing",
      "lessonIds": [
        "mat3504-turing-machine"
      ],
      "prerequisiteIds": [
        "mat3504-topic-algorithm-problem"
      ]
    },
    {
      "id": "mat3504-topic-hw-turing",
      "chapterId": "mat3504-b2",
      "title": "Bài tập: thiết kế máy Turing",
      "lessonIds": [
        "mat3504-hw-turing"
      ],
      "prerequisiteIds": [
        "mat3504-topic-turing-machine"
      ]
    },
    {
      "id": "mat3504-topic-recursion",
      "chapterId": "mat3504-b3",
      "title": "Đệ quy",
      "lessonIds": [
        "mat3504-recursion"
      ]
    },
    {
      "id": "mat3504-topic-recursion-correctness",
      "chapterId": "mat3504-b3",
      "title": "Chứng minh tính đúng bằng quy nạp",
      "lessonIds": [
        "mat3504-recursion-correctness"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-fibonacci",
      "chapterId": "mat3504-b3",
      "title": "Số Fibonacci",
      "lessonIds": [
        "mat3504-fibonacci"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-tower-of-hanoi",
      "chapterId": "mat3504-b3",
      "title": "Tháp Hà Nội",
      "lessonIds": [
        "mat3504-tower-of-hanoi"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-recurrence-relation",
      "chapterId": "mat3504-b3",
      "title": "Công thức truy hồi cho thời gian chạy",
      "lessonIds": [
        "mat3504-recurrence-relation"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion",
        "mat3504-topic-big-o"
      ]
    },
    {
      "id": "mat3504-topic-substitution-method",
      "chapterId": "mat3504-b3",
      "title": "Giải truy hồi bằng phương pháp thế",
      "lessonIds": [
        "mat3504-substitution-method"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recurrence-relation"
      ]
    },
    {
      "id": "mat3504-topic-master-theorem",
      "chapterId": "mat3504-b3",
      "title": "Định lý chính (Master theorem)",
      "lessonIds": [
        "mat3504-master-theorem"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recurrence-relation"
      ]
    },
    {
      "id": "mat3504-topic-recursion-elimination",
      "chapterId": "mat3504-b3",
      "title": "Khử đệ quy",
      "lessonIds": [
        "mat3504-recursion-elimination"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-hw-recurrences",
      "chapterId": "mat3504-b3",
      "title": "Bài tập: giải công thức truy hồi",
      "lessonIds": [
        "mat3504-hw-recurrences"
      ],
      "prerequisiteIds": [
        "mat3504-topic-substitution-method",
        "mat3504-topic-master-theorem"
      ]
    },
    {
      "id": "mat3504-topic-graph-concepts",
      "chapterId": "mat3504-b3",
      "title": "Đồ thị và Graph ADT",
      "lessonIds": [
        "mat3504-graph-concepts"
      ]
    },
    {
      "id": "mat3504-topic-graph-representation",
      "chapterId": "mat3504-b3",
      "title": "Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh",
      "lessonIds": [
        "mat3504-graph-representation"
      ],
      "prerequisiteIds": [
        "mat3504-topic-graph-concepts"
      ]
    },
    {
      "id": "mat3504-topic-dfs",
      "chapterId": "mat3504-b3",
      "title": "Tìm kiếm theo chiều sâu (DFS)",
      "lessonIds": [
        "mat3504-dfs"
      ],
      "prerequisiteIds": [
        "mat3504-topic-graph-representation",
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-bfs",
      "chapterId": "mat3504-b3",
      "title": "Tìm kiếm theo chiều rộng (BFS)",
      "lessonIds": [
        "mat3504-bfs"
      ],
      "prerequisiteIds": [
        "mat3504-topic-graph-representation",
        "mat3504-topic-queue-adt"
      ]
    },
    {
      "id": "mat3504-topic-divide-and-conquer",
      "chapterId": "mat3504-b4",
      "title": "Chia để trị",
      "lessonIds": [
        "mat3504-divide-and-conquer"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-binary-search",
      "chapterId": "mat3504-b4",
      "title": "Tìm kiếm nhị phân",
      "lessonIds": [
        "mat3504-binary-search"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer",
        "mat3504-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3504-topic-minmax-dc",
      "chapterId": "mat3504-b4",
      "title": "MinMax chia để trị",
      "lessonIds": [
        "mat3504-minmax-dc"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer"
      ]
    },
    {
      "id": "mat3504-topic-quick-sort",
      "chapterId": "mat3504-b4",
      "title": "Sắp xếp nhanh (Quick Sort)",
      "lessonIds": [
        "mat3504-quick-sort"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer",
        "mat3504-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3504-topic-merge-sort",
      "chapterId": "mat3504-b4",
      "title": "Sắp xếp trộn (Merge Sort)",
      "lessonIds": [
        "mat3504-merge-sort"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer",
        "mat3504-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3504-topic-strassen",
      "chapterId": "mat3504-b4",
      "title": "Nhân ma trận Strassen",
      "lessonIds": [
        "mat3504-strassen"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer"
      ]
    },
    {
      "id": "mat3504-topic-tromino-tiling",
      "chapterId": "mat3504-b4",
      "title": "Lát nền 2^n × 2^n bằng gạch chữ L",
      "lessonIds": [
        "mat3504-tromino-tiling"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer"
      ]
    },
    {
      "id": "mat3504-topic-decrease-transform-conquer",
      "chapterId": "mat3504-b4",
      "title": "Giảm để trị và biến đổi để trị",
      "lessonIds": [
        "mat3504-decrease-transform-conquer"
      ],
      "prerequisiteIds": [
        "mat3504-topic-divide-and-conquer"
      ]
    },
    {
      "id": "mat3504-topic-brute-force",
      "chapterId": "mat3504-b5",
      "title": "Vét cạn (Brute force)",
      "lessonIds": [
        "mat3504-brute-force"
      ],
      "prerequisiteIds": [
        "mat3504-topic-algorithm-problem"
      ]
    },
    {
      "id": "mat3504-topic-string-matching-bf",
      "chapterId": "mat3504-b5",
      "title": "Khớp xâu vét cạn",
      "lessonIds": [
        "mat3504-string-matching-bf"
      ],
      "prerequisiteIds": [
        "mat3504-topic-brute-force"
      ]
    },
    {
      "id": "mat3504-topic-backtracking",
      "chapterId": "mat3504-b5",
      "title": "Quay lui (Backtracking)",
      "lessonIds": [
        "mat3504-backtracking"
      ],
      "prerequisiteIds": [
        "mat3504-topic-brute-force",
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-binary-strings",
      "chapterId": "mat3504-b5",
      "title": "Liệt kê dãy nhị phân độ dài n",
      "lessonIds": [
        "mat3504-binary-strings"
      ],
      "prerequisiteIds": [
        "mat3504-topic-backtracking"
      ]
    },
    {
      "id": "mat3504-topic-n-queens",
      "chapterId": "mat3504-b5",
      "title": "Bài toán xếp hậu",
      "lessonIds": [
        "mat3504-n-queens"
      ],
      "prerequisiteIds": [
        "mat3504-topic-backtracking"
      ]
    },
    {
      "id": "mat3504-topic-maze-path-backtracking",
      "chapterId": "mat3504-b5",
      "title": "Tìm đường trong mê cung bằng quay lui",
      "lessonIds": [
        "mat3504-maze-path-backtracking"
      ],
      "prerequisiteIds": [
        "mat3504-topic-backtracking",
        "mat3504-topic-graph-representation"
      ]
    },
    {
      "id": "mat3504-topic-branch-and-bound",
      "chapterId": "mat3504-b5",
      "title": "Nhánh cận (Branch and Bound)",
      "lessonIds": [
        "mat3504-branch-and-bound"
      ],
      "prerequisiteIds": [
        "mat3504-topic-backtracking"
      ]
    },
    {
      "id": "mat3504-topic-tsp-bnb",
      "chapterId": "mat3504-b5",
      "title": "Người du lịch (TSP) bằng nhánh cận",
      "lessonIds": [
        "mat3504-tsp-bnb"
      ],
      "prerequisiteIds": [
        "mat3504-topic-branch-and-bound",
        "mat3504-topic-graph-representation"
      ]
    },
    {
      "id": "mat3504-topic-hw-trial-error",
      "chapterId": "mat3504-b5",
      "title": "Bài tập: vét cạn, quay lui, nhánh cận",
      "lessonIds": [
        "mat3504-hw-trial-error"
      ],
      "prerequisiteIds": [
        "mat3504-topic-backtracking"
      ]
    },
    {
      "id": "mat3504-topic-greedy-method",
      "chapterId": "mat3504-b6",
      "title": "Phương pháp tham lam",
      "lessonIds": [
        "mat3504-greedy-method"
      ],
      "prerequisiteIds": [
        "mat3504-topic-algorithm-problem"
      ]
    },
    {
      "id": "mat3504-topic-coin-change-greedy",
      "chapterId": "mat3504-b6",
      "title": "Đổi tiền tham lam",
      "lessonIds": [
        "mat3504-coin-change-greedy"
      ],
      "prerequisiteIds": [
        "mat3504-topic-greedy-method"
      ]
    },
    {
      "id": "mat3504-topic-activity-selection",
      "chapterId": "mat3504-b6",
      "title": "Chọn hoạt động (Activity Selection)",
      "lessonIds": [
        "mat3504-activity-selection"
      ],
      "prerequisiteIds": [
        "mat3504-topic-greedy-method"
      ]
    },
    {
      "id": "mat3504-topic-mst",
      "chapterId": "mat3504-b6",
      "title": "Cây khung nhỏ nhất (MST)",
      "lessonIds": [
        "mat3504-mst"
      ],
      "prerequisiteIds": [
        "mat3504-topic-graph-concepts",
        "mat3504-topic-tree-concepts"
      ]
    },
    {
      "id": "mat3504-topic-prim",
      "chapterId": "mat3504-b6",
      "title": "Thuật toán Prim",
      "lessonIds": [
        "mat3504-prim"
      ],
      "prerequisiteIds": [
        "mat3504-topic-mst",
        "mat3504-topic-greedy-method"
      ]
    },
    {
      "id": "mat3504-topic-kruskal",
      "chapterId": "mat3504-b6",
      "title": "Thuật toán Kruskal",
      "lessonIds": [
        "mat3504-kruskal"
      ],
      "prerequisiteIds": [
        "mat3504-topic-mst",
        "mat3504-topic-greedy-method"
      ]
    },
    {
      "id": "mat3504-topic-dijkstra",
      "chapterId": "mat3504-b6",
      "title": "Thuật toán Dijkstra",
      "lessonIds": [
        "mat3504-dijkstra"
      ],
      "prerequisiteIds": [
        "mat3504-topic-graph-representation",
        "mat3504-topic-greedy-method"
      ]
    },
    {
      "id": "mat3504-topic-hw-greedy",
      "chapterId": "mat3504-b6",
      "title": "Bài tập: phương pháp tham lam",
      "lessonIds": [
        "mat3504-hw-greedy"
      ],
      "prerequisiteIds": [
        "mat3504-topic-greedy-method"
      ]
    },
    {
      "id": "mat3504-topic-dynamic-programming",
      "chapterId": "mat3504-b7",
      "title": "Quy hoạch động",
      "lessonIds": [
        "mat3504-dynamic-programming"
      ],
      "prerequisiteIds": [
        "mat3504-topic-recursion"
      ]
    },
    {
      "id": "mat3504-topic-dp-elements",
      "chapterId": "mat3504-b7",
      "title": "Các yếu tố của lời giải QHĐ",
      "lessonIds": [
        "mat3504-dp-elements"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dynamic-programming"
      ]
    },
    {
      "id": "mat3504-topic-binomial-dp",
      "chapterId": "mat3504-b7",
      "title": "Đếm tổ hợp C(r, n) bằng bảng",
      "lessonIds": [
        "mat3504-binomial-dp"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements"
      ]
    },
    {
      "id": "mat3504-topic-lis",
      "chapterId": "mat3504-b7",
      "title": "Dãy con tăng dài nhất",
      "lessonIds": [
        "mat3504-lis"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements"
      ]
    },
    {
      "id": "mat3504-topic-knapsack-01",
      "chapterId": "mat3504-b7",
      "title": "Xếp balo 0-1",
      "lessonIds": [
        "mat3504-knapsack-01"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements"
      ]
    },
    {
      "id": "mat3504-topic-grid-path-dp",
      "chapterId": "mat3504-b7",
      "title": "Đường đi tổng lớn nhất trong bảng số",
      "lessonIds": [
        "mat3504-grid-path-dp"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements"
      ]
    },
    {
      "id": "mat3504-topic-floyd",
      "chapterId": "mat3504-b7",
      "title": "Thuật toán Floyd",
      "lessonIds": [
        "mat3504-floyd"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements",
        "mat3504-topic-graph-representation"
      ]
    },
    {
      "id": "mat3504-topic-lcs",
      "chapterId": "mat3504-b7",
      "title": "Dãy con chung dài nhất của hai dãy",
      "lessonIds": [
        "mat3504-lcs"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements"
      ]
    },
    {
      "id": "mat3504-topic-hw-dp",
      "chapterId": "mat3504-b7",
      "title": "Bài tập: quy hoạch động",
      "lessonIds": [
        "mat3504-hw-dp"
      ],
      "prerequisiteIds": [
        "mat3504-topic-dp-elements"
      ]
    }
  ],
  "lessons": [
    {
      "id": "mat3504-abstraction-adt",
      "topicId": "mat3504-topic-abstraction-adt",
      "title": "Kiểu dữ liệu trừu tượng (ADT)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-abstraction-adt.md"
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
      "id": "mat3504-list-adt",
      "topicId": "mat3504-topic-list-adt",
      "title": "List ADT",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-list-adt.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Dãy phần tử có thứ tự vị trí $\\langle a_1,\\dots,a_n\\rangle$ với các thao tác `isEmpty`, `size`, `get(i)`, `set(i,e)`, `add(i,e)`, `remove(i)`.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/list-adt.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-queue-adt",
      "topicId": "mat3504-topic-queue-adt",
      "title": "Hàng đợi (Queue)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-queue-adt.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Vào trước ra trước (FIFO): `enqueue` ở cuối, `dequeue` ở đầu, `first`. Dùng cho chia sẻ tài nguyên, bộ đệm vào/ra.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/queue-adt.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-sorting-problem",
      "topicId": "mat3504-topic-sorting-problem",
      "title": "Bài toán sắp xếp",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-sorting-problem.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đặt các phần tử theo một thứ tự (số học, từ điển). Sắp xếp giúp kiểm tra trùng lặp, tìm kiếm nhanh, phép toán tập hợp, đếm tần suất.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/sorting-problem.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-tree-concepts",
      "topicId": "mat3504-topic-tree-concepts",
      "title": "Cây: định nghĩa và thuật ngữ",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-tree-concepts.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cây gồm nút gốc và các cây con; cha/con/anh em, tổ tiên/hậu duệ, nút lá (ngoài) và nút trong, mức và chiều cao.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/tree-concepts.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-algorithm-problem",
      "topicId": "mat3504-topic-algorithm-problem",
      "title": "Bài toán và thuật toán",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-algorithm-problem.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Xác định rõ đầu vào (input), đầu ra (output) và từng bước xử lý hữu hạn, rõ ràng để chuyển thành chương trình chạy đúng trên mọi bộ dữ liệu hợp lệ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/algorithm-problem.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-running-time-model",
      "topicId": "mat3504-topic-running-time-model",
      "title": "Thời gian thực hiện và mô hình RAM",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-running-time-model.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thời gian chạy $T(n)$ là tổng số phép toán sơ cấp (số học, logic, gán, truy cập bộ nhớ) theo kích thước dữ liệu $n$, độc lập với phần cứng và ngôn ngữ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/running-time-model.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-big-o",
      "topicId": "mat3504-topic-big-o",
      "title": "Ký hiệu O lớn",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-big-o.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "$f(n)=O(g(n))$ khi tồn tại hằng $C$ và $n_0$ sao cho $f(n)\\le C\\,g(n)$ với mọi $n\\ge n_0$; ví dụ $2n^2+3n+5=O(n^2)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/big-o.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-sum-product-rules",
      "topicId": "mat3504-topic-sum-product-rules",
      "title": "Quy tắc tổng và quy tắc nhân",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-sum-product-rules.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Gọi tuần tự hai thủ tục: $O(f)+O(g)=O(\\max(f,g))$; gọi lồng nhau: $O(f)\\cdot O(g)$. Lệnh rẽ nhánh lấy max, vòng lặp nhân số lần lặp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/sum-product-rules.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-best-worst-average",
      "topicId": "mat3504-topic-best-worst-average",
      "title": "Trường hợp tốt nhất, xấu nhất, trung bình",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-best-worst-average.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cùng kích thước $n$, mẫu dữ liệu vào khác nhau cho $T_{min}$, $T_{max}$, $T_{aver}$; ví dụ nổi bọt cải tiến tốt nhất $O(n)$, xấu nhất $O(n^2)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/best-worst-average.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-complexity-classes",
      "topicId": "mat3504-topic-complexity-classes",
      "title": "Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-complexity-classes.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Độ phức tạp bài toán là độ phức tạp của thuật toán tốt nhất; phép dẫn $B \\propto A$ dùng để định nghĩa NP-khó, và NP-đầy đủ = thuộc NP và NP-khó.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/complexity-classes.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-turing-machine",
      "topicId": "mat3504-topic-turing-machine",
      "title": "Máy Turing",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-turing-machine.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bộ bốn $M=(K,\\Sigma,\\delta,s)$: tập trạng thái, bảng chữ cái, hàm chuyển và trạng thái đầu; máy dừng ở $h$, \"yes\" hoặc \"no\". Thời gian tính = số bước chuyển trạng thái.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/turing-machine.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-hw-turing",
      "topicId": "mat3504-topic-hw-turing",
      "title": "Bài tập: thiết kế máy Turing",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-hw-turing.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Xây dựng máy Turing đảo bit, xóa chữ số 0, kiểm tra xâu nhị phân đối xứng, chèn ký tự trắng vào đầu xâu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-turing.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-recursion",
      "topicId": "mat3504-topic-recursion",
      "title": "Đệ quy",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-recursion.md"
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
      "id": "mat3504-recursion-correctness",
      "topicId": "mat3504-topic-recursion-correctness",
      "title": "Chứng minh tính đúng bằng quy nạp",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-recursion-correctness.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Quy nạp theo kích thước bài toán: base case của đệ quy là cơ sở quy nạp; giả thiết lời gọi con đúng để chứng minh lời gọi hiện tại đúng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/recursion-correctness.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-fibonacci",
      "topicId": "mat3504-topic-fibonacci",
      "title": "Số Fibonacci",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-fibonacci.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "$F(1)=F(2)=1$, $F(n)=F(n-1)+F(n-2)$. Đệ quy trực tiếp tính lặp lại các bài toán con nên tốn $O(2^n)$; lưu bảng $F_1..F_n$ chỉ cần $O(n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/fibonacci.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-tower-of-hanoi",
      "topicId": "mat3504-topic-tower-of-hanoi",
      "title": "Tháp Hà Nội",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-tower-of-hanoi.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chuyển $n-1$ đĩa sang cọc trung gian, chuyển đĩa lớn nhất, rồi chuyển $n-1$ đĩa về đích; mỗi cọc là một ngăn xếp. $T(n)=2T(n-1)+1$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/tower-of-hanoi.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-recurrence-relation",
      "topicId": "mat3504-topic-recurrence-relation",
      "title": "Công thức truy hồi cho thời gian chạy",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-recurrence-relation.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thời gian của thuật toán đệ quy được mô tả bằng $T(n)$ qua các $T$ của bài toán con, ví dụ $T(n)=2T(n-1)+1$ cho tháp Hà Nội.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/recurrence-relation.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-substitution-method",
      "topicId": "mat3504-topic-substitution-method",
      "title": "Giải truy hồi bằng phương pháp thế",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-substitution-method.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thế lặp để tìm dạng đóng: $T(n)=T(n-1)+n \\Rightarrow O(n^2)$, $T(n)=T(n/2)+1 \\Rightarrow \\log_2 n$, $T(n)=2T(n/2)+n \\Rightarrow O(n\\log n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/substitution-method.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-master-theorem",
      "topicId": "mat3504-topic-master-theorem",
      "title": "Định lý chính (Master theorem)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-master-theorem.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Với dạng trong phiếu bài tập $T(n)=aT(n/b)+n^d$, $a\\ge1$, $b>1$, $d\\ge0$: so sánh $a$ với $b^d$ để nhận cận $O(n^d)$, $O(n^d\\log n)$ hoặc $O(n^{\\log_b a})$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/master-theorem.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-recursion-elimination",
      "topicId": "mat3504-topic-recursion-elimination",
      "title": "Khử đệ quy",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-recursion-elimination.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thay lời gọi đệ quy bằng vòng lặp và ngăn xếp tự quản lý; có lược đồ chuẩn cho các dạng ED[AP], ED[APB], ED[APBP].",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/recursion-elimination.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-hw-recurrences",
      "topicId": "mat3504-topic-hw-recurrences",
      "title": "Bài tập: giải công thức truy hồi",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-hw-recurrences.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Giải các truy hồi như $T(n)=3T(n-1)+2$, $T(n)=2T(n/2)+3n+2$ bằng phương pháp thế hoặc định lý chính.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-recurrences.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-graph-concepts",
      "topicId": "mat3504-topic-graph-concepts",
      "title": "Đồ thị và Graph ADT",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-graph-concepts.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đồ thị $G=(V,E)$ có hướng hoặc vô hướng, có thể có trọng số; ADT gồm `numVertices`, `edges`, `getEdge(u,v)`, `outDegree`, `insertEdge`, `removeVertex`, ...",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/graph-concepts.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-graph-representation",
      "topicId": "mat3504-topic-graph-representation",
      "title": "Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-graph-representation.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Ma trận kề $n\\times n$ với $a_{ij}=1$ khi có cạnh; danh sách kề lưu đỉnh kề của từng đỉnh; danh sách cạnh lưu các cặp $(u,v)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/graph-representation.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-dfs",
      "topicId": "mat3504-topic-dfs",
      "title": "Tìm kiếm theo chiều sâu (DFS)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-dfs.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Từ đỉnh bắt đầu, đi sâu theo đỉnh kề chưa thăm rồi quay lui; dùng đệ quy hoặc ngăn xếp và đánh dấu để tránh thăm lặp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/dfs.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-bfs",
      "topicId": "mat3504-topic-bfs",
      "title": "Tìm kiếm theo chiều rộng (BFS)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-bfs.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Duyệt các đỉnh theo từng lớp bằng hàng đợi FIFO; trên đồ thị không trọng số, tìm được đường có ít cạnh nhất từ đỉnh bắt đầu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bfs.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-divide-and-conquer",
      "topicId": "mat3504-topic-divide-and-conquer",
      "title": "Chia để trị",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-divide-and-conquer.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chia bài toán lớn thành các phần nhỏ cùng dạng, gọi đệ quy giải từng phần rồi gộp kết quả lại (như Merge Sort, Quick Sort, Tìm nhị phân).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/divide-and-conquer.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-binary-search",
      "topicId": "mat3504-topic-binary-search",
      "title": "Tìm kiếm nhị phân",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-binary-search.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Trên mảng đã sắp xếp, so sánh giá trị cần tìm với phần tử ở giữa mid để bỏ ngay một nửa mảng mỗi bước, chạy trong thời gian $O(\\log n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/binary-search.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-minmax-dc",
      "topicId": "mat3504-topic-minmax-dc",
      "title": "MinMax chia để trị",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-minmax-dc.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chia đôi mảng để tìm (min, max) ở hai nửa rồi chỉ cần 2 phép so sánh để gộp kết quả, giảm số lần so sánh so với duyệt thẳng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/minmax-dc.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-quick-sort",
      "topicId": "mat3504-topic-quick-sort",
      "title": "Sắp xếp nhanh (Quick Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-quick-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chọn chốt, phân hoạch thành phần nhỏ hơn và phần lớn hơn hoặc bằng chốt, rồi sắp đệ quy hai phần; bước tổng hợp không làm gì. Trung bình $O(n\\log n)$, xấu nhất $O(n^2)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/quick-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-merge-sort",
      "topicId": "mat3504-topic-merge-sort",
      "title": "Sắp xếp trộn (Merge Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-merge-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chia đôi mảng, sắp đệ quy hai nửa, rồi trộn hai nửa đã sắp. Luôn $O(n\\log n)$ nhưng cần thêm $O(n)$ bộ nhớ cho mảng tạm.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/merge-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-strassen",
      "topicId": "mat3504-topic-strassen",
      "title": "Nhân ma trận Strassen",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-strassen.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chia mỗi ma trận thành 4 khối con và dùng 7 phép nhân trung gian thay vì 8 phép nhân thông thường để tăng tốc khi nhân ma trận lớn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/strassen.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-tromino-tiling",
      "topicId": "mat3504-topic-tromino-tiling",
      "title": "Lát nền 2^n × 2^n bằng gạch chữ L",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-tromino-tiling.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đặt một viên gạch chữ L ở tâm để mỗi góc phần tư có đúng một ô bị chiếm, đưa về 4 bài toán con kích thước một nửa.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/tromino-tiling.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-decrease-transform-conquer",
      "topicId": "mat3504-topic-decrease-transform-conquer",
      "title": "Giảm để trị và biến đổi để trị",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-decrease-transform-conquer.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Hai biến thể của \"đơn giản hóa và trị\": giảm theo hằng số hoặc hệ số (giai thừa, tìm kiếm nhị phân), hoặc biến đổi bài toán sang dạng dễ giải hơn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/decrease-transform-conquer.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-brute-force",
      "topicId": "mat3504-topic-brute-force",
      "title": "Vét cạn (Brute force)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-brute-force.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Liệt kê các ứng viên trong một không gian tìm kiếm hữu hạn và kiểm tra từng ứng viên. Nếu có nghiệm và phép liệt kê đầy đủ, vét cạn sẽ tìm được; chi phí có thể rất lớn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/brute-force.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-string-matching-bf",
      "topicId": "mat3504-topic-string-matching-bf",
      "title": "Khớp xâu vét cạn",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-string-matching-bf.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Dịch mẫu $P$ (dài $m$) dọc văn bản $T$ (dài $n$) từng vị trí và so từng ký tự: $O(mn)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/string-matching-bf.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-backtracking",
      "topicId": "mat3504-topic-backtracking",
      "title": "Quay lui (Backtracking)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-backtracking.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Xây cấu hình từng thành phần `Try(i)`: thử mỗi giá trị chấp nhận được, ghi nhận, gọi `Try(i+1)`, rồi khôi phục trạng thái. Chỉ xét các nhánh còn khả quan.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/backtracking.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-binary-strings",
      "topicId": "mat3504-topic-binary-strings",
      "title": "Liệt kê dãy nhị phân độ dài n",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-binary-strings.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "`Try(i)`: cho $x_i$ lần lượt nhận 0, 1; nếu $i=n$ thì in, ngược lại gọi `Try(i+1)`. Có $2^n$ cấu hình.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/binary-strings.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-n-queens",
      "topicId": "mat3504-topic-n-queens",
      "title": "Bài toán xếp hậu",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-n-queens.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đặt $n$ quân hậu trên bàn $n\\times n$ không ăn nhau: quay lui theo hàng, đánh dấu cột và hai đường chéo đã bị chiếm.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/n-queens.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-maze-path-backtracking",
      "topicId": "mat3504-topic-maze-path-backtracking",
      "title": "Tìm đường trong mê cung bằng quay lui",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-maze-path-backtracking.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Coi mê cung là đồ thị (ma trận kề); `Try(i)` chọn đỉnh kề chưa đi qua, đánh dấu `Daqua`, dừng khi tới đích, bỏ đánh dấu khi lùi.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/maze-path-backtracking.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-branch-and-bound",
      "topicId": "mat3504-topic-branch-and-bound",
      "title": "Nhánh cận (Branch and Bound)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-branch-and-bound.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Quay lui cho bài toán tối ưu, dùng cận hợp lệ để loại nhánh không thể cải thiện nghiệm tốt nhất đã biết. Dùng riêng chi phí đã đi làm cận dưới cần giả thiết chi phí còn lại không âm.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/branch-and-bound.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-tsp-bnb",
      "topicId": "mat3504-topic-tsp-bnb",
      "title": "Người du lịch (TSP) bằng nhánh cận",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-tsp-bnb.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Xây hành trình qua mỗi thành phố một lần rồi trở về điểm đầu, duy trì `BestCost`. Với chi phí không âm, nhánh có chi phí tạm không nhỏ hơn `BestCost` có thể bị loại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/tsp-bnb.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-hw-trial-error",
      "topicId": "mat3504-topic-hw-trial-error",
      "title": "Bài tập: vét cạn, quay lui, nhánh cận",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-hw-trial-error.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Khớp xâu, dãy nhị phân, xếp hậu, tập con k phần tử, chỉnh hợp, sudoku, leo bậc thang, người du lịch.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-trial-error.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-greedy-method",
      "topicId": "mat3504-topic-greedy-method",
      "title": "Phương pháp tham lam",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-greedy-method.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Ở mỗi bước chọn phương án tốt nhất cục bộ (`BestSelect`), nhận nếu `Acceptable`. Đúng khi bài toán có tính chất lựa chọn tham lam và cấu trúc con tối ưu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/greedy-method.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-coin-change-greedy",
      "topicId": "mat3504-topic-coin-change-greedy",
      "title": "Đổi tiền tham lam",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-coin-change-greedy.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lấy đồng mệnh giá lớn nhất còn vừa số tiền còn lại. Với mệnh giá $\\{10,6,1\\}$ và số tiền 55, tham lam dùng 10 đồng trong khi có phương án 8 đồng, nên không bảo đảm tối ưu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/coin-change-greedy.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-activity-selection",
      "topicId": "mat3504-topic-activity-selection",
      "title": "Chọn hoạt động (Activity Selection)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-activity-selection.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Sắp hoạt động theo thời điểm kết thúc tăng dần, chọn hoạt động đầu, rồi lần lượt nhận hoạt động có $s_i\\ge f_j$ của hoạt động vừa chọn.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/activity-selection.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-mst",
      "topicId": "mat3504-topic-mst",
      "title": "Cây khung nhỏ nhất (MST)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-mst.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cây khung của đồ thị vô hướng liên thông là đồ thị con không chu trình chứa mọi đỉnh; cây khung nhỏ nhất có tổng trọng số nhỏ nhất.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/mst.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-prim",
      "topicId": "mat3504-topic-prim",
      "title": "Thuật toán Prim",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-prim.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bắt đầu từ một đỉnh, mỗi bước thêm cạnh nhỏ nhất nối cây hiện tại với một đỉnh ngoài cây. Ma trận kề: $O(V^2)$; min-heap + danh sách kề: $O(E\\log V)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/prim.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-kruskal",
      "topicId": "mat3504-topic-kruskal",
      "title": "Thuật toán Kruskal",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-kruskal.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Sắp cạnh tăng dần theo trọng số, lần lượt thêm cạnh nhỏ nhất không tạo chu trình vào rừng hiện có. $O(E\\log E)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/kruskal.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-dijkstra",
      "topicId": "mat3504-topic-dijkstra",
      "title": "Thuật toán Dijkstra",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-dijkstra.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tìm đường đi ngắn nhất từ một đỉnh nguồn (trọng số không âm): mỗi bước chốt đỉnh có khoảng cách tạm nhỏ nhất và cập nhật (relax) các đỉnh kề.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/dijkstra.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-hw-greedy",
      "topicId": "mat3504-topic-hw-greedy",
      "title": "Bài tập: phương pháp tham lam",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-hw-greedy.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài đặt đổi tiền, xếp balo liên tục, chọn hoạt động, Prim, Kruskal, Dijkstra, mã Huffman.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-greedy.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-dynamic-programming",
      "topicId": "mat3504-topic-dynamic-programming",
      "title": "Quy hoạch động",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-dynamic-programming.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lưu kết quả các bài toán con chồng lấp để dùng lại; tài liệu trình bày cách điền bảng bottom-up. Cần định nghĩa trạng thái, cơ sở, truy hồi và thứ tự tính theo phụ thuộc.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/dynamic-programming.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-dp-elements",
      "topicId": "mat3504-topic-dp-elements",
      "title": "Các yếu tố của lời giải QHĐ",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-dp-elements.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Công thức truy hồi, cơ sở QHĐ, bảng phương án, kết quả tối ưu, truy vết tìm nghiệm; kèm danh sách lỗi hay gặp khi thiết kế và cài đặt.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/dp-elements.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-binomial-dp",
      "topicId": "mat3504-topic-binomial-dp",
      "title": "Đếm tổ hợp C(r, n) bằng bảng",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-binomial-dp.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Dùng bảng 2 chiều C[i][j] (tương tự tam giác Pascal) để tính số cách chọn $ từ $ phần tử qua cộng hai ô hàng trên, tránh đệ quy lặp lại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/binomial-dp.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-lis",
      "topicId": "mat3504-topic-lis",
      "title": "Dãy con tăng dài nhất",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-lis.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "$L(i)$ là độ dài dãy con tăng dài nhất kết thúc tại $a_i$: khởi tạo $L(i)=1$, rồi xét $L(j)+1$ với $j<i$ và $a_j<a_i$. Truy vết từ vị trí đạt $\\max_i L(i)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/lis.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-knapsack-01",
      "topicId": "mat3504-topic-knapsack-01",
      "title": "Xếp balo 0-1",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-knapsack-01.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "$C(i,j)$ chọn tốt nhất giữa bỏ vật $i$ và lấy nó khi $p_i\\le j$: $C(i-1,j-p_i)+w_i$. Theo slide, $p_i$ là trọng lượng, $w_i$ là giá trị; mỗi vật chỉ dùng một lần.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/knapsack-01.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-grid-path-dp",
      "topicId": "mat3504-topic-grid-path-dp",
      "title": "Đường đi tổng lớn nhất trong bảng số",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-grid-path-dp.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "$C(i,j)=\\max\\{C(i-1,j-1),C(i,j-1),C(i+1,j-1)\\}+a_{ij}$; chú ý chỉ số ngoài bảng khi tính và truy vết.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/grid-path-dp.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-floyd",
      "topicId": "mat3504-topic-floyd",
      "title": "Thuật toán Floyd",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-floyd.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tìm đường đi ngắn nhất giữa mọi cặp đỉnh bằng bảng 2 chiều dist[i][j]: thử lần lượt từng đỉnh trung gian k để rút ngắn đường i -> k -> j.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/floyd.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-lcs",
      "topicId": "mat3504-topic-lcs",
      "title": "Dãy con chung dài nhất của hai dãy",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-lcs.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đặt $L(i,j)$ là độ dài dãy con chung dài nhất của hai tiền tố; điền bảng từ các tiền tố ngắn hơn rồi truy vết để dựng dãy con chung. Các phần tử không cần liên tiếp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/lcs.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3504-hw-dp",
      "topicId": "mat3504-topic-hw-dp",
      "title": "Bài tập: quy hoạch động",
      "content": {
        "format": "markdown",
        "assetPath": "mat3504/lessons/mat3504-hw-dp.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Bố trí phòng họp, cho thuê máy, điền dấu ±, chia hai nhóm tích lớn nhất, Farmer (IOI 2004), ...",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-dp.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    }
  ],
  "exercises": [],
  "resources": []
} as const satisfies LearningContent, writtenPractice);
