# Biểu đồ lớp UML và các quan hệ

## Vì sao cần

Khi hệ thống có hàng chục lớp tương tác với nhau, mô tả bằng lời văn dễ mơ hồ còn đọc trực tiếp mã nguồn lại quá chi tiết. **UML (Unified Modeling Language)** — đặc biệt là **Biểu đồ lớp (Class Diagram)** — cung cấp ngôn ngữ trực quan chuẩn hóa để mô tả cấu trúc lớp và các mối quan hệ giữa chúng trước khi lập trình.

## Ý tưởng

Trong biểu đồ lớp UML:
- Mỗi **Lớp** là hình chữ nhật 3 ngăn: Tên lớp / Thuộc tính / Phương thức. Ký hiệu tầm nhìn: `+` (`public`), `-` (`private`), `#` (`protected`).
- **Lớp trừu tượng** viết tên *in nghiêng* (hoặc `<<abstract>>`); **Giao diện** gắn nhãn `<<interface>>`.

Các mối quan hệ chính giữa hai lớp:
1. **Kế thừa (Generalization)** (`extends`): mũi tên tam giác rỗng nét liền.
2. **Thực thi (Realization)** (`implements`): mũi tên tam giác rỗng nét đứt.
3. **Liên kết (Association)**: đường nối thể hiện lớp này giữ tham chiếu tới lớp kia (quan hệ HAS-A).
4. **Tập hợp (Aggregation — hình thoi rỗng)**: quan hệ "chứa/bộ phận" lỏng lẻo; bộ phận vẫn tồn tại độc lập khi đối tượng chứa bị hủy (ví dụ `Library` và `Book`).
5. **Hợp thành (Composition — hình thoi đặc)**: quan hệ "chứa/bộ phận" chặt chẽ; bộ phận gắn liền vòng đời với đối tượng chứa (ví dụ `Car` và `Engine`).

## Cài đặt

```java
// Composition: Car tự tạo và sở hữu Engine
public class Car {
    private final Engine engine;

    public Car(String type, int hp) {
        this.engine = new Engine(type, hp);
    }
}
```

## Lỗi thường gặp

- Nhầm chiều mũi tên kế thừa: mũi tên tam giác rỗng luôn chĩa **từ lớp con về lớp cha** (hoặc về giao diện).
- Nhầm Aggregation (hình thoi rỗng) và Composition (hình thoi đặc): hãy tự hỏi *"Nếu đối tượng cha bị xóa, đối tượng con có còn ý nghĩa tồn tại độc lập không?"*.

## Tự kiểm tra

1. Một `Department` (Khoa) có nhiều `Professor` (Giảng viên); nếu Khoa giải thể, Giảng viên vẫn tồn tại. Đây là Aggregation hay Composition?

> **Đáp án**
> Đây là **Aggregation** (hình thoi rỗng), vì vòng đời của `Professor` không bị hủy theo `Department`.
