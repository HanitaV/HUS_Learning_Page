# Bảng băm (tài liệu tham khảo)

BST tìm một khóa trong $O(h)$, tốt nhất là $O(\log n)$. Bảng băm (hash table) nhắm tới mức tốt hơn: tính thẳng ra vị trí lưu khóa bằng một hàm, nên thời gian trung bình cho tìm, thêm, xóa chỉ cỡ hằng số. Mô phỏng bên dưới cho bạn thấy khóa được đưa vào bảng và va chạm được giải quyết thế nào.

## Vì sao cần

Slide ở bài [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property) kết thúc bằng danh sách "các ADT khác", trong đó có bảng băm. Tài liệu tham khảo mô tả kế hoạch cơ bản: lưu các phần tử trong một bảng được chỉ số hóa theo khóa, với chỉ số tính bởi một hàm của khóa. Cấu trúc nền là [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) (truy cập theo chỉ số $O(1)$) và [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list) (dùng cho móc xích).

Tài liệu nêu đây là đánh đổi không gian và thời gian cổ điển: không giới hạn bộ nhớ thì dùng chính khóa làm chỉ số; không giới hạn thời gian thì dùng tìm tuần tự; với cả hai giới hạn thực tế thì dùng băm.

## Ý tưởng

Ba thành phần, theo tài liệu:

1. **Hàm băm (hash function):** ánh xạ khóa thành chỉ số $i$ với $0 \le i \le M-1$, trong đó $M$ là kích thước bảng. Trong Java, mọi lớp có `hashCode()` trả về số nguyên 32 bit. Yêu cầu bắt buộc: nếu `x.equals(y)` thì `x.hashCode() == y.hashCode()`. Để lấy chỉ số, dùng `(key.hashCode() & 0x7fffffff) % M`: mặt nạ xóa bit dấu để kết quả không âm. Chỉ lấy `hashCode() % M` có thể âm, còn `Math.abs` thì sai với `Integer.MIN_VALUE`.
2. **Kiểm tra bằng nhau:** hai khóa cùng chỉ số vẫn phải so bằng `equals`.
3. **Giải quyết va chạm (collision):** hai khóa khác nhau băm về cùng chỉ số, ví dụ `hash("it") = 3` và `hash("times") = 3`. Theo nghịch lý ngày sinh, không thể tránh va chạm trừ khi dùng lượng bộ nhớ bậc hai.

**Móc xích (separate chaining).** Dùng mảng $M$ danh sách liên kết (đề xuất bởi H. P. Luhn, IBM 1953, với $M < N$). Thêm: đặt vào đầu danh sách thứ $i$ nếu chưa có. Tìm: chỉ cần tìm trong danh sách thứ $i$.

**Địa chỉ mở, dò tuyến tính (open addressing, linear probing).** Mọi khóa nằm trong chính mảng. Thêm: đặt vào ô $i$ nếu trống, nếu không thử $i+1, i+2, \dots$ (vòng về đầu mảng khi tới cuối). Tìm: xem ô $i$; nếu có khóa khác thì thử ô kế tiếp, dừng khi gặp khóa cần tìm (tìm thấy) hoặc gặp ô trống (không có). Cần $M > N$, với $N$ là số cặp khóa-giá trị.

## Ví dụ chạy tay

Dò tuyến tính với $M = 8$, hàm băm `h(k) = k % 8`, thêm lần lượt khóa 10, 18, 3, 26, 11.

| Khóa | h(k) | Các ô thử | Ô đặt |
|---|---|---|---|
| 10 | 2 | 2 trống | 2 |
| 18 | 2 | 2 có 10, thử 3 trống | 3 |
| 3 | 3 | 3 có 18, thử 4 trống | 4 |
| 26 | 2 | 2, 3, 4 đầy, thử 5 trống | 5 |
| 11 | 3 | 3, 4, 5 đầy, thử 6 trống | 6 |

Bảng cuối: ô 2 = 10, ô 3 = 18, ô 4 = 3, ô 5 = 26, ô 6 = 11. Tìm 34 (h = 2): thử 2, 3, 4, 5, 6 đều khác, ô 7 trống nên trả về không có. Năm khóa va vào nhau làm thành một "cụm" liên tiếp, gây dò dài.

Móc xích với cùng $M = 8$ và dữ liệu: danh sách 2 chứa 26, 18, 10 (thêm vào đầu danh sách); danh sách 3 chứa 11, 3. Tìm 34 chỉ cần duyệt danh sách 2 gồm 3 phần tử.

## Cài đặt

