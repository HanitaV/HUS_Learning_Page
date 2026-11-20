# Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh

## Vì sao cần

[Đồ thị và Graph ADT](#/courses/mat3504/lessons/mat3504-graph-concepts) chỉ nói đồ thị là gì và cần những phép toán nào. Muốn chạy [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs), [Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3504/lessons/mat3504-bfs) hay [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra) ta phải chọn cách lưu đỉnh và cạnh trong bộ nhớ. Slide giới thiệu ba cách: ma trận kề, danh sách kề và danh sách cạnh. Không cách nào tốt nhất cho mọi đồ thị; lựa chọn phụ thuộc đồ thị dày hay thưa và phép toán nào gọi nhiều nhất. Khung mô phỏng bên dưới cho bạn đổi qua lại giữa các cách biểu diễn của cùng một đồ thị.

## Ý tưởng

Cả ba cách đều dùng đỉnh đánh số $0,\dots,n-1$ và đều lưu được cùng một đồ thị.

- **Ma trận kề (adjacency matrix)**: mảng $n\times n$, $a_{ij}=1$ nếu có cạnh $(i,j)$, ngược lại bằng 0. Với đồ thị có trọng số, ô lưu trọng số, và ô "không có cạnh" lưu $\infty$ (đường chéo thường là 0), đúng quy ước của [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra) và [Thuật toán Floyd](#/courses/mat3504/lessons/mat3504-floyd) trong giáo trình. Đồ thị vô hướng cho ma trận đối xứng.
- **Danh sách kề (adjacency list)**: mỗi đỉnh $u$ có một danh sách các đỉnh kề với $u$ (hoặc cạnh ra khỏi $u$). Có thể dùng [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) hay [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list) cho từng danh sách.
- **Danh sách cạnh (edge list)**: một danh sách duy nhất gồm các cặp $(u,v)$ (kèm trọng số nếu có), không cần cấu trúc theo đỉnh.

## Ví dụ chạy tay

Đồ thị 7 đỉnh trong slide: các cạnh $0\text{-}1,\ 0\text{-}2,\ 1\text{-}2,\ 1\text{-}3,\ 2\text{-}4,\ 3\text{-}4,\ 4\text{-}5,\ 5\text{-}6$.

Ma trận kề (hàng $i$, cột $j$):

| | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |
| 2 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 3 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| 4 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 5 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 6 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |

Danh sách kề:

| Đỉnh | Danh sách kề |
|---|---|
| 0 | 1, 2 |
| 1 | 0, 2, 3 |
| 2 | 0, 1, 4 |
| 3 | 1, 4 |
| 4 | 2, 3, 5 |
| 5 | 4, 6 |
| 6 | 5 |

Danh sách cạnh: $(0,1),(0,2),(1,2),(1,3),(2,4),(3,4),(4,5),(5,6)$.

Đối chiếu: ma trận có $49$ ô, trong đó $16$ ô bằng 1 (mỗi cạnh vô hướng chiếm hai ô). Danh sách kề có tổng $16$ phần tử, danh sách cạnh có $8$ cặp.

## Cài đặt

```java
// Ma trận kề, đồ thị có hướng có trọng số; INF nghĩa là không có cung
static final int INF = Integer.MAX_VALUE;

static int[][] newMatrix(int n) {
    int[][] a = new int[n][n];
    for (int[] row : a) java.util.Arrays.fill(row, INF);
    for (int i = 0; i < n; i++) a[i][i] = 0;
    return a;
}

// Danh sách kề, đồ thị vô hướng không trọng số
static List<List<Integer>> newAdjList(int n) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
    return adj;
}

static void addUndirected(List<List<Integer>> adj, int u, int v) {
    adj.get(u).add(v);
    adj.get(v).add(u);   // vô hướng: ghi ở cả hai đầu
}
```

Hai điểm then chốt: ở đồ thị vô hướng phải ghi cạnh vào **cả hai** đầu mút; ở ma trận trọng số phải dùng một giá trị đặc biệt ($\infty$) cho "không có cạnh", vì trọng số 0 là giá trị hợp lệ. Khi cộng với `INF` hãy kiểm tra trước để tránh tràn số.

## Độ phức tạp

Với $n$ đỉnh, $m$ cạnh, $\deg(u)$ là bậc của $u$:

| Phép toán | Ma trận kề | Danh sách kề | Danh sách cạnh |
|---|---|---|---|
| Bộ nhớ | $\Theta(n^2)$ | $\Theta(n+m)$ | $\Theta(n+m)$ |
| `getEdge(u, v)` (có cạnh không?) | $O(1)$ | $O(\deg u)$ | $O(m)$ |
| Duyệt láng giềng của $u$ | $\Theta(n)$ | $O(\deg u)$ | $\Theta(m)$ |
| `insertEdge` | $O(1)$ | $O(1)$ (chưa kiểm tra trùng) | $O(1)$ |
| `removeEdge` | $O(1)$ | $O(\deg u)$ | $O(m)$ |
| Duyệt mọi cạnh | $\Theta(n^2)$ | $\Theta(n+m)$ | $\Theta(m)$ |

Hệ quả cho thuật toán: [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs) và [Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3504/lessons/mat3504-bfs) duyệt láng giềng của mọi đỉnh nên tốn $O(n^2)$ với ma trận và $O(n+m)$ với danh sách kề. Đồ thị thưa ($m\approx n$) nên dùng danh sách kề; đồ thị dày hoặc cần kiểm tra cạnh $O(1)$ (như [Thuật toán Floyd](#/courses/mat3504/lessons/mat3504-floyd)) hợp với ma trận. Danh sách cạnh tiện cho [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal), vì thuật toán cần sắp xếp mọi cạnh theo trọng số.

## Lỗi thường gặp

- Quên ghi cạnh ngược ở đồ thị vô hướng khi dùng danh sách kề, khiến ma trận hoặc danh sách không đối xứng.
- Dùng 0 làm "không có cạnh" trong ma trận trọng số trong khi có cạnh trọng số 0, hoặc quên đặt đường chéo bằng 0 khi chạy [Thuật toán Floyd](#/courses/mat3504/lessons/mat3504-floyd).
- Cộng `Integer.MAX_VALUE + w` gây tràn số thành số âm; phải kiểm tra `d[u] != INF` trước khi cộng.
- Dùng ma trận kề cho đồ thị hàng trăm nghìn đỉnh: $n^2$ ô vượt bộ nhớ dù đồ thị thưa.
- Nhầm đỉnh đánh số từ 1 (như slide giáo trình) với mảng Java bắt đầu từ 0, làm lệch chỉ số.

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph): Bài 1 và Bài 2 yêu cầu cài đồ thị bằng ma trận kề; luyện thêm Luyện tập 1 (in danh sách kề) để chuyển giữa hai cách biểu diễn.
- Tự luyện: viết hàm đổi ma trận kề của đồ thị vô hướng không trọng số thành danh sách kề. Độ phức tạp là bao nhiêu?

> **Đáp án**
> Duyệt hai vòng lặp $i,j$ và thêm $j$ vào `adj.get(i)` khi `a[i][j] == 1`. Thời gian $\Theta(n^2)$ vì phải đọc cả ma trận; bộ nhớ thêm $\Theta(n+m)$.

## Tự kiểm tra

1. Đồ thị vô hướng 1000 đỉnh, 3000 cạnh. So sánh số ô nhớ của ma trận kề và danh sách kề.

> **Đáp án**
> Ma trận: $10^6$ ô. Danh sách kề: $2\cdot 3000=6000$ phần tử cộng 1000 danh sách, tức cỡ $7000$. Danh sách kề tiết kiệm hơn hẳn vì đồ thị thưa.

2. Muốn trả lời "có cạnh giữa $u$ và $v$ không" thật nhanh và đồ thị dày. Chọn cách nào?

> **Đáp án**
> Ma trận kề, vì tra `a[u][v]` mất $O(1)$ còn danh sách kề mất $O(\deg u)$.

3. (Vận dụng) Cần duyệt [Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3504/lessons/mat3504-bfs) trên đồ thị có $10^5$ đỉnh, $2\cdot 10^5$ cạnh. Với ma trận kề thời gian là bao nhiêu và vì sao danh sách kề tốt hơn?

> **Đáp án**
> Ma trận: với mỗi đỉnh lấy ra khỏi hàng đợi phải quét cả hàng $n$ ô, tổng $\Theta(n^2)=10^{10}$ phép, không khả thi. Danh sách kề chỉ duyệt đúng các láng giềng nên tổng là $\Theta(n+m)\approx 3\cdot 10^5$.
