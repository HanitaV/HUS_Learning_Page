# Sắp xếp tại chỗ và sắp xếp ổn định

## Vì sao cần

Hai thuật toán cùng $O(n \log n)$ vẫn có thể khác nhau ở những điểm quan trọng khi triển khai: có cần mảng phụ không, có làm xáo trộn thứ tự của các bản ghi bằng nhau không. Hai tính chất đó là **tại chỗ** (in-place) và **ổn định** (stable). Bài này định nghĩa chúng và đánh giá các thuật toán đã học: [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort), [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort), [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort), [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort), [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort), [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort).

## Sắp xếp tại chỗ

Một thuật toán sắp xếp là **tại chỗ** nếu chỉ cần lượng bộ nhớ phụ hằng số, tức $O(1)$, trong lúc chạy (ngoài bản thân mảng đầu vào). [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort) không tại chỗ vì phép trộn cần một mảng tạm kích thước $O(n)$.

Lưu ý: [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort) thường được xếp vào nhóm tại chỗ vì không có mảng phụ, dù ngăn xếp đệ quy tốn $O(\log n)$ trung bình (và $O(n)$ khi xấu nhất). Định nghĩa nghiêm ngặt $O(1)$ không tính cả ngăn xếp; trong thực hành người ta nói "tại chỗ" khi không cần mảng phụ cỡ $n$.

## Sắp xếp ổn định

Thuật toán **ổn định** nếu hai phần tử có khóa bằng nhau luôn giữ nguyên thứ tự tương đối của chúng như trong đầu vào. Tính chất này hữu ích khi mỗi phần tử có nhiều trường để sắp.

**Ví dụ (slide):** danh sách sinh viên đã được sắp theo tên theo thứ tự bảng chữ cái. Sau đó ta sắp lại theo số nhóm thực hành. Với thuật toán ổn định, trong mỗi nhóm các sinh viên vẫn theo thứ tự bảng chữ cái. Với thuật toán không ổn định, thứ tự tên trong nhóm có thể bị xáo.

Quy tắc dùng trong thực hành: để sắp theo khóa chính rồi khóa phụ, hãy sắp theo khóa phụ trước, rồi sắp theo khóa chính bằng thuật toán ổn định.

## Ví dụ chạy tay

Sắp các bản ghi (điểm, tên) theo điểm tăng dần: `(8,An) (6,Bình) (8,Chi) (6,Dũng)`.

| Thuật toán | Kết quả | Ổn định? |
|---|---|---|
| Insertion Sort | (6,Bình) (6,Dũng) (8,An) (8,Chi) | Có: Bình trước Dũng, An trước Chi |
| Selection Sort (chọn min) | (6,Bình) (6,Dũng) (8,Chi) (8,An) | Không: An và Chi bị đảo |

Lần chạy: lượt 0 đổi (8,An) với (6,Bình); lượt 1 tìm min là (6,Dũng), đổi với (8,An) ở vị trí 1, đẩy (8,An) ra cuối, sau (8,Chi). Một phản ví dụ gọn hơn: `(2,x) (2,y) (1,z)`. Lượt 0 đổi $(2,x)$ với $(1,z)$ cho `(1,z) (2,y) (2,x)`, hai bản ghi điểm 2 bị đảo. Vậy Selection Sort không ổn định.

## Bảng tổng kết

| Thuật toán | Xấu nhất | Tốt nhất | Tại chỗ | Ổn định |
|---|---|---|---|---|
| [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort) | $O(n^2)$ | $O(n)$ (bản dừng sớm) | Có | Có |
| [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort) | $O(n^2)$ | $O(n^2)$ | Có | Không |
| [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) | $O(n^2)$ | $O(n)$ | Có | Có |
| [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort) | $O(n^2)$ | $O(n \log n)$ | Có (gần) | Không |
| [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort) | $O(n \log n)$ | $O(n \log n)$ | Không | Có |
| [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) | $O(n \log n)$ | $O(n \log n)$ | Có (bản tại chỗ) | Không |

Điều kiện: Bubble và Insertion ổn định khi so sánh dùng `>` chặt; Merge Sort ổn định khi chọn phần tử bên trái trước nếu bằng nhau (`<=`). Các cột ổn định/tại chỗ ở đây theo giáo trình chuẩn; bảng tổng kết trong slide gốc có định dạng khó đọc nên đã đối chiếu lại bằng phân tích.

## Cách làm ổn định một thuật toán

Gắn thêm chỉ số gốc vào mỗi phần tử rồi dùng làm khóa phụ khi hai khóa chính bằng nhau. Cách này đổi lấy $O(n)$ bộ nhớ.

## Lỗi thường gặp

- Nhầm "tại chỗ" với "ổn định": hai tính chất độc lập (Selection Sort tại chỗ nhưng không ổn định; Merge Sort ổn định nhưng không tại chỗ).
- Cho rằng thuật toán nào dùng `<=` cũng ổn định. Với Insertion Sort, `<=` (dịch cả phần tử bằng) lại làm mất tính ổn định.
- Bỏ qua ngăn xếp đệ quy khi nói về bộ nhớ của Quick Sort và Merge Sort.
- Dùng tính ổn định như điều kiện đủ để đúng: dãy sắp sai thì ổn định cũng vô nghĩa.
- Với kiểu nguyên thủy (`int`), ổn định không quan trọng vì hai số bằng nhau không phân biệt được; nó chỉ có ý nghĩa với bản ghi.

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): cài các thuật toán rồi tự kiểm tra ổn định bằng bản ghi có khóa trùng.
- [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort): sắp mảng đối tượng `Comparable`, nơi tính ổn định có nghĩa thực.

## Tự kiểm tra

1. Một thuật toán dùng mảng phụ $O(n)$ nhưng ổn định. Nó có tại chỗ không?

> **Đáp án**
> Không: tại chỗ đòi hỏi bộ nhớ phụ $O(1)$. Ví dụ Merge Sort.

2. Muốn sắp danh sách sinh viên theo lớp, trong cùng lớp theo tên. Làm thế nào bằng thuật toán ổn định?

> **Đáp án**
> Sắp theo tên trước, rồi sắp theo lớp bằng thuật toán ổn định; trong mỗi lớp thứ tự tên còn nguyên.

3. Chỉ ra đầu vào làm Selection Sort đảo thứ tự hai phần tử bằng nhau.

> **Đáp án**
> `[2a, 2b, 1]`: lượt đầu đổi `2a` với `1` cho `[1, 2b, 2a]`, `2a` và `2b` bị đảo.
