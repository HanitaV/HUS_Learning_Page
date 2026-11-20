# Lớp gốc Object và hợp đồng equals/hashCode

## Vì sao cần

Mọi lớp trong Java đều trực tiếp hoặc gián tiếp kế thừa `java.lang.Object`. Lớp gốc này định nghĩa các dịch vụ cơ bản như biểu diễn chuỗi (`toString`), so sánh bằng nhau (`equals`), mã băm (`hashCode`) và nhân bản (`clone`). Nếu ghi đè không đúng hợp đồng của `Object`, đối tượng sẽ hoạt động sai khi đưa vào `HashSet`, `HashMap` hoặc khi in ra màn hình.

## Ý tưởng

Các phương thức cốt lõi của `java.lang.Object`:

1. **`toString()`**: mặc định trả về `TenLop@MaBamHexa`. Nên ghi đè để trả về thông tin có ý nghĩa.
2. **`equals(Object obj)`**: mặc định chỉ so sánh địa chỉ tham chiếu (`==`). Khi cần so sánh theo **nội dung** (giá trị thuộc tính), ta phải ghi đè `equals`.
3. **`hashCode()`**: trả về số nguyên đại diện cho đối tượng dùng trong bảng băm (`HashMap`, `HashSet`). **Hợp đồng bắt buộc**: nếu `a.equals(b)` là `true` thì `a.hashCode() == b.hashCode()` **phải** đúng. Do đó, hễ ghi đè `equals()` thì **bắt buộc phải ghi đè `hashCode()`**.
4. **`clone()`**: tạo bản sao đối tượng (thường kết hợp giao diện `Cloneable`); mặc định thực hiện sao chép nông (shallow copy).

## Cài đặt

```java
import java.util.Objects;

public class Point {
    private final int x, y;

    public Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point)) return false;
        Point other = (Point) o;
        return x == other.x && y == other.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);   // nhất quán với các trường dùng trong equals
    }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}
```

## Lỗi thường gặp

- Viết `public boolean equals(Point other)` thay vì `public boolean equals(Object other)`: đây là **nạp chồng (overload)** chứ không phải **ghi đè (override)** `Object.equals(Object)`, nên các cấu trúc như `List.contains()` sẽ không gọi tới hàm của bạn.
- Ghi đè `equals()` nhưng quên ghi đè `hashCode()`: hai đối tượng bằng nhau theo `equals` lại có mã băm khác nhau, khiến `HashSet` chứa trùng hoặc `HashMap` tìm không thấy khóa.

## Tự kiểm tra

1. Nếu `a.hashCode() == b.hashCode()`, ta có thể kết luận `a.equals(b)` luôn là `true` không?

> **Đáp án**
> **Không.** Hai đối tượng khác nhau vẫn có thể trùng mã băm (va chạm băm — hash collision). Hợp đồng chỉ yêu cầu chiều thuận: `a.equals(b) == true` $\Rightarrow$ `a.hashCode() == b.hashCode()`.
