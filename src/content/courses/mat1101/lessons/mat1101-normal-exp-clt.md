# Phân phối Chuẩn, phân phối Mũ và Định lý giới hạn trung tâm

Bài học này tổng hợp hai phân phối liên tục quan trọng nhất trong thực hành thống kê — phân phối Chuẩn và phân phối Mũ — cùng phân phối của trung bình mẫu.

## 1. Phân phối Chuẩn $\mathcal{N}(\mu, \sigma^2)$

$X \sim \mathcal{N}(\mu, \sigma^2)$ ($\mu \in \mathbb{R}, \sigma > 0$; tham số thứ hai là **phương sai**) có $\mathbb{E}X = \mu$, $\operatorname{Var}(X) = \sigma^2$. Đặt $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$ và ký hiệu $\Phi(z) = \mathbb{P}(Z \le z)$:

$$\mathbb{P}(a < X < b) = \Phi\!\left(\frac{b - \mu}{\sigma}\right) - \Phi\!\left(\frac{a - \mu}{\sigma}\right), \qquad x_q = \mu + \sigma \Phi^{-1}(q).$$

Tính đối xứng: $\Phi(-z) = 1 - \Phi(z)$ và $\Phi(0) = \frac{1}{2}$.

## 2. Phân phối của trung bình mẫu và Định lý giới hạn trung tâm

- Nếu $X_1, \dots, X_n$ độc lập cùng phân phối $\mathcal{N}(\mu, \sigma^2)$ thì trung bình mẫu có phân phối **chính xác**:
  $$\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i \sim \mathcal{N}\!\left(\mu, \frac{\sigma^2}{n}\right), \qquad \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim \mathcal{N}(0, 1).$$
- Nếu tổng thể không chuẩn nhưng có kỳ vọng $\mu$ và phương sai hữu hạn $\sigma^2 > 0$, khi cỡ mẫu $n$ đủ lớn, **Định lý giới hạn trung tâm (CLT)** cho phép xấp xỉ $\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \approx \mathcal{N}(0, 1)$.

## 3. Phân phối Mũ $\operatorname{Exp}(\lambda)$ và Phân phối Đều

$X \sim \operatorname{Exp}(\lambda)$ ($\lambda > 0$ là **tham số tốc độ**) có mật độ $f_X(x) = \lambda e^{-\lambda x}$ với $x \ge 0$ (bằng $0$ với $x < 0$):

$$\mathbb{P}(X > t) = e^{-\lambda t} \ (t \ge 0), \qquad \mathbb{E}X = \frac{1}{\lambda}, \qquad \operatorname{Var}(X) = \frac{1}{\lambda^2}.$$

**Tính không nhớ:** $\mathbb{P}(X > s + t \mid X > s) = \mathbb{P}(X > t) = e^{-\lambda t}$ với mọi $s, t \ge 0$.

Ngoài ra, $X \sim \operatorname{Unif}(a, b)$ có mật độ $\frac{1}{b-a}$ trên $[a, b]$, $\mathbb{E}X = \frac{a+b}{2}$ và $\operatorname{Var}(X) = \frac{(b-a)^2}{12}$.

## 4. Ví dụ minh họa (ĐT24, Câu 5)

Cân nặng người trên 50 tuổi tuân theo $\mathcal{N}(60, 4^2)$ (kg).

- Tỷ lệ người nặng hơn $68\text{ kg}$: $\mathbb{P}(X > 68) = 1 - \Phi\!\left(\frac{68-60}{4}\right) = 1 - \Phi(2) \approx 0{,}0228$.
- Chọn ngẫu nhiên độc lập 25 người, xác suất cân nặng trung bình lớn hơn $68\text{ kg}$:
  $$\sigma_{\bar{X}} = \frac{4}{\sqrt{25}} = 0{,}8 \implies \mathbb{P}(\bar{X} > 68) = 1 - \Phi\!\left(\frac{68-60}{0{,}8}\right) = 1 - \Phi(10) \approx 7{,}62 \cdot 10^{-24}.$$

## Lỗi hay gặp

- Chia cho phương sai $\sigma^2$ thay vì độ lệch chuẩn $\sigma$ khi chuẩn hóa.
- Dùng $\sigma$ thay cho $\sigma/\sqrt{n}$ khi tính xác suất cho trung bình mẫu $\bar{X}$.
- Nhầm thời gian chờ trung bình $2$ phút thành $\lambda = 2$ (đúng phải là $\lambda = 1/2$).
