# Thuật toán Dijkstra

## Vì sao cần

[Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3514/lessons/mat3514-bfs) tìm đường ít cạnh nhất, nhưng bản đồ thật có độ dài, thời gian hay chi phí khác nhau cho từng đoạn. Khi đó đường ít cạnh chưa chắc rẻ nhất. Dijkstra giải bài toán đường đi ngắn nhất từ một đỉnh nguồn $s_0$ tới mọi đỉnh còn lại trên đồ thị có trọng số **không âm**. Thuật toán là một ví dụ của [phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method): mỗi bước chốt kết quả cuối cho một đỉnh. Mô phỏng bên dưới hiện nhãn tạm thời của từng đỉnh thay đổi theo mỗi bước.

## Ý tưởng

Theo giáo trình, mỗi đỉnh $v$ có một **nhãn tạm thời** $L(v)$ là cận trên của độ dài đường ngắn nhất từ $s_0$ tới $v$ tìm được đến lúc này. Ban đầu $L(s_0)=0$, các đỉnh khác $L(v)=\infty$. Tập $S$ lưu các đỉnh đã có **nhãn chính thức**, tức $L(v)=d(s_0,v)$ là độ dài ngắn nhất thật sự.

Mỗi bước lặp:

1. Chọn đỉnh $u\notin S$ có $L(u)$ nhỏ nhất. Đó là tính chất tham lam; nhãn của $u$ trở thành chính thức, đưa $u$ vào $S$.
2. Cập nhật (relax) mọi đỉnh $v\notin S$ kề với $u$: nếu $L(u)+w(u,v)<L(v)$ thì $L(v)\leftarrow L(u)+w(u,v)$ và ghi `prev[v] = u`.

Dừng khi $S=V$ (hoặc khi đỉnh đích $t$ vào $S$, nếu chỉ cần đường đến $t$). Các nhãn chính thức được chốt theo thứ tự tăng dần: $0=d(s_0,s_0)\le d(s_0,s_1)\le\dots$.

**Vì sao đúng (trọng số không âm).** Giả sử $u$ có nhãn nhỏ nhất trong các đỉnh ngoài $S$ và có một đường ngắn hơn $L(u)$. Đường đó phải rời $S$ tại một cung đến đỉnh $x\notin S$ nào đó, và theo nhãn tạm thời $L(x)\le$ độ dài phần đầu của đường. Nhưng $L(u)\le L(x)$ (vì $u$ nhỏ nhất) và phần còn lại của đường không âm, nên đường đó không thể ngắn hơn $L(u)$. Mâu thuẫn. Nếu có cạnh âm, phần còn lại có thể giảm độ dài, và lập luận sụp đổ.

## Ví dụ chạy tay

Đồ thị có hướng, nguồn $s_0=0$: $0\to1\,(4)$, $0\to2\,(1)$, $2\to1\,(2)$, $1\to3\,(1)$, $2\to3\,(5)$, $3\to4\,(3)$.

| Bước | Chốt (S) | $L(0)$ | $L(1)$ | $L(2)$ | $L(3)$ | $L(4)$ |
|---|---|---|---|---|---|---|
| Khởi tạo | | 0 | $\infty$ | $\infty$ | $\infty$ | $\infty$ |
| 1 | 0 | **0** | 4 | 1 | $\infty$ | $\infty$ |
| 2 | 2 | 0 | 3 | **1** | 6 | $\infty$ |
| 3 | 1 | 0 | **3** | 1 | 4 | $\infty$ |
| 4 | 3 | 0 | 3 | 1 | **4** | 7 |
| 5 | 4 | 0 | 3 | 1 | 4 | **7** |

Giải thích bước 2: chốt 2 (nhãn nhỏ nhất, 1). Cập nhật: $L(1)=\min(4,\,1+2)=3$ (qua 2 ngắn hơn đi thẳng), $L(3)=\min(\infty,\,1+5)=6$. Bước 3: chốt 1 với nhãn 3, cập nhật $L(3)=\min(6,\,3+1)=4$. Kết quả: $d=(0,3,1,4,7)$. Lần ngược `prev`: $4\leftarrow3\leftarrow1\leftarrow2\leftarrow0$, tức đường $0\to2\to1\to3\to4$ độ dài $1+2+1+3=7$.

## Cài đặt

Bản ma trận trọng số, $O(V^2)$, đúng phong cách giáo trình (mảng `L`, `Daxet`, `Ddnn`):

```java
static final int INF = Integer.MAX_VALUE;

static int[] dijkstra(int[][] w, int s, int[] prev) {
    int n = w.length;
    int[] dist = new int[n];
    boolean[] done = new boolean[n];
    Arrays.fill(dist, INF);
    Arrays.fill(prev, -1);
    dist[s] = 0;
    for (int step = 0; step < n; step++) {
        int u = -1;
        for (int i = 0; i < n; i++) {          // chọn nhãn tạm thời nhỏ nhất
            if (!done[i] && (u == -1 || dist[i] < dist[u])) u = i;
        }
        if (dist[u] == INF) break;             // phần còn lại không tới được
        done[u] = true;
        for (int v = 0; v < n; v++) {          // relax các cung ra khỏi u
            if (!done[v] && w[u][v] != INF && dist[u] + w[u][v] < dist[v]) {
                dist[v] = dist[u] + w[u][v];
                prev[v] = u;
            }
        }
    }
    return dist;
}
```

Bản danh sách kề với [hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-priority-queue-adt) ([Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap)), $O((V+E)\log V)$. Ta cho phép bản sao cũ của đỉnh nằm trong heap và bỏ qua nếu nhãn đã lỗi thời:

