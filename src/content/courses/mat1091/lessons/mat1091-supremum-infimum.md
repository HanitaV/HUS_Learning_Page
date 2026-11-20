# Cận trên đúng, cận dưới đúng

Trích định nghĩa và một ví dụ trong Chương 1. Giới hạn và liên tục. Đây là một phần ngắn của giáo trình; bản PDF cung cấp nội dung đầy đủ.

## Định nghĩa

Tập $A\subset\mathbb R$ bị chặn trên nếu có $M$ sao cho $x\le M$ với mọi $x\in A$. Số $M$ như vậy là một cận trên.

Cận trên đúng $\sup A$ là cận trên nhỏ nhất:

1. $\sup A$ là một cận trên.
2. Mọi cận trên $M$ đều thỏa $M\ge\sup A$.

Điều kiện thứ hai tương đương: với mọi $\varepsilon>0$, có $x\in A$ sao cho $x>\sup A-\varepsilon$.

Cận dưới đúng $\inf A$ được định nghĩa đối xứng: đó là cận dưới lớn nhất. Cận trên đúng không bắt buộc là một phần tử của tập.

## Ví dụ

Tìm $\sup A$, $\inf A$ với $A=\left\{\frac{n}{n+1}:n\in\mathbb N^*\right\}$.

### Hướng giải

Ta có $\frac{n}{n+1}=1-\frac{1}{n+1}$ tăng theo $n$, nên giá trị nhỏ nhất đạt tại $n=1$.

Mọi phần tử đều nhỏ hơn $1$, nên $1$ là cận trên. Với mọi $\varepsilon>0$, chọn số nguyên dương $n>\frac{1}{\varepsilon}$. Khi đó

$$\frac{n}{n+1}=1-\frac{1}{n+1}>1-\varepsilon.$$

Như vậy $1$ thỏa cả hai điều kiện của cận trên đúng.

### Đáp số

$$\inf A=\min A=\frac12,\qquad \sup A=1\notin A.$$
