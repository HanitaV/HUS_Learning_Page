# Kiểu dữ liệu nguyên thủy và biến

## Vì sao cần

Mọi chương trình đều cần lưu trữ và xử lý dữ liệu: tuổi, điểm số, ký tự hay trạng thái đúng/sai. Chọn đúng kiểu dữ liệu giúp bộ nhớ được cấp phát vừa đủ và tránh sai sót khi tính toán.

## Ý tưởng

Java chia dữ liệu thành hai nhóm:

- **Kiểu nguyên thủy** (primitive): lưu trực tiếp giá trị trong vùng nhớ có kích thước cố định (`boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`).
- **Kiểu tham chiếu** (reference): lưu địa chỉ tới đối tượng, phổ biến nhất ở giai đoạn đầu là `String` cho xâu ký tự (xem thêm [Kiểu nguyên thủy và kiểu tham chiếu](#/courses/thcs4/lessons/thcs4-cb-reference-vs-primitive)).

| Kiểu | Kích thước | Giá trị mặc định | Ví dụ miền giá trị |
|---|---|---|---|
| `boolean` | 1 bit | `false` | `true` hoặc `false` |
| `char` | 2 bytes | `0` | $0 \dots 65535$ (Unicode) |
| `short` | 2 bytes | `0` | $-32767 \dots 32767$ |
| `int` | 4 bytes | `0` | $-2.147.483.648 \dots 2.147.483.647$ |
| `long` | 8 bytes | `0` | $-2^{63}+1 \dots 2^{63}$ |
| `float` | 4 bytes | `0.0` | số thực dấu phẩy động đơn |
| `double` | 8 bytes | `0.0` | số thực dấu phẩy động kép |

Biến là tên gọi của vùng nhớ lưu dữ liệu và **phải được khai báo trước khi dùng**. Tên biến chỉ gồm chữ cái, chữ số, dấu gạch dưới `_`, không bắt đầu bằng chữ số, và phân biệt chữ hoa với chữ thường.

## Cài đặt

```java
public class VariablesDemo {
    public static void main(String[] args) {
        int age = 19;
        float weight = 52.5f;
        double pi = 3.14159;
        char grade = 'A';
        boolean isPassed = true;
        String greeting = "Hello Vietnam";

        int a, b, c;
        a = 10;
        b = 20;
        c = a + b;
        System.out.println(greeting + " - " + c);
    }
}
```

## Lỗi thường gặp

- Dùng biến trước khi khai báo hoặc trước khi gán giá trị khởi tạo cho biến cục bộ.
- Gán số thực mặc định kiểu `double` vào biến `float` mà quên hậu tố `f` (ví dụ `float b = 0.5;` gây lỗi biên dịch, cần viết `0.5f`).
- Đặt tên biến bắt đầu bằng số (như `1stValue`) hoặc nhầm giữa `variable` và `Variable`.

## Tự kiểm tra

1. Trong các khai báo sau, dòng nào hợp lệ và dòng nào lỗi trong Java: `int 2x = 5;`, `double rate = 0.5;`, `boolean ok = false;`, `String s = 'A';`?

> **Đáp án**
> `double rate = 0.5;` và `boolean ok = false;` hợp lệ. `int 2x = 5;` lỗi vì tên biến bắt đầu bằng chữ số; `String s = 'A';` lỗi vì `'A'` là kiểu `char`, còn `String` phải dùng ngoặc kép `"A"`.
