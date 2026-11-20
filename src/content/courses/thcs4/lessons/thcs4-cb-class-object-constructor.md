# Lớp, đối tượng và hàm dựng

## Vì sao cần

Nếu chỉ dùng các mảng rời rạc để quản lý hàng trăm sinh viên hay trẻ sơ sinh (`name[]`, `weight[]`, `height[]`), việc sắp xếp hay truyền dữ liệu rất dễ lệch chỉ số. **Lớp** (class) gom dữ liệu và hành vi liên quan của một thực thể về một kiểu dữ liệu thống nhất.

## Ý tưởng

- **Lớp (`class`)**: bản thiết kế xác định các **trường dữ liệu** (thuộc tính) và **phương thức** (hành vi) của một loại đối tượng. Quy ước tên lớp viết hoa chữ cái đầu (`Baby`, `Student`), đặt trong tệp `<ClassName>.java`.
- **Đối tượng**: một thực thể cụ thể được tạo ra từ lớp bằng toán tử `new`, ví dụ `Baby bb = new Baby("Alex", true);`.
- **Hàm dựng (constructor)**: phương thức đặc biệt có tên trùng tên lớp, không có kiểu trả về (kể cả `void`) và không dùng `static`. Nếu bạn không viết hàm dựng nào, Java tự sinh hàm dựng ngầm định không tham số `ClassName()`. Một lớp có thể có nhiều hàm dựng khác nhau về danh sách tham số.
- **Truy cập thành viên**: qua biến đối tượng `obj.field` hoặc `obj.method(...)`.

## Cài đặt

```java
public class Baby {
    String name;
    boolean isMale;
    double weight = 3.2;

    public Baby() {
    }

    public Baby(String myName, boolean maleBaby) {
        name = myName;
        isMale = maleBaby;
    }

    public void sayHi() {
        System.out.println("Hi, my name is " + name);
    }

    public void eat(double foodWeight) {
        if (foodWeight >= 0 && foodWeight < weight) {
            weight += foodWeight;
        }
    }
}
```

## Lỗi thường gặp

- Viết `void Baby(...)` cho hàm dựng — lúc đó Java coi đó là một phương thức thường chứ không phải hàm dựng.
- Đã tự viết một hàm dựng có tham số (như `Baby(String, boolean)`), rồi lại gọi `new Baby()` mà quên tự định nghĩa thêm hàm dựng không tham số `public Baby() {}` (vì Java chỉ sinh hàm dựng ngầm định khi lớp chưa có hàm dựng nào).

## Tự kiểm tra

1. Nếu lớp `Baby` chỉ định nghĩa duy nhất hàm dựng `public Baby(String myName, boolean maleBaby)`, lệnh `Baby b = new Baby();` có biên dịch được không?

> **Đáp án**
> **Không.** Khi lớp đã tự định nghĩa ít nhất một hàm dựng, trình biên dịch không tự sinh hàm dựng mặc định không tham số nữa.
