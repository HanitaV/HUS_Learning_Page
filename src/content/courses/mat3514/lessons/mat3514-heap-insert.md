# Chèn vào đống: up-heap

## Vì sao cần

Thêm phần tử vào [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) phải giữ được cả hai tính chất: hình dạng cây hoàn chỉnh và thứ tự đống. Cách làm là tách hai việc. Trước tiên đặt khóa mới vào vị trí duy nhất giữ cho cây vẫn hoàn chỉnh, rồi sửa thứ tự đống bằng cách đẩy khóa đó lên. Đây là phép `insert` của [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt) và là bước đầu của [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort). Trong mô phỏng bên dưới, hãy theo dõi khóa mới đi lên và dừng ở đâu.

## Ý tưởng

Ba bước:

1. Tạo chỗ trống ở vị trí kế tiếp, ngay sau nút cuối (chỉ số $n+1$). Hình dạng cây hoàn chỉnh được giữ nguyên.
2. Lưu khóa $k$ vào đó.
3. Khôi phục thứ tự đống bằng **up-heap** (còn gọi là vun lên): trong khi nút hiện tại có khóa nhỏ hơn khóa của cha thì đổi chỗ hai nút này và đi lên cha.

**Bất biến.** Trước mỗi lần lặp, mọi cặp cha con đều thỏa tính chất đống, trừ có thể một cặp (nút $i$ với cha của nó). Đổi chỗ khi $T[i] < T[\lfloor i/2\rfloor]$ giúp cặp đó thỏa; khóa lớn hơn vừa bị đẩy xuống vị trí $i$ lại nhỏ hơn hoặc bằng hai con của $i$, vì trước đó nó đã nhỏ hơn hoặc bằng các hậu duệ của mình. Ngoại lệ còn lại chuyển lên một mức.

Up-heap dừng khi khóa tới gốc, hoặc khi cha có khóa nhỏ hơn hoặc bằng khóa vừa chèn. Số lần đổi chỗ không quá chiều cao $h=\lfloor\log_2 n\rfloor$ của đống ([Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height)).

## Ví dụ chạy tay

Đống nhỏ nhất (chỉ số từ 1) với $n=10$:

`[12, 19, 16, 22, 29, 24, 52, 28, 42, 35]`

**Chèn 15.** Đặt vào chỉ số $11$; cha của $11$ là $\lfloor 11/2\rfloor=5$ (khóa 29).

| Bước | i | Cha | So sánh | Hành động | Mảng sau bước |
|---|---|---|---|---|---|
| 0 | 11 | 5 | | đặt 15 vào ô 11 | `12 19 16 22 29 24 52 28 42 35 15` |
| 1 | 11 | 5 | $15 < 29$ | đổi chỗ | `12 19 16 22 15 24 52 28 42 35 29` |
| 2 | 5 | 2 | $15 < 19$ | đổi chỗ | `12 15 16 22 19 24 52 28 42 35 29` |
| 3 | 2 | 1 | $15 \ge 12$ | dừng | `12 15 16 22 19 24 52 28 42 35 29` |

Hai lần đổi chỗ, kết quả hợp lệ: `19` dịch xuống ô 5 có hai con `35` (ô 10), `29` (ô 11) đều lớn hơn.

**Chèn 5** (vào đống ban đầu, không phải đống đã chèn 15). Đặt vào ô 11 rồi đổi với cha 5 (29), cha 2 (19), cha 1 (12): ba lần đổi chỗ, khóa 5 lên tới gốc.

Kết quả `[5, 12, 16, 22, 19, 24, 52, 28, 42, 35, 29]`. Đó là trường hợp xấu nhất: số lần đổi bằng chiều cao $h=3$.

**Chèn 60.** Đặt vào ô 11, cha ô 5 là 29, $60\ge29$ nên dừng ngay với 0 lần đổi. Đây là trường hợp tốt nhất.

## Cài đặt

Mã giả của slide (chỉ số từ 1):

```text
heapInsert(k, e):
    n <- n + 1
    T[n] <- (k, e)
    i <- n
    while i > 1 and T[i/2] > T[i]:
        swap(T[i/2], T[i])
        i <- i/2
```

Java, tiếp theo khung `MinHeap` ở [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap):

