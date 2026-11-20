# Mô hình hồi quy tuyến tính đơn và phương pháp bình phương tối thiểu

Hồi quy tuyến tính đơn dựng đường thẳng $\widehat{y} = a + bx$ để xấp xỉ biến phụ thuộc $Y$ theo biến giải thích $X$ bằng cách cực tiểu hóa tổng bình phương phần dư theo phương đứng.

## 1. Phương pháp bình phương tối thiểu (OLS)

Đường hồi quy thực nghiệm $Y$ theo $X$ chọn $(a, b)$ cực tiểu hóa:

$$\operatorname{SSE}(a, b) = \sum_{i=1}^n (y_i - a - b x_i)^2.$$

Khi $S_{xx} > 0$, nghiệm duy nhất là:

$$b = \frac{S_{xy}}{S_{xx}}, \qquad a = \bar{y} - b\bar{x}.$$

Đường thẳng luôn đi qua $(\bar{x}, \bar{y})$. Với phần dư $e_i = y_i - \widehat{y}_i$, ta có $\sum e_i = 0$, $\sum x_i e_i = 0$ và:

$$\operatorname{SSE} = S_{yy} - \frac{S_{xy}^2}{S_{xx}} = S_{yy}(1 - r^2).$$

Lưu ý: Không được đảo ngược phương trình $\widehat{y} = a + bx$ để làm đường hồi quy của $X$ theo $Y$ (trừ khi $|r| = 1$).

## 2. Phân biệt các đại lượng sai số và $R^2$

- **MSE khớp:** $\operatorname{MSE}_{\text{khớp}} = \frac{\operatorname{SSE}}{n}$, và $\operatorname{RMSE}_{\text{khớp}} = \sqrt{\frac{\operatorname{SSE}}{n}}$.
- **Phương sai nhiễu ước lượng (sai số chuẩn phần dư):** dưới mô hình tuyến tính chuẩn $Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i$ ($\varepsilon_i \sim \mathcal{N}(0, \sigma^2)$ độc lập) với $n > 2$:
  $$s_e^2 = \frac{\operatorname{SSE}}{n - 2}, \qquad s_e = \sqrt{\frac{\operatorname{SSE}}{n - 2}}.$$
- **Hệ số xác định:** $R^2 = 1 - \frac{\operatorname{SSE}}{S_{yy}} = r^2$ (phần biến thiên của $Y$ được đường thẳng giải thích).

## 3. Khoảng tin cậy cho trung bình và khoảng dự báo

Tại điểm $x_0$, đặt $\widehat{y}_0 = a + bx_0$ và $h_0 = \frac{1}{n} + \frac{(x_0 - \bar{x})^2}{S_{xx}}$:

- **Khoảng tin cậy cho trung bình $\mathbb{E}(Y \mid X = x_0)$:** $\widehat{y}_0 \pm t_{n-2;\,1-\alpha/2}\, s_e \sqrt{h_0}$.
- **Khoảng dự báo cho một quan sát mới độc lập tại $x_0$:** $\widehat{y}_0 \pm t_{n-2;\,1-\alpha/2}\, s_e \sqrt{1 + h_0}$.

## 4. Ví dụ minh họa (ĐT34, Câu 4c)

Với dữ liệu 40 cửa hàng ($\bar{x} = 6{,}625$, $\bar{y} = 3{,}9225$, $S_{xx} = 151{,}375$, $S_{yy} = 56{,}04975$, $S_{xy} = 92{,}0375$):

$$b = \frac{92{,}0375}{151{,}375} \approx 0{,}6080, \qquad a = 3{,}9225 - 0{,}6080 \cdot 6{,}625 \approx -0{,}1056.$$

Đường hồi quy: $\widehat{y} = -0{,}1056 + 0{,}6080x$.

$$\operatorname{SSE} = 56{,}04975 - \frac{92{,}0375^2}{151{,}375} \approx 0{,}09004.$$

Do đó $\operatorname{MSE}_{\text{khớp}} = \frac{0{,}09004}{40} \approx 0{,}002251$, còn sai số chuẩn phần dư là $s_e = \sqrt{\frac{0{,}09004}{38}} \approx 0{,}04868$ (trăm triệu đồng/tuần).

## Lỗi hay gặp

- Nhầm mẫu số $n$ (MSE khớp) với $n - 2$ (ước lượng phương sai nhiễu $s_e^2$).
- Đảo phương trình $\widehat{y} = a + bx$ thành $x = (y - a)/b$ rồi gọi đó là hồi quy $X$ theo $Y$.
- Ngoại suy quá xa khỏi miền giá trị $X$ đã quan sát.
