# Giao diện Comparable<T>

## Vì sao cần

Lớp tiện ích `java.util.Arrays` có `sort`, `binarySearch`, `fill`, `equals`. Với kiểu nguyên thủy, thứ tự tự nhiên đã rõ. Nhưng với một mảng đối tượng tự định nghĩa, ví dụ phân số, hàm `sort` làm sao biết cái nào đứng trước? Java giải quyết bằng giao diện `Comparable<T>` (xem [Lớp trừu tượng và giao diện (Java)](#/courses/mat3514/lessons/mat3514-java-interface-abstract)): lớp tự khai báo cách so sánh hai đối tượng của mình. Nhờ vậy một thuật toán sắp xếp viết một lần chạy được cho mọi kiểu, như ở [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort).

## Định nghĩa

Để sắp xếp được, các đối tượng trong mảng phải **so sánh được với nhau**. Giao diện chỉ có một phương thức:

```java
public interface Comparable<T> {
    int compareTo(T obj);
}
```

Với `a.compareTo(b)`, đối tượng gọi là `a`, đối số là `b`:

| Kết quả | Ý nghĩa |
|---|---|
| số âm | `a` đứng trước `b` |
| 0 | `a` và `b` bằng nhau theo thứ tự này |
| số dương | `b` đứng trước `a` |

Chỉ **dấu** của kết quả có nghĩa. Không được giả định kết quả đúng bằng -1 hay 1.

## Ví dụ: so sánh phân số

Slide cài `Comparable<Fraction>` bằng cách đổi sang số thực. Lưu ý ép kiểu `(double)` để phép chia không bị cắt thành số nguyên:

```java
public class Fraction implements Comparable<Fraction> {
    private int n;
    private int d;

    public Fraction(int n, int d) { this.n = n; this.d = d; }

    public int compareTo(Fraction f) {
        double d1 = (double) n / d;
        double d2 = (double) f.n / f.d;
        if (d1 == d2) return 0;
        else if (d1 < d2) return -1;
        return 1;
    }

    public String toString() { return n + "/" + d; }
}
```

Sử dụng với `Arrays.sort`:

```java
Fraction[] array = { new Fraction(2, 3), new Fraction(4, 5), new Fraction(1, 6) };
Arrays.sort(array);
for (Fraction f : array) System.out.println(f);
```

## Ví dụ chạy tay

Giá trị: `2/3 = 0.667`, `4/5 = 0.8`, `1/6 = 0.167`. Thuật toán sắp xếp chỉ hỏi `compareTo`:

| So sánh | Kết quả | Kết luận |
|---|---|---|
| `new Fraction(2,3).compareTo(new Fraction(4,5))` | -1 | 2/3 đứng trước 4/5 |
| `new Fraction(4,5).compareTo(new Fraction(1,6))` | 1 | 1/6 đứng trước 4/5 |
| `new Fraction(2,3).compareTo(new Fraction(2,3))` | 0 | bằng nhau |

Kết quả in ra: `1/6`, `2/3`, `4/5`.

Cách khác không dùng số thực, tránh sai số: so sánh tích chéo khi mẫu dương, `Integer.compare(n * f.d, f.n * d)`. Cách này chính xác nếu không tràn số.

## Cài đặt trong thuật toán tổng quát

Phương thức nhận mảng kiểu bất kỳ thỏa `Comparable`:

```java
public static <T extends Comparable<T>> void bubbleSort(T[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        for (int j = 0; j < a.length - 1 - i; j++) {
            if (a[j].compareTo(a[j + 1]) > 0) {
                T tmp = a[j]; a[j] = a[j + 1]; a[j + 1] = tmp;
            }
        }
    }
}
```

Ở đây `T extends Comparable<T>` dùng generics ([Lập trình tổng quát (Generics)](#/courses/mat3514/lessons/mat3514-java-generics)) để nói rằng `T` bắt buộc có `compareTo`. Phiên bản đầy đủ hơn nằm ở [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort). Cấu trúc như [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt) cũng dựa vào thứ tự tự nhiên này để biết phần tử nào "nhỏ nhất".

## Quy ước nhất quán

Một `compareTo` đúng nên thỏa:

- Phản xứng: dấu của `a.compareTo(b)` ngược với `b.compareTo(a)`.
- Bắc cầu: `a < b` và `b < c` thì `a < c`.
- Nên nhất quán với `equals`: `a.compareTo(b) == 0` khi và chỉ khi `a.equals(b)`. Không bắt buộc, nhưng vi phạm sẽ gây bất ngờ với các tập hợp có thứ tự.

## Lỗi thường gặp

- So sánh kết quả với đúng 1 hoặc -1 (`== 1`): sai với lớp trả về số lớn hơn, ví dụ `String.compareTo`. Hãy so sánh `> 0`, `< 0`, `== 0`.
- Thiếu `(double)` khi chia phân số: `n / d` là chia nguyên, `1/6` và `1/5` đều thành 0 và bị coi là bằng nhau.
- Trả hiệu `a - b` cho số nguyên: có thể tràn số khi giá trị rất lớn hoặc rất nhỏ. Dùng `Integer.compare`.
- Quên `implements Comparable<Fraction>` nhưng vẫn viết `compareTo`: `Arrays.sort` ném `ClassCastException` lúc chạy.
- Dùng `==` để so sánh hai `Double` bọc hoặc hai chuỗi thay vì `compareTo` hoặc `equals`.

## Luyện tập

- [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort): viết sắp xếp tổng quát dùng `compareTo`; luyện chữ ký `<T extends Comparable<? super T>>`.
- [Bài tập: Fraction, SimpleArrayList, SimpleLinkedList](#/courses/mat3514/lessons/mat3514-hw-list): cài lớp `Fraction` có thể so sánh rồi cho vào danh sách tự cài.
- [Bài tập: cài đặt hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-hw-priority-queue): hàng đợi ưu tiên cần thứ tự của phần tử.
- Tự luyện: viết lớp `Student` có `name` và `score`, `compareTo` sắp theo điểm giảm dần, bằng điểm thì theo tên tăng dần.

::: Gợi ý tự luyện
Trong `compareTo`, so điểm trước: `int c = Integer.compare(o.score, score);` (đảo vế để giảm dần). Nếu `c != 0` trả `c`, ngược lại trả `name.compareTo(o.name)`.
:::

## Tự kiểm tra

1. Nếu `a.compareTo(b)` trả về 7 thì `a` đứng trước hay sau `b` theo thứ tự tăng?

> **Đáp án**
> Sau `b`, vì kết quả dương nghĩa là `b` đứng trước `a`.

2. Vì sao `Arrays.sort` trên `Fraction[]` cần `Fraction implements Comparable<Fraction>`?

> **Đáp án**
> Vì `sort` phải biết cách so sánh hai phần tử. Hợp đồng đó chính là `compareTo`; lớp không cài thì không có quy tắc để sắp.

3. Với `compareTo` của `Fraction` bên trên, `1/2.compareTo(2/4)` trả về gì và điều đó có nghĩa gì?

> **Đáp án**
> Trả về 0 vì `0.5 == 0.5`. Hai phân số khác biểu diễn nhưng cùng giá trị, nên bằng nhau theo thứ tự này; `equals` mặc định lại có thể cho `false`, tức là không nhất quán với `equals`.
