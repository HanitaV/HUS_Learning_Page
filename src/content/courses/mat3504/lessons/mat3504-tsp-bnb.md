# Người du lịch (TSP) bằng nhánh cận

## Bài toán

Một người bán hàng xuất phát từ thành phố $S$, phải đi qua mọi thành phố còn lại đúng một lần rồi quay về $S$. Chi phí đi từ thành phố $i$ sang $j$ là $c_{ij}$ (cặp không có đường đi có $c_{ij}=\infty$). Tìm hành trình có tổng chi phí nhỏ nhất. Đây là bài toán người du lịch (Traveling Salesman Problem, TSP). Mô phỏng bên dưới dựng hành trình từng thành phố, cập nhật `BestCost` và cắt nhánh.

## Kiến thức sử dụng

- [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3504/lessons/mat3504-graph-representation): mạng đường giao thông là đồ thị có trọng số, biểu diễn bằng ma trận kề $c=(c_{ij})$ cỡ $n\times n$.
- [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking): hành trình là một dãy $S=x_1,x_2,\dots,x_n,x_{n+1}=S$, trong đó $x_2..x_n$ là hoán vị các thành phố còn lại; dựng bằng `Try(i, C)`.
- [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound): duy trì `BestCost`, và cắt nhánh khi chi phí tạm không nhỏ hơn `BestCost`.
- [Tìm đường trong mê cung bằng quay lui](#/courses/mat3504/lessons/mat3504-maze-path-backtracking): cùng khung "chọn đỉnh kề chưa qua, đánh dấu, lùi thì bỏ đánh dấu", chỉ thêm tích lũy chi phí.

## Phân tích

Có $(n-1)!$ hành trình (cố định điểm đầu $S$, hoán vị $n-1$ thành phố còn lại), nên vét cạn không dùng được khi $n$ lớn. Slide chia hai phương pháp: quay lui thuần (sinh mọi hoán vị rồi tính chi phí) và nhánh cận.

Trạng thái gồm: mảng $x$ (hành trình tạm), mảng `Daqua[1..n]` (thành phố đã qua), chi phí tạm $C$ của đoạn $x_1\to\dots\to x_{i-1}$, và `BestCost` (chi phí tốt nhất đã tìm thấy, khởi tạo $+\infty$). `Try(i, C)` sinh thành phần thứ $i$:

1. Với mỗi thành phố $v$ có $c[x_{i-1},v]<\infty$ và chưa qua, tính $C_1=C+c[x_{i-1},v]$.
2. Chỉ tiếp tục nếu $C_1<\text{BestCost}$. Đây là bước cắt: vì mọi chi phí đều không âm, mọi hành trình mở rộng từ nhánh này có chi phí $\ge C_1\ge\text{BestCost}$, không thể tốt hơn.
3. Nếu đã qua đủ $n$ thành phố, cộng chi phí quay về $S$; nếu tổng vẫn nhỏ hơn `BestCost` thì ghi nhận nghiệm và cập nhật `BestCost`.

Điều kiện không âm của chi phí là bắt buộc. Một lưu ý khi cài đặt: khi đã qua đủ thành phố, bước cuối $x_{n+1}=S$ được phép dù $S$ đã đánh dấu; ở các bước trước $S$ không được chọn lại. Cách dễ nhất là xử lý bước quay về riêng, như mã dưới.

## Lời giải từng bước

4 thành phố, chi phí đối xứng: $c_{12}=2$, $c_{13}=9$, $c_{14}=10$, $c_{23}=6$, $c_{24}=4$, $c_{34}=3$. $S=1$. Thử thành phố theo thứ tự tăng dần. Cột $C_1$ là chi phí tạm sau khi thêm thành phố cuối.

| Bước | Hành trình tạm | $C_1$ | BestCost trước | Quyết định |
|---|---|---|---|---|
| 1 | 1-2 | 2 | $\infty$ | đi tiếp |
| 2 | 1-2-3 | 8 | $\infty$ | đi tiếp |
| 3 | 1-2-3-4 | 11 | $\infty$ | đủ thành phố, về 1: $11+10=21$, `BestCost` $=21$ |
| 4 | 1-2-4 | 6 | 21 | đi tiếp |
| 5 | 1-2-4-3 | 9 | 21 | về 1: $9+9=18<21$, `BestCost` $=18$ |
| 6 | 1-3 | 9 | 18 | đi tiếp |
| 7 | 1-3-2 | 15 | 18 | đi tiếp |
| 8 | 1-3-2-4 | 19 | 18 | $19\ge18$: **cắt** |
| 9 | 1-3-4 | 12 | 18 | đi tiếp |
| 10 | 1-3-4-2 | 16 | 18 | về 1: $16+2=18$, không nhỏ hơn 18: **cắt** |
| 11 | 1-4 | 10 | 18 | đi tiếp |
| 12 | 1-4-2 | 14 | 18 | đi tiếp |
| 13 | 1-4-2-3 | 20 | 18 | **cắt** |
| 14 | 1-4-3 | 13 | 18 | đi tiếp |
| 15 | 1-4-3-2 | 19 | 18 | **cắt** |

Kết quả: hành trình `1-2-4-3-1` với chi phí 18 (hành trình đảo ngược `1-3-4-2-1` cũng 18, nhưng bị cắt vì không nhỏ hơn). Ở ví dụ nhỏ này chỉ cắt được vài hành trình; với $n$ lớn, cắt từ rất sớm sẽ loại cả cây con khổng lồ.

## Cài đặt

Chỉ số thành phố từ 0 đến $n-1$, xuất phát từ thành phố 0. `INF` là chi phí không có đường.

```java
import java.util.Arrays;

public class TspBnb {
    static final int INF = Integer.MAX_VALUE / 2;
    static int n;
    static int[][] c;
    static int[] x, bestTour;
    static boolean[] visited;
    static int bestCost = INF;

    // x[0..i-1] đã chọn, cost là chi phí đoạn x[0] -> ... -> x[i-1]
    static void tryCity(int i, int cost) {
        for (int v = 0; v < n; v++) {
            if (visited[v] || c[x[i - 1]][v] >= INF) continue;
            int c1 = cost + c[x[i - 1]][v];
            if (c1 >= bestCost) continue;                 // cắt nhánh
            x[i] = v;
            visited[v] = true;
            if (i == n - 1) {                             // đã qua đủ n thành phố
                int back = c[v][x[0]];
                if (back < INF && c1 + back < bestCost) {
                    bestCost = c1 + back;
                    bestTour = x.clone();
                }
            } else {
                tryCity(i + 1, c1);
            }
            visited[v] = false;                           // khôi phục
        }
    }

    public static void main(String[] args) {
        c = new int[][]{
            {INF, 2, 9, 10},
            {2, INF, 6, 4},
            {9, 6, INF, 3},
            {10, 4, 3, INF}};
        n = c.length;
        x = new int[n];
        visited = new boolean[n];
        x[0] = 0;
        visited[0] = true;
        tryCity(1, 0);
        System.out.println(bestCost + " " + Arrays.toString(bestTour));  // 18 [0, 1, 3, 2]
    }
}
```

Ghi chú: `INF = Integer.MAX_VALUE / 2` để phép cộng không tràn số. Mã giả của slide gộp bước quay về $S$ vào cùng vòng lặp (`i = n+1` và `x_i = S`); cách tách riêng ở trên tránh chọn nhầm $S$ ở giữa hành trình.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Số hành trình | $(n-1)!$ |
| Quay lui thuần | $O(n!)$ (sinh mọi hoán vị) |
| Nhánh cận, xấu nhất | vẫn $O(n!)$ (ví dụ khi các hành trình tốt nhất xuất hiện cuối) |
| Nhánh cận, thực tế | thường nhanh hơn nhiều; chất lượng phụ thuộc thứ tự thử |
| Bộ nhớ | $O(n)$ |

Cận "chi phí tạm" là cận yếu. Cận mạnh hơn cộng thêm ước lượng chi phí còn lại (ví dụ mỗi thành phố chưa qua cần ít nhất cạnh ra rẻ nhất của nó), nên cắt được sớm hơn. Cách so sánh các hàm tăng xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Mở rộng

- Đây là Bài 5 trong phiếu bài tập vét cạn ([Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error)) và Bài 1 trong phiếu nhánh cận.
- Đồ thị có hướng: ma trận không đối xứng, mã trên không đổi.
- Chọn thứ tự thử thành phố theo chi phí tăng dần để tìm sớm một `BestCost` tốt.
- TSP là bài toán NP-khó; thuật toán nhánh cận chỉ thực tế cho $n$ cỡ vài chục. Xem [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes).

## Tự kiểm tra

1. Với ma trận ở ví dụ, hành trình `1-2-3-4-1` có chi phí bao nhiêu? Vì sao tìm thấy trước `1-2-4-3-1`?

> **Đáp án**
> $2+6+3+10=21$. Vì tại thành phố 2, thành phố 3 được thử trước thành phố 4 (thứ tự tăng dần), và tại 3 chỉ còn 4.

2. Giả sử có cạnh chi phí âm. Quy tắc cắt $C_1\ge\text{BestCost}$ có còn đúng không?

> **Đáp án**
> Không. Đi tiếp có thể giảm tổng chi phí, nên hành trình có $C_1\ge\text{BestCost}$ vẫn có thể kết thúc tốt hơn. Quy tắc chỉ đúng khi mọi chi phí không âm.

3. Với $n=5$ và chi phí mọi cặp bằng 1, quay lui thuần và nhánh cận lần lượt xét bao nhiêu hành trình đầy đủ?

> **Đáp án**
> Quay lui thuần xét $(5-1)!=24$ hành trình, đều tốn chi phí 5. Nhánh cận: hành trình đầu tiên đặt `BestCost` $=5$ và chỉ nó được ghi nhận, vì các hành trình sau có tổng đúng 5, không nhỏ hơn. Tuy vậy mọi chi phí tạm (độ dài 1 đến 4) đều nhỏ hơn 5 nên không cắt được ở giữa đường; cả 24 hành trình vẫn bị duyệt đến bước cuối. Khi chi phí đồng đều, cận chi phí tạm không giúp được gì.
