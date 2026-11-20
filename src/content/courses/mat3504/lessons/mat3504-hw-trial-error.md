# Bài tập: vét cạn, quay lui, nhánh cận

## Mục tiêu thực hành

Phiếu bài tập rèn luyện kỹ năng thiết kế lời giải thử và sai ([Vét cạn (Brute force)](#/courses/mat3504/lessons/mat3504-brute-force), [Quay lui (Backtracking)](#/courses/mat3504/lessons/mat3504-backtracking), [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound)) qua các bài sinh cấu hình ([Liệt kê dãy nhị phân độ dài n](#/courses/mat3504/lessons/mat3504-binary-strings)), xếp hậu ([Bài toán xếp hậu](#/courses/mat3504/lessons/mat3504-n-queens)), tìm đường mê cung và bài toán người du lịch ([Người du lịch (TSP) bằng nhánh cận](#/courses/mat3504/lessons/mat3504-tsp-bnb)).

## Khung code mẫu: Sinh cấu hình tổng quát bằng quay lui

Mọi bài quay lui đều tách rõ 3 phần: điều kiện dừng, vòng lặp chọn giá trị hợp lệ, và khôi phục trạng thái sau đệ quy:

```java
static void backtrack(int idx, int n, int[] x, boolean[] used) {
    if (idx == n) {
        System.out.println(Arrays.toString(x));
        return;
    }
    for (int val = 1; val <= n; val++) {
        if (used[val]) continue;
        x[idx] = val;
        used[val] = true;
        backtrack(idx + 1, n, x, used);
        used[val] = false; // khôi phục trạng thái
    }
}
```

## Checklist kiểm thử bắt buộc

- Kiểm tra trên đầu vào nhỏ ($n = 2, 3, 4$) và đếm bằng tay để phát hiện nghiệm thiếu hoặc trùng.
- Với [Nhánh cận (Branch and Bound)](#/courses/mat3504/lessons/mat3504-branch-and-bound), kiểm tra điều kiện cắt nhánh: chi phí hiện tại `curCost + lowerBound >= bestCost` chỉ được cắt khi cận dưới hợp lệ (ví dụ mọi trọng số còn lại không âm).

## Tự kiểm tra

1. Trong khung sinh hoán vị trên, nếu quên dòng `used[val] = false;` thì kết quả thu được sẽ gặp lỗi gì?

> **Đáp án**
> Sau khi tạo xong hoán vị đầu tiên (`[1, 2, ..., n]`), toàn bộ mảng `used` vẫn là `true` nên không thể sinh thêm bất kỳ hoán vị nào khác.
