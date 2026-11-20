# Sắp xếp nổi bọt (Bubble Sort)

## Vì sao cần

Sắp xếp nổi bọt (Bubble Sort) là thuật toán đơn giản nhất của họ sắp xếp cơ bản trong [Bài toán sắp xếp](#/courses/mat3514/lessons/mat3514-sorting-problem): chỉ cần so sánh và đổi chỗ hai phần tử kề nhau. Nó hiếm khi được dùng trong thực tế, nhưng rất tốt để học cách phân tích hai vòng lặp lồng nhau và để thấy tác dụng của việc dừng sớm. Bấm chạy mô phỏng bên dưới và quan sát phần tử lớn nhất "nổi" về cuối sau mỗi lượt.

## Ý tưởng

Với mảng $n$ phần tử cần sắp tăng dần:

1. So sánh từng cặp phần tử kề nhau.
2. Nếu cặp sai thứ tự (phần tử trước lớn hơn phần tử sau) thì đổi chỗ.
3. Lặp tới cuối mảng: phần tử lớn nhất đã nằm ở vị trí cuối.
4. Quay lại bước 1 với $n$ giảm đi 1.

Phần tử lớn như một "bọt khí" nổi dần về cuối mảng.

**Bất biến:** sau lượt thứ $i$ (đếm từ 0), $i+1$ phần tử lớn nhất đã nằm đúng chỗ ở cuối mảng. Vì vậy lượt tiếp theo chỉ cần xét $n-1-i$ cặp.

## Ví dụ chạy tay

Sắp `[5, 1, 4, 2, 8]`. Phần in đậm trong cột "sau lượt" là phần đã đúng chỗ.

| Lượt | Các phép so sánh/đổi chỗ | Mảng sau lượt |
|---|---|---|
| 0 | (5,1) đổi; (5,4) đổi; (5,2) đổi; (5,8) giữ | 1 4 2 5 **8** |
| 1 | (1,4) giữ; (4,2) đổi; (4,5) giữ | 1 2 4 **5 8** |
| 2 | (1,2) giữ; (2,4) giữ: không có đổi chỗ | 1 2 4 **5 8** |

Sang lượt 2 không đổi chỗ lần nào, bản cải tiến dừng ngay. Bản không cải tiến vẫn chạy thêm lượt 3.

## Cài đặt

Bản có dừng sớm (Ver 2.0 trong slide):

```java
static void bubbleSort(int[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}
```

- `a.length - 1 - i`: $i$ phần tử cuối đã đúng chỗ nên không cần xét lại.
- `swapped`: nếu cả một lượt không đổi chỗ, mọi cặp kề đã đúng thứ tự, tức mảng đã sắp.
- Dùng `>` (không phải `>=`) để không đổi chỗ hai phần tử bằng nhau, nhờ đó thuật toán **ổn định** (xem [Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties)).

## Độ phức tạp

Vòng trong thực hiện một phép so sánh và có thể một phép đổi chỗ, chi phí bị chặn bởi hằng $c$. Tổng số lần lặp của vòng trong là $(n-1) + (n-2) + \dots + 1 + 0 = \frac{n(n-1)}{2}$, tính chi tiết ở [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost).

| Trường hợp | Bản gốc | Bản dừng sớm |
|---|---|---|
| Tốt nhất (đã sắp tăng) | $O(n^2)$ | $O(n)$ (một lượt rồi dừng) |
| Xấu nhất (sắp giảm dần) | $O(n^2)$ | $O(n^2)$ |
| Trung bình | $O(n^2)$ | $O(n^2)$ |
| Bộ nhớ phụ | $O(1)$ | $O(1)$ |

Về cách đọc các cột trường hợp xem [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average) và ký hiệu [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o). Với dãy sắp giảm dần, mọi cặp đều bị đổi chỗ nên số lần đổi chỗ cũng là $\frac{n(n-1)}{2}$, nhiều hơn hẳn [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) (tối đa $n-1$ lần).

## Lỗi thường gặp

- Để vòng trong chạy tới `a.length - 1` thay vì `a.length - 1 - i`: vẫn đúng nhưng lãng phí, còn nếu quên `- 1` thì `a[j + 1]` ném `ArrayIndexOutOfBoundsException`.
- Đặt `swapped = false` bên ngoài vòng ngoài: sau lượt đầu có đổi chỗ, cờ không bao giờ được xóa nên không dừng sớm được.
- Dùng `>=` khi so sánh: đổi chỗ các phần tử bằng nhau, làm mất tính ổn định và tăng số lần đổi chỗ vô ích.
- Cho rằng dừng sớm làm trường hợp xấu nhất tốt hơn. Nó chỉ cứu trường hợp dãy đã (gần) sắp.
- Dòng `swapped = true` đặt ngoài khối `if`: cờ luôn bằng true, không bao giờ dừng sớm.

## So sánh / liên hệ

So với [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort), cùng $O(n^2)$ nhưng chèn thường nhanh hơn trên dãy gần sắp vì ít thao tác ghi hơn. Phiên bản cho mọi kiểu so sánh được nằm ở [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort).

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): cài đặt, in trạng thái mỗi lượt và đếm số lần so sánh/đổi chỗ.
- [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort): viết lại bằng generics với `Comparable`.
- [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost): tự chứng minh công thức $\frac{n(n-1)}{2}$.

## Tự kiểm tra

1. Chạy tay bản dừng sớm trên `[3, 6, 11, 25, 39]`. Có bao nhiêu phép so sánh?

> **Đáp án**
> Lượt đầu so sánh 4 cặp, không đổi chỗ, nên dừng. Tổng 4 phép so sánh, $n-1$, đúng với $O(n)$.

2. Sắp giảm dần `[4, 3, 2, 1]`: tổng số lần đổi chỗ là bao nhiêu?

> **Đáp án**
> Mỗi cặp $(i,j)$ đều là nghịch thế và mỗi lần đổi chỗ kề xóa đúng một nghịch thế, nên số lần đổi chỗ là $\frac{4 \cdot 3}{2} = 6$.

3. Vì sao sau lượt thứ $i$, các phần tử từ vị trí $n-1-i$ trở đi đã đúng chỗ?

> **Đáp án**
> Trong lượt đó phần tử lớn nhất của phần chưa cố định bị kéo qua mọi cặp cho tới đầu phần đã cố định, nên nó dừng ở vị trí $n-1-i$. Quy nạp theo $i$ cho bất biến.
