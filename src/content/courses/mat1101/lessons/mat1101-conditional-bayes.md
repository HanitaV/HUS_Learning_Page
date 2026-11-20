# Xác suất có điều kiện, xác suất đầy đủ và công thức Bayes

Khi có thêm thông tin về một biến cố đã xảy ra, không gian mẫu bị thu hẹp lại. Bài học này trình bày xác suất có điều kiện, công thức xác suất đầy đủ và công thức Bayes để truy ngược nguyên nhân.

## 1. Xác suất có điều kiện và quy tắc nhân

Với $\mathbb{P}(B) > 0$, xác suất của $A$ khi biết $B$ đã xảy ra là:

$$\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}.$$

Từ đó suy ra $\mathbb{P}(A \cap B) = \mathbb{P}(B)\mathbb{P}(A \mid B)$. Quy tắc dây chuyền cho $n$ biến cố (khi các điều kiện có xác suất dương):

$$\mathbb{P}(A_1 \cap \cdots \cap A_n) = \mathbb{P}(A_1)\prod_{i=2}^n \mathbb{P}(A_i \mid A_1 \cap \cdots \cap A_{i-1}).$$

Lưu ý: **độc lập có điều kiện** không suy ra **độc lập vô điều kiện**.

## 2. Công thức xác suất đầy đủ

Các biến cố $H_1, \dots, H_m$ tạo thành một **hệ đầy đủ** nếu chúng đôi một xung khắc ($H_i \cap H_j = \varnothing$ với $i \ne j$) và hợp lại bằng $\Omega$. Khi $\mathbb{P}(H_i) > 0$:

$$\mathbb{P}(B) = \sum_{i=1}^m \mathbb{P}(H_i)\mathbb{P}(B \mid H_i).$$

## 3. Công thức Bayes

Với hệ đầy đủ $\{H_1, \dots, H_m\}$ và $\mathbb{P}(B) > 0$, xác suất hậu nghiệm của giả thuyết $H_j$ khi đã quan sát $B$ là:

$$\mathbb{P}(H_j \mid B) = \frac{\mathbb{P}(H_j)\mathbb{P}(B \mid H_j)}{\sum_{i=1}^m \mathbb{P}(H_i)\mathbb{P}(B \mid H_i)}.$$

Trong đó $\mathbb{P}(H_j)$ là xác suất tiên nghiệm, $\mathbb{P}(B \mid H_j)$ là khả năng quan sát $B$ trong nhánh $H_j$, và $\mathbb{P}(H_j \mid B)$ là xác suất sau quan sát.

## 4. Ví dụ minh họa (ĐT34, Câu 1)

Có ba lô hàng với số sản phẩm lần lượt là $10, 15, 20$, trong đó số sản phẩm tốt lần lượt là $6, 8, 12$. Chọn ngẫu nhiên một lô, rồi rút có hoàn lại 2 lần từ lô đó thì đều được sản phẩm tốt. Tính xác suất hai sản phẩm tốt đó được lấy từ lô thứ nhất.

- Đặt $H_i$ là biến cố "chọn lô $i$" ($i = 1, 2, 3$), $\mathbb{P}(H_i) = \frac{1}{3}$ (vì chọn lô đều nhau, không phụ thuộc cỡ lô).
- Đặt $T_1, T_2$ là biến cố lần 1, lần 2 lấy được sản phẩm tốt. Do rút có hoàn lại:
  $$\mathbb{P}(T_1 T_2 \mid H_1) = \left(\frac{3}{5}\right)^2 = \frac{9}{25}, \quad \mathbb{P}(T_1 T_2 \mid H_2) = \left(\frac{8}{15}\right)^2 = \frac{64}{225}, \quad \mathbb{P}(T_1 T_2 \mid H_3) = \left(\frac{3}{5}\right)^2 = \frac{9}{25}.$$
- Theo công thức xác suất đầy đủ:
  $$\mathbb{P}(T_1 T_2) = \frac{1}{3}\left(\frac{9}{25} + \frac{64}{225} + \frac{9}{25}\right) = \frac{226}{675}.$$
- Theo công thức Bayes:
  $$\mathbb{P}(H_1 \mid T_1 T_2) = \frac{\frac{1}{3} \cdot \frac{9}{25}}{\frac{226}{675}} = \frac{81}{226} \approx 0{,}3584.$$

## Lỗi hay gặp

- Đảo nhầm $\mathbb{P}(A \mid B)$ thành $\mathbb{P}(B \mid A)$.
- Gán xác suất tiên nghiệm chọn lô theo số sản phẩm trong lô khi đề nói chọn ngẫu nhiên một lô.
- Nhân trực tiếp $\mathbb{P}(T_1)\mathbb{P}(T_2)$ mà quên điều kiện theo từng nhánh $H_i$.
