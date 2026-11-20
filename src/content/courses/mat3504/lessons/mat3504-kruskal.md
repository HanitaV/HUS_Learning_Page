# Thuật toán Kruskal

## Vì sao cần

[Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) làm cây lớn lên từ một đỉnh. Kruskal nhìn bài toán [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst) theo cạnh: lấy các cạnh từ nhẹ đến nặng, cạnh nào không tạo chu trình thì nhận. Cách này không cần chọn đỉnh bắt đầu và rất hợp khi đồ thị được lưu dưới dạng danh sách cạnh. Điểm khó nằm ở việc kiểm tra "nối hai đầu có tạo chu trình không" nhanh, và cấu trúc hợp - tìm (union-find) giải quyết việc đó. Mô phỏng bên dưới hiển thị rừng được ghép dần.

## Ý tưởng

Theo slide: các cạnh được sắp xếp tăng dần theo trọng số ([Bài toán sắp xếp](#/courses/mat3504/lessons/mat3504-sorting-problem)); bắt đầu với một rừng rỗng (mỗi đỉnh là một cây riêng); mỗi bước thêm cạnh nhẹ nhất trong các cạnh chưa xét mà không tạo chu trình. Trong lúc chạy ta luôn có một **rừng**, các cây chưa liên thông. Mỗi cạnh được nhận sẽ nối hai cây khác nhau thành một cây. Thuật toán dừng khi đã nhận $n-1$ cạnh (hoặc hết cạnh).

```text
Kruskal(G):
    sắp xếp E theo trọng số tăng dần
    mỗi đỉnh v là một tập riêng (makeSet)
    T = rỗng
    for e = (u, v) theo thứ tự tăng dần:
        if find(u) != find(v):        // hai đầu ở hai cây khác nhau
            T = T hợp {e}
            union(u, v)
    return T
```

Tính đúng. Đầu ra là cây khung: không chu trình do ta chỉ nối hai cây khác nhau, và liên thông khi đồ thị liên thông, vì nếu còn hai cây riêng thì một cạnh nối chúng bị bỏ qua chỉ khi hai đầu đã cùng cây (vô lý). Đầu ra nhỏ nhất: khi nhận cạnh $e$ nối cây $C$ với phần còn lại, $e$ là cạnh nhẹ nhất đi ra khỏi $C$ (mọi cạnh nhẹ hơn đã được xét và hoặc đã nhận hoặc nằm trong cùng một cây), nên theo tính chất cắt trong [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst) nó an toàn.

**Union-find (hợp - tìm).** Mỗi tập là một cây ngược; `parent[x]` trỏ lên cha, gốc là đại diện. `find(x)` đi lên tới gốc, `union(a, b)` nối gốc này vào gốc kia. Hai kỹ thuật nén đường đi và hợp theo hạng làm mỗi thao tác gần như hằng số (tính trung bình rất nhỏ); với bài này chỉ cần biết chúng không làm thuật toán chậm hơn bước sắp xếp.

## Ví dụ chạy tay

Đồ thị của bài [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst). Sau khi sắp xếp: $2\text{-}3\,(1)$, $1\text{-}2\,(2)$, $1\text{-}3\,(3)$, $2\text{-}4\,(4)$, $3\text{-}4\,(5)$, $4\text{-}5\,(6)$, $3\text{-}5\,(7)$.

| Cạnh (w) | Tập chứa hai đầu | Quyết định | Rừng sau bước |
|---|---|---|---|
| 2-3 (1) | {2}, {3} | nhận | {2,3} {1} {4} {5} |
| 1-2 (2) | {1}, {2,3} | nhận | {1,2,3} {4} {5} |
| 1-3 (3) | cùng {1,2,3} | bỏ (tạo chu trình) | không đổi |
| 2-4 (4) | {1,2,3}, {4} | nhận | {1,2,3,4} {5} |
| 3-4 (5) | cùng {1,2,3,4} | bỏ | không đổi |
| 4-5 (6) | {1,2,3,4}, {5} | nhận | {1,2,3,4,5} |
| 3-5 (7) | | không xét nữa vì đã đủ 4 cạnh | |

MST: $2\text{-}3,\ 1\text{-}2,\ 2\text{-}4,\ 4\text{-}5$, tổng $1+2+4+6=13$, trùng kết quả của [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) (tập cạnh giống, thứ tự nhận khác).

## Cài đặt

```java
static class Edge {
    int u, v, w;
    Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }
}

static int find(int[] parent, int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];   // nén đường đi
        x = parent[x];
    }
    return x;
}

static int kruskal(int n, List<Edge> edges, List<Edge> mst) {
    edges.sort((a, b) -> Integer.compare(a.w, b.w));
    int[] parent = new int[n];
    for (int i = 0; i < n; i++) parent[i] = i;
    int total = 0;
    for (Edge e : edges) {
        int ru = find(parent, e.u), rv = find(parent, e.v);
        if (ru != rv) {              // hai cây khác nhau
            parent[ru] = rv;         // hợp hai cây
            mst.add(e);
            total += e.w;
            if (mst.size() == n - 1) break;
        }
    }
    return total;                    // mst.size() < n-1 nghĩa là đồ thị không liên thông
}
```

Dòng `if (ru != rv)` thay cho việc dò chu trình; `break` sớm khi đủ $n-1$ cạnh.

## Độ phức tạp

| Bước | Thời gian |
|---|---|
| Sắp xếp $E$ cạnh | $O(E\log E)$ |
| $E$ lần `find`/`union` | gần $O(E)$ (nén đường đi), nhiều nhất $O(E\log V)$ |
| Tổng | $O(E\log E)=O(E\log V)$ |

Vì $E\le V^2$ nên $\log E\le 2\log V$, hai cách viết tương đương. Bộ nhớ $O(V+E)$. Sắp xếp là phần chi phối, nên Kruskal tận dụng tốt [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort) hoặc [Sắp xếp nhanh (Quick Sort)](#/courses/mat3504/lessons/mat3504-quick-sort).

## Lỗi thường gặp

- Kiểm tra chu trình bằng "hai đỉnh đã được chọn rồi" thay vì "hai đỉnh cùng thành phần". Hai đỉnh đã có mặt trong rừng vẫn có thể thuộc hai cây khác nhau và cần được nối.
- Quên sắp xếp, hoặc sắp xếp giảm dần (khi đó ra cây khung *lớn nhất*).
- Không đặt lại `parent[i] = i` trước khi chạy, nên tập cũ rò rỉ giữa các lần gọi.
- Gộp tập sai: gán `parent[u] = v` thay vì `parent[find(u)] = find(v)`, làm mất liên kết của cả cây.
- Kỳ vọng cùng thứ tự cạnh với Prim. Tập cạnh MST có thể trùng nhưng thứ tự chọn khác hẳn.

## So sánh / liên hệ

| | [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) | Kruskal |
|---|---|---|
| Cách nhìn | Một cây mở rộng | Rừng được ghép dần |
| Đồ thị lưu | Ma trận kề hoặc danh sách kề | Danh sách cạnh |
| Thời gian | $O(V^2)$ hoặc $O(E\log V)$ | $O(E\log E)$ |
| Tốt khi | Đồ thị dày | Đồ thị thưa |

Cả hai đều là ví dụ của [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method). Chọn cách lưu đồ thị như thế nào xem [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3504/lessons/mat3504-graph-representation).

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) Bài 4 (cây bao trùm tối thiểu), có thể cài cả hai thuật toán rồi so tổng trọng số trên cùng đồ thị.
- [Bài tập: phương pháp tham lam](#/courses/mat3504/lessons/mat3504-hw-greedy): luyện các bài tham lam khác.
- Tự luyện: đồ thị 4 đỉnh có cạnh $A\text{-}B\,(4)$, $B\text{-}C\,(2)$, $C\text{-}D\,(3)$, $A\text{-}D\,(1)$, $A\text{-}C\,(5)$. Chạy Kruskal.

> **Đáp án**
> Sắp xếp: $A\text{-}D\,(1)$, $B\text{-}C\,(2)$, $C\text{-}D\,(3)$, $A\text{-}B\,(4)$, $A\text{-}C\,(5)$. Nhận $A\text{-}D$, $B\text{-}C$, rồi $C\text{-}D$ (nối {A,D} với {B,C}); đủ 3 cạnh. Tổng $1+2+3=6$. Cạnh $A\text{-}B$ và $A\text{-}C$ bị bỏ.

## Tự kiểm tra

1. Vì sao Kruskal bỏ cạnh $1\text{-}3\,(3)$ trong ví dụ?

> **Đáp án**
> Lúc đó 1 và 3 đã cùng thuộc tập {1,2,3} (qua $1\text{-}2$ và $2\text{-}3$), thêm cạnh $1\text{-}3$ sẽ tạo chu trình $1,2,3$.

2. Độ phức tạp của Kruskal bị chi phối bởi bước nào?

> **Đáp án**
> Bước sắp xếp cạnh, $O(E\log E)$. Các thao tác hợp - tìm tổng cộng nhỏ hơn hoặc bằng cỡ đó.

3. (Vận dụng) Dừng Kruskal sớm sau khi nhận $k$ cạnh ít hơn $n-1$ thì thu được gì? Dùng để gom cụm thế nào?

> **Đáp án**
> Thu được rừng gồm $n-k$ cây. Muốn gom $c$ cụm thì dừng khi còn đúng $c$ cây, tức nhận $n-c$ cạnh; khoảng cách giữa các cụm khi đó không nhỏ hơn trọng số cạnh bị bỏ cuối cùng.
