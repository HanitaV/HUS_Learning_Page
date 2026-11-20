# Khoảng tin cậy cho trung bình và tỷ lệ

Khoảng tin cậy gắn thêm "khoản dự phòng" quanh ước lượng điểm để phản ánh độ bất định do lấy mẫu, với mức tin cậy $1 - \alpha$.

## 1. Khoảng tin cậy cho trung bình $\mu$

Với mẫu độc lập, khoảng hai phía có dạng $\bar{x} \pm q \cdot \operatorname{SE}(\bar{X})$:

1. **Tổng thể chuẩn, đã biết $\sigma$:**
   $$\bar{x} \pm z_{1-\alpha/2}\frac{\sigma}{\sqrt{n}} \quad (\text{chính xác theo mô hình}).$$
2. **Tổng thể chuẩn, chưa biết $\sigma$ ($n \ge 2$):** dùng phân phối Student $t_{n-1}$:
   $$\bar{x} \pm t_{n-1;\,1-\alpha/2}\frac{S}{\sqrt{n}} \quad (\text{chính xác theo mô hình}).$$
3. **Tổng thể không biết phân phối, phương sai hữu hạn, mẫu đủ lớn (CLT):**
   $$\bar{x} \pm z_{1-\alpha/2}\frac{S}{\sqrt{n}} \quad (\text{xấp xỉ}).$$

*Lưu ý ký hiệu:* Mọi phân vị trong giáo trình tính theo xác suất tích lũy bên trái, tức $\mathbb{P}(Z \le z_q) = q$ và $\mathbb{P}(T_\nu \le t_{\nu; q}) = q$.

## 2. Khoảng tin cậy cho tỷ lệ $p$

Với $M \sim \operatorname{Bin}(n, p)$ và $\widehat{p} = M/n$, khoảng Wald hai phía mức tin cậy xấp xỉ $1 - \alpha$ là:

$$\widehat{p} \pm z_{1-\alpha/2}\sqrt{\frac{\widehat{p}(1-\widehat{p})}{n}}.$$

Điều kiện thực hành thận trọng: $n\widehat{p} \ge 10$ và $n(1-\widehat{p}) \ge 10$.

## 3. Bài toán tìm cỡ mẫu tối thiểu

Để nửa độ dài khoảng không vượt quá sai số $e_0 > 0$:
- Với trung bình (khi biết $\sigma$): $n_{\min} = \left\lceil \left(\frac{z_{1-\alpha/2}\sigma}{e_0}\right)^2 \right\rceil$.
- Với tỷ lệ (kế hoạch Wald): $n_{\text{dự kiến}} = \left\lceil \frac{z_{1-\alpha/2}^2 p_*(1-p_*)}{e_0^2} \right\rceil$ (nếu chưa có $p_*$ thăm dò, dùng $p_*(1-p_*) \le \frac{1}{4}$).

## 4. Ví dụ minh họa (ĐT33, Câu 1a)

Điểm năm nhất $Y$ của $n = 9$ sinh viên (giả sử phân phối chuẩn, chưa biết $\sigma$) có $\sum y_i = 59{,}7$, $\sum y_i^2 = 404{,}05$. Tìm khoảng tin cậy $90\%$ cho $\mu_Y$:

- $\bar{y} = \frac{59{,}7}{9} \approx 6{,}6333$, $S_Y^2 = \frac{404{,}05 - 9(6{,}6333)^2}{8} = 1{,}005$, $\operatorname{SE} = \frac{\sqrt{1{,}005}}{3} \approx 0{,}3342$.
- Với $\alpha = 0{,}10$, tra $t_{8;\,0{,}95} \approx 1{,}8595$. Khoảng tin cậy $90\%$ là $6{,}6333 \pm 1{,}8595 \cdot 0{,}3342 = [6{,}0119;\, 7{,}2547]$.

## Lỗi hay gặp

- Dùng $S$ thay cho $S/\sqrt{n}$, hoặc dùng $z$ thay cho $t_{n-1}$ khi mẫu nhỏ và chưa biết $\sigma$.
- Diễn giải khoảng tin cậy $95\%$ cho $\mu$ thành "khoảng chứa $95\%$ các cá thể".
- Làm tròn cỡ mẫu $n$ xuống thay vì làm tròn lên.
