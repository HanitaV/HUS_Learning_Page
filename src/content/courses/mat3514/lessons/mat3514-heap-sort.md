# Sắp xếp vun đống (Heap Sort)

## Vì sao cần

Đống nhị phân ([Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap)) cho phép lấy phần tử nhỏ nhất (hoặc lớn nhất) ra trong $O(\log n)$. Nếu cứ lấy ra lần lượt thì ta nhận được các phần tử theo thứ tự, và đó chính là một thuật toán sắp xếp: Heap Sort. Nó đạt $O(n \log n)$ trong mọi trường hợp như [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort) nhưng có thể làm tại chỗ như [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort). Hãy xem mô phỏng bên dưới để thấy đống co lại còn phần đã sắp lớn dần ở cuối mảng.

## Ý tưởng

**Bản trong slide** dùng hàng đợi ưu tiên làm đống ([Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt)), gồm hai pha:

1. Chèn lần lượt $n$ phần tử của dãy $A$ vào đống $T$ bằng $n$ lần `insert` ([Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert), mỗi lần $O(\log n)$).
2. Gọi `removeMin` $n$ lần ([Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin), mỗi lần $O(\log n)$) và ghi các kết quả trả về vào $A$ theo thứ tự. Vì mỗi lần lấy ra là phần tử nhỏ nhất còn lại, $A$ được sắp không giảm.

Thời gian: $n \cdot O(\log n) + n \cdot O(\log n) = O(n \log n)$.

**Hai cải tiến** mà slide đặt thành thử thách:

- *Tại chỗ:* không dùng mảng phụ $T$, làm việc ngay trong $A$. Dùng **đống cực đại**; mỗi lượt đổi gốc (phần tử lớn nhất) với phần tử cuối của đống rồi giảm kích thước đống đi 1 và sửa lại bằng `downHeap`. Phần tử lớn nhất rơi vào đúng chỗ cuối của mảng.
- *Dựng đống từ dưới lên:* thay vì $n$ lần `insert` tốn $O(n \log n)$, thực hiện `downHeap` cho các nút trong từ $\lfloor n/2 \rfloor - 1$ về $0$. Cách này chỉ tốn $O(n)$.

## Ví dụ chạy tay

Bản tại chỗ trên `[4, 10, 3, 5, 1]` (đống cực đại lưu theo mảng: con của $i$ là $2i+1$ và $2i+2$).

**Dựng đống từ dưới lên.** Nút trong: chỉ số 1 và 0.

| Bước | Hành động | Mảng |
|---|---|---|
| nút 1 (giá trị 10) | con 5, 1, đều nhỏ hơn: giữ | 4 10 3 5 1 |
| nút 0 (giá trị 4) | con 10, 3: đổi với 10 | 10 4 3 5 1 |
| tiếp tục downHeap 4 ở vị trí 1 | con 5, 1: đổi với 5 | 10 5 3 4 1 |

**Lấy lần lượt.** Phần sau dấu `|` là phần đã sắp.

| Lượt | Đổi gốc với phần tử cuối, rồi downHeap | Mảng |
|---|---|---|
| 1 | đổi 10 với 1, sửa đống 4 phần tử | 5 4 3 1 \| 10 |
| 2 | đổi 5 với 1, sửa đống 3 phần tử | 4 1 3 \| 5 10 |
| 3 | đổi 4 với 3, sửa đống 2 phần tử | 3 1 \| 4 5 10 |
| 4 | đổi 3 với 1 | 1 \| 3 4 5 10 |

Kết quả `[1, 3, 4, 5, 10]`.

## Cài đặt

```java
static void heapSort(int[] a) {
    int n = a.length;
    for (int i = n / 2 - 1; i >= 0; i--) {
        downHeap(a, i, n);
    }
    for (int end = n - 1; end > 0; end--) {
        int t = a[0]; a[0] = a[end]; a[end] = t;
        downHeap(a, 0, end);
    }
}

static void downHeap(int[] a, int i, int size) {
    while (2 * i + 1 < size) {
        int child = 2 * i + 1;
        if (child + 1 < size && a[child + 1] > a[child]) child++;
        if (a[i] >= a[child]) break;
        int t = a[i]; a[i] = a[child]; a[child] = t;
        i = child;
    }
}
```

- Vòng đầu dựng đống cực đại từ dưới lên; chỉ các nút trong ($i < n/2$) mới có con.
- `downHeap(a, 0, end)`: truyền `end` làm kích thước đống để không đụng tới phần đã sắp.
- `child + 1 < size` bảo đảm nút có con phải.
- Chọn con lớn hơn rồi so với cha: đúng quy tắc khôi phục bất biến đống.

