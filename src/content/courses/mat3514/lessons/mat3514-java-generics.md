# Lập trình tổng quát (Generics)

## Vì sao cần

Trước Java 5, một danh sách chỉ biết chứa `Object`, nên mỗi lần lấy phần tử bạn phải ép kiểu và có thể gặp lỗi chỉ khi chạy. Từ Java 5, các lớp trong Collections Framework được tham số hóa theo kiểu, và bạn cũng viết được lớp như vậy. Nhờ đó cùng một đoạn mã dùng được cho nhiều kiểu dữ liệu mà vẫn được trình biên dịch kiểm tra. Kỹ thuật này là nền của [List ADT](#/courses/mat3514/lessons/mat3514-list-adt), [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) và [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort).

## Lớp tham số hóa

Lớp được định nghĩa với một tham số kiểu gọi là lớp tổng quát (generic) hay lớp tham số hóa. Trong `Collection<E>`, chữ `E` đại diện cho một kiểu, cho phép tạo tập hợp **đồng nhất** (mọi phần tử cùng kiểu). Hệ quả thực tế là lấy phần tử không cần ép kiểu:

```java
// Trước (Java cũ)
List c = new ArrayList();
c.add(new Integer(10));
Integer i = (Integer) c.get(0);       // phải ép kiểu

// Sau (generic)
List<Integer> c = new ArrayList<Integer>();
c.add(10);
Integer i = c.get(0);                 // không cần ép kiểu
```

Nếu bạn lỡ `c.add("abc")` vào `List<Integer>`, trình biên dịch báo lỗi ngay, thay vì ném `ClassCastException` lúc chạy.

## Tự viết lớp tổng quát

Slide dùng lớp `Cell` làm ví dụ. Một phiên bản tương đương:

```java
public class Cell<T> {
    private T prisoner;

    public Cell() { }                      // KHÔNG viết Cell<T>() ở hàm khởi tạo

    public Cell(T prisoner) {              // T dùng làm kiểu tham số: không cần <>
        this.prisoner = prisoner;
    }

    public T get() { return prisoner; }
    public void set(T value) { prisoner = value; }
}

Cell<String> a = new Cell<String>("xin chào");   // khi tạo đối tượng thì dùng <>
String s = a.get();                              // không cần ép kiểu
```

## Nên và không nên

Theo slide, các quy tắc là:

- Tham số kiểu luôn đại diện cho **kiểu tham chiếu** (`Integer`, `String`, ...), không phải `int`, `double`.
- Tên lớp trong phần định nghĩa có kèm tham số kiểu: `class Cell<T>`.
- Hàm khởi tạo không kèm tham số kiểu trong phần đầu: `public Cell()`.
- Không dùng dấu `<>` khi `T` chỉ là kiểu của một tham số: `public Cell(T prisoner)`.
- Khi khởi tạo đối tượng của lớp tổng quát thì dùng `<>`: `List<Integer> c = new ArrayList<Integer>();`.

Hai điều **không được làm**:

```java
T obj = new T();          // SAI: không tạo được đối tượng từ tham số kiểu
T[] array = new T[5];     // SAI: không tạo được mảng của kiểu tổng quát
```

Lý do: Java xóa thông tin kiểu sau khi biên dịch (type erasure), nên lúc chạy chương trình không biết `T` là gì để tạo đối tượng hay mảng đúng kiểu.

## Ví dụ chạy tay

Cài một ngăn xếp tổng quát bằng mảng. Vì không viết được `new T[n]`, ta tạo `Object[]` rồi ép kiểu khi lấy ra:

```java
public class ArrayStack<T> {
    private Object[] data = new Object[10];
    private int size = 0;

    public void push(T x) { data[size++] = x; }

    @SuppressWarnings("unchecked")
    public T pop() { return (T) data[--size]; }
}
```

Với `ArrayStack<String> st`, gọi `push("a")`, `push("b")`: `data = [a, b, null, ...]`, `size = 2`. `pop()` giảm `size` còn 1 và trả về `"b"` có kiểu `String`. Người dùng không phải ép kiểu, chỗ ép kiểu duy nhất nằm gọn trong lớp.

## Lỗi thường gặp

- Viết `List<int>`: không được, phải dùng `List<Integer>` (kiểu bọc).
- Viết `T[] a = new T[n];`: lỗi biên dịch. Dùng `(T[]) new Object[n]` hoặc `Object[]` như ví dụ trên.
- Viết `public Cell<T>()` cho hàm khởi tạo: sai cú pháp.
- Cho rằng `List<Integer>` là kiểu con của `List<Number>`: không đúng, hai kiểu này không có quan hệ kế thừa.
- Dùng lại dạng thô `List` (không tham số): mất kiểm tra kiểu và quay lại tình trạng phải ép kiểu.

## Luyện tập

- [Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface): kết hợp generics với giao diện so sánh để viết `<T extends Comparable<T>>`.
- [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort): sắp xếp mảng của kiểu bất kỳ so sánh được bằng một phương thức tổng quát.
- [Bài tập: Fraction, SimpleArrayList, SimpleLinkedList](#/courses/mat3514/lessons/mat3514-hw-list): cài `SimpleArrayList` và `SimpleLinkedList`, có thể tham số hóa kiểu phần tử.

## Tự kiểm tra

1. Vì sao `T[] arr = new T[5];` không biên dịch?

> **Đáp án**
> Do xóa kiểu: lúc chạy `T` không còn tồn tại nên Java không thể tạo mảng đúng kiểu. Cách thường dùng là tạo `Object[]` rồi ép kiểu.

2. Dòng nào đúng: `Cell<int>` hay `Cell<Integer>`?

> **Đáp án**
> `Cell<Integer>`. Tham số kiểu chỉ nhận kiểu tham chiếu.

3. Viết hàm `static <T> T first(List<T> a)` trả về phần tử đầu. Gọi với `List<String>` thì kiểu trả về là gì?

> **Đáp án**
> `String`, do `T` được suy ra là `String`. Cài đặt: `return a.get(0);` và không cần ép kiểu.
