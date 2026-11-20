# Tìm đường trong mê cung bằng quay lui

## Bài toán

Slide xem mê cung như một đồ thị vô hướng $G=(V,E)$: mỗi phòng là một đỉnh, mỗi lối đi giữa hai phòng là một cạnh. Cho đỉnh xuất phát $S$ và đỉnh kết thúc $F$. Tìm đường đi $S=x_1,x_2,\dots,x_k=F$ với $x_i\in V$ và $(x_i,x_{i+1})\in E$. Đồ thị được cho bằng ma trận kề $m$ ($m[u,v]=1$ nếu có cạnh $uv$, ngược lại $0$). Mô phỏng bên dưới tô đường đi hiện tại và các đỉnh đã đi qua.

## Kiến thức sử dụng

- [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3504/lessons/mat3504-graph-representation): ma trận kề để kiểm tra cạnh $m[x_{i-1},v]=1$ trong $O(1)$.
- [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking): `Try(i)` chọn đỉnh thứ $i$ của đường đi, lùi khi cụt. Điều kiện chấp nhận là có cạnh và chưa đi qua.
- [Khám phá mê cung bằng ngăn xếp](#/courses/mat3514/lessons/mat3514-maze-stack): cùng bài toán trên lưới, nhưng dùng ngăn xếp thay vì đệ quy.
- [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs): quay lui là DFS có bỏ đánh dấu khi lùi.

## Phân tích

Cần hai thông tin: đường đi hiện tại (mảng $x$) và tập đỉnh đã nằm trong đường đi, kiểm tra qua mảng `Daqua[1..n]` (đã qua). Khởi tạo `Daqua` toàn `false`, rồi đặt `x[1] = S`, `Daqua[S] = true`. Ta cần đánh dấu $S$ ngay từ đầu để không quay lại $S$ giữa đường.

Đỉnh $v$ chấp nhận được khi $m[x_{i-1},v]=1$ và `Daqua[v]` là `false`. Khi chấp nhận: gán $x_i=v$, đánh dấu `Daqua[v] = true`. Nếu $x_i=F$ thì in đường đi; ngược lại gọi `Try(i+1)`. Sau lời gọi, bỏ đánh dấu `Daqua[v] = false` để các đường khác còn đi qua $v$. Bước bỏ đánh dấu này là phần khôi phục của [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking).

Mã giả của slide (đã thêm đánh dấu và bỏ đánh dấu cho đúng):

```text
Try(i)
    for v = 1..n
        if m[x[i-1], v] = 1 and not Daqua[v]
            x[i] = v
            Daqua[v] = true
            if x[i] = F
                printResult(x[1..i])
            else
                Try(i + 1)
            Daqua[v] = false
        endif
    endfor
End
```

Lời gọi đầu: `x[1] = S; Daqua[S] = true; Try(2)`.

## Lời giải từng bước

Đồ thị 8 đỉnh trong slide, đọc từ hình vẽ: các cạnh $1\text{-}2$, $1\text{-}8$, $2\text{-}3$, $2\text{-}7$, $2\text{-}8$, $3\text{-}6$, $6\text{-}7$, $6\text{-}4$, $4\text{-}5$. Chọn $S=1$ và $F=7$. Với mỗi đỉnh, thử các đỉnh kề theo thứ tự tăng dần.

| Bước | Đường đi hiện tại | Hành động |
|---|---|---|
| 1 | 1 | thử $v=2$: nhận |
| 2 | 1,2 | $v=1$ đã qua; $v=3$: nhận |
| 3 | 1,2,3 | $v=6$: nhận |
| 4 | 1,2,3,6 | $v=4$: nhận |
| 5 | 1,2,3,6,4 | $v=5$: nhận |
| 6 | 1,2,3,6,4,5 | đỉnh 5 chỉ kề 4 (đã qua): cụt, bỏ đánh dấu 5, lùi |
| 7 | 1,2,3,6,4 | hết đỉnh kề, bỏ đánh dấu 4, lùi |
| 8 | 1,2,3,6 | $v=7$: nhận, $x_5=F$, in `1 2 3 6 7` |
| 9 | 1,2 | (lùi) $v=7$: nhận, in `1 2 7`; $v=8$: nhận rồi cụt |
| 10 | 1 | $v=8$: nhận; từ 8 sang 2, sau đó in tiếp `1 8 2 3 6 7` và `1 8 2 7` |

Chương trình dưới đây in cả 4 đường trên. Lưu ý đường đầu tiên tìm được (`1 2 3 6 7`, 5 đỉnh) không phải đường ngắn nhất (`1 2 7`, 3 đỉnh): quay lui tìm một đường đi hợp lệ, không bảo đảm ngắn nhất.

## Cài đặt

```java
public class MazePath {
    static int n = 8, s = 1, f = 7;
    static boolean[][] m = new boolean[n + 1][n + 1];
    static int[] x = new int[n + 1];
    static boolean[] daqua = new boolean[n + 1];

    static void addEdge(int u, int v) { m[u][v] = m[v][u] = true; }

    static void tryAt(int i) {
        for (int v = 1; v <= n; v++) {
            if (m[x[i - 1]][v] && !daqua[v]) {      // v chấp nhận được
                x[i] = v;
                daqua[v] = true;
                if (v == f) {
                    printPath(i);
                } else {
                    tryAt(i + 1);
                }
                daqua[v] = false;                    // khôi phục khi lùi
            }
        }
    }

    static void printPath(int k) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= k; i++) sb.append(x[i]).append(' ');
        System.out.println(sb.toString().trim());
    }

    public static void main(String[] args) {
        int[][] edges = {{1,2},{1,8},{2,3},{2,7},{2,8},{3,6},{6,7},{6,4},{4,5}};
        for (int[] e : edges) addEdge(e[0], e[1]);
        x[1] = s;
        daqua[s] = true;
        tryAt(2);
    }
}
```

Ghi chú: muốn dừng ở đường đầu tiên, dùng biến `done` và thoát vòng lặp khi `done` bật; lúc đó không cần bỏ đánh dấu.

## Độ phức tạp

| Biến thể | Thời gian |
|---|---|
| Liệt kê mọi đường đơn $S\to F$ (như mã trên) | mũ trong xấu nhất (đồ thị đầy đủ: cỡ $O((n-2)!)$ đường) |
| Chỉ tìm một đường, không bỏ đánh dấu | $O(n^2)$ với ma trận kề, vì mỗi đỉnh được thăm một lần (chính là [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs)) |
| Bộ nhớ | $O(n)$ |

Vì sao khác nhau: bỏ đánh dấu cho phép một đỉnh được vào nhiều đường khác nhau, nên cùng một đỉnh có thể bị thăm lại nhiều lần. Về ký hiệu xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Mở rộng

- Đếm số đường đi, hoặc tìm đường có ít cạnh nhất (cập nhật khi $i$ nhỏ hơn kỷ lục), tiền đề cho [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound).
- Ma trận kề có trọng số cho bài người du lịch: [Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb).
- Đồ thị là lưới ô vuông có tường: xem [Khám phá mê cung bằng ngăn xếp](#/courses/mat3514/lessons/mat3514-maze-stack).

## Tự kiểm tra

1. Nếu quên bỏ đánh dấu `daqua[v] = false` thì chương trình trên in những đường nào cho $S=1$, $F=7$?

> **Đáp án**
> Chỉ in `1 2 3 6 7`. Sau đó các đỉnh 3, 6, 4, 5 vẫn bị coi là đã qua nên mọi nhánh còn lại bị cụt, chương trình không tìm được `1 2 7` (vì 7 cũng đã đánh dấu), mất nghiệm.

2. Vì sao phải đặt `daqua[S] = true` trước khi gọi `Try(2)`?

> **Đáp án**
> Nếu không, từ một đỉnh kề $S$ ta có thể quay lại $S$, và đường đi chứa $S$ hai lần, không còn là đường đơn, thậm chí lặp vô hạn.

3. Cho đồ thị 3 đỉnh $1\text{-}2$ và đỉnh 3 cô lập, $S=1$, $F=3$. Chương trình in gì?

> **Đáp án**
> Không in gì: từ $1$ chỉ đi được sang $2$, từ $2$ không có đỉnh kề chưa qua, không bao giờ tới $3$. Muốn báo "không có đường" phải thêm cờ ghi nhận.
