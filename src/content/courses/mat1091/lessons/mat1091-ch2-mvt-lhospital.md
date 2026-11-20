# Định lý Fermat, Rolle, Lagrange, Cauchy và quy tắc L'Hôpital

## 1. Các định lý giá trị trung bình

- **Định lý Fermat:** Nếu $f$ xác định trên khoảng mở $I$, đạt cực trị địa phương tại $c \in I$ và $f'(c)$ tồn tại hữu hạn thì $f'(c) = 0$.
- **Định lý Rolle:** Nếu $f : [a, b] \to \mathbb{R}$ liên tục trên $[a, b]$, khả vi trên $(a, b)$ và $f(a) = f(b)$, thì tồn tại $c \in (a, b)$ sao cho $f'(c) = 0$.
- **Định lý Lagrange:** Nếu $f : [a, b] \to \mathbb{R}$ liên tục trên $[a, b]$ và khả vi trên $(a, b)$, thì tồn tại $c \in (a, b)$ sao cho:
  $$f(b) - f(a) = f'(c)(b - a).$$
- **Định lý Cauchy:** Nếu $f, g : [a, b] \to \mathbb{R}$ liên tục trên $[a, b]$, khả vi trên $(a, b)$ và $g'(x) \ne 0$ với mọi $x \in (a, b)$, thì $g(b) \ne g(a)$ và tồn tại $c \in (a, b)$ sao cho:
  $$\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}.$$

### Hệ quả về tính đơn điệu

Nếu $f$ khả vi trên khoảng mở $I$:
- $f'(x) > 0$ với mọi $x \in I \implies f$ tăng ngặt trên $I$.
- $f'(x) < 0$ với mọi $x \in I \implies f$ giảm ngặt trên $I$.
- $f'(x) = 0$ với mọi $x \in I \implies f$ là hàm hằng trên $I$.

### Ví dụ: Chứng minh bất đẳng thức bằng Lagrange

Chứng minh $\frac{x}{1 + x} < \ln(1 + x) < x$ với mọi $x > 0$.

- Áp dụng định lý Lagrange cho $f(t) = \ln(1 + t)$ trên $[0, x]$: tồn tại $c \in (0, x)$ sao cho $\ln(1 + x) - \ln 1 = \frac{1}{1 + c}(x - 0)$, tức $\ln(1 + x) = \frac{x}{1 + c}$.
- Vì $0 < c < x$ nên $\frac{1}{1 + x} < \frac{1}{1 + c} < 1$. Nhân cả ba vế với $x > 0$ thu được $\frac{x}{1 + x} < \ln(1 + x) < x$.

## 2. Quy tắc L'Hôpital

Xét $x \to x_0^+$ hoặc $x \to x_0^-$ ($x_0 \in \mathbb{R}$). Giả sử $f, g$ khả vi trên một khoảng một phía sát $x_0$, với $g(x) \ne 0$ và $g'(x) \ne 0$ trên khoảng đó. Nếu $f(x), g(x) \to 0$ hoặc $|g(x)| \to +\infty$, đồng thời $\lim \frac{f'(x)}{g'(x)} = L \in \mathbb{R} \cup \{-\infty, +\infty\}$ tồn tại, thì:

$$\lim \frac{f(x)}{g(x)} = L.$$

Quy tắc cũng đúng cho giới hạn hai phía (nếu thỏa cả hai phía với cùng $L$) và khi $x \to \pm\infty$.

*Lưu ý:* Chỉ áp dụng L'Hôpital cho dạng $\frac{0}{0}$ hoặc $\frac{\infty}{\infty}$. Các dạng $0 \cdot \infty$ hoặc $\infty - \infty$ phải biến đổi về phân thức trước khi áp dụng.
