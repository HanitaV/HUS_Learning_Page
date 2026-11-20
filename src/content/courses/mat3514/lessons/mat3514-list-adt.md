# List ADT

## Vì sao cần

Mảng tĩnh có kích thước cố định, còn bài toán thực tế thường cần thêm hoặc bớt phần tử linh hoạt theo thứ tự vị trí. `List ADT` định nghĩa một dãy có thứ tự gồm các phần tử truy cập theo chỉ số `0..size-1`, làm nền tảng cho [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) và [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list).

## Ý tưởng

Một `List<T>` chuẩn hỗ trợ các nhóm thao tác:

- Truy cập theo vị trí: `get(i)`, `set(i, x)`.
- Thêm / xóa: `add(x)`, `add(i, x)`, `remove(i)`.
- Kiểm tra: `size()`, `isEmpty()`, `contains(x)`.

## Cài đặt

```java
public interface SimpleList<T> {
    int size();
    boolean isEmpty();
    T get(int index);
    void set(int index, T value);
    void add(int index, T value);
    T remove(int index);
}
```

## So sánh hai cách cài phổ biến

| Thao tác | `ArrayList` (Mảng động) | `LinkedList` (Liên kết đơn) |
|---|---|---|
| `get(i)` | $O(1)$ | $O(n)$ |
| `add` cuối | $O(1)$ khấu hao | $O(1)$ nếu có `tail` |
| `add(0, x)` / `remove(0)` | $O(n)$ (dịch mảng) | $O(1)$ |

## Lỗi thường gặp

- Truy cập chỉ số `index < 0` hoặc `index >= size()` mà không kiểm tra biên trước khi đọc dữ liệu.
- Nhầm `size` (số phần tử hiện có) với `capacity` (sức chứa mảng cấp phát).

## Tự kiểm tra

1. Khi gọi `add(index, value)` trên danh sách đang có `size` phần tử, giá trị `index` hợp lệ nằm trong khoảng nào?

> **Đáp án**
> `0 <= index <= size` (cho phép `index == size` để chèn vào ngay sau phần tử cuối cùng).
