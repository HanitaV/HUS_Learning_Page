# Phương thức và lời gọi hàm

## Vì sao cần

Khi chương trình lớn dần, việc dồn toàn bộ lệnh vào `main` khiến mã dài, khó đọc và phải lặp lại nhiều lần. Phương thức cho phép tách bài toán lớn thành các chương trình con độc lập, dễ kiểm thử và tái sử dụng.

## Ý tưởng

Một phương thức được khai báo theo mẫu:

```text
[public|private] [static] TYPE NAME([Type_1 Arg_1, ...]) {
    // thân phương thức
    [return EXPRESSION;]
}
```

- Nếu `TYPE` là `void`: phương thức thực hiện thao tác và **không** trả về giá trị.
- Nếu `TYPE` khác `void`: bắt buộc có `return EXPRESSION;` cùng kiểu với `TYPE`.
- Từ khóa `static` cho phép gọi phương thức trực tiếp qua tên lớp mà chưa cần tạo đối tượng (sẽ phân tích kỹ hơn ở [Biến tĩnh và phương thức tĩnh (static)](#/courses/thcs4/lessons/thcs4-cb-static-members)).

Người gọi chỉ cần biết tên phương thức, danh sách tham số và kiểu trả về mà không cần quan tâm chi tiết cài đặt bên trong (tính **trừu tượng hóa**).

## Cài đặt

```java
public class Square {
    public static void printSquare(int x) {
        System.out.println(x * x);
    }

    public static int square(int x) {
        return x * x;
    }

    public static void main(String[] args) {
        int value = 2;
        printSquare(value);     // 4
        printSquare(3);         // 9
        int res = square(value * 2);
        System.out.println(res); // 16
    }
}
```

## Lỗi thường gặp

- Truyền đối số sai kiểu hoặc sai số lượng so với khai báo (ví dụ gọi `printSquare(3.2)` hoặc `printSquare("hello")` khi tham số là `int`).
- Khai báo kiểu trả về khác `void` nhưng thiếu lệnh `return` trên một nhánh thực thi nào đó.
- Gọi một phương thức không phải `static` trực tiếp từ `main` (vốn là `static`).

## Tự kiểm tra

1. Một phương thức có khai báo `public static double avg(int a, int b)` trả về kiểu gì, và câu lệnh `int k = avg(3, 4);` có biên dịch được không?

> **Đáp án**
> Phương thức trả về kiểu `double`. Câu lệnh `int k = avg(3, 4);` **không** biên dịch được vì không thể gán trực tiếp giá trị `double` cho biến `int` nếu không ép kiểu.
