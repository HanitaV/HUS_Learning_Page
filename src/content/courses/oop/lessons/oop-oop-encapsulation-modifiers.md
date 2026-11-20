# Đóng gói và bộ từ khóa truy cập

## Vì sao cần

Nếu mọi thuộc tính của một lớp đều để `public`, bất kỳ đoạn mã bên ngoài nào cũng có thể sửa trực tiếp dữ liệu thành giá trị vô lý (ví dụ tuổi âm, bán kính âm) hoặc phụ thuộc chặt vào tên biến nội bộ. **Đóng gói (Encapsulation)** tạo ra lớp vỏ bảo vệ dữ liệu và kiểm soát quyền truy cập thông qua các phương thức công khai.

## Ý tưởng

Đóng gói kết hợp dữ liệu và phương thức vào một lớp, đồng thời dùng **Access Modifiers** để giới hạn tầm nhìn:

| Modifier | Trong cùng lớp | Cùng package | Lớp con (khác package) | Mọi nơi |
|---|---|---|---|---|
| `private` | Có | Không | Không | Không |
| *(default / không ghi)* | Có | Có | Không | Không |
| `protected` | Có | Có | Có | Không |
| `public` | Có | Có | Có | Có |

Quy tắc thiết kế phổ biến:
- Thuộc tính thường đặt `private` để che giấu thông tin.
- Cung cấp **getter** (accessor) để đọc và **setter** (mutator) để gán có kiểm tra hợp lệ.

## Cài đặt

```java
public class BankAccount {
    private double balance;   // ẩn dữ liệu, không cho sửa trực tiếp từ ngoài

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

## Lỗi thường gặp

- Khai báo thuộc tính `public` vì lười viết getter/setter: mất khả năng kiểm tra dữ liệu đầu vào và khó đổi cấu trúc lưu trữ bên trong về sau.
- Nhầm quyền `protected` với `default`: `protected` cho phép lớp con ở **package khác** truy cập, còn `default` thì không.

## Tự kiểm tra

1. Nếu thuộc tính `age` của lớp `Person` để `private`, lớp `Student` (cùng package) có truy cập trực tiếp `p.age` được không?

> **Đáp án**
> Không. Thành viên `private` chỉ truy cập được bên trong chính lớp `Person`, kể cả lớp con hay lớp cùng package đều không truy cập trực tiếp được.
