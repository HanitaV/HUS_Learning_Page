# Bài tập: BST và so sánh các cách tìm kiếm

Bài tập tuần 7 (môn Cấu trúc dữ liệu và giải thuật, HUS, học kỳ I 2023-2024) gồm hai nửa: cài đặt các thuật toán tìm kiếm trên danh sách và BST rồi so sánh tốc độ, sau đó mở rộng sang cây cân bằng và một ứng dụng. Bài này tóm lại đề, chỉ ra kiến thức cần ôn và đưa lời giải cho phần cốt lõi (Bài 2).

## Đề bài

**Quy cách chung.** Mỗi sinh viên nộp bài trong package `Hw7_<idSinhvien>_<Hovaten>`, gồm file nén .zip của thư mục package và mọi file nguồn `*.java`. Trong bài nộp có file .doc hoặc .txt thuyết minh gói bài tập đã chọn và những nội dung cần giải thích: thuật toán chọn, tài liệu tham khảo, định dạng input, yêu cầu hệ thống. Gian lận bị đình chỉ môn học.

**Chọn gói bài tập.**

- Combo 1 (80 điểm): Bài 1, Bài 2 và tự chọn 4 bài trong phần Bài tập thêm (Cơ bản).
- Combo 2 (90 điểm): Bài 1, 2, 3 và tự chọn 2 bài trong Bài tập thêm (Nâng cao 1).
- Combo 3 (100 điểm): Bài 2, 3, 4 và tự chọn 2 bài trong Bài tập thêm (Nâng cao 2).

**Bài tập chính.**

1. Bài 1. Thực hiện lại các thuật toán tìm kiếm trên danh sách cài đặt bằng mảng và bằng cấu trúc liên kết, có sắp xếp và không sắp xếp, dùng lại giao diện và kiểu dữ liệu từ Homework 3.
2. Bài 2. Xây dựng cây nhị phân tìm kiếm với khóa nguyên và các phương thức `FindMin()`, `Search(x, T)`, `Insert(x, T)`, `Delete(x, T)`, dùng kiểu Binary Tree liên kết đã làm ở Homework 5. So sánh thời gian chạy của tìm kiếm tuần tự, tìm kiếm nhị phân và tìm kiếm trên BST với tập số nguyên lớn ($10^6$, $10^7$, $10^8$ phần tử).
3. Bài 3. Xây dựng cây cân bằng dựa trên BST ở Bài 2, mở rộng bằng các hàm quay (Rotation).
4. Bài 4. Triển khai một ứng dụng của BST. Gợi ý: line segment intersection; range search in 2-d trees; nearest neighbor search in a 2d tree; rectangle intersection.

**Bài tập thêm (luyện tập).**

5. Kiểm tra một dãy có là duyệt giữa của một BST không.
6. Kiểm tra một cây nhị phân có là BST không.
7. Tìm median của BST.
8. Đếm các giá trị của cây nằm trong khoảng cho trước (duyệt cây, kiểm tra nút có nằm trong đoạn).
9. Tìm phần tử nhỏ thứ $k$ trong BST (duyệt giữa, lấy phần tử thứ $k$).
10. Tìm phần tử lớn thứ $k$ (duyệt giữa, lấy phần tử thứ $k$ từ phải sang).
11. Tìm phần tử nhỏ nhất của BST.
12. Tìm phần tử liền sau (inorder successor) của một nút.
13. Tìm phần tử liền trước và liền sau của một khóa cho trước.
14. Tìm phần tử lớn nhất không vượt quá $N$.
15. Tìm số nhỏ nhất có giá trị lớn hơn hoặc bằng một giá trị cho trước (ceil).
16. Biến đổi một cây nhị phân thành BST.
17. Dựng BST từ dãy duyệt sau (postorder).

(Đề gốc đánh số các mục bài tập thêm là Luyện tập 1 đến 13; ở đây số thứ tự liên tục chỉ để tiện tham chiếu.)

## Kiến thức cần ôn

