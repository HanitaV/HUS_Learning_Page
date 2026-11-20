# Giảm để trị và biến đổi để trị

## Vì sao cần

[Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer) chia bài toán thành nhiều phần rồi giải hết các phần. Nhưng đôi khi không cần giải hết, hoặc không cần chia: chỉ cần làm bài toán **đơn giản hơn** rồi giải. Bài giảng gọi chung là chiến lược "đơn giản hóa và trị" (simplify and conquer), có ba cách đơn giản hóa: chia (divide), giảm (decrease), biến đổi (transform). Bài này nói về hai cách sau. Mô phỏng bên dưới cho thấy bài toán thu nhỏ dần qua từng bước.

## Ý tưởng

### Giảm để trị (decrease and conquer)

Dựa vào quan hệ giữa lời giải bài toán với lời giải của **một** bài toán nhỏ hơn cùng dạng. Có ba biến thể:

| Biến thể | Mỗi bước thu nhỏ | Ví dụ |
|---|---|---|
| Giảm một hằng số | $n\to n-1$ (hoặc $n-c$) | giai thừa, [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort), MinMax |
| Giảm theo một hệ số | $n\to n/2$ (hoặc $n/b$) | [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search), bài đồng xu giả, bài Josephus, lũy thừa $a^n$ |
| Giảm với kích thước thay đổi | mức giảm phụ thuộc dữ liệu | bài chọn phần tử thứ $k$, trò chơi Nim |

Khác với chia để trị: chỉ có một bài toán con được giải, nên thường không cần bước gộp.

### Biến đổi để trị (transform and conquer)

Gồm hai giai đoạn: **biến đổi** bài toán thành dạng dễ giải hơn, rồi **trị** bài toán đã biến đổi. Ba cách:

- **Đơn giản hóa** (simplification): biến thành một bài toán đơn giản hơn của cùng loại, ví dụ sắp xếp trước để kiểm tra phần tử trùng.
- **Đổi biểu diễn** (representation change): giữ nguyên bài toán, đổi cấu trúc dữ liệu, ví dụ biểu diễn dãy bằng đống ([Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap)).
- **Quy bài toán** (problem reduction): đưa về một bài toán khác đã có lời giải, ví dụ tính bội chung nhỏ nhất qua ước chung lớn nhất.

## Ví dụ chạy tay

### Giảm theo hệ số: lũy thừa $a^n$

Công thức: $a^n=(a^{n/2})^2$ khi $n$ chẵn, $a^n=(a^{(n-1)/2})^2\cdot a$ khi $n$ lẻ, $a^0=1$. Tính $3^{13}$:

| $n$ | Chẵn/lẻ | Thu về |
|---|---|---|
| 13 | lẻ | $(3^6)^2\cdot3$ |
| 6 | chẵn | $(3^3)^2$ |
| 3 | lẻ | $(3^1)^2\cdot3$ |
| 1 | lẻ | $(3^0)^2\cdot3$ |
| 0 | cơ sở | 1 |

Đi lên: $3^1=3$, $3^3=3^2\cdot3=27$, $3^6=27^2=729$, $3^{13}=729^2\cdot3=1\,594\,323$. Chỉ cần 4 lần bình phương thay vì 12 phép nhân.

### Giảm theo hệ số: đồng xu giả

Có $8$ đồng xu bề ngoài giống hệt, một đồng nhẹ hơn. Cân đĩa so sánh hai nhóm. Chia thành hai nhóm 4: nhóm nhẹ hơn chứa xu giả; chia nhóm đó thành 2 và 2, rồi 1 và 1: tối đa 3 lần cân. Tổng quát $\lceil\log_2 n\rceil$ lần. Chia thành ba nhóm còn tốt hơn, $\lceil\log_3 n\rceil$.

### Biến đổi: kiểm tra phần tử trùng

Bài toán: mảng $a$ có hai phần tử bằng nhau không. Cách trực tiếp so từng cặp tốn $O(n^2)$. Biến đổi: sắp xếp trước, khi đó phần tử trùng đứng kề nhau. Với $(7,3,9,3,5)$: sau sắp xếp $(3,3,5,7,9)$, so sánh cặp kề thấy $3=3$.

## Cài đặt

