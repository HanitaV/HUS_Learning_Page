# Bậc liên kết, từ tính và độ bền theo thuyết MO

## Giải thích lý thuyết

Đề MO thường hỏi cả bậc liên kết, từ tính và so sánh các ion. Sau khi [dựng đúng giản đồ](#/courses/general-chemistry/lessons/gc-mo-theory), hãy giải bằng bảng kiểm electron, không suy độ bền từ dấu điện tích.

### Quy trình đọc và so sánh trong 5 bước

1. **Viết cấu hình đầy đủ trên phạm vi đã chọn.** Kiểm tra tổng electron và cách điền Hund ở các π cùng mức.
2. **Tách n_lk và n_plk.** Chỉ dấu * mới chỉ phản liên kết; cả σ lẫn π đều có thể là liên kết hoặc phản liên kết.
3. **Tính BO = (n_lk − n_plk)/2.** Ghi phép thế số, không chỉ đáp số.
4. **Đếm electron độc thân trên từng orbital.** Còn e độc thân → thuận từ; tất cả ghép đôi → nghịch từ. BO nguyên không có nghĩa là nghịch từ: O₂ có BO = 2 nhưng thuận từ.
5. **Với ion, xác định MO mất hoặc nhận e rồi làm lại bước 2–4.** Trong cùng họ phân tử/ion ở mô hình bài này, BO lớn hơn thường ứng với liên kết bền hơn, ngắn hơn. Không dùng BO một mình để xếp độ bền mọi phân tử khác nguyên tố.

Chuẩn bị khung MO trống và thêm bảng ba cột: số e, BO, số e độc thân.

### Mất hoặc nhận electron thay đổi BO ra sao?

| Thao tác | Thay đổi BO |
|---|---|
| Bớt 1 e liên kết | −0,5 |
| Thêm 1 e liên kết | +0,5 |
| Bớt 1 e phản liên kết | +0,5 |
| Thêm 1 e phản liên kết | −0,5 |

Ion dương không mặc nhiên yếu hơn: O₂⁺ mất e **phản liên kết**, còn N₂⁺ mất e **liên kết**.

### Giới hạn của kết luận “có tồn tại không”

Trong bài MO cơ bản, BO > 0 cho biết có đóng góp liên kết ròng; BO = 0 dự đoán không có liên kết cộng hóa trị ròng ở mô hình đó. Đây không phải chứng minh tuyệt đối rằng một hệ không thể tồn tại dưới mọi điều kiện hoặc nhờ tương tác yếu. Các câu phân loại Li₂, Be₂, Ne₂ trong bộ bài dùng chính mô hình MO đơn giản này.

### Với CO, CN và NO cần ghi thêm gì?

Ghi rõ sơ đồ năng lượng đang dùng. CO và CN⁻ được mô tả bằng sơ đồ hóa trị tương tự N₂ trong các ví dụ cơ bản này. Không áp dụng quy tắc tổng electron để xác định thứ tự MO cho mọi phân tử dị hạch; nếu đề cho sơ đồ hoặc quy ước riêng thì dùng theo đề. Với NO và ion, nêu mô hình giản lược đã chọn và theo dõi các MO biên theo sơ đồ đó.

Đối chiếu cách tính BO và liên hệ electron độc thân với từ tính: [OpenStax Chemistry 2e, 8.4](https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory).

### Công thức trọng tâm

> **Công thức — Bậc liên kết (thuyết MO)**
>
> $$N = \frac{n_{\text{lk}} - n_{\text{plk}}}{2}$$
>
> Trong đó: $N$: bậc liên kết (số liên kết); $n_{\text{lk}}$: số electron trên các MO liên kết; $n_{\text{plk}}$: số electron trên các MO phản liên kết.
>
> *Điều kiện:* Đếm electron trên toàn bộ MO được xét (thường là MO hóa trị). N = 0 → phân tử không bền, không tồn tại (He₂, Be₂, Ne₂).

## Ví dụ

### Làm mẫu họ O₂: đi từng ion trên một sơ đồ

O₂ có cấu hình hóa trị (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)². Mười e đầu là các lớp đã ghép đôi; khác biệt trong bảng nằm ở hai orbital π*2p.

| Tiểu phân | e hóa trị | Hai orbital π* | n_lk | n_plk | BO | e độc thân |
|---|---|---|---|---|---|---|
| O₂⁺ | 11 | [↑][ ] | 8 | 3 | (8−3)/2 = 2,5 | 1 |
| O₂ | 12 | [↑][↑] | 8 | 4 | (8−4)/2 = 2 | 2 |
| O₂⁻ | 13 | [↑↓][↑] | 8 | 5 | (8−5)/2 = 1,5 | 1 |

1. Bắt đầu ở O₂: đếm 12 mũi tên; kiểm tra hai e π* nằm riêng.
2. O₂⁺: bớt một mũi tên ở MO đang chiếm cao nhất, tức π*. Vì bớt e phản liên kết nên BO tăng 0,5.
3. O₂⁻: thêm một mũi tên vào π*. Do đã có hai e độc thân, e thứ ba ghép đôi vào một trong hai orbital, BO giảm 0,5.
4. **Kết luận:** cả ba thuận từ. Độ bền liên kết theo mô hình: O₂⁺ > O₂ > O₂⁻; độ dài theo thứ tự ngược lại.

**Bạn vẽ:** mở O₂, O₂⁺, O₂⁻. Mỗi lần đổi điện tích, dự đoán nơi thêm hoặc bớt e trước khi kiểm tra.

### Làm mẫu họ N₂: cùng đổi điện tích, kết quả khác

1. N₂: 10 e hóa trị; Loại II. Cấu hình (σ2s)²(σ*2s)²(π2p)⁴(σ2p)².
2. N₂⁺: mất một e ở σ2p **liên kết** → n_lk = 7, n_plk = 2, BO = 2,5; một e độc thân.
3. N₂⁻: nhận một e vào π*2p → n_lk = 8, n_plk = 3, BO = 2,5; một e độc thân.
4. N₂ có BO = 3, nghịch từ; hai ion có BO = 2,5, thuận từ. N₂ được dự đoán có liên kết bền hơn, ngắn hơn hai ion. Không xếp tiếp hai ion chỉ từ BO bằng nhau.

**Bạn vẽ:** mở N₂. Chỉ ra bằng mũi tên vị trí lấy e để tạo cation và vị trí thêm e để tạo anion, rồi làm bài kiểm tra.

### Làm mẫu CO và CN⁻

1. CO có 4 + 6 = 10 e hóa trị. CN⁻ có 4 + 5 + 1 = 10 e hóa trị.
2. Theo sơ đồ giản lược dùng ở đây, cả hai có các mức chiếm (σ2s)²(σ*2s)²(π2p)⁴(σ2p)².
3. n_lk = 8, n_plk = 2 → BO = 3; mọi e ghép đôi → nghịch từ.
4. Hai nguyên tử khác nhau nên AO hai bên không ngang mức; cùng số e không có nghĩa mọi năng lượng MO và độ dài liên kết giống nhau.

**Bạn vẽ:** CO và CN⁻. Kiểm tra AO của nguyên tử âm điện hơn nằm thấp hơn, rồi ghi riêng giả thiết sơ đồ.

Cuối cùng, dùng quy tắc bỏ e phản liên kết để giải thích dữ liệu O₂⁺ và F₂⁺. Trình bày orbital bị lấy e trước kết luận về độ bền.

### Video bài giảng tham khảo

- [Thuyết orbital phân tử (MO) (13:59:26–14:44:39)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=50366s)

## Tổng kết

- BO và từ tính được đọc bằng hai phép đếm khác nhau.
- Mất e phản liên kết làm BO tăng; mất e liên kết làm BO giảm.
- So sánh ion phải theo dõi MO biên, không suy từ dấu điện tích.
- Nêu mô hình dùng cho phân tử dị hạch; giới hạn kết luận độ bền và tồn tại trong phạm vi mô hình.
