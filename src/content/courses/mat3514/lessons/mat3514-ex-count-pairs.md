# Bài tập: đếm cặp a_i + a_j = x

## Đề bài

Bài tập 7 trong phiếu bài tập 2 (Sorting), "Đếm cặp đôi".

1. **Mô tả:** cho dãy $a_1, \dots, a_n$ và số $x$. Đếm số cặp chỉ số $(i, j)$ với $i < j$ sao cho $a_i + a_j = x$.
2. **Cách 1:** với mỗi chỉ số $j$ từ $2$ đến $n$, duyệt đếm số chỉ số $i < j$ thỏa $a_i + a_j = x$. Độ phức tạp $O(n^2)$.
3. **Cách 2:** sắp xếp tăng dần để thuận tiện cho tìm kiếm. Với mỗi chỉ số $j$, tìm xem $x - a_j$ có xuất hiện trong khoảng $a[1..j-1]$ không bằng tìm kiếm nhị phân: tìm chỉ số bé nhất $i_1$ và lớn nhất $i_2$ mà $a_{i_1} = a_{i_2} = x - a_j$. Kết quả cho mỗi $j$ là $i_2 - i_1 + 1$ nếu tồn tại ít nhất một chỉ số thỏa. Độ phức tạp $O(n \log n)$: $O(n \log n)$ cho sắp xếp bằng [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort) hoặc [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort), cộng $O(n \log n)$ cho tối đa $2n$ lần tìm nhị phân, mỗi lần $O(\log n)$.

Ví dụ: $a = (3, 1, 2, 3, 4)$, $x = 5$. Các cặp là chỉ số $(1,3)$ giá trị 3+2, $(2,5)$ giá trị 1+4 và $(3,4)$ giá trị 2+3; đáp số 3.

## Kiến thức cần ôn

