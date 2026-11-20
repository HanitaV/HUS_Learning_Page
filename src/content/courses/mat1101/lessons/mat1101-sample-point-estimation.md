# Mẫu ngẫu nhiên và ước lượng điểm

Thống kê suy luận đi từ một mẫu quan sát hữu hạn để rút ra thông tin về tổng thể. Bài học này phân biệt mẫu ngẫu nhiên với mẫu quan sát và trình bày các ước lượng điểm không chệch cơ bản.

## 1. Mẫu ngẫu nhiên và thống kê

Trong mô hình lấy mẫu độc lập cùng phân phối (i.i.d.), $X_1, \dots, X_n$ là các biến ngẫu nhiên độc lập có chung phân phối của tổng thể; bộ số $x_1, \dots, x_n$ là một lần quan sát của mẫu ấy. Một **thống kê** là hàm của mẫu không chứa tham số tổng thể chưa biết.

## 2. Các đặc trưng mẫu và ước lượng không chệch

Với $n \ge 2$:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i, \qquad s_n^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2, \qquad S^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2.$$

- $S = \sqrt{S^2}$ là độ lệch chuẩn mẫu hiệu chỉnh; $S/\sqrt{n}$ là sai số chuẩn (SE) của trung bình mẫu.
- Nếu có $m$ quan sát mang tính chất $A$, tỷ lệ mẫu là $\widehat{p} = \frac{m}{n}$.
- Dưới mô hình mẫu i.i.d. có phương sai hữu hạn:
  $$\mathbb{E}(\bar{X}) = \mu, \qquad \mathbb{E}(S^2) = \sigma^2, \qquad \operatorname{Var}(\bar{X}) = \frac{\sigma^2}{n}.$$
  Do đó $\bar{X}$, $S^2$, $\widehat{p}$ lần lượt là các **ước lượng không chệch** của $\mu$, $\sigma^2$, $p$.

Với bảng tần số $(x_j, f_j)$, cỡ mẫu là $n = \sum_j f_j$ (không phải số cột), và:

$$\bar{x} = \frac{\sum_j f_j x_j}{n}, \qquad S^2 = \frac{\sum_j f_j x_j^2 - n\bar{x}^2}{n-1}.$$

## 3. Trung vị và dữ liệu phân lớp

Sắp xếp mẫu thành $x_{(1)} \le \dots \le x_{(n)}$. Trung vị mẫu là $x_{((n+1)/2)}$ nếu $n$ lẻ và $\frac{x_{(n/2)} + x_{(n/2+1)}}{2}$ nếu $n$ chẵn. Khi dữ liệu cho theo lớp $[a_j, b_j)$, thay bằng trung điểm $c_j = \frac{a_j + b_j}{2}$ chỉ cho các ước lượng **xấp xỉ**.

## 4. Ví dụ minh họa (ĐT16, Câu 2a)

Khảo sát chiều cao $X$ (m) của $n = 40$ cây keo theo 6 khoảng từ $(16{,}5; 17]$ đến $(19; 19{,}5]$ với tần số $2, 5, 11, 12, 7, 3$. Dùng các trung điểm $16{,}75; 17{,}25; \dots; 19{,}25$:

$$\sum f_j c_j = 723, \quad \sum f_j c_j^2 = 13084 \implies \bar{x} \approx \frac{723}{40} = 18{,}075\text{ m},$$

$$S^2 \approx \frac{13084 - 40(18{,}075)^2}{39} \approx 0{,}4045\text{ m}^2.$$

Tỷ lệ cây cao trên $18\text{ m}$ tính chính xác từ ba lớp cuối: $\widehat{p} = \frac{12+7+3}{40} = 0{,}55$.

## Lỗi hay gặp

- Lấy số cột/số lớp làm cỡ mẫu $n$ thay vì tổng tần số $\sum f_j$.
- Nhầm phương sai mẫu $S^2$ với độ lệch chuẩn mẫu $S$.
- Dùng giá trị quảng cáo hoặc giả thuyết thay cho $\bar{x}$.
