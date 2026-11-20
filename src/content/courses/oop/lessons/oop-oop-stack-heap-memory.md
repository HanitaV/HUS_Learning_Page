# Bộ nhớ Stack và Heap trong JVM

## Vì sao cần

Khi chương trình gọi hàm lồng nhau hoặc tạo hàng nghìn đối tượng, JVM phải quản lý bộ nhớ gọn gàng để không tràn vùng nhớ hay xung đột dữ liệu. Hiểu cách JVM phân chia **Stack** và **Heap** giúp bạn giải thích được vòng đời biến, hiện tượng `StackOverflowError` khi đệ quy sâu và cách hoạt động của phép gán tham chiếu.

## Ý tưởng

JVM chia bộ nhớ dữ liệu làm hai vùng chính:

| Đặc điểm | Stack Memory | Heap Space |
|---|---|---|
| Chứa gì | Khung lời gọi hàm, biến cục bộ nguyên thủy, **tham chiếu** tới đối tượng | **Đối tượng** thực sự được tạo bằng `new` |
| Cơ chế cấp phát | LIFO (vào sau ra trước), tự động giải phóng khi hàm kết thúc | Cấp phát động; thu gom rác tự động (Garbage Collector) |
| Kích thước & tốc độ | Nhỏ, cố định, truy cập rất nhanh | Lớn, linh hoạt, truy cập chậm hơn Stack |

Khi chạy `Student s = new Student("An");` bên trong `main()`:
1. Đối tượng `Student("An")` được cấp phát trên **Heap**.
2. Biến tham chiếu `s` nằm trong khung hàm `main()` trên **Stack** và giữ địa chỉ trỏ tới đối tượng trên Heap.

## Cài đặt

```java
public class MemoryDemo {
    public static void main(String[] args) {
        int price = 100;                  // biến nguyên thủy nằm trên Stack
        Student s1 = new Student("An");   // s1 trên Stack, đối tượng trên Heap
        Student s2 = s1;                  // s2 trỏ cùng đối tượng với s1 trên Heap
        s2.setName("Bình");               // đổi tên qua s2 -> s1 cũng thấy "Bình"
    }
}
```

## Lỗi thường gặp

- Nghĩ rằng `Student s2 = s1;` tạo ra một bản sao đối tượng mới trên Heap: thực chất chỉ sao chép **tham chiếu** trên Stack, hai biến cùng trỏ một đối tượng.
- Đệ quy không có điều kiện dừng làm Stack đầy khung lời gọi hàm, gây `StackOverflowError`.
- Quên rằng khi một đối tượng trên Heap không còn tham chiếu nào trỏ tới, Garbage Collector sẽ tự thu hồi nó (không cần `free`/`delete` như C/C++).

## Tự kiểm tra

1. Nếu viết `Student s = null;`, lúc này trên Stack và trên Heap có gì?

> **Đáp án**
> Trên **Stack** có biến tham chiếu `s` mang giá trị `null` (không trỏ tới đâu). Trên **Heap** không có đối tượng `Student` nào được tạo ra.
