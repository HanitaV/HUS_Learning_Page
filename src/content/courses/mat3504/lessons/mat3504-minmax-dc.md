# MinMax chia để trị

## Bài toán

Cho dãy $a_1,\dots,a_n$. Tìm giá trị nhỏ nhất và lớn nhất của dãy, và đếm xem cần bao nhiêu phép so sánh. Cách ngây thơ dùng hai vòng lặp độc lập, một tìm min, một tìm max, tốn $2(n-1)$ phép so sánh và thời gian $O(n)$. Ví dụ: với $(3,9,1,7,5,2,8,4)$ kết quả là min $=1$, max $=9$. Mô phỏng bên dưới cho thấy hai nửa được xử lý riêng rồi gộp, theo kỹ thuật [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer).

## Kiến thức sử dụng

- [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer): chia dãy làm đôi, giải đệ quy từng nửa, gộp hai cặp (min, max).
- [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): trường hợp suy biến khi đoạn có một hoặc hai phần tử.
- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation) và [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method): lập $T(n)=2T(n/2)+2$ rồi thế lặp để đếm so sánh.
- [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness): chứng minh đúng bằng quy nạp theo độ dài đoạn.

## Phân tích

Nếu biết (min, max) của nửa trái và nửa phải, thì (min, max) của cả dãy là $\min(\min_1,\min_2)$ và $\max(\max_1,\max_2)$. Bước gộp tốn đúng 2 phép so sánh, không phụ thuộc $n$. Đoạn một hoặc hai phần tử giải trực tiếp: đoạn hai phần tử cần 1 phép so sánh để biết cái nào nhỏ, cái nào lớn.

Điểm thú vị: tổng số so sánh không phải $O(n)$ "như nhau", mà cụ thể giảm được hệ số, từ $2n$ xuống khoảng $1{,}5n$.

## Lời giải từng bước

Gọi `MinMax(a, 0, 7)` với $a=(3,9,1,7,5,2,8,4)$:

| Đoạn | Cách xử lý | (min, max) | So sánh |
|---|---|---|---|
| [0..1] = (3,9) | trực tiếp | (3, 9) | 1 |
| [2..3] = (1,7) | trực tiếp | (1, 7) | 1 |
| [0..3] | gộp | (1, 9) | 2 |
| [4..5] = (5,2) | trực tiếp | (2, 5) | 1 |
| [6..7] = (8,4) | trực tiếp | (4, 8) | 1 |
| [4..7] | gộp | (2, 8) | 2 |
| [0..7] | gộp | (1, 9) | 2 |

Tổng: $4\cdot1+3\cdot2=10$ phép so sánh, trong khi cách ngây thơ cần $2\cdot7=14$.

## Cài đặt

```java
static int[] minMax(int[] a, int left, int right) {
    if (right - left <= 1) {
        // đoạn 1 hoặc 2 phần tử
        return new int[]{Math.min(a[left], a[right]), Math.max(a[left], a[right])};
    }
    int mid = (left + right) / 2;
    int[] l = minMax(a, left, mid);
    int[] r = minMax(a, mid + 1, right);
    return new int[]{Math.min(l[0], r[0]), Math.max(l[1], r[1])};
}
```

Gọi `minMax(a, 0, n - 1)`, trả về mảng `{min, max}`. Với đoạn một phần tử, `left == right` nên `Math.min` và `Math.max` đều trả về chính nó (và lý thuyết đếm 0 so sánh thực sự). Phải đảm bảo $n\ge1$.

## Độ phức tạp

Số phép so sánh thỏa $T(2)=1$ và $T(n)=2T(n/2)+2$. Với $n=2^m$, thế lặp:

$$T(n)=2T(n/2)+2=2^2T(n/4)+2^2+2=\dots=2^{m-1}T(2)+2^{m-1}+\dots+2^1=\frac n2+(n-2)=\frac{3n}{2}-2.$$

| | Ngây thơ | Chia để trị |
|---|---|---|
| Số so sánh | $2(n-1)$ | $3n/2-2$ |
| Thời gian | $O(n)$ | $O(n)$ |
| Bộ nhớ ngăn xếp | $O(1)$ | $O(\log n)$ |

Với $n=8$: $3\cdot8/2-2=10$ khớp bảng trên. Cả hai đều $O(n)$, chỉ khác hằng số: số so sánh giảm còn khoảng $3/4$ so với cách ngây thơ. Slide của bài giảng tính ra $n-2$ và nói "khoảng một nửa", nhưng con số đó bỏ sót $n/2$ phép so sánh ở các đoạn hai phần tử; kết quả đúng là $3n/2-2$.

## Mở rộng

- Cách giảm để trị ([Giảm để trị và biến đổi để trị](#/courses/mat3504/lessons/mat3504-decrease-transform-conquer)): xét các phần tử theo từng cặp, so sánh cặp với nhau (1 lần), rồi lấy cái nhỏ so với min hiện tại, cái lớn so với max hiện tại (2 lần): tổng cũng khoảng $3n/2$.
- Bài tập chia để trị của lớp (mục 1: tìm lớn nhất và nhỏ nhất của mảng) chính là bài này; hãy cài đặt và đo thời gian thực nghiệm cùng [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen) và [Lát nền 2^n × 2^n bằng gạch chữ L](#/courses/mat3504/lessons/mat3504-tromino-tiling).
- Có thể chứng minh $\lceil 3n/2\rceil-2$ là cận dưới cho mọi thuật toán dựa trên so sánh.

## Tự kiểm tra

**Câu 1.** Chạy `minMax` trên $(5,1,4,2)$. Trả về gì, bao nhiêu phép so sánh?

> **Đáp án**
> (5,1) → (1,5); (4,2) → (2,4); gộp: min $=\min(1,2)=1$, max $=\max(5,4)=5$. Kết quả (1,5), tổng $1+1+2=4$ phép so sánh $=3\cdot4/2-2$.

**Câu 2.** Vì sao gộp chỉ cần 2 phép so sánh?

> **Đáp án**
> Một phép so sánh giữa hai min con, một phép giữa hai max con. Không cần so sánh min với max.

**Câu 3.** Nếu bỏ qua trường hợp suy biến $n=2$ và chỉ dừng ở $n=1$, số so sánh thay đổi thế nào?

> **Đáp án**
> $T(1)=0$, $T(n)=2T(n/2)+2$ cho $T(n)=2n-2$ (vì $T(2)=2$), bằng cách ngây thơ. Việc xử lý trực tiếp cặp hai phần tử bằng 1 phép so sánh mới là chỗ tiết kiệm.
