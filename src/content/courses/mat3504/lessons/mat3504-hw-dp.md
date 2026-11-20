# Bài tập: quy hoạch động

## Mục tiêu thực hành

Phiếu bài tập tổng hợp thiết kế [Quy hoạch động](#/courses/mat3504/lessons/mat3504-dynamic-programming) cho các bài toán tối ưu rời rạc: xếp phòng họp có trọng số, cho thuê máy, điền dấu biểu thức, [Xếp balo 0-1](#/courses/mat3504/lessons/mat3504-knapsack-01), [Dãy con tăng dài nhất](#/courses/mat3504/lessons/mat3504-lis) và [Dãy con chung dài nhất của hai dãy](#/courses/mat3504/lessons/mat3504-lcs).

## Quy trình 4 bước trước khi viết code DP

1. **Định nghĩa trạng thái:** viết rõ `dp[i]` hoặc `dp[i][j]` biểu diễn bài toán con nào.
2. **Trường hợp cơ sở:** xác định giá trị biên (`i = 0` hoặc `j = 0`).
3. **Công thức chuyển:** liệt kê đủ các lựa chọn tại bước `i` và điều kiện hợp lệ.
4. **Thứ tự tính & truy vết:** đảm bảo bài toán con đã được tính trước khi dùng; lưu thêm mảng `trace` nếu đề yêu cầu in nghiệm.

```java
// Ví dụ truy vết nghiệm từ bảng dp của Cái túi 0-1
List<Integer> picked = new ArrayList<>();
int c = W;
for (int i = n; i >= 1; i--) {
    if (dp[i][c] != dp[i - 1][c]) {
        picked.add(i); // đã chọn vật i
        c -= weight[i];
    }
}
```

## Lỗi thường gặp

- Sao chép công thức chuyển từ bài khác khi điều kiện ràng buộc thay đổi (ví dụ chọn không giới hạn số lần khác với chọn tối đa 1 lần).
- Quên khởi tạo giá trị biên hoặc tính sai thứ tự vòng lặp khiến ô phụ thuộc chưa có giá trị.

## Tự kiểm tra

1. Khi nào bài toán quy hoạch động bắt buộc phải dùng bảng 2 chiều `dp[i][c]` thay vì tối ưu 1 chiều `dp[c]`?

> **Đáp án**
> Khi đề bài yêu cầu **truy vết lại tập phần tử đã chọn** (cần giữ giá trị ở các hàng `i` trước để so sánh `dp[i][c] != dp[i-1][c]`). Nếu chỉ cần giá trị tối ưu lớn nhất thì có thể nén xuống 1 chiều.
