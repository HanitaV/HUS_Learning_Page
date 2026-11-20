# Khám phá mê cung bằng ngăn xếp

## Bài toán

Cho một mê cung dạng lưới, ô xuất phát $S$ và ô đích $E$. Có tồn tại đường đi từ $S$ tới $E$ không, và nếu có thì đường đó là gì? Slide đặt câu hỏi: khi đi tới ngõ cụt thì làm gì? Quay về $S$ làm lại từ đầu thì phí. Cách hợp lý hơn là lần ngược các bước đi cho tới ngã rẽ gần nhất còn hướng chưa thử, rồi đi tiếp hướng đó. Mô phỏng bên dưới vẽ đường đi hiện tại và nội dung ngăn xếp.

## Kiến thức sử dụng

- [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt): ngăn xếp (vào sau ra trước) lưu đường đi hiện tại; ngã rẽ gần nhất luôn ở đỉnh, nên lùi bằng `pop`.
- [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking): đây là quay lui viết không đệ quy, ngăn xếp thay cho ngăn xếp lời gọi. Cùng ý với [Tìm đường trong mê cung bằng quay lui](#/courses/mat3504/lessons/mat3504-maze-path-backtracking).
- [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination): khử đệ quy bằng cách tự quản lý ngăn xếp.

## Phân tích

Slide mô hình hóa như sau: mỗi hướng đi là một giá trị của `enum Direction {Up, Left, Down, Right, NoDir}`, và `Path` là ngăn xếp các tọa độ. Với mỗi ô, ta hỏi "hướng chưa đi nào còn thử được" (`getUnvisitedDir`). Có hai khả năng:

1. Còn hướng chưa đi: đi sang ô mới và `push` nó.
2. Không còn hướng nào (ngõ cụt hoặc mọi hướng đã thử): `pop` ô hiện tại, tức lùi một bước, rồi xét tiếp ô ở đỉnh.

Dừng khi ô vừa đẩy là $E$ (tìm thấy) hoặc khi ngăn xếp rỗng (không có đường). Ta đánh dấu ô đã thăm khi đẩy vào để không đi vòng, và ô đã `pop` cũng không đi lại: các hướng của nó đã được thử hết.

## Lời giải từng bước

Lưới 3 hàng, 4 cột (`#` là tường, `.` là ô trống). Thứ tự thử hướng như slide: Up, Left, Down, Right.

```text
S . . #
# # . .
# . . E
```

$S=(0,0)$, $E=(2,3)$ (hàng, cột).

| Bước | Ô ở đỉnh | Hướng thử được | Hành động | Ngăn xếp (đáy tới đỉnh) |
|---|---|---|---|---|
| 1 | (0,0) | Right | push (0,1) | (0,0) (0,1) |
| 2 | (0,1) | Right | push (0,2) | (0,0) (0,1) (0,2) |
| 3 | (0,2) | Down | push (1,2) | ..., (0,2) (1,2) |
| 4 | (1,2) | Down | push (2,2) | ..., (1,2) (2,2) |
| 5 | (2,2) | Left | push (2,1) | ..., (2,2) (2,1) |
| 6 | (2,1) | không còn | pop | ..., (1,2) (2,2) |
| 7 | (2,2) | Right | push (2,3) = E | (0,0) (0,1) (0,2) (1,2) (2,2) (2,3) |

Ở bước 5 hướng Left được thử trước Right nên rẽ vào ô cụt (2,1); bước 6 là lùi. Tới bước 7 ngăn xếp đọc từ đáy lên đỉnh chính là đường đi $(0,0)\to(0,1)\to(0,2)\to(1,2)\to(2,2)\to(2,3)$.

## Cài đặt

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class MazeStack {
    // thứ tự thử: Up, Left, Down, Right
    static final int[] DR = {-1, 0, 1, 0};
    static final int[] DC = {0, -1, 0, 1};

    static Deque<int[]> findPath(char[][] g, int sr, int sc, int er, int ec) {
        int rows = g.length, cols = g[0].length;
        boolean[][] visited = new boolean[rows][cols];
        Deque<int[]> path = new ArrayDeque<>();
        path.push(new int[]{sr, sc});
        visited[sr][sc] = true;
        while (!path.isEmpty()) {
            int[] cur = path.peek();
            if (cur[0] == er && cur[1] == ec) return path;       // tới đích
            boolean moved = false;
            for (int d = 0; d < 4 && !moved; d++) {              // getUnvisitedDir
                int nr = cur[0] + DR[d], nc = cur[1] + DC[d];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
                        && g[nr][nc] != '#' && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    path.push(new int[]{nr, nc});
                    moved = true;
                }
            }
            if (!moved) path.pop();                              // ngõ cụt: lùi
        }
        return null;                                             // không có đường
    }
}
```

Ghi chú: `ArrayDeque.push` và `peek` thao tác ở đầu hàng đợi, đúng ngữ nghĩa ngăn xếp. Đường đi trả về nằm theo thứ tự đỉnh tới đáy, tức từ $E$ về $S$; duyệt ngược để in từ $S$.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Thời gian | $O(R\cdot C)$: mỗi ô được đẩy vào nhiều nhất một lần, mỗi lần xét tối đa 4 hướng |
| Bộ nhớ | $O(R\cdot C)$ cho ngăn xếp và mảng đã thăm |

Đường tìm được không nhất thiết ngắn nhất; nếu cần ngắn nhất, dùng hàng đợi ([Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3514/lessons/mat3514-bfs)).

## Mở rộng

- Đổi thứ tự hướng thử sẽ đổi đường tìm được nhưng không đổi kết luận có/không có đường.
- So với phiên bản đồ thị bằng ma trận kề ở [Tìm đường trong mê cung bằng quay lui](#/courses/mat3504/lessons/mat3504-maze-path-backtracking): bài đó cho phép bỏ đánh dấu khi lùi để liệt kê mọi đường, còn bài này chỉ cần một đường nên không bỏ.
- Slide yêu cầu tự viết chương trình khám phá mê cung chỉ dùng một ngăn xếp: bạn có thể thử với lưới nhập từ bàn phím.

## Tự kiểm tra

1. Nếu không đánh dấu ô đã thăm thì chuyện gì xảy ra ở lưới trên?

> **Đáp án**
> Từ (0,1) có thể quay lại (0,0) (hướng Left), rồi lại tới (0,1): đi vòng mãi, ngăn xếp phình ra mà không tìm được đích (vòng lặp vô hạn).

2. Khi ngăn xếp rỗng mà chưa tới $E$, kết luận gì?

> **Đáp án**
> Mọi ô đi tới được từ $S$ đã được thăm đầy đủ, mà không có $E$, nên không tồn tại đường đi.

3. Vì sao cấu trúc ngăn xếp phù hợp hơn hàng đợi cho thao tác "lùi về ngã rẽ gần nhất"?

> **Đáp án**
> Ngã rẽ gần nhất là ô được đẩy vào sau cùng trong số ô còn hướng chưa thử, đúng thứ tự vào sau ra trước của ngăn xếp.
