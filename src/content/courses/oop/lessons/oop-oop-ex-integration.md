# Bài tập: Tính tích phân số (Strategy & Đa thức)

## Vì sao cần

Bài toán tính tích phân xác định $\int_a^b P(x)\,dx$ (`IntegrationCalculator`) là ví dụ tổng hợp tuyệt vời kết hợp **lớp trừu tượng / giao diện**, **đa hình** (hai cách cài đặt đa thức `MyArrayPolynomial` và `MyListPolynomial`) và **mẫu Strategy** (hoán đổi các phương pháp tính tích phân số lúc chạy).

## Ý tưởng

Kiến trúc gồm hai nhánh giao diện:
1. **Nhánh Đa thức (`MyPolynomial`)**:
   - Giao diện `MyPolynomial` định nghĩa các phép toán: lấy bậc `degree()`, hệ số `coefficient(i)`, tính giá trị `evaluate(x)`, đạo hàm `derivative()`, cộng/trừ/nhân đa thức.
   - Lớp trừu tượng `MyAbstractPolynomial` cài đặt chung `toString()` và tính đạo hàm hệ số.
   - Hai lớp cụ thể: `MyArrayPolynomial` (lưu hệ số bằng `double[]`) và `MyListPolynomial` (lưu bằng `List<Double>`).
2. **Nhánh Tích phân (`MyIntegrator` — áp dụng [Mẫu Strategy](#/courses/oop/lessons/oop-oop-strategy-pattern))**:
   - Giao diện `MyIntegrator` có phương thức `double integrate(MyPolynomial poly, double lower, double upper)`.
   - Ba chiến lược cài đặt: `MidpointRule`, `TrapezoidRule`, `SimpsonRule` (lặp tăng gấp đôi số khoảng chia tới khi sai số nhỏ hơn `precision` hoặc vượt `maxIterations`).
3. **Lớp ngữ cảnh `IntegrationCalculator`**: giữ `MyIntegrator` và `MyPolynomial`, cho phép đổi chiến lược qua `setIntegrator(...)` ngay lúc chạy.

## Cài đặt

```java
public interface MyIntegrator {
    double integrate(MyPolynomial poly, double lower, double upper);
}

public class IntegrationCalculator {
    private MyIntegrator integrator;
    private MyPolynomial poly;

    public IntegrationCalculator(MyIntegrator integrator, MyPolynomial poly) {
        this.integrator = integrator;
        this.poly = poly;
    }

    public void setIntegrator(MyIntegrator integrator) {
        this.integrator = integrator;
    }

    public double integrate(double lower, double upper) {
        return integrator.integrate(poly, lower, upper);
    }
}
```

## Lỗi thường gặp

- Trong `SimpsonRule`, quên điều kiện số khoảng chia $n$ phải là **số chẵn** (nếu lẻ sẽ tính sai công thức Simpson $1, 4, 2, 4, \dots, 1$).
- Khi tính `evaluate(x)` hoặc cộng hai đa thức khác bậc, quên kiểm tra giới hạn chỉ số mảng hệ số dẫn tới `ArrayIndexOutOfBoundsException`.
- Dùng dấu `if-else` trong `IntegrationCalculator` thay vì ủy quyền qua giao diện `MyIntegrator`.

## Tự kiểm tra

1. Trong kiến trúc `IntegrationCalculator`, khi muốn thêm một phương pháp tính tích phân mới (ví dụ Monte Carlo) mà không sửa mã `IntegrationCalculator`, ta cần làm gì?

> **Đáp án**
> Tạo một lớp mới cài đặt giao diện **`MyIntegrator`** rồi truyền đối tượng của lớp đó vào `IntegrationCalculator` qua constructor hoặc `setIntegrator(...)` (đây chính là mẫu **Strategy** và nguyên lý **Open/Closed**).
