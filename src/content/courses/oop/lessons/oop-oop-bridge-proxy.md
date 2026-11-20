# Mẫu Bridge và Proxy

## Vì sao cần

Đôi khi một hệ thống phát triển theo hai chiều độc lập (ví dụ *loại thiết bị* `TV`/`Radio` và *loại điều khiển* `BasicRemote`/`AdvancedRemote`), nếu dùng kế thừa sẽ tạo ra ma trận lớp con khổng lồ. Trong tình huống khác, ta muốn kiểm soát quyền truy cập, ghi log hoặc trì hoãn khởi tạo một đối tượng nặng. **Bridge** và **Proxy** giải quyết hai bài toán cấu trúc này.

## Ý tưởng

- **Bridge (Cầu nối)**: tách phần **trừu tượng (Abstraction)** khỏi phần **cài đặt (Implementation)** để hai nhánh có thể mở rộng độc lập nhau. Thay vì kế thừa chéo, lớp trừu tượng giữ một tham chiếu tới giao diện cài đặt ("cầu nối").
- **Proxy (Đại diện)**: cung cấp một đối tượng thay thế giữ cùng giao diện với đối tượng thật (`RealSubject`) để kiểm soát truy cập tới đối tượng thật — ví dụ:
  - *Virtual Proxy*: trì hoãn tạo đối tượng nặng cho đến khi thực sự cần.
  - *Protection Proxy*: kiểm tra quyền truy cập trước khi chuyển tiếp yêu cầu.
  - *Caching Proxy*: lưu đệm kết quả để tránh gọi lại thao tác tốn kém.

## Cài đặt

```java
// Bridge: Remote (Abstraction) giữ tham chiếu tới Device (Implementation)
interface Device { void enable(); }

class Tv implements Device {
    @Override public void enable() { System.out.println("TV bật"); }
}

class RemoteControl {
    protected final Device device;
    public RemoteControl(Device device) { this.device = device; }
    public void turnOn() { device.enable(); }
}
```

## Lỗi thường gặp

- Nhầm **Proxy** với **Decorator**: cả hai đều bọc đối tượng cùng giao diện, nhưng Decorator nhằm **thêm trách nhiệm/hành vi** có thể chồng nhiều lớp, còn Proxy nhằm **kiểm soát truy cập hoặc quản lý vòng đời** của đối tượng thật.
- Nhầm **Bridge** với **Adapter**: Bridge được thiết kế **từ đầu** để hai chiều phát triển độc lập, còn Adapter dùng **sau này** để nối hai giao diện vốn không tương thích.

## Tự kiểm tra

1. Nếu bạn viết một lớp `CachedImage` bọc `HeavyImage` để chỉ tải ảnh từ đĩa khi `display()` được gọi lần đầu, đó là mẫu nào?

> **Đáp án**
> Đó là **Proxy** (cụ thể là Virtual / Caching Proxy), vì nó làm đại diện kiểm soát việc khởi tạo và truy cập đối tượng ảnh nặng.
