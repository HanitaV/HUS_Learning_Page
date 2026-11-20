# pH dung dịch axit yếu, bazơ yếu

## Giải thích lý thuyết

Axit hoặc bazơ yếu chỉ phân li một phần, nên pH không đọc thẳng từ nồng độ. Bài học này đi theo một đường: viết cân bằng, lập bảng ba dòng, thử gần đúng rồi kiểm tra, cuối cùng đổi sang pH.

### Hằng số mô tả mức độ phân li

Trong dung dịch nước loãng ở 25 °C, lấy hoạt độ bằng nồng độ. Axit yếu HA có cân bằng:

$$
\mathrm{HA\rightleftharpoons H^++A^-},\qquad
K_a=\frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]}.
$$

Bazơ yếu có cân bằng $\mathrm{B+H_2O\rightleftharpoons BH^++OH^-}$ và $K_b=[\mathrm{BH^+}][\mathrm{OH^-}]/[\mathrm B]$. Nước lỏng không đưa vào biểu thức. Cặp axit–bazơ liên hợp thỏa $K_aK_b=K_w$.

> **Công thức — Cặp axit–bazơ liên hợp**
>
> $$K_aK_b=K_w=10^{-14}$$
>
> Trong đó: $K_a$: Hằng số phân li axit HA; $K_b$: Hằng số bazơ của A⁻ liên hợp; $K_w$: Tích số ion của nước.
>
> *Điều kiện:* Ka và Kb phải thuộc cùng một cặp liên hợp. Kw = 10⁻¹⁴ ở 25 °C; lấy hoạt độ bằng nồng độ theo mô hình bài tập.

> **Lỗi thường gặp**
>
> Không lấy nồng độ axit yếu ban đầu làm $[\mathrm{H^+}]$: chỉ một phần nhỏ phân li. Với bazơ yếu, dùng $K_b$ và tính $[\mathrm{OH^-}]$; đừng thay $K_a$ của cặp liên hợp vào công thức của bazơ.

Đặt $x=[\mathrm{H^+}]$ do HA phân li. Bảng ba dòng cho biết:

| mol/L | HA | H⁺ | A⁻ |
|---|---|---|---|
| Ban đầu | $C$ | 0 | 0 |
| Phân li | $-x$ | $+x$ | $+x$ |
| Cân bằng | $C-x$ | $x$ | $x$ |

Thế dòng cân bằng: $K_a=x^2/(C-x)$. Bảng này dùng lại [Phương pháp 3 dòng](#/courses/general-chemistry/lessons/gc-eq-ice-table) ở chương 4.

### Gần đúng có điều kiện

Nếu $x\ll C$, thay $C-x\approx C$:

$$
[\mathrm{H^+}]\approx\sqrt{K_aC},\qquad
[\mathrm{OH^-}]\approx\sqrt{K_bC}\quad\text{(bazơ yếu)}.
$$

> **Công thức — Phân li ít của axit hoặc bazơ yếu**
>
> $$x\approx\sqrt{KC},\qquad \frac{x}{C}\le0{,}05$$
>
> Trong đó: $x$: H⁺ do axit hoặc OH⁻ do bazơ tạo ra (mol/L); $K$: Ka của axit hoặc Kb của bazơ; $C$: Nồng độ chất ban đầu (mol/L).
>
> *Điều kiện:* x nhỏ so với C, bắt buộc kiểm tra x/C ≤ 5%. Bỏ qua nước khi CK lớn hơn nhiều Kw, hoặc x lớn hơn khoảng 10 lần 10⁻⁷ M.

Phải kiểm tra hai điều kiện:

1. Lượng ion do chất tan tạo ra lớn hơn khoảng mười lần $10^{-7}$ M để bỏ qua sự tự phân li của nước; thường kiểm tra $CK\gg10^{-14}$.
2. $x/C\le5\%$.

Nếu vượt 5%, quay lại bảng và giải $x^2+Kx-KC=0$. Ở sát ngưỡng 5%, dùng bậc hai để giảm sai số.

![Quy trình nhận dạng, giả sử phân li ít, kiểm tra 5 phần trăm và quay về bậc hai](images/chapter-6/ph-decision.svg)

Nghiệm vật lý là nghiệm dương, nhỏ hơn $C$:

$$x=\frac{-K+\sqrt{K^2+4KC}}2.$$

> **Ghi chú**
>
> Ở đây “giải đầy đủ” vẫn nằm trong mô hình đã bỏ qua sự tự phân li của nước. Với dung dịch cực loãng, phải thêm cân bằng nước; bài CHE1080 trong phạm vi này không cần trường hợp đó.

### Cách làm và lỗi cần tránh

Nhận dạng axit hay bazơ → chọn $K_a$ hay $K_b$ → tính $x$ và kiểm tra → đổi sang pH. Chỉ làm tròn ở cuối.

> **Lỗi thường gặp**
>
> Với bazơ, $x=[\mathrm{OH^-}]$ chỉ cho pOH. Phải đổi tiếp pH = 14 − pOH, nếu không sẽ ra pH nhỏ hơn 7 cho một bazơ.

### Công thức trọng tâm

> **Công thức — pH và pOH**
>
> $$\mathrm{pH}=-\lg[\mathrm{H_3O^+}],\quad\mathrm{pOH}=-\lg[\mathrm{OH^-}],\quad\mathrm{pH}+\mathrm{pOH}=14$$
>
> Trong đó: $[\mathrm{H_3O^+}]$: Nồng độ ion hydronium (mol/L); $[\mathrm{OH^-}]$: Nồng độ ion hydroxide (mol/L).
>
> *Điều kiện:* Dung dịch nước loãng, hoạt độ xấp xỉ nồng độ. Quan hệ pH + pOH = 14 áp dụng ở 25 °C với Kw = 10⁻¹⁴.

## Ví dụ

### Khi kết quả sát ngưỡng 5%

HCOOH 0,20 M, $K_a=5\times10^{-4}$ (cùng đề với bài từng bước ĐT23 C6a).

1. Giả sử $x\ll0{,}20$: $x\approx\sqrt{5\times10^{-4}\times0{,}20}=0{,}0100$ M.
2. $x/C=5{,}0\%$, sát ngưỡng; chọn giải bậc hai.
3. $x^2+5\times10^{-4}x-10^{-4}=0$; nghiệm dương $x=9{,}753\times10^{-3}$ M.
4. $\mathrm{pH}=-\lg x=2{,}01$. Nghiệm dương và nhỏ hơn 0,20 M nên có ý nghĩa.

### Bazơ yếu NH₃

NH₃ 0,010 M có $K_b=1{,}8\times10^{-5}$ (ĐT01 C4a).

1. Bazơ yếu, chọn $K_b$; $x=[\mathrm{OH^-}]\approx\sqrt{K_bC}=4{,}24\times10^{-4}$ M.
2. $x/C=4{,}24\%<5\%$ và $x$ lớn hơn nhiều $10^{-7}$ M, nên giữ gần đúng.
3. pOH = 3,37, suy ra **pH = 10,63**. Giải bậc hai cũng được, cho pH khoảng 10,62.

## Tổng kết

- Axit hoặc bazơ yếu chỉ phân li một phần; $K_aK_b=K_w$ cho cặp liên hợp.
- Công thức căn bậc hai cần kiểm tra phân li ít ($x/C\le5\%$) và đóng góp của nước.
- Không đạt điều kiện thì lập bảng, giải bậc hai và chọn nghiệm vật lý.
- Bazơ cho OH⁻: nhớ bước pOH → pH.
