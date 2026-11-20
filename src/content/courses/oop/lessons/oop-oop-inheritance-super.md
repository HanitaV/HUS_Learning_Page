# Kế thừa, từ khóa super và final

## Vì sao cần

Khi xây dựng các lớp có nhiều điểm chung (ví dụ `Employee`, `Manager`, `Programmer`), việc chép lại cùng một đoạn mã ở nhiều nơi gây dư thừa và khó sửa lỗi đồng bộ. **Kế thừa (Inheritance)** cho phép định nghĩa các thuộc tính và hành vi chung ở lớp cha rồi tái sử dụng, mở rộng hoặc điều chỉnh ở lớp con.

## Ý tưởng

- Quan hệ **IS-A**: nếu `B extends A`, mọi đối tượng `B` đều là một `A` (ví dụ `Car IS-A Vehicle`). Trong Java, mỗi lớp chỉ kế thừa trực tiếp từ **một** lớp cha duy nhất (đơn kế thừa); nếu không ghi `extends`, lớp mặc định kế thừa `java.lang.Object`.
- **Ghi đè phương thức (Overriding)**: lớp con viết lại phương thức có cùng tên, cùng danh sách tham số và kiểu trả về tương thích với lớp cha để thay đổi/mở rộng hành vi.
- **Từ khóa `super`**: tham chiếu tới lớp cha trực tiếp; dùng `super.method()` để gọi phiên bản của lớp cha, hoặc `super(...)` ở dòng đầu constructor lớp con để khởi tạo phần cha.
- **Thứ tự khởi tạo**: constructor chạy từ trên xuống dưới theo cây kế thừa (lớp cha khởi tạo xong rồi mới đến lớp con).
- **Từ khóa `final`**: đặt trước `class` để cấm kế thừa; đặt trước phương thức để cấm ghi đè.

## Cài đặt

```java
public class Employee {
    protected String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getInfo() {
        return "Nhân viên: " + name;
    }
}

public class Manager extends Employee {
    private String department;

    public Manager(String name, String department) {
        super(name);   // bắt buộc gọi trước khi khởi tạo phần riêng của Manager
        this.department = department;
    }

    @Override
    public String getInfo() {
        return super.getInfo() + " - Phòng: " + department;
    }
}
```

## Lỗi thường gặp

- Quên gọi `super(...)` khi lớp cha **không có constructor không tham số**: trình biên dịch báo lỗi vì Java tự chèn `super()` ngầm định nhưng lớp cha không có constructor rỗng.
- Giảm quyền truy cập khi ghi đè (ví dụ lớp cha là `public`, lớp con viết `protected` hoặc `private`): lỗi biên dịch.
- Dùng kế thừa cho quan hệ **HAS-A** (ví dụ `Car extends Engine` thay vì `Car` có một trường `Engine`): sai về mặt thiết kế hướng đối tượng.

## Tự kiểm tra

1. Nếu `ClassC extends ClassB` và `ClassB extends ClassA`, khi gọi `new ClassC()`, constructor của các lớp chạy theo thứ tự nào?

> **Đáp án**
> Chạy từ trên xuống theo cây kế thừa: `Object` $ightarrow$ `ClassA` $ightarrow$ `ClassB` $ightarrow$ `ClassC`.
