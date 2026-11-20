# Iterator, duyệt an toàn và lớp Collections

## Vì sao cần

Mỗi cấu trúc dữ liệu (`ArrayList`, `LinkedList`, `HashSet`) lưu trữ phần tử khác nhau bên trong. Ta cần một cách duyệt thống nhất mà không phụ thuộc cấu trúc nội tại, đồng thời tránh lỗi khi vừa duyệt vừa xóa phần tử. Ngoài ra, lớp `java.util.Collections` cung cấp sẵn nhiều thuật toán xử lý tập hợp rất tiện lợi.

## Ý tưởng

- **`Iterator<E>`**: đối tượng tách riêng hành vi duyệt khỏi collection, cung cấp 3 phương thức: `hasNext()`, `next()`, và `remove()`.
- **`ListIterator<E>`**: mở rộng `Iterator` cho `List`, cho phép duyệt **hai chiều** (`hasPrevious()`, `previous()`) và sửa/thêm phần tử an toàn.
- **Sửa collection khi đang duyệt**: nếu dùng vòng `for-each` hoặc gọi trực tiếp `list.remove(...)` trong khi đang dùng `Iterator`, Java ném ra **`ConcurrentModificationException`** (cơ chế *fail-fast*). Cách an toàn là gọi `it.remove()`.
- **`java.util.Collections`**: lớp chứa các phương thức `static` như `sort()`, `binarySearch()`, `reverse()`, `shuffle()`, `min()`, `max()`.

## Cài đặt

```java
import java.util.*;

public class IteratorDemo {
    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>(List.of(1, 2, 3, 4, 5));
        Iterator<Integer> it = nums.iterator();
        while (it.hasNext()) {
            if (it.next() % 2 == 0) {
                it.remove();         // xóa an toàn qua Iterator
            }
        }
        Collections.reverse(nums);   // [5, 3, 1]
    }
}
```

## Lỗi thường gặp

- Xóa phần tử bằng `list.remove(x)` bên trong vòng lặp `for (Integer x : list)`: gây `ConcurrentModificationException`.
- Gọi `it.remove()` trước khi gọi `it.next()` hoặc gọi `it.remove()` hai lần liên tiếp cho một phần tử: gây `IllegalStateException`.

## Tự kiểm tra

1. Vì sao vòng lặp `for-each` không thể dùng để xóa phần tử khỏi `ArrayList` một cách an toàn?

> **Đáp án**
> Vì `for-each` ngầm sử dụng `Iterator` nhưng không cho ta truy cập đối tượng `Iterator` để gọi `it.remove()`. Nếu gọi `list.remove(...)` trực tiếp sẽ làm sai bộ đếm sửa đổi nội bộ và ném `ConcurrentModificationException`.
