# Phương pháp tham lam

## Vì sao cần

Nhiều bài toán tối ưu có thể giải bằng [vét cạn](#/courses/mat3504/lessons/mat3504-brute-force) hoặc [quay lui](#/courses/mat3504/lessons/mat3504-backtracking), nhưng số phương án tăng theo hàm mũ. Phương pháp tham lam (greedy) đi theo hướng khác: chia lời giải thành nhiều giai đoạn, ở mỗi giai đoạn chọn ngay phương án có vẻ tốt nhất tại thời điểm đó và không quay lại sửa. Thuật toán chạy rất nhanh, nhưng chỉ đúng với một số bài toán nhất định. Bài này dạy lược đồ chung và cách phân biệt trường hợp tham lam đúng với trường hợp tham lam sai. Bạn có thể bấm chạy mô phỏng ngay bên dưới để quan sát từng lựa chọn.

## Ý tưởng

Tham lam giả định rằng chọn tốt nhất cục bộ ở mỗi bước sẽ dẫn tới nghiệm tốt nhất toàn cục. Giả định này không phải lúc nào cũng đúng. Slide của giảng viên nêu hai tính chất làm cho chiến lược tham lam hiệu quả:

- **Tính chất lựa chọn tham lam** (greedy choice property): tồn tại một nghiệm tối ưu toàn cục có chứa lựa chọn cục bộ tốt nhất ở bước hiện tại.
- **Cấu trúc con tối ưu** (optimal substructure): sau khi chọn xong một phần, phần còn lại của nghiệm tối ưu chính là nghiệm tối ưu của bài toán con còn lại.

Mỗi lựa chọn ở một bước phải thỏa hai điều kiện: **khả thi** (không vi phạm ràng buộc của bài toán) và **tối ưu cục bộ** (tốt nhất trong các lựa chọn khả thi ở bước đó). Đã chọn rồi thì không rút lại ở các bước sau.

### Lược đồ chung

Với tập ứng viên $A$ và nghiệm $S$, lược đồ trong slide là:

```text
Greedy(A):
    S = rỗng
    while (A khác rỗng và !Is_solution(S)):
        x = BestSelect(A)          // chọn ứng viên tốt nhất cục bộ
        A = A \ {x}
        if (Acceptable(S, x))      // x có làm S vẫn khả thi không
            Integrate(S, x)        // nhập x vào nghiệm
    return S
```

Phần quyết định chất lượng thuật toán là hàm `BestSelect`: tiêu chí chọn đúng thì thuật toán đúng, tiêu chí sai thì cho nghiệm sai mà vẫn chạy nhanh.

## Ví dụ chạy tay

### Ví dụ tham lam đúng: đổi tiền với mệnh giá 1, 5, 10, 50

Đổi 78 với số đồng ít nhất. Mỗi bước lấy đồng lớn nhất không vượt số tiền còn lại.

| Bước | Còn lại | Chọn | Sau khi chọn |
|---|---|---|---|
| 1 | 78 | 50 | 28 |
| 2 | 28 | 10 | 18 |
| 3 | 18 | 10 | 8 |
| 4 | 8 | 5 | 3 |
| 5 | 3 | 1 | 2 |
| 6 | 2 | 1 | 1 |
| 7 | 1 | 1 | 0 |

Kết quả $78 = 1\times 50 + 2\times 10 + 1\times 5 + 3\times 1$, tổng 7 đồng. Với hệ mệnh giá này 7 là tối ưu.

### Ví dụ tham lam sai

Với mệnh giá $\{10, 6, 1\}$ và số tiền 55, tham lam lấy $5\times 10 + 5\times 1$ là 10 đồng. Nhưng $3\times 10 + 4\times 6 + 1\times 1 = 55$ chỉ dùng 8 đồng. Lựa chọn "lấy 10 trước" ở bước đầu không nằm trong nghiệm tối ưu, tức tính chất lựa chọn tham lam bị vi phạm. Chi tiết ở [Đổi tiền tham lam](#/courses/mat3504/lessons/mat3504-coin-change-greedy).

### Ví dụ tham lam đúng: xếp balo liên tục

Có thể lấy một phần của mỗi vật. Sức chứa 15 kg; vật A nặng 10 kg giá trị 60, vật B nặng 8 kg giá trị 40, vật C nặng 4 kg giá trị 24. Đơn giá (giá trị trên kg) lần lượt là 6, 5, 6. Sắp theo đơn giá giảm dần: A, C, B. Lấy A (10 kg), lấy C (4 kg), còn 1 kg thì lấy $\tfrac18$ của B, được giá trị $60 + 24 + 5 = 89$. Tiêu chí "đơn giá lớn nhất" đúng vì có thể cắt vật. Nếu mỗi vật phải lấy trọn hoặc bỏ (balo 0-1) thì tiêu chí này không còn đảm bảo, xem [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01).

## Cài đặt

Mẫu Java cho bài toán chọn tối ưu trên danh sách đã sắp theo tiêu chí tham lam (xếp balo liên tục):

```java
static double fractionalKnapsack(double[] weight, double[] value, double capacity) {
    int n = weight.length;
    Integer[] order = new Integer[n];
    for (int i = 0; i < n; i++) order[i] = i;
    // BestSelect: đơn giá value/weight lớn nhất trước
    java.util.Arrays.sort(order, (x, y) ->
        Double.compare(value[y] / weight[y], value[x] / weight[x]));
    double total = 0;
    for (int idx : order) {
        if (capacity <= 0) break;
        double take = Math.min(weight[idx], capacity); // Acceptable: không vượt sức chứa
        total += value[idx] * (take / weight[idx]);    // Integrate
        capacity -= take;
    }
    return total;
}
```

## Độ phức tạp

Phần lớn thuật toán tham lam gồm một bước sắp xếp hoặc dùng hàng đợi ưu tiên, rồi duyệt một lần.

| Thành phần | Chi phí |
|---|---|
| Sắp xếp ứng viên theo tiêu chí | $O(n\log n)$ |
| Duyệt chọn một lượt | $O(n)$ |
| Bộ nhớ phụ | $O(1)$ đến $O(n)$ |

Tổng thường là $O(n\log n)$. Xem [Ký hiệu O lớn](#/courses/mat3504/lessons/mat3504-big-o) để nhắc lại ký hiệu, và [Sắp xếp trộn (Merge Sort)](#/courses/mat3504/lessons/mat3504-merge-sort) để biết vì sao sắp xếp so sánh cần $n\log n$.

## Lỗi thường gặp

- Giả định tham lam luôn đúng chỉ vì nó chạy ra nghiệm hợp lệ. Nghiệm hợp lệ chưa chắc tối ưu (ví dụ $\{10,6,1\}$ ở trên).
- Chọn sai tiêu chí `BestSelect`. Với chọn hoạt động, sắp theo thời điểm bắt đầu hoặc theo độ dài đều sai; chỉ sắp theo thời điểm kết thúc là đúng (xem [Chọn hoạt động (Activity Selection)](#/courses/mat3504/lessons/mat3504-activity-selection)).
- Quên bước `Acceptable`, dẫn tới nhập ứng viên làm nghiệm vi phạm ràng buộc.
- Không kiểm chứng bằng phản ví dụ. Chỉ cần một đầu vào nhỏ mà tham lam kém hơn vét cạn là đủ bác bỏ thuật toán.
- Nhầm xếp balo liên tục (tham lam đúng) với balo 0-1 (cần quy hoạch động).

## So sánh / liên hệ

Tham lam không xét lại lựa chọn, nên nhanh nhưng hẹp. [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) xét mọi bài toán con nên đúng cho nhiều bài hơn, đổi lại tốn bảng phương án. Ba thuật toán đồ thị cổ điển là tham lam có chứng minh: [Thuật toán Prim](#/courses/mat3504/lessons/mat3504-prim) và [Thuật toán Kruskal](#/courses/mat3504/lessons/mat3504-kruskal) tìm cây khung nhỏ nhất ([Cây khung nhỏ nhất (MST)](#/courses/mat3504/lessons/mat3504-mst)), [Thuật toán Dijkstra](#/courses/mat3504/lessons/mat3504-dijkstra) tìm đường đi ngắn nhất với trọng số không âm.

## Luyện tập

- [Đổi tiền tham lam](#/courses/mat3504/lessons/mat3504-coin-change-greedy): thấy một trường hợp tham lam đúng và một trường hợp sai trên cùng bài toán.
- [Chọn hoạt động (Activity Selection)](#/courses/mat3504/lessons/mat3504-activity-selection): chọn tiêu chí tham lam đúng và chứng minh bằng phép hoán đổi.
- [Bài tập: phương pháp tham lam](#/courses/mat3504/lessons/mat3504-hw-greedy): cài đặt các thuật toán tham lam trong bài tập tuần.

## Tự kiểm tra

**1. Hai tính chất nào cho phép tin vào thuật toán tham lam?**

> **Đáp án**
> Tính chất lựa chọn tham lam (có nghiệm tối ưu chứa lựa chọn cục bộ tốt nhất) và cấu trúc con tối ưu (phần còn lại là nghiệm tối ưu của bài toán con).

**2. Mệnh giá $\{1, 3, 4\}$, đổi 6. Tham lam cho kết quả gì và có tối ưu không?**

> **Đáp án**
> Tham lam lấy 4, rồi 1, rồi 1: 3 đồng. Phương án $3+3$ chỉ cần 2 đồng, nên tham lam không tối ưu.

**3. Vì sao xếp balo liên tục giải được bằng tham lam còn balo 0-1 thì không?**

> **Đáp án**
> Cắt được vật nên có thể lấp đầy sức chứa bằng vật đơn giá cao nhất. Với 0-1, vật đơn giá cao có thể làm lãng phí chỗ trống. Ví dụ sức chứa 50, vật $(10,60)$, $(20,100)$, $(30,120)$ (trọng lượng, giá trị): tham lam chọn hai vật đầu được 160, trong khi chọn vật hai và ba được 220.
