# Mol, khí lý tưởng và áp suất riêng phần

## Giải thích lý thuyết

Bài cân bằng khí thường cho khối lượng hoặc áp suất tổng, còn biểu thức cân bằng lại cần lượng của từng chất. Bài này chuẩn bị bước chuyển dữ kiện đó: đổi sang mol, chọn đúng đơn vị khí và tách áp suất riêng phần. Sau đó bạn sẽ dùng các đại lượng này để lập bảng cân bằng.

### Mol là cách đếm hạt

Một mol chứa khoảng $6{,}022\times10^{23}$ hạt. Khối lượng mol $M$ là khối lượng của một mol chất, đơn vị g/mol. Nếu có khối lượng $m$ gam, số mol là $n=m/M$. Phải tính M cho đúng phân tử: $M(\mathrm{N_2O_4})=2\times14+4\times16=92$ g/mol.

### Giả thiết và đơn vị của khí lý tưởng

Với khí coi là lý tưởng, $PV=nRT$. Khi dùng P theo atm và V theo L, chọn $R=0{,}082$ L·atm/(mol·K). T luôn theo kelvin; trong các bài tập thuộc khóa học này, dùng quy ước $T=t+273$. Không dùng giá trị $R=8{,}314$ với atm và L: giá trị này phù hợp khi tính năng lượng theo J hoặc dùng Pa và m³.

Nếu biết m nhưng chưa biết M của một hỗn hợp khí, thay $n=m/M_{tb}$ vào phương trình khí:

$$M_{tb}=\frac{mRT}{PV}.$$

Đây là cầu nối giữa khối lượng riêng và mức phân li: số mol tăng khi một phân tử tách thành nhiều phân tử, còn khối lượng bình kín được bảo toàn.

### Áp suất riêng phần theo Dalton

**Điều kiện:** hỗn hợp khí lý tưởng, các khí cùng chiếm thể tích V ở nhiệt độ T. Áp suất riêng phần $P_i$ là áp suất khí i gây ra nếu một mình nó chiếm cả bình đó.

$$P_i=\frac{n_iRT}{V}=\frac{n_i}{n_{tổng}}P=x_iP,\qquad P=\sum_iP_i.$$

![Khí N₂ và H₂ gây áp suất riêng phần như khi mỗi khí ở một mình trong bình; tổng 0,5 và 1,5 atm bằng 2 atm](images/chapter-4/dalton-partial-pressure.svg)

Ở cùng V, T, mỗi $P_i$ tỉ lệ với $n_i$. Vì vậy bảng cân bằng có thể lập thẳng theo atm. Nếu thay đổi V hoặc T giữa hai trạng thái, không thể tự động lấy tỉ số áp suất bằng tỉ số số mol.

### Công thức trọng tâm

> **Công thức — Khí lý tưởng và số mol**
>
> $$PV=nRT,\qquad n=\frac{m}{M}$$
>
> Trong đó: $P$: Áp suất (atm); $V$: Thể tích bình (L); $n$: Số mol (mol); $R$: Hằng số khí (0,082 L·atm/(mol·K)); $T$: Nhiệt độ tuyệt đối (K); $m$: Khối lượng (g); $M$: Khối lượng mol (g/mol).
>
> *Điều kiện:* Khí coi là lý tưởng. Các đơn vị phải phù hợp với R.

> **Công thức — Áp suất riêng phần và Dalton**
>
> $$P_i=\frac{n_i}{\sum_jn_j}P,\qquad P=\sum_iP_i$$
>
> Trong đó: $P_i$: Áp suất riêng phần khí i (atm); $n_i$: Số mol khí i (mol); $P$: Áp suất tổng (atm).
>
> *Điều kiện:* Hỗn hợp khí lý tưởng ở cùng V,T.

## Ví dụ

**Ví dụ 1.** Có 0,2 mol N₂ và 0,6 mol H₂, P tổng bằng 2 atm.

1. Tổng số mol: $0{,}2+0{,}6=0{,}8$ mol.
2. Phần mol N₂: $x_{N_2}=0{,}2/0{,}8=0{,}25$; phần mol H₂: 0,75.
3. $P(N_2)=0{,}25\times2=0{,}5$ atm; $P(H_2)=0{,}75\times2=1{,}5$ atm.
4. Kiểm tra: $0{,}5+1{,}5=2$ atm, đúng áp suất tổng.

**Ví dụ 2 (số liệu ĐT04 C4).** Có 18,4 g N₂O₄ trong bình 5,904 L ở 27 °C. Nếu chưa phân li: $n=18{,}4/92=0{,}2$ mol, $T=300$ K; $P_0=0{,}2\times0{,}082\times300/5{,}904=0{,}8333$ atm. Áp suất này là mốc ban đầu giả định, khác áp suất sau khi N₂O₄ phân li.

Bài từng bước dưới đây dùng lại dữ kiện N₂O₄ vừa xét nhưng mở rộng sang cân bằng phân li. Trước hết hãy tự làm phần đổi mol và xác định áp suất ban đầu; dùng các bước gợi ý để nối phần chuẩn bị này với thành phần lúc cân bằng.

## Tổng kết

- Từ gam sang mol: chia cho M; từ P, V, T sang mol: dùng PV=nRT.
- Dùng L, atm thì R=0,082; đổi °C sang K trước khi tính.
- Tính phần mol rồi nhân P tổng để có áp suất riêng phần. Tổng các áp suất riêng phần phải bằng P tổng.
