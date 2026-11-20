# Năm nguyên lý thiết kế SOLID

## Vì sao cần

Code chạy đúng ở thời điểm viết chưa đủ; phần mềm thực tế luôn thay đổi yêu cầu. Nếu các lớp phụ thuộc chằng chịt và ôm đồm nhiều trách nhiệm, mỗi lần thêm tính năng mới sẽ kéo theo hàng loạt lỗi dây chuyền. Bộ 5 nguyên lý **SOLID** (do Robert C. Martin tổng hợp) là kim chỉ nam giúp thiết kế hướng đối tượng dễ bảo trì và mở rộng.

## Ý tưởng

Năm nguyên lý SOLID gồm:

1. **S — Single Responsibility Principle (Trách nhiệm đơn lẻ)**: mỗi lớp chỉ nên có **một** lý do để thay đổi (tách riêng logic tính toán, lưu trữ, in ấn).
2. **O — Open/Closed Principle (Đóng/Mở)**: thực thể phần mềm nên **mở để mở rộng**, nhưng **đóng để sửa đổi** (thêm hình mới bằng cách tạo lớp mới cài `Shape`, không sửa `if-else` trong lớp tính tổng diện tích).
3. **L — Liskov Substitution Principle (Thay thế Liskov)**: đối tượng lớp con phải thay thế được lớp cha mà không làm sai lệch hành vi kỳ vọng của chương trình.
4. **I — Interface Segregation Principle (Phân tách giao diện)**: không ép lớp phải cài đặt những phương thức nó không dùng; nhiều giao diện nhỏ chuyên biệt tốt hơn một giao diện "béo".
5. **D — Dependency Inversion Principle (Đảo ngược phụ thuộc)**: mô-đun cấp cao không nên phụ thuộc trực tiếp vào mô-đun cấp thấp cụ thể; cả hai nên phụ thuộc vào **trừu tượng** (`interface` / `abstract class`).

## Cài đặt

```java
// Tuân thủ OCP & DIP: AreaCalculator phụ thuộc vào trừu tượng Shape
public interface Shape {
    double area();
}

public class AreaCalculator {
    public double sum(Shape[] shapes) {
        double total = 0;
        for (Shape s : shapes) total += s.area();
        return total;
    }
}
```

## Lỗi thường gặp

- Viết một `interface` khổng lồ (ví dụ `Worker` có cả `work()`, `eat()`, `fly()`) rồi ép lớp `Robot` cài đặt, khiến `Robot` phải để trống hoặc ném ngoại lệ ở `eat()` — vi phạm **ISP** và **LSP**.
- Tạo trực tiếp đối tượng cụ thể bằng `new MySQLDatabase()` bên trong lớp nghiệp vụ cấp cao thay vì nhận qua giao diện `Database` — vi phạm **DIP**.

## Tự kiểm tra

1. Nếu một lớp `Student` vừa làm nhiệm vụ lưu thông tin sinh viên, vừa tự kết nối CSDL để lưu và tự định dạng xuất ra PDF, nó đang vi phạm nguyên lý nào rõ nhất trong SOLID?

> **Đáp án**
> Vi phạm **Single Responsibility Principle (SRP)**, vì lớp đang gánh 3 trách nhiệm khác nhau (mô hình dữ liệu, lưu trữ CSDL, xuất báo cáo).
