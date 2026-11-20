# Toán tử, phép gán và biểu thức

## Vì sao cần

Khai báo biến mới chỉ tạo chỗ chứa; để tính toán, so sánh điều kiện hay ghép thông báo, chương trình cần các toán tử và biểu thức với thứ tự thực hiện rõ ràng.

## Ý tưởng

Java cung cấp các nhóm toán tử chính:

- **Phép gán** (`=`): tính giá trị biểu thức ở vế phải trước rồi mới gán vào biến ở vế trái.
- **Số học**: `+`, `-`, `*`, `/`, `%` (chia lấy dư). Với phép gán kết hợp `var opt= exp` (như `a *= b + 1`), biểu thức vế phải được bọc ngoặc ngầm: `a = a * (b + 1)`.
- **Quan hệ và so sánh**: `<`, `<=`, `>`, `>=`, `==`, `!=`.
- **Logic**: `&&` (AND), `||` (OR), `!` (NOT).
- **Ghép xâu**: toán tử `+` khi một toán hạng là `String`.
- **Tăng/giảm một ngôi** (`++`, `--`):
  - Tiền tố (`++x`): tăng `x` trước rồi trả về giá trị mới.
  - Hậu tố (`x++`): trả về giá trị cũ trước rồi mới tăng `x`.

Thứ tự ưu tiên: toán tử một ngôi (`++`, `--`, `!`) xét trước, rồi đến `*`, `/`, `%`, tiếp theo là `+`, `-`, sau đó là so sánh và cuối cùng là phép gán. Nên dùng `()` để làm rõ nhóm biểu thức.

## Cài đặt

```java
public class DataTypesOps {
    public static void main(String[] args) {
        int counter = 5;
        int x = counter++; // x = 5, sau đó counter thành 6
        int y = ++counter; // counter thành 7, rồi y = 7
        System.out.println("x = " + x + ", y = " + y);

        int a = 3, b = 4;
        a *= b + 1; // tương đương a = a * (b + 1) = 15
        System.out.println("a = " + a);
    }
}
```

## Lỗi thường gặp

- Nhầm `a *= b + 1` thành `a = a * b + 1` thay vì `a = a * (b + 1)`.
- Nhầm lẫn kết quả giữa `x = counter++` và `y = ++counter`.
- Viết `=` (gán) thay cho `==` (so sánh bằng) trong biểu thức điều kiện.

## Tự kiểm tra

1. Sau đoạn lệnh `int k = 10; int m = k-- - --k;`, giá trị của `k` và `m` là bao nhiêu?

> **Đáp án**
> `k--` trả về `10` rồi giảm `k` xuống `9`. Tiếp theo `--k` giảm `k` xuống `8` rồi trả về `8`. Vậy `m = 10 - 8 = 2` và `k = 8`.
