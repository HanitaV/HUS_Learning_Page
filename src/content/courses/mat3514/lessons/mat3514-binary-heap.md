# Đống nhị phân (Binary Heap)

## Vì sao cần

Cài [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt) bằng danh sách luôn có một thao tác tốn $O(n)$. Đống nhị phân (binary heap) khắc phục điều đó bằng cách dùng hình dạng của một cây nhị phân làm điểm cân bằng: không sắp xếp toàn bộ dữ liệu, chỉ giữ đủ trật tự để phần tử nhỏ nhất luôn ở gốc. Nhờ vậy cả `insert` lẫn `removeMin` chạy trong $O(\log n)$. Hãy quan sát mô phỏng bên dưới và để ý mỗi nút luôn không nhỏ hơn cha của nó.

## Ý tưởng

Một **đống nhỏ nhất** (min-heap) là cây nhị phân lưu khóa ở các nút và thỏa hai tính chất:

1. **Tính chất thứ tự đống (heap-order)**: với mọi nút $v$ khác gốc, $\text{key}(v) \ge \text{key}(\text{parent}(v))$. Suy ra khóa nhỏ nhất ở gốc, và mọi đường từ gốc xuống lá có khóa không giảm.
2. **Tính chất cây hoàn chỉnh**: là [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree) hoàn chỉnh; mọi mức đầy trừ mức cuối, mức cuối lấp từ trái sang phải. **Nút cuối** (last node) là nút phải nhất ở mức sâu nhất.

Hai điểm cần phân biệt: đống không sắp xếp toàn bộ (anh em không có quan hệ lớn nhỏ cố định, và nút ở mức nông có thể lớn hơn nút ở mức sâu khác nhánh), và đây là đống nhỏ nhất; đống lớn nhất (max-heap) đổi chiều bất đẳng thức.

Vì cây hoàn chỉnh nên đống lưu gọn trong mảng theo chỉ số từ 1, như đã nêu ở [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr):

$$\text{left}(i)=2i,\qquad \text{right}(i)=2i+1,\qquad \text{parent}(i)=\lfloor i/2\rfloor.$$

Tính chất thứ tự đống thành $T[\lfloor i/2\rfloor] \le T[i]$ với mọi $1 < i \le n$. Nút cuối nằm ở chỉ số $n$, nên theo dõi nút cuối chỉ là theo dõi biến $n$.

**Chiều cao.** Đống $n$ nút có chiều cao $h = \lfloor \log_2 n \rfloor$ (độ sâu của gốc là 0). Lý do: các độ sâu $0..h-1$ đầy, chứa $1+2+\dots+2^{h-1}=2^h-1$ nút, và độ sâu $h$ có ít nhất một nút nên $n \ge 2^h$. Vậy $h \le \log_2 n$, tức $h=O(\log n)$. Chứng minh đầy đủ ở [Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height).

## Ví dụ chạy tay

Xét đống nhỏ nhất 10 phần tử, lưu mảng với $T[0]$ không dùng:

| i | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| T[i] | 12 | 19 | 16 | 22 | 29 | 24 | 52 | 28 | 42 | 35 |

```text
                 12
           19          16
        22    29     24    52
      28 42  35
```

Kiểm tra tính chất thứ tự đống, mỗi nút so với cha:

| Nút i | Khóa | Cha $\lfloor i/2\rfloor$ | Khóa cha | $\ge$ ? |
|---|---|---|---|---|
| 2 | 19 | 1 | 12 | có |
| 3 | 16 | 1 | 12 | có |
| 4 | 22 | 2 | 19 | có |
| 5 | 29 | 2 | 19 | có |
| 6 | 24 | 3 | 16 | có |
| 7 | 52 | 3 | 16 | có |
| 8 | 28 | 4 | 22 | có |
| 9 | 42 | 4 | 22 | có |
| 10 | 35 | 5 | 29 | có |

Mọi dòng đều thỏa, và cây hoàn chỉnh vì 10 ô liên tiếp từ 1, nên đây là đống hợp lệ. Tại sao mức cuối chỉ có `28, 42, 35`? Vì $n=10$, mức 0 đến 2 chứa 7 nút và 3 nút còn lại ở mức 3, lấp từ trái. Chiều cao $h=\lfloor\log_2 10\rfloor=3$.

Lưu ý `52` ở mức 2 lớn hơn `28` ở mức 3 (khác nhánh), và hai anh em `22`, `29` không có quan hệ lớn nhỏ bắt buộc: đống chỉ ràng buộc cha với con.

Bây giờ đổi `35` thành `25` thì dòng cuối thành $25 < 29$, vi phạm. Cây vẫn hoàn chỉnh nhưng không còn là đống.

## Cài đặt

Khung lớp cùng hàm kiểm tra đống bằng đúng công thức chỉ số. `upHeap` và `downHeap` được viết ở [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) và [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin).

