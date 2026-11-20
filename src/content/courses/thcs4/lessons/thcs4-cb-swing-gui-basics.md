# Giới thiệu giao diện đồ họa Swing

## Vì sao cần

Giao diện dòng lệnh phù hợp cho kiểm thử và bài tập nhỏ, nhưng phần mềm tương tác thường cần cửa sổ, nút bấm, ô nhập liệu và bảng chọn trực quan. Thư viện Swing của Java cung cấp các thành phần đồ họa độc lập với hệ điều hành.

## Ý tưởng

- **AWT (`java.awt`) và Swing (`javax.swing`)**: AWT phụ thuộc giao diện nền của hệ điều hành nên nặng và kém linh hoạt; Swing ra đời từ Java 1.2, nhẹ hơn và có hình thức/hoạt động thống nhất đa nền tảng.
- **Các thành phần Swing cơ bản**: `JLabel` (nhãn văn bản/ảnh), `JTextField` (ô nhập văn bản), `JButton` (nút nhấn), `JCheckBox` (hộp chọn), `JComboBox` (hộp thả xuống), `JList` (danh sách chọn nhiều mục), `JPanel` (vùng chứa gom nhóm thành phần).
- **Quản lý bố cục (`LayoutManager`)**: dùng `setLayout(...)` với các trình bố trí có sẵn như `FlowLayout` (xếp theo dòng) hoặc `GridLayout` (xếp theo lưới hàng/cột) thay vì đặt tọa độ tuyệt đối cứng nhắc.
- **Quản lý sự kiện**: gắn bộ lắng nghe (listener) để phản hồi khi người dùng bấm nút hoặc nhập liệu.

## Cài đặt

```java
import java.awt.FlowLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class SimpleSwingDemo {
    public static void main(String[] args) {
        JFrame frame = new JFrame("THCS4 Swing");
        frame.setLayout(new FlowLayout());
        frame.add(new JLabel("Ho ten:"));
        frame.add(new JTextField(12));
        frame.add(new JButton("Gui"));
        frame.setSize(320, 120);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```

## Lỗi thường gặp

- Tạo các thành phần và `add(...)` vào `JFrame` nhưng quên gọi `frame.setVisible(true);`, khiến cửa sổ không hiện lên.
- Quên `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`, làm chương trình vẫn chạy ngầm sau khi đóng cửa sổ.

## Tự kiểm tra

1. Vì sao Swing thường được ưu tiên hơn AWT khi xây dựng giao diện đồ họa trong Java?

> **Đáp án**
> Vì Swing có hình thức và cách hoạt động độc lập với hệ điều hành nền, nhẹ và linh hoạt hơn so với AWT.
