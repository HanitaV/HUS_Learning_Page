# Mẫu Strategy

## Vì sao cần

Trong ví dụ `DuckSimulator`, nếu đặt phương thức `fly()` và `quack()` trực tiếp trong lớp cha `Duck`, thì `RubberDuck` (vịt cao su) hay `DecoyDuck` (vịt gỗ) cũng thừa hưởng khả năng bay một cách vô lý! Nếu ghi đè lại từng lớp con thì mã bị trùng lặp khắp nơi. **Strategy** tách phần hành vi hay thay đổi ra khỏi lớp chủ và ưu tiên **tổ hợp (composition)** hơn kế thừa.

## Ý tưởng

Mẫu **Strategy** định nghĩa một **họ các thuật toán/hành vi**, đóng gói từng thuật toán vào một lớp riêng cùng cài đặt một giao diện chung, và cho phép **hoán đổi chúng linh hoạt** lúc chạy:
1. Tách phần thay đổi (*encapsulate what varies*): tách `FlyBehavior`, `QuackBehavior` thành giao diện riêng.
2. Lập trình hướng giao diện (*program to an interface*): lớp `Duck` giữ tham chiếu kiểu `FlyBehavior` thay vì lớp cụ thể.
3. Ủy quyền (*delegation*): `Duck.performFly()` gọi `flyBehavior.fly()`, và có thể đổi hành vi lúc chạy qua `setFlyBehavior(...)`.

## Cài đặt

```java
interface FlyBehavior { void fly(); }

class FlyWithWings implements FlyBehavior {
    @Override public void fly() { System.out.println("Bay bằng cánh"); }
}

class FlyNoWay implements FlyBehavior {
    @Override public void fly() { System.out.println("Không biết bay"); }
}

class Duck {
    private FlyBehavior flyBehavior;
    public Duck(FlyBehavior fb) { this.flyBehavior = fb; }
    public void setFlyBehavior(FlyBehavior fb) { this.flyBehavior = fb; }
    public void performFly() { flyBehavior.fly(); }
}
```

## Lỗi thường gặp

- Cố nhét mọi biến thể thuật toán vào cây kế thừa của lớp chủ, dẫn tới ghi đè rỗng ở các lớp con không phù hợp.
- Quên rằng trong Java, `Comparator<T>` truyền vào `Collections.sort(list, comparator)` cũng là một ứng dụng quen thuộc của Strategy.

## Tự kiểm tra

1. Hai nguyên tắc thiết kế OOP cốt lõi đứng sau mẫu Strategy là gì?

> **Đáp án**
> 1) **Đóng gói phần hay thay đổi** (tách riêng thuật toán thành giao diện và các lớp cài đặt); 2) **Ưu tiên tổ hợp (composition) hơn kế thừa (inheritance)** và lập trình theo giao diện.
