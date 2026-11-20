# Bài tập: tính biểu thức hậu tố

## Vì sao cần

Biểu thức hậu tố (Reverse Polish Notation — RPN) đặt toán tử **sau** hai toán hạng, giúp máy tính tính trực tiếp từ trái sang phải chỉ bằng một [Ngăn xếp (Stack)](#/courses/mat3514/lessons/mat3514-stack-adt) mà không cần ngoặc đơn hay bảng độ ưu tiên.

## Ý tưởng

Duyệt từng token của biểu thức:

- Gặp **số**: đẩy vào stack.
- Gặp **toán tử** (`+`, `-`, `*`, `/`): lấy hai số trên đỉnh stack ra:
  - `b = stack.pop()` (toán hạng **phải**)
  - `a = stack.pop()` (toán hạng **trái**)
  - Tính `a op b` rồi đẩy kết quả trở lại stack.
- Kết thúc: phần tử duy nhất còn lại trong stack là giá trị biểu thức.

## Ví dụ chạy tay

Với `["10", "6", "2", "/", "-"]` (tương ứng $10 - 6 / 2$):

| Token | Hành động | Stack |
|---|---|---|
| `10` | push 10 | `[10]` |
| `6` | push 6 | `[10, 6]` |
| `2` | push 2 | `[10, 6, 2]` |
| `/` | pop `b=2`, `a=6`, tính `6 / 2 = 3`, push `3` | `[10, 3]` |
| `-` | pop `b=3`, `a=10`, tính `10 - 3 = 7`, push `7` | `[7]` |

## Cài đặt

```java
static int evalPostfix(String[] tokens) {
    Stack<Integer> stack = new Stack<>();
    for (String t : tokens) {
        if (t.equals("+") || t.equals("-") || t.equals("*") || t.equals("/")) {
            int b = stack.pop();
            int a = stack.pop();
            if (t.equals("+")) stack.push(a + b);
            else if (t.equals("-")) stack.push(a - b);
            else if (t.equals("*")) stack.push(a * b);
            else stack.push(a / b);
        } else {
            stack.push(Integer.parseInt(t));
        }
    }
    return stack.pop();
}
```

## Lỗi thường gặp

- Đảo ngược thứ tự `a` và `b` khi `pop()` dẫn tới tính `b - a` hoặc `b / a` sai hoàn toàn với phép trừ và phép chia.
- Không kiểm tra chia cho `0` hoặc biểu thức thiếu toán hạng (stack rỗng trước khi `pop`).

## Tự kiểm tra

1. Tính giá trị biểu thức hậu tố `5 1 2 + 4 * + 3 -`.

> **Đáp án**
> `1 + 2 = 3`, `3 * 4 = 12`, `5 + 12 = 17`, `17 - 3 = 14`. Kết quả là `14`.
