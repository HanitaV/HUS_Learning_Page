# Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ

## Vì sao cần

Bạn đã biết đo độ phức tạp của một thuật toán ([Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o)). Nhưng có những bài toán mà mọi thuật toán đã biết đều mất thời gian mũ, ví dụ người du lịch ([Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb)). Câu hỏi đặt ra: bài toán này vốn khó, hay ta chưa tìm ra thuật toán hay? Phân lớp bài toán (P, NP, NP-khó, NP-đầy đủ) cho ngôn ngữ để nói về độ khó của chính bài toán, độc lập với một thuật toán cụ thể. Phần này nằm trong đề cương ôn tập cuối kỳ của môn.

## Độ phức tạp của bài toán

**Định nghĩa 1.** Độ phức tạp của bài toán là độ phức tạp của thuật toán **tốt nhất** (có độ phức tạp nhỏ nhất) để giải nó.

Vì vậy một thuật toán chỉ cho **cận trên** của độ khó bài toán. Để nói bài toán khó thì cần thêm một cận dưới, ví dụ [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound) cho bài toán sắp xếp bằng so sánh là $\Omega(n \log n)$.

## Phép dẫn về

**Định nghĩa 2.** Bài toán $B$ được gọi là "dẫn về được" bài toán $A$, ký hiệu $B \propto A$, nếu có thuật toán đơn định đa thức giải $A$ thì cũng có thuật toán đơn định đa thức giải $B$.

Cách hiểu thực tế: để giải $B$, đổi đầu vào của $B$ thành đầu vào của $A$ trong thời gian đa thức, gọi bộ giải $A$, rồi đổi kết quả về. Nếu $A$ dễ (đa thức) thì $B$ cũng dễ. Hay nói theo chiều ngược lại: nếu $B$ khó thì $A$ cũng khó. Phép dẫn là công cụ để truyền độ khó từ bài này sang bài khác.

**Định nghĩa 3.** $A$ khó tương đương $B$, ký hiệu $A \sim B$, nếu $A \propto B$ và $B \propto A$.

## Các lớp P và NP

- **P** (polynomial): lớp các bài toán giải được bằng thuật toán **đơn định** trong thời gian đa thức theo kích thước dữ liệu. Ví dụ: sắp xếp, tìm đường đi ngắn nhất ([Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra)), cây khung nhỏ nhất ([Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst)).
- **NP** (nondeterministic polynomial): lớp các bài toán mà một lời giải cho trước có thể **kiểm tra** trong thời gian đa thức (tương đương: giải được bằng thuật toán **không đơn định** trong thời gian đa thức). Ví dụ: cho một hành trình, kiểm tra tổng độ dài $\le K$ rất nhanh, dù tìm ra hành trình tốt thì chưa có thuật toán đa thức.

> Slide mô tả NP là "lớp bài toán không giải được bằng thuật toán đơn định trong thời gian đa thức". Nếu hiểu đúng nghĩa đen thì P và NP rời nhau, trong khi định nghĩa chuẩn có $P \subseteq NP$ (một bài giải được nhanh thì tất nhiên kiểm tra được nhanh). Cách hiểu của slide là "các bài toán chưa biết thuật toán đơn định đa thức". Khi làm bài thi, hãy theo định nghĩa chuẩn bên trên và nhớ câu hỏi mở nổi tiếng **P có bằng NP không?**

## NP-khó và NP-đầy đủ

**Định nghĩa 4.** Bài toán $A$ là **NP-khó** (NP-hard) nếu với mọi bài toán $B \in NP$ đều có $B \propto A$. Nói cách khác $A$ khó ít nhất bằng mọi bài trong NP; $A$ không nhất thiết thuộc NP.

**Định nghĩa 5.** Bài toán $A$ là **NP-đầy đủ** (NP-complete) nếu $A \in NP$ và $A$ là NP-khó.

Hệ quả quan trọng: nếu tìm được thuật toán đa thức cho **một** bài NP-đầy đủ thì mọi bài trong NP đều giải được trong thời gian đa thức, tức $P = NP$.

