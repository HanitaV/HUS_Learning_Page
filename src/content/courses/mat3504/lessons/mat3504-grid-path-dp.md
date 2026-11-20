# Đường đi tổng lớn nhất trong bảng số

## Vì sao cần

Cho một bảng số, bạn đi từ cột trái sang cột phải, mỗi bước sang cột kế bên và được phép lệch một hàng lên, giữ nguyên hoặc xuống. Tổng các ô đi qua phải lớn nhất. Số đường đi tăng như $3^{n}$, nhưng ô $(i,j)$ chỉ có ba ô có thể đi tới nó, nên [quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) giải trong thời gian tỉ lệ với số ô. Bài này cũng là chỗ bạn học xử lý chỉ số ngoài bảng, một lỗi cài đặt hay gặp trong [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements). Mô phỏng bên dưới tô ba ô trước của mỗi ô được điền.

## Bài toán

Cho bảng số dương $a$ kích thước $m\times n$ ($m$ hàng, $n$ cột). Từ ô $(i,j)$ được đi sang ba ô ở cột kế bên: $(i-1,j+1)$, $(i,j+1)$, $(i+1,j+1)$ (nếu nằm trong bảng).

- **Vào**: ma trận $a$.
- **Ra**: tổng lớn nhất các ô trên đường đi từ cột đầu (xuất phát ở hàng bất kỳ) sang cột cuối, và các ô trên đường đi đó.

Slide minh họa bằng bảng $6\times7$ và đường đi đến ô $(m,n)$. Nếu đề yêu cầu đích cố định là ô $(m,n)$ thì đáp án là $C(m,n)$; nếu đích tùy ý ở cột cuối thì đáp án là $\max_i C(i,n)$.

## Kiến thức sử dụng

- [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements): hàm mục tiêu $C(i,j)$, cơ sở, bảng, truy vết.
- [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list): truy cập mảng hai chiều và kiểm tra biên chỉ số.
- [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01): cũng là bảng hai chiều có truy vết bằng cách so ngược công thức.

## Phân tích

Hàm tối ưu: $C(i,j)$ là tổng lớn nhất các ô trên đường đi kết thúc tại ô $(i,j)$. Ô $(i,j)$ chỉ đến được từ ba ô cột $j-1$, nên:

$$
C(i,j)=\max\{C(i-1,j-1),\,C(i,j-1),\,C(i+1,j-1)\}+a_{ij}.
$$

