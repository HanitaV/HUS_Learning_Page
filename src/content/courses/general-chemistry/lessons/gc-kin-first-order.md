# Phản ứng bậc 1 và thời gian bán hủy

## Giải thích lý thuyết

Bài trước cho biết tốc độ giảm khi chất đầu bị tiêu hao. Bài này chuyển nhận xét đó thành cách tính lượng còn lại hoặc thời gian cần thiết, rồi dùng lượng đã mất để tìm sản phẩm. Điểm cần xác định trước mọi phép tính là đề đang hỏi phần còn hay phần đã phản ứng.

### Điều kiện và công thức

Định luật bậc 1 áp dụng khi tốc độ tiêu hao có dạng $v_A=k[\mathrm A]$ và **k không đổi**, tức nhiệt độ được giữ cố định:

$$\ln\frac{C_0}{C_t}=kt,\qquad C_t=C_0e^{-kt}.$$

$C_0$ là nồng độ đầu, $C_t$ là nồng độ **còn lại** ở thời điểm t. Đặt $f=C_t/C_0$, ta có $f=e^{-kt}$ và $t=\ln(1/f)/k$. Logarit ở đây là ln; nếu bấm lg phải dùng hệ số chuyển đổi ln x = 2,303 lg x.

Với khí lý tưởng ở nhiệt độ và thể tích không đổi, $P_A=C_ART$ nên có thể thay nồng độ bằng **áp suất riêng phần A**. Khối lượng hoặc số mol của cùng một chất cũng có cùng tỉ phần còn lại. Không thay áp suất riêng phần bằng áp suất toàn phần khi số mol khí thay đổi.

![Đổi phần trăm đã phản ứng thành phần còn lại trước khi thế công thức](images/chapter-5/remaining-vs-reacted.svg)

### Ba bước trước khi bấm máy

1. Chọn đơn vị thời gian theo k. Nếu k theo s⁻¹ thì đổi giờ hoặc phút sang giây.
2. Gạch chân đề nói “còn lại” hay “đã phản ứng”. Đã phản ứng 90% nghĩa là $f=0{,}10$; đã phản ứng 25% nghĩa là $f=0{,}75$.
3. Chọn ẩn. Tìm C dùng hàm mũ; tìm t hoặc k dùng logarit. Giữ đủ chữ số ở bước trung gian.

Kiểm tra riêng bước đọc phần trăm trước khi ghép vào một bài tính dài. Trong lời giải sai dưới đây, hãy chỉ ra đại lượng bị đưa nhầm vào logarit và sửa cách lập phép tính.

### Thời gian bán hủy

Thay $C_t=C_0/2$ vào định luật:

$$t_{1/2}=\frac{\ln2}{k},\qquad \frac{C_t}{C_0}=\left(\frac12\right)^{t/t_{1/2}}.$$

Với bậc 1, $t_{1/2}$ **không phụ thuộc nồng độ đầu**. Sau mỗi khoảng bán hủy, lượng đang còn tiếp tục giảm một nửa: 1 → 1/2 → 1/4 → 1/8. Còn 1/4 cần hai chu kỳ; còn 1/8 cần ba chu kỳ.

![Hai cách nhìn cùng một quy luật bậc 1](images/chapter-5/first-order-two-views.svg)

### Nếu đề hỏi sản phẩm

Trước hết tìm lượng chất đầu còn lại. Lượng đã mất bằng lượng đầu trừ lượng còn. Sau đó nhân theo tỉ lệ hệ số của phương trình. Với $\mathrm{N_2O_5\to N_2O_4+\tfrac12O_2}$ ở cùng T,V, áp suất N₂O₄ sinh ra bằng áp suất N₂O₅ đã mất; áp suất O₂ bằng một nửa số đó.

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

## Ví dụ

**Ví dụ 4.2 — ĐT28 C4.** $k=3{,}20\times10^{-5}$ s⁻¹, $C_0=0{,}20$ M ở 298 K.

1. Sau 2 giờ: $t=7200$ s nên $kt=0{,}2304$.
2. $C=0{,}20e^{-0{,}2304}\approx0{,}1588$ M, còn khoảng 79,4%.
3. Để 25% đã phản ứng, phần còn là 75%: $t=\ln(1/0{,}75)/k\approx8990$ s, khoảng 150 phút.
4. Kiểm tra: sau 120 phút mới phản ứng khoảng 20,6%, nên cần 150 phút để đạt 25% là hợp lý.

**Sản phẩm khí — ĐT22 C4.** $k=10^{-3}$ phút⁻¹, $P_0(\mathrm{N_2O_5})=25000$ Pa. Sau 2 giờ = 120 phút:

$$P(\mathrm{N_2O_5})=25000e^{-0{,}12}\approx22173\ \mathrm{Pa}.$$

Áp suất tương ứng lượng N₂O₅ đã mất là khoảng 2827 Pa, nên $P(\mathrm{N_2O_4})\approx2827$ Pa và $P(\mathrm{O_2})\approx1413$ Pa. Lượng chất đầu giảm không đồng nghĩa áp suất toàn phần giảm.

Bài đầy đủ dưới đây ứng với ví dụ sản phẩm khí vừa giải. Trước khi mở đề, hãy phác bảng lượng đầu – mất – còn và ghi tỉ lệ tạo từng sản phẩm; sau khi tính, kiểm tra mình đang báo áp suất riêng phần hay áp suất toàn phần.

## Tổng kết

- Công thức thời gian dùng phần **còn lại** và đơn vị k,t tương ứng.
- Bậc 1 có thời gian bán hủy không đổi ở cùng nhiệt độ.
- Tìm sản phẩm qua lượng chất đầu đã mất rồi dùng hệ số hóa học.
