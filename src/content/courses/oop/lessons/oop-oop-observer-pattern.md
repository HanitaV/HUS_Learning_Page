# Mẫu Observer

## Vì sao cần

Trong hệ thống theo dõi thời tiết (`WeatherData`), mỗi khi nhiệt độ hoặc độ ẩm thay đổi, các màn hình hiển thị (`CurrentConditions`, `Statistics`, `Forecast`) cần được cập nhật đồng thời. Nếu `WeatherData` gọi cứng từng lớp màn hình, mỗi lần thêm hay bỏ một màn hình mới đều phải sửa mã nguồn `WeatherData`. **Observer** giải quyết bài toán thông báo sự kiện với độ kết nối lỏng lẻo.

## Ý tưởng

Mẫu **Observer** định nghĩa quan hệ phụ thuộc **một – nhiều** giữa các đối tượng: khi đối tượng trung tâm (**Subject / Publisher**) thay đổi trạng thái, tất cả các đối tượng phụ thuộc (**Observers / Subscribers**) tự động được thông báo và cập nhật:
- `Subject` chỉ biết danh sách `Observer` thông qua một giao diện chung (`registerObserver`, `removeObserver`, `notifyObservers`), không cần biết lớp cụ thể của từng Observer.
- Nhờ **kết nối lỏng (loose coupling)**, ta có thể thêm hoặc gỡ Observer lúc chạy mà không sửa mã của `Subject`.

## Cài đặt

```java
import java.util.ArrayList;
import java.util.List;

interface Observer { void update(double temp); }

class WeatherStation {
    private final List<Observer> observers = new ArrayList<>();
    private double temp;

    public void addObserver(Observer o) { observers.add(o); }
    public void setTemp(double temp) {
        this.temp = temp;
        for (Observer o : observers) o.update(this.temp);
    }
}
```

## Lỗi thường gặp

- Quên hủy đăng ký (`removeObserver`) khi một Observer không còn sử dụng, gây rò rỉ bộ nhớ (Subject vẫn giữ tham chiếu nên Garbage Collector không thu hồi được).
- Sửa danh sách `observers` ngay trong lúc đang duyệt vòng lặp thông báo, gây `ConcurrentModificationException`.

## Tự kiểm tra

1. Vì sao nói Observer tạo ra sự tương tác "kết nối lỏng" (loosely coupled) giữa Subject và Observer?

> **Đáp án**
> Vì Subject chỉ tương tác với Observer qua giao diện chung (ví dụ phương thức `update(...)`), không cần biết chi tiết cài đặt hay lớp cụ thể của các Observer, nên hai bên có thể thay đổi độc lập.
