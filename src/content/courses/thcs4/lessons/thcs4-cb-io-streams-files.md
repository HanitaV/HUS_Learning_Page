# Luồng vào/ra (I/O) và xử lý tệp

## Vì sao cần

Dữ liệu nhập từ bàn phím sẽ mất khi chương trình tắt. Để lưu trữ lâu dài trên đĩa hoặc trao đổi dữ liệu với các tệp tin, chương trình cần làm việc với hệ thống luồng vào/ra (`java.io`).

## Ý tưởng

- **Luồng (Stream)**: biểu diễn nguồn vào hoặc đích ra của dữ liệu (bàn phím, màn hình, tệp trên đĩa). Java tự tạo 3 luồng chuẩn: `System.in`, `System.out`, `System.err`.
- **Hai loại tệp và luồng tương ứng** trong `java.io`:
  - *Tệp nhị phân* (dữ liệu byte): dùng `FileInputStream` / `FileOutputStream` (kế thừa `InputStream` / `OutputStream`).
  - *Tệp văn bản* (dữ liệu ký tự): dùng `FileReader` / `FileWriter` (kế thừa `Reader` / `Writer`), hoặc `Scanner` / `Formatter`.
- **Lớp `File`**: lấy thông tin tệp/thư mục (`exists()`, `isFile()`, `isDirectory()`, `length()`, `getAbsolutePath()`, `list()`).

## Cài đặt

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyFile {
    public static void main(String[] args) throws IOException {
        FileInputStream in = null;
        FileOutputStream out = null;
        try {
            in = new FileInputStream("input.txt");
            out = new FileOutputStream("output.txt");
            int c;
            while ((c = in.read()) != -1) {
                out.write(c);
            }
        } finally {
            if (in != null) in.close();
            if (out != null) out.close();
        }
    }
}
```

## Lỗi thường gặp

- Quên gọi `close()` sau khi đọc/ghi tệp, gây rò rỉ tài nguyên hoặc dữ liệu trong bộ đệm chưa được ghi xuống đĩa.
- Không xử lý hoặc khai báo `throws IOException` khi khởi tạo và thao tác với `FileInputStream` / `FileOutputStream`.

## Tự kiểm tra

1. Phương thức `in.read()` trên `FileInputStream` trả về giá trị bao nhiêu khi đã đọc tới cuối tệp?

> **Đáp án**
> Trả về `-1` (khi chưa hết tệp, nó trả về giá trị byte đọc được trong khoảng $0 \dots 255$).
