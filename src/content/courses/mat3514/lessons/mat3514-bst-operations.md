# Các thao tác trên BST

Biết thế nào là BST rồi, bạn cần bốn thao tác cơ bản: tìm nhỏ nhất, tìm kiếm, chèn và xóa. Ba thao tác đầu chỉ là đi một đường từ gốc xuống; xóa phức tạp hơn vì phải giữ nguyên tính chất BST. Hãy chạy mô phỏng với từng thao tác và để ý đường đi từ gốc.

## Vì sao cần

Tính chất của [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property) cho phép tại mỗi nút bỏ qua cả một cây con. Thay vì quét $n$ khóa, ta chỉ đi theo một đường, và độ dài đường đi tối đa là chiều cao $h$ của cây. Đó là lý do mọi thao tác đều có chi phí $O(h)$.

## Ý tưởng

Ký hiệu: `T` là cây (con trỏ tới gốc), `T.item` là khóa ở gốc, `T.left`, `T.right` là hai cây con.

**findMin(T).** Khóa nhỏ nhất nằm ở nút trái nhất: đi sang trái đến khi không còn con trái. Tìm lớn nhất thì đối xứng, đi sang phải.

**search(x, T).** So sánh x với `T.item`. Bằng thì xong; nhỏ hơn thì tìm tiếp ở cây con trái; lớn hơn thì ở cây con phải; gặp cây rỗng thì x không có.

**insert(x, T).** Đi như search. Khi gặp vị trí rỗng thì tạo nút mới ở đó, nên nút mới luôn là lá. Nếu x đã có, slide báo lỗi (khóa phân biệt).

**delete(x, T).** Tìm nút chứa x, rồi xử lý theo số con của nó:

1. Không có con (lá): bỏ nút, trả về cây rỗng.
2. Một con: trả về con đó (`T.left` hoặc `T.right`) để nối vào chỗ nút bị xóa.
3. Hai con: thay `T.item` bằng `findMin(T.right)`, rồi xóa khóa đó khỏi cây con phải. Khóa nhỏ nhất của cây con phải lớn hơn mọi khóa bên trái và không lớn hơn khóa nào bên phải, nên tính chất BST được giữ.

## Ví dụ chạy tay

Cây ban đầu: gốc 5; con trái 3 (hai lá 1 và 4); con phải 8 (con trái 7, con phải 9).

```text
        5
      /   \
     3     8
    / \   / \
   1   4 7   9
```

| Thao tác | Các bước | Kết quả |
|---|---|---|
| findMin | 5, 3, 1 (1 hết con trái) | 1 |
| search(7) | 7 > 5 sang phải; 7 < 8 sang trái; gặp 7 | tìm thấy sau 3 nút |
| search(6) | 6 > 5; 6 < 8; 6 < 7 sang trái, rỗng | null |
| insert(6) | như search(6), gắn 6 vào con trái rỗng của 7 | 6 là con trái của 7 |
| delete(4) | 4 là lá | bỏ 4 khỏi con phải của 3 |

Xóa nút hai con, bắt đầu lại từ cây gốc 5 ở trên (chưa chèn 6) và delete(5): 5 có hai con. `findMin(T.right)` đi từ 8 sang trái tới 7, nên min là 7. Gán gốc thành 7, rồi xóa 7 khỏi cây con phải (7 là lá). Kết quả: gốc 7, con trái 3 (hai lá 1, 4), con phải 8 (chỉ còn con phải 9). Duyệt giữa vẫn là 1, 3, 4, 7, 8, 9.

## Cài đặt

```java
class BST {
    static class Node {
        int item;
        Node left, right;
        Node(int item) { this.item = item; }
    }
    Node root;

    static Node findMin(Node t) {
        if (t == null) return null;
        while (t.left != null) t = t.left;
        return t;
    }

    static Node search(int x, Node t) {
        while (t != null) {
            if (x == t.item) return t;
            t = (x < t.item) ? t.left : t.right;
        }
        return null;
    }

    static Node insert(int x, Node t) {
        if (t == null) return new Node(x);
        if (x < t.item) t.left = insert(x, t.left);
        else if (x > t.item) t.right = insert(x, t.right);
        // x == t.item: đã có, bỏ qua (slide báo lỗi)
        return t;
    }

    static Node delete(int x, Node t) {
        if (t == null) return null;              // không tìm thấy
        if (x < t.item) t.left = delete(x, t.left);
        else if (x > t.item) t.right = delete(x, t.right);
        else {
            if (t.left == null) return t.right;  // lá hoặc chỉ có con phải
            if (t.right == null) return t.left;  // chỉ có con trái
            t.item = findMin(t.right).item;      // hai con
            t.right = delete(t.item, t.right);
        }
        return t;
    }
}
```

