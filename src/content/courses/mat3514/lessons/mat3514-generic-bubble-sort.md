# Sắp xếp tổng quát với <T extends Comparable<? super T>>

## Bài toán

Cài đặt sắp xếp nổi bọt cho mảng đối tượng thuộc *mọi* kiểu so sánh được, thay vì chỉ `int[]`. Đầu vào là mảng `T[] a`; đầu ra là cùng mảng được sắp tăng dần theo `compareTo`. Ràng buộc kiểu phải cho phép cả trường hợp lớp cha cài `Comparable`: nếu `Animal implements Comparable<Animal>` và `Dog extends Animal`, ta vẫn phải sắp được `Dog[]`.

Ví dụ: sắp `Fraction[] {2/3, 4/5, 1/6}` cho `{1/6, 2/3, 4/5}`.

## Kiến thức sử dụng

- [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort): thân thuật toán hai vòng lặp, chỉ khác phép so sánh.
- [Lập trình tổng quát (Generics)](#/courses/mat3514/lessons/mat3514-java-generics): khai báo phương thức tổng quát `<T ...>` và cận kiểu.
- [Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface): giao diện `Comparable<T>` với `compareTo` làm thứ tự tự nhiên.

## Phân tích

Với `int`, ta so sánh bằng `a[j] > a[j+1]`. Với đối tượng, toán tử `>` không dùng được; ta cần một cách chuẩn để hỏi "bên nào nhỏ hơn". Java cung cấp `compareTo`: `x.compareTo(y)` âm, bằng 0, dương khi $x < y$, $x = y$, $x > y$. Do đó kiểu phần tử phải có phương thức này, và ta nói điều đó bằng cận kiểu.

**Phiên bản thứ nhất** `<T extends Comparable<T>>` đòi hỏi chính `T` so sánh được với `T`. Với `Dog extends Animal` mà chỉ `Animal` cài `Comparable<Animal>`, thì `Dog` là `Comparable<Animal>` chứ không phải `Comparable<Dog>`, nên không thỏa cận và trình biên dịch từ chối `bubbleSort(Dog[])`.

**Phiên bản cải tiến** `<T extends Comparable<? super T>>` nói rằng `T` chỉ cần so sánh được với *một kiểu cha nào đó của `T`*. `Dog` so sánh được với `Animal`, mà `Animal` là cha của `Dog`, nên thỏa. Phép so sánh `a[j+1].compareTo(a[j])` vẫn hợp lệ vì `a[j]` (kiểu `Dog`) là một `Animal`.

## Lời giải từng bước

Ví dụ với `Fraction[] {2/3, 4/5, 1/6}` (so sánh theo giá trị thực):

| Lượt | So sánh | Mảng sau |
|---|---|---|
| 0 | (2/3, 4/5) giữ; (4/5, 1/6) đổi | 2/3 1/6 4/5 |
| 1 | (2/3, 1/6) đổi | 1/6 2/3 4/5 |

Điều kiện đổi chỗ là `a[j + 1].compareTo(a[j]) < 0`, tức phần tử sau nhỏ hơn phần tử trước.

## Cài đặt

```java
import java.util.Arrays;

public class Sort {
    public static <T extends Comparable<? super T>> void bubbleSort(T[] a) {
        for (int i = 0; i < a.length - 1; i++) {
            for (int j = 0; j < a.length - 1 - i; j++) {
                if (a[j + 1].compareTo(a[j]) < 0) {
                    T tmp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = tmp;
                }
            }
        }
    }

    static class Animal implements Comparable<Animal> {
        final double weight;
        Animal(double weight) { this.weight = weight; }
        public int compareTo(Animal o) { return Double.compare(weight, o.weight); }
        public String toString() { return getClass().getSimpleName() + "(" + weight + ")"; }
    }
    static class Dog extends Animal { Dog(double w) { super(w); } }

    public static void main(String[] args) {
        Dog[] dogs = { new Dog(12.5), new Dog(7), new Dog(20) };
        bubbleSort(dogs);                     // chỉ biên dịch được nhờ ? super T
        System.out.println(Arrays.toString(dogs));
    }
}
```

- Thuật toán giữ nguyên như bản `int`; chỉ thay `>` bằng `compareTo`.
- `Double.compare` an toàn hơn phép trừ vì không tràn số và xử lý đúng `NaN`.
- Tham số kiểu là mảng đối tượng, không dùng được với `int[]` (kiểu nguyên thủy không phải `Comparable`); khi đó dùng `Integer[]`.

## Độ phức tạp

Giống [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort): $O(n^2)$ phép gọi `compareTo`, bộ nhớ phụ $O(1)$. Bản trong slide không dừng sớm nên ngay cả mảng đã sắp vẫn $O(n^2)$; thêm cờ `swapped` như ở [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) thì tốt nhất $O(n)$. Thêm chi phí của mỗi lần `compareTo`, phụ thuộc kiểu. Tính ổn định giữ nguyên nhờ dùng phép so sánh chặt `< 0` ([Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties)).

## Mở rộng

- Thay `Comparable` bằng bộ so sánh ngoài `Comparator<? super T>` để sắp theo nhiều tiêu chí: `bubbleSort(T[] a, Comparator<? super T> c)`; đây là yêu cầu Bài tập 3b của [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark).
- Áp dụng kỹ thuật tương tự cho các thuật toán khác (chọn, chèn, trộn, nhanh): Bài tập 2 của [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark) yêu cầu đúng việc này.

## Tự kiểm tra

1. Vì sao `bubbleSort(Dog[])` không biên dịch với `<T extends Comparable<T>>` nếu chỉ `Animal` cài `Comparable<Animal>`?

> **Đáp án**
> Cận đòi `Dog extends Comparable<Dog>`, nhưng `Dog` chỉ là `Comparable<Animal>`. `Comparable<Animal>` không phải kiểu con của `Comparable<Dog>` (generics bất biến).

2. Có thể dùng `<T extends Comparable<? super T>>` để sắp `int[]` không?

> **Đáp án**
> Không: `int` là kiểu nguyên thủy, không thể làm tham số kiểu. Phải dùng `Integer[]` (tự đóng gói) hoặc viết riêng bản `int[]`.

3. Nếu `compareTo` của `Animal` trả về `weight - o.weight` ép sang `int`, lỗi nào có thể xảy ra?

> **Đáp án**
> Hiệu hai số thực nhỏ (ví dụ 0.5) ép về `int` thành 0, nên coi hai con khác cân nặng là bằng nhau; còn với số nguyên lớn, phép trừ có thể tràn. Dùng `Double.compare` hoặc `Integer.compare`.
