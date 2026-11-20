# Kiểm tra dấu ngoặc hợp lệ

## Vì sao cần

Trình biên dịch và trình soạn thảo code cần kiểm tra các cặp dấu ngoặc `()`, `[]`, `{}` có đóng mở đúng cặp và đúng thứ tự lồng nhau hay không. Đây là ứng dụng kinh điển nhất của [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt).

## Ý tưởng

Duyệt chuỗi từ trái sang phải:

1. Gặp ngoặc **mở** (`(`, `[`, `{`): đẩy vào stack.
2. Gặp ngoặc **đóng** (`)`, `]`, `}`):
   - Nếu stack đang rỗng → sai (dư ngoặc đóng).
   - Lấy phần tử đỉnh `top = stack.pop()`; nếu không khớp cặp với ngoặc đóng hiện tại → sai.
3. Duyệt hết chuỗi: hợp lệ khi và chỉ khi **stack rỗng** (không còn ngoặc mở nào chưa đóng).

## Cài đặt

```java
static boolean isValidBrackets(String s) {
    Stack<Character> stack = new Stack<>();
    for (int i = 0; i < s.length(); i++) {
        char ch = s.charAt(i);
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        } else if (ch == ')' || ch == ']' || ch == '}') {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if ((ch == ')' && top != '(')
                || (ch == ']' && top != '[')
                || (ch == '}' && top != '{')) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}
```

## Lỗi thường gặp

- Quên kiểm tra `stack.isEmpty()` trước khi `pop()` khi gặp ngoặc đóng ở đầu chuỗi như `")()"`.
- Trả về `true` ngay sau vòng lặp mà quên kiểm tra `stack.isEmpty()`, khiến chuỗi `"(()"` bị nhận nhầm là hợp lệ.

## Tự kiểm tra

1. Với chuỗi `"([)]"`, thuật toán phát hiện sai ở ký tự nào và vì sao?

> **Đáp án**
> Phát hiện sai ở ký tự `')'` (vị trí thứ 3): đỉnh stack đang là `'['` chứ không phải `'('`.
