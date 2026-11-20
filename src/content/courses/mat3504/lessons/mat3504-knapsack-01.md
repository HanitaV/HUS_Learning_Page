# Xếp balo 0-1

## Vì sao cần

Bạn có một chiếc balo chứa được tối đa một trọng lượng cho trước và nhiều đồ vật, mỗi vật có trọng lượng và giá trị. Mỗi vật chỉ được mang hoặc bỏ lại, không cắt được. Tham lam theo đơn giá không còn đúng (xem phản ví dụ ở [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method)), còn vét cạn có $2^n$ cách chọn. [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) giải trong $O(nW)$. Mô phỏng bên dưới điền bảng và vẽ đường truy vết các vật được chọn.

## Bài toán

Theo ký hiệu của slide: có $n$ đồ vật, vật $i$ có trọng lượng $p_i$ và giá trị $w_i$. Balo chứa được tổng trọng lượng tối đa là sức chứa (slide ký hiệu $P$, ta dùng $W$). Mỗi vật chọn 0 hoặc 1 lần.

- **Vào**: $n$, $(p_i,w_i)$ với $i=1..n$, sức chứa $W$.
- **Ra**: tổng giá trị lớn nhất của các vật xếp được vào balo, và tập vật tương ứng.

Chú ý: ở slide $p_i$ là trọng lượng còn $w_i$ là giá trị; nhiều tài liệu khác dùng ngược lại.

## Kiến thức sử dụng

