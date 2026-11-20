# Nhánh cận (Branch and Bound)

## Vì sao cần

[Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking) liệt kê mọi nghiệm; với bài toán tối ưu (tìm nghiệm có $f$ nhỏ nhất) ta phải duyệt hết rồi so, và số nghiệm thường quá lớn. Nhánh cận (branch and bound) cải tiến quay lui bằng một ý đơn giản: luôn giữ phương án tốt nhất đã tìm được, và bỏ cả nhánh nếu có thể chứng minh nhánh ấy không cho phương án tốt hơn. "Chứng minh" ở đây dựa vào một hàm cận. Mô phỏng bên dưới cho thấy nhánh bị cắt khi cận đạt tới giá trị kỷ lục.

## Ý tưởng

Bài toán: tìm $\min\{f(x): x\in D\}$ với nghiệm $x=(x_1,\dots,x_n)$ được xây dần như ở quay lui. Một bộ phận $(x_1,\dots,x_i)$ gọi là lời giải bộ phận cấp $i$.

**Hàm cận dưới** $g$ xác định trên các lời giải bộ phận sao cho

$$g(x_1,\dots,x_i)\;\le\;\min\{\,f(a)\;:\;a \text{ là nghiệm đầy đủ mở rộng từ } (x_1,\dots,x_i)\,\}.$$

Tức $g$ không vượt quá giá trị của mọi phương án có thể thu được bằng cách đi tiếp. Gọi $f^*$ là giá trị tốt nhất đã biết (phương án mẫu, ban đầu là $+\infty$). Quy tắc cắt:

$$g(x_1,\dots,x_i)\;\ge\;f^* \;\Rightarrow\; \text{bỏ nhánh } (x_1,\dots,x_i).$$

Lý do đúng: mọi nghiệm trong nhánh có $f\ge g\ge f^*$, không tốt hơn phương án đang có. Nếu một nghiệm đầy đủ có $f<f^*$ thì cập nhật $f^*$ và nghiệm tương ứng. Cận càng sát giá trị thật thì cắt càng nhiều; cận $g$ phải thật sự là cận dưới, nếu không ta có thể cắt mất nghiệm tối ưu. Với bài tìm lớn nhất thì đối xứng: dùng cận trên và cắt khi $g\le f^*$.

**Cận đơn giản nhất** là chi phí đã tích lũy $g=\text{cost}(x_1..x_i)$. Điều này chỉ đúng khi mọi chi phí còn lại **không âm**, vì khi đó đi tiếp chỉ làm chi phí tăng. Nếu có chi phí âm, chi phí bộ phận không còn là cận dưới. Cận tốt hơn cộng thêm ước lượng chi phí tối thiểu của phần còn lại (như ví dụ bên dưới).

## Ví dụ chạy tay

Bài phân công: 3 người $W_1,W_2,W_3$ làm 3 việc, mỗi người một việc khác nhau, tổng chi phí nhỏ nhất. Ma trận chi phí $c[i][j]$:

| | Việc 1 | Việc 2 | Việc 3 | Min dòng |
|---|---|---|---|---|
| $W_1$ | 9 | 2 | 7 | 2 |
| $W_2$ | 6 | 4 | 3 | 3 |
| $W_3$ | 5 | 8 | 1 | 1 |

Cận: $g=$ chi phí đã gán $+$ tổng min dòng của các người chưa gán (mỗi người còn lại chắc chắn tốn ít nhất min dòng của mình). Đây là cận dưới hợp lệ và các chi phí không âm. Duyệt theo thứ tự người, thử việc 1, 2, 3.

| Bước | Lời giải bộ phận (người → việc) | Chi phí | $g$ | $f^*$ | Quyết định |
|---|---|---|---|---|---|
| 1 | $W_1\to1$ | 9 | $9+3+1=13$ | $\infty$ | đi tiếp |
| 2 | $W_1\to1,W_2\to2$, rồi $W_3\to3$ | 14 | 14 | $\infty$ | nghiệm đầy đủ, $f^*=14$ |
| 3 | $W_1\to1,W_2\to3$ | 12 | $12+1=13$ | 14 | $13<14$, đi tiếp; $W_3\to2$ cho 20, không tốt hơn |
| 4 | $W_1\to2$ | 2 | $2+3+1=6$ | 14 | đi tiếp |
| 5 | $W_1\to2,W_2\to1$, rồi $W_3\to3$ | 9 | 9 | 14 | nghiệm đầy đủ, $f^*=9$ |
| 6 | $W_1\to2,W_2\to3$, rồi $W_3\to1$ | 10 | 10 | 9 | $10\ge9$, không cập nhật |
| 7 | $W_1\to3$ | 7 | $7+3+1=11$ | 9 | $11\ge9$: **cắt cả nhánh** (bỏ 2 nghiệm) |

Kết quả tối ưu là 9 với $W_1\to2$, $W_2\to1$, $W_3\to3$. Duyệt đầy đủ có $3!=6$ nghiệm; ở đây ta không phải xét 2 nghiệm của nhánh $W_1\to3$. Với bài lớn hơn, phần được cắt tăng rất nhanh.

## Cài đặt

