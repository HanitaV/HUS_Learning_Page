# Năng lượng hoạt hóa và phương trình Arrhenius

## Giải thích lý thuyết

Định luật bậc 1 ở bài trước dùng một k tại nhiệt độ cố định. Khi nhiệt độ thay đổi, bài này dùng Arrhenius để so sánh hai k và tìm năng lượng hoạt hóa; nếu đề chỉ cho thời gian bán hủy, cần đổi chúng thành tỉ số k trước.

### Năng lượng hoạt hóa là rào cản của phản ứng

Năng lượng hoạt hóa Eₐ biểu diễn độ cao rào cản năng lượng từ chất đầu đến trạng thái chuyển tiếp. Nó khác ΔH, là chênh lệch năng lượng giữa sản phẩm và chất đầu. Khi tăng nhiệt độ, tỉ lệ phân tử đủ năng lượng vượt rào cản thường tăng, làm k tăng.

![Phân biệt rào cản Eₐ với ΔH và tỉ lệ phân tử vượt rào cản](images/chapter-5/activation-energy.svg)

### Điều kiện áp dụng Arrhenius

Giả sử thừa số trước mũ A và Eₐ không đổi trong khoảng nhiệt độ xét:

$$k=Ae^{-E_a/(RT)}.$$

Lấy ln và trừ hai trạng thái nhiệt độ để loại A:

$$\ln\frac{k_2}{k_1}=\frac{E_a}{R}\left(\frac1{T_1}-\frac1{T_2}\right),\qquad E_a=\frac{R\ln(k_2/k_1)}{1/T_1-1/T_2}.$$

Dùng $R=8{,}314$ J/(mol·K), T theo **K**, Eₐ thu được theo **J/mol**. Chia cho 1000 nếu đề yêu cầu đơn vị kJ/mol. Các bài tập dùng quy ước $T=t(°C)+273$. Hai giá trị k phải cùng đơn vị để tỉ số không có thứ nguyên.

![Hai điểm trên đường ln k theo 1/T xác định độ dốc −Eₐ/R](images/chapter-5/arrhenius-line.svg)

Đường $\ln k=\ln A-(E_a/R)(1/T)$ có độ dốc −Eₐ/R. Trên trục 1/T, điểm có nhiệt độ **cao hơn nằm bên trái**. Vì vậy đường đi xuống từ trái sang phải vẫn phù hợp với k tăng khi T tăng.

### Đề cho tốc độ hoặc thời gian bán hủy

“Tốc độ tăng m lần” chỉ cho phép đặt $k_2/k_1=m$ khi các nồng độ được so sánh như nhau. Nếu đề cho bán hủy của phản ứng bậc 1:

$$k_i=\frac{\ln2}{t_{1/2,i}}\quad\Rightarrow\quad\frac{k_2}{k_1}=\frac{t_{1/2,1}}{t_{1/2,2}}.$$

![Thời gian bán hủy ngắn đi thì k lớn lên theo tỉ lệ nghịch](images/chapter-5/half-life-inverse.svg)

Viết rõ nhiệt độ dưới từng k và t½ trước khi lấy tỉ số. Với $T_2>T_1$ và các bài có Eₐ dương trong chương, phải có $k_2>k_1$, còn $t_{1/2,2}<t_{1/2,1}$. Nếu Eₐ âm, kiểm lại thứ tự tỉ số và nhiệt độ. Quy tắc tăng 10 °C thì k tăng 2–4 lần chỉ là ước lượng thường gặp, không thay thế dữ kiện đề.

Dừng ở bước lấy tỉ số để kiểm tra một lỗi thường gặp. Hãy dùng quan hệ giữa k và thời gian bán hủy vừa học để sửa lời giải dưới đây, rồi xét dấu của năng lượng hoạt hóa trước khi bấm máy.

### Công thức trọng tâm

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

**Ví dụ 4.4 — ĐT25 C4.** Ở 80 °C, nồng độ giảm từ 800 xuống 100 mol/L trong 13000 s. Ở 90 °C, $k_2=3{,}3\times10^{-4}$ s⁻¹.

1. Dữ kiện thời gian ở nhiệt độ thứ nhất cho $k_1=\ln(800/100)/13000\approx1{,}59957\times10^{-4}$ s⁻¹.
2. Đổi $T_1=353$ K, $T_2=363$ K. Không lấy trực tiếp 80 và 90 vào mẫu Arrhenius.
3. $E_a=8{,}314\ln(k_2/k_1)/(1/353-1/363)\approx7{,}7151\times10^4$ J/mol ≈ 77,2 kJ/mol.
4. Nhiệt độ tăng 10 K làm k tăng khoảng 2,06 lần, phù hợp với Eₐ dương.

**Hai bán hủy — ĐT21 C4.** $t_{1/2,1}=5000$ s ở 300 K và $t_{1/2,2}=1000$ s ở 310 K. Ta có $k_2/k_1=5$ rồi $E_a\approx124{,}44$ kJ/mol. Nếu lấy 1/5 thì ln âm, cho kết quả trái với xu hướng của dữ kiện.

Tự áp dụng bước tính từ hai k vào đề sau. Khác ví dụ tìm k từ nồng độ, đề này đã cho đủ hai hằng số tốc độ; hãy giữ đúng cặp nhiệt độ–k và đổi đơn vị đáp số ở cuối.

## Tổng kết

- Arrhenius so sánh k tại hai nhiệt độ tuyệt đối; độ dốc ln k theo 1/T là −Eₐ/R.
- Với bậc 1, tỉ số k là tỉ số **nghịch** của t½.
- Giữ k chưa làm tròn đến bước cuối và đổi J/mol sang kJ/mol khi cần.
