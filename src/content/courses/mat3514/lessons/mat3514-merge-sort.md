# Sắp xếp trộn (Merge Sort)

## Vì sao cần

[Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort) nhanh trung bình nhưng có thể rơi vào $O(n^2)$. Sắp xếp trộn (Merge Sort) đảm bảo $O(n \log n)$ cho mọi đầu vào. Ý tưởng xuất phát từ một việc đơn giản: nếu đã có hai dãy được sắp, ta ghép chúng thành một dãy sắp trong thời gian tuyến tính, ví dụ `{1,5,9}` và `{2,11}` cho `{1,2,5,9,11}`. Còn hai dãy sắp lấy ở đâu? Từ chính thuật toán này, áp dụng đệ quy trên hai nửa. Mô phỏng bên dưới cho thấy mảng bị chia nhỏ rồi trộn lại từ dưới lên.

## Ý tưởng

Đây là thuật toán [Chia để trị](#/courses/mat3514/lessons/mat3514-divide-and-conquer):

- **Chia:** cắt mảng làm hai nửa gần bằng nhau, sắp đệ quy từng nửa.
- **Tổng hợp:** trộn (merge) hai nửa đã sắp thành một dãy sắp.
- **Cơ sở:** đoạn có 0 hoặc 1 phần tử (`low >= high`) đã sắp sẵn.

Ngược với Quick Sort, bước chia rất rẻ (tính điểm giữa) còn bước tổng hợp tốn $\Theta(n)$.

**Phép trộn:** giữ hai con trỏ ở đầu hai nửa, mỗi lần chép phần tử nhỏ hơn vào mảng tạm rồi dịch con trỏ tương ứng; khi một nửa hết, chép nốt nửa kia. Cuối cùng chép mảng tạm về lại mảng gốc. Chính mảng tạm này là lý do thuật toán không tại chỗ.

## Ví dụ chạy tay

Sắp `[5, 2, 4, 7, 1, 3]`.

```text
[5 2 4 7 1 3]
 chia:   [5 2 4]        [7 1 3]
 chia:   [5 2] [4]      [7 1] [3]
 chia:   [5] [2]        [7] [1]
 trộn:   [2 5] [4]      [1 7] [3]
 trộn:   [2 4 5]        [1 3 7]
 trộn:   [1 2 3 4 5 7]
```

Chi tiết trộn `[2 4 5]` với `[1 3 7]`:

| So sánh | Chọn | Mảng tạm |
|---|---|---|
| 2 và 1 | 1 | 1 |
| 2 và 3 | 2 | 1 2 |
| 4 và 3 | 3 | 1 2 3 |
| 4 và 7 | 4 | 1 2 3 4 |
| 5 và 7 | 5 | 1 2 3 4 5 |
| nửa trái hết | chép nốt 7 | 1 2 3 4 5 7 |

## Cài đặt

```java
static void mergeSort(int[] a, int low, int high) {
    if (low >= high) return;
    int mid = low + (high - low) / 2;
    mergeSort(a, low, mid);
    mergeSort(a, mid + 1, high);
    merge(a, low, mid, high);
}

static void merge(int[] a, int low, int mid, int high) {
    int[] b = new int[high - low + 1];
    int i = low, j = mid + 1, k = 0;
    while (i <= mid && j <= high) {
        if (a[i] <= a[j]) b[k++] = a[i++];
        else b[k++] = a[j++];
    }
    while (i <= mid) b[k++] = a[i++];
    while (j <= high) b[k++] = a[j++];
    for (k = 0; k < b.length; k++) a[low + k] = b[k];
}
```

Gọi `mergeSort(a, 0, a.length - 1)`.

- `a[i] <= a[j]` (dùng `<=`): khi hai phần tử bằng nhau lấy phần tử của nửa trái trước, giữ tính **ổn định** ([Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties)).
- Hai vòng `while` cuối chép phần dư của nửa còn lại.
- Mảng tạm `b` cần vì nếu ghi trực tiếp vào `a` ta sẽ ghi đè phần tử chưa kịp so sánh.

## Độ phức tạp

Chiều sâu đệ quy là $\lceil \log_2 n \rceil$, mỗi tầng tổng cộng trộn $n$ phần tử. Công thức đệ quy:

$$T(n) = 2T(n/2) + \Theta(n)$$

Theo [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) (trường hợp 2), $T(n) = \Theta(n \log n)$.

| Trường hợp | Thời gian |
|---|---|
| Tốt nhất | $\Theta(n \log n)$ |
| Trung bình | $\Theta(n \log n)$ |
| Xấu nhất | $\Theta(n \log n)$ |
| Bộ nhớ phụ | $O(n)$ |

Hiệu năng được đảm bảo và không phụ thuộc thứ tự ban đầu của đầu vào. Cận dưới $\Omega(n \log n)$ ở [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound) cho thấy Merge Sort tối ưu trong lớp sắp xếp so sánh.

**Ưu:** thời gian đảm bảo; làm việc được trên dữ liệu rất lớn, xử lý từng phần (sắp xếp ngoài). **Nhược:** khó cài đặt hơn các thuật toán đơn giản; cần $O(n)$ bộ nhớ phụ.

## Lỗi thường gặp

- Tính `mid = (low + high) / 2` có thể tràn số nguyên với chỉ số rất lớn; dùng `low + (high - low) / 2`.
- Đệ quy `mergeSort(a, low, mid - 1)` và `(a, mid, high)`: với đoạn hai phần tử, `mid = low` nên đoạn phải bằng chính đoạn cũ, đệ quy vô hạn.
- Quên chép nốt phần dư sau khi một nửa hết: mất phần tử.
- Dùng `<` thay vì `<=` khi so sánh `a[i]` với `a[j]`: mất tính ổn định.
- Cấp mảng tạm mới ở mỗi lời gọi merge trên mảng rất lớn: vẫn đúng nhưng tốn cấp phát; tốt hơn là cấp một mảng tạm dùng chung.

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): đo thời gian Merge Sort ở $N$ tăng dần và đối chiếu với $n \log n$.
- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): Merge Sort là bước tiền xử lý đảm bảo $O(n \log n)$.
- Tự luyện: trộn `{3, 8}` với `{1, 4, 9}`. Đáp án nằm bên dưới.

> **Đáp án**
> `{1, 3, 4, 8, 9}`: chọn 1, 3, rồi 4 (so với 8), rồi 8 (so với 9), nửa trái hết thì chép 9. Tổng 4 phép so sánh.

## Tự kiểm tra

1. Merge Sort trên mảng 8 phần tử có bao nhiêu tầng chia?

> **Đáp án**
> $\log_2 8 = 3$ tầng chia (8 thành 4, 2, 1); tính cả tầng lá là 4 mức.

2. Vì sao Merge Sort không phải thuật toán tại chỗ?

> **Đáp án**
> Phép trộn dùng mảng tạm có kích thước bằng đoạn đang trộn, tức $O(n)$ bộ nhớ phụ, không phải $O(1)$.

3. Với dãy đã sắp tăng, Merge Sort có nhanh hơn dãy ngẫu nhiên không (về bậc tiệm cận)?

> **Đáp án**
> Không, vẫn $\Theta(n \log n)$: thuật toán vẫn chia đủ các tầng và trộn đủ $n$ phần tử mỗi tầng. Chỉ số phép so sánh có thể giảm tối đa một nửa.
