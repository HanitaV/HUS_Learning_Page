# Hệ số tương quan mẫu và ý nghĩa

Hệ số tương quan đo mức độ liên hệ tuyến tính giữa hai biến định lượng. Bài học này trình bày công thức tính hệ số tương quan mẫu $r$, ý nghĩa hình học và điều kiện suy luận cho $\rho$.

## 1. Tương quan tổng thể và tương quan mẫu

Với $0 < \operatorname{Var}(X), \operatorname{Var}(Y) < \infty$, hệ số tương quan tổng thể là:

$$\rho = \frac{\operatorname{Cov}(X, Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}} \in [-1, 1].$$

Với $n$ cặp quan sát $(x_i, y_i)$ (hoặc cặp $(x_j, y_j)$ lặp $f_j$ lần, $n = \sum f_j$), đặt:

$$S_{xx} = \sum f_j(x_j - \bar{x})^2 = \sum f_j x_j^2 - n\bar{x}^2,$$

$$S_{yy} = \sum f_j(y_j - \bar{y})^2 = \sum f_j y_j^2 - n\bar{y}^2,$$

$$S_{xy} = \sum f_j(x_j - \bar{x})(y_j - \bar{y}) = \sum f_j x_j y_j - n\bar{x}\bar{y}.$$

Khi $S_{xx} > 0$ và $S_{yy} > 0$, hệ số tương quan mẫu là:

$$r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}, \qquad -1 \le r \le 1.$$

## 2. Ý nghĩa và các giới hạn diễn giải

- $r$ gần $1$: các điểm nằm gần một đường thẳng đi lên; $r$ gần $-1$: gần đường thẳng đi xuống.
- $r$ gần $0$ chỉ nói **liên hệ tuyến tính** yếu; hai biến vẫn có thể có liên hệ phi tuyến chặt chẽ (ví dụ $Y = X^2$ đối xứng quanh 0).
- Đổi đơn vị dương ($X' = cX + d, c > 0$) không làm thay đổi $r$.
- **Tương quan không đồng nghĩa với nhân quả.**

## 3. Kiểm định $\rho = 0$ trong mô hình chuẩn hai chiều

Nếu các cặp là mẫu i.i.d. từ phân phối **chuẩn hai chiều** không suy biến, $n > 2$ và $|r| < 1$, dưới $H_0: \rho = 0$:

$$T_r = r\sqrt{\frac{n - 2}{1 - r^2}} \sim t_{n-2}.$$

Trong phân phối chuẩn hai chiều, $\rho = 0$ tương đương với $X$ và $Y$ độc lập.

## 4. Ví dụ minh họa (ĐT34, Câu 4c)

Từ bảng tần số 40 cửa hàng về chi phí quảng cáo $X$ và doanh thu $Y$: $n = 40$, $\bar{x} = 6{,}625$, $\bar{y} = 3{,}9225$, $S_{xx} = 151{,}375$, $S_{yy} = 56{,}04975$, $S_{xy} = 92{,}0375$.

$$r = \frac{92{,}0375}{\sqrt{151{,}375 \cdot 56{,}04975}} \approx 0{,}9992.$$

Giá trị $r$ rất gần $1$ cho thấy mối liên hệ tuyến tính dương rất mạnh trong dữ liệu khảo sát.

## Lỗi hay gặp

- Quên nhân tần số $f_j$ vào $n, S_{xx}, S_{yy}, S_{xy}$, coi bảng 8 cột chỉ có 8 quan sát.
- Kết luận $X$ gây ra $Y$ chỉ từ việc $|r|$ lớn.
- Kết luận $X, Y$ độc lập khi $r \approx 0$ mà không có giả thiết chuẩn hai chiều.
