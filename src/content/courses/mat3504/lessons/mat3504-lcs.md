# Dãy con chung dài nhất của hai dãy

## Vì sao cần

So sánh hai chuỗi ký tự hoặc hai dãy số xem chúng giống nhau đến đâu, như công cụ so sánh tệp (diff) hay so sánh chuỗi gen. "Giống nhau" ở đây là cùng chứa một dãy con, các phần tử không cần liên tiếp. Vét cạn mọi dãy con của một dãy là $2^m$ khả năng; [quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) cho $O(mn)$. Đây là bài QHĐ hai dãy kinh điển nối tiếp [Đếm tổ hợp C(r, n) bằng bảng](#/courses/mat3504/lessons/mat3504-binomial-dp) và [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01). Mô phỏng bên dưới điền bảng $L$ và vẽ đường truy vết.

## Bài toán

Cho $a=(a_1,\dots,a_m)$ và $b=(b_1,\dots,b_n)$. Xóa một số phần tử của $a$ và một số phần tử của $b$ (không cần cùng chỉ số) sao cho hai dãy còn lại giống nhau và dài nhất. Dãy đó là **dãy con chung dài nhất** (longest common subsequence, LCS).

Ví dụ trong tài liệu: $a=3,5,1,3,5,5,3$ và $b=1,5,3,5,3,1$ có LCS độ dài 4, chẳng hạn $1,5,5,3$ hoặc $5,3,5,3$.

## Kiến thức sử dụng

- [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements): hàm mục tiêu, truy hồi, bảng hai chiều, truy vết.
- [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming): bài toán con chồng lấp, điền bảng theo thứ tự phụ thuộc.
- [Dãy con tăng dài nhất](#/courses/mat3504/lessons/mat3504-lis): cũng tìm dãy con tối ưu và truy vết, nhưng chỉ trên một dãy.

## Phân tích

Gọi $L(i,j)$ là độ dài LCS của tiền tố $a_1..a_i$ và $b_1..b_j$. Khi đó $L(m,n)$ là đáp án. Xét hai phần tử cuối $a_i$, $b_j$:

- Nếu $a_i=b_j$: ghép cặp chúng ở cuối, $L(i,j)=L(i-1,j-1)+1$.
- Nếu $a_i\ne b_j$: ít nhất một trong hai không nằm trong LCS cuối, nên $L(i,j)=\max\{L(i-1,j),L(i,j-1)\}$.

Cơ sở: tiền tố rỗng nên $L(0,j)=L(i,0)=0$.

$$
L(i,j)=\begin{cases}L(i-1,j-1)+1 & a_i=b_j\\ \max\{L(i-1,j),\,L(i,j-1)\} & a_i\ne b_j\end{cases}
$$

Tài liệu viết gọn thành $L(i,j)=\max\{L(i,j-1),L(i-1,j),L(i-1,j-1)+x\}$ với $x=1$ nếu $a_i=b_j$, ngược lại $x=0$; hai cách viết cho cùng kết quả. Mỗi ô cần ba ô: bên trái, bên trên, chéo trên trái, nên điền theo hàng từ trái sang phải (hoặc theo đường chéo song song với đường chéo phụ như tài liệu mô tả).

## Lời giải từng bước

Dùng ví dụ nhỏ hơn để chạy tay: $a=A,B,C,B$ và $b=B,D,C,A,B$.

| $i\backslash j$ | 0 | 1 (B) | 2 (D) | 3 (C) | 4 (A) | 5 (B) |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 (A) | 0 | 0 | 0 | 0 | 1 | 1 |
| 2 (B) | 0 | 1 | 1 | 1 | 1 | 2 |
| 3 (C) | 0 | 1 | 1 | 2 | 2 | 2 |
| 4 (B) | 0 | 1 | 1 | 2 | 2 | 3 |

Các ô quan trọng: $L(1,4)$ có $a_1=b_4=A$ nên $L(0,3)+1=1$. $L(2,5)$ có $B=B$ nên $L(1,4)+1=2$. $L(3,3)$ có $C=C$ nên $L(2,2)+1=2$. $L(4,5)$ có $B=B$ nên $L(3,4)+1=3$.

Độ dài LCS là $L(4,5)=3$.

**Truy vết** từ $(i,j)=(m,n)$:

- Nếu $a_i=b_j$: ký tự này thuộc LCS, đi chéo về $(i-1,j-1)$.
- Ngược lại, nếu $L(i,j)=L(i,j-1)$ thì sang $(i,j-1)$, không thì sang $(i-1,j)$.
- Dừng khi $i=0$ hoặc $j=0$.

| Ô | $a_i$ vs $b_j$ | Hành động |
|---|---|---|
| $(4,5)$ | B = B | lấy B, về $(3,4)$ |
| $(3,4)$ | C ≠ A; $L(3,3)=2=L(3,4)$ | về $(3,3)$ |
| $(3,3)$ | C = C | lấy C, về $(2,2)$ |
| $(2,2)$ | B ≠ D; $L(2,1)=1=L(2,2)$ | về $(2,1)$ |
| $(2,1)$ | B = B | lấy B, về $(1,0)$, dừng |

Các ký tự lấy theo thứ tự ngược: B, C, B; đảo lại được LCS $=B,C,B$ (độ dài 3).

## Cài đặt

```java
static int[] lcs(int[] a, int[] b) {
    int m = a.length, n = b.length;
    int[][] l = new int[m + 1][n + 1];                 // viền 0 là cơ sở
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (a[i - 1] == b[j - 1]) l[i][j] = l[i - 1][j - 1] + 1;
            else l[i][j] = Math.max(l[i - 1][j], l[i][j - 1]);
        }
    }
    int[] result = new int[l[m][n]];
    int k = result.length - 1;
    int i = m, j = n;
    while (i > 0 && j > 0) {                           // truy vết
        if (a[i - 1] == b[j - 1]) {
            result[k--] = a[i - 1];
            i--; j--;
        } else if (l[i][j] == l[i][j - 1]) {
            j--;
        } else {
            i--;
        }
    }
    return result;
}
```

Dùng `a[i - 1]`, `b[j - 1]` vì $L$ đánh số từ 1 với viền 0 còn mảng Java đánh số từ 0.

## Độ phức tạp

| | Thời gian | Bộ nhớ |
|---|---|---|
| Điền bảng | $O(mn)$ | $O(mn)$ |
| Truy vết | $O(m+n)$ | |
| Chỉ lấy độ dài | $O(mn)$ | $O(\min(m,n))$ (giữ hai hàng) |

Tài liệu ghi $O(n^2)$ khi $m\approx n$. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Nhầm dãy con (không cần liên tiếp) với xâu con liên tiếp; công thức cho xâu con liên tiếp khác ($L(i,j)=0$ khi hai ký tự khác nhau).
- Khi $a_i\ne b_j$ chỉ lấy $L(i-1,j-1)$ thay vì $\max\{L(i-1,j),L(i,j-1)\}$.
- Thiếu hàng 0, cột 0 và truy cập $L(-1,\cdot)$.
- Truy vết quên điều kiện dừng $i>0$ và $j>0$, hoặc quên đảo ngược kết quả.
- Nhầm độ lệch chỉ số giữa mảng Java (từ 0) và công thức (từ 1).

## Mở rộng

Bài tập 13, 14 và 15 trong [Bài tập: quy hoạch động](#/courses/mat3504/lessons/mat3504-hw-dp) là LCS trá hình: LCS hai xâu; cầu nối thành phố kết nghĩa (thay phép "bằng nhau" bằng quan hệ cho phép nối); chèn ít ký tự nhất để thành xâu đối xứng (LCS của xâu và xâu đảo ngược).

## Tự kiểm tra

**1. Tính LCS của $a=X,Y,Z$ và $b=Z,Y,X$.**

> **Đáp án**
> Độ dài 1 (bất kỳ ký tự đơn nào). Mọi dãy con 2 ký tự của $a$ giữ thứ tự $XY,XZ,YZ$, còn $b$ chỉ chứa $ZY,ZX,YX$, không có dãy chung.

**2. Nếu $L(i,j-1)=L(i-1,j)=5$ và $a_i\ne b_j$ thì $L(i,j)$ bằng bao nhiêu?**

> **Đáp án**
> 5, vì lấy $\max\{5,5\}$.

**3. Dùng LCS để tìm số ký tự ít nhất cần thêm vào xâu $S$ để thành đối xứng. Thử với $S=ABCA$ và $S=ABC$.**

> **Đáp án**
> Số ký tự cần thêm là $|S|-\mathrm{LCS}(S,S^R)$ với $S^R$ là xâu đảo. $ABCA$ có $S^R=ACBA$, LCS $=ABA$ hoặc $ACA$ (3), nên thêm $4-3=1$ ký tự. $ABC$ có $S^R=CBA$, LCS 1, thêm $3-1=2$ ký tự.
