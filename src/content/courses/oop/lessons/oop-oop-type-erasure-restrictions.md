# Type Erasure và 7 hạn chế của Java Generics

## Vì sao cần

Nhiều lập trình viên Java bất ngờ khi thấy `new T()`, `new T[10]`, hay `obj instanceof List<String>` đều bị trình biên dịch từ chối. Tất cả những giới hạn này đều bắt nguồn từ một cơ chế thiết kế cốt lõi của Java: **Xóa kiểu (Type Erasure)** để giữ tương thích ngược với mã Java trước phiên bản 5.

## Ý tưởng

**Type Erasure**: khi biên dịch mã Generics sang bytecode, trình biên dịch Java kiểm tra an toàn kiểu rồi **xóa toàn bộ tham số kiểu**:
- Tham số kiểu không bị chặn (`<T>`) được thay bằng **`Object`**.
- Tham số kiểu bị chặn (`<T extends Comparable<T>>`) được thay bằng **cận đầu tiên** (`Comparable`).
- Trình biên dịch tự động chèn các phép ép kiểu cần thiết khi đọc giá trị ra.

Hệ quả là tại thời điểm chạy (runtime), JVM **không biết** `T` là kiểu gì, dẫn tới **7 hạn chế** của Generics:
1. Không thể dùng kiểu nguyên thủy làm đối số kiểu (`List<int>` sai, phải dùng `List<Integer>`).
2. Không thể tạo thể hiện của tham số kiểu (`new T()`).
3. Không thể khai báo trường `static` có kiểu là tham số kiểu của lớp (`private static T x;` sai).
4. Không thể dùng `instanceof` hay ép kiểu kiểm tra với kiểu đã tham số hóa (`x instanceof ArrayList<Integer>`).
5. Không thể tạo mảng của kiểu đã tham số hóa (`new List<Integer>[2]`).
6. Không thể tạo, bắt hoặc ném ngoại lệ thuộc lớp tổng quát (`class MyEx<T> extends Exception`).
7. Không thể nạp chồng hai phương thức mà sau khi xóa kiểu có chữ ký thô trùng nhau (ví dụ `print(List<String>)` và `print(List<Integer>)` đều xóa thành `print(List)`).

## Cài đặt

```java
// Sau khi Type Erasure, Node<T> trở thành:
public class Node {
    private Object data;
    public Node(Object data) { this.data = data; }
    public Object getData() { return data; }
}
```

## Lỗi thường gặp

- Viết hai phương thức nạp chồng chỉ khác tham số kiểu generic (`void process(Set<String> s)` và `void process(Set<Integer> s)`): lỗi biên dịch `both methods have same erasure`.
- Khai báo `static T instance;` trong lớp `Box<T>`: lỗi vì trường `static` dùng chung cho mọi `Box<String>` và `Box<Integer>`.

## Tự kiểm tra

1. Sau khi biên dịch lớp `class Box<T extends Number> { T value; }`, kiểu của trường `value` trong bytecode là gì?

> **Đáp án**
> Là **`Number`** (cận trên đầu tiên của `T`), không phải `Object`.
