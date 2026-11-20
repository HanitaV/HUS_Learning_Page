# Xử lý ngoại lệ với try-catch-finally, throw và throws

## Vì sao cần

Biết phân loại ngoại lệ chưa đủ; bạn cần cấu trúc để bắt và phục hồi khi lỗi xảy ra, đảm bảo đóng tài nguyên an toàn, hoặc chủ động phát ra ngoại lệ cho tầng gọi phía trên xử lý.

## Ý tưởng

- **`try - catch`**: đặt mã có khả năng sinh lỗi trong `try` và xử lý trong `catch`. Có thể dùng nhiều khối `catch`, nhưng **phải sắp xếp từ ngoại lệ cụ thể đến tổng quát** (ví dụ `ArithmeticException` trước `Exception`), vì tại một thời điểm chỉ một khối `catch` khớp đầu tiên được chạy.
- **`finally`**: đặt sau `try` hoặc `catch`, **luôn được thực thi** dù có ngoại lệ hay không (kể cả khi gặp `return` trong `try`), thường dùng để đóng luồng/kết nối.
- **`throw`**: dùng bên trong phương thức để ném ra một đối tượng ngoại lệ cụ thể (ví dụ `throw new ArithmeticException("not valid");`).
- **`throws`**: đặt ở chữ ký phương thức để cảnh báo nơi gọi rằng phương thức có thể ném ngoại lệ ra ngoài; nơi gọi phải bắt hoặc tiếp tục `throws`.

## Cài đặt

```java
public class ExceptionHandlingDemo {
    public static int quotient(int numerator, int denominator) throws ArithmeticException {
        if (denominator == 0) {
            throw new ArithmeticException("So chia phai khac 0");
        }
        return numerator / denominator;
    }

    public static void main(String[] args) {
        try {
            System.out.println(quotient(50, 0));
        } catch (ArithmeticException e) {
            System.out.println("Loi tinh toan: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Loi khac: " + e.getMessage());
        } finally {
            System.out.println("Khoi finally luon chay");
        }
    }
}
```

## Lỗi thường gặp

- Đặt `catch (Exception e)` lên trước `catch (ArithmeticException e)`: gây lỗi biên dịch vì nhánh cụ thể phía sau không bao giờ tới được.
- Nhầm lẫn giữa `throw` (ném một đối tượng ngoại lệ trong thân hàm) và `throws` (khai báo kiểu ngoại lệ ở đầu hàm).

## Tự kiểm tra

1. Nếu trong khối `try` không có ngoại lệ nào xảy ra, khối `finally` phía sau có được thực thi không?

> **Đáp án**
> **Có.** Khối `finally` luôn được thực thi bất kể khối `try` có ném ngoại lệ hay không.
