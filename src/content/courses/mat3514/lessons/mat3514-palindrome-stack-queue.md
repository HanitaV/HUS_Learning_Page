# Kiểm tra palindrome bằng stack và queue

## Vì sao cần

Bài toán kiểm tra chuỗi đối xứng (Palindrome) minh họa rõ sự đối lập giữa LIFO ([Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt)) và FIFO ([Hàng đợi (Queue)](#/courses/mat3514/lessons/mat3514-queue-adt)): cùng một dãy ký tự đưa vào, Stack trả về theo thứ tự **ngược**, còn Queue trả về theo thứ tự **xuôi**.

## Ý tưởng

1. Chuẩn hóa chuỗi (bỏ khoảng trắng nếu đề yêu cầu, chuyển về chữ thường).
2. Đẩy từng ký tự vào cả `Stack` và `Queue`.
3. Lần lượt lấy `stack.pop()` và `queue.dequeue()` để so sánh từng cặp; nếu có cặp khác nhau thì không phải palindrome.

## Cài đặt

```java
static boolean isPalindrome(String s) {
    String clean = s.replaceAll("\\s+", "").toLowerCase();
    Stack<Character> stack = new Stack<>();
    Queue<Character> queue = new LinkedList<>();
    for (int i = 0; i < clean.length(); i++) {
        char ch = clean.charAt(i);
        stack.push(ch);
        queue.add(ch);
    }
    while (!stack.isEmpty()) {
        if (!stack.pop().equals(queue.poll())) {
            return false;
        }
    }
    return true;
}
```

## Lỗi thường gặp

- Không chuẩn hóa chữ hoa/thường hoặc dấu cách trước khi so sánh (ví dụ `"Radar"` hoặc `"nurses run"`).
- Dùng `==` so sánh hai đối tượng `Character` thay vì `.equals()` trong Java (có thể sai với ký tự Unicode ngoài vùng cache).

## Tự kiểm tra

1. Với chuỗi `"abca"`, ở lần `pop()`/`poll()` thứ mấy thì hàm phát hiện không đối xứng và trả về `false`?

> **Đáp án**
> Ở lần lấy thứ 2: `stack.pop()` cho `'c'`, còn `queue.poll()` cho `'b'`.
