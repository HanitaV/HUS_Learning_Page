# Chuyển mức năng lượng và phổ nguyên tử

## Giải thích lý thuyết

Bài này áp dụng mẫu Bohr cho sự chuyển mức của electron: tính năng lượng, tần số và bước sóng của photon hấp thụ hoặc phát xạ, rồi giải thích phổ vạch của hydro bằng công thức Rydberg. Đây là dạng bài chiếm tỉ trọng lớn trong đề thi chương 1.

### Hấp thụ và phát xạ

Khi electron chuyển từ mức $n_\text{đầu}$ sang $n_\text{cuối}$:

$$\Delta E = E_\text{cuối} - E_\text{đầu} = -2{,}18\times10^{-18}\,Z^2\left(\frac{1}{n_\text{cuối}^2} - \frac{1}{n_\text{đầu}^2}\right)\ \text{J}$$

| | Hướng chuyển | Dấu ΔE | Photon |
|---|---|---|---|
| **Hấp thụ** | thấp → cao | ΔE > 0 | bị hấp thụ |
| **Phát xạ** | cao → thấp | ΔE < 0 | được phát ra |

Năng lượng, tần số, bước sóng của photon:

$$E_\text{photon} = |\Delta E|,\qquad \nu = \frac{|\Delta E|}{h},\qquad \lambda = \frac{hc}{|\Delta E|}$$

> **Công thức — Biến thiên năng lượng khi chuyển mức**
>
> $$\Delta E = E_{\text{cuối}} - E_{\text{đầu}} = -2{,}18\times10^{-18}\,Z^2\left(\frac{1}{n_{\text{cuối}}^2}-\frac{1}{n_{\text{đầu}}^2}\right)\ \mathrm{J}$$
>
> Trong đó: $\Delta E$: biến thiên năng lượng của nguyên tử (J); $n_{\text{đầu}},\ n_{\text{cuối}}$: mức đầu và mức cuối; $Z$: điện tích hạt nhân.
>
> *Điều kiện:* Hệ một electron (mẫu Bohr). ΔE > 0: hấp thụ photon; ΔE < 0: phát xạ photon; năng lượng photon $= |\Delta E|$.

> **Mẹo học nhanh**
>
> Trước khi tính, hãy vẽ nhanh một mũi tên giữa hai mức: mũi tên đi xuống là phát xạ, đi lên là hấp thụ. Cách vẽ chi tiết xem ở bài [Vẽ gì, nghĩ gì](#/courses/general-chemistry/lessons/gc-atom-drawing-guide).

### Phổ vạch của hydro

Khí H₂ trong ống phóng điện phát ra ánh sáng; khi cho qua lăng kính ta thu được **phổ vạch** (không liên tục), bằng chứng trực tiếp rằng năng lượng nguyên tử bị lượng tử hóa. Trong vùng nhìn thấy có 4 vạch: 410,1; 434,1; 486,1; 656,3 nm (trang 23).

Các vạch được nhóm thành **dãy** theo mức cuối:

| Dãy | Mức cuối $n_1$ | Vùng phổ |
|---|---|---|
| Lyman | 1 | tử ngoại |
| Balmer | 2 | nhìn thấy (và gần UV) |
| Paschen | 3 | hồng ngoại |
| Brackett | 4 | hồng ngoại |

### Công thức Rydberg

$$\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right),\qquad R = 1{,}096776\times10^7\ \text{m}^{-1},\ n_1 < n_2$$

> **Công thức — Công thức Rydberg**
>
> $$\frac{1}{\lambda} = R\,Z^2\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)$$
>
> Trong đó: $\lambda$: bước sóng vạch phổ (m); $R$: hằng số Rydberg $1{,}096776\times10^{7}$ (m⁻¹); $n_1 < n_2$: mức thấp và mức cao; $Z$: điện tích hạt nhân (Z = 1 với H).
>
> *Điều kiện:* Áp dụng cho hệ một electron: dùng $Z = 1$ với nguyên tử H, giữ nguyên $Z^2$ với ion giống hydro. Luôn chọn $n_1 < n_2$ để λ dương.

