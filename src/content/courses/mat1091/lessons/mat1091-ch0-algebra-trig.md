# Công thức đại số, lượng giác, mũ và logarit

Chương 0 tổng hợp các công thức đại số, lượng giác, mũ–logarit và bảng đạo hàm, nguyên hàm cơ bản thường xuyên dùng lại trong suốt học phần Giải tích I.

## 1. Đại số: liên hợp, chia đa thức, tách phân thức

### Hằng đẳng thức nhân liên hợp

Với $a, b \in \mathbb{R}$ (và mẫu số khác $0$):

$$a - b = \frac{a^2 - b^2}{a + b} \quad (a + b \ne 0), \qquad a - b = \frac{a^3 - b^3}{a^2 + ab + b^2} \quad ((a, b) \ne (0, 0)).$$

Đặc biệt, nếu $A, B \ge 0$ và $A + B > 0$ thì:

$$\sqrt{A} - \sqrt{B} = \frac{A - B}{\sqrt{A} + \sqrt{B}}.$$

Nhân liên hợp chuyển hiệu hai căn gần bằng nhau thành hiệu hai biểu thức không còn căn chia cho tổng hai căn.

### Chia đa thức và tách phân thức đơn giản

Nếu bậc tử $\ge$ bậc mẫu thì chia đa thức trước: $\frac{P(x)}{Q(x)} = H(x) + \frac{R(x)}{Q(x)}$ với bậc $R <$ bậc $Q$. Ví dụ: $\frac{x^2 + 1}{x + 1} = x - 1 + \frac{2}{x + 1}$.

Khi $P, Q$ là đa thức hệ số thực, $Q \not\equiv 0$, bậc $P <$ bậc $Q$ và $Q$ phân tích hoàn toàn thành các thừa số bậc nhất trên $\mathbb{R}$, mỗi thừa số $(x - a)^m$ ứng với các số hạng:

$$\frac{A_1}{x - a} + \frac{A_2}{(x - a)^2} + \dots + \frac{A_m}{(x - a)^m}.$$

**Tìm hệ số bằng cách che:** Với nghiệm đơn $x = a$, hệ số của $\frac{1}{x - a}$ bằng giá trị của phân thức sau khi che thừa số $(x - a)$ ở mẫu, tính tại $x = a$. Với nghiệm bội $(x - a)^k$, cách che cho hệ số của $\frac{1}{(x - a)^k}$; các hệ số còn lại tìm bằng cách thế thêm giá trị $x$ dễ tính vào hai vế.

**Ví dụ.** Tách phân thức $\frac{2x + 3}{(x - 1)(x - 2)}$:
- Che $(x - 1)$, tính $\frac{2x + 3}{x - 2}$ tại $x = 1$ được $-5$.
- Che $(x - 2)$, tính $\frac{2x + 3}{x - 1}$ tại $x = 2$ được $7$.
- Kết quả: $-\frac{5}{x - 1} + \frac{7}{x - 2}$.

## 2. Lượng giác

Với $x, a, b \in \mathbb{R}$ (góc tính bằng radian):

1. **Hạ bậc và nhân đôi:** $\sin^2 x = \frac{1 - \cos 2x}{2}$, $\cos^2 x = \frac{1 + \cos 2x}{2}$, $\sin 2x = 2\sin x \cos x$.
2. **Tổng thành tích:**
   $$\cos a - \cos b = -2\sin\frac{a + b}{2}\sin\frac{a - b}{2}, \qquad \sin a - \sin b = 2\cos\frac{a + b}{2}\sin\frac{a - b}{2}.$$
3. **Tích thành tổng:** $\sin a \cos b = \frac{1}{2}[\sin(a + b) + \sin(a - b)]$.
4. **Dịch pha:** Với $n = 4q + r$ ($q \in \mathbb{Z}$, $r \in \{0, 1, 2, 3\}$), $\cos\frac{n\pi}{2}$ nhận giá trị $1, 0, -1, 0$ và $\sin\frac{n\pi}{2}$ nhận giá trị $0, 1, 0, -1$ tương ứng với $r = 0, 1, 2, 3$.

## 3. Mũ và logarit

Với $a > 0$, $x, y > 0$ và $r, s \in \mathbb{R}$:

- $a^{r+s} = a^r a^s$, $(a^r)^s = a^{rs}$, $a^r = e^{r \ln a}$.
- $\ln(xy) = \ln x + \ln y$, $\ln\frac{x}{y} = \ln x - \ln y$, $\ln(x^r) = r \ln x$.
- Tổng quát, với $u > 0$, $v \in \mathbb{R}$: $u^v = e^{v \ln u}$.

*Lưu ý:* Không tách $\ln A - \ln B$ thành hai giới hạn vô cùng riêng rẽ; cần gộp thành $\ln\frac{A}{B}$ trước khi lấy giới hạn.

## 4. Bảng đạo hàm và nguyên hàm cơ bản

| $f(x)$ | $f'(x)$ | $f(x)$ | $\int f(x)\,dx$ |
| :--- | :--- | :--- | :--- |
| $x^\alpha$ | $\alpha x^{\alpha - 1}$ | $x^\alpha \ (\alpha \ne -1)$ | $\frac{x^{\alpha + 1}}{\alpha + 1} + C$ |
| $e^x, \ a^x$ | $e^x, \ a^x \ln a$ | $\frac{1}{x}$ | $\ln\|x\| + C$ |
| $\ln\|x\|$ | $\frac{1}{x}$ | $e^{kx}$ | $\frac{e^{kx}}{k} + C$ |
| $\sin x, \ \cos x$ | $\cos x, \ -\sin x$ | $\sin kx, \ \cos kx$ | $-\frac{\cos kx}{k}, \ \frac{\sin kx}{k}$ |
| $\tan x$ | $\frac{1}{\cos^2 x}$ | $\frac{1}{x^2 + a^2}$ | $\frac{1}{a}\arctan\frac{x}{a} + C$ |
| $\arctan x$ | $\frac{1}{1 + x^2}$ | $\frac{1}{x^2 - a^2}$ | $\frac{1}{2a}\ln\left\|\frac{x - a}{x + a}\right\| + C$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1 - x^2}}$ | $\frac{1}{\sqrt{a^2 - x^2}}$ | $\arcsin\frac{x}{a} + C$ |

Quy tắc đạo hàm: $(uv)' = u'v + uv'$; $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$; đạo hàm hàm hợp $(f(u(x)))' = f'(u)\,u'(x)$.
