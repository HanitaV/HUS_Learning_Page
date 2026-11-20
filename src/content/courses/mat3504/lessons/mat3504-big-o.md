# Ký hiệu O lớn

## Vì sao cần

Từ [Thời gian thực hiện và mô hình RAM](#/courses/mat3504/lessons/mat3504-running-time-model) bạn đã có $T(n)$ như $5n+4$ hay $2n^2+3n+5$. Hằng số trong đó phụ thuộc cách đếm, còn điều quan trọng là $T$ tăng nhanh cỡ nào khi $n$ lớn. Giả sử hai thuật toán có $T_1(n) = C_1 n$ và $T_2(n) = C_2 n^2$ với $C_1, C_2$ là hằng số. Khi $n$ đủ lớn thì $T_2 \gg T_1$ bất kể giá trị hằng số. Ký hiệu $O$ lớn ra đời để loại bỏ các thành phần không quan trọng và làm rõ tốc độ tăng của hàm.

## Phát biểu

**Định nghĩa.** Cho $f(n)$, $g(n)$ là hai hàm không âm đồng biến theo $n$. Ta nói $f(n) = O(g(n))$ khi và chỉ khi tồn tại hằng số $C > 0$ và $n_0$ sao cho

$$f(n) \le C \cdot g(n) \quad \text{với mọi } n \ge n_0.$$

Ý nghĩa của từng ký hiệu:

- $C$: hệ số nhân, cho phép bỏ qua hằng số.
- $n_0$: ngưỡng, cho phép bỏ qua hành vi với $n$ nhỏ.
- $g(n)$: "thước đo độ lớn" của $f(n)$. Người ta cố chọn $g$ sát nhất có thể với $f$.

Nói cách khác, tốc độ tăng của $f(n)$ khi $n \to \infty$ không vượt quá tốc độ tăng của $g(n)$. Ký hiệu $f(n) = O(g(n))$ đọc là "f là O lớn của g"; dấu bằng ở đây chỉ là quy ước viết, không phải đẳng thức thông thường.

## Giải thích

Phép chứng minh $f(n) = O(g(n))$ luôn gồm việc **chỉ ra** một cặp $(C, n_0)$. Ví dụ trong slide: $f(n) = 2n^2 + 3n + 5$. Với mọi $n \ge 1$ ta có $n \le n^2$ và $1 \le n^2$ nên

$$f(n) = 2n^2 + 3n + 5 \le 2n^2 + 3n^2 + 5n^2 = 12 n^2.$$

Vậy chọn $C = 12$, $n_0 = 1$, ta viết $f(n) = O(n^2)$. Trực giác: khi $n$ lớn, số hạng $n^2$ lấn át các số hạng còn lại.

Hệ quả hữu ích: với đa thức bậc $k$, $a_k n^k + \dots + a_0 = O(n^k)$. Bạn chỉ cần giữ số hạng bậc cao nhất và bỏ hệ số.

## Các lớp độ phức tạp thường gặp

| Ký hiệu | Tên gọi | Ví dụ |
|---|---|---|
| $O(1)$ | hằng số | truy cập $a[i]$ |
| $O(\log n)$ | logarit | tìm kiếm nhị phân |
| $O(n)$ | tuyến tính | duyệt mảng |
| $O(n \log n)$ | gần tuyến tính | sắp xếp trộn |
| $O(n^k)$ | đa thức | $k = 2$: sắp xếp nổi bọt |
| $O(2^n)$ | hàm mũ | duyệt mọi tập con |
| $O(n!)$ | giai thừa | duyệt mọi hoán vị |

Bảng giá trị minh họa (làm tròn) cho thấy khoảng cách tăng rất nhanh:

| $n$ | $\log_2 n$ | $n \log_2 n$ | $n^2$ | $n^3$ | $2^n$ |
|---|---|---|---|---|---|
| 2 | 1 | 2 | 4 | 8 | 4 |
| 8 | 3 | 24 | 64 | 512 | 256 |
| 16 | 4 | 64 | 256 | 4096 | 65536 |
| 32 | 5 | 160 | 1024 | 32768 | 4294967296 |

## Ví dụ tính

**Ví dụ 1.** $f(n) = 5n + 4$. Với $n \ge 1$: $5n + 4 \le 5n + 4n = 9n$. Vậy $f(n) = O(n)$ với $C = 9$, $n_0 = 1$.

**Ví dụ 2.** Hai vòng lặp lồng nhau, mỗi vòng chạy $i, j = 1 \dots n-1$, thân là một phép toán sơ cấp:

```java
for (i = 1; i < n; i++)
    for (j = 1; j < n; j++)
        x++;
```

Thân chạy $(n-1)(n-1) = (n-1)^2 = n^2 - 2n + 1$ lần. Vì $n^2 - 2n + 1 \le n^2$ với $n \ge 1$ nên $T(n) = O(n^2)$.

**Ví dụ 3 (chứng minh sai).** Có thể chứng minh $n^3 = O(n^2)$ không? Giả sử có $C$, $n_0$ với $n^3 \le C n^2$ khi $n \ge n_0$; chia hai vế cho $n^2$ được $n \le C$ với mọi $n \ge n_0$, vô lý. Vậy $n^3 \neq O(n^2)$.

## Áp dụng ở đâu

- [Quy tắc tổng và quy tắc nhân](#/courses/mat3504/lessons/mat3504-sum-product-rules): quy tắc tổng và nhân giúp tính $O$ của cả chương trình từ $O$ của từng phần.
- [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost): chuyển số lần lặp của nổi bọt thành $O(n^2)$.
- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation) và [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem): kết quả của các công thức truy hồi cũng được phát biểu bằng $O$.
- [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound): so sánh cận trên $O(n\log n)$ của các thuật toán thực tế với cận dưới của bài toán.
- [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes): ranh giới "đa thức" và "không đa thức" được định nghĩa qua $O$.

## Lỗi thường gặp

- Viết $O(2n)$ hay $O(n + 5)$: phải đơn giản về $O(n)$, vì hằng số bị bỏ.
- Cho rằng $O$ là "đúng bằng": $O$ chỉ là cận trên. $n = O(n^2)$ là đúng, nhưng không sát. Hãy chọn $g$ sát nhất.
- Quên điều kiện "với mọi $n \ge n_0$": một bất đẳng thức đúng với vài giá trị $n$ nhỏ chưa chứng minh được gì.
- So sánh hai thuật toán cùng $O(n)$ rồi kết luận chúng nhanh bằng nhau: $O$ bỏ hằng số, $100n$ và $n$ vẫn khác nhau trong thực tế.
- Nhầm $O(\log n)$ với cơ số: $\log_2 n$ và $\log_{10} n$ chỉ khác một hằng số nên cùng là $O(\log n)$.

## Tự kiểm tra

1. Chứng minh $3n^2 + 10n = O(n^2)$ bằng cách chọn $C$, $n_0$.

> **Đáp án**
> Với $n \ge 1$: $10n \le 10n^2$, nên $3n^2 + 10n \le 13n^2$. Chọn $C = 13$, $n_0 = 1$.

2. $n^2 = O(n^3)$ có đúng không? Có sát không?

> **Đáp án**
> Đúng (chọn $C = 1$, $n_0 = 1$ vì $n^2 \le n^3$), nhưng không sát; cận sát là $O(n^2)$.

3. Thuật toán A có $T_A(n) = 1000n$, thuật toán B có $T_B(n) = n^2$. Với $n$ nào B bắt đầu chậm hơn A?

> **Đáp án**
> $n^2 > 1000n$ khi $n > 1000$. Dưới 1000, B còn nhanh hơn, nhưng về lâu dài $O(n)$ thắng $O(n^2)$ vì hằng số bị lấn át khi $n$ đủ lớn.
