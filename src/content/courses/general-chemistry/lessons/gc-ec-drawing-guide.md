# Vẽ gì, nghĩ gì — thang thế điện cực, sơ đồ pin

## Giải thích lý thuyết

Với mỗi đề, chọn hình nháp theo đại lượng cần tìm, ghi n đúng cho phạm vi phản ứng, rồi kiểm tra dấu và điều kiện chuẩn trước khi tính. Bài này dùng lại các công cụ của chương trong cùng một quy trình giải và tự kiểm tra.

### Vì sao phải vẽ?

Dạng 11 xuất hiện ở **6/6 đề thi từ 2020** và **20/20 đề trước đó**, thường nằm ở câu 7 (một số đề cũ có thứ tự câu khác như ĐT01 C5 hoặc ĐT03 C2). Bài này dễ mất điểm vì chọn sai cực, nhân thế điện cực với hệ số phản ứng hoặc quên nồng độ H⁺ trong phương trình Nernst. Một hình nháp giúp bạn giữ đúng dấu và số electron xuyên suốt lời giải.

| Đề hỏi gì | Vẽ hoặc dùng gì |
|---|---|
| Viết phản ứng pin, xác định cực | Thang thế khử, E cao ở trên |
| Sơ đồ pin, chiều electron | Hai ngăn, dây ngoài, cầu muối |
| E ở nồng độ bất kỳ | Thang thế sau Nernst từng cực |
| Tìm nồng độ hoặc pin ngừng | Đặt ẩn trong Nernst; Ecatot = Eanot khi ngừng |
| ΔG° hoặc K | Ghi n của phản ứng tổng rồi dùng −nFE° hoặc lg K |
| Thế khử chưa cho của một cặp | Chu trình Luther, cộng nE° |

### 1. Thang thế khử

![Thang thế khử của Fe và Zn](images/chapter-7/ec-potential-ladder.svg)

Checklist trên nháp: kẻ trục E hướng lên; ghi mỗi cặp và E ngay cạnh vạch; khoanh cặp cao làm catot; viết cặp thấp theo chiều oxi hóa; cân bằng electron. Nếu nồng độ khác chuẩn, tính E rồi xếp lại các vạch, vì thứ tự có thể đổi.

### 2. Hai ngăn của pin

![Electron đi trong dây ngoài, anion về ngăn anot và cation về ngăn catot](images/chapter-7/ec-cell-diagram.svg)

Checklist: anot bên trái (−), catot bên phải (+); điện cực trơ ghi Pt; ghi các chất tan đúng ngăn; vẽ mũi tên electron ở dây ngoài; xác định ion bù điện tích qua cầu muối. Không vẽ electron chạy qua cầu muối.

### 3. Dịch thế theo nồng độ

![Nồng độ dịch thế Fe và Zn theo Nernst](images/chapter-7/ec-nernst-shift.svg)

Checklist: viết nửa phản ứng; đặt Ox ở tử và Kh ở mẫu; bỏ chất rắn tinh khiết khỏi biểu thức; giữ H⁺ và áp suất khí nếu có; dùng n riêng cho từng cực; trừ Ecatot − Eanot. Với pin ngừng, đưa hai vạch về cùng độ cao.

### 4. Chu trình Luther

![Hai con đường khử Sn có cùng biến thiên Gibbs](images/chapter-7/ec-luther-gibbs.svg)

Checklist: viết trạng thái đầu/cuối; ghi n và E° trên mỗi chặng; nhân nE°; cộng theo đường đi; giải thế chưa biết. Chỉ cộng trực tiếp E° khi đã có lý do đại số rõ ràng, không vì hai phương trình cộng được.

### Lỗi hay gặp

| Lỗi | Cách phát hiện và sửa |
|---|---|
| Nhân E° với hệ số cân bằng | Gạch chân E° là thế của cặp; chỉ nhân ΔG° khi nhân phản ứng |
| Sai n | Đếm electron sau khi cân bằng phản ứng tổng; khi tính từng cực dùng n riêng |
| Đảo Ox/Kh | Viết nửa phản ứng chiều khử trước khi đặt tỉ số |
| Bỏ H⁺ | Đếm lại mọi chất tan bên vế Ox; H⁺ có số mũ bằng hệ số |
| Nhầm ΔG với ΔG° | E khác chuẩn cho ΔG; E° cho ΔG° |
| Quên đổi J sang kJ | −nFE° với F theo C/mol luôn cho J/mol |

### Tự kiểm tra trước khi kết luận

Ở chiều pin tự chạy, Epin phải dương. Nếu E° dương thì ΔG° âm và K lớn hơn 1. Nếu Q < 1, Epin phải lớn hơn E°pin theo Nernst. Nồng độ tìm được phải dương; giữ số chưa làm tròn trong phép tính logarit. Đề không đủ thể tích để biết biến đổi nồng độ cả hai ngăn thì nêu giả thiết, như ĐT27 C7c.

Chưa cần tính số: đọc yêu cầu của từng tình huống và chọn hình hoặc phương trình phù hợp. Giải thích lựa chọn bằng một mục trong bảng “Đề hỏi gì” ở đầu bài.

## Ví dụ

**Ví dụ 1 — ĐT28 C7, nghĩ thành lời.** Zn²⁺/Zn có E° = −0,76 V, Fe³⁺/Fe²⁺ có E° = 0,77 V; [Zn²⁺] = 0,10 M, [Fe³⁺] = 0,20 M, [Fe²⁺] = 0,10 M.

1. *Mình cần vẽ gì để chọn cực?* Thang E°: Fe cao hơn nên Fe nhận electron. Tổng $\mathrm{Zn+2Fe^{3+}\to Zn^{2+}+2Fe^{2+}}$.
2. *Nhân Fe với 2 có nhân thế không?* Không. $E^\circ_{pin}=0{,}77-(-0{,}76)=1{,}53$ V.
3. *Đang tính một cực hay cả pin?* Cực Fe riêng có n = 1: $E_{Fe}=0{,}77+0{,}059\lg2=0{,}787761$ V. Cực Zn có n = 2: $E_{Zn}=-0{,}76+0{,}0295\lg0{,}1=-0{,}7895$ V.
4. $E_{pin}=1{,}577261\approx1{,}58$ V. *Có hợp lý không?* Q = 0,025 < 1 nên E tăng so với chuẩn; kết quả đúng chiều đó.

**Ví dụ 2 — vận dụng cùng cách nghĩ vào ĐT26 C7.** Cu/Ag có E° = 0,46 V, [Cu²⁺] = 0,1 M; tìm [Ag⁺] để Epin = 0,4 V.

1. *Tính xuôi hay ngược?* Bài ngược, nên viết $Q=[Cu^{2+}]/[Ag^+]^2$ và Nernst cho toàn pin với n = 2.
2. $\lg Q=2(0{,}46-0{,}4)/0{,}059=2{,}033898$.
3. *Ẩn có số mũ mấy?* Hai: $[Ag^+]^2=0{,}1\times10^{-2{,}033898}$, lấy căn dương cho $[Ag^+]=0{,}03041$ M.
4. *Thay lại có ra 0,4 V không?* Có. Nồng độ Ag⁺ thấp làm thế catot giảm, phù hợp với Epin nhỏ hơn E°pin.

## Tổng kết

Thang thế quyết định chiều pin; sơ đồ hai ngăn giữ đúng đường đi của electron; Nernst điều chỉnh từng vạch thế; chu trình Luther giữ đúng năng lượng khi ghép phản ứng. Trước khi bấm máy, ghi n và điều kiện chuẩn hay khác chuẩn lên nháp.
