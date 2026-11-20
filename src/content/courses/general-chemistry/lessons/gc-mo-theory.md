# Thuyết orbital phân tử (MO)

## Giải thích lý thuyết

Bài MO cần một giản đồ có thể **đọc được electron**, không chỉ một dòng cấu hình học thuộc. Bạn sẽ tự dựng cột AO–MO–AO, chọn thứ tự năng lượng, điền mũi tên rồi kiểm tra tổng electron.

### Bắt đầu bằng bảng electron

Với tiểu phân hai nguyên tử AB có điện tích q (có dấu):

$$n_e = v_A + v_B - q$$

Ở đây v là số electron hóa trị: H = 1; B = 3; C = 4; N = 5; O = 6; F = 7. Ví dụ O₂ có 12 e; O₂⁺ có 11 e; O₂⁻ có 13 e. Với chu kỳ 2, bài này vẽ **MO hóa trị từ 2s, 2p** và không cộng electron lõi 1s vào số cần điền. Với H₂, vẽ 1s.

### Quy trình dựng giản đồ MO trong 6 bước

1. **Đếm electron và viết phạm vi giản đồ.** Ghi “12 electron hóa trị” cho O₂ thay vì chỉ ghi “12 electron”.
2. **Vẽ ba cột:** AO của A bên trái, MO ở giữa, AO của B bên phải; mũi tên năng lượng hướng lên. Một vạch là một orbital, không phải một cặp electron.
3. **Chọn thứ tự mức năng lượng trước khi điền e**, theo bảng bên dưới hoặc giản đồ đề đã cho. Với mỗi bộ π, vẽ **hai vạch ngang mức nhau**; đó là hai orbital khác nhau cùng năng lượng.
4. **Điền từ thấp lên cao.** Mỗi orbital tối đa hai electron ngược spin. Ở hai orbital π đồng mức, điền [↑][↑] trước rồi mới ghép đôi: [↑↓][↑], sau đó [↑↓][↑↓].
5. **Đọc cấu hình bằng cách đếm mũi tên trên từng mức.** Tổng số mũi tên ở cột MO phải bằng số electron ở bước 1; không cộng lại electron ở cả ba cột.
6. **Tách hai kết quả:** đếm e liên kết và phản liên kết để tính BO; đếm orbital chỉ có một mũi tên để xét từ tính. Xem [bài đọc kết quả MO](#/courses/general-chemistry/lessons/gc-mo-bond-order) để so sánh các ion.

Ở bước 2, mở khung MO để tự vẽ. Chưa cần vẽ hình dạng thùy orbital; đây là giản đồ **năng lượng**.

### Chọn thứ tự năng lượng nào?

Trong mô hình MO hóa trị đơn giản cho các phân tử hai nguyên tử đồng hạch chu kỳ 2, dùng hai thứ tự sau (từ thấp lên cao). Trong mỗi ký hiệu π có **hai orbital**.

| Loại | Phạm vi dùng trong bài | Thứ tự |
|---|---|---|
| I | O₂, F₂ và dãy ion tương ứng | σ2s < σ*2s < σ2p < π2p < π*2p < σ*2p |
| II | Li₂ đến N₂ và dãy ion tương ứng | σ2s < σ*2s < π2p < σ2p < π*2p < σ*2p |

![Hai thứ tự MO hóa trị: O₂ và N₂](images/chapter-2/mo-diagram-types.svg)

**Hai nguyên tử khác nhau:** dùng giản đồ đề cho hoặc quy ước cụ thể của bài. Không có quy tắc phổ quát “đếm tổng electron hóa trị rồi chọn loại” cho mọi phân tử dị hạch. CO và CN⁻ trong các bài cơ bản ở đây được xử lý bằng sơ đồ tương tự N₂; điều này không biến số electron thành quy luật xác định mọi mức năng lượng. Với NO và ion, thứ tự thực tế có thể khác; khi đề dùng một sơ đồ giản lược, hãy nêu rõ và giữ sơ đồ đó trong phép so sánh. AO của nguyên tử âm điện hơn thường được vẽ thấp hơn.

### Hiểu các nhãn để đếm cho đúng

MO liên kết không có dấu *; electron trong đó làm tăng BO. MO phản liên kết có dấu *, làm giảm BO. MO không liên kết, nếu mô hình có, không đóng góp vào hiệu số này. Các AO có đối xứng phù hợp và năng lượng đủ gần mới tổ hợp đáng kể; hai AO tổ hợp cho hai MO, số orbital được bảo toàn.

![Tổ hợp AO tạo MO liên kết và phản liên kết](images/chapter-2/mo-combination.svg)

Đối chiếu các quy tắc cơ bản: [OpenStax Chemistry 2e, 8.4 — Molecular Orbital Theory](https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory). Các lựa chọn giản lược cho phân tử dị hạch ở trên là phạm vi thực hành của bài này, không phải kết luận chung của nguồn.

### Công thức trọng tâm

> **Công thức — Bậc liên kết (thuyết MO)**
>
> $$N = \frac{n_{\text{lk}} - n_{\text{plk}}}{2}$$
>
> Trong đó: $N$: bậc liên kết (số liên kết); $n_{\text{lk}}$: số electron trên các MO liên kết; $n_{\text{plk}}$: số electron trên các MO phản liên kết.
>
> *Điều kiện:* Đếm electron trên toàn bộ MO được xét (thường là MO hóa trị). N = 0 → phân tử không bền, không tồn tại (He₂, Be₂, Ne₂).

## Ví dụ

### Làm mẫu H₂: giản đồ nhỏ nhất

1. Hai H góp tổng 2 e, mỗi nguyên tử có một AO 1s.
2. Ở cột giữa vẽ σ1s thấp và σ*1s cao.
3. Điền cả hai electron vào σ1s: [↑↓]. Để σ*1s trống.
4. Cấu hình: (σ1s)². BO = (2 − 0)/2 = **1**. Không có electron độc thân → **nghịch từ**.

**Bạn vẽ:** mở H₂ trong bàn MO, sau đó vẽ lại từ khung trống. Nếu thêm e mà đặt nó vào σ1s đã có hai electron, bạn đã vi phạm Pauli.

### Làm mẫu O₂: cách điền π quyết định từ tính

1. O₂: 6 + 6 = **12 electron hóa trị**. Chọn Loại I.
2. Điền bốn e đầu: σ2s [↑↓], σ*2s [↑↓]. Còn tám e.
3. σ2p [↑↓]. Còn sáu e.
4. Hai π2p: [↑↓][↑↓]. Còn hai e.
5. Hai π*2p: **[↑][↑]**; không viết [↑↓][ ]. σ*2p còn trống.
6. Cấu hình: (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)². Đếm n_lk = 8, n_plk = 4 → BO = **2**. Hai electron độc thân → **thuận từ**.

**Bạn vẽ:** chọn O₂. Tự điền mũi tên, đặc biệt hai orbital π*. Viết hai dòng kết luận riêng cho BO và từ tính.

### Chuyển sang N₂

N₂ có 10 electron hóa trị, chọn Loại II. Sau σ2s²σ*2s², điền bốn e vào cặp π2p rồi hai e vào σ2p. BO = (8 − 2)/2 = **3**; mọi e ghép đôi → nghịch từ.

**Bạn vẽ:** chọn N₂, đặt lại vị trí σ2p và π2p trước khi điền. Không chỉ xóa hai mũi tên khỏi hình O₂ mà giữ nguyên thứ tự mức.

### Video bài giảng tham khảo

- [Thuyết orbital phân tử (MO) (13:59:26–14:44:39)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=50366s)

Bài từng bước dưới đây giúp kiểm tra quy trình dựng MO. Khi sai, quay về bước đếm e hoặc chọn thứ tự mức trước khi sửa kết luận.

## Tổng kết

- Đếm e → chọn thứ tự → vẽ orbital → điền mũi tên → BO và electron độc thân.
- π có hai orbital cùng mức; π² được điền [↑][↑] theo Hund.
- Chu kỳ 2 dùng MO hóa trị thì chỉ đếm e hóa trị, không trộn với tổng electron.
- Giản đồ dị hạch phải theo mô hình hoặc dữ kiện cụ thể; không chọn chỉ bằng tổng e.
