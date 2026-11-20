# Nhân ma trận Strassen

## Vì sao cần

Nhân hai ma trận vuông cấp $n$ bằng ba vòng lặp lồng nhau tốn $\Theta(n^3)$. Kỹ thuật [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer) chia mỗi ma trận thành bốn khối $n/2\times n/2$ nghe có vẻ hứa hẹn, nhưng cách chia thẳng vẫn cần 8 phép nhân khối con nên vẫn $\Theta(n^3)$. Strassen tìm ra cách dùng chỉ 7 phép nhân khối con, đổi lại thêm vài phép cộng trừ, và nhờ đó hạ bậc xuống $O(n^{\log_2 7})$. Mô phỏng bên dưới cho thấy bảy tích trung gian được tính rồi ghép lại.

## Phát biểu

Bài toán: cho hai ma trận $Y,Z$ cấp $n\times n$ ($n$ là lũy thừa của 2), tính $X=Y\cdot Z$. Chia mỗi ma trận thành bốn khối cấp $n/2$:

$$Y=\begin{pmatrix}Y_{11}&Y_{12}\\Y_{21}&Y_{22}\end{pmatrix},\quad Z=\begin{pmatrix}Z_{11}&Z_{12}\\Z_{21}&Z_{22}\end{pmatrix},\quad X=\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix}.$$

**Chia khối thông thường** tính $X_{11}=Y_{11}Z_{11}+Y_{12}Z_{21}$ và tương tự cho ba khối còn lại: 8 phép nhân khối cấp $n/2$ và 4 phép cộng, nên

$$T(n)=8T(n/2)+n^2.$$

**Strassen** đặt bảy tích:

$$\begin{aligned}
M_1&=(Y_{11}+Y_{22})(Z_{11}+Z_{22}) & M_2&=(Y_{21}+Y_{22})Z_{11}\\
M_3&=Y_{11}(Z_{12}-Z_{22}) & M_4&=Y_{22}(Z_{21}-Z_{11})\\
M_5&=(Y_{11}+Y_{12})Z_{22} & M_6&=(Y_{21}-Y_{11})(Z_{11}+Z_{12})\\
M_7&=(Y_{12}-Y_{22})(Z_{21}+Z_{22})
\end{aligned}$$

rồi ghép:

$$X_{11}=M_1+M_4-M_5+M_7,\quad X_{12}=M_3+M_5,\quad X_{21}=M_2+M_4,\quad X_{22}=M_1-M_2+M_3+M_6.$$

Thời gian: $T(n)=7T(n/2)+n^2$ (các phép cộng trừ khối tốn $\Theta(n^2)$).

## Giải thích / chứng minh

Không có phép màu: mỗi $X_{ij}$ khai triển ra khớp công thức thường. Kiểm tra $X_{12}$:

$$M_3+M_5=Y_{11}Z_{12}-Y_{11}Z_{22}+Y_{11}Z_{22}+Y_{12}Z_{22}=Y_{11}Z_{12}+Y_{12}Z_{22}.$$

Đúng bằng $X_{12}$ của cách thông thường. Tương tự $X_{21}=M_2+M_4=Y_{21}Z_{11}+Y_{22}Z_{11}+Y_{22}Z_{21}-Y_{22}Z_{11}=Y_{21}Z_{11}+Y_{22}Z_{21}$. Hai khối còn lại kiểm tra cùng cách. Cần nhớ phép nhân ma trận không giao hoán, nên thứ tự nhân trong mỗi $M_i$ phải giữ đúng.

