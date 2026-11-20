# Quy tắc tổng và quy tắc nhân

## Vì sao cần

Đếm từng phép toán như ở [Thời gian thực hiện và mô hình RAM](#/courses/mat3504/lessons/mat3504-running-time-model) chỉ làm được với đoạn mã ngắn. Chương trình thật gồm nhiều lệnh nối tiếp, rẽ nhánh, vòng lặp lồng nhau. Quy tắc tổng và quy tắc nhân cho phép bạn ghép độ phức tạp $O$ ([Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o)) của các phần nhỏ thành độ phức tạp của cả chương trình mà không cần đếm chi tiết.

## Phát biểu

Giả sử $T_1(n) = O(f(n))$ và $T_2(n) = O(g(n))$ lần lượt là độ phức tạp của hai thủ tục $P_1$, $P_2$.

**Quy tắc tổng.** Nếu $P$ gọi tuần tự $P_1$ rồi $P_2$ thì

$$T(n) = O(f(n)) + O(g(n)) = O(\max(f(n), g(n))).$$

**Quy tắc nhân.** Nếu $P$ gọi lồng nhau (mỗi lần $P_1$ lặp lại thực hiện $P_2$) thì

$$T(n) = O(f(n)) \cdot O(g(n)) = O(f(n) \cdot g(n)).$$

### Áp dụng cho mô hình RAM

Gọi $f(n)$ và $f_i(n)$ là thời gian thực hiện của lệnh $S$ và các lệnh con $S_i$. Theo slide:

| Cấu trúc | Thời gian |
|---|---|
| Phép toán sơ cấp | $O(1)$ |
| Lệnh hợp thành $S = \{S_1, \dots, S_k\}$ | quy tắc tổng: $O(\max f_i)$ |
| Rẽ nhánh `if (L) S1 else S2` | $\max(O(f_1), O(f_2))$ |
| Vòng lặp `while (L) S` | số lần lặp $\times$ $f(n)$ |

## Giải thích

**Vì sao tổng lấy max?** Khi $n$ lớn, số hạng tăng nhanh hơn lấn át số hạng kia. Ví dụ $O(n) + O(n^2)$: với $n \ge 1$ ta có $n + n^2 \le 2n^2$, nên tổng là $O(n^2)$ = $O(\max)$.

**Vì sao nhân?** Nếu thân vòng lặp tốn $f(n)$ và chạy $g(n)$ lần, tổng chi phí là $g(n)$ lượt cộng dồn, mỗi lượt $f(n)$, tức $f(n) \cdot g(n)$ (khi mỗi lượt có cùng cận trên).

**Vì sao rẽ nhánh lấy max?** Mỗi lần chạy chỉ đi một nhánh, nhưng ta chưa biết nhánh nào, nên lấy cận trên là nhánh tốn hơn.

## Ví dụ tính

**Ví dụ 1 (tổng).**

```java
for (i = 0; i < n; i++) a[i] = 0;          // O(n)
for (i = 0; i < n; i++)
    for (j = 0; j < n; j++) b[i][j] = 0;   // O(n^2)
```

Hai khối tuần tự: $O(n) + O(n^2) = O(\max(n, n^2)) = O(n^2)$.

**Ví dụ 2 (nhân).** Vòng ngoài $i = 0 \dots n-1$ ($n$ lần), vòng trong $j = 0 \dots n-1$ ($n$ lần), thân $O(1)$: $n \cdot n \cdot O(1) = O(n^2)$.

**Ví dụ 3 (vòng trong phụ thuộc vòng ngoài).**

```java
for (i = 0; i < n; i++)
    for (j = 0; j < i; j++)
        x++;
```

Quy tắc nhân thô cho $O(n \cdot n) = O(n^2)$. Tính chính xác: số lần thân chạy là $0 + 1 + \dots + (n-1) = n(n-1)/2$, cũng là $O(n^2)$. Quy tắc nhân cho cận trên đúng, nhưng nếu cận vòng trong thay đổi mạnh, cần cộng chính xác để có cận sát (xem [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost)).

**Ví dụ 4 (rẽ nhánh).**

```java
if (a[0] > 0) {
    for (i = 0; i < n; i++) s += a[i];       // O(n)
} else {
    s = 0;                                   // O(1)
}
```

$\max(O(n), O(1)) = O(n)$.

## Áp dụng ở đâu

- [Số lần lặp của sắp xếp nổi bọt](#/courses/mat3514/lessons/mat3514-bubble-sort-cost): hai vòng lặp lồng nhau cho $O(n^2)$ ngay bằng quy tắc nhân, rồi so với việc đếm chính xác.
- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): so sánh lời giải hai vòng lặp $O(n^2)$ với lời giải tối ưu hơn.
- [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3504/lessons/mat3504-best-worst-average): nhánh `if` hay điều kiện dừng sớm làm tốt nhất khác xấu nhất.
- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation): với đệ quy, ghép chi phí của lời gọi con và phần việc còn lại cũng dựa trên các quy tắc này.

## Lỗi thường gặp

- Cộng khi lẽ ra nhân: hai vòng lặp **lồng nhau** nhân, hai vòng lặp **nối tiếp** mới lấy max.
- Quên một lệnh ẩn có chi phí lớn trong thân vòng, ví dụ gọi `list.contains(x)` ($O(n)$) trong vòng `for` $n$ lần: tổng là $O(n^2)$, không phải $O(n)$.
- Với vòng lặp mà biến đếm nhân đôi (`i *= 2`), số lần lặp là $\log n$, không phải $n$.
- Lấy max sai: $O(n \log n) + O(n)$ là $O(n \log n)$, không phải $O(n)$.
- Cho rằng nhân $O$ luôn cho cận sát: cận $n \cdot n$ cho vòng `j < i` đúng bậc, nhưng hằng số có thể lớn gấp hai.

## Tự kiểm tra

1. Tính $O$ của: một vòng `for` $n$ lần, trong đó gọi hàm tốn $O(\log n)$.

> **Đáp án**
> $O(n) \cdot O(\log n) = O(n \log n)$ theo quy tắc nhân.

2. Tính $O$ của đoạn: vòng `for` $n$ lần với thân $O(1)$, sau đó một vòng `for` lồng 2 tầng, mỗi tầng $n$ lần.

> **Đáp án**
> $O(n) + O(n^2) = O(n^2)$ theo quy tắc tổng (lấy max).

3. Đoạn `for (i = 1; i < n; i *= 2) for (j = 0; j < n; j++) x++;` có $O$ bằng bao nhiêu?

> **Đáp án**
> Vòng ngoài chạy khoảng $\log_2 n$ lần, vòng trong $n$ lần, thân $O(1)$: $O(n \log n)$.
