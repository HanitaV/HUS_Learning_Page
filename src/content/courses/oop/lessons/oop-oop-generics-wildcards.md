# Wildcards trong Generics và quy tắc PECS

## Vì sao cần

Dù `Integer` là lớp con của `Number`, trong Java **`List<Integer>` KHÔNG phải là kiểu con của `List<Number>`** (tính bất biến — invariance). Nếu viết hàm `double sum(List<Number> list)`, bạn không thể truyền `List<Integer>` vào! Ký tự đại diện **Wildcard (`?`)** giải quyết bài toán viết phương thức nhận nhiều họ kiểu tham số hóa khác nhau.

## Ý tưởng

Ba dạng Wildcard trong Java Generics:

1. **Unbounded Wildcard (`?`)**: `List<?>` — danh sách của một kiểu chưa biết. Dùng khi chỉ cần các thao tác của `Object` hoặc các hàm không phụ thuộc kiểu phần tử (`list.size()`, `clear()`).
2. **Upper Bounded Wildcard (`? extends T`)**: chấp nhận `T` hoặc bất kỳ **lớp con** nào của `T` (ví dụ `List<? extends Number>` nhận cả `List<Integer>`, `List<Double>`).
   - Dùng khi **đọc dữ liệu ra** (Producer). Không thể `add` phần tử mới vào (trừ `null`) vì trình biên dịch không biết danh sách thật chứa lớp con cụ thể nào.
3. **Lower Bounded Wildcard (`? super T`)**: chấp nhận `T` hoặc bất kỳ **lớp cha** nào của `T` (ví dụ `List<? super Integer>` nhận `List<Integer>`, `List<Number>`, `List<Object>`).
   - Dùng khi **ghi dữ liệu vào** (Consumer).

> Quy tắc nhớ nhanh **PECS**: **P**roducer `extends`, **C**onsumer `super`.

## Cài đặt

```java
import java.util.List;

public class WildcardDemo {
    // Producer: chỉ đọc các số ra để tính tổng -> ? extends Number
    public static double sum(List<? extends Number> list) {
        double s = 0.0;
        for (Number n : list) s += n.doubleValue();
        return s;
    }

    // Consumer: thêm các số nguyên vào danh sách đích -> ? super Integer
    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) list.add(i);
    }
}
```

## Lỗi thường gặp

- Cố gọi `list.add(10)` trên biến kiểu `List<? extends Number>`: lỗi biên dịch, vì `list` có thể thực chất là `List<Double>`!
- Truyền `List<Integer>` vào tham số `List<Number>`: lỗi biên dịch do Generics bất biến; phải sửa thành `List<? extends Number>`.

## Tự kiểm tra

1. Viết phương thức sao chép toàn bộ phần tử từ danh sách nguồn `src` sang danh sách đích `dest`: nên dùng `? extends T` và `? super T` cho tham số nào?

> **Đáp án**
> `src` là nguồn cung cấp (Producer) nên dùng `List<? extends T>`; `dest` là nơi nhận ghi vào (Consumer) nên dùng `List<? super T>`.
