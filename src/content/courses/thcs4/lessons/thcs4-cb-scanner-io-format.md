# Nhập xuất chuẩn với Scanner và printf

## Vì sao cần

Chương trình thực tế hiếm khi dùng dữ liệu cố định trong mã nguồn mà cần đọc từ bàn phím hoặc tệp, đồng thời in kết quả gọn gàng theo cột hoặc số chữ số thập phân xác định.

## Ý tưởng

- **Nhập chuẩn với `Scanner`**: import `java.util.Scanner`, tạo `Scanner scan = new Scanner(System.in);`, dùng `nextInt()`, `nextDouble()`, `next()`, `nextLine()`, và gọi `scan.close()` khi xong.
- **Chuyển hướng vào/ra trên dòng lệnh**: chạy `java InputData < input.txt` để đọc từ tệp thay bàn phím, hoặc `java InputData > output.txt` để ghi kết quả ra tệp.
- **Sinh dữ liệu kiểm thử ngẫu nhiên**: `Math.random()` trả về số thực trong $[0.0, 1.0)$; nhân với `n` và ép `(int)(n * Math.random())` cho số nguyên trong $[0, n - 1]$.
- **Xuất có định dạng**: `System.out.printf("<format>", arg1, ...)` dùng mẫu `%[flags][width][.precision]conversion` (`d` nguyên, `f` thực, `c` ký tự, `s` xâu).

## Cài đặt

```java
import java.util.Scanner;

public class InputFormatDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("What's your name? ");
        String name = input.nextLine();
        System.out.print("How old are you? ");
        int age = input.nextInt();

        double score = 8.4567;
        System.out.printf("Name: %-12s | Age: %3d | Score: %.2f%n", name, age, score);
        input.close();
    }
}
```

## Lỗi thường gặp

- Quên `import java.util.Scanner;` ở đầu tệp.
- Gọi `nextInt()` rồi gọi ngay `nextLine()` mà không xử lý ký tự xuống dòng còn sót lại trong bộ đệm, khiến `nextLine()` đọc chuỗi rỗng.
- Dùng sai ký tự chuyển đổi trong `printf` (ví dụ truyền `double` vào `%d`), gây ngoại lệ lúc chạy.

## Tự kiểm tra

1. Lệnh `System.out.printf("n = %-5d, t = %.2f", 11, 2.17835);` in ra màn hình chuỗi nào?

> **Đáp án**
> `n = 11   , t = 2.18` (số `11` căn lề trái trong độ rộng 5 ký tự, `2.17835` làm tròn 2 chữ số thập phân thành `2.18`).
