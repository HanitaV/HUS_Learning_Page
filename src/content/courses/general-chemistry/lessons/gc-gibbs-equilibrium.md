# Năng lượng tự do Gibbs và hằng số cân bằng

## Giải thích lý thuyết

Bài trước dùng dấu của ΔG° để xét chiều ở điều kiện chuẩn. Bài này mở rộng cho điều kiện bất kỳ và nối ΔG° với hằng số cân bằng K, rồi xét ảnh hưởng của nhiệt độ lên K.

### ΔG ở điều kiện bất kỳ

$$\Delta G = \Delta G^\circ + RT\ln Q$$

> **Công thức — ΔG ở điều kiện bất kỳ**
>
> $$\Delta G = \Delta G^\circ + RT\ln Q$$
>
> Trong đó: $Q$: thương số phản ứng (cùng dạng biểu thức với K); $R$: 8,314 (J/(mol·K)).
>
> *Điều kiện:* T không đổi; Q tính bằng áp suất riêng phần (atm) hoặc nồng độ (M). Ở điều kiện chuẩn Q = 1 → ΔG = ΔG°.

Q là **thương số phản ứng** — cùng dạng với biểu thức hằng số cân bằng nhưng dùng áp suất riêng phần (atm) hoặc nồng độ (M) **tại thời điểm đang xét**. Ở điều kiện chuẩn ($P = 1$ atm, $[\,] = 1$ M) thì $Q = 1$ và $\Delta G = \Delta G^\circ$.

### Tại cân bằng

Khi cân bằng: $\Delta G = 0$ và $Q = K$, nên

$$\Delta G^\circ = -RT\ln K\qquad\Longleftrightarrow\qquad K = e^{-\Delta G^\circ/RT}$$

> **Công thức — Quan hệ ΔG° và hằng số cân bằng**
>
> $$\Delta G^\circ = -RT\ln K \quad\Longleftrightarrow\quad K = e^{-\Delta G^\circ/RT}$$
>
> Trong đó: $K$: hằng số cân bằng (Kp hoặc Kc); $R$: 8,314 (J/(mol·K)); $T$: nhiệt độ (K).
>
> *Điều kiện:* Đổi ΔG° sang J trước khi chia cho RT (R tính theo J). ΔG° < 0 ⇔ K > 1.

Thay vào: $\Delta G = RT\ln\dfrac{Q}{K}$.

| So sánh | ΔG | Chiều phản ứng |
|---|---|---|
| Q/K < 1 | ΔG < 0 | chiều thuận |
| Q/K = 1 | ΔG = 0 | cân bằng |
| Q/K > 1 | ΔG > 0 | chiều nghịch |

- $\Delta G^\circ < 0$ ⇔ $K > 1$: ở cân bằng sản phẩm chiếm ưu thế.
- Đảo chiều phản ứng: $K' = 1/K$. Nhân hệ số n: $K' = K^n$.

> **Lỗi thường gặp**
>
> Khi tính $e^{-\Delta G^\circ/RT}$, đổi ΔG° sang **J/mol** vì $R = 8{,}314$ J/(mol·K). Để nguyên kJ thì $Delta G^	rc/RT$ nhỏ đi 1000 lần.

> **Lưu ý**
>
> Đừng nhầm ΔG° với ΔG: dấu của ΔG° chỉ cho biết chiều ở điều kiện chuẩn ($Q = 1$). Chiều thực tế ở hỗn hợp bất kỳ do dấu của ΔG, tức so sánh Q với K, quyết định.

### Ảnh hưởng của nhiệt độ

Từ $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -RT\ln K$ ⇒ $\Delta S^\circ = \dfrac{\Delta H^\circ}{T} + R\ln K$. Nếu ΔH°, ΔS° không phụ thuộc nhiệt độ, viết cho hai nhiệt độ $T_1$, $T_2$ rồi trừ vế:

$$\Delta H^\circ\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = R\,(\ln K_2 - \ln K_1)$$

> **Công thức — Phương trình van ’t Hoff (dạng tích phân)**
>
> $$\ln\frac{K_2}{K_1} = \frac{\Delta H^\circ}{R}\left(\frac{1}{T_1}-\frac{1}{T_2}\right)$$
>
> Trong đó: $K_1, K_2$: hằng số cân bằng ở $T_1$, $T_2$; $\Delta H^\circ$: enthalpy chuẩn của phản ứng (J/mol).
>
> *Điều kiện:* Giả sử ΔH° và ΔS° không phụ thuộc nhiệt độ trong khoảng $T_1$–$T_2$.

> **Trọng tâm**
>
> Phản ứng thu nhiệt ($\Delta H^\circ > 0$): tăng T → K tăng. Phản ứng tỏa nhiệt ($\Delta H^\circ < 0$): tăng T → K giảm.

Ý b của đề trên (chiều dịch chuyển cân bằng và $K_p$ ở nhiệt độ mới) được nối tiếp trong bài [K theo nhiệt độ và liên hệ Gibbs](#/courses/general-chemistry/lessons/gc-eq-temperature) ở chương 4.

### Công thức trọng tâm

> **Công thức — ΔG° phản ứng từ ΔG°f**
>
> $$\Delta G^\circ_{\text{pư}} = \sum \nu\,\Delta G^\circ_f(\text{sp}) - \sum \nu\,\Delta G^\circ_f(\text{cđ})$$
>
> Trong đó: $\Delta G^\circ_f$: năng lượng tự do tạo thành chuẩn (kJ/mol).
>
> *Điều kiện:* Điều kiện chuẩn, 25 °C. $\Delta G^\circ_f$ của đơn chất bền = 0.

## Ví dụ

**Ví dụ (Bài 7).** $\mathrm{A_2(g) + B_2(g) \rightleftharpoons 2AB(g)}$, $\Delta G^\circ = -3{,}4$ kJ/mol. Tại cân bằng $P_{A_2} = P_{B_2} = 0{,}20$ atm, $P_{AB} = 0{,}40$ atm.

1. Tính K từ áp suất cân bằng, rồi suy ra T từ $\Delta G^\circ = -RT\ln K$ (đổi $\Delta G^\circ = -3400$ J/mol):

$$K = \frac{(0{,}40)^2}{(0{,}20)(0{,}20)} = 4{,}0;\qquad T = \frac{3400}{8{,}314\ln 4{,}0} = 295\ \text{K}$$

2. Với hỗn hợp có $Q = 36$: so sánh $Q > K$ nên dự đoán ΔG > 0, phản ứng chạy theo chiều nghịch.
3. Kiểm tra bằng số: $\Delta G = \Delta G^\circ + RT\ln Q = -3400 + 8{,}314\times295\ln36 = +5{,}4\times10^3$ J > 0, khớp với bước 2.

### Video bài giảng tham khảo

- [Gibbs và cân bằng (28:39:52–29:03:55)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=103192s)

## Tổng kết

- $\Delta G = \Delta G^\circ + RT\ln Q = RT\ln(Q/K)$.
- $\Delta G^\circ = -RT\ln K$; đổi ΔG° sang J/mol khi dùng $R = 8{,}314$.
- Q < K: thuận; Q = K: cân bằng; Q > K: nghịch.
- Đảo chiều: $K' = 1/K$; nhân hệ số n: $K' = K^n$.
- Thu nhiệt: T tăng thì K tăng; tỏa nhiệt: T tăng thì K giảm.
- Tiếp tục với [Hằng số cân bằng Kc, Kp và thương số Q](#/courses/general-chemistry/lessons/gc-eq-constant) và [K theo nhiệt độ](#/courses/general-chemistry/lessons/gc-eq-temperature) ở chương 4.
