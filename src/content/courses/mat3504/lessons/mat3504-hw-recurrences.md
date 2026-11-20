# Bài tập: giải công thức truy hồi

## Đề bài

Phiếu bài tập "Assignment 2: Recursion" (môn Thiết kế và đánh giá thuật toán) yêu cầu giải công thức đệ quy để xác định độ phức tạp thuật toán. Phần này gồm ví dụ mẫu và bài tập 1.

**Định lý chính dùng trong phiếu.** Nếu $n$ là lũy thừa của $b$, $T(n)=1$ khi $n\le1$ và $T(n)=aT(n/b)+n^d$ khi $n>1$ ($a\ge1$, $b>1$, $d\ge0$) thì $T(n)$ là $O(n^d)$ nếu $a<b^d$, $O(n^d\log n)$ nếu $a=b^d$, $O(n^{\log_b a})$ nếu $a>b^d$.

**Ví dụ mẫu trong phiếu.**

1. $T(n)=2T(n-1)-1$ với $n>0$, $T(n)=1$ ngược lại.
2. $T(n)=3T(n-1)$ với $n>0$, $T(n)=1$ ngược lại.
3. Với $n\ge2$ là lũy thừa tương ứng: (a) $T(1)=1$, $T(n)=2T(n/2)+6n-1$; (b) $T(1)=2$, $T(n)=4T(n/3)+3n-5$; (c) $T(1)=1$, $T(n)=3T(n/2)+n^2-n$.

**Bài tập 1: giải công thức đệ quy xác định độ phức tạp.**

1. Bài 2.4 (Exercise 2.4, trang 102-105) trong giáo trình của Anany Levitin: chọn 2 trong 5 ý của bài 1, và chọn 1 bài trong các bài còn lại.
2. Chọn làm ít nhất 3 trong 10 bài (a) đến (j) sau.

- (a) $T(1)=1$, $T(n)=3T(n-1)+2$ với $n\ge2$.
- (b) $T(1)=3$, $T(n)=T(n-1)+2n-3$.
- (c) $T(1)=1$, $T(n)=2T(n-1)+n-1$.
- (d) $T(1)=5$, $T(n)=2T(n-1)+3n+1$.
- (e) $T(1)=4$, $T(n)=2T(n/2)+3n+2$ ($n$ lũy thừa của 2).
- (f) $T(1)=1$, $T(n)=6T(n/6)+2n+3$ ($n$ lũy thừa của 6).
- (g) $T(1)=3$, $T(n)=6T(n/6)+3n-1$ ($n$ lũy thừa của 6).
- (h) $T(1)=3$, $T(n)=4T(n/3)+2n-1$ ($n$ lũy thừa của 3).
- (i) $T(1)=4$, $T(n)=3T(n/2)+n^2-2n+1$ ($n$ lũy thừa của 2).
- (j) $T(1)=1$, $T(n)=3T(n/2)+n-2$ ($n$ lũy thừa của 2).

Các Bài tập 2 (lập trình đệ quy và khử đệ quy) và Bài tập 3 (tự đặt bài toán) của phiếu thuộc [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination) và [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion), không nằm trong bài này.

## Kiến thức cần ôn

- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation): đọc điều kiện đầu và dạng công thức (giảm một đơn vị hay chia theo hệ số).
- [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method): giải các ý (a) đến (d) và ví dụ 1, 2, vì dạng $T(n-1)$ không dùng được định lý chính. Dùng cho cả dạng chia khi cần giá trị chính xác.
- [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem): ý (e) đến (j) và ví dụ 3, khi chỉ cần bậc $O(\cdot)$.
- [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o): kết luận bậc, bỏ hằng số và hạng thấp.

## Hướng tiếp cận

1. Xem công thức có $T(n-1)$ hay $T(n/b)$. Dạng $T(n-1)$: thế lặp. Dạng $T(n/b)$: tính $a$, $b$, $d$ rồi so sánh $a$ với $b^d$.
2. Với $T(n-1)$ có hệ số $a\ge2$ (a, c, d): bậc là $a^n$ nhân đa thức; tìm nghiệm riêng cùng dạng với phần cộng thêm (hằng hoặc bậc nhất) để đoán dạng đóng, rồi dùng $T(1)$ định hằng.
3. Với $a=1$ (b): $T(n)=T(1)+\sum$ phần cộng, là tổng cấp số cộng.
4. Với dạng chia: đặt $n=b^k$, rồi kiểm tra bằng bảng $a$ so $b^d$. Hạng "$-1$", "$+3$" chỉ thêm một hằng vào dạng đóng.
5. Luôn thử lại với $n=2$ hoặc $n=3$ bằng công thức ban đầu.

## Gợi ý theo bậc

::: Gợi ý 1: xác định dạng
Với mỗi ý hãy ghi: có $T(n-1)$ hay $T(n/b)$; nếu chia thì $a$, $b$, $d$ bằng bao nhiêu. Chia: ý (e) có $a=2,b=2,d=1$; ý (h) có $a=4,b=3,d=1$; ý (i) có $a=3,b=2,d=2$.
:::

::: Gợi ý 2: thế lặp cho dạng giảm
Với (a): $T(n)=3T(n-1)+2=3^2T(n-2)+2\cdot3+2=\dots$ Sau $k$ bước còn $3^kT(n-k)+2(3^{k-1}+\dots+1)=3^kT(n-k)+3^k-1$. Chọn $k=n-1$.
:::

