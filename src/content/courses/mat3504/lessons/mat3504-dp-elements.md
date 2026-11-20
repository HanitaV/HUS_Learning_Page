# Các yếu tố của lời giải QHĐ

## Vì sao cần

Sau khi biết [quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) là gì, vấn đề thực tế là bắt đầu từ đâu khi gặp một đề bài mới. Slide chia một lời giải QHĐ thành năm yếu tố và sáu bước, và liệt kê các lỗi hay gặp. Nắm khung này thì mọi bài sau ([Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp), [Dãy con tăng dài nhất](#/courses/mat3504/lessons/mat3504-lis), [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01), [Đường đi tổng lớn nhất trong bảng số](#/courses/mat3504/lessons/mat3504-grid-path-dp), [Dãy con chung dài nhất của hai dãy](#/courses/mat3504/lessons/mat3504-lcs)) chỉ là điền nội dung vào khung. Mô phỏng bên dưới cho thấy bảng phương án và đường truy vết.

## Ý tưởng

### Năm yếu tố

1. **Công thức truy hồi** (recurrence): biểu diễn lời giải bài toán lớn qua các bài toán nhỏ hơn. Chia bài toán thành các giai đoạn $0,1,\dots,N$; gọi $S(i)$ là hàm giá trị tối ưu ở giai đoạn $i$. Khi đã biết $S(j)$ với $j<i$ thì $S(i)$ là min hoặc max của các cách kết hợp $S(j)$ với giá trị chuyển từ $j$ sang $i$.
2. **Cơ sở QHĐ** (initial conditions): các giá trị tối ưu tính được ngay, thường ứng với trường hợp suy biến của đệ quy, như $S(0),S(1)$.
3. **Bảng phương án**: bảng chứa mọi giá trị tối ưu của bài toán con; một chiều, hai chiều hoặc nhiều hơn. Cần chú ý cách phối hợp các bài toán con theo công thức truy hồi. Bảng thường có thêm hàng 0, cột 0 làm viền.
4. **Kết quả tối ưu**: nằm trong bảng; vị trí tùy bài. Ô chứa kết quả đồng thời là điểm xuất phát của truy vết, nên cần lưu cả tọa độ ô.
5. **Truy vết tìm nghiệm** (back-trace): dựa vào bảng để tìm các thành phần tạo nghiệm. Bắt đầu từ ô chứa kết quả tối ưu, đi ngược tới các ô cơ sở (thường nằm ở các hàng, cột đầu).

### Sáu bước thiết kế và cài đặt

Thiết kế: (1) nhận dạng bài toán giải được bằng QHĐ; (2) xây dựng công thức truy hồi; (3) xác định cơ sở. Triển khai: (4) dựng bảng phương án; (5) tìm kết quả tối ưu; (6) truy vết liệt kê thành phần nghiệm. Bước 2 vừa khó nhất vừa quan trọng nhất: hãy đưa bài toán về dạng cơ bản, định nghĩa cho rõ hàm mục tiêu, rồi tự hỏi "bước cuối cùng của nghiệm có thể là gì".

### Chứng minh đúng và phân tích

Giai đoạn điền bảng chứng minh bằng quy nạp hoặc bất biến vòng lặp (xem [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness)): sau khi xử lý xong ô $(i,j)$, ô đó chứa đúng giá trị tối ưu của bài toán con tương ứng. Giai đoạn truy vết cũng chứng minh bằng quy nạp. Thời gian điền bảng là số ô nhân với chi phí mỗi ô, khoảng $O(n^k)$ với bảng $k$ chiều; bộ nhớ là kích thước bảng và thường là phần tốn nhất.

## Ví dụ chạy tay

Áp dụng đủ năm yếu tố cho bài **đổi tiền ít đồng nhất** với mệnh giá $\{10,6,1\}$ và số tiền 12 (tham lam cho $10+1+1$ là 3 đồng, xem [Đổi tiền tham lam](#/courses/mat3504/lessons/mat3504-coin-change-greedy)).

- Hàm mục tiêu: $D(v)$ là số đồng ít nhất để đổi $v$.
- Truy hồi: $D(v)=1+\min\{D(v-a)\mid a\in\{10,6,1\},\,a\le v\}$.
- Cơ sở: $D(0)=0$.
- Bảng (một chiều):

| $v$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $D(v)$ | 0 | 1 | 2 | 3 | 4 | 5 | 1 | 2 | 3 | 4 | 1 | 2 | 2 |
| đồng cuối | | 1 | 1 | 1 | 1 | 1 | 6 | 6 | 6 | 6 | 10 | 10 | 6 |

- Kết quả tối ưu: $D(12)=2$.
- Truy vết: tại 12 đồng cuối là 6, còn 6; tại 6 đồng cuối là 6, còn 0 (cơ sở). Nghiệm $6+6$.

Chẳng hạn $D(7)=1+\min\{D(1),D(6)\}=1+1=2$; $D(12)=1+\min\{D(2),D(6),D(11)\}=1+\min\{2,1,2\}=2$.

## Cài đặt

Khung chung: điền bảng, rồi truy vết bằng mảng ghi lựa chọn.

```java
static int[] coinDp(int[] coins, int amount) {
    int inf = Integer.MAX_VALUE / 2;
    int[] d = new int[amount + 1];          // bảng phương án, d[0] là cơ sở
    int[] last = new int[amount + 1];       // đồng được chọn cuối cùng tại v
    java.util.Arrays.fill(d, inf);
    d[0] = 0;
    for (int v = 1; v <= amount; v++) {     // thứ tự: các v nhỏ hơn đã có
        for (int a : coins) {
            if (a <= v && d[v - a] + 1 < d[v]) {
                d[v] = d[v - a] + 1;
                last[v] = a;
            }
        }
    }
    if (d[amount] >= inf) return null;      // không đổi được
    int[] result = new int[d[amount]];
    for (int v = amount, k = 0; v > 0; v -= last[v]) result[k++] = last[v]; // truy vết
    return result;
}
```

Điều kiện `a <= v` ngăn truy cập chỉ số âm. Lưu `last[v]` giúp truy vết không cần so sánh lại giá trị.

## Độ phức tạp

| Thành phần | Chi phí |
|---|---|
| Điền bảng | số ô $\times$ chi phí mỗi ô (ở ví dụ: $O(T\cdot n)$) |
| Truy vết | $O(\text{độ dài nghiệm})$ |
| Bộ nhớ | kích thước bảng, có thể giảm nếu chỉ cần giá trị tối ưu |

Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) để đọc các ký hiệu.

## Lỗi thường gặp

Slide chia thành hai nhóm. Khi thiết kế:

- Nhận dạng sai bài toán (ví dụ dùng QHĐ cho bài tham lam hoặc ngược lại).
- Xác định sai công thức truy hồi: tính nhầm giá trị tối ưu, nhầm cách kết hợp bài toán con, hiểu sai ý nghĩa bảng phương án.
- Xác định sai hoặc thiếu cơ sở, sai kết quả tối ưu (không phải lúc nào cũng là ô cuối), sai điều kiện dừng khi truy vết.

Khi cài đặt:

- Khai báo bảng nhỏ hơn cần thiết: bảng có thể có thêm viền hàng 0, cột 0, nên kích thước thường là $(m+1)\times(n+1)$.
- Tính sai giá trị ô: mỗi ô phải được tính từ đúng các ô mà công thức truy hồi chỉ định.
- Xét ô ngoài bảng khi điền hoặc truy vết: phải kiểm tra chỉ số trước khi truy cập.

## So sánh / liên hệ

Cùng khung nhưng khác bảng: [Dãy con tăng dài nhất](#/courses/mat3504/lessons/mat3504-lis) một chiều, [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01) và [Dãy con chung dài nhất của hai dãy](#/courses/mat3504/lessons/mat3504-lcs) hai chiều với truy vết, [Đường đi tổng lớn nhất trong bảng số](#/courses/mat3504/lessons/mat3504-grid-path-dp) có xử lý ô ngoài bảng, [Thuật toán Floyd](#/courses/mat3504/lessons/mat3504-floyd) dùng QHĐ trên đồ thị. Nếu truy hồi đã tìm được thì mới nên chọn QHĐ; nếu chọn một phương án ở mỗi bước là đúng thì [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method) đơn giản hơn.

## Luyện tập

- [Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp): bảng 2 chiều đơn giản, tập viết cơ sở và điền bảng.
- [Dãy con tăng dài nhất](#/courses/mat3504/lessons/mat3504-lis): truy hồi một chiều và truy vết nhiều nghiệm.
- [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp): 15 bài, hãy viết đủ năm yếu tố cho mỗi bài trước khi code.

## Tự kiểm tra

**1. Kể năm yếu tố của lời giải QHĐ bằng bảng.**

> **Đáp án**
> Công thức truy hồi, cơ sở QHĐ, bảng phương án, kết quả tối ưu, truy vết tìm nghiệm.

**2. Tính $D(8)$ cho bài đổi tiền ở trên và truy vết.**

> **Đáp án**
> $D(8)=1+\min\{D(2),D(7)\}=1+\min\{2,2\}=3$. Đồng cuối là 6 (hoặc 1), còn 2 đồng: nghiệm $6+1+1$.

**3. Vì sao bảng phương án thường lớn hơn kích thước dữ liệu một đơn vị mỗi chiều?**

> **Đáp án**
> Cần hàng 0 và cột 0 làm cơ sở (không chọn phần tử nào, sức chứa 0, tiền tố rỗng). Khai báo thiếu sẽ gây truy cập ngoài bảng.

**4. Với bảng $k$ chiều mỗi chiều cỡ $n$, thời gian điền bảng xấp xỉ bao nhiêu?**

> **Đáp án**
> Khoảng $O(n^k)$ nhân chi phí tính một ô; nếu mỗi ô tính trong hằng số thì $O(n^k)$.
