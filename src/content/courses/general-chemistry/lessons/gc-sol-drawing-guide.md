# Vẽ gì, nghĩ gì — bảng 3 dòng theo mmol, thang pH

## Giải thích lý thuyết

Bài tổng hợp này nối từng câu hỏi với một hình nháp và một bước tự kiểm tra. Chọn lại phương pháp cho một bài đã học trước khi xem lời giải; mục tiêu là nhận ra dung dịch đang chứa gì, rồi mới chọn công thức pH hay tích số tan.

### Vì sao cần vẽ và lập bảng?

Thống kê đề thi gần đây cho thấy Dạng 8 xuất hiện ở **6/6 đề**, Dạng 9 ở **5/6 đề** và Dạng 10 ở **3/6 đề**; một câu thi thường gộp cả tính pH, dung dịch đệm và cân bằng kết tủa.

Điểm dễ mất là chọn sai mô hình: dùng công thức đệm sau tương đương, coi KCN là HCN, hoặc so Q bằng nồng độ chưa pha loãng. Hình và bảng dưới đây giúp xác định **dung dịch hiện có gì** trước khi bấm máy.

### Đề hỏi gì → vẽ gì

| Đề hỏi gì | Vẽ/lập gì trên nháp | Câu hỏi phải trả lời |
|---|---|---|
| pH axit hoặc bazơ yếu | Quy trình gần đúng → kiểm tra → bậc hai | Ion cần tính là H⁺ hay OH⁻? |
| pH muối | Viết ion thủy phân, đặt lên thang pH | Hằng số cần đổi thành Kw/Ka hay Kw/Kb? |
| Trộn axit với kiềm, thêm HCl vào đệm | Bảng mmol ba dòng | Chất nào hết, chất nào còn? |
| Chuẩn độ | Đánh dấu thể tích tương đương trên đường pH–V | Đang trước, tại hay sau tương đương? |
| Độ tan, ion chung | Cân bằng tan và bảng nồng độ ion | Có sẵn ion nào ở dòng ban đầu? |
| Có kết tủa không | Tính nồng độ sau trộn rồi đặt Q so với Ksp | Có chia tổng thể tích chưa? |

### Hình 1 — Quy trình pH

![Quy trình chọn gần đúng hay giải bậc hai](images/chapter-6/ph-decision.svg)

Checklist trên nháp:

1. Ghi chất hoặc ion quyết định pH và Ka/Kb tương ứng.
2. Ghi $x=[\mathrm{H^+}]$ hoặc $x=[\mathrm{OH^-}]$; kiểm tra có thể bỏ qua nước.
3. Thử $x\approx\sqrt{KC}$ và tính $100x/C$.
4. Vượt 5% hoặc sát ngưỡng: quay lại bảng ba dòng, chọn nghiệm dương nhỏ hơn C.
5. Bazơ: khoanh dòng pH = 14 − pOH để tránh dừng sai bước.

### Hình 2 — Thang pH và muối

![Thang pH phân biệt axit yếu và muối bazơ liên hợp](images/chapter-6/ph-scale.svg)

Checklist: viết HA dưới phía axit, A⁻ dưới phía bazơ; nối cặp bằng $K_aK_b=K_w$. Đặt NH₄⁺ ở phía axit dù tên chất là muối. Sau tính, kiểm tra kết quả có cùng phía trên thang dự đoán không. Các vị trí trên hình chỉ ứng với nồng độ và hằng số ghi trên hình.

### Hình 3 — Bảng mmol và mốc tương đương

![Ba dòng mmol khi axit yếu gặp kiềm](images/chapter-6/mmol-table.svg)

Checklist: đổi $CV$ ra mmol; viết phương trình 1:1; trừ chất giới hạn ở cả hai cột chất phản ứng; cộng vào cột sản phẩm; chỉ lấy dòng cuối để lập tỉ số đệm. Tổng thể tích dùng khi cần nồng độ, không thay đổi tỉ số mol trong cùng dung dịch.

![Đường chuẩn độ với các vùng dùng phương pháp khác nhau](images/chapter-6/titration.svg)

Checklist: tính $V_{\mathrm{tđ}}=n_{a,0}/C_b$; chấm $V_{\mathrm{tđ}}/2$ (pH = pKa khi gần đúng phù hợp); ghi “muối thủy phân” tại mốc tương đương và “OH⁻ dư” sau mốc. Không vẽ điểm tương đương của axit yếu ở pH = 7.

### Hình 4 — Hệ số tan và Q

![Hệ số ion quyết định dạng biểu thức Ksp](images/chapter-6/ksp-stoichiometry.svg)

Checklist: viết một mol muối cho mấy mol từng ion; dưới mỗi ion ghi hệ số nhân s; đưa hệ số phương trình thành số mũ. Với ion chung, cộng nồng độ có sẵn trước khi thế vào Ksp.

![Q vượt Ksp mới tạo kết tủa](images/chapter-6/precipitation.svg)

Checklist: tính nồng độ hai ion trong **hỗn hợp**; lập Q; đặt dấu <, = hoặc > cạnh Ksp; nếu cần lượng ion sau xử lý, trừ theo tỉ lượng rồi giải cân bằng mới.

Dùng quy trình viết hệ số ion ở trên để tìm lỗi trong lời giải CaF₂. Sửa biểu thức trước, sau đó mới sửa đáp số.

### Lỗi hay gặp

