# Dung dịch đệm

## Giải thích lý thuyết

Dung dịch đệm giữ pH gần như không đổi khi thêm ít axit hoặc bazơ. Bài này đi từ lý do đệm hoạt động, qua cách trung hòa theo mmol trước khi áp dụng công thức, đến những trường hợp công thức không còn đủ chính xác và bài toán pha đệm ngược.

### Đệm cần hai chất liên hợp cùng tồn tại

Hệ HA/A⁻ nhận lượng nhỏ axit hoặc bazơ thêm vào: A⁻ nhận H⁺; HA phản ứng với OH⁻. Chừng nào cả hai còn đủ nhiều, pH thay đổi ít. Đây là dung dịch đệm, ví dụ CH₃COOH/CH₃COO⁻ và NH₄⁺/NH₃.

Từ $K_a=[\mathrm{H^+}][\mathrm{A^-}]/[\mathrm{HA}]$, lấy $-\lg$ và thay nồng độ cân bằng gần bằng nồng độ pha:

$$
\mathrm{pH}=\mathrm pK_a+\lg\frac{C_b}{C_a}
=\mathrm pK_a+\lg\frac{n_{\mathrm{A^-}}}{n_{\mathrm{HA}}}.
$$

> **Công thức — Henderson–Hasselbalch**
>
> $$\mathrm{pH}=\mathrm pK_a+\lg\frac{n_{\mathrm{A^-}}}{n_{\mathrm{HA}}}$$
>
> Trong đó: $\mathrm pK_a$: −lgKa của axit yếu; $n_{\mathrm{A^-}}$: Lượng bazơ liên hợp sau phản ứng (mol hoặc mmol); $n_{\mathrm{HA}}$: Lượng axit còn sau phản ứng (mol hoặc mmol).
>
> *Điều kiện:* Cả HA và A⁻ cùng tồn tại sau trung hòa. [H⁺] và [OH⁻] nhỏ hơn nhiều nồng độ HA và A⁻ (khoảng mười lần trở lên). Hai lượng chất dùng cùng đơn vị, cùng thể tích dung dịch.

Điều kiện: cả $[\mathrm{H^+}]$ và $[\mathrm{OH^-}]$ nhỏ hơn nhiều hai nồng độ $C_a,C_b$ (ít nhất khoảng mười lần). Đệm bazơ dùng $\mathrm{pOH}=\mathrm pK_b+\lg(n_{\mathrm{BH^+}}/n_{\mathrm B})$ rồi đổi pH.

### Trung hòa trước, cân bằng sau

