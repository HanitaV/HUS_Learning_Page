# Kiến trúc Java Collections Framework và List

## Vì sao cần

Mảng tĩnh (`T[]`) trong Java có kích thước cố định, rất bất tiện khi số lượng phần tử thay đổi liên tục. **Java Collections Framework (JCF)** trong gói `java.util` cung cấp bộ giao diện và lớp cài đặt sẵn cho các cấu trúc dữ liệu phổ biến như danh sách, tập hợp, hàng đợi và ánh xạ.

## Ý tưởng

Kiến trúc gốc của JCF:
- `Iterable<E>`: giao diện gốc cho phép duyệt bằng vòng lặp `for-each`.
- `Collection<E>`: kế thừa `Iterable<E>`, đại diện cho một nhóm phần tử; định nghĩa các thao tác chung (`add`, `remove`, `size`, `contains`, `isEmpty`).
- `List<E>`: danh sách có thứ tự theo chỉ số (bắt đầu từ 0), **cho phép phần tử trùng lặp**.

Hai cài đặt phổ biến nhất của `List<E>`:
- **`ArrayList<E>`**: dùng mảng tự co giãn bên dưới. Truy cập theo chỉ số `get(i)` đạt $O(1)$, nhưng chèn/xóa ở đầu hoặc giữa tốn $O(n)$ do phải dịch phần tử.
- **`LinkedList<E>`**: dùng danh sách liên kết đôi. Chèn/xóa ở hai đầu đạt $O(1)$, nhưng truy cập `get(i)` tốn $O(n)$ vì phải duyệt từ đầu/cuối.

## Cài đặt

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ListDemo {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();   // lập trình theo interface List
        names.add("An");
        names.add("Bình");
        names.add("An");                          // List cho phép trùng lặp
        System.out.println(names.get(1));         // "Bình"

        List<String> queueBacked = new LinkedList<>(names);
        queueBacked.add(0, "Chi");
    }
}
```

## Lỗi thường gặp

- Khai báo `ArrayList<String> list = new ArrayList<>();` thay vì `List<String> list = new ArrayList<>();`: tự trói buộc vào một cài đặt cụ thể, khó đổi sang `LinkedList` khi cần.
- Dùng `List<int>` thay vì `List<Integer>`: Generics trong Java không chấp nhận kiểu nguyên thủy.

## Tự kiểm tra

1. Nếu bài toán cần truy cập ngẫu nhiên `get(index)` hàng triệu lần và ít khi chèn ở đầu danh sách, nên chọn `ArrayList` hay `LinkedList`?

> **Đáp án**
> Nên chọn **`ArrayList`**, vì `get(index)` của `ArrayList` có độ phức tạp $O(1)$, trong khi `LinkedList` mất $O(n)$.
