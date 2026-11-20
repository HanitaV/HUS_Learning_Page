# Hàm mật độ, hàm phân phối và đặc trưng số

Với biến ngẫu nhiên liên tục có mật độ, xác suất được đo bằng diện tích dưới đường cong mật độ; xác suất tại một điểm đơn lẻ luôn bằng 0.

## 1. Hàm mật độ xác suất (PDF)

Biến ngẫu nhiên liên tục $X$ có hàm mật độ $f_X(x)$ thỏa mãn hai điều kiện:

$$f_X(x) \ge 0 \quad \forall x \in \mathbb{R}, \qquad \int_{-\infty}^{+\infty} f_X(x)\,dx = 1.$$

Xác suất rơi vào khoảng $(a, b)$ là:

$$\mathbb{P}(a < X < b) = \int_a^b f_X(x)\,dx, \qquad \mathbb{P}(X = a) = 0.$$

## 2. Hàm phân phối xác suất (CDF)

$$F_X(x) = \mathbb{P}(X \le x) = \int_{-\infty}^x f_X(t)\,dt, \qquad \mathbb{P}(a < X < b) = F_X(b) - F_X(a).$$

Tại mọi điểm $f_X$ liên tục, $F'_X(x) = f_X(x)$. Khi viết $F_X(x)$, cần chia đầy đủ các nhánh: trước miền hỗ trợ ($F_X = 0$), trong từng đoạn của miền hỗ trợ, và sau miền hỗ trợ ($F_X = 1$).

## 3. Kỳ vọng, phương sai, trung vị và biến đổi

Khi các tích phân tuyệt đối hội tụ:

$$\mathbb{E}X = \int_{-\infty}^{+\infty} x f_X(x)\,dx, \qquad \mathbb{E}[g(X)] = \int_{-\infty}^{+\infty} g(x) f_X(x)\,dx,$$

$$\operatorname{Var}(X) = \int_{-\infty}^{+\infty} x^2 f_X(x)\,dx - (\mathbb{E}X)^2.$$

- **Trung vị** $m$ thỏa $F_X(m) = \frac{1}{2}$; **phân vị mức $q$** là $x_q = \inf\{x : F_X(x) \ge q\}$.
- **Biến đổi $Y = g(X)$:** Phương pháp tổng quát là tìm $F_Y(y) = \mathbb{P}(g(X) \le y)$, sau đó lấy đạo hàm nếu $Y$ có mật độ. Nếu $g$ đơn điệu khả vi, $f_Y(y) = f_X(g^{-1}(y))\left|\frac{d}{dy}g^{-1}(y)\right|$.

## 4. Ví dụ minh họa (ĐT15, Câu 2)

Diện tích lá $X$ ($\text{cm}^2$) có mật độ $f(x) = C x^2(2-x)$ trên $[0, 2]$ và bằng $0$ ngoài đoạn này.

- Chuẩn hóa: $1 = C\int_0^2 (2x^2 - x^3)\,dx = C\left[\frac{2x^3}{3} - \frac{x^4}{4}\right]_0^2 = \frac{4C}{3} \implies C = \frac{3}{4}$ (thỏa $C \ge 0$).
- Kỳ vọng: $\mathbb{E}X = \frac{3}{4}\int_0^2 (2x^3 - x^4)\,dx = \frac{3}{4}\left[\frac{x^4}{2} - \frac{x^5}{5}\right]_0^2 = \frac{6}{5}\text{ cm}^2$.
- Xác suất lá có diện tích lớn hơn $1\text{ cm}^2$:
  $$\mathbb{P}(X > 1) = 1 - \frac{3}{4}\int_0^1 (2x^2 - x^3)\,dx = 1 - \frac{5}{16} = \frac{11}{16}.$$

## Lỗi hay gặp

- Chỉ kiểm tra tích phân bằng 1 mà quên điều kiện không âm $f_X(x) \ge 0$.
- Viết thiếu nhánh $0$ (trước miền) và $1$ (sau miền) trong $F_X(x)$.
- Nhầm $f_X(a)$ là $\mathbb{P}(X = a)$, hoặc nghĩ mật độ không thể lớn hơn 1.