| Lỗi | Cách phát hiện và sửa |
|---|---|
| Tính KCN như axit HCN | CN⁻ tạo OH⁻; dùng Kb = Kw/Ka, pH phải > 7 |
| Dùng căn bậc hai mà không kiểm tra | Ghi x/C ngay dưới kết quả |
| Đảo tỉ số trong công thức đệm | Bazơ liên hợp ở tử, axit ở mẫu; thêm kiềm phải làm pH tăng |
| Dùng công thức đệm cho HClO₂ có Ka lớn | Kiểm tra H⁺ so với Ca,Cb; giải bậc hai nếu không nhỏ |
| Tại tương đương vẫn dùng đệm | Bảng mmol cho HA = 0, phải chuyển sang thủy phân |
| Viết Ksp = s·2s cho CaF₂ | Số mũ 2 của F⁻: Ksp = s(2s)² |
| Q dùng nồng độ trước trộn | Khoanh tổng thể tích, chia lại từng nồng độ |
| Nhầm g/L và mol/L | Độ tan g/L = s mol/L × M g/mol |

### Tự kiểm tra trước khi kết luận

Đáp số pH có phù hợp axit/bazơ không? Sau thêm HCl vào đệm, pH phải giảm. Khi thêm ion chung, độ tan phải giảm. Nghiệm cân bằng phải dương và nhỏ hơn lượng chất đầu. Thế lại nồng độ ion vào K phải khớp hằng số. Đừng coi số mũ rất nhỏ là bằng 0: AgI có thể tan cỡ $10^{-8}$ M.

### Công thức trọng tâm

> **Công thức — Henderson–Hasselbalch**
>
> $$\mathrm{pH}=\mathrm pK_a+\lg\frac{n_{\mathrm{A^-}}}{n_{\mathrm{HA}}}$$
>
> Trong đó: $\mathrm pK_a$: −lgKa của axit yếu; $n_{\mathrm{A^-}}$: Lượng bazơ liên hợp sau phản ứng (mol hoặc mmol); $n_{\mathrm{HA}}$: Lượng axit còn sau phản ứng (mol hoặc mmol).
>
> *Điều kiện:* Cả HA và A⁻ cùng tồn tại sau trung hòa. [H⁺] và [OH⁻] nhỏ hơn nhiều nồng độ HA và A⁻ (khoảng mười lần trở lên). Hai lượng chất dùng cùng đơn vị, cùng thể tích dung dịch.

> **Công thức — Tích số tan và hệ số ion**
>
> $$K_{sp}=(ms)^m(ns)^n$$
>
> Trong đó: $K_{sp}$: Tích số tan (đề ký hiệu T); $s$: Độ tan mol của muối (mol/L); $m$: Hệ số ion M trong cân bằng tan; $n$: Hệ số ion X trong cân bằng tan.
>
> *Điều kiện:* Muối MmXn cân bằng với pha rắn, dung dịch bão hòa. Dạng theo s áp dụng trong nước không có ion chung và bỏ qua phản ứng phụ; lấy hoạt độ bằng nồng độ.

## Ví dụ

### Nghĩ thành lời 1 — Muối axetat, không phải axit axetic

ĐT28 C6a, dựa Ví dụ 5.3: CH₃COONa 0,10 M; Ka của CH₃COOH là $1{,}8\times10^{-5}$.

*Đề cho Ka, có chắc phải dùng Ka không?* Không. Muối cho CH₃COO⁻, ion này nhận proton từ nước và tạo OH⁻. Viết cân bằng trước, rồi $K_b=10^{-14}/K_a=5{,}56\times10^{-10}$.

*Có thể dùng căn bậc hai không?* Thử $x=\sqrt{K_bC}=7{,}45\times10^{-6}$ M. $x/C=0{,}00745\%$, rất nhỏ; OH⁻ cũng lớn hơn $10^{-7}$ M khoảng 75 lần, bỏ qua nước phù hợp.

*X là H⁺ hay OH⁻?* Là OH⁻. Vậy pOH = 5,13, pH = 8,87. Đặt điểm này lên phía bazơ của thang pH, đúng như dự đoán. Nếu ra 5,13 thì thiếu bước đổi pOH.

### Nghĩ thành lời 2 — Trung hòa xong mới lập tỉ số

ĐT27 C6b, dựa Ví dụ 5.6: 25 mL CH₃COOH 0,10 M và 13,6 mL KOH 0,08 M, $K_a=1{,}8\times10^{-5}$.

*Đề hỏi pH, vì sao không dùng công thức ngay?* Vì OH⁻ phản ứng với axit. Đầu tiên lập bảng mmol: HA 2,500; OH⁻ 1,088; A⁻ 0. Phản ứng hết OH⁻, dòng cuối HA 1,412; OH⁻ 0; A⁻ 1,088.

*Đây là muối thuần hay đệm?* Còn cả HA/A⁻, đang trước tương đương (cần 31,25 mL KOH mới hết axit). Dùng $\mathrm{pH}=4{,}7447+\lg(1{,}088/1{,}412)=4{,}63$.

*Điều kiện đệm có đạt không?* Tổng thể tích 38,6 mL, Ca = 0,0366 M và Cb = 0,0282 M, lớn hơn H⁺ cỡ $2{,}34\times10^{-5}$ M trên nghìn lần; OH⁻ còn nhỏ hơn. Đáp số dưới pKa hợp lý vì axit còn nhiều hơn bazơ liên hợp. Nếu đảo tỉ số sẽ ra lớn hơn pKa, trái bảng mmol.

## Tổng kết

- Hình nháp giúp chọn mô hình: pH yếu, thủy phân, đệm, kiềm dư hay cân bằng tan.
- Dùng lượng sau phản ứng và nồng độ sau trộn; kiểm tra giả sử trước khi kết luận.
- Ghi rõ ion đang tính, đơn vị và điều kiện để mỗi bước có thể tự kiểm tra.
