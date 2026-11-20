# Tổ chức gói (package) và ArrayList

## Vì sao cần

Khi dự án có hàng chục lớp, việc để tất cả trong một thư mục dễ gây lộn xộn và trùng tên lớp. Gói (`package`) giúp phân nhóm lớp theo thư mục, còn `ArrayList` giải quyết nhược điểm kích thước cố định của mảng thông thường.

## Ý tưởng

### Tổ chức gói (`package`)
- Khai báo `package path.to.pkg;` ở dòng đầu tiên của tệp nguồn; tệp phải nằm đúng trong thư mục `path/to/pkg/`.
- Các lớp trong **cùng gói** và các lớp trong `java.lang` nhìn thấy nhau mà không cần `import`.
- Muốn dùng lớp ở gói khác, dùng `import pkg.ClassName;` hoặc `import pkg.*;` — và lớp được dùng phải khai báo `public`.

### Kiểu dữ liệu `ArrayList` (`java.util.ArrayList`)
- Khắc phục nhược điểm kích thước cố định của mảng: tự động co giãn khi thêm/xóa phần tử.
- Các thao tác cơ bản: `size()`, `add(elem)`, `get(index)`, `set(index, elem)`, `remove(index)`.

## Cài đặt

```java
package demo;

import java.util.ArrayList;

public class PackageAndListDemo {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("An");
        names.add("Binh");
        names.set(1, "Chi");
        System.out.println("Size: " + names.size());
        System.out.println("Item 1: " + names.get(1));
        names.remove(0);
    }
}
```

## Lỗi thường gặp

- Khai báo `package adult;` trong tệp nguồn nhưng lại để tệp ở thư mục gốc thay vì thư mục `adult/`.
- Cố dùng một lớp từ gói khác khi lớp đó không khai báo `public`.
- Dùng `list.length` hoặc `list[i]` cho `ArrayList` thay vì `list.size()` và `list.get(i)`.

## Tự kiểm tra

1. Để sử dụng lớp `Scanner` hay `ArrayList` trong gói `java.util`, tại sao bạn phải `import`, trong khi dùng `String` hay `System` thì không cần?

> **Đáp án**
> Vì `String` và `System` thuộc gói `java.lang` — gói duy nhất được Java tự động nạp vào mọi chương trình; còn `Scanner` và `ArrayList` nằm trong `java.util` nên phải khai báo `import`.
