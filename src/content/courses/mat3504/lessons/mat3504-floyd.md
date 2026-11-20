# Thuật toán Floyd

## Vì sao cần

[Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra) cho đường ngắn nhất từ **một** nguồn. Khi cần bảng khoảng cách giữa **mọi cặp** đỉnh (ví dụ bảng cước vận chuyển giữa các kho), ta có thể chạy Dijkstra $n$ lần, nhưng Floyd làm cùng việc bằng ba vòng lặp lồng nhau rất ngắn và còn chịu được cạnh âm. Floyd là ví dụ cổ điển của [quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming): bảng 2 chiều được tính dần theo số đỉnh trung gian cho phép. Mô phỏng bên dưới cập nhật ma trận khoảng cách sau mỗi giá trị của $k$.

## Ý tưởng

Giáo trình dùng nguyên lý tối ưu: nếu $k$ nằm trên đường ngắn nhất từ $i$ đến $j$ thì đoạn $i\to k$ và đoạn $k\to j$ cũng phải ngắn nhất. Đây chính là tính chất "cấu trúc con tối ưu" trong [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements).

Đồ thị có hướng có trọng số, đỉnh $1,\dots,n$, lưu bằng ma trận trọng số $a$ ([Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3504/lessons/mat3504-graph-representation)): $a_{ij}$ là trọng số cung $(i,j)$, $a_{ii}=0$, và $a_{ij}=\infty$ nếu không có cung. Gọi $d^{(k)}_{ij}$ là độ dài đường ngắn nhất từ $i$ đến $j$ mà mọi đỉnh trung gian đều thuộc $\{1,\dots,k\}$. Khi đó:

$$d^{(0)}_{ij}=a_{ij},\qquad d^{(k)}_{ij}=\min\bigl(d^{(k-1)}_{ij},\ d^{(k-1)}_{ik}+d^{(k-1)}_{kj}\bigr)$$

Hai lựa chọn: đường tốt nhất không đi qua $k$ (giữ $d^{(k-1)}_{ij}$), hoặc đi qua $k$ đúng một lần (ghép hai đoạn qua $\{1..k-1\}$). Sau bước $k=n$, $d^{(n)}_{ij}$ là khoảng cách ngắn nhất thật. Để dựng đường đi, giữ thêm ma trận $p$: $p_{ij}=k$ nếu lần cập nhật gần nhất làm đường $i\to j$ đi qua trung gian $k$, ngược lại $p_{ij}=0$ (đi thẳng).

Có thể ghi đè một ma trận $d$ duy nhất, vì trong bước $k$ hàng $k$ và cột $k$ không đổi (giá trị $d_{kk}=0$ khi không có chu trình âm).

## Ví dụ chạy tay

Đồ thị 4 đỉnh trong slide: $1\to2\,(5)$; $2\to1\,(50)$, $2\to3\,(15)$, $2\to4\,(5)$; $3\to1\,(30)$, $3\to4\,(15)$; $4\to1\,(15)$, $4\to3\,(5)$. Ma trận ban đầu $d^{(0)}=a$ ($\infty$ viết là `inf`):

| $d^{(0)}$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 0 | 5 | inf | inf |
| 2 | 50 | 0 | 15 | 5 |
| 3 | 30 | inf | 0 | 15 |
| 4 | 15 | inf | 5 | 0 |

Sau $k=1$ (đi qua đỉnh 1): $d_{31}+d_{12}=30+5=35<\infty$ nên $d_{32}=35$; $d_{41}+d_{12}=15+5=20$ nên $d_{42}=20$. Hàng 1 không đổi: từ 1 chỉ đi thẳng được tới 2, còn $d_{13},d_{14}$ vẫn $\infty$ vì đường từ 1 tới 3 và 4 phải qua đỉnh 2.

Sau $k=2$: $d_{12}+d_{23}=5+15=20$ nên $d_{13}=20$ ($p_{13}=2$); $d_{12}+d_{24}=10$ nên $d_{14}=10$ ($p_{14}=2$).

Sau $k=3$: chỉ $d_{23}$ và $d_{21}$ đáng chú ý: $d_{23}+d_{31}=15+30=45<50$ nên $d_{21}=45$ ($p_{21}=3$).

Sau $k=4$ (kết quả cuối): $d_{13}=\min(20,\ d_{14}+d_{43})=\min(20,\,10+5)=15$ ($p_{13}=4$); $d_{21}=\min(45,\ d_{24}+d_{41})=5+15=20$ ($p_{21}=4$); $d_{23}=\min(15,\ 5+5)=10$ ($p_{23}=4$).

| $d^{(4)}$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 0 | 5 | 15 | 10 |
| 2 | 20 | 0 | 10 | 5 |
| 3 | 30 | 35 | 0 | 15 |
| 4 | 15 | 20 | 5 | 0 |

Truy vết $1\to3$: $d_{13}=15$, $p_{13}=4$ nên đường là $1\to4$ rồi $4\to3$; $p_{14}=2$ nên $1\to4$ là $1\to2\to4$; $p_{12}=p_{43}=0$ là cạnh trực tiếp. Đường đầy đủ: $1\to2\to4\to3$, tổng $5+5+5=15$, khớp với slide.

## Cài đặt

