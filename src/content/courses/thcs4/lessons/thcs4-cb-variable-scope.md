# Phạm vi hiệu lực của biến

## Vì sao cần

Khi viết nhiều phương thức và khối lệnh lồng nhau, bạn cần biết biến nào đang tồn tại ở đâu để tránh lỗi không tìm thấy biến hoặc vô tình làm ghi đè giá trị ngoài ý muốn.

## Ý tưởng

Quy tắc phạm vi hiệu lực (scope) của biến cục bộ trong Java:

1. **Tham số của phương thức**: có hiệu lực trong toàn bộ thân phương thức đó. Với kiểu nguyên thủy, thay đổi giá trị tham số bên trong phương thức **không** làm thay đổi biến gốc ở nơi gọi.
2. **Biến khai báo trong khối `{ ... }`**: chỉ có hiệu lực từ vị trí khai báo đến dấu đóng ngoặc `}` tương ứng gần nhất.
3. Không được khai báo lại một biến trùng tên trong khối lồng bên trong nếu biến đó đã tồn tại ở khối bao ngoài cùng phương thức.

## Cài đặt

```java
public class SquareChange {
    public static void printSquare(int x) {
        System.out.println("printSquare x = " + x);
        x = x * x; // chỉ thay đổi bản sao x trong printSquare
        System.out.println("printSquare x = " + x);
    }

    public static void main(String[] args) {
        int x = 5;
        System.out.println("main x = " + x); // 5
        printSquare(x);                      // in 5 rồi 25
        System.out.println("main x = " + x); // vẫn là 5
    }
}
```

Ví dụ lỗi phạm vi khối lệnh:

```java
int x = 5;
if (x == 5) {
    // int x = 6; // LỖI: x đã được khai báo ở phạm vi ngoài
    int y = 72;   // y chỉ tồn tại trong khối if
}
// System.out.println(y); // LỖI: không tìm thấy biến y
```

## Lỗi thường gặp

- Truy cập biến được khai báo bên trong khối `if` hoặc vòng `for` sau khi khối đó đã đóng `}`.
- Khai báo lại biến cùng tên bên trong khối con của cùng một phương thức.
- Tưởng rằng gán lại giá trị cho tham số nguyên thủy bên trong hàm sẽ làm thay đổi biến truyền vào ở `main`.

## Tự kiểm tra

1. Trong `SquareChange`, nếu đổi tên tham số của `printSquare` thành `n` thay vì `x`, giá trị biến `x` trong `main` sau lời gọi `printSquare(x)` có thay đổi không?

> **Đáp án**
> Vẫn không thay đổi (`x` trong `main` vẫn bằng `5`), vì kiểu `int` được truyền theo giá trị: `n` chỉ nhận bản sao giá trị của `x`.
