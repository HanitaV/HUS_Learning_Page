# Quay lui (Backtracking)

## Vì sao cần

[Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force) liệt kê toàn bộ $\prod m_i$ cấu hình rồi mới kiểm tra, nên lãng phí khi ngay từ vài thành phần đầu cấu hình đã sai. Quay lui (backtracking) xây cấu hình từng thành phần một, và bỏ cả nhánh ngay khi thành phần vừa chọn vi phạm điều kiện. Nó viết tự nhiên bằng [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion), và có cùng bộ khung duyệt "đi sâu rồi lùi" với [Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs). Mô phỏng bên dưới cho thấy cấu hình được dựng dần và bị lùi khi gặp ngõ cụt.

## Ý tưởng

Một nghiệm là bộ $x=(x_1,\dots,x_n)$. Hàm `Try(i)` quyết định thành phần thứ $i$ khi $x_1,\dots,x_{i-1}$ đã cố định. Theo slide, mẫu tổng quát là:

```text
Try(i)
    for each v in candidates(i)
        if v chấp nhận được          // thỏa ràng buộc với x1..x(i-1)
            x[i] = v
            <ghi nhận trạng thái>
            if i = n
                <ghi nhận nghiệm x>
            else
                Try(i + 1)
            <khôi phục trạng thái>   // bỏ ghi nhận để thử giá trị khác
        endif
    endfor
End
```

Lời gọi ban đầu là `Try(1)`. Ba chi tiết quyết định tính đúng:

- **Điều kiện chấp nhận**: kiểm tra giá trị $v$ có tương thích với phần đã chọn. Đây là chỗ cắt nhánh, nên càng chặt, càng nhanh.
- **Điều kiện hoàn chỉnh**: khi $i=n$ (hoặc khi đạt đích) thì ghi nhận nghiệm, không gọi tiếp.
- **Khôi phục trạng thái**: mọi biến phụ (mảng đánh dấu, tổng tạm) đã sửa trước `Try(i+1)` phải được trả về như cũ ngay sau lời gọi, để giá trị kế tiếp của vòng `for` thấy trạng thái sạch.

Hình dung toàn bộ lời giải là một cây không gian trạng thái (state-space tree): nút ở độ sâu $i$ là một cấu hình bộ phận $(x_1,\dots,x_i)$. Quay lui duyệt cây theo chiều sâu, và khi một nút không chấp nhận được thì không đi xuống con của nó ("cắt tỉa").

## Ví dụ chạy tay

Liệt kê các dãy $x_1x_2x_3$ gồm ba số từ $\{1,2,3\}$ đôi một khác nhau, với ràng buộc thêm $x_1<x_3$. `Try` lần lượt thử $v=1,2,3$; "đã dùng" là tập các giá trị đã chọn.

| Độ sâu | Cấu hình bộ phận | Các giá trị thử | Kết quả |
|---|---|---|---|
| 1 | () | 1 | nhận, $x_1=1$ |
| 2 | (1) | 1, 2 | 1 bỏ (đã dùng); 2 nhận |
| 3 | (1,2) | 1, 2, 3 | 1 và 2 bỏ (đã dùng); 3 nhận vì $1<3$, in `123` |
| 2 | (1) | 3 | nhận, $x_2=3$ |
| 3 | (1,3) | 1, 2, 3 | 1 và 3 bỏ; 2 nhận vì $1<2$, in `132` |
| 1 | () | 2 | nhận, $x_1=2$ |
| 2 | (2) | 1 | nhận, $x_2=1$ |
| 3 | (2,1) | 3 | nhận vì $2<3$, in `213` |
| 2 | (2) | 3 | nhận, $x_2=3$ |
| 3 | (2,3) | 1 | bỏ vì $2<1$ sai; 2 và 3 đã dùng, nhánh cụt |
| 1 | () | 3 | nhận, $x_1=3$; với $x_3in{1,2}$ đều có $3<x_3$ sai, không có nghiệm |

Kết quả: `123`, `132`, `213`. Các dòng có chữ "bỏ" là nơi nhánh bị cắt. Sau mỗi lần in hoặc gặp nhánh cụt, thuật toán lùi về độ sâu trước để thử giá trị kế tiếp.

## Cài đặt

Khung Java dùng mảng đánh dấu. Ví dụ này sinh mọi hoán vị của $1..n$; mỗi bài cụ thể chỉ thay `isAcceptable` và phần ghi nhận.

```java
static int n = 3;
static int[] x = new int[n + 1];
static boolean[] used = new boolean[n + 1];

static void tryAt(int i) {
    for (int v = 1; v <= n; v++) {
        if (!used[v]) {                 // điều kiện chấp nhận
            x[i] = v;
            used[v] = true;             // ghi nhận trạng thái
            if (i == n) {
                printSolution();
            } else {
                tryAt(i + 1);
            }
            used[v] = false;            // khôi phục
        }
    }
}

static void printSolution() {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i++) sb.append(x[i]).append(' ');
    System.out.println(sb.toString().trim());
}
```