::: Gợi ý 3: dạng đóng cho dạng chia
Đặt $n=b^k$ và chia hai vế cho $a^k$ hoặc $b^k$ để ra tổng. Hoặc dự đoán $T(n)=An^{\alpha}+(\text{phần cộng thêm})$, với $\alpha=\log_b a$ khi $a>b^d$, hay $A\,n^d\log n$ khi $a=b^d$.
:::

## Lời giải tham khảo

Mọi dạng đóng dưới đây đã được thử lại bằng chương trình với các giá trị nhỏ của $n$.

::: Ví dụ 1 và 2 của phiếu
Ví dụ 1: $T(0)=1$, $T(n)=2T(n-1)-1$. Có $T(1)=2\cdot1-1=1$, $T(2)=1$, ... Quy nạp cho $T(n)=1$ với mọi $n$, nên $\Theta(1)$. Cạm bẫy là nghĩ nó phải mũ vì có hệ số 2.

Ví dụ 2: $T(n)=3T(n-1)$, $T(0)=1$ cho $T(n)=3^n$, nên $\Theta(3^n)$.
:::

::: Ví dụ 3 của phiếu
(a) $T(n)=6n\log_2 n+1$, bậc $O(n\log n)$. Kiểm tra $T(2)=2+12-1=13$.

(b) $a=4>b^d=3$: $T(n)=\frac{28}{3}n^{\log_3 4}-9n+\frac53$, bậc $O(n^{\log_3 4})$. Kiểm tra $T(3)=4\cdot2+9-5=12$ và công thức $\frac{28}{3}\cdot4-27+\frac53=12$.

(c) $a=3<b^d=4$: $T(n)=4n^2+2n-5\,n^{\log_2 3}$, bậc $O(n^2)$. Kiểm tra $T(2)=3+4-2=5$ và $16+4-15=5$.
:::

::: Lời giải ý (a), (b), (c), (d): dạng giảm
(a) $T(n)=2\cdot3^{n-1}-1$, bậc $\Theta(3^n)$. Kiểm tra $T(2)=5$.

(b) $T(n)=n^2-2n+4$, bậc $\Theta(n^2)$. Kiểm tra $T(2)=3+1=4$, $T(3)=4+3=7=9-6+4$.

(c) $T(n)=3\cdot2^{n-1}-n-1$, bậc $\Theta(2^n)$. Kiểm tra $T(2)=3$, $T(3)=8$.

(d) $T(n)=15\cdot2^{n-1}-3n-7$, bậc $\Theta(2^n)$. Kiểm tra $T(2)=17$.
:::

::: Lời giải ý (e), (f), (g): $a=b$, $d=1$
(e) $T(n)=3n\log_2 n+6n-2$, bậc $O(n\log n)$. Kiểm tra $T(2)=8+3+2=16$.

(f) $T(n)=2n\log_6 n+\frac85n-\frac35$, bậc $O(n\log n)$. Kiểm tra $T(6)=6+12+3=21$.

(g) $T(n)=3n\log_6 n+\frac{14}{5}n+\frac15$, bậc $O(n\log n)$. Kiểm tra $T(6)=18+18-1=35$.

Cả ba có $a=b$, $d=1$, nên $a=b^d$: cận $O(n\log n)$, khớp [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem).
:::

::: Lời giải ý (h), (i), (j): các trường hợp còn lại
(h) $a=4>3$: $T(n)=\frac{26}{3}n^{\log_3 4}-6n+\frac13$, bậc $O(n^{\log_3 4})$. Kiểm tra $T(3)=12+6-1=17$.

(i) $a=3<b^d=4$: $T(n)=-\frac72n^{\log_2 3}+4n^2+4n-\frac12$, bậc $O(n^2)$. Kiểm tra $T(2)=12+4-4+1=13$.

(j) $a=3>b^d=2$ ($d=1$): $T(n)=2n^{\log_2 3}-2n+1$, bậc $O(n^{\log_2 3})\approx O(n^{1.585})$. Kiểm tra $T(2)=3$.
:::

::: Mẫu trình bày chi tiết cho ý (b)
$T(n)=T(n-1)+2n-3$ nên $T(n)=T(1)+\sum_{j=2}^{n}(2j-3)$. Có $\sum_{j=2}^n 2j=n(n+1)-2$ và $\sum_{j=2}^n 3=3(n-1)$. Vậy $T(n)=3+n^2+n-2-3n+3=n^2-2n+4$.
:::

## Kiểm tra lời giải

Chạy chương trình nhỏ để đối chiếu công thức với truy hồi gốc (đủ để bắt lỗi hằng số):

```java
static long t(int n) {                      // ý (b)
    return n == 1 ? 3 : t(n - 1) + 2L * n - 3;
}

public static void main(String[] args) {
    for (int n = 1; n <= 6; n++) {
        long closed = (long) n * n - 2L * n + 4;
        System.out.println(n + ": " + t(n) + " " + closed);
    }
}
```

Giá trị mong đợi của ý (b): $T(1..6)=3,4,7,12,19,28$. Các trường hợp biên khác để thử: ý (a) cho $1,5,17,53$; ý (e) cho $T(1)=4$, $T(2)=16$, $T(4)=46$; ý (j) cho $T(1)=1$, $T(2)=3$, $T(4)=9+2=11$.

## Sau bài này

Áp dụng kỹ năng này khi phân tích [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort), [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search), [Nhân ma trận Strassen](#/courses/mat3504/lessons/mat3504-strassen) và [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi). Phần lập trình của phiếu (so sánh đệ quy và khử đệ quy) tiếp tục ở [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination).
