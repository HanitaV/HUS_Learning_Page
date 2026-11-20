# Thuật toán Prim

## Vì sao cần

[Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst) cho biết cần tìm cây khung có tổng trọng số nhỏ nhất, và tính chất cắt bảo đảm cạnh nhẹ nhất qua một phép cắt luôn an toàn để chọn. Prim là cách đơn giản nhất để dùng tính chất đó: bắt đầu từ một đỉnh, cho cây "mọc" dần, mỗi lần nối thêm đỉnh gần cây nhất. Thuật toán thuộc họ [tham lam](#/courses/mat3504/lessons/mat3504-greedy-method). Bạn có thể bấm từng bước trong mô phỏng bên dưới để xem cây lớn lên.

## Ý tưởng

Theo slide: bắt đầu với cây $T_0$ chỉ gồm một đỉnh. Ở bước $i$, mở rộng $T_{i-1}$ thành $T_i$ bằng cách gắn vào đỉnh *gần nhất* chưa thuộc cây, tức đỉnh ngoài cây nối với một đỉnh trong cây bằng cạnh có trọng số nhỏ nhất. Dừng khi mọi đỉnh đã vào cây. Ký hiệu $V_T$ là tập đỉnh đã vào cây, $E_T$ là tập cạnh đã chọn.

```text
Prim(G):                       // G = (V, E), có trọng số, vô hướng, liên thông
    V_T = {v0};  E_T = rỗng
    for i = 1 .. |V|-1:
        chọn cạnh e = (v, u) trọng số nhỏ nhất với v thuộc V_T, u thuộc V \ V_T
        V_T = V_T hợp {u};  E_T = E_T hợp {e}
    return E_T
```

Tính đúng (slide, chứng minh phản chứng/quy nạp): nếu $T_{i-1}$ nằm trong một MST nào đó thì $T_i$ cũng vậy. Thật vậy, cạnh $e_i$ được chọn là cạnh nhẹ nhất qua phép cắt $(V_{T_{i-1}},\ V\setminus V_{T_{i-1}})$, và tính chất cắt trong [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst) cho biết nó thuộc một MST chứa $T_{i-1}$.

Để chọn cạnh nhanh, giữ với mỗi đỉnh $j$ ngoài cây hai giá trị: `lowcost[j]` là trọng số cạnh nhẹ nhất nối $j$ với cây, và `closest[j]` là đỉnh của cây ở đầu kia (đúng như mảng `Lowcost`, `Closest` trong giáo trình). Mỗi khi thêm đỉnh $k$ vào cây, cập nhật `lowcost[j] = min(lowcost[j], w(k,j))` cho mọi $j$ còn ngoài cây.

## Ví dụ chạy tay

Đồ thị của bài [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst): $1\text{-}2\,(2)$, $1\text{-}3\,(3)$, $2\text{-}3\,(1)$, $2\text{-}4\,(4)$, $3\text{-}4\,(5)$, $3\text{-}5\,(7)$, $4\text{-}5\,(6)$. Bắt đầu từ đỉnh 1; ô ghi `lowcost (closest)` sau khi cập nhật ở bước đó, dấu `-` là đã vào cây.

| Bước | Đỉnh 2 | Đỉnh 3 | Đỉnh 4 | Đỉnh 5 | Chọn | Cây |
|---|---|---|---|---|---|---|
| Khởi tạo | 2 (1) | 3 (1) | $\infty$ | $\infty$ | | {1} |
| 1 | - | 1 (2) | 4 (2) | $\infty$ | cạnh 1-2, w=2 | {1,2} |
| 2 | - | - | 4 (2) | 7 (3) | cạnh 2-3, w=1 | {1,2,3} |
| 3 | - | - | - | 6 (4) | cạnh 2-4, w=4 | {1,2,3,4} |
| 4 | - | - | - | - | cạnh 4-5, w=6 | {1,2,3,4,5} |

Ở bước 1, sau khi thêm 2, đỉnh 3 giảm từ 3 xuống 1 vì cạnh $2\text{-}3$ nhẹ hơn $1\text{-}3$ và `closest[3]` đổi thành 2. Ở bước 2, đỉnh 4 giữ 4 vì $3\text{-}4$ (5) không nhẹ hơn. MST gồm $1\text{-}2,\ 2\text{-}3,\ 2\text{-}4,\ 4\text{-}5$ với tổng $2+1+4+6=13$.

## Cài đặt

Bản ma trận kề, $O(V^2)$ (gần với giáo trình); `w[i][j] == INF` nghĩa là không có cạnh:

```java
static final int INF = Integer.MAX_VALUE;

static int primMatrix(int[][] w) {
    int n = w.length;
    boolean[] inTree = new boolean[n];
    int[] lowcost = new int[n];
    int[] closest = new int[n];
    Arrays.fill(lowcost, INF);
    lowcost[0] = 0;                       // bắt đầu từ đỉnh 0
    int total = 0;
    for (int step = 0; step < n; step++) {
        int k = -1;
        for (int j = 0; j < n; j++) {     // tìm đỉnh ngoài cây có lowcost nhỏ nhất
            if (!inTree[j] && (k == -1 || lowcost[j] < lowcost[k])) k = j;
        }
        if (lowcost[k] == INF) return -1; // đồ thị không liên thông
        inTree[k] = true;
        total += lowcost[k];
        for (int j = 0; j < n; j++) {     // cập nhật theo đỉnh k vừa vào cây
            if (!inTree[j] && w[k][j] < lowcost[j]) {
                lowcost[j] = w[k][j];
                closest[j] = k;           // cạnh (closest[j], j) là ứng viên
            }
        }
    }
    return total;
}
```

Bản dùng [hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-priority-queue-adt) (cài bằng [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap)) trên danh sách kề, $O(E\log V)$. Mỗi phần tử là `{đỉnh, trọng số}`; ta chấp nhận có bản sao cũ trong heap và bỏ qua khi gặp đỉnh đã vào cây:

```java
static int primHeap(List<List<int[]>> adj) {   // adj.get(u): các cặp {v, w}
    int n = adj.size();
    boolean[] inTree = new boolean[n];
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    pq.add(new int[]{0, 0});
    int total = 0, count = 0;
    while (!pq.isEmpty()) {
        int[] top = pq.poll();
        int u = top[0];
        if (inTree[u]) continue;
        inTree[u] = true;
        total += top[1];
        count++;
        for (int[] e : adj.get(u)) {
            if (!inTree[e[0]]) pq.add(new int[]{e[0], e[1]});
        }
    }
    return count == n ? total : -1;
}
```

## Độ phức tạp

| Cách cài | Thời gian | Bộ nhớ phụ |
|---|---|---|
| Ma trận kề, tìm min bằng quét mảng | $O(V^2)$ | $O(V)$ |
| Danh sách kề + min-heap | $O(E\log V)$ | $O(E)$ cho bản heap lười ở trên |

Ma trận kề: $V$ vòng lặp, mỗi vòng quét $O(V)$ để chọn đỉnh và $O(V)$ để cập nhật. Với heap: mỗi cạnh có thể được đẩy vào heap một lần, mỗi thao tác $O(\log E)=O(\log V)$ (do $E\le V^2$). Đồ thị dày ($E\approx V^2$) thì bản ma trận $O(V^2)$ lại tốt hơn; đồ thị thưa thì bản heap tốt hơn (xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o)).

