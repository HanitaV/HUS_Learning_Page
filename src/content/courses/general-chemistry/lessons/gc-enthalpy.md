# Enthalpy, công giãn nở và nhiệt dung

## Giải thích lý thuyết

Bài này nối nguyên lý I với phản ứng hóa học thực tế (áp suất không đổi): từ công giãn nở ta đi đến enthalpy, rồi dùng dấu của ΔH để phân loại phản ứng.

### Công giãn nở

Hầu hết phản ứng tiến hành trong bình hở, tức ở **áp suất không đổi**. Nếu thể tích hệ thay đổi ΔV chống lại áp suất ngoài P, hệ nhận công:

$$A = -P\,\Delta V$$

> **Công thức — Công giãn nở ở áp suất ngoài không đổi**
>
> $$A = -P\,\Delta V$$
>
> Trong đó: $A$: công hệ nhận (J); $P$: áp suất ngoài (không đổi) (Pa); $\Delta V$: biến thiên thể tích (m³).
>
> *Điều kiện:* Áp suất ngoài không đổi. Hệ giãn nở (ΔV > 0) → A < 0: hệ sinh công.

> **Lỗi thường gặp**
>
> Hệ giãn nở ($\Delta V > 0$) thì $A < 0$ (hệ sinh công). Dấu trừ trong $A = -P\Delta V$ là để đúng quy ước dấu, đừng bỏ. Khi dùng $P$ (atm) và $\Delta V$ (L), $1\ \text{L·atm} = 101{,}3\ \text{J}$.

### Enthalpy

Kết hợp với nguyên lý I ở áp suất không đổi:

$$Q_p = \Delta U - A = (U_2 - U_1) + P(V_2 - V_1) = (U_2 + PV_2) - (U_1 + PV_1)$$

Đặt **enthalpy** $H = U + PV$ (cũng là hàm trạng thái):

$$Q_p = H_2 - H_1 = \Delta H$$

> **Trọng tâm**
>
> **Nhiệt của quá trình đẳng áp bằng biến thiên enthalpy:** $Q_p = \Delta H$. Nếu thể tích không đổi ($\Delta V = 0$) thì $Q_V = \Delta U$, đây là ý nghĩa thực tế của nội năng.

Với khí lý tưởng, $P\Delta V = \Delta n\,RT$:

$$\Delta H = \Delta U + \Delta n_\text{khí}\,RT$$

> **Công thức — Liên hệ ΔH và ΔU**
>
> $$\Delta H = \Delta U + \Delta n_{\text{khí}}\,RT$$
>
> Trong đó: $\Delta n_{\text{khí}}$: số mol khí sản phẩm − số mol khí chất đầu (mol); $R$: 8,314 (J/(mol·K)); $T$: nhiệt độ (K).
>
> *Điều kiện:* Khí coi là lý tưởng; T không đổi. Thể tích chất rắn, lỏng bỏ qua.

Khi $\Delta n_\text{khí} = 0$ (hoặc chỉ có chất rắn, lỏng), $\Delta H \approx \Delta U$.

> **Lỗi thường gặp**
>
> $\Delta n_\text{khí}$ chỉ đếm chất **khí** (sản phẩm trừ chất đầu, theo hệ số). Dùng $R = 8{,}314$ J/(mol·K) thì $\Delta nRT$ ra J; đổi sang kJ trước khi cộng với ΔH.

### Nhiệt dung

- **Nhiệt dung riêng** c (J/(g·K)): nhiệt cần để tăng 1 g chất thêm 1 K: $q = c \times m \times \Delta T$.
- **Nhiệt dung mol** C (J/(mol·K)): $C = \dfrac{q}{n\,\Delta T}$. Ví dụ nước lỏng: $C = 4{,}184 \times 18{,}02 = 75{,}40$ J/(mol·K).

> **Công thức — Nhiệt lượng theo nhiệt dung riêng**
>
> $$q = m\,c\,\Delta T$$
>
> Trong đó: $q$: nhiệt lượng (J); $m$: khối lượng (g); $c$: nhiệt dung riêng (J/(g·K)); $\Delta T$: biến thiên nhiệt độ (K (= °C)).
>
> *Điều kiện:* Không có chuyển pha trong khoảng nhiệt độ xét. c coi như không đổi theo nhiệt độ.

