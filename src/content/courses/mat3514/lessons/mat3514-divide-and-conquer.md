# Chia để trị

## Vì sao cần

Bài toán lớn thường khó, nhưng nếu cắt được thành các phần nhỏ cùng dạng thì mỗi phần dễ hơn nhiều, và có thể đưa cho [Đệ quy](#/courses/mat3514/lessons/mat3514-recursion) xử lý. **Chia để trị** (divide and conquer, D&C) là kỹ thuật thiết kế thuật toán dựa trên đệ quy theo cách đó, và là nguồn gốc của [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort), [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort) và [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search). Mô phỏng bên dưới cho thấy dữ liệu bị chia dần cho tới khi đủ nhỏ để giải trực tiếp.

## Ý tưởng

Ba bước của chiến lược:

1. **Chia** (divide): tách bài toán thành các bài toán con cùng loại, thường kích thước nhỏ hơn.
2. **Trị** (conquer): giải từng bài toán con bằng đệ quy; bài đủ nhỏ thì giải trực tiếp (trường hợp suy biến).
3. **Gộp** (combine): ghép lời giải các bài toán con thành lời giải bài toán ban đầu.

Lược đồ theo bài giảng, với $R$ là miền dữ liệu đầu vào và $R_0$ là miền nhỏ nhất có lời giải trực tiếp:

```text
D&C(R)
    if (R = R0)
        lấy lời giải D&C(R0)
    else
        chia R thành R1, R2, ..., Rn
        for (i = 1..n) D&C(Ri)
        gộp các lời giải
    endif
End.
```

### Chứng minh tính đúng

Chứng minh bằng quy nạp theo kích thước miền dữ liệu (xem [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness)): cơ sở là lời giải trường hợp suy biến đúng; giả thiết quy nạp là thuật toán đúng với mọi miền nhỏ hơn; bước quy nạp là các bài toán con thỏa giả thiết và bước gộp tạo ra lời giải đúng cho bài toán lớn. Điều kiện kèm theo: các miền con phải thật sự nhỏ hơn miền gốc.

### Thời gian chạy

Nếu chia thành $a$ bài toán con kích thước $n/b$ và chia cùng gộp tốn $O(n^d)$ thì

$$T(n)=aT(n/b)+n^d\quad(a\ge1,\ b>1,\ d\ge0).$$

Giải bằng [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem):

$$T(n)=\begin{cases}O(n^d) & a<b^d\\ O(n^d\log n) & a=b^d\\ O(n^{\log_b a}) & a>b^d\end{cases}$$

Công thức truy hồi được lập ở [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation).

## Ví dụ chạy tay

Tìm nhị phân $x=23$ trong dãy đã sắp $(2,5,8,12,16,23,38)$ với `L=0`, `R=6`:

| Bước | L | R | M | $a_M$ | So sánh | Hành động |
|---|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 12 | $23>12$ | tìm nửa phải: L = 4 |
| 2 | 4 | 6 | 5 | 23 | bằng | trả về 5 |

Mỗi bước chia đôi miền tìm, bỏ nửa không chứa $x$ nên không cần gộp. Với Merge Sort trên $(38,27,43,3)$: chia thành $(38,27)$ và $(43,3)$, mỗi nửa chia tiếp thành phần tử đơn, rồi gộp $(27,38)$ và $(3,43)$, rồi gộp thành $(3,27,38,43)$. Ở đây phần việc nặng nằm ở bước gộp.

## Cài đặt

Khung tổng quát của một bài D&C trên mảng:

```java
static int solve(int[] a, int left, int right) {
    if (left == right) {                  // trường hợp suy biến
        return a[left];
    }
    int mid = (left + right) / 2;         // chia
    int leftResult = solve(a, left, mid); // trị
    int rightResult = solve(a, mid + 1, right);
    return Math.max(leftResult, rightResult); // gộp
}
```

Hàm này tìm phần tử lớn nhất; thay bước gộp thì thành bài toán khác, như trong [MinMax chia để trị](#/courses/mat3504/lessons/mat3504-minmax-dc).

## Độ phức tạp

| Bài toán | $a$ | $b$ | $d$ | Kết quả |
|---|---|---|---|---|
| Tìm nhị phân | 1 | 2 | 0 | $a=b^d$: $O(\log n)$ |
| Merge Sort | 2 | 2 | 1 | $a=b^d$: $O(n\log n)$ |
| Nhân ma trận chia khối thường | 8 | 2 | 2 | $a>b^d$: $O(n^3)$ |
| [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen) | 7 | 2 | 2 | $a>b^d$: $O(n^{\log_2 7})\approx O(n^{2{,}81})$ |

Bộ nhớ ngăn xếp lời gọi bằng độ sâu đệ quy, thường $O(\log n)$ khi chia đôi (riêng Quick Sort xấu nhất là $O(n)$).

## Lỗi thường gặp

- Chia không thu nhỏ bài toán, ví dụ dùng `mid = (left + right + 1) / 2` rồi gọi lại `[left, mid]`: khi `right == left + 1` thì `mid == right`, miền con bằng miền gốc và đệ quy không dừng.
- Sai điểm chia giữa hai nửa: để phần tử `mid` nằm trong cả hai nửa hoặc bị mất khỏi cả hai.
- Quên trường hợp suy biến cho kích thước 0 hoặc 1 (mảng rỗng).
- Bỏ qua chi phí bước gộp, nên ước lượng sai độ phức tạp (chia đôi chưa chắc ra $O(\log n)$).
- Áp dụng D&C khi các bài toán con trùng nhau; khi đó nên dùng [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming).

## So sánh / liên hệ

Chia để trị là một trong ba cách "đơn giản hóa và trị"; hai cách còn lại là giảm để trị và biến đổi để trị, xem [Giảm để trị và biến đổi để trị](#/courses/mat3504/lessons/mat3504-decrease-transform-conquer). Khác với [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming), D&C có các bài toán con độc lập, không gối nhau.

## Luyện tập

- [MinMax chia để trị](#/courses/mat3504/lessons/mat3504-minmax-dc): gộp kết quả hai nửa để tìm min và max, đếm số phép so sánh.
- [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen): giảm số phép nhân khối từ 8 xuống 7 để hạ bậc thời gian.
- [Lát nền 2^n × 2^n bằng gạch chữ L](#/courses/mat3504/lessons/mat3504-tromino-tiling): chia nền $2^n\times2^n$ thành 4 góc phần tư.
- [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort) và [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort): hai cách khác nhau đặt công việc ở bước gộp hoặc bước chia.
- Tự luyện: dùng D&C viết hàm tính tổng mảng và lập $T(n)$.

> **Đáp án**
> `sum(a, l, r)`: nếu $l=r$ trả về $a_l$; ngược lại trả về `sum(a,l,m) + sum(a,m+1,r)` với $m=\lfloor(l+r)/2\rfloor$. $T(n)=2T(n/2)+1$, nên $a=2,b=2,d=0$, $a>b^d$ và $T(n)=O(n)$, bằng vòng lặp thường.

## Tự kiểm tra

**Câu 1.** Ba bước của chia để trị là gì? Bước nào là việc chính của Merge Sort, bước nào của Quick Sort?

> **Đáp án**
> Chia, trị, gộp. Merge Sort làm nhẹ bước chia (cắt đôi) và dồn việc vào bước gộp (trộn hai mảng đã sắp). Quick Sort làm việc nặng ở bước chia (phân hoạch quanh chốt) và gần như không phải gộp.

**Câu 2.** Cho $T(n)=3T(n/2)+n$. Dùng định lý chính suy ra bậc.

> **Đáp án**
> $a=3,b=2,d=1$; $b^d=2<3=a$ nên $T(n)=O(n^{\log_2 3})\approx O(n^{1{,}585})$.

**Câu 3.** Vì sao tìm nhị phân vẫn là D&C dù không có bước gộp?

> **Đáp án**
> Nó chia bài toán thành hai nửa nhưng chỉ cần trị một nửa; kết quả nửa đó chính là lời giải, nên bước gộp trống. $T(n)=T(n/2)+1$.
