# Vẽ gì, nghĩ gì — đồ thị ln C theo t và ln k theo 1/T

## Giải thích lý thuyết

Bài này dùng lại các quy luật đã học để luyện chọn hình và tự kiểm tra cách giải. Trước mỗi phép tính, hãy xác định dữ kiện thay đổi theo thời gian hay nhiệt độ, rồi dùng đồ thị hoặc bảng nháp để giữ đúng phần còn lại, đơn vị và thứ tự tỉ số.

### Vì sao cần vẽ

Theo thống kê đề thi gần đây, phản ứng bậc 1 có ở **6/6 đề**, phương trình Arrhenius có ở **4/6 đề** (nhiều đề lồng ý Arrhenius ngay trong câu bậc 1, như ĐT23, ĐT25, ĐT26). Mất điểm thường bắt đầu trước khi bấm máy: dùng phần đã phản ứng thay phần còn lại, không đổi giờ sang giây, hoặc đảo ngược tỉ số bán hủy.

### Đề hỏi gì → vẽ gì

| Đề hỏi gì | Vẽ hoặc lập gì | Phải ghi ngay |
|---|---|---|
| Còn bao nhiêu sau t? | C/C₀ theo t hoặc ln(C/C₀) theo t | k và đơn vị t |
| Bao lâu để phản ứng x%? | Thanh còn lại / đã phản ứng | $f=1-x/100$ |
| Bán hủy, còn 1/4 hay 1/8? | Các mốc t½ trên đường cong | Một, hai, ba chu kỳ |
| Sản phẩm sinh ra? | Bảng lượng đầu – mất – còn | Tỉ lệ hệ số hóa học |
| Eₐ từ hai k? | Bảng T,k và đường ln k theo 1/T | T theo K, độ dốc −Eₐ/R |
| Eₐ từ hai t½? | Hai thanh t½ cạnh hai thanh k | Tỉ số nghịch |

Chọn biểu diễn cho hai câu hỏi trước khi xem các hình mẫu bên dưới. Hãy giải thích đại lượng trên mỗi trục và vì sao dữ kiện thời gian hoặc nhiệt độ dẫn tới hai lựa chọn khác nhau.

### 1. Cùng quy luật, hai đồ thị

![Các mốc 1/2, 1/4, 1/8 trên đường cong và đường logarit](images/chapter-5/first-order-two-views.svg)

Checklist vẽ nháp:

- Vẽ trục t, ghi s hoặc h theo k.
- Trục trái ghi C/C₀, bắt đầu từ 1. Đánh mốc t½, 2t½, 3t½ tương ứng 1/2, 1/4, 1/8.
- Vẽ đường cong giảm nhưng không chạm 0 ở thời gian hữu hạn.
- Nếu đổi trục tung thành ln(C/C₀), bắt đầu từ 0; mỗi t½ đi xuống ln2 ≈ 0,693. Nối thành đường thẳng có độ dốc −k.

### 2. Thanh phần còn lại

![Tô phần còn lại trước khi đưa vào ln](images/chapter-5/remaining-vs-reacted.svg)

Checklist vẽ nháp:

- Vẽ một thanh 100%, chia phần đã phản ứng và phần còn lại.
- Tô phần còn lại, đặt tên f; nếu đề nói “25% đã phản ứng” thì f = 0,75.
- Viết $t=\ln(1/f)/k$ cạnh phần tô. Nếu tính sản phẩm, dùng phần đã mất và hệ số phương trình sau khi tìm f.

### 3. Rào cản Eₐ và đồ thị nhiệt độ

![Rào cản năng lượng và tỉ lệ phân tử đủ sức vượt rào cản](images/chapter-5/activation-energy.svg)

Checklist vẽ nháp giản đồ năng lượng:

- Trục tung là năng lượng; trục ngang là tiến trình phản ứng.
- Đặt chất đầu, đỉnh chuyển tiếp và sản phẩm.
- Mũi tên Eₐ đi từ mức chất đầu lên đỉnh; mũi tên ΔH nối mức chất đầu đến sản phẩm. Hai đại lượng này khác nhau.

![Đồ thị ln k theo 1/T và tam giác độ dốc](images/chapter-5/arrhenius-line.svg)

Checklist vẽ nháp Arrhenius:

