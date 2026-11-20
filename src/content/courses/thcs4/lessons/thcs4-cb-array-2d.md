# Mảng nhiều chiều

## Vì sao cần

Bảng điểm theo môn học, ma trận hệ số hay lưới ô vuông đều có cấu trúc hai chiều gồm hàng và cột. Mảng nhiều chiều mô hình hóa trực tiếp các bảng dữ liệu này.

## Ý tưởng

Trong Java, mảng $n$ chiều thực chất là **mảng một chiều mà mỗi phần tử lại tham chiếu tới một mảng $n - 1$ chiều**. Do đó:

- Với mảng 2 chiều `a`, `a.length` là số hàng, còn `a[i].length` là số phần tử trên hàng `i`.
- Các hàng không bắt buộc phải dài bằng nhau (mảng răng cưa — jagged array), ví dụ `{{1, 2, 3}, {4, 5}}`.
- Có thể cấp phát từng hàng riêng: `int[][] a = new int[2][]; a[0] = new int[3]; a[1] = new int[2];`.

Dùng hai vòng lặp lồng nhau theo chỉ số hoặc `for-each` lồng nhau để duyệt toàn bộ phần tử.

## Cài đặt

```java
public class Array2DDemo {
    public static void main(String[] args) {
        int[][] m1 = new int[2][3];
        int[][] m2 = {{1, 2, 3}, {4, 5}};

        for (int i = 0; i < m2.length; i++) {
            for (int j = 0; j < m2[i].length; j++) {
                System.out.print(m2[i][j] + " ");
            }
            System.out.println();
        }

        // Duyệt bằng for-each
        for (int[] row : m2) {
            System.out.println("Row length = " + row.length);
        }
    }
}
```

## Lỗi thường gặp

- Dùng `a[0].length` cho mọi hàng khi mảng có các hàng độ dài khác nhau, gây `ArrayIndexOutOfBoundsException` ở hàng ngắn hơn; cần dùng `a[i].length`.
- Khởi tạo `new int[2][]` rồi truy cập ngay `a[0][0]` khi chưa cấp phát `a[0] = new int[...]`, gây `NullPointerException`.

## Tự kiểm tra

1. Với `int[][] arr = {{2, 3, 4}, {5, 6}};`, giá trị của `arr.length`, `arr[0].length` và `arr[1].length` lần lượt là bao nhiêu?

> **Đáp án**
> `arr.length = 2`, `arr[0].length = 3`, và `arr[1].length = 2`.
