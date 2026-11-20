# Các đường tiệm cận của đồ thị hàm số

Xét đồ thị $y = f(x)$ trên tập xác định của hàm số; ta chỉ xét các phía mà hàm xác định sát điểm hoặc ở vô cực.

## 1. Định nghĩa tiệm cận đứng, ngang và xiên

- **Tiệm cận đứng:** Đường thẳng $x = x_0$ là tiệm cận đứng nếu ít nhất một trong hai giới hạn $\lim_{x \to x_0^-} f(x)$, $\lim_{x \to x_0^+} f(x)$ bằng $+\infty$ hoặc $-\infty$.
- **Tiệm cận ngang:** Đường thẳng $y = L$ ($L \in \mathbb{R}$) là tiệm cận ngang nếu $\lim_{x \to +\infty} f(x) = L$ hoặc $\lim_{x \to -\infty} f(x) = L$.
- **Tiệm cận xiên:** Đường thẳng $y = ax + b$ ($a \ne 0$) là tiệm cận xiên nếu $\lim_{x \to +\infty} [f(x) - (ax + b)] = 0$ hoặc giới hạn tương tự khi $x \to -\infty$.

Đồ thị vẫn có thể cắt tiệm cận ngang hoặc tiệm cận xiên tại hữu hạn (hoặc nhiều) điểm.

## 2. Công thức tìm tiệm cận ở vô cực

Xét riêng một chiều $x \to +\infty$ hoặc $x \to -\infty$, với $f$ xác định trên nửa trục tương ứng. Đường $y = ax + b$ là tiệm cận theo chiều đang xét khi và chỉ khi hai giới hạn sau tồn tại hữu hạn:

$$a = \lim \frac{f(x)}{x}, \qquad b = \lim \big(f(x) - ax\big).$$

Nếu $a = 0$ thì đây là tiệm cận ngang $y = b$; nếu $a \ne 0$ thì là tiệm cận xiên. Nếu một trong hai giới hạn không hữu hạn thì không có tiệm cận dạng $y = ax + b$ theo chiều đó.

## 3. Quy trình tìm tiệm cận

1. Tìm tập xác định. Tại các điểm biên hữu hạn hoặc điểm bị loại, tính giới hạn một phía để xét tiệm cận đứng.
2. Ở mỗi chiều vô cực, tính $\lim f(x)$ trước: nếu hữu hạn thì có tiệm cận ngang. Nếu không, tính $a$ và $b$ theo công thức trên.
3. Với phân thức đã rút gọn: bậc tử nhỏ hơn bậc mẫu cho tiệm cận ngang $y = 0$; bằng bậc cho tiệm cận ngang là tỉ số hệ số đầu; bậc tử lớn hơn bậc mẫu đúng $1$ thì chia đa thức để lấy tiệm cận xiên. Với hàm chứa căn, dùng nhân liên hợp và chú ý $\sqrt{x^2} = |x|$.

## 4. Ví dụ minh họa

### Ví dụ 1: Hàm phân thức

Tìm các đường tiệm cận của $f(x) = \frac{x^2 + 1}{x + 1}$.

- Tập xác định: $\mathbb{R} \setminus \{-1\}$. Chia đa thức: $f(x) = x - 1 + \frac{2}{x + 1}$.
- Khi $x \to -1^-$, $f(x) \to -\infty$; khi $x \to -1^+$, $f(x) \to +\infty$, nên $x = -1$ là tiệm cận đứng.
- Khi $x \to \pm\infty$, $f(x) - (x - 1) = \frac{2}{x + 1} \to 0$, nên $y = x - 1$ là tiệm cận xiên ở cả hai chiều vô cực; không có tiệm cận ngang.

### Ví dụ 2: Hàm căn với hai chiều vô cực khác nhau

Tìm các đường tiệm cận của $f(x) = \sqrt{x^2 + 2x}$.

- Tập xác định: $(-\infty, -2] \cup [0, +\infty)$. Giới hạn tại $-2^-$ và $0^+$ đều bằng $0$, nên không có tiệm cận đứng.
- Khi $x \to +\infty$: $a = 1$, nhân liên hợp cho $b = \lim_{x \to +\infty} \frac{2x}{\sqrt{x^2 + 2x} + x} = 1$, được tiệm cận xiên $y = x + 1$.
- Khi $x \to -\infty$: vì $\sqrt{x^2} = |x| = -x$ nên $a = -1$; khi đó $b = \lim_{x \to -\infty} (\sqrt{x^2 + 2x} + x) = \lim_{x \to -\infty} \frac{2x}{\sqrt{x^2 + 2x} - x} = -1$, được tiệm cận xiên $y = -x - 1$.

*Lỗi hay gặp:* Mẫu bằng $0$ chưa đủ để kết luận tiệm cận đứng (ví dụ $\frac{x^2 - 1}{x - 1} = x + 1$ với $x \ne 1$ có giới hạn $2$ tại $x = 1$). Chỉ tính $a$ mà bỏ qua $b$ cũng chưa đủ kết luận có tiệm cận xiên.
