# Phép toán trung gian, kết thúc và Collectors

## Vì sao cần

Để khai thác trọn vẹn Stream API ([Java Stream API: bản chất Lazy và Pipeline](#/courses/oop/lessons/oop-oop-stream-api-basics)), ta cần phân biệt rõ hai nhóm phép toán trong một đường ống (pipeline): các **phép toán trung gian** biến đổi luồng dữ liệu và các **phép toán kết thúc** thu thập kết quả về `List`, giá trị tổng hợp hoặc kiểm tra điều kiện.

## Ý tưởng

1. **Phép toán trung gian (Intermediate Operations)** — trả về một `Stream` mới, có tính chất *lazy*:
   - `filter(Predicate<T>)`: giữ lại phần tử thỏa mãn điều kiện.
   - `map(Function<T, R>)`: biến đổi từng phần tử sang giá trị/kiểu mới.
   - `sorted()` / `sorted(Comparator<T>)`: sắp xếp phần tử.
   - `flatMap(...)`: trải phẳng Stream lồng nhau (ví dụ `Stream<List<String>>` $\rightarrow$ `Stream<String>`).
   - `limit(n)`, `skip(n)`: phép cắt ngắn (*short-circuiting*).
2. **Phép toán kết thúc (Terminal Operations)** — kích hoạt pipeline và trả kết quả cuối cùng:
   - `collect(Collectors.toList())` (hoặc `toSet()`, `joining(...)`, `groupingBy(...)`): gom kết quả về Collection/String/Map.
   - `reduce(...)`: gộp các phần tử thành một giá trị (trả về `Optional` nếu không có giá trị khởi đầu).
   - `forEach(Consumer<T>)`, `count()`, `anyMatch`/`allMatch`/`noneMatch`, `findFirst()`.

## Cài đặt

```java
import java.util.*;
import java.util.stream.Collectors;

public class StreamOpsDemo {
    public static void main(String[] args) {
        List<String> names = List.of("An", "Bình", "Ánh", "Cường");

        List<String> result = names.stream()
                .filter(s -> s.length() >= 3)
                .map(String::toUpperCase)
                .sorted()
                .collect(Collectors.toList());
        System.out.println(result);   // [BÌNH, CƯỜNG, ÁNH]

        int totalLen = names.stream()
                .map(String::length)
                .reduce(0, Integer::sum);
        System.out.println(totalLen); // 14
    }
}
```

## Lỗi thường gặp

- Nhầm `map` với `flatMap`: nếu hàm ánh xạ trả về `List<T>` hoặc `Stream<T>`, dùng `map` sẽ tạo ra `Stream<List<T>>` lồng nhau, phải dùng `flatMap` để làm phẳng.
- Gây tác dụng phụ (sửa biến/collection bên ngoài) bên trong `filter` hoặc `map` thay vì dùng `collect` hoặc `reduce`.

## Tự kiểm tra

1. Trong chuỗi `list.stream().filter(...).map(...).count()`, những phép nào là phép trung gian và phép nào là phép kết thúc?

> **Đáp án**
> `filter(...)` và `map(...)` là **phép trung gian** (trả về `Stream`). `count()` là **phép kết thúc** (trả về `long`).
