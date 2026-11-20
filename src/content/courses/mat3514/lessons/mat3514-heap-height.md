# Chiều cao của đống

## Vì sao cần

Hai thao tác cốt lõi của [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) là up-heap khi chèn và down-heap khi xóa nhỏ nhất. Cả hai đi dọc một đường từ gốc tới lá (hoặc ngược lại), nên số bước tối đa bằng chiều cao đống. Nếu chiều cao tỉ lệ với $\log n$ thì mỗi thao tác $O(\log n)$. Bài này chứng minh khẳng định đó từ tính chất cây hoàn chỉnh. Đọc trước [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height) để quen kiểu cộng cấp số nhân $1+2+4+\dots$.

## Phát biểu

**Định lý.** Đống chứa $n$ khóa có chiều cao $h\le\log_2 n$; do đó $h=O(\log n)$.

Quy ước của phần này: chiều cao $h$ đếm theo **cạnh** (nút gốc có độ sâu 0, nên đống một nút có $h=0$). Đống là cây hoàn chỉnh (đầy tới độ sâu $h-1$, độ sâu $h$ có ít nhất một nút), do đó số nút thỏa

$$2^h\le n\le2^{h+1}-1.$$

## Giải thích / chứng minh

Theo slide:

1. Có $2^i$ nút ở độ sâu $i$ với $i=0,\dots,h-1$ (các mức này đều đầy).
2. Ở độ sâu $h$ có ít nhất một nút.
3. Cộng lại:

$$n\ge1+2+4+\dots+2^{h-1}+1=(2^h-1)+1=2^h.$$

4. Từ $n\ge2^h$ lấy logarit cơ số 2: $h\le\log_2 n$. Cận trên $n\le2^{h+1}-1$ cho chiều ngược lại, nên thực ra $h=\lfloor\log_2 n\rfloor$.

Bảng trong slide cho từng mức:

| Độ sâu | Số nút |
|---|---|
| 0 | 1 |
| 1 | 2 |
| ... | ... |
| $h-1$ | $2^{h-1}$ |
| $h$ | $\ge1$ |

## Ví dụ tính

Đống mẫu của slide có $n=10$ nút và $h=3$: kiểm tra $2^3=8\le10\le15=2^4-1$.

| $n$ | $h=\lfloor\log_2 n\rfloor$ | Số bước up-heap/down-heap tối đa |
|---|---|---|
| 1 | 0 | 0 |
| 7 | 2 | 2 |
| 8 | 3 | 3 |
| 10 | 3 | 3 |
| 15 | 3 | 3 |
| 16 | 4 | 4 |
| $10^6$ | 19 | 19 |

Một đống một triệu phần tử chỉ cao 19: chèn hay xóa nhỏ nhất đổi chỗ tối đa khoảng 19 lần, trong khi mảng chưa sắp phải duyệt một triệu phần tử.

## Áp dụng ở đâu

- [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert): up-heap đi tối đa $h\le\log_2 n$ bước, nên chèn $O(\log n)$.
- [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin): down-heap đi từ gốc xuống tối đa $h$ bước, nên xóa nhỏ nhất $O(\log n)$.
- [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort): $n$ lần xóa nhỏ nhất, mỗi lần $O(\log n)$, cho tổng $O(n\log n)$.
- [Hàng đợi ưu tiên (Priority Queue)](#/courses/mat3514/lessons/mat3514-priority-queue-adt): cài đặt bằng đống cho `insert` và `removeMin` đều $O(\log n)$, tốt hơn danh sách chưa sắp hay đã sắp.

Biểu diễn đống bằng mảng ([Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr)) cũng dựa trên tính chất hoàn chỉnh, nên không có "lỗ" và chiều cao mới nhỏ như vậy.

## Lỗi thường gặp

- Nhầm quy ước đếm: ở đây $h$ đếm cạnh (đống một nút có $h=0$), còn [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height) đếm số mức (cây một nút có $h=1$). Công thức tương ứng khác nhau: $n\ge2^h$ so với $N=2^h-1$.
- Cho rằng mọi cây nhị phân có chiều cao $O(\log n)$. Chứng minh dùng tính chất hoàn chỉnh; một cây suy biến có $h=n-1$.
- Quên "ít nhất một nút ở mức cuối" nên chỉ ra $n\ge2^h-1$ thay vì $n\ge2^h$.
- Viết $h=\log_2 n$ thay vì $h\le\log_2 n$ (đúng là phần nguyên dưới).
- Tính số bước theo số nút thay vì theo chiều cao.

## Tự kiểm tra

**1.** Vì sao đống có một nút có chiều cao 0 theo phần này?

> **Đáp án**
> Vì chiều cao đếm số cạnh trên đường từ gốc tới nút sâu nhất; không có cạnh nào nên $h=0$. Quy ước này khác cách đếm số mức của cây đầy đủ.

**2.** Đống có 100 khóa. Chiều cao tối đa là bao nhiêu và up-heap đi tối đa mấy bước?

> **Đáp án**
> $h=\lfloor\log_2 100\rfloor=6$ (vì $64\le100\le127$). Up-heap đi tối đa 6 bước.

**3.** (Vận dụng) Hãy dùng định lý để giải thích vì sao [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) chạy $O(n\log n)$, và nói điều đó có mâu thuẫn với [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound) không.

> **Đáp án**
> Có $n$ lần xóa nhỏ nhất (và $n$ lần chèn nếu xây đống bằng chèn), mỗi lần tối đa $h\le\log_2 n$ bước, nên tổng $O(n\log n)$. Không mâu thuẫn: cận dưới là $\Omega(n\log n)$ nên $O(n\log n)$ là đúng bậc tối ưu.
