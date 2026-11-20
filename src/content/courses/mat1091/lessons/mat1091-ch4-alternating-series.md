# Chuỗi đan dấu, tiêu chuẩn Leibniz và hội tụ tuyệt đối

## 1. Tiêu chuẩn Cauchy cho chuỗi và hội tụ tuyệt đối

- **Tiêu chuẩn Cauchy:** Chuỗi $\sum u_n$ hội tụ khi và chỉ khi với mọi $\varepsilon > 0$, tồn tại $N \in \mathbb{N}^*$ sao cho $\left|\sum_{k=n+1}^m u_k\right| < \varepsilon$ với mọi $m > n \ge N$.
- **Hội tụ tuyệt đối:** Nếu $\sum |u_n|$ hội tụ thì $\sum u_n$ cũng hội tụ (ta nói $\sum u_n$ hội tụ tuyệt đối). Chuỗi hội tụ nhưng $\sum |u_n|$ phân kỳ gọi là **bán hội tụ**.

## 2. Chuỗi đan dấu và tiêu chuẩn Leibniz

Chuỗi đan dấu có dạng $\sum (-1)^n b_n$ với $b_n \ge 0$.

**Định lý Leibniz:** Nếu $(b_n)$ thỏa mãn đồng thời:
1. $b_n \ge 0$ và $b_{n+1} \le b_n$ (dãy giảm) với mọi $n$ đủ lớn;
2. $\lim_{n \to \infty} b_n = 0$,

thì chuỗi đan dấu $\sum (-1)^n b_n$ hội tụ.

*Mẹo kiểm tra $b_n$ giảm:* Xét hàm $f(x)$ tương ứng ($b_n = f(n)$) và chứng minh $f'(x) \le 0$ với $x$ đủ lớn.

## 3. Ví dụ minh họa

Xét sự hội tụ của $\sum_{n=1}^\infty (-1)^n \frac{n}{n^2 + 1}$.

- **Hội tụ tuyệt đối?** $\left|(-1)^n \frac{n}{n^2 + 1}\right| = \frac{n}{n^2 + 1} \sim \frac{1}{n}$, mà $\sum \frac{1}{n}$ phân kỳ nên chuỗi không hội tụ tuyệt đối.
- **Tiêu chuẩn Leibniz:** Đặt $b_n = \frac{n}{n^2 + 1} > 0$. Xét $f(x) = \frac{x}{x^2 + 1}$ có $f'(x) = \frac{1 - x^2}{(x^2 + 1)^2} < 0$ với $x > 1$, nên $(b_n)$ giảm kể từ $n = 1$. Ngoài ra $\lim_{n \to \infty} \frac{n}{n^2 + 1} = 0$. Vậy chuỗi hội tụ (bán hội tụ) theo tiêu chuẩn Leibniz.
