# Cây: định nghĩa và thuật ngữ

## Vì sao cần

Mảng và danh sách liên kết (xem [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) và [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list)) xếp dữ liệu thành một hàng. Nhiều dữ liệu thật lại có dạng phân cấp: thư mục chứa thư mục con, biểu thức chứa biểu thức con, cây gia phả. Cây (tree) là cấu trúc dữ liệu cho dạng phân cấp đó, và nhờ cấu trúc này nhiều thuật toán chạy nhanh hơn hẳn so với trên cấu trúc tuyến tính. Bài này chuẩn hóa thuật ngữ để các bài về cây nhị phân, đống và cây tìm kiếm dùng chung. Hãy xem mô phỏng ngay bên dưới và gọi tên từng nút theo các thuật ngữ trong bài.

## Ý tưởng

**Định nghĩa đệ quy.** Một cây là một tập các nút. Cây khác rỗng có một nút đặc biệt $r$ gọi là **gốc** (root) và không hoặc nhiều cây con khác rỗng $T_1, T_2, \dots, T_k$; gốc của mỗi cây con được nối với $r$ bằng một cạnh có hướng từ $r$ xuống. Nút là đối tượng dữ liệu, cạnh là liên kết giữa hai nút.

Từ định nghĩa suy ra một cây có $n$ nút thì có đúng $n-1$ cạnh: mỗi nút, trừ gốc, có đúng một cạnh nối lên cha của nó.

**Quan hệ giữa các nút.** Lấy cây mẫu dưới đây, gốc là `A`: `A` có hai con `B`, `C`; `B` có hai con `D`, `E`; `C` có hai con `F`, `G`; `D` có hai con `H`, `I`; `E` có một con `K`.

| Thuật ngữ | Nghĩa | Ví dụ trên cây mẫu |
|---|---|---|
| Cha (parent) / con (child) | `u` là cha của `v` nếu có cạnh $u \to v$ | `A` là cha của `B`, `C` |
| Anh em (siblings) | Các nút cùng cha | `B` và `C` |
| Tổ tiên (ancestor) | Nút nằm trên đường từ gốc tới nút đang xét (kể cả cha) | `B` và `A` là tổ tiên của `D` |
| Hậu duệ (descendant) | Chiều ngược lại của tổ tiên | `D`, `E`, `H`, `I`, `K` là hậu duệ của `B` |
| Nút lá / ngoài (leaf, external) | Nút không có con | `H`, `I`, `K`, `F`, `G` |
| Nút trong (internal) | Nút có một hoặc nhiều con | `A`, `B`, `C`, `D`, `E` |
| Cây con (subtree) | Một nút cùng mọi hậu duệ của nó | Cây con gốc `B` gồm `B, D, E, H, I, K` |

Một nút lá cũng là một cây con (cây chỉ có một nút), còn cây rỗng thì không có gốc nên không tính là cây con có gốc.

**Mức và chiều cao theo quy ước của slide.**

- **Mức** (level) của một nút là số nút trên đường đi từ gốc tới nút đó, tính cả hai đầu. Gốc ở mức 1.
- **Chiều cao** (height) của cây là mức lớn nhất của các nút.

Với cây mẫu: `A` mức 1; `B`, `C` mức 2; `D`, `E`, `F`, `G` mức 3; `H`, `I`, `K` mức 4. Chiều cao cây là 4.

> Chú ý: nhiều giáo trình (Goodrich, CLRS) đếm theo số cạnh, tức gốc có độ sâu 0 và cây mẫu có chiều cao 3. Bài [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) và [Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height) dùng độ sâu bắt đầu từ 0. Mỗi khi gặp công thức chứa $h$, hãy kiểm tra xem $h$ đếm nút hay đếm cạnh.

## Ví dụ chạy tay

Hệ thống tập tin là một cây: thư mục là nút trong, tập tin là lá.

```text
docs
├── 15
├── 16
│   └── Lab
└── 17
    ├── bai5.txt
    └── bai6.txt
```

- Gốc: `docs`. Con của `docs`: `15`, `16`, `17` (đây là anh em với nhau).
- Lá: `15` (thư mục rỗng), `Lab`, `bai5.txt`, `bai6.txt`.
- Nút trong: `docs`, `16`, `17`.
- Đường từ gốc tới `bai6.txt` có 3 nút (`docs`, `17`, `bai6.txt`) nên nó ở mức 3; chiều cao cả cây cũng là 3.
- Tổng số nút là 8, số cạnh là 7 đúng bằng $n-1$.

