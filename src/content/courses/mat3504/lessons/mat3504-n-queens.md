# Bài toán xếp hậu

## Bài toán

Đặt $n$ quân hậu lên bàn cờ $n\times n$ sao cho không quân nào ăn được quân nào. Hai hậu ăn nhau nếu cùng hàng, cùng cột hoặc cùng đường chéo. Đầu ra: một cách đặt (hoặc số cách đặt, hoặc mọi cách đặt). Ví dụ $n=4$ có đúng 2 cách: hậu ở các cột `(1,3,0,2)` và `(2,0,3,1)` theo từng hàng (cột đánh số từ 0). Mô phỏng bên dưới đặt từng hậu và lùi khi bị chiếu.

## Kiến thức sử dụng

- [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking): dựng cấu hình theo từng hàng; `Try(i)` chọn cột cho hàng $i$, khôi phục khi lùi.
- [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): mỗi hàng là một lời gọi, độ sâu $n$.
- [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force): đặt $n$ hậu vào $n^2$ ô bất kỳ có $\binom{n^2}{n}$ cách; quay lui thu hẹp xuống còn $n^n$ rồi $n!$ rồi nhỏ hơn nữa.

## Phân tích

Vì mỗi hàng chứa đúng một hậu, ta không cần quyết định "hậu ở hàng nào", chỉ cần gán $x_i$ là **cột** của hậu ở hàng $i$. Điều đó đã loại ràng buộc cùng hàng. Còn lại hai ràng buộc, kiểm tra được trong $O(1)$ bằng ba mảng đánh dấu:

- Cùng cột: cột $c$ đã có hậu. Mảng `col[c]`.
- Cùng đường chéo chính (hướng xuống phải): các ô $(r,c)$ có $r-c$ không đổi. Mảng `d1[r - c + n - 1]` (cộng $n-1$ để chỉ số không âm).
- Cùng đường chéo phụ (hướng xuống trái): các ô có $r+c$ không đổi. Mảng `d2[r + c]`.

Ô $(r,c)$ được chấp nhận khi cả ba ô đánh dấu tương ứng còn trống. Khi đặt thì bật ba dấu, khi lùi thì tắt lại. Đây đúng là bước "ghi nhận trạng thái" và "khôi phục" trong [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking).

## Lời giải từng bước

$n=4$, thử cột từ 0 đến 3. Mỗi hậu ghi là $(\text{hàng},\text{cột})$.

| Bước | Hàng | Thử cột | Kết quả |
|---|---|---|---|
| 1 | 0 | 0 | đặt (0,0) |
| 2 | 1 | 0 | cùng cột, bỏ |
| 3 | 1 | 1 | cùng đường chéo với (0,0), bỏ |
| 4 | 1 | 2 | đặt (1,2) |
| 5 | 2 | 0, 1, 2, 3 | 0 cùng cột; 1 chéo với (1,2); 2 cùng cột; 3 chéo với (1,2). Cụt |
| 6 | 1 | 3 | lùi, hủy (1,2), đặt (1,3) |
| 7 | 2 | 1 | đặt (2,1) (không ăn (0,0) và (1,3)) |
| 8 | 3 | 0..3 | 0 và 1 cùng cột; 2 chéo với (2,1); 3 cùng cột với (1,3). Cụt |
| 9 | ... | | lùi hết hàng 2 và hàng 1, hủy (0,0), thử $x_0=1$ |
| 10 | 0, 1, 2, 3 | | $(0,1),(1,3),(2,0),(3,2)$: hợp lệ, ghi nhận nghiệm `(1,3,0,2)` |

Tiếp tục với $x_0=2$ thu được nghiệm đối xứng `(2,0,3,1)`; $x_0=3$ không có nghiệm. Với $n=4$ không gian đầy đủ có $4^4=256$ cách chọn cột, nhưng quay lui chỉ thăm vài chục nút.

## Cài đặt

Đếm số nghiệm và in một nghiệm. Nếu chỉ cần một nghiệm (như mã mẫu `place` có kiểu trả về `boolean`), trả về `true` ngay khi đặt xong hàng cuối.