- [Bài toán sắp xếp](#/courses/mat3514/lessons/mat3514-sorting-problem) và [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort)/[Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort): bước sắp xếp $O(n \log n)$ ở cách 2. Vì số cặp không phụ thuộc thứ tự ban đầu của mảng (cặp $\{i,j\}$ vô hướng), sắp xếp xong vẫn đếm đúng.
- [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search): tìm biên trái (phần tử đầu tiên $\ge v$) và biên phải (phần tử đầu tiên $> v$) để đếm số lần xuất hiện của $v$ trong một đoạn đã sắp.
- [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search): cách 1 chính là tìm tuần tự lồng nhau.
- [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o): so sánh $O(n^2)$ và $O(n \log n)$ khi $n$ lớn.

## Hướng tiếp cận

Cách 1 (vét cạn, [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force)): hai vòng lặp kiểm tra mọi cặp.

Cách 2: sau khi sắp, với mỗi $j$ ta cần *số* phần tử bằng $x - a_j$ trong tiền tố $a[0..j-1]$ (đánh số từ 0). Số này bằng $\text{upper} - \text{lower}$, trong đó $\text{lower}$ là chỉ số đầu tiên $\ge v$ và $\text{upper}$ là chỉ số đầu tiên $> v$, cả hai tìm trên đoạn $[0, j)$. Chỉ đếm tiền tố $[0, j)$ để mỗi cặp chỉ được tính một lần (tại phần tử có chỉ số lớn hơn trong thứ tự đã sắp).

## Gợi ý theo bậc

::: Gợi ý 1
Hãy viết trước cách 1 và chạy trên ví dụ để có đáp số tham chiếu cho cách 2. Chú ý đáp số có thể lớn: dùng `long`.
:::

::: Gợi ý 2
Sau khi sắp, các phần tử bằng $v$ nằm liền nhau. Đếm chúng bằng hiệu hai chỉ số biên thay vì duyệt.
:::

::: Gợi ý 3
Viết một hàm `firstGreaterOrEqual(b, v, hi)` trả về chỉ số nhỏ nhất trong $[0, hi)$ mà $b[idx] \ge v$ (trả về `hi` nếu không có). `upper` là hàm tương tự với điều kiện $b[idx] > v$.
:::

## Lời giải tham khảo

::: Lời giải cách 1 ($O(n^2)$)
```java
static long countPairsBrute(int[] a, int x) {
    long cnt = 0;
    for (int j = 1; j < a.length; j++) {
        for (int i = 0; i < j; i++) {
            if ((long) a[i] + a[j] == x) cnt++;
        }
    }
    return cnt;
}
```
:::

::: Lời giải cách 2 ($O(n \log n)$)
```java
import java.util.Arrays;

static long countPairs(int[] a, int x) {
    int[] b = a.clone();
    Arrays.sort(b);                       // O(n log n)
    long cnt = 0;
    for (int j = 1; j < b.length; j++) {
        long need = (long) x - b[j];
        cnt += firstGreater(b, need, j) - firstGreaterOrEqual(b, need, j);
    }
    return cnt;
}

// chỉ số nhỏ nhất trong [0, hi) có b[idx] >= v, hoặc hi nếu không có
static int firstGreaterOrEqual(int[] b, long v, int hi) {
    int lo = 0, h = hi;
    while (lo < h) {
        int mid = lo + (h - lo) / 2;
        if (b[mid] >= v) h = mid;
        else lo = mid + 1;
    }
    return lo;
}

// chỉ số nhỏ nhất trong [0, hi) có b[idx] > v, hoặc hi nếu không có
static int firstGreater(int[] b, long v, int hi) {
    int lo = 0, h = hi;
    while (lo < h) {
        int mid = lo + (h - lo) / 2;
        if (b[mid] > v) h = mid;
        else lo = mid + 1;
    }
    return lo;
}
```

Chạy tay trên $b = (1,2,3,3,4)$, $x=5$: $j=1$ ($b=2$, cần 3, đoạn $[1]$): 0. $j=2$ ($3$, cần 2, đoạn $[1,2]$): lower=1, upper=2, được 1. $j=3$ (3, cần 2, đoạn $[1,2,3]$): 1. $j=4$ (4, cần 1, đoạn $[1,2,3,3]$): lower=0, upper=1, được 1. Tổng 3.

Độ phức tạp: sắp xếp $O(n \log n)$; $n - 1$ vòng, mỗi vòng hai lần tìm nhị phân $O(\log n)$, tổng $O(n \log n)$. Bộ nhớ $O(n)$ cho bản sao (hoặc $O(1)$ nếu sắp tại chỗ).
:::

Hàm tìm biên dùng cùng khung với [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search) nhưng không dừng khi gặp bằng nhau, mà tiếp tục thu hẹp để tìm biên.

## Kiểm tra lời giải

| Đầu vào | $x$ | Kết quả mong đợi |
|---|---|---|
| `[]` | 5 | 0 |
| `[5]` | 5 | 0 (chưa có cặp) |
| `[3, 1, 2, 3, 4]` | 5 | 3 |
| `[2, 2, 2, 2]` | 4 | 6 ($\binom{4}{2}$ cặp, mọi giá trị trùng) |
| `[1, 2, 3]` | 100 | 0 |
| `[0, 0, 0]` | 0 | 3 |
| `[-1, 1, 2, -2]` | 0 | 2 |

Hãy so sánh `countPairs` với `countPairsBrute` trên nhiều mảng ngẫu nhiên nhỏ: hai kết quả phải trùng.

## Sau bài này

Tiếp tục với [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark) để đo thực nghiệm khác biệt giữa các thuật toán sắp xếp. Cách này (sắp xếp rồi dùng tìm kiếm nhị phân) cũng là mẫu cho bài toán "hai con trỏ" và các bài về tổng cặp ở những chương sau; xem thêm [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) nếu muốn sắp xếp có bảo đảm $O(n \log n)$ tại chỗ.
