# Vẽ gì, nghĩ gì — ΔG°, chiều phản ứng và ΔU qua hình vẽ

## Giải thích lý thuyết

### Vì sao phải vẽ?

Câu 3 của đề thi gần như luôn có cùng một khuôn: cho bảng $\Delta H^\circ_f$ và $S^\circ$, yêu cầu tính $\Delta G^\circ$, kết luận chiều phản ứng, thường hỏi thêm khoảng nhiệt độ tự diễn biến hoặc $\Delta U$. Dạng 3 có trong cả 6 đề từ 2020, còn ý $\Delta U$ có ở 5/6 đề.

Bốn hình dưới đây ứng với bốn chỗ hay mất điểm:

| Đề hỏi | Vẽ gì |
|---|---|
| $\Delta H^\circ$, $\Delta S^\circ$, $\Delta G^\circ$ ở 25 °C | **Bảng tính** có cột hệ số (Hình 1) |
| Khoảng nhiệt độ phản ứng tự xảy ra, nhiệt độ đổi chiều | **Đường ΔG° theo T** (Hình 2, 3) |
| $\Delta U$ | **Tô màu chất khí** rồi đếm $\Delta n$ (Hình 4) |
| $\Delta H$ từ các phản ứng khác (Hess) | **Chu trình** hai con đường (Hình 5) |

### Hình 1 — Bảng tính "sản phẩm − chất đầu"

Chép lại bảng của đề, **thêm một dòng hệ số ν** và nhân trước khi cộng. Ví dụ với đề ĐT27 C3, phản ứng $\mathrm{2ZnS(r) + 3O_2(k) \to 2ZnO(r) + 2SO_2(k)}$:

| | ZnS(r) | O₂(k) | ZnO(r) | SO₂(k) |
|---|---|---|---|---|
| vai trò | chất đầu | chất đầu | sản phẩm | sản phẩm |
| hệ số ν | 2 | 3 | 2 | 2 |
| $\Delta H^\circ_f$ (kJ/mol) | −206,0 | 0 | −348,3 | −296,8 |
| $S^\circ$ (J/mol·K) | 57,7 | 205,0 | 43,6 | 248,1 |
| ν·$\Delta H^\circ_f$ | −412,0 | 0 | −696,6 | −593,6 |
| ν·$S^\circ$ | 115,4 | 615,0 | 87,2 | 496,2 |

$\Delta H^\circ = (-696{,}6 - 593{,}6) - (-412{,}0) = -878{,}2$ kJ; $\Delta S^\circ = (87{,}2 + 496{,}2) - (115{,}4 + 615{,}0) = -147{,}0$ J/K.

Đơn chất bền như O₂ có $\Delta H^\circ_f = 0$ nhưng $S^\circ \ne 0$. **Không được bỏ** cột $S^\circ$ của O₂.

### Hình 2 — Đường ΔG° theo T

Coi $\Delta H^\circ$, $\Delta S^\circ$ không đổi theo nhiệt độ thì $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ là **đường thẳng** theo $T$: cắt trục tung tại $\Delta H^\circ$ và có độ dốc $-\Delta S^\circ$.

![Đường ΔG° theo T của phản ứng NH₄Cl → HCl + NH₃: cắt trục tung tại 176 kJ, cắt trục hoành tại T* = 617,5 K](images/chapter-3/gibbs-temperature-line.svg)

Đề hỏi "ở khoảng nhiệt độ nào phản ứng tự xảy ra" thì không cần nhớ bảng: chấm hai điểm $(0;\ \Delta H^\circ)$ và $(T^*;\ 0)$, nối lại, rồi đọc phần đường nằm **dưới** trục hoành.

$$T^* = \frac{\Delta H^\circ}{\Delta S^\circ}\quad(\Delta H^\circ,\ \Delta S^\circ \text{ cùng đơn vị kJ hoặc cùng J})$$

### Hình 3 — Bốn trường hợp dấu là bốn kiểu đường thẳng

![Bốn trường hợp dấu ΔH°, ΔS° vẽ thành bốn đường thẳng; phần xanh là ΔG° < 0](images/chapter-3/gibbs-four-cases.svg)

$T^*$ chỉ có nghĩa khi $\Delta H^\circ$ và $\Delta S^\circ$ **cùng dấu**, vì chỉ khi đó đường thẳng mới cắt trục hoành ở $T > 0$. Muốn đoán nhanh dấu của $\Delta S^\circ$: số mol khí giảm thì $\Delta S^\circ < 0$ (ZnS, CuS, CO cháy), số mol khí tăng thì $\Delta S^\circ > 0$ (nhiệt phân NH₄Cl).

### Hình 4 — Tô màu chất khí để đếm Δn

![Phương trình 2CuS(r) + 3O₂(k) → 2CuO(r) + 2SO₂(k) với các chất khí được tô màu; Δn = 2 − 3 = −1](images/chapter-3/delta-n-gas.svg)

