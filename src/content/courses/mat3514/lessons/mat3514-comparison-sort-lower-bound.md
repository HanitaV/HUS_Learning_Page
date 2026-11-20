# Cận dưới của sắp xếp dựa trên so sánh

## Vì sao cần

Bạn đã gặp các thuật toán sắp xếp $O(n^2)$ như [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort), rồi $O(n\log n)$ như [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort) và [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort). Câu hỏi tự nhiên: có thuật toán sắp xếp dựa trên so sánh nào nhanh hơn $n\log n$ không? Định lý cận dưới trả lời là không: mọi thuật toán chỉ dùng phép so sánh phải thực hiện $\Omega(n\log n)$ phép so sánh trong trường hợp xấu nhất. Vì vậy Merge Sort và Heap Sort được gọi là tối ưu trong mô hình này. (Tài liệu môn học chỉ ghi nhận "tối ưu" và không chứng minh; phần chứng minh dưới đây là kiến thức giáo trình chung.)

## Phát biểu

**Định lý.** Mọi thuật toán giải [Bài toán sắp xếp](#/courses/mat3514/lessons/mat3514-sorting-problem) chỉ dựa trên phép so sánh hai phần tử (so sánh khóa) cần ít nhất $\lceil\log_2(n!)\rceil$ phép so sánh trong trường hợp xấu nhất với $n$ khóa phân biệt, và

$$\log_2(n!)=\Omega(n\log n).$$

Mô hình "dựa trên so sánh": thuật toán chỉ được biết thứ tự giữa các khóa thông qua kết quả các câu hỏi "$a_i<a_j$?", không được dùng giá trị khóa theo cách khác (như dùng làm chỉ số mảng).

## Giải thích / chứng minh

Dùng **cây quyết định** (decision tree):

1. Mỗi nút trong là một phép so sánh $a_i:a_j$ với hai nhánh (có/không). Mỗi lần chạy thuật toán trên một đầu vào đi theo một đường từ gốc xuống một lá.
2. Mỗi lá ứng với một cách sắp xếp, tức một hoán vị của chỉ số. Với $n$ khóa phân biệt có $n!$ thứ tự ban đầu khác nhau, và hai thứ tự khác nhau phải kết thúc ở hai lá khác nhau (vì phải xuất ra hoán vị khác nhau). Vậy cây có ít nhất $n!$ lá.
3. Cây nhị phân có chiều cao $h$ có tối đa $2^h$ lá. Do đó $2^h\ge n!$, tức $h\ge\log_2(n!)$.
4. Chiều cao cây chính là số so sánh trong trường hợp xấu nhất (liên hệ chiều cao với số nút ở [Số nút của cây nhị phân đầy đủ](#/courses/mat3514/lessons/mat3514-full-binary-tree-height)).
5. Ước lượng: $n!\ge\left(\frac n2\right)^{n/2}$ vì $\frac n2$ thừa số cuối đều $\ge\frac n2$. Do đó

$$\log_2(n!)\ge\frac n2\log_2\frac n2=\frac n2\log_2 n-\frac n2=\Omega(n\log n).$$

(Công thức Stirling cho $\log_2(n!)=n\log_2 n-n\log_2e+O(\log n)$, mạnh hơn.)

## Ví dụ tính

Cận dưới nhỏ nhất của số phép so sánh trong trường hợp xấu nhất:

| $n$ | $n!$ | $\lceil\log_2 n!\rceil$ | $n\log_2 n$ (tham khảo) |
|---|---|---|---|
| 3 | 6 | 3 | 4.75 |
| 4 | 24 | 5 | 8 |
| 5 | 120 | 7 | 11.6 |
| 8 | 40320 | 16 | 24 |

Ví dụ $n=3$: có 6 thứ tự nên cây cần $\ge6$ lá; cây cao 2 chỉ có $\le4$ lá, nên cần chiều cao 3. Thật vậy sắp 3 số không thể làm chắc chắn trong 2 phép so sánh.

Với $n=1024$: $\log_2(1024!)\approx 8770$, còn $n^2/2\approx524\,000$. Merge Sort dùng không quá khoảng $n\log_2 n=10\,240$ phép so sánh, chỉ hơn cận dưới một hằng số nhỏ.

## Áp dụng ở đâu

- [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort): có $T(n)=2T(n/2)+n=O(n\log n)$ ([Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem)) đạt đúng cận, nên là tối ưu về bậc.
- [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort): dùng [Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height) để chứng minh mỗi thao tác $O(\log n)$, cũng đạt cận.
- [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort): trung bình $O(n\log n)$ cũng không thể nhanh hơn bậc này.
- Khi nghĩ cách "tăng tốc" một thuật toán so sánh xuống dưới $n\log n$, định lý cho biết phải bỏ giả định so sánh (ví dụ dùng cấu trúc đặc biệt của khóa) hoặc chấp nhận không thể.

## Lỗi thường gặp

- Cho rằng không thuật toán sắp xếp nào nhanh hơn $n\log n$. Cận chỉ cho phép so sánh; sắp xếp đếm hay sắp xếp theo chữ số chạy $O(n)$ với khóa là số nguyên nhỏ vì chúng không dựa trên so sánh.
- Cho rằng cận áp dụng cho trường hợp tốt nhất. Mảng đã sắp thì [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort) và bubble sort dừng sớm chạy $O(n)$; cận $\Omega(n\log n)$ chỉ là cho trường hợp xấu nhất.
- Nhầm $\Omega$ với $O$: cận dưới nói "ít nhất", không nói thuật toán cụ thể chạy bao lâu.
- Quên điều kiện khóa phân biệt khi đếm $n!$ lá (nếu có khóa trùng, số kết quả khác nhau ít hơn).
- Đếm chiều cao cây bằng số nút thay vì số phép so sánh trên đường dài nhất.

## Tự kiểm tra

**1.** Vì sao thuật toán $O(n\log n)$ được gọi là tối ưu trong mô hình dựa trên so sánh?

> **Đáp án**
> Vì cận trên $O(n\log n)$ của nó khớp bậc với cận dưới $\Omega(n\log n)$ cho mọi thuật toán sắp xếp dựa trên so sánh.

**2.** Cần tối thiểu bao nhiêu phép so sánh để sắp chắc chắn 4 số phân biệt?

> **Đáp án**
> $\lceil\log_2 24\rceil=5$, vì $2^4=16<24\le32=2^5$.

**3.** (Vận dụng) Một bạn tuyên bố có thuật toán sắp xếp $n$ số bất kỳ bằng so sánh với số phép so sánh $O(n)$ trong trường hợp xấu nhất. Bạn bác bỏ bằng lập luận nào?

> **Đáp án**
> Cây quyết định của thuật toán đó có chiều cao $O(n)$ nên chỉ có $2^{O(n)}$ lá, nhỏ hơn $n!$ khi $n$ đủ lớn vì $\log_2 n!=\Omega(n\log n)$. Không đủ lá cho mọi hoán vị, nên không thể đúng với mọi đầu vào.