Mẫu `t.left = insert(x, t.left)` cho phép hàm trả về gốc mới của cây con, nên một dòng xử lý được cả chèn vào cây rỗng lẫn thay con khi xóa. Hai trường hợp lá và một con được gộp: nếu `t.left == null` thì trả về `t.right`, kể cả khi `t.right` cũng null.

## Độ phức tạp

| Thao tác | Tốt nhất | Xấu nhất | Bộ nhớ phụ |
|---|---|---|---|
| findMin | $O(1)$ | $O(h)$ | $O(1)$ |
| search | $O(1)$ | $O(h)$ | $O(1)$ lặp, $O(h)$ đệ quy |
| insert | $O(h)$ | $O(h)$ | $O(h)$ đệ quy |
| delete | $O(1)$ | $O(h)$ | $O(h)$ đệ quy |

Xóa nút hai con đi xuống tối đa $h$ mức để tìm min rồi tối đa $h$ mức nữa để xóa, tổng vẫn $O(h)$. Cây cân đối có $h = O(\log n)$, cây suy biến có $h = O(n)$, xem [Cây suy biến và phép quay cân bằng](#/courses/mat3514/lessons/mat3514-bst-balance); cận chiều cao của cây đầy đủ xem [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height). Ký hiệu $O$ xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Lỗi thường gặp

- Quên gán lại kết quả: viết `insert(x, t.left)` mà không gán vào `t.left`, nên nút mới không được nối vào cây.
- Xóa nút hai con bằng cách bỏ nút rồi nối tùy tiện hai con. Phải thay bằng khóa kế tiếp (min cây con phải) hoặc khóa đứng trước (max cây con trái).
- Sau khi gán `t.item = min`, xóa nhầm x thay vì xóa khóa min trong `t.right`.
- Gọi `findMin(t.right)` khi `t.right` rỗng. Chỉ dùng khi nút có đủ hai con.
- Không xử lý cây rỗng (`t == null`) trong `findMin` và `delete`.

## Luyện tập

- [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst) yêu cầu cài đủ bốn phương thức này và đo thời gian so với [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search) và [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search).
- Luyện tập 7 (nhỏ nhất), 8 (phần tử liền sau), 9 (liền trước và liền sau) trong [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst) đều là biến thể của đường đi từ gốc xuống.
- Tự luyện: viết `findMax`, rồi tìm khóa lớn thứ hai trong một BST.

> **Đáp án**
> `findMax` đi sang phải đến nút không còn con phải. Khóa lớn thứ hai: nếu max có con trái thì là max của cây con trái đó; nếu không thì là cha của max.

## Tự kiểm tra

1. Xóa nút có hai con thì thay bằng khóa nào, vì sao hợp lệ?

> **Đáp án**
> Khóa nhỏ nhất của cây con phải. Nó lớn hơn mọi khóa ở cây con trái và không lớn hơn khóa nào còn lại ở cây con phải, nên đặt ở vị trí đó vẫn giữ tính chất BST. Dùng khóa lớn nhất của cây con trái cũng hợp lệ.

2. Chèn lần lượt 4, 2, 6, 1, 3 rồi xóa 2. Cây kết quả thế nào?

> **Đáp án**
> 2 có hai con (1 và 3). Min của cây con phải là 3. Thay 2 bằng 3 rồi xóa 3 khỏi cây con phải (lá). Kết quả: gốc 4, con trái 3 (có con trái 1), con phải 6.

3. Vì sao các thao tác đều $O(h)$ mà không phải $O(\log n)$?

> **Đáp án**
> Chi phí là độ dài đường đi từ gốc, tối đa là chiều cao $h$. Chỉ khi cây cân đối mới có $h = O(\log n)$; chèn khóa theo thứ tự tăng cho $h = n - 1$.
