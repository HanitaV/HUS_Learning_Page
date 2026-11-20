# Liệt kê dãy nhị phân độ dài n

## Bài toán

Liệt kê mọi dãy nhị phân $x_1x_2\dots x_n$ với $x_i\in\{0,1\}$. Đầu vào: số nguyên dương $n$. Đầu ra: $2^n$ dãy. Ví dụ $n=3$ cho `000, 001, 010, 011, 100, 101, 110, 111`. Mô phỏng bên dưới vẽ cây quay lui và thứ tự các lá được in.

## Kiến thức sử dụng

- [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking): khung `Try(i)`, gán $x_i$ từng giá trị rồi gọi `Try(i+1)`, in khi $i=n$.
- [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): mỗi lời gọi lo một thành phần, độ sâu đệ quy bằng $n$.
- [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force): số cấu hình là $2^n$ nên đây là vét cạn viết bằng đệ quy thay cho $n$ vòng `for` lồng nhau.

## Phân tích

Nếu viết vét cạn thẳng, ta cần $n$ vòng `for` lồng nhau, và $n$ biến thiên nên không viết được. Đệ quy giải quyết: một lời gọi `Try(i)` thay cho vòng lặp thứ $i$. Không có ràng buộc giữa các thành phần, nên điều kiện chấp nhận luôn đúng và không có gì để khôi phục. Mỗi lời giải đầy đủ ứng với một lá của cây nhị phân đầy đủ độ cao $n$.

Mẫu của slide: với mỗi giá trị $v\in\{0,1\}$ gán $x_i=v$; nếu $i=n$ in kết quả, ngược lại gọi `Try(i+1)`. Lời gọi đầu tiên là `Try(1)`.

## Lời giải từng bước

$n=3$. Cột "ngăn xếp" là các giá trị đã gán khi vào mỗi lời gọi.

| Bước | Lời gọi | $x_i$ gán | Hành động |
|---|---|---|---|
| 1 | `Try(1)` | 0 | gọi `Try(2)` |
| 2 | `Try(2)` | 0 | gọi `Try(3)` |
| 3 | `Try(3)` | 0 | $i=n$, in `000` |
| 4 | `Try(3)` | 1 | in `001` |
| 5 | `Try(2)` | 1 | gọi `Try(3)` |
| 6 | `Try(3)` | 0 | in `010` |
| 7 | `Try(3)` | 1 | in `011` |
| 8 | `Try(1)` | 1 | gọi `Try(2)`, tiếp tục tương tự: `100`, `101`, `110`, `111` |

Kết quả theo thứ tự tăng dần của giá trị nhị phân, vì mỗi độ sâu thử 0 trước 1.

## Cài đặt

```java
static int n;
static int[] x;

static void tryAt(int i) {
    for (int v = 0; v <= 1; v++) {
        x[i] = v;
        if (i == n - 1) {
            print();
        } else {
            tryAt(i + 1);
        }
    }
}

static void print() {
    StringBuilder sb = new StringBuilder();
    for (int b : x) sb.append(b);
    System.out.println(sb);
}

public static void main(String[] args) {
    n = 3;
    x = new int[n];
    tryAt(0);          // chỉ số bắt đầu từ 0 trong Java
}
```

Ghi chú: mảng đánh chỉ số từ 0 nên điều kiện dừng là `i == n - 1`; slide dùng chỉ số từ 1 với `i = n`. Không cần khôi phục, vì giá trị $x_i$ sẽ bị ghi đè ở vòng sau.

## Độ phức tạp

| Đại lượng | Giá trị |
|---|---|
| Số lá (nghiệm) | $2^n$ |
| Số nút của cây | $2^{n+1}-1$ |
| Thời gian | $O(n\cdot 2^n)$ nếu tính cả chi phí in mỗi dãy |
| Bộ nhớ | $O(n)$ (độ sâu đệ quy và mảng $x$) |

Không thể nhanh hơn $2^n$ vì đầu ra đã dài $n2^n$ ký tự. Tốc độ tăng này là minh họa tốt cho giới hạn của [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force); xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o).

## Mở rộng

- Thêm ràng buộc "không có hai số 1 liền nhau": chỉ chấp nhận $v=1$ khi $x_{i-1}=0$. Cây bị cắt và số dãy giảm xuống bằng số Fibonacci (xem [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci)).
- Chỉ liệt kê dãy có đúng $k$ số 1: tương ứng liệt kê tổ hợp chập $k$, bài tập trong [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error).
- Dùng dãy nhị phân biểu diễn tập con của $n$ phần tử (bit 1 là có chọn). Ý này dẫn tới bài toán [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01).

## Tự kiểm tra

1. Có bao nhiêu lời gọi `tryAt` được thực hiện với $n=3$?

> **Đáp án**
> Lời gọi `tryAt(0)` là 1; độ sâu 1 có 2 lời gọi; độ sâu 2 có 4 lời gọi. Tổng $1+2+4=7=2^n-1$ lời gọi (mỗi lời gọi lại lặp 2 giá trị, nên có 14 phép gán $x_i$, trong đó 8 phép ở lá in ra 8 dãy).

2. Sửa chương trình để không in hai số 1 liền nhau. Với $n=3$ in những dãy nào?

> **Đáp án**
> Chỉ chạy nhánh $v=1$ khi `i == 0 || x[i-1] == 0`. Các dãy: `000, 001, 010, 100, 101` (5 dãy, đúng Fibonacci).

3. Nếu in theo thứ tự thử 1 trước 0 thì dãy đầu tiên là gì?

> **Đáp án**
> `111`, và thứ tự là giảm dần của giá trị nhị phân.
