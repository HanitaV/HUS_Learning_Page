# Tích phân suy rộng và tiêu chuẩn so sánh

## 1. Định nghĩa tích phân suy rộng

- **Cận vô cực:** $\displaystyle \int_a^{+\infty} f(x)\,dx = \lim_{A \to +\infty} \int_a^A f(x)\,dx$.
- **Hàm không bị chặn gần điểm kỳ dị $b$:** $\displaystyle \int_a^b f(x)\,dx = \lim_{t \to b^-} \int_a^t f(x)\,dx$.

Nếu giới hạn tồn tại hữu hạn thì tích phân **hội tụ**, ngược lại là **phân kỳ**. Nếu có nhiều điểm kỳ dị trên khoảng lấy tích phân, phải tách thành tổng các tích phân mà mỗi tích phân chỉ có đúng một điểm kỳ dị.

## 2. Tích phân chuẩn và tiêu chuẩn so sánh

### Tích phân chuẩn

Với tham số thực $\alpha$:
- $\int_1^{+\infty} x^{-\alpha}\,dx$ hội tụ khi và chỉ khi $\alpha > 1$.
- $\int_0^1 x^{-\alpha}\,dx$ hội tụ khi và chỉ khi $\alpha < 1$.

### Tiêu chuẩn so sánh và so sánh giới hạn

Xét $\int_a^b f$ và $\int_a^b g$ với cùng đầu mút suy rộng $b$ ($b \in \mathbb{R}$ hoặc $b = +\infty$), $f, g$ khả tích trên mọi $[a, t]$ ($a < t < b$):
1. **So sánh bất đẳng thức:** Nếu $0 \le f(x) \le g(x)$ gần $b$ thì $\int_a^b g$ hội tụ kéo theo $\int_a^b f$ hội tụ; $\int_a^b f$ phân kỳ kéo theo $\int_a^b g$ phân kỳ.
2. **So sánh giới hạn:** Nếu $f, g > 0$ gần $b$ và $\lim_{x \to b^-} \frac{f(x)}{g(x)} = k \in (0, +\infty)$, thì hai tích phân cùng hội tụ hoặc cùng phân kỳ.

*Lưu ý:* Tương đương chỉ dùng để xét hội tụ, **không** dùng hàm tương đương để tính giá trị tích phân.

## 3. Kỹ thuật tính các dạng hay gặp

1. **Phân thức hữu tỉ trên $[a, +\infty)$:** Tách phân thức, lấy nguyên hàm rồi **gộp các logarit thành một $\ln\frac{\dots}{\dots}$** trước khi cho $A \to +\infty$ (tránh dạng vô định $\infty - \infty$).
   - *Ví dụ:* $\int_1^{+\infty} \frac{x - 1}{x^2(x + 1)}\,dx$. Tách được $\frac{2}{x} - \frac{1}{x^2} - \frac{2}{x + 1}$, nguyên hàm là $2\ln\frac{x}{x + 1} + \frac{1}{x}$. Khi $A \to +\infty$, $2\ln\frac{A}{A + 1} + \frac{1}{A} \to 0$; tại $x = 1$ bằng $2\ln\frac{1}{2} + 1$. Vậy $I = 2\ln 2 - 1$.
2. **Đa thức $\times e^{-kx}$ ($k > 0$):** Dùng từng phần với $u =$ đa thức, và áp dụng $\lim_{A \to +\infty} A^m e^{-kA} = 0$.
3. **Chứng minh hội tụ rồi tính giá trị:** Tại $+\infty$, thay hàm bằng $\frac{C}{x^\alpha}$ để so sánh giới hạn; sau đó tách phân thức và tính giới hạn nguyên hàm.
   - *Ví dụ:* $I = \int_1^\infty \frac{dx}{(x^2 + 3x + 2)^2}$. Tại $+\infty$, $(x^2 + 3x + 2)^2 \sim x^4$ ($\alpha = 4 > 1$) nên hội tụ. Tính trực tiếp cho $I = \frac{5}{6} - 2\ln\frac{3}{2}$.
