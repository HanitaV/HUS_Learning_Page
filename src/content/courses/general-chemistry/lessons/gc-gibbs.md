# Năng lượng tự do Gibbs và điều kiện tự diễn biến

## Giải thích lý thuyết

ΔH và ΔS riêng lẻ không quyết định chiều phản ứng. Năng lượng tự do Gibbs (J. W. Gibbs, 1839–1903) gộp cả hai thành một đại lượng, và dấu của ΔG cho biết phản ứng có tự diễn biến hay không.

### Định nghĩa năng lượng tự do Gibbs

$$G = H - TS$$

Ở nhiệt độ và áp suất không đổi:

$$\Delta G = \Delta H - T\Delta S$$

> **Công thức — Năng lượng tự do Gibbs**
>
> $$\Delta G = \Delta H - T\Delta S$$
>
> Trong đó: $\Delta G$: biến thiên năng lượng tự do (kJ); $\Delta H$: biến thiên enthalpy (kJ); $T$: nhiệt độ tuyệt đối (K); $\Delta S$: biến thiên entropy (kJ/K).
>
> *Điều kiện:* Nhiệt độ và áp suất không đổi. Đổi ΔS từ J/K sang kJ/K trước khi nhân với T (chia 1000). Tiêu chí: ΔG < 0 tự diễn biến; ΔG = 0 cân bằng; ΔG > 0 không tự diễn biến theo chiều thuận.

Với phản ứng: $\Delta G_\text{pư} = \sum\nu\,\Delta G_f(\text{sp}) - \sum\nu\,\Delta G_f(\text{cđ})$; đơn vị thường là kJ (kcal).

> **Công thức — ΔG° phản ứng từ ΔG°f**
>
> $$\Delta G^\circ_{\text{pư}} = \sum \nu\,\Delta G^\circ_f(\text{sp}) - \sum \nu\,\Delta G^\circ_f(\text{cđ})$$
>
> Trong đó: $\Delta G^\circ_f$: năng lượng tự do tạo thành chuẩn (kJ/mol).
>
> *Điều kiện:* Điều kiện chuẩn, 25 °C. $\Delta G^\circ_f$ của đơn chất bền = 0.

### Tiêu chí chiều phản ứng (T, P không đổi)

| ΔG | Kết luận |
|---|---|
| ΔG < 0 | Phản ứng **tự diễn biến** theo chiều thuận |
| ΔG = 0 | Phản ứng **đạt cân bằng** |
| ΔG > 0 | Phản ứng không tự xảy ra theo chiều thuận; chiều **nghịch** tự diễn biến |

> **Trọng tâm**
>
> ΔG kết hợp hai xu hướng: giảm enthalpy (ΔH < 0) và tăng entropy (ΔS > 0). Tiêu chí ΔG chỉ áp dụng khi T và P không đổi.

### Ảnh hưởng của nhiệt độ

| ΔH | ΔS | Tự diễn biến khi |
|---|---|---|
| − | + | mọi nhiệt độ |
| + | − | không bao giờ (ví dụ quang hợp) |
| − | − | nhiệt độ thấp: $T < \Delta H/\Delta S$ |
| + | + | nhiệt độ cao: $T > \Delta H/\Delta S$ |

Nhiệt độ "đổi chiều" $T = \Delta H^\circ/\Delta S^\circ$ (giả thiết ΔH°, ΔS° không phụ thuộc T).

> **Công thức — Nhiệt độ đổi chiều phản ứng**
>
> $$T = \frac{\Delta H^\circ}{\Delta S^\circ}$$
>
> Trong đó: $T$: nhiệt độ tại đó ΔG° = 0 (K).
>
> *Điều kiện:* Giả sử ΔH° và ΔS° không phụ thuộc nhiệt độ. Chỉ có nghĩa khi ΔH° và ΔS° cùng dấu.

> **Lỗi thường gặp**
>
> **Lệch đơn vị kJ và J:** ΔH thường tính bằng kJ còn ΔS bằng J/K. Phải đổi ΔS sang kJ/K (chia 1000) trước khi nhân với T, nếu không ΔG sai gấp 1000 lần.

> **Lỗi thường gặp**
>
> Chỉ dùng $T = \Delta H^\circ/\Delta S^\circ$ khi ΔH° và ΔS° **cùng dấu**; nếu khác dấu thì phản ứng luôn tự diễn biến hoặc không bao giờ tự diễn biến.

### Tính cộng tính của ΔG và ghép cặp phản ứng

Giống ΔH: cộng phương trình → cộng ΔG; nhân n → nhân ΔG với n; đảo chiều → đổi dấu.

**Ghép cặp phản ứng:** phản ứng có ΔG > 0 có thể được "kéo" xảy ra khi ghép với phản ứng có ΔG âm hơn:

$$\mathrm{Cu_2O(s) \to 2Cu(s) + \tfrac12O_2(g)}\quad \Delta G_{375} = +140{,}0\ \text{kJ}$$

$$\mathrm{C(s) + \tfrac12O_2(g) \to CO(g)}\quad \Delta G_{375} = -143{,}8\ \text{kJ}$$

$$\mathrm{Cu_2O(s) + C(s) \to 2Cu(s) + CO(g)}\quad \Delta G_{375} = -3{,}8\ \text{kJ}$$

> **Lưu ý**
>
> ΔG < 0 chỉ cho biết phản ứng **có thể** tự xảy ra về mặt nhiệt động; phản ứng có thể vẫn rất chậm (ví dụ hỗn hợp H₂S và O₂, Bài 18). Tốc độ thuộc về động hóa học.

## Ví dụ

**Ví dụ.** $\mathrm{4KClO_3(s) \to 3KClO_4(s) + KCl(s)}$: $\Delta H^\circ = -144$ kJ; $\Delta S^\circ = -36{,}8$ J/K. Xét ở 298 K.

1. Đổi đơn vị: $\Delta S^\circ = -36{,}8$ J/K $= -0{,}0368$ kJ/K.
2. Thay vào $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$:

$$\Delta G^\circ = -144 - 298\times\left(\frac{-36{,}8}{1000}\right) = -133\ \text{kJ} < 0$$

3. $\Delta G^\circ < 0$ nên phản ứng tự diễn biến ở 298 K.
4. ΔH < 0 và ΔS < 0 (cùng dấu) nên có nhiệt độ đổi chiều $T = -144/(-0{,}0368) \approx 3{,}9\times10^3$ K. Ở $T$ cao hơn giá trị này phản ứng không còn tự diễn biến.

### Video bài giảng tham khảo

- [Năng lượng tự do Gibbs (27:50:50–28:22:20)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=100250s)
- [Tính ΔG, ΔH, ΔS (28:22:20–28:39:52)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=102140s)

## Tổng kết

- $G = H - TS$; $\Delta G = \Delta H - T\Delta S$ (T, P không đổi).
- ΔG < 0: tự diễn biến chiều thuận; ΔG = 0: cân bằng; ΔG > 0: chiều nghịch tự diễn biến.
- Dấu ΔH, ΔS quyết định vai trò của nhiệt độ; $T = \Delta H/\Delta S$ chỉ có nghĩa khi cùng dấu.
- ΔS đổi sang kJ/K trước khi nhân với T.
- ΔG có tính cộng tính; có thể ghép cặp phản ứng.
- ΔG < 0 không đảm bảo phản ứng nhanh.