- Lập hai cột T(K), k; đổi °C sang K trước.
- Trục ngang ghi 1/T, trục tung ghi ln k. Nhiệt độ cao nằm về trái.
- Đánh hai điểm và nối đường có độ dốc −Eₐ/R. Ghi cặp $T_1,k_1$ và $T_2,k_2$ cùng nhau để không đảo thứ tự.

### 4. Nếu đề cho hai bán hủy

![Bán hủy ngắn hơn tương ứng k lớn hơn](images/chapter-5/half-life-inverse.svg)

Checklist vẽ nháp:

- Viết nhiệt độ dưới mỗi t½.
- Vẽ thanh t½: 5000 s dài gấp năm 1000 s.
- Cạnh đó vẽ thanh k theo chiều ngược: $k_2=5k_1$.
- Viết $k_2/k_1=t_{1/2,1}/t_{1/2,2}$ trước khi thay Arrhenius.

### Lỗi hay gặp

| Lỗi | Cách nhận ra và sửa |
|---|---|
| Phân hủy 90% nhưng dùng f = 0,90 | Thanh cho thấy còn 10%; dùng ln10 |
| k theo s⁻¹, t theo giờ | kt chưa vô thứ nguyên; nhân giờ với 3600 |
| Dùng lg thay ln | Dùng phím ln, hoặc nhân lg với 2,303 |
| Thế °C vào Arrhenius | Đổi T = t + 273 theo đề |
| Lấy tỉ số bán hủy thuận | Viết k = ln2/t½ rồi lấy tỉ số nghịch |
| Tính lượng sản phẩm bằng lượng còn | Lấy lượng đầu trừ lượng còn rồi nhân hệ số |

### Tự kiểm tra trước khi kết luận

- Khi k,t > 0 phải có $0<C_t<C_0$; không thu được phần trăm âm hoặc trên 100%.
- Còn 10% nằm giữa 1/8 và 1/16, nên thời gian khoảng 3–4 chu kỳ bán hủy.
- Với các bài trong chương, tăng T làm k tăng, nên Eₐ phải dương và thường cỡ vài chục đến vài trăm kJ/mol. Đây là phép ước lượng, không phải điều kiện đúng cho mọi cơ chế phản ứng.
- Nếu tìm số phân tử từ khí, cần n = PV/RT rồi nhân Nₐ; đơn vị nồng độ không phải số phân tử.

### Công thức trọng tâm

> **Công thức — Định luật tích phân bậc 1**
>
> $$\ln\frac{C_0}{C_t}=kt,\qquad C_t=C_0e^{-kt}$$
>
> Trong đó: $C_0$: Nồng độ ban đầu (mol/L); $C_t$: Nồng độ còn lại ở t (mol/L); $k$: Hằng số tốc độ bậc 1 (s⁻¹ hoặc h⁻¹); $t$: Thời gian (s hoặc h).
>
> *Điều kiện:* Phản ứng bậc 1 và nhiệt độ không đổi. k và t dùng đơn vị thời gian tương ứng; với khí lý tưởng ở T,V cố định có thể thay C bằng áp suất riêng phần.

> **Công thức — Thời gian bán hủy bậc 1**
>
> $$t_{1/2}=\frac{\ln2}{k},\qquad \frac{C_t}{C_0}=2^{-t/t_{1/2}}$$
>
> Trong đó: $t_{1/2}$: Thời gian bán hủy (s hoặc h); $k$: Hằng số tốc độ (s⁻¹ hoặc h⁻¹); $t$: Thời gian (s hoặc h); $C_t/C_0$: Tỉ phần còn lại (không thứ nguyên).
>
> *Điều kiện:* Phản ứng bậc 1 ở nhiệt độ không đổi. Thời gian bán hủy không phụ thuộc nồng độ ban đầu.

> **Công thức — Arrhenius tại hai nhiệt độ**
>
> $$\ln\frac{k_2}{k_1}=\frac{E_a}{R}\left(\frac1{T_1}-\frac1{T_2}\right)$$
>
> Trong đó: $k_1,k_2$: Hằng số tốc độ tại T₁,T₂ (cùng đơn vị); $T_1,T_2$: Nhiệt độ tuyệt đối (K); $E_a$: Năng lượng hoạt hóa (J/mol); $R$: Hằng số khí 8,314 (J/(mol·K)).
>
> *Điều kiện:* A và Eₐ xem như không đổi trong khoảng nhiệt độ xét. Tốc độ tăng m lần chỉ suy ra k tăng m lần khi so sánh ở cùng nồng độ.

