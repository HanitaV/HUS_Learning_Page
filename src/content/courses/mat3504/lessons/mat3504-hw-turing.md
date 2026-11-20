# Bài tập: thiết kế máy Turing

## Đề bài

Bài tập 1 của môn Thiết kế và đánh giá thuật toán (HUS, học kỳ II năm học 2023-2024), phần "Máy Turing". Mục tiêu: nắm kiến thức cơ bản về lý thuyết thuật toán, hiểu sơ lược về độ phức tạp thuật toán và đánh giá độ phức tạp, đồng thời xây dựng được máy Turing và viết chương trình mô phỏng máy Turing.

**Bài tập 1.** Xây dựng và viết chương trình mô phỏng máy Turing. Sinh viên tự chọn thực hiện **ít nhất 3** trong các máy sau (chương trình viết bằng Java, C/C++ hoặc Python):

1. Máy Turing $M_1$ thực hiện phép **cộng 1** của số nhị phân.
2. Máy Turing $M_2$ thực hiện phép **trừ 1** của số nhị phân.
3. Máy Turing $M_3$ thay tất cả các số 0 trong một dãy nhị phân thành số 1 và ngược lại. Ví dụ: 01001 $\Rightarrow$ 10110.
4. Máy Turing $M_4$ loại bỏ các chữ số 0 trong dãy nhị phân. Sau khi bỏ cần dồn dãy lại. Ví dụ: 01001 $\Rightarrow$ 11.
5. Máy Turing $M_5$ kiểm tra một dãy số nhị phân có đối xứng hay không. Ví dụ: 010010 $\Rightarrow$ "yes", 01100 $\Rightarrow$ "no".
6. Máy Turing $M_6$ thực hiện chèn thêm ký tự trắng vào đầu xâu.

**Bài tập 2.** (Luyện tập phân tích bài toán, viết thuật toán.) Làm các bài trong phần Exercise 1.2, trang 43-44 của sách Ananiy, chọn ít nhất 2 trong 10 bài. Đề các bài này nằm trong sách, không chép lại ở đây.

Quy cách nộp (tóm tắt): nộp mã nguồn kèm dữ liệu và hướng dẫn chạy trong một thư mục `Hw1_MaSinhVien_Hovaten`, nén thành file `.zip` cùng tên; bài chép lẫn nhau bị xử lý nghiêm theo quy định của môn.

## Kiến thức cần ôn

