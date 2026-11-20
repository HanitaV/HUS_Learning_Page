# Mẫu Template Method và Iterator

## Vì sao cần

Trong nhiều tình huống, hai thuật toán có **khung các bước giống hệt nhau**, chỉ khác ở một vài bước chi tiết (ví dụ pha trà và pha cà phê đều: đun nước $\rightarrow$ *pha chế* $\rightarrow$ rót ra cốc $\rightarrow$ *thêm phụ gia*). Ngoài ra, khi có nhiều cấu trúc lưu trữ khác nhau (mảng, `ArrayList`), ta cần duyệt tuần tự mà không để lộ cấu trúc bên trong. **Template Method** và **Iterator** giải quyết gọn hai nhu cầu này.

## Ý tưởng

1. **Template Method**: định nghĩa **bộ khung của một thuật toán** trong một phương thức (thường đặt `final`) ở lớp cha trừu tượng, và **ủy quyền một số bước biến đổi** cho lớp con cài đặt thông qua các phương thức `abstract` (hoặc *hook* có cài đặt mặc định).
2. **Iterator**: cung cấp cách **truy cập tuần tự** các phần tử của một đối tượng tập hợp (aggregate) mà **không làm lộ biểu diễn bên trong** (mảng, danh sách liên kết, cây...). Trong Java, chuẩn hóa bằng `java.util.Iterator` (`hasNext()`, `next()`).

## Cài đặt

```java
abstract class CaffeineBeverage {
    public final void prepareRecipe() {   // Template Method: cố định trình tự
        boilWater();
        brew();                           // bước thay đổi do lớp con quyết định
        pourInCup();
    }

    private void boilWater() { System.out.println("Đun sôi nước"); }
    private void pourInCup() { System.out.println("Rót ra cốc"); }
    protected abstract void brew();
}

class Tea extends CaffeineBeverage {
    @Override protected void brew() { System.out.println("Ngâm túi trà"); }
}
```

## Lỗi thường gặp

- Nhầm **Template Method** với **Strategy**: Template Method dùng **kế thừa** để thay đổi *một phần* thuật toán cố định khung, còn Strategy dùng **tổ hợp/ủy quyền** để thay thế *toàn bộ* thuật toán lúc chạy.
- Không đánh dấu `final` cho phương thức khung, khiến lớp con vô tình ghi đè làm đảo lộn trình tự các bước.

## Tự kiểm tra

1. Trong mẫu Template Method, lớp cha kiểm soát điều gì và lớp con quyết định điều gì?

> **Đáp án**
> **Lớp cha** kiểm soát cấu trúc và thứ tự tổng thể của thuật toán (trong phương thức khuôn mẫu). **Lớp con** chỉ cài đặt các bước chi tiết còn để trống (`abstract` hoặc *hook*).
