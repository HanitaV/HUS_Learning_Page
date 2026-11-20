# Vét cạn (Brute force)

## Vì sao cần

Khi chưa biết cách nào thông minh hơn, cách an toàn nhất là thử tất cả. Vét cạn (brute force) dựa thẳng vào đề bài: liệt kê mọi ứng viên trong không gian tìm kiếm rồi kiểm tra từng ứng viên. Bạn đã gặp nó dưới dạng [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) hay [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search). Bài này chuẩn hóa nó thành một khuôn chung, và là bước đầu của chuỗi vét cạn, quay lui, nhánh cận. Xem mô phỏng bên dưới để thấy từng ứng viên được duyệt và kiểm tra.

## Ý tưởng

Slide của giảng viên mô tả khuôn vét cạn như sau. Không gian nghiệm là tập $D=\{(x_1,x_2,\dots,x_n)\}$ với mỗi $x_i \in D_i$ và mỗi $D_i=\{d_{ij}\mid j=1\dots m_i\}$ là một tập hữu hạn. Luật xác định nghiệm là một hàm $f: D \to \{\text{true},\text{false}\}$. Nghiệm là mọi bộ $x$ mà $f(x)=\text{true}$.

```text
BruteForce(D)
    for x1 in D1
        for x2 in D2
            ...
                for xn in Dn
                    if f(x1, x2, ..., xn)
                        <ghi nhận nghiệm x>
```

Hai điều kiện quyết định vét cạn có dùng được không: không gian ứng viên phải **hữu hạn** và phải **liệt kê đầy đủ** (không bỏ sót phần tử nào). Khi đó nếu bài toán có nghiệm thì vét cạn chắc chắn tìm được. Nếu không có nghiệm, vét cạn xét hết rồi báo "không có". Ưu điểm là chắc chắn đúng. Nhược điểm là tốn thời gian khi không gian lớn.

Với bài toán tổ hợp (tìm một cách sắp xếp, nhóm hoặc gán thỏa điều kiện), cách này còn gọi là tìm kiếm vét cạn (exhaustive search): sinh từng phần tử của miền bài toán, giữ lại những phần tử thỏa mọi ràng buộc, rồi chọn phần tử tốt nhất nếu đề yêu cầu tối ưu.

## Ví dụ chạy tay

Bài "gà và chó" trong slide: có 36 con (gà và chó), tổng cộng 100 chân. Tìm số gà $x$ và số chó $y$.

Vét cạn hai biến: cho $x$ chạy 0..36, $y$ chạy 0..36, kiểm tra $f(x,y)=(x+y=36 \wedge 2x+4y=100)$. Có $37\times 37=1369$ cặp cần xét, tức $O(n^2)$ với $n=36$.

| $x$ (gà) | $y$ (chó) | $x+y$ | $2x+4y$ | $f$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | sai |
| 0 | 36 | 36 | 144 | sai |
| 20 | 16 | 36 | 104 | sai |
| 21 | 15 | 36 | 102 | sai |
| 22 | 14 | 36 | 100 | đúng |
| 23 | 13 | 36 | 98 | sai |

**Thu hẹp không gian.** Điều kiện $x+y=36$ cho ta $y=36-x$, nên chỉ cần một biến $x$ và luật $f(x)=(2x+4(36-x)=100)$. Chỉ còn khoảng 37 ứng viên, tức $O(n)$. Bài học: trước khi vét cạn, hãy giảm số biến và thu nhỏ miền giá trị bằng các ràng buộc đã biết.

## Cài đặt

```java
public class ChickenDog {
    public static void main(String[] args) {
        int heads = 36, legs = 100;
        for (int x = 0; x <= heads; x++) {
            int y = heads - x;                  // đã thu hẹp: chỉ còn 1 biến
            if (2 * x + 4 * y == legs) {
                System.out.println("ga = " + x + ", cho = " + y);
            }
        }
    }
}
```

