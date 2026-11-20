# Tổ hợp thế điện cực (quy tắc Luther)

## Giải thích lý thuyết

Bài này xử lý tình huống bảng thế chưa cho trực tiếp cặp cần tìm. Dùng lại liên hệ ΔG° = −nFE° ở bài trước để ghép phản ứng, tìm thế còn thiếu, rồi quay về cách tính suất điện động pin quen thuộc.

### Vì sao không được cộng các thế?

Hai phản ứng nối tiếp có thể cộng lại thành phản ứng tổng. Năng lượng Gibbs của phản ứng tổng bằng tổng các ΔG°. Vì $\Delta G^\circ=-nFE^\circ$, đại lượng cần cộng là $nE^\circ$.

Nếu bước 1 nhận $n_1$ electron và bước 2 nhận $n_2$ electron:

$$E^\circ_{\text{tong}}=\frac{n_1E^\circ_1+n_2E^\circ_2}{n_1+n_2}.$$

Đây là trung bình có trọng số electron khi hai bước cùng chiều khử nối tiếp. Nếu cần đảo một phản ứng khi ghép, phải đổi dấu ΔG° tương ứng; không áp dụng trung bình máy móc cho mọi phép tổ hợp.

![Chu trình Sn: đường trực tiếp 4e và đường đi qua Sn2+ có hai chặng 2e](images/chapter-7/ec-luther-gibbs.svg)

### Quy trình trên giấy

Viết ba trạng thái oxi hóa thành ba đỉnh. Ghi trên mỗi mũi tên số electron và thế khử. Chọn một đường trực tiếp và một đường vòng có cùng điểm đầu, điểm cuối. Lập phương trình $nE^\circ$ theo hai đường, giải thế chưa biết. Cuối cùng mới dùng hiệu hai thế để tính suất điện động pin.

## Ví dụ

**ĐT17 C7.** Biết $E^\circ(\mathrm{Sn^{2+}/Sn})=-0{,}14$ V và $E^\circ(\mathrm{Sn^{4+}/Sn})=0{,}005$ V. Tìm thế $\mathrm{Sn^{4+}/Sn^{2+}}$.

Đường trực tiếp nhận 4e; đường vòng gồm hai chặng, mỗi chặng nhận 2e:

$$4(0{,}005)=2E^\circ(\mathrm{Sn^{4+}/Sn^{2+}})+2(-0{,}14).$$

Suy ra thế cần tìm 0,15 V. Khi lập pin bằng hai cặp Sn⁴⁺/Sn²⁺ và Sn²⁺/Sn, catot khử Sn⁴⁺, anot oxi hóa Sn kim loại. Phản ứng tổng $\mathrm{Sn^{4+}+Sn\to2Sn^{2+}}$, suất điện động chuẩn $0{,}15-(-0{,}14)=0{,}29$ V.

Kiểm tra: 0,005 nằm giữa −0,14 và 0,15, đúng với trung bình có trọng số. Phép cộng trực tiếp $0{,}005=E^\circ-0{,}14$ sẽ cho 0,145 V, sai nguyên tắc dù số gần đáp án đúng.

Khi làm bài dưới đây, ghi số electron trên từng chặng và lập phương trình nE° trước. Sau khi tìm được thế, kiểm tra nó có nằm giữa hai thế thành phần trong trường hợp trung bình có trọng số không.

## Tổng kết

Cộng phản ứng thì cộng ΔG°, hay $nE^\circ$. Cân bằng electron không làm thay đổi thế khử của một cặp. Sau khi tìm thế chưa biết, chọn catot/anot lại như một bài pin thông thường.
