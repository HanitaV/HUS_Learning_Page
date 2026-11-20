# Chuỗi số dương và các tiêu chuẩn hội tụ

## 1. Chuỗi số hội tụ và điều kiện cần

Cho dãy $(u_n)_{n \ge 1}$ và tổng riêng $S_N = u_1 + \dots + u_N$. Chuỗi $\sum_{n=1}^\infty u_n$ **hội tụ** nếu $\lim_{N \to \infty} S_N = S$ hữu hạn ($S$ là tổng của chuỗi); ngược lại là **phân kỳ**.

- **Điều kiện cần:** Nếu $\sum u_n$ hội tụ thì $\lim_{n \to \infty} u_n = 0$. Do đó nếu $u_n \not\to 0$ thì chuỗi phân kỳ ngay.
- Điều kiện $u_n \to 0$ chưa đủ để kết luận hội tụ. Ví dụ **chuỗi điều hòa** $\sum_{n=1}^\infty \frac{1}{n}$ có $\frac{1}{n} \to 0$ nhưng phân kỳ vì $S_{2n} - S_n = \frac{1}{n+1} + \dots + \frac{1}{2n} \ge \frac{1}{2}$ với mọi $n$.
- Với chuỗi số dương ($u_n \ge 0$), dãy $(S_N)$ tăng, nên chuỗi hội tụ khi và chỉ khi $(S_N)$ bị chặn trên.

## 2. Dấu hiệu tích phân và các chuỗi chuẩn

- **Dấu hiệu tích phân:** Nếu $f : [1, +\infty) \to \mathbb{R}$ liên tục, không âm, không tăng và $u_n = f(n)$, thì $\sum_{n=1}^\infty u_n$ và $\int_1^{+\infty} f(x)\,dx$ cùng tính chất hội tụ.
- **Chuỗi chuẩn:**
  - $\sum n^{-\alpha}$ hội tụ $\iff \alpha > 1$.
  - $\sum q^n$ hội tụ $\iff |q| < 1$.

## 3. Các tiêu chuẩn hội tụ cho chuỗi số dương

1. **So sánh giới hạn:** Nếu $u_n, v_n > 0$ với mọi $n$ đủ lớn và $\lim \frac{u_n}{v_n} = k \in (0, +\infty)$, thì $\sum u_n$ và $\sum v_n$ cùng hội tụ hoặc cùng phân kỳ.
2. **Dấu hiệu Cauchy:** Với $u_n \ge 0$, xét $C = \lim \sqrt[n]{u_n} \in [0, +\infty]$.
3. **Dấu hiệu D'Alembert:** Với $u_n > 0$, xét $D = \lim \frac{u_{n+1}}{u_n} \in [0, +\infty]$.

Trong cả Cauchy và D'Alembert: giá trị $< 1$ cho chuỗi hội tụ; giá trị $> 1$ (kể cả $+\infty$) cho chuỗi phân kỳ; giá trị $= 1$ chưa kết luận được (cần đổi cách, thường là kiểm tra lại điều kiện cần $u_n \to 0$).

### Ví dụ minh họa

- $\sum \left(\frac{3n + 1}{4n + 2}\right)^n$: Dùng Cauchy, $\sqrt[n]{u_n} = \frac{3n + 1}{4n + 2} \to \frac{3}{4} < 1$, nên chuỗi hội tụ.
- $\sum \left(\frac{n + 1}{n + 2}\right)^n$: Cauchy cho $C = 1$ (chưa kết luận được). Kiểm tra điều kiện cần: $\left(1 - \frac{1}{n + 2}\right)^n \to e^{-1} \ne 0$, nên chuỗi phân kỳ.
