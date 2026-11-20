# Sắp xếp chọn (Selection Sort)

## Vì sao cần

[Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) đổi chỗ rất nhiều lần để đưa một phần tử về đúng vị trí. Sắp xếp chọn (Selection Sort) làm gọn hơn: mỗi lượt chỉ *tìm* phần tử cần đặt ở vị trí kế tiếp, rồi đổi chỗ đúng một lần. Nhờ vậy số lần đổi chỗ tối đa là $n-1$, hữu ích khi việc ghi dữ liệu tốn kém. Đổi lại, nó luôn tốn $O(n^2)$ phép so sánh dù dãy đã sắp hay chưa. Mô phỏng bên dưới cho thấy phần đã sắp lớn dần từ một đầu.

## Ý tưởng

Bản trong slide chọn phần tử lớn nhất:

1. Tìm phần tử lớn nhất $M$ trong đoạn $[0 \dots n-1]$.
2. Đổi $M$ với phần tử ở vị trí $n-1$.
3. Giảm $n$ đi 1 và lặp lại.

Bản đối xứng (trong mã bên dưới) chọn phần tử nhỏ nhất và đặt vào đầu mảng. Hai bản tương đương về chi phí.

**Bất biến (bản chọn nhỏ nhất):** trước lượt thứ $i$, đoạn $a[0..i-1]$ chứa $i$ phần tử nhỏ nhất của mảng, theo đúng thứ tự tăng. Mỗi lượt kéo dài đoạn đó thêm một phần tử.

## Ví dụ chạy tay

Sắp `[29, 10, 14, 37, 13]` tăng dần. Cột "min" là chỉ số phần tử nhỏ nhất tìm được trong đoạn chưa sắp.

| Lượt $i$ | Đoạn xét | min (giá trị) | Mảng sau đổi chỗ |
|---|---|---|---|
| 0 | 29 10 14 37 13 | 1 (10) | **10** 29 14 37 13 |
| 1 | 29 14 37 13 | 4 (13) | **10 13** 14 37 29 |
| 2 | 14 37 29 | 2 (14) | **10 13 14** 37 29 |
| 3 | 37 29 | 4 (29) | **10 13 14 29** 37 |

Có 4 lượt (tức $n-1$), và chỉ 3 lần đổi chỗ thật sự (lượt 2 tự đổi với chính nó).

## Cài đặt

```java
static void selectionSort(int[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        int min = i;
        for (int j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) min = j;
        }
        int t = a[i]; a[i] = a[min]; a[min] = t;
    }
}
```

- `min` lưu *chỉ số* chứ không lưu giá trị, vì ta cần biết vị trí để đổi chỗ.
- Đổi chỗ nằm ngoài vòng trong: đúng một lần mỗi lượt.
- Vòng ngoài chạy tới `length - 2`: khi chỉ còn một phần tử thì nó đã đúng chỗ.

## Độ phức tạp

Lượt $i$ làm $n-1-i$ phép so sánh, tổng $\frac{n(n-1)}{2}$ giống [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost), bất kể nội dung dãy.

| Trường hợp | So sánh | Đổi chỗ | Thời gian |
|---|---|---|---|
| Tốt nhất | $\frac{n(n-1)}{2}$ | $0$ đến $n-1$ | $O(n^2)$ |
| Xấu nhất | $\frac{n(n-1)}{2}$ | $\le n-1$ | $O(n^2)$ |
| Trung bình | $\frac{n(n-1)}{2}$ | $\le n-1$ | $O(n^2)$ |
| Bộ nhớ phụ | | | $O(1)$ |

Khác [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) và [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) bản dừng sớm, không có trường hợp nào chạy $O(n)$: cách làm "vét cạn" vị trí nhỏ nhất (xem [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force)) không tận dụng được thứ tự có sẵn. Quy tắc đọc các trường hợp ở [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average).

## Lỗi thường gặp

- Khởi tạo `min = 0` thay vì `min = i`: tìm lại trong phần đã sắp, kết quả sai.
- Vòng trong bắt đầu từ `j = i` thay vì `i + 1`: vẫn đúng nhưng thừa một phép so sánh mỗi lượt.
- Đổi chỗ ngay trong vòng trong mỗi khi gặp phần tử nhỏ hơn: biến thành thuật toán đổi chỗ nhiều, mất ưu điểm $n-1$ lần đổi.
- Tin rằng Selection Sort ổn định. Đổi chỗ khoảng cách xa có thể vượt qua phần tử bằng nhau: `[2a, 2b, 1]` thành `[1, 2b, 2a]`, thứ tự hai số 2 bị đảo. Xem [Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties).
- Quên rằng dãy đã sắp vẫn tốn $O(n^2)$ so sánh.

## So sánh / liên hệ

Selection Sort tối ưu về số lần ghi nhưng chậm về số lần so sánh. [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) có thể xem là Selection Sort được tăng tốc: thay vì quét tuyến tính để tìm phần tử lớn nhất, dùng đống để lấy nó trong $O(\log n)$.

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): đếm số lần so sánh và đổi chỗ của Selection Sort so với các thuật toán khác; số lần đổi chỗ sẽ thấp bất thường.
- Tự luyện: chạy tay trên `[4, 3, 2, 1]` và đếm số lần đổi chỗ.

> **Đáp án**
> Lượt 0: min là 1 (chỉ số 3), đổi với vị trí 0: `[1, 3, 2, 4]`. Lượt 1: min là 2, đổi với vị trí 1: `[1, 2, 3, 4]`. Lượt 2: min là 3 tại chỗ, tự đổi. Có 2 lần đổi chỗ khác vị trí và 6 phép so sánh.

## Tự kiểm tra

1. Selection Sort thực hiện chính xác bao nhiêu phép so sánh trên mảng 6 phần tử đã sắp?

> **Đáp án**
> $\frac{6 \cdot 5}{2} = 15$, giống hệt mọi đầu vào khác kích thước 6.

2. Khi nào bạn chọn Selection Sort thay vì Insertion Sort?

> **Đáp án**
> Khi chi phí ghi/đổi chỗ phần tử rất lớn (bản ghi nặng, ghi flash) và mảng nhỏ: Selection Sort chỉ ghi tối đa $n-1$ lần. Nếu dữ liệu gần sắp sẵn thì [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) thắng.

3. Chứng minh số lần đổi chỗ không vượt quá $n-1$.

> **Đáp án**
> Mỗi lượt của vòng ngoài có đúng một lệnh đổi chỗ và có $n-1$ lượt.
