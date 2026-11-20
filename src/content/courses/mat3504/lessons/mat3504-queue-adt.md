# Hàng đợi (Queue)

## Vì sao cần

Khi cần xử lý yêu cầu theo đúng thứ tự đến trước phục vụ trước (FIFO — First-In, First-Out) như hàng chờ in ấn, lập lịch tiến trình hoặc thuật toán duyệt theo chiều rộng ([Tìm kiếm theo chiều rộng (BFS)](#/courses/mat3504/lessons/mat3504-bfs)), ta dùng Hàng đợi (`Queue`).

## Ý tưởng

Queue thao tác ở hai đầu khác nhau:

- `enqueue(x)` (thêm): đưa `x` vào **cuối** hàng đợi (`rear`).
- `dequeue()` (lấy ra): lấy và xóa phần tử ở **đầu** hàng đợi (`front`).
- `first()` / `peek()`: xem phần tử đầu mà không xóa.

Có hai cách cài đạt $O(1)$ cho mọi thao tác: [mảng vòng](#/courses/mat3514/lessons/mat3514-circular-array-queue) và [danh sách liên kết](#/courses/mat3514/lessons/mat3514-linked-queue).

## Cài đặt

```java
public interface SimpleQueue<T> {
    void enqueue(T item);
    T dequeue();
    T first();
    boolean isEmpty();
    int size();
}
```

## Lỗi thường gặp

- Cài `Queue` bằng mảng thẳng (không vòng) rồi dịch trái toàn bộ mảng mỗi lần `dequeue()`, làm `dequeue()` chậm thành $O(n)$ thay vì $O(1)$.
- Gọi `dequeue()` trên hàng đợi rỗng mà không kiểm tra `isEmpty()`.

## Tự kiểm tra

1. Thực hiện `enqueue(1)`, `enqueue(2)`, `dequeue()`, `enqueue(3)`, `dequeue()`. Phần tử còn lại trong hàng đợi là gì?

> **Đáp án**
> Còn lại `[3]` (`1` ra trước, sau đó `2` ra, cuối cùng chỉ còn `3`).
