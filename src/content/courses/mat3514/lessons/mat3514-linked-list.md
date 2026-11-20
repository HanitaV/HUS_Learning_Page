# Danh sách liên kết đơn

## Vì sao cần

Chèn hoặc xóa ở đầu [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) luôn phải dịch $O(n)$ phần tử. Danh sách liên kết đơn lưu mỗi phần tử trong một `Node` nối bằng con trỏ `next`, cho phép chèn/xóa đầu trong $O(1)$ mà không cần cấp phát lại toàn mảng.

## Ý tưởng

- Mỗi `Node` gồm `val` và tham chiếu `next` trỏ tới nút kế tiếp (nút cuối trỏ `null`).
- Giữ `head` trỏ nút đầu tiên (và tùy chọn `tail` trỏ nút cuối để thêm cuối $O(1)$).
- **Chèn đầu:** tạo `node`, gán `node.next = head`, rồi `head = node`.
- **Chèn sau nút `prev`:** gán `node.next = prev.next` **trước**, rồi mới gán `prev.next = node`.

## Cài đặt

```java
class SinglyLinkedList {
    static class Node {
        int val;
        Node next;
        Node(int val) { this.val = val; }
    }

    private Node head;

    public void addFirst(int val) {
        Node node = new Node(val);
        node.next = head;
        head = node;
    }

    public boolean removeFirst() {
        if (head == null) return false;
        head = head.next;
        return true;
    }

    public void addAfter(Node prev, int val) {
        if (prev == null) return;
        Node node = new Node(val);
        node.next = prev.next;
        prev.next = node;
    }
}
```

## Lỗi thường gặp

- Đổi thứ tự hai dòng trong `addAfter`: viết `prev.next = node;` trước `node.next = prev.next;` làm mất dấu toàn bộ phần đuôi phía sau!
- Quên xử lý trường hợp danh sách rỗng (`head == null`) hoặc chỉ có 1 nút (`head == tail`) khi xóa.
- Dùng vòng lặp `while (cur.next != null)` khi `cur` có thể là `null` gây `NullPointerException`.

## Tự kiểm tra

1. Nếu danh sách đang có `head -> [10] -> [20] -> null`, cần những bước gán con trỏ nào để xóa nút `[20]`?

> **Đáp án**
> Duyệt tìm nút đứng trước `[20]` là `prev` (nút `[10]`), rồi gán `prev.next = prev.next.next` (tức `null`). Nếu có `tail` thì cập nhật `tail = prev`.
