# Cấu hình electron

## Giải thích lý thuyết

**Cấu hình electron** cho biết electron phân bố vào các lớp và phân lớp như thế nào. Bài này dạy ba quy tắc (Aufbau, Pauli, Hund) và cách viết cấu hình cho nguyên tử và ion. Cấu hình ngoài cùng quyết định tính chất hóa học, nên đây là cầu nối sang chương liên kết.

### 1. Nguyên lý vững bền (Aufbau)

Electron chiếm các orbital có năng lượng **từ thấp đến cao**. Thứ tự (sơ đồ trang 14 của bài giảng):

$$1s \to 2s \to 2p \to 3s \to 3p \to 4s \to 3d \to 4p \to 5s \to 4d \to 5p \to 6s \to 4f \to 5d \to 6p \to 7s \to 5f \to 6d \to 7p$$

> **Ghi chú**
>
> **4s được điền trước 3d** vì có năng lượng thấp hơn. Quy tắc $n + l$: tổng nhỏ hơn điền trước; nếu bằng nhau thì $n$ nhỏ hơn điền trước.

### 2. Nguyên lý loại trừ Pauli

Trong một nguyên tử không có hai electron có cùng bộ bốn số lượng tử. Hệ quả: **mỗi orbital chứa tối đa 2 electron có spin ngược chiều** (↑↓).

### 3. Quy tắc Hund

Trong cùng một phân lớp, electron phân bố sao cho **tổng số electron độc thân là lớn nhất**: điền mỗi orbital một electron (spin song song) trước, rồi mới ghép đôi.

Bảng ở trang 15 minh họa cho chu kỳ 3:

| Z | Nguyên tố | 3s | 3p | Cấu hình rút gọn |
|---|---|---|---|---|
| 11 | Na | ↑ | — | $[\mathrm{Ne}]\,3s^1$ |
| 13 | Al | ↑↓ | ↑ | $[\mathrm{Ne}]\,3s^23p^1$ |
| 14 | Si | ↑↓ | ↑ ↑ | $[\mathrm{Ne}]\,3s^23p^2$ |
| 15 | P | ↑↓ | ↑ ↑ ↑ | $[\mathrm{Ne}]\,3s^23p^3$ |
| 16 | S | ↑↓ | ↑↓ ↑ ↑ | $[\mathrm{Ne}]\,3s^23p^4$ |
| 18 | Ar | ↑↓ | ↑↓ ↑↓ ↑↓ | $[\mathrm{Ne}]\,3s^23p^6$ |

### Cách viết cấu hình

1. Xác định tổng số electron (Z với nguyên tử; $Z - q$ với ion).
2. Điền theo thứ tự năng lượng, mỗi phân lớp tối đa: s² p⁶ d¹⁰ f¹⁴.
3. Viết lại theo thứ tự lớp (ví dụ $3d^6 4s^2$) hoặc dạng rút gọn với lõi khí hiếm $[\mathrm{He}], [\mathrm{Ne}], [\mathrm{Ar}]$…

> **Lỗi thường gặp**
>
> Khi viết cấu hình **ion dương**, tách electron ở **lớp ngoài cùng** (n lớn nhất) trước, không phải electron điền sau cùng. Với kim loại chuyển tiếp là tách 4s trước 3d, ví dụ $\mathrm{Fe^{2+}}$ là $[\mathrm{Ar}]\,3d^6$.

### Electron hóa trị

Electron lớp ngoài cùng (với nguyên tố nhóm A) quyết định tính chất hóa học và khả năng tạo liên kết. Đây là cầu nối sang [chương 2](#/courses/general-chemistry/lessons/gc-bond-concepts).

## Ví dụ

**Ví dụ 1.** Viết cấu hình của O ($Z = 8$) và đếm electron độc thân.

1. Bước 1: có 8 electron, điền $1s^2\,2s^2\,2p^4$.
2. Bước 2: phân lớp 2p có 4 electron theo Hund: ↑↓ ↑ ↑.
3. Bước 3: có 2 electron độc thân; 6 electron hóa trị ($2s^2 2p^4$).

**Ví dụ 2.** Viết cấu hình của Fe ($Z = 26$) và ion $\mathrm{Fe^{3+}}$.

1. Bước 1: Fe có 26 electron: $[\mathrm{Ar}]\,3d^6 4s^2$.
2. Bước 2: $\mathrm{Fe^{3+}}$ có $26 - 3 = 23$ electron; tách 2 electron lớp ngoài cùng (4s) trước, rồi 1 electron 3d.
3. Bước 3: kết quả $[\mathrm{Ar}]\,3d^5$.

### Video bài giảng tham khảo

- [Cấu hình electron (8:32:19–9:15:17)](https://www.youtube.com/watch?v=6OV3tmt9uhs&t=30739s)

## Tổng kết

- Vững bền: điền từ năng lượng thấp đến cao (4s trước 3d).
- Pauli: mỗi orbital tối đa 2 electron, spin ngược chiều.
- Hund: số electron độc thân cực đại trong một phân lớp.
- Cation: tách electron lớp ngoài cùng trước.
- Electron hóa trị quyết định khả năng tạo liên kết.
