# Nguyên hàm và kỹ thuật đổi biến, từng phần

## 1. Định nghĩa nguyên hàm

Hàm $F$ là một **nguyên hàm** của $f$ trên khoảng $I$ nếu $F'(x) = f(x)$ với mọi $x \in I$. Mọi nguyên hàm khác của $f$ trên $I$ đều có dạng $F(x) + C$ ($C \in \mathbb{R}$); họ các nguyên hàm ký hiệu là:

$$\int f(x)\,dx = F(x) + C.$$

## 2. Hai phương pháp cơ bản cho nguyên hàm

- **Đổi biến:** Nếu $u$ khả vi, $f$ liên tục trên khoảng chứa ảnh của $u$ và $F' = f$, thì:
  $$\int f(u(x)) u'(x)\,dx = F(u(x)) + C.$$
- **Từng phần:** Với $u, v$ khả vi liên tục trên khoảng mở, ta có:
  $$\int u\,dv = uv - \int v\,du.$$

## 3. Nhận dạng để chọn phương pháp

| Dạng hàm dưới dấu tích phân | Cách làm |
| :--- | :--- |
| Đa thức $\times e^{kx}$, $\sin kx$, $\cos kx$ | Từng phần, đặt $u =$ đa thức |
| Đa thức $\times \ln x$, $\arctan x$ | Từng phần, đặt $u = \ln$ (hoặc $\arctan$) |
| $\sin^2 x$, $\cos^2 x$ | Hạ bậc trước |
| Có $a^x$ (như $2^x, 4^x$) | Đặt $t = a^x$, đưa về phân thức theo $t$ |
| Có $\sqrt{ax + b}$ | Đặt $t = \sqrt{ax + b}$ |
| Có $\sqrt{x^2 + 1}$ và tạo được $x\,dx$ | Nhân tử và mẫu với $x$, đặt $t = \sqrt{x^2 + 1}$ |
| Phân thức hữu tỉ | Chia đa thức rồi tách phân thức |

## 4. Ví dụ minh họa

Tìm $I = \int x\sin^2 x\,dx$.

1. Hạ bậc $\sin^2 x = \frac{1 - \cos 2x}{2}$:
   $$I = \frac{1}{2}\int x\,dx - \frac{1}{2}\int x\cos 2x\,dx.$$
2. Tính $\int x\cos 2x\,dx$ bằng từng phần với $u = x$, $dv = \cos 2x\,dx$ (chọn $v = \frac{\sin 2x}{2}$):
   $$\int x\cos 2x\,dx = \frac{x\sin 2x}{2} - \frac{1}{2}\int \sin 2x\,dx = \frac{x\sin 2x}{2} + \frac{\cos 2x}{4} + C.$$
3. Đáp số: $I = \frac{x^2}{4} - \frac{x\sin 2x}{4} - \frac{\cos 2x}{8} + C$.

*Lỗi hay gặp:* Quên $+C$ ở đáp số nguyên hàm, hoặc chọn $u, dv$ ngược chiều làm tích phân mới phức tạp hơn.
