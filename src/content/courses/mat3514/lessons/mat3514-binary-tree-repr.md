# Biểu diễn cây nhị phân: liên kết và mảng

## Vì sao cần

Để dùng [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree) trong chương trình ta phải quyết định lưu nó thế nào. Slide giới thiệu hai cách: cấu trúc liên kết (mỗi nút là một đối tượng) và mảng. Liên kết linh hoạt với mọi hình dạng cây; mảng không tốn con trỏ và truy cập cha con bằng phép tính chỉ số, nhưng chỉ gọn khi cây hoàn chỉnh. Lựa chọn thứ hai chính là nền của [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap). Mô phỏng bên dưới cho thấy cùng một cây ở dạng sơ đồ và dạng mảng.

## Ý tưởng

### Cách 1: cấu trúc liên kết

Mỗi nút giữ phần tử và ba tham chiếu: `parent`, `left`, `right`. Tham chiếu tới cha là tùy chọn nhưng giúp `parent` và `sibling` chạy $O(1)$. Thiếu con thì để `null`.

### Cách 2: mảng

Slide trình bày hai biến thể.

**Mảng song song** cho cây bất kỳ: với 6 nút ta có các mảng `Data`, `Parent`, `Left`, `Right`, chỉ số nút từ 0, và $-1$ nghĩa là không có.

| Nút | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Data | A | B | C | D | E | F |
| Parent | -1 | 0 | 0 | 1 | 2 | 4 |
| Left | 1 | -1 | 4 | -1 | -1 | -1 |
| Right | 2 | 3 | -1 | -1 | 5 | -1 |

Ưu điểm là xử lý từng nút dễ. Nhược điểm là tốn bộ nhớ (ba mảng chỉ số).

**Mảng theo chỉ số** cho cây hoàn chỉnh: đánh số nút theo từng mức từ trái sang phải, bắt đầu từ 1, rồi lưu nút số $i$ ở ô `T[i]`. Khi đó

$$\text{left}(i) = 2i,\qquad \text{right}(i) = 2i+1,\qquad \text{parent}(i) = \lfloor i/2 \rfloor \ (i>1).$$

Lý do: mức $k$ bắt đầu ở chỉ số $2^{k-1}$ và con của nút đầu mức ấy bắt đầu ở $2^k$, tức gấp đôi. Hai con liên tiếp $2i, 2i+1$ cùng có cha $\lfloor i/2\rfloor$.

> Nếu mảng bắt đầu từ chỉ số 0 (như mặc định của Java) thì công thức đổi thành $\text{left}(i)=2i+1$, $\text{right}(i)=2i+2$, $\text{parent}(i)=\lfloor (i-1)/2\rfloor$. Slide pha hai quy ước này (viết con là $2i$, $2i+1$ nhưng cha là $(i-1)/2$), nên khi code hãy chọn một quy ước và giữ nhất quán. Bài này và các bài về đống dùng chỉ số từ 1, để ô `T[0]` trống.

## Ví dụ chạy tay

Cây 10 nút trong [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree) lưu theo chỉ số từ 1:

| i | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| T[i] | A | B | C | D | E | F | G | H | I | K |

Tính bằng công thức:

- Cha của `K` (i=10): $\lfloor 10/2 \rfloor = 5$, tức `E`. Đúng vì `K` là con của `E`.
- Con trái của `D` (i=4): $2\cdot4=8$, tức `H`; con phải: $9$, tức `I`.
- Con trái của `E` (i=5): $10$, tức `K`; con phải: $11 > n=10$, nghĩa là không tồn tại.
- Nút `F` (i=6): con trái $12>10$, nên `F` là lá.
- Quy tắc nhận lá: nút $i$ là lá khi $2i > n$.

Cùng cây này, nếu thay `I` bằng khoảng trống (cây không hoàn chỉnh), mảng sẽ có một ô trống ở chỉ số 9 mà chỉ số 10 vẫn đang dùng. Cây lệch nặng càng làm mảng thưa: một đường 10 nút chỉ gồm con phải cần tới $2^{10}$ ô.

## Cài đặt

Nút liên kết:

```java
class LinkedBinaryTree<E> {
    static class Node<E> {
        E element;
        Node<E> parent;   // tùy chọn
        Node<E> left;
        Node<E> right;

        Node(E element, Node<E> parent, Node<E> left, Node<E> right) {
            this.element = element;
            this.parent = parent;
            this.left = left;
            this.right = right;
        }
    }

    private Node<E> root;
    private int size = 0;

    Node<E> addRoot(E e) {
        if (root != null) throw new IllegalStateException("Cây đã có gốc");
        root = new Node<>(e, null, null, null);
        size = 1;
        return root;
    }

    Node<E> addLeft(Node<E> p, E e) {
        if (p.left != null) throw new IllegalStateException("Đã có con trái");
        p.left = new Node<>(e, p, null, null);
        size++;
        return p.left;
    }
}
```

