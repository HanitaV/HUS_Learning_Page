import type { LearningContent } from '../../../domain/workspace';
import { withWrittenPractice } from '../../../core/learning/written-content';
import writtenPractice from './written-practice';

export default withWrittenPractice({
  "chapters": [
    {
      "id": "mat3514-c1",
      "courseId": "mat3514",
      "title": "Ôn tập Java và công cụ phân tích",
      "topicIds": [
        "mat3514-topic-java-interface-abstract",
        "mat3514-topic-java-generics",
        "mat3514-topic-comparable-interface",
        "mat3514-topic-algorithm-problem",
        "mat3514-topic-running-time-model",
        "mat3514-topic-big-o",
        "mat3514-topic-recursion"
      ]
    },
    {
      "id": "mat3514-c2",
      "courseId": "mat3514",
      "title": "Sắp xếp",
      "topicIds": [
        "mat3514-topic-sorting-problem",
        "mat3514-topic-bubble-sort",
        "mat3514-topic-bubble-sort-cost",
        "mat3514-topic-generic-bubble-sort",
        "mat3514-topic-best-worst-average",
        "mat3514-topic-selection-sort",
        "mat3514-topic-insertion-sort",
        "mat3514-topic-shuffle-sort",
        "mat3514-topic-divide-and-conquer",
        "mat3514-topic-quick-sort",
        "mat3514-topic-merge-sort",
        "mat3514-topic-sort-properties",
        "mat3514-topic-comparison-sort-lower-bound",
        "mat3514-topic-hw-sorting-benchmark"
      ]
    },
    {
      "id": "mat3514-c3",
      "courseId": "mat3514",
      "title": "Kiểu dữ liệu trừu tượng và danh sách",
      "topicIds": [
        "mat3514-topic-abstraction-adt",
        "mat3514-topic-list-adt",
        "mat3514-topic-array-list",
        "mat3514-topic-linked-list",
        "mat3514-topic-linked-list-variants",
        "mat3514-topic-hw-list"
      ]
    },
    {
      "id": "mat3514-c4",
      "courseId": "mat3514",
      "title": "Ngăn xếp và hàng đợi",
      "topicIds": [
        "mat3514-topic-stack-adt",
        "mat3514-topic-bracket-matching",
        "mat3514-topic-maze-stack",
        "mat3514-topic-tower-of-hanoi",
        "mat3514-topic-postfix-eval",
        "mat3514-topic-queue-adt",
        "mat3514-topic-circular-array-queue",
        "mat3514-topic-linked-queue",
        "mat3514-topic-palindrome-stack-queue"
      ]
    },
    {
      "id": "mat3514-c5",
      "courseId": "mat3514",
      "title": "Cây và cây nhị phân",
      "topicIds": [
        "mat3514-topic-tree-concepts",
        "mat3514-topic-binary-tree",
        "mat3514-topic-full-binary-tree-height",
        "mat3514-topic-binary-tree-repr",
        "mat3514-topic-tree-traversal",
        "mat3514-topic-expression-tree"
      ]
    },
    {
      "id": "mat3514-c6",
      "courseId": "mat3514",
      "title": "Hàng đợi ưu tiên và đống",
      "topicIds": [
        "mat3514-topic-priority-queue-adt",
        "mat3514-topic-binary-heap",
        "mat3514-topic-heap-height",
        "mat3514-topic-heap-insert",
        "mat3514-topic-heap-removemin",
        "mat3514-topic-heap-sort",
        "mat3514-topic-hw-priority-queue"
      ]
    },
    {
      "id": "mat3514-c7",
      "courseId": "mat3514",
      "title": "Tìm kiếm và cây nhị phân tìm kiếm",
      "topicIds": [
        "mat3514-topic-sequential-search",
        "mat3514-topic-binary-search",
        "mat3514-topic-ex-count-pairs",
        "mat3514-topic-bst-property",
        "mat3514-topic-bst-operations",
        "mat3514-topic-bst-balance",
        "mat3514-topic-bst-geometric-apps",
        "mat3514-topic-hash-table",
        "mat3514-topic-hw-bst"
      ]
    },
    {
      "id": "mat3514-c8",
      "courseId": "mat3514",
      "title": "Đồ thị",
      "topicIds": [
        "mat3514-topic-graph-concepts",
        "mat3514-topic-graph-representation",
        "mat3514-topic-dfs",
        "mat3514-topic-bfs",
        "mat3514-topic-dijkstra",
        "mat3514-topic-hw-graph"
      ]
    }
  ],
  "topics": [
    {
      "id": "mat3514-topic-java-interface-abstract",
      "chapterId": "mat3514-c1",
      "title": "Lớp trừu tượng và giao diện (Java)",
      "lessonIds": [
        "mat3514-java-interface-abstract"
      ]
    },
    {
      "id": "mat3514-topic-java-generics",
      "chapterId": "mat3514-c1",
      "title": "Lập trình tổng quát (Generics)",
      "lessonIds": [
        "mat3514-java-generics"
      ]
    },
    {
      "id": "mat3514-topic-comparable-interface",
      "chapterId": "mat3514-c1",
      "title": "Giao diện Comparable<T>",
      "lessonIds": [
        "mat3514-comparable-interface"
      ],
      "prerequisiteIds": [
        "mat3514-topic-java-interface-abstract",
        "mat3514-topic-java-generics"
      ]
    },
    {
      "id": "mat3514-topic-algorithm-problem",
      "chapterId": "mat3514-c1",
      "title": "Bài toán và thuật toán",
      "lessonIds": [
        "mat3514-algorithm-problem"
      ]
    },
    {
      "id": "mat3514-topic-running-time-model",
      "chapterId": "mat3514-c1",
      "title": "Thời gian thực hiện và mô hình RAM",
      "lessonIds": [
        "mat3514-running-time-model"
      ],
      "prerequisiteIds": [
        "mat3514-topic-algorithm-problem"
      ]
    },
    {
      "id": "mat3514-topic-big-o",
      "chapterId": "mat3514-c1",
      "title": "Ký hiệu O lớn",
      "lessonIds": [
        "mat3514-big-o"
      ],
      "prerequisiteIds": [
        "mat3514-topic-running-time-model"
      ]
    },
    {
      "id": "mat3514-topic-recursion",
      "chapterId": "mat3514-c1",
      "title": "Đệ quy",
      "lessonIds": [
        "mat3514-recursion"
      ]
    },
    {
      "id": "mat3514-topic-sorting-problem",
      "chapterId": "mat3514-c2",
      "title": "Bài toán sắp xếp",
      "lessonIds": [
        "mat3514-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-bubble-sort",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp nổi bọt (Bubble Sort)",
      "lessonIds": [
        "mat3514-bubble-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-bubble-sort-cost",
      "chapterId": "mat3514-c2",
      "title": "Số lần lặp của sắp xếp nổi bọt",
      "lessonIds": [
        "mat3514-bubble-sort-cost"
      ],
      "prerequisiteIds": [
        "mat3514-topic-big-o",
        "mat3514-topic-bubble-sort"
      ]
    },
    {
      "id": "mat3514-topic-generic-bubble-sort",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp tổng quát với <T extends Comparable<? super T>>",
      "lessonIds": [
        "mat3514-generic-bubble-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-java-generics",
        "mat3514-topic-comparable-interface",
        "mat3514-topic-bubble-sort"
      ]
    },
    {
      "id": "mat3514-topic-best-worst-average",
      "chapterId": "mat3514-c2",
      "title": "Trường hợp tốt nhất, xấu nhất, trung bình",
      "lessonIds": [
        "mat3514-best-worst-average"
      ],
      "prerequisiteIds": [
        "mat3514-topic-running-time-model"
      ]
    },
    {
      "id": "mat3514-topic-selection-sort",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp chọn (Selection Sort)",
      "lessonIds": [
        "mat3514-selection-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-insertion-sort",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp chèn (Insertion Sort)",
      "lessonIds": [
        "mat3514-insertion-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-shuffle-sort",
      "chapterId": "mat3514-c2",
      "title": "Xáo trộn ngẫu nhiên (Shuffle)",
      "lessonIds": [
        "mat3514-shuffle-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-divide-and-conquer",
      "chapterId": "mat3514-c2",
      "title": "Chia để trị",
      "lessonIds": [
        "mat3514-divide-and-conquer"
      ],
      "prerequisiteIds": [
        "mat3514-topic-recursion"
      ]
    },
    {
      "id": "mat3514-topic-quick-sort",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp nhanh (Quick Sort)",
      "lessonIds": [
        "mat3514-quick-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-divide-and-conquer",
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-merge-sort",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp trộn (Merge Sort)",
      "lessonIds": [
        "mat3514-merge-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-divide-and-conquer",
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-sort-properties",
      "chapterId": "mat3514-c2",
      "title": "Sắp xếp tại chỗ và sắp xếp ổn định",
      "lessonIds": [
        "mat3514-sort-properties"
      ],
      "prerequisiteIds": [
        "mat3514-topic-bubble-sort",
        "mat3514-topic-selection-sort",
        "mat3514-topic-insertion-sort",
        "mat3514-topic-quick-sort",
        "mat3514-topic-merge-sort"
      ]
    },
    {
      "id": "mat3514-topic-comparison-sort-lower-bound",
      "chapterId": "mat3514-c2",
      "title": "Cận dưới của sắp xếp dựa trên so sánh",
      "lessonIds": [
        "mat3514-comparison-sort-lower-bound"
      ],
      "prerequisiteIds": [
        "mat3514-topic-sorting-problem",
        "mat3514-topic-big-o"
      ]
    },
    {
      "id": "mat3514-topic-hw-sorting-benchmark",
      "chapterId": "mat3514-c2",
      "title": "Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp",
      "lessonIds": [
        "mat3514-hw-sorting-benchmark"
      ],
      "prerequisiteIds": [
        "mat3514-topic-bubble-sort",
        "mat3514-topic-selection-sort",
        "mat3514-topic-insertion-sort",
        "mat3514-topic-merge-sort",
        "mat3514-topic-quick-sort"
      ]
    },
    {
      "id": "mat3514-topic-abstraction-adt",
      "chapterId": "mat3514-c3",
      "title": "Kiểu dữ liệu trừu tượng (ADT)",
      "lessonIds": [
        "mat3514-abstraction-adt"
      ],
      "prerequisiteIds": [
        "mat3514-topic-java-interface-abstract"
      ]
    },
    {
      "id": "mat3514-topic-list-adt",
      "chapterId": "mat3514-c3",
      "title": "List ADT",
      "lessonIds": [
        "mat3514-list-adt"
      ],
      "prerequisiteIds": [
        "mat3514-topic-abstraction-adt"
      ]
    },
    {
      "id": "mat3514-topic-array-list",
      "chapterId": "mat3514-c3",
      "title": "Danh sách cài đặt bằng mảng",
      "lessonIds": [
        "mat3514-array-list"
      ],
      "prerequisiteIds": [
        "mat3514-topic-list-adt"
      ]
    },
    {
      "id": "mat3514-topic-linked-list",
      "chapterId": "mat3514-c3",
      "title": "Danh sách liên kết đơn",
      "lessonIds": [
        "mat3514-linked-list"
      ],
      "prerequisiteIds": [
        "mat3514-topic-list-adt"
      ]
    },
    {
      "id": "mat3514-topic-linked-list-variants",
      "chapterId": "mat3514-c3",
      "title": "Các biến thể danh sách liên kết",
      "lessonIds": [
        "mat3514-linked-list-variants"
      ],
      "prerequisiteIds": [
        "mat3514-topic-linked-list"
      ]
    },
    {
      "id": "mat3514-topic-hw-list",
      "chapterId": "mat3514-c3",
      "title": "Bài tập: Fraction, SimpleArrayList, SimpleLinkedList",
      "lessonIds": [
        "mat3514-hw-list"
      ],
      "prerequisiteIds": [
        "mat3514-topic-array-list",
        "mat3514-topic-linked-list"
      ]
    },
    {
      "id": "mat3514-topic-stack-adt",
      "chapterId": "mat3514-c4",
      "title": "Ngăn xếp (Stack)",
      "lessonIds": [
        "mat3514-stack-adt"
      ],
      "prerequisiteIds": [
        "mat3514-topic-list-adt"
      ]
    },
    {
      "id": "mat3514-topic-bracket-matching",
      "chapterId": "mat3514-c4",
      "title": "Kiểm tra dấu ngoặc hợp lệ",
      "lessonIds": [
        "mat3514-bracket-matching"
      ],
      "prerequisiteIds": [
        "mat3514-topic-stack-adt"
      ]
    },
    {
      "id": "mat3514-topic-maze-stack",
      "chapterId": "mat3514-c4",
      "title": "Khám phá mê cung bằng ngăn xếp",
      "lessonIds": [
        "mat3514-maze-stack"
      ],
      "prerequisiteIds": [
        "mat3514-topic-stack-adt"
      ]
    },
    {
      "id": "mat3514-topic-tower-of-hanoi",
      "chapterId": "mat3514-c4",
      "title": "Tháp Hà Nội",
      "lessonIds": [
        "mat3514-tower-of-hanoi"
      ],
      "prerequisiteIds": [
        "mat3514-topic-recursion"
      ]
    },
    {
      "id": "mat3514-topic-postfix-eval",
      "chapterId": "mat3514-c4",
      "title": "Bài tập: tính biểu thức hậu tố",
      "lessonIds": [
        "mat3514-postfix-eval"
      ],
      "prerequisiteIds": [
        "mat3514-topic-stack-adt"
      ]
    },
    {
      "id": "mat3514-topic-queue-adt",
      "chapterId": "mat3514-c4",
      "title": "Hàng đợi (Queue)",
      "lessonIds": [
        "mat3514-queue-adt"
      ],
      "prerequisiteIds": [
        "mat3514-topic-list-adt"
      ]
    },
    {
      "id": "mat3514-topic-circular-array-queue",
      "chapterId": "mat3514-c4",
      "title": "Hàng đợi mảng vòng",
      "lessonIds": [
        "mat3514-circular-array-queue"
      ],
      "prerequisiteIds": [
        "mat3514-topic-queue-adt",
        "mat3514-topic-array-list"
      ]
    },
    {
      "id": "mat3514-topic-linked-queue",
      "chapterId": "mat3514-c4",
      "title": "Hàng đợi bằng danh sách liên kết",
      "lessonIds": [
        "mat3514-linked-queue"
      ],
      "prerequisiteIds": [
        "mat3514-topic-queue-adt",
        "mat3514-topic-linked-list"
      ]
    },
    {
      "id": "mat3514-topic-palindrome-stack-queue",
      "chapterId": "mat3514-c4",
      "title": "Kiểm tra palindrome bằng stack và queue",
      "lessonIds": [
        "mat3514-palindrome-stack-queue"
      ],
      "prerequisiteIds": [
        "mat3514-topic-stack-adt",
        "mat3514-topic-queue-adt"
      ]
    },
    {
      "id": "mat3514-topic-tree-concepts",
      "chapterId": "mat3514-c5",
      "title": "Cây: định nghĩa và thuật ngữ",
      "lessonIds": [
        "mat3514-tree-concepts"
      ]
    },
    {
      "id": "mat3514-topic-binary-tree",
      "chapterId": "mat3514-c5",
      "title": "Cây nhị phân, cây đầy đủ và cây hoàn chỉnh",
      "lessonIds": [
        "mat3514-binary-tree"
      ],
      "prerequisiteIds": [
        "mat3514-topic-tree-concepts"
      ]
    },
    {
      "id": "mat3514-topic-full-binary-tree-height",
      "chapterId": "mat3514-c5",
      "title": "Số nút của cây nhị phân đầy đủ",
      "lessonIds": [
        "mat3514-full-binary-tree-height"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-tree"
      ]
    },
    {
      "id": "mat3514-topic-binary-tree-repr",
      "chapterId": "mat3514-c5",
      "title": "Biểu diễn cây nhị phân: liên kết và mảng",
      "lessonIds": [
        "mat3514-binary-tree-repr"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-tree"
      ]
    },
    {
      "id": "mat3514-topic-tree-traversal",
      "chapterId": "mat3514-c5",
      "title": "Duyệt cây nhị phân: trước, giữa, sau",
      "lessonIds": [
        "mat3514-tree-traversal"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-tree",
        "mat3514-topic-recursion"
      ]
    },
    {
      "id": "mat3514-topic-expression-tree",
      "chapterId": "mat3514-c5",
      "title": "Cây biểu thức",
      "lessonIds": [
        "mat3514-expression-tree"
      ],
      "prerequisiteIds": [
        "mat3514-topic-tree-traversal"
      ]
    },
    {
      "id": "mat3514-topic-priority-queue-adt",
      "chapterId": "mat3514-c6",
      "title": "Hàng đợi ưu tiên (Priority Queue)",
      "lessonIds": [
        "mat3514-priority-queue-adt"
      ]
    },
    {
      "id": "mat3514-topic-binary-heap",
      "chapterId": "mat3514-c6",
      "title": "Đống nhị phân (Binary Heap)",
      "lessonIds": [
        "mat3514-binary-heap"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-tree-repr"
      ]
    },
    {
      "id": "mat3514-topic-heap-height",
      "chapterId": "mat3514-c6",
      "title": "Chiều cao của đống",
      "lessonIds": [
        "mat3514-heap-height"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-heap",
        "mat3514-topic-full-binary-tree-height"
      ]
    },
    {
      "id": "mat3514-topic-heap-insert",
      "chapterId": "mat3514-c6",
      "title": "Chèn vào đống: up-heap",
      "lessonIds": [
        "mat3514-heap-insert"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-heap"
      ]
    },
    {
      "id": "mat3514-topic-heap-removemin",
      "chapterId": "mat3514-c6",
      "title": "Xóa nhỏ nhất: down-heap",
      "lessonIds": [
        "mat3514-heap-removemin"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-heap"
      ]
    },
    {
      "id": "mat3514-topic-heap-sort",
      "chapterId": "mat3514-c6",
      "title": "Sắp xếp vun đống (Heap Sort)",
      "lessonIds": [
        "mat3514-heap-sort"
      ],
      "prerequisiteIds": [
        "mat3514-topic-heap-insert",
        "mat3514-topic-heap-removemin",
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-hw-priority-queue",
      "chapterId": "mat3514-c6",
      "title": "Bài tập: cài đặt hàng đợi ưu tiên",
      "lessonIds": [
        "mat3514-hw-priority-queue"
      ],
      "prerequisiteIds": [
        "mat3514-topic-priority-queue-adt",
        "mat3514-topic-binary-heap"
      ]
    },
    {
      "id": "mat3514-topic-sequential-search",
      "chapterId": "mat3514-c7",
      "title": "Tìm kiếm tuần tự",
      "lessonIds": [
        "mat3514-sequential-search"
      ]
    },
    {
      "id": "mat3514-topic-binary-search",
      "chapterId": "mat3514-c7",
      "title": "Tìm kiếm nhị phân",
      "lessonIds": [
        "mat3514-binary-search"
      ],
      "prerequisiteIds": [
        "mat3514-topic-divide-and-conquer",
        "mat3514-topic-sorting-problem"
      ]
    },
    {
      "id": "mat3514-topic-ex-count-pairs",
      "chapterId": "mat3514-c7",
      "title": "Bài tập: đếm cặp a_i + a_j = x",
      "lessonIds": [
        "mat3514-ex-count-pairs"
      ],
      "prerequisiteIds": [
        "mat3514-topic-sorting-problem",
        "mat3514-topic-binary-search"
      ]
    },
    {
      "id": "mat3514-topic-bst-property",
      "chapterId": "mat3514-c7",
      "title": "Cây nhị phân tìm kiếm (BST)",
      "lessonIds": [
        "mat3514-bst-property"
      ],
      "prerequisiteIds": [
        "mat3514-topic-binary-tree",
        "mat3514-topic-tree-traversal"
      ]
    },
    {
      "id": "mat3514-topic-bst-operations",
      "chapterId": "mat3514-c7",
      "title": "Các thao tác trên BST",
      "lessonIds": [
        "mat3514-bst-operations"
      ],
      "prerequisiteIds": [
        "mat3514-topic-bst-property"
      ]
    },
    {
      "id": "mat3514-topic-bst-balance",
      "chapterId": "mat3514-c7",
      "title": "Cây suy biến và phép quay cân bằng",
      "lessonIds": [
        "mat3514-bst-balance"
      ],
      "prerequisiteIds": [
        "mat3514-topic-bst-operations"
      ]
    },
    {
      "id": "mat3514-topic-bst-geometric-apps",
      "chapterId": "mat3514-c7",
      "title": "Ứng dụng hình học của BST",
      "lessonIds": [
        "mat3514-bst-geometric-apps"
      ],
      "prerequisiteIds": [
        "mat3514-topic-bst-operations"
      ]
    },
    {
      "id": "mat3514-topic-hash-table",
      "chapterId": "mat3514-c7",
      "title": "Bảng băm (tài liệu tham khảo)",
      "lessonIds": [
        "mat3514-hash-table"
      ],
      "prerequisiteIds": [
        "mat3514-topic-array-list",
        "mat3514-topic-linked-list"
      ]
    },
    {
      "id": "mat3514-topic-hw-bst",
      "chapterId": "mat3514-c7",
      "title": "Bài tập: BST và so sánh các cách tìm kiếm",
      "lessonIds": [
        "mat3514-hw-bst"
      ],
      "prerequisiteIds": [
        "mat3514-topic-bst-operations"
      ]
    },
    {
      "id": "mat3514-topic-graph-concepts",
      "chapterId": "mat3514-c8",
      "title": "Đồ thị và Graph ADT",
      "lessonIds": [
        "mat3514-graph-concepts"
      ]
    },
    {
      "id": "mat3514-topic-graph-representation",
      "chapterId": "mat3514-c8",
      "title": "Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh",
      "lessonIds": [
        "mat3514-graph-representation"
      ],
      "prerequisiteIds": [
        "mat3514-topic-graph-concepts"
      ]
    },
    {
      "id": "mat3514-topic-dfs",
      "chapterId": "mat3514-c8",
      "title": "Tìm kiếm theo chiều sâu (DFS)",
      "lessonIds": [
        "mat3514-dfs"
      ],
      "prerequisiteIds": [
        "mat3514-topic-graph-representation",
        "mat3514-topic-recursion"
      ]
    },
    {
      "id": "mat3514-topic-bfs",
      "chapterId": "mat3514-c8",
      "title": "Tìm kiếm theo chiều rộng (BFS)",
      "lessonIds": [
        "mat3514-bfs"
      ],
      "prerequisiteIds": [
        "mat3514-topic-graph-representation",
        "mat3514-topic-queue-adt"
      ]
    },
    {
      "id": "mat3514-topic-dijkstra",
      "chapterId": "mat3514-c8",
      "title": "Thuật toán Dijkstra",
      "lessonIds": [
        "mat3514-dijkstra"
      ],
      "prerequisiteIds": [
        "mat3514-topic-graph-representation"
      ]
    },
    {
      "id": "mat3514-topic-hw-graph",
      "chapterId": "mat3514-c8",
      "title": "Bài tập: cài đặt đồ thị và các thuật toán",
      "lessonIds": [
        "mat3514-hw-graph"
      ],
      "prerequisiteIds": [
        "mat3514-topic-graph-representation"
      ]
    }
  ],
  "lessons": [
    {
      "id": "mat3514-java-interface-abstract",
      "topicId": "mat3514-topic-java-interface-abstract",
      "title": "Lớp trừu tượng và giao diện (Java)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-java-interface-abstract.md"
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
      "id": "mat3514-java-generics",
      "topicId": "mat3514-topic-java-generics",
      "title": "Lập trình tổng quát (Generics)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-java-generics.md"
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
      "id": "mat3514-comparable-interface",
      "topicId": "mat3514-topic-comparable-interface",
      "title": "Giao diện Comparable<T>",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-comparable-interface.md"
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
      "id": "mat3514-algorithm-problem",
      "topicId": "mat3514-topic-algorithm-problem",
      "title": "Bài toán và thuật toán",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-algorithm-problem.md"
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
      "id": "mat3514-running-time-model",
      "topicId": "mat3514-topic-running-time-model",
      "title": "Thời gian thực hiện và mô hình RAM",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-running-time-model.md"
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
      "id": "mat3514-big-o",
      "topicId": "mat3514-topic-big-o",
      "title": "Ký hiệu O lớn",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-big-o.md"
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
      "id": "mat3514-recursion",
      "topicId": "mat3514-topic-recursion",
      "title": "Đệ quy",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-recursion.md"
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
      "id": "mat3514-sorting-problem",
      "topicId": "mat3514-topic-sorting-problem",
      "title": "Bài toán sắp xếp",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-sorting-problem.md"
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
      "id": "mat3514-bubble-sort",
      "topicId": "mat3514-topic-bubble-sort",
      "title": "Sắp xếp nổi bọt (Bubble Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bubble-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "So sánh và đổi chỗ hai phần tử kề nhau sai thứ tự; sau mỗi lượt phần tử lớn nhất \"nổi\" về cuối. Bản cải tiến dừng sớm khi một lượt không có đổi chỗ.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bubble-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-bubble-sort-cost",
      "topicId": "mat3514-topic-bubble-sort-cost",
      "title": "Số lần lặp của sắp xếp nổi bọt",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bubble-sort-cost.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "$0+1+\\dots+(n-1)=\\dfrac{n(n-1)}{2}$ lần lặp vòng trong, nên thời gian $c\\cdot\\dfrac{n(n-1)}{2}=O(n^2)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bubble-sort-cost.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-generic-bubble-sort",
      "topicId": "mat3514-topic-generic-bubble-sort",
      "title": "Sắp xếp tổng quát với <T extends Comparable<? super T>>",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-generic-bubble-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài đặt sắp xếp nổi bọt cho mọi kiểu so sánh được; ràng buộc `? super T` cho phép sắp xếp lớp con (Dog, Cat) khi lớp cha (Animal) cài Comparable.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/generic-bubble-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-best-worst-average",
      "topicId": "mat3514-topic-best-worst-average",
      "title": "Trường hợp tốt nhất, xấu nhất, trung bình",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-best-worst-average.md"
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
      "id": "mat3514-selection-sort",
      "topicId": "mat3514-topic-selection-sort",
      "title": "Sắp xếp chọn (Selection Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-selection-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tìm phần tử lớn nhất trong $[0..n-1]$, đổi với vị trí $n-1$, rồi giảm $n$. Luôn $O(n^2)$, kể cả khi dãy đã sắp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/selection-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-insertion-sort",
      "topicId": "mat3514-topic-insertion-sort",
      "title": "Sắp xếp chèn (Insertion Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-insertion-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Như xếp bài trên tay: lấy phần tử kế tiếp và chèn vào đúng chỗ trong phần đã sắp. Tốt nhất $O(n)$ khi dãy đã sắp, xấu nhất $O(n^2)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/insertion-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-shuffle-sort",
      "topicId": "mat3514-topic-shuffle-sort",
      "title": "Xáo trộn ngẫu nhiên (Shuffle)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-shuffle-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tạo hoán vị ngẫu nhiên đều: gán số ngẫu nhiên rồi sắp xếp, hoặc đổi mỗi phần tử với một vị trí ngẫu nhiên trong $O(n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/shuffle-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-divide-and-conquer",
      "topicId": "mat3514-topic-divide-and-conquer",
      "title": "Chia để trị",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-divide-and-conquer.md"
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
      "id": "mat3514-quick-sort",
      "topicId": "mat3514-topic-quick-sort",
      "title": "Sắp xếp nhanh (Quick Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-quick-sort.md"
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
      "id": "mat3514-merge-sort",
      "topicId": "mat3514-topic-merge-sort",
      "title": "Sắp xếp trộn (Merge Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-merge-sort.md"
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
      "id": "mat3514-sort-properties",
      "topicId": "mat3514-topic-sort-properties",
      "title": "Sắp xếp tại chỗ và sắp xếp ổn định",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-sort-properties.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tại chỗ: chỉ dùng $O(1)$ bộ nhớ phụ (Merge Sort không phải). Ổn định: không đổi thứ tự các phần tử bằng nhau, hữu ích khi sắp theo nhiều trường.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/sort-properties.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-comparison-sort-lower-bound",
      "topicId": "mat3514-topic-comparison-sort-lower-bound",
      "title": "Cận dưới của sắp xếp dựa trên so sánh",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-comparison-sort-lower-bound.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mọi thuật toán sắp xếp chỉ dựa trên phép so sánh cần $\\Omega(n\\log n)$ phép so sánh trong trường hợp xấu nhất; vì vậy Merge Sort được gọi là tối ưu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/comparison-sort-lower-bound.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-hw-sorting-benchmark",
      "topicId": "mat3514-topic-hw-sorting-benchmark",
      "title": "Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-hw-sorting-benchmark.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài đặt 5 thuật toán sắp xếp, đếm số lần so sánh/đổi chỗ, đo thời gian với $N=10^2..10^5$ và rút ra khi nào nên dùng thuật toán nào.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-sorting-benchmark.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-abstraction-adt",
      "topicId": "mat3514-topic-abstraction-adt",
      "title": "Kiểu dữ liệu trừu tượng (ADT)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-abstraction-adt.md"
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
      "id": "mat3514-list-adt",
      "topicId": "mat3514-topic-list-adt",
      "title": "List ADT",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-list-adt.md"
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
      "id": "mat3514-array-list",
      "topicId": "mat3514-topic-array-list",
      "title": "Danh sách cài đặt bằng mảng",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-array-list.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Danh sách bằng mảng truy xuất theo chỉ số trong $O(1)$; chèn/xóa đầu cần dịch phần tử, $O(n)$. Chèn cuối không cần dịch khi còn dung lượng; chi phí mở rộng mảng cần xét riêng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/array-list.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-linked-list",
      "topicId": "mat3514-topic-linked-list",
      "title": "Danh sách liên kết đơn",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-linked-list.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Các nút không liền kề, mỗi nút giữ dữ liệu và tham chiếu `next`; có `head`, `tail`. Chèn/xóa tại đầu $O(1)$, duyệt tìm $O(n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/linked-list.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-linked-list-variants",
      "topicId": "mat3514-topic-linked-list-variants",
      "title": "Các biến thể danh sách liên kết",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-linked-list-variants.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Danh sách liên kết đôi, vòng, có đuôi, đôi vòng; dùng để cài đặt stack, queue, đồ thị.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/linked-list-variants.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-hw-list",
      "topicId": "mat3514-topic-hw-list",
      "title": "Bài tập: Fraction, SimpleArrayList, SimpleLinkedList",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-hw-list.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài đặt kiểu phân số, danh sách bằng mảng (cài `Iterable`) và danh sách liên kết đơn; đếm tần suất từ bằng WordCount.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-list.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-stack-adt",
      "topicId": "mat3514-topic-stack-adt",
      "title": "Ngăn xếp (Stack)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-stack-adt.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Ngăn xếp chỉ thao tác ở đỉnh theo LIFO: `push`, `pop`, `top`. Với danh sách liên kết hoặc mảng còn dung lượng, các thao tác cơ bản có chi phí $O(1)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/stack-adt.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-bracket-matching",
      "topicId": "mat3514-topic-bracket-matching",
      "title": "Kiểm tra dấu ngoặc hợp lệ",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bracket-matching.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Duyệt xâu: gặp ngoặc mở thì push; gặp ngoặc đóng thì pop và so khớp loại ngoặc. Biểu thức hợp lệ khi không lỗi khớp và stack rỗng ở cuối.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bracket-matching.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-maze-stack",
      "topicId": "mat3514-topic-maze-stack",
      "title": "Khám phá mê cung bằng ngăn xếp",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-maze-stack.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lưu đường đi là stack tọa độ; ở ô cụt thì pop để lùi về ngã rẽ gần nhất còn hướng chưa đi.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/maze-stack.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-tower-of-hanoi",
      "topicId": "mat3514-topic-tower-of-hanoi",
      "title": "Tháp Hà Nội",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-tower-of-hanoi.md"
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
      "id": "mat3514-postfix-eval",
      "topicId": "mat3514-topic-postfix-eval",
      "title": "Bài tập: tính biểu thức hậu tố",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-postfix-eval.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Dùng ngăn xếp để tính biểu thức hậu tố và chuyển biểu thức trung tố sang hậu tố.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/postfix-eval.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-queue-adt",
      "topicId": "mat3514-topic-queue-adt",
      "title": "Hàng đợi (Queue)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-queue-adt.md"
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
      "id": "mat3514-circular-array-queue",
      "topicId": "mat3514-topic-circular-array-queue",
      "title": "Hàng đợi mảng vòng",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-circular-array-queue.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Giữ chỉ số đầu $f$ và kích thước $sz$: vị trí trống $avail=(f+sz)\\bmod N$, khi dequeue $f=(f+1)\\bmod N$. Mọi thao tác $O(1)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/circular-array-queue.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-linked-queue",
      "topicId": "mat3514-topic-linked-queue",
      "title": "Hàng đợi bằng danh sách liên kết",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-linked-queue.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đầu danh sách là đầu hàng đợi, đuôi là cuối: `enqueue = addLast`, `dequeue = removeFirst`, đều $O(1)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/linked-queue.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-palindrome-stack-queue",
      "topicId": "mat3514-topic-palindrome-stack-queue",
      "title": "Kiểm tra palindrome bằng stack và queue",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-palindrome-stack-queue.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đưa xâu vào cả stack (đảo ngược) và queue (giữ nguyên), rồi so sánh hai dãy lấy ra: trùng nhau thì là palindrome.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/palindrome-stack-queue.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-tree-concepts",
      "topicId": "mat3514-topic-tree-concepts",
      "title": "Cây: định nghĩa và thuật ngữ",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-tree-concepts.md"
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
      "id": "mat3514-binary-tree",
      "topicId": "mat3514-topic-binary-tree",
      "title": "Cây nhị phân, cây đầy đủ và cây hoàn chỉnh",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-binary-tree.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mỗi nút có tối đa hai con trái/phải có thứ tự. Theo quy ước slide, cây đầy đủ có các mức đầy; cây hoàn chỉnh đầy tới mức áp chót, mức cuối được lấp từ trái sang.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/binary-tree.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-full-binary-tree-height",
      "topicId": "mat3514-topic-full-binary-tree-height",
      "title": "Số nút của cây nhị phân đầy đủ",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-full-binary-tree-height.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cây nhị phân đầy đủ chiều cao $h$ (gốc ở mức 1) có $N=2^h-1$ nút, nên $h=O(\\log N)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/full-binary-tree-height.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-binary-tree-repr",
      "topicId": "mat3514-topic-binary-tree-repr",
      "title": "Biểu diễn cây nhị phân: liên kết và mảng",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-binary-tree-repr.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Liên kết: nút giữ `parent`, `left`, `right`. Mảng cho cây hoàn chỉnh: nút ở chỉ số $i$ có con trái $2i$, con phải $2i+1$, cha $\\lfloor i/2\\rfloor$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/binary-tree-repr.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-tree-traversal",
      "topicId": "mat3514-topic-tree-traversal",
      "title": "Duyệt cây nhị phân: trước, giữa, sau",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-tree-traversal.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Pre-order (gốc–trái–phải), in-order (trái–gốc–phải), post-order (trái–phải–gốc); mỗi nút được thăm đúng một lần, cài đặt tự nhiên bằng đệ quy.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/tree-traversal.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-expression-tree",
      "topicId": "mat3514-topic-expression-tree",
      "title": "Cây biểu thức",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-expression-tree.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Nút trong là toán tử, lá là toán hạng. Duyệt giữa (thêm ngoặc) để in biểu thức; duyệt sau để tính giá trị.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/expression-tree.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-priority-queue-adt",
      "topicId": "mat3514-topic-priority-queue-adt",
      "title": "Hàng đợi ưu tiên (Priority Queue)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-priority-queue-adt.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "`insert(k,v)`, `min()`, `removeMin()` lấy phần tử khóa nhỏ nhất. Cài bằng danh sách: chưa sắp thì chèn $O(1)$/xóa $O(n)$, đã sắp thì ngược lại.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/priority-queue-adt.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-binary-heap",
      "topicId": "mat3514-topic-binary-heap",
      "title": "Đống nhị phân (Binary Heap)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-binary-heap.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cây nhị phân hoàn chỉnh thỏa tính chất đống: khóa của mỗi nút $\\ge$ khóa nút cha (min-heap). Lưu trong mảng; gốc là phần tử nhỏ nhất.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/binary-heap.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-heap-height",
      "topicId": "mat3514-topic-heap-height",
      "title": "Chiều cao của đống",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-heap-height.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đống chứa $n$ nút có chiều cao $h\\le\\log_2 n$, vì $n\\ge 1+2+\\dots+2^{h-1}+1=2^h$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/heap-height.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-heap-insert",
      "topicId": "mat3514-topic-heap-insert",
      "title": "Chèn vào đống: up-heap",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-heap-insert.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Đặt khóa mới vào vị trí sau nút cuối, rồi đổi chỗ với cha khi còn nhỏ hơn cha. $O(\\log n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/heap-insert.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-heap-removemin",
      "topicId": "mat3514-topic-heap-removemin",
      "title": "Xóa nhỏ nhất: down-heap",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-heap-removemin.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Thay gốc bằng nút cuối, xóa nút cuối, rồi đổi chỗ xuống với con nhỏ hơn cho tới khi đúng tính chất đống. $O(\\log n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/heap-removemin.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-heap-sort",
      "topicId": "mat3514-topic-heap-sort",
      "title": "Sắp xếp vun đống (Heap Sort)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-heap-sort.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chèn $n$ phần tử vào đống rồi `removeMin` $n$ lần: $O(n\\log n)$. Có thể làm tại chỗ và dựng đống từ dưới lên trong $O(n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/heap-sort.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-hw-priority-queue",
      "topicId": "mat3514-topic-hw-priority-queue",
      "title": "Bài tập: cài đặt hàng đợi ưu tiên",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-hw-priority-queue.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài PriorityQueue bằng mảng chưa sắp, mảng đã sắp, danh sách liên kết và đống; so sánh độ phức tạp.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-priority-queue.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-sequential-search",
      "topicId": "mat3514-topic-sequential-search",
      "title": "Tìm kiếm tuần tự",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-sequential-search.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Duyệt từ đầu tới khi gặp phần tử hoặc hết danh sách; không cần dãy có thứ tự, nhưng $O(n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/sequential-search.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-binary-search",
      "topicId": "mat3514-topic-binary-search",
      "title": "Tìm kiếm nhị phân",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-binary-search.md"
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
      "id": "mat3514-ex-count-pairs",
      "topicId": "mat3514-topic-ex-count-pairs",
      "title": "Bài tập: đếm cặp a_i + a_j = x",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-ex-count-pairs.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Sắp xếp rồi với mỗi $j$ tìm nhị phân khoảng chỉ số có giá trị $x-a_j$, giảm từ $O(n^2)$ xuống $O(n\\log n)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/ex-count-pairs.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-bst-property",
      "topicId": "mat3514-topic-bst-property",
      "title": "Cây nhị phân tìm kiếm (BST)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bst-property.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Mọi khóa ở cây con trái nhỏ hơn gốc, ở cây con phải lớn hơn gốc. Duyệt giữa một BST cho dãy khóa tăng dần.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bst-property.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-bst-operations",
      "topicId": "mat3514-topic-bst-operations",
      "title": "Các thao tác trên BST",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bst-operations.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "`findMin`, `search`, `insert`, `delete` (3 trường hợp: lá, một con, hai con thay bằng min cây con phải) đều $O(h)$.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bst-operations.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-bst-balance",
      "topicId": "mat3514-topic-bst-balance",
      "title": "Cây suy biến và phép quay cân bằng",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bst-balance.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Chèn khóa theo thứ tự tăng làm cây suy biến, $h=O(n)$. Phép quay trái/phải $O(1)$ đưa cây về cân bằng; xem thêm AVL, đỏ đen.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bst-balance.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-bst-geometric-apps",
      "topicId": "mat3514-topic-bst-geometric-apps",
      "title": "Ứng dụng hình học của BST",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bst-geometric-apps.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Tìm kiếm khoảng 1 chiều, giao đoạn thẳng, cây k-d, cây khoảng, giao hình chữ nhật, láng giềng gần nhất.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/bst-geometric-apps.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-hash-table",
      "topicId": "mat3514-topic-hash-table",
      "title": "Bảng băm (tài liệu tham khảo)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-hash-table.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Lưu phần tử trong bảng chỉ số hóa theo hàm băm của khóa; xung đột được giải bằng móc xích (separate chaining) hoặc địa chỉ mở (dò tuyến tính).",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hash-table.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-hw-bst",
      "topicId": "mat3514-topic-hw-bst",
      "title": "Bài tập: BST và so sánh các cách tìm kiếm",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-hw-bst.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài đặt BST (FindMin, Search, Insert, Delete), so sánh thời gian với tìm tuần tự và nhị phân trên $10^6..10^8$ số; thêm hàm quay cân bằng.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-bst.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    },
    {
      "id": "mat3514-graph-concepts",
      "topicId": "mat3514-topic-graph-concepts",
      "title": "Đồ thị và Graph ADT",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-graph-concepts.md"
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
      "id": "mat3514-graph-representation",
      "topicId": "mat3514-topic-graph-representation",
      "title": "Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-graph-representation.md"
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
      "id": "mat3514-dfs",
      "topicId": "mat3514-topic-dfs",
      "title": "Tìm kiếm theo chiều sâu (DFS)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-dfs.md"
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
      "id": "mat3514-bfs",
      "topicId": "mat3514-topic-bfs",
      "title": "Tìm kiếm theo chiều rộng (BFS)",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-bfs.md"
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
      "id": "mat3514-dijkstra",
      "topicId": "mat3514-topic-dijkstra",
      "title": "Thuật toán Dijkstra",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-dijkstra.md"
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
      "id": "mat3514-hw-graph",
      "topicId": "mat3514-topic-hw-graph",
      "title": "Bài tập: cài đặt đồ thị và các thuật toán",
      "content": {
        "format": "markdown",
        "assetPath": "mat3514/lessons/mat3514-hw-graph.md"
      },
      "exerciseIds": [],
      "resourceIds": [],
      "summary": "Cài đồ thị vô hướng/có hướng có trọng số bằng ma trận kề; viết DFS, BFS, Dijkstra, Euler/Hamilton, cây khung nhỏ nhất, tô màu.",
      "provenance": {
        "repository": "https://github.com/HanitaV/DSA-HUS",
        "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
        "path": "content/lessons/hw-graph.md",
        "rights": "unreviewed",
        "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
      }
    }
  ],
  "exercises": [],
  "resources": []
} as const satisfies LearningContent, writtenPractice);
