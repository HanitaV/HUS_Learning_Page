# Khung kiểm định giả thuyết, sai lầm loại I/II và p-value

Kiểm định giả thuyết thống kê đặt câu hỏi: nếu nhận định ban đầu $H_0$ đúng, dữ liệu quan sát được có đủ bất thường để bác bỏ $H_0$ hay không?

## 1. Giả thuyết, mức ý nghĩa và hai loại sai lầm

- **$H_0$ (giả thuyết gốc)** và **$H_1$ (đối thuyết)** được xác định *trước* khi xem dữ liệu.
- **Sai lầm loại I:** Bác bỏ $H_0$ khi $H_0$ đúng; mức ý nghĩa $\alpha$ là chặn trên xác suất mắc sai lầm loại I dưới $H_0$.
- **Sai lầm loại II:** Không bác bỏ $H_0$ khi một đối thuyết cụ thể $H_1$ đúng (xác suất mắc sai lầm loại II ký hiệu là $\beta$; lực kiểm định là $1 - \beta$).

## 2. Giá trị p (p-value) và quy tắc quyết định

Với thống kê kiểm định $T$ và chiều đối thuyết đã chọn, **giá trị p** là xác suất (tính dưới $H_0$) thu được kết quả ít nhất cực đoan bằng kết quả quan sát $T_{\text{obs}}$.

- Bác bỏ $H_0$ ở mức $\alpha$ khi $p \le \alpha$ (hoặc khi $T_{\text{obs}}$ rơi vào miền bác bỏ).
- Với thống kê $T$ liên tục, đối xứng quanh 0 có CDF dưới $H_0$ là $F_0$:
  - $H_1$: tham số lớn hơn $\implies$ miền bác bỏ $T \ge q_{1-\alpha}$, $p = 1 - F_0(T_{\text{obs}})$.
  - $H_1$: tham số nhỏ hơn $\implies$ miền bác bỏ $T \le q_\alpha$, $p = F_0(T_{\text{obs}})$.
  - $H_1$: tham số khác $\implies$ miền bác bỏ $|T| \ge q_{1-\alpha/2}$, $p = 2\min\{F_0(T_{\text{obs}}),\, 1 - F_0(T_{\text{obs}})\}$.

## 3. Diễn giải đúng kết quả kiểm định

- "Chưa đủ bằng chứng bác bỏ $H_0$" **không** có nghĩa là đã chứng minh $H_0$ đúng.
- Giá trị p **không** phải xác suất $H_0$ đúng ($\mathbb{P}(H_0 \mid \text{dữ liệu})$).
- Ý nghĩa thống kê ($p \le \alpha$) không đồng nghĩa với độ lớn thực tế: với cỡ mẫu rất lớn, một chênh lệch rất nhỏ cũng có thể cho p nhỏ.

## Lỗi hay gặp

- Đổi chiều đối thuyết $H_1$ sau khi đã nhìn thấy dấu của $\bar{x} - \mu_0$.
- Dùng phân vị hai phía $z_{1-\alpha/2}$ cho bài toán kiểm định một phía.
- Kết luận "$H_0$ đúng" khi không bác bỏ được $H_0$.
