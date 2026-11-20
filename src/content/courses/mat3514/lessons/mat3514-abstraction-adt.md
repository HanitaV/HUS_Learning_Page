# Kiểu dữ liệu trừu tượng (ADT)

## Vì sao cần

Khi viết chương trình lớn, nếu phần gọi hàm phụ thuộc trực tiếp vào biến nội bộ (như mảng hay con trỏ), chỉ cần đổi cách lưu trữ là toàn bộ mã gọi phải sửa theo. Kiểu dữ liệu trừu tượng (ADT) tách **hợp đồng sử dụng** (dữ liệu gồm gì, có những phép toán nào) khỏi **cách cài đặt bên trong**.

## Ý tưởng

- **Giao diện (Interface / ADT):** mô tả các phép toán, đầu vào, đầu ra và điều kiện lỗi (ví dụ `push`, `pop`, `isEmpty` của [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt)).
- **Cài đặt (Implementation):** chọn mảng ([Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list)) hay con trỏ liên kết ([Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list)) để thực hiện hợp đồng đó.
- Người dùng ADT chỉ cần biết gọi phương thức nào và chi phí ra sao, không cần quan tâm bên trong dùng mảng hay nút liên kết.

## Cài đặt

```java
public interface SimpleStack<T> {
    void push(T item);
    T pop();
    T top();
    boolean isEmpty();
    int size();
}
```

Với cùng một `interface SimpleStack<T>`, ta có thể hoán đổi giữa `ArrayStack` và `LinkedStack` mà không phải sửa dòng code nào ở hàm `main`.

## Lỗi thường gặp

- Trộn lẫn chi tiết cài đặt vào hợp đồng ADT (ví dụ để lộ mảng nội bộ `public int[] data`), khiến người dùng tự sửa mảng làm hỏng trạng thái `size`.
- Không quy định rõ hành vi khi cấu trúc rỗng (`pop()` trên stack rỗng ném ngoại lệ hay trả `null`).

## Tự kiểm tra

1. Nếu đổi `ArrayList` sang `LinkedList` thông qua `interface List`, đoạn code đang duyệt danh sách bằng `get(i)` có cần sửa cú pháp không, nhưng hiệu năng thay đổi thế nào?

> **Đáp án**
> Cú pháp gọi `list.get(i)` không cần sửa vì cùng tuân theo `interface List`, nhưng trên `LinkedList` mỗi lần `get(i)` tốn $O(n)$ nên vòng lặp `for` theo chỉ số sẽ chậm thành $O(n^2)$ thay vì $O(n)$.
