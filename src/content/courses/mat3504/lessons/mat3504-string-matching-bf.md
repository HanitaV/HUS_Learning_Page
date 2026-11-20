# Khớp xâu vét cạn

## Bài toán

Cho văn bản $T[0..n-1]$ và mẫu $P[0..m-1]$. Tìm vị trí $i$ sao cho $P[0..m-1]=T[i..i+m-1]$; nếu không có thì trả về $-1$. Ví dụ $T=\text{abracadabra}$, $P=\text{cad}$ cho $i=4$; $P=\text{abx}$ cho $-1$. Mô phỏng bên dưới dịch mẫu dọc văn bản và tô các ký tự đang so sánh.

## Kiến thức sử dụng

- [Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force): không gian ứng viên là $n-m+1$ vị trí đặt mẫu, kiểm tra từng vị trí bằng cách so sánh.
- [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o): đếm số phép so sánh ký tự để ra $O(mn)$.
- [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search): cùng tư tưởng duyệt tuyến tính, chỉ khác mỗi bước kiểm tra là so cả một đoạn.

## Phân tích

Mẫu có thể bắt đầu ở các vị trí $i=0,1,\dots,n-m$ (sau đó mẫu vượt khỏi văn bản). Với mỗi $i$, ta so $P[j]$ với $T[i+j]$ cho $j=0,1,\dots$ và dừng ngay ở ký tự đầu tiên lệch. Nếu so hết $m$ ký tự mà không lệch thì $i$ là đáp án. Vì chỉ một ký tự lệch đã đủ loại vị trí, ta không so tiếp.

## Lời giải từng bước

$T=\text{AABAAC}$, $P=\text{AAC}$, $n=6$, $m=3$, nên $i$ chạy từ 0 đến 3.

| $i$ | Đoạn $T[i..i+2]$ | So sánh | Kết quả |
|---|---|---|---|
| 0 | AAB | A=A, A=A, C khác B | lệch ở $j=2$ (3 phép so) |
| 1 | ABA | A=A, A khác B | lệch ở $j=1$ (2 phép so) |
| 2 | BAA | A khác B | lệch ở $j=0$ (1 phép so) |
| 3 | AAC | A=A, A=A, C=C | $j=m$, trả về 3 |

Tổng 9 phép so sánh. Kết quả là $3$.

## Cài đặt

Khớp với mã giả của slide (vòng `for i`, vòng `while j < m` và `P[j] = T[i+j]`).

```java
static int bruteForceMatch(String t, String p) {
    int n = t.length(), m = p.length();
    for (int i = 0; i <= n - m; i++) {
        int j = 0;
        while (j < m && p.charAt(j) == t.charAt(i + j)) {
            j++;
        }
        if (j == m) return i;      // khớp toàn bộ mẫu
    }
    return -1;
}
```

Ghi chú: điều kiện `j < m` đứng trước phép so để không đọc ngoài mẫu. Với $m=0$ hàm trả về 0 ngay (mẫu rỗng khớp ở đầu); nên quy ước rõ trường hợp này.

## Độ phức tạp

| Trường hợp | Số phép so | Ví dụ |
|---|---|---|
| Tốt nhất | $O(m)$ | mẫu khớp ngay ở $i=0$ |
| Xấu nhất | $O(m(n-m+1))=O(mn)$ | $T=\text{AAAA...A}$, $P=\text{AA...AB}$ |
| Trung bình (văn bản ngẫu nhiên) | gần $O(n)$ | thường lệch ở ký tự đầu |
| Bộ nhớ phụ | $O(1)$ | |

Slide đặt câu hỏi cải tiến được tới $O(?)$ và liệt kê các thuật toán cải tiến (như KMP, Boyer-Moore), tránh so lại ký tự đã biết; KMP đạt $O(n+m)$. Chúng chưa có bài riêng trong site này.

## Mở rộng

- Trả về mọi vị trí khớp: không `return`, mà ghi $i$ vào danh sách rồi tiếp tục.
- Đếm số lần xuất hiện, kể cả chồng lấn ($T=\text{aaaa}$, $P=\text{aa}$ cho 3 vị trí).
- Đây là Bài 1, ý 1 trong phiếu [Bài tập: vét cạn, quay lui, nhánh cận](#/courses/mat3504/lessons/mat3504-hw-trial-error).

## Tự kiểm tra

1. Nêu đầu vào xấu nhất cho $n=10$, $m=3$ và đếm số phép so sánh.

> **Đáp án**
> $T=\text{AAAAAAAAAA}$, $P=\text{AAB}$. Mỗi vị trí $i=0..7$ (8 vị trí) so 3 ký tự mới lệch, tổng $8\times 3=24$ phép so sánh, đúng bằng $m(n-m+1)$.

2. Vì sao vòng ngoài chỉ chạy tới $n-m$ chứ không tới $n-1$?

> **Đáp án**
> Từ $i>n-m$ thì đoạn $T[i..i+m-1]$ vượt quá cuối văn bản, không thể chứa đủ $m$ ký tự của mẫu.

3. Với $T=\text{ababab}$, $P=\text{abab}$ có mấy vị trí khớp? Hàm trên trả về gì?

> **Đáp án**
> Khớp ở $i=0$ và $i=2$ (chồng lấn). Hàm trên trả về vị trí đầu tiên là $0$.
