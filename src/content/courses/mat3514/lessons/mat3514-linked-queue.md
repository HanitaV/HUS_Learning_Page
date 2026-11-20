# Hàng đợi bằng danh sách liên kết

## Vì sao cần

[Hàng đợi mảng vòng](#/courses/mat3514/lessons/mat3514-circular-array-queue) có sức chứa cố định (hoặc phải cấp phát lại khi đầy). Khi số phần tử biến động mạnh, ta cài [Hàng đợi (Queue)](#/courses/mat3514/lessons/mat3514-queue-adt) bằng [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list) có hai con trỏ `head` và `tail` để `enqueue` và `dequeue` luôn $O(1)$ không cần resize.

## Ý tưởng

- `head` trỏ phần tử đầu (nơi `dequeue`).
- `tail` trỏ phần tử cuối (nơi `enqueue`).
- Khi `enqueue(x)`: tạo nút mới, nối `tail.next = node` rồi cập nhật `tail = node` (nếu rỗng thì `head = tail = node`).
- Khi `dequeue()`: lấy `head.val`, dịch `head = head.next`; nếu `head == null` thì **phải đặt `tail = null`**.

## Cài đặt

```java
class LinkedQueue {
    static class Node {
        int val;
        Node next;
        Node(int val) { this.val = val; }
    }

    private Node head, tail;
    private int size = 0;

    public void enqueue(int x) {
        Node node = new Node(x);
        if (tail == null) {
            head = tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
        size++;
    }

    public int dequeue() {
        if (head == null) throw new IllegalStateException("Queue rỗng");
        int val = head.val;
        head = head.next;
        if (head == null) tail = null;
        size--;
        return val;
    }
}
```

## Lỗi thường gặp

- Quên cập nhật `tail = null` khi `dequeue()` phần tử cuối cùng: lần `enqueue()` tiếp theo nối vào nút cũ đã bị bỏ, làm `head` vẫn `null`!
- Nhầm đầu thêm và đầu lấy: nếu `dequeue` ở `tail` thì mỗi lần phải duyệt từ `head` để tìm nút kế cuối mất $O(n)$.

## Tự kiểm tra

1. Điều gì xảy ra nếu chỉ viết `head = head.next;` trong `dequeue()` khi hàng đợi còn 1 phần tử rồi sau đó gọi `enqueue(5)`?

> **Đáp án**
> `head` trở thành `null` nhưng `tail` vẫn trỏ tới nút cũ; lần `enqueue(5)` thấy `tail != null` nên chỉ nối vào nút cũ mà `head` vẫn là `null`, khiến hàng đợi bị mất dữ liệu.
