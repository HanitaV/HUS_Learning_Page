# Tháp Hà Nội

## Bài toán

Có ba cọc A, B, C. Ban đầu $n$ đĩa có kích thước khác nhau xếp ở cọc A, đĩa lớn ở dưới, đĩa nhỏ ở trên. Cần chuyển cả tháp từ A sang B, dùng C làm cọc trung gian, theo hai luật: mỗi lần chỉ chuyển một đĩa (đĩa trên cùng của một cọc), và không bao giờ đặt đĩa lớn lên đĩa nhỏ. Hãy theo dõi mô phỏng bên dưới: mỗi cọc hoạt động như một ngăn xếp ([Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt)).

Ví dụ: $n=2$ cần 3 lần chuyển: đĩa nhỏ A→C, đĩa lớn A→B, đĩa nhỏ C→B.

## Kiến thức sử dụng

- [Đệ quy](#/courses/mat3504/lessons/mat3504-recursion): lời giải dựa vào chính bài toán với $n-1$ đĩa; cần trường hợp suy biến.
- [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt): mỗi cọc là một ngăn xếp, đĩa trên cùng là phần tử được lấy ra trước.
- [Công thức truy hồi cho thời gian chạy](#/courses/mat3504/lessons/mat3504-recurrence-relation) và [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method): lập và giải công thức truy hồi cho số lần chuyển.
- [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination): Tháp Hà Nội là ví dụ chuẩn của dạng ED[APBP].

## Phân tích

Đĩa lớn nhất chỉ có thể rời cọc A khi mọi đĩa còn lại đã nằm gọn trên một cọc khác với A và đích. Vậy để chuyển $n$ đĩa từ A sang B:

1. Chuyển $n-1$ đĩa trên cùng từ A sang C (dùng B làm trung gian).
2. Chuyển đĩa lớn nhất từ A sang B.
3. Chuyển $n-1$ đĩa từ C sang B (dùng A làm trung gian).

Bước 1 và 3 là cùng bài toán với $n-1$ đĩa, chỉ khác vai trò ba cọc (nguồn, đích, trung gian được hoán đổi). Trường hợp suy biến: $n=1$ chuyển thẳng một đĩa (hoặc $n=0$ không làm gì).

## Lời giải từng bước

Chuyển $n=3$ đĩa từ A sang B qua C. Gọi đĩa 1 là nhỏ nhất, đĩa 3 là lớn nhất. Gọi `hanoi(3, A, C, B)` theo chữ ký `hanoi(n, from, via, to)` ở phần cài đặt:

| Lần | Chuyển | A | B | C |
|---|---|---|---|---|
| 0 | bắt đầu | 3 2 1 | | |
| 1 | đĩa 1: A → B | 3 2 | 1 | |
| 2 | đĩa 2: A → C | 3 | 1 | 2 |
| 3 | đĩa 1: B → C | 3 | | 2 1 |
| 4 | đĩa 3: A → B | | 3 | 2 1 |
| 5 | đĩa 1: C → A | 1 | 3 | 2 |
| 6 | đĩa 2: C → B | 1 | 3 2 | |
| 7 | đĩa 1: A → B | | 3 2 1 | |

(Mỗi ô liệt kê đĩa từ dưới lên trên.) Lần 1 đến 3 là chuyển 2 đĩa từ A sang C; lần 4 là đĩa lớn; lần 5 đến 7 là chuyển 2 đĩa từ C sang B.

## Cài đặt

```java
static void hanoi(int n, char from, char via, char to) {
    if (n == 0) return;
    hanoi(n - 1, from, to, via);
    System.out.println("Chuyển đĩa " + n + " từ " + from + " sang " + to);
    hanoi(n - 1, via, from, to);
}
```

Lời gọi đầu: `hanoi(3, 'A', 'C', 'B')`. Ở lời gọi thứ nhất, cọc đích và cọc trung gian đổi chỗ (`to, via`); ở lời gọi thứ hai, cọc nguồn và cọc trung gian đổi chỗ (`via, from`). Phiên bản mã giả trong bài giảng dùng trường hợp suy biến $n=1$ với `Move1Disk(A,B)` và có cùng cấu trúc.

Khi khử đệ quy theo dạng ED[APBP] (xem [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination)), mỗi khung được cất vào ngăn xếp cùng cờ cho biết đang ở lời gọi đệ quy thứ nhất hay thứ hai.

## Độ phức tạp

Gọi $T(n)$ là số lần chuyển đĩa:

$$T(1)=1,\qquad T(n)=2T(n-1)+1\ (n>1).$$

Thế lặp: $T(n)=2T(n-1)+1=2^2T(n-2)+2+1=\dots=2^{n-1}T(1)+2^{n-2}+\dots+2+1=2^n-1.$

| | Giá trị |
|---|---|
| Số lần chuyển | $2^n-1$ (là số lần tối thiểu) |
| Thời gian | $\Theta(2^n)$ |
| Bộ nhớ ngăn xếp lời gọi | $O(n)$ |

Với $n=64$ cần $2^{64}-1$ lần chuyển, vượt xa khả năng của mọi máy tính, nên không có cách nào "tối ưu hóa" để thoát khỏi hàm mũ: bản thân đầu ra đã dài $2^n-1$ dòng. Xem thêm phương pháp giải ở [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method).

## Mở rộng

- Khử đệ quy bằng ngăn xếp tự quản lý theo lược đồ ED[APBP], xem [Khử đệ quy](#/courses/mat3504/lessons/mat3504-recursion-elimination).
- Chứng minh $2^n-1$ là tối thiểu: đĩa lớn nhất phải chuyển ít nhất một lần, khi đó $n-1$ đĩa kia phải nằm trên một cọc, nên $T_{\min}(n)\ge 2T_{\min}(n-1)+1$.
- So sánh với [Số Fibonacci](#/courses/mat3504/lessons/mat3504-fibonacci): cả hai đều đệ quy hai nhánh, nhưng Hà Nội không có bài toán con trùng lặp nên không thể tiết kiệm bằng ghi nhớ.

## Tự kiểm tra

**Câu 1.** Với hai đĩa, cần bao nhiêu lần chuyển?

> **Đáp án**
> Ba: đĩa nhỏ sang cọc trung gian, đĩa lớn sang đích, rồi đĩa nhỏ sang đích. Khớp với $2^2-1=3$.

**Câu 2.** Với $n=4$ có bao nhiêu lần chuyển? Đĩa nhỏ nhất (đĩa 1) được chuyển bao nhiêu lần?

> **Đáp án**
> $2^4-1=15$ lần. Đĩa 1 được chuyển ở mọi lần chuyển lẻ nên $8$ lần ($2^{n-1}$).

**Câu 3.** Nếu viết nhầm lời gọi thứ hai thành `hanoi(n - 1, from, via, to)`, chuyện gì xảy ra?

> **Đáp án**
> $n-1$ đĩa được chuyển lần nữa từ cọc nguồn thay vì từ cọc trung gian, nhưng chúng đã không còn ở cọc nguồn. Dãy chuyển vi phạm luật (có thể lấy đĩa từ cọc không có đĩa lớn đúng chỗ) và đĩa lớn bị đè lên, kết quả sai.
