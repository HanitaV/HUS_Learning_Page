# Chương trình Java, biên dịch và JVM

## Vì sao cần

Trước khi viết những dòng lệnh đầu tiên, bạn cần hiểu cách Java biến mã nguồn dễ đọc thành chương trình chạy được trên nhiều hệ điều hành khác nhau mà không phải biên dịch lại cho từng máy.

## Ý tưởng

Java là ngôn ngữ vừa **biên dịch** vừa **thông dịch**:

1. Bạn soạn mã nguồn trong tệp `.java` (tên tệp phải trùng tên lớp, ví dụ `HelloWorld.java`).
2. Trình biên dịch `javac` kiểm tra lỗi cú pháp và dịch mã nguồn thành mã trung gian **bytecode** (`.class`), độc lập với nền tảng phần cứng.
3. Máy ảo Java (**JVM**) đọc và thực thi bytecode thông qua lệnh `java`.

Mọi chương trình Java chạy độc lập đều bắt đầu từ phương thức `main` với chữ ký `public static void main(String[] args)`. Mảng `args` nhận các tham số truyền từ dòng lệnh.

## Cài đặt

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

Biên dịch và chạy trên cửa sổ dòng lệnh (từ thư mục chứa tệp nguồn):

```text
javac HelloWorld.java
java HelloWorld
```

Khi cần nhận tham số dòng lệnh, truy cập `args[0]`, `args[1]`, ... (xem thêm [Mảng một chiều và duyệt mảng](#/courses/thcs4/lessons/thcs4-cb-array-1d)):

```java
public class UseArgument {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.print(args[0]);
        System.out.println(". How are you?");
    }
}
```

## Lỗi thường gặp

- Lưu tệp khác tên lớp `public` (ví dụ lớp `HelloWorld` nhưng lưu thành `hello.java`): `javac` báo lỗi ngay khi biên dịch.
- Chạy lệnh `java HelloWorld.class` thay vì `java HelloWorld`: JVM hiểu nhầm `.class` là tên gói và báo không tìm thấy lớp.
- Quên truyền tham số khi chạy `UseArgument` dẫn tới lỗi truy cập `args[0]` ngoài phạm vi mảng.

## Tự kiểm tra

1. Nếu chạy `java UseArgument "VIET NAM"` thì `args[0]` nhận giá trị gì, và nếu bỏ dấu ngoặc kép thành `java UseArgument VIET NAM` thì `args[0]` nhận giá trị gì?

> **Đáp án**
> Với `"VIET NAM"`, dấu ngoặc kép gộp cả cụm thành một tham số nên `args[0]` là `"VIET NAM"`. Khi bỏ ngoặc kép, khoảng trắng tách thành hai tham số riêng biệt nên `args[0]` là `"VIET"` (và `args[1]` là `"NAM"`).
