# Cây biểu thức

## Bài toán

Cho một biểu thức số học như $(a+b)\cdot(a-b)+2$. Ta cần (1) biểu diễn nó bằng một cây nhị phân sao cho cấu trúc tính toán hiện rõ, (2) in lại biểu thức dạng trung tố có ngoặc đầy đủ, và (3) tính giá trị khi biết giá trị các biến. Cây này gọi là cây biểu thức (expression tree): **nút trong là toán tử, nút lá là toán hạng**. Ví dụ: với $a=5$, $b=3$ thì biểu thức bằng $(5+3)\cdot(5-3)+2=18$. Mô phỏng bên dưới cho thấy cây tương ứng cùng thứ tự các bước duyệt.

## Kiến thức sử dụng

- [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree): mỗi toán tử hai ngôi có đúng hai con trái và phải; thứ tự con quan trọng vì phép trừ không giao hoán.
- [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal): duyệt giữa để in, duyệt sau để tính. Duyệt trước cho dạng tiền tố.
- [Đệ quy](#/courses/mat3514/lessons/mat3514-recursion): cả hai thuật toán là đệ quy theo cấu trúc cây, điều kiện dừng ở nút lá.
- [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr): chọn cách lưu; cây biểu thức thường không hoàn chỉnh nên dùng liên kết.

## Phân tích

Mỗi toán tử cần hai giá trị đã biết trước khi tính, mà hai giá trị đó chính là kết quả của hai cây con của nó. Suy ra:

- Muốn **tính giá trị** thì phải tính hai cây con trước rồi mới áp dụng toán tử ở gốc: đúng thứ tự trái, phải, gốc của duyệt sau.
- Muốn **in dạng trung tố** thì in toán hạng trái, toán tử, rồi toán hạng phải: đúng thứ tự trái, gốc, phải của duyệt giữa. Nhưng duyệt giữa thuần túy làm mất thông tin ưu tiên (`a+b*c` và `(a+b)*c` ra cùng dãy ký tự nếu bỏ ngoặc), nên ta thêm ngoặc: in "(" trước khi duyệt cây con trái và ")" sau khi duyệt cây con phải ở mỗi nút trong.

Việc thêm ngoặc là cách để ưu tiên của phép toán được ghi lại trong hình dạng cây thay vì trong quy tắc ưu tiên.

## Lời giải từng bước

Dựng cây cho $(a+b)\cdot(a-b)+2$. Toán tử gốc là phép cộng cuối cùng (ưu tiên thấp nhất ở ngoài cùng), với hai con: cây con trái là phép nhân và cây con phải là hằng `2`.

```text
            +
          /   \
        *       2
      /   \
    +       -
   / \     / \
  a   b   a   b
```

**In biểu thức** (duyệt giữa có ngoặc), theo dõi từng nút:

| Bước | Nút | Hành động | Kết quả tích lũy |
|---|---|---|---|
| 1 | gốc `+` | nút trong: in `(`, đi cây con trái | `(` |
| 2 | `*` | nút trong: in `(`, đi trái | `((` |
| 3 | `+` thấp | nút trong: in `(`, đi trái | `(((` |
| 4 | `a` | lá: in `a` | `(((a` |
| 5 | `+` thấp | in toán tử, đi phải: `b`, in `)` | `(((a+b)` |
| 6 | `*` | in toán tử `*`, đi phải | `(((a+b)*` |
| 7 | `-` | in `(`, `a`, `-`, `b`, `)` | `(((a+b)*(a-b)` |
| 8 | `*` | in `)` khi duyệt xong cây con phải | `(((a+b)*(a-b))` |
| 9 | gốc `+` | in `+`, đi phải: lá `2`, in `)` | `(((a+b)*(a-b))+2)` |

Kết quả: `(((a+b)*(a-b))+2)`.

**Tính giá trị** (duyệt sau) với $a=5$, $b=3$:

| Nút | Giá trị hai con | Kết quả |
|---|---|---|
| lá `a`, `b` (lần 1) | 5, 3 | |
| `+` | 5, 3 | 8 |
| `-` | 5, 3 | 2 |
| `*` | 8, 2 | 16 |
| lá `2` | | 2 |
| `+` gốc | 16, 2 | 18 |

Kết quả 18, khớp với phép tính trực tiếp. Duyệt sau cũng cho dãy `a b + a b - * 2 +`, tức dạng hậu tố mà [Bài tập: tính biểu thức hậu tố](#/courses/mat3514/lessons/mat3514-postfix-eval) tính bằng ngăn xếp: ngăn xếp ở đó thực chất mô phỏng ngăn xếp lời gọi đệ quy ở đây.

## Cài đặt

```java
static class Node {
    String element;     // toán tử "+", "-", "*", "/" hoặc toán hạng (số / tên biến)
    Node left, right;
    Node(String element, Node left, Node right) {
        this.element = element;
        this.left = left;
        this.right = right;
    }
    boolean isLeaf() { return left == null && right == null; }
}

// Duyệt giữa có ngoặc. Trả về chuỗi trung tố đầy đủ ngoặc
static String infix(Node t) {
    if (t.isLeaf()) return t.element;
    return "(" + infix(t.left) + t.element + infix(t.right) + ")";
}

// Duyệt sau: tính hai cây con rồi áp dụng toán tử
static double evaluate(Node t) {
    if (t.isLeaf()) return Double.parseDouble(t.element);
    double x = evaluate(t.left);
    double y = evaluate(t.right);
    switch (t.element) {
        case "+": return x + y;
        case "-": return x - y;
        case "*": return x * y;
        case "/": return x / y;
        default: throw new IllegalArgumentException("Toán tử lạ: " + t.element);
    }
}
```

Slide viết mã giả với `if (t.left != null) print("(")` nhưng thiếu dấu ngoặc nhọn nên dòng đệ quy và dòng `print(")")` nằm ngoài `if`. Bản Java trên đã sửa: nút trong luôn in cả cặp ngoặc quanh hai nhánh, nút lá chỉ in chính nó. Để tính biểu thức có biến, thêm một `Map<String, Double>` tra giá trị của lá không phải số.

## Độ phức tạp

Mỗi nút được thăm đúng một lần và mỗi lần làm việc hằng số, nên cả `infix` lẫn `evaluate` chạy $\Theta(n)$ với $n$ là số nút. Bộ nhớ ngăn xếp là $O(h)$, tối đa $O(n)$ nếu biểu thức lồng sâu. Riêng `infix` nối chuỗi bằng `+` trong Java nên thực tế nên dùng `StringBuilder` để giữ tổng chi phí thật sự tuyến tính.

## Mở rộng

- Duyệt trước cho dạng tiền tố `+ * + a b - a b 2`, duyệt sau cho hậu tố; cả hai không cần ngoặc.
- Dựng cây từ biểu thức hậu tố bằng ngăn xếp: gặp toán hạng thì đẩy nút lá; gặp toán tử thì lấy hai nút ra làm con phải rồi con trái, đẩy nút mới vào. Xem [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt).
- Slide nêu câu hỏi mở "dựng cây từ biểu thức cho trước thế nào"; có thể đi qua dạng hậu tố như trên, hoặc dùng phân tích đệ quy theo ưu tiên.
- Thêm toán tử một ngôi (như dấu âm) thì nút đó chỉ có một con.
- Lưu bằng mảng theo chỉ số như slide chỉ thưa và tốn bộ nhớ, liên kết tốt hơn; so sánh ở [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr).

## Tự kiểm tra

1. Dựng cây và viết kết quả `infix` cho biểu thức $a\cdot(b+c)$.

> **Đáp án**
> Gốc `*`, con trái là lá `a`, con phải là nút `+` có hai lá `b`, `c`. Kết quả `(a*(b+c))`.

2. Cây biểu thức có 7 nút. Biểu thức có bao nhiêu toán tử hai ngôi và bao nhiêu toán hạng?

> **Đáp án**
> Mỗi nút trong có đúng 2 con nên số lá bằng số nút trong cộng 1. Với 7 nút: 3 toán tử và 4 toán hạng.

3. Duyệt sau cây của $(a+b)\cdot(a-b)+2$ cho dãy nào? Dãy đó tính được ra sao bằng ngăn xếp?

> **Đáp án**
> Dãy `a b + a b - * 2 +`. Duyệt từ trái: gặp toán hạng thì đẩy; gặp toán tử thì lấy hai phần tử trên cùng, tính, đẩy kết quả. Với $a=5,b=3$ ngăn xếp cuối cùng chứa 18.