- [Tìm kiếm tuần tự](#/courses/mat3514/lessons/mat3514-sequential-search) và [Tìm kiếm nhị phân](#/courses/mat3514/lessons/mat3514-binary-search): Bài 1 và so sánh tốc độ ở Bài 2.
- [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property): định nghĩa BST và duyệt giữa cho dãy tăng, cần cho các bài kiểm tra BST và bài thứ $k$.
- [Các thao tác trên BST](#/courses/mat3514/lessons/mat3514-bst-operations): `FindMin`, `Search`, `Insert`, `Delete` ở Bài 2.
- [Duyệt cây nhị phân: trước, giữa, sau](#/courses/mat3514/lessons/mat3514-tree-traversal) và [Biểu diễn cây nhị phân: liên kết và mảng](#/courses/mat3514/lessons/mat3514-binary-tree-repr): duyệt giữa, sau và biểu diễn liên kết nút cây.
- [Cây suy biến và phép quay cân bằng](#/courses/mat3514/lessons/mat3514-bst-balance): các hàm quay ở Bài 3.
- [Ứng dụng hình học của BST](#/courses/mat3514/lessons/mat3514-bst-geometric-apps): ý tưởng cho Bài 4.
- [Danh sách cài đặt bằng mảng](#/courses/mat3514/lessons/mat3514-array-list) và [Danh sách liên kết đơn](#/courses/mat3514/lessons/mat3514-linked-list): các danh sách ở Bài 1.

## Hướng tiếp cận

**Bài 2.** Tách bốn thao tác thành các phương thức độc lập trên lớp nút cây nguyên. Với `Delete`, xử lý ba trường hợp: lá, một con, hai con (thay bằng min cây con phải). Để so sánh thời gian, sinh $n$ số nguyên khác nhau ngẫu nhiên, đo từng thuật toán trên cùng dữ liệu và cùng tập khóa tìm. Cần lưu ý bốn điểm: tìm tuần tự chạy trên mảng bất kỳ, tìm nhị phân cần mảng đã sắp xếp (đo riêng thời gian sắp xếp hoặc nói rõ là chưa tính), BST cần thời gian xây cây, và dữ liệu ngẫu nhiên khiến chiều cao BST cỡ $\log n$ còn dữ liệu đã sắp xếp thì không.

**Bài 3.** Thêm `rotateLeft`, `rotateRight` trả về gốc mới; chọn một tiêu chí cân bằng (ví dụ chênh lệch chiều cao hai con không quá 1, kiểu AVL) và gọi quay sau mỗi lần chèn.

**Bài 4.** Chọn một ứng dụng; đơn giản nhất là tìm khoảng 1 chiều hay 2-d range search.

**Các bài thêm.** Hầu hết dùng duyệt giữa hoặc đường đi từ gốc xuống.

## Gợi ý theo bậc

::: Gợi ý 1 (Bài 2, cài đặt)
Dùng hàm đệ quy trả về gốc cây con, giống `t.left = insert(x, t.left)`. Cách này tránh phải tách trường hợp cây rỗng.
:::

::: Gợi ý 2 (Bài 2, Delete)
Khi nút có hai con, đừng bỏ nút. Gán `t.item = findMin(t.right).item` rồi gọi `delete(t.item, t.right)`.
:::

::: Gợi ý 3 (Bài 2, đo thời gian)
Dùng `System.nanoTime()`. Với $n = 10^8$ int mảng chiếm khoảng 400 MB, cây liên kết nhiều hơn nữa vì mỗi nút có hai con trỏ, nên dễ hết bộ nhớ; hãy tăng heap (`-Xmx`) hoặc ghi rõ giới hạn trong bản thuyết minh.
:::

::: Gợi ý 4 (Bài 3)
Quay phải tại $x$: `l = x.left; x.left = l.right; l.right = x; return l`. Quay trái đối xứng.
:::

::: Gợi ý 5 (bài thêm kiểm tra BST)
Truyền khoảng $(lo, hi)$ xuống cây con, hoặc duyệt giữa và kiểm tra dãy tăng thực sự.
:::

::: Gợi ý 6 (bài thêm thứ k, liền sau)
Thứ $k$: duyệt giữa và đếm. Liền sau của khóa $x$: đi từ gốc, nếu `t.item > x` thì ghi nhận `t.item` làm ứng viên và đi trái, ngược lại đi phải.
:::

## Lời giải tham khảo

::: Lời giải Bài 2 (BST và đo thời gian)
```java
import java.util.Arrays;
import java.util.Random;

public class Hw7Bst {
    static class Node {
        int item;
        Node left, right;
        Node(int item) { this.item = item; }
    }

    static Node findMin(Node t) {
        if (t == null) return null;
        while (t.left != null) t = t.left;
        return t;
    }

    static Node search(int x, Node t) {
        while (t != null) {
            if (x == t.item) return t;
            t = (x < t.item) ? t.left : t.right;
        }
        return null;
    }

    static Node insert(int x, Node t) {
        if (t == null) return new Node(x);
        // dùng đệ quy; với n lớn và dữ liệu đã sắp xếp có thể tràn ngăn xếp
        if (x < t.item) t.left = insert(x, t.left);
        else if (x > t.item) t.right = insert(x, t.right);
        return t;
    }

    static Node delete(int x, Node t) {
        if (t == null) return null;
        if (x < t.item) t.left = delete(x, t.left);
        else if (x > t.item) t.right = delete(x, t.right);
        else {
            if (t.left == null) return t.right;
            if (t.right == null) return t.left;
            t.item = findMin(t.right).item;
            t.right = delete(t.item, t.right);
        }
        return t;
    }

    static int sequentialSearch(int[] a, int x) {
        for (int i = 0; i < a.length; i++) if (a[i] == x) return i;
        return -1;
    }

    static int binarySearch(int[] a, int x) {   // a đã sắp xếp
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) >>> 1;
            if (a[mid] == x) return mid;
            if (a[mid] < x) lo = mid + 1; else hi = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int n = 1_000_000;
        Random rnd = new Random(1);
        int[] a = new int[n];
        Node root = null;
        for (int i = 0; i < n; i++) {
            a[i] = rnd.nextInt();
            root = insert(a[i], root);
        }
        int[] sorted = a.clone();
        Arrays.sort(sorted);
        int[] queries = new int[1000];
        for (int i = 0; i < queries.length; i++) queries[i] = a[rnd.nextInt(n)];

        long t0 = System.nanoTime();
        for (int q : queries) sequentialSearch(a, q);
        long t1 = System.nanoTime();
        for (int q : queries) binarySearch(sorted, q);
        long t2 = System.nanoTime();
        for (int q : queries) search(q, root);
        long t3 = System.nanoTime();
        System.out.println("tuan tu : " + (t1 - t0) / 1_000_000 + " ms");
        System.out.println("nhi phan: " + (t2 - t1) / 1_000_000 + " ms");
        System.out.println("BST     : " + (t3 - t2) / 1_000_000 + " ms");
    }
}
```
Kết quả điển hình với dữ liệu ngẫu nhiên: tìm tuần tự tốn $\Theta(n)$ mỗi truy vấn nên chậm nhất theo cấp độ; tìm nhị phân và BST cỡ $\log n$ mỗi truy vấn. BST thường chậm hơn nhị phân trên mảng một hằng số vì truy cập con trỏ kém thân thiện với bộ nhớ đệm. Số liệu cụ thể phụ thuộc máy, hãy tự đo và ghi vào bản thuyết minh. Khi chèn dữ liệu đã sắp xếp, BST suy biến và đệ quy tràn ngăn xếp ở $n$ lớn.
:::

::: Lời giải Bài 3 (hàm quay)
```java
static Node rotateRight(Node x) {
    Node l = x.left;
    if (l == null) return x;
    x.left = l.right;
    l.right = x;
    return l;
}

static Node rotateLeft(Node x) {
    Node r = x.right;
    if (r == null) return x;
    x.right = r.left;
    r.left = x;
    return r;
}

static int height(Node t) {
    return t == null ? -1 : 1 + Math.max(height(t.left), height(t.right));
}

// Chèn kiểu AVL: sau khi chèn, cân bằng lại trên đường quay về
static Node insertBalanced(int x, Node t) {
    if (t == null) return new Node(x);
    if (x < t.item) t.left = insertBalanced(x, t.left);
    else if (x > t.item) t.right = insertBalanced(x, t.right);
    else return t;
    int bal = height(t.left) - height(t.right);
    if (bal > 1) {                                   // lệch trái
        if (height(t.left.left) < height(t.left.right))
            t.left = rotateLeft(t.left);             // trường hợp trái-phải
        return rotateRight(t);
    }
    if (bal < -1) {                                  // lệch phải
        if (height(t.right.right) < height(t.right.left))
            t.right = rotateRight(t.right);          // trường hợp phải-trái
        return rotateLeft(t);
    }
    return t;
}
```
Hàm `height` ở trên tính lại chiều cao nên mỗi lần chèn tốn $O(n)$; muốn đúng $O(\log n)$ hãy lưu chiều cao trong từng nút và cập nhật sau khi quay.
:::

::: Lời giải gợi ý một số bài thêm
Kiểm tra BST: dùng `isBST(t, lo, hi)` trong [Cây nhị phân tìm kiếm (BST)](#/courses/mat3514/lessons/mat3514-bst-property).

Đếm khóa trong khoảng: dùng `rangeCount` trong [Ứng dụng hình học của BST](#/courses/mat3514/lessons/mat3514-bst-geometric-apps).

Phần tử nhỏ thứ $k$: duyệt giữa và đếm.
```java
static int counter = 0, answer = Integer.MIN_VALUE;
static void kth(Node t, int k) {
    if (t == null || counter >= k) return;
    kth(t.left, k);
    if (++counter == k) { answer = t.item; return; }
    kth(t.right, k);
}
```
Ceil: đi từ gốc, nếu `t.item == x` trả về x; nếu `t.item < x` đi phải; nếu `t.item > x` ghi nhận `t.item` rồi đi trái; ứng viên ghi nhận cuối cùng là đáp án.
:::

## Kiểm tra lời giải

| Trường hợp | Kết quả mong đợi |
|---|---|
| Chèn 5, 3, 8, 1, 4, 7, 9 rồi duyệt giữa | 1, 3, 4, 5, 7, 8, 9 |
| `findMin` trên cây trên | 1 |
| `search(6)` trên cây trên | null |
| `delete(5)` (gốc, hai con) | gốc thành 7; duyệt giữa 1, 3, 4, 7, 8, 9 |
| `delete(1)` rồi `delete(4)` (lá) | duyệt giữa vẫn tăng dần |
| Cây rỗng: `findMin`, `search`, `delete` | null, null, null, không lỗi |
| Chèn 1, 2, ..., 1000 | `height` = 999 (BST thường); sau khi dùng chèn cân bằng, `height` cỡ 10 |
| Chèn khóa trùng | cây không đổi |
| `rotateRight` rồi `rotateLeft` tại cùng nút | cây trở về hình dạng cũ |

Sau mọi thao tác, duyệt giữa phải cho dãy tăng thực sự; đó là phép kiểm tra tổng quát nhất.

## Sau bài này

Nếu muốn thao tác tra cứu nhanh hơn $O(\log n)$ trung bình khi không cần thứ tự, đọc tiếp [Bảng băm (tài liệu tham khảo)](#/courses/mat3514/lessons/mat3514-hash-table). Nếu muốn xem cây dùng cho một mục đích khác, xem [Đống nhị phân (Binary Heap)](#/courses/mat3514/lessons/mat3514-binary-heap) cho hàng đợi ưu tiên.
