# Máy Turing

## Vì sao cần

Để nói "bài toán này giải được trong thời gian đa thức" một cách chặt chẽ ([Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes)), ta cần một mô hình tính toán được định nghĩa chính xác. Máy Turing là mô hình lý thuyết như vậy: một cấu trúc dữ liệu đơn giản là một dải ký tự, cùng một đầu đọc/ghi di chuyển trái, phải. Mọi thuật toán ([Bài toán và thuật toán](#/courses/mat3504/lessons/mat3504-algorithm-problem)) đều có thể diễn đạt thành máy Turing. Trong bài này bạn đọc và chạy tay một máy Turing cụ thể, rồi bài tập [Bài tập: thiết kế máy Turing](#/courses/mat3504/lessons/mat3504-hw-turing) yêu cầu tự thiết kế.

## Định nghĩa

Từ góc độ lập trình, máy Turing chỉ có một cấu trúc dữ liệu là **xâu ký tự (băng)**, cùng thao tác di chuyển con trỏ (đầu đọc) sang trái, phải trên xâu và ghi một ký hiệu vào vị trí hiện tại tùy theo ký hiệu đang đọc.

**Định nghĩa.** Máy Turing là một bộ bốn $M = (K, \Sigma, \delta, s)$, trong đó:

- $K$ là tập hữu hạn các **trạng thái**; $s \in K$ là trạng thái khởi đầu.
- $\Sigma$ là tập hữu hạn các ký hiệu, gọi là **bảng chữ cái** của $M$. $K$ và $\Sigma$ không giao nhau. $\Sigma$ luôn chứa hai ký hiệu đặc biệt: $\sqcup$ (ký hiệu trắng) và $\triangleright$ (ký hiệu đầu tiên).
- $\delta$ là **hàm chuyển**, ánh xạ từ $K \times \Sigma$ vào $(K \cup \{h, \text{"yes"}, \text{"no"}\}) \times \Sigma \times \{\leftarrow, \rightarrow, -\}$.

Trong đó $h$ là trạng thái dừng, "yes" là trạng thái chấp nhận, "no" là trạng thái không chấp nhận. Ba ký hiệu $\leftarrow$, $\rightarrow$, $-$ (không thuộc $K \cup \Sigma$) là chiều di chuyển con trỏ: sang trái, sang phải, đứng yên.

Đọc $\delta(p, \sigma) = (q, \rho, D)$ như sau: "đang ở trạng thái $p$, con trỏ đọc ký hiệu $\sigma$, thì chuyển sang trạng thái $q$, ghi $\rho$ đè lên ô hiện tại, rồi di chuyển con trỏ theo hướng $D$."

## Thực hiện chương trình

- **Trạng thái ban đầu.** Máy ở trạng thái $s$. Băng chứa $\triangleright$ rồi đến xâu hữu hạn $x \in (\Sigma - \{\sqcup\})^*$, gọi là **đầu vào**. Con trỏ chỉ vào ký hiệu đầu tiên, luôn là $\triangleright$.
- **Quy ước $\triangleright$.** Hàm $\delta$ luôn thỏa $\delta(p, \triangleright) = (q, \triangleright, \rightarrow)$, tức khi gặp $\triangleright$ máy không ghi đè và luôn đi sang phải. Vì vậy con trỏ không bao giờ "rơi" khỏi mép trái.
- **Băng vô hạn về bên phải.** Khi con trỏ quét qua ô trắng $\sqcup$, nó có thể ghi đè ký hiệu khác lên đó, nên xâu không bao giờ ngắn đi, đây là đặc tính quan trọng cho các phép tính phức tạp.
- **Dừng.** Vì $\delta$ hoàn toàn xác định và không rơi trái, máy chỉ dừng khi vào một trong ba trạng thái $h$, "yes", "no". Dừng ở "yes": máy **chấp nhận** đầu vào, $M(x) = \text{"yes"}$. Dừng ở "no": **không chấp nhận**, $M(x) = \text{"no"}$. Dừng ở $h$: băng có dạng $\triangleright y$, ta gọi $y$ là **đầu ra**, viết $y = M(x)$ ($y$ có thể rỗng).
- Có thể $M$ **không bao giờ dừng** với đầu vào $x$; khi đó viết $M(x) = \nearrow$.

## Ví dụ chạy tay

Máy $M = (K, \Sigma, \delta, s)$ với $K = \{s, q, q_0, q_1\}$, $\Sigma = \{0, 1, \sqcup, \triangleright\}$ và hàm chuyển:

| $p$ | $\sigma$ | $\delta(p,\sigma)$ | | $p$ | $\sigma$ | $\delta(p,\sigma)$ |
|---|---|---|---|---|---|---|
| $s$ | 0 | $(s, 0, \rightarrow)$ | | $q_0$ | 0 | $(s, 0, \leftarrow)$ |
| $s$ | 1 | $(s, 1, \rightarrow)$ | | $q_0$ | 1 | $(s, 0, \leftarrow)$ |
| $s$ | $\sqcup$ | $(q, \sqcup, \leftarrow)$ | | $q_0$ | $\sqcup$ | $(s, 0, \leftarrow)$ |
| $s$ | $\triangleright$ | $(s, \triangleright, \rightarrow)$ | | $q_0$ | $\triangleright$ | $(h, \triangleright, \rightarrow)$ |
| $q$ | 0 | $(q_0, \sqcup, \rightarrow)$ | | $q_1$ | 0 | $(s, 1, \leftarrow)$ |
| $q$ | 1 | $(q_1, \sqcup, \rightarrow)$ | | $q_1$ | 1 | $(s, 1, \leftarrow)$ |
| $q$ | $\sqcup$ | $(q, \sqcup, -)$ | | $q_1$ | $\sqcup$ | $(s, 1, \leftarrow)$ |
| $q$ | $\triangleright$ | $(h, \triangleright, \rightarrow)$ | | $q_1$ | $\triangleright$ | $(h, \triangleright, \rightarrow)$ |

Ý tưởng của máy: $s$ chạy tới cuối xâu; $q$ lùi lại, lấy ký tự cuối "bỏ vào túi" ($q_0$ hay $q_1$ nhớ ký tự đã xóa), đi sang phải ghi nó vào ô kế tiếp rồi trở về bằng $s$. Lặp lại cho mọi ký tự, kết quả là **chèn một ký tự trắng vào đầu xâu**: mỗi ký tự bị dịch sang phải một ô.

Chạy trên đầu vào `010` (gạch dưới trong slide chỉ vị trí con trỏ; ở đây ghi vị trí bằng chỉ số ô, ô 0 là $\triangleright$):

| Bước | Trạng thái | Băng | Con trỏ ở ô |
|---|---|---|---|
| 0 | $s$ | $\triangleright 010$ | 0 |
| 1 | $s$ | $\triangleright 010$ | 1 |
| 2 | $s$ | $\triangleright 010$ | 2 |
| 3 | $s$ | $\triangleright 010$ | 3 |
| 4 | $s$ | $\triangleright 010\sqcup$ | 4 (ô trắng) |
| 5 | $q$ | $\triangleright 010\sqcup$ | 3 |
| 6 | $q_0$ | $\triangleright 01\sqcup\sqcup$ | 4 |
| 7 | $s$ | $\triangleright 01\sqcup 0$ | 3 |
| 8 | $q$ | $\triangleright 01\sqcup 0$ | 2 |
| 9 | $q_1$ | $\triangleright 0\sqcup\sqcup 0$ | 3 |
| 10 | $s$ | $\triangleright 0\sqcup 10$ | 2 |
| 11 | $q$ | $\triangleright 0\sqcup 10$ | 1 |
| 12 | $q_0$ | $\triangleright\sqcup\sqcup 10$ | 2 |
| 13 | $s$ | $\triangleright\sqcup 010$ | 1 |
| 14 | $q$ | $\triangleright\sqcup 010$ | 0 |
| 15 | $h$ | $\triangleright\sqcup 010$ | 1 |

Máy dừng ở $h$ sau 15 bước, đầu ra $y = M(010) = \sqcup 010$.

## Thời gian tính toán

Theo slide, với mô hình máy Turing ("thuật toán là một máy Turing"):

- một đơn vị nhớ là một ô trên băng, chứa một ký hiệu;
- một đơn vị thời gian là thời gian để máy chuyển từ trạng thái này sang trạng thái khác;
- thời gian tính toán là **số bước chuyển trạng thái** để hoàn thành thuật toán.

Ví dụ trên chạy 15 bước cho $n = 3$. Một cách đếm tổng quát: $n + 1$ bước quét tới ô trắng, 1 bước đổi hướng, $3n$ bước dịch (mỗi ký tự: xóa, ghi, quay lại) và 1 bước cuối, tổng $4n + 3$ (đúng $15$ khi $n = 3$). Vậy máy này có $T(n) = O(n)$. So sánh với mô hình RAM, xem [Thời gian thực hiện và mô hình RAM](#/courses/mat3504/lessons/mat3504-running-time-model).

## Lỗi thường gặp

- Quên $\delta(p, \triangleright)$ phải giữ nguyên $\triangleright$ và đi sang phải; thiếu dòng này máy bị kẹt hoặc rơi mép trái.
- Thiếu một cặp (trạng thái, ký hiệu) mà máy có thể gặp: $\delta$ phải xác định với mọi tổ hợp có thể xảy ra, nếu không máy "treo" không xác định.
- Nhầm ký hiệu trắng $\sqcup$ với xâu rỗng hay ký tự `0`.
- Để trạng thái mà vòng lặp bất tận (ví dụ $\delta(q, \sqcup) = (q, \sqcup, -)$ khi ô hiện tại luôn trắng): máy không dừng, $M(x) = \nearrow$.
- Dùng đầu ra sau khi máy "yes"/"no": chỉ trạng thái $h$ mới có đầu ra $y$; "yes"/"no" là kết quả đúng/sai.

## Luyện tập

- [Bài tập: thiết kế máy Turing](#/courses/mat3504/lessons/mat3504-hw-turing): thiết kế máy đảo bit, xóa chữ số 0, kiểm tra xâu đối xứng, cộng/trừ 1 nhị phân và viết chương trình mô phỏng.
- [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes): dùng khái niệm "số bước chuyển" để định nghĩa P và NP.
- Tự luyện: thiết kế máy đổi mọi `1` thành `0` trong xâu nhị phân.

::: Đáp án tự luyện
Một trạng thái $s$: $\delta(s, \triangleright) = (s, \triangleright, \rightarrow)$, $\delta(s, 0) = (s, 0, \rightarrow)$, $\delta(s, 1) = (s, 0, \rightarrow)$, $\delta(s, \sqcup) = (h, \sqcup, -)$. Máy quét một lần, $n + 2$ bước.
:::

## Tự kiểm tra

1. Vì sao con trỏ của máy Turing không bao giờ rơi khỏi mép trái băng?

> **Đáp án**
> Vì $\Sigma$ có $\triangleright$ ở ô đầu và $\delta(p, \triangleright)$ luôn ghi lại $\triangleright$ và đi sang phải.

2. Máy Turing có thể dừng bằng những cách nào và đầu ra nằm ở đâu?

> **Đáp án**
> Dừng ở $h$ (đầu ra là xâu $y$ sau $\triangleright$, $y$ có thể rỗng), ở "yes" (chấp nhận) hoặc "no" (không chấp nhận). Cũng có thể không bao giờ dừng.

3. Với máy ví dụ, chạy trên đầu vào rỗng thì dừng sau mấy bước và đầu ra là gì?

> **Đáp án**
> Bước 1: $s$ đọc $\triangleright$, sang phải. Bước 2: $s$ đọc $\sqcup$, sang trái ($q$). Bước 3: $q$ đọc $\triangleright$, dừng $h$. Tổng 3 bước ($4n + 3$ với $n = 0$), đầu ra rỗng.
