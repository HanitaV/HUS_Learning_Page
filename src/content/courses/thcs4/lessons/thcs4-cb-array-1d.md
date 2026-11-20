# Mảng một chiều và duyệt mảng

## Vì sao cần

Khi cần lưu danh sách 100 điểm thi hay dãy số thực, việc khai báo 100 biến rời rạc là bất khả thi. Mảng cho phép gom một dãy phần tử cùng kiểu dưới một tên biến duy nhất và truy cập nhanh theo chỉ số.

## Ý tưởng

Mảng một chiều trong Java là một **đối tượng** chứa dãy phần tử cùng kiểu (nguyên thủy hoặc tham chiếu). Các phần tử được đánh chỉ số từ `0` đến `n - 1` với `n` là số phần tử (`array.length`).

Có hai cách khởi tạo mảng:
1. Dùng `new`: `TYPE[] name = new TYPE[size];` (các phần tử nhận giá trị mặc định: `0`, `0.0`, `false`, `null`).
2. Khởi gán trực tiếp: `TYPE[] name = {v0, v1, ..., vk};`.

Hai cách duyệt mảng phổ biến:
- Vòng lặp `for` với chỉ số `0 <= i < array.length` (dùng được khi cần chỉ số hoặc sửa phần tử).
- Vòng lặp `for-each`: `for (TYPE elem : array)` (ngắn gọn khi chỉ cần đọc giá trị từng phần tử).

## Cài đặt

```java
public class Array1DDemo {
    public static void main(String[] args) {
        int[] a = new int[5];
        a[0] = 10;
        a[4] = 50;

        int[] b = {5, 4, 3, 2, 1};
        for (int i = 0; i < b.length; i++) {
            System.out.println("b[" + i + "] = " + b[i]);
        }

        for (int val : b) {
            System.out.print(val + " ");
        }
    }
}
```

## Lỗi thường gặp

- Truy cập `a[a.length]` (ví dụ `a[5]` với mảng 5 phần tử): biên dịch vẫn qua nhưng lúc chạy ném ngoại lệ `ArrayIndexOutOfBoundsException`.
- Dùng biến mảng khi mới khai báo (`int[] a;`) mà chưa cấp phát bằng `new` hoặc `{...}`.
- Tưởng rằng gán biến `elem` trong `for (int elem : a)` sẽ làm thay đổi phần tử trong mảng `a` (thực chất `elem` chỉ là bản sao giá trị).

## Tự kiểm tra

1. Mảng `double[] v = {0.5, 4.0, 3.25, 10, 2};` có `v.length` bằng bao nhiêu và chỉ số của phần tử cuối cùng là gì?

> **Đáp án**
> `v.length` bằng `5` và chỉ số phần tử cuối cùng là `4` (`v[4] == 2.0`).
