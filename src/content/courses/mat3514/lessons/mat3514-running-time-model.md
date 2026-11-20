# Thời gian thực hiện và mô hình RAM

## Vì sao cần

Sau khi có thuật toán ([Bài toán và thuật toán](#/courses/mat3514/lessons/mat3514-algorithm-problem)), câu hỏi tiếp theo là nó chạy nhanh hay chậm. Đo bằng đồng hồ phụ thuộc vào máy, ngôn ngữ và trình biên dịch, nên không so sánh công bằng được. Ta cần một thước đo chỉ phụ thuộc vào thuật toán: đếm số phép toán sơ cấp theo kích thước dữ liệu. Thước đo đó là thời gian chạy $T(n)$, và mô hình để đếm là mô hình truy cập ngẫu nhiên (RAM).

## Tính độc lập

Theo slide, việc đánh giá thời gian có ba tính chất:

- Không phụ thuộc phần cứng, ngôn ngữ lập trình, chương trình dịch.
- Không cần lập trình, chỉ cần phân tích thuật toán.
- Chỉ dựa trên số phép toán mà thuật toán thực hiện.

## Mô hình RAM

Trong mô hình RAM (Random Access Machine), các **phép toán sơ cấp** gồm:

- phép tính số học (cộng, trừ, nhân, chia);
- phép tính logic (so sánh, `&&`, `||`, `!`);
- phép gán và các phép truy nhập bộ nhớ (đọc, ghi, sao chép một ô);
- câu lệnh đơn, câu lệnh điều khiển, gọi thủ tục con.

Quy ước thêm của slide về đơn vị: một ô nhớ lưu trọn một dữ liệu đơn (dài hay ngắn đều tính một ô), một đơn vị thời gian là thời gian thực hiện một phép số học hay logic cơ bản. Mỗi phép toán sơ cấp tốn thời gian $O(1)$, tức là hằng số không phụ thuộc vào $n$.

## Kích thước dữ liệu và $T(n)$

**Kích thước dữ liệu vào** thường ký hiệu là một số nguyên dương $n$: số phần tử của mảng, số đỉnh của đồ thị, số chữ số của một số, độ dài xâu. Thời gian thực hiện thuật toán là tổng số phép toán sơ cấp để biến input thành output. Một thuật toán áp dụng cho bài toán kích thước $n$ cần tổng cộng $T(n)$ phép toán sơ cấp. $T(n)$ chính là **độ phức tạp thời gian** của thuật toán, đặc trưng cho hiệu năng của nó.

Có một điểm tinh tế được slide nhấn mạnh: kích thước và mẫu dữ liệu vào ảnh hưởng đến số phép toán, nhưng chúng chỉ biết được khi chạy. Cùng một $n$ mà các input khác nhau có thể cho $T$ khác nhau, xem [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average).

## Ví dụ chạy tay

Tính tổng mảng $a$ gồm $n$ phần tử:

```java
int sum = 0;                          // 1 phép gán
for (int i = 0; i < n; i++) {         // gán i=0: 1; so sánh: n+1 lần; i++: n lần
    sum = sum + a[i];                 // mỗi lượt: 1 truy cập a[i], 1 cộng, 1 gán = 3
}
return sum;                           // 1
```

Đếm: $1 + 1 + (n+1) + n + 3n + 1 = 5n + 4$. Vậy $T(n) = 5n + 4$ phép toán sơ cấp. Bảng với vài giá trị:

| $n$ | $T(n) = 5n+4$ |
|---|---|
| 1 | 9 |
| 10 | 54 |
| 100 | 504 |

Con số chính xác $5n+4$ phụ thuộc cách ta đếm (mỗi người có thể đếm khác một hằng). Điều bền vững là $T(n)$ **tăng tuyến tính** theo $n$. Việc bỏ qua hằng số và giữ phần tăng nhanh nhất chính là việc của [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Mô hình lý thuyết: máy Turing

Slide của bài sau đối chiếu hai mô hình:

| | Máy Turing | RAM |
|---|---|---|
| Thuật toán là | một máy Turing | mã kiểu Pascal |
| Đơn vị nhớ | một ô băng, một ký hiệu | một ô nhớ chứa trọn một dữ liệu đơn |
| Đơn vị thời gian | một lần chuyển trạng thái | một phép số học hoặc logic cơ bản |
| Thời gian tính toán | số bước chuyển trạng thái | số phép số học và logic |

Máy Turing đơn giản hơn nhưng chậm hơn RAM theo hệ số đa thức, nên khái niệm "đa thức" (lớp P) không đổi giữa hai mô hình. Xem [Máy Turing](#/courses/mat3504/lessons/mat3504-turing-machine) và [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes).

## Lỗi thường gặp

- Đo bằng giây rồi kết luận "thuật toán A nhanh hơn B": kết quả phụ thuộc máy, ngôn ngữ, dữ liệu thử.
- Quên rằng $n$ phải là **kích thước** dữ liệu: với bài toán kiểm tra số nguyên tố của số $N$, kích thước là số chữ số của $N$ (khoảng $\log N$), không phải $N$.
- Coi phép nhân hai số cực lớn là $O(1)$: trong RAM mỗi ô chứa một dữ liệu đơn, giả định đó chỉ hợp lý khi số vừa một từ máy.
- Đếm thiếu các phép ẩn trong vòng lặp (so sánh điều kiện, tăng biến đếm) rồi cho rằng $T(n)$ chỉ là số lần thân vòng lặp.
- Nghĩ rằng $T(n)$ là một con số duy nhất: nó là một hàm theo $n$ (và theo mẫu dữ liệu).

## Luyện tập

- [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o): biến $T(n) = 5n + 4$ thành $O(n)$ và hiểu vì sao được phép.
- [Quy tắc tổng và quy tắc nhân](#/courses/mat3504/lessons/mat3504-sum-product-rules): đếm nhanh $T(n)$ cho mã có vòng lặp lồng nhau mà không cần đếm từng phép.
- Tự luyện: đếm số phép toán sơ cấp của đoạn `for (i = 1; i < n; i++) x = x + i;` và nêu hàm $T(n)$.

::: Đáp án tự luyện
Gán `i=1`: 1. So sánh `i<n`: $n$ lần (với $i = 1..n$, lần cuối sai). `i++`: $n-1$ lần. Thân: $n-1$ lần, mỗi lần 1 cộng và 1 gán. Tổng khoảng $1 + n + (n-1) + 2(n-1) = 4n - 2$. Tức $T(n)$ tuyến tính. Đáp án chi tiết phụ thuộc cách đếm, nhưng bậc luôn là $n$.
:::

## Tự kiểm tra

1. Vì sao độ phức tạp được định nghĩa bằng số phép toán chứ không bằng giây?

> **Đáp án**
> Để kết quả độc lập với phần cứng, ngôn ngữ, trình biên dịch và không cần cài đặt thuật toán mới đánh giá được.

2. Với thuật toán tính tổng $n$ phần tử ở trên, nếu $n$ tăng gấp 10 thì $T(n)$ xấp xỉ tăng bao nhiêu lần?

> **Đáp án**
> Khoảng 10 lần, vì $T(n) = 5n + 4$ tăng tuyến tính (cụ thể $T(100) = 504 \approx 9{,}3 \times T(10) = 54$).

3. Kích thước dữ liệu vào của bài toán "kiểm tra số $N$ có phải số nguyên tố" là gì?

> **Đáp án**
> Là số chữ số (bit) biểu diễn $N$, tức khoảng $\log N$. Thuật toán thử chia $\sqrt{N}$ lần vì thế là hàm mũ theo kích thước dữ liệu.
