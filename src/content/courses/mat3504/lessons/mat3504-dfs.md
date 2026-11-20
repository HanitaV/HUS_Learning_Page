# Tìm kiếm theo chiều sâu (DFS)

## Vì sao cần

Nhiều câu hỏi về đồ thị quy về "từ đỉnh $s$ có đến được đỉnh $t$ không", "đồ thị có bao nhiêu thành phần liên thông", "có chu trình không". Muốn trả lời, ta cần một cách đi qua mọi đỉnh đạt tới được từ $s$ mà không đi vòng mãi. Tìm kiếm theo chiều sâu (Depth First Search, DFS) làm việc đó: đi sâu nhất có thể theo một nhánh, hết đường thì lùi lại thử nhánh khác. Đồ thị được lưu bằng [danh sách kề hay ma trận kề](#/courses/mat3504/lessons/mat3504-graph-representation). Bạn có thể bấm từng bước trong mô phỏng bên dưới để thấy thứ tự thăm.

## Ý tưởng

Theo giáo trình, đỉnh được thăm càng muộn thì càng sớm được duyệt xong (cơ chế LIFO, vào sau ra trước), nên DFS tự nhiên viết bằng [đệ quy](#/courses/mat3504/lessons/mat3504-recursion) hoặc bằng [ngăn xếp](#/courses/mat3514/lessons/mat3514-stack-adt).

Bất biến cần nhớ: mỗi đỉnh có ba trạng thái. Chưa thăm; đang thăm (còn nằm trên đường đệ quy hiện tại); đã duyệt xong. Mảng `visited` (giáo trình gọi là `Daxet`) ghi các đỉnh đã được thăm. Mỗi đỉnh chỉ được thăm **một lần**, nên dù đồ thị có chu trình DFS vẫn dừng.

Mỗi lần gọi `dfs(s)` thăm đúng các đỉnh cùng thành phần liên thông với $s$. Muốn duyệt cả đồ thị không liên thông, gọi `dfs` từ mọi đỉnh chưa thăm.

## Ví dụ chạy tay

Đồ thị 7 đỉnh trong [Đồ thị và Graph ADT](#/courses/mat3504/lessons/mat3504-graph-concepts), danh sách kề: $0:[1,2]$, $1:[0,2,3]$, $2:[0,1,4]$, $3:[1,4]$, $4:[2,3,5]$, $5:[4,6]$, $6:[5]$. Bắt đầu từ $0$, luôn xét láng giềng theo thứ tự trong danh sách.

| Bước | Đang ở | Hành động | Ngăn xếp gọi (từ gốc) |
|---|---|---|---|
| 1 | 0 | Thăm 0, xét 1 (chưa thăm) | 0 |
| 2 | 1 | Thăm 1; 0 đã thăm, xét 2 | 0, 1 |
| 3 | 2 | Thăm 2; 0, 1 đã thăm, xét 4 | 0, 1, 2 |
| 4 | 4 | Thăm 4; 2 đã thăm, xét 3 | 0, 1, 2, 4 |
| 5 | 3 | Thăm 3; 1, 4 đã thăm, hết láng giềng, quay lại 4 | 0, 1, 2, 4, 3 |
| 6 | 4 | Xét 5 (chưa thăm) | 0, 1, 2, 4 |
| 7 | 5 | Thăm 5; xét 6 | 0, 1, 2, 4, 5 |
| 8 | 6 | Thăm 6; hết láng giềng, rồi lùi lần lượt về 0 | 0, 1, 2, 4, 5, 6 |

Thứ tự thăm: $0,1,2,4,3,5,6$. Các cạnh dùng để đến đỉnh mới (cạnh cây) là $0\text{-}1,\ 1\text{-}2,\ 2\text{-}4,\ 4\text{-}3,\ 4\text{-}5,\ 5\text{-}6$.

## Cài đặt

Bản đệ quy trên danh sách kề (giữ code mẫu của bài):

```java
static void dfs(List<List<Integer>> adj, boolean[] seen, int u) {
    seen[u] = true;
    for (int v : adj.get(u)) {
        if (!seen[v]) dfs(adj, seen, v);
    }
}
```

Duyệt cả đồ thị và đếm thành phần liên thông:

```java
static int countComponents(List<List<Integer>> adj) {
    boolean[] seen = new boolean[adj.size()];
    int count = 0;
    for (int s = 0; s < adj.size(); s++) {
        if (!seen[s]) {
            dfs(adj, seen, s);
            count++;
        }
    }
    return count;
}
```

Bản dùng ngăn xếp tường minh (tránh tràn ngăn xếp gọi khi đồ thị sâu hàng chục nghìn đỉnh):

```java
static void dfsIterative(List<List<Integer>> adj, int s) {
    boolean[] seen = new boolean[adj.size()];
    Deque<Integer> stack = new ArrayDeque<>();
    stack.push(s);
    while (!stack.isEmpty()) {
        int u = stack.pop();
        if (seen[u]) continue;
        seen[u] = true;
        for (int v : adj.get(u)) {
            if (!seen[v]) stack.push(v);
        }
    }
}
```

Bản lặp đánh dấu khi *lấy ra* nên một đỉnh có thể được đẩy nhiều lần; thứ tự thăm có thể khác bản đệ quy (đỉnh kề cuối danh sách được thăm trước). Cả hai đều đúng là DFS về tập đỉnh thăm được.

**Biến thể trong giáo trình.** Giáo trình viết DFS để liệt kê *mọi đường đi* từ $s$ đến $t$: sau khi gọi đệ quy xong, đặt lại `daxet[u] = 0` ("bỏ việc ghi nhận") để đỉnh $u$ dùng được trong đường khác, giống [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking). Mảng `Truoc[u]` lưu đỉnh đứng trước $u$ để in lại đường đi. Nhờ bỏ đánh dấu, thuật toán liệt kê được mọi đường đi đơn nhưng thời gian có thể lên mũ; DFS duyệt thông thường ở trên không bỏ đánh dấu và chỉ tốn tuyến tính. Bài [Tìm đường trong mê cung bằng quay lui](#/courses/mat3504/lessons/mat3504-maze-path-backtracking) dùng đúng tư duy bỏ đánh dấu này.

## Độ phức tạp

| | Danh sách kề | Ma trận kề |
|---|---|---|
| Thời gian | $\Theta(n+m)$ | $\Theta(n^2)$ |
| Bộ nhớ phụ | $O(n)$ (mảng `seen` + độ sâu đệ quy) | $O(n)$ |

Lý do: mỗi đỉnh thăm đúng một lần, và với mỗi đỉnh ta xét toàn bộ láng giềng của nó, tổng các bậc là $2m$ (vô hướng). Với ma trận, xét láng giềng của một đỉnh phải quét cả hàng $n$ ô. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) để đọc ký hiệu. Độ sâu đệ quy tối đa là $n$ (đồ thị dạng đường thẳng).

## Lỗi thường gặp

- Không đánh dấu đã thăm (hoặc đánh dấu muộn), nên đồ thị có chu trình làm đệ quy lặp vô hạn.
- Gọi `dfs` đúng một lần rồi kết luận mọi đỉnh đã được thăm, trong khi đồ thị không liên thông.
- Ở đồ thị vô hướng, coi cạnh quay về cha là chu trình. Khi phát hiện chu trình phải bỏ qua đúng đỉnh cha (xem Luyện tập 5 trong [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph)).
- Dùng đệ quy cho đồ thị rất sâu rồi gặp `StackOverflowError`; khi đó chuyển sang bản dùng ngăn xếp tường minh.
- Nhầm thứ tự thăm giữa bản đệ quy và bản lặp, rồi kết luận một bản sai.

## So sánh / liên hệ

[Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3504/lessons/mat3504-bfs) cũng thăm đủ các đỉnh đạt được với $\Theta(n+m)$ nhưng đi theo lớp bằng [hàng đợi](#/courses/mat3504/lessons/mat3504-queue-adt) và cho đường đi ít cạnh nhất; DFS không đảm bảo điều này. DFS là nền của phát hiện chu trình, thành phần liên thông và tìm đường trong mê cung ([Khám phá mê cung bằng ngăn xếp](#/courses/mat3514/lessons/mat3514-maze-stack)).

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) Bài 4: cài DFS; Luyện tập 3 (DFS of Graph), Luyện tập 5 và 6 (phát hiện chu trình vô hướng, có hướng), Luyện tập 7 (đếm số đảo = số thành phần liên thông trên lưới) và Luyện tập 8 (flood fill).
- Tự luyện: trên đồ thị của ví dụ, xóa cạnh $4\text{-}5$ rồi đếm thành phần liên thông bằng `countComponents`.

> **Đáp án**
> Còn hai thành phần: $\{0,1,2,3,4\}$ và $\{5,6\}$. Gọi `dfs` từ 0 thăm 5 đỉnh đầu; vòng lặp ngoài gặp 5 chưa thăm nên gọi lần hai; kết quả `count = 2`.

## Tự kiểm tra

1. Vì sao DFS trên đồ thị có chu trình vẫn dừng?

> **Đáp án**
> Vì mỗi đỉnh bị đánh dấu `seen` ngay khi được thăm và không bao giờ thăm lại, nên số lần gọi `dfs` tối đa là $n$.

2. DFS bắt đầu từ 2 trên đồ thị ví dụ ở trên cho thứ tự thăm nào (láng giềng theo thứ tự danh sách)?

> **Đáp án**
> $2$, rồi $0$ (láng giềng đầu), từ $0$ sang $1$, từ $1$ xét $0,2$ đã thăm rồi sang $3$, từ $3$ xét $1$ đã thăm rồi sang $4$, từ $4$ xét $2,3$ đã thăm rồi sang $5$, rồi $6$. Thứ tự: $2,0,1,3,4,5,6$.

3. (Vận dụng) Cho đồ thị vô hướng có $n$ đỉnh và $m$ cạnh, trong đó DFS từ một đỉnh phủ hết $n$ đỉnh. Làm sao dùng DFS biết đồ thị có chu trình không?

> **Đáp án**
> Khi đang ở $u$ mà gặp láng giềng $v$ đã thăm và $v$ không phải cha của $u$ trong cây DFS thì có chu trình. Cách khác: một đồ thị liên thông không chu trình là cây nên có đúng $n-1$ cạnh; nếu $m\ge n$ thì chắc chắn có chu trình.
