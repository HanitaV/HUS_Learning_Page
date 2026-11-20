# Bài tập: Fraction, SimpleArrayList, SimpleLinkedList

## Mục tiêu thực hành

Phiếu bài tập yêu cầu cài đặt kiểu `Fraction` (phân số tối giản) và hai lớp `SimpleArrayList`, `SimpleLinkedList` cùng tuân theo một giao diện `ListInterface<T>`, sau đó dùng danh sách để giải bài `WordCount` (đếm tần suất từ).

## Khung code thực hành

```java
public interface ListInterface<T> extends Iterable<T> {
    void add(T data);
    T get(int i);
    void set(int i, T data);
    void remove(T data);
    boolean isContain(T data);
    int size();
    boolean isEmpty();
}
```

Gợi ý cài `remove(T data)` trên `SimpleLinkedList`:

```java
public void remove(T data) {
    while (head != null && head.data.equals(data)) {
        head = head.next;
        n--;
    }
    if (head == null) { tail = null; return; }
    Node cur = head;
    while (cur.next != null) {
        if (cur.next.data.equals(data)) {
            cur.next = cur.next.next;
            n--;
        } else {
            cur = cur.next;
        }
    }
    tail = cur;
}
```

## Checklist kiểm thử bắt buộc

- **Danh sách rỗng & 1 phần tử:** gọi `remove`, `get(0)`, `isEmpty()`.
- **Xóa phần tử đầu, giữa, cuối:** kiểm tra `head`, `tail` và `size()` sau khi xóa.
- **Giá trị trùng liên tiếp:** khi xóa mọi phần tử bằng `data`, không tăng `cur = cur.next` ngay sau khi vừa xóa `cur.next`.
- **`Fraction`:** kiểm tra mẫu số `0`, phân số âm (đưa dấu `-` lên tử) và rút gọn bằng `gcd`.

## Tự kiểm tra

1. Trong đoạn code `remove(T data)` ở trên, vì sao khi `cur.next.data.equals(data)` lại **không** viết `cur = cur.next;` ở nhánh `if`?

> **Đáp án**
> Vì sau khi bỏ `cur.next`, nút kế tiếp mới chính là `cur.next.next`. Nếu tăng `cur = cur.next`, ta sẽ bỏ sót không kiểm tra nút vừa được kéo lên nếu nó cũng bằng `data`.