- [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements): năm yếu tố; ở đây bảng hai chiều và truy vết trên bảng.
- [Đổi tiền tham lam](#/courses/mat3504/lessons/mat3504-coin-change-greedy): cùng họ bài "chọn tập con với ràng buộc tổng", và cùng cho thấy tham lam có thể sai.
- [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming): khái niệm bài toán con chồng lấp.

## Phân tích

Hàm tối ưu: $C(i,j)$ là giá trị lớn nhất khi chỉ xét các vật $1..i$ và sức chứa $j$ ($0\le i\le n$, $0\le j\le W$). Xét vật $i$:

- Không chọn: $C(i,j)=C(i-1,j)$.
- Chọn (chỉ khi $p_i\le j$): $C(i,j)=C(i-1,j-p_i)+w_i$.

$$
C(i,j)=\max\bigl(C(i-1,j),\ C(i-1,j-p_i)+w_i\bigr)\quad(p_i\le j),\qquad C(i,j)=C(i-1,j)\quad(p_i>j).
$$

Cơ sở: $C(i,0)=0$ và $C(0,j)=0$. Đáp án là $C(n,W)$. Nhờ lấy từ hàng $i-1$ (không phải hàng $i$) mà mỗi vật được dùng tối đa một lần.

## Lời giải từng bước

Dữ liệu minh họa theo slide: $n=4$, $W=4$, các vật $(p_i,w_i)$: vật 1 $=(2,3)$, vật 2 $=(1,2)$, vật 3 $=(2,2)$, vật 4 $=(1,1)$.

| $i\backslash j$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 3 | 3 | 3 |
| 2 | 0 | 2 | 3 | 5 | 5 |
| 3 | 0 | 2 | 3 | 5 | 5 |
| 4 | 0 | 2 | 3 | 5 | 6 |

Ví dụ $C(2,3)$: không chọn vật 2 cho $C(1,3)=3$; chọn vật 2 cho $C(1,2)+2=3+2=5$; lấy max là 5. Ví dụ $C(4,4)$: không chọn vật 4 cho $C(3,4)=5$; chọn cho $C(3,3)+1=6$; lấy 6.

Giá trị tối ưu $C(4,4)=6$.

**Truy vết** từ $(i,j)=(4,4)$ về hàng 0: nếu $C(i,j)=C(i-1,j)$ thì vật $i$ không được chọn, sang $(i-1,j)$; ngược lại vật $i$ được chọn, sang $(i-1,j-p_i)$.

| Ô | So sánh | Quyết định | Ô tiếp theo |
|---|---|---|---|
| $(4,4)=6$ | $C(3,4)=5\ne6$ | chọn vật 4 | $(3,3)$ |
| $(3,3)=5$ | $C(2,3)=5$ | bỏ vật 3 | $(2,3)$ |
| $(2,3)=5$ | $C(1,3)=3\ne5$ | chọn vật 2 | $(1,2)$ |
| $(1,2)=3$ | $C(0,2)=0\ne3$ | chọn vật 1 | $(0,0)$ |

Chọn vật 1, 2, 4: tổng trọng lượng $2+1+1=4$, tổng giá trị $3+2+1=6$.

## Cài đặt

```java
static int knapsack(int[] weight, int[] value, int capacity, boolean[] chosen) {
    int n = weight.length;
    int[][] c = new int[n + 1][capacity + 1];       // hàng 0, cột 0 = cơ sở 0
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= capacity; j++) {
            c[i][j] = c[i - 1][j];                  // không chọn vật i
            if (weight[i - 1] <= j) {               // chỉ chọn khi vừa sức chứa
                c[i][j] = Math.max(c[i][j], c[i - 1][j - weight[i - 1]] + value[i - 1]);
            }
        }
    }
    for (int i = n, j = capacity; i >= 1; i--) {    // truy vết
        if (c[i][j] != c[i - 1][j]) {
            chosen[i - 1] = true;
            j -= weight[i - 1];
        }
    }
    return c[n][capacity];
}
```

`weight[i-1]` vì mảng Java đánh số từ 0 còn vật đánh số từ 1. Nếu chỉ cần giá trị, dùng một mảng một chiều và duyệt $j$ từ $W$ xuống 0 để mỗi vật chỉ dùng một lần.

## Độ phức tạp

| | Thời gian | Bộ nhớ |
|---|---|---|
| Điền bảng | $O(nW)$ | $O(nW)$ |
| Truy vết | $O(n)$ | |
| Chỉ lấy giá trị | $O(nW)$ | $O(W)$ |

$O(nW)$ chỉ là đa thức theo giá trị số $W$, không theo độ dài biểu diễn nên gọi là giả đa thức; khi $W$ cực lớn bảng không khả thi. Bài toán balo 0-1 là NP-khó nên không có thuật toán đa thức thật sự theo độ dài đầu vào (xem [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes)).

## Lỗi thường gặp

- Quên điều kiện $p_i\le j$, dẫn tới chỉ số âm `j - weight` hoặc chọn vật quá nặng.
- Lấy từ hàng $i$ thay vì $i-1$ (hoặc duyệt $j$ tăng ở bản một chiều), biến bài toán thành balo không giới hạn số lần dùng vật.
- Nhầm vai trò $p_i$ và $w_i$ (trọng lượng và giá trị) giữa slide và code.
- Truy vết sai: so sánh $C(i,j)$ với $C(i-1,j)$ rồi quên trừ $p_i$ khi chọn.
- Khai báo bảng $n\times W$ thay vì $(n+1)\times(W+1)$.

## Mở rộng

- Chia kẹo, chia tập thành hai phần chênh lệch nhỏ nhất, "Farmer" của IOI 2004 là các dạng của balo 0-1: xem [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp).
- Phiên bản vật cắt được là balo liên tục, giải bằng [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method).

## Tự kiểm tra

**1. Sức chứa 5, vật $(p,w)$: $(2,3),(3,4),(4,5),(5,6)$. Giá trị tối ưu?**

> **Đáp án**
> Chọn vật 1 và 2: trọng lượng 5, giá trị 7. Các lựa chọn khác: vật 4 một mình được 6; vật 3 một mình được 5. Đáp án 7.

**2. Vì sao duyệt $j$ từ $W$ xuống 0 trong bản một chiều?**

> **Đáp án**
> Ô $j-p_i$ phải còn mang giá trị của hàng $i-1$. Duyệt tăng sẽ ghi đè trước và có thể dùng vật $i$ nhiều lần.

**3. Tham lam theo đơn giá sai ở đâu với $W=50$ và vật $(10,60),(20,100),(30,120)$?**

> **Đáp án**
> Đơn giá 6, 5, 4: tham lam nhận vật 1, 2 (30 kg) được 160 và vật 3 không vừa. Tối ưu là vật 2, 3 (50 kg) được 220.
