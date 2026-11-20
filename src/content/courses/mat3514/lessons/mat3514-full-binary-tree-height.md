# Số nút của cây nhị phân đầy đủ

## Vì sao cần

Chi phí của nhiều thao tác trên cây (tìm trong [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations), đi lên đi xuống trong đống) tỉ lệ với chiều cao cây. Để biết chiều cao là nhỏ hay lớn so với số nút $N$, bạn cần quan hệ giữa hai đại lượng này. Với cây nhị phân đầy đủ (full binary tree, mọi mức đều đầy), quan hệ đó là $N=2^h-1$, suy ra $h=O(\log N)$. Bài này chứng minh công thức và nói rõ nó dùng quy ước đếm mức nào, vì khác với quy ước của [Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height).

## Phát biểu

Theo slide cây (Lecture 5): cây nhị phân đầy đủ có chiều cao $h$, **gốc ở mức 1**, mọi mức từ 1 tới $h$ đều đầy. Khi đó

$$N=2^h-1\quad\Longleftrightarrow\quad h=\log_2(N+1)=O(\log N).$$

Ký hiệu: $N$ là tổng số nút; $h$ là số mức (chiều cao tính theo số mức, không phải số cạnh).

Phân biệt với khái niệm gần giống ở [Cây nhị phân, cây đầy đủ và cây hoàn chỉnh](#/courses/mat3514/lessons/mat3514-binary-tree): cây *hoàn chỉnh* (complete) chỉ yêu cầu đầy tới mức $h-1$ và mức $h$ được lấp từ trái sang phải. Công thức $N=2^h-1$ chỉ đúng cho cây đầy đủ theo nghĩa slide (còn gọi là cây hoàn hảo). Thuật ngữ "full" ở một số giáo trình lại chỉ nghĩa là "mỗi nút có 0 hoặc 2 con"; khi gặp tài liệu khác hãy đối chiếu định nghĩa.

## Giải thích / chứng minh

Mức $k$ ($k=1,\dots,h$) có đúng $2^{k-1}$ nút, vì mỗi nút ở mức trước sinh đúng hai con. Cộng cấp số nhân:

$$N=1+2+4+\dots+2^{h-1}=\sum_{k=0}^{h-1}2^k=2^h-1.$$

Cách kiểm tra bằng quy nạp theo $h$: với $h=1$ có $1=2^1-1$ nút. Nếu cây $h$ mức có $2^h-1$ nút thì thêm mức $h+1$ gồm $2^h$ nút, tổng $2^h-1+2^h=2^{h+1}-1$.

Lấy logarit hai vế: $2^h=N+1\Rightarrow h=\log_2(N+1)$. Cây đầy đủ rất "thấp": số nút tăng gấp đôi chỉ làm $h$ tăng thêm 1.

## Ví dụ tính

| $h$ (số mức) | Số nút ở mức cuối | $N=2^h-1$ |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 4 | 7 |
| 4 | 8 | 15 |
| 10 | 512 | 1023 |

- Slide minh họa $h=4$, $N=15$.
- Ngược lại: cây đầy đủ có $N=1023$ nút có $h=\log_2 1024=10$ mức. Tìm một khóa trong cây tìm kiếm cân bằng cỡ này chỉ đi qua tối đa 10 nút, trong khi duyệt danh sách phải qua tới 1023 nút.

## Áp dụng ở đâu

- [Chiều cao của đống](#/courses/mat3514/lessons/mat3514-heap-height): mở rộng ý tưởng cho cây hoàn chỉnh của đống để chặn $h\le\log_2 n$, dẫn tới $O(\log n)$ cho [Chèn vào đống: up-heap](#/courses/mat3514/lessons/mat3514-heap-insert) và [Xóa nhỏ nhất: down-heap](#/courses/mat3514/lessons/mat3514-heap-removemin).
- [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations): nếu cây tìm kiếm cân bằng thì $h=O(\log n)$ và mọi thao tác $O(\log n)$. Với cây suy biến, $h$ có thể bằng $n$ ([Cây suy biến và phép quay cân bằng](#/courses/mat3514/lessons/mat3514-bst-balance)).
- [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound): cây quyết định cần ít nhất $n!$ lá, nên chiều cao tối thiểu cỡ $\log_2 n!$.

## Lỗi thường gặp

- Áp dụng $N=2^h-1$ cho mọi cây nhị phân. Công thức chỉ đúng khi mọi mức đều đầy; cây thưa có ít nút hơn nhiều.
- Nhầm quy ước: gốc ở mức 1 (cây này) hay gốc ở độ sâu 0 (đống). Với quy ước độ sâu từ 0 thì cây đầy đủ có $2^{h+1}-1$ nút.
- Dùng $h=\log_2 N$ thay vì $\log_2(N+1)$; chúng chỉ cùng bậc, không bằng nhau (ví dụ $N=15$ cho $h=4$, không phải $3.9$).
- Cộng sai cấp số nhân thành $2^h$ thay vì $2^h-1$.
- Cho rằng $h=O(\log N)$ đúng với mọi cây. Chỉ đúng với cây đầy đủ hoặc cân bằng.

## Tự kiểm tra

**1.** Nếu $h=4$ theo quy ước slide, cây đầy đủ có bao nhiêu nút?

> **Đáp án**
> $2^4-1=15$ nút.

**2.** Cây nhị phân đầy đủ có 255 nút thì có bao nhiêu mức và mức cuối có bao nhiêu nút?

> **Đáp án**
> $h=\log_2 256=8$ mức. Mức cuối có $2^{7}=128$ nút.

**3.** (Vận dụng) Một cây nhị phân có $N=15$ nút nhưng $h=15$ (mỗi nút một con). Công thức $h=\log_2(N+1)$ có đúng không? Điều này nói gì về thao tác trên cây suy biến?

> **Đáp án**
> Không đúng, vì cây không đầy đủ. Chiều cao là $N$ thay vì $\log_2(N+1)=4$, nên thao tác tìm kiếm tốn $O(N)$ như danh sách liên kết.
