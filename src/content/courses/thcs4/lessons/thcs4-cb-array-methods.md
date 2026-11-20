# Mảng làm tham số và giá trị trả về

## Vì sao cần

Để xử lý mảng gọn gàng (nhập, in, tìm kiếm, cộng hai vector, thêm/xóa phần tử), bạn cần truyền mảng vào phương thức và nhận về mảng kết quả từ phương thức.

## Ý tưởng

- **Mảng là tham số**: vì mảng là đối tượng, giá trị truyền vào phương thức là **tham chiếu tới vùng nhớ của mảng** (xem thêm [Kiểu nguyên thủy và kiểu tham chiếu](#/courses/thcs4/lessons/thcs4-cb-reference-vs-primitive)). Do đó, khi phương thức sửa `array[i]`, mảng gốc ở nơi gọi **bị thay đổi theo** — trái ngược với tham số kiểu nguyên thủy.
- **Mảng là giá trị trả về**: khai báo kiểu trả về là `TYPE[]` (ví dụ `int[]`). Bên trong phương thức có thể tạo mảng mới bằng `new` rồi `return` mảng đó (hoặc trả `null` nếu đầu vào không hợp lệ).

## Cài đặt

```java
public class ArrayMethodsDemo {
    public static void modifyArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
    }

    public static int[] sumVector(int[] v1, int[] v2) {
        if (v1.length != v2.length) return null;
        int[] sum = new int[v1.length];
        for (int i = 0; i < sum.length; i++) {
            sum[i] = v1[i] + v2[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        modifyArray(a); // a trở thành {2, 4, 6}
        int[] b = {10, 20, 30};
        int[] c = sumVector(a, b); // {12, 24, 36}
    }
}
```

## Lỗi thường gặp

- Quên kiểm tra `null` khi phương thức trả về mảng có thể trả `null` (như `sumVector` khi hai mảng khác độ dài).
- Cố sửa phần tử mảng trong `modifyArray` bằng vòng `for (int num : array) num *= 2;` — lệnh này không làm thay đổi mảng `array`.

## Tự kiểm tra

1. Nếu viết hàm `int[] addElement(int[] elems, int idx, int value)` chèn `value` vào vị trí `idx`, tại sao phải tạo mảng mới `newElems` có kích thước `elems.length + 1` thay vì chèn trực tiếp vào `elems`?

> **Đáp án**
> Vì mảng trong Java có kích thước cố định sau khi khởi tạo bằng `new`; muốn tăng thêm 1 phần tử bắt buộc phải cấp phát mảng mới lớn hơn rồi chép dữ liệu sang.
