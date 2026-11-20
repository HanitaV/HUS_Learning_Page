# Phân phối Nhị thức, Poisson, Hình học và Siêu bội

Các mô hình đếm rời rạc phổ biến được phân biệt bởi câu hỏi: đếm số thành công trong $n$ lần thử cố định, đếm số sự kiện trong một khoảng, đếm số lần thử đến thành công đầu tiên, hay rút không hoàn lại từ tổng thể hữu hạn.

## 1. Phân phối Nhị thức $\operatorname{Bin}(n, p)$

Thực hiện $n$ phép thử Bernoulli **độc lập**, mỗi lần có xác suất thành công không đổi $p \in [0, 1]$. Số lần thành công $X \sim \operatorname{Bin}(n, p)$ có:

$$\mathbb{P}(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \dots, n.$$

$$\mathbb{E}X = np, \qquad \operatorname{Var}(X) = np(1-p), \qquad \mathbb{P}(X \ge 1) = 1 - (1-p)^n.$$

**Quy tắc tìm mode ($0 < p < 1$):** Đặt $a = (n+1)p$. Nếu $a$ không nguyên thì mode duy nhất là $\lfloor a \rfloor$; nếu $a = m$ nguyên thì có hai mode là $m-1$ và $m$.

## 2. Phân phối Poisson $\operatorname{Pois}(\lambda)$

$X \sim \operatorname{Pois}(\lambda)$ ($\lambda > 0$) mô tả số sự kiện xảy ra trên một khoảng thời gian/không gian cố định với cường độ trung bình $\lambda$:

$$\mathbb{P}(X = k) = e^{-\lambda}\frac{\lambda^k}{k!}, \quad k = 0, 1, 2, \dots, \qquad \mathbb{E}X = \operatorname{Var}(X) = \lambda.$$

Nếu $X_i \sim \operatorname{Pois}(\lambda_i)$ độc lập thì $\sum_i X_i \sim \operatorname{Pois}(\sum_i \lambda_i)$. Khi $n$ lớn và $p$ nhỏ ($\lambda = np$), $\operatorname{Bin}(n, p)$ có thể xấp xỉ bởi $\operatorname{Pois}(\lambda)$.

## 3. Phân phối Hình học $\operatorname{Geom}(p)$

Lặp độc lập các phép thử Bernoulli với xác suất thành công $p \in (0, 1]$. Gọi $N$ là số lần thử **kể cả lần thành công đầu tiên**:

$$\mathbb{P}(N = k) = (1-p)^{k-1}p \ (k \ge 1), \qquad \mathbb{P}(N > k) = (1-p)^k, \qquad \mathbb{E}N = \frac{1}{p}, \quad \operatorname{Var}(N) = \frac{1-p}{p^2}.$$

## 4. Phân phối Siêu bội

Từ tổng thể $N$ phần tử có $K$ phần tử đạt, rút ngẫu nhiên $n$ phần tử **không hoàn lại**. Số phần tử đạt $X$ có:

$$\mathbb{P}(X = k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}, \qquad \mathbb{E}X = np, \quad \operatorname{Var}(X) = np(1-p)\frac{N-n}{N-1} \ \left(p = \frac{K}{N}\right).$$

## 5. Ví dụ minh họa (ĐT26, Bài 2a)

Một vùng dân cư có tỷ lệ mắc sốt rét $p = 0{,}03$. Cần chọn ngẫu nhiên tối thiểu bao nhiêu người (theo mô hình độc lập) để gặp ít nhất 1 người mắc bệnh với xác suất ít nhất $99\%$?

$$\mathbb{P}(X \ge 1) = 1 - 0{,}97^n \ge 0{,}99 \iff 0{,}97^n \le 0{,}01 \iff n \ge \frac{\ln 0{,}01}{\ln 0{,}97} \approx 151{,}21.$$

(Lưu ý đổi chiều bất đẳng thức vì $\ln 0{,}97 < 0$.) Vậy cần ít nhất $n = 152$ người.

## Lỗi hay gặp

- Dùng phân phối Nhị thức khi rút không hoàn lại từ tổng thể nhỏ thay vì Siêu bội.
- Dùng kỳ vọng $np$ để trả lời câu hỏi "số lần có khả năng nhất" (mode).
- Quên đổi đơn vị cường độ $\lambda$ khi khoảng quan sát thay đổi trong bài toán Poisson.
