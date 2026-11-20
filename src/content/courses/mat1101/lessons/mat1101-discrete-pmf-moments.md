# Bảng phân phối xác suất, kỳ vọng và phương sai

Biến ngẫu nhiên biến kết quả của phép thử thành một con số. Bài học này trình bày bảng phân phối xác suất, hàm phân phối tích lũy và các đặc trưng số của biến ngẫu nhiên rời rạc.

## 1. Biến ngẫu nhiên rời rạc và bảng phân phối

Biến ngẫu nhiên $X$ là rời rạc nếu tập giá trị của nó hữu hạn hoặc đếm được $\{x_1, x_2, \dots\}$. Đặt $p_i = \mathbb{P}(X = x_i)$. Điều kiện hợp lệ của bảng phân phối xác suất là:

$$p_i \ge 0 \quad \forall i, \qquad \sum_i p_i = 1.$$

## 2. Hàm phân phối xác suất (CDF)

Theo quy ước của giáo trình, hàm phân phối xác suất của $X$ là:

$$F_X(x) = \mathbb{P}(X \le x) = \sum_{x_i \le x} p_i.$$

$F_X$ là hàm không giảm, liên tục phải, $\lim_{x \to -\infty} F_X(x) = 0$ và $\lim_{x \to +\infty} F_X(x) = 1$. Với $a < b$, $\mathbb{P}(a < X \le b) = F_X(b) - F_X(a)$.

## 3. Kỳ vọng, phương sai và hàm của biến ngẫu nhiên

Khi các tổng hội tụ tuyệt đối:

$$\mathbb{E}X = \sum_i x_i p_i, \qquad \mathbb{E}[g(X)] = \sum_i g(x_i) p_i,$$

$$\operatorname{Var}(X) = \mathbb{E}[(X - \mathbb{E}X)^2] = \mathbb{E}(X^2) - (\mathbb{E}X)^2, \qquad \sigma_X = \sqrt{\operatorname{Var}(X)}.$$

Với các hằng số $a, b$:

$$\mathbb{E}(aX + b) = a\mathbb{E}X + b, \qquad \operatorname{Var}(aX + b) = a^2\operatorname{Var}(X), \qquad \sigma_{aX+b} = |a|\sigma_X.$$

## 4. Mode và phân phối đồng thời rời rạc

- **Mode** của $X$ là giá trị $x_i$ có xác suất $p_i$ lớn nhất (có thể có nhiều mode).
- Với hai biến $(X, Y)$ có bảng xác suất đồng thời $p_{ij} = \mathbb{P}(X = x_i, Y = y_j)$, các phân phối biên là $p_{i\cdot} = \sum_j p_{ij}$ và $p_{\cdot j} = \sum_i p_{ij}$.
- $X, Y$ **độc lập** khi và chỉ khi $p_{ij} = p_{i\cdot} p_{\cdot j}$ với mọi $i, j$.
- **Hiệp phương sai** $\operatorname{Cov}(X, Y) = \mathbb{E}(XY) - \mathbb{E}X\mathbb{E}Y$, và $\operatorname{Var}(aX + bY) = a^2\operatorname{Var}(X) + b^2\operatorname{Var}(Y) + 2ab\operatorname{Cov}(X, Y)$.

## 5. Ví dụ minh họa (ĐT08, Câu 1)

Cho $X$ nhận các giá trị $\{1, 2, 4, 8, 16\}$ với $\mathbb{P}(X = x_i) = k/x_i$ ($k > 0$).

- Chuẩn hóa: $k\left(1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16}\right) = 1 \implies k \cdot \frac{31}{16} = 1 \implies k = \frac{16}{31}$.
- Kỳ vọng: $\mathbb{E}X = \sum_{i=1}^5 x_i \frac{k}{x_i} = 5k = \frac{80}{31}$.
- $\mathbb{E}(X^2) = k(1 + 2 + 4 + 8 + 16) = 31k = 16 \implies \operatorname{Var}(X) = 16 - \left(\frac{80}{31}\right)^2 = \frac{8976}{961}$.

## Lỗi hay gặp

- Tính $\mathbb{E}X, \operatorname{Var}(X)$ khi chưa kiểm tra $\sum p_i = 1$.
- Nhầm $\mathbb{E}(X^2)$ với $(\mathbb{E}X)^2$, hoặc trả lời phương sai khi đề hỏi độ lệch chuẩn.
- Tự ý dùng $\mathbb{E}[g(X)] = g(\mathbb{E}X)$ cho hàm phi tuyến.
