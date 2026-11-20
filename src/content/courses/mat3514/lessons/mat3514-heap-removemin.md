# Xóa nhỏ nhất: down-heap

## Vì sao cần

Phần tử nhỏ nhất của [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) luôn ở gốc, nên `removeMin` của [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt) phải bỏ gốc. Nhưng xóa gốc để lại một lỗ hổng làm vỡ hình dạng cây hoàn chỉnh. Cách sửa gọn là lấp lỗ hổng bằng nút cuối, vốn là nút duy nhất có thể bỏ đi mà cây vẫn hoàn chỉnh, rồi vun xuống để sửa thứ tự đống. Đây cũng là nửa còn lại của [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort). Trong mô phỏng bên dưới, hãy theo dõi khóa mới ở gốc đi xuống và dừng ở đâu.

## Ý tưởng

Ba bước:

1. Lưu lại khóa ở gốc để trả về, rồi thay gốc bằng khóa của nút cuối $w$ (ô $n$).
2. Xóa nút cuối (giảm $n$ đi 1). Cây vẫn hoàn chỉnh.
3. Khôi phục thứ tự đống bằng **down-heap** (vun xuống): trong khi nút hiện tại có con nhỏ hơn nó, đổi chỗ với **con nhỏ hơn** trong hai con rồi đi xuống nút đó.

Vì sao đổi với con nhỏ hơn? Nếu đổi với con lớn hơn, con nhỏ hơn bị đẩy lên làm cha của chính khóa đang xét nhưng vẫn lớn hơn nó, vi phạm tính chất đống. Khóa nhỏ hơn trong hai con mới là ứng viên an toàn để lên cha.

**Bất biến.** Tại mỗi vòng, mọi cặp cha con đều thỏa tính chất đống, trừ có thể các cặp (nút $i$, con của $i$). Down-heap dừng khi khóa tới lá, hoặc khi cả hai con (nếu có) đều có khóa lớn hơn hoặc bằng khóa này. Số lần đổi tối đa là chiều cao $h=\lfloor\log_2 n\rfloor$ ([Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height)).

## Ví dụ chạy tay

Lấy đống thu được ở [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) sau khi chèn 15 (chỉ số từ 1, $n=11$):

`[12, 15, 16, 22, 19, 24, 52, 28, 42, 35, 29]`

**Gọi `removeMin()`**: giá trị trả về là $12$.

| Bước | Hành động | Mảng (chỉ phần $1..n$) | $n$ |
|---|---|---|---|
| 0 | lưu 12; đưa nút cuối $T[11]=29$ lên gốc | `29 15 16 22 19 24 52 28 42 35` | 10 |
| 1 | $i=1$: con là $T[2]=15$, $T[3]=16$; nhỏ hơn là 15 (ô 2); $29>15$ nên đổi | `15 29 16 22 19 24 52 28 42 35` | 10 |
| 2 | $i=2$: con là $T[4]=22$, $T[5]=19$; nhỏ hơn là 19 (ô 5); $29>19$ nên đổi | `15 19 16 22 29 24 52 28 42 35` | 10 |
| 3 | $i=5$: con trái $2\cdot5=10\le n$ là $T[10]=35$; con phải $11>n$ không có; $29\le35$ nên dừng | `15 19 16 22 29 24 52 28 42 35` | 10 |

Kết quả hợp lệ, hai lần đổi chỗ, gốc mới là 15 (nhỏ nhất kế tiếp). Gọi `removeMin()` tiếp: trả về 15, đưa $T[10]=35$ lên gốc rồi vun xuống: con của ô 1 là 19, 16 nên đổi với 16 (ô 3); con của ô 3 là 24, 52 nên đổi với 24 (ô 6); ô 6 có con ô 12 vượt $n=9$ nên là lá, dừng. Mảng: `[16, 19, 24, 22, 29, 35, 52, 28, 42]`.

Quan sát: các giá trị trả về `12, 15, 16, ...` tăng dần. Đó chính là ý tưởng của sắp xếp vun đống.

## Cài đặt

Mã giả của slide có nhiều nhánh `return`, dễ sai; bản dưới đây viết lại gọn hơn nhưng tương đương (chỉ số từ 1).

```text
heapRemoveMin():
    temp <- T[1]
    T[1] <- T[n]
    n <- n - 1
    i <- 1
    while 2i <= n:
        j <- 2i                       // con trái
        if j + 1 <= n and T[j+1] < T[j]: j <- j + 1   // con nhỏ hơn
        if T[i] <= T[j]: break        // đã đúng thứ tự đống
        swap(T[i], T[j])
        i <- j
    return temp
```

Java, tiếp theo `MinHeap` ở [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) và `insert` ở bài trước:

