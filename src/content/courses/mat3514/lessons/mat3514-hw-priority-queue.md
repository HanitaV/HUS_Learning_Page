# Bài tập: cài đặt hàng đợi ưu tiên

## Đề bài

Đây là Assignment 6 (Priority Queue and Heap) của học phần. Mục tiêu: phân biệt hàng đợi ưu tiên với hàng đợi thường, cài hàng đợi ưu tiên bằng mảng và cấu trúc liên kết, cài đống bằng mảng, và dùng đống để sắp xếp. Đề cho các gói để chọn:

- Combo 1: Bài 1, 2, 3 (cơ bản), 80 điểm.
- Combo 2: Bài 1, 4, 5 (nâng cao 1), 85 điểm.
- Combo 3: Bài 2, 3, 6 (nâng cao 2), 90 điểm.
- Combo 4: Bài 5, 6 (nâng cao 3), 100 điểm.

Bài nộp kèm một tệp `.doc` hoặc `.txt` thuyết minh gói đã chọn, thuật toán, tài liệu tham khảo, định dạng input và yêu cầu hệ thống; mã đặt trong package `Hw6_<idSinhvien>_<Hovaten>`.

**Bài 1.** Tạo giao diện phần tử và hàng đợi ưu tiên:

```java
public interface Entry<K, E> {
    K getKey();
    E getValue();
}
public interface PriorityQueueInterface<K, E> {
    int size();
    boolean isEmpty();
    void insert(Entry<K, E> entry);
    void insert(K k, E e);
    Entry<K, E> removeMin();
    Entry<K, E> min();
}
```

(Đề gốc viết nhầm `Entry<k, E>` bằng chữ `k` thường; khi gõ phải dùng `K`.)

1. a) Cài `UnsortedArrayPriorityQueue<K extends Comparable, E>` bằng mảng, với lớp `ArrEntry<K,E>` cài `Entry`, mảng `ArrEntry<K,E>[] array`, biến đếm `n` và kích thước mặc định `defaultsize = 1000`.
2. b) Cài `SortedArrayPriorityQueue` bằng mảng đã sắp xếp, theo gợi ý ý a.
3. c) Cài `UnsortedLinkedPriorityQueue` bằng danh sách liên kết, với lớp nút `NodeEntry<K,E>` (có `key`, `element`, `next`) và các trường `head`, `tail`, `n`.
4. d) Cài `SortedLinkedPriorityQueue` bằng danh sách liên kết đã sắp xếp, theo gợi ý ý c.
5. e) Viết hàm kiểm thử các kiểu trên với: danh sách số nguyên (giá trị phần tử dùng làm khóa), và danh sách đối tượng có khóa khác giá trị, ví dụ hàng hóa có tên (giá trị) và giá tiền (khóa).

**Bài 2.** Cài hàng đợi ưu tiên bằng đống trong mảng, `MinHeapPriorityQueue<K extends Comparable, E>` (đề gợi ý kế thừa `SortedArrayPriorityQueue`) với mảng `ArrEntry<K,E> heapPQ[]` và các phương thức cập nhật `protected void upHeap()`, `protected void downHeap()`.

**Bài 3.** Dùng đống để viết hàm `HeapSort` sắp xếp dãy số tăng dần; chạy và so sánh thời gian của BubbleSort, InsertionSort, SelectionSort, HeapSort, QuickSort và MergeSort; vẽ biểu đồ so sánh.

**Bài 4.** Dùng bốn kiểu hàng đợi ưu tiên ở Bài 1: lập danh sách $n$ đối tượng $(d, n)$ với $d$ nguyên và dùng giá trị làm khóa; thực hiện `insert` và `removeMin` với nhiều giá trị $n$ khác nhau và lập bảng thời gian (mili giây) có dạng hàng là (thao tác, kiểu hàng đợi), cột là $n = 10^3, 10^4, \dots, 10^8$.

**Bài 5.** Dùng một hàng đợi ưu tiên ở Bài 1 để mô phỏng hệ thống điều hành không lưu đơn giản. Mỗi máy bay đăng ký sự kiện cất hoặc hạ cánh với một nhãn thời gian (thời điểm dự kiến). Chương trình phải làm hiệu quả hai việc: thêm một đăng ký có nhãn thời gian, và lấy ra sự kiện sắp xảy ra có nhãn nhỏ nhất (tham khảo Goodrich, bài R-9.4).

