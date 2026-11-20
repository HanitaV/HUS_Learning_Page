# Bài tập: Quản lý sinh viên StudentManager

## Vì sao cần

Bài toán Quản lý sinh viên (`StudentManager`) trong đề thi OOP kết hợp nhiều kiến thức thực tế: **mẫu Singleton** để quản lý danh sách tập trung, **Collections (`List`)** để lưu trữ, **`Comparable` / `Comparator`** để sắp xếp đa tiêu chí (theo điểm, theo tên) và **lọc dữ liệu** theo ngưỡng.

## Ý tưởng

Thiết kế chuẩn của bài toán `StudentManager`:
- Lớp `Student`: đóng gói thông tin (`id`, `lastname`, `firstname`, `yearOfBirth`, `mathsGrade`, `physicsGrade`, `chemistryGrade`), tính `getAverageGrade()`, cài đặt `Comparable<Student>` hoặc hỗ trợ so sánh.
- Lớp `StudentManager` áp dụng **Singleton** ([Mẫu Singleton](#/courses/oop/lessons/oop-oop-singleton-pattern)):
  - Constructor `private`, trường `private static StudentManager instance`, phương thức `getInstance()`.
  - Lưu `private List<Student> studentList;` bên trong.
  - Các thao tác quản lý: `append(Student)`, `add(Student, index)`, `remove(index)`, `studentAt(index)`.
  - Các thao tác sắp xếp dùng `Collections.sort(...)` hoặc `list.sort(Comparator)`: sắp xếp theo điểm trung bình tăng/giảm, theo điểm Toán/Lý/Hóa.
  - Các thao tác lọc: lấy top $n$ sinh viên điểm cao nhất/thấp nhất, lọc sinh viên đạt điểm sàn.

## Cài đặt

```java
import java.util.*;

public class StudentManager {
    private static StudentManager instance;
    private final List<Student> studentList;

    private StudentManager() {
        studentList = new LinkedList<>();
    }

    public static StudentManager getInstance() {
        if (instance == null) instance = new StudentManager();
        return instance;
    }

    public List<Student> sortAverageGradeDecreasing() {
        List<Student> copy = new LinkedList<>(studentList);
        copy.sort((s1, s2) -> Double.compare(s2.getAverageGrade(), s1.getAverageGrade()));
        return copy;
    }
}
```

## Lỗi thường gặp

- Sắp xếp trực tiếp trên `this.studentList` thay vì sao chép ra danh sách mới trước khi sắp xếp, làm mất thứ tự gốc ban đầu.
- Viết `return (int) (s1.getAverageGrade() - s2.getAverageGrade());` trong `Comparator`: bị **lỗi ép kiểu làm tròn về 0** khi hiệu điểm nằm giữa $-1$ và $1$ (ví dụ $7.8 - 7.3 = 0.5 \rightarrow 0$)! Phải luôn dùng `Double.compare(...)`.

## Tự kiểm tra

1. Vì sao khi so sánh hai số thực `double` trong `Comparator`, không nên viết `(int) (a - b)` mà phải dùng `Double.compare(a, b)`?

> **Đáp án**
> Vì nếu $|a - b| < 1$ (chẳng hạn $8.6 - 8.2 = 0.4$), phép ép kiểu `(int) 0.4` cho kết quả `0`, làm `Comparator` hiểu nhầm hai giá trị bằng nhau và sắp xếp sai. `Double.compare(a, b)` xử lý chính xác cả số thực gần nhau và `NaN`.
