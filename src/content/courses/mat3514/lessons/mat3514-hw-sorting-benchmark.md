# Bài tập: đánh giá thực nghiệm các thuật toán sắp xếp

## Đề bài

Phiếu bài tập 2 (Assignment 2, chủ đề Sorting). Mục tiêu: hiểu nguyên lý của sắp xếp nổi bọt, chọn, chèn, trộn, nhanh; hiểu mã giả và cài đặt mã nguồn; chọn được thuật toán thích hợp để giải một bài toán.

**Bài tập 1.** Viết chương trình đánh giá các thuật toán sắp xếp.

1. Với dãy số nguyên kích thước nhỏ nhập từ bàn phím.
2. Sinh $N$ số ngẫu nhiên có giá trị trong $[1, 10^6]$.
3. Triển khai sắp xếp nổi bọt, sắp xếp chọn, sắp xếp chèn, sắp xếp trộn và sắp xếp nhanh trên các dãy ở hai ý trên.
4. In ra trạng thái của dãy sau mỗi vòng lặp để thấy sự thay đổi. Đếm số lần so sánh và số lần đổi chỗ.
5. Đo thời gian thực thi của mỗi thuật toán với $N = 100, 1000, 10000$ và $100000$. Từ đó nhận xét và kết luận về việc chọn thuật toán thích hợp với từng giá trị $N$ cụ thể và với miền giá trị của dữ liệu.

**Bài tập 2.** Làm lại Bài tập 1 với dữ liệu tổng quát, để sắp được mọi dãy đối tượng $T$ có giao diện `Comparable<T>`.

**Bài tập 3 (\*, tùy chọn, làm giao diện và trình bày ở buổi thực hành sau).**

1. Tạo đối tượng `Card` (quân bài) gồm hai thuộc tính `rank` và `suit`. Tạo bộ bài 52 quân.
2. Tạo đối tượng `compareCard` cài `Comparator<Card>` để so sánh hai quân bài. Dùng `Arrays.sort(T[] a, Comparator<? super T> c)` để sắp bộ bài.
3. Cài `Comparable` cho `Card`, dùng các phương thức sắp xếp của Bài tập 2 để sắp bộ bài.
4. Dùng `Random` tạo dãy $N$ số nguyên ngẫu nhiên, mỗi số $\le M$ và đôi một khác nhau ($N < M$). Tạo bộ 52 quân bài rồi trộn bộ bài.

**Bài tập thêm.** Tự chọn 3 bài trong bài 41 đến 51 của một danh sách bài tập trực tuyến về cấu trúc dữ liệu và giải thuật, và 2 bài trong các bài 5 đến 9: sắp không giảm/không tăng; số bé/lớn thứ $k$ (phần tử thứ $k$ sau khi sắp); đếm cặp đôi ([Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs)); sắp các chữ số trong xâu (gợi ý: miền giá trị nhỏ nên đếm tần suất rồi điền lại); vị trí mới của $a[i]$ sau khi sắp (gợi ý: sắp mảng bản ghi gồm giá trị và chỉ số gốc).

**Nộp bài:** trong package `Hw2_<idSinhvien>_<Hovaten>`, nộp file nén `.zip` của package và tất cả file nguồn `.java`.

## Kiến thức cần ôn