**Bài 6.** Dùng `HeapPriorityQueue` ở Bài 2 để mô phỏng hệ thống giao dịch chứng khoán đơn giản, quản lý các lệnh mua và bán (tham khảo Goodrich, bài C-9.48 và P-9.54).

## Kiến thức cần ôn

- [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt): giao diện `insert`, `min`, `removeMin`, và bảng chi phí khi cài bằng danh sách chưa sắp xếp hoặc đã sắp xếp (Bài 1, 4).
- [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) và [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list): cách cài mảng có mở rộng và danh sách liên kết có `head`, `tail` (Bài 1a đến 1d).
- [Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface) và [Lập trình tổng quát (Generics)](#/courses/mat3514/lessons/mat3514-java-generics): ràng buộc `K extends Comparable` và so sánh khóa bằng `compareTo` (mọi ý).
- [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) và [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr): lưu đống trong mảng bằng chỉ số $2i$, $2i+1$, $\lfloor i/2\rfloor$ (Bài 2).
- [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) và [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin): `upHeap` và `downHeap` (Bài 2).
- [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) cùng [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): quy trình HeapSort và cách đo thời gian các thuật toán sắp xếp (Bài 3).
- [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o): để giải thích kết quả bảng thời gian (Bài 4).

## Hướng tiếp cận

**Bài 1.** Viết trước hai giao diện, rồi cài từng lớp theo thứ tự dễ đến khó: mảng chưa sắp, danh sách chưa sắp, mảng đã sắp, danh sách đã sắp. Với mỗi lớp xác định rõ thao tác nào là $O(1)$ và thao tác nào là $O(n)$ theo [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt), rồi chọn cấu trúc sao cho đúng như bảng đó. Quyết định ngay cách xử lý hàng đợi rỗng (gợi ý: `min` và `removeMin` trả về `null`) và cách xử lý khóa trùng.

**Bài 2.** Lưu đống ở `heap[1..n]`. `insert` đặt vào $n+1$ rồi `upHeap`; `removeMin` thay gốc bằng nút cuối rồi `downHeap`. Cần chú ý hàm `upHeap()`, `downHeap()` trong đề không có tham số; ở đây ta thêm tham số chỉ số cho tiện kiểm thử. Đề gợi ý kế thừa `SortedArrayPriorityQueue` nhưng đống không cần mã của lớp đó, chỉ cần cài giao diện trực tiếp.

**Bài 3.** HeapSort theo slide: chèn mọi phần tử vào đống rồi `removeMin` $n$ lần ghi lại vào mảng. Sau đó dùng chung một hàm đo thời gian cho cả sáu thuật toán với cùng dữ liệu ngẫu nhiên có kích thước tăng dần, lặp nhiều lần và lấy trung bình.

**Bài 4.** Đo riêng thời gian $n$ lần `insert` và $n$ lần `removeMin`. Dự đoán trước theo lý thuyết rồi so với kết quả đo; với $n=10^8$ bộ nhớ có thể không đủ, hãy nêu lý do trong bản thuyết minh. Các kiểu có thao tác $O(n)$ sẽ rất chậm với $n$ lớn.

**Bài 5.** Nhãn thời gian là khóa, thông tin chuyến bay (cất cánh hay hạ cánh, mã chuyến) là giá trị. Thêm sự kiện là `insert`; điều phối là `removeMin`. Chọn kiểu cài đặt hiệu quả nhất cho cả hai thao tác.

**Bài 6.** Cần hai hàng đợi: lệnh mua lưu theo giá cao nhất trước (đảo so sánh, hoặc dùng khóa âm), lệnh bán lưu theo giá thấp nhất trước. Khi giá mua tốt nhất $\ge$ giá bán tốt nhất thì khớp lệnh.

## Gợi ý theo bậc

::: Gợi ý 1 (Bài 1, cấu trúc dữ liệu)
Với mảng chưa sắp xếp, `insert` chỉ ghi vào `array[n++]`. `removeMin` quét tìm vị trí khóa nhỏ nhất, lấy phần tử đó ra rồi lấp chỗ trống bằng phần tử cuối để không phải dịch mảng. Với danh sách đã sắp xếp, đặt phần tử nhỏ nhất ở `head` để `removeMin` chỉ cần bỏ nút đầu.
:::

::: Gợi ý 2 (Bài 1, khóa trùng và rỗng)
Khi chèn vào danh sách đã sắp xếp, nếu dừng ở khóa lớn hơn **hoặc bằng** thì các khóa trùng ra theo thứ tự đảo; dừng ở khóa **lớn hơn hẳn** thì chúng ra theo thứ tự vào. Hãy chọn một cách và ghi vào bản thuyết minh. Với hàng đợi rỗng, `min()` và `removeMin()` trả về `null` thay vì ném lỗi.
:::

::: Gợi ý 3 (Bài 2, down-heap)
Trong `downHeap`, kiểm tra `2*i <= n` trước khi xét con; chọn con nhỏ hơn bằng `heap[2*i+1]` chỉ khi `2*i+1 <= n`; dừng khi khóa tại $i$ nhỏ hơn hoặc bằng con nhỏ hơn.
:::

::: Gợi ý 4 (Bài 3 và 4, đo thời gian)
Dùng `System.nanoTime()` quanh đoạn cần đo, khởi tạo dữ liệu bên ngoài đoạn đo, và để máy "khởi động" bằng một lần chạy thử trước. Xem [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark) để có khung đo đã dùng ở bài sắp xếp.
:::

::: Gợi ý 5 (Bài 5 và 6)
Lớp sự kiện chứa `time` và mô tả; hàng đợi giữ `Entry<Integer, Event>`. Với bài chứng khoán, mua và bán dùng hai hàng đợi riêng; bên mua có thể dùng khóa là $-$giá để vẫn dùng được `removeMin`.
:::

## Lời giải tham khảo

::: Lời giải Bài 1, giao diện và ý a (mảng chưa sắp xếp)
Giao diện như ở phần đề bài. Cài đặt:

```java
public class UnsortedArrayPriorityQueue<K extends Comparable<K>, E>
        implements PriorityQueueInterface<K, E> {

    protected static class ArrEntry<K, E> implements Entry<K, E> {
        K key;
        E element;
        public ArrEntry(K k, E e) { key = k; element = e; }
        public K getKey() { return key; }
        public E getValue() { return element; }
    }

    private ArrEntry<K, E>[] array;
    private int n = 0;
    private static final int DEFAULT_SIZE = 1000;

    @SuppressWarnings("unchecked")
    public UnsortedArrayPriorityQueue() {
        array = (ArrEntry<K, E>[]) new ArrEntry[DEFAULT_SIZE];
    }

    public int size() { return n; }
    public boolean isEmpty() { return n == 0; }

    public void insert(Entry<K, E> entry) {          // O(1) khấu hao
        insert(entry.getKey(), entry.getValue());
    }

    public void insert(K k, E e) {
        if (n == array.length) array = java.util.Arrays.copyOf(array, 2 * n);
        array[n++] = new ArrEntry<>(k, e);
    }

    private int indexOfMin() {                        // O(n)
        int imin = 0;
        for (int i = 1; i < n; i++)
            if (array[i].key.compareTo(array[imin].key) < 0) imin = i;
        return imin;
    }

    public Entry<K, E> min() {
        return n == 0 ? null : array[indexOfMin()];
    }

    public Entry<K, E> removeMin() {
        if (n == 0) return null;
        int i = indexOfMin();
        ArrEntry<K, E> result = array[i];
        array[i] = array[--n];                        // lấp chỗ bằng phần tử cuối
        array[n] = null;
        return result;
    }
}
```
:::

::: Lời giải Bài 1, ý b và c (mảng đã sắp xếp, danh sách chưa sắp xếp)
Ý b: giữ mảng giảm dần theo khóa. `insert` tìm vị trí từ cuối rồi dịch (xem đoạn mã ở [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt)), `min` đọc `array[n-1]`, `removeMin` trả `array[--n]`. Chi phí: `insert` $O(n)$, hai thao tác kia $O(1)$.

Ý c: giữ `head` và `tail`. `insert` nối nút mới vào `tail` ($O(1)$). `min` và `removeMin` duyệt tìm nút có khóa nhỏ nhất, nhớ cả nút đứng trước để gỡ nút ra khỏi danh sách ($O(n)$). Lưu ý cập nhật `head` khi gỡ nút đầu và `tail` khi gỡ nút cuối.
:::

::: Lời giải Bài 1, ý d (danh sách liên kết đã sắp xếp)
```java
public class SortedLinkedPriorityQueue<K extends Comparable<K>, E>
        implements PriorityQueueInterface<K, E> {

    private static class NodeEntry<K, E> implements Entry<K, E> {
        private K key;
        private E element;
        private NodeEntry<K, E> next;
        NodeEntry(K k, E e) { key = k; element = e; }
        public K getKey() { return key; }
        public E getValue() { return element; }
    }

    private NodeEntry<K, E> head;     // phần tử nhỏ nhất
    private int n = 0;

    public int size() { return n; }
    public boolean isEmpty() { return n == 0; }

    public void insert(Entry<K, E> entry) { insert(entry.getKey(), entry.getValue()); }

    public void insert(K k, E e) {                   // O(n)
        NodeEntry<K, E> node = new NodeEntry<>(k, e);
        if (head == null || k.compareTo(head.key) < 0) {
            node.next = head;
            head = node;
        } else {
            NodeEntry<K, E> cur = head;
            while (cur.next != null && cur.next.key.compareTo(k) <= 0) cur = cur.next;
            node.next = cur.next;                    // chèn sau các khóa bằng k: giữ thứ tự vào
            cur.next = node;
        }
        n++;
    }

    public Entry<K, E> min() { return head; }        // O(1)

    public Entry<K, E> removeMin() {                 // O(1)
        if (head == null) return null;
        NodeEntry<K, E> result = head;
        head = head.next;
        n--;
        return result;
    }
}
```
Ý chưa sắp xếp (`UnsortedLinkedPriorityQueue`) làm tương tự nhưng `insert` thêm ở cuối.
:::

::: Lời giải Bài 1, ý e (kiểm thử)
Viết một hàm nhận `PriorityQueueInterface<Integer, String>` để thử chung cho cả bốn kiểu:

```java
static void testInts(PriorityQueueInterface<Integer, Integer> pq) {
    int[] keys = {5, 2, 8, 2, 9, 1};
    for (int k : keys) pq.insert(k, k);
    StringBuilder sb = new StringBuilder();
    while (!pq.isEmpty()) sb.append(pq.removeMin().getKey()).append(' ');
    System.out.println(sb);                // mong đợi: 1 2 2 5 8 9
}

static void testGoods(PriorityQueueInterface<Double, String> pq) {
    pq.insert(15.5, "Sữa");
    pq.insert(8.0, "Bánh");
    pq.insert(22.0, "Cà phê");
    System.out.println(pq.min().getValue());      // Bánh
    System.out.println(pq.removeMin().getValue()); // Bánh
    System.out.println(pq.removeMin().getValue()); // Sữa
}
```
:::

::: Lời giải Bài 2 (đống bằng mảng)
```java
public class MinHeapPriorityQueue<K extends Comparable<K>, E>
        implements PriorityQueueInterface<K, E> {

    private static class HeapEntry<K, E> implements Entry<K, E> {
        final K key; final E element;
        HeapEntry(K k, E e) { key = k; element = e; }
        public K getKey() { return key; }
        public E getValue() { return element; }
    }

    private HeapEntry<K, E>[] heapPQ;     // heapPQ[1..n]; ô 0 không dùng
    private int n = 0;

    @SuppressWarnings("unchecked")
    public MinHeapPriorityQueue() { heapPQ = (HeapEntry<K, E>[]) new HeapEntry[16]; }

    public int size() { return n; }
    public boolean isEmpty() { return n == 0; }

    public void insert(Entry<K, E> entry) { insert(entry.getKey(), entry.getValue()); }

    public void insert(K k, E e) {
        if (n + 1 == heapPQ.length) heapPQ = java.util.Arrays.copyOf(heapPQ, 2 * heapPQ.length);
        heapPQ[++n] = new HeapEntry<>(k, e);
        upHeap(n);
    }

    public Entry<K, E> min() { return n == 0 ? null : heapPQ[1]; }

    public Entry<K, E> removeMin() {
        if (n == 0) return null;
        HeapEntry<K, E> result = heapPQ[1];
        heapPQ[1] = heapPQ[n];
        heapPQ[n] = null;
        n--;
        if (n > 0) downHeap(1);
        return result;
    }

    private int cmp(int i, int j) {
        return heapPQ[i].key.compareTo(heapPQ[j].key);
    }

    private void swap(int i, int j) {
        HeapEntry<K, E> t = heapPQ[i]; heapPQ[i] = heapPQ[j]; heapPQ[j] = t;
    }

    protected void upHeap(int i) {
        while (i > 1 && cmp(i / 2, i) > 0) {
            swap(i / 2, i);
            i /= 2;
        }
    }

    protected void downHeap(int i) {
        while (2 * i <= n) {
            int j = 2 * i;
            if (j + 1 <= n && cmp(j + 1, j) < 0) j++;     // con nhỏ hơn
            if (cmp(i, j) <= 0) break;
            swap(i, j);
            i = j;
        }
    }
}
```
Chi phí: `insert` và `removeMin` $O(\log n)$, `min` $O(1)$.
:::

::: Lời giải Bài 3 (HeapSort và so sánh)
```java
static void heapSort(int[] a) {
    MinHeapPriorityQueue<Integer, Integer> pq = new MinHeapPriorityQueue<>();
    for (int x : a) pq.insert(x, x);            // n lần O(log n)
    for (int i = 0; i < a.length; i++)
        a[i] = pq.removeMin().getKey();         // n lần O(log n)
}
```
Tổng $O(n\log n)$, cần thêm bộ nhớ $O(n)$ nên chưa in-place (slide gợi ý hai cải tiến: sắp tại chỗ trong mảng và dựng đống $O(n)$ từ dưới lên). Với bảng so sánh, kỳ vọng: Bubble, Insertion, Selection tăng theo $n^2$; Heap, Quick, Merge tăng gần $n\log n$. Vẽ biểu đồ có trục thời gian theo thang logarit để thấy cả hai nhóm.
:::

::: Lời giải Bài 4 và 5 (đo đạc và điều phối)
Bài 4: với mỗi kiểu và mỗi $n$, chạy `for i<n: insert(i)` rồi `for i<n: removeMin()`, đo từng giai đoạn. Kỳ vọng: UnsortedArray và UnsortedLinked có `insert` rất nhanh nhưng `removeMin` tăng theo $n^2$ tổng; SortedArray và SortedLinked ngược lại. Bốn kiểu trong bài chưa có đống, nên với $n\ge 10^6$ hãy giảm số lần thử hoặc bỏ các ô quá chậm và ghi chú trong bản thuyết minh.

Bài 5:

```java
class Event {
    final String flight; final boolean takeoff;
    Event(String flight, boolean takeoff) { this.flight = flight; this.takeoff = takeoff; }
}

MinHeapPriorityQueue<Integer, Event> sched = new MinHeapPriorityQueue<>();
sched.insert(930, new Event("VN201", true));      // nhãn thời gian dạng hhmm
sched.insert(915, new Event("VJ118", false));
sched.insert(1000, new Event("QH302", true));
Entry<Integer, Event> next = sched.removeMin();   // 915: VJ118 hạ cánh
```
Dùng đống cho cả hai thao tác $O(\log n)$, tốt hơn danh sách.
:::

## Kiểm tra lời giải

Chạy cùng một bộ kiểm tra trên cả năm kiểu cài đặt và so kết quả.

| Test | Đầu vào (thao tác) | Kết quả mong đợi |
|---|---|---|
| Rỗng | `removeMin()`, `min()` trên hàng đợi mới | cả hai trả về `null`; `isEmpty()` là `true` |
| Một phần tử | `insert(4,"x")`, `removeMin()` | trả về `(4,x)`; sau đó `size()` bằng 0 |
| Thứ tự lấy ra | thêm khóa `5, 2, 8, 2, 9, 1` rồi lấy hết | `1 2 2 5 8 9` |
| Dữ liệu tăng dần | thêm `1..1000` rồi lấy hết | `1..1000` theo thứ tự |
| Dữ liệu giảm dần | thêm `1000..1` rồi lấy hết | `1..1000` theo thứ tự |
| Khóa trùng | thêm `(3,"a")`, `(3,"b")` rồi `removeMin()` | khóa 3, giá trị `a` hoặc `b`, ghi rõ theo quy ước đã chọn |
| `min` không xóa | `insert(7,..)`, `min()`, `size()` | khóa 7; `size()` vẫn là 1 |
| Xen kẽ | `insert 5`, `insert 3`, `removeMin`, `insert 1`, `removeMin`, `removeMin` | `3`, `1`, `5` |

Thêm một kiểm tra riêng cho đống: sau mỗi `insert` và `removeMin`, gọi hàm xác minh tính chất đống như `isHeap` ở [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap); và với Bài 3, so kết quả `heapSort` với `Arrays.sort` trên 1000 mảng ngẫu nhiên, gồm cả mảng rỗng, một phần tử và nhiều khóa trùng.

## Sau bài này

Hãy học tiếp [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) để sắp xếp tại chỗ và dựng đống trong $O(n)$, rồi xem [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) và [Thuật toán Dijkstra](#/courses/mat3514/lessons/mat3514-dijkstra), hai thuật toán đồ thị dùng hàng đợi ưu tiên ở mọi bước chọn.
