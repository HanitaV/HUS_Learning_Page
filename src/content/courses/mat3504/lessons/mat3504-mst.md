# Cây khung nhỏ nhất (MST)

## Vì sao cần

Cần nối 5 tòa nhà bằng cáp mạng sao cho mọi tòa đều liên lạc được với nhau và tổng chiều dài cáp là ít nhất. Đây là bài toán cây khung nhỏ nhất (Minimum Spanning Tree, MST) trên đồ thị có trọng số, thuộc nhóm bài giải bằng [phương pháp tham lam](#/courses/mat3504/lessons/mat3504-greedy-method). Bài này đặt bài toán và nêu tính chất khiến cách chọn tham lam đúng; [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) và [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal) là hai thuật toán cụ thể. Mô phỏng bên dưới cho bạn thử chọn cạnh và so tổng trọng số.

## Định nghĩa

Cho đồ thị vô hướng liên thông $G=(V,E)$ (xem [Đồ thị và Graph ADT](#/courses/mat3504/lessons/mat3504-graph-concepts)).

- **Cây khung (spanning tree)** của $G$ là đồ thị con liên thông, không chu trình, chứa **mọi** đỉnh của $G$. Đó là một [cây](#/courses/mat3504/lessons/mat3504-tree-concepts) nên có đúng $n-1$ cạnh.
- Nếu $G$ có trọng số $w(e)$, **cây khung nhỏ nhất** là cây khung $T$ có tổng $w(T)=\sum_{e\in T}w(e)$ nhỏ nhất.

Đồ thị không liên thông không có cây khung; khi đó ta tìm *rừng khung* (một cây khung cho mỗi thành phần liên thông). MST có thể không duy nhất khi có các cạnh trọng số bằng nhau; nếu mọi trọng số khác nhau thì MST duy nhất.

## Vì sao tham lam đúng

Hai thuật toán đều dựa vào cùng một mệnh đề.

**Tính chất cắt (cut property).** Chia $V$ thành hai tập khác rỗng $S$ và $V\setminus S$. Gọi $e$ là cạnh có trọng số nhỏ nhất trong các cạnh nối $S$ với $V\setminus S$. Khi đó tồn tại một MST chứa $e$.

Chứng minh (phản chứng, theo slide cho Prim): lấy một MST $T$ không chứa $e=(u,v)$. Thêm $e$ vào $T$ sẽ tạo đúng một chu trình. Chu trình này phải đi qua phép cắt ít nhất hai lần, nên có thêm một cạnh $e'\neq e$ cũng nối $S$ với $V\setminus S$. Vì $w(e)\le w(e')$, đổi $e'$ lấy $e$ cho cây khung $T'=T\cup\{e\}\setminus\{e'\}$ có $w(T')\le w(T)$. Vậy $T'$ cũng là MST và chứa $e$.

Hệ quả: miễn cạnh tham lam chọn là cạnh nhẹ nhất qua *một phép cắt nào đó* mà không cắt cạnh đã chọn, ta không bao giờ đóng cửa cơ hội tới MST. Prim dùng phép cắt "cây hiện tại | phần còn lại"; Kruskal dùng phép cắt quanh một thành phần của rừng. Cách lập luận này gần với chứng minh bằng quy nạp trong [Chứng minh tính đúng bằng quy nạp](#/courses/mat3504/lessons/mat3504-recursion-correctness).

## Ví dụ chạy tay

Đồ thị 5 đỉnh, 7 cạnh (trọng số trong ngoặc): $1\text{-}2\,(2)$, $1\text{-}3\,(3)$, $2\text{-}3\,(1)$, $2\text{-}4\,(4)$, $3\text{-}4\,(5)$, $3\text{-}5\,(7)$, $4\text{-}5\,(6)$. MST cần $5-1=4$ cạnh.

| Cây khung thử | Cạnh | Tổng |
|---|---|---|
| A | $1\text{-}2,\ 1\text{-}3,\ 3\text{-}4,\ 3\text{-}5$ | $2+3+5+7=17$ |
| B | $2\text{-}3,\ 1\text{-}2,\ 3\text{-}4,\ 4\text{-}5$ | $1+2+5+6=14$ |
| C (MST) | $2\text{-}3,\ 1\text{-}2,\ 2\text{-}4,\ 4\text{-}5$ | $1+2+4+6=13$ |

Cả ba đều là cây khung (liên thông, 4 cạnh, không chu trình), nhưng chỉ C nhỏ nhất. Kiểm tra tính chất cắt: với phép cắt $S=\{2,3\}$ so với $\{1,4,5\}$, các cạnh qua cắt là $1\text{-}2\,(2)$, $1\text{-}3\,(3)$, $2\text{-}4\,(4)$, $3\text{-}4\,(5)$, $3\text{-}5\,(7)$; nhẹ nhất là $1\text{-}2$ nên nó thuộc một MST, đúng như C.

## Áp dụng ở đâu

- [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim): mở rộng một cây từ một đỉnh, mỗi bước lấy cạnh nhẹ nhất nối cây với đỉnh ngoài; $O(V^2)$ với ma trận kề, $O(E\log V)$ với [đống nhị phân](#/courses/mat3514/lessons/mat3514-binary-heap) và danh sách kề.
- [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal): sắp xếp cạnh ([Bài toán sắp xếp](#/courses/mat3504/lessons/mat3504-sorting-problem)) rồi thêm lần lượt cạnh không tạo chu trình; $O(E\log E)$.
- Ứng dụng theo slide: xây mạng nối liên thông (máy tính, viễn thông, giao thông, nước, điện), gom cụm $k$ nhóm điểm (bỏ $k-1$ cạnh nặng nhất của MST), và cận dưới cho bài toán người du lịch ([Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb)).
- Cài đặt, thử nghiệm và so sánh cây khung nằm trong [Bài tập: cài đặt đồ thị và các thuật toán](#/courses/mat3514/lessons/mat3514-hw-graph) (Bài 4).

## Lỗi thường gặp

- Nhầm cây khung nhỏ nhất với đường đi ngắn nhất ([Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra)). MST tối thiểu tổng *toàn bộ cây*, không đảm bảo đường đi giữa hai đỉnh là ngắn nhất.
- Áp dụng cho đồ thị có hướng. MST định nghĩa cho đồ thị vô hướng; đồ thị có hướng cần bài toán khác (cây khung có hướng).
- Kết luận MST duy nhất ngay khi có trọng số trùng nhau. Kết quả khi đó có thể khác theo thứ tự chọn cạnh bằng nhau, nhưng tổng trọng số luôn như nhau.
- Quên kiểm tra liên thông: đồ thị rời rạc cho ít hơn $n-1$ cạnh, không phải một cây khung.
- Chọn cạnh nhẹ nhất toàn đồ thị rồi "cứ thêm cạnh nhẹ kế tiếp" mà không kiểm tra chu trình.

## Tự kiểm tra

1. Một đồ thị liên thông có 12 đỉnh. Cây khung có bao nhiêu cạnh?

> **Đáp án**
> $12-1=11$ cạnh.

2. Đồ thị có 4 đỉnh, mọi cạnh có trọng số khác nhau. Cạnh nhẹ nhất toàn đồ thị có luôn thuộc MST không? Vì sao?

> **Đáp án**
> Có. Cạnh $e=(u,v)$ nhẹ nhất toàn đồ thị cũng nhẹ nhất qua phép cắt $S=\{u\}$ (hoặc bất kỳ phép cắt nào mà nó đi qua), nên theo tính chất cắt nó thuộc một MST; vì trọng số khác nhau, MST duy nhất nên thuộc MST đó.

3. (Vận dụng) Tính chất cắt cho thấy cạnh nặng nhất của một chu trình có thể bị loại khỏi MST. Hãy phát biểu và áp dụng cho chu trình $1,2,3$ trong ví dụ (cạnh $1\text{-}2\,(2)$, $2\text{-}3\,(1)$, $1\text{-}3\,(3)$).

> **Đáp án**
> Tính chất chu trình: cạnh có trọng số lớn nhất duy nhất trên một chu trình không thuộc MST nào. Trong chu trình $1,2,3$ cạnh nặng nhất là $1\text{-}3\,(3)$, và MST C ở trên đúng là không chứa nó.