```java
import java.util.Arrays;
import java.util.NoSuchElementException;

public class MinHeap {
    private int[] t = new int[16];   // t[0] không dùng; phần tử ở t[1..n]
    private int n = 0;

    public int size() { return n; }
    public boolean isEmpty() { return n == 0; }

    public int min() {
        if (n == 0) throw new NoSuchElementException("Đống rỗng");
        return t[1];                 // phần tử nhỏ nhất luôn ở gốc
    }

    private static int parent(int i) { return i / 2; }
    private static int left(int i)   { return 2 * i; }
    private static int right(int i)  { return 2 * i + 1; }

    private void swap(int i, int j) {
        int tmp = t[i]; t[i] = t[j]; t[j] = tmp;
    }

    // Kiểm tra tính chất thứ tự đống (dùng khi gỡ lỗi)
    boolean isHeap() {
        for (int i = 2; i <= n; i++)
            if (t[parent(i)] > t[i]) return false;
        return true;
    }

    // insert, upHeap: xem bài heap-insert
    // removeMin, downHeap: xem bài heap-removemin
}
```

`min` chỉ đọc một ô nên là $O(1)$. Tính chất cây hoàn chỉnh được đảm bảo tự động vì ta luôn thêm và bớt ở ô $n$.

## Độ phức tạp

| Thao tác | Thời gian | Lý do |
|---|---|---|
| `min` | $O(1)$ | đọc `t[1]` |
| `insert` | $O(\log n)$ | đi lên tối đa $h$ mức, xem [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) |
| `removeMin` | $O(\log n)$ | đi xuống tối đa $h$ mức, xem [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin) |
| Bộ nhớ | $O(n)$ | mảng không cần tham chiếu |

Mọi cận $O(\log n)$ đều đến từ chiều cao $h=\lfloor\log_2 n\rfloor$ của cây hoàn chỉnh. Tra [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o) nếu cần nhắc lại ký hiệu.

## Lỗi thường gặp

- Nhầm đống với cây tìm kiếm: trong [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property) con trái nhỏ hơn gốc nhỏ hơn con phải, còn đống chỉ yêu cầu con $\ge$ cha, không có quan hệ giữa hai anh em.
- Tin rằng mảng của đống đã sắp xếp. Ví dụ trên không tăng dần (`19, 16` ở chỉ số 2, 3).
- Dùng công thức chỉ số 1 trên mảng bắt đầu từ 0 (hoặc ngược lại); trong slide, công thức cha cũng bị trộn hai quy ước.
- Cho rằng đống có thể tìm nhanh một khóa bất kỳ; chỉ có phần tử nhỏ nhất là truy cập $O(1)$, tìm khóa khác vẫn $O(n)$.
- Làm hỏng tính chất cây hoàn chỉnh bằng cách chèn hay xóa ở vị trí khác ô $n$.

## So sánh / liên hệ

Đống là cách cài [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt) cân bằng nhất giữa `insert` và `removeMin`. Nó cũng là nền của sắp xếp vun đống ([Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort)) và là cấu trúc dùng trong [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) và [Thuật toán Dijkstra](#/courses/mat3514/lessons/mat3514-dijkstra).

## Luyện tập

- Hai thao tác cập nhật nằm ở [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) và [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin); làm chúng ngay sau bài này.
- [Bài tập: cài đặt hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-hw-priority-queue) yêu cầu cài đặt `MinHeapPriorityQueue` bằng mảng với `upHeap` và `downHeap`.
- Tự luyện: mảng `[3, 8, 5, 10, 9, 6, 7]` (chỉ số từ 1) có phải đống nhỏ nhất không? Nếu đổi `10` thành `4` thì sao?

> **Đáp án**
> Có: $T[2]=8\ge T[1]=3$, $T[3]=5\ge3$, $T[4]=10\ge T[2]=8$, $T[5]=9\ge8$, $T[6]=6\ge T[3]=5$, $T[7]=7\ge5$. Đổi `10` thành `4` thì $T[4]=4<T[2]=8$, không còn là đống.

## Tự kiểm tra

1. Hai tính chất xác định đống nhỏ nhất là gì? Nút nào chứa khóa nhỏ nhất?

> **Đáp án**
> Thứ tự đống (khóa mỗi nút không nhỏ hơn khóa cha) và cây hoàn chỉnh. Khóa nhỏ nhất ở gốc.

2. Trong đống lưu mảng 1-based có $n=15$ nút, nút ở chỉ số 7 có cha và con ở đâu? Nút nào là lá đầu tiên?

> **Đáp án**
> Cha ở chỉ số 3, con ở 14 và 15. Lá đầu tiên là chỉ số 8 (vì $2i>n$ khi $i\ge 8$).

3. Đống có 1000 phần tử thì chiều cao khoảng bao nhiêu và vì sao điều đó quan trọng?

> **Đáp án**
> $\lfloor\log_2 1000\rfloor=9$. Mỗi thao tác chèn hay xóa đi tối đa 9 mức, nên chỉ vài chục bước thay vì cỡ 1000 như danh sách.
