# Đọc ghi tệp tuần tự và tuần tự hóa đối tượng

## Vì sao cần

Ngoài sao chép từng byte, chương trình thường cần lưu các bản ghi dữ liệu có cấu trúc ra tệp văn bản dễ đọc, hoặc lưu trực tiếp cả đối tượng Java xuống tệp nhị phân để đọc lại nguyên vẹn ở lần chạy sau.

## Ý tưởng

- **Tệp văn bản truy cập tuần tự**:
  - Ghi có định dạng bằng `Formatter`: `output.format("%d %s %.2f%n", ...)` rồi `output.close()`.
  - Đọc tuần tự bằng `Scanner(new File(...))`: lặp `while (input.hasNext())` để đọc từng trường `nextInt()`, `next()`, `nextDouble()`.
- **Tệp nhị phân chứa đối tượng**:
  - Lớp của đối tượng phải cài đặt giao diện đánh dấu `java.io.Serializable` (tuần tự hóa được).
  - Dùng `ObjectOutputStream.writeObject(obj)` để **tuần tự hóa** (ghi đối tượng ra tệp) và `ObjectInputStream.readObject()` (kèm ép kiểu) để **giải tuần tự hóa** (đọc lại đối tượng). Khi đọc tới cuối tệp sẽ gặp `EOFException`.

## Cài đặt

```java
import java.io.Serializable;

public class AccountRecordSerializable implements Serializable {
    private int account;
    private String firstName;
    private double balance;

    public AccountRecordSerializable(int account, String firstName, double balance) {
        this.account = account;
        this.firstName = firstName;
        this.balance = balance;
    }
}
```

Ghi bản ghi văn bản bằng `Formatter`:

```java
import java.io.FileNotFoundException;
import java.util.Formatter;

public class CreateTextFileDemo {
    public static void main(String[] args) throws FileNotFoundException {
        Formatter output = new Formatter("clients.txt");
        output.format("%d %s %.2f%n", 100, "An", 24.50);
        output.close();
    }
}
```

## Lỗi thường gặp

- Ghi đối tượng bằng `ObjectOutputStream` nhưng quên `implements Serializable` trên lớp đối tượng, gây `NotSerializableException`.
- Đọc sai thứ tự kiểu dữ liệu giữa lúc ghi (`Formatter`) và lúc đọc (`Scanner`), gây `InputMismatchException` hoặc `NoSuchElementException`.

## Tự kiểm tra

1. Điều kiện bắt buộc đối với một lớp để các đối tượng của nó có thể ghi và đọc qua `ObjectOutputStream` / `ObjectInputStream` là gì?

> **Đáp án**
> Lớp đó phải cài đặt giao diện `java.io.Serializable` (`implements Serializable`).
