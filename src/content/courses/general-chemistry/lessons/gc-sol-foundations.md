# Nồng độ, pha loãng, logarit và pH

## Giải thích lý thuyết

Mọi bài pH ở chương này bắt đầu từ hai việc: đổi dữ kiện thành số mol, rồi đưa số mol về nồng độ đúng thể tích. Phần này gom các phép đổi đó và cách đọc logarit để các bài sau chỉ còn lại phần hóa học.

### Từ số mol đến nồng độ

Nồng độ mol $C$ cho biết một lít **dung dịch** chứa bao nhiêu mol chất tan:

$$C=\frac nV.$$

$V$ tính bằng lít thì $n$ tính bằng mol. Có thể dùng cặp đơn vị thuận tiện hơn khi trộn dung dịch:

$$n\;(\mathrm{mmol})=C\;(\mathrm{mol/L})\,V\;(\mathrm{mL}).$$

Ví dụ, 100 mL HCOOH 0,10 M chứa 10 mmol HCOOH. Đây là lượng chất để đưa vào bảng phản ứng; 0,10 M là nồng độ, không phải số mol.

Pha loãng bằng nước giữ nguyên số mol chất tan, nên $C_1V_1=C_2V_2$.

> **Công thức — Số mol và pha loãng**
>
> $$n=CV,\qquad C_1V_1=C_2V_2$$
>
> Trong đó: $n$: Lượng chất tan (mol hoặc mmol); $C$: Nồng độ mol (mol/L); $V$: Thể tích dung dịch (L hoặc mL).
>
> *Điều kiện:* Pha loãng chỉ thêm dung môi, không mất hay phản ứng chất tan. Khi trộn coi thể tích cộng được; có phản ứng phải tính lượng còn lại trước.

Khi trộn, coi thể tích cộng được: $V_{\text{tổng}}=V_1+V_2$. Nếu cùng một chất không phản ứng, cộng số mol rồi chia cho tổng thể tích. Nếu có phản ứng, phải tính **lượng còn lại sau phản ứng** trước khi chia.

> **Trọng tâm**
>
> Thứ tự làm bài trộn dung dịch: đổi ra mmol, lập bảng phản ứng, rồi mới chia cho tổng thể tích.

![Bảng mmol cho HCOOH phản ứng với NaOH, theo dõi axit còn và muối tạo ra](images/chapter-6/mmol-table.svg)

### Đọc logarit và pH

Với $a,b>0$: $\lg(ab)=\lg a+\lg b$, $\lg(a/b)=\lg a-\lg b$, $\lg(a^n)=n\lg a$. Ký hiệu $\lg$ là cơ số 10; $\ln$ là cơ số $e$, với $\ln a=2{,}303\lg a$. Bài pH dùng $\lg$.

Dung dịch loãng trong nước ở 25 °C, lấy hoạt độ bằng nồng độ:

$$
\mathrm{pH}=-\lg[\mathrm{H_3O^+}],\qquad
\mathrm{pOH}=-\lg[\mathrm{OH^-}],\qquad
K_w=[\mathrm{H_3O^+}][\mathrm{OH^-}]=10^{-14}.
$$

> **Công thức — pH và pOH**
>
> $$\mathrm{pH}=-\lg[\mathrm{H_3O^+}],\quad\mathrm{pOH}=-\lg[\mathrm{OH^-}],\quad\mathrm{pH}+\mathrm{pOH}=14$$
>
> Trong đó: $[\mathrm{H_3O^+}]$: Nồng độ ion hydronium (mol/L); $[\mathrm{OH^-}]$: Nồng độ ion hydroxide (mol/L).
>
> *Điều kiện:* Dung dịch nước loãng, hoạt độ xấp xỉ nồng độ. Quan hệ pH + pOH = 14 áp dụng ở 25 °C với Kw = 10⁻¹⁴.

Vì thế pH + pOH = 14. Đổi ngược: $[\mathrm{H_3O^+}]=10^{-\mathrm{pH}}$. Mỗi đơn vị pH tương ứng nồng độ H₃O⁺ thay đổi mười lần.

> **Lỗi thường gặp**
>
> Không cộng hay lấy trung bình pH khi trộn hai dung dịch; hãy cộng số mol rồi tính lại nồng độ. Với axit rất loãng, như HCl $10^{-8}$ M, pH không bằng 8: nước tự phân li góp thêm khoảng $10^{-7}$ M H₃O⁺ nên pH ≈ 6,98, vẫn nhỏ hơn 7.

![Thang pH định vị axit, đệm, nước và muối có tính bazơ](images/chapter-6/ph-scale.svg)

Trong mô hình dung dịch loãng ở 25 °C: pH < 7 là axit, pH = 7 là trung tính, pH > 7 là bazơ. Chữ “muối” không có nghĩa pH luôn bằng 7; khi nhiệt độ thay đổi cần dùng $K_w$ tương ứng.

## Ví dụ

### Trộn HCOOH với NaOH theo mmol

Trộn 100 mL HCOOH 0,10 M với 100 mL NaOH 0,05 M.

1. HCOOH có $100\times0{,}10=10$ mmol; NaOH có $100\times0{,}05=5$ mmol.
2. $\mathrm{HCOOH+OH^-\rightarrow HCOO^-+H_2O}$, tỉ lệ 1:1; OH⁻ phản ứng hết.
3. Còn 5 mmol HCOOH, tạo 5 mmol HCOO⁻ trong 200 mL.
4. Mỗi chất có nồng độ $5/200=0{,}025$ M. Hai nồng độ bằng nhau, nhưng pH cần hằng số axit; không lấy $-\lg0{,}025$.

Tự làm lại phần **đổi mmol, xác định chất hết và tính nồng độ sau trộn** trong đề dưới đây. Phần tính pH của hỗn hợp cần kiến thức [dung dịch đệm](#/courses/general-chemistry/lessons/gc-sol-buffer); hãy quay lại giải trọn đề sau bài đó. Ở đây chưa dùng nồng độ axit còn lại làm [H₃O⁺].

### Đổi pOH sang pH

Cho $[\mathrm{OH^-}]=4{,}1\times10^{-4}$ M. Tìm pH.

1. Tính pOH: $\mathrm{pOH}=-\lg(4{,}1\times10^{-4})=3{,}39$.
2. Đổi sang pH: $\mathrm{pH}=14-3{,}39=10{,}61$.
3. Kiểm tra: OH⁻ lớn hơn $10^{-7}$ M nên dung dịch phải có pH > 7. Nếu ra 3,39, bạn đã dừng ở pOH.

Hai đề tự luyện dưới đây cũng được dùng lại trong bài dung dịch đệm. Ở bước chuẩn bị này, luyện lập bảng lượng chất; phần pH hoàn chỉnh là bài vận dụng sau khi học đệm.

## Tổng kết

- Dùng mol/L với lít hoặc mmol với mL; không trộn hai cặp đơn vị.
- Pha loãng giữ nguyên số mol: $C_1V_1=C_2V_2$.
- Xử lý phản ứng trước, tính nồng độ theo tổng thể tích sau.
- pH dùng logarit cơ số 10; ở 25 °C, pH + pOH = 14.
- Không cộng pH; axit rất loãng phải kể đến nước.
