# Kiểm định kỳ vọng và tỷ lệ một mẫu, hai mẫu

Bài học này tổng hợp các thống kê kiểm định chuẩn và Student cho trung bình và tỷ lệ trên một mẫu và hai mẫu (độc lập hoặc ghép cặp).

## 1. Kiểm định một trung bình ($H_0: \mu = \mu_0$)

- **Tổng thể chuẩn, biết $\sigma$:** $Z = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}} \sim \mathcal{N}(0, 1)$.
- **Tổng thể chuẩn, chưa biết $\sigma$:** $T = \frac{\bar{X} - \mu_0}{S/\sqrt{n}} \sim t_{n-1}$.
- **Mẫu lớn (CLT):** $\frac{\bar{X} - \mu_0}{S/\sqrt{n}} \approx \mathcal{N}(0, 1)$.

## 2. Kiểm định một tỷ lệ ($H_0: p = p_0$, $0 < p_0 < 1$)

Khi $np_0 \ge 10$ và $n(1-p_0) \ge 10$, dùng tỷ lệ giả thuyết $p_0$ ở mẫu số:

$$Z = \frac{\widehat{p} - p_0}{\sqrt{p_0(1-p_0)/n}} \approx \mathcal{N}(0, 1).$$

## 3. So sánh hai trung bình ($\Delta = \mu_1 - \mu_2$, $H_0: \Delta = \Delta_0$)

- **Hai mẫu độc lập, biết $\sigma_1, \sigma_2$:** $Z = \frac{\bar{X} - \bar{Y} - \Delta_0}{\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}}$.
- **Hai mẫu độc lập chuẩn, $\sigma_1^2 = \sigma_2^2$ (pooled $t$):**
  $$S_p^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}, \qquad T = \frac{\bar{X} - \bar{Y} - \Delta_0}{S_p\sqrt{1/n_1 + 1/n_2}} \sim t_{n_1+n_2-2}.$$
- **Hai mẫu độc lập, không giả thiết phương sai bằng nhau (Welch):** $T_W = \frac{\bar{X} - \bar{Y} - \Delta_0}{\sqrt{S_1^2/n_1 + S_2^2/n_2}} \approx t_{\nu_W}$.
- **Mẫu ghép cặp ($D_i = X_i - Y_i$):** $T_D = \frac{\bar{D} - \Delta_0}{S_D/\sqrt{n}} \sim t_{n-1}$ (nếu $D_i$ i.i.d. chuẩn).

## 4. So sánh hai tỷ lệ độc lập ($H_0: p_1 = p_2$)

Đặt tỷ lệ gộp $\widehat{p} = \frac{M_1 + M_2}{n_1 + n_2}$. Khi các tần số kỳ vọng $n_i\widehat{p}, n_i(1-\widehat{p}) \ge 10$:

$$Z = \frac{\widehat{p}_1 - \widehat{p}_2}{\sqrt{\widehat{p}(1-\widehat{p})(1/n_1 + 1/n_2)}} \approx \mathcal{N}(0, 1).$$

## 5. Ví dụ minh họa (ĐT33, Câu 3a)

Đo thời gian sử dụng sản phẩm $X$ (giờ/tuần) trên $n = 9$ quan sát (giả sử chuẩn, chưa biết $\sigma$), thu được $\bar{x} = 24{,}7778$, $S^2 = 111{,}1944$. Nhà sản xuất tuyên bố $\mu = 25$. Kiểm định ở mức $\alpha = 5\%$ xem nhà sản xuất có nói quá không ($H_0: \mu \ge 25$, $H_1: \mu < 25$).

$$T = \frac{24{,}7778 - 25}{\sqrt{111{,}1944/9}} = -0{,}0632, \qquad \nu = 8.$$

Miền bác bỏ: $T < -t_{8;\,0{,}95} = -1{,}8595$ (và $p \approx 0{,}4756 > 0{,}05$). Chưa đủ bằng chứng kết luận nhà sản xuất nói quá.

## Lỗi hay gặp

- Dùng $\widehat{p}$ thay cho $p_0$ trong sai số chuẩn của kiểm định Z một tỷ lệ.
- Xử lý dữ liệu ghép cặp (cùng người trước/sau) như hai mẫu độc lập.
- Mặc định dùng pooled $t$ dù không có giả thiết $\sigma_1^2 = \sigma_2^2$.
