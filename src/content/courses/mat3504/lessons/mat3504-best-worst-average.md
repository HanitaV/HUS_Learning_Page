# Trường hợp tốt nhất, xấu nhất, trung bình

## Vì sao cần

Từ [Thời gian thực hiện và mô hình RAM](#/courses/mat3504/lessons/mat3504-running-time-model), $T(n)$ phụ thuộc kích thước $n$. Nhưng với cùng $n$, nhiều thuật toán chạy nhanh hay chậm tùy dữ liệu cụ thể. Một mảng đã sắp sẵn và một mảng sắp ngược có thể khiến cùng một thuật toán tốn thời gian rất khác nhau. Vì thế ta tách ra ba cách báo cáo: tốt nhất, xấu nhất, trung bình.

## Định nghĩa

Theo slide, với một hàm cho trước, tùy theo mẫu dữ liệu vào, $T(n)$ có thể nhận các giá trị:

- $T_{\min}(n)$: nhỏ nhất, độ phức tạp trong **trường hợp tốt nhất**.
- $T_{\max}(n)$: lớn nhất, độ phức tạp trong **trường hợp xấu nhất**.
- $T_{aver}(n)$: ứng với dữ liệu ngẫu nhiên, độ phức tạp trong **trường hợp trung bình**.

Với mọi dữ liệu kích thước $n$ ta có $T_{\min}(n) \le T(n) \le T_{\max}(n)$. Khi nói "thuật toán này có độ phức tạp $O(\dots)$" mà không nói rõ, người ta thường hiểu là trường hợp xấu nhất vì nó là bảo đảm: thuật toán không bao giờ chậm hơn.

Trường hợp trung bình là kỳ vọng của $T$ trên một phân phối giả định của dữ liệu vào (thường là đồng đều). Tính nó cần giả thiết xác suất, nên khó hơn hai trường hợp kia.

## Ví dụ chạy tay: nổi bọt cải tiến

[Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) phiên bản 2.0 dừng sớm nếu một lượt duyệt không có hoán đổi nào. Theo slide của bài sắp xếp:

| Trường hợp | Dữ liệu | Thời gian |
|---|---|---|
| Tốt nhất | mảng đã tăng dần, chỉ một lượt ngoài rồi dừng | $O(n)$ |
| Xấu nhất | mảng giảm dần, vẫn đủ các lượt | $O(n^2)$ |
| Trung bình | mảng lộn xộn | $O(n^2)$ |

Minh họa với $n = 4$ bằng số phép so sánh:

| Mảng | Lượt 1 | Lượt 2 | Lượt 3 | Tổng so sánh |
|---|---|---|---|---|
| `[1, 2, 3, 4]` | 3 so sánh, không đổi chỗ, dừng | | | 3 |
| `[4, 3, 2, 1]` | 3 so sánh, 3 đổi chỗ | 2 | 1 | 6 |

Với $n$ phần tử, tốt nhất là $n-1$ so sánh, xấu nhất là $(n-1) + (n-2) + \dots + 1 = n(n-1)/2$. Chi tiết số lượt nằm ở [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost).

## So sánh với sắp xếp chèn

[Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) cũng khác biệt rõ. Khi mảng đã tăng dần, mỗi phần tử so sánh một lần và dừng ngay: $O(n)$. Khi mảng giảm dần, phần tử thứ $i$ phải dịch qua $i$ vị trí: $O(n^2)$. Nhờ vậy sắp xếp chèn là lựa chọn tốt cho dữ liệu gần như đã sắp. Ngược lại [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) luôn tốn $O(n^2)$ so sánh dù dữ liệu thế nào, nên tốt nhất và xấu nhất đều là $O(n^2)$.

## Cách dùng khi phân tích

1. Xác định dữ liệu nào làm mọi nhánh rẽ đều tốn kém nhất (xấu nhất) và dữ liệu nào làm điều kiện dừng sớm xảy ra (tốt nhất).
2. Tính $T$ cho từng trường hợp bằng [Quy tắc tổng và quy tắc nhân](#/courses/mat3504/lessons/mat3504-sum-product-rules), rồi viết dưới dạng $O$ ([Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o)).
3. Báo cáo cả ba nếu khác nhau; nếu chỉ báo một, nói rõ đó là trường hợp nào.

## Lỗi thường gặp

- Báo "nổi bọt là $O(n)$" vì thấy ví dụ mảng đã sắp: đó là trường hợp tốt nhất, không phải của thuật toán nói chung.
- Nhầm "trường hợp tốt nhất" với "$n$ nhỏ nhất": cả ba trường hợp đều xét **cùng một $n$**, chỉ khác dữ liệu.
- Với phiên bản nổi bọt không có cờ dừng sớm, tốt nhất cũng là $O(n^2)$; cải tiến mới là thứ tạo ra $O(n)$.
- Cho rằng trung bình luôn nằm đúng giữa tốt nhất và xấu nhất theo bậc: với nổi bọt, trung bình cùng bậc với xấu nhất.
- Nhầm cận $O$ với trường hợp: "$O$" là cận trên của hàm, còn "xấu nhất" là một cách chọn dữ liệu. Hai khái niệm độc lập.

## Luyện tập

- [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost): tính chính xác số lượt và số so sánh của nổi bọt.
- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): xem bài toán có lời giải khác nhau về độ phức tạp tùy cách tổ chức dữ liệu.
- Tự luyện: tìm kiếm tuần tự ([Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search)) một giá trị trong mảng $n$ phần tử. Nêu $T_{\min}$ và $T_{\max}$.

::: Đáp án tự luyện
Tốt nhất: phần tử cần tìm ở vị trí đầu, 1 phép so sánh, $O(1)$. Xấu nhất: ở cuối hoặc không có, $n$ so sánh, $O(n)$. Trung bình (nếu vị trí đều): khoảng $(n+1)/2$, vẫn $O(n)$.
:::

## Tự kiểm tra

1. Một thuật toán có $T_{\min} = O(n)$ và $T_{\max} = O(n^2)$. Có thể nói nó là $O(n)$ không?

> **Đáp án**
> Không. Tuyên bố $O(\cdot)$ chung cho thuật toán phải đúng với mọi dữ liệu, nên là $O(n^2)$. Có thể nói riêng "tốt nhất là $O(n)$".

2. Vì sao sắp xếp chọn có tốt nhất và xấu nhất cùng bậc?

> **Đáp án**
> Mỗi lượt đều quét hết phần chưa sắp để tìm phần tử nhỏ nhất, bất kể dữ liệu; nên luôn $n(n-1)/2$ so sánh.

3. Tính số so sánh của nổi bọt có cờ dừng sớm trên `[2, 1, 3, 4]`.

> **Đáp án**
> Lượt 1: so sánh (2,1) đổi chỗ, (2,3), (3,4): 3 so sánh, có đổi chỗ. Mảng thành `[1, 2, 3, 4]`. Lượt 2: 2 so sánh (nếu dùng chặn phần đã xếp) hoặc 3 so sánh, không đổi chỗ, dừng. Tổng 5 hoặc 6 tùy cài đặt; bậc là $O(n)$ vì chỉ cần hằng số lượt.
