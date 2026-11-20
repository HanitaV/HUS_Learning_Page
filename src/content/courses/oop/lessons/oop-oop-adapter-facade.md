# Mẫu Adapter và Facade

## Vì sao cần

Khi tích hợp thư viện bên thứ ba hoặc hệ thống cũ, giao diện của lớp có sẵn thường không khớp với giao diện mà hệ thống của bạn đang mong đợi. Ngược lại, đôi khi một hệ thống con (như rạp chiếu phim tại gia gồm ampli, đầu DVD, máy chiếu, màn hình) có quá nhiều lớp và thao tác rườm rà. **Adapter** và **Facade** là hai mẫu cấu trúc giúp làm gọn ranh giới giao tiếp này.

## Ý tưởng

- **Adapter (Bộ chuyển đổi)**: chuyển đổi giao diện của một lớp (Adaptee) sang một giao diện khác (Target) mà khách hàng mong muốn, giúp các lớp có giao diện không tương thích làm việc được với nhau (ví dụ `TurkeyAdapter` bọc `Turkey` để giả làm `Duck`, hay `EnumerationIterator` trong Java).
- **Facade (Mặt tiền)**: cung cấp **một giao diện thống nhất, đơn giản hơn** che phía trước một tập hợp nhiều lớp phức tạp trong hệ thống con (ví dụ `HomeTheaterFacade.watchMovie()` tự động bật đèn mờ, hạ màn hình, bật máy chiếu và ampli theo đúng thứ tự).

## Cài đặt

```java
interface Duck { void quack(); }

class WildTurkey {
    void gobble() { System.out.println("Gobble gobble"); }
}

// Adapter chuyển đổi giao diện WildTurkey sang Duck
class TurkeyAdapter implements Duck {
    private final WildTurkey turkey;

    public TurkeyAdapter(WildTurkey turkey) { this.turkey = turkey; }

    @Override
    public void quack() { turkey.gobble(); }
}
```

## Lỗi thường gặp

- Nhầm **Adapter** với **Facade**: Adapter dùng để **làm tương thích** hai giao diện khác nhau (thường bọc 1 đối tượng), còn Facade dùng để **đơn giản hóa** thao tác trên cả một hệ thống con nhiều lớp.
- Biến Facade thành "cổng độc quyền" chặn mất quyền truy cập trực tiếp vào các lớp hệ thống con khi người dùng nâng cao vẫn cần dùng.

## Tự kiểm tra

1. Trong bài toán hệ thống rạp chiếu phim tại gia (`watchMovie()` gọi tuần tự 6 thiết bị), ta đang áp dụng mẫu nào?

> **Đáp án**
> Mẫu **Facade**, vì nó gói gọn chuỗi thao tác phức tạp trên nhiều lớp thành một phương thức cấp cao duy nhất dễ dùng.
