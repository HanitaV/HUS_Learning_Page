# Bài tập: Mảng, sắp xếp và tìm kiếm nhị phân

## Vì sao cần

Bài tập tổng hợp kỹ năng làm việc với mảng một chiều, vòng lặp, phương thức và hai thuật toán nền tảng thường gặp trong kiểm tra thực hành: sắp xếp nổi bọt ([Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort)) và tìm kiếm nhị phân ([Tìm kiếm nhị phân](#/courses/mat3504/lessons/mat3504-binary-search)).

## Ý tưởng

Đề bài yêu cầu hoàn thiện các phương thức trên mảng số nguyên:

1. `inputData(int dataSize)`: cấp phát mảng `int[dataSize]`, sinh ngẫu nhiên từng phần tử trong đoạn $[1, 100]$ bằng `1 + (int)(100 * Math.random())`.
2. `printData(int[] data)`: in mảng theo định dạng `(x1, x2, ..., xn)`.
3. `bubbleSort(int[] data)`: sắp xếp mảng theo thứ tự **giảm dần** (đổi chỗ hai phần tử kề nhau nếu `data[j] < data[j + 1]`).
4. `binarySearch(int[] decreasingData, int key)`: tìm kiếm nhị phân trên mảng **đã sắp giảm dần**. Lưu ý điều chỉnh hướng thu hẹp khoảng `[left, right]`: nếu `decreasingData[mid] < key` thì `key` chỉ có thể nằm ở nửa **bên trái** (`right = mid - 1`), ngược lại `left = mid + 1`.

## Cài đặt

```java
public class ArrayAndSortingAlgorithm {
    public static int[] inputData(int dataSize) {
        int[] data = new int[dataSize];
        for (int i = 0; i < dataSize; i++) {
            data[i] = 1 + (int) (100 * Math.random());
        }
        return data;
    }

    public static void bubbleSort(int[] data) {
        for (int i = 0; i < data.length - 1; i++) {
            for (int j = 0; j < data.length - 1 - i; j++) {
                if (data[j] < data[j + 1]) {
                    int tmp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = tmp;
                }
            }
        }
    }

    public static int binarySearch(int[] decreasingData, int key) {
        int left = 0, right = decreasingData.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (decreasingData[mid] == key) return mid;
            if (decreasingData[mid] < key) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    }
}
```

## Lỗi thường gặp

- Dùng công thức tìm kiếm nhị phân cho mảng tăng dần (`key < a[mid]` $\to$ `right = mid - 1`) áp cho mảng giảm dần, dẫn đến tìm sai hướng.
- Sinh số ngẫu nhiên trong $[1, 100]$ nhưng quên `+ 1`, khiến giá trị rơi vào $[0, 99]$.
- In dư dấu phẩy sau phần tử cuối cùng trong định dạng `(x1, x2, ..., xn)`.

## Tự kiểm tra

1. Trên mảng giảm dần `[90, 75, 40, 20, 10]`, khi tìm `key = 75` bằng `binarySearch`, ở bước đầu tiên `mid = 2` (`decreasingData[2] = 40`), bước tiếp theo `left` và `right` cập nhật thành bao nhiêu?

> **Đáp án**
> Vì `decreasingData[2] = 40 < 75`, hàm cập nhật `right = mid - 1 = 1` (còn `left` giữ nguyên `0`). Ở bước sau `mid = 0` (`90 > 75`) nên `left = 1`, rồi tìm thấy `75` tại chỉ số `1`.
