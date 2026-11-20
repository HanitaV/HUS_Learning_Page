# Bài tập: phương pháp tham lam

## Đề bài

Bài tập tuần 4 môn Thiết kế và đánh giá thuật toán, chủ đề phương pháp tham lam. Mục tiêu: nắm ý tưởng và lược đồ tổng quát của phương pháp tham lam cùng ưu, nhược điểm; biết triển khai bài tập bằng phương pháp này. Chương trình viết bằng Java, C/C++ hoặc Python, kèm hướng dẫn chạy nếu cần.

**Bài 1.** Viết chương trình cho các thuật toán đã phân tích và xây dựng trong bài giảng, đánh giá thời gian thực hiện (nên vẽ biểu đồ):

1. Bài toán đổi tiền (Change Coins).
2. Bài toán xếp balo 0-1 (0-1 Knapsack).
3. Bài toán lập lịch sử dụng tài nguyên (Activity Selection / Task Scheduling).
4. Thuật toán Prim tìm cây bao trùm tối thiểu.
5. Thuật toán Kruskal tìm cây bao trùm tối thiểu.
6. Thuật toán Dijkstra.
7. Mã và cây Huffman.

**Bài 2.** Đọc thêm sách của Anany Levitin, hoàn thành bài tập chương 9 (mỗi phần chọn ít nhất một bài):

1. Exercise 9.1: các bài 10, 11, 12, 13, 14, 15.
2. Exercise 9.2: các bài 1, 3, 5, 7, 9.
3. Exercise 9.3.
4. Exercise 9.4.

Lưu ý: balo 0-1 xuất hiện trong danh sách của bài tham lam. Tham lam theo đơn giá không bảo đảm tối ưu cho balo 0-1 (chỉ đúng cho balo liên tục, lấy được một phần vật), hãy cài cả hai và so sánh.

## Kiến thức cần ôn