Với ion giống hydro nhân thêm $Z^2$. Công thức Rydberg (thực nghiệm) và công thức năng lượng Bohr là tương đương: $R \approx \dfrac{2{,}18\times10^{-18}}{hc}$.

**Vạch giới hạn** của một dãy ứng với $n_2 \to \infty$: $\lambda_\text{giới hạn} = n_1^2/R$.

> **Lỗi thường gặp**
>
> Trong công thức Rydberg phải có $n_1 < n_2$. Đảo hai mức sẽ ra $1/\lambda$ âm. Dấu của quá trình (hấp thụ hay phát xạ) lấy từ hướng chuyển mức chứ không lấy từ dấu của $1/\lambda$.

### Các dạng bài toán (trang 29–30)

1. Tính ΔE giữa hai mức.
2. Tính năng lượng ion hóa (chuyển $n = 1 \to \infty$), xem bài [Năng lượng ion hóa](#/courses/general-chemistry/lessons/gc-ionization-energy).
3. Tính bước sóng: $\lambda = hc/\Delta E$.
4. Tìm hằng số Rydberg từ phổ.
5. Tìm Z của ion một electron.
6. Ngược lại: từ λ tìm mức $n$ (giải phương trình cho $1/n^2$, kết quả phải gần một số nguyên).

### Công thức trọng tâm

> **Công thức — Năng lượng photon (Planck)**
>
> $$E = h\nu = \frac{hc}{\lambda}$$
>
> Trong đó: $E$: năng lượng một photon (J); $h$: hằng số Planck $6{,}626\times10^{-34}$ (J·s); $\nu$: tần số (s⁻¹); $\lambda$: bước sóng (m).
>
> *Điều kiện:* Áp dụng cho một photon; nhân với $N_A$ để có năng lượng cho 1 mol photon. λ phải đổi về mét trước khi thay số.

## Ví dụ

**Ví dụ 1.** Tính bước sóng vạch đỏ của dãy Balmer ($3 \to 2$) của H.

1. Bước 1: dãy Balmer có $n_1 = 2$; electron đi từ $n_2 = 3$ về 2, nên đây là phát xạ.
2. Bước 2: thế vào Rydberg:

$$\frac{1}{\lambda} = 1{,}096776\times10^7\left(\frac14 - \frac19\right) = 1{,}5233\times10^6\ \text{m}^{-1}$$

3. Bước 3: $\lambda = 656{,}5$ nm, phù hợp với vạch 656,3 nm đo được.

**Ví dụ 2.** Photon 486,1 nm thuộc dãy Balmer; tìm mức đầu $n_2$.

1. Bước 1: với $n_1 = 2$, giải $\dfrac{1}{n_2^2} = \dfrac14 - \dfrac{1}{R\lambda}$.
2. Bước 2: thế $\lambda = 486{,}1\times10^{-9}$ m và $R$ ở trên, tính được $1/n_2^2 \approx 0{,}0625$.
3. Bước 3: suy ra $n_2 = 4$.

### Video bài giảng tham khảo

- [Chuyển mức năng lượng electron (7:32:01–7:54:20)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=27121s)
- [Bản chất của ánh sáng (7:05:40–7:32:01)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=25540s)

## Tổng kết

- ΔE > 0: hấp thụ; ΔE < 0: phát xạ; $\lambda = hc/|\Delta E|$.
- Dãy Lyman (→1, UV), Balmer (→2, nhìn thấy), Paschen (→3, IR).
- Rydberg: $1/\lambda = R(1/n_1^2 - 1/n_2^2)$ với $n_1 < n_2$.
- Ion một electron: nhân $Z^2$ nên bước sóng giảm $Z^2$ lần.
