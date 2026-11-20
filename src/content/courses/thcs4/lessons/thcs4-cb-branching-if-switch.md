# Cấu trúc rẽ nhánh if-else và switch-case

## Vì sao cần

Chương trình không chỉ chạy tuần tự từ trên xuống mà phải biết chọn nhánh xử lý phù hợp với dữ liệu đầu vào: kiểm tra số âm/dương, phân loại học lực hay xử lý thực đơn nhiều lựa chọn.

## Ý tưởng

Java có hai cấu trúc rẽ nhánh chính:

- **`if ... else`**: kiểm tra biểu thức điều kiện kiểu `boolean` đặt trong `()`. Có dạng thiếu (`if`), dạng đầy đủ (`if ... else`), và chuỗi nối tiếp (`if ... else if ... else`). Trong biểu thức điều kiện, thứ tự ưu tiên phép toán logic là `!` trước, rồi đến `&&`, cuối cùng là `||`.
- **`switch ... case`**: rẽ nhánh theo nhiều giá trị rời rạc của một biểu thức (số nguyên, `char`, và `String` từ Java 7). Mỗi nhánh thường kết thúc bằng `break;` để thoát khỏi `switch`; nếu thiếu `break`, chương trình sẽ chạy tiếp sang các `case` bên dưới. Nhánh `default` xử lý khi không khớp `case` nào.

## Cài đặt

```java
public class BranchingDemo {
    public static void printSign(int x) {
        if (x > 0) {
            System.out.println(x + " is positive");
        } else if (x < 0) {
            System.out.println(x + " is negative");
        } else {
            System.out.println("is zero");
        }
    }

    public static void printSeason(String month) {
        switch (month) {
            case "Jan": case "Feb": case "Mar":
                System.out.println(month + " -> Spring");
                break;
            case "Apr": case "May": case "Jun":
                System.out.println(month + " -> Summer");
                break;
            default:
                System.out.println(month + " -> Fall/Winter");
        }
    }
}
```

## Lỗi thường gặp

- Quên `break;` trong `switch ... case` khi không cố ý gộp nhánh, làm chạy nhầm sang `case` kế tiếp.
- Đặt dấu `;` ngay sau `if (condition);`, khiến khối lệnh phía sau luôn chạy bất kể điều kiện đúng hay sai.
- Quên dấu ngoặc `{}` khi một nhánh `if` hoặc `else` có nhiều hơn một câu lệnh.

## Tự kiểm tra

1. Trong `printSeason("Jan")`, nếu bỏ câu lệnh `break;` ở nhánh `"Mar"`, chương trình sẽ in ra những gì?

> **Đáp án**
> Chương trình in `Jan -> Spring` rồi chạy tiếp xuống nhánh `Apr/May/Jun` và in thêm `Jan -> Summer` trước khi gặp `break;`.
