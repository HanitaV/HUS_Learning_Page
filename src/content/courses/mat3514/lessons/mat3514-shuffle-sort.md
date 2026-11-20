# Xáo trộn ngẫu nhiên (Shuffle)

## Vì sao cần

Các thuật toán trước đó biến dãy lộn xộn thành dãy có thứ tự. Đôi khi ta cần ngược lại: xáo bộ bài, tạo dữ liệu thử nghiệm ngẫu nhiên, hoặc phá thế dữ liệu "đã sắp" để [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort) không rơi vào trường hợp xấu. Bài toán xáo trộn (shuffle) yêu cầu tạo một **hoán vị ngẫu nhiên đều**: mỗi trong $n!$ hoán vị có xác suất bằng nhau là $\frac{1}{n!}$. Phần cài đặt trong slide chỉ là ý tưởng, bài này nêu cả chỗ dễ sai.

## Ý tưởng

Slide đưa hai cách:

1. **Sắp theo khóa ngẫu nhiên:** gán mỗi phần tử một số thực ngẫu nhiên, rồi sắp xếp theo số đó. Slide ghi $O(n^2)$ với sắp xếp đơn giản; dùng [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort) thì là $O(n \log n)$.
2. **Đổi chỗ với vị trí ngẫu nhiên:** duyệt từng phần tử và đổi chỗ nó với một phần tử ở vị trí ngẫu nhiên, tổng $O(n)$.

Cách 2 chỉ đúng phân phối đều nếu chọn vị trí ngẫu nhiên đúng phạm vi. Cách chuẩn là **Fisher-Yates**: với $i$ từ $n-1$ xuống $1$, chọn $j$ ngẫu nhiên đều trong $[0, i]$ rồi đổi $a[i]$ với $a[j]$.

Vì sao đều? Bước $i$ chọn phần tử cho vị trí $i$ trong $i+1$ ứng viên, mỗi cái xác suất $\frac{1}{i+1}$. Nhân các bước: $\frac{1}{n} \cdot \frac{1}{n-1} \cdots \frac{1}{2} = \frac{1}{n!}$ cho mỗi hoán vị.

## Ví dụ chạy tay

Xáo `[A, B, C]` với các lựa chọn $j$ cho trước (thay cho số ngẫu nhiên):

| $i$ | $j$ chọn trong $[0,i]$ | Mảng sau đổi chỗ |
|---|---|---|
| 2 | 0 | C B A |
| 1 | 1 | C B A (tự đổi) |

Kết quả `[C, B, A]`. Tổng số dãy lựa chọn $(j_2, j_1)$ là $3 \cdot 2 = 6 = 3!$, mỗi dãy cho một hoán vị khác nhau, nên mọi hoán vị đều có xác suất $\frac{1}{6}$.

## Cài đặt

```java
static void shuffle(int[] a, java.util.Random rnd) {
    for (int i = a.length - 1; i > 0; i--) {
        int j = rnd.nextInt(i + 1);   // 0..i
        int t = a[i]; a[i] = a[j]; a[j] = t;
    }
}
```

Đoạn trong slide viết kiểu `Swap(array, i, random.nextInt(10))` với hằng 10: chỉ đúng cho mảng 10 phần tử, và các vị trí được chọn trong toàn mảng chứ không trong $[0,i]$.

- `rnd.nextInt(i + 1)` trả về số nguyên đều trong $[0, i]$.
- Truyền `Random` từ ngoài vào để có thể đặt hạt giống (seed) cố định khi cần tái lập kết quả test.

## Độ phức tạp

| Cách | Thời gian | Bộ nhớ phụ |
|---|---|---|
| Sắp theo khóa ngẫu nhiên | $O(n \log n)$ (hoặc $O(n^2)$ nếu dùng sắp xếp đơn giản) | $O(n)$ khóa |
| Fisher-Yates | $O(n)$ | $O(1)$ |

Fisher-Yates dùng đúng $n-1$ lần gọi sinh số ngẫu nhiên và $n-1$ lần đổi chỗ. Về cách tính, xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Lỗi thường gặp

- Chọn $j$ trong toàn mảng `[0, n-1]` ở mọi bước ("naive shuffle"): có $n^n$ dãy lựa chọn mà $n!$ không chia hết $n^n$, nên chắc chắn có hoán vị xuất hiện nhiều hơn hoán vị khác, phân phối không đều.
- Dùng `nextInt(i)` thay vì `nextInt(i + 1)`: phần tử không bao giờ ở lại vị trí cũ, kết quả không còn đều (và với $n=2$ luôn đổi chỗ).
- Hằng số cứng như `nextInt(10)` trong khi mảng có kích thước khác.
- Sắp xếp với hàm so sánh ngẫu nhiên (`compare` trả về giá trị ngẫu nhiên): hàm so sánh không nhất quán vi phạm giả định của thuật toán, có thể sinh phân phối lệch hoặc ném lỗi.
- Tạo `new Random()` trong vòng lặp: có thể trùng hạt giống và cho dãy giống nhau.

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): sinh $N$ số ngẫu nhiên và kiểm thử các thuật toán trên dữ liệu đã trộn; phần mở rộng với bộ 52 quân bài cần xáo bộ bài.
- [Bài toán sắp xếp](#/courses/mat3514/lessons/mat3514-sorting-problem): xáo trộn và sắp xếp là hai phép "ngược nhau" trên không gian hoán vị.

## Tự kiểm tra

1. Có bao nhiêu hoán vị của 4 phần tử, và mỗi hoán vị có xác suất bao nhiêu trong một phép xáo đều?

> **Đáp án**
> $4! = 24$ hoán vị, mỗi hoán vị xác suất $\frac{1}{24}$.

2. Với $n=3$, "naive shuffle" (chọn $j \in [0,2]$ mỗi bước, 3 bước) cho bao nhiêu dãy lựa chọn? Vì sao không thể đều?

> **Đáp án**
> $3^3 = 27$ dãy lựa chọn, mà có $6$ hoán vị. $27$ không chia hết cho $6$, nên ít nhất một hoán vị xuất hiện nhiều hơn những hoán vị khác.

3. Vì sao Fisher-Yates có thể chạy tại chỗ còn cách sắp theo khóa ngẫu nhiên thì không?

> **Đáp án**
> Fisher-Yates chỉ cần đổi chỗ trong mảng gốc. Cách sắp theo khóa phải lưu thêm $n$ khóa ngẫu nhiên đi kèm từng phần tử.