$$\Delta H = \Delta U + \Delta n_\text{khí}RT \;\Rightarrow\; \Delta U = \Delta H - \Delta n_\text{khí}RT,\qquad RT = 2{,}478 \text{ kJ/mol ở 298 K}$$

Chỉ đếm chất **(k)**. Chất rắn (r) và chất lỏng (l), kể cả H₂O(l), đều không đếm. Kết quả $\Delta U$ chỉ lệch $\Delta H$ vài kJ. Nếu thấy lệch hàng trăm kJ thì gần như chắc chắn đã dùng $R = 0{,}082$ hoặc quên đổi J → kJ.

### Hình 5 — Chu trình Hess

![Chu trình Hess: từ 2C + H₂ đến C₂H₂ đi thẳng hoặc đi vòng qua CO₂ và H₂O; ΔH° = −1074 + 1300 = +226 kJ](images/chapter-3/hess-cycle.svg)

Cộng phương trình thì cộng $\Delta H$, đảo chiều thì **đổi dấu**, nhân hệ số thì **nhân** $\Delta H$. Vẽ chu trình giúp thấy phản ứng nào phải đảo chiều: đó là mũi tên đi ngược với phản ứng đã cho. Bài Hess thuần không xuất hiện trong các đề từ 2020, nhưng đây là nền tảng của cách tính $\Delta H^\circ$ từ nhiệt tạo thành.

### Những lỗi hay gặp

| Lỗi | Cách tránh |
|---|---|
| Trừ kJ với J trong $\Delta H^\circ - T\Delta S^\circ$ | Đổi $\Delta S^\circ$ sang kJ/K (chia 1000) trước khi nhân với T |
| Quên $S^\circ$ của đơn chất (O₂, H₂…) | Đơn chất có $\Delta H^\circ_f = 0$ nhưng $S^\circ \ne 0$ |
| Quên nhân hệ số | Thêm dòng ν vào bảng (Hình 1) |
| Dùng nhầm H₂O(l) và H₂O(k) | Chép đúng trạng thái trong phương trình |
| Đếm chất rắn, chất lỏng vào $\Delta n$ | Tô màu chất khí trước (Hình 4) |
| Kết luận ngược khoảng nhiệt độ khi $\Delta S^\circ < 0$ | Vẽ đường thẳng (Hình 2, 3) thay vì biến đổi bất đẳng thức |

### Tự kiểm tra trước khi kết luận

- Dấu $\Delta S^\circ$ có khớp với sự thay đổi số mol khí không?
- $|\Delta U - \Delta H|$ có nhỏ (cỡ vài kJ) không?
- $T^*$ có hợp lý không? Ví dụ 617,5 K là hợp lý; 0,6 K hay 617 500 K là dấu hiệu lệch đơn vị J/kJ.

### Công thức trọng tâm

> **Công thức — Enthalpy phản ứng từ nhiệt tạo thành**
>
> $$\Delta H^\circ_{\text{pư}} = \sum \nu\,\Delta H^\circ_f(\text{sp}) - \sum \nu\,\Delta H^\circ_f(\text{cđ})$$
>
> Trong đó: $\Delta H^\circ_f$: nhiệt tạo thành chuẩn (kJ/mol); $\nu$: hệ số tỉ lượng.
>
> *Điều kiện:* Điều kiện chuẩn quy ước: áp suất 1 atm, nhiệt độ 25 °C (298 K). Quy ước: $\Delta H^\circ_f$ của đơn chất bền = 0. Chú ý trạng thái: $\Delta H^\circ_f[\mathrm{H_2O(l)}] \ne \Delta H^\circ_f[\mathrm{H_2O(g)}]$.

> **Công thức — Biến thiên entropy của phản ứng**
>
> $$\Delta S^\circ_{\text{pư}} = \sum \nu\,S^\circ(\text{sp}) - \sum \nu\,S^\circ(\text{cđ})$$
>
> Trong đó: $S^\circ$: entropy chuẩn (J/(mol·K)); $\nu$: hệ số tỉ lượng.
>
> *Điều kiện:* Entropy chuẩn của đơn chất KHÁC 0 (khác với ΔH°f). Phản ứng tăng số mol khí thường có ΔS > 0.

> **Công thức — Năng lượng tự do Gibbs**
>
> $$\Delta G = \Delta H - T\Delta S$$
>
> Trong đó: $\Delta G$: biến thiên năng lượng tự do (kJ); $\Delta H$: biến thiên enthalpy (kJ); $T$: nhiệt độ tuyệt đối (K); $\Delta S$: biến thiên entropy (kJ/K).
>
> *Điều kiện:* Nhiệt độ và áp suất không đổi. Đổi ΔS từ J/K sang kJ/K trước khi nhân với T (chia 1000). Tiêu chí: ΔG < 0 tự diễn biến; ΔG = 0 cân bằng; ΔG > 0 không tự diễn biến theo chiều thuận.

> **Công thức — Nhiệt độ đổi chiều phản ứng**
>
> $$T = \frac{\Delta H^\circ}{\Delta S^\circ}$$
>
> Trong đó: $T$: nhiệt độ tại đó ΔG° = 0 (K).
>
> *Điều kiện:* Giả sử ΔH° và ΔS° không phụ thuộc nhiệt độ. Chỉ có nghĩa khi ΔH° và ΔS° cùng dấu.