- Bài 1.1: [Đổi tiền tham lam](#/courses/mat3504/lessons/mat3504-coin-change-greedy) cho lược đồ đổi tiền và phản ví dụ $\{10,6,1\}$.
- Bài 1.2: [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method) cho balo liên tục, và [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01) cho phương án đúng của balo 0-1.
- Bài 1.3: [Chọn hoạt động (Activity Selection)](#/courses/mat3504/lessons/mat3504-activity-selection), cần sắp theo thời điểm kết thúc.
- Bài 1.4 đến 1.6: [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim), [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal), [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra). Chuẩn bị nền với [Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst), [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3504/lessons/mat3504-graph-representation) và [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) (hàng đợi ưu tiên).
- Bài 1.7: Huffman dùng hàng đợi ưu tiên, xem [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt).
- Đánh giá thời gian: [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Hướng tiếp cận

1. **Đổi tiền**: cài đặt hàm tham lam, cài thêm quy hoạch động ([Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements)) để so sánh số đồng và thời gian.
2. **Balo**: cài tham lam theo đơn giá cho bản liên tục; cài bảng QHĐ cho bản 0-1; tìm đầu vào mà tham lam theo đơn giá sai cho bản 0-1.
3. **Chọn hoạt động**: sắp theo $f$, một lượt duyệt. Sinh dữ liệu ngẫu nhiên cỡ $n=10^3,10^4,10^5,10^6$ để đo.
4. **Prim**: dùng hàng đợi ưu tiên chứa cạnh hoặc đỉnh với khóa là trọng số nhỏ nhất nối tới cây đang xây.
5. **Kruskal**: sắp cạnh theo trọng số, dùng cấu trúc hợp nhất tập (union-find) để bỏ cạnh tạo chu trình.
6. **Dijkstra**: hàng đợi ưu tiên theo khoảng cách tạm thời, cập nhật (relax) các cạnh ra khỏi đỉnh vừa chốt; chỉ đúng khi trọng số không âm.
7. **Huffman**: đếm tần suất ký tự, đưa mỗi ký tự thành một nút vào hàng đợi ưu tiên, lặp lại lấy hai nút tần suất nhỏ nhất gộp thành nút cha, cho tới khi còn một nút; đọc mã từ đường đi trái 0, phải 1.
8. **Đo thời gian**: dùng `System.nanoTime()`, đo nhiều lần, bỏ lần chạy khởi động, ghi vào bảng rồi vẽ biểu đồ theo $n$.

## Gợi ý theo bậc

::: Gợi ý 1: đổi tiền và balo
Với đổi tiền, thử hệ $\{1,5,10,50\}$ rồi $\{10,6,1\}$. Hệ thứ hai cho thấy tham lam sai nên bạn cần phương án đối chứng. Với balo, thử ba vật (trọng lượng, giá trị) $(10,60),(20,100),(30,120)$ với sức chứa 50.
:::

::: Gợi ý 2: chọn hoạt động
Sắp theo thời điểm kết thúc, giữ biến `lastFinish`. Nhận hoạt động nào có `s >= lastFinish`.
:::

::: Gợi ý 3: Huffman
Mỗi nút lưu tần suất, ký tự (nếu là lá), con trái, con phải. Dùng `PriorityQueue<Node>` với bộ so sánh theo tần suất. Mã của ký tự là chuỗi các bước từ gốc xuống lá.
:::

::: Gợi ý 4: đồ thị
Cài đồ thị bằng danh sách kề. Prim và Dijkstra chỉ khác khóa ưu tiên: Prim dùng trọng số cạnh nối tới cây, Dijkstra dùng tổng quãng đường từ nguồn.
:::

## Lời giải tham khảo

::: Lời giải 1.1: đổi tiền
```java
static int[] changeGreedy(int[] coins, int amount) {   // coins sắp giảm dần
    int[] k = new int[coins.length];
    for (int i = 0; i < coins.length && amount > 0; i++) {
        k[i] = amount / coins[i];
        amount -= k[i] * coins[i];
    }
    return amount > 0 ? null : k;
}

static int minCoinsDp(int[] coins, int amount) {       // phương án đối chứng
    int inf = Integer.MAX_VALUE / 2;
    int[] d = new int[amount + 1];
    java.util.Arrays.fill(d, inf);
    d[0] = 0;
    for (int v = 1; v <= amount; v++)
        for (int c : coins)
            if (c <= v) d[v] = Math.min(d[v], d[v - c] + 1);
    return d[amount] >= inf ? -1 : d[amount];
}
```
Với $\{10,6,1\}$, $T=55$: `changeGreedy` cho 10 đồng, `minCoinsDp` cho 8.
:::

::: Lời giải 1.2: balo liên tục
```java
static double fractionalKnapsack(double[] w, double[] v, double cap) {
    Integer[] ord = new Integer[w.length];
    for (int i = 0; i < ord.length; i++) ord[i] = i;
    java.util.Arrays.sort(ord, (a, b) -> Double.compare(v[b] / w[b], v[a] / w[a]));
    double total = 0;
    for (int i : ord) {
        if (cap <= 0) break;
        double take = Math.min(w[i], cap);
        total += v[i] * take / w[i];
        cap -= take;
    }
    return total;
}
```
Với $(10,60),(20,100),(30,120)$, sức chứa 50: bản liên tục cho 240. Bản 0-1 (bảng QHĐ trong [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01)) cho 220, còn tham lam theo đơn giá nhận hai vật đầu chỉ được 160.
:::

::: Lời giải 1.3: chọn hoạt động
```java
static int countActivities(int[] s, int[] f) {
    Integer[] ord = new Integer[s.length];
    for (int i = 0; i < ord.length; i++) ord[i] = i;
    java.util.Arrays.sort(ord, (a, b) -> Integer.compare(f[a], f[b]));
    int count = 0, last = Integer.MIN_VALUE;
    for (int i : ord) {
        if (s[i] >= last) { count++; last = f[i]; }
    }
    return count;
}
```
:::

::: Lời giải 1.7: mã Huffman
```java
static class Node {
    int freq; char ch; Node left, right;
    Node(int freq, char ch, Node l, Node r) {
        this.freq = freq; this.ch = ch; left = l; right = r;
    }
}

static java.util.Map<Character, String> huffman(java.util.Map<Character, Integer> freq) {
    java.util.PriorityQueue<Node> pq =
        new java.util.PriorityQueue<>((a, b) -> Integer.compare(a.freq, b.freq));
    for (var e : freq.entrySet()) pq.add(new Node(e.getValue(), e.getKey(), null, null));
    while (pq.size() > 1) {
        Node a = pq.poll(), b = pq.poll();               // hai tần suất nhỏ nhất
        pq.add(new Node(a.freq + b.freq, '\0', a, b));
    }
    java.util.Map<Character, String> code = new java.util.HashMap<>();
    walk(pq.poll(), "", code);
    return code;
}

static void walk(Node x, String path, java.util.Map<Character, String> code) {
    if (x == null) return;
    if (x.left == null && x.right == null) {
        code.put(x.ch, path.isEmpty() ? "0" : path);   // trường hợp chỉ có một ký tự
        return;
    }
    walk(x.left, path + "0", code);
    walk(x.right, path + "1", code);
}
```
Với tần suất a:5, b:9, c:12, d:13, e:16, f:45 tổng độ dài mã có trọng số là 224 (mã c, e, a, b, d dài 3 hoặc 4 bit, f dài 1 bit); các mã cụ thể có thể khác tùy cách xử lý hòa nhưng tổng này không đổi.
:::

::: Lời giải 1.4 đến 1.6: Prim, Kruskal, Dijkstra
Cài theo từng bài [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim), [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal), [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra); mỗi bài có thuật toán và độ phức tạp. Với đồ thị $V$ đỉnh, $E$ cạnh và hàng đợi ưu tiên nhị phân thì Prim và Dijkstra là $O(E\log V)$, Kruskal là $O(E\log E)$.
:::

## Kiểm tra lời giải

| Bài | Đầu vào | Kết quả mong đợi |
|---|---|---|
| Đổi tiền | $\{50,10,5,1\}$, $T=78$ | $k=(1,2,1,3)$, 7 đồng |
| Đổi tiền | $\{10,6,1\}$, $T=55$ | tham lam 10 đồng; QHĐ 8 đồng |
| Đổi tiền | $\{5,2\}$, $T=3$ | không có nghiệm (`null`) |
| Balo liên tục | $(10,60),(20,100),(30,120)$, sức chứa 50 | 240 |
| Balo 0-1 | như trên | 220 (vật 2 và 3) |
| Chọn hoạt động | $(1,3),(2,5),(4,7),(1,8),(5,9),(8,10),(9,11),(11,14),(13,16)$ | 4 hoạt động |
| Chọn hoạt động | rỗng | 0 |
| Chọn hoạt động | một hoạt động | 1 |
| Huffman | một ký tự duy nhất | mã "0" |

## Sau bài này

Tiếp theo học [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) để giải các bài mà tham lam không bảo đảm tối ưu, đặc biệt balo 0-1 trong [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01).
