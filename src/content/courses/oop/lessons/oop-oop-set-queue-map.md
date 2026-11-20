# Set, Queue và Map trong JCF

## Vì sao cần

Không phải bài toán nào cũng phù hợp với `List`. Khi cần loại bỏ phần tử trùng lặp, xử lý theo thứ tự ưu tiên hoặc tra cứu nhanh theo cặp khóa-giá trị (như từ điển hay đếm tần suất từ), JCF cung cấp ba giao diện chuyên biệt là `Set<E>`, `Queue<E>` và `Map<K, V>`.

## Ý tưởng

1. **`Set<E>` (Tập hợp)**: **không cho phép phần tử trùng lặp** (dựa trên `equals`/`hashCode` hoặc phép so sánh).
   - `HashSet<E>`: dùng bảng băm, thêm/tìm/xóa trung bình $O(1)$, không giữ thứ tự.
   - `LinkedHashSet<E>`: giữ thứ tự chèn.
   - `TreeSet<E>`: dùng cây đỏ-đen cân bằng, các phần tử tự động **được sắp xếp** ($O(\log n)$).
2. **`Queue<E>` (Hàng đợi)**: thêm/lấy phần tử theo quy tắc (thường là FIFO hoặc ưu tiên).
   - `LinkedList<E>`: cài đặt `Queue` theo FIFO.
   - `PriorityQueue<E>`: dùng đống (heap), luôn lấy ra phần tử nhỏ nhất (hoặc lớn nhất theo `Comparator`) với $O(\log n)$.
3. **`Map<K, V>` (Ánh xạ)**: lưu các cặp **khóa – giá trị** (không kế thừa `Collection<E>`); khóa là duy nhất, mỗi khóa ánh xạ tới đúng một giá trị.
   - `HashMap<K, V>`: bảng băm $O(1)$ trung bình; `TreeMap<K, V>`: khóa sắp xếp $O(\log n)$.

## Cài đặt

```java
import java.util.*;

public class JcfStructuresDemo {
    public static void main(String[] args) {
        Set<String> unique = new HashSet<>(List.of("Java", "OOP", "Java"));
        System.out.println(unique.size());   // 2

        Map<String, Integer> freq = new HashMap<>();
        for (String w : List.of("a", "b", "a")) {
            freq.put(w, freq.getOrDefault(w, 0) + 1);
        }
        System.out.println(freq);            // {a=2, b=1}
    }
}
```

## Lỗi thường gặp

- Đưa đối tượng tự định nghĩa vào `HashSet` hoặc làm khóa của `HashMap` nhưng quên ghi đè `equals()` và `hashCode()` ([Lớp gốc Object và hợp đồng equals/hashCode](#/courses/oop/lessons/oop-oop-object-class-contract)).
- Đưa phần tử vào `TreeSet` hoặc `PriorityQueue` khi lớp phần tử chưa cài `Comparable` và cũng không truyền `Comparator`: gây `ClassCastException` lúc chạy.
- Nghĩ `PriorityQueue` duyệt bằng `for-each` sẽ in ra thứ tự đã sắp xếp: thực chất chỉ `poll()` mới đảm bảo lấy ra theo thứ tự ưu tiên!

## Tự kiểm tra

1. So sánh sự khác biệt giữa `HashSet` và `TreeSet` về thứ tự phần tử và độ phức tạp thao tác tìm kiếm.

> **Đáp án**
> `HashSet` không đảm bảo thứ tự, tìm kiếm trung bình $O(1)$. `TreeSet` luôn giữ các phần tử theo thứ tự sắp xếp tăng dần (hoặc theo `Comparator`), tìm kiếm $O(\log n)$.
