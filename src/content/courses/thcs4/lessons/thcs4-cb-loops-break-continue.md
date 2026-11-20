# Cấu trúc lặp while, do-while, for

## Vì sao cần

Khi cần thực hiện cùng một thao tác nhiều lần (duyệt dãy số, kiểm tra số nguyên tố, lặp tới khi nhập đúng dữ liệu), cấu trúc lặp giúp viết một khối lệnh duy nhất và chạy lại có kiểm soát.

## Ý tưởng

Java cung cấp 3 cấu trúc lặp, đều lặp khi điều kiện còn `true`:

- **`while (condition)`**: kiểm tra điều kiện **trước** khi vào thân; phù hợp khi chưa biết trước số lần lặp.
- **`do { ... } while (condition);`**: thực hiện thân **trước** một lần rồi mới kiểm tra điều kiện; thân luôn chạy ít nhất 1 lần.
- **`for (init; condition; step)`**: kiểm tra điều kiện trước; gọn nhất khi biết số bước hoặc có biến đếm rõ ràng.

Hai lệnh điều khiển luồng trong vòng lặp:
- `break`: thoát ngay khỏi vòng lặp hiện tại.
- `continue`: bỏ qua phần còn lại của lượt lặp hiện tại và chuyển sang lượt tiếp theo.

Luôn đảm bảo điều kiện dừng sẽ đạt được sau hữu hạn bước để tránh vòng lặp vô hạn.

## Cài đặt

```java
public class LoopDemo {
    public static void main(String[] args) {
        // Tìm số lớn nhất có 3 chữ số chia hết cho 23
        int k = 999;
        while (k >= 100) {
            if (k % 23 == 0) {
                System.out.println(k + " chia het cho 23");
                break;
            }
            k--;
        }

        // Lặp với continue: chỉ in số lẻ từ 1 đến 9
        for (int i = 1; i <= 9; i++) {
            if (i % 2 == 0) continue;
            System.out.print(i + " ");
        }
    }
}
```

## Lỗi thường gặp

- Quên cập nhật biến điều khiển trong `while` hoặc `do-while`, gây vòng lặp vô hạn.
- Nhầm dấu `<` với `<=` (lỗi lệch 1 phần tử — off-by-one) khi đếm từ `0` hoặc `1`.
- Quên dấu `;` sau `while (condition);` của cấu trúc `do ... while`.

## Tự kiểm tra

1. Với `int i = 1;`, vòng `while (i < 1)` và `do { i++; } while (i < 1);` mỗi vòng chạy thân bao nhiêu lần?

> **Đáp án**
> Vòng `while` kiểm tra `1 < 1` sai ngay từ đầu nên chạy `0` lần. Vòng `do-while` chạy thân `1` lần trước (tăng `i` thành `2`), sau đó kiểm tra `2 < 1` sai nên dừng.
