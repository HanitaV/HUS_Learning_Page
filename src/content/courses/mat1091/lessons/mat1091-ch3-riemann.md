# Tích phân xác định Riemann và công thức Newton–Leibniz

## 1. Định nghĩa tích phân xác định (Riemann)

Chia đoạn $[a, b]$ bởi $a = x_0 < x_1 < \dots < x_n = b$, chọn $\xi_i \in [x_{i - 1}, x_i]$ và lập tổng Riemann $\sigma = \sum_{i=1}^n f(\xi_i)(x_i - x_{i - 1})$. Nếu $\sigma$ có giới hạn $I$ khi độ dài khoảng chia lớn nhất tiến về $0$, không phụ thuộc cách chia và cách chọn $\xi_i$, thì $f$ **khả tích** trên $[a, b]$ và $\int_a^b f(x)\,dx = I$.

Mọi hàm liên tục (hoặc bị chặn và có hữu hạn điểm gián đoạn) trên $[a, b]$ đều khả tích.

## 2. Các tính chất cơ bản

Với $f, g$ khả tích trên $[a, b]$, $\alpha, \beta \in \mathbb{R}$ và $c \in [a, b]$:

1. **Tuyến tính:** $\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$.
2. **Cộng đoạn:** $\int_a^b f = \int_a^c f + \int_c^b f$.
3. **Bảo toàn thứ tự:** Nếu $f(x) \le g(x)$ với mọi $x \in [a, b]$ thì $\int_a^b f \le \int_a^b g$.
4. **Đạo hàm theo cận trên:** Nếu $f$ liên tục trên $[a, b]$ thì $F(x) = \int_a^x f(t)\,dt$ khả vi trên $(a, b)$ và $F'(x) = f(x)$.

## 3. Công thức Newton–Leibniz, đổi biến và từng phần

- **Newton–Leibniz:** Nếu $f$ liên tục trên $[a, b]$, $F$ liên tục trên $[a, b]$ và $F'(x) = f(x)$ với mọi $x \in (a, b)$, thì:
  $$\int_a^b f(x)\,dx = F(b) - F(a).$$
- **Đổi biến:** Nếu $u$ có đạo hàm liên tục trên $[a, b]$ và $f$ liên tục trên khoảng chứa $u([a, b])$, thì:
  $$\int_a^b f(u(x)) u'(x)\,dx = \int_{u(a)}^{u(b)} f(t)\,dt.$$
- **Từng phần:** Nếu $u, v$ có đạo hàm liên tục trên $[a, b]$, thì:
  $$\int_a^b u(x) v'(x)\,dx = uv\Big|_a^b - \int_a^b v(x) u'(x)\,dx.$$

Với tích phân xác định: khi đổi biến phải **đổi cận ngay**, khi từng phần phải tính luôn số hạng biên $uv\big|_a^b$.

## 4. Ví dụ minh họa

- **Đổi biến hàm mũ:** Tính $\int_0^1 \frac{2^x}{4^x + 4\cdot 2^x + 3}\,dx$. Đặt $t = 2^x \implies dt = 2^x \ln 2\,dx$, cận $t : 1 \to 2$:
  $$I = \frac{1}{\ln 2}\int_1^2 \frac{dt}{(t + 1)(t + 3)} = \frac{1}{2\ln 2}\int_1^2 \left(\frac{1}{t + 1} - \frac{1}{t + 3}\right)dt = \frac{\ln(6/5)}{2\ln 2}.$$
- **Từng phần chọn $v$ khéo:** Tính $\int_0^1 x\ln(x + 1)\,dx$. Đặt $u = \ln(x + 1)$, $dv = x\,dx$ và chọn $v = \frac{x^2 - 1}{2}$ để số hạng biên triệt tiêu ở cả hai cận:
  $$I = -\int_0^1 \frac{x^2 - 1}{2(x + 1)}\,dx = -\int_0^1 \frac{x - 1}{2}\,dx = \frac{1}{4}.$$
