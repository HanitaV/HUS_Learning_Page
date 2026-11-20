# Tìm kiếm nhị phân

## Vì sao cần

[Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search) phải xem tới $n$ phần tử. Nhưng nếu dãy đã được sắp ([Bài toán sắp xếp](#/courses/mat3504/lessons/mat3504-sorting-problem)), mỗi phép so sánh cho ta nhiều thông tin hơn: so $x$ với phần tử ở giữa thì biết ngay $x$ nằm ở nửa nào, nửa kia loại hẳn. Đó là tìm kiếm nhị phân (binary / bisection search), một ví dụ điển hình của [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer), chạy trong $O(\log n)$. Mô phỏng bên dưới thu hẹp đoạn tìm kiếm sau mỗi bước.

## Ý tưởng

**Bài toán (slide):** đầu vào là danh sách *đã sắp* $(a_1, \dots, a_n)$ và $x$; đầu ra là vị trí $i$ sao cho $a_i = x$, hoặc $-1$ nếu không có.

**Cách làm:** so sánh $x$ với phần tử giữa $a_M$ của đoạn đang xét $[L, R]$:

- $x = a_M$: trả về $M$.
- $x < a_M$: tìm tiếp ở nửa trái.
- $x > a_M$: tìm tiếp ở nửa phải.

**Bất biến:** nếu $x$ có trong mảng thì $x$ nằm trong $a[L..R]$. Mỗi bước thu đoạn tìm lại một nửa; khi đoạn rỗng thì kết luận không có.

## Ví dụ chạy tay

Tìm $x = 22$ trong `[2, 5, 8, 12, 16, 22, 25, 31, 40]` (chỉ số 0 đến 8).

| Bước | $L$ | $R$ | $M$ | $a[M]$ | So sánh | Hành động |
|---|---|---|---|---|---|---|
| 1 | 0 | 8 | 4 | 16 | $22 > 16$ | $L = 5$ |
| 2 | 5 | 8 | 6 | 25 | $22 < 25$ | $R = 5$ |
| 3 | 5 | 5 | 5 | 22 | bằng | trả về 5 |

Chỉ 3 phép so sánh cho 9 phần tử. Tìm $x = 10$ thì: $M=4$ (16) nên $R=3$; $M=1$ (5) nên $L=2$; $M=2$ (8) nên $L=3$; $M=3$ (12) nên $R=2$; $L>R$, trả về $-1$.

## Cài đặt

Bản lặp (code mẫu của khóa học):

```java
static int binarySearch(int[] a, int x) {
    int low = 0, high = a.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (a[mid] == x) return mid;
        if (a[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

Bản đệ quy theo slide:

```java
static int binarySearch(int[] a, int x, int l, int r) {
    if (l > r) return -1;
    int m = l + (r - l) / 2;
    if (a[m] == x) return m;
    if (x < a[m]) return binarySearch(a, x, l, m - 1);
    return binarySearch(a, x, m + 1, r);
}
```

- `mid = low + (high - low) / 2` tránh tràn số khi `low + high` vượt `int`.
- Cập nhật `mid + 1` và `mid - 1`: loại cả $M$ đã xét, đảm bảo đoạn luôn thu nhỏ.
- Điều kiện lặp `low <= high` để vẫn xét được đoạn đúng một phần tử.
- Bản đệ quy là đệ quy đuôi nên có thể [khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination) thành bản lặp ở trên.

**Chứng minh đúng (quy nạp theo kích thước đoạn $n = R - L + 1$):** với $n = 1$ thuật toán trả về $L$ hoặc $-1$ đúng. Giả sử đúng cho mọi đoạn nhỏ hơn. Với đoạn lớn hơn: nếu $x = a_M$ thì trả về đúng; nếu $x < a_M$, do dãy tăng nên $x$ chỉ có thể ở nửa trái, lời gọi đệ quy trên đoạn nhỏ hơn đúng theo giả thiết quy nạp; trường hợp phải tương tự. Phương pháp này xem ở [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness).

## Độ phức tạp

Mỗi bước tốn $O(1)$ rồi còn nửa kích thước:

$$T(n) = T(n/2) + 1, \quad T(1) = 1 \Rightarrow T(n) = O(\log n)$$

Giải bằng [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) (trường hợp 2 với $a=1, b=2, f(n)=1$) hoặc đếm số lần chia đôi tới khi còn 1 phần tử: $\lfloor \log_2 n \rfloor + 1$ phép so sánh tối đa.

| Trường hợp | So sánh | Thời gian |
|---|---|---|
| Tốt nhất ($x$ ở giữa) | 1 | $O(1)$ |
| Xấu nhất | $\lfloor \log_2 n \rfloor + 1$ | $O(\log n)$ |
| Bộ nhớ (bản lặp) | | $O(1)$ |
| Bộ nhớ (bản đệ quy) | | $O(\log n)$ ngăn xếp |

Với $n = 10^6$ chỉ cần khoảng 20 phép so sánh. Nhược điểm: danh sách **bắt buộc phải sắp** và phải truy cập ngẫu nhiên được (mảng, không phải danh sách liên kết). Ghi chú về chênh lệch thời gian chèn/xóa: để vừa tìm vừa thêm xóa trong $O(\log n)$ ta dùng cây tìm kiếm nhị phân ([Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property)).

## Lỗi thường gặp

- Áp dụng cho mảng chưa sắp: kết quả sai mà không báo lỗi.
- `mid = (low + high) / 2` gây tràn số khi mảng cực lớn.
- Cập nhật `low = mid` hoặc `high = mid` (không cộng/trừ 1): vòng lặp vô hạn khi đoạn còn hai phần tử.
- Điều kiện `low < high` thay vì `low <= high`: bỏ sót trường hợp đoạn còn một phần tử.
- Khi có nhiều giá trị bằng $x$, bản cơ bản trả về một vị trí bất kỳ chứ không nhất thiết đầu tiên hay cuối cùng; muốn khoảng đầy đủ phải sửa thành tìm biên trái và biên phải.

## Luyện tập

- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): dùng hai lần tìm nhị phân (biên trái, biên phải) để đếm số phần tử bằng $x - a_j$.
- [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search): so sánh số phép so sánh hai thuật toán trên cùng một mảng.
- Tự luyện: tìm 40 trong mảng ở ví dụ và đếm số bước. Đáp án bên dưới.

> **Đáp án**
> $M=4$ (16): $L=5$. $M=6$ (25): $L=7$. $M=7$ (31): $L=8$. $M=8$ (40): trả về 8. Tổng 4 phép so sánh.

## Tự kiểm tra

1. Mảng 1024 phần tử đã sắp: số phép so sánh tối đa của tìm nhị phân là bao nhiêu?

> **Đáp án**
> $\lfloor \log_2 1024 \rfloor + 1 = 11$.

2. Nếu bạn viết `low = mid` thay vì `low = mid + 1`, đầu vào nào làm vòng lặp vô hạn?

> **Đáp án**
> Đoạn còn hai phần tử, ví dụ `low = 0, high = 1` và $a[0] < x$: `mid = 0` và `low = mid = 0` không đổi.

3. Với mảng chưa sắp, khi nào đáng sắp xếp trước rồi mới dùng tìm nhị phân?

> **Đáp án**
> Khi số lần tìm $k$ đủ lớn để chi phí sắp xếp $O(n \log n)$ được bù bởi mỗi lần tìm rẻ đi từ $O(n)$ xuống $O(\log n)$.
