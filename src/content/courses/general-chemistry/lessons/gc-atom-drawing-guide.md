# Vẽ gì, nghĩ gì — nguyên tử H và ion giống H qua hình vẽ

## Giải thích lý thuyết

Bài này không thêm lý thuyết mới. Nó hướng dẫn cách biến đề bài về nguyên tử H và ion giống H thành hai hình vẽ nhanh (thang mức năng lượng và chuỗi đổi đơn vị), dùng lại kiến thức của các bài 4 đến 7, để bạn chọn đúng hướng mũi tên và không mất điểm vì đơn vị.

### Vì sao phải vẽ?

Dạng 1 (nguyên tử H, ion giống H, photon) có trong **cả 6 đề thi từ 2020**, thường là câu 1. Bài nào cũng quy về hai việc:

1. Biết electron đi **từ mức nào đến mức nào**, tức đặt đúng mũi tên trên thang mức năng lượng.
2. Đi đúng **chuỗi đổi đơn vị** để ra con số.

Sinh viên ít khi sai công thức. Điểm thường mất ở hướng của mũi tên và ở các bước đổi đơn vị. Hai hình dưới đây giúp tránh đúng hai lỗi đó.

### Hình 1 — Thang mức năng lượng

![Thang mức năng lượng của H: n = 1 dưới cùng, n = ∞ ở 0 eV; mũi tên xuống là phát xạ, lên là hấp thụ, 1 → ∞ là ion hóa; ion giống H có thang sâu gấp Z² lần](images/chapter-1/energy-ladder.svg)

Cách vẽ trên giấy nháp (chỉ mất khoảng 20 giây):

1. Kẻ vạch $n = 1$ **dưới cùng** và vạch $n = \infty$ (0 eV) **trên cùng**. Các mức ở giữa dồn sát dần khi $n$ tăng. Chỉ cần vẽ những mức đề nhắc đến.
2. Ghi $Z$ cạnh thang. Ion giống H có mọi mức nhân $Z^2$: $E_n = -13{,}6\,Z^2/n^2$ eV.
3. Vẽ mũi tên theo lời đề:
   - "chuyển từ $n = 4$ **về** $n = 2$", "phát ra" → mũi tên **đi xuống** → **phát xạ**.
   - "hấp thụ photon", "kích thích lên" → mũi tên **đi lên** → **hấp thụ**.
   - "ion hóa", "bứt electron" → mũi tên từ $n = 1$ lên $n = \infty$.
4. Đọc tên dãy theo **mức cuối** của mũi tên đi xuống: về $n = 1$ là Lyman (tử ngoại), về $n = 2$ là Balmer (khả kiến), về $n = 3$ là Paschen (hồng ngoại).

Độ dài mũi tên cho biết $\Delta E$: mũi tên càng dài thì photon càng giàu năng lượng và bước sóng càng ngắn. Vì vậy mọi vạch Lyman đều có bước sóng ngắn hơn mọi vạch Balmer.

### Hình 2 — Chuỗi đổi đơn vị

![Ba chuỗi tính: bước sóng chuyển mức, năng lượng ion hóa, số photon; bẫy nằm ở các mũi tên đổi đơn vị](images/chapter-1/unit-chain.svg)

| Đề hỏi | Vẽ gì | Công thức chính |
|---|---|---|
| Bước sóng, năng lượng photon khi chuyển mức | Thang mức + mũi tên giữa 2 mức, rồi chuỗi ① | $\Delta E = 13{,}6Z^2\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)$ eV; $\lambda = \dfrac{hc}{\Delta E}$ |
| Năng lượng ion hóa, tìm nguyên tố | Mũi tên $1 \to \infty$, rồi chuỗi ② | $I = 13{,}6Z^2$ eV/nguyên tử $= 1312Z^2$ kJ/mol |
| Số photon để có năng lượng E | Không cần thang, chỉ chuỗi ③ | $\varepsilon = hc/\lambda$; $N = E/\varepsilon$ |

Có thể dùng thay công thức Rydberg nếu đề cho $R_H$: $\dfrac{1}{\lambda} = R_H Z^2\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)$, với $R_H = 109\,678$ cm⁻¹ (λ ra cm).

### Những lỗi hay gặp

> **Lỗi thường gặp**
>
> Lỗi hay gặp nhất là thế ΔE theo eV thẳng vào $lambda = hc/Delta E$. Hãy đổi eV sang J trước khi chia.