```java
class ChainingTable {
    private static class Node {
        int key, value;
        Node next;
        Node(int key, int value, Node next) {
            this.key = key; this.value = value; this.next = next;
        }
    }

    private final Node[] st;
    private final int m;

    ChainingTable(int m) { this.m = m; st = new Node[m]; }

    private int hash(int key) { return (Integer.hashCode(key) & 0x7fffffff) % m; }

    Integer get(int key) {
        for (Node x = st[hash(key)]; x != null; x = x.next)
            if (x.key == key) return x.value;
        return null;
    }

    void put(int key, int value) {
        int i = hash(key);
        for (Node x = st[i]; x != null; x = x.next)
            if (x.key == key) { x.value = value; return; }
        st[i] = new Node(key, value, st[i]);   // chèn vào đầu danh sách
    }
}
```

Với dò tuyến tính, thay mảng danh sách bằng hai mảng `keys[]`, `vals[]` và vòng lặp `for (i = hash(key); keys[i] != null; i = (i + 1) % m)`. Xóa trong dò tuyến tính phức tạp hơn: không thể chỉ đặt ô thành trống vì sẽ làm đứt chuỗi dò của các khóa phía sau, nên cần đánh dấu "đã xóa" hoặc băm lại cụm.

## Độ phức tạp

Dưới giả thiết băm đều (uniform hashing assumption: mỗi khóa có xác suất như nhau rơi vào mỗi chỉ số), gọi $\alpha = N / M$ là hệ số tải:

| Cách | Trung bình | Xấu nhất | Ghi chú |
|---|---|---|---|
| Móc xích | $O(1 + \alpha)$ | $O(N)$ | tất cả khóa cùng một danh sách |
| Dò tuyến tính | $O(1)$ khi $\alpha$ nhỏ | $O(N)$ | chậm nhanh khi $\alpha$ tiến gần 1 |

Móc xích chọn $M$ sao cho danh sách ngắn, cỡ vài phần tử. Với dò tuyến tính phải giữ $M > N$ và co giãn mảng khi đầy (cùng ý với [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list)), thường giữ $\alpha$ không quá khoảng một nửa. Ký hiệu $O$ xem [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o).

## Lỗi thường gặp

- Dùng `hashCode() % M` hoặc `Math.abs(hashCode()) % M` mà không xử lý số âm, dẫn tới chỉ số ngoài mảng.
- Ghi đè `equals` mà không ghi đè `hashCode`, nên hai khóa bằng nhau lại nằm ở các ô khác nhau và không tìm thấy.
- Hàm băm tệ, ví dụ luôn trả về 17: mọi khóa va chạm, thời gian suy biến thành $O(N)$.
- Dò tuyến tính với $M \le N$: bảng đầy, vòng dò không dừng.
- Xóa khóa trong dò tuyến tính bằng cách đặt ô thành trống, làm đứt chuỗi dò.

## So sánh / liên hệ

| | BST ([Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations)) | Bảng băm |
|---|---|---|
| Tìm, thêm, xóa | $O(h)$ | $O(1)$ trung bình |
| Duyệt theo thứ tự khóa | có (duyệt giữa) | không |
| Tìm khóa nhỏ nhất, khoảng | có (xem [Ứng dụng hình học của BST](#/courses/mat3514/lessons/mat3514-bst-geometric-apps)) | không hiệu quả |

Cần thứ tự thì chọn BST; chỉ cần tra cứu nhanh thì chọn bảng băm.

## Luyện tập

- Tự luyện: bảng dò tuyến tính $M = 7$, `h(k) = k % 7`, thêm 15, 22, 8, 1. Viết bảng cuối.

> **Đáp án**
> h(15) = 1 nên vào ô 1. h(22) = 1: ô 1 đầy, vào ô 2. h(8) = 1: ô 1 và 2 đầy, vào ô 3. h(1) = 1: ô 1, 2, 3 đầy, vào ô 4. Bảng: ô 1 = 15, ô 2 = 22, ô 3 = 8, ô 4 = 1; các ô 0, 5, 6 trống.

## Tự kiểm tra

1. Hai khóa khác nhau băm về cùng chỉ số thì gọi là gì, và có thể tránh hoàn toàn không?

> **Đáp án**
> Va chạm (collision). Không thể tránh nếu số khóa có thể lớn hơn số ô; nghịch lý ngày sinh cho thấy va chạm xuất hiện sớm, ngay khi số khóa cỡ căn của $M$. Do đó phải có cách giải quyết va chạm.

2. Vì sao tìm kiếm trong dò tuyến tính dừng khi gặp ô trống?

> **Đáp án**
> Nếu khóa có trong bảng thì khi thêm nó đã được đặt ở ô đầu tiên còn trống trên chuỗi dò, nên mọi ô trước nó đều đầy. Gặp ô trống trước khi thấy khóa nghĩa là khóa không có (với giả thiết chưa có xóa kiểu đặt ô thành trống).

3. So sánh móc xích và dò tuyến tính khi số khóa vượt kích thước bảng.

> **Đáp án**
> Móc xích vẫn chạy được, chỉ chậm dần vì danh sách dài hơn. Dò tuyến tính yêu cầu $M > N$, nên khi đầy phải tạo bảng lớn hơn và băm lại mọi khóa.
