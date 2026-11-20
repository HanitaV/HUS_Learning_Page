# Hàng đợi ưu tiên (Priority Queue)

## Vì sao cần

Hàng đợi thường ([Hàng đợi (Queue)](#/courses/mat3514/lessons/mat3514-queue-adt)) phục vụ theo thứ tự đến trước đi trước. Nhiều bài toán lại phục vụ theo mức ưu tiên: máy in in tài liệu ngắn nhất trước, hệ điều hành chạy công việc ngắn nhất trước, sân bay cho chuyến có giờ dự kiến sớm nhất cất cánh trước. Hàng đợi ưu tiên (priority queue) là kiểu dữ liệu trừu tượng cho nhu cầu đó. Mô phỏng bên dưới cho bạn thêm phần tử rồi lấy ra, hãy xem phần tử nào luôn ra trước.

## Ý tưởng

Mỗi phần tử là một **entry** gồm cặp (khóa $k$, giá trị $v$). Khóa là giá trị so sánh được; theo quy ước của slide, khóa nhỏ hơn nghĩa là ưu tiên cao hơn (cũng có thể quy ước ngược lại). Phần tử ra khỏi hàng đợi luôn là phần tử có khóa nhỏ nhất.

Giao diện của ADT (xem [Kiểu dữ liệu trừu tượng (ADT)](#/courses/mat3514/lessons/mat3514-abstraction-adt)):

| Phương thức | Ý nghĩa |
|---|---|
| `insert(k, v)` | Thêm một entry với khóa $k$ và giá trị $v$ |
| `min()` | Trả về (không xóa) entry có khóa nhỏ nhất |
| `removeMin()` | Xóa và trả về entry có khóa nhỏ nhất |
| `size()` | Số entry |
| `isEmpty()` | Có rỗng không |

So với hàng đợi thường: `enqueue(e)` tương ứng `insert(k,v)`, `first()` tương ứng `min()`, `dequeue()` tương ứng `removeMin()`. Khác biệt nằm ở chỗ phần tử ra là phần tử nhỏ nhất, không phải phần tử vào sớm nhất. Việc so sánh khóa dựa trên [Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface), nên kiểu khóa cần cài `Comparable`. Java đã có sẵn `java.util.PriorityQueue`.

Nếu hai entry có khóa bằng nhau, ADT không quy định entry nào ra trước; nếu cần thứ tự ổn định, phải gắn thêm số thứ tự vào khóa.

## Ví dụ chạy tay

Chuỗi thao tác trên hàng đợi ưu tiên rỗng, khóa nguyên, giá trị là chữ cái:

| Thao tác | Trả về | Nội dung sau thao tác (khóa, giá trị) |
|---|---|---|
| `insert(5, A)` | | (5,A) |
| `insert(9, C)` | | (5,A) (9,C) |
| `insert(3, B)` | | (3,B) (5,A) (9,C) |
| `min()` | (3,B) | không đổi |
| `removeMin()` | (3,B) | (5,A) (9,C) |
| `insert(7, D)` | | (5,A) (7,D) (9,C) |
| `removeMin()` | (5,A) | (7,D) (9,C) |
| `removeMin()` | (7,D) | (9,C) |
| `size()` | 1 | |

Thứ tự lấy ra là 3, 5, 7, 9, tức tăng dần, bất kể thứ tự thêm vào. Chính điều này làm hàng đợi ưu tiên thành công cụ sắp xếp, như ở [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort).

## Cài đặt

Slide cài bằng danh sách (mảng hoặc liên kết, xem [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) và [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list)) theo hai chiến lược.

**Danh sách chưa sắp xếp.** `insert` thêm vào cuối. `min` và `removeMin` phải quét cả danh sách để tìm khóa nhỏ nhất.

```java
// Danh sách chưa sắp xếp, mảng a[0..n-1] chứa khóa nguyên
void insert(int k) { a[n++] = k; }                   // O(1)

int removeMin() {                                    // O(n)
    int imin = 0;
    for (int i = 1; i < n; i++) if (a[i] < a[imin]) imin = i;
    int min = a[imin];
    a[imin] = a[--n];                                // lấp chỗ trống bằng phần tử cuối
    return min;
}
```

**Danh sách đã sắp xếp.** Với mảng, ta giữ các khóa giảm dần để phần tử nhỏ nhất nằm ở cuối: `min` và `removeMin` chỉ cần đọc hoặc bỏ phần tử cuối. `insert` phải tìm đúng chỗ, giống một bước của [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort), và dịch các phần tử nhỏ hơn khóa mới.

```java
// Danh sách đã sắp xếp, mảng a[0..n-1] giảm dần
void insert(int k) {                                 // O(n)
    int i = n - 1;
    while (i >= 0 && a[i] < k) { a[i + 1] = a[i]; i--; }
    a[i + 1] = k;
    n++;
}

int min() { return a[n - 1]; }                       // O(1)
int removeMin() { return a[--n]; }                   // O(1)
```

Với danh sách liên kết, lưu tăng dần và lấy phần tử ở đầu danh sách cũng cho `removeMin` là $O(1)$.

Hai cách đều có một thao tác $O(n)$. Cấu trúc tốt hơn là đống nhị phân ở [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap), làm cả hai thao tác trong $O(\log n)$.

## Độ phức tạp

| Cài đặt | `insert` | `min` | `removeMin` |
|---|---|---|---|
| Danh sách chưa sắp xếp | $O(1)$ | $O(n)$ | $O(n)$ |
| Danh sách đã sắp xếp | $O(n)$ | $O(1)$ | $O(1)$ |
| Đống nhị phân | $O(\log n)$ | $O(1)$ | $O(\log n)$ |

Đây là sự đánh đổi (trade-off): danh sách chưa sắp xếp "lười" khi thêm, danh sách đã sắp xếp "chăm" khi thêm để lấy ra nhanh. Đống giữ một trật tự yếu hơn thứ tự toàn phần: chỉ đủ để phần tử nhỏ nhất luôn ở gốc. Nếu thêm $n$ phần tử rồi lấy hết ra, hai danh sách đều tốn $O(n^2)$ và đống chỉ $O(n\log n)$; xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o) để đọc các lớp này.

## Lỗi thường gặp

- Nhầm hàng đợi ưu tiên với danh sách được sắp xếp: chỉ phần tử nhỏ nhất được đảm bảo, các phần tử còn lại không nhất thiết có thứ tự trong bộ nhớ.
- Quên rằng `removeMin` trên hàng đợi rỗng phải xử lý riêng (trả về `null` hoặc ném ngoại lệ).
- Trộn lẫn quy ước: dùng "khóa lớn ưu tiên hơn" trong khi code so sánh theo "khóa nhỏ ưu tiên hơn".
- Với danh sách chưa sắp xếp, tìm min nhưng lại xóa phần tử đầu thay vì phần tử tại vị trí nhỏ nhất.
- Kỳ vọng các khóa trùng ra theo thứ tự vào; ADT không đảm bảo điều đó.

## So sánh / liên hệ

Dùng hàng đợi ưu tiên khi cần liên tục lấy phần tử tốt nhất trong tập đang thay đổi, ví dụ chọn cạnh nhẹ nhất ở [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) hoặc đỉnh gần nhất ở [Thuật toán Dijkstra](#/courses/mat3514/lessons/mat3514-dijkstra). Hai thuật toán đó nhanh hơn rõ khi cài bằng đống.

## Luyện tập

- Bài tập [Bài tập: cài đặt hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-hw-priority-queue) yêu cầu cài đủ bốn kiểu (mảng/liên kết, chưa sắp/đã sắp) và so sánh thời gian.
- Tiếp theo hãy học [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) để biết cấu trúc đạt $O(\log n)$ cho cả hai thao tác.
- Tự luyện: thêm các khóa `4, 1, 6, 1` vào hàng đợi rỗng rồi gọi `removeMin` ba lần. Kết quả là gì?

> **Đáp án**
> Các khóa ra theo thứ tự `1, 1, 4`; còn lại khóa `6`. Hai khóa 1 là trùng nên ADT không quy định entry nào ra trước.

## Tự kiểm tra

1. Với danh sách chưa sắp xếp, `insert` và `removeMin` mất bao nhiêu thời gian? Với danh sách đã sắp xếp thì sao?

> **Đáp án**
> Chưa sắp xếp: `insert` $O(1)$, `removeMin` $O(n)$. Đã sắp xếp: `insert` $O(n)$, `removeMin` $O(1)$.

2. Vì sao hàng đợi ưu tiên không thay được danh sách đã sắp xếp khi cần liệt kê toàn bộ theo thứ tự mà không xóa?

> **Đáp án**
> ADT chỉ cho truy cập phần tử nhỏ nhất. Muốn liệt kê hết thì phải gọi `removeMin` liên tục (làm mất dữ liệu) hoặc dùng cấu trúc khác.

3. Có $n$ công việc, mỗi công việc có thời gian chạy. Mô tả cách dùng hàng đợi ưu tiên để chạy công việc ngắn nhất trước và nêu chi phí tổng nếu cài bằng đống.

> **Đáp án**
> Chèn mọi công việc với khóa là thời gian chạy, rồi gọi `removeMin` lặp lại cho tới khi rỗng. Với đống tổng chi phí là $n\cdot O(\log n)+n\cdot O(\log n)=O(n\log n)$.
