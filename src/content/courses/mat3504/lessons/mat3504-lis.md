# Dãy con tăng dài nhất

## Vì sao cần

Cho một dãy số, giữ lại một số phần tử (không cần liền nhau) sao cho chúng tăng dần và càng nhiều càng tốt. Số tập con của dãy là $2^n$ nên vét cạn không khả thi. Bài này là ví dụ QHĐ một chiều đơn giản nhất sau [năm yếu tố của QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements): một bảng $L$, một công thức, một lần truy vết. Mô phỏng bên dưới tô các phần tử trước $a_i$ mà $L(i)$ dựa vào.

## Bài toán

- **Vào**: dãy $a_1,\dots,a_n$.
- **Ra**: độ dài lớn nhất $m$ của dãy con tăng ngặt, và một dãy con đạt độ dài đó.

Ví dụ trong slide: dãy $2,5,4,6,3,8,9,7$ có dãy con tăng dài nhất $2,5,6,8,9$ (độ dài 5).

## Kiến thức sử dụng

- [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements): khung hàm mục tiêu, truy hồi, cơ sở, bảng, truy vết.
- [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming): nguyên tắc điền bảng bottom-up.
- [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o): phân tích hai vòng lặp lồng nhau.

## Phân tích

Hàm tối ưu: $L(i)$ là độ dài dãy con tăng dài nhất **kết thúc tại $a_i$** (bắt buộc dùng $a_i$). Định nghĩa "kết thúc tại $i$" là chìa khóa: dãy tốt nhất kết thúc tại $a_i$ gồm $a_i$ cộng với dãy tốt nhất kết thúc tại một $a_j$ đứng trước và nhỏ hơn. Do đó:

$$
L(i)=1+\max\{L(j)\mid j<i,\ a_j<a_i\},\qquad L(0)=0,\ L(1)=1.
$$

Nếu không có $j$ nào thỏa thì $\max$ lấy là 0 và $L(i)=1$ (dãy chỉ gồm $a_i$). Đáp án là $\max_i L(i)$, không phải $L(n)$, vì dãy tốt nhất có thể kết thúc ở giữa.

## Lời giải từng bước

Dãy $a=2,5,4,6,3,8,9,7$:

| $i$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $a_i$ | 2 | 5 | 4 | 6 | 3 | 8 | 9 | 7 |
| $L(i)$ | 1 | 2 | 2 | 3 | 2 | 4 | 5 | 4 |

Một số ô tính tay: $L(4)$ ($a_4=6$): các $j<4$ có $a_j<6$ là $1,2,3$ với $L=1,2,2$, nên $L(4)=2+1=3$. $L(7)$ ($a_7=9$): mọi phần tử trước đều nhỏ hơn, lấy $\max L=4$ tại $j=6$, nên $L(7)=5$. $L(8)$ ($a_8=7$): các $a_j<7$ gồm $2,5,4,6,3$ với $\max L=3$ tại $j=4$, nên $L(8)=4$.

Giá trị tối ưu là $\max L(i)=5$ tại $i=7$.

**Truy vết.** Bắt đầu từ $i=7$ ($a=9$, $L=5$). Tìm $j<i$ với $a_j<a_i$ và $L(j)=L(i)-1=4$: $j=6$ ($a=8$). Từ $j=6$, cần $L=3$ và $a<8$: $j=4$ ($a=6$). Từ $j=4$, cần $L=2$ và $a<6$: $j=2$ ($a=5$) hoặc $j=3$ ($a=4$), chọn một. Từ đó cần $L=1$: $j=1$ ($a=2$). Dừng. Đảo ngược được $2,5,6,8,9$ (hoặc $2,4,6,8,9$). Slide lưu ý có thể có nhiều nghiệm; chọn một hoặc liệt kê tất cả.

## Cài đặt

Giữ mảng `prev` để truy vết gọn thay vì tìm lại:

```java
static int[] lis(int[] a) {
    int n = a.length;
    int[] len = new int[n];
    int[] prev = new int[n];
    int bestEnd = 0;
    for (int i = 0; i < n; i++) {
        len[i] = 1;
        prev[i] = -1;
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i] && len[j] + 1 > len[i]) {
                len[i] = len[j] + 1;
                prev[i] = j;
            }
        }
        if (len[i] > len[bestEnd]) bestEnd = i;
    }
    int[] result = new int[len[bestEnd]];
    int k = result.length - 1;
    for (int i = bestEnd; i != -1; i = prev[i]) result[k--] = a[i];
    return result;
}
```

Truy vết đi ngược nên điền kết quả từ cuối mảng `result`. Dãy rỗng cần xử lý riêng (trả mảng rỗng) vì `len[bestEnd]` truy cập `len[0]`.

## Độ phức tạp

| | Thời gian | Bộ nhớ |
|---|---|---|
| Điền bảng | $O(n^2)$ (mỗi $i$ xét tối đa $i-1$ giá trị $j$) | $O(n)$ |
| Truy vết | $O(n)$ | $O(n)$ |

Có thuật toán $O(n\log n)$ dùng tìm kiếm nhị phân, ví dụ [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search), nhưng ngoài phạm vi slide.

## Lỗi thường gặp

- Lấy đáp án là $L(n)$ thay vì $\max_i L(i)$.
- Dùng `<=` thay `<` khi đề yêu cầu tăng ngặt, thành dãy không giảm.
- Quên $L(i)\ge1$: khởi tạo `len[i]=0` làm kết quả thiếu một.
- Nhầm dãy con (không liên tiếp) với dãy con liên tiếp (đoạn con).
- Khi truy vết chỉ so `a[j] < a[i]` mà không kiểm tra `len[j] == len[i]-1`, có thể đi vào nhánh ngắn hơn.

## Mở rộng

Hai biến thể xuất hiện ngay trong [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp): dãy Wavio (tăng rồi giảm, ghép $L$ từ trái sang và từ phải sang), và xếp khối đá hoặc dãy tam giác bao nhau (chuỗi dài nhất theo quan hệ "chứa"; chỉ thay điều kiện $a_j<a_i$ bằng quan hệ khác).

## Tự kiểm tra

**1. Tính bảng $L$ cho dãy $3,1,4,1,5,9,2,6$ và nêu độ dài dãy con tăng dài nhất.**

> **Đáp án**
> $L=1,1,2,1,3,4,2,4$. Lớn nhất là 4, ví dụ $1,4,5,9$ hoặc $1,4,5,6$ hoặc $3,4,5,9$.

**2. Nếu bỏ điều kiện $a_j<a_i$ trong công thức (xét mọi $j<i$) thì $L(i)$ thành gì?**

> **Đáp án**
> $L(i)=i$: ta đếm cả những dãy không tăng, vì ghép thêm $a_i$ vào bất kỳ dãy nào trước nó. Điều kiện $a_j<a_i$ chính là ràng buộc tăng.

**3. Dãy $5,4,3,2,1$ có $L$ thế nào và dãy con tăng dài nhất là gì?**

> **Đáp án**
> $L(i)=1$ với mọi $i$, độ dài 1; mỗi phần tử một mình là một dãy con tăng.