```java
public void insert(int k) {
    if (n + 1 == t.length) t = Arrays.copyOf(t, t.length * 2);  // mở rộng khi đầy
    t[++n] = k;       // bước 1 và 2: đặt vào ô kế tiếp
    upHeap(n);        // bước 3
}

private void upHeap(int i) {
    while (i > 1 && t[parent(i)] > t[i]) {
        swap(i, parent(i));
        i = parent(i);
    }
}
```

Điều kiện `t[parent(i)] > t[i]` dùng so sánh nghiêm ngặt nên khóa bằng nhau không bị đổi chỗ thừa. Với khóa tổng quát, thay bằng `compareTo` ([Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface)).

## Độ phức tạp

| Trường hợp | Số lần đổi | Thời gian |
|---|---|---|
| Tốt nhất (khóa $\ge$ cha) | 0 | $O(1)$ |
| Trung bình | nhỏ, thường $O(1)$ lần với khóa ngẫu nhiên | $O(1)$ (chỉ thế khi dữ liệu ngẫu nhiên) |
| Xấu nhất (khóa nhỏ nhất) | $h=\lfloor\log_2 n\rfloor$ | $O(\log n)$ |

Mỗi vòng lặp làm việc hằng số và đi lên một mức, nên chi phí tối đa là chiều cao, $O(\log n)$. Chèn $n$ phần tử liên tiếp tốn $O(n\log n)$. Nếu mảng đầy phải mở rộng, chi phí nhân đôi được chia đều thành $O(1)$ mỗi lần chèn (xem [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list)).

## Lỗi thường gặp

- Chọn sai ô đặt khóa mới: phải là ô $n+1$ để giữ cây hoàn chỉnh, không phải gốc hay lá tùy ý.
- Đi lên bằng `i = i - 1` hay `i/2` sai (dùng chỉ số 0 mà vẫn chia 2), khiến so sánh với nhầm nút.
- Quên điều kiện `i > 1`, làm truy cập `t[0]` hoặc lặp mãi.
- Đổi chỗ khi `>=` thay vì `>`, gây đổi chỗ thừa và sai thứ tự nếu cần ổn định.
- Chèn trước, cập nhật `n` sau, khiến `upHeap` chạy trên chỉ số ngoài phạm vi.

## So sánh / liên hệ

Up-heap là nửa trên của cặp thao tác; nửa dưới là `down-heap` trong [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin). Một thủ thuật nằm ở slide là dựng đống từ mảng chỉ trong $O(n)$ bằng cách vun từ dưới lên, thay vì $n$ lần chèn tốn $O(n\log n)$; xem [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort).

## Luyện tập

- [Bài tập: cài đặt hàng đợi ưu tiên](#/courses/mat3514/lessons/mat3514-hw-priority-queue) có yêu cầu cài `upHeap` cho `MinHeapPriorityQueue`.
- Tự luyện: bắt đầu từ đống rỗng, lần lượt chèn `9, 4, 7, 1, 8`. Viết mảng sau mỗi lần.

> **Đáp án**
> Chèn 9: `[9]`. Chèn 4: đặt ô 2, $4<9$ đổi: `[4, 9]`. Chèn 7: ô 3, cha ô 1 (4), $7\ge4$ dừng: `[4, 9, 7]`. Chèn 1: ô 4, cha ô 2 (9) đổi, cha ô 1 (4) đổi: `[1, 4, 7, 9]`. Chèn 8: ô 5, cha ô 2 (4), $8\ge4$ dừng: `[1, 4, 7, 9, 8]`.

## Tự kiểm tra

1. Vì sao khóa mới được đặt ở ô $n+1$ rồi mới up-heap, thay vì đặt ngay ở gốc?

> **Đáp án**
> Đặt ở ô $n+1$ giữ cây luôn hoàn chỉnh. Thứ tự đống chỉ có thể bị vi phạm ở một cặp (khóa mới với cha) nên sửa bằng đẩy lên dọc một đường là đủ.

2. Trong đống `[2, 5, 3, 9, 6]`, chèn `1` thì mảng cuối cùng là gì và đổi chỗ mấy lần?

> **Đáp án**
> Đặt ô 6, cha ô 3 (khóa 3): đổi, được `[2,5,1,9,6,3]`; cha ô 1 (khóa 2): đổi, được `[1,5,2,9,6,3]`. Hai lần đổi.

3. Số lần đổi chỗ tối đa khi chèn vào đống đã có 1023 phần tử là bao nhiêu?

> **Đáp án**
> Sau khi chèn, $n=1024$ và $h=\lfloor\log_2 1024\rfloor=10$, nên tối đa 10 lần.
