# Các biến thể danh sách liên kết

## Vì sao cần

Trong [danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list), để xóa một nút cho trước hoặc đi lùi về trước, ta phải duyệt lại từ `head` mất $O(n)$. Các biến thể như danh sách liên kết đôi (Doubly Linked List) và danh sách vòng (Circular Linked List) khắc phục điều này.

## Ý tưởng

- **Liên kết đôi:** mỗi nút có thêm con trỏ `prev` trỏ ngược về nút trước; xóa nút `p` bất kỳ khi đã có tham chiếu `p` chỉ tốn $O(1)$.
- **Liên kết vòng:** `tail.next` trỏ ngược về `head` thay vì `null`, tiện cho xoay vòng (round-robin) hoặc gộp hai danh sách trong $O(1)$.
- **Nút giả (Sentinel / Dummy head & tail):** đặt hai nút giả ở đầu và cuối để mọi phép chèn/xóa đều xử lý đồng nhất, không cần tách `if (head == null)`.

## Cài đặt

```java
class DoublyLinkedList {
    static class Node {
        int val;
        Node prev, next;
        Node(int val) { this.val = val; }
    }

    private final Node head = new Node(0); // dummy head
    private final Node tail = new Node(0); // dummy tail

    DoublyLinkedList() {
        head.next = tail;
        tail.prev = head;
    }

    public void insertBefore(Node pos, int val) {
        Node node = new Node(val);
        Node before = pos.prev;
        node.prev = before;
        node.next = pos;
        before.next = node;
        pos.prev = node;
    }

    public void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}
```

## Lỗi thường gặp

- Quên cập nhật cả hai chiều (`prev` lẫn `next`) khi chèn hoặc xóa ở liên kết đôi.
- Khi duyệt danh sách vòng bằng `while (cur != head)` nhưng đặt `cur = head` ngay đầu vòng lặp khiến vòng lặp không chạy lần nào (phải dùng `do { ... } while (cur != head)`).

## Tự kiểm tra

1. Dùng nút giả `dummy head` và `dummy tail` giúp loại bỏ những trường hợp đặc biệt nào khi viết hàm `remove(node)`?

> **Đáp án**
> Loại bỏ hoàn toàn kiểm tra `node == head`, `node == tail`, hay danh sách chỉ còn 1 phần tử trở thành rỗng, vì `node.prev` và `node.next` luôn khác `null`.
