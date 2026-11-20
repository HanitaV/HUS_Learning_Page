# K theo nhiệt độ và liên hệ Gibbs

## Giải thích lý thuyết

Các bài trước giữ nhiệt độ cố định nên dùng một giá trị K. Khi nhiệt độ đổi, cần nối cân bằng với nhiệt động học: từ Gibbs tìm K ở mỗi nhiệt độ và kiểm tra xu hướng bằng dấu của enthalpy phản ứng.

### Dùng lại liên hệ Gibbs của chương 3

Đọc [Gibbs và hằng số cân bằng](#/courses/general-chemistry/lessons/gc-gibbs-equilibrium) để xem cơ sở của liên hệ Gibbs–K. Ở đây ta dùng lại kết quả để giải R1, không suy ra lại định luật.

Điều kiện của cách tính: K ứng với đúng phương trình ở nhiệt độ T; khí lý tưởng, quy ước trạng thái chuẩn nhất quán. Coi ΔH° và ΔS° không đổi trên khoảng nhiệt độ đề cho. T dùng kelvin, năng lượng theo J, $R=8{,}314$ J/(mol·K). R=0,082 chỉ dùng cho các bước khí và đổi Kp/Kc.

| Dữ kiện | Trình tự tính |
|---|---|
| ΔH°, ΔS°, T | Tính ΔG° ở T rồi suy K bằng thẻ công thức Gibbs–K |
| K₁, T₁ và ΔH° | Tính ΔG°₁; tìm ΔS°; dùng T₂ để tính ΔG°₂ rồi K₂ |
| K₁, T₁ và K₂, T₂ | Mỗi nhiệt độ cho một phương trình theo ΔH°, ΔS°; trừ để tìm ΔS°, thế lại tìm ΔH° |

![Hai điểm ΔG° ở 4000 và 5000 K xác định đường thẳng, tung độ gốc cho ΔH° và độ dốc cho −ΔS°](images/chapter-4/k-two-temperatures.svg)

K₂ lớn hơn K₁ khi tăng T thì chiều thuận thu nhiệt (ΔH°>0). Nếu thuận tỏa nhiệt, giảm T làm K tăng. Đừng nhầm ΔG° với ΔG của hỗn hợp đang có: tại cân bằng ΔG=0, còn ΔG° có thể khác 0 khi K khác 1. Một số đề ghi ΔG nhưng hướng giải dùng ΔG°; bài tập sẽ ghi rõ quy ước đó.

### Công thức trọng tâm

> **Công thức — Quan hệ ΔG° và hằng số cân bằng**
>
> $$\Delta G^\circ = -RT\ln K \quad\Longleftrightarrow\quad K = e^{-\Delta G^\circ/RT}$$
>
> Trong đó: $K$: hằng số cân bằng (Kp hoặc Kc); $R$: 8,314 (J/(mol·K)); $T$: nhiệt độ (K).
>
> *Điều kiện:* Đổi ΔG° sang J trước khi chia cho RT (R tính theo J). ΔG° < 0 ⇔ K > 1.

> **Công thức — Phương trình van ’t Hoff (dạng tích phân)**
>
> $$\ln\frac{K_2}{K_1} = \frac{\Delta H^\circ}{R}\left(\frac{1}{T_1}-\frac{1}{T_2}\right)$$
>
> Trong đó: $K_1, K_2$: hằng số cân bằng ở $T_1$, $T_2$; $\Delta H^\circ$: enthalpy chuẩn của phản ứng (J/mol).
>
> *Điều kiện:* Giả sử ΔH° và ΔS° không phụ thuộc nhiệt độ trong khoảng $T_1$–$T_2$.

## Ví dụ

**Ví dụ 3.8, ĐT05 C4b.** N₂ ⇌ 2N. Từ độ phân li và áp suất 1 atm, tính được Kp(4000 K)=0,0001690071; Kp(5000 K)=0,05455813.

1. Dùng thẻ Gibbs–K: $\Delta G^\circ_{4000}\approx288{,}847$ kJ/mol và $\Delta G^\circ_{5000}\approx120{,}906$ kJ/mol. Giữ các số chưa làm tròn khi tính.
2. Viết hai phương trình bằng J:

$$288847{,}3=\Delta H^\circ-4000\Delta S^\circ,$$
$$120905{,}9=\Delta H^\circ-5000\Delta S^\circ.$$

3. Trừ hai phương trình để tìm ΔS°≈167,94 J/(mol·K), rồi thế lại được ΔH°≈960,61 kJ/mol. Nếu tính từ các K làm tròn 1,69×10⁻⁴ và 5,46×10⁻², kết quả cuối chỉ thay đổi rất ít.
4. K tăng khi tăng T, phù hợp ΔH° dương của phân li N₂. Hai điểm trên hình cho cùng phép tính: tung độ gốc gần +961 kJ/mol.

**ĐT01 C2.** Tổng hợp NH₃ có Kp(900 K)=3,7×10⁻⁶ và ΔH°=−92 kJ/mol. Tính ΔG°900≈93586 J/mol; từ đó ΔS°≈−206,21 J/(mol·K). Ở 550 K, ΔG°≈21414 J/mol nên Kp≈9,25×10⁻³. K tăng khi giảm T vì phản ứng tỏa nhiệt; cân bằng dịch thuận. Đây là kết luận về cân bằng, không đảm bảo phản ứng diễn ra nhanh ở nhiệt độ thấp.

Bài dưới đây yêu cầu ghép các bước đã biết: dùng dữ kiện tạo thành và entropy của chương 3 để tìm đại lượng phản ứng, suy K ở hai nhiệt độ, rồi bàn điều kiện tăng hiệu suất. Trước khi mở đề, hãy viết thứ tự các bước và kiểm tra hệ đơn vị năng lượng.

## Tổng kết

- Dùng lại thẻ Gibbs–K, giữ J và kelvin thống nhất.
- Hai nhiệt độ cho hai phương trình theo ΔH°, ΔS°; có thể giải hệ thay vì học thuộc công thức van’t Hoff.
- Thuận tỏa nhiệt: giảm T làm K tăng; thuận thu nhiệt: tăng T làm K tăng.
