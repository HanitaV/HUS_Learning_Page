# Số Fibonacci

## Bài toán

Dãy Fibonacci được định nghĩa bởi $F(1)=F(2)=1$ và $F(n)=F(n-1)+F(n-2)$ với $n>2$: $1,1,2,3,5,8,13,\dots$. Input là số nguyên $n\ge1$, output là $F(n)$. Bài này là ví dụ điển hình cho thấy đệ quy đúng nhưng chậm, và cách sửa là lưu lại kết quả các bài toán con, ý tưởng gốc của [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming). Mô phỏng bên dưới cho thấy cây lời gọi.

## Kiến thức sử dụng

- [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): công thức truy hồi viết gần như nguyên văn thành code, với trường hợp suy biến $n=1$ hoặc $n=2$.
- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation): lập công thức cho số lời gọi để thấy tăng theo hàm mũ.
- [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming): nhận ra các bài toán con trùng lặp và lưu bảng $F_1,\dots,F_n$.

## Phân tích

Lời giải đệ quy trực tiếp:

```text
Fib(n)
    if (n = 1 or n = 2) Fib = 1
    else Fib = Fib(n-1) + Fib(n-2)
End.
```

Cái sai nằm ở hiệu năng: `Fib(n-1)` lại gọi `Fib(n-2)` và `Fib(n-3)`, trong khi `Fib(n)` cũng gọi `Fib(n-2)`. Cùng một giá trị bị tính đi tính lại nhiều lần: đây là các **bài toán con gối nhau** (overlapping subproblems). Cách chữa: tính xong thì ghi vào bảng, lần sau tra bảng.

## Lời giải từng bước

Đếm lời gọi khi tính `Fib(5)` theo định nghĩa trên:

| Giá trị gọi | Số lần được gọi |
|---|---|
| Fib(5) | 1 |
| Fib(4) | 1 |
| Fib(3) | 2 |
| Fib(2) | 3 |
| Fib(1) | 2 |

Tổng cộng 9 lời gọi để tính một giá trị chỉ cần 3 phép cộng. Gọi $C(n)$ là số lời gọi: $C(1)=C(2)=1$, $C(n)=C(n-1)+C(n-2)+1$, nên $C(3)=3$, $C(4)=5$, $C(5)=9$, $C(6)=15$. Số lời gọi tăng theo hàm mũ.

Có ghi nhớ: tính `fib(5)` với `memo` rỗng.

| Bước | Hành động | memo[2..5] |
|---|---|---|
| 1 | đi xuống tới fib(1)=1, fib(0)=0 | |
| 2 | memo[2] = 1 + 0 = 1 | 1 |
| 3 | memo[3] = memo[2] + fib(1) = 2 | 1, 2 |
| 4 | memo[4] = memo[3] + memo[2] = 3 | 1, 2, 3 |
| 5 | memo[5] = memo[4] + memo[3] = 5 | 1, 2, 3, 5 |

Mỗi giá trị chỉ được tính một lần.

## Cài đặt

Phiên bản đệ quy có ghi nhớ (quy ước thêm $F(0)=0$ để mã gọn):

```java
static long fib(int n, long[] memo) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

Gọi bằng `fib(n, new long[n + 1])`. Phiên bản lặp từ dưới lên, đúng theo bảng $F_1\to F_2\to\dots\to F_n$ của bài giảng quy hoạch động, và chỉ cần hai biến:

```java
static long fibIterative(int n) {
    if (n <= 1) return n;
    long prev = 0;
    long curr = 1;
    for (int i = 2; i <= n; i++) {
        long next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
```

## Độ phức tạp

| Cách | Thời gian | Bộ nhớ |
|---|---|---|
| Đệ quy trực tiếp | $O(2^n)$ (chính xác $\Theta(\varphi^n)$, $\varphi\approx1{,}618$) | $O(n)$ ngăn xếp |
| Đệ quy có ghi nhớ | $O(n)$ | $O(n)$ |
| Vòng lặp hai biến | $O(n)$ | $O(1)$ |

Cận $O(2^n)$ là cận trên đơn giản từ $C(n)\le 2C(n-1)$; xem cách phân tích ở [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation). Lưu ý: $F(93)$ đã vượt khoảng giá trị của `long`, nên với $n$ lớn cần `BigInteger`.

## Mở rộng

- Cùng ý tưởng "lưu bảng" dùng cho [Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp) (tính tổ hợp $C(r,n)$) và [Đường đi tổng lớn nhất trong bảng số](#/courses/mat3504/lessons/mat3504-grid-path-dp).
- Có thể tính $F(n)$ trong $O(\log n)$ bằng lũy thừa ma trận $\begin{pmatrix}1&1\\1&0\end{pmatrix}^{n}$.
- So với [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi): cũng đệ quy hai nhánh nhưng các nhánh của Hà Nội không trùng nhau nên $2^n-1$ là bắt buộc.

## Tự kiểm tra

**Câu 1.** Vì sao Fibonacci đệ quy trực tiếp chậm?

> **Đáp án**
> Các lời gọi con trùng lặp (ví dụ `Fib(3)` được tính nhiều lần), nên số lời gọi tăng theo hàm mũ dù chỉ cần $n$ giá trị khác nhau.

**Câu 2.** Tính $F(8)$ bằng vòng lặp, ghi lại các giá trị.

> **Đáp án**
> $F_1..F_8 = 1,1,2,3,5,8,13,21$. Vậy $F(8)=21$.

**Câu 3.** Với `memo` như trên, số phép cộng để tính `fib(n)` là bao nhiêu và vì sao?

> **Đáp án**
> Khoảng $n-1$ phép cộng: mỗi $memo[k]$ với $k=2..n$ chỉ được điền một lần, sau đó chỉ được tra bảng.