```java
static int[] dijkstraHeap(List<List<int[]>> adj, int s) {   // adj.get(u): {v, w}
    int n = adj.size();
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[s] = 0;
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[1], b[1]));
    pq.add(new int[]{s, 0});
    while (!pq.isEmpty()) {
        int[] top = pq.poll();
        int u = top[0];
        if (top[1] > dist[u]) continue;          // bản sao lỗi thời
        for (int[] e : adj.get(u)) {
            int nd = dist[u] + e[1];
            if (nd < dist[e[0]]) {
                dist[e[0]] = nd;
                pq.add(new int[]{e[0], nd});
            }
        }
    }
    return dist;
}
```

Muốn in đường đi từ $s$ đến $t$, lần ngược `prev[t]`, `prev[prev[t]]`, ... đến khi gặp $s$ (giáo trình dùng mảng `Ddnn` và hàm `xuatdd`).

## Độ phức tạp

| Cách cài | Thời gian | Ghi chú |
|---|---|---|
| Ma trận kề, quét mảng tìm min | $\Theta(V^2)$ | Giáo trình: hai vòng lặp lồng nhau, $T(n)\in O(n^2)$ |
| Danh sách kề + min-heap | $O((V+E)\log V)$ | Tốt cho đồ thị thưa |

Bộ nhớ phụ $O(V)$ cho ma trận, $O(V+E)$ cho bản heap lười. Xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o) để so sánh hai hàm.

## Lỗi thường gặp

- Dùng Dijkstra khi có cạnh âm. Ví dụ $s\to a\,(2)$, $s\to b\,(3)$, $b\to a\,(-2)$: Dijkstra chốt $a$ với nhãn 2 trước khi xét $b$, trong khi đường đúng là $s\to b\to a$ độ dài 1.
- Cộng với $\infty$ (tràn số khi dùng `Integer.MAX_VALUE`); phải kiểm tra `w[u][v] != INF` và `dist[u] != INF` trước khi cộng.
- Cập nhật nhãn của đỉnh đã chốt, hoặc quên đánh dấu đã chốt, làm thuật toán lặp lại hoặc ghi đè kết quả đúng.
- Chọn đỉnh theo trọng số cạnh vừa xét thay vì theo $L(v)$ tổng; đó là [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) chứ không phải Dijkstra.
- Quên lưu `prev` nên chỉ biết độ dài mà không in được đường đi.
- Nhầm "ít cạnh nhất" ([Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3514/lessons/mat3514-bfs)) với "tổng trọng số nhỏ nhất".

## So sánh / liên hệ

Nếu mọi trọng số bằng nhau, Dijkstra cho cùng khoảng cách với [Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3514/lessons/mat3514-bfs) (BFS làm bằng hàng đợi thường, nhanh $\Theta(V+E)$). [Thuật toán Floyd](#/courses/mat3504/lessons/mat3504-floyd) giải bài toán đường đi ngắn nhất giữa *mọi cặp* đỉnh trong $\Theta(V^3)$; chạy Dijkstra từ từng đỉnh cũng cho kết quả đó nhưng chỉ với trọng số không âm. Cách cài đồ thị xem [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3514/lessons/mat3514-graph-representation).

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) Bài 4: tìm đường đi ngắn nhất từ $u$ tới $v$ trên đồ thị có hướng có trọng số bằng Dijkstra (dùng đồ thị Bài 2).
- Tự luyện: đồ thị vô hướng $A\text{-}B\,(7)$, $A\text{-}C\,(9)$, $A\text{-}F\,(14)$, $B\text{-}C\,(10)$, $B\text{-}D\,(15)$, $C\text{-}D\,(11)$, $C\text{-}F\,(2)$, $D\text{-}E\,(6)$, $E\text{-}F\,(9)$. Tìm khoảng cách từ $A$ tới $E$.

> **Đáp án**
> Chốt theo thứ tự: $A\,(0)$, $B\,(7)$, $C\,(9)$, $F\,(11$ qua $C)$, $D\,(20$ qua $C)$, $E\,(20$ qua $F)$. Khoảng cách $A\to E$ là $20$, đường $A\to C\to F\to E$ ($9+2+9$).

## Tự kiểm tra

1. Vì sao ở mỗi bước, nhãn nhỏ nhất ngoài $S$ có thể chốt luôn là khoảng cách thật?

> **Đáp án**
> Mọi đường khác tới đỉnh đó phải đi qua một đỉnh ngoài $S$ có nhãn không nhỏ hơn, và phần còn lại của đường có trọng số không âm nên không thể rút ngắn. (Đây là chỗ cần trọng số không âm.)

2. Trong ví dụ chạy tay, nếu đổi cung $0\to1$ thành trọng số 2 thì $d(0,3)$ và `prev[3]` là gì?

> **Đáp án**
> Bước 1: $L(1)=2$, $L(2)=1$. Chốt 2: $L(1)=\min(2,3)=2$ (giữ), $L(3)=6$. Chốt 1: $L(3)=\min(6,\,2+1)=3$ với `prev[3]=1`. Vậy $d(0,3)=3$, đường $0\to1\to3$.

3. (Vận dụng) Cần đường đi ngắn nhất từ $s$ tới một đích $t$ cụ thể. Dijkstra có thể dừng sớm không?

> **Đáp án**
> Có. Khi $t$ được đưa vào $S$ thì $L(t)$ đã là chính thức, nên dừng ngay mà không cần xử lý các đỉnh còn lại.
