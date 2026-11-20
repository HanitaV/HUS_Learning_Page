# Định lý chính (Master theorem)

## Vì sao cần

Các thuật toán [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer) đều có truy hồi dạng "chia thành $a$ bài toán con cỡ $n/b$, rồi tốn thêm công sức $n^d$ để chia và kết hợp". Thế lặp từng trường hợp ([Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method)) tốn công và dễ sai. Định lý chính cho kết quả ngay bằng cách so sánh hai số $a$ và $b^d$. Bài này dùng kết quả của [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation) và cho bạn phản xạ đọc độ phức tạp của [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort), [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search), [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen) chỉ từ công thức.

## Phát biểu

Nếu $n$ là lũy thừa của $b$ và

$$T(n)=\begin{cases}1 & n\le 1\\ a\,T(n/b)+n^d & n>1\end{cases}\qquad a\ge1,\ b>1,\ d\ge0,$$

thì

$$T(n)=\begin{cases}O(n^d) & a<b^d\\ O(n^d\log n) & a=b^d\\ O(n^{\log_b a}) & a>b^d.\end{cases}$$

Ý nghĩa các ký hiệu:

- $a$: số bài toán con sinh ra ở mỗi lần chia.
- $b$: hệ số thu nhỏ kích thước ($n\to n/b$).
- $d$: bậc của phần việc ngoài đệ quy $n^d$ (chia và kết hợp).
- $\log_b a$: "bậc của lá": số lá của cây đệ quy là $a^{\log_b n}=n^{\log_b a}$.

## Giải thích / chứng minh

Khai triển $\log_b n$ mức (theo slide):

$$T(n)=a^{\log_b n}T(1)+\dots+a^2\Big(\frac n{b^2}\Big)^d+a\Big(\frac nb\Big)^d+n^d=n^{\log_b a}+n^d\sum_{j=0}^{\log_b n-1}\Big(\frac a{b^d}\Big)^j.$$

Tổng là cấp số nhân công bội $r=a/b^d$:

- $a<b^d$ ($r<1$): tổng bị chặn bởi hằng $\frac1{1-r}$, phần $n^d$ trội hơn $n^{\log_b a}$. Kết quả $O(n^d)$: chi phí dồn ở gốc.
- $a=b^d$ ($r=1$): tổng bằng $\log_b n$ số hạng bằng nhau, nên $O(n^d\log n)$: mọi mức tốn như nhau.
- $a>b^d$ ($r>1$): tổng cấp số nhân bị hạng tử cuối chi phối, ra $O(n^{\log_b a})$: chi phí dồn ở các lá.

## Ví dụ tính

Quy trình: đọc $a,b,d$, tính $b^d$, so sánh, chọn dòng.

| Truy hồi | $a$ | $b$ | $d$ | $b^d$ | So sánh | Kết quả |
|---|---|---|---|---|---|---|
| $2T(n/2)+n^2$ | 2 | 2 | 2 | 4 | $a<b^d$ | $O(n^2)$ |
| $2T(n/2)+n$ ([Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort)) | 2 | 2 | 1 | 2 | $a=b^d$ | $O(n\log n)$ |
| $2T(n/2)+1$ | 2 | 2 | 0 | 1 | $a>b^d$ | $O(n)$ |
| $T(n/2)+1$ ([Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search)) | 1 | 2 | 0 | 1 | $a=b^d$ | $O(\log n)$ |
| $4T(n/2)+n^3$ | 4 | 2 | 3 | 8 | $a<b^d$ | $O(n^3)$ |
| $4T(n/2)+n^2$ | 4 | 2 | 2 | 4 | $a=b^d$ | $O(n^2\log n)$ |
| $4T(n/2)+n$ | 4 | 2 | 1 | 2 | $a>b^d$ | $O(n^2)$ |
| $7T(n/2)+n^2$ ([Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen)) | 7 | 2 | 2 | 4 | $a>b^d$ | $O(n^{\log_2 7})$ |

Một ví dụ khác trong slide dạng mở rộng: $T(n)=3T(n/4)+n\log n$. Đây không phải dạng $n^d$ nên không dùng bảng trên; slide dùng phiên bản tổng quát với điều kiện chính quy $a f(n/b)\le c\,f(n)$: $3\cdot\frac n4\log\frac n4\le\frac34 n\log n$ với $c=\frac34<1$, nên $T(n)=O(n\log n)$.

## Áp dụng ở đâu

- [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort): $a=b=2$, $d=1$ cho $O(n\log n)$.
- [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search): $a=1$, $b=2$, $d=0$ cho $O(\log n)$.
- [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen): 7 phép nhân con trên ma trận cỡ $n/2$, $a=7>b^d=4$ cho $O(n^{\log_2 7})\approx O(n^{2.81})$.
- [Bài tập: giải công thức truy hồi](#/courses/mat3504/lessons/mat3504-hw-recurrences): các truy hồi dạng chia trong phiếu bài tập đều đưa về bảng này (nhưng có thêm phần cộng $-1$, $+3$..., chỉ ảnh hưởng hạng thấp).

## Lỗi thường gặp

- Áp dụng cho truy hồi giảm một đơn vị như $T(n)=3T(n-1)+2$. Dạng đó không có $n/b$ với $b>1$; dùng [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method).
- Nhầm $d$ với bậc của $T$: $d$ là bậc phần ngoài đệ quy. Ở ví dụ $4T(n/2)+n^2$ có $d=2$, không phải $1$. (Slide L3 ghi $d=1$ ở ví dụ này nhưng kết luận $O(n^2\log n)$ lại đúng với $d=2$.)
- So sánh $a$ với $b$ hoặc $d$ thay vì với $b^d$.
- Quên rằng với $a=b^d$ có nhân thêm $\log n$, và lấy $\log$ khác cơ số chỉ đổi hằng số.
- Dùng bảng cho $f(n)$ bất kỳ (như $n\log n$, $2^n$). Phiên bản này chỉ cho $f(n)=n^d$.

## Tự kiểm tra

**1.** $T(n)=2T(n/2)+n$ thuộc trường hợp nào?

> **Đáp án**
> $a=2$, $b=2$, $d=1$ nên $a=b^d$. Cận là $O(n\log n)$.

**2.** Xác định bậc của $T(n)=4T(n/3)+3n-5$ (phiếu bài tập).

> **Đáp án**
> Phần ngoài đệ quy bậc $d=1$. $a=4>b^d=3$ nên $T(n)=O(n^{\log_3 4})\approx O(n^{1.26})$.

**3.** (Vận dụng) Một thuật toán chia bài toán thành 3 phần cỡ $n/2$ và tốn $O(n)$ để kết hợp. Độ phức tạp là gì? Vì sao tốt hơn $O(n^2)$?

> **Đáp án**
> $a=3$, $b=2$, $d=1$, $a>b^d=2$ nên $O(n^{\log_2 3})\approx O(n^{1.585})$. Số mũ $1.585<2$ nên tốt hơn bậc hai; đây chính là dạng của thuật toán Karatsuba.
