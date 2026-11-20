# Thư viện Java API: Math và String

## Vì sao cần

Java cung cấp sẵn thư viện **Java API** gồm hàng trăm lớp được đóng gói theo chủ đề. Biết tận dụng các lớp có sẵn trong gói `java.lang` như `Math` và `String` giúp bạn không phải viết lại các phép toán và xử lý chuỗi cơ bản.

## Ý tưởng

- **Gói `java.lang`**: được nạp tự động vào mọi chương trình Java, không cần `import`.
- **Lớp `Math`**: chứa hằng số `Math.PI`, `Math.E` và các phương thức toán học tĩnh như `abs()`, `max()`, `min()`, `pow(a, b)`, `sqrt(x)`. Gọi trực tiếp qua tên lớp `Math.sqrt(...)`.
- **Lớp `String`**: biểu diễn chuỗi ký tự (là đối tượng, không phải kiểu nguyên thủy). Một số phương thức hay dùng:
  - `length()`: độ dài chuỗi.
  - `charAt(i)`: ký tự tại vị trí `i` (tính từ `0`).
  - `substring(begin, end)`: cắt chuỗi con từ `begin` đến `end - 1`.
  - `indexOf(sub)`: vị trí xuất hiện đầu tiên của `sub` (trả `-1` nếu không có).
  - `equals(other)`: so sánh **nội dung** hai chuỗi.

## Cài đặt

```java
public class ApiMathStringDemo {
    public static void main(String[] args) {
        double areaSquare = 16.0;
        double radius = Math.sqrt(areaSquare) / 2.0;
        double areaCircle = Math.PI * Math.pow(radius, 2);
        System.out.printf("Area = %.2f%n", areaCircle);

        String text = "I'm studying THCS4";
        System.out.println("length = " + text.length());
        System.out.println("charAt(4) = " + text.charAt(4));
        System.out.println("substring(4, 12) = " + text.substring(4, 12));
        System.out.println("equals = " + text.equals("I'm studying THCS4"));
    }
}
```

## Lỗi thường gặp

- Dùng `str1 == str2` để so sánh nội dung hai chuỗi `String` (toán tử `==` chỉ so sánh địa chỉ tham chiếu, có thể trả `false` dù nội dung giống hệt nhau; phải dùng `str1.equals(str2)`).
- Nhầm cận trên trong `substring(begin, end)`: ký tự tại `end` **không** được lấy vào kết quả.

## Tự kiểm tra

1. Với `String s = "LapTrinh";`, biểu thức `s.substring(3, 8)` và `s.indexOf("Trinh")` trả về kết quả gì?

> **Đáp án**
> `s.substring(3, 8)` trả về `"Trinh"` (lấy từ chỉ số `3` đến `7`), và `s.indexOf("Trinh")` trả về `3`.