> **Công thức — Liên hệ ΔH và ΔU**
>
> $$\Delta H = \Delta U + \Delta n_{\text{khí}}\,RT$$
>
> Trong đó: $\Delta n_{\text{khí}}$: số mol khí sản phẩm − số mol khí chất đầu (mol); $R$: 8,314 (J/(mol·K)); $T$: nhiệt độ (K).
>
> *Điều kiện:* Khí coi là lý tưởng; T không đổi. Thể tích chất rắn, lỏng bỏ qua.

> **Công thức — Tổ hợp phương trình nhiệt hóa học (Hess)**
>
> $$\Delta H_{\text{tổng}} = \sum_i k_i\,\Delta H_i$$
>
> Trong đó: $k_i$: hệ số nhân phương trình i (âm nếu đảo chiều); $\Delta H_i$: hiệu ứng nhiệt phương trình i (kJ).
>
> *Điều kiện:* Đảo chiều phản ứng → đổi dấu ΔH. Nhân hệ số n → nhân ΔH với n. Trạng thái chất (s, l, g) phải khớp nhau.

## Ví dụ

Hai lời giải dưới đây viết theo kiểu **nghĩ thành lời**. Phần in nghiêng là câu người giải tự hỏi mình.

**Ví dụ 1 (ĐT25 C3).** $\mathrm{NH_4Cl(r) \to HCl(k) + NH_3(k)}$, cho $\Delta H^\circ_f$ (kJ/mol): −314; −92; −46 và $S^\circ$ (J/mol·K): 95; 187; 193. Tính $\Delta G^\circ$ ở 25 °C và khoảng nhiệt độ phản ứng tự xảy ra.

1. *Vẽ gì?* Bảng có hệ số (đều bằng 1), sau đó vẽ đường ΔG° theo T.
2. $\Delta H^\circ = (-92 - 46) - (-314) = +176$ kJ; $\Delta S^\circ = (187 + 193) - 95 = +285$ J/K $= 0{,}285$ kJ/K.
3. *Dấu $\Delta S^\circ$ có hợp lý không?* Từ 0 mol khí thành 2 mol khí, nên $\Delta S^\circ > 0$ ✔.
4. $\Delta G^\circ_{298} = 176 - 298 \times 0{,}285 = +91{,}07$ kJ > 0 → ở 25 °C phản ứng không tự xảy ra.
5. *Cùng dấu (+, +), vậy có $T^*$.* $T^* = 176/0{,}285 = 617{,}5$ K. Đường đi xuống, cắt trục hoành tại $T^*$ → tự xảy ra khi **T > 617,5 K** (≈ 344,5 °C).

**Ví dụ 2 (ĐT28 C3a).** $\mathrm{2CO(k) + O_2(k) \to 2CO_2(k)}$, $\Delta H^\circ = -566$ kJ. Tính $\Delta U^\circ$ ở 298 K.

1. *Chất nào là khí?* Cả ba chất đều là khí: tô màu cả ba.
2. $\Delta n_\text{khí} = 2 - (2 + 1) = -1$.
3. $\Delta U = \Delta H - \Delta n RT = -566 - (-1)(2{,}478) = -563{,}5$ kJ.
4. *Kiểm tra:* $\Delta U$ lệch $\Delta H$ 2,5 kJ, cỡ vài kJ ✔. Số mol khí giảm nên hệ nhận công, $\Delta U$ ít âm hơn $\Delta H$ ✔.

Dùng hai ví dụ trên để rà soát một lời giải có lỗi: kiểm tra đơn vị trong ΔG° và chỉ đếm chất khí khi tính Δn. Hãy chỉ ra dòng sai trước khi sửa đáp số.

Sau khi sửa lỗi, tự hoàn thành bài ZnS bằng một bảng có hệ số. Bạn đã có phần tính ΔH° và ΔS° ở Hình 1; hãy nối tiếp đến ΔG° và ΔU, rồi đối chiếu dấu và đơn vị.

## Tổng kết

- **Bảng có dòng hệ số** để tính $\Delta H^\circ$, $\Delta S^\circ$; đơn chất có $S^\circ \ne 0$.
- $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ là **đường thẳng** theo T: cắt trục tung tại $\Delta H^\circ$, cắt trục hoành tại $T^* = \Delta H^\circ/\Delta S^\circ$; phần dưới trục hoành là tự xảy ra.
- Bốn trường hợp dấu ứng với bốn kiểu đường. $T^*$ chỉ có khi $\Delta H^\circ$, $\Delta S^\circ$ cùng dấu.
- $\Delta U = \Delta H - \Delta n_\text{khí}RT$: **chỉ đếm chất khí**, $RT = 2{,}478$ kJ/mol.
- Hess: hai con đường cùng đầu, cùng cuối thì cho cùng $\Delta H$; đảo chiều thì đổi dấu.
