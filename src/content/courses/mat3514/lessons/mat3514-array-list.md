# Danh sách cài đặt bằng mảng

## Vì sao cần

Danh sách cài bằng mảng (`ArrayList`) lưu các phần tử liên tiếp nhau trong một mảng, giúp đọc hoặc cập nhật `get(i)` chỉ tốn $O(1)$ và tận dụng tốt bộ nhớ đệm (cache). Khi mảng đầy, ta cấp phát mảng mới lớn gấp đôi để vẫn giữ được chi phí thêm cuối trung bình $O(1)$.

## Ý tưởng

- Giữ mảng `data` có sức chứa `capacity` và biến `size` đếm số phần tử thật sự.
- **Chèn tại `idx`:** dịch các phần tử `data[idx..size-1]` sang phải 1 ô (duyệt ngược từ `size - 1` về `idx`), rồi gán `data[idx] = val`, tăng `size`.
- **Xóa tại `idx`:** dịch `data[idx+1..size-1]` sang trái 1 ô, giảm `size`.
- **Mở rộng mảng:** khi `size == data.length`, tạo mảng mới dài `data.length * 2` và chép sang.

## Cài đặt

```java
class SimpleArrayList {
    private int[] data = new int[4];
    private int size = 0;

    private void ensureCapacity() {
        if (size == data.length) {
            data = Arrays.copyOf(data, data.length * 2);
        }
    }

    public void add(int idx, int val) {
        if (idx < 0 || idx > size) throw new IndexOutOfBoundsException();
        ensureCapacity();
        for (int i = size - 1; i >= idx; i--) {
            data[i + 1] = data[i];
        }
        data[idx] = val;
        size++;
    }

    public int remove(int idx) {
        if (idx < 0 || idx >= size) throw new IndexOutOfBoundsException();
        int removed = data[idx];
        for (int i = idx; i < size - 1; i++) {
            data[i] = data[i + 1];
        }
        size--;
        return removed;
    }
}
```

## Lỗi thường gặp

- Khi chèn tại `idx`, lại duyệt `for (int i = idx; i < size; i++) data[i + 1] = data[i]`: ghi đè toàn bộ các phần tử phía sau bằng `data[idx]`! Phải duyệt **ngược** từ `size - 1` về `idx`.
- Mở rộng mảng bằng cách chỉ cộng thêm `1` ô thay vì nhân đôi: làm $n$ lần `add` cuối bị chậm thành $O(n^2)$.

## Tự kiểm tra

1. Vì sao khi xóa phần tử ở vị trí `idx` thì phải duyệt xuôi từ `idx` tới `size - 2`, còn khi chèn tại `idx` lại phải duyệt ngược từ `size - 1` về `idx`?

> **Đáp án**
> Duyệt xuôi khi xóa kéo phần tử bên phải sang trái vào ô vừa trống mà không ghi đè dữ liệu chưa đọc; duyệt ngược khi chèn đẩy phần tử bên phải sang ô trống phía sau để chừa chỗ tại `idx`.