Chỉ các ô nằm trong bảng ($1\le i'\le m$) mới được xét. Cơ sở: $C(i,0)=0$ (cột 0 ảo), do đó $C(i,1)=a_{i1}$. Với bảng số dương, lấp hàng ngoài bằng 0 cho cùng kết quả; với số âm, ô ngoài phải coi là $-\infty$ (bỏ khỏi phép max).

## Lời giải từng bước

Bảng $3\times4$ (hàng 1 trên cùng):

| | $j=1$ | $j=2$ | $j=3$ | $j=4$ |
|---|---|---|---|---|
| $i=1$ | 3 | 1 | 4 | 2 |
| $i=2$ | 2 | 5 | 1 | 3 |
| $i=3$ | 6 | 2 | 2 | 1 |

Điền $C$ theo cột:

| | $j=1$ | $j=2$ | $j=3$ | $j=4$ |
|---|---|---|---|---|
| $i=1$ | 3 | 4 | 15 | 17 |
| $i=2$ | 2 | 11 | 12 | 18 |
| $i=3$ | 6 | 8 | 13 | 14 |

Ví dụ $C(1,2)=\max\{C(1,1),C(2,1)\}+1=3+1=4$ (không có hàng 0). $C(2,2)=\max\{3,2,6\}+5=11$. $C(1,3)=\max\{4,11\}+4=15$. $C(2,4)=\max\{15,12,13\}+3=18$.

Đáp án $\max_i C(i,4)=18$ tại $(2,4)$.

**Truy vết** từ $(2,4)$: đặt $k=C(i,j)-a_{ij}$ rồi tìm ô ở cột $j-1$ (nằm trong bảng) có $C=k$.

| Ô | $k=C-a$ | Ô trước (cột $j-1$) |
|---|---|---|
| $(2,4)$ | $18-3=15$ | $(1,3)$ có $C=15$ |
| $(1,3)$ | $15-4=11$ | $(2,2)$ có $C=11$ |
| $(2,2)$ | $11-5=6$ | $(3,1)$ có $C=6$ |
| $(3,1)$ | cột 1 | dừng |

Đường đi $(3,1)\to(2,2)\to(1,3)\to(2,4)$ với các số $6+5+4+3=18$.

## Cài đặt

```java
static int maxPath(int[][] a, java.util.List<int[]> path) {
    int m = a.length, n = a[0].length;
    int[][] c = new int[m][n];
    for (int i = 0; i < m; i++) c[i][0] = a[i][0];          // cột đầu: chỉ có chính nó
    for (int j = 1; j < n; j++) {
        for (int i = 0; i < m; i++) {
            int best = Integer.MIN_VALUE;
            for (int d = -1; d <= 1; d++) {
                int r = i + d;
                if (r >= 0 && r < m) best = Math.max(best, c[r][j - 1]);   // kiểm tra biên
            }
            c[i][j] = best + a[i][j];
        }
    }
    int row = 0;                                            // chọn ô tốt nhất ở cột cuối
    for (int i = 1; i < m; i++) if (c[i][n - 1] > c[row][n - 1]) row = i;
    int result = c[row][n - 1];
    for (int j = n - 1; j >= 0; j--) {                      // truy vết
        path.add(0, new int[]{row, j});
        if (j == 0) break;
        int k = c[row][j] - a[row][j];
        for (int d = -1; d <= 1; d++) {
            int r = row + d;
            if (r >= 0 && r < m && c[r][j - 1] == k) { row = r; break; }
        }
    }
    return result;
}
```

Ở đây chỉ số bắt đầu từ 0. Vòng `for d` luôn tìm thấy ô trước vì $k$ đúng bằng một trong các $C(r,j-1)$ hợp lệ.

## Độ phức tạp

| | Thời gian | Bộ nhớ |
|---|---|---|
| Điền bảng | $O(3mn)=O(mn)$ | $O(mn)$ |
| Truy vết | $O(n)$ | |

Nếu chỉ cần tổng, giữ hai cột là đủ: bộ nhớ $O(m)$. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Truy cập $C(i-1,\cdot)$ khi $i=1$ hoặc $C(i+1,\cdot)$ khi $i=m$, gây lỗi ngoài biên. Phải kiểm tra, ở cả giai đoạn điền bảng lẫn truy vết.
- Dùng 0 làm giá trị ô ngoài bảng khi có số âm: ô ảo có thể thắng ô thật. Dùng $-\infty$ hoặc bỏ qua.
- Điền bảng theo hàng thay vì theo cột: $C(i,j)$ cần cột $j-1$ xong hoàn toàn, nên vòng ngoài là cột.
- Truy vết sai: so $C(\cdot,j-1)$ với $C(i,j)$ thay vì với $C(i,j)-a_{ij}$.
- Nhầm đích: đề cố định ô $(m,n)$ hay cho phép kết thúc ở hàng bất kỳ.

## Mở rộng

Đổi quy tắc bước đi thì chỉ cần đổi các ô trước: ví dụ chỉ đi phải hoặc xuống thì $C(i,j)=\max\{C(i-1,j),C(i,j-1)\}+a_{ij}$. Các bài tập về bảng và đường đi trong [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp) (như xếp khối đá, cầu qua sông) đều dùng cùng cách phân tích "ô này đến từ đâu".

## Tự kiểm tra

**1. Vì sao với bảng số dương có thể lấp hàng ngoài bằng 0 nhưng với số âm thì không?**

> **Đáp án**
> Với số dương ô ngoài giá trị 0 không bao giờ lớn hơn một ô thật nên không ảnh hưởng $\max$. Với số âm, $C$ thật có thể nhỏ hơn 0 và ô ảo bằng 0 thắng, cho đường đi không tồn tại.

**2. Tính $C(3,3)$ của bảng trên.**

> **Đáp án**
> $C(3,3)=\max\{C(2,2),C(3,2)\}+a_{33}=\max\{11,8\}+2=13$.

**3. Cần sửa gì để đích bắt buộc là ô $(m,n)$?**

> **Đáp án**
> Đáp án là $C(m,n)$ thay vì $\max_i C(i,n)$; truy vết bắt đầu từ $(m,n)$. Các ô khác của cột cuối bị bỏ qua.
