# Đồ thị và Graph ADT

## Vì sao cần

Bản đồ đường bộ, mạng xã hội, sơ đồ môn học tiên quyết hay mạng máy tính đều có chung một dạng: một tập đối tượng và các mối nối giữa chúng. [Cây](#/courses/mat3514/lessons/mat3514-tree-concepts) chỉ mô tả được quan hệ cha - con không có chu trình. Đồ thị (graph) bỏ hạn chế đó nên mô hình hóa được hầu hết các quan hệ thực tế. Bài này chốt thuật ngữ và giao diện (Graph ADT) mà mọi thuật toán phía sau dùng. Bạn có thể xem đồ thị mẫu trong khung mô phỏng ngay bên dưới.

## Định nghĩa và thuật ngữ

Đồ thị $G=(V,E)$ gồm tập đỉnh (vertex) $V$ và tập cạnh (edge) $E$. Ký hiệu $n=|V|$, $m=|E|$.

- **Vô hướng (undirected)**: cạnh $\{u,v\}$ không có chiều, nối $u$ với $v$ và ngược lại.
- **Có hướng (directed)**: cung $(u,v)$ đi từ $u$ (gốc) tới $v$ (đích); $(u,v)\ne(v,u)$.
- **Có trọng số (weighted)**: mỗi cạnh mang một số, ví dụ độ dài đường hay chi phí.
- **Kề (adjacent)**: $u$, $v$ là hai đầu mút của một cạnh. Cạnh đó *liên thuộc (incident)* với cả hai đỉnh.
- **Bậc (degree)**: số cạnh liên thuộc với đỉnh. Đồ thị có hướng tách thành bậc ra (`outDegree`) và bậc vào (`inDegree`).
- **Đường đi (path)**: dãy đỉnh $v_0,v_1,\dots,v_k$ mà mỗi cặp liên tiếp là một cạnh. **Chu trình (cycle)** là đường đi có $v_0=v_k$ và không lặp cạnh.
- **Liên thông (connected)**: giữa hai đỉnh bất kỳ có đường đi. Nếu không, đồ thị tách thành nhiều *thành phần liên thông*.
- **Đồ thị đơn (simple)**: không có khuyên (cạnh nối đỉnh với chính nó) và không có hai cạnh song song. Các bài sau mặc định đồ thị đơn.

Hai hệ thức cần nhớ. Với đồ thị vô hướng, tổng bậc mọi đỉnh bằng $2m$, vì mỗi cạnh được tính ở hai đầu mút:

$$\sum_{v\in V}\deg(v)=2m$$

Với đồ thị đơn vô hướng, $m\le \dfrac{n(n-1)}{2}$; với đồ thị đơn có hướng, $m\le n(n-1)$. Đồ thị có $m$ gần $n^2$ gọi là *dày*, có $m$ cỡ $n$ gọi là *thưa*. Phân biệt này quyết định cách lưu trong [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3514/lessons/mat3514-graph-representation).

## Ví dụ chạy tay

Lấy đồ thị vô hướng 7 đỉnh trong slide: các cạnh $0\text{-}1,\ 0\text{-}2,\ 1\text{-}2,\ 1\text{-}3,\ 2\text{-}4,\ 3\text{-}4,\ 4\text{-}5,\ 5\text{-}6$.

| Đỉnh | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Bậc | 2 | 3 | 3 | 2 | 3 | 2 | 1 |

Tổng bậc là $16=2\times 8$, khớp với $m=8$. Đồ thị liên thông. Chu trình $0,1,2,0$ có độ dài 3; chu trình $1,2,4,3,1$ có độ dài 4. Cạnh $5\text{-}6$ không nằm trên chu trình nào; xóa nó thì đỉnh 6 bị cô lập và đồ thị mất liên thông.

## Graph ADT

Theo slide (Goodrich, mục 14.1.1), Graph ADT là tập phép toán sau, không phụ thuộc cách lưu trữ (xem [Kiểu dữ liệu trừu tượng (ADT)](#/courses/mat3514/lessons/mat3514-abstraction-adt)):

| Nhóm | Phép toán | Ý nghĩa |
|---|---|---|
| Truy vấn chung | `numVertices()`, `vertices()` | Số đỉnh; duyệt mọi đỉnh |
| | `numEdges()`, `edges()` | Số cạnh; duyệt mọi cạnh |
| | `getEdge(u, v)` | Cạnh từ $u$ tới $v$, `null` nếu không có (vô hướng thì $(u,v)$ và $(v,u)$ như nhau) |
| | `endVertices(e)` | Hai đầu mút của $e$ (có hướng: gốc trước, đích sau) |
| | `opposite(v, e)` | Đầu mút còn lại của $e$ khi biết $v$ |
| Bậc, láng giềng | `outDegree(v)`, `inDegree(v)` | Bậc ra, bậc vào (vô hướng: bằng nhau) |
| | `outgoingEdges(v)`, `incomingEdges(v)` | Duyệt cạnh ra, cạnh vào |
| Cập nhật | `insertVertex(x)` | Thêm đỉnh chứa phần tử $x$ |
| | `insertEdge(u, v, x)` | Thêm cạnh $u\to v$ chứa $x$; lỗi nếu cạnh đã tồn tại |
| | `removeVertex(v)` | Xóa $v$ cùng mọi cạnh liên thuộc |
| | `removeEdge(e)` | Xóa cạnh $e$ |

Điểm cần chú ý: `insertEdge` báo lỗi khi đã có cạnh, nên ADT này mô tả đồ thị đơn. Chi phí từng phép toán phụ thuộc cài đặt; so sánh trong [Biểu diễn đồ thị: ma trận kề, danh sách kề, danh sách cạnh](#/courses/mat3514/lessons/mat3514-graph-representation). Phiếu [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) yêu cầu bạn cài đúng các phép toán này.

## Lỗi thường gặp

- Nhầm "cạnh" của đồ thị vô hướng với "cung" của đồ thị có hướng: ở đồ thị có hướng $a\to b$ không kéo theo $b\to a$.
- Dùng công thức tổng bậc $=2m$ cho đồ thị có hướng. Ở đó tổng bậc ra bằng tổng bậc vào bằng $m$.
- Coi "liên thông" của đồ thị có hướng giống vô hướng. Có hướng cần phân biệt liên thông mạnh (đi được cả hai chiều) và liên thông yếu (bỏ hướng thì liên thông).
- Quên rằng đồ thị có thể không liên thông. Thuật toán duyệt ([Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3514/lessons/mat3514-dfs), [Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3514/lessons/mat3514-bfs)) từ một đỉnh chỉ phủ một thành phần.
- Đánh số đỉnh từ 1 nhưng cài mảng từ 0 (hoặc ngược lại) khiến lệch chỉ số.

## Luyện tập

- [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph): cài Graph ADT bằng ma trận kề cho đồ thị vô hướng không trọng số và có hướng có trọng số (Bài 1, 2), rồi viết hàm kiểm thử (Bài 3).
- Tự luyện: đồ thị đơn vô hướng 10 đỉnh nhiều nhất bao nhiêu cạnh, và một cây 10 đỉnh có bao nhiêu cạnh?

> **Đáp án**
> Nhiều nhất $10\cdot 9/2=45$ cạnh. Cây 10 đỉnh có đúng $9$ cạnh ($n-1$); đó là đồ thị liên thông ít cạnh nhất.

## Tự kiểm tra

1. Đồ thị vô hướng có 5 đỉnh với bậc 3, 3, 2, 2, 2. Có bao nhiêu cạnh?

> **Đáp án**
> Tổng bậc $=12$, nên $m=12/2=6$ cạnh.

2. Vì sao `getEdge(u, v)` trả về `null` thay vì báo lỗi khi không có cạnh?

> **Đáp án**
> Vì "không có cạnh" là kết quả hợp lệ của một truy vấn, không phải lỗi sử dụng. Các thuật toán dùng giá trị `null` để kiểm tra hai đỉnh có kề nhau không. Lỗi chỉ xảy ra với `insertEdge` trùng cạnh hoặc `opposite` với cạnh không liên thuộc đỉnh.

3. (Vận dụng) Một đồ thị vô hướng có $n$ đỉnh, liên thông và không chu trình. Hỏi nó có bao nhiêu cạnh và vì sao xóa một cạnh bất kỳ thì mất liên thông?

> **Đáp án**
> Đó là một cây nên có $n-1$ cạnh (xem [Cây: định nghĩa và thuật ngữ](#/courses/mat3514/lessons/mat3514-tree-concepts)). Nếu xóa cạnh $\{u,v\}$ mà vẫn còn đường đi khác từ $u$ tới $v$, đường đó cùng cạnh đã xóa tạo chu trình, mâu thuẫn với giả thiết không có chu trình. Vậy mọi cạnh đều là cạnh cầu.
