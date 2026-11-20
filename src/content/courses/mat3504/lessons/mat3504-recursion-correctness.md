# Chứng minh tính đúng bằng quy nạp

## Vì sao cần

Một thuật toán đệ quy gọi chính nó, nên không thể kiểm tra "từng bước" như vòng lặp. Để tin rằng nó trả kết quả đúng với mọi đầu vào, bạn dùng quy nạp theo kích thước bài toán. Cách này đi cùng cấu trúc của [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): trường hợp cơ sở của đệ quy chính là cơ sở quy nạp, còn lời gọi con là giả thiết quy nạp. Bài này cho bạn khuôn chứng minh dùng lại cho [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search), [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort), [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi) và các thuật toán [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer).

## Ý tưởng

Gọi $f(n)$ là hàm làm bài toán nhỏ đi sau mỗi lời gọi (ví dụ $n-1$, hoặc $\lfloor n/2\rfloor$). Khuôn chứng minh gồm bốn bước theo slide:

1. Chọn "kích thước" $n$ của bài toán (độ dài mảng, số đĩa, độ dài đoạn $R-L+1$...).
2. **Cơ sở**: chứng minh thuật toán đúng với trường hợp cơ sở của đệ quy.
3. **Giả thiết quy nạp**: giả sử các lời gọi con trên đầu vào nhỏ hơn (cỡ $f(n)$) trả kết quả đúng.
4. **Bước quy nạp**: dùng giả thiết đó để chứng minh lời gọi hiện tại, với kích thước $n$, trả kết quả đúng.

Với chia để trị, slide dùng cùng tinh thần trên "miền đầu vào" $R$: chứng minh đúng với $R_0$ (miền nhỏ nhất có lời giải trực tiếp), giả sử đúng với kích thước nhỏ hơn, rồi chứng minh bước **chia** và bước **kết hợp** cho ra lời giải đúng của $R$.

> Quy nạp chỉ chứng minh *đúng nếu dừng*. Việc thuật toán luôn dừng phải kiểm tra riêng: kích thước giảm thực sự sau mỗi lời gọi và luôn chạm tới trường hợp cơ sở.

## Ví dụ chạy tay

**Thuật toán** (tính tổng $1+2+\dots+n$):

```text
S(n):
    if n == 1: return 1
    return S(n - 1) + n
```

**Mệnh đề** $P(n)$: $S(n)=\dfrac{n(n+1)}{2}$ với mọi $n\ge1$.

- Cơ sở: $S(1)=1=\frac{1\cdot2}{2}$.
- Giả thiết: $S(n-1)=\frac{(n-1)n}{2}$ (lời gọi con đúng).
- Bước quy nạp: $S(n)=S(n-1)+n=\frac{(n-1)n}{2}+n=\frac{n(n+1)}{2}$.
- Dừng: đối số giảm 1 mỗi lần, mà $n\ge1$ nên chạm $n=1$.

Chạy với $n=4$ để thấy cấu trúc chứng minh trùng cấu trúc lời gọi:

| Lời gọi | Trả về | Dùng giả thiết |
|---|---|---|
| `S(1)` | 1 | cơ sở |
| `S(2)` | `S(1)+2 = 3` | `S(1)` đúng |
| `S(3)` | `S(2)+3 = 6` | `S(2)` đúng |
| `S(4)` | `S(3)+4 = 10` | `S(3)` đúng |

## Cài đặt

Ví dụ thứ hai là tìm kiếm nhị phân đệ quy trên mảng đã sắp. Kích thước bài toán là $m=R-L+1$.

```java
static int search(int[] a, int x, int l, int r) {
    if (l > r) return -1;                 // đoạn rỗng: không có x
    int mid = (l + r) / 2;
    if (a[mid] == x) return mid;
    if (a[mid] < x) return search(a, x, mid + 1, r);
    return search(a, x, l, mid - 1);
}
```

Chứng minh bằng quy nạp theo $m$ (quy nạp "mạnh": giả sử đúng với mọi kích thước nhỏ hơn $m$):

