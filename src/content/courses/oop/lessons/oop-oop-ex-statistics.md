# Bài tập: Thống kê và tự cài đặt MyList

## Vì sao cần

Bài toán `Statistics` kết hợp **tự cài đặt cấu trúc dữ liệu danh sách** (`MyList`, `MyAbstractList`, `MyArrayList`, `MyLinkedList`), **mẫu Iterator** (`MyIterable`, `MyIterator`) và **xử lý thống kê cơ bản** (`max`, `min`, `mean`, `variance`, `rank`, `search`). Đây là bài tập kinh điển rèn tư duy tách biệt ADT khỏi cài đặt.

## Ý tưởng

1. **Cấu trúc danh sách tự cài đặt**:
   - `MyIterable` trả về `MyIterator` (`hasNext()`, `next()`).
   - `MyList` kế thừa `MyIterable`, định nghĩa `size()`, `add()`, `get(i)`, `set(data, i)`, `remove(i)`, `sortIncreasing()`, `sortDecreasing()`, `binarySearch()`.
   - `MyAbstractList` cài đặt chung `toString()`.
   - `MyArrayList` dùng mảng `double[]` (tự nhân đôi kích thước `allocateMore()` khi đầy); `MyLinkedList` dùng chuỗi nút `MyNode`.
2. **Lớp `Statistics`**:
   - Giữ một tham chiếu kiểu giao diện `MyList data` (không phụ thuộc `MyArrayList` hay `MyLinkedList`).
   - Cung cấp `max()`, `min()`, `mean()`, `variance()` ($\frac{1}{n}\sum (x_i - \bar{x})^2$), `rank()` (xếp hạng giá trị) và `search(value)`.

## Cài đặt

```java
public class Statistics {
    private MyList data;

    public Statistics(MyList data) {
        this.data = data;
    }

    public double mean() {
        if (data.size() == 0) {
            throw new IllegalStateException("Danh sách rỗng");
        }
        double sum = 0;
        for (int i = 0; i < data.size(); i++) {
            sum += data.get(i);
        }
        return sum / data.size();
    }
}
```

## Lỗi thường gặp

- Không kiểm tra `data.size() == 0` trong `max()`, `min()`, `mean()`, `variance()`, dẫn tới lỗi chia cho 0 (`NaN`) hoặc truy cập `data.get(0)` trên danh sách rỗng.
- Trong `MyLinkedList`, quên cập nhật `head` khi xóa nút ở chỉ số `0`, hoặc quên kiểm tra `index < 0 || index >= size`.
- Gọi `binarySearch` trên danh sách **chưa sắp xếp** nên trả về kết quả sai.

## Tự kiểm tra

1. Vì sao lớp `Statistics` nhận tham số constructor là `MyList` thay vì `MyArrayList`?

> **Đáp án**
> Để tách rời logic thống kê khỏi cấu trúc lưu trữ cụ thể (lập trình hướng giao diện): cùng một đối tượng `Statistics` có thể hoạt động với cả `MyArrayList` lẫn `MyLinkedList`.