Trộn axit yếu với kiềm: tính mmol, lập ba dòng phản ứng $\mathrm{HA+OH^-\rightarrow A^-+H_2O}$. Bảng dùng lại [Phương pháp 3 dòng](#/courses/general-chemistry/lessons/gc-eq-ice-table) ở chương 4.

> **Lỗi thường gặp**
>
> Không đưa số mol OH⁻ trước phản ứng vào công thức đệm. Chỉ dùng dòng cuối của bảng, sau khi OH⁻ đã phản ứng với HA.

![Bảng mmol khi trung hòa một phần axit yếu](images/chapter-6/mmol-table.svg)

| Sau phản ứng | Cách tính pH |
|---|---|
| Còn HA và A⁻ | Xét điều kiện công thức đệm |
| Hết HA, chỉ còn A⁻ | Thủy phân muối, $K_b=K_w/K_a$ |
| OH⁻ dư | Chia OH⁻ dư cho tổng thể tích, tính pOH |

Khi thêm HCl vào đệm: $\mathrm{A^-+H^+\rightarrow HA}$, A⁻ giảm còn HA tăng, nên pH giảm nhẹ. Thêm NaOH thì ngược lại. Luôn tính cả thể tích thêm vào nếu cần nồng độ tuyệt đối.

![Đường chuẩn độ axit yếu với mốc nửa tương đương, tương đương và kiềm dư](images/chapter-6/titration.svg)

### Khi công thức đệm không đủ chính xác

Với $K_a$ lớn hoặc nồng độ muối nhỏ, giả sử không còn đúng. Lập bảng phân li HA: ban đầu $C_a$ | 0 | $C_b$; biến đổi $-x$ | $+x$ | $+x$. Khi đó:

$$K_a=\frac{x(C_b+x)}{C_a-x},\qquad x^2+(C_b+K_a)x-K_aC_a=0.$$

Giải nghiệm dương rồi pH = −lg$x$. ĐT26 C6b dùng HClO₂ với $K_a=1{,}1\times10^{-2}$ là trường hợp cần cách này.

### Pha đệm theo pH cho trước

Đặt $r=10^{\mathrm{pH}-\mathrm pK_a}=n_b/n_a$. Với hai dung dịch axit và muối, giải $C_bV_b/(C_aV_a)=r$ cùng $V_a+V_b=V_{\text{tổng}}$.

Nếu thêm kiềm vào axit, đặt $y=n_{\mathrm{OH^-}}$, tỉ số sau phản ứng là $y/(n_{a,0}-y)$.

> **Lỗi thường gặp**
>
> Không dùng tỉ số thể tích như tỉ số mol khi hai dung dịch có nồng độ khác nhau; phải nhân thể tích với nồng độ trước.

### Công thức trọng tâm

> **Công thức — Số mol và pha loãng**
>
> $$n=CV,\qquad C_1V_1=C_2V_2$$
>
> Trong đó: $n$: Lượng chất tan (mol hoặc mmol); $C$: Nồng độ mol (mol/L); $V$: Thể tích dung dịch (L hoặc mL).
>
> *Điều kiện:* Pha loãng chỉ thêm dung môi, không mất hay phản ứng chất tan. Khi trộn coi thể tích cộng được; có phản ứng phải tính lượng còn lại trước.

## Ví dụ

### Bảng mmol cho ĐT27 C6b

25 mL CH₃COOH 0,10 M với 13,6 mL KOH 0,08 M; $K_a=1{,}8\times10^{-5}$.

1. Axit có 2,500 mmol; kiềm có 1,088 mmol.
2. Phản ứng hết OH⁻, còn 1,412 mmol axit và 1,088 mmol CH₃COO⁻.
3. $\mathrm{pH}=4{,}7447+\lg(1{,}088/1{,}412)=4{,}63$.
4. $[\mathrm{H^+}]\approx2{,}34\times10^{-5}$ M; $C_a=1{,}412/38{,}6=0{,}0366$ M, $C_b=0{,}0282$ M. Chênh trên nghìn lần, công thức đệm phù hợp.

### Đệm HClO₂ có Ka lớn

12,5 mmol HClO₂, 7,25 mmol KClO₂ trong 50 mL; $K_a=0{,}011$ (ĐT26 C6b).

1. $C_a=0{,}25$ M và $C_b=0{,}145$ M. Ka lớn nên lập phương trình bậc hai:

$$x^2+0{,}156x-0{,}00275=0.$$

2. Nghiệm dương $x=0{,}01599$ M, pH = 1,80.
3. Sau 2 mL HCl 0,6 M, lượng danh nghĩa là 13,7 mmol HA và 6,05 mmol A⁻ trong 52 mL.
4. Dùng $C_a=13{,}7/52$, $C_b=6{,}05/52$ rồi giải lại, pH ≈ 1,71. Phép tính đã tính cả trung hòa và pha loãng.

## Tổng kết

- Đệm cần cả axit yếu và bazơ liên hợp cùng tồn tại với lượng đáng kể.
- Lập bảng mmol trước; xác định đang ở vùng đệm, tương đương hay kiềm dư.
- Công thức đệm dùng tỉ số bazơ liên hợp/axit sau phản ứng và cần kiểm tra điều kiện.
- Ka lớn: giải cân bằng bậc hai thay vì cố dùng Henderson–Hasselbalch.
- Pha đệm theo pH: tìm tỉ số $10^{\mathrm{pH}-\mathrm pK_a}$ trên số mol, không trên thể tích.
