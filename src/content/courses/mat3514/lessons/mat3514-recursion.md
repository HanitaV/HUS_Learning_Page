# Đệ quy

## Vì sao cần

Nhiều bài toán có cấu trúc tự lặp lại: tính $n!$ cần $(n-1)!$, chuyển $n$ đĩa cần chuyển $n-1$ đĩa. Thay vì viết vòng lặp phức tạp, bạn mô tả bài toán qua chính nó với tham số nhỏ hơn. Đó là **đệ quy** (recursion), nền tảng của [Chia để trị](#/courses/mat3514/lessons/mat3514-divide-and-conquer), [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking), [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3514/lessons/mat3514-dfs) và [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming). Quan sát mô phỏng bên dưới để thấy các lời gọi xếp chồng lên nhau rồi lần lượt trả về.

## Ý tưởng

Bài toán $T$ giải được bằng thuật toán đệ quy nếu lời giải của $T$ dùng lời giải của bài toán $T'$ cùng dạng nhưng với đầu vào "nhỏ hơn hoặc đơn giản hơn". Hai tính chất cần có:

1. **Trường hợp suy biến (base case)**: với một số giá trị đặc biệt của tham số, bài toán có lời giải trực tiếp.
2. **Bước đệ quy (general case)**: với tham số còn lại, quy về cùng bài toán với bộ tham số mới và sau hữu hạn bước thì tới trường hợp suy biến.

Lược đồ chung theo tài liệu:

```text
Recursive_Algorithm(p)
    if (p = p0)            // trường hợp suy biến
        <giải trực tiếp>
    else                   // trường hợp tổng quát
        <thao tác trước>
        Recursive_Algorithm(p')   // p' gần p0 hơn p
        <thao tác sau>
    endif
End.
```

Chuỗi tham số $p_n\to p_{n-1}\to\dots\to p_0$ phải kết thúc; nếu không thuật toán không dừng.

### Cách máy thực hiện

Mỗi lần gọi chương trình con, chương trình đang chạy tạm dừng; địa chỉ quay về và biến cục bộ được cất vào vùng nhớ **ngăn xếp** (stack, xem [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt)). Khi lời gọi kết thúc, khung của nó bị gỡ và máy quay về chỗ đã dừng. Thứ tự giải phóng ngược với thứ tự cấp phát. Chạy đệ quy nghĩa là chạy một dãy chương trình con lồng nhau cho tới khi gặp trường hợp suy biến.

## Ví dụ chạy tay

Tính $S(n)=n!$ với $S(1)=1$ và $S(n)=n\cdot S(n-1)$. Với $n=4$:

| Pha | Lời gọi | Ghi chú |
|---|---|---|
| Đi xuống | S(4) → S(3) → S(2) → S(1) | ngăn xếp sâu 4 khung |
| Chạm đáy | S(1) = 1 | trường hợp suy biến |
| Đi lên | S(2) = 2·1 = 2 | gỡ khung S(1) |
| Đi lên | S(3) = 3·2 = 6 | gỡ khung S(2) |
| Đi lên | S(4) = 4·6 = 24 | gỡ khung S(3) |

Phép nhân chỉ thực hiện lúc đi lên, tức là sau khi lời gọi con trả về.

## Cài đặt

```java
static long factorial(int n) {
    if (n <= 1) {              // trường hợp suy biến
        return 1;
    }
    return n * factorial(n - 1);   // bước đệ quy, n giảm dần về 1
}
```

Hai ví dụ kinh điển khác trong tài liệu: [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci) với $F(1)=F(2)=1$, $F(n)=F(n-1)+F(n-2)$, và [Tháp Hà Nội](#/courses/mat3514/lessons/mat3514-tower-of-hanoi). Cả hai có hai lời gọi đệ quy mỗi lần, nên cây lời gọi phân nhánh thay vì thành một đường thẳng.

## Độ phức tạp

| | Giai thừa | Fibonacci ngây thơ | Tháp Hà Nội |
|---|---|---|---|
| Thời gian | $O(n)$ | $O(2^n)$ | $O(2^n)$ |
| Bộ nhớ ngăn xếp | $O(n)$ | $O(n)$ | $O(n)$ |

Thời gian được tính bằng công thức truy hồi, xem [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation), rồi giải bằng [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method) hoặc [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem). Chi phí bộ nhớ là độ sâu lớn nhất của ngăn xếp lời gọi; độ sâu quá lớn gây tràn ngăn xếp (StackOverflowError trong Java). Tính đúng được chứng minh bằng quy nạp theo kích thước đầu vào, xem [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness).

## Lỗi thường gặp

- Thiếu trường hợp suy biến hoặc đặt sai điều kiện, ví dụ `n == 1` trong khi gọi `factorial(0)`, dẫn tới đệ quy vô hạn.
- Tham số không tiến về trường hợp suy biến, như gọi `f(n)` thay vì `f(n - 1)`.
- Quên rằng phần mã sau lời gọi đệ quy chạy lúc đi lên, nên in hoặc cộng dồn sai thứ tự.
- Dùng đệ quy phân nhánh khi các bài toán con trùng nhau (Fibonacci), làm số lời gọi tăng theo hàm mũ.
- Đệ quy quá sâu (như $n=10^5$) mà không nghĩ tới giới hạn ngăn xếp.

## So sánh / liên hệ

Ưu điểm của đệ quy là ngắn gọn, trong sáng; nhược điểm là mỗi lời gọi tạo tập biến cục bộ riêng nên tốn bộ nhớ và khó hình dung. Có thể thay bằng vòng lặp cộng ngăn xếp tự quản lý, xem [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination).

## Luyện tập

- [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci): đệ quy hai nhánh và vì sao cần ghi nhớ kết quả.
- [Tháp Hà Nội](#/courses/mat3514/lessons/mat3514-tower-of-hanoi): đệ quy với hoán đổi vai trò tham số.
- [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings): liệt kê dãy nhị phân bằng đệ quy, cầu nối sang quay lui.
- Tự luyện: viết đệ quy tính tổng chữ số của $n$, rồi chạy tay với $n=703$.

> **Đáp án**
> `digitSum(n)`: nếu $n<10$ trả về $n$; ngược lại trả về $(n\bmod 10)+$ `digitSum(n/10)`. Với 703: 3 + digitSum(70) = 3 + (0 + digitSum(7)) = 3 + 0 + 7 = 10.

## Tự kiểm tra

**Câu 1.** Hai thành phần bắt buộc của một hàm đệ quy là gì?

> **Đáp án**
> Trường hợp suy biến có lời giải trực tiếp, và bước đệ quy gọi lại chính hàm với tham số tiến dần về trường hợp suy biến.

**Câu 2.** `static int f(int n) { return n * f(n - 1); }` có vấn đề gì?

> **Đáp án**
> Không có trường hợp suy biến nên không bao giờ dừng, cuối cùng gây tràn ngăn xếp.

**Câu 3.** Hàm `static void g(int n) { if (n > 0) { g(n - 1); System.out.print(n); } }` in gì với $n=3$, và nếu đổi hai dòng trong `if` thì sao?

> **Đáp án**
> In `123` (in lúc đi lên). Nếu in trước rồi mới gọi `g(n-1)` thì in `321`.
