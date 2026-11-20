# pH hỗn hợp axit

## Giải thích lý thuyết

Bước mở rộng từ bài axit yếu là nhiều axit cùng tạo một nồng độ H⁺. Đọc riêng hai trường hợp: axit mạnh tạo H⁺ ban đầu, còn hai axit yếu phải được ghép bằng cân bằng điện tích. Với mỗi trường hợp, kiểm tra điều kiện gần đúng trước khi kết luận pH.

### Mọi axit dùng chung một nồng độ H⁺

Trong cùng dung dịch, H⁺ từ các axit không có “ngăn riêng”. Nồng độ H⁺ chung chi phối cân bằng của từng axit. Không cộng pH, cũng không cộng nồng độ H⁺ được tính như thể mỗi axit ở riêng.

### Axit mạnh cùng axit yếu

HCl nồng độ $C_m$ phân li hoàn toàn. Với HA nồng độ $C_a$, đặt $x$ là lượng HA phân li thêm:

| mol/L | HA | H⁺ | A⁻ |
|---|---|---|---|
| Ban đầu | $C_a$ | $C_m$ | 0 |
| Phân li | $-x$ | $+x$ | $+x$ |
| Cân bằng | $C_a-x$ | $C_m+x$ | $x$ |

$$K_a=\frac{(C_m+x)x}{C_a-x}.$$

![Bảng phân li với H+ có sẵn do axit mạnh, làm giảm lượng axit yếu phân li](images/chapter-6/acid-common-ion.svg)

Nếu $x\ll C_m$ và $x\ll C_a$, có $x\approx K_aC_a/C_m$. Kiểm tra cả hai tỉ lệ. Tổng [H⁺] là $C_m+x$; [A⁻] chỉ là $x$. Nếu không đạt, giải $x^2+(C_m+K_a)x-K_aC_a=0$. Bỏ qua nước chỉ khi lượng H⁺ lớn hơn nhiều $10^{-7}$ M.

### Hai axit yếu

Đặt $h=[\mathrm{H^+}]$, mỗi axit phân li ít và nước đóng góp không đáng kể. Khi đó $[\mathrm{A_1^-}]\approx K_1C_1/h$, $[\mathrm{A_2^-}]\approx K_2C_2/h$. Cân bằng điện tích $h\approx[\mathrm{A_1^-}]+[\mathrm{A_2^-}]$ cho:

$$h\approx\sqrt{K_1C_1+K_2C_2}.$$

Kiểm tra lượng phân li của từng axit, gần đúng $[\mathrm{A_i^-}]/C_i\approx K_i/h$. Nếu tỉ lệ không đủ nhỏ, dùng biểu thức đầy đủ $[\mathrm{A_i^-}]=K_iC_i/(h+K_i)$ và giải:

$$h=\frac{K_1C_1}{h+K_1}+\frac{K_2C_2}{h+K_2}+\frac{K_w}{h}.$$

Phương trình này cho phép kiểm tra kết quả căn bậc hai ở trường hợp sát ngưỡng. Không cần học thêm công thức riêng cho từng cặp axit.

### Công thức trọng tâm

> **Công thức — pH và pOH**
>
> $$\mathrm{pH}=-\lg[\mathrm{H_3O^+}],\quad\mathrm{pOH}=-\lg[\mathrm{OH^-}],\quad\mathrm{pH}+\mathrm{pOH}=14$$
>
> Trong đó: $[\mathrm{H_3O^+}]$: Nồng độ ion hydronium (mol/L); $[\mathrm{OH^-}]$: Nồng độ ion hydroxide (mol/L).
>
> *Điều kiện:* Dung dịch nước loãng, hoạt độ xấp xỉ nồng độ. Quan hệ pH + pOH = 14 áp dụng ở 25 °C với Kw = 10⁻¹⁴.

> **Công thức — Phân li ít của axit hoặc bazơ yếu**
>
> $$x\approx\sqrt{KC},\qquad \frac{x}{C}\le0{,}05$$
>
> Trong đó: $x$: H⁺ do axit hoặc OH⁻ do bazơ tạo ra (mol/L); $K$: Ka của axit hoặc Kb của bazơ; $C$: Nồng độ chất ban đầu (mol/L).
>
> *Điều kiện:* x nhỏ so với C, bắt buộc kiểm tra x/C ≤ 5%. Bỏ qua nước khi CK lớn hơn nhiều Kw, hoặc x lớn hơn khoảng 10 lần 10⁻⁷ M.

## Ví dụ

### HCl và CH₃COOH (ĐT02 C4)

Trong cùng dung dịch: HCl 0,050 M, CH₃COOH 0,10 M, $K_a=1{,}75\times10^{-5}$.

1. HCl cho H⁺ ban đầu 0,050 M.
2. $x\approx K_aC_a/C_m=3{,}50\times10^{-5}$ M.
3. $x/C_m=0{,}070\%$, $x/C_a=0{,}035\%$: gần đúng phù hợp.
4. $[\mathrm{CH_3COO^-}]=x\approx3{,}5\times10^{-5}$ M; $[\mathrm{H_3O^+}]=0{,}050+x\approx0{,}050$ M.

So với axit axetic ở riêng (phân li khoảng $1{,}3\times10^{-3}$ M), ion chung H⁺ làm lượng axit yếu phân li giảm gần 40 lần.

Khép phần ví dụ và tự lập lại bảng cho hỗn hợp này. Chỉ ra [H₃O⁺] tổng khác lượng CH₃COOH phân li thêm như thế nào trước khi bấm máy.

### Axit axetic và axit benzoic (ĐT21 C6c)

$C_1=0{,}020$ M, $K_1=1{,}8\times10^{-5}$; $C_2=0{,}010$ M, $K_2=6{,}3\times10^{-5}$.

$h\approx\sqrt{3{,}6\times10^{-7}+6{,}3\times10^{-7}}=9{,}95\times10^{-4}$ M nên pH gần đúng $\approx 3{,}00$. Tuy nhiên, axit thứ hai có $K_2/h\approx6{,}3\%$, hơi vượt ngưỡng 5%. Khi giải cân bằng điện tích đầy đủ, ta được pH khoảng 3,01: kết quả gần đúng khá sát, nhưng bạn cần lưu ý đây mới chỉ là giá trị ước lượng chứ điều kiện 5% chưa thực sự thỏa mãn.

Tự viết phương trình cho H⁺ chung rồi kiểm tra độ phân li của từng axit. Khi đối chiếu lời giải, giải thích vì sao kết quả pH gần nhau chưa đủ để khẳng định gần đúng 5% hợp lệ.

## Tổng kết

- Có axit mạnh: điền H⁺ có sẵn vào dòng ban đầu của axit yếu.
- Hai axit yếu: cùng góp H⁺; công thức căn tổng chỉ dùng khi từng axit phân li ít.
- Không cộng pH; phân biệt H⁺ tổng với lượng anion của axit yếu.
