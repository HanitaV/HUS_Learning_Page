# Thư viện chuẩn Java, Wrapper và Autoboxing

## Vì sao cần

Khi lập trình Java, ta thường xuyên làm việc với thư viện chuẩn (Java API) như `Scanner`, `String`, `Math`, cũng như cần đưa các giá trị nguyên thủy (`int`, `double`) vào các cấu trúc chỉ nhận đối tượng (như `ArrayList`). Lớp bọc (Wrapper classes) và cơ chế tự động đóng/mở hộp (autoboxing/unboxing) giúp cầu nối hai thế giới này gọn gàng hơn.

## Ý tưởng

- **Java API**: các lớp dịch vụ có sẵn trong `java.lang` (tự động import như `String`, `Math`) hoặc `java.util` (`Scanner`, `Random`).
- **`toString()`**: mọi lớp đều kế thừa `toString()` từ `Object` (xem [Lớp gốc Object và hợp đồng equals/hashCode](#/courses/oop/lessons/oop-oop-object-class-contract)); ghi đè `toString()` giúp in đối tượng ra chuỗi dễ đọc thay vì chuỗi địa chỉ băm mặc định.
- **Lớp bọc (Wrapper classes)**: mỗi kiểu nguyên thủy có một lớp đối tượng tương ứng: `Integer`, `Double`, `Boolean`, `Character`, `Long`, ...
- **Autoboxing / Unboxing**: Java tự động chuyển đổi qua lại giữa kiểu nguyên thủy và lớp bọc tương ứng (ví dụ `int` $\leftrightarrow$ `Integer`).

## Cài đặt

```java
import java.util.Scanner;

public class WrapperDemo {
    public static void main(String[] args) {
        Integer boxed = 42;            // autoboxing: int -> Integer
        int unboxed = boxed + 8;       // unboxing: Integer -> int

        String a = new String("HUS");
        String b = new String("HUS");
        System.out.println(a == b);        // false (khác tham chiếu)
        System.out.println(a.equals(b));   // true (cùng nội dung)
    }
}
```

## Lỗi thường gặp

- Dùng `==` để so sánh hai chuỗi `String` hoặc hai đối tượng `Integer` lớn (ngoài khoảng cache $[-128, 127]$): cho kết quả `false` dù giá trị bằng nhau. Luôn dùng `.equals()`.
- Mở hộp (unboxing) một biến `Integer` đang mang giá trị `null`: ném ra `NullPointerException` lúc chạy.

## Tự kiểm tra

1. Đoạn mã `Double d = null; double x = d;` có biên dịch được không, và điều gì xảy ra khi chạy?

> **Đáp án**
> Biên dịch **được** (vì Java tự chèn bước unboxing `d.doubleValue()`), nhưng khi chạy sẽ ném ra **`NullPointerException`** vì `d` là `null`.
