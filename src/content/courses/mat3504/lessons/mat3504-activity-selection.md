# Chọn hoạt động (Activity Selection)

## Vì sao cần

Một phòng họp, một máy, một sân khấu: tài nguyên chỉ phục vụ một việc tại một thời điểm, trong khi có nhiều yêu cầu chồng thời gian lên nhau. Ta muốn phục vụ được nhiều yêu cầu nhất. Đây là bài toán mẫu của [phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method) mà tiêu chí chọn không hiển nhiên: sắp xếp theo thời điểm kết thúc. Bước sắp xếp dựa trên [Bài toán sắp xếp](#/courses/mat3504/lessons/mat3504-sorting-problem), phần còn lại là một lượt duyệt. Mô phỏng bên dưới cho bạn xem từng hoạt động được nhận hay bị bỏ.

## Bài toán

Có $n$ hoạt động dùng chung một tài nguyên. Hoạt động $a_i$ diễn ra từ $s_i$ (bắt đầu) đến $f_i$ (kết thúc), $s_i<f_i$, và chiếm trọn tài nguyên trong khoảng đó. Hai hoạt động **tương thích** nếu khoảng thời gian không chồng nhau, tức hoạt động sau bắt đầu không sớm hơn lúc hoạt động trước kết thúc ($s_j\ge f_i$).

- **Vào**: $A=\{a_i=(s_i,f_i)\}$.
- **Ra**: tập con tương thích đôi một có nhiều phần tử nhất.

Dữ liệu minh họa trong slide:

| $a_i$ | $a_1$ | $a_2$ | $a_3$ | $a_4$ | $a_5$ | $a_6$ | $a_7$ | $a_8$ | $a_9$ |
|---|---|---|---|---|---|---|---|---|---|
| $s_i$ | 1 | 2 | 4 | 1 | 5 | 8 | 9 | 11 | 13 |
| $f_i$ | 3 | 5 | 7 | 8 | 9 | 10 | 11 | 14 | 16 |

## Ý tưởng

Chọn hoạt động kết thúc sớm nhất để chừa nhiều thời gian nhất cho các hoạt động sau. Cụ thể: sắp các hoạt động theo $f$ tăng dần, nhận $a_1$, rồi duyệt tiếp và nhận $a_i$ nếu $s_i\ge f_j$ với $a_j$ là hoạt động nhận gần nhất.

**Vì sao đúng (phép hoán đổi).** Gọi $a_1$ là hoạt động kết thúc sớm nhất. Lấy một nghiệm tối ưu $O$ bất kỳ, hoạt động đầu của nó là $b$. Vì $f_{a_1}\le f_b$, thay $b$ bằng $a_1$ trong $O$ không làm chồng với các hoạt động sau, nên được nghiệm tối ưu khác có chứa $a_1$ (tính chất lựa chọn tham lam). Phần còn lại là bài toán cùng loại trên các hoạt động bắt đầu từ $f_{a_1}$ trở đi (cấu trúc con tối ưu). Lặp lại lập luận cho từng bước.

## Ví dụ chạy tay

Dữ liệu ở trên đã sắp theo $f$ tăng dần. Gọi $j$ là chỉ số hoạt động nhận gần nhất.

| $i$ | $(s_i,f_i)$ | $f_j$ hiện tại | $s_i\ge f_j$? | Quyết định |
|---|---|---|---|---|
| 1 | (1,3) | | | nhận, $j=1$ |
| 2 | (2,5) | 3 | 2 < 3 | bỏ |
| 3 | (4,7) | 3 | 4 ≥ 3 | nhận, $j=3$ |
| 4 | (1,8) | 7 | 1 < 7 | bỏ |
| 5 | (5,9) | 7 | 5 < 7 | bỏ |
| 6 | (8,10) | 7 | 8 ≥ 7 | nhận, $j=6$ |
| 7 | (9,11) | 10 | 9 < 10 | bỏ |
| 8 | (11,14) | 10 | 11 ≥ 10 | nhận, $j=8$ |
| 9 | (13,16) | 14 | 13 < 14 | bỏ |

Kết quả $\{a_1,a_3,a_6,a_8\}$, 4 hoạt động.

## Cài đặt

Theo lược đồ `Activity_Selector` của slide, thêm bước sắp xếp:

```java
static java.util.List<Integer> selectActivities(int[] s, int[] f) {
    int n = s.length;
    Integer[] order = new Integer[n];
    for (int i = 0; i < n; i++) order[i] = i;
    java.util.Arrays.sort(order, (x, y) -> Integer.compare(f[x], f[y])); // f tăng dần

    java.util.List<Integer> chosen = new java.util.ArrayList<>();
    int lastFinish = Integer.MIN_VALUE;
    for (int idx : order) {
        if (s[idx] >= lastFinish) {      // tương thích với hoạt động vừa nhận
            chosen.add(idx);
            lastFinish = f[idx];
        }
    }
    return chosen;
}
```

Khai báo `lastFinish = MIN_VALUE` làm cho hoạt động đầu tiên luôn được nhận, tương đương `S={a1}` trong slide. Điều kiện `>=` cho phép hai hoạt động tiếp giáp tại đầu mút.

## Độ phức tạp

| Bước | Chi phí |
|---|---|
| Sắp theo $f$ | $O(n\log n)$ |
| Duyệt chọn | $O(n)$ |
| Bộ nhớ | $O(n)$ |

Nếu dữ liệu đã sắp sẵn thì chỉ còn $O(n)$. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Sắp theo thời điểm bắt đầu: hoạt động $a_4=(1,8)$ bắt đầu sớm nhưng chiếm quá lâu, chặn mất 3 hoạt động.
- Sắp theo độ dài ngắn nhất: với $(1,5),(4,6),(5,10)$ hoạt động ngắn nhất $(4,6)$ cắt cả hai còn lại, chọn được 1 trong khi tối ưu là 2.
- Dùng `>` thay `>=` khi đề cho phép tiếp giáp đầu mút, bỏ sót nghiệm.
- So sánh $s_i$ với $f$ của hoạt động liền trước trong danh sách thay vì hoạt động đã được nhận.
- Dùng cho trường hợp mỗi hoạt động có giá trị khác nhau: tham lam không còn đúng, cần quy hoạch động (xem Mở rộng).

## Mở rộng

Khi mỗi hoạt động có thêm lợi nhuận $c_i$ và mục tiêu là tổng lợi nhuận lớn nhất, tham lam theo $f$ sai; cần $F(i)=\max\{F(i-1),\,c_i+F(p(i))\}$ với $p(i)$ là hoạt động cuối còn tương thích. Đây là bài "cho thuê máy" trong [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp), giải bằng [các yếu tố QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements). Phiên bản chỉ đếm số hoạt động (bố trí phòng họp) cũng nằm trong [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp) và [Bài tập: phương pháp tham lam](#/courses/mat3504/lessons/mat3504-hw-greedy).

## Tự kiểm tra

**1. Cho $(1,4),(3,5),(0,6),(5,7),(3,9),(5,9),(6,10),(8,11),(8,12),(2,14),(12,16)$ (đã sắp theo $f$). Tham lam chọn bao nhiêu hoạt động?**

> **Đáp án**
> Nhận $(1,4)$, bỏ $(3,5)$, $(0,6)$; nhận $(5,7)$; bỏ $(3,9),(5,9),(6,10)$; nhận $(8,11)$; bỏ $(8,12),(2,14)$; nhận $(12,16)$. Tổng 4: $(1,4),(5,7),(8,11),(12,16)$.

**2. Vì sao có thể thay hoạt động đầu của nghiệm tối ưu bằng hoạt động kết thúc sớm nhất mà không làm xấu nghiệm?**

> **Đáp án**
> Hoạt động kết thúc sớm nhất không kết thúc muộn hơn hoạt động bị thay, nên mọi hoạt động còn lại vốn bắt đầu sau hoạt động bị thay cũng bắt đầu sau nó. Số hoạt động không đổi.

**3. Nếu đề cho thêm giá trị mỗi hoạt động, thuật toán nào dùng?**

> **Đáp án**
> Quy hoạch động theo thứ tự thời điểm kết thúc: $F(i)=\max\{F(i-1),\,c_i+F(p(i))\}$.