## Độ phức tạp

| Mục | Giá trị |
|---|---|
| Thời gian (cả 3 trường hợp) | $O(n \log n)$ |
| Dựng đống từ dưới lên | $O(n)$ |
| $n$ lần lấy gốc | $O(n \log n)$ |
| Bộ nhớ phụ (bản tại chỗ) | $O(1)$ |
| Bộ nhớ phụ (bản slide, mảng $T$) | $O(n)$ |

Chiều cao đống là $\lfloor \log_2 n \rfloor$ ([Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height)) nên mỗi `downHeap` tốn tối đa $O(\log n)$. Đánh giá tiệm cận xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o). Heap Sort **không ổn định**: việc đổi gốc với phần tử cuối nhảy qua nhiều vị trí và có thể đảo hai phần tử bằng nhau. Xem [Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties); câu hỏi cuối slide ("có ổn định và tại chỗ không?") có đáp án: tại chỗ khi cài đặt như trên, không ổn định.

## Lỗi thường gặp

- Dùng đống cực tiểu cho bản tại chỗ rồi lấy gốc đặt ra cuối: kết quả sắp giảm dần. Muốn tăng dần tại chỗ phải dùng đống cực đại.
- Quên giảm kích thước đống sau mỗi lượt (gọi `downHeap(a, 0, n)`): phần tử lớn nhất vừa đặt cuối bị kéo trở lại đống.
- Dựng đống từ $i = n - 1$ thay vì $n/2 - 1$: vô ích vì nút lá không có con, còn có thể gây truy cập ngoài mảng nếu không kiểm tra.
- Lỗi chỉ số con: dùng $2i$ và $2i+1$ (chỉ đúng khi đánh số từ 1) với mảng bắt đầu từ 0.
- Cho rằng dựng đống $O(n)$ làm cả thuật toán $O(n)$: giai đoạn lấy ra vẫn $O(n \log n)$.

## So sánh / liên hệ

Heap Sort là Selection Sort ([Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort)) với bước "tìm phần tử lớn nhất" được tăng tốc từ $O(n)$ xuống $O(\log n)$ nhờ đống. Trong thực tế Quick Sort thường nhanh hơn do truy cập bộ nhớ liên tiếp tốt hơn; Heap Sort đáng giá khi cần cận $O(n \log n)$ xấu nhất mà không có bộ nhớ phụ.

## Luyện tập

- [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) và [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin): nắm chắc `upHeap` và `downHeap` trước khi cài Heap Sort.
- Tự luyện: dựng đống cực đại từ `[2, 9, 7, 6, 5, 8]` bằng cách từ dưới lên.

> **Đáp án**
> Nút trong là chỉ số 2, 1, 0. Nút 2 (7), con 8: đổi, `[2, 9, 8, 6, 5, 7]`. Nút 1 (9), con 6, 5: giữ. Nút 0 (2), con 9, 8: đổi với 9, `[9, 2, 8, 6, 5, 7]`; downHeap 2 ở vị trí 1, con 6, 5: đổi với 6, `[9, 6, 8, 2, 5, 7]`. Đây là đống cực đại.

## Tự kiểm tra

1. Vì sao dựng đống từ dưới lên chỉ tốn $O(n)$ mà không phải $O(n \log n)$?

> **Đáp án**
> Phần lớn nút ở gần lá nên chỉ phải đi xuống ít tầng: khoảng $n/2$ nút lá tốn 0, $n/4$ nút tốn 1 bước, $n/8$ nút tốn 2 bước, ... Tổng $\sum_h \frac{n}{2^{h+1}} h = O(n)$.

2. Heap Sort bản tại chỗ muốn sắp tăng dần dùng đống gì và đặt phần tử lấy ra ở đâu?

> **Đáp án**
> Đống cực đại; đổi gốc với phần tử cuối của đống và coi vị trí đó thuộc phần đã sắp.

3. Bản slide dùng $n$ lần `insert` rồi $n$ lần `removeMin`. Thay pha đầu bằng dựng đống từ dưới lên thì tổng thời gian có thay đổi bậc không?

> **Đáp án**
> Không: pha đầu giảm từ $O(n \log n)$ xuống $O(n)$ nhưng pha lấy ra vẫn $O(n \log n)$, tổng vẫn $O(n \log n)$.
