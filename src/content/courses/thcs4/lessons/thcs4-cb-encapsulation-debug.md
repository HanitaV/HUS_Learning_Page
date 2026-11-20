# Đóng gói, quy ước đặt tên và gỡ lỗi

## Vì sao cần

Một chương trình tốt cần đúng đắn, dễ hiểu, dễ sửa đổi mở rộng và hiệu năng tốt. Tính đóng gói kết hợp với quy ước đặt tên nhất quán và kỹ năng gỡ lỗi giúp bạn đạt được các tiêu chí đó ngay từ lúc thiết kế lớp.

## Ý tưởng

- **Quy ước đặt tên**:
  - Biến: danh từ viết theo `camelCase` (`x`, `score`, `fileName`).
  - Phương thức: động từ viết theo `camelCase` (`getSize()`, `print()`).
  - Lớp: danh từ viết theo `PascalCase` (`Fraction`, `WebPage`).
- **Tính đóng gói (encapsulation)**: các trường và phương thức nội bộ ngầm định để `private`, chỉ công khai (`public`) các phương thức tạo thành **giao diện lớp** — ví dụ cặp `get`/`set`. Người dùng lớp chỉ cần biết đặc tả vào/ra của các phương thức công khai mà không cần biết bên trong cài đặt thế nào.
- **Kỹ năng tìm lỗi (debugging)**: thiết kế bằng mã giả trước khi viết mã; theo dõi giá trị biến; sửa toàn bộ cảnh báo (`warning`) của IDE và dùng công cụ debug (breakpoint, step) của IDE.

## Cài đặt

```java
public class Fraction {
    private int numerator;
    private int denominator;

    public Fraction(int numerator, int denominator) {
        this.numerator = numerator;
        this.denominator = (denominator != 0) ? denominator : 1;
    }

    public int getNumerator() {
        return numerator;
    }

    public void setNumerator(int numerator) {
        this.numerator = numerator;
    }
}
```

## Lỗi thường gặp

- Viết mã ngay mà không phác thảo thiết kế/mã giả, dẫn đến phải sửa chắp vá khi phát sinh lỗi logic.
- Bỏ qua các cảnh báo (warning) của trình biên dịch hoặc IDE, dễ che giấu lỗi tiềm ẩn.

## Tự kiểm tra

1. Theo quy ước đặt tên trong bài, các tên sau thuộc loại nào (lớp, biến, hay phương thức): `WebPage`, `fileName`, `getArea()`?

> **Đáp án**
> `WebPage` là tên lớp (danh từ, viết hoa chữ cái đầu mỗi từ); `fileName` là tên biến (danh từ, `camelCase`); `getArea()` là tên phương thức (động từ, `camelCase`).
