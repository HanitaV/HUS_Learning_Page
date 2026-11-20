# Giải tích tổ hợp, tổng có trọng số và tích phân suy rộng

Chương 0 chuẩn bị ba công cụ tính toán xuyên suốt môn Xác suất – Thống kê: đếm đúng đối tượng, đọc đúng tổng có trọng số và tính tích phân trên miền hữu hạn lẫn vô hạn.

## 1. Giai thừa, chỉnh hợp và tổ hợp

Với số nguyên $n \ge 1$, đặt $n! = 1 \cdot 2 \cdots n$ và quy ước $0! = 1$. Với $0 \le k \le n$:

$$A_n^k = \frac{n!}{(n-k)!}, \qquad \binom{n}{k} = C_n^k = \frac{n!}{k!(n-k)!}.$$

- **$A_n^k$** đếm số danh sách **có thứ tự** gồm $k$ phần tử khác nhau chọn từ $n$ phần tử.
- **$\binom{n}{k}$** đếm số tập con **không thứ tự** gồm $k$ phần tử chọn từ $n$ phần tử.
- Nếu được lặp và có $k$ vị trí phân biệt, mỗi vị trí có $n$ lựa chọn, số danh sách là $n^k$.

### Quy tắc cộng và quy tắc nhân

- **Quy tắc cộng:** Nếu các trường hợp đôi một *không giao nhau* có lần lượt $m_1, \dots, m_r$ cách, tổng số cách là $m_1 + \dots + m_r$.
- **Quy tắc nhân:** Nếu một công việc gồm $r$ bước liên tiếp, bước $i$ luôn có $m_i$ lựa chọn với mỗi lựa chọn ở các bước trước, số cách là $m_1 \cdots m_r$.

**Ví dụ (ĐT22, Câu 4):** Trường THPT có 12 lớp 10, mỗi lớp cử 3 học sinh giao lưu. Các học sinh cùng lớp không bắt tay nhau; hai học sinh khác lớp bắt tay đúng 1 lần. Chọn 2 lớp có $\binom{12}{2} = 66$ cách; mỗi cặp lớp có $3 \cdot 3 = 9$ cái bắt tay. Tổng số lần bắt tay là $66 \cdot 9 = 594$.

## 2. Tổng có trọng số

Nếu giá trị $x_i$ xuất hiện $n_i$ lần trong dữ liệu, thì:

$$n = \sum_i n_i, \qquad S_1 = \sum_i n_i x_i, \qquad S_2 = \sum_i n_i x_i^2, \qquad \bar{x} = \frac{S_1}{n}.$$

Trong bảng phân phối xác suất, thay tần số $n_i$ bằng xác suất $p_i$ (với $\sum_i p_i = 1$) để tính kỳ vọng $\mathbb{E}X = \sum_i x_i p_i$. Lưu ý tách biệt $\mathbb{E}(X^2) = \sum_i x_i^2 p_i$ và $(\mathbb{E}X)^2$.

## 3. Tích phân và chuỗi cơ bản

Với $G'(x) = g(x)$ trên khoảng thích hợp, $\int_a^b g(x)\,dx = G(b) - G(a)$. Các nguyên hàm thường gặp:

$$\int x^r\,dx = \frac{x^{r+1}}{r+1} + C \ (r \ne -1), \qquad \int \frac{dx}{x} = \ln|x| + C, \qquad \int e^{ax}\,dx = \frac{e^{ax}}{a} + C \ (a \ne 0).$$

Với cận vô hạn hoặc hàm không bị chặn tại cận, phải lấy giới hạn. Ví dụ với $\lambda > 0$:

$$\int_0^{+\infty} \lambda e^{-\lambda x}\,dx = \lim_{b \to +\infty} \bigl(1 - e^{-\lambda b}\bigr) = 1.$$

Trong xác suất rời rạc vô hạn đếm được, chuỗi lũy thừa $\sum_{k=0}^{+\infty} \frac{\lambda^k}{k!} = e^\lambda$ và chuỗi cấp số nhân $\sum_{k=0}^{+\infty} q^k = \frac{1}{1-q}$ ($|q| < 1$) là hai công cụ chuẩn hóa cơ bản.

## Lỗi hay gặp

- Dùng $n^k$ cho phép rút không hoàn lại.
- Dùng tổ hợp ở tử nhưng chỉnh hợp ở mẫu trong cùng một mô hình xác suất.
- Quên nhân tần số $n_i$ hoặc nhầm $\sum n_i x_i^2$ với $(\sum n_i x_i)^2$.
- Áp dụng $\frac{x^{r+1}}{r+1}$ khi $r = -1$ hoặc quên lấy giới hạn ở cận $+\infty$.
