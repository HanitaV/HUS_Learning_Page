# Quy hoạch động

## Vì sao cần

Nhiều bài toán có công thức [đệ quy](#/courses/mat3504/lessons/mat3504-recursion) rất gọn, nhưng khi chạy thì cùng một bài toán con bị giải lại hàng nghìn lần. Số Fibonacci là ví dụ quen thuộc: cài đặt trực tiếp từ định nghĩa cho thời gian $O(2^n)$. Quy hoạch động (QHĐ, dynamic programming) khắc phục bằng cách giải mỗi bài toán con đúng một lần và ghi kết quả vào bảng. Thuật ngữ do Richard Bellman đặt vào thập niên 1950; chữ "programming" ở đây nghĩa là lập kế hoạch, không phải lập trình máy tính. Mô phỏng bên dưới cho bạn thấy bảng được điền dần từ bài toán nhỏ đến bài toán lớn.

## Ý tưởng

QHĐ giải bài toán theo nguyên tắc của slide:

1. Giải các bài toán con nhỏ hơn (chồng lấp nhau), mỗi bài một lần.
2. Ghi lời giải vào bảng.
3. Kết hợp kết quả đã ghi để ra lời giải bài toán lớn.

**Khi nào áp dụng được.** Bài toán là tối ưu (tìm *một* nghiệm có giá trị lớn nhất hoặc nhỏ nhất), có cấu trúc đệ quy, và các bài toán con **chồng lấp**. Nếu các bài toán con không chồng lấp thì [chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer) đã đủ.

**Hai cách lưu kết quả.**

| Cách | Hướng tính | Đặc điểm |
|---|---|---|
| Bảng phương án (tabulation) | Bottom-up: từ bài nhỏ nhất lên bài lớn | Điền bảng theo thứ tự phụ thuộc, không đệ quy |
| Ghi nhớ (memoization) | Top-down: từ bài gốc xuống, gặp bài con lần đầu thì tính và lưu | Giữ dạng đệ quy, chỉ tính các bài con thật sự cần |

Slide tập trung vào cách điền bảng bottom-up, nên các bài sau đều viết theo cách đó.

**So với chia để trị và đệ quy thuần túy.** Đệ quy đi từ bài lớn xuống bài nhỏ cho tới trường hợp suy biến và có thể giải lặp cùng một bài toán. QHĐ giải bài nhỏ trước, lưu kết quả tối ưu và dùng cho bài lớn hơn, mỗi bài chỉ giải một lần.

## Ví dụ chạy tay

### Fibonacci: đếm số lần gọi

$F(n)=F(n-1)+F(n-2)$, $F(1)=F(2)=1$. Gọi $F(5)$ bằng đệ quy gọi $F(3)$ hai lần, $F(2)$ ba lần, $F(1)$ hai lần. Với bảng:

| $i$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $F(i)$ | 1 | 1 | 2 | 3 | 5 | 8 |

Mỗi ô tính bằng một phép cộng hai ô trước: $n-2$ phép cộng thay vì $O(2^n)$ lời gọi. Xem thêm [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci).

### Đếm số cách chọn $r$ trong $n$ phần tử

Chia để trị: chọn hoặc không chọn phần tử đầu, $C(r,n)=C(r-1,n-1)+C(r,n-1)$, thời gian $T(n)=2T(n-1)+1=O(2^n)$ vì lặp lại bài con. Dùng bảng $C(i,j)$ thì chỉ cần $O(nr)$. Bài [Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp) làm chi tiết ví dụ này.

## Cài đặt

Fibonacci theo hai cách:

```java
// Bottom-up: điền bảng từ nhỏ đến lớn
static long fibTable(int n) {
    if (n <= 2) return 1;
    long[] f = new long[n + 1];
    f[1] = f[2] = 1;
    for (int i = 3; i <= n; i++) f[i] = f[i - 1] + f[i - 2];
    return f[n];
}

// Top-down có ghi nhớ
static long fibMemo(int n, long[] memo) {
    if (n <= 2) return 1;
    if (memo[n] != 0) return memo[n];          // đã tính rồi
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
```

Khung chung của một lời giải QHĐ gồm công thức truy hồi, cơ sở, bảng phương án, kết quả và truy vết. Năm yếu tố này được tách riêng ở [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements).

## Độ phức tạp

Thời gian bằng số ô trong bảng nhân với chi phí mỗi ô. Slide ước lượng $O(n^k)$ cho bảng $k$ chiều.

| Bài | Số trạng thái | Thời gian | Bộ nhớ |
|---|---|---|---|
| Fibonacci | $n$ | $O(n)$ | $O(n)$, có thể $O(1)$ |
| Đếm tổ hợp | $r\times(n-r)$ | $O(r(n-r))$ | $O(r(n-r))$ |
| Dãy con tăng dài nhất | $n$ (mỗi ô xét $n$ ô trước) | $O(n^2)$ | $O(n)$ |
| Balo 0-1 | $n\times W$ | $O(nW)$ | $O(nW)$ |
| Dãy con chung dài nhất | $m\times n$ | $O(mn)$ | $O(mn)$ |

Phần truy vết thường rẻ hơn nhiều so với điền bảng. Bộ nhớ thường là điểm yếu: có thể giảm bằng cách chỉ giữ những hàng còn cần. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) và [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation) để so với đệ quy thuần túy.

