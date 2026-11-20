# Độ tan và tích số tan

## Giải thích lý thuyết

Bài này dùng lại cách viết hằng số cân bằng, nhưng đối tượng là muối ít tan. Đi từ phương trình tan đến nồng độ từng ion, rồi mới tính độ tan hoặc xét kết tủa. Hãy phân biệt bài chỉ có nước với bài có ion chung hay pha trộn.

### Độ tan khác nồng độ từng ion

Độ tan $s$ (mol/L) là số mol **muối** tan trong một lít dung dịch bão hòa. Muối $\mathrm{M_mX_n}$ cân bằng với pha rắn:

$$
\mathrm{M_mX_n(r)}\rightleftharpoons m\mathrm{M}+n\mathrm{X},\qquad
K_{sp}=[\mathrm M]^m[\mathrm X]^n.
$$

Không đưa chất rắn vào biểu thức. Trong nước, khi không có ion chung hay phản ứng phụ, $[\mathrm M]=ms$, $[\mathrm X]=ns$, nên $K_{sp}=(ms)^m(ns)^n$. Lưu ý rằng một số giáo trình và đề thi ký hiệu tích số tan là $T$; đó chính là $K_{sp}$, không phải nhiệt độ.

| Kiểu muối | Quan hệ | Độ tan |
|---|---|---|
| AB (AgCl, BaSO₄, AgI) | $K_{sp}=s^2$ | $s=\sqrt{K_{sp}}$ |
| AB₂ hoặc A₂B (CaF₂, Mg(OH)₂) | $K_{sp}=4s^3$ | $s=\sqrt[3]{K_{sp}/4}$ |
| A₃B (Ag₃PO₄) | $K_{sp}=27s^4$ | $s=\sqrt[4]{K_{sp}/27}$ |

![Hệ số ion dẫn đến số mũ khác nhau của độ tan](images/chapter-6/ksp-stoichiometry.svg)

Đổi sang g/L bằng $sM$ với $M$ là khối lượng mol muối. Không nhân với khối lượng mol của một ion.

Thử với CaF₂: trước khi tính căn, viết riêng [Ca²⁺] và [F⁻] theo s. Kiểm tra xem hệ số 2 đã xuất hiện cả ở nồng độ lẫn số mũ chưa.

### Ion chung làm thay đổi dòng ban đầu

Ví dụ BaSO₄ tan trong Na₂SO₄ $C_0$: dòng cân bằng là $[\mathrm{Ba^{2+}}]=s$, $[\mathrm{SO_4^{2-}}]=C_0+s$.

$$K_{sp}=s(C_0+s).$$

Giả sử $s\ll C_0$ cho $s\approx K_{sp}/C_0$; phải kiểm tra $s/C_0\le5\%$. Nếu không đúng, giải $s^2+C_0s-K_{sp}=0$. Với muối cho hai ion chung mỗi công thức, kiểm tra $2s/C_0$ thay vì $s/C_0$.

### Khi trộn có kết tủa không?

1. Tính mol từng ion, chia **tổng thể tích** để có nồng độ ngay sau trộn, trước kết tủa.
2. Lập tích ion $Q$ với số mũ đúng theo cân bằng tan.
3. $Q>K_{sp}$: có kết tủa; $Q<K_{sp}$: chưa bão hòa; $Q=K_{sp}$: đúng ngưỡng bão hòa.

![So tích ion Q với mức Ksp để quyết định kết tủa](images/chapter-6/precipitation.svg)

Sau kết tủa, không tiếp tục dùng nồng độ trước kết tủa. Trừ lượng ion theo tỉ lượng, xác định ion dư rồi dùng cân bằng $Q=K_{sp}$ để tính lượng ion còn hòa tan. “Kết tủa hoàn toàn” trong bài tỉ lượng nghĩa là gần hết; về cân bằng luôn có lượng nhỏ ion trong dung dịch.

### Công thức trọng tâm

> **Công thức — Tích số tan và hệ số ion**
>
> $$K_{sp}=(ms)^m(ns)^n$$
>
> Trong đó: $K_{sp}$: Tích số tan (đề ký hiệu T); $s$: Độ tan mol của muối (mol/L); $m$: Hệ số ion M trong cân bằng tan; $n$: Hệ số ion X trong cân bằng tan.
>
> *Điều kiện:* Muối MmXn cân bằng với pha rắn, dung dịch bão hòa. Dạng theo s áp dụng trong nước không có ion chung và bỏ qua phản ứng phụ; lấy hoạt độ bằng nồng độ.

## Ví dụ

### CaF₂ trong nước

Xét độ tan của CaF₂ trong nước (số liệu theo ĐT28 C6c): $K_{sp}=3{,}9\times10^{-11}$. Phương trình $\mathrm{CaF_2(r)\rightleftharpoons Ca^{2+}+2F^-}$. Tan $s$ tạo $s$ Ca²⁺ và $2s$ F⁻:

$$
K_{sp}=s(2s)^2=4s^3;\qquad
s=\sqrt[3]{\frac{3{,}9\times10^{-11}}4}=2{,}14\times10^{-4}\;\mathrm{mol/L}.
$$

Kiểm tra lại $[\mathrm{F^-}]=4{,}27\times10^{-4}$ M, không bằng $s$.

Đổi sang Ag₃PO₄ để kiểm tra bạn có lập lại biểu thức theo hệ số ion hay chỉ nhớ công thức CaF₂. Viết Ksp theo s trước khi mở gợi ý.

### Trộn SrCl₂ với K₂SO₄

Trộn hai thể tích bằng nhau của SrCl₂ 0,10 M và K₂SO₄ 0,020 M; biết $K_{sp}(\mathrm{SrSO_4})=3{,}6\times10^{-7}$.

Mỗi nồng độ giảm một nửa: $[\mathrm{Sr^{2+}}]=0{,}050$ M, $[\mathrm{SO_4^{2-}}]=0{,}010$ M. $Q=5{,}0\times10^{-4}>K_{sp}$ nên có kết tủa. Hai dung dịch trong suốt trước trộn vẫn có thể tạo chất rắn sau trộn.

### Ion chung nhưng gần đúng sai

Đề ĐT18 C6b cho BaSO₄ ($K_{sp}=1{,}5\times10^{-9}$) trong Na₂SO₄ $10^{-4}$ M. Giả sử gần đúng cho $s=1{,}5\times10^{-5}$ M, chiếm 15% nồng độ ion chung: điều kiện $\le 5\%$ không đạt. Giải phương trình bậc hai $s^2+10^{-4}s-1{,}5\times10^{-9}=0$ được $s=1{,}325\times10^{-5}$ M. Khi làm bài thi, luôn tính theo đúng hằng số đề bài cho (dù giá trị thực tế trong bảng tra chuẩn có thể khác).

## Tổng kết

- Viết phương trình tan để lấy đúng hệ số và số mũ; chỉ khi AB mới có $s=\sqrt{K_{sp}}$.
- Ion chung nằm ở dòng ban đầu; phải kiểm tra gần đúng.
- Bài trộn: pha loãng trước khi so Q; tính ion dư trước khi tìm nồng độ còn lại.
