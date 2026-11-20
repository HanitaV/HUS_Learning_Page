# Entropy

## Giải thích lý thuyết

Bài trước cho biết ΔH, nhưng dấu của ΔH một mình không dự đoán được chiều phản ứng. Bài này đưa vào entropy S, đại lượng đo độ hỗn độn, và cách tính, dự đoán dấu ΔS của phản ứng.

### Enthalpy không quyết định chiều phản ứng

Nhiều quá trình tự xảy ra là tỏa nhiệt ($\Delta H < 0$): đông đặc nước dưới 0 °C, đốt metan, Na + Cl₂. Nhưng cũng có những quá trình tự xảy ra mà **thu nhiệt** ($\Delta H > 0$): nước đá tan ở trên 0 °C (+6,02 kJ), nước bay hơi (+44,0 kJ ở 100 °C). Vậy cần một đại lượng khác — **entropy**.

### Entropy và độ hỗn độn

$$S = k\ln W\quad (\text{J/K}),\qquad k = \frac{R}{N_A}$$

> **Công thức — Entropy theo Boltzmann**
>
> $$S = k\ln W$$
>
> Trong đó: $S$: entropy (J/K); $k$: hằng số Boltzmann $= R/N_A = 1{,}38\times10^{-23}$ (J/K); $W$: số trạng thái vi mô của hệ.
>
> *Điều kiện:* Diễn giải vi mô: W càng lớn (hệ càng hỗn độn) thì S càng lớn.

W là **số trạng thái vi mô** (số cách sắp xếp) ứng với cùng một trạng thái vĩ mô của hệ. Ví dụ: 1 nguyên tử trong hai bình thông nhau có $2^1 = 2$ cách; 3 nguyên tử có $2^3 = 8$ cách; 1 mol nguyên tử có $2^{N_A}$ cách.

Vì vậy khí tự giãn nở sang bình chân không: trạng thái "phân bố đều" có W lớn hơn rất nhiều.

**S đặc trưng cho độ hỗn độn của hệ: hệ càng hỗn độn, S càng lớn.**

- $S_\text{rắn} < S_\text{lỏng} \ll S_\text{khí}$ (tăng vọt khi nóng chảy và đặc biệt khi bay hơi).
- S tăng khi nhiệt độ tăng.
- Phân tử càng phức tạp, S càng lớn.

$$\Delta S = S_2 - S_1$$

### Entropy trong phản ứng hóa học

$$\Delta S^\circ_\text{pư} = \sum\nu\,S^\circ(\text{sp}) - \sum\nu\,S^\circ(\text{cđ}) = cS_C + dS_D - aS_A - bS_B$$

> **Công thức — Biến thiên entropy của phản ứng**
>
> $$\Delta S^\circ_{\text{pư}} = \sum \nu\,S^\circ(\text{sp}) - \sum \nu\,S^\circ(\text{cđ})$$
>
> Trong đó: $S^\circ$: entropy chuẩn (J/(mol·K)); $\nu$: hệ số tỉ lượng.
>
> *Điều kiện:* Entropy chuẩn của đơn chất KHÁC 0 (khác với ΔH°f). Phản ứng tăng số mol khí thường có ΔS > 0.

Đơn vị J/K (hoặc cal/K).

> **Lỗi thường gặp**
>
> **Khác ΔH°f, entropy chuẩn S° của đơn chất khác 0** (S° là giá trị tuyệt đối). Đừng bỏ S° của O₂, H₂... khi tính ΔS°. Ngoài ra ΔS tính bằng J/K còn ΔH thường bằng kJ.

Dự đoán nhanh:

- Phản ứng **tăng số mol khí** → $\Delta S > 0$: $\mathrm{H_2(g) + I_2(s) \to 2HI(g)}$.
- Phản ứng **giảm số mol khí** → $\Delta S < 0$: $\mathrm{N_2(g) + 3H_2(g) \to 2NH_3(g)}$.

> **Ghi chú**
>
> Riêng ΔS cũng **không** đủ quyết định chiều phản ứng. Cần kết hợp với ΔH thành [năng lượng tự do Gibbs](#/courses/general-chemistry/lessons/gc-gibbs).

## Ví dụ

**Ví dụ 1.** $\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}$ với $S^\circ$: NH₃ 193; N₂ 191,5; H₂ 130,6 J/(mol·K).

1. Sản phẩm: $2 \times 193 = 386$ J/K.
2. Chất đầu: $191{,}5 + 3 \times 130{,}6 = 583{,}3$ J/K.
3. Hiệu:

$$\Delta S^\circ = 2(193) - [191{,}5 + 3(130{,}6)] = -197\ \text{J/K}$$

Phù hợp dự đoán: số mol khí giảm từ 4 xuống 2 nên $\Delta S < 0$.

**Ví dụ 2.** Dự đoán dấu ΔS của $\mathrm{C_6H_{12}O_6(s) + 6O_2(g) \to 6CO_2(g) + 6H_2O(g)}$.

1. Khí ở chất đầu: 6 mol O₂ (glucose là chất rắn).
2. Khí ở sản phẩm: $6 + 6 = 12$ mol.
3. Số mol khí tăng từ 6 lên 12 nên $\Delta S > 0$.

### Video bài giảng tham khảo

- [Entropy (27:26:06–27:50:50)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=98766s)
- [Các nguyên lý nhiệt động học (27:16:40–27:26:06)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=98200s)

## Tổng kết

- ΔH không quyết định chiều phản ứng: có quá trình thu nhiệt vẫn tự xảy ra.
- $S = k\ln W$: đo độ hỗn độn; rắn < lỏng ≪ khí; S tăng khi T tăng.
- $\Delta S^\circ = \sum\nu S^\circ(\text{sp}) - \sum\nu S^\circ(\text{cđ})$; S° đơn chất ≠ 0.
- Tăng mol khí → ΔS > 0; giảm mol khí → ΔS < 0.
- ΔS cũng chưa đủ; cần kết hợp với ΔH qua ΔG.
