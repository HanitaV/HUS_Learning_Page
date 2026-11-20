# Hàng đợi mảng vòng

## Vì sao cần

Nếu cài [Hàng đợi (Queue)](#/courses/mat3514/lessons/mat3514-queue-adt) trên mảng thẳng bằng cách tăng chỉ số `front++` khi `dequeue` và `rear++` khi `enqueue`, phần đầu mảng sẽ bị bỏ trống lãng phí và nhanh chóng chạm biên dù mảng vẫn còn chỗ. Mảng vòng quay chỉ số về đầu mảng bằng phép chia lấy dư `% capacity`.

## Ý tưởng

Giữ 3 biến: `data` (mảng sức chứa `cap`), `front` (chỉ số đầu), `size` (số phần tử hiện có).

- Vị trí ghi tiếp theo: `rear = (front + size) % cap`.
- Khi `dequeue()`: đọc `data[front]`, cập nhật `front = (front + 1) % cap`, giảm `size--`.
- Khi `size == cap`: hàng đợi đầy (cần mở rộng mảng và sắp lại từ `front`, hoặc báo đầy tùy hợp đồng).

## Cài đặt

```java
class CircularQueue {
    private int[] data;
    private int front = 0;
    private int size = 0;

    CircularQueue(int capacity) {
        data = new int[capacity];
    }

    public void enqueue(int x) {
        if (size == data.length) throw new IllegalStateException("Queue đầy");
        int rear = (front + size) % data.length;
        data[rear] = x;
        size++;
    }

    public int dequeue() {
        if (size == 0) throw new IllegalStateException("Queue rỗng");
        int val = data[front];
        front = (front + 1) % data.length;
        size--;
        return val;
    }
}
```

## Lỗi thường gặp

- Khi mở rộng mảng (resize) lại chép nguyên `Arrays.copyOf(data, cap * 2)` mà không duỗi thẳng từ `front`: làm hỏng thứ tự FIFO khi `front > rear`.
- Dùng chung `front == rear` cho cả trạng thái rỗng và đầy mà không giữ biến `size` (hoặc không chừa 1 ô trống).

## Tự kiểm tra

1. Mảng có `cap = 5`, `front = 3`, `size = 3`. Phần tử tiếp theo được `enqueue` sẽ ghi vào chỉ số nào?

> **Đáp án**
> `(3 + 3) % 5 = 1`. Phần tử mới ghi vào `data[1]`.
