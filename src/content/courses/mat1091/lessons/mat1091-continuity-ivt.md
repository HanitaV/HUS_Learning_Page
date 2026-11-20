# Hàm số liên tục và định lý giá trị trung gian

## 1. Liên tục tại một điểm

Hàm $f$ xác định trên một khoảng chứa $x_0$ được gọi là **liên tục tại $x_0$** nếu:

$$\lim_{x \to x_0} f(x) = f(x_0),$$

tương đương với $\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = f(x_0)$. Mọi hàm sơ cấp đều liên tục trên tập xác định của nó.

## 2. Hàm liên tục trên đoạn $[a, b]$

Nếu $f : [a, b] \to \mathbb{R}$ liên tục trên đoạn đóng $[a, b]$ (liên tục phải tại $a$, liên tục trái tại $b$) thì:

1. **Định lý Weierstrass:** $f$ bị chặn và đạt giá trị lớn nhất, giá trị nhỏ nhất trên $[a, b]$.
2. **Định lý giá trị trung gian:** $f$ nhận mọi giá trị nằm giữa $f(a)$ và $f(b)$. Đặc biệt, nếu $f(a)f(b) < 0$ thì tồn tại ít nhất một điểm $c \in (a, b)$ sao cho $f(c) = 0$.

*Ứng dụng:* Để chứng minh phương trình $x^5 - 3x - 1 = 0$ có ba nghiệm trong $(-2, 2)$, xét $f(x) = x^5 - 3x - 1$ liên tục trên $\mathbb{R}$ và tính $f(-2) = -27$, $f(-1) = 1$, $f(0) = -1$, $f(2) = 25$; vì $f$ đổi dấu trên ba khoảng $(-2, -1)$, $(-1, 0)$ và $(0, 2)$ nên có ít nhất ba nghiệm phân biệt.

## 3. Dạng bài tìm tham số để hàm ghép liên tục

Ngoài điểm nối $x_0$, các nhánh của hàm ghép thường là hàm sơ cấp nên tự động liên tục trên miền của từng nhánh. Do đó chỉ cần xét tính liên tục tại điểm nối $x_0$:

1. Tính đúng $f(x_0)$ theo nhánh có dấu bằng.
2. Tính giới hạn trái $\lim_{x \to x_0^-} f(x)$ và giới hạn phải $\lim_{x \to x_0^+} f(x)$, mỗi bên dùng đúng biểu thức của nhánh đó. Nếu chỉ có một biểu thức cho $x \ne x_0$ thì chỉ cần tính một giới hạn $\lim_{x \to x_0} f(x)$.
3. Cho $\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = f(x_0)$ để giải tìm tham số.

### Ví dụ minh họa

1. Cho $f(x) = \begin{cases} 2x^2, & x \ge 1 \\ ax - 2, & x < 1 \end{cases}$. Để $f$ liên tục tại $x = 1$: $f(1) = f(1^+) = 2$, $f(1^-) = a - 2$. Giải $a - 2 = 2$ được $a = 4$.
2. Cho $f(x) = \begin{cases} \frac{\sin 4x}{x}, & x > 0 \\ x^2 + x + m, & x \le 0 \end{cases}$. Ta có $f(0^+) = \lim_{x \to 0^+} \frac{\sin 4x}{x} = 4$ và $f(0) = f(0^-) = m$, suy ra $m = 4$.
3. Cho $f(x) = \begin{cases} \frac{e^{-3x} - 1}{\sin x}, & x \ne 0 \\ m, & x = 0 \end{cases}$. Khi $x \to 0$, $\frac{e^{-3x} - 1}{\sin x} \sim \frac{-3x}{x} = -3$, nên hàm liên tục trên $\mathbb{R}$ khi $m = -3$.

*Lỗi hay gặp:* Thế $x_0$ vào cả nhánh không chứa $x_0$, hoặc chỉ cho giới hạn trái bằng giới hạn phải mà quên đối chiếu với $f(x_0)$.