## Lỗi thường gặp

- Dùng QHĐ cho bài không có bài toán con chồng lấp, chỉ tốn thêm bộ nhớ so với [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer).
- Cho rằng QHĐ luôn tốt hơn đệ quy. Slide lưu ý không phải bài nào giải bằng QHĐ cũng hiệu quả hơn, chẳng hạn balo 0-1 với dữ liệu lớn: bảng $n\times W$ có thể rất lớn khi $W$ lớn.
- Điền bảng sai thứ tự: tính ô $(i,j)$ khi các ô nó phụ thuộc chưa có.
- Quên ghi nhớ trong cách top-down (không kiểm tra `memo` trước khi tính), kết quả đúng nhưng vẫn là $O(2^n)$.
- Nhầm giá trị bảng với đáp án: đáp án có thể nằm ở một ô cuối, hoặc là giá trị lớn nhất trong cả hàng (như dãy con tăng dài nhất).

## So sánh / liên hệ

[Tham lam](#/courses/mat3504/lessons/mat3504-greedy-method) chọn ngay một phương án; QHĐ xét mọi bài toán con nên giải được những bài như [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01) mà tham lam không đảm bảo. Khác với [vét cạn](#/courses/mat3504/lessons/mat3504-brute-force), QHĐ dùng lại kết quả nên thời gian thường là đa thức thay vì hàm mũ. [Thuật toán Floyd](#/courses/mat3504/lessons/mat3504-floyd) tìm đường đi ngắn nhất giữa mọi cặp đỉnh cũng là QHĐ.

## Luyện tập

- [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci): so sánh đệ quy, ghi nhớ và điền bảng.
- [Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp): điền bảng 2 chiều kiểu tam giác Pascal.
- [Dãy con tăng dài nhất](#/courses/mat3504/lessons/mat3504-lis), [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01), [Đường đi tổng lớn nhất trong bảng số](#/courses/mat3504/lessons/mat3504-grid-path-dp), [Dãy con chung dài nhất của hai dãy](#/courses/mat3504/lessons/mat3504-lcs): bốn bài mẫu với bảng 1 chiều và 2 chiều.
- [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp): các bài tập tuần về QHĐ.

## Tự kiểm tra

**1. Vì sao cài đặt đệ quy trực tiếp của Fibonacci có $O(2^n)$ lời gọi còn bảng thì $O(n)$?**

> **Đáp án**
> Đệ quy giải lại cùng một $F(k)$ rất nhiều lần (bài toán con chồng lấp). Bảng chỉ tính mỗi $F(k)$ một lần và dùng lại.

**2. Phân biệt bảng phương án (bottom-up) và ghi nhớ (top-down).**

> **Đáp án**
> Bottom-up điền bảng theo thứ tự từ bài nhỏ nhất lên bài lớn. Top-down đệ quy từ bài gốc và lưu kết quả mỗi lần giải xong một bài con, nên chỉ tính những bài con thực sự cần.

**3. Bài toán tìm số lớn nhất của dãy bằng cách chia đôi dãy có nên dùng QHĐ không?**

> **Đáp án**
> Không. Hai nửa là hai bài toán con độc lập, không chồng lấp, nên chia để trị đủ dùng; lưu bảng không giúp gì.