```java
// Giảm theo hệ số 2: lũy thừa nhanh
static long power(long a, int n) {
    if (n == 0) return 1;
    long half = power(a, n / 2);
    return (n % 2 == 0) ? half * half : half * half * a;
}

// Biến đổi để trị: sắp xếp rồi kiểm tra cặp kề
static boolean hasDuplicate(int[] a) {
    int[] b = a.clone();
    java.util.Arrays.sort(b);                // giai đoạn biến đổi
    for (int i = 1; i < b.length; i++) {     // giai đoạn trị
        if (b[i] == b[i - 1]) {
            return true;
        }
    }
    return false;
}
```

## Độ phức tạp

| Kỹ thuật | Công thức | Kết quả |
|---|---|---|
| Giảm một hằng số (giai thừa, chèn) | $T(n)=T(n-1)+f(n)$ | thường $O(n)$ hoặc $O(n^2)$ |
| Giảm theo hệ số 2 (nhị phân, lũy thừa) | $T(n)=T(n/2)+1$ | $O(\log n)$ |
| Biến đổi: sắp xếp rồi quét | $O(n\log n)+O(n)$ | $O(n\log n)$ |

Với phần biến đổi, chi phí tổng là chi phí biến đổi cộng chi phí trị; sắp xếp trội hơn nên quyết định kết quả. Giải truy hồi theo [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) hoặc [Giải truy hồi bằng phương pháp thế](#/courses/mat3504/lessons/mat3504-substitution-method).

## Lỗi thường gặp

- Nhầm giảm để trị với chia để trị: trong giảm để trị chỉ một bài toán con được giải; tìm nhị phân là giảm theo hệ số 2 chứ không có hai nhánh đệ quy.
- Quên tính chi phí biến đổi trong tổng: sắp xếp trước tốn $O(n\log n)$, không "miễn phí".
- Ở lũy thừa nhanh, gọi `power` hai lần cho `n/2` thay vì lưu vào biến, làm thời gian trở lại $O(n)$.
- Biến đổi làm mất thông tin cần thiết, ví dụ sắp xếp rồi mất chỉ số gốc khi bài toán hỏi vị trí.
- Áp dụng "sắp xếp trước" khi dữ liệu chỉ cần xử lý một lần; khi đó quét thẳng $O(n)$ có thể rẻ hơn.

## So sánh / liên hệ

[Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search) vừa là ví dụ của chia để trị trong bài giảng, vừa là giảm theo hệ số 2 vì chỉ đi tiếp một nửa. Cách hai con trỏ trong [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs) là biến đổi để trị điển hình: sắp xếp trước rồi quét hai đầu. Cấu trúc [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) là đổi biểu diễn: mảng được tổ chức lại để lấy phần tử nhỏ nhất nhanh.

## Luyện tập

- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): đếm cặp $a_i+a_j=x$; thử biến đổi bằng sắp xếp rồi hai con trỏ so với duyệt mọi cặp.
- [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search): viết lại theo hệ số giảm 2 và chạy tay trên dãy 8 phần tử.
- [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort): giảm một hằng số, giả sử $n-1$ phần tử đầu đã sắp.
- Tự luyện: bài tập 2 của lớp yêu cầu tự đặt đề cho một kỹ thuật "đơn giản hóa và trị"; hãy thử với bài đồng xu giả.

::: Gợi ý
Cài đặt hàm trả về số lần cân tối đa cho $n$ đồng: `weighings(n) = n <= 1 ? 0 : 1 + weighings((n + 1) / 2)` với cách chia đôi (nhóm lớn nhất có $\lceil n/2\rceil$ đồng); chạy với $n=8$ được 3, $n=9$ được 4.
:::

## Tự kiểm tra

**Câu 1.** Phân loại: tính $n!$ bằng $n\cdot(n-1)!$; tìm nhị phân; kiểm tra trùng bằng cách sắp xếp trước.

> **Đáp án**
> Giai thừa: giảm một hằng số. Tìm nhị phân: giảm theo hệ số 2. Kiểm tra trùng bằng sắp xếp: biến đổi để trị (đơn giản hóa).

**Câu 2.** Vì sao lũy thừa nhanh chạy trong $O(\log n)$?

> **Đáp án**
> Mỗi lời gọi chỉ gọi một lần với $n/2$ và dùng $O(1)$ phép nhân: $T(n)=T(n/2)+1$ cho $O(\log n)$.

**Câu 3.** Khi nào biến đổi bằng sắp xếp không đáng?

> **Đáp án**
> Khi bài toán gốc đã giải được trong $O(n)$ (như tìm giá trị lớn nhất), vì sắp xếp tốn $O(n\log n)$ và làm chậm đi.
