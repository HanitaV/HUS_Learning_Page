# Hằng số cân bằng Kc, Kp và thương số Q

## Giải thích lý thuyết

Trước khi tính thành phần một hỗn hợp, cần biết biểu thức nào mô tả cân bằng và dữ kiện đang cho có phải ở cân bằng hay chưa. Bài này nối áp suất riêng phần ở bài trước với cách viết K, đổi giữa hai dạng K và dùng Q để chọn chiều diễn biến.

### Hằng số cân bằng mô tả một trạng thái

**Giả thiết:** phương trình $aA+bB\rightleftharpoons cC+dD$ đã cân bằng, hệ đạt cân bằng ở nhiệt độ xác định; khí lý tưởng hoặc dung dịch loãng.

$$K_c=\frac{[C]^c[D]^d}{[A]^a[B]^b}.$$

Nồng độ trong ngoặc vuông tính theo mol/L **ở cân bằng**. $K_p$ viết cùng cấu trúc nhưng dùng áp suất riêng phần của các khí, theo atm trong các đề CHE1080. Số mũ chính là hệ số của phương trình đã cho.

Pha rắn và chất lỏng **nguyên chất** có hoạt độ bằng 1 nên không viết vào K. Chất tan trong hỗn hợp lỏng vẫn có thể xuất hiện trong biểu thức theo mô hình dung dịch của đề. Ví dụ phản ứng este hóa không được bỏ mọi chất chỉ vì chúng ở trạng thái lỏng.

Các bài tập trong chương dùng giá trị số Kc/Kp theo quy ước mol/L và atm. Hằng số cân bằng nhiệt động viết bằng hoạt độ đã chuẩn hóa là đại lượng không thứ nguyên; khi liên hệ với năng lượng tự do Gibbs, cần giữ cùng quy ước trạng thái chuẩn.

### Đổi Kp và Kc

$$K_p=K_c(RT)^{\Delta n},\quad\Delta n=\sum\nu_{khí,sản\ phẩm}-\sum\nu_{khí,chất\ đầu}.$$

Chỉ đếm chất khí; R=0,082 nếu P theo atm, C theo mol/L. T theo K. Nếu Δn=0, Kp=Kc. Đảo phương trình thì lấy nghịch đảo K; nhân mọi hệ số với m thì K mới bằng $K^m$. Do đó chia đôi hệ số làm K mới bằng căn bậc hai của K cũ.

![Đếm hệ số khí và bỏ pha rắn để xác định Δn, với hai giá trị R ứng với hai hệ đơn vị](images/chapter-4/kp-kc-delta-n.svg)

### Thương số Q cho biết chiều diễn biến

Q có cùng biểu thức với K nhưng dùng thành phần **đang có**, chưa nhất thiết cân bằng. Ở cùng nhiệt độ:

| So sánh | Diễn biến để tiến về cân bằng |
|---|---|
| Q<K | Thuận, tăng sản phẩm |
| Q>K | Nghịch, giảm sản phẩm |
| Q=K | Cân bằng |

![Trục logarit so sánh Q với K; các mũi tên đưa Q về K](images/chapter-4/q-vs-k.svg)

Ở nhiệt độ cố định, K không đổi khi thêm chất hay nén bình; Q thay đổi trước, rồi hệ diễn biến để Q trở về K. Mối liên hệ với năng lượng đã có ở [Gibbs và cân bằng](#/courses/general-chemistry/lessons/gc-gibbs-equilibrium).

Với phản ứng oxi hóa–khử, có thể tìm K từ suất điện động chuẩn. Xem [Phương trình Nernst; liên hệ E°, ΔG°, K](#/courses/general-chemistry/lessons/gc-ec-nernst).

### Công thức trọng tâm

> **Công thức — Biểu thức hằng số cân bằng**
>
> $$K_c=\frac{[C]^c[D]^d}{[A]^a[B]^b}$$
>
> Trong đó: $K_c$: Hằng số theo nồng độ; $[A]$: Nồng độ cân bằng của A (mol/L); $a,b,c,d$: Hệ số phương trình aA+bB ⇌ cC+dD.
>
> *Điều kiện:* Phản ứng đã cân bằng; nhiệt độ xác định. Dung dịch loãng; loại pha rắn và lỏng nguyên chất.

> **Công thức — Liên hệ Kp và Kc**
>
> $$K_p=K_c(RT)^{\Delta n}$$
>
> Trong đó: $K_p$: Hằng số theo áp suất riêng phần; $K_c$: Hằng số theo nồng độ; $R$: Hằng số khí (0,082 L·atm/(mol·K)); $T$: Nhiệt độ tuyệt đối (K); $\Delta n$: Tổng hệ số khí sản phẩm trừ khí chất đầu.
>
> *Điều kiện:* Khí lý tưởng; áp suất atm, nồng độ mol/L. Hai K thuộc cùng phương trình và nhiệt độ.

## Ví dụ

**Biểu thức của ĐT28 C5.** Với $\mathrm{N_2+3H_2\rightleftharpoons2NH_3}$:

$$K_c=\frac{[NH_3]^2}{[N_2][H_2]^3},\qquad\Delta n=2-(1+3)=-2.$$

Biết nồng độ cân bằng N₂=0,40; H₂=1,20; NH₃=0,20 M:

$$K_c=\frac{0{,}20^2}{0{,}40\times1{,}20^3}=0{,}05787.$$

**So Q với K, ĐT26 C5.** Từ bảng cân bằng của đề, Kc≈0,009710. Hỗn hợp mới trong cùng bình 2 L có 1 mol N₂, 6 mol H₂, 3 mol NH₃. Tính $Q=1{,}5^2/(0{,}5\times3^3)=0{,}1667>K_c$. Hệ diễn biến nghịch. K nhỏ không có nghĩa mọi hỗn hợp đều diễn biến nghịch: phải so Q của hỗn hợp cụ thể với K.

Áp dụng cách viết biểu thức vào một phản ứng khác: trước khi mở bài, hãy ghi số mũ theo hệ số, đếm riêng các chất khí và chọn đơn vị cho phép đổi Kp/Kc. Đề dưới đây đã cho áp suất riêng phần ở cân bằng nên chưa cần lập bảng ba dòng.

## Tổng kết

- Viết phương trình đúng hệ số trước; lấy sản phẩm trên chất đầu, số mũ theo hệ số.
- Không đưa pha rắn hoặc lỏng nguyên chất vào K. Đổi Kp/Kc bằng Δn chỉ của khí.
- Q dùng thành phần đang có; K dùng thành phần cân bằng. So hai giá trị ở cùng nhiệt độ để chọn chiều.
