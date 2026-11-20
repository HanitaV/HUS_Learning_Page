# Giao diện hàm chuẩn java.util.function và Optional

## Vì sao cần

Nếu mỗi lần cần truyền một điều kiện kiểm tra hay một phép biến đổi ta lại phải tự khai báo một interface mới (`CheckPerson`, `StringMapper`, `Printer`...), mã nguồn sẽ tràn ngập giao diện trùng lặp. Gói `java.util.function` cung cấp sẵn bộ **giao diện hàm chuẩn** dùng chung cho toàn bộ Java 8+ và Stream API.

## Ý tưởng

Bốn giao diện hàm chuẩn cốt lõi trong `java.util.function`:

| Giao diện | Phương thức trừu tượng | Ý nghĩa |
|---|---|---|
| `Predicate<T>` | `boolean test(T t)` | Kiểm tra điều kiện, trả về đúng/sai (dùng trong `filter`) |
| `Function<T, R>` | `R apply(T t)` | Ánh xạ/biến đổi đầu vào kiểu `T` thành đầu ra kiểu `R` (dùng trong `map`) |
| `Consumer<T>` | `void accept(T t)` | Tiêu thụ một giá trị `T` và không trả về kết quả (dùng trong `forEach`) |
| `Supplier<T>` | `T get()` | Không nhận tham số, sinh ra/cung cấp một giá trị kiểu `T` (dùng trong `generate`) |

Ngoài ra, **`java.util.Optional<T>`** là lớp hộp chứa giá trị có thể có hoặc không (rỗng), giúp tránh `NullPointerException` với các phương thức như `isPresent()`, `orElse(...)`, `ifPresent(...)`.

## Cài đặt

```java
import java.util.Optional;
import java.util.function.*;

public class StdFuncDemo {
    public static void main(String[] args) {
        Predicate<String> nonEmpty = s -> !s.isEmpty();
        Function<String, Integer> len = s -> s.length();
        Consumer<Integer> print = n -> System.out.println("Độ dài: " + n);
        Supplier<Double> rand = () -> Math.random();

        if (nonEmpty.test("HUS")) {
            print.accept(len.apply("HUS"));
        }

        Optional<String> opt = Optional.ofNullable(null);
        System.out.println(opt.orElse("Giá trị mặc định"));
    }
}
```

## Lỗi thường gặp

- Nhầm `Function<T, R>` với `Predicate<T>`: `Predicate` luôn trả về `boolean` nguyên thủy qua `test()`, còn `Function` trả về kiểu tổng quát `R` qua `apply()`.
- Gọi `opt.get()` trên `Optional` rỗng mà không kiểm tra `isPresent()` hoặc dùng `orElse()`: vẫn ném `NoSuchElementException`.

## Tự kiểm tra

1. Nếu muốn viết một lambda nhận vào một đối tượng `Student` và trả về tên `String` của sinh viên đó, nên dùng giao diện hàm chuẩn nào?

> **Đáp án**
> Dùng **`Function<Student, String>`**, với phương thức `apply(Student s)` trả về `String`.
