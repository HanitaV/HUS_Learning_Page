# Giao diện (interface), nạp chồng và ghi đè

## Vì sao cần

Nhiều lớp khác nhau (như `Square`, `Rectangle`, `Circle`) có thể chia sẻ chung một tập hành vi (`getArea()`, `getPerimeter()`). Giao diện (`interface`) cho phép định nghĩa hợp đồng chung này để xử lý các đối tượng khác lớp một cách thống nhất (xem thêm [Lớp trừu tượng và giao diện (Java)](#/courses/mat3514/lessons/mat3514-java-interface-abstract)).

## Ý tưởng

- **Kiểu `interface`**: khai báo trong tệp `<Name>.java`, không có hàm dựng, không tạo được đối tượng trực tiếp bằng `new`. Chứa các hằng số tĩnh và các phương thức trừu tượng (chỉ có nguyên mẫu, không có thân). Từ Java 8 có thêm phương thức `default` và `static` có thân.
- **Cài đặt giao diện**: một lớp dùng `implements Interface1, Interface2` và **bắt buộc** ghi đè mọi phương thức trừu tượng của các giao diện đó.
- Có thể dùng tên `interface` làm kiểu cho biến đối tượng (ví dụ `Shape s = new Circle(2.0);`).
- **Phân biệt nạp chồng (overload) và ghi đè (override)**:
  - *Nạp chồng*: nhiều phương thức **cùng lớp**, cùng tên nhưng **khác danh sách kiểu tham số** (ví dụ `Math.abs(int)`, `Math.abs(double)`).
  - *Ghi đè*: lớp cài đặt giao diện (hoặc lớp con) định nghĩa lại phần thân của phương thức đã khai báo ở giao diện (hoặc lớp cha).

## Cài đặt

```java
public interface Shape {
    double getArea();
    double getPerimeter();
}

public class Rectangle implements Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() { return width * height; }

    @Override
    public double getPerimeter() { return 2 * (width + height); }
}
```

## Lỗi thường gặp

- Quên cài đặt một phương thức trừu tượng của giao diện trong lớp `implements`.
- Khi ghi đè phương thức giao diện, quên từ khóa `public` (mọi phương thức của giao diện ngầm định là `public`, nên lớp cài đặt cũng phải để `public`).
- Nhầm lẫn giữa nạp chồng (khác tham số trong cùng lớp) và ghi đè (cùng nguyên mẫu khi cài đặt giao diện/kế thừa).

## Tự kiểm tra

1. Một lớp trong Java có thể `implements` tối đa bao nhiêu giao diện, và có thể viết `Shape s = new Shape();` không?

> **Đáp án**
> Một lớp có thể `implements` **nhiều** giao diện cùng lúc (cách nhau bởi dấu phẩy). Không thể viết `new Shape()` vì giao diện là kiểu trừu tượng, không có hàm dựng.
