# Tìm kiếm theo chiều rộng (BFS)

## Vì sao cần

[Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs) đi sâu theo một nhánh nên đường nó tìm được có thể rất dài. Khi cần đường đi **ít cạnh nhất** từ $s$ đến $t$ (số bước chuyển tàu ít nhất, số lần bấm ít nhất, độ gần trong mạng xã hội), ta cần duyệt đồ thị theo từng lớp: cả những đỉnh cách $s$ một cạnh, rồi hai cạnh, rồi ba cạnh... Tìm kiếm theo chiều rộng (Breadth First Search, BFS) làm đúng như vậy bằng một [hàng đợi](#/courses/mat3504/lessons/mat3504-queue-adt) FIFO. Xem mô phỏng bên dưới để thấy hàng đợi và các lớp thay đổi.

## Ý tưởng

Giáo trình mô tả theo lớp. Đặt $A_0=\{s\}$, $A_1$ là các đỉnh kề với $s$, và tổng quát

$$A_i=\{x\in V\setminus (A_0\cup\dots\cup A_{i-1}) : \exists\, y\in A_{i-1},\ (y,x)\in E\}$$

Đỉnh $x\in A_i$ có khoảng cách $i$ tới $s$ (tính theo số cạnh). Thuật toán dừng sau không quá $n$ bước lặp. Nếu $t\notin A_i$ với mọi $i$ thì không có đường từ $s$ đến $t$; ngược lại $t\in A_m$ nào đó và đường tìm được là một đường đi **ngắn nhất** theo số cạnh.

Vì sao ngắn nhất: hàng đợi FIFO bảo đảm mọi đỉnh ở lớp $i$ được lấy ra trước mọi đỉnh ở lớp $i+1$. Một đỉnh được đánh dấu lần đầu khi nó được phát hiện từ một đỉnh ở lớp nhỏ nhất có thể, nên khoảng cách ghi lại là nhỏ nhất. Mỗi đỉnh cũng chỉ được đưa vào hàng đợi một lần nhờ mảng đánh dấu (`Daxet` trong giáo trình) hoặc `dist[v] == -1`.

Để dựng lại đường đi, lưu `Truoc[v]` (đỉnh cha đã phát hiện ra $v$) rồi lần ngược từ $t$ về $s$.

## Ví dụ chạy tay

Cùng đồ thị 7 đỉnh với [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs): $0:[1,2]$, $1:[0,2,3]$, $2:[0,1,4]$, $3:[1,4]$, $4:[2,3,5]$, $5:[4,6]$, $6:[5]$. Bắt đầu từ $0$.

| Bước | Lấy ra | Phát hiện (dist, cha) | Hàng đợi sau bước |
|---|---|---|---|
| 0 | | đưa 0 vào, dist[0]=0 | [0] |
| 1 | 0 | 1 (1, cha 0), 2 (1, cha 0) | [1, 2] |
| 2 | 1 | 3 (2, cha 1); 0 và 2 đã có dist | [2, 3] |
| 3 | 2 | 4 (2, cha 2) | [3, 4] |
| 4 | 3 | không có đỉnh mới | [4] |
| 5 | 4 | 5 (3, cha 4) | [5] |
| 6 | 5 | 6 (4, cha 5) | [6] |
| 7 | 6 | không có đỉnh mới | [] |

Các lớp: $A_0=\{0\}$, $A_1=\{1,2\}$, $A_2=\{3,4\}$, $A_3=\{5\}$, $A_4=\{6\}$. Đường ngắn nhất $0\to 6$: lần ngược `Truoc`: $6\leftarrow 5\leftarrow 4\leftarrow 2\leftarrow 0$, độ dài $4$. Thứ tự thăm của BFS là $0,1,2,3,4,5,6$, khác thứ tự $0,1,2,4,3,5,6$ của DFS.

## Cài đặt

Code mẫu của bài, trả về mảng khoảng cách (`-1` nghĩa là không đạt tới):

```java
static int[] bfs(List<List<Integer>> adj, int start) {
    int[] dist = new int[adj.size()];
    Arrays.fill(dist, -1);
    Queue<Integer> queue = new ArrayDeque<>();
    dist[start] = 0;
    queue.add(start);
    while (!queue.isEmpty()) {
        int u = queue.remove();
        for (int v : adj.get(u)) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                queue.add(v);
            }
        }
    }
    return dist;
}
```

Muốn in đường đi, thêm mảng `parent` và gán `parent[v] = u` cùng chỗ với `dist[v] = dist[u] + 1`:

```java
static List<Integer> pathTo(int[] parent, int t) {
    LinkedList<Integer> path = new LinkedList<>();
    for (int v = t; v != -1; v = parent[v]) path.addFirst(v);
    return path;   // khởi tạo parent[s] = -1 và các ô còn lại = -1
}
```

Trong giáo trình hàng đợi được cài bằng mảng với hai chỉ số `dauQ`, `cuoiQ` (xem [Hàng đợi mảng vòng](#/courses/mat3514/lessons/mat3514-circular-array-queue) cho phiên bản vòng); thao tác "đánh dấu ngay khi đưa vào hàng đợi" là then chốt, không phải khi lấy ra.

## Độ phức tạp

| | Danh sách kề | Ma trận kề |
|---|---|---|
| Thời gian | $\Theta(n+m)$ | $\Theta(n^2)$ |
| Bộ nhớ phụ | $O(n)$ (hàng đợi, `dist`) | $O(n)$ |

Mỗi đỉnh vào và ra hàng đợi đúng một lần, mỗi cạnh được xét hai lần (vô hướng) hoặc một lần (có hướng). Hàng đợi có thể chứa tới $O(n)$ đỉnh cùng lúc (xem [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3504/lessons/mat3504-graph-representation) để biết vì sao ma trận kề chậm hơn).

## Lỗi thường gặp

- Đánh dấu đã thăm khi lấy đỉnh ra khỏi hàng đợi thay vì khi đưa vào: một đỉnh bị đưa vào nhiều lần, hàng đợi phình to và `dist` có thể bị ghi sai.
- Dùng BFS tìm "đường ngắn nhất" trên đồ thị có trọng số bất kỳ. BFS chỉ đúng khi mọi cạnh có cùng trọng số (đếm số cạnh); với trọng số khác nhau dùng [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra).
- Quên khởi tạo `dist` bằng `-1` nên đỉnh 0 hoặc đỉnh nguồn bị coi là chưa thăm.
- Dùng ngăn xếp thay vì hàng đợi rồi vẫn gọi là BFS: thứ tự thăm trở thành DFS và mất tính chất ngắn nhất.
- Chỉ chạy BFS từ một đỉnh rồi kết luận đồ thị liên thông; cần kiểm tra mọi `dist[v] != -1`.

## So sánh / liên hệ

| | [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs) | BFS |
|---|---|---|
| Cấu trúc | Ngăn xếp / đệ quy | Hàng đợi |
| Đường tìm được | Một đường bất kỳ | Ít cạnh nhất (không trọng số) |
| Thời gian (danh sách kề) | $\Theta(n+m)$ | $\Theta(n+m)$ |

[Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra) có thể xem như BFS mà hàng đợi thường được thay bằng hàng đợi ưu tiên để xử lý trọng số.

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) Bài 4 (cài BFS), Luyện tập 4 (BFS of Graph), Luyện tập 12 (kiểm tra đồ thị hai phía bằng tô hai màu theo lớp), Luyện tập 13 (Word Ladder), Luyện tập 15 (khoảng cách tới số 1 gần nhất bằng BFS nhiều nguồn).
- Tự luyện: lưới $3\times 3$ không có chướng ngại, đi 4 hướng từ góc trên trái; số bước tới góc dưới phải là bao nhiêu?

> **Đáp án**
> Mỗi ô là một đỉnh, kề 4 hướng. BFS cho khoảng cách $|dx|+|dy|=2+2=4$ bước.

## Tự kiểm tra

1. Vì sao BFS cho đường ngắn nhất theo số cạnh?

> **Đáp án**
> Hàng đợi FIFO lấy mọi đỉnh lớp $i$ trước lớp $i+1$, nên đỉnh nào cũng được phát hiện lần đầu qua lớp nhỏ nhất có thể, và khoảng cách lúc đó chính là số cạnh nhỏ nhất.

2. Chạy BFS từ đỉnh $6$ trên đồ thị ví dụ. Viết mảng `dist`.

> **Đáp án**
> $6$: 0; $5$: 1; $4$: 2; $2,3$: 3; $0,1$: 4. Mảng theo thứ tự đỉnh $0..6$ là $[4,4,3,3,2,1,0]$.

3. (Vận dụng) Một ma trận 0/1, cần với mỗi ô tìm khoảng cách tới ô có giá trị 1 gần nhất (đi 4 hướng). Vì sao không nên chạy BFS riêng từ từng ô, và làm thế nào?

> **Đáp án**
> BFS riêng từng ô tốn $O((nm)^2)$. Thay vào đó đưa **tất cả** ô có giá trị 1 vào hàng đợi với khoảng cách 0 rồi chạy một lần BFS (BFS nhiều nguồn); thời gian $O(nm)$.