## Lỗi thường gặp

- Nhầm với [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra): Prim chọn đỉnh theo trọng số *cạnh nối vào cây*, còn Dijkstra chọn theo *tổng khoảng cách từ nguồn*. Cập nhật `lowcost[j] = lowcost[k] + w` là sai với Prim.
- Không đặt `lowcost` của đỉnh đã vào cây thành "đã xong" (giáo trình đặt $\infty$ hoặc dùng mảng `inTree`), nên đỉnh cũ có thể bị chọn lại.
- Chạy trên đồ thị không liên thông mà không báo lỗi; kết quả chỉ là cây khung của thành phần chứa đỉnh bắt đầu.
- Dùng `Integer.MAX_VALUE` rồi cộng thêm trọng số gây tràn số; ở Prim chỉ so sánh nên an toàn, nhưng đừng cộng.
- Áp dụng cho đồ thị có hướng (Prim định nghĩa cho vô hướng); với danh sách kề phải thêm cạnh cả hai chiều.

## So sánh / liên hệ

[Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal) cho cùng tổng trọng số nhưng nhìn theo cạnh: sắp xếp mọi cạnh rồi nối các thành phần. Prim thường hợp đồ thị dày hoặc khi đã có ma trận kề; Kruskal hợp đồ thị thưa với danh sách cạnh. Với cây khung có thể khác nhau về tập cạnh khi có trọng số trùng nhau, tổng luôn bằng nhau.

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) Bài 4: mục "cây bao trùm tối thiểu"; Bài 5 có thể dùng MST để thiết kế mạng phân phối.
- [Bài tập: phương pháp tham lam](#/courses/mat3504/lessons/mat3504-hw-greedy): các bài tham lam khác để so cách chứng minh.
- Tự luyện: chạy Prim từ đỉnh 5 trên đồ thị ví dụ và liệt kê thứ tự cạnh.

> **Đáp án**
> Bắt đầu {5}: ứng viên $4\text{-}5\,(6)$, $3\text{-}5\,(7)$, chọn $4\text{-}5$. Cây {5,4}: ứng viên $2\text{-}4\,(4)$, $3\text{-}4\,(5)$, $3\text{-}5\,(7)$, chọn $2\text{-}4$. Cây {5,4,2}: ứng viên $1\text{-}2\,(2)$, $2\text{-}3\,(1)$, chọn $2\text{-}3$. Cuối cùng $1\text{-}2\,(2)$. Thứ tự: $4\text{-}5,\ 2\text{-}4,\ 2\text{-}3,\ 1\text{-}2$; tổng 13.

## Tự kiểm tra

1. Prim kết thúc sau đúng bao nhiêu lần thêm cạnh trên đồ thị liên thông $n$ đỉnh?

> **Đáp án**
> $n-1$ lần, mỗi lần thêm một đỉnh mới cùng một cạnh.

2. Vì sao bản ma trận kề của Prim là $O(V^2)$ còn bản heap là $O(E\log V)$? Khi nào nên chọn bản nào?

> **Đáp án**
> Bản ma trận có $V$ vòng, mỗi vòng quét mảng $O(V)$. Bản heap có tối đa $E$ lần đẩy/lấy, mỗi lần $O(\log V)$. Đồ thị dày ($E\sim V^2$): ma trận tốt hơn vì $V^2<V^2\log V$. Đồ thị thưa ($E\sim V$): heap tốt hơn.

3. (Vận dụng) Cho đồ thị 4 đỉnh với $A\text{-}B\,(1)$, $B\text{-}C\,(1)$, $A\text{-}C\,(1)$, $C\text{-}D\,(5)$. Prim từ $A$ có thể ra các cây khung khác nhau không? Tổng là bao nhiêu?

> **Đáp án**
> Có: ở bước 1 cả $A\text{-}B$ và $A\text{-}C$ đều nặng 1 nên chọn cạnh nào cũng được, cho các cây khác nhau. Tổng luôn là $1+1+5=7$ vì cạnh $C\text{-}D$ bắt buộc, cộng hai trong ba cạnh trọng số 1 của tam giác.
