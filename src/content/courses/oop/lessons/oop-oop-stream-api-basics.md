# Java Stream API: bản chất Lazy và Pipeline

## Vì sao cần

Trước Java 8, để lọc và tính tổng các phần tử thỏa mãn điều kiện trong một `List`, ta phải tự viết vòng lặp `for` với biến tạm và câu lệnh `if` lồng nhau (duyệt ngoài — *external iteration*), vừa dài dòng vừa khó tận dụng đa nhân CPU. **Java Stream API** giới thiệu cách xử lý dữ liệu theo đường ống khai báo (duyệt trong — *internal iteration*).

## Ý tưởng

- **Stream** là một **luồng phần tử** hỗ trợ các phép toán tổng hợp tuần tự hoặc song song (`stream()` / `parallelStream()`).
- Khác biệt giữa **Stream** và **Collection**:
  1. **Không lưu trữ dữ liệu**: Stream chỉ lấy dữ liệu từ nguồn (`Collection`, mảng, I/O, bộ sinh `Stream.generate`/`iterate`).
  2. **Không làm biến đổi nguồn**: các phép toán trên Stream tạo ra Stream/kết quả mới, không sửa tập hợp gốc.
  3. **Đánh giá lười (Lazy evaluation)**: các phép toán trung gian chưa chạy ngay khi khai báo, chỉ thực thi khi gặp phép toán kết thúc (terminal operation).
  4. **Dùng một lần**: một Stream sau khi đã đóng bởi phép toán kết thúc không thể duyệt lại lần hai.

Cấu trúc một **Stream pipeline**: `Nguồn` $\rightarrow$ `0..N phép trung gian` $\rightarrow$ `1 phép kết thúc`.

## Cài đặt

```java
import java.util.List;
import java.util.stream.IntStream;

public class StreamBasicsDemo {
    public static void main(String[] args) {
        List<Integer> nums = List.of(5, 12, 8, 20, 3);
        int sum = nums.stream()
                      .filter(x -> x > 10)        // phép trung gian (lazy)
                      .mapToInt(Integer::intValue)
                      .sum();                     // phép kết thúc kích hoạt chạy
        System.out.println(sum);                  // 32

        IntStream.range(1, 5).forEach(System.out::print);   // 1234
    }
}
```

## Lỗi thường gặp

- Tái sử dụng một biến `Stream<T>` sau khi đã gọi phép toán kết thúc (`forEach`, `collect`, `count`): gây `IllegalStateException: stream has already been operated upon or closed`.
- Quên gọi phép toán kết thúc: toàn bộ chuỗi `filter`/`map` không hề thực thi vì tính chất lazy.

## Tự kiểm tra

1. Gọi `list.stream().filter(x -> x > 0)` có làm thay đổi nội dung của `list` ban đầu không?

> **Đáp án**
> **Không.** Stream không bao giờ biến đổi cấu trúc dữ liệu nguồn; hơn nữa `filter` là phép trung gian nên thậm chí chưa chạy nếu chưa có phép toán kết thúc.