- Cơ sở $m=0$ ($l>r$): đoạn rỗng không chứa $x$, trả $-1$ là đúng.
- Bước quy nạp: nếu `a[mid] < x`, vì mảng tăng nên $x$ (nếu có) chỉ nằm ở `[mid+1, r]`, đoạn có độ dài nhỏ hơn $m$. Theo giả thiết lời gọi con đúng, kết quả của nó cũng là kết quả đúng của lời gọi hiện tại. Trường hợp `a[mid] > x` đối xứng.
- Dừng: độ dài đoạn giảm ít nhất 1 sau mỗi lời gọi.

## Độ phức tạp

Chứng minh đúng không cho biết thuật toán nhanh hay chậm. Thời gian chạy đo bằng công thức truy hồi trong [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation), rồi giải bằng [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method) hoặc [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem). Hai việc này luôn đi thành cặp: đúng (quy nạp) và nhanh (truy hồi).

## Lỗi thường gặp

- Chỉ kiểm tra cơ sở rồi "tin" bước quy nạp mà không dùng giả thiết cho lời gọi con thật sự được gọi.
- Quên một trường hợp cơ sở, ví dụ chỉ xét $n=1$ nhưng thuật toán Fibonacci cần cả $n=1$ và $n=2$ (xem [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci)).
- Giả sử đúng cho $n$ rồi chứng minh cho $n$ (vòng tròn). Giả thiết chỉ dành cho kích thước nhỏ hơn.
- Bỏ qua điều kiện của đầu vào. Tìm kiếm nhị phân chỉ đúng khi mảng đã sắp; chứng minh phải dùng tính chất đó.
- Quên chứng minh tính dừng: một lời gọi không làm kích thước giảm vẫn có thể "đúng" theo quy nạp nhưng lặp vô hạn.

## Luyện tập

- Viết lại chứng minh cho [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi): `MoveTower(n)` chuyển đúng $n$ đĩa từ cọc A sang cọc C mà không bao giờ đặt đĩa lớn lên đĩa nhỏ. Luyện chọn kích thước $n$ và dùng giả thiết hai lần.
- Chứng minh bước kết hợp của [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort): nếu hai nửa đã được sắp đúng thì phép trộn cho dãy sắp đúng.
- Bài tự luyện: chứng minh hàm `power(x, n)` trả $x^n$ với $n\ge0$ (`n == 0` trả 1; còn lại trả `x * power(x, n-1)`).

::: Đáp án bài tự luyện
Cơ sở: $n=0$ trả $1=x^0$. Giả thiết: `power(x, n-1)` $=x^{n-1}$. Bước: `power(x, n)` $=x\cdot x^{n-1}=x^n$. Đối số giảm 1 nên chạm $n=0$, thuật toán dừng.
:::

## Tự kiểm tra

**1.** Giả thiết "lời gọi con đúng" có cho phép bỏ qua chứng minh bước kết hợp không?

> **Đáp án**
> Không. Bước kết hợp (cách dùng kết quả lời gọi con) chính là phần cần chứng minh. Giả thiết chỉ cho bạn biết kết quả của lời gọi con đúng.

**2.** Hàm `F(n) = F(n/2) + 1` với `n` nguyên có cơ sở `F(1) = 0`. Nếu gọi `F(0)` thì chuyện gì xảy ra với chứng minh?

> **Đáp án**
> `0/2` vẫn là 0 nên không bao giờ chạm cơ sở `n = 1`: thuật toán không dừng. Quy nạp theo $n\ge1$ không áp dụng cho $n=0$. Phải thêm điều kiện đầu vào hoặc thêm cơ sở cho $n=0$.

**3.** (Vận dụng) Trong chứng minh tìm kiếm nhị phân, vì sao dùng quy nạp mạnh theo $m=R-L+1$ thay vì chỉ giả sử đúng cho $m-1$?

> **Đáp án**
> Lời gọi con có độ dài khoảng $m/2$, không phải $m-1$. Do đó giả thiết cần là: đúng với mọi độ dài nhỏ hơn $m$.
