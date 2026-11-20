# Chuỗi lũy thừa, bán kính hội tụ và chuỗi hàm

## 1. Bán kính hội tụ của chuỗi lũy thừa

Xét chuỗi lũy thừa tâm $x_0$: $\sum_{n=0}^\infty a_n (x - x_0)^n$ ($a_n, x_0 \in \mathbb{R}$). Tính:

$$\rho = \lim_{n \to \infty} \sqrt[n]{|a_n|} \qquad \text{hoặc} \qquad \rho = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$$

(nếu giới hạn tồn tại trong $[0, +\infty]$). Khi đó **bán kính hội tụ** là $R = \frac{1}{\rho}$ (quy ước $R = +\infty$ nếu $\rho = 0$, $R = 0$ nếu $\rho = +\infty$):
- Chuỗi hội tụ tuyệt đối khi $|x - x_0| < R$.
- Chuỗi phân kỳ khi $|x - x_0| > R$.
- Chuỗi luôn hội tụ tại tâm $x = x_0$.
- Nếu $0 < R < +\infty$, **phải xét riêng hai đầu mút** $x = x_0 \pm R$ bằng cách thế trực tiếp vào chuỗi để được hai chuỗi số.

### Ví dụ: Tìm miền hội tụ của chuỗi lũy thừa

Tìm miền hội tụ của $\sum_{n=1}^\infty \frac{n}{(n^2 + 1)3^n} x^n$.

1. Tâm $x_0 = 0$, $a_n = \frac{n}{(n^2 + 1)3^n}$. Ta có $\left|\frac{a_{n+1}}{a_n}\right| = \frac{n + 1}{(n + 1)^2 + 1} \cdot \frac{n^2 + 1}{n} \cdot \frac{1}{3} \to \frac{1}{3}$, nên $R = 3$ và khoảng hội tụ là $(-3, 3)$.
2. Tại $x = 3$: chuỗi trở thành $\sum \frac{n}{n^2 + 1}$, tương đương $\sum \frac{1}{n}$ nên phân kỳ.
3. Tại $x = -3$: chuỗi trở thành $\sum (-1)^n \frac{n}{n^2 + 1}$; vì $b_n = \frac{n}{n^2 + 1}$ giảm với $n \ge 1$ và $\to 0$, chuỗi hội tụ theo Leibniz.
4. Kết luận: miền hội tụ là $[-3, 3)$.

## 2. Miền hội tụ của chuỗi hàm tổng quát

Với chuỗi hàm $\sum u_n(x)$:

1. Áp dụng Cauchy (nếu có lũy thừa $n$) hoặc D'Alembert (nếu có giai thừa) cho $\sum |u_n(x)|$ để tìm giới hạn $\ell(x)$.
2. $\ell(x) < 1$: hội tụ tuyệt đối; $\ell(x) > 1$: phân kỳ.
3. Tại biên $\ell(x) = 1$: thế vào chuỗi, thường dùng điều kiện cần $u_n(x) \to 0$. Kiểm tra riêng các điểm đặc biệt (như $u_n(x) \equiv 0$).

*Ví dụ:* $\sum_{n=1}^\infty \left[\frac{(n + 2)(x^2 - 1)}{n + 1}\right]^n$. Cauchy cho $\ell(x) = |x^2 - 1|$. Điều kiện $|x^2 - 1| < 1 \iff 0 < x^2 < 2$. Tại biên $|x^2 - 1| = 1$ (gồm $x = 0$ và $x = \pm\sqrt{2}$), $|u_n| = \left(1 + \frac{1}{n + 1}\right)^n \to e \ne 0$ nên phân kỳ. Vậy miền hội tụ là $(-\sqrt{2}, \sqrt{2}) \setminus \{0\}$.