- [Bài toán sắp xếp](#/courses/mat3514/lessons/mat3514-sorting-problem): định nghĩa đầu vào/đầu ra để viết kiểm tra "đã sắp và là hoán vị".
- [Sắp xếp nổi bọt (Bubble Sort)](#/courses/mat3514/lessons/mat3514-bubble-sort), [Sắp xếp chọn (Selection Sort)](#/courses/mat3514/lessons/mat3514-selection-sort), [Sắp xếp chèn (Insertion Sort)](#/courses/mat3514/lessons/mat3514-insertion-sort): ba thuật toán $O(n^2)$, cách đếm so sánh/đổi chỗ trong từng vòng lặp (ý 4).
- [Sắp xếp trộn (Merge Sort)](#/courses/mat3514/lessons/mat3514-merge-sort), [Sắp xếp nhanh (Quick Sort)](#/courses/mat3514/lessons/mat3514-quick-sort): hai thuật toán $O(n \log n)$ đệ quy; ý 4 cần quyết định in trạng thái ở mức đệ quy nào.
- [Ký hiệu O lớn](#/courses/mat3514/lessons/mat3514-big-o) và [Trường hợp tốt nhất, xấu nhất, trung bình](#/courses/mat3514/lessons/mat3514-best-worst-average): để giải thích số đo ở ý 5.
- [Sắp xếp tổng quát với <T extends Comparable<? super T>>](#/courses/mat3514/lessons/mat3514-generic-bubble-sort), [Giao diện Comparable<T>](#/courses/mat3514/lessons/mat3514-comparable-interface) và [Lập trình tổng quát (Generics)](#/courses/mat3514/lessons/mat3514-java-generics): Bài tập 2 và Bài tập 3.
- [Xáo trộn ngẫu nhiên (Shuffle)](#/courses/mat3514/lessons/mat3514-shuffle-sort): trộn bộ bài ở Bài tập 3d.
- [Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties): nhận xét thêm về ổn định và bộ nhớ khi chọn thuật toán.

## Hướng tiếp cận

1. **Chuẩn hóa giao diện.** Mỗi thuật toán là một hàm nhận mảng và một đối tượng đếm (`comparisons`, `swaps`). Mọi phép so sánh phần tử qua một hàm duy nhất `less/greater` để đếm; mọi lần hoán đổi/ghi qua hàm `swap` hoặc tăng bộ đếm tương ứng.
2. **Thống nhất cách đếm.** Với Insertion Sort, mỗi lần dịch một phần tử tính như một lần "đổi chỗ" (ghi). Với Merge Sort, tính mỗi lần chép phần tử vào mảng tạm là một phép ghi. Hãy ghi rõ quy ước trong báo cáo để các con số so sánh được.
3. **In trạng thái.** Chỉ in khi $N$ nhỏ (ví dụ $N \le 20$): in sau mỗi lượt của vòng ngoài (bubble, selection, insertion) và sau mỗi phép phân hoạch hoặc trộn (quick, merge). Tắt khi đo thời gian.
4. **Đo thời gian.** Dùng `System.nanoTime()`, đo trên *bản sao* của cùng một mảng ngẫu nhiên cho mỗi thuật toán để công bằng, và lặp vài lần (có khởi động JIT) rồi lấy trung bình hoặc nhỏ nhất. Với $N = 10^5$, các thuật toán $O(n^2)$ cỡ $10^{10}$ thao tác nên có thể mất vài chục giây.
5. **Nhận xét.** So sánh bảng thời gian với kỳ vọng: khi $N$ tăng 10 lần, thuật toán $O(n^2)$ chậm đi khoảng 100 lần, $O(n \log n)$ khoảng 10 đến 13 lần. Xét thêm dữ liệu đã sắp và sắp ngược, và miền giá trị nhỏ (nhiều phần tử trùng).
6. **Tổng quát hóa.** Đổi `int[]` thành `T[]` với `<T extends Comparable<? super T>>`, thay `a[i] > a[j]` bằng `a[i].compareTo(a[j]) > 0`.

## Gợi ý theo bậc

::: Gợi ý 1 (khung chương trình)
Viết lớp `SortStats { long comparisons, swaps; }`, năm hàm sắp xếp nhận thêm `SortStats`, một hàm `isSortedPermutation(original, result)` để kiểm tra đúng, và hàm `main` có hai chế độ: nhập tay và sinh ngẫu nhiên.
:::

::: Gợi ý 2 (đếm trong thuật toán đệ quy)
Với Quick Sort và Merge Sort dùng cùng một đối tượng `SortStats` được truyền qua đệ quy; không dùng biến cục bộ vì mỗi lời gọi sẽ có bản riêng.
:::

::: Gợi ý 3 (đo thời gian)
Sao mảng bằng `clone()` trước mỗi lần đo; chạy một lần "khởi động" không tính. Với $N = 10^5$ hãy cân nhắc bỏ Bubble/Selection/Insertion khỏi bảng nếu chạy quá lâu và ghi chú lý do.
:::

::: Gợi ý 4 (Card)
Cho `rank` từ 2 đến 14 (A = 14) và `suit` là enum; `compareTo` so sánh `rank` rồi mới `suit`. Dùng `Comparator.comparing(...)` hoặc cài tay `compare(Card a, Card b)` cho Bài 3b.
:::

## Lời giải tham khảo

::: Lời giải Bài tập 1 (khung và ba thuật toán $O(n^2)$)
```java
import java.util.Arrays;

public class SortBenchmark {
    static class SortStats {
        long comparisons, swaps;
    }

    static void bubbleSort(int[] a, SortStats s, boolean trace) {
        for (int i = 0; i < a.length - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < a.length - 1 - i; j++) {
                s.comparisons++;
                if (a[j] > a[j + 1]) {
                    int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
                    s.swaps++;
                    swapped = true;
                }
            }
            if (trace) System.out.println("Luot " + i + ": " + Arrays.toString(a));
            if (!swapped) break;
        }
    }

    static void selectionSort(int[] a, SortStats s, boolean trace) {
        for (int i = 0; i < a.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < a.length; j++) {
                s.comparisons++;
                if (a[j] < a[min]) min = j;
            }
            if (min != i) {
                int t = a[i]; a[i] = a[min]; a[min] = t;
                s.swaps++;
            }
            if (trace) System.out.println("Luot " + i + ": " + Arrays.toString(a));
        }
    }

    static void insertionSort(int[] a, SortStats s, boolean trace) {
        for (int i = 1; i < a.length; i++) {
            int key = a[i];
            int j = i - 1;
            while (j >= 0) {
                s.comparisons++;
                if (a[j] <= key) break;
                a[j + 1] = a[j];
                s.swaps++;               // moi lan dich tinh la mot lan ghi
                j--;
            }
            a[j + 1] = key;
            if (trace) System.out.println("Luot " + i + ": " + Arrays.toString(a));
        }
    }
```
:::

::: Lời giải Bài tập 1 (Merge Sort và Quick Sort)
```java
    static void mergeSort(int[] a, int low, int high, SortStats s) {
        if (low >= high) return;
        int mid = low + (high - low) / 2;
        mergeSort(a, low, mid, s);
        mergeSort(a, mid + 1, high, s);
        int[] b = new int[high - low + 1];
        int i = low, j = mid + 1, k = 0;
        while (i <= mid && j <= high) {
            s.comparisons++;
            if (a[i] <= a[j]) b[k++] = a[i++];
            else b[k++] = a[j++];
        }
        while (i <= mid) b[k++] = a[i++];
        while (j <= high) b[k++] = a[j++];
        for (k = 0; k < b.length; k++) a[low + k] = b[k];
        s.swaps += b.length;             // so phan tu duoc ghi lai
    }

    static void quickSort(int[] a, int low, int high, SortStats s) {
        if (low >= high) return;
        int pivot = a[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            s.comparisons++;
            if (a[j] <= pivot) {
                i++;
                int t = a[i]; a[i] = a[j]; a[j] = t;
                s.swaps++;
            }
        }
        int t = a[i + 1]; a[i + 1] = a[high]; a[high] = t;
        s.swaps++;
        quickSort(a, low, i, s);
        quickSort(a, i + 2, high, s);
    }

    static boolean isSortedPermutation(int[] original, int[] result) {
        int[] expected = original.clone();
        Arrays.sort(expected);
        return Arrays.equals(expected, result);
    }

    public static void main(String[] args) {
        java.util.Random rnd = new java.util.Random(42);
        int[] sizes = {100, 1000, 10000, 100000};
        for (int n : sizes) {
            int[] data = new int[n];
            for (int i = 0; i < n; i++) data[i] = 1 + rnd.nextInt(1_000_000);

            int[] c = data.clone();
            SortStats st = new SortStats();
            long t0 = System.nanoTime();
            quickSort(c, 0, c.length - 1, st);
            long ms = (System.nanoTime() - t0) / 1_000_000;
            System.out.println("N=" + n + " quick: " + ms + " ms, cmp=" + st.comparisons
                + ", swap=" + st.swaps + ", ok=" + isSortedPermutation(data, c));
            // lap lai cho cac thuat toan khac, moi lan tren data.clone()
        }
    }
}
```

Nhận xét kỳ vọng: với $N = 100$ cả năm thuật toán gần như tức thì và khác biệt không đáng kể. Từ $N = 10^4$ trở đi ba thuật toán $O(n^2)$ chậm hẳn so với Merge/Quick Sort; ở $N = 10^5$ chênh lệch cỡ hàng trăm lần. Trong ba thuật toán đơn giản, Insertion Sort thường nhanh nhất trên dữ liệu ngẫu nhiên và gần sắp, Selection Sort có ít lần đổi chỗ nhất, Bubble Sort thường chậm nhất. Quick Sort thường thắng Merge Sort về thời gian nhờ không cần mảng phụ, còn Merge Sort có thời gian đều. Khi miền giá trị nhỏ (ví dụ chữ số $0 \dots 9$) thì sắp đếm tần suất đạt $O(n)$ như gợi ý Bài tập 8; khi dữ liệu đã sắp, Insertion Sort và Bubble Sort dừng sớm đạt $O(n)$ còn Quick Sort chốt cuối rơi vào $O(n^2)$.
:::

::: Lời giải Bài tập 2 (dữ liệu tổng quát)
```java
public static <T extends Comparable<? super T>> void insertionSort(T[] a) {
    for (int i = 1; i < a.length; i++) {
        T key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j].compareTo(key) > 0) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}
```
Làm tương tự cho bốn thuật toán còn lại: thay mọi phép so sánh `x > y` bằng `x.compareTo(y) > 0`, thay `int` của phần tử bằng `T`; mảng tạm của Merge Sort cần tạo bằng `Arrays.copyOfRange(a, low, high + 1)` vì không tạo được `new T[]`.
:::

::: Lời giải Bài tập 3 (Card)
```java
enum Suit { CLUBS, DIAMONDS, HEARTS, SPADES }

class Card implements Comparable<Card> {
    final int rank;    // 2..14, A = 14
    final Suit suit;
    Card(int rank, Suit suit) { this.rank = rank; this.suit = suit; }
    public int compareTo(Card o) {
        if (rank != o.rank) return Integer.compare(rank, o.rank);
        return suit.compareTo(o.suit);
    }
    public String toString() { return rank + "-" + suit; }
}

class CompareCard implements java.util.Comparator<Card> {
    public int compare(Card a, Card b) { return a.compareTo(b); }
}
```
Bộ bài: hai vòng lặp qua 4 chất và 13 hạng. Trộn bằng Fisher-Yates trong [Xáo trộn ngẫu nhiên (Shuffle)](#/courses/mat3514/lessons/mat3514-shuffle-sort). `Arrays.sort(deck, new CompareCard())` sắp bằng bộ so sánh ngoài; `insertionSort(deck)` hoặc `mergeSort` tổng quát sắp bằng `Comparable`. Với Bài 3d, tạo $N$ số khác nhau bằng cách trộn $1 \dots M$ rồi lấy $N$ phần tử đầu.
:::

## Kiểm tra lời giải

Với mọi thuật toán, kết quả phải bằng `Arrays.sort` và là hoán vị của đầu vào. Số đếm mong đợi (theo quy ước đã nêu):

| Đầu vào | Bubble (cmp, swap) | Selection (cmp, swap) | Insertion (cmp, dịch) |
|---|---|---|---|
| `[]` hoặc `[7]` | 0, 0 | 0, 0 | 0, 0 |
| `[1, 2, 3]` (đã sắp) | 2, 0 | 3, 0 | 2, 0 |
| `[3, 2, 1]` (ngược) | 3, 3 | 3, 1 | 3, 3 |
| `[3, 1, 2]` | 3, 2 | 3, 2 | 3, 2 |
| `[5, 5, 5]` (trùng) | 2, 0 | 3, 0 | 2, 0 |

Kiểm tra thêm: mảng đã sắp cho Quick Sort chốt cuối với $N = 5000$ (xem thời gian và độ sâu đệ quy); mảng toàn giá trị bằng nhau; $N = 1$ và $N = 2$; so sánh thứ tự ổn định bằng bản ghi có khóa trùng ([Sắp xếp tại chỗ và sắp xếp ổn định](#/courses/mat3514/lessons/mat3514-sort-properties)).

## Sau bài này

Làm [Bài tập: đếm cặp a_i + a_j = x](#/courses/mat3514/lessons/mat3514-ex-count-pairs) để thấy sắp xếp làm tiền xử lý cho tìm kiếm nhị phân. Sau đó học [Sắp xếp vun đống (Heap Sort)](#/courses/mat3514/lessons/mat3514-heap-sort) (sắp xếp $O(n \log n)$ thứ ba, tại chỗ) và [Cận dưới của sắp xếp dựa trên so sánh](#/courses/mat3514/lessons/mat3514-comparison-sort-lower-bound) để hiểu vì sao $n \log n$ là giới hạn của sắp xếp so sánh.
