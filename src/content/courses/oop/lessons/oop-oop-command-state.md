# Mẫu Command và State

## Vì sao cần

Khi thiết kế nút bấm trên giao diện hoặc bộ điều khiển từ xa, nút bấm không nên biết chi tiết thiết bị nào sẽ chạy; thậm chí ta muốn lưu lịch sử thao tác để **hoàn tác (Undo)** hoặc xếp hàng đợi thực thi. Ở một bài toán khác, một đối tượng (như máy bán hàng tự động hay trình phát nhạc) thay đổi hoàn toàn cách phản hồi tùy theo trạng thái hiện tại mà không muốn viết `if-else` khổng lồ. **Command** và **State** giải quyết hai bài toán hành vi này.

## Ý tưởng

- **Command (Mệnh lệnh)**: biến một yêu cầu/lời gọi phương thức thành một **đối tượng độc lập** cài đặt giao diện chung (`execute()`, và tùy chọn `undo()`). Nhờ đó ta có thể tham số hóa đối tượng gọi (Invoker) với các hành động khác nhau, xếp hàng đợi, ghi log hoặc hoàn tác.
- **State (Trạng thái)**: cho phép một đối tượng thay đổi hành vi khi trạng thái nội tại thay đổi, trông như đối tượng vừa đổi lớp. Mỗi trạng thái được đóng gói thành một lớp riêng cài giao diện `State`, và lớp ngữ cảnh (`Context`) ủy quyền xử lý cho đối tượng trạng thái hiện tại.

## Cài đặt

```java
// Command Pattern
interface Command {
    void execute();
    void undo();
}

class Light {
    void on() { System.out.println("Đèn bật"); }
    void off() { System.out.println("Đèn tắt"); }
}

class LightOnCommand implements Command {
    private final Light light;
    public LightOnCommand(Light light) { this.light = light; }
    @Override public void execute() { light.on(); }
    @Override public void undo() { light.off(); }
}
```

## Lỗi thường gặp

- Nhầm **State** với **Strategy**: cấu trúc UML gần giống nhau, nhưng trong **Strategy**, khách hàng chủ động chọn và thay đổi thuật toán từ bên ngoài; còn trong **State**, các trạng thái tự chuyển tiếp lẫn nhau (hoặc Context chuyển trạng thái) theo vòng đời nội tại.
- Để lớp `Command` ôm luôn logic nghiệp vụ thay vì chỉ đóng vai trò cầu nối gọi phương thức của đối tượng nhận (`Receiver`).

## Tự kiểm tra

1. Lợi ích lớn nhất của việc đóng gói mỗi thao tác thành một đối tượng `Command` là gì?

> **Đáp án**
> Tách rời đối tượng gửi yêu cầu (`Invoker`) khỏi đối tượng thực hiện (`Receiver`), đồng thời dễ dàng lưu danh sách các lệnh đã chạy để hỗ trợ **hoàn tác (Undo/Redo)**, xếp hàng đợi hoặc ghi nhật ký.
