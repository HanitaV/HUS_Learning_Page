# Đa hình tĩnh, đa hình động và liên kết động

## Vì sao cần

Giả sử bạn cần vẽ một mảng các hình học gồm `Triangle`, `Rectangle`, `Circle`. Nếu phải kiểm tra từng loại hình bằng `if-else` và `instanceof`, mã nguồn sẽ phình to mỗi khi thêm một hình mới. **Đa hình (Polymorphism)** cho phép bạn gọi chung một phương thức `draw()` trên tham chiếu `Shape`, còn việc chọn đúng cài đặt của từng hình được JVM tự động xử lý.

## Ý tưởng

Java hỗ trợ hai dạng đa hình:

1. **Đa hình lúc biên dịch (Compile-time / Static Polymorphism)**: đạt được qua **nạp chồng phương thức (Overloading)** — cùng tên, khác danh sách tham số trong cùng lớp. Trình biên dịch quyết định gọi hàm nào ngay lúc biên dịch.
2. **Đa hình lúc chạy (Run-time / Dynamic Polymorphism)**: đạt được qua **ghi đè phương thức (Overriding)** kết hợp với upcasting (`Shape s = new Circle()`).
   - Cơ chế **Liên kết động (Dynamic Method Dispatch)**: khi gọi `s.draw()`, JVM không nhìn vào kiểu khai báo (`Shape`) mà nhìn vào **kiểu đối tượng thật trên Heap** (`Circle`) thông qua bảng phương thức ảo (Virtual Method Table) để gọi đúng `Circle.draw()`.

## Cài đặt

```java
abstract class Shape {
    public abstract double area();
}

class Circle extends Shape {
    private double r;
    Circle(double r) { this.r = r; }
    @Override public double area() { return Math.PI * r * r; }
}

class Rect extends Shape {
    private double w, h;
    Rect(double w, double h) { this.w = w; this.h = h; }
    @Override public double area() { return w * h; }
}

public class PolyDemo {
    public static double totalArea(Shape[] shapes) {
        double sum = 0;
        for (Shape s : shapes) {
            sum += s.area();   // Dynamic dispatch: gọi đúng area() của Circle hoặc Rect
        }
        return sum;
    }
}
```

## Lỗi thường gặp

- Nhầm **biến (field)** cũng có tính đa hình: trong Java, **chỉ phương thức thực thể** mới có liên kết động; truy cập thuộc tính (`s.x`) hoặc phương thức `static`/`private` luôn liên kết theo kiểu khai báo lúc biên dịch.
- Khác chữ ký phương thức (khác kiểu tham số) khi định ghi đè, dẫn tới vô tình nạp chồng; nên luôn gắn `@Override` để trình biên dịch kiểm tra hộ.

## Tự kiểm tra

1. Nếu `Parent p = new Child();` và cả `Parent` lẫn `Child` đều có phương thức `void show()`, khi gọi `p.show()` thì phiên bản của lớp nào chạy? Còn nếu `show()` là `static` thì sao?

> **Đáp án**
> Nếu `show()` là phương thức thực thể (không `static`), phiên bản của **`Child`** chạy (liên kết động). Nếu `show()` là `static`, phiên bản của **`Parent`** chạy (liên kết tĩnh theo kiểu tham chiếu `p`).