### Thu nhiệt và tỏa nhiệt

Với phản ứng $aA + bB \to cC + dD$: $\Delta H_\text{pư} = H_\text{sp} - H_\text{cđ}$.

| | So sánh | Dấu ΔH | Ví dụ |
|---|---|---|---|
| **Tỏa nhiệt** | $H_\text{sp} < H_\text{cđ}$ | ΔH < 0 | $\mathrm{H_2(g) + \tfrac12O_2(g) \to H_2O(l)}$, ΔH = −285,8 kJ |
| **Thu nhiệt** | $H_\text{sp} > H_\text{cđ}$ | ΔH > 0 | $\mathrm{H_2O(l) \to H_2O(g)}$, ΔH = +40,7 kJ |

### Phương trình nhiệt hóa học

ΔH đi kèm phương trình với **trạng thái chất** xác định và tỉ lệ với lượng chất:

- Đảo chiều phản ứng → ΔH đổi dấu: $\mathrm{2H_2O(l) \to 2H_2 + O_2}$, ΔH = 572 kJ ⇒ $\mathrm{2H_2 + O_2 \to 2H_2O(l)}$, ΔH = −572 kJ.
- Nhân hệ số n → ΔH nhân n: $\mathrm{H_2 + \tfrac12O_2 \to H_2O(l)}$, ΔH = −286 kJ.
- Cộng phương trình → cộng ΔH (cơ sở của [định luật Hess](#/courses/general-chemistry/lessons/gc-hess-law)).

### Công thức trọng tâm

> **Công thức — Enthalpy và nhiệt đẳng áp**
>
> $$H = U + PV,\qquad Q_p = \Delta H,\qquad Q_V = \Delta U$$
>
> Trong đó: $H$: enthalpy (J); $Q_p$: nhiệt của quá trình đẳng áp (J); $Q_V$: nhiệt của quá trình đẳng tích (J).
>
> *Điều kiện:* $Q_p = \Delta H$ khi áp suất không đổi và chỉ có công giãn nở. $Q_V = \Delta U$ khi thể tích không đổi.

## Ví dụ

**Ví dụ 1.** Nung 125 g kim loại có $c = 0{,}387$ J/(g·K) từ 25 °C lên 300 °C.

1. $\Delta T = 300 - 25 = 275$ K.
2. $q = mc\Delta T$:

$$q = 0{,}387 \times 125 \times 275 = 1{,}33\times10^4\ \text{J}$$

**Ví dụ 2.** $\mathrm{CH_4(g) + 2O_2(g) \to CO_2(g) + 2H_2O(l)}$: so sánh ΔH và ΔU ở 298 K.

1. Chỉ đếm khí: $\Delta n_\text{khí} = 1 - (1 + 2) = -2$ (H₂O là chất lỏng).
2. $\Delta nRT = -2 \times 8{,}314 \times 298 \approx -4{,}96 \times 10^3$ J $= -4{,}96$ kJ.
3. $\Delta H = \Delta U + \Delta nRT$ nên $\Delta H < \Delta U$ một lượng $4{,}96$ kJ.

### Video bài giảng tham khảo

- [Nguyên lý I và enthalpy (5:22:40–5:52:09)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=19360s)
- [Công giãn nở (công PV) (5:52:09–5:59:53)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=21129s)
- [Nhiệt lượng kế và nhiệt dung (5:59:53–6:28:24)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=21593s)

## Tổng kết

- $A = -P\Delta V$: giãn nở thì hệ sinh công ($A < 0$).
- $H = U + PV$; $Q_p = \Delta H$, $Q_V = \Delta U$.
- $\Delta H = \Delta U + \Delta n_\text{khí} RT$; chỉ đếm chất khí.
- $q = mc\Delta T$; $C = q/(n\Delta T)$.
- ΔH < 0 tỏa nhiệt; ΔH > 0 thu nhiệt.
- Đảo chiều phản ứng thì đổi dấu ΔH; nhân hệ số thì nhân ΔH.