## Ví dụ: dùng phép dẫn để chứng minh NP-khó

Để chứng minh bài $A$ NP-khó, người ta không dẫn mọi bài NP về $A$. Chỉ cần chọn một bài $C$ đã biết NP-khó rồi chứng minh $C \propto A$ (tính bắc cầu). Quy trình đầy đủ để chứng minh $A$ NP-đầy đủ:

1. Chứng minh $A \in NP$: chỉ ra thuật toán kiểm tra lời giải trong thời gian đa thức.
2. Chọn một bài NP-đầy đủ đã biết $C$ (ví dụ SAT).
3. Xây phép dẫn đa thức từ $C$ về $A$.

Một cặp quen thuộc: bài toán chu trình Hamilton dẫn về được bài toán người du lịch (TSP) bằng cách gán trọng số 1 cho cạnh có, 2 cho cạnh không có, rồi hỏi hành trình có độ dài $\le n$ không.

## Sơ đồ quan hệ (giả thiết $P \ne NP$)

| Lớp | Nội dung | Ví dụ |
|---|---|---|
| P | giải nhanh được | sắp xếp, Dijkstra |
| NP \ P | kiểm tra nhanh, chưa biết giải nhanh | (nếu $P \ne NP$) |
| NP-đầy đủ | khó nhất trong NP | SAT, TSP (dạng quyết định), Hamilton |
| NP-khó | khó ít nhất bằng NP-đầy đủ | TSP (dạng tối ưu) |

Máy Turing cho một mô hình tính toán chính xác để định nghĩa "đơn định" và "không đơn định": xem [Máy Turing](#/courses/mat3504/lessons/mat3504-turing-machine).

## Áp dụng ở đâu

- Khi gặp bài toán mới, nhận ra nó NP-khó báo cho bạn không nên mong có thuật toán đa thức chính xác, và nên chuyển sang các hướng như vét cạn có cắt tỉa ([Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force), [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking), [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound)), tham lam xấp xỉ ([Phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method)) hoặc quy hoạch động cho kích thước nhỏ ([Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming)).
- [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01) giải được trong $O(nW)$ bằng quy hoạch động; đó là thời gian giả đa thức, không mâu thuẫn với việc bài toán là NP-đầy đủ vì $W$ là một số, kích thước dữ liệu là số bit của $W$.

## Lỗi thường gặp

- Hiểu NP là "không đa thức" (non-polynomial): thực ra là "đa thức không đơn định". Đây là lỗi tên gọi phổ biến.
- Nghĩ rằng NP-khó nghĩa là "mất thời gian mũ": chưa ai chứng minh được cận dưới mũ cho các bài này.
- Nhầm chiều của phép dẫn: để chứng minh $A$ NP-khó phải dẫn một bài **đã biết khó** về $A$, không phải dẫn $A$ về bài khó.
- Cho rằng NP-khó thì thuộc NP: bài toán dừng là NP-khó nhưng không thuộc NP.
- Bỏ quên bước $A \in NP$ khi chứng minh NP-đầy đủ.

## Tự kiểm tra

1. Nếu $B \propto A$ và $A \in P$, có kết luận gì về $B$?

> **Đáp án**
> $B \in P$, vì giải $B$ bằng cách dẫn về $A$ rồi gọi thuật toán đa thức của $A$; tổng vẫn là đa thức.

2. Muốn chứng minh bài toán $A$ là NP-đầy đủ cần những gì?

> **Đáp án**
> (1) $A \in NP$, tức kiểm tra lời giải đa thức; (2) một bài NP-đầy đủ đã biết $C$ dẫn đa thức về $A$ ($C \propto A$).

3. Một bạn tìm được thuật toán $O(n^{100})$ cho một bài NP-đầy đủ. Nó có thực dụng không và có ý nghĩa lý thuyết gì?

> **Đáp án**
> Không thực dụng vì bậc quá lớn. Nhưng lý thuyết thì rất lớn: bài đó thuộc P nên mọi bài NP đều thuộc P, tức $P = NP$.
