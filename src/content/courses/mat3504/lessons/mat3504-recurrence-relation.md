# Công thức truy hồi cho thời gian chạy

## Vì sao cần

Để biết một thuật toán đệ quy chạy nhanh hay chậm, bạn không đếm được từng dòng lệnh như với vòng lặp. Thay vào đó, bạn viết thời gian $T(n)$ thành một **công thức truy hồi** (recurrence): thời gian của bài toán cỡ $n$ bằng thời gian các lời gọi con cộng với phần việc ngoài đệ quy. Bài này dạy cách lập công thức từ code của [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion); các bài [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method) và [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) dạy cách giải nó thành dạng $O(\cdot)$ như trong [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Ý tưởng

Theo slide, lập công thức qua các bước:

1. Xác định "kích thước" $n$ của bài toán.
2. Xác định giá trị $n_0$ là trường hợp cơ sở và thời gian $T(n_0)$ (thường là một hằng $c$).
3. Với $n$ lớn: $T(n)$ bằng tổng thời gian của các lời gọi con (mỗi lời gọi có kích thước $f(n)$) cộng thời gian phần không đệ quy (chia, kết hợp, so sánh...).

Các dạng thường gặp:

| Dạng | Ví dụ thuật toán |
|---|---|
| $T(n)=T(n-1)+\text{hằng}$ hoặc $+n$ | duyệt đệ quy, tính tổng |
| $T(n)=2T(n-1)+1$ | [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi) |
| $T(n)=T(n-1)+T(n-2)+1$ | Fibonacci đệ quy ([Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci)) |
| $T(n)=aT(n/b)+n^d$ | chia để trị ([Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer)) |

## Ví dụ chạy tay

Ba ví dụ trong slide:

**Tổng $S(n)$**: `if n == 1 return 1; return S(n-1) + n`. Cơ sở $T_S(1)=1$. Ngoài đệ quy chỉ có một phép cộng (hằng 1), và có một lời gọi con cỡ $n-1$. Vậy $T_S(n)=T_S(n-1)+1$.

**Fibonacci** `Fib(n) = Fib(n-1) + Fib(n-2)`: hai lời gọi con, một phép cộng. $T(n)=T(n-1)+T(n-2)+1$ với $T(1)=T(2)=1$.

**Tháp Hà Nội** `MoveTower(n, A, B, C)`: chuyển $n-1$ đĩa sang cọc phụ, chuyển một đĩa lớn nhất, chuyển $n-1$ đĩa về. Số bước $T(n)=2T(n-1)+1$ với $T(1)=1$.

Kiểm tra số cho tháp Hà Nội:

| $n$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $T(n)$ | 1 | $2\cdot1+1=3$ | $2\cdot3+1=7$ | $2\cdot7+1=15$ |

Dãy $1,3,7,15$ gợi dạng $2^n-1$; [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method) sẽ chứng minh điều này.

## Cài đặt

Mỗi công thức đọc trực tiếp từ code. Ví dụ cài đặt tháp Hà Nội có đếm số bước:

```java
static long moves = 0;

static void moveTower(int n, char a, char b, char c) {
    if (n == 1) {              // cơ sở: T(1) = 1
        moves++;
        return;
    }
    moveTower(n - 1, a, c, b); // T(n-1)
    moves++;                   // việc ngoài đệ quy: 1
    moveTower(n - 1, b, a, c); // T(n-1)
}
```

Gọi `moveTower(4, 'A', 'B', 'C')` cho `moves = 15`, khớp $T(4)=15$.

## Độ phức tạp

Công thức truy hồi chưa phải độ phức tạp, vì nó còn là một hệ thức tự tham chiếu. Có hai cách quy ra dạng đóng:

- Khai triển lặp ([Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method)) cho mọi dạng, đặc biệt dạng giảm một đơn vị.
- [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) cho dạng chia $T(n)=aT(n/b)+n^d$.

Tính đúng của thuật toán là chuyện khác, xem [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness).

## Lỗi thường gặp

- Quên điều kiện đầu: $T(1)$ (hoặc $T(0)$) quyết định hằng số. Hai công thức giống nhau mà $T(1)$ khác nhau cho kết quả khác nhau (nhưng thường cùng bậc).
- Đếm sai số lời gọi con: Fibonacci có **hai** lời gọi, không phải một.
- Nhầm kích thước: với tháp Hà Nội kích thước là số đĩa, không phải số bước.
- Gán sai bậc cho phần ngoài đệ quy. Phần trộn của [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort) là $n$, còn phần chia của tìm kiếm nhị phân chỉ là hằng.
- Viết $T(n/2)$ khi $n$ lẻ mà không nói rõ lấy phần nguyên; các bài ở đây giả sử $n$ là lũy thừa của $b$.

## Luyện tập

- [Bài tập: giải công thức truy hồi](#/courses/mat3504/lessons/mat3504-hw-recurrences): lập rồi giải các công thức truy hồi trong phiếu bài tập.
- [MinMax chia để trị](#/courses/mat3504/lessons/mat3504-minmax-dc): lập $T(n)=2T(n/2)+2$ cho số phép so sánh.
- Bài tự luyện: lập công thức cho `binarySearch` đệ quy và cho [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort).

::: Đáp án bài tự luyện
Tìm kiếm nhị phân: một phép so sánh rồi một lời gọi trên nửa đoạn, $T(n)=T(n/2)+1$, $T(1)=1$. Merge Sort: hai lời gọi nửa mảng và trộn tuyến tính, $T(n)=2T(n/2)+n$.
:::

## Tự kiểm tra

**1.** Số $1$ trong $T(n)=2T(n-1)+1$ của tháp Hà Nội biểu diễn thao tác nào?

> **Đáp án**
> Một lần chuyển đĩa lớn nhất giữa hai lời gọi xử lý $n-1$ đĩa nhỏ.

**2.** Lập công thức cho hàm `f(n)`: gọi `f(n-1)` hai lần rồi chạy một vòng lặp $n$ bước.

> **Đáp án**
> $T(n)=2T(n-1)+n$ (kèm điều kiện đầu như $T(1)=c$).

**3.** (Vận dụng) Vì sao Fibonacci đệ quy chậm hơn nhiều so với $S(n)$ dù mỗi lời gọi chỉ cộng một lần?

> **Đáp án**
> $S(n)$ có một lời gọi con ($T(n)=T(n-1)+1$, tuyến tính). Fibonacci có hai lời gọi lặp lại các bài toán con nên $T(n)=T(n-1)+T(n-2)+1$ tăng theo hàm mũ.
