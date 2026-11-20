# Số lần lặp của sắp xếp nổi bọt

## Vì sao cần

[Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) gồm hai vòng lặp lồng nhau, và câu hỏi tự nhiên là: tổng cộng nó lặp bao nhiêu lần, nên chạy bao lâu? Bài này đếm chính xác số lần lặp của vòng trong, đưa ra $\frac{n(n-1)}{2}$ và kết luận $O(n^2)$. Đây là ví dụ mẫu để áp dụng [Quy tắc tổng và quy tắc nhân](#/courses/mat3504/lessons/mat3504-sum-product-rules) cho vòng lặp lồng nhau và đọc kết quả bằng [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o). Hãy xem phần mô phỏng bên dưới để thấy mỗi lượt kết thúc sau ít phép so sánh hơn lượt trước.

## Phát biểu

Giả sử một lần lặp của vòng trong (kiểm tra và đổi chỗ nếu cần) tốn thời gian bị chặn bởi hằng $c$. Với mảng $n$ phần tử:

- Vòng ngoài chạy đúng $n$ lần, đánh số $i=0,\dots,n-1$.
- Ở lượt $i$, vòng trong chạy $n-1-i$ lần: lượt $0$ có $n-1$ lần, lượt $1$ có $n-2$ lần, ..., lượt $n-1$ có $0$ lần.

Tổng số lần lặp:

$$0+1+\dots+(n-1)=\frac{n(n-1)}{2},$$

nên tổng thời gian là $c\cdot\dfrac{n(n-1)}{2}=O(n^2)$.

## Giải thích / chứng minh

Cách cộng cặp (Gauss). Viết tổng $S=1+2+\dots+(n-1)$ hai lần, một lần xuôi, một lần ngược:

$$2S=\underbrace{n+n+\dots+n}_{n-1\text{ số hạng}}=n(n-1)\ \Rightarrow\ S=\frac{n(n-1)}{2}.$$

Để kết luận $O(n^2)$: $c\frac{n(n-1)}{2}=\frac c2n^2-\frac c2n\le\frac c2n^2$ với mọi $n\ge1$, nên chọn hằng $\frac c2$ trong định nghĩa [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

Cách hình dung: các phép so sánh tương ứng với các ô phía trên đường chéo của bảng $n\times n$, tức khoảng một nửa của $n^2$ ô.

## Ví dụ tính

Với $n=4$, bản cơ bản (không dừng sớm) so sánh:

| Lượt $i$ | Số lần lặp vòng trong $n-1-i$ |
|---|---|
| 0 | 3 |
| 1 | 2 |
| 2 | 1 |
| 3 | 0 |
| Tổng | $3+2+1+0=6=\frac{4\cdot3}{2}$ |

Với $n=10$ có $45$ lần; với $n=1000$ có $499\,500$ lần; tăng $n$ lên gấp 10 thì số lần tăng khoảng 100 lần. Đây là dấu hiệu của $O(n^2)$.

Bản dừng sớm ([Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) có biến cờ): nếu một lượt không đổi chỗ thì mảng đã sắp và dừng. Với mảng đã sắp như `3, 6, 11, 25, 39`, chỉ cần lượt đầu với $n-1=4$ phép so sánh, tức $O(n)$ trường hợp tốt nhất. Trường hợp xấu nhất vẫn $\frac{n(n-1)}{2}$ (mảng đảo ngược). Xem phân loại ở [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average).

## Áp dụng ở đâu

- [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort): kết luận độ phức tạp $O(n^2)$ của thuật toán.
- [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort): phiên bản tổng quát với `Comparable` có cùng chi phí, nhưng mỗi lần so sánh gọi `compareTo`.
- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): đo thực nghiệm số phép so sánh và đổi chỗ, đối chiếu với $\frac{n(n-1)}{2}$.
- [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) và [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort): cùng dạng tổng $\sum(n-1-i)$ cho số phép so sánh, nên cũng $O(n^2)$.

Cách làm tổng quát: số lần lặp của vòng ngoài nhân với chi phí trung bình của vòng trong (hoặc cộng theo từng lượt khi vòng trong phụ thuộc $i$), đúng như [Quy tắc tổng và quy tắc nhân](#/courses/mat3504/lessons/mat3504-sum-product-rules).

## Lỗi thường gặp

- Viết $n^2$ lần lặp vì "hai vòng $n$". Vòng trong ở lượt $i$ chỉ chạy $n-1-i$ lần, tổng bằng một nửa.
- Nhầm công thức thành $\frac{n(n+1)}{2}$. Ở đây tổng là $1+\dots+(n-1)$ nên có $n(n-1)/2$.
- Nghĩ rằng số phép so sánh là số phép đổi chỗ. So sánh luôn bằng $\frac{n(n-1)}{2}$ ở bản cơ bản; số lần đổi chỗ phụ thuộc dữ liệu (bằng số cặp nghịch thế).
- Kết luận bản dừng sớm "nhanh hơn $O(n^2)$" cho mọi đầu vào. Chỉ trường hợp tốt nhất là $O(n)$.
- Bỏ hằng $c$ rồi quên nó phải bị chặn: nếu so sánh tốn thời gian phụ thuộc $n$ (so sánh chuỗi dài), tổng không còn là $O(n^2)$.

## Tự kiểm tra

**1.** Với $n=4$, bản cơ bản so sánh bao nhiêu lần?

> **Đáp án**
> $3+2+1=6$ lần.

**2.** Với mảng $n=5$ đã sắp, bản dừng sớm thực hiện bao nhiêu phép so sánh? Bản cơ bản thì sao?

> **Đáp án**
> Bản dừng sớm: một lượt, $n-1=4$ phép so sánh, không đổi chỗ nên dừng. Bản cơ bản: $4+3+2+1=10$.

**3.** (Vận dụng) Một thuật toán có vòng ngoài $i=1..n$ và vòng trong $j=i..n$. Đếm số lần lặp và kết luận bậc.

> **Đáp án**
> Lượt $i$ chạy $n-i+1$ lần: tổng $n+(n-1)+\dots+1=\frac{n(n+1)}{2}=O(n^2)$.
