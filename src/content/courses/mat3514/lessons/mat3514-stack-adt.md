# Ngăn xếp (Stack)

## Vì sao cần

Nhiều bài toán chỉ cần thao tác ở **một đầu** theo nguyên tắc vào sau ra trước (LIFO — Last-In, First-Out): hoàn tác (Undo), lưu khung lời gọi hàm khi đệ quy, kiểm tra dấu ngoặc ([Kiểm tra dấu ngoặc hợp lệ](#/courses/mat3514/lessons/mat3514-bracket-matching)) và tính biểu thức hậu tố ([Bài tập: tính biểu thức hậu tố](#/courses/mat3514/lessons/mat3514-postfix-eval)).

## Ý tưởng

Stack chỉ có 3 phép toán cốt lõi ở đỉnh (top):

- `push(x)`: đặt `x` lên đỉnh stack.
- `pop()`: lấy và **xóa** phần tử ở đỉnh.
- `top()` (hoặc `peek()`): chỉ **đọc** phần tử ở đỉnh mà không xóa.

Cả hai cách cài bằng mảng động và danh sách liên kết đều đạt $O(1)$ cho mọi thao tác.

## Cài đặt

```java
class ArrayStack {
    private int[] data = new int[8];
    private int size = 0;

    void push(int x) {
        if (size == data.length) data = Arrays.copyOf(data, size * 2);
        data[size++] = x;
    }

    int pop() {
        if (size == 0) throw new IllegalStateException("Stack rỗng");
        return data[--size];
    }

    int top() {
        if (size == 0) throw new IllegalStateException("Stack rỗng");
        return data[size - 1];
    }

    boolean isEmpty() {
        return size == 0;
    }
}
```

## Lỗi thường gặp

- Gọi `pop()` hoặc `top()` khi `size == 0` mà không kiểm tra rỗng, dẫn tới truy cập `data[-1]` (`ArrayIndexOutOfBoundsException`).
- Nhầm giữa `data[size--]` (đọc sai ô trống) và `data[--size]` (giảm `size` trước rồi mới đọc đỉnh).

## Tự kiểm tra

1. Thực hiện lần lượt: `push(10)`, `push(20)`, `top()`, `pop()`, `pop()`. Kết quả trả về của 3 lệnh sau cùng là gì?

> **Đáp án**
> `top()` trả `20` (stack vẫn còn `[10, 20]`); `pop()` đầu tiên trả `20` (còn `[10]`); `pop()` thứ hai trả `10` (stack rỗng).
