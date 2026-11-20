# Đếm tổ hợp C(r, n) bằng bảng

## Vì sao cần

Số cách chọn $r$ phần tử từ $n$ phần tử là ví dụ mở đầu của slide để thấy [quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) cứu một thuật toán đệ quy mũ. Công thức đệ quy rất ngắn, nhưng cùng một giá trị bị tính lại nhiều lần. Bảng hai chiều dưới đây chính là tam giác Pascal. Bạn có thể xem mô phỏng ngay dưới để thấy từng ô được cộng từ hai ô hàng trên.

## Phát biểu

Ký hiệu của slide: $C(r,n)$ là số cách chọn $r$ phần tử từ $n$ phần tử (ngày nay thường viết $\binom{n}{r}$).

Phân tích theo phần tử đầu: hoặc chọn nó (còn chọn $r-1$ từ $n-1$), hoặc không chọn (chọn $r$ từ $n-1$):

$$
C(r,n)=C(r-1,n-1)+C(r,n-1),\qquad C(0,n)=C(n,n)=1.
$$

Với bảng $C(i,j)$ (chọn $i$ từ $j$ phần tử, $0\le i\le j$):

- Cơ sở: $C(0,j)=1$ và $C(i,i)=1$.
- Truy hồi: $C(i,j)=C(i-1,j-1)+C(i,j-1)$ với $1\le i<j$.
- Đáp án: $C(r,n)$, ô dưới phải của vùng cần tính.

## Giải thích / chứng minh

Đệ quy thuần túy `Choose(r,n)` có thời gian $T(n)=2T(n-1)+1=O(2^n)$ và giải lại cùng bài con (ví dụ $C(2,3)$ xuất hiện nhiều lần khi tính $C(3,5)$), đây là hiện tượng bài toán con chồng lấp.

Tính đúng của bảng: bằng quy nạp theo $j$. Hàng 0 và đường chéo $C(i,i)$ đúng theo cơ sở. Với ô $(i,j)$, hai ô $(i-1,j-1)$ và $(i,j-1)$ có chỉ số cột nhỏ hơn $j$ nên đã đúng theo giả thiết quy nạp, và công thức truy hồi cho giá trị đúng.

Chỉ cần tính các ô nằm trong dải thật sự cần tới $C(r,n)$: với hàng $i$ chỉ cần các cột $j$ từ $i$ đến $n-r+i$. Đó là lý do vòng lặp trong slide chạy $j=i+1\dots n-r+i$.

## Ví dụ tính

Bảng $C(i,j)$ để tính $C(2,5)$, hàng $i=0..2$, cột $j=0..5$ (ô trống nghĩa là $i>j$, không dùng):

| $i\backslash j$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | | 1 | 2 | 3 | 4 | 5 |
| 2 | | | 1 | 3 | 6 | 10 |

Ví dụ $C(2,4)=C(1,3)+C(2,3)=3+3=6$ và $C(2,5)=C(1,4)+C(2,4)=4+6=10$. Vậy chọn 2 phần tử từ 5 có 10 cách.

## Cài đặt

Theo slide (chỉ điền dải cần thiết):

```text
Choose(r, n):
    for i = 1..r:      C[i][i] = 1
    for j = 0..n-r:    C[0][j] = 1
    for i = 1..r:
        for j = i+1 .. n-r+i:
            C[i][j] = C[i-1][j-1] + C[i][j-1]
    return C[r][n]
```

Java bản đơn giản (điền cả bảng $0..r$ nhân $0..n$):

```java
static long choose(int r, int n) {
    long[][] c = new long[r + 1][n + 1];
    for (int j = 0; j <= n; j++) c[0][j] = 1;
    for (int i = 1; i <= r; i++) {
        for (int j = i; j <= n; j++) {
            if (i == j) c[i][j] = 1;
            else c[i][j] = c[i - 1][j - 1] + c[i][j - 1];
        }
    }
    return c[r][n];
}
```

Kiểu `long` đủ cho các giá trị cỡ $C(30,60)$; lớn hơn nữa cần `BigInteger`.

## Áp dụng ở đâu

Cách điền bảng này là mẫu cho mọi bài QHĐ hai chiều: bảng có viền cơ sở, mỗi ô cộng hoặc lấy tối ưu từ các ô đã có. Bạn sẽ gặp lại cấu trúc ô $(i,j)$ phụ thuộc $(i-1,j-1)$ và $(i,j-1)$ ở [Dãy con chung dài nhất của hai dãy](#/courses/mat3504/lessons/mat3504-lcs) và [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01). Phân tích chi phí của đệ quy dùng [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation).

Độ phức tạp theo slide: thời gian $(r+1)(n-r+1)\le n(r+1)+1=O(n^2)$, so với $O(2^n)$ của đệ quy; bộ nhớ tệ nhất $O(nr)$, tốt nhất $O(r)$ khi chọn $r$ nhỏ hoặc cuộn hàng.

## Lỗi thường gặp

- Quên cơ sở $C(i,i)=1$, làm ô đường chéo bằng 0.
- Điền theo thứ tự cột sai hoặc gọi $C(i,j)$ với $i>j$.
- Khai báo bảng $r\times n$ thay vì $(r+1)\times(n+1)$, mất hàng 0, cột 0.
- Dùng `int` và tràn số khi $n$ cỡ 40 trở lên.
- Không tận dụng $C(r,n)=C(n-r,n)$ để đổi sang $r$ nhỏ hơn.

## Tự kiểm tra

**1. Điền hàng $i=3$ của bảng trên cho $j=3,4,5$.**

> **Đáp án**
> $C(3,3)=1$; $C(3,4)=C(2,3)+C(3,3)=3+1=4$; $C(3,5)=C(2,4)+C(3,4)=6+4=10$. Khớp $C(3,5)=C(2,5)=10$.

**2. Vì sao đệ quy `Choose` chậm còn bảng thì nhanh?**

> **Đáp án**
> Đệ quy tính lại các $C(i,j)$ trùng nhau (chồng lấp), số lời gọi tăng như $2^n$. Bảng tính mỗi ô một lần, khoảng $(r+1)(n-r+1)$ ô.

**3. Tính $C(3,6)$ bằng bảng (chỉ ghi các ô cần).**

> **Đáp án**
> Hàng 1: $1,2,3,4,5,6$ ở $j=1..6$. Hàng 2: $j=2..5$ là $1,3,6,10$ và $C(2,6)=15$. Hàng 3: $C(3,3)=1$, $C(3,4)=4$, $C(3,5)=10$, $C(3,6)=C(2,5)+C(3,5)=10+10=20$.
