# Bài toán sắp xếp

## Vì sao cần

Sắp xếp (sorting) là đặt các phần tử của một danh sách theo một thứ tự nhất định, thường là thứ tự số học hoặc thứ tự từ điển. Đây là một trong những bài toán nền tảng của khoa học máy tính: dãy đã sắp xếp giúp [tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search), phát hiện phần tử trùng, đếm tần suất và gộp hai tập hợp nhanh hơn rất nhiều so với dãy lộn xộn. Bài này đặt ra bài toán và các thuật ngữ chung; các bài sau cài đặt từng thuật toán cụ thể. Hãy xem mô phỏng bên dưới để thấy một dãy được sắp xếp thay đổi thế nào.

## Phát biểu bài toán

**Đầu vào:** dãy $a_1, a_2, \dots, a_n$ và một quan hệ thứ tự toàn phần $\le$ giữa các phần tử (với Java, thứ tự này được cho bởi `compareTo`, xem [Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface)).

**Đầu ra:** một hoán vị $a'_1, a'_2, \dots, a'_n$ của dãy đầu vào sao cho $a'_1 \le a'_2 \le \dots \le a'_n$.

Hai yêu cầu phải đồng thời thỏa: kết quả có thứ tự, và kết quả là hoán vị của đầu vào (không mất, không thêm phần tử). Một hàm xóa hết phần tử rồi trả về mảng rỗng không phải là thuật toán sắp xếp.

Thứ tự thường gặp:

- Thứ tự số học: $2 < 7 < 11$.
- Thứ tự từ điển (lexicographic) trên chuỗi: `"an" < "ban" < "bản"` theo mã ký tự.
- Thứ tự theo một trường của bản ghi, ví dụ sắp sinh viên theo điểm.

Ta nói *không giảm* (non-decreasing) khi cho phép các phần tử bằng nhau đứng cạnh nhau, khác với *tăng ngặt*.

## Ứng dụng

- **Đếm tần suất:** sau khi sắp xếp, các giá trị bằng nhau nằm liền nhau, chỉ cần một lượt duyệt để đếm từng nhóm.
- **Phát hiện trùng lặp:** hai phần tử bằng nhau chắc chắn đứng kề nhau.
- **Khôi phục thứ tự ban đầu:** sắp theo chỉ số gốc (xem biến thể "vị trí mới" trong [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark)).
- **Tìm kiếm nhanh:** [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search) mất $O(n)$, còn [Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search) mất $O(\log n)$ nhưng đòi hỏi dãy đã sắp. Sắp xếp một lần tốn $O(n \log n)$, đáng giá nếu tìm nhiều lần.
- **Tiền xử lý cho thuật toán khác:** [Chọn hoạt động (Activity Selection)](#/courses/mat3504/lessons/mat3504-activity-selection) sắp hoạt động theo thời điểm kết thúc, [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal) sắp cạnh theo trọng số.

## Các họ thuật toán sắp xếp

| Họ | Thuật toán | Thời gian xấu nhất |
|---|---|---|
| Đơn giản | [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort), [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort), [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) | $O(n^2)$ |
| Hiệu quả (chia để trị) | [Sắp xếp nhanh (Quick Sort)](#/courses/mat3504/lessons/mat3504-quick-sort), [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort) | $O(n^2)$ và $O(n \log n)$ |
| Dựa trên cấu trúc dữ liệu | [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) | $O(n \log n)$ |

Ngoài ra [Xáo trộn ngẫu nhiên (Shuffle)](#/courses/mat3514/lessons/mat3514-shuffle-sort) làm việc ngược lại: biến dãy bất kỳ thành hoán vị ngẫu nhiên. Các thuật toán trên đều là *sắp xếp dựa trên so sánh*: chúng chỉ biết hai phần tử cái nào nhỏ hơn. [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound) chứng minh mọi thuật toán loại này cần $\Omega(n \log n)$ phép so sánh trong trường hợp xấu nhất, nên Merge Sort và Heap Sort là tối ưu về mặt tiệm cận.

## Hai tính chất để so sánh thuật toán

Ngoài thời gian chạy, người ta hỏi thuật toán có **tại chỗ** (chỉ dùng $O(1)$ bộ nhớ phụ) và có **ổn định** (không đảo thứ tự các phần tử bằng nhau) hay không. Chi tiết ở [Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties).

## Ví dụ nhỏ

Sắp xếp `[5, 2, 9, 2]` không giảm cho `[2, 2, 5, 9]`. Có hai số 2: nếu chúng là hai bản ghi khác nhau (ví dụ hai sinh viên cùng điểm), thuật toán ổn định giữ nguyên thứ tự trước/sau của chúng, thuật toán không ổn định có thể đảo.

## Lỗi thường gặp

- Nhầm sắp xếp với tìm kiếm: sắp xếp phải thay đổi mảng, không chỉ trả về một giá trị.
- Quên rằng kết quả phải là hoán vị của đầu vào; chỉ kiểm tra "có thứ tự" là chưa đủ khi viết test.
- Dùng `==` để so sánh chuỗi hoặc đối tượng thay vì `compareTo`/`equals`.
- Giả định mọi giá trị khác nhau; dãy thật thường có phần tử trùng và điều đó ảnh hưởng tới tính ổn định, cũng như tới cách phân hoạch của [Sắp xếp nhanh (Quick Sort)](#/courses/mat3504/lessons/mat3504-quick-sort).

## Luyện tập

- [Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp](#/courses/mat3514/lessons/mat3514-hw-sorting-benchmark): cài đặt năm thuật toán và so sánh thực nghiệm, luyện việc chọn thuật toán theo $N$ và miền giá trị.
- [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs): dùng sắp xếp làm tiền xử lý để đếm cặp có tổng bằng $x$.

## Tự kiểm tra

1. Nêu hai điều kiện để một dãy đầu ra được coi là kết quả sắp xếp đúng.

> **Đáp án**
> Dãy ra có thứ tự không giảm, và nó là hoán vị của dãy vào (cùng các phần tử với cùng số lần xuất hiện).

2. Vì sao sắp xếp giúp phát hiện trùng lặp trong $O(n \log n)$ thay vì $O(n^2)$?

> **Đáp án**
> Sau khi sắp xếp ($O(n \log n)$), các phần tử bằng nhau đứng kề nhau, nên một lượt duyệt $O(n)$ so sánh cặp kề là đủ. Tổng là $O(n \log n)$, còn cách so sánh mọi cặp mất $O(n^2)$.

3. Bạn cần tìm kiếm $k$ lần trên một mảng $n$ phần tử. Khi nào nên sắp xếp trước rồi dùng tìm nhị phân?

> **Đáp án**
> Tìm tuần tự tốn $O(kn)$; sắp xếp rồi tìm nhị phân tốn $O(n \log n + k \log n)$. Khi $k$ đủ lớn (cỡ $\log n$ trở lên), phương án thứ hai thắng.
