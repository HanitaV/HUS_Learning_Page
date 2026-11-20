# Cây nhị phân, cây đầy đủ và cây hoàn chỉnh

## Vì sao cần

Cây tổng quát ở [Cây: định nghĩa và thuật ngữ](#/courses/mat3514/lessons/mat3514-tree-concepts) cho phép số con tùy ý, nên việc lưu và duyệt khá rườm rà. Nếu mỗi nút có tối đa hai con và hai con đó phân biệt trái và phải, cấu trúc đủ đơn giản để cài đặt gọn mà vẫn đủ mạnh cho cây tìm kiếm, đống và cây biểu thức. Bài này định nghĩa cây nhị phân (binary tree) cùng hai dạng "đẹp" của nó là cây đầy đủ và cây hoàn chỉnh; hai dạng này quyết định chiều cao thấp và cách lưu bằng mảng. Mô phỏng bên dưới giúp bạn nhận ra một cây thuộc dạng nào.

## Ý tưởng

**Cây nhị phân** là cây trong đó mỗi nút có tối đa 2 con **có thứ tự**: con trái (left child) và con phải (right child). Thứ tự quan trọng: một nút chỉ có một con thì con đó là trái hay phải cho ra hai cây nhị phân khác nhau.

Theo định nghĩa đệ quy, cây nhị phân hoặc rỗng, hoặc gồm một gốc cùng cây con trái và cây con phải (mỗi cây con cũng là cây nhị phân, có thể rỗng). Định nghĩa này là lý do các thuật toán trên cây nhị phân viết tự nhiên bằng đệ quy; xem [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal).

Theo quy ước của slide (chiều cao $h$ tính theo số mức, gốc ở mức 1):

- **Cây đầy đủ** (full binary tree): mọi nút ở mức nhỏ hơn $h$ đều có đúng hai con, tức mọi mức đều đầy.
- **Cây hoàn chỉnh** (complete binary tree): đầy tới mức $h-1$, còn mức $h$ được lấp từ trái sang phải, không có khoảng trống giữa các nút của mức cuối.

Cây đầy đủ cũng là cây hoàn chỉnh, nhưng chiều ngược lại không đúng.

> Chú ý thuật ngữ: trong nhiều giáo trình, "full binary tree" lại có nghĩa là mọi nút có 0 hoặc 2 con, còn "perfect" mới là mọi mức đầy. Bài này theo slide của giảng viên. Nếu đọc sách khác, hãy đối chiếu định nghĩa trước.

**Số nút của cây đầy đủ.** Mức $i$ có $2^{i-1}$ nút, nên cây đầy đủ chiều cao $h$ có

$$N = 1 + 2 + 4 + \dots + 2^{h-1} = 2^h - 1.$$

Suy ra $h = \log_2(N+1)$, tức chiều cao là $O(\log N)$. Chứng minh chi tiết nằm ở [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height). Đây là lý do cây nhị phân cân đối cho phép tìm kiếm và sắp xếp ở mức logarit, nền tảng của [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) và [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property).

## Ví dụ chạy tay

Xét cây nhị phân gồm 10 nút, đánh số theo thứ tự từng mức từ trái sang phải: `A` (1); `B`, `C` (2, 3); `D`, `E`, `F`, `G` (4 đến 7); `H`, `I`, `K` (8, 9, 10). `H`, `I` là con của `D`; `K` là con trái của `E`.

| Mức | Các nút | Số nút | Mức đầy? |
|---|---|---|---|
| 1 | `A` | 1 | có (tối đa $2^0=1$) |
| 2 | `B`, `C` | 2 | có (tối đa 2) |
| 3 | `D`, `E`, `F`, `G` | 4 | có (tối đa 4) |
| 4 | `H`, `I`, `K` | 3 | không (tối đa 8) |

- Chiều cao $h = 4$. Các mức 1 đến 3 đầy, mức 4 được lấp từ trái: `H`, `I` dưới `D` rồi `K` dưới `E`, không có chỗ trống chen giữa. Vậy đây là cây **hoàn chỉnh** nhưng **không đầy đủ** (đầy đủ cần $2^4-1=15$ nút).
- Nếu xóa `I` mà giữ `K`, mức cuối có khoảng trống giữa `H` và `K`, cây không còn hoàn chỉnh.
- Nếu thêm 5 nút nữa vào mức 4 cho đủ 8 nút, ta có $7+8=15=2^4-1$ nút: cây đầy đủ.

## Cài đặt

Slide mô tả giao diện `BinaryTree` mở rộng `Tree`:

```java
public interface BinaryTree<E> extends Tree<E> {
    Position<E> left(Position<E> p);      // null nếu không có con trái
    Position<E> right(Position<E> p);     // null nếu không có con phải
    Position<E> sibling(Position<E> p);   // null nếu không có anh em
}
```

Kiểm tra hai dạng đặc biệt có thể làm bằng đệ quy. Hàm sau trả về chiều cao theo số mức, rồi kiểm tra cây đầy đủ bằng công thức $2^h-1$:

```java
static class Node {
    int key;
    Node left, right;
}

static int height(Node t) {
    if (t == null) return 0;
    return 1 + Math.max(height(t.left), height(t.right));
}

static int size(Node t) {
    return t == null ? 0 : 1 + size(t.left) + size(t.right);
}

static boolean isFull(Node t) {
    int h = height(t);
    return size(t) == (1 << h) - 1;
}
```

Cách lưu thực tế (liên kết hay mảng) được bàn ở [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr). Cả hai hàm dùng đệ quy, hãy xem lại [Đệ quy](#/courses/mat3514/lessons/mat3514-recursion) nếu chưa quen.

## Độ phức tạp

| Thao tác | Thời gian | Ghi chú |
|---|---|---|
| `left`, `right`, `parent`, `sibling` | $O(1)$ | nếu nút giữ tham chiếu |
| `height`, `size`, `isFull` | $O(n)$ | thăm mọi nút một lần |
| Chiều cao cây đầy đủ/hoàn chỉnh $n$ nút | $O(\log n)$ | do mức $i$ có tới $2^{i-1}$ nút |
| Chiều cao tệ nhất của cây nhị phân bất kỳ | $O(n)$ | cây suy biến thành một đường |

Cây nhị phân bất kỳ có thể rất cao (chỉ mỗi nút một con), vì vậy chỉ riêng việc "là cây nhị phân" chưa đảm bảo $O(\log n)$. Điều đó chỉ đúng với dạng cân đối như cây hoàn chỉnh.

## Lỗi thường gặp

- Cho rằng cây nhị phân luôn thấp. Cây mà mọi nút chỉ có con phải là cây nhị phân hợp lệ với chiều cao bằng số nút.
- Coi "cây đầy đủ" theo nghĩa sách khác (mỗi nút 0 hoặc 2 con) rồi áp dụng công thức $2^h-1$. Công thức chỉ đúng khi mọi mức đầy.
- Bỏ qua thứ tự trái phải: hai cây có cùng tập nút nhưng con đổi bên là hai cây nhị phân khác nhau (quan trọng với duyệt giữa và cây tìm kiếm).
- Cho rằng cây hoàn chỉnh phải đầy cả mức cuối. Mức cuối chỉ cần lấp liên tục từ trái.
- Đếm $h$ theo cạnh nhưng dùng công thức $2^h-1$. Với quy ước đếm cạnh, cây đầy đủ có $2^{h+1}-1$ nút, đúng như cách bài [Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height) viết.

## So sánh / liên hệ

| Dạng cây | Tính chất | Dùng ở |
|---|---|---|
| Nhị phân tổng quát | Tối đa 2 con có thứ tự | [Cây biểu thức](#/courses/mat3514/lessons/mat3514-expression-tree) |
| Hoàn chỉnh | Mức cuối lấp từ trái | [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) (lưu mảng) |
| Đầy đủ | Mọi mức đầy, $N=2^h-1$ | Cận trên/dưới cho chiều cao |
| Có tính chất tìm kiếm | Trái nhỏ hơn gốc, phải lớn hơn | [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property) |

## Luyện tập

- Duyệt cây 10 nút ở trên theo ba thứ tự trong [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal) để thấy kết quả khác nhau.
- Dựng cây cho biểu thức ở [Cây biểu thức](#/courses/mat3514/lessons/mat3514-expression-tree) và nói nó đầy đủ, hoàn chỉnh hay không.
- Tự luyện: cây hoàn chỉnh có 12 nút thì chiều cao (theo mức) là bao nhiêu và mức cuối có mấy nút?

> **Đáp án**
> Mức 1 đến 3 có $1+2+4=7$ nút, còn lại $12-7=5$ nút ở mức 4. Vậy $h=4$ và mức cuối có 5 nút (nhỏ hơn tối đa 8).

## Tự kiểm tra

1. Cây hoàn chỉnh có phải luôn là cây đầy đủ không? Cho ví dụ.

> **Đáp án**
> Không. Cây 10 nút trong ví dụ là hoàn chỉnh nhưng mức 4 mới có 3 trên 8 nút nên không đầy đủ.

2. Cây đầy đủ có $h=5$ thì có bao nhiêu nút? Có bao nhiêu nút lá?

> **Đáp án**
> $2^5-1=31$ nút. Lá nằm ở mức 5 nên có $2^4=16$ nút lá.

3. Một cây nhị phân có $n$ nút. Vì sao không thể khẳng định chiều cao là $O(\log n)$?

> **Đáp án**
> Vì cây có thể suy biến thành một đường (mỗi nút một con), khi đó chiều cao là $n$. Chỉ cây cân đối như cây hoàn chỉnh mới có chiều cao $O(\log n)$.
