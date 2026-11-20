# Một tích phân chuẩn bị cho D07

Trích một ví dụ trong phần Kiến thức chuẩn bị. Đây là một phần ngắn của giáo trình; bản PDF cung cấp nội dung đầy đủ.

## Bài toán

Tìm $c$ để $f(x)=cx^2(1-x)$ trên $[0,1]$, bằng 0 ngoài khoảng, là một mật độ.

## Phân tích

Trên miền đã cho, $x^2(1-x)\ge0$, nên cần $c\ge0$. Điều kiện còn lại là tổng diện tích bằng $1$.

## Lời giải

Vì hàm bằng $0$ ngoài $[0,1]$, ta chỉ tích phân trên đoạn này:

$$1=c\int_0^1(x^2-x^3)\,dx
=c\left[\frac{x^3}{3}-\frac{x^4}{4}\right]_0^1
=\frac{c}{12}.$$

Suy ra $c=12$.

## Kiểm tra

Thay $c=12$, mật độ không âm và tích phân bằng $12(1/3-1/4)=1$. Tích phân đa thức ra ngoài $[0,1]$ sẽ bỏ mất điều kiện miền của đề.