```java
public class NQueens {
    static int n;
    static int[] col;            // col[r] = cột của hậu ở hàng r
    static boolean[] usedCol, d1, d2;
    static int count = 0;

    static void tryRow(int r) {
        for (int c = 0; c < n; c++) {
            if (usedCol[c] || d1[r - c + n - 1] || d2[r + c]) continue;
            col[r] = c;
            usedCol[c] = d1[r - c + n - 1] = d2[r + c] = true;   // ghi nhận
            if (r == n - 1) {
                count++;
                if (count == 1) System.out.println(java.util.Arrays.toString(col));
            } else {
                tryRow(r + 1);
            }
            usedCol[c] = d1[r - c + n - 1] = d2[r + c] = false;  // khôi phục
        }
    }

    public static void main(String[] args) {
        n = 6;
        col = new int[n];
        usedCol = new boolean[n];
        d1 = new boolean[2 * n - 1];
        d2 = new boolean[2 * n - 1];
        tryRow(0);
        System.out.println(count);   // 4 với n = 6
    }
}
```

Số nghiệm chuẩn: $n=1:1$, $n=2:0$, $n=3:0$, $n=4:2$, $n=5:10$, $n=6:4$, $n=8:92$. Dùng các số này để kiểm tra chương trình.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Không gian chưa cắt | $n^n$ cách chọn cột, hoặc $n!$ nếu đòi cột đôi một khác nhau |
| Xấu nhất của quay lui | vẫn mũ (cỡ $O(n!)$) nhưng số nút thực tế nhỏ hơn rất nhiều |
| Kiểm tra một ô | $O(1)$ nhờ ba mảng đánh dấu (nếu so từng hậu cũ thì $O(n)$) |
| Bộ nhớ | $O(n)$ |

Không có công thức đóng cho số nghiệm; thuật toán chỉ cải thiện hằng số và nhánh bị cắt, không phá được độ phức tạp mũ. Về ký hiệu xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Đánh chỉ số đường chéo chính `r - c` mà không cộng `n - 1`, dẫn tới chỉ số âm.
- Chỉ kiểm tra cột và đường chéo với hậu ngay hàng trên, thay vì mọi hàng đã đặt.
- Quên tắt ba dấu khi lùi, làm các nhánh sau bị loại oan và mất nghiệm.
- Lưu `col` bằng tham chiếu khi gặp nghiệm mà không sao chép; các lần lùi sau ghi đè.
- Nhầm số nghiệm duy nhất với tổng số nghiệm: $n=8$ có 92 cách, trong đó 12 cách khác nhau nếu xem phép quay và lật là như nhau.

## Luyện tập

- [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error) (Bài 1 ý 3 và Bài 2 của phiếu quay lui): viết chương trình xếp hậu; tự kiểm tra bằng bảng số nghiệm ở trên.
- [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings): nếu chưa chắc về khung quay lui, làm lại bài này trước.
- Biến thể: xếp $n$ quân xe không ăn nhau (chỉ cần cột khác nhau, tức hoán vị), so sánh số nghiệm $n!$.

## Tự kiểm tra

1. Hậu ở $(2,1)$ và $(r,c)=(4,3)$ có ăn nhau không? Hai ô nào dùng chung chỉ số `d1`, `d2`?

> **Đáp án**
> Có: $r-c$ đều bằng $1$, cùng đường chéo chính, nên cùng chỉ số `d1`. Còn `d2` là $r+c$: $3$ và $7$, khác nhau.

2. Với $n=3$, quay lui thử hàng 0 cột 0 thì có đi được tới hàng 2 không?

> **Đáp án**
> Đặt $(0,0)$. Hàng 1: cột 0 cùng cột, cột 1 chéo; chỉ cột 2 được: $(1,2)$. Hàng 2: cột 0 cùng cột với $(0,0)$, cột 1 chéo với $(1,2)$, cột 2 cùng cột. Cụt, nên cùng với các lựa chọn khác ở hàng 0, $n=3$ vô nghiệm.

3. Vì sao ta dùng một biến cột cho mỗi hàng thay vì tọa độ $(r,c)$ của từng hậu?

> **Đáp án**
> Mỗi hàng đúng một hậu nên vị trí hàng đã biết; chỉ cần cột. Biểu diễn này loại sẵn ràng buộc cùng hàng và thu không gian từ $\binom{n^2}{n}$ xuống $n^n$.
