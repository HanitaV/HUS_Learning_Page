# Khử đệ quy

## Vì sao cần

[Đệ quy](#/courses/mat3504/lessons/mat3504-recursion) cho code ngắn và trong sáng, nhưng mỗi lời gọi tạo ra một tập biến cục bộ mới để lưu giá trị trung gian, nên tốn bộ nhớ và khó hình dung khi chạy. **Khử đệ quy** là thay thuật toán đệ quy bằng thuật toán tương đương không có lời gọi đệ quy: dùng vòng lặp, và khi cần thì tự quản lý ngăn xếp dữ liệu ([Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt)) thay cho ngăn xếp lời gọi của máy. Mô phỏng bên dưới cho thấy các giá trị được cất và lấy ra khỏi ngăn xếp.

## Ý tưởng

Bài giảng chia thuật toán đệ quy thành các dạng chuẩn. Ký hiệu chung: $E(x)$ là điều kiện suy biến, $D(x)$ là lời giải trường hợp suy biến, $A(x)$ và $B(x)$ là thao tác làm trước và sau lời gọi đệ quy, $f(x)$ và $g(x)$ là hàm biến đổi tham số.

| Dạng | Lược đồ đệ quy | Cách khử |
|---|---|---|
| ED[AP] | `if E(x) D(x) else { A(x); P(f(x)); }` | Một vòng `while`, không cần ngăn xếp |
| ED[APB] | `if E(x) D(x) else { A(x); P(f(x)); B(x); }` | Hai vòng lặp và một ngăn xếp |
| ED[APBP] | `if E(x) D(x) else { A(x); P(f(x)); B(x); P(g(x)); }` | Ngăn xếp có cờ cho biết đang ở lời gọi thứ nhất hay thứ hai |

### Dạng ED[AP]: đệ quy đuôi

Lời gọi đệ quy là việc cuối cùng, không còn gì phải làm sau khi nó trả về, nên không cần nhớ gì:

```text
P(x)
    while not E(x) do
        A(x);
        x := f(x);
    endwhile;
    D(x);
End.
```

### Dạng ED[APB]

Sau lời gọi con phải thực hiện $B(x)$ với giá trị $x$ của lúc trước. Nếu $P$ kết thúc sau $k+1$ lần gọi thì $B$ phải chạy cho $f^k(x),f^{k-1}(x),\dots,x$, tức ngược thứ tự. Vì vậy cất mỗi $x$ vào ngăn xếp khi đi xuống, rồi lấy ra khi đi lên:

```text
P(x)
    Start(S);
    while not E(x) do
        A(x);
        Push(x, S);
        x := f(x);
    endwhile;
    D(x);
    while not Is_Empty(S) do
        Pick(S, x);
        B(x);
    endwhile;
End.
```

### Dạng ED[APBP]

Có hai lời gọi con nên mỗi phần tử ngăn xếp là cặp $(x, m)$ với $m\in\{1,2\}$: $m=2$ nghĩa là lời gọi thứ nhất đang chạy và khi quay lại còn phải làm $B(x)$ rồi đi tiếp bằng $x:=g(x)$. Phần tử đáy có $m=1$ làm cờ dừng.

## Ví dụ chạy tay

### ED[AP]: phân tích thừa số nguyên tố

Đệ quy: $d=2$; tăng $d$ tới khi $d\mid n$; in $d$; gọi lại với $n\ \mathrm{div}\ d$; dừng khi $n=1$. Ở đây $E(x)$ là $n=1$, $A(x)$ là việc tìm và in $d$, $f(n)=n\ \mathrm{div}\ d$. Khử thành một vòng `while`. Với $n=12$:

| $n$ | $d$ tìm được | In ra | $n$ mới |
|---|---|---|---|
| 12 | 2 | 2 | 6 |
| 6 | 2 | 2 | 3 |
| 3 | 3 | 3 | 1 |

Kết quả `2 2 3`, thứ tự tăng dần.

### ED[APB]: đổi thập phân sang nhị phân

Đệ quy `Int2Bin(n)`: nếu $n>0$ thì gọi `Int2Bin(n div 2)` rồi in $n\bmod 2$. Ở đây $E(x)$ là $n=0$, $f(n)=n\ \mathrm{div}\ 2$, $B(x)$ là in $n\bmod2$. Với $n=6$:

| Pha | $n$ | Thao tác | Ngăn xếp (đáy → đỉnh) |
|---|---|---|---|
| Xuống | 6 | push 0, $n=3$ | 0 |
| Xuống | 3 | push 1, $n=1$ | 0, 1 |
| Xuống | 1 | push 1, $n=0$ | 0, 1, 1 |
| Lên | 0 | dừng xuống | |
| Lên | | pop 1, in | 0, 1 |
| Lên | | pop 1, in | 0 |
| Lên | | pop 0, in | rỗng |

In `110`. Ngăn xếp đảo thứ tự các chữ số vừa tìm được, đúng như đệ quy in "sau khi gọi con".

## Cài đặt

Hai ví dụ trên bằng Java:

```java
static void phanTich(int n) {
    int d = 2;
    while (n > 1) {
        while (n % d != 0) {
            d++;
        }
        System.out.print(d + " ");
        n = n / d;
    }
}

static String int2Bin(int n) {
    Deque<Integer> stack = new ArrayDeque<>();
    while (n > 0) {
        stack.push(n % 2);
        n = n / 2;
    }
    StringBuilder sb = new StringBuilder();
    while (!stack.isEmpty()) {
        sb.append(stack.pop());
    }
    return sb.toString();
}
```

Ví dụ ED[APBP] là [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi) với $f(n,A,B,C)=(n-1,A,C,B)$ và $g(n,A,B,C)=(n-1,C,B,A)$. Mỗi khung cất $(n,A,B,C,m)$:

```java
static void hanoiIter(int n, char a, char b, char c) {
    Deque<int[]> stack = new ArrayDeque<>();
    stack.push(new int[]{n, a, b, c, 1});
    int m;
    do {
        while (n > 1) {
            stack.push(new int[]{n, a, b, c, 2});
            n--;
            char tmp = b; b = c; c = tmp;      // f: đổi B và C
        }
        System.out.println(a + " -> " + b);    // D: chuyển 1 đĩa
        int[] f = stack.pop();
        n = f[0]; a = (char) f[1]; b = (char) f[2]; c = (char) f[3]; m = f[4];
        if (m == 2) {
            System.out.println(a + " -> " + b); // B: chuyển đĩa lớn
            n--;
            char tmp = a; a = c; c = tmp;      // g: đổi A và C
        }
    } while (m != 1);
}
```

Chạy `hanoiIter(3, 'A', 'B', 'C')` in đúng 7 lần chuyển: A→B, A→C, B→C, A→B, C→A, C→B, A→B.

Tìm kiếm nhị phân ([Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search)) cũng ở dạng ED[AP]: cập nhật cận rồi gọi lại, nên khử thành vòng `while (l <= r)`.

## Độ phức tạp

Khử đệ quy không đổi số bước tính toán, chỉ đổi chỗ lưu trạng thái.

| | Đệ quy | Sau khi khử |
|---|---|---|
| ED[AP] | thời gian $T$, ngăn xếp $O(\text{độ sâu})$ | thời gian $T$, bộ nhớ phụ $O(1)$ |
| ED[APB], ED[APBP] | thời gian $T$, ngăn xếp lời gọi $O(\text{độ sâu})$ | thời gian $T$, ngăn xếp tự quản lý $O(\text{độ sâu})$ |

Lợi ích thực tế: tránh tràn ngăn xếp của máy (ngăn xếp tự quản nằm ở heap), và với dạng đuôi thì còn tiết kiệm hẳn bộ nhớ.

## Lỗi thường gặp

- Dùng một vòng lặp đơn cho dạng ED[APB] và quên mất phần $B(x)$ sau lời gọi, hoặc chạy $B$ theo thứ tự xuôi thay vì ngược.
- Cất giá trị $x$ vào ngăn xếp sau khi đã gán $x:=f(x)$, nên $B$ nhận nhầm giá trị.
- Ở ED[APBP] quên cất cờ $m$, nên không biết đang quay lại từ lời gọi thứ nhất hay thứ hai.
- Quên hoán đổi đúng cặp tham số khi áp dụng $f$ và $g$ (ví dụ đổi B và C cho $f$ nhưng A và C cho $g$).
- Cố đưa mọi hàm đệ quy về một vòng lặp mà không có ngăn xếp, trong khi dạng có việc làm sau lời gọi thì cần ngăn xếp.

## Luyện tập

- [Tháp Hà Nội](#/courses/mat3504/lessons/mat3504-tower-of-hanoi): ví dụ chuẩn của ED[APBP], đối chiếu bảng chuyển đĩa với đoạn mã trên.
- [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search): viết lại bản đệ quy thành vòng `while` theo ED[AP].
- [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal): duyệt cây theo thứ tự giữa bằng đệ quy rồi bằng ngăn xếp, cùng bản chất ED[APBP].
- Tự luyện: khử đệ quy hàm `static void printDown(int n) { if (n > 0) { System.out.print(n + " "); printDown(n - 1); } }`.

> **Đáp án**
> Đây là dạng ED[AP]: `while (n > 0) { System.out.print(n + " "); n--; }`. Không cần ngăn xếp vì việc làm xong trước khi gọi đệ quy.

## Tự kiểm tra

**Câu 1.** Khi nào khử đệ quy được bằng vòng lặp mà không cần ngăn xếp?

> **Đáp án**
> Khi sau lời gọi đệ quy không còn thao tác nào (dạng ED[AP], đệ quy đuôi), nên không phải nhớ gì khi quay lại.

**Câu 2.** Với `Int2Bin(13)`, ngăn xếp (đáy → đỉnh) khi kết thúc pha đi xuống và chuỗi in ra là gì?

> **Đáp án**
> Các số dư lần lượt $1,0,1,1$ (từ $13,6,3,1$), ngăn xếp đáy → đỉnh là 1, 0, 1, 1. Lấy ra từ đỉnh được `1101`.

**Câu 3.** Vì sao dạng ED[APBP] cần cờ $m$ trong mỗi phần tử ngăn xếp?

> **Đáp án**
> Vì hai lời gọi con khác nhau (với $f$ và $g$) cùng quay về một khung. Cờ cho biết lời gọi thứ nhất vừa xong (còn phải làm $B$ và gọi tiếp với $g$) hay khung đáy (dừng hẳn).
