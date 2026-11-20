# Biến tĩnh và phương thức tĩnh (static)

## Vì sao cần

Có những dữ liệu và hành vi gắn với **cả lớp** chứ không thuộc riêng một đối tượng nào: ví dụ biến đếm tổng số đối tượng `Baby` đã được tạo, hằng `Math.PI`, hay các hàm tiện ích `Math.sqrt(...)`. Từ khóa `static` dùng để khai báo các thành viên dùng chung ở mức lớp đó.

## Ý tưởng

- **Trường tĩnh (`static` field)**: chỉ có một bản duy nhất dùng chung cho tất cả đối tượng của lớp. Thay đổi qua `ClassName.staticField` hay qua bất kỳ đối tượng nào đều nhìn thấy cùng một giá trị.
- **Phương thức tĩnh (`static` method)**: gọi được trực tiếp qua `ClassName.staticMethod(args)` mà không cần tạo đối tượng.
- **Quy tắc gọi**:
  - Phương thức không tĩnh có thể gọi cả thành viên tĩnh và không tĩnh.
  - Phương thức tĩnh **không thể** truy cập trực tiếp trường hoặc phương thức không tĩnh trong cùng lớp (vì lúc gọi không có đối tượng `this` cụ thể).
  - Vì vậy `main` phải là `static` để JVM gọi được ngay khi khởi động chương trình.

## Cài đặt

```java
public class Counter {
    int myCount = 0;          // riêng cho từng đối tượng
    static int ourCount = 0;  // dùng chung cho cả lớp

    void increment() {
        myCount++;
        ourCount++;
    }

    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        c1.increment();
        c1.increment();
        c2.increment();
        System.out.println("c1: " + c1.myCount + " " + Counter.ourCount); // 2 3
        System.out.println("c2: " + c2.myCount + " " + Counter.ourCount); // 1 3
    }
}
```

## Lỗi thường gặp

- Cố truy cập biến thực thể (không `static`) bên trong phương thức `static` (như in `name` trong `public static void whoAmI()`), gây lỗi biên dịch *non-static variable cannot be referenced from a static context*.
- Nhầm rằng mỗi đối tượng `c1`, `c2` có một bản sao `ourCount` riêng.

## Tự kiểm tra

1. Trong lớp `Counter` ở trên, nếu gọi `c1.ourCount = 10;` rồi in `c2.ourCount`, kết quả là bao nhiêu?

> **Đáp án**
> Kết quả là `10`, vì `ourCount` là biến `static` dùng chung cho mọi đối tượng thuộc lớp `Counter`.