Gọi `tryAt(1)`. Với $n=3$ in 6 hoán vị: `1 2 3`, `1 3 2`, `2 1 3`, `2 3 1`, `3 1 2`, `3 2 1`.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Xấu nhất | bằng vét cạn, ví dụ $O(n!)$ hoặc $O(2^n)$, vì cây có thể không bị cắt |
| Thực tế | nhỏ hơn nhiều khi điều kiện chấp nhận loại sớm |
| Bộ nhớ | $O(n)$ cho ngăn xếp đệ quy và mảng $x$ (không lưu cả cây) |

Số nút của cây là yếu tố quyết định, không phải số nghiệm. Để so tốc độ tăng xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o). Cần tối ưu hóa một đại lượng (giá nhỏ nhất, giá trị lớn nhất) thì thêm cận để cắt tiếp: [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound).

## Lỗi thường gặp

- Quên khôi phục trạng thái (`used[v] = false`, hoàn lại tổng tạm). Lỗi này làm thiếu nghiệm hoặc nghiệm sai ở các nhánh sau.
- Đặt điều kiện dừng sai: kiểm tra `i == n` sau khi đã gọi `Try(i+1)`, dẫn tới chỉ số ngoài mảng hoặc in lặp.
- Kiểm tra ràng buộc quá muộn (chỉ khi $i=n$) nên không cắt được nhánh nào, quay lui thành vét cạn.
- Dùng biến cục bộ cho mảng `x` ở mỗi lời gọi (sao chép) làm tốn bộ nhớ và chậm; nên dùng một mảng chung và ghi đè.
- Ghi nhận nghiệm bằng cách lưu tham chiếu tới `x`: lần lùi sau sẽ sửa mất kết quả; phải sao chép (`x.clone()`) khi lưu.

## So sánh / liên hệ

[Tìm kiếm theo chiều sâu (DFS)](#/courses/mat3504/lessons/mat3504-dfs) là quay lui trên đồ thị có sẵn; quay lui là duyệt sâu trên cây trạng thái được sinh dần. Các ví dụ của slide đều theo khung này: [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings) (không có ràng buộc), [Bài toán xếp hậu](#/courses/mat3504/lessons/mat3504-n-queens) (ràng buộc cột và đường chéo), [Tìm đường trong mê cung bằng quay lui](#/courses/mat3504/lessons/mat3504-maze-path-backtracking) (ràng buộc cạnh kề và chưa đi qua). Có thể khử đệ quy bằng ngăn xếp tường minh ([Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination)), như [Khám phá mê cung bằng ngăn xếp](#/courses/mat3514/lessons/mat3514-maze-stack).

## Luyện tập

- [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings): cây quay lui đầy đủ, không cắt nhánh.
- [Bài toán xếp hậu](#/courses/mat3504/lessons/mat3504-n-queens): cắt nhánh bằng ba mảng đánh dấu.
- [Tìm đường trong mê cung bằng quay lui](#/courses/mat3504/lessons/mat3504-maze-path-backtracking): quay lui trên đồ thị, đánh dấu và bỏ đánh dấu đỉnh.
- [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error): tập con $k$ phần tử, chỉnh hợp, phân tích số, sudoku, leo bậc thang.

## Tự kiểm tra

1. Vì sao phải khôi phục trạng thái sau khi `Try(i+1)` trả về?

> **Đáp án**
> Vòng `for` ở độ sâu $i$ còn thử giá trị khác. Nếu mảng đánh dấu hay tổng tạm còn giữ dấu vết của giá trị cũ, các giá trị sau sẽ bị coi nhầm là vi phạm hoặc cộng dồn sai, gây thiếu hoặc sai nghiệm.

2. Quay lui khác vét cạn ở điểm nào, và trong trường hợp nào chúng tốn như nhau?

> **Đáp án**
> Quay lui kiểm tra ràng buộc ngay khi chọn từng thành phần nên cắt cả nhánh vi phạm; vét cạn chỉ kiểm tra khi cấu hình đã đủ. Nếu ràng buộc chỉ kiểm được ở cấu hình đầy đủ (không có ràng buộc bộ phận), mọi nhánh đều phải đi hết và hai cách tốn như nhau, như [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings).

3. Với hoán vị của $n$ phần tử, quay lui thăm bao nhiêu nút ở độ sâu $i$ nếu không có ràng buộc nào khác ngoài "khác nhau"?

> **Đáp án**
> $n(n-1)\cdots(n-i+1)=n!/(n-i)!$ nút. Ở độ sâu $n$ là $n!$ lá, tức đúng số hoán vị.
