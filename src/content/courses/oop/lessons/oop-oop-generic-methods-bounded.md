# Phương thức tổng quát và Bounded Type Parameters

## Vì sao cần

Sau khi biết tạo lớp tổng quát ([Lập trình tổng quát (Generics)](#/courses/oop/lessons/oop-java-generics)), đôi khi ta chỉ muốn viết **một phương thức đơn lẻ** dùng chung cho nhiều kiểu dữ liệu, hoặc viết thuật toán tổng quát cần gọi phương thức trên phần tử kiểu `T` (ví dụ so sánh `a.compareTo(b)` hay tính giá trị số `n.doubleValue()`). Nếu không giới hạn kiểu `T`, trình biên dịch chỉ xem `T` là `Object` và không cho gọi các phương thức đó.

## Ý tưởng

- **Phương thức tổng quát (Generic Method)**: khai báo danh sách tham số kiểu `<T>` đặt **ngay trước kiểu trả về** của phương thức.
- **Tham số kiểu bị chặn (Bounded Type Parameter)**: dùng cú pháp `<T extends UpperBound>` để giới hạn `T` phải là `UpperBound` hoặc lớp con/lớp cài đặt `UpperBound` (lưu ý: dù `UpperBound` là `interface` như `Comparable<T>`, Java vẫn dùng từ khóa `extends`, không dùng `implements`).
  - Có thể đặt nhiều cận bằng `&`: `<T extends Number & Comparable<T>>` (lớp phải đứng trước giao diện).

## Cài đặt

```java
public class GenericAlg {
    // Phương thức tổng quát đếm số phần tử lớn hơn elem trong mảng
    public static <T extends Comparable<T>> int countGreaterThan(T[] arr, T elem) {
        int count = 0;
        for (T e : arr) {
            if (e.compareTo(elem) > 0) {   // gọi được compareTo nhờ cận Comparable<T>
                count++;
            }
        }
        return count;
    }
}
```

## Lỗi thường gặp

- Viết `<T implements Comparable<T>>`: sai cú pháp, Java luôn dùng `extends` cho cả lớp lẫn giao diện trong ràng buộc generics.
- Đặt `<T>` sau kiểu trả về (ví dụ `public static int <T> count(...)`): sai vị trí; `<T>` phải đứng **trước** kiểu trả về.
- Quên rằng `T extends Comparable<T>` đòi hỏi lớp truyền vào phải cài đặt `Comparable<T>` ([Giao diện Comparable<T>](#/courses/oop/lessons/oop-comparable-interface)).

## Tự kiểm tra

1. Vì sao trong hàm `countGreaterThan(T[] arr, T elem)`, nếu chỉ viết `<T>` mà không có `extends Comparable<T>` thì dòng `e.compareTo(elem)` không biên dịch được?

> **Đáp án**
> Vì không có cận trên, trình biên dịch coi `T` có cận mặc định là `Object`, mà lớp `Object` không có phương thức `compareTo`.
