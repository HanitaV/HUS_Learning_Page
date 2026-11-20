# Định nghĩa đạo hàm, khả vi và công thức Leibniz

## 1. Đạo hàm và tính khả vi tại một điểm

Cho $f$ xác định trên một khoảng chứa $x_0$. Đạo hàm của $f$ tại $x_0$ là:

$$f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0},$$

nếu giới hạn này tồn tại hữu hạn; khi đó $f$ gọi là **khả vi** tại $x_0$. Đạo hàm phải $f'_+(x_0)$ và đạo hàm trái $f'_-(x_0)$ là các giới hạn một phía tương ứng. Hàm $f$ khả vi tại $x_0$ khi và chỉ khi $f'_+(x_0) = f'_-(x_0)$ hữu hạn. Khả vi kéo theo liên tục, nhưng liên tục không kéo theo khả vi (ví dụ $f(x) = |x|$ tại $x = 0$).

### Kỹ thuật tính đạo hàm tại điểm nối và hàm trị tuyệt đối

- Với hàm ghép tại $x_0 = 0$: viết đúng định nghĩa $f'(0) = \lim_{x \to 0} \frac{f(x) - f(0)}{x}$, quy đồng thành một phân thức dạng $\frac{0}{0}$ rồi dùng Maclaurin hoặc L'Hôpital. Không được lấy đạo hàm công thức nhánh $x \ne 0$ bằng quy tắc thương rồi thế $x = 0$.
  - *Ví dụ:* Cho $f(x) = \frac{e^{3x} - 1}{x}$ khi $x \ne 0$ và $f(0) = 3$. Ta có $\lim_{x \to 0} f(x) = 3 = f(0)$ nên $f$ liên tục tại $0$, và
    $$f'(0) = \lim_{x \to 0} \frac{e^{3x} - 1 - 3x}{x^2} = \lim_{x \to 0} \frac{\frac{9}{2}x^2 + o(x^2)}{x^2} = \frac{9}{2}.$$
- Với hàm chứa $|x - a|$: bỏ trị tuyệt đối trên từng phía $x > a$ và $x < a$, rồi tính $f'_+(a)$ và $f'_-(a)$ bằng định nghĩa để so sánh. Với $f(x) = (x + 1)|x - 1|$, ta có $f'_+(1) = 2 \ne -2 = f'_-(1)$ nên không khả vi tại $x = 1$.

## 2. Đạo hàm cấp cao và công thức Leibniz

### Bảng đạo hàm cấp $n$ của một số hàm cơ bản

| Hàm $f(x)$ | $f^{(n)}(x)$ |
| :--- | :--- |
| $e^{ax + b}$ | $a^n e^{ax + b}$ |
| $\sin(ax + b), \ \cos(ax + b)$ | $a^n \sin\left(ax + b + \frac{n\pi}{2}\right), \ a^n \cos\left(ax + b + \frac{n\pi}{2}\right)$ |
| $\frac{1}{x + c}$ | $\frac{(-1)^n n!}{(x + c)^{n + 1}}$ |
| $\ln(x + c)$ | $\frac{(-1)^{n - 1}(n - 1)!}{(x + c)^n} \ (n \ge 1)$ |

### Công thức Leibniz

Nếu $u, v$ có đạo hàm đến cấp $n$ trên khoảng mở $I$ thì:

$$(uv)^{(n)} = \sum_{k=0}^n \binom{n}{k} u^{(n - k)} v^{(k)}.$$

Đặc biệt, nếu $v$ là đa thức bậc không quá $2$ và $n \ge 2$ thì công thức rút gọn còn ba số hạng:

$$(uv)^{(n)} = u^{(n)}v + n\,u^{(n - 1)}v' + \frac{n(n - 1)}{2}u^{(n - 2)}v''.$$

*Ví dụ:* Tính $f^{(2023)}\left(\frac{\pi}{2}\right)$ với $f(x) = (x^2 + 1)\sin^2 x$. Hạ bậc $u = \sin^2 x = \frac{1 - \cos 2x}{2}$ trước: với $m \ge 1$, $u^{(m)} = -2^{m - 1}\cos\left(2x + \frac{m\pi}{2}\right)$, nên $u^{(m)}\left(\frac{\pi}{2}\right) = 2^{m - 1}\cos\frac{m\pi}{2}$. Với $v = x^2 + 1$, $v'\left(\frac{\pi}{2}\right) = \pi$, $v'' = 2$. Trong ba số hạng $m = 2023, 2022, 2021$, chỉ còn số hạng giữa khác $0$, cho $f^{(2023)}\left(\frac{\pi}{2}\right) = -2023 \cdot 2^{2021}\pi$.
