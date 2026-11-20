# Bài toán và thuật toán

## Vì sao cần

Trước khi nói thuật toán nhanh hay chậm, bạn cần biết mình đang giải **bài toán** nào và **thuật toán** là gì. Một bài toán mô tả "cho gì, cần tìm gì"; một thuật toán là cách làm cụ thể để đi từ cái cho đến cái cần tìm. Bài này đặt nền cho mọi bài sau: mỗi lần học một kỹ thuật như [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force), [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method) hay [Đệ quy](#/courses/mat3514/lessons/mat3514-recursion), bạn sẽ hỏi lại đúng các câu hỏi ở đây. Hãy xem mô phỏng bên dưới để thấy cùng một bài toán có thể có nhiều thuật toán khác nhau.

## Ý tưởng

### Bài toán

Trong khoa học máy tính, **bài toán** là một việc cần máy tính giải quyết. Khi nói "bài toán" ta hiểu là cả một lớp các bài cùng loại, chỉ khác nhau ở tham số. Ví dụ "sắp xếp một dãy số" là một bài toán; sắp xếp dãy $(5,2,9)$ chỉ là một **thể hiện** (instance) của nó. Mỗi bài toán gồm:

- **Đầu vào (input)**: thông tin cho trước.
- **Đầu ra (output)**: thông tin cần tìm, kèm điều kiện nó phải thỏa.

### Thuật toán

**Thuật toán** (algorithm) là một dãy hữu hạn các thao tác đơn giản, sắp xếp theo thứ tự xác định, biến thông tin đầu vào thành thông tin đầu ra. Có thể trình bày thuật toán bằng ngôn ngữ tự nhiên, mã giả (pseudo code) hoặc sơ đồ khối (lưu đồ).

### Năm đặc trưng cần kiểm tra

| Đặc trưng | Nghĩa là | Vi phạm khi |
|---|---|---|
| Tính dừng | Sau hữu hạn bước thì ra kết quả | Vòng lặp mà điều kiện không bao giờ sai |
| Tính xác định | Mỗi bước chỉ có đúng một cách thực hiện, cùng đầu vào cho cùng đầu ra | Bước "chọn một phần tử bất kỳ" mà không nói rõ quy tắc |
| Tính phổ dụng | Chạy được với mọi bộ tham số hợp lệ của bài toán | Chỉ đúng khi mảng có đúng 3 phần tử |
| Hiệu quả về thời gian | Chạy trong giới hạn cho phép | Cần $n!$ bước cho $n=100$ |
| Hiệu quả về không gian | Bộ nhớ cho dữ liệu và kết quả trung gian nằm trong giới hạn | Cần bảng $n\times n$ khi $n=10^6$ |

Tính hiệu quả còn kéo theo tính **khả thi**: thuật toán phải cài đặt được trên máy thật.

## Ví dụ chạy tay

Bài toán: tìm giá trị lớn nhất của dãy. Input: dãy $a_1,\dots,a_n$ với $n\ge 1$. Output: số $m$ sao cho $m$ thuộc dãy và $m\ge a_i$ với mọi $i$.

Thuật toán: giữ biến `max`, gán bằng $a_1$, duyệt các phần tử còn lại và cập nhật khi gặp số lớn hơn. Chạy trên dãy $(4, 9, 2, 9, 7)$:

| Bước | Đang xét | max trước | max sau |
|---|---|---|---|
| 0 | khởi tạo $a_1=4$ | | 4 |
| 1 | 9 | 4 | 9 |
| 2 | 2 | 9 | 9 |
| 3 | 9 | 9 | 9 |
| 4 | 7 | 9 | 9 |

Kiểm tra từng đặc trưng: dừng sau $n-1$ lần so sánh; mỗi bước xác định; chạy với mọi $n\ge1$; thời gian $O(n)$ và bộ nhớ phụ $O(1)$.

## Cài đặt

```java
static int findMax(int[] a) {
    int max = a[0];
    for (int i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
```

Dòng `int max = a[0]` giả định mảng không rỗng. Đó chính là một phần của đặc tả bài toán: nếu đầu vào có thể rỗng, bạn phải nói rõ đầu ra là gì.

## Độ phức tạp

Chọn thuật toán tốt nhất theo nghĩa nào đó (thường là thời gian, rồi đến bộ nhớ). Ví dụ trong tài liệu: tính định thức cấp $n$ của ma trận vuông bằng định nghĩa đệ quy cần cỡ $n!$ phép tính, còn khử Gauss-Jordan cần cỡ $n^3$. Với $n=100$ thì $100!$ là con số không thể chạy nổi, còn $100^3=10^6$ là tức thì. Cách ước lượng này được hình thức hóa trong [Thời gian thực hiện và mô hình RAM](#/courses/mat3514/lessons/mat3514-running-time-model) và [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Lỗi thường gặp

- Viết code ngay mà chưa xác định rõ input hợp lệ (mảng rỗng, $n=0$, giá trị âm), nên chương trình hỏng ở biên.
- Nhầm bài toán với thể hiện: kiểm tra thuật toán chỉ trên một bộ dữ liệu rồi kết luận đúng.
- Bước mơ hồ như "chọn một phần tử thích hợp" làm mất tính xác định.
- Quên chứng minh tính dừng: vòng `while` mà biến điều khiển không tiến về điều kiện thoát.
- Chỉ so sánh thuật toán bằng cảm giác thay vì đếm số bước theo cỡ dữ liệu.

## So sánh / liên hệ

Không phải bài toán nào cũng có thuật toán hiệu quả: lớp bài toán giải được trong thời gian đa thức và lớp còn lại được bàn ở [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes). Ở mức hình thức hơn, khái niệm "thuật toán" được mô hình bằng [Máy Turing](#/courses/mat3504/lessons/mat3504-turing-machine).

## Luyện tập

- [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force): thuật toán đơn giản nhất, thử mọi khả năng; so sánh với thuật toán tốt hơn để thấy vai trò của tính hiệu quả.
- [Thời gian thực hiện và mô hình RAM](#/courses/mat3514/lessons/mat3514-running-time-model): học cách đếm bước cơ bản để đánh giá "hiệu quả thời gian".
- Tự luyện: viết đặc tả (input, output) cho bài toán "tìm vị trí của $x$ trong dãy", rồi kiểm tra thuật toán tìm tuần tự theo năm đặc trưng.

::: Gợi ý đáp án
Input: dãy $a_1..a_n$ và giá trị $x$. Output: chỉ số $i$ sao cho $a_i=x$, hoặc $-1$ nếu không có. Duyệt từ trái sang phải: dừng sau tối đa $n$ bước, xác định, chạy với mọi $n\ge0$, thời gian $O(n)$, bộ nhớ phụ $O(1)$.
:::

## Tự kiểm tra

**Câu 1.** Phân biệt bài toán và thể hiện của bài toán.

> **Đáp án**
> Bài toán là cả lớp các trường hợp cùng loại, xác định bởi cặp (input, output) tổng quát. Thể hiện là một bộ dữ liệu cụ thể của bài toán đó.

**Câu 2.** Thuật toán sau có đủ năm đặc trưng không? "Lặp: chọn ngẫu nhiên một số trong mảng, nếu nó bằng $x$ thì dừng."

> **Đáp án**
> Không. Nếu $x$ không có trong mảng thì không bao giờ dừng (mất tính dừng), và kết quả phụ thuộc vào lựa chọn ngẫu nhiên nên mất tính xác định.

**Câu 3.** Hai thuật toán cho cùng một bài toán, một cái cần $n!$ bước, một cái cần $n^3$ bước. Với $n=20$ thì chênh lệch cỡ nào?

> **Đáp án**
> $20!\approx 2{,}4\times10^{18}$ còn $20^3=8000$. Thuật toán thứ hai nhanh hơn cỡ $3\times10^{14}$ lần, nên tính hiệu quả quyết định thuật toán có dùng được hay không.
