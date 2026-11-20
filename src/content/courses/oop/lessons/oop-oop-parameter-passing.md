# Cơ chế truyền tham số trong Java

## Vì sao cần

Nhiều người học Java từ C++ thường thắc mắc: khi truyền một đối tượng vào phương thức, ta có thể thay đổi thuộc tính của nó, vậy Java truyền tham chiếu (pass-by-reference) hay truyền tham trị (pass-by-value)? Hiểu đúng cơ chế truyền tham số của Java giúp tránh những lỗi khó phát hiện khi viết hàm `swap` hoặc cập nhật đối tượng.

## Ý tưởng

Theo đặc tả ngôn ngữ Java, **mọi tham số trong Java đều được truyền theo giá trị (pass-by-value)**:

- Với **kiểu nguyên thủy** (`int`, `double`, ...): giá trị của biến được sao chép vào tham số hình thức. Mọi thay đổi bên trong phương thức không ảnh hưởng biến gốc.
- Với **kiểu tham chiếu** (đối tượng, mảng): **giá trị của tham chiếu** (tức địa chỉ tới đối tượng trên Heap) được sao chép vào tham số hình thức.
  - Vì tham số bản sao và biến gốc trỏ **cùng một đối tượng**, ta có thể thay đổi **trạng thái bên trong** (các trường dữ liệu) của đối tượng đó.
  - Nhưng nếu gán lại tham số trỏ sang đối tượng mới (`p = new Person(...)`), biến gốc bên ngoài **không thay đổi**.

Liên hệ với [Bộ nhớ Stack và Heap trong JVM](#/courses/oop/lessons/oop-oop-stack-heap-memory): bản sao tham chiếu nằm ở khung hàm mới trên Stack và bị hủy khi hàm kết thúc.

## Cài đặt

```java
class Box {
    int value;
    Box(int v) { this.value = v; }
}

public class PassByValueDemo {
    static void changeField(Box b) {
        b.value = 99;           // tác động lên đối tượng chung trên Heap
    }

    static void reassign(Box b) {
        b = new Box(50);        // chỉ đổi bản sao tham chiếu b trên Stack
    }

    public static void main(String[] args) {
        Box box = new Box(10);
        changeField(box);
        System.out.println(box.value);  // in ra 99
        reassign(box);
        System.out.println(box.value);  // vẫn in ra 99!
    }
}
```

## Lỗi thường gặp

- Viết hàm `void swap(Integer a, Integer b)` hoặc `void swap(Box a, Box b)` rồi gán `a = b; b = tmp;` bên trong hàm: bên ngoài hoàn toàn không hoán đổi được vì chỉ hoán đổi hai bản sao tham chiếu.
- Gọi phương thức thay đổi mảng/đối tượng truyền vào mà không ngờ dữ liệu gốc của người gọi bị biến đổi theo (aliasing).

## Tự kiểm tra

1. Cho `int x = 5;`, gọi `inc(x)` với `void inc(int a) { a++; }`. Sau lời gọi, `x` bằng bao nhiêu? Vì sao?

> **Đáp án**
> `x` vẫn bằng `5`. Vì Java truyền tham trị: `a` chỉ là bản sao của `5` trong khung hàm `inc`, tăng `a` không ảnh hưởng tới `x`.
