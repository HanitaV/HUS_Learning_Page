# Upcasting, Downcasting và instanceof

## Vì sao cần

Trong Java, một biến tham chiếu kiểu lớp cha (như `Vehicle` hoặc `Object`) có thể trỏ tới đối tượng thuộc lớp con (như `Car`). Để viết mã tổng quát hoặc lấy lại các phương thức riêng của lớp con khi cần, ta phải hiểu rõ **Upcasting**, **Downcasting** và cách kiểm tra kiểu an toàn bằng `instanceof`.

## Ý tưởng

Vì biến tham chiếu và đối tượng thật trên Heap có thể khác kiểu:

- **Upcasting** (ép kiểu lên): gán tham chiếu lớp con cho biến kiểu lớp cha (tổng quát hơn). Phép này **luôn an toàn** và Java thực hiện **tự động** (ngầm định).
  - Sau khi upcast, qua biến lớp cha bạn chỉ gọi được các phương thức khai báo ở lớp cha.
- **Downcasting** (ép kiểu xuống): chuyển tham chiếu từ lớp cha về lớp con cụ thể hơn. Phép này **rủi ro** nên **bắt buộc phải ép kiểu tường minh**.
  - Nếu đối tượng thật trên Heap không phải kiểu đích, JVM ném ra `ClassCastException` lúc chạy.
- **Toán tử `instanceof`**: kiểm tra đối tượng thật có thuộc kiểu lớp (hoặc lớp con/giao diện) mong muốn hay không trước khi downcast.

## Cài đặt

```java
class Car {
    void drive() { System.out.println("Đang lái"); }
}

class SelfDrivingCar extends Car {
    void autoPilot() { System.out.println("Tự lái"); }
}

public class CastingDemo {
    public static void main(String[] args) {
        Car c = new SelfDrivingCar();   // Upcasting tự động
        c.drive();

        if (c instanceof SelfDrivingCar) {
            SelfDrivingCar sdc = (SelfDrivingCar) c;  // Downcasting an toàn
            sdc.autoPilot();
        }
    }
}
```

## Lỗi thường gặp

- Downcast trực tiếp mà không kiểm tra `instanceof` (ví dụ `Car c = new Car(); SelfDrivingCar s = (SelfDrivingCar) c;`): biên dịch qua nhưng nổ `ClassCastException` khi chạy.
- Lạm dụng `instanceof` + `if-else` dài dòng thay vì dùng đa hình ([Đa hình tĩnh, đa hình động và liên kết động](#/courses/oop/lessons/oop-oop-polymorphism-dispatch)).

## Tự kiểm tra

1. Đoạn mã `Object o = "Hello"; Integer i = (Integer) o;` bị lỗi ở bước biên dịch hay bước chạy?

> **Đáp án**
> Biên dịch **thành công** (vì `Integer` là lớp con của `Object`), nhưng khi **chạy** sẽ ném `ClassCastException` vì đối tượng thật trên Heap là `String`, không phải `Integer`.
