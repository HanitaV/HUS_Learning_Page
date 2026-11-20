# Kế thừa, từ khóa super và 4 đặc trưng OOP

## Vì sao cần

Khi xây dựng nhiều lớp gần giống nhau như tài khoản ngân hàng (`BankAccount`), tài khoản tiết kiệm (`SavingAccount`) và tài khoản vãng lai (`CheckingAccount`), việc viết lại các thuộc tính và phương thức chung gây dư thừa. Kế thừa cho phép tái sử dụng và mở rộng lớp đã có.

## Ý tưởng

- **Kế thừa (`extends`)**: `class Subclass extends Superclass`. Lớp con có sẵn các trường/phương thức từ lớp cha, có thể thêm thành viên mới hoặc **ghi đè** phương thức của lớp cha (ví dụ `deposit`, `withdraw`). Trong Java, mỗi lớp chỉ kế thừa trực tiếp từ **một** lớp cha (đơn kế thừa).
- **Từ khóa `super`**:
  - `super(args)`: gọi hàm dựng của lớp cha.
  - `super.method(args)`: gọi phiên bản phương thức ở lớp cha (thường dùng khi ghi đè nhưng vẫn muốn tận dụng logic cũ).
- **4 đặc trưng của lập trình hướng đối tượng (OOP)**:
  1. *Trừu tượng dữ liệu (abstraction)*: quan tâm đối tượng có gì và làm gì, bỏ qua tiểu tiết cài đặt.
  2. *Đóng gói (encapsulation)*: bảo vệ dữ liệu qua các phương thức công khai.
  3. *Đa hình (polymorphism)*: cùng một lời gọi phương thức, mỗi đối tượng thực tế phản ứng theo cài đặt riêng của nó.
  4. *Kế thừa (inheritance)*: lớp con thừa hưởng và mở rộng đặc tính của lớp cha.

## Cài đặt

```java
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) { balance += amount; }
    public double getBalance() { return balance; }
}

public class SavingAccount extends BankAccount {
    private double interestRate;

    public SavingAccount(double initialBalance, double interestRate) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    public void addInterest() {
        deposit(getBalance() * interestRate);
    }
}
```

## Lỗi thường gặp

- Cố gắng viết `class A extends B, C` (Java không hỗ trợ đa kế thừa lớp; muốn đa hợp đồng hãy dùng `implements` nhiều `interface`).
- Quên gọi `super(...)` trong hàm dựng lớp con khi lớp cha không có hàm dựng không tham số.

## Tự kiểm tra

1. Nếu đối tượng `a` có kiểu thực tế là `SavingAccount` và gọi `a.getBalance()`, Java tìm kiếm phương thức `getBalance()` theo thứ tự nào?

> **Đáp án**
> Java tìm trong lớp `SavingAccount` trước; vì không thấy định nghĩa lại nên tìm tiếp lên lớp cha `BankAccount` và thực thi phương thức tại đó.
