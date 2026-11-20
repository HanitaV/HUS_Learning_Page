# Cây suy biến và phép quay cân bằng

Các thao tác trên BST tốn $O(h)$, nhưng $h$ không tự nhiên bằng $\log n$. Chèn khóa theo thứ tự tăng và BST thoái hóa thành một danh sách liên kết. Phép quay là công cụ $O(1)$ để đổi hình dạng cây mà vẫn giữ thứ tự khóa. Trong mô phỏng, hãy chèn dãy tăng rồi thử quay để thấy chiều cao thay đổi.

## Vì sao cần

Slide của giảng viên nêu mục tiêu $O(\log n)$ cho mọi thao tác, rồi chỉ ra "nhưng": $h$ có thể là $O(n)$. Khi đó [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations) không nhanh hơn [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search). Muốn giữ đúng cam kết, ta phải kiểm soát chiều cao, và phép quay là bước cơ bản để làm việc đó.

## Ý tưởng

**Cây suy biến (skewed tree).** Chèn các khóa theo thứ tự tăng dần (hoặc giảm dần) thì mỗi khóa mới lớn hơn (nhỏ hơn) mọi khóa trước, nên luôn bị gắn vào cuối của một chuỗi chỉ đi sang phải (hoặc trái). Cây có $n$ nút và chiều cao $n - 1$.

**Cây cân bằng (balanced tree).** Chiều cao $O(\log n)$. Ý tưởng của slide: biến cây suy biến thành cây cân bằng qua một chuỗi phép quay.

**Phép quay.** "Quay" nghĩa là đưa một nút con lên trên nút cha của nó. Có hai phép đối xứng:

- Quay phải tại $x$: con trái $l$ của $x$ trở thành cha của $x$.
- Quay trái tại $x$: con phải của $x$ trở thành cha của $x$.

Quay phải tại $x$ với $l = x.left$ làm ba việc: (1) cây con phải của $l$ trở thành cây con trái của $x$; (2) $x$ trở thành con phải của $l$; (3) cha cũ của $x$ nhận $l$ làm con thay cho $x$. Hệ quả theo slide: $l$ và cây con trái của $l$ lên một mức, $x$ và cây con phải của $x$ xuống một mức, còn cây con phải của $l$ vẫn ở nguyên mức.

Thứ tự duyệt giữa không đổi sau khi quay: cây con trái của $l$, rồi $l$, rồi cây con phải cũ của $l$, rồi $x$, rồi cây con phải của $x$. Vì vậy quay vẫn giữ tính chất [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property).

## Ví dụ chạy tay

Chèn 1, 2, 3 theo thứ tự tăng cho cây chỉ đi phải: gốc 1, con phải 2, con phải của 2 là 3, chiều cao 2.

```text
 1                 2
  \               / \
   2     -->     1   3
    \
     3
```

Quay trái tại 1: con phải của 1 là 2 lên làm cha. Cây con trái của 2 (rỗng) thành cây con phải của 1; 1 thành con trái của 2. Kết quả: gốc 2, hai lá 1 và 3, chiều cao 1. Duyệt giữa vẫn là 1, 2, 3.

Ví dụ quay phải: gốc 6, con trái 4 (con trái 2, con phải 5), con phải 7. Quay phải tại 6: $l = 4$. Cây con phải của 4 (nút 5) thành con trái của 6; 6 thành con phải của 4. Gốc mới là 4, con trái 2, con phải 6 (con trái 5, con phải 7). Duyệt giữa trước và sau đều 2, 4, 5, 6, 7.

## Cài đặt

Bản của slide giả sử mỗi nút có con trỏ cha. Dưới đây là bản trả về gốc mới của cây con, không cần con trỏ cha, cùng phong cách với `insert` ở [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations).

```java
static Node rotateRight(Node x) {
    Node l = x.left;
    if (l == null) return x;   // không có gì để quay
    x.left = l.right;          // (1) cây con phải của l sang trái x
    l.right = x;               // (2) x thành con phải của l
    return l;                  // (3) nơi gọi gán l vào chỗ của x
}

static Node rotateLeft(Node x) {
    Node r = x.right;
    if (r == null) return x;
    x.right = r.left;
    r.left = x;
    return r;
}

// Dùng: root = rotateLeft(root);  hoặc  p.left = rotateRight(p.left);
```

Chỉ có ba phép gán con trỏ nên mỗi lần quay tốn $O(1)$. Quay nhiều lần liên tiếp (multi-rotation, trong giáo trình Goodrich gọi là trinode restructuring) cho phép cân bằng lại rộng hơn; slide giao phần này để bạn tự đọc.

## Độ phức tạp

| Việc | Thời gian |
|---|---|
| Một phép quay | $O(1)$ |
| search, insert, delete trên cây suy biến | $\Theta(n)$ |
| search, insert, delete trên cây cân bằng | $O(\log n)$ |

Các cây tự cân bằng như AVL, đỏ đen (xem mục 11.2 và 11.6 của giáo trình Goodrich, slide nhắc tới để tự đọc) gọi phép quay tự động sau mỗi lần chèn hoặc xóa để giữ $h = O(\log n)$. Về cận chiều cao của cây đầy đủ, xem [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height); về ký hiệu, xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Lỗi thường gặp

- Quên cập nhật cha của $x$: sau khi quay, cha cũ vẫn trỏ tới $x$ và cây bị đứt. Bản trả về gốc mới phải được gán lại ở nơi gọi.
- Thứ tự ba phép gán sai: gán `l.right = x` trước khi lưu `l.right` vào `x.left` làm mất cây con.
- Quay phải khi nút không có con trái (hoặc quay trái khi không có con phải). Phải kiểm tra rỗng.
- Tưởng quay làm đổi thứ tự khóa. Duyệt giữa không đổi, chỉ chiều cao đổi.
- Quay nhầm hướng: quay phải kéo con trái lên.

## Luyện tập

- [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst), Bài tập 3: xây cây cân bằng dựa trên BST của bài 2 với các hàm quay.
- Tự luyện: cho cây chỉ đi trái gồm 3, 2, 1 (gốc 3). Cần phép quay nào để cân bằng?

> **Đáp án**
> Quay phải tại 3: con trái 2 lên làm gốc, 3 thành con phải của 2, còn 1 là con trái của 2. Chiều cao giảm từ 2 xuống 1.

## Tự kiểm tra

1. Chèn 1, 2, 3, 4, 5 vào BST rỗng. Chiều cao là bao nhiêu và vì sao?

> **Đáp án**
> 4. Mỗi khóa mới lớn hơn mọi khóa trước nên luôn thành con phải của nút vừa chèn, tạo chuỗi dài $n - 1 = 4$ cạnh.

2. Quay có làm thay đổi kết quả duyệt giữa không?

> **Đáp án**
> Không. Quay chỉ thay đổi quan hệ cha con theo cách giữ nguyên thứ tự trái, gốc, phải của các cây con, nên tính chất BST còn nguyên.

3. Vì sao quay là $O(1)$ dù cây con có thể rất lớn?

> **Đáp án**
> Cả cây con được di chuyển như một khối chỉ bằng việc đổi vài con trỏ ở $x$ và $l$; không phải duyệt phần tử nào trong các cây con đó.
