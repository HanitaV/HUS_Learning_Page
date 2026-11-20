# Bài tập: Xử lý xâu và mật mã Vigenère

## Vì sao cần

Bài tập tổng hợp thao tác với `String`, `char`, vòng lặp và phương thức qua các yêu cầu xử lý văn bản thực tế: đảo ngược từng từ, tìm ký tự không lặp đầu tiên và cài đặt mật mã Vigenère.

## Ý tưởng

1. **Đảo ngược từng từ (`reverseString`)**: duyệt chuỗi, gom các ký tự không phải khoảng trắng thành từng từ rồi đảo ngược thứ tự ký tự trong từ đó, giữ nguyên khoảng trắng (ví dụ `"Hello World!"` $\to$ `"olleH !dlroW"`).
2. **Ký tự không lặp đầu tiên (`firstNonRepeatingCharacter`)**: duyệt từng vị trí $i$ và đếm số lần `text.charAt(i)` xuất hiện trong `text`; trả về chỉ số $i$ đầu tiên có số lần xuất hiện bằng $1$ (hoặc `-1` nếu không có).
3. **Mã hóa Vigenère (`encryptVigenere`)**: chuyển bản rõ `text` và khóa `key` về chữ hoa. Với mỗi ký tự chữ cái `A`–`Z` (quy ước `A = 0, ..., Z = 25`), mã hóa theo công thức:
   $$C_i = (P_i + K_j) \bmod 26$$
   rồi tăng $j = (j + 1) \bmod \text{key.length()}$. Ký tự không phải chữ cái giữ nguyên và không làm dịch $j$.

## Cài đặt

```java
public class StringAndCharacters {
    public static String encryptVigenere(String text, String key) {
        String upText = text.toUpperCase();
        String upKey = key.toUpperCase();
        StringBuilder res = new StringBuilder();
        int j = 0;
        for (int i = 0; i < upText.length(); i++) {
            char ch = upText.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                int p = ch - 'A';
                int k = upKey.charAt(j) - 'A';
                char c = (char) ('A' + (p + k) % 26);
                res.append(c);
                j = (j + 1) % upKey.length();
            } else {
                res.append(ch);
            }
        }
        return res.toString();
    }
}
```

## Lỗi thường gặp

- Tăng chỉ số `j` của khóa `key` ngay cả khi gặp khoảng trắng hoặc dấu câu trong bản rõ, làm lệch toàn bộ phần mã hóa phía sau.
- Quên chuyển ký tự về dạng in hoa trước khi trừ `'A'`, dẫn đến sai mã ASCII với chữ thường.
- Không xử lý trường hợp tất cả ký tự đều lặp lại trong `firstNonRepeatingCharacter`.

## Tự kiểm tra

1. Với bản rõ `"AB!"` và khóa `"BC"` (`B = 1`, `C = 2`), kết quả trả về của `encryptVigenere("AB!", "BC")` là gì?

> **Đáp án**
> `'A'` (0) + `'B'` (1) = `'B'`; `'B'` (1) + `'C'` (2) = `'D'`; `'!'` giữ nguyên. Kết quả là `"BD!"`.
