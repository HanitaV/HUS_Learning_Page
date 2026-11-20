# Giao diện hàm và Biểu thức Lambda

## Vì sao cần

Khi cần truyền một đoạn hành vi làm tham số (ví dụ tiêu chí lọc sinh viên, bộ so sánh tùy chỉnh), cách viết truyền thống buộc ta phải tạo nhiều lớp cài đặt interface hoặc viết **lớp vô danh (Anonymous Class)** dài dòng. Từ Java 8, **Giao diện hàm (Functional Interface)** kết hợp với **Biểu thức Lambda** giúp truyền hành vi gọn nhẹ như truyền dữ liệu.

## Ý tưởng

- **Giao diện hàm (Functional Interface)**: là giao diện có **đúng một phương thức trừu tượng** (Single Abstract Method — SAM), thường gắn chú thích `@FunctionalInterface` để trình biên dịch kiểm tra.
- **Biểu thức Lambda**: biểu diễn ngắn gọn một hàm ẩn danh cài đặt phương thức trừu tượng duy nhất đó, với cú pháp:
  - `(tham số) -> biểu thức`
  - `(tham số) -> { các câu lệnh; return ...; }`
- **Tham số hóa hành vi (Behavior Parameterization)**: thay vì viết nhiều hàm lọc cố định tuổi/giới tính, ta viết một hàm nhận vào giao diện hàm `CheckPerson` và truyền các lambda khác nhau khi gọi.

## Cài đặt

```java
@FunctionalInterface
interface CheckPerson {
    boolean test(int age);
}

public class LambdaDemo {
    public static void main(String[] args) {
        // Cách cũ: lớp vô danh
        CheckPerson oldWay = new CheckPerson() {
            @Override public boolean test(int age) { return age >= 18; }
        };

        // Cách mới: Lambda
        CheckPerson isAdult = age -> age >= 18;
        System.out.println(isAdult.test(20));   // true
    }
}
```

## Lỗi thường gặp

- Gắn `@FunctionalInterface` cho giao diện có **2 phương thức trừu tượng** trở lên: trình biên dịch báo lỗi ngay.
- Cố thay đổi giá trị biến cục bộ bên ngoài bên trong biểu thức Lambda: biến cục bộ được Lambda tham chiếu phải là `final` hoặc *effectively final* (không bị gán lại).

## Tự kiểm tra

1. Giao diện `Comparator<T>` có 1 phương thức trừu tượng `compare(T o1, T o2)` và nhiều phương thức `default`/`static`. Nó có phải là Functional Interface không?

> **Đáp án**
> **Có.** Các phương thức `default` và `static` (cũng như các phương thức kế thừa từ `Object` như `equals`) không tính vào số phương thức trừu tượng, nên `Comparator<T>` vẫn là Functional Interface và dùng được với Lambda.
