# Từ lập trình thủ tục đến Lớp và Đối tượng

## Vì sao cần

Trong lập trình thủ tục (như C), dữ liệu (mảng, `struct`) và các hàm xử lý dữ liệu nằm tách rời nhau. Khi phần mềm lớn lên, nhiều hàm cùng tác động tự do lên dữ liệu chung khiến mã nguồn khó bảo trì và dễ phát sinh lỗi (khủng hoảng phần mềm). Lập trình hướng đối tượng (OOP) giải quyết vấn đề này bằng cách gom dữ liệu và hành vi liên quan vào một đơn vị thống nhất.

## Ý tưởng

**Lập trình hướng đối tượng (OOP)** tổ chức chương trình quanh các **đối tượng (objects)** thay vì chỉ quanh hàm và thủ tục:

- **Lớp (Class)**: là bản thiết kế (blueprint/template) mô tả cấu trúc chung gồm **thuộc tính** (dữ liệu/trạng thái) và **phương thức** (hành vi).
- **Đối tượng (Object)**: là một thể hiện (instance) cụ thể được tạo ra từ lớp, có trạng thái riêng và giao tiếp với đối tượng khác bằng cách **gửi thông điệp** (gọi phương thức).

OOP dựa trên **4 trụ cột**:
1. **Đóng gói (Encapsulation)** — [Đóng gói và bộ từ khóa truy cập](#/courses/oop/lessons/oop-oop-encapsulation-modifiers): gom dữ liệu và phương thức vào lớp, che giấu chi tiết bên trong.
2. **Kế thừa (Inheritance)** — [Kế thừa, từ khóa super và final](#/courses/oop/lessons/oop-oop-inheritance-super): lớp con tái sử dụng và mở rộng lớp cha.
3. **Đa hình (Polymorphism)** — [Đa hình tĩnh, đa hình động và liên kết động](#/courses/oop/lessons/oop-oop-polymorphism-dispatch): cùng một thông điệp nhưng các đối tượng khác nhau phản hồi theo cách riêng.
4. **Trừu tượng hóa (Abstraction)** — [Lớp trừu tượng và giao diện (Java)](#/courses/oop/lessons/oop-java-interface-abstract): chỉ phơi bày giao diện thiết yếu, ẩn cài đặt phức tạp.

## Cài đặt

```java
public class Vector2D {
    private double x;
    private double y;

    public Vector2D(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double length() {
        return Math.sqrt(x * x + y * y);
    }
}
```

## Lỗi thường gặp

- Nhầm lẫn giữa **lớp** (bản thiết kế, không chiếm bộ nhớ cho đối tượng) và **đối tượng** (thể hiện cụ thể được cấp phát trên Heap bằng `new`).
- Thiết kế lớp theo kiểu "túi chứa dữ liệu" (chỉ có biến `public`, không có hành vi) rồi viết toàn bộ logic xử lý ở `main`, quay lại thói quen lập trình thủ tục.

## Tự kiểm tra

1. So sánh sự khác biệt cốt lõi giữa lập trình thủ tục (POP) và lập trình hướng đối tượng (OOP) về cách tổ chức dữ liệu và hàm.

> **Đáp án**
> Trong POP, dữ liệu và hàm tách rời nhau (hàm nhận dữ liệu vào để xử lý). Trong OOP, dữ liệu và các phương thức thao tác trên dữ liệu đó được đóng gói chung vào bên trong lớp/đối tượng.