```java
public int removeMin() {
    if (n == 0) throw new NoSuchElementException("Đống rỗng");
    int min = t[1];
    t[1] = t[n--];         // đưa nút cuối lên gốc rồi bỏ nút cuối
    downHeap(1);
    return min;
}

private void downHeap(int i) {
    while (left(i) <= n) {                         // còn ít nhất một con
        int j = left(i);
        if (right(i) <= n && t[right(i)] < t[j]) j = right(i);   // chọn con nhỏ hơn
        if (t[i] <= t[j]) break;                   // thỏa thứ tự đống
        swap(i, j);
        i = j;
    }
}
```

Khi $n=1$, sau `t[1] = t[n--]` ta có $n=0$ và `downHeap` không làm gì: đúng với đống chỉ có một phần tử. Điều kiện `left(i) <= n` bảo vệ trường hợp nút $i$ là lá, và `right(i) <= n` bảo vệ trường hợp nút chỉ có một con (như ô 5 trong ví dụ).

## Độ phức tạp

| Trường hợp | Số lần đổi | Thời gian |
|---|---|---|
| Tốt nhất | 0 (khóa đưa lên đã không lớn hơn hai con) | $O(1)$ |
| Xấu nhất / thường gặp | tới $h=\lfloor\log_2 n\rfloor$, vì nút cuối thường là khóa lớn nên hay xuống tận gần lá | $O(\log n)$ |

Mỗi vòng lặp làm vài phép so sánh hằng số rồi xuống một mức, nên chi phí chặn trên là chiều cao. Hai thao tác `insert` và `removeMin` đều $O(\log n)$, do đó thêm $n$ rồi lấy ra $n$ phần tử cho $O(n\log n)$; đối chiếu với danh sách trong [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt) tốn $O(n^2)$, và xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o) để so sánh hai lớp này.

## Lỗi thường gặp

- Đổi với con lớn hơn thay vì con nhỏ hơn, làm mất thứ tự đống.
- Quên trường hợp nút chỉ có một con (con trái tồn tại, con phải không): truy cập `t[right(i)]` ngoài phạm vi hoặc đọc phần tử rác.
- Giảm $n$ sau khi chạy `downHeap`, nên nút cuối cũ vẫn bị coi là thuộc đống.
- Không xử lý đống rỗng hoặc chỉ một phần tử khi bỏ gốc.
- Dừng sớm chỉ vì khóa nhỏ hơn con trái mà quên so sánh với con phải.

## So sánh / liên hệ

`removeMin` đi xuống theo con nhỏ hơn còn `insert` đi lên theo cha; hai thao tác đối xứng và dựa trên cùng bất biến. Chúng cùng nhau cho [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort), và là phép lấy đỉnh có khoảng cách nhỏ nhất trong [Thuật toán Dijkstra](#/courses/mat3514/lessons/mat3514-dijkstra).

## Luyện tập

- Cài `downHeap` cho `MinHeapPriorityQueue` trong [Bài tập: cài đặt hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-hw-priority-queue) và kiểm tra bằng cách lấy hết phần tử ra để so với thứ tự tăng dần.
- Tự luyện: từ đống `[3, 7, 5, 9, 8, 6, 10]` gọi `removeMin` hai lần. Viết đống sau mỗi lần.

> **Đáp án**
> Lần 1: trả về 3; đưa 10 lên gốc, $n=6$: `[10,7,5,9,8,6]`. Con của gốc là 7, 5; chọn 5, đổi: `[5,7,10,9,8,6]`. Ô 3 có con ô 6 (khóa 6) và ô 7 không có; $10>6$ nên đổi: `[5,7,6,9,8,10]`. Lần 2: trả về 5; đưa 10 lên gốc, $n=5$: `[10,7,6,9,8]`. Con là 7, 6; chọn 6 (ô 3), đổi: `[6,7,10,9,8]`; ô 3 có con ô 6 vượt $n=5$ nên dừng. Đống cuối: `[6,7,10,9,8]`.

## Tự kiểm tra

1. Vì sao `removeMin` thay gốc bằng nút cuối mà không phải một nút bất kỳ?

> **Đáp án**
> Chỉ khi bỏ nút cuối thì cây mới vẫn hoàn chỉnh. Khóa của nút đó được đặt ở gốc rồi vun xuống để sửa thứ tự đống.

2. Trong down-heap, khi nút có hai con khóa 8 và 6 và khóa hiện tại là 10, ta đổi với con nào? Vì sao?

> **Đáp án**
> Đổi với con có khóa 6 (nhỏ hơn). Khi 6 lên làm cha thì nó nhỏ hơn cả 8 lẫn 10, nên tính chất đống giữ được.

3. Đống có $n=7$ phần tử. Tối đa bao nhiêu lần đổi chỗ khi `removeMin`?

> **Đáp án**
> Sau khi bỏ nút cuối còn $n=6$, chiều cao $\lfloor\log_2 6\rfloor=2$, nên tối đa 2 lần đổi.
