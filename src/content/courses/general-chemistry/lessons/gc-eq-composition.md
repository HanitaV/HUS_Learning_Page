# Biết K tìm thành phần; ảnh hưởng của áp suất

## Giải thích lý thuyết

Ở bài trước, thành phần cân bằng giúp tìm K. Bài này đi theo chiều ngược lại: dùng K để tìm thành phần chưa biết, kiểm tra nghiệm có thể tồn tại và đối chiếu kết quả với dự đoán khi thay đổi điều kiện.

### Biết K thì tìm ẩn trong bảng

K cho sẵn là một phương trình ràng buộc thành phần cân bằng. Sau khi lập bảng ba dòng, thế từng ô dòng cuối vào K và giải một ẩn x. Trước khi bấm SOLVE, viết miền nghiệm: tất cả số mol, nồng độ, áp suất phải không âm. Nếu ban đầu A và B đều phản ứng hết theo x, miền thường là $0<x<\min(n_{A,0}/a,n_{B,0}/b)$.

![Ba biến thể bảng cho biết miền nghiệm từ lượng ban đầu và hệ số](images/chapter-4/ice-table-variants.svg)

K rất nhỏ có thể cho phép giả sử x nhỏ so với lượng đầu. K rất lớn có thể làm lượng chất đầu còn rất ít. Đây là cách ước lượng, không thay cho việc kiểm tra. Khi kết quả cuối nhạy với mẫu số nhỏ, nên giải chính xác và giữ nhiều chữ số trung gian.

Với A ⇌ 2B, ban đầu chỉ có A và đề cho P **tổng ở cân bằng**: $\alpha=\sqrt{K_p/(K_p+4P)}$. Không được nhầm P tổng này với $P_0=n_0RT/V$ nếu chưa phân li. Với A ⇌ B+C, quan hệ khác: ở V,T không đổi $K_p=P_0\alpha^2/(1-\alpha)$.

### Le Chatelier: làm giảm tác động

**Giả thiết:** hệ đã cân bằng rồi bị thay đổi điều kiện; sau đó có thể đạt cân bằng mới.

![Tác động lên cân bằng NH₃: nén bình, đổi T, thêm chất; mũi tên chỉ chiều phản ứng](images/chapter-4/le-chatelier.svg)

- Nén bình, giảm V ở cùng T: dịch về phía ít mol khí. Nếu Δn khí=0, nén không làm chuyển dịch trong mô hình khí lý tưởng.
- Tăng T: dịch theo chiều thu nhiệt. Chiều thuận tỏa nhiệt thì tăng T làm K giảm; chiều thuận thu nhiệt thì tăng T làm K tăng.
- Thêm chất đầu thường làm Q giảm, hệ dịch thuận; lấy bớt sản phẩm thường có tác dụng tương tự. Chất rắn nguyên chất thêm vào khi pha rắn đã hiện diện không làm đổi K hay thành phần khí cân bằng.
- Thêm khí trơ ở V,T không đổi giữ nguyên áp suất riêng phần chất phản ứng nên không dịch cân bằng. Vì thế phải đọc cách thay áp suất: quy tắc “tăng P” ở trên áp dụng cho **nén bình**, không chỉ nhìn số áp kế.

Áp suất và thành phần làm đổi Q; chỉ nhiệt độ làm đổi K của cùng phản ứng. Chất xúc tác giúp đạt cân bằng nhanh hơn, không làm đổi K hay vị trí cân bằng.

### Công thức trọng tâm

> **Công thức — Biểu thức hằng số cân bằng**
>
> $$K_c=\frac{[C]^c[D]^d}{[A]^a[B]^b}$$
>
> Trong đó: $K_c$: Hằng số theo nồng độ; $[A]$: Nồng độ cân bằng của A (mol/L); $a,b,c,d$: Hệ số phương trình aA+bB ⇌ cC+dD.
>
> *Điều kiện:* Phản ứng đã cân bằng; nhiệt độ xác định. Dung dịch loãng; loại pha rắn và lỏng nguyên chất.

> **Công thức — Độ phân li A ⇌ 2B**
>
> $$K_p=\frac{4\alpha^2P}{1-\alpha^2},\qquad\alpha=\sqrt{\frac{K_p}{K_p+4P}}$$
>
> Trong đó: $\alpha$: Phần chất A ban đầu đã phân li; $P$: Áp suất tổng ở cân bằng (atm); $K_p$: Hằng số của A ⇌ 2B.
>
> *Điều kiện:* Ban đầu chỉ có A, không có B. Phương trình đúng dạng A ⇌ 2B; khí lý tưởng.

> **Công thức — Áp suất riêng phần và Dalton**
>
> $$P_i=\frac{n_i}{\sum_jn_j}P,\qquad P=\sum_iP_i$$
>
> Trong đó: $P_i$: Áp suất riêng phần khí i (atm); $n_i$: Số mol khí i (mol); $P$: Áp suất tổng (atm).
>
> *Điều kiện:* Hỗn hợp khí lý tưởng ở cùng V,T.

## Ví dụ

**Ví dụ 3.7, ĐT21 C5.** H₂+I₂ ⇌ 2HI; bình 1 L có ban đầu 1 mol H₂, 2 mol I₂, Kc=50,5.

| mol/L | H₂ | I₂ | HI |
|---|---|---|---|
| Ban đầu | 1 | 2 | 0 |
| Phản ứng | −x | −x | +2x |
| Cân bằng | 1−x | 2−x | 2x |

$$\frac{4x^2}{(1-x)(2-x)}=50{,}5\ \Rightarrow\ 46{,}5x^2-151{,}5x+101=0.$$

Miền $0<x<1$ loại nghiệm lớn. Nghiệm nhận $x\approx0{,}93541$; nồng độ H₂≈0,06459; I₂≈1,06459; HI≈1,87082 M. Δn=0 nên Kp=Kc=50,5.

**Đổi áp suất, số liệu Ví dụ 3.6.** N₂O₄ ⇌ 2NO₂ ở cùng T có Kp≈0,04899. Giảm áp suất cân bằng từ 1 xuống 0,5 atm: $\alpha=\sqrt{0{,}04899/(0{,}04899+2)}\approx0{,}15463$, tức 15,46%. Độ phân li tăng từ 11%: đúng vì phía NO₂ có nhiều mol khí hơn. Cả hai áp suất riêng phần có thể giảm khi giãn nở; cần xét phần mol hoặc độ phân li để kết luận chiều dịch.

Thử trình bày lại lời giải ví dụ H₂ và I₂ thành một bài tự luận: lập bảng, ghi miền nghiệm và chỉ sau đó giải phương trình. Bài dưới đây giữ đủ yêu cầu của đề, kể cả bước xác định Kp.

Kiểm tra mối nối giữa phép tính và Le Chatelier bằng bài sau. Trước khi tính lại độ phân li, hãy dự đoán chiều thay đổi khi giảm áp suất ở cùng nhiệt độ; sau khi tính, đối chiếu kết quả với dự đoán đó.

## Tổng kết

- Thế dòng cân bằng vào K, viết miền nghiệm rồi giải.
- Không nhận nghiệm âm, vượt lượng đầu hoặc α>1.
- Nén bình: dịch về ít mol khí; tăng T: theo chiều thu nhiệt. K chỉ đổi khi T đổi.
