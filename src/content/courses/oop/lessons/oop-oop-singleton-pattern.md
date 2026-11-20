# Mẫu Singleton

## Vì sao cần

Một số thành phần trong hệ thống chỉ nên tồn tại **duy nhất một thể hiện** dùng chung toàn cục: bộ quản lý cấu hình, bộ ghi nhật ký (logger), kết nối CSDL hoặc quản lý hàng đợi in. Nếu cho phép gọi `new` tự do ở mọi nơi, nhiều bản sao sẽ được tạo ra gây xung đột tài nguyên hoặc sai lệch trạng thái.

## Ý tưởng

Mẫu **Singleton** đảm bảo một lớp chỉ có **tối đa một đối tượng** và cung cấp một điểm truy cập toàn cục duy nhất tới đối tượng đó:

1. Đặt hàm khởi tạo (constructor) là **`private`** để bên ngoài không thể gọi `new`.
2. Giữ một biến **`private static`** lưu thể hiện duy nhất của lớp.
3. Cung cấp phương thức **`public static getInstance()`** để trả về (hoặc khởi tạo lần đầu rồi trả về) thể hiện đó.

## Cài đặt

```java
public class AppConfig {
    private static AppConfig instance;   // thể hiện duy nhất
    private String theme = "Light";

    private AppConfig() { }              // chặn new từ bên ngoài

    public static AppConfig getInstance() {
        if (instance == null) {          // khởi tạo lười (lazy initialization)
            instance = new AppConfig();
        }
        return instance;
    }

    public String getTheme() { return theme; }
    public void setTheme(String theme) { this.theme = theme; }
}
```

## Lỗi thường gặp

- Quên đặt constructor là `private` (để `public` hoặc mặc định): bên ngoài vẫn tạo thêm được đối tượng mới bằng `new`.
- Trong môi trường đa luồng (multi-threading), hai luồng cùng kiểm tra `instance == null` một lúc có thể tạo ra 2 thể hiện; cần đồng bộ hóa (`synchronized`) hoặc khởi tạo sẵn (`eager`) nếu dùng đa luồng.
- Lạm dụng Singleton như biến toàn cục (global state), làm các lớp phụ thuộc ngầm vào nhau và khó viết kiểm thử đơn vị.

## Tự kiểm tra

1. Nếu một lớp Singleton có constructor `private`, làm thế nào lớp khác lấy được đối tượng của nó?

> **Đáp án**
> Gọi phương thức tĩnh công khai, thường đặt tên là `getInstance()`, thông qua tên lớp (ví dụ `AppConfig.getInstance()`).