```java
public class Assignment {
    static int n;
    static int[][] c;
    static int[] restMin;          // restMin[i] = tổng min dòng của các dòng i..n-1
    static boolean[] used;
    static int[] cur, bestAssign;
    static int best = Integer.MAX_VALUE;

    static void tryRow(int i, int cost) {
        if (i == n) {
            if (cost < best) {
                best = cost;
                bestAssign = cur.clone();
            }
            return;
        }
        for (int j = 0; j < n; j++) {
            if (used[j]) continue;
            int c1 = cost + c[i][j];
            if (c1 + restMin[i + 1] >= best) continue;    // cắt: cận dưới không tốt hơn
            used[j] = true;
            cur[i] = j;
            tryRow(i + 1, c1);
            used[j] = false;                               // khôi phục
        }
    }

    public static void main(String[] args) {
        c = new int[][]{{9, 2, 7}, {6, 4, 3}, {5, 8, 1}};
        n = c.length;
        restMin = new int[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            int m = Integer.MAX_VALUE;
            for (int v : c[i]) m = Math.min(m, v);
            restMin[i] = restMin[i + 1] + m;
        }
        used = new boolean[n];
        cur = new int[n];
        tryRow(0, 0);
        System.out.println(best);          // 9
    }
}
```

Ghi chú: điều kiện cắt dùng `>=` nên nghiệm bằng kỷ lục không được thay thế (chỉ giữ nghiệm đầu tiên). Muốn liệt kê mọi nghiệm tối ưu thì đổi thành `>`.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Xấu nhất | vẫn mũ như [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force) (ví dụ $O(n!)$), vì cận có thể không cắt được gì |
| Thực tế | thường nhanh hơn nhiều; phụ thuộc chất lượng cận và thứ tự thử |
| Chi phí mỗi nút | thêm thời gian tính cận (ở trên $O(1)$ nhờ mảng `restMin`) |
| Bộ nhớ | $O(n)$ |

Hai mẹo thực tế: thử trước các lựa chọn hứa hẹn để tìm sớm một $f^*$ tốt, và dùng cận chặt nhưng rẻ. Chuẩn so sánh tốc độ tăng trong [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Dùng "chi phí đã đi" làm cận dưới khi đồ thị có cạnh âm, hoặc dùng một ước lượng phần còn lại có thể lớn hơn chi phí thật. Cận không hợp lệ làm mất nghiệm tối ưu.
- Quên khởi tạo $f^*=+\infty$ (hoặc khởi tạo bằng giá trị quá nhỏ), nên cắt sai ngay từ đầu.
- Cắt bằng `>` thay vì `>=` khi không cần mọi nghiệm tối ưu: không sai nhưng cây lớn hơn cần thiết.
- Cập nhật $f^*$ nhưng quên lưu nghiệm, hoặc lưu tham chiếu mảng rồi bị ghi đè khi lùi.
- Hiểu nhầm "nhánh cận luôn nhanh": xấu nhất vẫn là mũ.

## So sánh / liên hệ

Quay lui cắt theo ràng buộc về tính hợp lệ; nhánh cận cắt thêm theo giá trị mục tiêu. Hai ví dụ trong slide: [Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb) (người du lịch, dùng chi phí tạm làm cận) và bài xếp balo, có mặt trong [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error). Cùng bài xếp balo, [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01) giải bằng quy hoạch động, đúng và nhanh hơn khi sức chứa nhỏ.

## Luyện tập

- [Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb): áp dụng quy tắc cắt $g\ge f^*$ với chi phí tạm.
- [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error): bài người bán hàng, xếp balo (nhánh cận cho vật không giới hạn số lượng) và bài xâu ABC ít ký tự C.
- Tự luyện: đổi ma trận trên thành $c=\{\{4,7,5\},\{6,3,8\},\{2,9,1\}\}$, tính cận và tìm nghiệm tối ưu.

::: Đáp án tự luyện
Min dòng: 4, 3, 1, tổng 8. Các nghiệm: (1,2,3)=4+3+1=8; (1,3,2)=4+8+9=21; (2,1,3)=7+6+1=14; (2,3,1)=7+8+2=17; (3,1,2)=5+6+9=20; (3,2,1)=5+3+2=10. Tối ưu 8, và ngay nghiệm đầu tiên đã bằng cận dưới nên mọi nhánh còn lại ($g\ge8$) bị cắt.
:::

## Tự kiểm tra

1. Cận dưới phải thỏa điều kiện gì và vì sao?

> **Đáp án**
> Với mọi nghiệm đầy đủ mở rộng từ lời giải bộ phận, $f\ge g$. Nếu không, có thể $g\ge f^*$ trong khi tồn tại nghiệm có $f<f^*$ trong nhánh, và ta cắt mất nghiệm tối ưu.

2. Vì sao dùng chi phí đã đi làm cận cần chi phí còn lại không âm?

> **Đáp án**
> Cận phải không lớn hơn chi phí cuối cùng. Chi phí cuối $=$ chi phí đã đi $+$ chi phí còn lại; nếu phần còn lại âm thì tổng cuối có thể nhỏ hơn chi phí đã đi, tức cận lớn hơn giá trị thật.

3. Với ma trận ở ví dụ, nếu duyệt các việc của $W_1$ theo thứ tự 3, 1, 2 thì nhánh cấp 1 nào bị cắt?

> **Đáp án**
> Không nhánh cấp 1 nào bị cắt. Nhánh $W_1\to3$ chạy đầu tiên khi $f^*=+\infty$ nên được duyệt đủ (kỷ lục 21 rồi 16). Nhánh $W_1\to1$ có $g=13<16$ nên cũng duyệt (tìm được 14), rồi $W_1\to2$ cho 9. Ở thứ tự 1, 2, 3 trong ví dụ thì nhánh $W_1\to3$ bị cắt. Bài học: thứ tự thử ảnh hưởng hiệu quả cắt tỉa.
