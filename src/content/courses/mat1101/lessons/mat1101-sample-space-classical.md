# Không gian mẫu, biến cố và xác suất cổ điển

Một phép tính xác suất chỉ có ý nghĩa sau khi xác định rõ phép thử. Bài học này trình bày cách mô hình hóa không gian mẫu, các phép toán biến cố và công thức xác suất cổ điển.

## 1. Phép thử, không gian mẫu và biến cố

- **Không gian mẫu $\Omega$:** Tập hợp mọi kết quả sơ cấp có thể xảy ra của phép thử ngẫu nhiên.
- **Biến cố $A$:** Một tập con của $\Omega$ ($A \subseteq \Omega$).
- **Phép toán biến cố:**
  - $A \cap B$: cả $A$ và $B$ cùng xảy ra.
  - $A \cup B$: ít nhất một trong hai biến cố $A$ hoặc $B$ xảy ra.
  - $A^c = \Omega \setminus A$: biến cố đối ($A$ không xảy ra).
  - $A$ và $B$ **xung khắc** nếu $A \cap B = \varnothing$.

## 2. Xác suất và công thức cổ điển

Xác suất $\mathbb{P}$ thỏa mãn $\mathbb{P}(A) \ge 0$, $\mathbb{P}(\Omega) = 1$ và tính cộng trên các biến cố đôi một xung khắc.

Nếu $\Omega$ hữu hạn và mọi kết quả sơ cấp **đồng khả năng**, ta có công thức cổ điển:

$$\mathbb{P}(A) = \frac{|A|}{|\Omega|}.$$

Không được dùng công thức này chỉ vì đề có chữ "ngẫu nhiên"; luôn phải kiểm tra các kết quả sơ cấp đang đếm có thật sự đồng khả năng hay không.

## 3. Quy tắc cộng, biến cố đối và độc lập

Với hai biến cố bất kỳ:

$$\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B), \qquad \mathbb{P}(A^c) = 1 - \mathbb{P}(A).$$

Với ba biến cố, công thức bù trừ là:

$$\mathbb{P}(A \cup B \cup C) = \mathbb{P}(A) + \mathbb{P}(B) + \mathbb{P}(C) - \mathbb{P}(A \cap B) - \mathbb{P}(A \cap C) - \mathbb{P}(B \cap C) + \mathbb{P}(A \cap B \cap C).$$

Hai biến cố $A, B$ **độc lập** nếu $\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$. Cần phân biệt rõ:
- **Xung khắc:** hai biến cố không thể cùng xảy ra ($A \cap B = \varnothing$).
- **Độc lập:** biết biến cố này xảy ra không làm thay đổi xác suất của biến cố kia.

## 4. Ví dụ minh họa

**Ví dụ 1 (ĐT07, Câu 1):** Một sinh viên học thuộc 18 trong số 25 câu hỏi thi. Rút ngẫu nhiên đồng thời 3 câu hỏi. Tính xác suất trả lời được cả 3 câu.

- Tổng số bộ 3 câu đồng khả năng: $|\Omega| = \binom{25}{3} = 2300$.
- Số bộ 3 câu đều đã học: $|A| = \binom{18}{3} = 816$.
- Xác suất cần tìm: $\mathbb{P}(A) = \frac{816}{2300} = \frac{204}{575} \approx 0{,}3548$.

**Ví dụ 2 (ĐT22, Câu 1):** Nhóm có 5 nam và 7 nữ, chọn ngẫu nhiên 3 sinh viên. Xác suất có ít nhất 2 nam:

$$\mathbb{P}(A) = \frac{\binom{5}{2}\binom{7}{1} + \binom{5}{3}\binom{7}{0}}{\binom{12}{3}} = \frac{70 + 10}{220} = \frac{4}{11} \approx 0{,}3636.$$

## Lỗi hay gặp

- Nhầm biến cố đối của "ít nhất 2" là "0" mà bỏ sót trường hợp "1".
- Cộng $\mathbb{P}(A) + \mathbb{P}(B)$ khi $A$ và $B$ không xung khắc.
- Nhân xác suất cố định khi rút không hoàn lại.
