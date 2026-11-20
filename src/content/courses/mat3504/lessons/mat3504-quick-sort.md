# Sắp xếp nhanh (Quick Sort)

## Vì sao cần

Các thuật toán $O(n^2)$ như [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort), [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) và [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) quá chậm khi $n$ lên tới hàng trăm nghìn. Sắp xếp nhanh (Quick Sort) áp dụng [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer): chọn một phần tử chốt (pivot), chia mảng thành hai phần theo chốt, rồi sắp đệ quy từng phần. Trung bình nó chạy $O(n \log n)$ với hằng số nhỏ và tại chỗ, nên là lựa chọn mặc định trong nhiều thư viện. Mô phỏng bên dưới cho thấy chốt được đặt vào đúng vị trí cuối cùng sau mỗi lần phân hoạch.

## Ý tưởng

**Bước chia (Divide):** chọn phần tử chốt $p$, phân hoạch đoạn $a[low..high]$ thành hai phần:

- các phần tử nhỏ hơn $p$,
- các phần tử lớn hơn hoặc bằng $p$,

và đặt $p$ vào giữa. Sau bước này $p$ đã ở đúng vị trí cuối cùng, nên **không tham gia** sắp xếp tiếp nữa. Sau đó sắp đệ quy hai phần.

**Bước tổng hợp (Conquer):** không làm gì. Ngược với [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort), nơi gần như toàn bộ công việc nằm ở bước tổng hợp (trộn), ở Quick Sort toàn bộ công việc nằm ở bước chia (phân hoạch).

**Phép phân hoạch (Lomuto, chốt là phần tử cuối):** duy trì chỉ số $i$ sao cho $a[low..i]$ đều $\le p$ và $a[i+1..j-1]$ đều $> p$. Duyệt $j$ từ `low` tới `high-1`; gặp $a[j] \le p$ thì tăng $i$ và đổi $a[i]$ với $a[j]$. Cuối cùng đổi chốt vào vị trí $i+1$.

## Ví dụ chạy tay

Sắp `[5, 2, 8, 1, 9, 3]`, chốt là phần tử cuối.

**Lần phân hoạch đầu, chốt = 3:**

| $j$ | $a[j]$ | So với 3 | $i$ | Mảng |
|---|---|---|---|---|
| 0 | 5 | lớn hơn | -1 | 5 2 8 1 9 3 |
| 1 | 2 | nhỏ hơn, đổi với $a[0]$ | 0 | 2 5 8 1 9 3 |
| 2 | 8 | lớn hơn | 0 | 2 5 8 1 9 3 |
| 3 | 1 | nhỏ hơn, đổi với $a[1]$ | 1 | 2 1 8 5 9 3 |
| 4 | 9 | lớn hơn | 1 | 2 1 8 5 9 3 |
| kết | | đổi chốt với $a[2]$ | | 2 1 **3** 5 9 8 |

Chốt 3 ở vị trí 2. Đoạn trái `[2, 1]` phân hoạch với chốt 1 cho `[1, 2]`. Đoạn phải `[5, 9, 8]` với chốt 8 cho `[5, 8, 9]`. Kết quả `[1, 2, 3, 5, 8, 9]`.

## Cài đặt

```java
static void quickSort(int[] a, int low, int high) {
    if (low >= high) return;
    int pivot = a[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (a[j] <= pivot) {
            i++;
            int t = a[i]; a[i] = a[j]; a[j] = t;
        }
    }
    int t = a[i + 1]; a[i + 1] = a[high]; a[high] = t;
    quickSort(a, low, i);
    quickSort(a, i + 2, high);
}
```

Gọi `quickSort(a, 0, a.length - 1)`.

- `low >= high`: đoạn 0 hoặc 1 phần tử là trường hợp cơ sở.
- Sau vòng `for`, chốt được đặt ở `i + 1`; hai lời gọi đệ quy loại hẳn chỉ số này.
- Phiên bản trong slide tách riêng hàm `partition()` rồi gọi đệ quy hai phần `a[low..pivot-1]` và `a[pivot+1..high]`; ở đây gộp lại cho gọn.

## Độ phức tạp

Phân hoạch một đoạn $m$ phần tử tốn $\Theta(m)$.

