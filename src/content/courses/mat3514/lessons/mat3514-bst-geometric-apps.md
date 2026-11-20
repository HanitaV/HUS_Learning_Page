# Ứng dụng hình học của BST

BST không chỉ để tra khóa số nguyên. Slide giảng viên giới thiệu các ứng dụng hình học (CAD, trò chơi, phim, thực tế ảo, cơ sở dữ liệu, GIS) trong đó BST và các mở rộng của nó cho lời giải hiệu quả. Bài này chọn ứng dụng đơn giản nhất, tìm kiếm theo khoảng một chiều, để làm đầy đủ, rồi điểm qua các ứng dụng còn lại.

## Bài toán

Slide liệt kê các ứng dụng hình học của BST:

1. Tìm kiếm khoảng một chiều (1-d range search).
2. Giao các đoạn thẳng (line segment intersection).
3. Cây k chiều (k-d tree), gồm tìm kiếm khoảng 2-d và láng giềng gần nhất (nearest neighbor).
4. Cây tìm kiếm khoảng (interval search tree).
5. Giao các hình chữ nhật (rectangle intersection).

Phần đào sâu của bài: **tìm kiếm khoảng 1 chiều.** Input: một BST chứa các khóa nguyên phân biệt và hai số $lo \le hi$. Output: số khóa $k$ với $lo \le k \le hi$ (hoặc danh sách chúng). Ví dụ: khóa 1, 3, 4, 5, 7, 8, 9, khoảng $[4, 8]$ cho 4, 5, 7, 8, tức 4 khóa.

Bài tập về nhà [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst) đặt Bài tập 4 là cài một ứng dụng của BST với các gợi ý: line segment intersection, range search in 2-d trees, nearest neighbor search in a 2d tree, rectangle intersection.

## Kiến thức sử dụng

- [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property): mọi khóa trái nhỏ hơn gốc, mọi khóa phải lớn hơn gốc, nên ta biết khi nào được bỏ cả cây con.
- [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal): duyệt giữa cho khóa tăng dần, nên các khóa trong khoảng xuất hiện liên tiếp.
- [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations): cách đi từ gốc xuống theo so sánh khóa; chi phí tính theo chiều cao $h$.

## Phân tích

Cách đơn giản: duyệt giữa toàn cây, đếm khóa nằm trong khoảng. Tốn $\Theta(n)$ dù khoảng rất hẹp. Có thể tốt hơn nhờ tính chất BST. Tại nút có khóa $k$:

- Nếu $k < lo$: cả cây con trái chỉ chứa khóa nhỏ hơn $k$, nên nhỏ hơn $lo$. Bỏ cây con trái.
- Nếu $k > hi$: cả cây con phải chỉ chứa khóa lớn hơn $hi$. Bỏ cây con phải.
- Nếu $lo \le k \le hi$: tính $k$ và đi cả hai phía.

Hướng giải này là gợi ý "duyệt cây và kiểm tra nút có nằm trong đoạn" của Luyện tập 4 trong [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst), cộng thêm việc cắt nhánh.

## Lời giải từng bước

Cây: gốc 5; con trái 3 (hai lá 1, 4); con phải 8 (con trái 7, con phải 9). Đếm khóa trong $[4, 8]$.

| Nút | So sánh | Hành động |
|---|---|---|
| 5 | 4 <= 5 <= 8 | tính 5; đi trái và phải |
| 3 | 3 < 4 | bỏ cây con trái của 3 (chỉ có khóa nhỏ hơn 3); đi phải |
| 4 | 4 <= 4 <= 8 | tính 4; con trái, phải rỗng |
| 8 | 4 <= 8 <= 8 | tính 8; đi trái và phải |
| 7 | trong khoảng | tính 7 |
| 9 | 9 > 8 | bỏ cây con phải của 9; đi trái, rỗng |

Tổng: 4 khóa (4, 5, 7, 8). Nút 1 không bị thăm vì cây con trái của 3 bị cắt.

## Cài đặt

```java
static int rangeCount(Node t, int lo, int hi) {
    if (t == null) return 0;
    if (t.item < lo) return rangeCount(t.right, lo, hi);   // bỏ cây con trái
    if (t.item > hi) return rangeCount(t.left, lo, hi);    // bỏ cây con phải
    return 1 + rangeCount(t.left, lo, hi) + rangeCount(t.right, lo, hi);
}
```

Đây là cùng cấu trúc đệ quy với [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations).

## Độ phức tạp

Mỗi nút thăm hoặc nằm trên một trong hai đường đi từ gốc tới $lo$ và tới $hi$ (tối đa $O(h)$ nút), hoặc nằm trong khoảng và được tính vào kết quả. Với $R$ khóa trong khoảng, thời gian là $O(h + R)$. Trên cây cân bằng, $h = O(\log n)$ nên là $O(\log n + R)$; trên cây suy biến, xem [Cây suy biến và phép quay cân bằng](#/courses/mat3514/lessons/mat3514-bst-balance), là $O(n)$.

## Mở rộng

- **Cây k-d (k-d tree).** Tổng quát hóa BST cho điểm trong mặt phẳng hay không gian $k$ chiều: mỗi tầng so sánh theo một tọa độ, luân phiên $x, y, x, y, \dots$ Dùng cho tìm kiếm khoảng 2-d (các điểm trong một hình chữ nhật) và láng giềng gần nhất.
- **Giao các đoạn thẳng.** Dùng thuật toán quét đường thẳng: BST lưu các đoạn đang cắt đường quét theo thứ tự cao độ. Khi hai đoạn trở nên kề nhau trong BST mới cần kiểm tra giao.
- **Cây tìm kiếm khoảng và giao hình chữ nhật.** Mỗi khóa là một đoạn $[a, b]$; BST theo đầu mút trái, mỗi nút lưu thêm đầu mút phải lớn nhất trong cây con để cắt nhánh.

Những ứng dụng này slide chỉ nêu tên và dẫn tới tài liệu riêng, không có thuật toán chi tiết, nên bạn tự đọc thêm trước khi làm Bài tập 4 của [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst).

## Tự kiểm tra

1. Khi nào nhánh trái bị bỏ qua trong `rangeCount`, và vì sao đúng?

> **Đáp án**
> Khi `t.item < lo`. Mọi khóa của cây con trái nhỏ hơn `t.item`, do đó nhỏ hơn $lo$ và không thể nằm trong khoảng.

2. Trên BST cân bằng 1000 khóa, khoảng chứa 3 khóa. Cỡ thời gian của `rangeCount`?

> **Đáp án**
> Khoảng $O(\log 1000 + 3)$, tức cỡ 10 đến 20 nút, thay vì 1000 nếu duyệt toàn cây.

3. Thử đổi bài toán: tìm khóa lớn nhất không vượt quá $N$. Dùng ý tưởng gì?

> **Đáp án**
> Đi từ gốc: nếu `t.item <= N` thì ghi nhận ứng viên và đi phải để tìm khóa lớn hơn mà vẫn không vượt $N$; nếu `t.item > N` thì đi trái. Khóa ghi nhận cuối cùng là đáp án, chi phí $O(h)$. Đây là Luyện tập 10 trong [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst).