| Lỗi | Hậu quả | Cách tránh |
|---|---|---|
| Thế $\Delta E$ theo **eV** vào $\lambda = hc/\Delta E$ | λ sai khoảng $10^{19}$ lần (ra cỡ $10^{-25}$ m) | Đổi eV → J **trước** khi chia |
| Quên nhân $Z^2$ với ion He⁺, Li²⁺ | ΔE nhỏ đi 4 hoặc 9 lần | Ghi $Z$ ngay cạnh thang mức |
| Nhầm năng lượng **một nguyên tử** với **một mol** | Sai hệ số $6{,}02\cdot10^{23}$ | Nhìn đơn vị đề cho: kJ/mol thì dùng $1312Z^2$ |
| Đổi sai nm và Å | Sai 10 lần | 1 m = $10^9$ nm = $10^{10}$ Å |
| Đảo $n_1$, $n_2$ nên ra ΔE âm | Bối rối về dấu | Luôn lấy $n_1 < n_2$; hướng mũi tên cho biết phát xạ hay hấp thụ |

### Tự kiểm tra trước khi kết luận

- **Ước lượng nhanh:** $\lambda(\text{nm}) \approx 1240 / \Delta E(\text{eV})$. Với ĐT28: $1240/22{,}95 \approx 54$ nm, khớp kết quả đầy đủ.
- **Dãy Balmer của H** nằm trong khoảng 365–656 nm (khả kiến). Nếu tính một vạch Balmer của H ra 10⁻²⁵ m hoặc 6000 nm thì chắc chắn đã sai đơn vị.
- **Bài tìm nguyên tố:** $Z^2 = I/1312$ phải ra gần đúng một số chính phương (4, 9, 16, 25, 36…). Nếu ra 9,0 thì Z = 3 (Li²⁺). Nếu ra 7,3 thì đã đổi đơn vị sai.

### Công thức trọng tâm

> **Công thức — Năng lượng mức n (mẫu Bohr)**
>
> $$E_n = -2{,}18\times10^{-18}\,\frac{Z^2}{n^2}\ \mathrm{J} = -13{,}6\,\frac{Z^2}{n^2}\ \mathrm{eV}$$
>
> Trong đó: $E_n$: năng lượng electron ở mức n (J hoặc eV); $Z$: điện tích hạt nhân; $n$: số lượng tử chính (1, 2, 3, …).
>
> *Điều kiện:* CHỈ áp dụng chính xác cho nguyên tử H và ion một electron (He⁺, Li²⁺, Be³⁺, …). Mốc năng lượng 0 là electron ở xa vô cùng (n = ∞).

> **Công thức — Biến thiên năng lượng khi chuyển mức**
>
> $$\Delta E = E_{\text{cuối}} - E_{\text{đầu}} = -2{,}18\times10^{-18}\,Z^2\left(\frac{1}{n_{\text{cuối}}^2}-\frac{1}{n_{\text{đầu}}^2}\right)\ \mathrm{J}$$
>
> Trong đó: $\Delta E$: biến thiên năng lượng của nguyên tử (J); $n_{\text{đầu}},\ n_{\text{cuối}}$: mức đầu và mức cuối; $Z$: điện tích hạt nhân.
>
> *Điều kiện:* Hệ một electron (mẫu Bohr). ΔE > 0: hấp thụ photon; ΔE < 0: phát xạ photon; năng lượng photon $= |\Delta E|$.

> **Công thức — Năng lượng photon (Planck)**
>
> $$E = h\nu = \frac{hc}{\lambda}$$
>
> Trong đó: $E$: năng lượng một photon (J); $h$: hằng số Planck $6{,}626\times10^{-34}$ (J·s); $\nu$: tần số (s⁻¹); $\lambda$: bước sóng (m).
>
> *Điều kiện:* Áp dụng cho một photon; nhân với $N_A$ để có năng lượng cho 1 mol photon. λ phải đổi về mét trước khi thay số.

> **Công thức — Năng lượng ion hóa của ion một electron**
>
> $$IE = E_\infty - E_1 = 2{,}18\times10^{-18}\,Z^2\ \mathrm{J} = 13{,}6\,Z^2\ \mathrm{eV}$$
>
> Trong đó: $IE$: năng lượng ion hóa (từ trạng thái cơ bản) (J/nguyên tử); $Z$: điện tích hạt nhân.
>
> *Điều kiện:* Electron ở trạng thái cơ bản n = 1 của hệ một electron. Với nguyên tử nhiều electron, giá trị này là năng lượng tách electron CUỐI CÙNG (IE thứ Z), không phải IE₁.

