# Cây nhị phân tìm kiếm (BST)

Bạn đã biết tìm kiếm nhị phân trên mảng đã sắp xếp rất nhanh, nhưng chèn hay xóa trong mảng lại tốn $O(n)$. Cây nhị phân tìm kiếm (Binary Search Tree, BST) giữ tinh thần "chia đôi" của tìm kiếm nhị phân nhưng nằm trên cấu trúc liên kết, nên thao tác động dễ hơn. Mô phỏng bên dưới cho bạn xem một cây cụ thể và đường đi khi so sánh khóa với từng nút.

## Vì sao cần

[Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search) chỉ chạy trên dãy đã sắp xếp lưu bằng mảng. Khi dữ liệu thay đổi liên tục, ta cần một cấu trúc vừa tìm nhanh vừa thêm, xóa nhanh. Tổ chức khóa trên [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree) theo một quy tắc thứ tự cố định cho phép tại mỗi nút bỏ đi cả một nhánh khi tìm kiếm.

## Ý tưởng

Slide của giảng viên phát biểu: BST là cây nhị phân sao cho mọi khóa nhỏ hơn khóa ở gốc nằm trong cây con trái, mọi khóa lớn hơn khóa ở gốc nằm trong cây con phải. Điều kiện này áp dụng cho **mọi nút**, tức mỗi cây con cũng là một BST.

Điểm hay bị hiểu sai: điều kiện là cho **toàn bộ** cây con, không chỉ cho hai nút con trực tiếp. Một nút nằm sâu trong cây con trái mà lớn hơn gốc thì cả cây không phải BST, dù mọi cặp cha con đều đúng thứ tự.

Slide đặt câu hỏi về khóa trùng. Quy ước trong bài là các khóa phân biệt; thuật toán chèn của slide báo lỗi khi gặp khóa đã có. Nếu cần cho phép trùng, bạn phải chọn một quy ước nhất quán, chẳng hạn khóa bằng thì đi sang phải, hoặc lưu thêm bộ đếm trong nút.

**Tính chất quan trọng nhất:** duyệt giữa (in-order, xem [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal)) một BST cho dãy khóa tăng dần. Duyệt giữa thăm trái, gốc, phải; mọi khóa bên trái nhỏ hơn gốc và mọi khóa bên phải lớn hơn gốc, nên bằng quy nạp theo chiều cao ta được dãy đã sắp xếp. Ví dụ trong slide: duyệt giữa cho ra 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.

## Ví dụ chạy tay

Hai cây có cùng hình dạng, khác một khóa.

```text
Cây A:        8              Cây B:        8
            /   \                        /   \
           3     10                     3     10
          / \      \                   / \      \
         1   6      14                1   9      14
            / \                          / \
           4   7                        4   7
```

Cây A: duyệt giữa cho 1, 3, 4, 6, 7, 8, 10, 14, tăng dần, và mọi nút thỏa điều kiện. Đây là BST.

Cây B: thay 6 bằng 9. Với riêng nút 3, khóa 9 ở bên phải là đúng. Nhưng 9 nằm trong cây con trái của 8 mà 9 > 8. Duyệt giữa cho 1, 3, 4, 9, 7, 8, 10, 14: dãy bị giảm ở cặp 9, 7. Đây không phải BST. Muốn sửa, đổi 9 thành giá trị trong khoảng (3, 8), ví dụ 6.

## Cài đặt

Nút của BST là nút cây nhị phân, thứ tự khóa là quy ước thêm vào. Cách kiểm tra đúng là truyền cận dưới và cận trên xuống các cây con.

```java
class TreeNode {
    int item;
    TreeNode left, right;
    TreeNode(int item) { this.item = item; }
}

// Mọi khóa của cây con t phải nằm trong khoảng mở (lo, hi)
static boolean isBST(TreeNode t, long lo, long hi) {
    if (t == null) return true;
    if (t.item <= lo || t.item >= hi) return false;
    return isBST(t.left, lo, t.item) && isBST(t.right, t.item, hi);
}
// Gọi: isBST(root, Long.MIN_VALUE, Long.MAX_VALUE)
```

Đi xuống trái thì cận trên bị thu hẹp thành khóa của nút hiện tại; đi xuống phải thì cận dưới bị thu hẹp. Nhờ đó điều kiện "toàn bộ cây con" được kiểm tra mà không phải duyệt lại.

## Độ phức tạp

| Việc | Thời gian | Ghi chú |
|---|---|---|
| Kiểm tra một cây có là BST (cách trên) | $\Theta(n)$ | thăm mỗi nút một lần |
| Duyệt giữa | $\Theta(n)$ | cho dãy tăng; bộ nhớ $O(h)$ do đệ quy |

Các thao tác tìm, chèn, xóa phụ thuộc chiều cao $h$ của cây, xem [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations) và [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Lỗi thường gặp

- Chỉ so sánh nút với hai con trực tiếp. Cây B ở trên qua được phép kiểm tra này nhưng không phải BST.
- Quên rằng quy ước khóa trùng ảnh hưởng thuật toán: kiểm tra `<=` hay `<` cho kết quả khác nhau.
- Dùng `Integer.MIN_VALUE` làm cận ban đầu trong khi cây có chính giá trị đó; hãy dùng `long` hoặc `null` làm cận.
- Nghĩ rằng BST luôn cân đối, có chiều cao $\log n$. Hình dạng phụ thuộc thứ tự chèn, xem [Cây suy biến và phép quay cân bằng](#/courses/mat3514/lessons/mat3514-bst-balance).

## Luyện tập

- [Bài tập: BST và so sánh các cách tìm kiếm](#/courses/mat3514/lessons/mat3514-hw-bst): Luyện tập 1 và 2 yêu cầu kiểm tra một dãy có là duyệt giữa của BST và kiểm tra một cây có là BST.
- Tự luyện: dựng BST bằng cách chèn lần lượt 5, 2, 8, 1, 4, 9 rồi viết dãy duyệt giữa.

> **Đáp án**
> Gốc 5; con trái 2 (hai con 1 và 4); con phải 8 (con phải 9). Duyệt giữa: 1, 2, 4, 5, 8, 9.

## Tự kiểm tra

1. Nếu một khóa lớn hơn gốc lại nằm sâu trong cây con trái, cây có còn là BST không?

> **Đáp án**
> Không. Điều kiện áp dụng cho toàn bộ cây con trái, nên khóa đó vi phạm dù các cặp cha con có thể vẫn đúng.

2. Dùng duyệt giữa để kiểm tra BST như thế nào?

> **Đáp án**
> Duyệt giữa cây cần kiểm tra; nếu có hai khóa liên tiếp mà khóa sau không lớn hơn khóa trước thì cây không phải BST (với khóa phân biệt).

3. Cây có gốc 10, con trái 5, nút 5 có con phải 12. Đây có là BST không?

> **Đáp án**
> Không. 12 nằm trong cây con trái của 10 nhưng 12 > 10.
