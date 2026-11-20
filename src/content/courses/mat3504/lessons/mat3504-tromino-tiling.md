# Lát nền 2^n × 2^n bằng gạch chữ L

## Bài toán

Cho nền nhà hình vuông kích thước $2^n\times2^n$ ô, trong đó một ô được dành riêng để thoát nước (ô khuyết). Hãy lát kín mọi ô còn lại bằng các viên gạch hình chữ L, mỗi viên phủ đúng ba ô (tromino), không chồng nhau và không ra ngoài nền. Ví dụ nền $4\times4$ với ô khuyết ở hàng 1, cột 1 (đánh số từ 0). Mô phỏng bên dưới cho thấy viên gạch giữa được đặt trước rồi bốn góc phần tư được lát tiếp.

## Kiến thức sử dụng

- [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer): chia nền thành bốn góc phần tư bằng nhau và giải đệ quy từng góc.
- [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): trường hợp suy biến là nền $2\times2$ với một ô khuyết, lát bằng một viên gạch.
- [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness): chứng minh quy nạp theo $n$ rằng lát được với mọi vị trí ô khuyết.
- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation): lập $T(n)=4T(n-1)+O(1)$ để đếm số viên gạch.

## Phân tích

Ý tưởng của bài giảng: làm sao đưa nền về kích thước $2\times2$ với một ô trống, vì khi đó chỉ cần đúng một viên gạch. Khó khăn là chỉ **một** góc phần tư chứa ô khuyết, còn ba góc kia thì không, nên bốn góc chưa cùng dạng. Để cả bốn góc cùng có dạng "nền $2^{n-1}\times2^{n-1}$ có một ô khuyết", ta đặt một viên gạch chữ L vào đúng tâm nền sao cho nó phủ một ô ở mỗi góc phần tư **không** chứa ô khuyết (tức ba ô sát tâm). Từ đó mỗi góc phần tư đều có đúng một ô "đã bị chiếm": hoặc ô khuyết gốc, hoặc ô vừa được viên gạch giữa phủ. Bài toán thu về bốn bài toán con cùng dạng, kích thước một nửa. Lặp tới khi nền còn $2\times2$.

Quy nạp: với $n=1$ lát được bằng một viên. Giả sử lát được nền $2^{n-1}$ với mọi vị trí khuyết; với nền $2^n$, bước trên tạo bốn nền con $2^{n-1}$ mỗi nền có một ô khuyết, nên lát được. Vậy bài toán luôn có lời giải.

## Lời giải từng bước

Nền $4\times4$, ô khuyết $X$ ở (1,1). Số hiệu là viên gạch đặt ở bước đó.

| Bước | Thao tác |
|---|---|
| 1 | Ô khuyết nằm góc phần tư trên trái. Đặt gạch 1 ở tâm, phủ (1,2), (2,1), (2,2): các ô của ba góc còn lại |
| 2 | Góc trên trái $2\times2$ có $X$ tại (1,1): đặt gạch 2 phủ (0,0), (0,1), (1,0) |
| 3 | Góc trên phải có ô chiếm (1,2): gạch 3 phủ (0,2), (0,3), (1,3) |
| 4 | Góc dưới trái có ô chiếm (2,1): gạch 4 phủ (2,0), (3,0), (3,1) |
| 5 | Góc dưới phải có ô chiếm (2,2): gạch 5 phủ (2,3), (3,2), (3,3) |

Kết quả:

```text
2  2  3  3
2  X  1  3
4  1  1  5
4  4  5  5
```

Tổng 5 viên $=(4^2-1)/3$. Ba ô sát tâm cùng số 1 tạo hình chữ L.

## Cài đặt

Hàm `tile` lát vùng vuông cạnh `size` có góc trên trái `(top, left)` và ô khuyết `(missRow, missCol)`; `board` lưu số hiệu viên gạch.