- [Máy Turing](#/courses/mat3504/lessons/mat3504-turing-machine): định nghĩa $M = (K, \Sigma, \delta, s)$, quy ước $\delta(p, \triangleright) = (q, \triangleright, \rightarrow)$, các trạng thái dừng $h$, "yes", "no". Cần cho mọi máy $M_1$ đến $M_6$.
- [Thời gian thực hiện và mô hình RAM](#/courses/mat3504/lessons/mat3504-running-time-model): thời gian tính toán là số bước chuyển trạng thái; dùng để báo cáo $T(n)$ của máy bạn thiết kế.
- [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o): để chuyển số bước đếm được thành $O(n)$ hay $O(n^2)$.
- [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes): ngữ cảnh vì sao máy Turing dùng để định nghĩa P và NP.

## Hướng tiếp cận

**Cách chung.** Với mỗi máy, trả lời lần lượt: (1) máy cần nhớ gì khi di chuyển (mỗi thông tin cần nhớ là một trạng thái); (2) con trỏ đi hướng nào ở mỗi giai đoạn; (3) máy dừng khi nào. Sau đó lập bảng $\delta$ và chạy tay một ví dụ ngắn trước khi code.

- **$M_3$ (đảo bit).** Một lượt quét phải, ghi đè bit đối lập, gặp ô trắng thì dừng. Không cần nhớ gì, một trạng thái là đủ.
- **$M_6$ (chèn ô trắng đầu xâu).** Đã có lời giải mẫu trong slide của [Máy Turing](#/courses/mat3504/lessons/mat3504-turing-machine); bạn chỉ cần hiểu và cài vào mô phỏng.
- **$M_1$ (cộng 1).** Số được viết bit cao ở bên trái. Quét tới cuối, rồi đi lùi: gặp 1 thì ghi 0 và nhớ 1 (tiếp tục lùi), gặp 0 thì ghi 1 và dừng. Nếu lùi tới $\triangleright$ (toàn 1) thì phải thêm một chữ số: kết quả là 1 theo sau các số 0.
- **$M_2$ (trừ 1).** Tương tự nhưng ngược: lùi, gặp 0 thì ghi 1 (mượn) và tiếp tục, gặp 1 thì ghi 0 và dừng. Nếu lùi tới $\triangleright$ thì đầu vào là $0\dots0$, không trừ được: dừng ở "no".
- **$M_5$ (đối xứng).** Xóa ký tự đầu (nhớ nó bằng trạng thái), chạy sang cuối, so với ký tự cuối, xóa nó, quay lại; lặp lại. Nếu hết ký tự thì "yes", nếu hai đầu khác nhau thì "no".
- **$M_4$ (xóa số 0 và dồn dãy).** Khó nhất. Khi gặp 0: xóa nó, rồi dịch toàn bộ phần phía sau sang trái một ô, sau đó quay về đầu và quét lại. Mỗi lần dịch là một vòng "xóa ô, nhớ ký tự, lùi, ghi lại".

Với chương trình mô phỏng: lưu băng bằng `StringBuilder`, bảng $\delta$ bằng một `Map` từ (trạng thái, ký hiệu) tới (trạng thái mới, ký hiệu ghi, hướng).

## Gợi ý theo bậc

::: Gợi ý 1: chương trình mô phỏng
Chỉ cần một vòng lặp: đọc ký hiệu tại vị trí con trỏ, tra $\delta$, ghi, đổi trạng thái, di chuyển. Dừng khi trạng thái là $h$, "yes" hoặc "no". Nếu con trỏ vượt cuối băng, nối thêm một ô trắng.
:::

::: Gợi ý 2: thiết kế $M_1$, $M_2$
Dùng hai giai đoạn: $s$ quét sang phải tới ô trắng, rồi một trạng thái "nhớ" đi ngược sang trái. Trạng thái này chính là phần "nhớ" của phép cộng/trừ.
:::

::: Gợi ý 3: thiết kế $M_5$
Cần các trạng thái nhớ ký tự đã xóa ở đầu (hai trạng thái, một cho 0, một cho 1), một trạng thái "chạy sang cuối" tương ứng, và một trạng thái "quay về". Trường hợp độ dài lẻ: khi chạy sang cuối chỉ còn ô trắng nghĩa là ký tự giữa đã bị xóa, kết quả "yes".
:::

::: Gợi ý 4: thiết kế $M_4$
Dùng sáu trạng thái: quét, "đã xóa 0 và đang chờ ký tự để dịch", hai trạng thái nhớ ký tự (0 hoặc 1) khi dịch, một trạng thái đệm, một trạng thái quay về $\triangleright$.
:::

## Lời giải tham khảo

Quy ước chung cho các bảng sau: ghi `_` cho $\sqcup$, `>` cho $\triangleright$, hướng `R` ($\rightarrow$), `L` ($\leftarrow$), `S` ($-$). Mọi trạng thái đều có $\delta(\cdot, \triangleright) = (\cdot, \triangleright, R)$ nếu có thể gặp $\triangleright$. Ô nào không liệt kê là tổ hợp không bao giờ xảy ra.

::: Lời giải M6 (chèn ô trắng đầu xâu)
Bảng $\delta$ lấy từ slide của [Máy Turing](#/courses/mat3504/lessons/mat3504-turing-machine): trạng thái $s$ chạy tới cuối; $q$ xóa ký tự cuối và nhớ nó bằng $q_0$ hay $q_1$; trạng thái nhớ ghi lại ký tự vào ô kế bên phải rồi $s$ quay lại. Đầu vào 010 cho $\sqcup 010$ sau 15 bước, tổng quát $4n + 3$ bước.
:::

::: Lời giải M3 (đảo bit)
| Trạng thái | Ký hiệu | $\delta$ |
|---|---|---|
| s | `>` | (s, `>`, R) |
| s | 0 | (s, 1, R) |
| s | 1 | (s, 0, R) |
| s | `_` | (h, `_`, S) |

Với 01001: ra 10110 sau $n + 2 = 7$ bước.
:::

::: Lời giải M1 (cộng 1)
| Trạng thái | Ký hiệu | $\delta$ |
|---|---|---|
| s | `>`, 0, 1 | (s, giữ nguyên, R) |
| s | `_` | (c, `_`, L) |
| c | 1 | (c, 0, L) |
| c | 0 | (h, 1, S) |
| c | `>` | (o, `>`, R) |
| o | 0 | (m, 1, R) |
| m | 0 | (m, 0, R) |
| m | `_` | (h, 0, S) |

Trạng thái $c$ là phép cộng có nhớ. Nếu toàn 1, $c$ biến mọi bit thành 0 rồi tới $\triangleright$; $o$ ghi 1 vào chữ số đầu, $m$ chạy sang phải thêm một 0 vào cuối. Ví dụ 111 $\Rightarrow$ 1000 (13 bước); 1011 $\Rightarrow$ 1100 (9 bước). Giả thiết đầu vào không rỗng.
:::

::: Lời giải M2 (trừ 1)
| Trạng thái | Ký hiệu | $\delta$ |
|---|---|---|
| s | `>`, 0, 1 | (s, giữ nguyên, R) |
| s | `_` | (b, `_`, L) |
| b | 0 | (b, 1, L) |
| b | 1 | (h, 0, S) |
| b | `>` | (no, `>`, R) |

Trạng thái $b$ là phép mượn. 1000 $\Rightarrow$ 0111 (giữ nguyên độ dài, cho phép số 0 đứng đầu); 1011 $\Rightarrow$ 1010. Đầu vào toàn 0 (giá trị 0) không trừ được nên dừng ở "no".
:::

::: Lời giải M5 (kiểm tra đối xứng)
| Trạng thái | Ký hiệu | $\delta$ |
|---|---|---|
| s | `>` | (s, `>`, R) |
| s | 0 | (a0, `_`, R) |
| s | 1 | (a1, `_`, R) |
| s | `_` | (yes, `_`, S) |
| a0 | 0 hoặc 1 | (a0, giữ nguyên, R) |
| a0 | `_` | (c0, `_`, L) |
| a1 | 0 hoặc 1 | (a1, giữ nguyên, R) |
| a1 | `_` | (c1, `_`, L) |
| c0 | 0 | (r, `_`, L) |
| c0 | 1 | (no, 1, S) |
| c0 | `_` | (yes, `_`, S) |
| c1 | 1 | (r, `_`, L) |
| c1 | 0 | (no, 0, S) |
| c1 | `_` | (yes, `_`, S) |
| r | 0 hoặc 1 | (r, giữ nguyên, L) |
| r | `_` | (s, `_`, R) |

Hoạt động: $s$ xóa ký tự đầu còn lại và nhớ nó (a0/a1). Chạy tới cuối, $c_x$ so ký tự cuối với $x$. Nếu bằng thì xóa và $r$ quay về ô trắng bên trái, $s$ lại bắt đầu. Hết ký tự thì "yes". Với độ dài lẻ, ký tự giữa bị xóa ở phía trái và $c_x$ gặp ô trắng, cũng "yes". Máy có $O(n^2)$ bước (mỗi cặp ký tự quét qua đoạn còn lại).
:::

::: Lời giải M4 (xóa số 0 và dồn dãy)
| Trạng thái | Ký hiệu | $\delta$ |
|---|---|---|
| s | `>`, 1 | (s, giữ nguyên, R) |
| s | 0 | (t, `_`, R) |
| s | `_` | (h, `_`, S) |
| t | 0 | (w0, `_`, L) |
| t | 1 | (w1, `_`, L) |
| t | `_` | (b, `_`, L) |
| w0 | `_` | (u, 0, R) |
| w1 | `_` | (u, 1, R) |
| u | `_` | (t, `_`, R) |
| b | 0, 1, `_` | (b, giữ nguyên, L) |
| b | `>` | (s, `>`, R) |

Hoạt động: $s$ gặp 0 thì xóa, $t$ đứng ở ô kế tiếp; nếu đó là bit $x$ thì xóa nó, lùi lại ô trống vừa tạo ($w_x$) và ghi $x$ vào đó, $u$ nhảy qua ô vừa trống để $t$ xử lý bit sau. Khi $t$ gặp ô trắng cuối, toàn bộ phần sau đã dịch trái một ô; $b$ lùi về $\triangleright$ và $s$ quét lại từ đầu. Ví dụ 01001 $\Rightarrow$ 11 (48 bước). Số bước là $O(n^2)$ trong trường hợp xấu nhất vì mỗi số 0 gây một lần dịch $O(n)$ và một lần quay về đầu.
:::

### Chương trình mô phỏng (Java)

Một mô phỏng chung cho mọi máy; bảng $\delta$ nạp từ các dòng văn bản "trạng_thái ký_hiệu trạng_thái_mới ký_hiệu_ghi hướng":

```java
import java.util.HashMap;
import java.util.Map;

public class Turing {
    private final Map<String, String[]> delta = new HashMap<>();
    private final String start;

    public Turing(String start, String... rules) {
        this.start = start;
        for (String rule : rules) {
            String[] t = rule.trim().split("\\s+");
            delta.put(t[0] + "," + t[1], new String[] {t[2], t[3], t[4]});
        }
    }

    public String run(String input) {
        StringBuilder tape = new StringBuilder(">" + input);
        String state = start;
        int pos = 0;
        long steps = 0;
        while (!state.equals("h") && !state.equals("yes") && !state.equals("no")) {
            if (pos == tape.length()) tape.append('_');
            char c = tape.charAt(pos);
            String[] a = delta.get(state + "," + c);
            if (a == null) throw new IllegalStateException("thiếu quy tắc: " + state + "," + c);
            state = a[0];
            tape.setCharAt(pos, a[1].charAt(0));
            pos += a[2].equals("R") ? 1 : a[2].equals("L") ? -1 : 0;
            steps++;
        }
        String out = tape.toString().replaceAll("_+$", "");
        return (state.equals("h") ? out : state) + " (" + steps + " bước)";
    }

    public static void main(String[] args) {
        Turing m3 = new Turing("s", "s > s > R", "s 0 s 1 R", "s 1 s 0 R", "s _ h _ S");
        System.out.println(m3.run("01001"));     // >10110 (7 bước)
    }
}
```

Với `M1`, truyền các dòng luật ở bảng M1 phía trên, ví dụ `"s > s > R", "s 0 s 0 R", "s 1 s 1 R", "s _ c _ L", "c 1 c 0 L", "c 0 h 1 S", "c > o > R", "o 0 m 1 R", "m 0 m 0 R", "m _ h 0 S"`.

## Kiểm tra lời giải

Các kết quả sau lấy từ chạy chương trình mô phỏng ở trên (đầu ra là nội dung băng sau `>` đến hết ký tự không trắng):

| Máy | Đầu vào | Kết quả mong đợi | Số bước |
|---|---|---|---|
| $M_6$ | `010` | `_010` | 15 |
| $M_6$ | rỗng | rỗng | 3 |
| $M_3$ | `01001` | `10110` | 7 |
| $M_1$ | `0` | `1` | 4 |
| $M_1$ | `1011` | `1100` | 9 |
| $M_1$ | `111` | `1000` | 13 |
| $M_2$ | `1000` | `0111` | 10 |
| $M_2$ | `1011` | `1010` | 7 |
| $M_2$ | `000` | "no" | 9 |
| $M_4$ | `01001` | `11` | 48 |
| $M_4$ | `000` | rỗng | 26 |
| $M_4$ | `111` | `111` | 5 |
| $M_5$ | `010010` | "yes" | 29 |
| $M_5$ | `01100` | "no" | 17 |
| $M_5$ | rỗng, `0`, `101`, `11` | "yes" | 2, 4, 11, 7 |
| $M_5$ | `10` | "no" | 5 |

Hãy tự thêm các trường hợp biên: đầu vào rỗng, một ký tự, toàn 0, toàn 1, độ dài chẵn và lẻ. Khi thay đổi bảng $\delta$, so sánh cả đầu ra lẫn số bước để phát hiện máy bị lặp thừa.

## Sau bài này

- Học [Phân lớp bài toán: P, NP, NP-khó, NP-đầy đủ](#/courses/mat3504/lessons/mat3504-complexity-classes) để thấy vì sao máy Turing là nền để định nghĩa thời gian đa thức và hai lớp P, NP.
- Quay lại [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) và [Quy tắc tổng và quy tắc nhân](#/courses/mat3504/lessons/mat3504-sum-product-rules) để ước lượng $T(n)$ cho các máy bạn vừa thiết kế (ví dụ $M_3$ là $O(n)$, $M_4$ và $M_5$ là $O(n^2)$).
