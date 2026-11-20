# Đổi tiền tham lam

## Vì sao cần

Đổi tiền là bài toán đầu tiên người ta nghĩ tới khi nói về [phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method): lấy đồng lớn nhất còn vừa. Nó vừa là ví dụ tham lam đúng vừa là phản ví dụ nổi tiếng, tùy vào hệ mệnh giá. Mô phỏng bên dưới cho bạn đổi mệnh giá và số tiền để so sánh tham lam với phương án tốt hơn.

## Bài toán

- **Vào**: tập mệnh giá $A=\{a_1>a_2>\dots>a_n\}$ (sắp giảm dần) và số tiền $T$.
- **Ra**: các số nguyên không âm $k_1,\dots,k_n$ sao cho $\sum k_i a_i = T$ và tổng số đồng $\sum k_i$ nhỏ nhất.

Ví dụ trong slide: mệnh giá $1,5,10,50$ và $T=78$.

## Kiến thức sử dụng

- [Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method): lược đồ `BestSelect`/`Acceptable`/`Integrate`. Ở đây `BestSelect` là đồng lớn nhất, `Acceptable` là đồng đó không vượt số tiền còn lại.
- [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming): dùng khi tham lam sai, xem phần Mở rộng.

## Phân tích

Tiêu chí tham lam: với mỗi mệnh giá từ lớn đến nhỏ, lấy tối đa số đồng $k_i = \lfloor T/a_i\rfloor$ rồi trừ vào $T$. Hệ mệnh giá thông thường như $1,5,10,50$ (mỗi mệnh giá là bội của mệnh giá nhỏ hơn) thì tham lam tối ưu. Hệ bất kỳ thì chưa chắc.

Slide cho phản ví dụ: mệnh giá $\{10,6,1\}$, số tiền 55.

| Cách đổi | Số đồng |
|---|---|
| Tham lam: $5\times10 + 5\times1$ | 10 |
| $4\times10 + 2\times6 + 3\times1$ | 9 |
| $3\times10 + 4\times6 + 1\times1$ | 8 |

Tham lam chọn 10 ở bước đầu rồi không sửa được, nên ra 10 đồng trong khi tối ưu là 8.

## Lời giải từng bước

Chạy tham lam với $\{50,10,5,1\}$, $T=78$:

| i | $a_i$ | $T$ trước | $k_i=\lfloor T/a_i\rfloor$ | $T$ sau |
|---|---|---|---|---|
| 1 | 50 | 78 | 1 | 28 |
| 2 | 10 | 28 | 2 | 8 |
| 3 | 5 | 8 | 1 | 3 |
| 4 | 1 | 3 | 3 | 0 |

Tổng $1+2+1+3=7$ đồng, khớp slide. Với $\{10,6,1\}$, $T=55$: $k_1=5$ ($T=5$), $k_2=0$ ($T=5$), $k_3=5$: 10 đồng.

## Cài đặt

Theo lược đồ `ChangeMoney` trong slide (mệnh giá đã sắp giảm dần; trả `null` nếu không đổi được):

```java
static int[] changeGreedy(int[] coins, int amount) {
    int[] k = new int[coins.length];
    int i = 0;
    while (i < coins.length && amount > 0) {
        k[i] = amount / coins[i];
        amount -= k[i] * coins[i];
        i++;
    }
    return amount > 0 ? null : k;   // còn dư tiền: không đổi được
}
```

Dòng `k[i] = amount / coins[i]` là lựa chọn tham lam; không có đồng mệnh giá 1 thì có thể còn dư và hàm trả `null`.

## Độ phức tạp

| Trường hợp | Thời gian |
|---|---|
| Mệnh giá đã sắp | $O(n)$ |
| Cần sắp trước | $O(n\log n)$ |
| Bộ nhớ | $O(n)$ cho mảng $k$ |

Quy hoạch động cho phiên bản đúng với mọi hệ mệnh giá cần $O(nT)$, chậm hơn nhưng đúng. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Lỗi thường gặp

- Cho rằng tham lam luôn đúng. Với $\{10,6,1\}$ nó sai.
- Quên sắp mệnh giá giảm dần, khiến "lấy đồng lớn nhất" không còn đúng.
- Không kiểm tra phần dư: mệnh giá $\{5,2\}$ với $T=3$ không có nghiệm, vòng lặp kết thúc với $T=3>0$.
- Dùng phép chia nguyên với kiểu thực, hoặc trừ sai ($T$ phải giảm đúng $k_i a_i$).

## Mở rộng

Đổi tiền tối ưu với mọi hệ mệnh giá giải bằng quy hoạch động: $D(v)=1+\min_{a_i\le v} D(v-a_i)$, $D(0)=0$. Cách xây dựng công thức này được trình bày trong [Các yếu tố của lời giải QHĐ](#/courses/mat3504/lessons/mat3504-dp-elements). Một bài cùng họ "chọn tập con theo sức chứa" là [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01). Luyện tập trong [Bài tập: phương pháp tham lam](#/courses/mat3504/lessons/mat3504-hw-greedy) (bài toán đổi tiền).

## Tự kiểm tra

**1. Mệnh giá $\{25,10,1\}$, $T=30$. Tham lam cho bao nhiêu đồng, tối ưu bao nhiêu?**

> **Đáp án**
> Tham lam: $25+5\times1$ là 6 đồng. Tối ưu: $3\times10$ là 3 đồng. Tham lam sai.

**2. Vì sao thuật toán trên phải kiểm tra `amount > 0` ở cuối?**

> **Đáp án**
> Nếu không có mệnh giá 1 (hoặc mệnh giá nhỏ nhất không chia hết phần dư) thì vòng lặp kết thúc mà vẫn còn tiền, nghĩa là không đổi được.

**3. Hệ $\{1,5,10,50\}$ vì sao tham lam đúng?**

> **Đáp án**
> Mỗi mệnh giá là bội của mệnh giá nhỏ hơn kế tiếp. Khi đó mọi phương án dùng từ hai đồng nhỏ để thay cho một đồng lớn hơn đều không ít đồng hơn, nên có nghiệm tối ưu chứa đồng lớn nhất còn vừa.