Mảng cho cây hoàn chỉnh (khớp với đề bài tập `ArrayBinaryTree`, gốc ở chỉ số 1):

```java
class ArrayBinaryTree<E> {
    private Object[] array = new Object[101];   // ô 0 không dùng
    private int n = 0;                          // chỉ số cuối đã dùng

    void setRoot(E e) { array[1] = e; n = Math.max(n, 1); }
    void setLeft(int p, E e)  { array[2 * p] = e;     n = Math.max(n, 2 * p); }
    void setRight(int p, E e) { array[2 * p + 1] = e; n = Math.max(n, 2 * p + 1); }

    static int parent(int i) { return i / 2; }
    static int left(int i)   { return 2 * i; }
    static int right(int i)  { return 2 * i + 1; }
    boolean isLeaf(int i)    { return 2 * i > n; }
}
```

## Độ phức tạp

| | Liên kết | Mảng (cây hoàn chỉnh) | Mảng (cây bất kỳ) |
|---|---|---|---|
| `parent`, `left`, `right` | $O(1)$ | $O(1)$ bằng phép tính | $O(1)$ |
| Bộ nhớ | $O(n)$, mỗi nút 3 tham chiếu | $O(n)$, không có tham chiếu | tới $O(2^h)$ ô, rất lãng phí |
| Thêm/xóa nút cuối | $O(1)$ nếu có nút cha | $O(1)$ (khi mảng còn chỗ) | $O(1)$ |

Để mở rộng mảng khi đầy ta nhân đôi kích thước, chi phí phân bổ được chia đều thành $O(1)$ mỗi lần thêm; xem [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list). Chiều cao của cây hoàn chỉnh là $O(\log n)$ (xem [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height)) nên đi từ lá lên gốc qua `parent` chỉ mất $O(\log n)$ bước.

## Lỗi thường gặp

- Dùng công thức chỉ số 1 trên mảng Java bắt đầu từ 0 (hoặc ngược lại), làm lệch toàn bộ quan hệ cha con.
- Lưu cây không hoàn chỉnh bằng mảng theo chỉ số mà không để chỗ trống, hoặc quên đánh dấu ô trống nên các hàm `left`, `right` trả về dữ liệu rác.
- Quên cập nhật `parent` khi nối hai nút trong cách liên kết, làm `parent` và `sibling` sai.
- Không kiểm tra điều kiện biên: `2*i` hoặc `2*i+1` vượt quá $n$ mới là "không có con", không phải ô chứa `null`.
- Chọn mảng cho cây tìm kiếm lệch; cây suy biến cần $O(2^h)$ ô.

## So sánh / liên hệ

Chọn liên kết khi hình dạng cây tự do, như [Cây biểu thức](#/courses/mat3514/lessons/mat3514-expression-tree) (slide nhận xét biểu diễn mảng cho cây biểu thức rất thưa và liên kết tốt hơn) hay cây tìm kiếm ở [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property). Chọn mảng khi cây luôn hoàn chỉnh, đúng như đống ở [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap), nơi phép tính $2i$, $2i+1$ thay cho mọi con trỏ.

## Luyện tập

- Bài tập [Bài tập: cài đặt hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-hw-priority-queue) đòi cài đống bằng mảng, nên bạn sẽ dùng đúng các công thức chỉ số ở đây.
- Tự luyện: nút ở chỉ số 13 (đánh số từ 1) có cha và hai con ở chỉ số nào? Tìm đường từ nút đó lên gốc.

> **Đáp án**
> Cha: $\lfloor 13/2\rfloor=6$. Con trái: $26$, con phải: $27$. Đường lên gốc: $13 \to 6 \to 3 \to 1$.

## Tự kiểm tra

1. Trong mảng 1-based, nút $i$ có con trái, con phải và cha ở đâu?

> **Đáp án**
> Con trái $2i$, con phải $2i+1$, cha $\lfloor i/2\rfloor$ (với $i>1$).

2. Vì sao cách lưu theo chỉ số chỉ hợp với cây hoàn chỉnh?

> **Đáp án**
> Cây hoàn chỉnh lấp các mức liên tục từ trái nên các chỉ số $1..n$ đều có nút, không có ô trống. Cây khác sẽ để lại nhiều ô trống, tốn bộ nhớ tới $O(2^h)$.

3. Cây hoàn chỉnh có $n=11$ nút (1-based). Nút ở chỉ số 5 có con không? Nút ở chỉ số 6 thì sao?

> **Đáp án**
> Nút 5: con trái 10, con phải 11, cả hai $\le 11$ nên có hai con. Nút 6: con trái $12>11$ nên là lá.
