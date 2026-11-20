# Constructor, nạp chồng, this và static

## Vì sao cần

Khi tạo một đối tượng bằng `new`, ta cần đảm bảo các thuộc tính của nó được khởi tạo ở trạng thái hợp lệ ngay từ đầu. **Hàm khởi tạo (Constructor)** giải quyết việc này. Ngoài ra, Java cung cấp từ khóa `this` để phân biệt thuộc tính với tham số trùng tên và từ khóa `static` cho các thành viên dùng chung ở mức lớp.

## Ý tưởng

- **Constructor**: tên trùng với tên lớp, **không có kiểu trả về** (kể cả `void`). Nếu bạn không viết constructor nào, trình biên dịch tự sinh một constructor mặc định không tham số; nhưng hễ bạn tự viết ít nhất một constructor, constructor mặc định sẽ không còn tự sinh nữa.
- **Nạp chồng (Overloading)**: một lớp có thể có nhiều phương thức hoặc nhiều constructor cùng tên nhưng **khác danh sách tham số** (số lượng hoặc kiểu).
- **Từ khóa `this`**: tham chiếu tới đối tượng hiện tại đang gọi phương thức; dùng để truy cập thuộc tính bị che khuất (`this.name = name`) hoặc gọi constructor khác cùng lớp (`this(...)`, phải đặt ở dòng đầu tiên).
- **Thành viên `static`**: thuộc về lớp, gọi qua `TenLop.tenThanhVien`, không cần tạo đối tượng (ví dụ `Math.sqrt(...)`).

## Cài đặt

```java
public class Rectangle {
    private double width;
    private double height;

    public Rectangle() {
        this(1.0, 1.0);              // gọi constructor 2 tham số
    }

    public Rectangle(double width, double height) {
        this.width = width;          // this phân biệt thuộc tính và tham số
        this.height = height;
    }

    public static double area(double w, double h) {
        return w * h;                // phương thức static không dùng this
    }
}
```

## Lỗi thường gặp

- Viết kiểu trả về cho constructor (ví dụ `public void Rectangle()`): Java sẽ hiểu đó là một phương thức bình thường chứ không phải constructor.
- Quên viết lại constructor không tham số sau khi đã định nghĩa constructor có tham số, khiến lời gọi `new Rectangle()` bị lỗi biên dịch.
- Dùng `this` hoặc gọi biến instance bên trong phương thức `static`: lỗi vì phương thức `static` không gắn với đối tượng cụ thể nào.

## Tự kiểm tra

1. Trong một constructor, có thể gọi `this(...)` ở dòng thứ hai sau một lệnh `System.out.println(...)` không?

> **Đáp án**
> Không. Lời gọi `this(...)` (cũng như `super(...)`) bắt buộc phải là **câu lệnh đầu tiên** trong thân constructor.
