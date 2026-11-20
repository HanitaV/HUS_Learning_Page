# Phương pháp 3 dòng: tính K từ thành phần cân bằng

## Giải thích lý thuyết

Khi đề chưa cho đủ thành phần cân bằng, các lượng chất phải được tìm cùng nhau theo hệ số phản ứng. Bài này dùng bảng ba dòng để nối lượng ban đầu với lượng cân bằng, rồi mới đưa kết quả vào biểu thức K đã học.

### Một ẩn cho cả phản ứng

Bảng ba dòng giữ quan hệ hệ số: lượng chất không đổi độc lập với nhau. Với $aA+bB\rightleftharpoons cC+dD$, đặt mức tiến triển x thì biến đổi lần lượt là −ax, −bx, +cx, +dx. Dòng cân bằng bằng dòng ban đầu cộng dòng phản ứng.

![Bảng ba dòng tổng quát có cột hệ số và màu âm cho chất đầu, dương cho sản phẩm](images/chapter-4/ice-table-template.svg)

1. Chọn một đơn vị cho cả bảng: mol, mol/L hoặc atm.
2. Điền lượng ban đầu, kể cả số 0 của sản phẩm chưa có.
3. Đặt một ẩn, nhân với hệ số và dấu −/+.
4. Viết lượng cân bằng rồi dùng dữ kiện đề tìm x.
5. Nếu bảng theo mol, chia V trước khi thế Kc. Nếu theo atm, dùng thẳng các áp suất riêng phần để tính Kp.

### Ba biến thể cần nhận ra

![Ba bảng: mol của tổng hợp NH₃, áp suất của PCl₅ phân hủy và độ phân li N₂O₄](images/chapter-4/ice-table-variants.svg)

**Theo áp suất:** chỉ dùng trực tiếp hệ số −x/+x khi V và T không đổi. Khi đề cho áp suất tổng lúc cân bằng, phải cộng các ô cân bằng để lập phương trình, không thế P tổng vào từng chất.

**Theo độ phân li:** α là số mol chất đã phân li chia số mol chất ban đầu, nên $0\leq\alpha\leq1$. Chọn cơ sở 1 mol A cho $A\rightleftharpoons2B$: cân bằng có $1-\alpha$ và $2\alpha$, tổng $1+\alpha$ mol. Tại áp suất tổng P:

$$P_A=\frac{1-\alpha}{1+\alpha}P,\qquad P_B=\frac{2\alpha}{1+\alpha}P.$$

Từ đó $K_p=4\alpha^2P/(1-\alpha^2)$. Công thức này chỉ dành cho dạng **A ⇌ 2B, ban đầu chỉ có A**. Với $2CO_2\rightleftharpoons2CO+O_2$, chọn cơ sở 2 mol CO₂, tổng phải là $2+\alpha$, không phải $1+\alpha$.

### Công thức trọng tâm

> **Công thức — Biểu thức hằng số cân bằng**
>
> $$K_c=\frac{[C]^c[D]^d}{[A]^a[B]^b}$$
>
> Trong đó: $K_c$: Hằng số theo nồng độ; $[A]$: Nồng độ cân bằng của A (mol/L); $a,b,c,d$: Hệ số phương trình aA+bB ⇌ cC+dD.
>
> *Điều kiện:* Phản ứng đã cân bằng; nhiệt độ xác định. Dung dịch loãng; loại pha rắn và lỏng nguyên chất.

> **Công thức — Áp suất riêng phần và Dalton**
>
> $$P_i=\frac{n_i}{\sum_jn_j}P,\qquad P=\sum_iP_i$$
>
> Trong đó: $P_i$: Áp suất riêng phần khí i (atm); $n_i$: Số mol khí i (mol); $P$: Áp suất tổng (atm).
>
> *Điều kiện:* Hỗn hợp khí lý tưởng ở cùng V,T.

> **Công thức — Khí lý tưởng và số mol**
>
> $$PV=nRT,\qquad n=\frac{m}{M}$$
>
> Trong đó: $P$: Áp suất (atm); $V$: Thể tích bình (L); $n$: Số mol (mol); $R$: Hằng số khí (0,082 L·atm/(mol·K)); $T$: Nhiệt độ tuyệt đối (K); $m$: Khối lượng (g); $M$: Khối lượng mol (g/mol).
>
> *Điều kiện:* Khí coi là lý tưởng. Các đơn vị phải phù hợp với R.

> **Công thức — Độ phân li A ⇌ 2B**
>
> $$K_p=\frac{4\alpha^2P}{1-\alpha^2},\qquad\alpha=\sqrt{\frac{K_p}{K_p+4P}}$$
>
> Trong đó: $\alpha$: Phần chất A ban đầu đã phân li; $P$: Áp suất tổng ở cân bằng (atm); $K_p$: Hằng số của A ⇌ 2B.
>
> *Điều kiện:* Ban đầu chỉ có A, không có B. Phương trình đúng dạng A ⇌ 2B; khí lý tưởng.

## Ví dụ

**Ví dụ 3.4, ĐT28 C5 — bảng mol rồi chia V.** Bình 2 L ban đầu có 1 mol N₂ và 3 mol H₂; cân bằng có 0,40 mol NH₃.

| mol | N₂ | H₂ | NH₃ |
|---|---|---|---|
| Hệ số | 1 | 3 | 2 |
| Ban đầu | 1 | 3 | 0 |
| Phản ứng | −x | −3x | +2x |
| Cân bằng | 1−x | 3−3x | 2x |

$2x=0{,}40$ nên x=0,20 mol. Cân bằng có 0,80; 2,40; 0,40 mol. Chia 2 L được 0,40; 1,20; 0,20 M. $K_c=0{,}20^2/(0{,}40\times1{,}20^3)=0{,}05787$.

**Ví dụ 3.5, ĐT07 C5 — bảng atm.** PCl₅ ⇌ PCl₃+Cl₂; ban đầu 0,50|0|0 atm; phản ứng −x|+x|+x; cân bằng 0,50−x|x|x. Tổng $0{,}50+x=0{,}84$ cho x=0,34 atm. $K_p=0{,}34^2/0{,}16=0{,}7225$. T=523 K, Δn=1 nên $K_c=0{,}7225/(0{,}082\times523)=0{,}01685$.

**Ví dụ 3.6, ĐT02 C1 — bảng theo α.** N₂O₄ ⇌ 2NO₂, α=0,11, P=1 atm. $K_p=4\times0{,}11^2/(1-0{,}11^2)=0{,}04899$. Kiểm tra phần mol: $x_{N_2O_4}+x_{NO_2}=1$; hai áp suất riêng phần phải cộng lại bằng 1 atm.

Tự dựng lại bảng áp suất của ví dụ PCl₅ trước khi xem lời giải. Trong bài đầy đủ dưới đây, hãy giải thích vì sao phải cộng các ô dòng cân bằng để dùng áp suất tổng, rồi kiểm tra bước đổi Kp sang Kc.

## Tổng kết

- Bảng ba dòng dùng một ẩn; các chất biến đổi theo hệ số.
- Dòng cuối mới được thế vào K. Bảng mol phải chia V để tính Kc.
- Độ phân li nằm từ 0 đến 1. Tổng mol sau phân li phải phù hợp phương trình đã cho.
