# Chain of Responsibility, Mediator và Visitor

## Vì sao cần

Trong các hệ thống lớn, ta còn gặp ba tình huống phức tạp: (1) một yêu cầu cần đi qua nhiều bộ kiểm tra tuần tự (xác thực $\rightarrow$ phân quyền $\rightarrow$ xử lý); (2) nhiều thành phần giao tiếp chéo nhau tạo mạng nhện phụ thuộc; (3) cần thêm phép toán mới lên một cấu trúc đối tượng ổn định mà không sửa mã các lớp phần tử. **Chain of Responsibility**, **Mediator** và **Visitor** giải quyết ba bài toán này.

## Ý tưởng

1. **Chain of Responsibility (Chuỗi trách nhiệm)**: truyền yêu cầu dọc theo một chuỗi các bộ xử lý (`Handler`). Mỗi `Handler` quyết định tự xử lý yêu cầu hoặc chuyển tiếp cho `next` trong chuỗi — tránh gắn chặt người gửi với một người nhận cụ thể.
2. **Mediator (Trung gian)**: giảm phụ thuộc hỗn loạn giữa nhiều đối tượng bằng cách cấm chúng gọi trực tiếp nhau, buộc mọi giao tiếp đi qua một đối tượng trung gian (`Mediator`) (ví dụ hộp thoại điều phối nút bấm và ô nhập liệu).
3. **Visitor (Khách thăm)**: tách rời thuật toán ra khỏi cấu trúc đối tượng mà nó tác động (dùng cơ chế *double dispatch*: phần tử gọi `visitor.visit(this)`). Dễ dàng thêm phép toán mới (một `Visitor` mới) mà không sửa các lớp phần tử.

## Cài đặt

```java
// Chain of Responsibility
abstract class Handler {
    protected Handler next;
    public Handler setNext(Handler next) { this.next = next; return next; }
    public abstract void handle(int level);
}

class AuthHandler extends Handler {
    @Override
    public void handle(int level) {
        if (level <= 1) System.out.println("AuthHandler đã xử lý");
        else if (next != null) next.handle(level);
    }
}
```

## Lỗi thường gặp

- Trong Chain of Responsibility, quên xử lý trường hợp **cuối chuỗi** (`next == null`) khiến yêu cầu rơi vào im lặng mà không có thông báo.
- Dùng Visitor khi cấu trúc các lớp phần tử thay đổi liên tục: mỗi lần thêm một lớp phần tử mới phải sửa lại toàn bộ giao diện `Visitor` và mọi lớp Visitor đang có.

## Tự kiểm tra

1. Nếu một hộp thoại có 6 thành phần giao diện (`Checkbox`, `Button`, `TextBox`...) phụ thuộc chéo vào trạng thái của nhau, nên dùng mẫu nào để gỡ rối?

> **Đáp án**
> Mẫu **Mediator**, để gom toàn bộ logic điều phối tương tác giữa các thành phần vào một lớp trung gian duy nhất.