Ghi chú: vòng `for` chạy hết mọi $x$ ngay cả khi đã tìm thấy nghiệm. Nếu chỉ cần một nghiệm, thêm `return` ngay sau khi in.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Số ứng viên | $|D|=\prod_{i=1}^{n} m_i$ |
| Thời gian | $O(|D|\cdot T_f)$, $T_f$ là chi phí kiểm tra một ứng viên |
| Bộ nhớ phụ | $O(n)$ để giữ ứng viên hiện tại |

Nếu mỗi $m_i=2$ thì $|D|=2^n$ (xem [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings)). Nếu ứng viên là hoán vị của $n$ phần tử thì $|D|=n!$ (xem [Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb)). Tăng trưởng này là lý do vét cạn chỉ dùng được với $n$ nhỏ. Cách so sánh tốc độ tăng xem ở [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Nói "vét cạn luôn tìm được nghiệm". Chỉ đúng khi nghiệm tồn tại trong không gian đã liệt kê và không gian đó hữu hạn. Phải có kết quả "không có nghiệm" khi duyệt hết.
- Liệt kê thiếu ứng viên: cận vòng lặp sai một đơn vị, hoặc bỏ sót giá trị biên như 0 và $m$.
- Liệt kê dư và trùng: với bài tập hợp, đổi thứ tự cùng cho một tập nên bị đếm nhiều lần.
- Không thu hẹp không gian dù ràng buộc cho sẵn (như $y=36-x$), làm độ phức tạp tăng một bậc không cần thiết.
- Kiểm tra $f$ quá tốn kém (duyệt lại từ đầu mỗi lần) trong khi có thể cập nhật tăng dần.

## So sánh / liên hệ

Khi không gian quá lớn, ta cần bỏ các ứng viên vô vọng sớm. Đó là ý tưởng của [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking): kiểm tra từng thành phần ngay khi chọn và cắt cả nhánh vi phạm. Với bài tối ưu, [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound) cắt thêm các nhánh không thể tốt hơn nghiệm đã có.

## Luyện tập

- [Khớp xâu vét cạn](#/courses/mat3504/lessons/mat3504-string-matching-bf): vét cạn trên mọi vị trí đặt mẫu, luyện đếm số phép so sánh.
- [Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings): liệt kê $2^n$ cấu hình bằng đệ quy thay cho $n$ vòng for lồng.
- [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error): phiếu bài tập vét cạn, quay lui, nhánh cận.
- Tự luyện: tìm mọi cặp nguyên dương $(a,b)$ với $a\le b\le 100$ sao cho $a^2+b^2$ là số chính phương.

::: Đáp án tự luyện
Hai vòng lặp: $a$ từ 1 đến 100, $b$ từ $a$ đến 100 (ràng buộc $a\le b$ loại một nửa số cặp so với cho $b$ chạy từ 1). Với mỗi cặp tính $s=a^2+b^2$, $c=\text{round}(\sqrt{s})$, nhận cặp nếu $c\cdot c=s$. Các cặp đầu tiên: $(3,4)$, $(5,12)$, $(6,8)$, $(7,24)$, $(8,15)$. Số cặp xét là khoảng $5050$, tức $O(n^2)$.
:::

## Tự kiểm tra

1. Vì sao câu "vét cạn luôn tìm được nghiệm" cần điều kiện đi kèm?

> **Đáp án**
> Bài toán có thể vô nghiệm, và không gian ứng viên phải hữu hạn, được liệt kê đầy đủ. Điều đúng là: nếu có nghiệm trong không gian đó, vét cạn sẽ tìm ra; nếu không, nó duyệt hết rồi báo không có.

2. Có 5 biến, mỗi biến nhận một trong 10 giá trị, kiểm tra một bộ mất $O(5)$. Ước lượng thời gian vét cạn.

> **Đáp án**
> $|D|=10^5$ bộ, mỗi bộ $O(5)$ nên khoảng $5\cdot 10^5$ thao tác, tức $O(10^5)$.

3. Bài gà và chó, nếu tổng chân là 101 thì vét cạn trả về gì? Điều đó nói gì về cách báo kết quả?

> **Đáp án**
> Không cặp nào thỏa (số chân luôn chẵn), nên vòng lặp kết thúc mà không in gì. Cần xử lý trường hợp "không có nghiệm" tường minh, ví dụ dùng cờ `found`.