| Trường hợp | Khi nào | Thời gian |
|---|---|---|
| Tốt nhất | Chốt luôn chia đôi | $O(n \log n)$ |
| Trung bình | Dãy ngẫu nhiên | $O(n \log n)$ |
| Xấu nhất | Chốt luôn là min hoặc max | $O(n^2)$ |
| Bộ nhớ phụ | Ngăn xếp đệ quy | $O(\log n)$ trung bình, $O(n)$ xấu nhất |

Trường hợp tốt nhất cho $T(n) = 2T(n/2) + \Theta(n)$, giải bằng [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) ra $\Theta(n \log n)$. Trường hợp xấu nhất cho $T(n) = T(n-1) + \Theta(n)$, tức $\Theta(n^2)$.

Với chốt là phần tử cuối, **dãy đã sắp tăng hoặc giảm chính là đầu vào xấu nhất**: chốt luôn là max hoặc min nên một phần rỗng, phần kia còn $n-1$ phần tử. Cách khắc phục: chọn chốt ngẫu nhiên, hoặc lấy trung vị của ba phần tử (đầu, giữa, cuối), hoặc xáo trộn mảng trước bằng [Xáo trộn ngẫu nhiên (Shuffle)](#/courses/mat3514/lessons/mat3514-shuffle-sort). Quick Sort không ổn định và chỉ gần tại chỗ (tốn ngăn xếp), xem [Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties). Cùng với Merge Sort, nó đạt cận $\Omega(n \log n)$ của [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound) ở trường hợp trung bình.

## Lỗi thường gặp

- Gọi đệ quy `quickSort(a, low, i + 1)` hoặc `(a, i + 1, high)`: chốt vẫn nằm trong một đoạn, không thu nhỏ được bài toán khi các phần tử bằng nhau và có thể lặp vô hạn.
- Thiếu trường hợp cơ sở `low >= high`: đệ quy vô hạn hoặc truy cập ngoài mảng.
- Dùng `<` thay vì `<=` trong phân hoạch Lomuto khi mảng có rất nhiều giá trị trùng: toàn bộ giá trị trùng dồn về một phía, chia lệch, thời gian về $O(n^2)$ nếu mọi phần tử bằng nhau.
- Chọn chốt cố định ở đầu hoặc cuối rồi thử trên dữ liệu đã sắp, dẫn tới $O(n^2)$ và tràn ngăn xếp (`StackOverflowError`) ở $n$ lớn.
- Quên đổi chốt về vị trí $i+1$ sau vòng lặp: chốt không ở đúng chỗ cuối cùng, kết quả sai.

## So sánh / liên hệ

| | Quick Sort | Merge Sort |
|---|---|---|
| Việc chính nằm ở | Bước chia (phân hoạch) | Bước tổng hợp (trộn) |
| Xấu nhất | $O(n^2)$ | $O(n \log n)$ |
| Bộ nhớ phụ | $O(\log n)$ (ngăn xếp) | $O(n)$ |
| Ổn định | Không | Có |

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): so sánh thời gian Quick Sort và Merge Sort ở $N = 10^2, \dots, 10^5$; thử cả đầu vào đã sắp để thấy chốt cuối chậm đi.
- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): dùng Quick Sort hoặc Merge Sort làm bước sắp xếp trước khi tìm nhị phân.

## Tự kiểm tra

1. Phân hoạch `[4, 7, 1, 6, 2]` với chốt là phần tử cuối. Mảng sau phân hoạch và vị trí chốt là gì?

> **Đáp án**
> Chốt 2. Chỉ $a[2]=1 \le 2$ nên đổi với $a[0]$: `[1, 7, 4, 6, 2]`, $i=0$. Đổi chốt với $a[1]$: `[1, 2, 4, 6, 7]`, chốt ở vị trí 1.

2. Quick Sort với chốt là phần tử cuối chạy trên mảng đã sắp tăng 1000 phần tử: độ phức tạp và độ sâu đệ quy?

> **Đáp án**
> $\Theta(n^2)$ (khoảng $\frac{n(n-1)}{2}$ phép so sánh) và độ sâu đệ quy cỡ $n = 1000$.

3. Vì sao bước tổng hợp "không làm gì" vẫn cho mảng đã sắp?

> **Đáp án**
> Phân hoạch đã đặt mọi phần tử nhỏ hơn chốt bên trái và các phần tử còn lại bên phải. Sau khi hai phần tự sắp, phần trái $\le$ chốt $\le$ phần phải nên cả đoạn đã sắp mà không cần trộn.
