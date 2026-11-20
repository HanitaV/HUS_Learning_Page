# Bài tập: Ma trận vuông MySquareMatrix

## Vì sao cần

Bài toán ma trận vuông (`MySquareMatrix`) thường xuất hiện trong đề thi OOP để kiểm tra kỹ năng **đóng gói mảng 2 chiều**, thiết kế constructor sinh dữ liệu hoặc sao chép, viết các phép toán ma trận thuần thục và tách bạch lớp mô hình với lớp kiểm thử `TestMatrix`.

## Ý tưởng

Theo thiết kế lớp `MySquareMatrix`:
- Thuộc tính `private int[][] data;` lưu ma trận vuông cấp $n \times n$.
- Hai constructor: `MySquareMatrix(int size)` sinh ngẫu nhiên phần tử và `MySquareMatrix(int[][] data)` khởi tạo từ mảng có sẵn.
- Các nhóm phương thức cốt lõi:
  1. **Trích xuất**: đường chéo chính `principalDiagonal()` (`data[i][i]`), đường chéo phụ `secondaryDiagonal()` (`data[i][n - 1 - i]`), lọc số nguyên tố `primes()`.
  2. **Biến đổi tạo ma trận mới** (không phá hỏng ma trận gốc): chuyển vị `transpose()`, cộng `add()`, trừ `minus()`, nhân `multiply()`, nhân vô hướng `scaled()`.
  3. **Sắp xếp đường chéo phụ** giảm dần (`getSortedMatrix()`): trích đường chéo phụ, sắp xếp giảm dần rồi gán lại vào bản sao ma trận.

## Cài đặt

```java
public class MySquareMatrix {
    private int[][] data;

    public MySquareMatrix(int[][] data) {
        this.data = data;
    }

    public int[] principalDiagonal() {
        int[] diag = new int[data.length];
        for (int i = 0; i < diag.length; i++) diag[i] = data[i][i];
        return diag;
    }

    public int[] secondaryDiagonal() {
        int n = data.length;
        int[] diag = new int[n];
        for (int i = 0; i < n; i++) diag[i] = data[i][n - 1 - i];
        return diag;
    }
}
```

## Lỗi thường gặp

- Nhầm chỉ số đường chéo phụ: phần tử ở hàng `i` nằm tại cột `n - 1 - i` (không phải `n - i`).
- Thực hiện `transpose()` hoặc `getSortedMatrix()` bằng cách sửa trực tiếp mảng `this.data` rồi trả về `this`, làm thay đổi dữ liệu gốc khi người dùng chỉ muốn nhận một ma trận mới.
- Quên kiểm tra `n <= 1` khi viết hàm kiểm tra số nguyên tố `isPrime(int n)`.

## Tự kiểm tra

1. Cho ma trận vuông cấp $n = 4$, phần tử ở hàng $i = 1$ trên đường chéo phụ nằm ở cột nào (đánh số từ $0$)?

> **Đáp án**
> Cột $4 - 1 - 1 = 2$ (tức `data[1][2]`).
