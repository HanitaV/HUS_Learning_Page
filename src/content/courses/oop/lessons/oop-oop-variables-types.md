# Kiểu dữ liệu và phạm vi biến trong Java

## Vì sao cần

Mọi chương trình đều cần lưu trữ dữ liệu tạm thời trong quá trình chạy. Java vừa là ngôn ngữ hướng đối tượng, vừa giữ lại 8 kiểu dữ liệu nguyên thủy (primitive) để đảm bảo hiệu năng, đồng thời dùng kiểu tham chiếu (reference) cho đối tượng, mảng và chuỗi. Hiểu rõ sự khác nhau giữa hai nhóm kiểu này và phạm vi sống của biến giúp tránh lỗi gán nhầm và rò rỉ trạng thái.

## Ý tưởng

Java chia kiểu dữ liệu thành hai nhóm chính:

1. **Kiểu nguyên thủy (8 kiểu)**: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`. Biến lưu trực tiếp **giá trị**.
2. **Kiểu tham chiếu**: lớp (`String`, `Student`, ...), giao diện, mảng (`int[]`). Biến lưu **địa chỉ (tham chiếu)** trỏ tới đối tượng nằm trên vùng nhớ Heap (xem [Bộ nhớ Stack và Heap trong JVM](#/courses/oop/lessons/oop-oop-stack-heap-memory)).

Theo vị trí khai báo, biến có 3 phạm vi:
- **Biến cục bộ (Local variable)**: khai báo trong phương thức/khối lệnh `{}`; không có giá trị mặc định, bắt buộc khởi tạo trước khi đọc.
- **Biến thực thể (Instance variable)**: khai báo trong lớp, ngoài phương thức; mỗi đối tượng có bản sao riêng và được gán giá trị mặc định (`0`, `false`, `null`).
- **Biến lớp (Static variable)**: có từ khóa `static`; dùng chung cho mọi đối tượng của lớp.

## Cài đặt

```java
public class Student {
    private String name;              // instance variable (mặc định null)
    private static int count = 0;     // static variable (dùng chung cả lớp)

    public Student(String name) {
        this.name = name;
        count++;
    }

    public void printInfo() {
        int year = 2024;              // local variable (phải gán giá trị trước khi dùng)
        System.out.println(name + " - " + year + " (Tổng: " + count + ")");
    }
}
```

## Lỗi thường gặp

- Đọc biến cục bộ khi chưa gán giá trị: lỗi biên dịch `variable might not have been initialized`.
- So sánh hai biến `String` bằng `==`: `==` chỉ so sánh địa chỉ tham chiếu, không so sánh nội dung chuỗi (phải dùng `.equals()`).
- Nhầm biến `static` với biến thực thể, dẫn đến việc thay đổi ở một đối tượng làm ảnh hưởng toàn bộ các đối tượng khác.

## Tự kiểm tra

1. Trong lớp `Student` ở trên, nếu tạo 3 đối tượng `Student` thì có bao nhiêu bản sao của `name` và bao nhiêu bản sao của `count` trong bộ nhớ?

> **Đáp án**
> Có **3 bản sao** của `name` (mỗi đối tượng một bản trên Heap) và **1 bản sao duy nhất** của `count` (thuộc về lớp `Student`).
