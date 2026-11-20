# Kiểm soát quyền truy cập (public, private)

## Vì sao cần

Nếu mọi thuộc tính trong lớp `CreditCard` đều để `public`, bất kỳ lớp bên ngoài nào (như lớp `Malicious`) cũng có thể gán thẳng `card.expenses = 0;` hoặc đọc trộm `card.cardNumber`. Kiểm soát quyền truy cập giúp bảo vệ dữ liệu nội bộ và tách biệt phần cài đặt khỏi cách sử dụng lớp.

## Ý tưởng

Java dùng các từ khóa chỉ định quyền truy cập cho thuộc tính và phương thức:

- **`public`**: mọi lớp khác đều truy cập trực tiếp được.
- **`private`**: chỉ truy cập được từ **bên trong chính lớp đó**; các lớp bên ngoài không thể đọc hay ghi trực tiếp.

Khi ẩn thuộc tính bằng `private`, lớp cung cấp các phương thức `public` có kiểm soát (ví dụ `charge(amount)`, `getCardNumber(password)`) để bên ngoài tương tác an toàn.

## Cài đặt

```java
public class CreditCard {
    private String cardNumber;
    private double expenses;

    public CreditCard(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void charge(double amount) {
        if (amount > 0) {
            expenses += amount;
        }
    }

    public String getCardNumber(String password) {
        if (password.equals("SECRET!3*!")) {
            return cardNumber;
        }
        return "robber";
    }
}
```

## Lỗi thường gặp

- Để tất cả trường dữ liệu là `public` theo thói quen, khiến dữ liệu đối tượng dễ bị sửa sai trạng thái từ bên ngoài.
- Khai báo phương thức cần dùng ở lớp khác (như `charge`) là `private`, dẫn đến lỗi biên dịch khi gọi từ `main` ở lớp khác.

## Tự kiểm tra

1. Sau khi đổi `expenses` thành `private double expenses;`, câu lệnh `card.expenses = 0;` đặt trong lớp `Malicious` có biên dịch được không?

> **Đáp án**
> **Không.** Trình biên dịch báo lỗi vì `expenses` có quyền truy cập `private`, chỉ dùng được bên trong lớp `CreditCard`.