> **Công thức — Công thức Rydberg**
>
> $$\frac{1}{\lambda} = R\,Z^2\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)$$
>
> Trong đó: $\lambda$: bước sóng vạch phổ (m); $R$: hằng số Rydberg $1{,}096776\times10^{7}$ (m⁻¹); $n_1 < n_2$: mức thấp và mức cao; $Z$: điện tích hạt nhân (Z = 1 với H).
>
> *Điều kiện:* Áp dụng cho hệ một electron: dùng $Z = 1$ với nguyên tử H, giữ nguyên $Z^2$ với ion giống hydro. Luôn chọn $n_1 < n_2$ để λ dương.

## Ví dụ

Hai lời giải dưới đây viết theo kiểu **nghĩ thành lời**. Phần in nghiêng là câu người giải tự hỏi mình.

**Ví dụ 1 (ĐT28 C1, Hè 2025–2026).** Ion Li²⁺ ($Z = 3$) có electron chuyển từ mức kích thích $n = 4$ về mức $n = 2$. Tính năng lượng photon phát ra (eV và J) và bước sóng (nm).

1. *Vẽ gì?* Thang mức với $Z = 3$, mũi tên **đi xuống** từ 4 về 2 → phát xạ (dãy Balmer của Li²⁺).
2. $\Delta E = 13{,}6 \times 9 \times \left(\dfrac14 - \dfrac1{16}\right) = 122{,}4 \times 0{,}1875 = 22{,}95$ eV.
3. *Đang ở eV, sắp chia cho hc, vậy phải đổi chưa?* Phải đổi: $22{,}95 \times 1{,}6\cdot10^{-19} = 3{,}672\cdot10^{-18}$ J.
4. $\lambda = \dfrac{hc}{\Delta E} = \dfrac{6{,}625\cdot10^{-34} \times 3\cdot10^{8}}{3{,}672\cdot10^{-18}} = 5{,}41\cdot10^{-8}$ m $= 54{,}1$ nm.
5. *Kiểm tra:* $1240/22{,}95 \approx 54$ nm ✔. Kết quả ngắn hơn vạch Balmer của H (656 nm) là hợp lý, vì thang của Li²⁺ sâu gấp 9 lần.

**Ví dụ 2 (ĐT25 C1, ĐT27 C1).** Năng lượng ion hóa của một mol ion giống H $\mathrm{X^{n+}}$ là $1{,}181\cdot10^4$ kJ/mol. Xác định X và bước sóng (Å) khi electron chuyển từ $n = 5$ về $n = 2$.

1. *Ion hóa là mũi tên nào?* Từ $n = 1$ lên $\infty$: $I = 13{,}6Z^2$ eV cho một ion.
2. *Đề cho kJ/mol, vậy dùng dạng nào?* Dạng theo mol: $I = 1312Z^2$ kJ/mol → $Z^2 = 11\,810/1312 = 9{,}0$ → $Z = 3$: **Li** (ion Li²⁺).
3. Mũi tên đi xuống $5 \to 2$: $\Delta E = 13{,}6 \times 9 \times (0{,}25 - 0{,}04) = 25{,}70$ eV $= 4{,}118\cdot10^{-18}$ J.
4. $\lambda = hc/\Delta E = 4{,}83\cdot10^{-8}$ m. *Đề hỏi Å:* nhân $10^{10}$ → **≈ 483 Å**.
5. *Kiểm tra:* $1240/25{,}7 \approx 48{,}2$ nm = 482 Å ✔.

## Tổng kết

- Bài Dạng 1 nào cũng bắt đầu bằng **thang mức + 1 mũi tên**: xuống là phát xạ, lên là hấp thụ, $1 \to \infty$ là ion hóa.
- Ion giống H: mọi mức (và ΔE, I) nhân $Z^2$.
- **Đổi eV → J trước** khi dùng $\lambda = hc/\Delta E$. Ion hóa theo mol thì dùng $I = 1312Z^2$ kJ/mol.
- Kiểm tra nhanh bằng $\lambda(\text{nm}) \approx 1240/\Delta E(\text{eV})$ và bằng việc $Z^2$ phải gần một số chính phương.
