# Duyệt cây nhị phân: trước, giữa, sau

## Vì sao cần

Mảng và danh sách chỉ có một cách đi qua từng phần tử. Cây không có thứ tự duy nhất: từ một nút ta có thể xử lý nút đó trước hay sau các cây con. Duyệt cây (traversal) là việc thăm mỗi nút đúng một lần theo một thứ tự xác định, và là nền của việc in cây, tính chiều cao, đếm nút, tính giá trị biểu thức ([Cây biểu thức](#/courses/mat3514/lessons/mat3514-expression-tree)) hay liệt kê khóa theo thứ tự trong [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property). Hãy chạy từng bước mô phỏng bên dưới và theo dõi nút nào được in vào lúc nào.

## Ý tưởng

[Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree) được định nghĩa đệ quy: một gốc, một cây con trái và một cây con phải. Vì có ba "phần" nên có $3! = 6$ cách xếp thứ tự; nếu luôn đi trái trước phải thì còn ba cách quan trọng:

| Tên | Thứ tự | Gốc được thăm |
|---|---|---|
| Duyệt trước (pre-order) | gốc, trái, phải | đầu tiên |
| Duyệt giữa (in-order) | trái, gốc, phải | ở giữa |
| Duyệt sau (post-order) | trái, phải, gốc | cuối cùng |

Cả ba đều là hàm đệ quy với **điều kiện dừng** là cây rỗng (`null`), và cả ba thăm mỗi nút đúng một lần. Chỉ khác ở chỗ đặt lệnh "thăm nút" so với hai lời gọi đệ quy. Kiến thức nền của kỹ thuật này nằm ở [Đệ quy](#/courses/mat3514/lessons/mat3514-recursion).

## Ví dụ chạy tay

Dùng cây 10 nút của slide: `A` có con `B`, `C`; `B` có `D`, `E`; `C` có `F`, `G`; `D` có `H`, `I`; `E` có con trái `K`.

**Duyệt trước** (gốc rồi trái rồi phải): thăm `A`, đi cây con `B`: thăm `B`, đi cây con `D`: thăm `D`, `H`, `I`; về `E`: thăm `E`, `K`; sang cây con `C`: thăm `C`, `F`, `G`.

Kết quả: `A B D H I E K C F G`.

**Duyệt giữa** (trái rồi gốc rồi phải): xuống tận trái nhất rồi mới in. Cây con `D` cho `H D I`; sau đó `B`; cây con `E` có con trái `K` nên cho `K E`; rồi gốc `A`; cây con `C` cho `F C G`.

Kết quả: `H D I B K E A F C G`.

**Duyệt sau** (trái, phải, gốc): cây con `D` cho `H I D`; cây con `E` cho `K E`; rồi `B`; cây con `C` cho `F G C`; cuối cùng `A`.

Kết quả: `H I D K E B F G C A`.

Các bước của duyệt trước trên hai tầng đầu, theo dõi ngăn xếp lời gọi:

| Lời gọi | Hành động | Đã in |
|---|---|---|
| `pre(A)` | in `A` | A |
| `pre(B)` (trái của A) | in `B` | A B |
| `pre(D)` | in `D` | A B D |
| `pre(H)` | in `H`, hai lời gọi con `null` trả về ngay | A B D H |
| `pre(I)` | in `I` | A B D H I |
| trở về `pre(B)`, gọi `pre(E)` | in `E`, rồi `pre(K)` in `K` | A B D H I E K |
| trở về `pre(A)`, gọi `pre(C)` | in `C`, `F`, `G` | A B D H I E K C F G |

## Cài đặt

Ba hàm khác nhau đúng một dòng. Dưới đây là phiên bản Java đúng; lưu ý slide viết sai ở phần sau, nơi hàm `postorderPrint` gọi nhầm `preorderPrint` cho hai cây con.

```java
static class Node {
    String element;
    Node left, right;
    Node(String element, Node left, Node right) {
        this.element = element;
        this.left = left;
        this.right = right;
    }
}

static void preorderPrint(Node bt) {
    if (bt == null) return;               // điều kiện dừng: cây rỗng
    System.out.print(bt.element + " ");   // thăm gốc trước
    preorderPrint(bt.left);
    preorderPrint(bt.right);
}

static void inorderPrint(Node bt) {
    if (bt == null) return;
    inorderPrint(bt.left);
    System.out.print(bt.element + " ");   // thăm gốc ở giữa
    inorderPrint(bt.right);
}

static void postorderPrint(Node bt) {
    if (bt == null) return;
    postorderPrint(bt.left);              // phải gọi đúng hàm hậu tự
    postorderPrint(bt.right);
    System.out.print(bt.element + " ");   // thăm gốc sau cùng
}
```

Dựng cây mẫu để thử:

```java
Node h = new Node("H", null, null), i = new Node("I", null, null);
Node k = new Node("K", null, null);
Node d = new Node("D", h, i), e = new Node("E", k, null);
Node b = new Node("B", d, e);
Node f = new Node("F", null, null), g = new Node("G", null, null);
Node c = new Node("C", f, g);
Node a = new Node("A", b, c);
preorderPrint(a);    // A B D H I E K C F G
```

Dùng cùng khung này, đổi "in" thành "cộng 1" thì được hàm đếm nút, đổi thành "lấy lớn nhất của hai chiều cao rồi cộng 1" thì được hàm chiều cao.

## Độ phức tạp

| | Thời gian | Bộ nhớ phụ |
|---|---|---|
| Duyệt trước, giữa, sau | $\Theta(n)$ | $O(h)$ ngăn xếp lời gọi |

Mỗi nút bị thăm đúng một lần và mỗi lời gọi làm một lượng việc hằng, kể cả $n+1$ lời gọi trên `null`, nên tổng thời gian là $\Theta(n)$ cho mọi hình dạng cây. Bộ nhớ ngăn xếp tỉ lệ với chiều cao $h$: cây cân đối cần $O(\log n)$, cây suy biến thành một đường cần $O(n)$ và có thể gây tràn ngăn xếp. Xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o) để nhắc lại cách đọc các ký hiệu này.

## Lỗi thường gặp

- Quên điều kiện dừng `bt == null`, dẫn tới `NullPointerException`.
- Sao chép hàm duyệt trước rồi sửa dở, như lỗi trong slide: hàm hậu tự gọi `preorderPrint`, nên kết quả không còn là hậu tự.
- Nhầm vị trí lệnh in: in giữa hai lời gọi là duyệt giữa; in trước hai lời gọi là duyệt trước; in sau là duyệt sau.
- Tưởng duyệt giữa luôn cho dãy tăng dần. Điều đó chỉ đúng khi cây là cây tìm kiếm; xem [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations).
- Nhầm cây con rỗng: ở cây mẫu `E` chỉ có con trái `K`, hai cách đọc "K là con trái hay con phải" cho kết quả duyệt giữa khác nhau (`K E` hay `E K`).

## So sánh / liên hệ

- Duyệt sau phù hợp khi cần kết quả của hai cây con trước khi tính ở gốc: tính giá trị biểu thức, tính kích thước thư mục, xóa cây.
- Duyệt trước phù hợp khi cần xử lý gốc trước: in thư mục rồi các mục con, sao chép cây.
- Duyệt giữa tự nhiên với biểu thức viết trung tố và với cây tìm kiếm.
- Có thể khử đệ quy bằng một ngăn xếp tường minh; xem [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt) và [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination).

## Luyện tập

- [Cây biểu thức](#/courses/mat3514/lessons/mat3514-expression-tree) dùng duyệt giữa để in biểu thức và duyệt sau để tính giá trị.
- Tự luyện: cho cây có gốc `1`, con trái `2`, con phải `3`, và `2` có con trái `4`. Viết ba kết quả duyệt.

> **Đáp án**
> Duyệt trước: `1 2 4 3`. Duyệt giữa: `4 2 1 3`. Duyệt sau: `4 2 3 1`.

## Tự kiểm tra

1. Duyệt trước, giữa, sau khác nhau ở điểm nào trong mã?

> **Đáp án**
> Chỉ ở vị trí lệnh thăm gốc so với hai lời gọi đệ quy: trước cả hai, giữa hai lời gọi, hoặc sau cả hai.

2. Có thể dựng lại một cây nhị phân duy nhất nếu chỉ biết kết quả duyệt trước?

> **Đáp án**
> Không. Cần thêm kết quả duyệt giữa (hoặc thông tin tương đương) để tách được cây con trái và phải. Ví dụ cây `A` có con trái `B` và cây `A` có con phải `B` đều cho duyệt trước là `A B`.

3. Thời gian chạy và bộ nhớ phụ của duyệt giữa trên cây suy biến (mỗi nút một con) có $n$ nút là bao nhiêu?

> **Đáp án**
> Thời gian $\Theta(n)$, bộ nhớ ngăn xếp $O(n)$ vì độ sâu đệ quy bằng $n$.
