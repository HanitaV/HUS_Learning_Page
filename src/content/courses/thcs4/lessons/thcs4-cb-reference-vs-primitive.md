# Kiểu nguyên thủy và kiểu tham chiếu

## Vì sao cần

Nhiều lỗi khó hiểu khi mới học Java xuất phát từ việc nhầm lẫn giữa biến lưu trực tiếp giá trị và biến lưu địa chỉ đối tượng: tại sao `bb1 == bb2` lại ra `false`, hoặc tại sao truyền đối tượng vào hàm lại làm thay đổi thuộc tính của nó ở ngoài `main`?

## Ý tưởng

- **Kiểu nguyên thủy** (`int`, `double`, `boolean`, `char`, ...): biến lưu **trực tiếp giá trị**. Phép gán hoặc truyền vào phương thức tạo một bản sao giá trị độc lập.
- **Kiểu tham chiếu** (mảng `int[]`, `String`, đối tượng `Baby`, ...): biến lưu **địa chỉ vùng nhớ** nơi đối tượng nằm trên heap.
  - Hai lần gọi `new Baby("An")` tạo hai đối tượng ở hai địa chỉ khác nhau, nên `bb1 == bb2` cho kết quả `false`.
  - Phép gán `bb1 = bb2` khiến `bb1` trỏ sang cùng đối tượng với `bb2`.
  - Khi truyền tham chiếu vào phương thức (`doSomething(int x, int[] ys, Baby b)`), sửa `ys[0]` hoặc `b.name` sẽ tác động trực tiếp lên đối tượng gốc bên ngoài.

## Cài đặt

```java
public class ReferenceDemo {
    public static void doSomething(int x, int[] ys, Baby b) {
        x = 99;
        ys[0] = 99;
        b.name = "99";
    }

    public static void main(String[] args) {
        int i = 0;
        int[] j = {0};
        Baby bb1 = new Baby("50", true);

        doSomething(i, j, bb1);
        System.out.println(i);        // 0 (nguyên thủy không đổi)
        System.out.println(j[0]);     // 99 (mảng bị đổi)
        System.out.println(bb1.name); // "99" (đối tượng bị đổi)
    }
}
```

## Lỗi thường gặp

- Dùng `==` để so sánh nội dung hai đối tượng (kể cả `String`) thay vì phương thức `equals()`.
- Gán hai biến mảng `b = a;` rồi sửa `b[0][0] = 8;` và ngạc nhiên khi thấy `a[0][0]` cũng bị đổi theo.

## Tự kiểm tra

1. Sau đoạn lệnh:
   ```java
   Baby b1 = new Baby("An", true);
   Baby b2 = new Baby("An", true);
   Baby b3 = b1;
   ```
   Các phép so sánh `b1 == b2` và `b1 == b3` trả về `true` hay `false`?

> **Đáp án**
> `b1 == b2` trả về `false` vì trỏ tới hai vùng nhớ khác nhau; `b1 == b3` trả về `true` vì `b3` được gán cùng địa chỉ với `b1`.
