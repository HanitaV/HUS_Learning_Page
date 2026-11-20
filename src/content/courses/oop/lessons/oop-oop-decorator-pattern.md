# Mẫu Decorator

## Vì sao cần

Xét hệ thống bán đồ uống (như Starbuzz Coffee) có nhiều loại cà phê (`Espresso`, `DarkRoast`) và nhiều món thêm (`Milk`, `Mocha`, `Whip`). Nếu dùng kế thừa để tạo lớp cho từng tổ hợp (`DarkRoastWithMilkAndMocha`), số lượng lớp sẽ **bùng nổ theo cấp số nhân** và rất cứng nhắc. **Decorator** cho phép gắn thêm hành vi cho từng đối tượng **lúc chạy** một cách linh hoạt.

## Ý tưởng

Mẫu **Decorator** bọc đối tượng gốc bên trong các lớp trang trí có cùng kiểu cha (`Beverage`):
- Cả thành phần gốc (`ConcreteComponent`) và lớp trang trí (`Decorator`) đều kế thừa/cài đặt cùng một lớp trừu tượng/giao diện (`Beverage`).
- Mỗi `Decorator` giữ một tham chiếu tới `Beverage` được bọc, ủy quyền tính toán cho đối tượng bên trong rồi cộng thêm phần hành vi/chi phí của riêng mình.
- Thực tế trong Java: các lớp `java.io` như `new BufferedReader(new InputStreamReader(new FileInputStream(...)))` chính là ứng dụng kinh điển của Decorator.

## Cài đặt

```java
abstract class Beverage {
    public abstract double cost();
}

class Espresso extends Beverage {
    @Override public double cost() { return 1.99; }
}

abstract class CondimentDecorator extends Beverage {
    protected final Beverage beverage;
    public CondimentDecorator(Beverage b) { this.beverage = b; }
}

class Mocha extends CondimentDecorator {
    public Mocha(Beverage b) { super(b); }
    @Override public double cost() { return beverage.cost() + 0.20; }
}

// Dùng: Beverage b = new Mocha(new Mocha(new Espresso())); -> 2.39
```

## Lỗi thường gặp

- Quên cho `Decorator` kế thừa/cài đặt cùng kiểu cha với đối tượng được bọc, khiến không thể lồng nhiều lớp trang trí lên nhau.
- Lạm dụng nhiều tầng bọc lồng nhau quá sâu gây khó gỡ rối khi theo dõi luồng gọi hàm.

## Tự kiểm tra

1. So với kế thừa trực tiếp, mẫu Decorator giải quyết vấn đề gì khi kết hợp nhiều tính năng bổ sung cho một đối tượng?

> **Đáp án**
> Tránh **bùng nổ số lượng lớp con** cho từng tổ hợp tính năng và cho phép thêm/bớt hành vi linh hoạt tại thời điểm chạy (runtime).
