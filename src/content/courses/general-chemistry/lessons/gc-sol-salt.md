# pH dung dịch muối (thủy phân)

## Giải thích lý thuyết

Muối tan không tự động cho dung dịch trung tính. Nếu ion của muối là axit hoặc bazơ liên hợp của chất yếu, nó phản ứng với nước và quyết định pH. Việc cần làm là tìm đúng ion đó, đổi sang hằng số của nó rồi tính như một axit hoặc bazơ yếu.

### Ion nào phản ứng với nước?

Muối tan phân li thành ion. Một số ion tiếp tục nhận hoặc nhường proton cho nước, gọi là thủy phân. Xét ion của axit hoặc bazơ yếu; các ion Na⁺, K⁺, Cl⁻ trong những bài này không quyết định pH.

| Muối | Ion cần xét | Cân bằng và hằng số | Môi trường |
|---|---|---|---|
| CH₃COONa, KCN, NaF | A⁻ của axit yếu HA | $\mathrm{A^-+H_2O\rightleftharpoons HA+OH^-}$; $K_b=K_w/K_a$ | Bazơ |
| NH₄Cl | NH₄⁺ của bazơ yếu NH₃ | $\mathrm{NH_4^+\rightleftharpoons H^++NH_3}$; $K_a=K_w/K_b$ | Axit |

> **Lỗi thường gặp**
>
> KCN không phải HCN: CN⁻ là **bazơ liên hợp**, dù đề cho $K_a$ của HCN. Phải đổi $K_b=K_w/K_a$ trước khi tính; dùng thẳng $K_a$ sẽ cho pH < 7 cho một dung dịch bazơ.

![Thang pH cho thấy CH3COONa nằm phía bazơ, khác CH3COOH](images/chapter-6/ph-scale.svg)

### Tính như axit hoặc bazơ yếu

Muối nồng độ $C$ cho ion thủy phân cùng nồng độ nếu tỉ lệ 1:1. Đặt $x$ là lượng ion phản ứng. Với A⁻:

$$K_b=\frac{x^2}{C-x},\qquad [\mathrm{OH^-}]\approx\sqrt{K_bC}.$$

Kiểm tra $x/C\le5\%$ và lượng OH⁻ lớn hơn khoảng mười lần $10^{-7}$ M. Không đạt thì quay về bảng ba dòng, giải bậc hai; với dung dịch rất loãng còn phải kể nước.

Sau cùng pH = 14 + lg[OH⁻]. Với NH₄⁺, dùng $K_a$ và pH = −lg[H⁺].

> **Công thức — Cặp axit–bazơ liên hợp**
>
> $$K_aK_b=K_w=10^{-14}$$
>
> Trong đó: $K_a$: Hằng số phân li axit HA; $K_b$: Hằng số bazơ của A⁻ liên hợp; $K_w$: Tích số ion của nước.
>
> *Điều kiện:* Ka và Kb phải thuộc cùng một cặp liên hợp. Kw = 10⁻¹⁴ ở 25 °C; lấy hoạt độ bằng nồng độ theo mô hình bài tập.

Độ thủy phân $h=x/C$; nếu báo phần trăm thì nhân 100.

> **Lưu ý**
>
> Độ thủy phân là $x/C$, không phải pH chia cho $C$.

### Bài có cả axit và muối ở hai ý riêng

Nếu đề yêu cầu pH của dung dịch axit và pH dung dịch muối, đó là **hai dung dịch độc lập**. Mỗi dung dịch có cân bằng riêng.

> **Trọng tâm**
>
> Chỉ dùng công thức đệm khi đề nói cùng có HA và A⁻ trong một dung dịch.

### Công thức trọng tâm

> **Công thức — Phân li ít của axit hoặc bazơ yếu**
>
> $$x\approx\sqrt{KC},\qquad \frac{x}{C}\le0{,}05$$
>
> Trong đó: $x$: H⁺ do axit hoặc OH⁻ do bazơ tạo ra (mol/L); $K$: Ka của axit hoặc Kb của bazơ; $C$: Nồng độ chất ban đầu (mol/L).
>
> *Điều kiện:* x nhỏ so với C, bắt buộc kiểm tra x/C ≤ 5%. Bỏ qua nước khi CK lớn hơn nhiều Kw, hoặc x lớn hơn khoảng 10 lần 10⁻⁷ M.

## Ví dụ

### CH₃COONa 0,10 M

Cho $K_a(\mathrm{CH_3COOH})=1{,}8\times10^{-5}$.

1. CH₃COO⁻ tạo OH⁻: $K_b=10^{-14}/(1{,}8\times10^{-5})=5{,}56\times10^{-10}$.
2. Giả sử phân li ít, $x=\sqrt{K_bC}=7{,}45\times10^{-6}$ M.
3. $x/C=0{,}00745\%$, rất nhỏ; $x>10\times10^{-7}$ M nên đóng góp của nước nhỏ.
4. pOH = 5,13; pH = 8,87. Dấu kiểm tra: muối của axit yếu với bazơ mạnh phải có pH > 7.

### KCN 0,50 M và độ thủy phân

Cho $K_a(\mathrm{HCN})=5{,}8\times10^{-10}$ (ĐT17 C6a; ĐT26 C6a hỏi pH).

1. CN⁻ là bazơ liên hợp: $K_b=10^{-14}/(5{,}8\times10^{-10})=1{,}724\times10^{-5}$.
2. $x\approx\sqrt{0{,}50K_b}=2{,}94\times10^{-3}$ M.
3. Độ thủy phân $h=x/C\approx0{,}00587=0{,}587\%<5\%$, nên gần đúng dùng được.
4. Vì $x$ là OH⁻, pH = 14 + lg$x$ = 11,47.

## Tổng kết

- Xác định ion thủy phân trước khi chọn hằng số.
- Anion của axit yếu dùng $K_b=K_w/K_a$; cation của bazơ yếu dùng $K_a=K_w/K_b$.
- Muối của axit yếu với bazơ mạnh có pH > 7; NH₄Cl có pH < 7.
- Kiểm tra gần đúng ($x/C\le5\%$) rồi đổi pOH sang pH.
- Phân biệt hai dung dịch riêng với một hệ đệm.
