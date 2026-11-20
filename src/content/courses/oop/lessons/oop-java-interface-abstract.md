# Lớp trừu tượng và giao diện (Java)

## Vì sao cần

Khi viết cấu trúc dữ liệu, bạn thường muốn tách "làm được gì" khỏi "làm như thế nào". Danh sách, ngăn xếp hay hàng đợi đều có thể cài bằng mảng hoặc bằng nút liên kết, nhưng người dùng chỉ cần biết các thao tác. Java có hai công cụ cho việc này: lớp trừu tượng (abstract class) và giao diện (interface). Bài này là nền cho [Kiểu dữ liệu trừu tượng (ADT)](#/courses/oop/lessons/oop-abstraction-adt) và cho [Giao diện Comparable<T>](#/courses/oop/lessons/oop-comparable-interface) ở bài kế tiếp.

## Lớp trừu tượng

Một lớp được khai báo `abstract` khi nó chưa đầy đủ: có thể chứa phương thức **chưa có thân** (phương thức trừu tượng). Quy tắc theo slide: nếu lớp có một phương thức trừu tượng thì lớp bắt buộc phải khai báo `abstract`.

```java
public abstract class Node {
    String name;

    public abstract void type();          // chưa có thân, kết thúc bằng dấu ;

    public String toString() { return name; }

    public Node(String name) {
        this.name = name;
    }
}
```

Lớp trừu tượng vẫn có trường dữ liệu, hàm khởi tạo và phương thức có thân như lớp thường. Điều nó cấm là tạo đối tượng trực tiếp:

```java
Node n;                                 // đúng: n chỉ là tham chiếu
Node n = new NumberNode("Penta", 5);    // đúng: NumberNode là lớp cụ thể
Node n = new Node("Name");              // SAI: lỗi biên dịch
```

Lớp con (ví dụ `NumberNode`) chỉ trở thành lớp cụ thể khi cài đặt **mọi** phương thức trừu tượng kế thừa. Nếu thiếu một phương thức, lớp con cũng phải khai báo `abstract`.

## Giao diện

Giao diện giống một lớp mà bỏ hết phần cài đặt. Theo slide, nó chứa các trường `public static final` và các phương thức `public abstract` (chỉ có phần đầu, không có thân). Mọi thành viên khai báo trong giao diện ngầm định là `public`, nên bạn không cần viết lại. Giao diện `public` phải nằm trong file trùng tên, giống lớp `public`.

```java
public interface Employable {
    void raiseSalary(double d);
    double getSalary();
}
```

> Từ Java 8, giao diện còn có thể chứa phương thức `default` và `static` có thân. Trong môn này ta chỉ dùng dạng cổ điển như slide: giao diện chỉ mô tả hợp đồng.

### Một lớp, nhiều giao diện

Nhiều lớp, kể cả ở các cây kế thừa hoàn toàn khác nhau, có thể cài đặt cùng một giao diện. Một lớp có thể cài đặt nhiều giao diện, trong khi chỉ được `extends` một lớp cha:

```java
public class TA extends Student implements Employable {
    private double salary;

    public void raiseSalary(double d) { salary += d; }   // bắt buộc phải có
    public double getSalary() { return salary; }         // bắt buộc phải có
}
```

`TA` vừa là một `Student` (kế thừa) vừa là một `Employable` (hợp đồng). Đây là cách Java đạt được lợi ích của đa kế thừa mà không gây xung đột cài đặt.

## So sánh lớp trừu tượng và giao diện

| Tiêu chí | Lớp trừu tượng | Giao diện |
|---|---|---|
| Tạo đối tượng bằng `new` | Không | Không |
| Trường dữ liệu thông thường | Có | Chỉ hằng `public static final` |
| Hàm khởi tạo | Có | Không |
| Phương thức có thân | Có | Không (dạng cổ điển) |
| Số lượng một lớp có thể kế thừa/cài đặt | Một (`extends`) | Nhiều (`implements`) |
| Dùng khi | Các lớp con chia sẻ trạng thái và mã chung | Chỉ cần thống nhất tập thao tác |

## Ví dụ chạy tay

Giả sử có `Employable e = new TA(...)`. Trình biên dịch chỉ cho phép gọi `e.raiseSalary(100)` và `e.getSalary()`, vì kiểu khai báo là `Employable`. Khi chạy, Java tìm cài đặt thực sự trong lớp `TA` (liên kết động). Bạn không gọi được `e.study()` dù `TA` có phương thức đó, trừ khi ép kiểu về `TA` hoặc `Student`.

Đây chính là cách mã thuật toán tổng quát hoạt động: thuật toán sắp xếp chỉ biết "đối tượng này so sánh được" ([Giao diện Comparable<T>](#/courses/oop/lessons/oop-comparable-interface)) và không biết đối tượng cụ thể là gì.

## Lỗi thường gặp

- Viết `new Node("Name")` với `Node` là lớp trừu tượng: lỗi biên dịch. Phải tạo qua lớp con cụ thể.
- Quên cài đặt một phương thức của giao diện trong lớp `implements`: lớp bị lỗi biên dịch trừ khi bạn khai báo nó `abstract`.
- Cài đặt phương thức giao diện mà không ghi `public`: lỗi, vì khi cài đặt bạn không được làm yếu quyền truy cập so với `public` ngầm định.
- Đặt phương thức trừu tượng trong lớp không khai báo `abstract`.
- Nhầm `extends` với `implements`: lớp kế thừa lớp dùng `extends`, lớp cài giao diện dùng `implements`; giao diện kế thừa giao diện dùng `extends`.

## Luyện tập

- [Bài tập: Fraction, SimpleArrayList, SimpleLinkedList](#/courses/mat3514/lessons/mat3514-hw-list): định nghĩa danh sách rồi cài bằng mảng và bằng danh sách liên kết; luyện tách hợp đồng khỏi cài đặt.
- [List ADT](#/courses/mat3504/lessons/mat3504-list-adt): xem một kiểu dữ liệu trừu tượng cụ thể mà giao diện Java có thể mô tả.
- Tự luyện: viết giao diện `Shape` với `double area()`, rồi hai lớp `Circle`, `Rect` cài đặt; tạo `Shape[]` chứa cả hai và in tổng diện tích.

::: Gợi ý tự luyện
Khai báo `Shape[] a = { new Circle(1), new Rect(2, 3) };`, duyệt mảng và cộng `a[i].area()`. Mỗi lần gọi, Java chọn đúng phiên bản theo đối tượng thật.
:::

## Tự kiểm tra

1. Đoạn `Node n = new Node("A");` có biên dịch không nếu `Node` là lớp trừu tượng?

> **Đáp án**
> Không. Lớp trừu tượng không thể khởi tạo trực tiếp. Dòng `Node n;` thì được vì `n` chỉ là tham chiếu.

2. Lớp `TA extends Student implements Employable` cần làm gì để biên dịch được?

> **Đáp án**
> Phải cài đặt cả `raiseSalary(double)` và `getSalary()` với quyền `public`, hoặc khai báo `TA` là `abstract`.

3. Vì sao một thuật toán sắp xếp tổng quát nên nhận tham số kiểu giao diện thay vì một lớp cụ thể?

> **Đáp án**
> Vì nhiều lớp không liên quan về kế thừa vẫn cùng cài đặt được một giao diện. Thuật toán chỉ phụ thuộc vào hợp đồng (ví dụ `compareTo`), nên dùng được cho mọi lớp thỏa hợp đồng đó, như ở [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort).
