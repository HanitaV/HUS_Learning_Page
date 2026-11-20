# Sắp xếp chèn (Insertion Sort)

## Vì sao cần

Khi xếp bài trên tay, bạn cầm một lá, rồi lần lượt rút lá kế tiếp và nhét vào đúng chỗ trong các lá đã xếp. Sắp xếp chèn (Insertion Sort) chính là quy trình đó. Nó cũng $O(n^2)$ trong trường hợp xấu nhất như [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) và [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort), nhưng thích nghi tốt: dãy càng gần sắp thì chạy càng nhanh, tới $O(n)$. Vì vậy nó vẫn được dùng cho mảng nhỏ hoặc gần sắp. Mô phỏng bên dưới cho thấy phần đã sắp ở bên trái mở rộng dần.

## Ý tưởng

1. Coi phần tử đầu tiên là một dãy đã sắp có 1 phần tử.
2. Lấy phần tử kế tiếp (gọi là `key`).
3. Dịch các phần tử đã sắp *lớn hơn* `key` sang phải một ô, để lại chỗ trống.
4. Đặt `key` vào chỗ trống.
5. Lặp cho tới hết mảng.

**Bất biến:** trước vòng lặp thứ $i$, đoạn $a[0..i-1]$ gồm đúng các phần tử ban đầu của đoạn đó nhưng đã được sắp xếp. Khác Selection Sort, các phần tử này chưa chắc ở vị trí cuối cùng, vì phần tử sau còn có thể chen vào giữa.

## Ví dụ chạy tay

Sắp `[7, 3, 5, 1]`. Dấu `|` ngăn phần đã sắp và phần chưa xét.

| Bước | key | Dịch sang phải | Mảng sau bước |
|---|---|---|---|
| đầu | | | 7 \| 3 5 1 |
| $i=1$ | 3 | dịch 7 | 3 7 \| 5 1 |
| $i=2$ | 5 | dịch 7 | 3 5 7 \| 1 |
| $i=3$ | 1 | dịch 7, 5, 3 | 1 3 5 7 \| |

Bước $i=3$ phải dịch cả ba phần tử (3 phép so sánh, rồi `j` chạm biên -1) vì `1` là phần tử nhỏ nhất.

## Cài đặt

```java
static void insertionSort(int[] a) {
    for (int i = 1; i < a.length; i++) {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}
```

- `key` được giữ riêng vì ô `a[i]` sẽ bị ghi đè khi dịch.
- Điều kiện `j >= 0` phải đứng *trước* `a[j] > key` (đánh giá ngắn mạch) để không đọc `a[-1]`.
- Dùng `>` chứ không `>=`: dừng ngay khi gặp phần tử bằng `key`, nên giữ được thứ tự tương đối, thuật toán **ổn định** ([Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties)).
- Dịch (một lần ghi) rẻ hơn đổi chỗ (ba lần ghi) như ở bubble sort.

## Độ phức tạp

Vòng ngoài chạy $n-1$ lần. Số lần vòng `while` chạy phụ thuộc đầu vào, đúng như phân tích trong [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average):

| Trường hợp | Mô tả | Thời gian |
|---|---|---|
| Tốt nhất | Đã sắp tăng: `a[j] > key` luôn sai | $O(n)$ |
| Xấu nhất | Sắp giảm dần: luôn đúng, lượt $i$ dịch $i$ phần tử | $O(n^2)$ |
| Trung bình | Dãy ngẫu nhiên | $O(n^2)$ |
| Bộ nhớ phụ | | $O(1)$ |

Trường hợp xấu nhất: $1 + 2 + \dots + (n-1) = \frac{n(n-1)}{2}$ lần dịch. Số lần dịch đúng bằng số nghịch thế (cặp $i<j$ mà $a_i > a_j$), nên dãy ít nghịch thế chạy rất nhanh.

## Lỗi thường gặp

- Viết điều kiện `a[j] > key && j >= 0`: lần cuối `j = -1` gây `ArrayIndexOutOfBoundsException`.
- Quên lưu `key` trước khi dịch: `a[i]` bị ghi đè, mất giá trị.
- Ghi `key` vào `a[j]` thay vì `a[j + 1]`: sau vòng `while`, `j` đang trỏ tới phần tử *không lớn hơn* `key` (hoặc `-1`), ô trống nằm ở `j + 1`.
- Dịch trái chiều (so sánh từ đầu mảng) làm mất bất biến phần trái đã sắp.
- Nghĩ rằng luôn $O(n^2)$; trên dãy đã sắp nó chỉ cần $n-1$ phép so sánh.

## So sánh / liên hệ

Insertion Sort là thuật toán sắp xếp ổn định, tại chỗ, thích nghi; nó thắng [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) khi dãy gần sắp và thắng [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) ở số thao tác ghi. Nó cũng là nền của ý tưởng "đống / hàng đợi ưu tiên cài bằng mảng có thứ tự" trong [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt): chèn vào đúng chỗ một dãy đã sắp.

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): so sánh thực nghiệm trên dãy ngẫu nhiên, đã sắp và sắp ngược để thấy khác biệt $O(n)$ và $O(n^2)$.
- Tự luyện: dãy `[2, 1, 3, 4, 5]` cần bao nhiêu lần dịch? Đáp án nằm bên dưới.

> **Đáp án**
> Chỉ có một nghịch thế (2,1), nên chỉ 1 lần dịch; tổng khoảng $n$ phép so sánh, gần $O(n)$.

## Tự kiểm tra

1. Chạy tay Insertion Sort cho `[4, 2, 4, 1]` và cho biết hai số 4 có đổi thứ tự không.

> **Đáp án**
> $i=1$: key 2, dịch 4: `2 4 4 1`. $i=2$: key là số 4 thứ hai; `a[1]=4 > 4` sai nên dừng, giữ nguyên: `2 4 4 1`. $i=3$: key 1, dịch cả ba: `1 2 4 4`. Hai số 4 giữ nguyên thứ tự, tức ổn định.

2. Với dãy sắp giảm dần $n$ phần tử, tổng số lần dịch là bao nhiêu?

> **Đáp án**
> $\frac{n(n-1)}{2}$, bằng số nghịch thế của dãy giảm dần.

3. Vì sao Insertion Sort tốt hơn Bubble Sort trên dãy gần sắp mà cả hai đều dừng sớm được?

> **Đáp án**
> Insertion Sort chỉ dịch đúng số nghịch thế và mỗi lần dịch là một phép ghi; Bubble Sort ngoài đó còn phải quét toàn bộ mảng mỗi lượt và đổi chỗ (ba phép ghi). Một phần tử nhỏ nằm cuối mảng còn khiến Bubble Sort cần nhiều lượt vì mỗi lượt chỉ đưa nó lùi một ô.
