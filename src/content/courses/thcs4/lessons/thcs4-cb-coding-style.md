# Phong cách lập trình tốt

## Vì sao cần

Chương trình chạy đúng mới là điều kiện cần; mã nguồn còn phải để chính bạn và người khác đọc hiểu, sửa lỗi và mở rộng dễ dàng sau này.

## Ý tưởng

7 quy tắc phong cách lập trình tốt:

1. **Đặt tên có ý nghĩa**: dùng tên gợi nhớ cho biến, phương thức, lớp (tránh `a`, `s`, `kt()`).
2. **Canh lề khối lệnh**: các lệnh cùng mức thẳng lề trái, khối con thụt vào đều đặn.
3. **Dùng khoảng trống trong công thức**: tách toán tử bằng dấu cách để dễ nhìn (ví dụ `double force = G * (m1 * m2) / (r1 * r2);`).
4. **Dùng dòng trống tách nhóm lệnh**: phân tách phần nhập dữ liệu, tính toán, xuất kết quả.
5. **Ngắt dòng lệnh dài**: chủ động xuống dòng hợp lý ở các biểu thức hoặc chuỗi ghép dài.
6. **Tối ưu biểu thức điều kiện**: tránh viết `if (cond) ok = true; else ok = b;`, hãy viết gọn `ok = cond || b;` và tránh lặp lại phép thử thừa trong chuỗi `else if`.
7. **Chọn loại chương trình con phù hợp**: phương thức tính toán nên trả về giá trị (`boolean`, `int`, ...) thay vì tự in ra màn hình, để nơi gọi tự quyết định cách dùng kết quả.

## Cài đặt

```java
public class GoodStyleDemo {
    // Nên: tách tính toán khỏi việc in ra màn hình
    public static boolean isGradeA(int testGrade) {
        return (testGrade >= 80) && (testGrade <= 100);
    }

    public static void main(String[] args) {
        int points = 85;
        System.out.println("Is grade A? " + isGradeA(points));
    }
}
```

## Lỗi thường gặp

- Viết hàm kiểm tra (như `isGradeA`) kiểu `void` rồi in thẳng `System.out.print` bên trong, khiến hàm không tái sử dụng được trong các biểu thức `if`.
- Lạm dụng phép viết gộp phức tạp trên một dòng làm người đọc khó lần theo thứ tự tính toán.

## Tự kiểm tra

1. Hãy rút gọn đoạn mã sau theo quy tắc tối ưu rẽ nhánh:
   ```java
   if (score >= 50) {
       passed = true;
   } else {
       passed = hasBonus;
   }
   ```

> **Đáp án**
> `passed = (score >= 50) || hasBonus;`
