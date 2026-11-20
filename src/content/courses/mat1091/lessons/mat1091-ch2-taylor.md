# Khai triển Taylor–Maclaurin với phần dư Peano

## 1. Định lý Taylor với phần dư Peano

Cho $n \in \mathbb{N}^*$, $x_0$ thuộc khoảng mở $I$; hàm $f : I \to \mathbb{R}$ có đạo hàm đến cấp $n - 1$ trên $I$ và $f^{(n - 1)}$ khả vi tại $x_0$. Khi $x \to x_0$, ta có:

$$f(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + o\big((x - x_0)^n\big).$$

Khi $x_0 = 0$, công thức này gọi là **khai triển Maclaurin**. Với $n$ cho trước, đa thức bậc không quá $n$ theo lũy thừa $(x - x_0)$ trong khai triển trên là **duy nhất**.

Vì tính duy nhất, ta có thể tìm khai triển Maclaurin của một hàm bằng cách thay biến, cộng, nhân hoặc chia các khai triển cơ bản đã biết mà không cần tính trực tiếp các đạo hàm cấp cao.

## 2. Các khai triển Maclaurin cơ bản khi $u \to 0$

- $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots + \frac{u^n}{n!} + o(u^n)$
- $\sin u = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots + o(u^{2k+1})$
- $\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \dots + o(u^{2k+2})$
- $\ln(1 + u) = u - \frac{u^2}{2} + \frac{u^3}{3} - \dots + (-1)^{n-1}\frac{u^n}{n} + o(u^n)$
- $(1 + u)^\alpha = 1 + \alpha u + \frac{\alpha(\alpha - 1)}{2!}u^2 + \dots + o(u^2)$

## 3. Kỹ thuật khai triển hàm lồng nhau và ứng dụng

Để khai triển $f(u(x))$ khi $x \to 0$ đến bậc $n$:

1. Xác định bậc $n$ cần giữ (thường bằng bậc của mẫu số).
2. Khai triển hàm ngoài $f(u)$ theo $u$ đến bậc $n$, không bỏ sót số hạng nào.
3. Thế khai triển của $u(x)$ đủ đến bậc $n$ vào từng lũy thừa của $u$ rồi gom các số hạng cùng bậc, gộp phần bậc cao hơn $n$ vào $o(x^n)$.

### Ứng dụng tính giới hạn và đạo hàm tại $0$

- **Tính $f'(0)$:** Cho $f(x) = \frac{e^{kx} - 1}{x}$ ($x \ne 0$), $f(0) = k$. Ta có:
  $$f'(0) = \lim_{x \to 0} \frac{e^{kx} - 1 - kx}{x^2}.$$
  Khai triển $e^{kx} = 1 + kx + \frac{k^2 x^2}{2} + o(x^2)$ suy ra $f'(0) = \frac{k^2}{2}$.
- **Suy ra $f^{(n)}(0)$:** Từ tính duy nhất của khai triển Maclaurin, hệ số của $x^n$ chính là $\frac{f^{(n)}(0)}{n!}$.
