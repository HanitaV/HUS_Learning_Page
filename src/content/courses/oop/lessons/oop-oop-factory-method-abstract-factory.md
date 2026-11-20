# Factory Method và Abstract Factory

## Vì sao cần

Khi mã nguồn gọi trực tiếp `new NYStyleCheesePizza()` hay `new ChicagoStyleCheesePizza()`, lớp sử dụng bị trói chặt vào các lớp cụ thể, vi phạm nguyên lý đảo ngược phụ thuộc ([Năm nguyên lý thiết kế SOLID](#/courses/oop/lessons/oop-oop-solid-principles)). Mỗi khi thêm loại sản phẩm mới, ta phải sửa lại hàng loạt câu lệnh `if-else` khởi tạo. Nhóm mẫu **Factory** đóng gói việc khởi tạo đối tượng để tách phần "sử dụng" khỏi phần "tạo".

## Ý tưởng

- **Factory Method**: định nghĩa một phương thức giao diện để tạo đối tượng trong lớp cha (`createPizza(type)`), nhưng **để lớp con quyết định** lớp cụ thể nào được khởi tạo. Ví dụ `PizzaStore` gọi `createPizza()`, còn `NYPizzaStore` và `ChicagoPizzaStore` tự cài đặt cách tạo pizza theo vùng.
- **Abstract Factory**: cung cấp một giao diện để tạo **cả một họ (family) các đối tượng liên quan hoặc phụ thuộc nhau** mà không chỉ rõ lớp cụ thể (ví dụ `PizzaIngredientFactory` tạo đồng bộ `Dough`, `Sauce`, `Cheese` chuẩn New York hoặc chuẩn Chicago).

## Cài đặt

```java
interface Pizza { void prepare(); }

class NYCheesePizza implements Pizza {
    @Override public void prepare() { System.out.println("Chuẩn bị Pizza kiểu NY"); }
}

abstract class PizzaStore {
    public Pizza orderPizza(String type) {
        Pizza pizza = createPizza(type);   // phụ thuộc vào trừu tượng Pizza
        pizza.prepare();
        return pizza;
    }

    protected abstract Pizza createPizza(String type);   // Factory Method
}

class NYPizzaStore extends PizzaStore {
    @Override
    protected Pizza createPizza(String type) {
        return new NYCheesePizza();
    }
}
```

## Lỗi thường gặp

- Nhầm **Simple Factory** (một hàm `static` có `if-else` tạo đối tượng) với **Factory Method** (dùng kế thừa và đa hình để lớp con quyết định).
- Dùng Abstract Factory khi chỉ có một sản phẩm đơn lẻ, làm hệ thống cồng kềnh với quá nhiều interface thừa.

## Tự kiểm tra

1. Điểm khác biệt chính giữa **Factory Method** và **Abstract Factory** là gì?

> **Đáp án**
> **Factory Method** dùng kế thừa (ghi đè một phương thức) để tạo **một** loại sản phẩm. **Abstract Factory** dùng tổ hợp đối tượng (một giao diện gồm nhiều phương thức tạo) để tạo **cả một họ** sản phẩm tương thích với nhau.
