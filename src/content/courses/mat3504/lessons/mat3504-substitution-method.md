# Giải truy hồi bằng phương pháp thế

## Vì sao cần

Sau khi lập được công thức truy hồi trong [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation), bạn cần một dạng đóng của $T(n)$ để so sánh thuật toán. Phương pháp thế (thế lặp, repeated substitution) làm việc đó bằng cách thay $T$ ở kích thước nhỏ hơn vào chính nó nhiều lần, nhìn ra quy luật, rồi dừng ở trường hợp cơ sở. Đây là công cụ cho mọi dạng, kể cả dạng giảm một đơn vị mà [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) không phủ.

## Phát biểu

Quy trình:

1. Viết $T(n)$, thế $T(n-1)$ (hoặc $T(n/2)$) bằng vế phải của công thức.
2. Lặp sau $k$ bước, ghi dạng tổng quát theo $k$.
3. Chọn $k$ sao cho đối số chạm cơ sở (ví dụ $n-k=1$ hoặc $n/2^k=1$).
4. Thay $k$ vào, tính tổng, kết luận $O(\cdot)$.

Các kết quả trong slide:

| Truy hồi | Dạng đóng | Bậc |
|---|---|---|
| $T(n)=T(n-1)+n,\ T(0)=1$ | tổng $1+2+\dots+n$ | $O(n^2)$ |
| $T(n)=T(n/2)+1,\ T(1)=0$ | $\log_2 n$ | $O(\log n)$ |
| $T(n)=T(n/2)+n,\ T(1)=0$ | $n+n/2+n/4+\dots\le 2n$ | $O(n)$ |
| $T(n)=2T(n/2)+n,\ T(1)=0$ | $n\log_2 n$ | $O(n\log n)$ |

## Giải thích / chứng minh

**Dạng $T(n)=T(n-1)+n$.** Khai triển:

$$T(n)=T(n-1)+n=T(n-2)+(n-1)+n=\dots=1+2+\dots+(n-1)+n=\frac{n(n+1)}{2}.$$

Vậy $T(n)=O(n^2)$. Đây cũng là số lần lặp của [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost).

**Dạng $T(n)=T(n/2)+1$.** Đặt $n=2^k$: $T(2^k)=T(2^{k-1})+1=\dots=k$, tức $T(n)=\log_2 n$. Mỗi lần chia đôi tốn một đơn vị, nên số đơn vị bằng số lần chia đôi (như [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search)).

**Dạng $T(n)=T(n/2)+n$.** $T(n)=n+\frac n2+\frac n4+\dots\le 2n$ (cấp số nhân giảm), nên $O(n)$.

**Dạng $T(n)=2T(n/2)+n$.** Đặt $n=2^k$, chia hai vế cho $2^k$ để dây chuyền co lại:

$$\frac{T(2^k)}{2^k}=\frac{T(2^{k-1})}{2^{k-1}}+1=\dots=k.$$

Suy ra $T(2^k)=k\,2^k$, tức $T(n)=n\log_2 n=O(n\log n)$. Đây là thời gian của [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort).

## Ví dụ tính

**Ví dụ 1: tháp Hà Nội** (xem [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi)): $T(1)=1$, $T(n)=2T(n-1)+1$.

$$T(n)=2T(n-1)+1=2^2T(n-2)+2+1=2^3T(n-3)+4+2+1=\dots$$

Sau $k$ bước: $T(n)=2^kT(n-k)+(2^k-1)$. Chọn $k=n-1$:

$$T(n)=2^{n-1}\cdot1+2^{n-1}-1=2^n-1.$$

Khớp với bảng $1,3,7,15$. Vậy $T(n)=O(2^n)$.

**Ví dụ 2: dãy theo phiếu bài tập**, $T(1)=1$, $T(n)=3T(n-1)+2$. Sau $k$ bước:

$$T(n)=3^kT(n-k)+2(3^{k-1}+\dots+3+1)=3^kT(n-k)+3^k-1.$$

Với $k=n-1$: $T(n)=3^{n-1}+3^{n-1}-1=2\cdot3^{n-1}-1$. Kiểm tra: $T(2)=3\cdot1+2=5=2\cdot3-1$. Bậc $O(3^n)$.

**Ví dụ 3: kỹ thuật chia cho $2^k$**, $T(1)=1$, $T(n)=2T(n/2)+6n-1$ với $n=2^k$:

$$\frac{T(2^k)}{2^k}=\frac{T(2^{k-1})}{2^{k-1}}+6-\frac{1}{2^k}.$$

Cộng dồn từ $1$ đến $k$: $\frac{T(2^k)}{2^k}=1+6k-(1-2^{-k})=6k+2^{-k}$. Nhân lại: $T(n)=6n\log_2 n+1$. Kiểm tra $n=2$: $T(2)=2+12-1=13$ và $6\cdot2\cdot1+1=13$.

## Áp dụng ở đâu

- [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi): ra số bước chuyển đĩa $2^n-1$.
- [MinMax chia để trị](#/courses/mat3504/lessons/mat3504-minmax-dc): thế lặp $T(n)=2T(n/2)+2$ để đếm số phép so sánh.
- [Bài tập: giải công thức truy hồi](#/courses/mat3504/lessons/mat3504-hw-recurrences): toàn bộ phiếu bài tập giải được bằng thế lặp, kể cả các dạng không đưa vào định lý chính.
- Khi truy hồi có dạng chia $aT(n/b)+n^d$ chuẩn, [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) cho kết quả nhanh hơn; thế lặp là cách kiểm tra lại.

## Lỗi thường gặp

- Quên cộng các hạng tử còn lại sau $k$ bước (phần $2^k-1$ ở tháp Hà Nội) và chỉ giữ $2^kT(n-k)$.
- Chọn sai $k$: đối số $n-k$ chạm 1 khi $k=n-1$, còn $n/2^k$ chạm 1 khi $k=\log_2 n$.
- Với dạng chia, quên giả sử $n=2^k$ (hay lũy thừa của $b$), hoặc quên đổi $k$ lại thành $\log_2 n$.
- Rút gọn tổng cấp số nhân sai: $1+2+\dots+2^{k-1}=2^k-1$, không phải $2^k$.
- Kết luận $O(\cdot)$ khi vẫn còn hạng tử chưa kiểm tra (ví dụ $T(n)=T(n/2)+n$ cho $2n$, không phải $n\log n$).

## Tự kiểm tra

**1.** Vì sao phải dừng khai triển tại điều kiện cơ sở?

> **Đáp án**
> Điều kiện cơ sở xác định số bước khai triển $k$ và giá trị đầu của tổng, từ đó suy ra chi phí theo $n$. Nếu khai triển quá, đối số rơi ra ngoài miền xác định.

**2.** Giải $T(1)=3$, $T(n)=T(n-1)+2n-3$ bằng thế lặp.

> **Đáp án**
> $T(n)=3+\sum_{j=2}^{n}(2j-3)=3+(n(n+1)-2)-3(n-1)=n^2-2n+4$. Kiểm tra $T(2)=3+1=4=4-4+4$. Bậc $O(n^2)$.

**3.** (Vận dụng) $T(n)=T(n/2)+n$ và $T(n)=2T(n/2)+n$ khác nhau về bậc thế nào, vì sao?

> **Đáp án**
> Cái đầu là $O(n)$: các hạng tử $n,n/2,n/4,\dots$ giảm nhanh, tổng $\le 2n$. Cái sau là $O(n\log n)$: mỗi mức của cây đệ quy vẫn tốn tổng $n$ và có $\log_2 n$ mức, vì số bài toán con nhân đôi bù đúng phần giảm kích thước.