> **Công thức — Arrhenius qua thời gian bán hủy**
>
> $$\frac{k_2}{k_1}=\frac{t_{1/2}(T_1)}{t_{1/2}(T_2)},\quad E_a=\frac{R\ln[t_{1/2}(T_1)/t_{1/2}(T_2)]}{1/T_1-1/T_2}$$
>
> Trong đó: $t_{1/2}(T_1),t_{1/2}(T_2)$: Thời gian bán hủy tại hai nhiệt độ (cùng đơn vị); $T_1,T_2$: Nhiệt độ tuyệt đối (K); $E_a$: Năng lượng hoạt hóa (J/mol); $R$: Hằng số khí 8,314 (J/(mol·K)).
>
> *Điều kiện:* Phản ứng bậc 1; A và Eₐ coi không đổi trong khoảng nhiệt độ. Hai thời gian bán hủy phải cùng đơn vị.

## Ví dụ

**Nghĩ thành lời 1 — Ví dụ 4.2, ĐT28 C4.** N₂O₅ bậc 1 có $k=3{,}20\times10^{-5}$ s⁻¹, $C_0=0{,}20$ M. Hỏi C sau 2 giờ và thời gian để 25% đã phản ứng.

1. *Đề hỏi thời gian hay nhiệt độ?* Chỉ một nhiệt độ 298 K; dùng bậc 1, không cần Arrhenius.
2. *k theo đơn vị gì?* s⁻¹, nên 2 giờ = 7200 s. Vẽ đường C/C₀ theo t để thấy C phải giảm từ 1.
3. $f=e^{-kt}=e^{-0{,}2304}\approx0{,}7942$; $C=0{,}20f\approx0{,}159$ M.
4. *“25% đã phản ứng” là phần nào của thanh?* Đó là phần đã mất; phần tô còn 75%, f = 0,75.
5. $t=\ln(1/0{,}75)/k\approx8990$ s ≈ 150 phút. *So với 2 giờ thì sao?* Sau 2 giờ mới phản ứng 20,6%, nên để đạt 25% cần lâu hơn.

**Nghĩ thành lời 2 — Ví dụ 4.4, ĐT25 C4.** 80 °C: C giảm từ 800 xuống 100 mol/L trong 13000 s; 90 °C: $k_2=3{,}3\times10^{-4}$ s⁻¹.

1. *Có ngay hai k chưa?* Chưa. Phải tính $k_1=\ln(800/100)/13000\approx1{,}59957\times10^{-4}$ s⁻¹. Giữ nồng độ đúng như đề, không sửa số 800.
2. *Vẽ gì để không lẫn hai trạng thái?* Bảng hai hàng 353 K, k₁ và 363 K, k₂; rồi đánh hai điểm trên ln k theo 1/T.
3. *Nhiệt độ cao nằm ở đâu?* 363 K có 1/T nhỏ hơn, nên nằm bên trái và ln k cao hơn. Đường có độ dốc âm.
4. $E_a=8{,}314\ln[(3{,}3\times10^{-4})/k_1]/(1/353-1/363)\approx77151$ J/mol ≈ 77,2 kJ/mol.
5. *Dấu và đơn vị ổn chưa?* Tử, mẫu dương; Eₐ dương. Chia 1000 để đổi J sang kJ; không lấy kết quả 77120 rồi ghi kJ/mol.

Sau hai ví dụ nghĩ thành lời, hãy tự chẩn đoán một lời giải sai mà không nhìn công thức mẫu. Vẽ hoặc viết cạnh nhau hai thời gian bán hủy và hai k, rồi dùng xu hướng theo nhiệt độ để kiểm tra tỉ số.

## Tổng kết

- Vẽ thanh để xác định phần còn lại, rồi dùng đồ thị thời gian cho bậc 1.
- Lập bảng hai nhiệt độ và vẽ ln k theo 1/T khi tìm Eₐ.
- Với hai bán hủy, k lớn ứng với t½ ngắn: luôn suy tỉ số từ k = ln2/t½.
