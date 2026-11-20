# Giới hạn dãy số và hàm số

Bài học này trình bày các công cụ cốt lõi về giới hạn dãy số, giới hạn hàm số, nguyên lý kẹp, tiêu chuẩn Weierstrass–Cauchy–Heine và kỹ thuật vô cùng bé tương đương.

## 1. Giới hạn dãy số, nguyên lý kẹp và Weierstrass

Dãy $\{u_n\}$ có giới hạn $L \in \mathbb{R}$, viết $\lim u_n = L$, nếu:

$$\forall \varepsilon > 0,\ \exists n_0 : \ \forall n > n_0,\ |u_n - L| < \varepsilon.$$

Dãy có giới hạn hữu hạn gọi là **hội tụ**. Dãy hội tụ thì có giới hạn duy nhất và bị chặn.

### Nguyên lý kẹp

- **Cho dãy:** Nếu $a_n \le u_n \le b_n$ với mọi $n$ đủ lớn và $a_n \to L$, $b_n \to L$ ($L \in \mathbb{R}$), thì $u_n \to L$.
- **Cho hàm:** Nếu $g(x) \le f(x) \le h(x)$ với mọi $x \in D$ đủ gần và khác $x_0$, và $\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = L \in \mathbb{R}$, thì $\lim_{x \to x_0} f(x) = L$.

### Định lý Weierstrass cho dãy

Dãy đơn điệu và bị chặn về phía tương ứng thì hội tụ:
- Nếu $u_{n+1} \ge u_n$ và tồn tại $M \in \mathbb{R}$ sao cho $u_n \le M$ với mọi $n$, thì $u_n \to \sup\{u_n : n \ge 1\} \in \mathbb{R}$.
- Nếu $u_{n+1} \le u_n$ và có cận dưới thực, thì $u_n \to \inf\{u_n : n \ge 1\} \in \mathbb{R}$.

**Ví dụ (dãy truy hồi).** Cho $u_1 = \sqrt{2}$, $u_{n+1} = \sqrt{2 + u_n}$. Quy nạp cho $u_n < 2$ và $u_{n+1} > u_n$. Theo Weierstrass, dãy hội tụ tới $L > 0$. Qua giới hạn $L = \sqrt{2 + L}$, giải ra $L = 2$ (loại nghiệm âm).

### Một số giới hạn cơ bản và tiêu chuẩn Cauchy, Heine

- Dãy $\left(1 + \frac{1}{n}\right)^n$ tăng ngặt, bị chặn trên bởi $3$ và hội tụ tới $e$; do đó $\left(1 + \frac{1}{n}\right)^n < e$ với mọi $n \ge 1$.
- $\lim \sqrt[n]{n} = 1$; $\lim q^n = 0$ khi $|q| < 1$; và $(\ln n)^\alpha \ll n^p \ll a^n \ll n! \ll n^n$ ($\alpha, p > 0$, $a > 1$).
- **Tiêu chuẩn Cauchy:** $(u_n)$ hội tụ khi và chỉ khi $\forall \varepsilon > 0,\ \exists N \in \mathbb{N}^* : \forall m, n \ge N,\ |u_m - u_n| < \varepsilon$.
- **Tiêu chuẩn Heine:** $\lim_{x \to x_0} f(x) = L$ khi và chỉ khi với mọi dãy $x_n \in D \setminus \{x_0\}$ thỏa $x_n \to x_0$, ta có $f(x_n) \to L$.

## 2. Giới hạn hàm số và vô cùng bé tương đương

Hàm $f$ có $\lim_{x \to x_0} f(x) = L$ khi và chỉ khi hai giới hạn một phía $\lim_{x \to x_0^-} f(x)$ và $\lim_{x \to x_0^+} f(x)$ tồn tại và bằng $L$.

Đại lượng $\alpha(x)$ là **vô cùng bé** (VCB) khi $x \to x_0$ nếu $\alpha(x) \to 0$. Hai VCB $\alpha, \beta$ là tương đương ($\alpha \sim \beta$) nếu $\lim \frac{\alpha}{\beta} = 1$.

### Bảng VCB tương đương khi $u \to 0$

| VCB | Tương đương |
| :--- | :--- |
| $\sin u,\ \tan u,\ \arcsin u,\ \arctan u,\ \ln(1+u),\ e^u - 1$ | $u$ |
| $1 - \cos u$ | $\frac{u^2}{2}$ |
| $a^u - 1$ | $u \ln a$ |
| $(1 + u)^\alpha - 1$ | $\alpha u$ (đặc biệt $\sqrt[n]{1 + u} - 1 \sim \frac{u}{n}$) |

**Quy tắc thay thế:** Chỉ được thay VCB tương đương trong **tích** hoặc **thương**. Không được thay tương đương trong tổng hoặc hiệu khi các phần chính triệt tiêu nhau. Khi gặp hiệu mà phần chính triệt tiêu, cần biến đổi về tích hoặc khai triển Maclaurin:

$$e^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3), \qquad \sin u = u - \frac{u^3}{6} + o(u^4),$$

$$\cos u = 1 - \frac{u^2}{2} + \frac{u^4}{24} + o(u^5), \qquad \ln(1 + u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3).$$

## 3. Kỹ thuật khử dạng vô định $\frac{0}{0}$

1. **Hai căn cùng bậc tại $x_0 \ne 0$:** Nhân liên hợp để làm xuất hiện thừa số $(x - x_0)$ rồi rút gọn với mẫu.
2. **Hai căn khác bậc tại $0$:** Thêm bớt $1$ để tách thành các hiệu dạng $(1 + u)^\alpha - 1 \sim \alpha u$.
   - *Ví dụ:* $\lim_{x \to 0} \frac{\sqrt{1 + 2x} - \sqrt[3]{1 - 3x}}{x} = \lim_{x \to 0} \left(\frac{\sqrt{1 + 2x} - 1}{x} - \frac{\sqrt[3]{1 - 3x} - 1}{x}\right) = 1 - (-1) = 2$.
3. **Có lượng giác hoặc hàm lồng nhau:** Đưa hiệu lượng giác về tích hoặc khai triển Maclaurin từ ngoài vào trong đến đúng bậc của mẫu.
   - *Ví dụ:* $\lim_{x \to 0} \frac{\ln(1 + \sin x) - x}{x^2}$. Mẫu bậc $2$ nên khai triển $\ln(1 + u) = u - \frac{u^2}{2} + o(u^2)$ với $u = \sin x = x + o(x^2)$, thu được $\ln(1 + \sin x) = x - \frac{x^2}{2} + o(x^2)$, do đó giới hạn bằng $-\frac{1}{2}$.
