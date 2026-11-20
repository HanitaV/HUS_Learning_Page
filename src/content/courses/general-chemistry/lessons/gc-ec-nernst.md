# Phương trình Nernst; liên hệ E°, ΔG°, K

## Giải thích lý thuyết

Bài trước chọn cực bằng thế chuẩn; bài này xét điều gì thay đổi khi nồng độ khác chuẩn. Chia lời giải thành ba việc: cân bằng phản ứng để xác định n, tính E bằng Nernst, rồi chọn đúng E hay E° khi liên hệ với Gibbs và K.

Cách viết thương số Q và hằng số K được trình bày ở [Hằng số cân bằng Kc, Kp và thương số Q](#/courses/general-chemistry/lessons/gc-eq-constant).

### Nồng độ làm thay đổi thế điện cực

Phương trình Nernst áp dụng cho một nửa phản ứng đã cân bằng. Trong các bài tập của môn học, lấy hoạt độ xấp xỉ nồng độ mol/L chia cho nồng độ chuẩn 1 mol/L, khí theo áp suất chia cho 1 atm; chất rắn tinh khiết và nước lỏng tinh khiết có hoạt độ bằng 1. Hệ số 0,059 V là giá trị quy ước thường dùng ở 25 °C.

Với $a\mathrm{Ox}+ne^-\to b\mathrm{Kh}$:

$$E=E^\circ+\frac{0{,}059}{n}\lg\frac{[\mathrm{Ox}]^a}{[\mathrm{Kh}]^b}.$$

Các chất khác trong nửa phản ứng, như H⁺, cũng phải có trong tỉ số với số mũ đúng hệ số. Tăng dạng Ox làm thế khử tăng; tăng dạng Kh làm thế khử giảm.

![Nernst: thang E của Fe và Zn dịch khỏi giá trị chuẩn theo nồng độ](images/chapter-7/ec-nernst-shift.svg)

Với **toàn phản ứng pin**, thương số $Q$ viết sản phẩm chia chất đầu, nên dấu là trừ:

$$E_{pin}=E^\circ_{pin}-\frac{0{,}059}{n}\lg Q.$$

Hai cách cho cùng kết quả nếu cân bằng phản ứng và dùng đúng $n$. Ở cặp Fe³⁺/Fe²⁺, $n=1$ khi tính riêng cực Fe; với pin Zn/Fe, $n=2$ khi tính cả pin.

### Từ E° sang Gibbs và K

$$\Delta G^\circ=-nFE^\circ_{pin},\qquad \lg K=\frac{nE^\circ_{pin}}{0{,}059}.$$

Dùng $F=96500$ C/mol electron, thế theo V thì ΔG° thu được J/mol phản ứng. Muốn kJ/mol, chia 1000. Đây là cùng một liên hệ với [Gibbs và cân bằng](#/courses/general-chemistry/lessons/gc-gibbs-equilibrium). $E^\circ>0$ cho ΔG° âm và $K>1$. Không dùng $E$ khác chuẩn để tính ΔG°.

### Bài ngược và pin ngừng

Đề hỏi nồng độ: viết $E$ theo logarit của ẩn, cô lập logarit rồi lấy lũy thừa 10. Đề hỏi pin ngừng: đặt $E_{pin}=0$, tức hai thế khử bằng nhau và $Q=K$. Phải biết hoặc nêu giả thiết nồng độ nào giữ gần như không đổi.

![Điều kiện pin ngừng hoạt động](images/chapter-7/ec-cell-stops.svg)

## Ví dụ

**Ví dụ cầm tay 6.4 (ĐT28 C7).** Cho [Fe³⁺] = 0,20 M, [Fe²⁺] = 0,10 M và [Zn²⁺] = 0,10 M.

1. Cực Fe có $n=1$: $E_{Fe}=0{,}77+0{,}059\lg(0{,}20/0{,}10)=0{,}787761$ V.
2. Zn rắn có hoạt độ 1, cực Zn có $n=2$: $E_{Zn}=-0{,}76+0{,}0295\lg0{,}10=-0{,}7895$ V.
3. Trừ hai thế khử: $E_{pin}=1{,}577261\approx1{,}58$ V.
4. Kiểm tra cả pin: $Q=[Zn^{2+}][Fe^{2+}]^2/[Fe^{3+}]^2=0{,}025<1$, nên E phải lớn hơn E° = 1,53 V.

**Bài ngược ĐT26 C7.** Cu/Ag có E° = 0,46 V, $n=2$. Với [Cu²⁺] = 0,1 M và E = 0,4 V, $\lg(0{,}1/[Ag^+]^2)=2(0{,}46-0{,}4)/0{,}059$. Suy ra $[Ag^+]=0{,}03041$ M. Đừng quên lấy căn vì Ag⁺ có số mũ 2 trong Q.

Vận dụng vào một pin khác: viết hai nửa phản ứng và tính số electron trước khi thay số. Đề gồm cả điều kiện chuẩn và khác chuẩn; ghi rõ phần nào dùng E°, phần nào dùng Nernst.

## Tổng kết

Viết nửa phản ứng trước khi lập tỉ số Nernst. Giữ số chưa làm tròn đến phép trừ cuối. Khi giải ngược, kiểm tra dấu: giảm [Ag⁺] phải làm thế Ag và suất điện động Cu/Ag giảm.