Áp [Định lý chính (Master theorem)](#/courses/mat3504/lessons/mat3504-master-theorem) cho $T(n)=7T(n/2)+n^2$: $a=7$, $b=2$, $d=2$, $b^d=4<7=a$ nên

$$T(n)=O(n^{\log_2 7})\approx O(n^{2{,}807}).$$

## Ví dụ tính

Với $Y=\begin{pmatrix}1&2\\3&4\end{pmatrix}$, $Z=\begin{pmatrix}5&6\\7&8\end{pmatrix}$ (mỗi khối là một số, $n=2$):

| Tích | Giá trị |
|---|---|
| $M_1=(1+4)(5+8)$ | 65 |
| $M_2=(3+4)\cdot5$ | 35 |
| $M_3=1\cdot(6-8)$ | $-2$ |
| $M_4=4\cdot(7-5)$ | 8 |
| $M_5=(1+2)\cdot8$ | 24 |
| $M_6=(3-1)(5+6)$ | 22 |
| $M_7=(2-4)(7+8)$ | $-30$ |

$X_{11}=65+8-24-30=19$, $X_{12}=-2+24=22$, $X_{21}=35+8=43$, $X_{22}=65-35-2+22=50$. Kết quả $\begin{pmatrix}19&22\\43&50\end{pmatrix}$, trùng với nhân trực tiếp (ví dụ $1\cdot5+2\cdot7=19$). Ở cấp $n=2$ ta dùng 7 phép nhân số thay vì 8.

## Áp dụng ở đâu

Đây là ví dụ điển hình cho thấy [Chia để trị](#/courses/mat3504/lessons/mat3504-divide-and-conquer) có thể đổi bậc tiệm cận bằng cách giảm số bài toán con $a$. Cùng khung công thức truy hồi với [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort) nhưng kết quả khác vì $a>b^d$. Trong thực tế Strassen chỉ có lợi khi $n$ đủ lớn (hằng số cộng trừ lớn), nên cài đặt thường dừng đệ quy ở cỡ vài chục và dùng ba vòng lặp. Bài tập chia để trị của lớp yêu cầu cài đặt cả hai cách và so sánh thời gian chạy.

Cài đặt tối giản cho $n$ là lũy thừa của 2 (sinh viên nên tự viết `add`, `sub`, `split`, `join`):

```java
static int[][] strassen(int[][] y, int[][] z) {
    int n = y.length;
    if (n == 1) {
        return new int[][]{{y[0][0] * z[0][0]}};
    }
    int h = n / 2;
    int[][] y11 = block(y, 0, 0, h), y12 = block(y, 0, h, h);
    int[][] y21 = block(y, h, 0, h), y22 = block(y, h, h, h);
    int[][] z11 = block(z, 0, 0, h), z12 = block(z, 0, h, h);
    int[][] z21 = block(z, h, 0, h), z22 = block(z, h, h, h);
    int[][] m1 = strassen(add(y11, y22), add(z11, z22));
    int[][] m2 = strassen(add(y21, y22), z11);
    int[][] m3 = strassen(y11, sub(z12, z22));
    int[][] m4 = strassen(y22, sub(z21, z11));
    int[][] m5 = strassen(add(y11, y12), z22);
    int[][] m6 = strassen(sub(y21, y11), add(z11, z12));
    int[][] m7 = strassen(sub(y12, y22), add(z21, z22));
    int[][] x11 = add(sub(add(m1, m4), m5), m7);
    int[][] x12 = add(m3, m5);
    int[][] x21 = add(m2, m4);
    int[][] x22 = add(sub(add(m1, m3), m2), m6);
    return join(x11, x12, x21, x22);
}
```

Trong đó `block(m, r, c, size)` copy khối con, `add` và `sub` cộng trừ từng phần tử, `join` ghép bốn khối thành ma trận cấp $2h$.

## Lỗi thường gặp

- Đổi thứ tự nhân trong $M_4$ hoặc $M_6$ (ví dụ viết $(Z_{21}-Z_{11})Y_{22}$), làm sai kết quả vì ma trận không giao hoán.
- Nhầm dấu khi ghép, nhất là $X_{11}=M_1+M_4-M_5+M_7$ và $X_{22}=M_1-M_2+M_3+M_6$.
- Áp dụng cho $n$ không phải lũy thừa của 2 mà không đệm thêm hàng và cột 0.
- Tin rằng Strassen luôn nhanh hơn: với $n$ nhỏ, chi phí 18 phép cộng trừ khối và việc cấp phát mảng phụ làm nó chậm hơn ba vòng lặp.
- Quên rằng các phép cộng trừ khối vẫn tốn $\Theta(n^2)$ và là phần $n^2$ trong công thức truy hồi.

## Tự kiểm tra

**Câu 1.** Vì sao chia khối thông thường không nhanh hơn ba vòng lặp?

> **Đáp án**
> $T(n)=8T(n/2)+n^2$ có $a=8>b^d=4$ nên $T(n)=O(n^{\log_2 8})=O(n^3)$, bằng cách ngây thơ.

**Câu 2.** Strassen giảm gì và đổi lại điều gì?

> **Đáp án**
> Giảm số phép nhân khối con từ 8 xuống 7, đổi lại tăng số phép cộng trừ khối (18 phép), vẫn chỉ $\Theta(n^2)$ nên không làm đổi bậc trội.

**Câu 3.** Cho $T(n)=7T(n/2)+n^2$, vì sao đáp án không phải $O(n^2)$?

> **Đáp án**
> Vì $a=7>b^d=4$: chi phí bị chi phối bởi số lượng bài toán con ở tầng đáy ($7^{\log_2 n}=n^{\log_2 7}$), lớn hơn $n^2$.
