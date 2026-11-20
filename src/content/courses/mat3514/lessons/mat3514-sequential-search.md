# Tìm kiếm tuần tự

## Vì sao cần

Bài toán tìm kiếm (searching) hỏi một giá trị có xuất hiện trong tập dữ liệu hay không, bao nhiêu lần, và ở những vị trí nào. Cách tự nhiên nhất là xem lần lượt từng phần tử: tìm kiếm tuần tự (sequential/linear search). Đây là thuật toán nền, dùng được trên mọi dãy, và là mốc để so sánh với [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search). Mô phỏng bên dưới tô sáng từng phần tử được kiểm tra.

## Ý tưởng

Bắt đầu từ phần tử đầu tiên và duyệt tới khi gặp phần tử cần tìm hoặc đã hết danh sách.

- **Đầu vào:** danh sách $(a_0, \dots, a_{n-1})$ và giá trị $x$.
- **Đầu ra:** chỉ số đầu tiên $i$ có $a_i = x$, hoặc $-1$ nếu không có.

Ưu điểm: dễ cài đặt; danh sách **có thể ở thứ tự bất kỳ**; cài được trên mảng ([Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list)) lẫn danh sách liên kết ([Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list)). Nhược điểm: chậm, $O(n)$.

## Ví dụ chạy tay

Tìm $x = 7$ trong `[4, 9, 7, 2, 7]`.

| $i$ | $a[i]$ | So với 7 | Kết quả |
|---|---|---|---|
| 0 | 4 | khác | tiếp tục |
| 1 | 9 | khác | tiếp tục |
| 2 | 7 | bằng | trả về 2 |

Dừng ở lần so sánh thứ 3. Chỉ số 4 cũng chứa 7 nhưng không được xét vì ta chỉ trả về lần xuất hiện đầu.

Tìm $x = 5$: duyệt đủ 5 phần tử, không khớp, trả về $-1$ sau 5 phép so sánh.

## Cài đặt

```java
static int sequentialSearch(int[] a, int x) {
    for (int i = 0; i < a.length; i++) {
        if (a[i] == x) return i;
    }
    return -1;
}
```

Với đối tượng, dùng `a[i].equals(x)` thay cho `==`. Biến thể đếm số lần xuất hiện: không `return` sớm mà tăng biến đếm; biến thể tìm mọi vị trí: gom các chỉ số vào danh sách.

## Độ phức tạp

| Trường hợp | Khi nào | Số phép so sánh | Thời gian |
|---|---|---|---|
| Tốt nhất | $x$ ở vị trí đầu | 1 | $O(1)$ |
| Xấu nhất | $x$ ở cuối hoặc không có | $n$ | $O(n)$ |
| Trung bình | $x$ có mặt, vị trí đều | khoảng $\frac{n+1}{2}$ | $O(n)$ |
| Bộ nhớ phụ | | | $O(1)$ |

Cách phân biệt các trường hợp xem [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average); ký hiệu ở [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o). Khi so sánh các cấu trúc, tìm kiếm trên mảng hoặc danh sách liên kết chưa sắp đều là $O(n)$; trên mảng đã sắp, [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search) giảm còn $O(\log n)$, nhưng chèn/xóa vào mảng sắp lại tốn $O(n)$. Mục tiêu $O(\log n)$ cho mọi thao tác dẫn tới cây tìm kiếm nhị phân ([Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property)); bảng băm ([Bảng băm (tài liệu tham khảo)](#/courses/mat3514/lessons/mat3514-hash-table)) tìm kiếm trung bình $O(1)$.

Nó là một ví dụ của cách giải vét cạn ([Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force)): xem hết mọi khả năng.

## Lỗi thường gặp

- Dùng `==` so sánh chuỗi hoặc đối tượng trong Java: so sánh tham chiếu, nên không tìm thấy.
- Trả về `i + 1` hoặc quên trả về $-1$ khi không có, khiến người gọi nhầm với chỉ số hợp lệ; bắt đầu chỉ số từ 0.
- Duyệt tới `i <= a.length`: `ArrayIndexOutOfBoundsException`.
- Không `return` ngay khi tìm thấy: vẫn đúng nhưng luôn tốn $n$ phép so sánh.
- Dùng tìm tuần tự lặp đi lặp lại trên mảng lớn thay vì sắp xếp một lần rồi tìm nhị phân.

## Luyện tập

- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): cách 1 của bài này chính là tìm tuần tự lồng nhau $O(n^2)$; cách 2 thay bằng sắp xếp và tìm nhị phân.
- [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search): học cách tận dụng thứ tự để nhanh hơn.
- Tự luyện: viết hàm trả về số lần $x$ xuất hiện trong mảng. Đáp án bên dưới.

> **Đáp án**
> Duyệt toàn bộ: `int c = 0; for (int v : a) if (v == x) c++; return c;`. Thời gian $O(n)$ trong mọi trường hợp.

## Tự kiểm tra

1. Tìm tuần tự trong mảng 1000 phần tử, giá trị cần tìm không có. Bao nhiêu phép so sánh?

> **Đáp án**
> 1000, vì phải xem hết.

2. Khi nào tìm tuần tự thích hợp hơn tìm nhị phân?

> **Đáp án**
> Khi dữ liệu chưa sắp và chỉ tìm vài lần, khi dãy rất ngắn, hoặc khi cấu trúc không truy cập ngẫu nhiên được (danh sách liên kết). Chi phí sắp xếp $O(n \log n)$ không đáng nếu chỉ tìm một lần.

3. Nếu mỗi vị trí đều có xác suất như nhau chứa $x$ (và $x$ có mặt), số phép so sánh kỳ vọng là bao nhiêu?

> **Đáp án**
> $\frac{1 + 2 + \dots + n}{n} = \frac{n+1}{2}$.