Ứng dụng thứ hai là biểu thức số học, ví dụ $(a+b)\cdot(a-b)+2$: toán tử là nút trong, toán hạng là lá. Cách dựng và tính trên cây này nằm ở [Cây biểu thức](#/courses/mat3514/lessons/mat3514-expression-tree).

## Cài đặt

Slide dùng Tree ADT với các phương thức sau (đọc thêm Goodrich mục 8.1). Đây là giao diện, chưa nói cách lưu.

```java
public interface Tree<E> {
    Position<E> root();
    Position<E> parent(Position<E> v);
    Iterable<Position<E>> children(Position<E> v);
    boolean isInternal(Position<E> v);
    boolean isExternal(Position<E> v);
    boolean isRoot(Position<E> v);
    int size();
    boolean isEmpty();
    E replace(Position<E> v, E e);   // trả về nội dung cũ
}
```

Với cây tổng quát (mỗi nút có tối đa $n$ con), mỗi nút thường giữ một danh sách các con. Khi mỗi nút chỉ có tối đa hai con có thứ tự, ta có trường hợp đặc biệt quan trọng là [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree); cách lưu cụ thể nằm ở [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr).

## Độ phức tạp

Các truy vấn quan hệ (`parent`, `isRoot`, `isExternal`) chạy $O(1)$ nếu mỗi nút giữ tham chiếu tới cha và con. Các thao tác duyệt toàn cây (tính `size`, tìm chiều cao) phải thăm mọi nút nên mất $O(n)$; xem [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal). Bộ nhớ là $O(n)$. Chiều cao $h$ của cây quyết định chi phí của những thao tác đi dọc một đường từ gốc xuống lá, nên cây càng thấp càng tốt; xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) để nhắc lại cách đọc các ký hiệu này.

## Lỗi thường gặp

- Nhầm mức bắt đầu từ 1 (slide) với độ sâu bắt đầu từ 0 (đếm cạnh), dẫn tới sai 1 đơn vị ở chiều cao.
- Gọi "nút lá" là "nút trong". Nút lá là nút không có con; nút trong có ít nhất một con (gốc cũng là nút trong nếu cây có hơn một nút).
- Coi anh em họ (cùng ông, khác cha) là anh em. Anh em phải cùng cha.
- Nhầm cây với đồ thị tổng quát: cây có gốc không có chu trình và mỗi nút trừ gốc có đúng một cha. Đồ thị tổng quát ở [Đồ thị và Graph ADT](#/courses/mat3504/lessons/mat3504-graph-concepts) không bị ràng buộc đó.
- Quên rằng cây con của một nút gồm cả nút đó cùng mọi hậu duệ, nên cây con của một lá là chính lá đó.

## So sánh / liên hệ

Cây là trường hợp đặc biệt của đồ thị: cây không có chu trình và liên thông. Nhờ vậy khái niệm cây khung trong [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst) chính là một cây phủ mọi đỉnh của đồ thị. Hướng đi ở đây là từ cha xuống con, trong khi đồ thị vô hướng không phân biệt đầu cuối.

## Luyện tập

- Vẽ cây cho thư mục của bạn rồi liệt kê lá, nút trong, mức và chiều cao theo cả hai quy ước (đếm nút, đếm cạnh).
- Tiếp theo hãy học [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree) để thấy các thuật ngữ này được thu hẹp thế nào khi mỗi nút có tối đa hai con.
- Tự luyện: một cây có 10 nút, trong đó 6 nút là lá. Có bao nhiêu nút trong và bao nhiêu cạnh?

> **Đáp án**
> Nút trong là $10-6=4$ (mọi nút hoặc là lá hoặc là nút trong). Số cạnh là $10-1=9$.

## Tự kiểm tra

1. Một nút không có con được gọi là gì? Nút nào của một cây khác rỗng luôn có mức 1?

> **Đáp án**
> Nút lá (nút ngoài). Nút ở mức 1 là gốc.

2. Trên cây mẫu của bài, cho biết các hậu duệ của `E` và mức của `K`.

> **Đáp án**
> Hậu duệ của `E` chỉ có `K`. `K` ở mức 4 (đường `A, B, E, K` có 4 nút).

3. Một cây có chiều cao 5 theo quy ước slide thì khi đếm theo số cạnh chiều cao là bao nhiêu? Vì sao?

> **Đáp án**
> Là 4. Đường dài nhất từ gốc tới lá có 5 nút nên có 4 cạnh.
