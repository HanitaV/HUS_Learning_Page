# Phạm vi biến trong lớp và từ khóa this

## Vì sao cần

Trong một lớp, tên tham số của hàm dựng hoặc phương thức `set...` thường trùng với tên trường dữ liệu của lớp (ví dụ `memberVariable`). Bạn cần cách chỉ rõ đâu là biến của đối tượng hiện tại và đâu là tham số cục bộ.

## Ý tưởng

- **Biến ở mức lớp** (trường dữ liệu): có phạm vi hiệu lực trong **toàn bộ lớp**.
- **Biến cục bộ / tham số** trong phương thức: chỉ có hiệu lực trong phương thức hoặc khối `{ ... }` chứa nó (xem [Phạm vi hiệu lực của biến](#/courses/thcs4/lessons/thcs4-cb-variable-scope)).
- Khi tham số trùng tên với biến thành viên, biến cục bộ sẽ che khuất biến thành viên. Từ khóa **`this`** đại diện cho **đối tượng hiện tại**, nên `this.memberVariable` trỏ đúng tới trường dữ liệu của đối tượng.

## Cài đặt

```java
public class Example {
    private int memberVariable;

    public Example(int memberVariable) {
        this.memberVariable = memberVariable;
    }

    public void setVariable(int memberVariable) {
        // Nếu viết memberVariable = memberVariable; sẽ chỉ tự gán tham số!
        this.memberVariable = memberVariable;
    }

    public int getVariable() {
        return memberVariable;
    }
}
```

## Lỗi thường gặp

- Viết `memberVariable = memberVariable;` khi tham số trùng tên với thuộc tính, làm thuộc tính của đối tượng vẫn giữ giá trị mặc định `0` hoặc `null`.
- Dùng `this` bên trong phương thức `static` — gây lỗi biên dịch vì phương thức tĩnh không gắn với đối tượng cụ thể nào.

## Tự kiểm tra

1. Trong lớp `Example` trên, nếu viết `public void setVariable(int memberVariable) { memberVariable = memberVariable; }` rồi gọi `ex.setVariable(42);`, giá trị `ex.getVariable()` sau đó là bao nhiêu?

> **Đáp án**
> Vẫn bằng giá trị cũ (mặc định là `0`), vì cả hai vế của phép gán đều đang tham chiếu tới tham số `memberVariable` chứ không đụng tới trường dữ liệu của đối tượng.
