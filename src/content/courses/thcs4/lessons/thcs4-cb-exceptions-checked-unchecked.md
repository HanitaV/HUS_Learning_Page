# Ngoại lệ: Checked và Unchecked

## Vì sao cần

Khi chương trình chạy có thể gặp sự cố ngoài mong đợi: chia cho `0`, truy cập chỉ số mảng vượt biên, đọc tệp không tồn tại. Cơ chế ngoại lệ giúp phát hiện và báo lỗi có kiểm soát thay vì để chương trình sập đột ngột.

## Ý tưởng

Ngoại lệ (`Exception`) là đối tượng biểu diễn sự kiện lỗi xảy ra khi thực thi; khi ngoại lệ ném ra, phương thức hiện tại dừng ngay và chuyển điều khiển cho bộ xử lý. Java chia ngoại lệ thành hai nhóm chính:

- **Checked Exception** (kiểm tra lúc biên dịch): trình biên dịch **bắt buộc** bạn phải xử lý (`try-catch`) hoặc khai báo `throws`, nếu không chương trình không biên dịch được. Ví dụ: `IOException`, `FileNotFoundException`.
- **Unchecked Exception** (ngoại lệ lúc chạy — kế thừa `RuntimeException`): không bắt buộc xử lý lúc biên dịch, thường do lỗi logic lập trình. Ví dụ: `NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`, `NumberFormatException`, `InputMismatchException`.

Bạn cũng có thể tự định nghĩa lớp ngoại lệ riêng bằng cách kế thừa từ `Exception`: `public class MyException extends Exception { ... }`.

## Cài đặt

```java
import java.io.FileReader;
import java.io.FileNotFoundException;

public class ExceptionTypesDemo {
    public static void main(String[] args) {
        // Unchecked: biên dịch được nhưng lỗi khi chạy nếu str == null
        String str = null;
        // System.out.println(str.length()); // NullPointerException

        // Checked: bắt buộc xử lý FileNotFoundException
        try {
            FileReader reader = new FileReader("data.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Khong tim thay tep: " + e.getMessage());
        }
    }
}
```

## Lỗi thường gặp

- Viết `new FileReader("data.txt")` mà không bọc `try-catch` hoặc khai báo `throws`, khiến trình biên dịch báo *Unhandled exception type FileNotFoundException*.
- Gọi phương thức trên biến tham chiếu đang mang giá trị `null` gây `NullPointerException`.

## Tự kiểm tra

1. Trong hai ngoại lệ `ArrayIndexOutOfBoundsException` và `IOException`, ngoại lệ nào là Checked Exception và ngoại lệ nào là Unchecked Exception?

> **Đáp án**
> `IOException` là **Checked Exception** (bắt buộc xử lý hoặc `throws` khi biên dịch); `ArrayIndexOutOfBoundsException` kế thừa `RuntimeException` nên là **Unchecked Exception**.