```java
static int[][] board;
static int counter = 0;

static void tile(int top, int left, int missRow, int missCol, int size) {
    if (size == 1) {
        return;
    }
    int id = ++counter;
    int h = size / 2;
    int midR = top + h;
    int midC = left + h;
    int[][] corner = {{midR - 1, midC - 1}, {midR - 1, midC}, {midR, midC - 1}, {midR, midC}};
    int[][] origin = {{top, left}, {top, left + h}, {top + h, left}, {top + h, left + h}};
    for (int q = 0; q < 4; q++) {
        int r0 = origin[q][0];
        int c0 = origin[q][1];
        int mr;
        int mc;
        if (missRow >= r0 && missRow < r0 + h && missCol >= c0 && missCol < c0 + h) {
            mr = missRow;
            mc = missCol;
        } else {
            mr = corner[q][0];
            mc = corner[q][1];
            board[mr][mc] = id;        // ô của viên gạch giữa
        }
        tile(r0, c0, mr, mc, h);
    }
}
```

Khởi tạo: `board = new int[N][N]; board[r][c] = -1; tile(0, 0, r, c, N);` với $N=2^n$. Với `size == 1` không cần làm gì vì vùng đó chỉ gồm ô đã bị chiếm. Với `size == 2`, viên gạch ở tâm chính là viên gạch duy nhất của trường hợp suy biến $2	imes2$ trong bài giảng.

## Độ phức tạp

Mỗi lần gọi đặt một viên gạch rồi gọi bốn bài toán con cạnh một nửa:

$$T(n)=4T(n-1)+1,\ T(0)=0\ \Rightarrow\ T(n)=\frac{4^n-1}{3}.$$

| | Giá trị |
|---|---|
| Số viên gạch | $(4^n-1)/3=(N^2-1)/3$ với $N=2^n$ |
| Thời gian | $\Theta(N^2)$, tỷ lệ với số ô |
| Bộ nhớ | $O(N^2)$ cho bảng, ngăn xếp đệ quy sâu $n=\log_2 N$ |

Thời gian tối ưu về bậc vì phải ghi nhận $N^2-1$ ô. Theo định lý chính với kích thước $N$: $T(N)=4T(N/2)+O(1)$ có $a=4>b^d=1$ nên $\Theta(N^{\log_2 4})=\Theta(N^2)$.

## Mở rộng

- Đây là bài 3 trong bài tập chia để trị của lớp ("lát nền nhà $2^n\times2^n$"); hãy cài đặt và in bảng kết quả với nhiều vị trí ô khuyết, cùng với [MinMax chia để trị](#/courses/mat3504/lessons/mat3504-minmax-dc) và [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen).
- Cần kiểm tra điều kiện cần: số ô $2^{2n}-1$ phải chia hết cho 3, điều này luôn đúng vì $4^n\equiv1\pmod 3$.
- Biến thể: nền $N\times N$ khác lũy thừa 2, hoặc dùng gạch khác. Hãy đối chiếu cách chia này với [Giảm để trị và biến đổi để trị](#/courses/mat3504/lessons/mat3504-decrease-transform-conquer): ở đây ta đưa một bài toán về bốn bài toán nhỏ cùng dạng bằng bước chuẩn bị ở tâm.

## Tự kiểm tra

**Câu 1.** Cần bao nhiêu viên gạch cho nền $8\times8$ có một ô khuyết?

> **Đáp án**
> $(64-1)/3=21$ viên, trùng $(4^3-1)/3$.

**Câu 2.** Vì sao phải đặt viên gạch đầu tiên ở tâm mà không đặt ở nơi khác?

> **Đáp án**
> Để mỗi trong bốn góc phần tư có đúng một ô đã bị chiếm, nhờ đó bốn bài toán con cùng dạng nền $2^{n-1}$ có một ô khuyết. Đặt chỗ khác thì ít nhất một góc không có ô khuyết, hoặc có hai, và không còn đưa về cùng dạng.

**Câu 3.** Nền $4\times4$, ô khuyết ở (3,3). Viên gạch ở tâm phủ những ô nào?

> **Đáp án**
> Ô khuyết thuộc góc dưới phải, nên gạch tâm phủ ba ô sát tâm thuộc ba góc còn lại: (1,1), (1,2), (2,1).