```java
static final int INF = Integer.MAX_VALUE / 2;   // chia đôi để INF + INF không tràn

static void floyd(int[][] d, int[][] p) {
    int n = d.length;                           // d khởi tạo = ma trận trọng số a
    for (int[] row : p) Arrays.fill(row, -1);   // -1: đi thẳng, không có trung gian
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            if (d[i][k] >= INF) continue;       // i không tới được k
            for (int j = 0; j < n; j++) {
                if (d[k][j] >= INF) continue;
                if (d[i][k] + d[k][j] < d[i][j]) {
                    d[i][j] = d[i][k] + d[k][j];
                    p[i][j] = k;                // ghi nhớ đỉnh trung gian
                }
            }
        }
    }
}

static void printPath(int[][] p, int x, int y, StringBuilder sb) {
    int r = p[x][y];
    if (r == -1) { sb.append(" -> ").append(y); return; }
    printPath(p, x, r, sb);
    printPath(p, r, y, sb);
}
```

Gọi `sb.append(x)` trước rồi `printPath(p, x, y, sb)` để in cả đỉnh đầu. Vòng ngoài **phải** là $k$ (đỉnh trung gian); đổi $k$ vào trong sẽ không còn là quy hoạch động đúng. Hai dòng `continue` giống điều kiện `d[i][k] < vc` trong giáo trình, tránh cộng với vô cùng. Sau khi chạy, nếu có $d_{ii}<0$ thì đồ thị có chu trình âm.

## Độ phức tạp

| | Giá trị |
|---|---|
| Thời gian | $\Theta(n^3)$ (ba vòng lặp lồng nhau, mọi trường hợp) |
| Bộ nhớ | $\Theta(n^2)$ cho $d$ và $p$ |

Chạy [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra) bản heap từ mọi đỉnh tốn $O(n(n+m)\log n)$, tốt hơn khi đồ thị thưa; Floyd gọn và dễ cài khi $n$ nhỏ hoặc đồ thị dày. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) để so sánh các bậc tăng trưởng.

## Lỗi thường gặp

- Đặt vòng lặp $k$ ở trong thay vì ngoài cùng. Kết quả sai vì khi xét $k$ chưa đủ thông tin các trung gian nhỏ hơn.
- Dùng `Integer.MAX_VALUE` làm vô cùng rồi cộng hai số như vậy (tràn thành số âm). Dùng `MAX_VALUE/2` hoặc kiểm tra trước khi cộng.
- Quên đặt $d_{ii}=0$ ở ma trận ban đầu, làm đường đi từ đỉnh đến chính nó có độ dài sai.
- Không nhận ra chu trình âm; khi đó "khoảng cách ngắn nhất" không xác định (giảm mãi), và đường chéo $d_{ii}<0$ là dấu hiệu.
- Truy vết đường đi chỉ đọc $p_{ij}$ một lần thay vì đệ quy hai nửa $i\to p_{ij}$ và $p_{ij}\to j$.

## So sánh / liên hệ

[Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra): một nguồn, trọng số không âm, tham lam. Floyd: mọi cặp, cho phép cạnh âm (không chu trình âm), quy hoạch động. Cách điền bảng theo $k$ giống các bài khác của [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming), ví dụ [Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp) và [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp).

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph): dùng ma trận kề của Bài 2 làm đầu vào; có thể thêm Floyd để so kết quả với Dijkstra chạy từ mọi đỉnh.
- [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp): các bài quy hoạch động có bảng 2 chiều.
- Tự luyện: đồ thị 3 đỉnh $1\to2\,(1)$, $2\to3\,(1)$, $1\to3\,(5)$. Tính $d_{13}$ và $p_{13}$ bằng Floyd.

> **Đáp án**
> $d^{(0)}_{13}=5$. Với $k=1$: không có cung vào 1 nên không đổi. Với $k=2$: $d_{12}+d_{23}=2<5$ nên $d_{13}=2$ và $p_{13}=2$. Đường đi $1\to2\to3$.

## Tự kiểm tra

1. Công thức truy hồi của Floyd diễn đạt hai khả năng nào?

> **Đáp án**
> Đường ngắn nhất $i\to j$ với trung gian trong $\{1..k\}$ hoặc không đi qua $k$ (giá trị $d^{(k-1)}_{ij}$), hoặc đi qua $k$ và bằng $d^{(k-1)}_{ik}+d^{(k-1)}_{kj}$.

2. Vì sao có thể dùng một ma trận $d$ duy nhất thay vì $n$ ma trận $d^{(k)}$?

> **Đáp án**
> Trong bước $k$, hàng $k$ và cột $k$ không bị đổi (vì $d_{kk}=0$), nên các giá trị $d_{ik}$, $d_{kj}$ đọc khi đang ghi đè vẫn đúng bằng giá trị của bước $k-1$.

3. (Vận dụng) Cho $n=200$ đỉnh. Ước lượng số phép so sánh của Floyd và nhận xét về thời gian chạy Dijkstra từ mọi đỉnh trên đồ thị thưa $m=1000$.

> **Đáp án**
> Floyd: $n^3=8\times10^6$ lần so sánh. Dijkstra bản heap từ mọi đỉnh: cỡ $n(n+m)\log n\approx 200\cdot1200\cdot 8\approx 2\times10^6$, nhanh hơn một chút trên đồ thị thưa nhưng cùng bậc thực tế với $n$ nhỏ; Floyd được chọn vì mã ngắn và hỗ trợ cạnh âm.
