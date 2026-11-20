# Thiết kế Hệ thống Bài tập Bán Tự Luận & Biểu đồ Tương tác (Semi-Essay Studio)

- **Ngày:** 2026-11-20
- **Dự án:** HUS Learning Hub (VNU-HUS)
- **Hệ thống thị giác:** Atmospheric Observatory (`DESIGN.md`, `PRODUCT.md`)
- **Chế độ bề mặt (`impeccable`):** `Operate` + `Read` (tập trung thao tác giải bài chính xác, đối chiếu lý thuyết liền mạch, không phô diễn trang trí)
- **Trạng thái:** Đã chốt phạm vi Giai đoạn 1 (sẵn sàng lập kế hoạch triển khai)

---

## 1. Mục tiêu, Người học & Bài toán cần giải quyết (Impeccable Shape Brief)

### 1.1. Ngữ cảnh & Vấn đề hiện tại
Sinh viên ĐHKHTN (VNU-HUS) học các môn Khoa học Tự nhiên (Cơ – Nhiệt `PHY1159`, Hóa đại cương `CHE1080`, Giải tích, Xác suất – Thống kê, Cấu trúc dữ liệu & Giải thuật) thường gặp một khoảng trống lớn giữa **đọc lý thuyết** và **viết được bài thi tự luận**:
- Trắc nghiệm đơn lẻ chỉ kiểm tra kết quả cuối cùng, không rèn được quy trình tư duy (chọn hệ quy chiếu → vẽ sơ đồ lực → viết phương trình → giải & biện luận).
- Đọc lời giải mẫu thụ động tạo "ảo giác đã hiểu", nhưng khi tự làm lại quên điều kiện áp dụng công thức hoặc mắc các ngộ nhận kinh điển (ví dụ: vẽ thêm "lực đẩy theo chiều chuyển động" hoặc "lực hướng tâm" vào Free Body Diagram; nhầm chiều dòng nhiệt trên bản đồ phân bố nhiệt độ).
- Hiện tại trên ứng dụng, [LessonPage.tsx](../../../src/pages/LessonPage.tsx) đặt bài tập tách rời bên dưới bài học và [ExerciseFrame.tsx](../../../src/components/learning/ExerciseFrame.tsx) mới chấm `multiple-choice`, `multiple-answer`, `short-answer`.

### 1.2. Mục tiêu (Goals)
1. **Kết nối trực tiếp Lý thuyết ↔ Từng bước giải tự luận:** Tại mỗi bước giải, sinh viên thấy ngay *mục lý thuyết, công thức, ký hiệu và điều kiện áp dụng* liên quan ở cột tham chiếu mà không cần chuyển trang hay mất ngữ cảnh.
2. **Trải nghiệm "Bán tự luận" (Semi-Essay):** Chia một bài tự luận chuẩn thành chuỗi 3–5 bước lập luận chặt chẽ (dự đoán định tính → chọn mô hình/định luật → vẽ/thao tác biểu đồ → thiết lập phương trình/biểu thức → tính kết quả & đơn vị), chấm tự động 100% phía client không dùng `eval`.
3. **Biểu đồ tương tác chẩn đoán ngộ nhận:** Không chỉ báo "Đúng/Sai", hệ thống chỉ rõ *vì sao sai* (thiếu lực gì, thừa lực ảo nào, sai hướng bao nhiêu độ, vùng nhiệt/chiều truyền nhiệt nào trái nguyên lý).
4. **Tạo thành bài giải tự luận hoàn chỉnh sau khi làm xong:** Khi hoàn tất các bước, hệ thống ghép lại thành một "Bản trình bày tự luận chuẩn" (có ký hiệu toán học KaTeX và hình vẽ đã xác nhận) để sinh viên nhìn lại toàn bộ cấu trúc bài làm như trên giấy thi.
5. **Kiến trúc mở cho nhiều môn học:** Dùng chung một `SemiEssayEngine` + `DiagramSlot` cho toàn bộ HUS Learning Hub; `PHY1159` (Free Body Diagram + Bản đồ nhiệt / Nhiệt học) là học phần triển khai mẫu đầu tiên dựa trên nguồn MIT sẵn có trong `docs/VLDC-HUS/`.

### 1.3. Không làm & Phản mục tiêu (Non-goals & Anti-goals)
- **Không dùng AI/LLM chấm bài tự do hoặc `eval()`:** Toàn bộ chấm bài là thuật toán tất định (deterministic), thuần TypeScript trong `src/core/`, chạy offline/static trên GitHub Pages.
- **Không biến thành bảng vẽ tự do (freehand whiteboard) khó chấm:** Mọi tương tác biểu đồ (FBD, Heatmap) đều có ngữ nghĩa học thuật rõ ràng, thao tác được bằng cả chuột/cảm ứng **và** bàn phím.
- **Không mở modal chồng chéo để xem lý thuyết:** Theo nguyên tắc `Operate` của `impeccable`, ưu tiên bố cục 2 vùng song song (desktop) và ngăn kéo trượt/tab gắn sẵn (mobile) thay vì popup che mất đề bài.
- **Không bịa đề bài hoặc lời giải chưa kiểm chứng:** Nội dung mẫu cho `PHY1159` phải truy xuất nguồn rõ ràng (MIT `docs/VLDC-HUS/`), ghi đủ `provenance`.
- **Không rẽ nhánh theo tên môn trong component dùng chung:** Trang bài học và `SemiEssayStudio` tuyệt đối không viết `if (subject === 'physics')`; mọi biểu đồ đăng ký qua contract chuẩn.

---

## 2. Phân tích 3 phương án kiến trúc & Lựa chọn đề xuất

| Phương án | Mô tả | Ưu điểm | Nhược điểm / Đánh đổi |
| --- | --- | --- | --- |
| **Phương án A (Đề xuất): Typed Semi-Essay Step Engine + Lazy Diagram Slot Registry** | Mở rộng `ExerciseDefinition` thêm biến thể `kind: 'semi-essay'` gồm mảng `steps` (union typed: `choice-reasoning`, `equation-assemble`, `numeric-unit`, `diagram`). Logic chấm & chẩn đoán nằm thuần trong `src/core/learning/`. Các biểu đồ nặng (`FbdDiagram`, `HeatmapDiagram`) đăng ký lazy qua contract `DiagramModule` trong `src/modules/diagrams/`. | - Giữ trọn ranh giới `domain → core → infrastructure → components → modules` trong `AGENTS.md`.<br>- Tái sử dụng 100% khung studio cho Vật lý, Hóa học, Toán, KHMT.<br>- Bundle chính nhẹ; biểu đồ chỉ tải khi bài tập cần. | Cần thiết kế schema `Step` chặt chẽ ngay từ đầu để vừa đủ biểu đạt tự luận vừa dễ kiểm thử. |
| **Phương án B: Xây trang/tool riêng cho từng môn trong `src/modules/`** | Mỗi môn tự viết một component lớn trong `SubjectModule.tools` (ví dụ `PhysicsProblemTool`, `ChemistryGuidedTool`). | - Tự do tùy biến UI cho từng môn.<br>- Không cần sửa `ExerciseDefinition`. | - Nhân bản logic tiến trình, chấm điểm, lưu `ProgressState`, đồng bộ lý thuyết.<br>- Phá vỡ tính thống nhất UX giữa các môn và khó tích hợp vào `LessonPage`. |
| **Phương án C: Dùng thư viện vẽ/đồ thị đa năng nặng (Konva/D3/Plotly) + trình soạn thảo tự do** | Nhúng thư viện canvas lớn để vẽ mọi loại biểu đồ. | - Giàu hiệu ứng vẽ phức tạp. | - Tăng mạnh kích thước bundle static, khó đáp ứng WCAG keyboard accessibility và dark/light token của Atmospheric Observatory. |

**Quyết định:** Chọn **Phương án A**. Biểu đồ FBD và Heatmap dùng **SVG + HTML ngữ nghĩa thuần** (nhẹ, sắc nét ở mọi DPI, ăn thẳng CSS tokens `--hus-*`, hỗ trợ đầy đủ bàn phím và screen reader).

---

## 3. Luồng sư phạm "Bán tự luận" (5 chặng tư duy)

Thay vì nhảy thẳng vào công thức tính số, một bài `semi-essay` dẫn sinh viên qua đúng quy trình viết bài tự luận chuẩn (tối đa 3–5 bước tùy bài, không ép cứng đủ 5 nếu bài ngắn):

1. **Chặng 1 — Dự đoán & Đọc bản chất (`choice-reasoning`):**
   - Ví dụ (`PHY1159` Bài 3.1): *"Tạm bỏ qua ma sát. Hệ vật A–B trên mặt phẳng nghiêng sẽ chuyển động theo chiều nào?"*
   - Khác trắc nghiệm thường: Mỗi phương án đều có lời giải thích vật lý (`rationale`) xuất hiện ngay khi chọn sai hoặc đúng, giúp gỡ ngộ nhận trước khi tính toán.
2. **Chặng 2 — Chọn hệ quy chiếu / Mô hình / Định luật (`choice-reasoning` gắn neo Lý thuyết):**
   - Ví dụ: *"Nên giải bài này trong hệ quy chiếu nào?"* hoặc *"Quá trình truyền nhiệt này đang ở chế độ dừng hay không dừng?"*
   - Khi bước này kích hoạt, **cột Lý thuyết bên trái tự động làm nổi bật** thẻ định luật / điều kiện áp dụng tương ứng (ví dụ: *Định luật II Newton trong HQC quán tính*, *Định luật Fourier $\vec{q} = -k\nabla T$*).
3. **Chặng 3 — Mô hình hóa bằng Biểu đồ tương tác (`diagram`):**
   - **Free Body Diagram (`diagramKind: 'fbd'`):** Sinh viên chọn từng lực từ bảng lực (có cả lực nhiễu như $F_{\text{đ}}$, $F_{\text{ht}}$) đặt lên vật A, vật B và xoay đúng phương/chiều.
   - **Bản đồ nhiệt (`diagramKind: 'heatmap'`):** Sinh viên tương tác trên lưới/trường nhiệt độ 2D $T(x, y)$ (ví dụ: xác định vùng cân bằng nhiệt, vùng có gradient nhiệt độ $|\nabla T|$ lớn nhất, đặt vectơ chiều dòng nhiệt $\vec{q}$ từ nóng sang lạnh, hoặc đánh dấu các ô đẳng nhiệt).
4. **Chặng 4 — Chiếu trục & Biến đổi phương trình từng dòng (`axis-projection` & `equation-transform`):**
   - **Chiếu trục từ FBD (`axis-projection`):** Hiển thị thu nhỏ chính FBD vừa vẽ cạnh bảng chiếu 2 trục $Ox', Oy'$; sinh viên chọn dấu (`+`/`−`/`0`) và thành phần chiếu (`1`, `\sin\alpha`, `\cos\alpha`) cho từng lực $\to$ hệ thống tự ráp thành phương trình đại số KaTeX chuẩn.
   - **Xưởng biến đổi phương trình (`equation-transform` — cảm hứng từ Graspable Math + Andes):** Hiển thị hệ phương trình hiện tại `(1)`, `(2)` và thanh thao tác đại số chiến lược (`Thế biểu thức`, `Cộng vế (1)+(2)`, `Trừ vế (1)−(2)`, `Lập tỉ số (1)/(2)`, `Chia hai vế`, `Gom nhóm theo ẩn`). Chấm 100% tất định theo graph bước chuyển trạng thái (không dùng `eval`). Khi sinh viên chọn phép biến đổi đúng toán nhưng chưa khử được ẩn, hệ thống hiện kết quả trung gian kèm phản hồi sư phạm để sinh viên hoàn tác và chọn chiến lược tốt hơn. Hỗ trợ `fadeLevel: 0 | 1 | 2` để giảm dần gợi ý ở các bài nâng cao.
5. **Chặng 5 — Kiểm chứng biên (`limiting-check`), Kết quả số & Đơn vị (`numeric-unit`) + Tổng hợp Bài giải Tự luận:**
   - Mini-check 15 giây kiểu MIT 8.01 (kiểm tra thứ nguyên hoặc trường hợp biên như $\alpha \to 90^\circ, \mu \to 0$) trước khi thay số.
   - Nhập giá trị số (chấm theo sai số tương đối/tuyệt đối chuẩn vật lý, chấp nhận cả dấu phẩy `0,47` và dấu chấm `0.47` kiểu Việt Nam) kèm kiểm tra đơn vị (`m/s²`, `N`, `W/m²`, `K`).
   - Sau bước cuối, khối **"Bài giải tự luận hoàn chỉnh"** mở ra: ghép toàn bộ các quyết định đúng của sinh viên (Hệ quy chiếu → Sơ đồ lực/Bản đồ nhiệt đã vẽ → Hệ phương trình & biến đổi → Kết quả) thành một trang lời giải mạch lạc như bài thi điểm tối đa, kèm liên kết về đúng mục lý thuyết tương ứng.

---

## 4. Thiết kế UX/UI & Bố cục 2 vùng (Impeccable Operate + Read)

### 4.1. Bố cục Desktop (`≥ 1024px`) — Split Studio (42% Trái / 58% Phải)

```text
+---------------------------------------------------------------------------------------------------+
|  [← Quay lại bài học: Định luật Newton]    Bài 3.1: Hệ vật trên mặt phẳng nghiêng    [Bước 3/5]  |
+-----------------------------------------+---------------------------------------------------------+
| CỘT TRÁI: ĐỀ BÀI & LÝ THUYẾT (sticky)  | CỘT PHẢI: KHÔNG GIAN GIẢI BÁN TỰ LUẬN                   |
| (42% chiều rộng, cuộn độc lập)          | (58% chiều rộng, cuộn theo tiến trình)                  |
|                                         |                                                         |
| [Tab: Đề bài & Dữ kiện] [Lý thuyết (3)] |  ● Bước 1: Dự đoán chiều chuyển động      [✓ Đã xong]   |
| --------------------------------------- |    └ Tóm tắt: A lên dốc, B xuống vì m2g > m1g sin α     |
| ĐỀ BÀI                                  |                                                         |
| Một vật A khối lượng m1 = 3 kg nằm trên |  ● Bước 2: Chọn hệ quy chiếu              [✓ Đã xong]   |
| mặt phẳng nghiêng góc α = 30°...        |    └ Tóm tắt: HQC gắn với mặt đất (quán tính)           |
|                                         |                                                         |
| DỮ KIỆN ĐÃ CHO (bảng gọn tabular-nums)  |  ◉ Bước 3: Vẽ sơ đồ lực (Free Body Diagram)   [Đang làm]|
| m1 = 3 kg | m2 = 2 kg | α = 30° | μ=0.1 |  +---------------------------------------------------+  |
|                                         |  |  [Vật A (mặt nghiêng 30°)]   [Vật B (treo dây)]   |  |
| --------------------------------------- |  |                                                   |  |
| LÝ THUYẾT GẮN VỚI BƯỚC 3  (tự đồng bộ)  |  |        ( Khung SVG tương tác FBD )              |  |
| ┌─────────────────────────────────────┐ |  |     • Kéo mũi tên xoay theo nấc 5°                |  |
| │ Định luật II & Phân tích lực        │ |  |     • Phím ← / → chỉnh góc, Delete để xóa         |  |
| │ ∑F = ma                             │ |  |                                                   |  |
| │ • Chỉ vẽ lực THẬT tác dụng LÊN vật  │ |  |  Thêm lực: [P] [N] [T] [Fms] [Fđ] [Fqt]           |  |
| │ • Fms ngược chiều trượt tương đối   │ |  |  Lực đang chọn: Fms — 210°  [-15°][-5°][+5°][+15°] |  |
| │ [Mở đoạn này trong bài học ↗]       │ |  +---------------------------------------------------+  |
| └─────────────────────────────────────┘ |                                                         |
|                                         |  [Kiểm tra bước 3]   [Gợi ý (0/2)]   [Làm lại bước]     |
|                                         |                                                         |
|                                         |  ⚠ Chẩn đoán:                                           |
|                                         |  • Đúng: Trọng lực P (270°), Phản lực N (120°).         |
|                                         |  • Sai hướng: Fms hiện ở 30° — vật A đang trượt LÊN     |
|                                         |    dốc nên ma sát phải hướng XUỐNG dốc (210°).          |
|                                         |  • Thừa: Không có "lực đẩy Fđ" trong HQC mặt đất.       |
|                                         |                                                         |
|                                         |  ○ Bước 4: Lập phương trình chiếu         [Mở sau B3]   |
|                                         |  ○ Bước 5: Tính a, T, F & Tổng hợp bài giải             |
+-----------------------------------------+---------------------------------------------------------+
```

### 4.2. Bố cục Mobile & Tablet (`< 1024px`)
- Không ép chia 2 cột chật hẹp.
- Phía trên là **Thanh tóm tắt Đề bài & Lý thuyết dạng Accordion/Segmented Bar** ghim nhẹ (`sticky top`): gồm 2 nút bật nhanh `Đề bài` và `Lý thuyết bước này (badge số công thức)` — mở trượt xuống ngay trong luồng (inline disclosure), không dùng modal full-screen che mất ngữ cảnh trừ khi người học chủ động bấm "Xem toàn bài lý thuyết".
- Khung biểu đồ SVG giữ tỉ lệ vuông/4:3, chiếm tối đa `min(100%, 340px)` chiều rộng, nút điều khiển lực/góc đạt chuẩn chạm tối thiểu `44×44px` (`WCAG 2.2`).

### 4.3. Điểm vào (Entry Points) không phá vỡ `LessonPage` hiện tại
- Trong [LessonPage.tsx](../../../src/pages/LessonPage.tsx), ở mục "Bài tập vận dụng":
  - Các bài trắc nghiệm/trả lời ngắn giữ nguyên `ExerciseFrame`.
  - Các bài `semi-essay` hiển thị một **Thẻ bài bán tự luận** gọn (tên bài, số bước, loại biểu đồ đi kèm như `Sơ đồ lực (FBD)` hoặc `Bản đồ nhiệt`, tiến độ đã hoàn thành `2/5 bước`) kèm nút **"Mở không gian giải bài"** điều hướng tới route chuyên biệt:
    `#/courses/:courseId/lessons/:lessonId/practice/:exerciseId`
  - Nhờ route riêng trong HashRouter, sinh viên có trọn vẹn chiều ngang màn hình (`max-w-7xl`) cho bố cục 2 cột mà không làm nặng hay vỡ nhịp đọc của `LessonPage` (`66ch`).

### 4.4. Ngôn ngữ thị giác (Tuân thủ `DESIGN.md` & `impeccable/operate.md`)
- **Màu sắc tiết chế (Restrained):**
  - Nền trang `--hus-canvas`, cột trái dùng `--hus-surface-subtle` (tạo phân lớp nhẹ giữa vùng tham chiếu và vùng làm bài `--hus-surface`).
  - Màu nhấn Celestial Sapphire (`--hus-accent` / `--hus-accent-solid`) chỉ dùng cho bước đang làm, nút kiểm tra chính, và phần tử biểu đồ đang chọn.
  - Starlight Gold (`--hus-starlight`) dùng cho thẻ **Lý thuyết đồng bộ theo bước** (nhấn nhẹ liên kết giữa bước hiện tại và công thức cần dùng).
  - Phản hồi dùng đủ 3 kênh: màu semantic (`--hus-success`, `--hus-warning`, `--hus-danger`) + **biểu tượng rõ nghĩa** + **văn bản chẩn đoán cụ thể** (không bao giờ chỉ dùng màu).
- **Chữ viết (Typography):**
  - Tiêu đề bài tập dùng `Spectral` (`--font-display`), toàn bộ nhãn bước, nút bấm, bảng dữ kiện, chẩn đoán dùng `Be Vietnam Pro` (`--font-sans`), số liệu/góc/tọa độ dùng `tabular-nums` (`--font-mono`).
- **Chuyển động (Motion):**
  - Chuyển bước và mở phản hồi dùng `180ms` với `--hus-ease`, không dùng hiệu ứng trang trí; tắt hoàn toàn khi `prefers-reduced-motion: reduce`.

---

## 5. Thiết kế chi tiết 2 Biểu đồ tương tác chuẩn mẫu

### 5.1. Biểu đồ 1: Free Body Diagram (`diagramKind: 'fbd'`)
Kế thừa tinh hoa sư phạm từ `docs/VLDC-HUS/js/ui/fbd.js` và `forces.js`, nâng cấp theo chuẩn React + Accessibility + Atmospheric Observatory:
- **Khung bối cảnh vật lý:** Vẽ nét mảnh (hairline) mặt phẳng nghiêng góc $\alpha$, dây nối, trục tọa độ mờ tùy chọn để sinh viên định hướng góc trực quan.
- **Thao tác kép (Pointer + Keyboard):**
  - Click nút lực trong bảng lực (`P`, `N`, `T`, `F_ms`, và các lực nhiễu `F_đ`, `F_ht`, `F_qt`, `F_ném`) để đặt vectơ lên tâm vật.
  - Kéo đầu mũi tên trực tiếp trên SVG (tự động bám nấc `5°` và hút nhẹ về các góc đặc biệt như `0°`, `90°`, `180°`, `270°`, góc dốc $\alpha$, pháp tuyến $\alpha + 90°$).
  - Hỗ trợ bàn phím đầy đủ: danh sách các lực đã đặt bên dưới SVG cho phép `Tab` chọn lực, bấm `←`/`→` (`±5°`), `Shift + ←`/`→` (`±15°`), hoặc `Delete` để xóa.
- **Chấm bài & Chẩn đoán (`src/core/learning/fbd.ts`):**
  - Thuần TypeScript, không phụ thuộc DOM/React.
  - Phân loại kết quả thành 4 nhóm rõ ràng: `matched` (đúng lực + đúng góc trong sai số `tol`, mặc định `±12°`), `wrong-direction` (đúng tên lực nhưng lệch hướng — kèm gợi ý hướng đúng dựa trên chiều chuyển động), `missing` (bỏ sót lực thật), `extra` (vẽ lực ảo/không tồn tại — giải thích bản chất vật lý).
  - Cho phép **Chồng lớp đáp án (Compare Overlay)** sau khi thử $\ge 2$ lần hoặc khi hoàn thành: vẽ mũi tên chuẩn bằng nét đứt màu `--hus-success` chồng lên hình sinh viên vẽ để so sánh ngay.

### 5.2. Biểu đồ 2: Bản đồ nhiệt / Trường vô hướng 2D (`diagramKind: 'heatmap'`)
Phục vụ Nhiệt học (`PHY1159` Chương 8–11: dẫn nhiệt, phân bố nhiệt độ $T(x,y)$, chiều dòng nhiệt $\vec{q} = -k\nabla T$, cân bằng nhiệt) và dễ dàng mở rộng cho Hóa học (bản đồ mật độ electron/điện tích) hoặc XSTK/KHMT (ma trận tương quan / heatmap độ phức tạp):
- **Cấu trúc dữ liệu:** Ma trận lưới `rows × cols` (ví dụ `5×7` hoặc `6×6`) gồm giá trị số thực `value` (nhiệt độ °C/K), nhãn trục `xAxis`, `yAxis`, đơn vị `unit`, và tùy chọn ranh giới vật liệu / nguồn nhiệt.
- **Thang màu dễ tiếp cận (Perceptually Uniform + Colorblind-safe):**
  - Không dùng thang cầu vồng (rainbow/jet gây nhiễu thị giác).
  - Dùng thang nhiệt đơn điệu rõ độ sáng (lạnh → ấm → nóng: xanh lam observatory → trung tính → hổ phách/đỏ cam) kết hợp **tùy chọn bật nhãn số trực tiếp trên từng ô** (`Hiện giá trị T`) và **thanh chú giải (Colorbar)** có mốc rõ ràng.
- **3 chế độ tương tác giống bài tập tự luận:**
  1. **`select-cells` (Khoanh vùng / Nhận diện):** Ví dụ *"Chọn các ô có tốc độ truyền nhiệt (độ lớn gradient $|\nabla T|$) lớn nhất"* hoặc *"Chọn các ô nằm trên cùng một đường đẳng nhiệt $T = 60^\circ\text{C}$"*.
  2. **`place-flow` (Đặt vectơ dòng nhiệt / Gradient):** Sinh viên click vào các điểm nút được chỉ định và chọn hướng truyền nhiệt (8 hướng hoặc xoay góc) để biểu diễn $\vec{q} = -k\nabla T$ vuông góc với đường đẳng nhiệt và hướng từ nhiệt độ cao sang thấp.
  3. **`paint-state` (Dự đoán trạng thái sau thời gian $\Delta t$):** Gán mức nhiệt (`Nóng lên`, `Giữ nguyên`, `Lạnh đi`) cho các vùng được hỏi khi nguồn nhiệt thay đổi — kiểm tra hiểu bản chất cân bằng nhiệt mà không cần giải phương trình đạo hàm riêng.
- **Điều hướng bàn phím:** Lưới áp dụng mô hình WAI-ARIA `grid` (`ArrowUp/Down/Left/Right` di chuyển giữa các ô, `Enter/Space` chọn/đổi trạng thái, `aria-label` đọc rõ tọa độ và nhiệt độ từng ô).

---

## 6. Kiến trúc dữ liệu & ranh giới mã nguồn (`AGENTS.md` compliant)

### 6.1. Sơ đồ ranh giới module
```text
src/domain/semi-essay.ts          ← Pure TS types (SemiEssayExercise, Step unions, TheoryAnchor, DiagramSpec)
src/domain/workspace.ts           ← Mở rộng ExerciseDefinition union thêm SemiEssayExercise
src/core/learning/semi-essay.ts   ← Pure TS grading & step state machine (choice, equation, numeric-unit)
src/core/learning/fbd.ts          ← Pure TS FBD angle/force matcher & diagnostic generator
src/core/learning/heatmap.ts      ← Pure TS Heatmap cell/flow/state evaluator & color-stop mapper
src/contracts/diagram-module.ts   ← React boundary contract: DiagramRendererProps + lazy loader
src/modules/diagrams/registry.ts  ← Đăng ký lazy 'fbd' và 'heatmap' (không switch theo tên môn)
src/modules/diagrams/FbdDiagram.tsx      ← Lazy SVG interactive FBD
src/modules/diagrams/HeatmapDiagram.tsx  ← Lazy SVG/Grid interactive Heatmap
src/components/learning/SemiEssayStudio.tsx ← Khung 2 cột (Đề + Lý thuyết | Tiến trình bước)
src/components/learning/TheoryReferenceRail.tsx ← Cột/ngăn Lý thuyết đồng bộ theo bước
src/pages/PracticePage.tsx        ← Route /courses/:courseId/lessons/:lessonId/practice/:exerciseId
```

### 6.2. Cấu trúc Domain Contracts cốt lõi (`src/domain/semi-essay.ts`)
```ts
export interface TheoryAnchor {
  readonly id: string;
  readonly title: string;            // vd: "Định luật II Newton & lực ma sát trượt"
  readonly formula?: string;         // KaTeX, vd: "F_{ms} = \\mu N"
  readonly conditions: readonly string[]; // Điều kiện áp dụng
  readonly lessonHeadingId?: string; // Neo tới heading cụ thể trong bài Markdown
}

export type SemiEssayStep =
  | {
      readonly id: string;
      readonly kind: 'choice-reasoning';
      readonly title: string;
      readonly prompt: string;
      readonly theoryAnchorIds: readonly string[];
      readonly choices: readonly {
        readonly id: string;
        readonly label: string;
        readonly rationale: string; // Giải thích bản chất khi chọn phương án này
      }[];
      readonly answers: readonly string[];
      readonly summaryTemplate: string; // Dòng tóm tắt ghép vào bài giải tự luận
    }
  | {
      readonly id: string;
      readonly kind: 'diagram';
      readonly title: string;
      readonly prompt: string;
      readonly theoryAnchorIds: readonly string[];
      readonly diagramKind: 'fbd' | 'heatmap';
      readonly spec: FbdStepSpec | HeatmapStepSpec;
      readonly summaryTemplate: string;
    }
  | {
      readonly id: string;
      readonly kind: 'axis-projection';
      readonly title: string;
      readonly prompt: string;
      readonly theoryAnchorIds: readonly string[];
      readonly axes: readonly {
        readonly id: string;           // vd: 'ox', 'oy'
        readonly label: string;        // vd: "Trục Ox' (dọc dốc lên)"
        readonly rhsLatex: string;     // vd: "m_1 a" hoặc "0"
        readonly rows: readonly {
          readonly forceId: string;
          readonly forceLatex: string;
          readonly expectedSign: '+' | '-' | '0';
          readonly expectedComponent: string; // vd: '1', 'sin(alpha)', 'cos(alpha)', '0'
          readonly componentOptions: readonly { readonly id: string; readonly latex: string }[];
          readonly hint: string;
        }[];
        readonly resultingEquationLatex: string;
      }[];
      readonly summaryTemplate: string;
    }
  | {
      readonly id: string;
      readonly kind: 'equation-transform';
      readonly title: string;
      readonly prompt: string;
      readonly theoryAnchorIds: readonly string[];
      readonly initialEquations: readonly { readonly label: string; readonly latex: string }[];
      readonly goalLatex: string;
      readonly stages: readonly {
        readonly id: string;
        readonly prompt: string;
        readonly operations: readonly {
          readonly id: string;
          readonly label: string;         // vd: "Cộng vế (1) + (2) để khử T"
          readonly resultLatex: string;
          readonly canceledLatex?: string; // Hạng tử bị triệt tiêu để highlight
          readonly optimal: boolean;
          readonly feedback: string;      // Giải thích cả khi đúng lẫn khi đúng toán nhưng dở chiến thuật
        }[];
      }[];
      readonly summaryTemplate: string;
    }
  | {
      readonly id: string;
      readonly kind: 'numeric-unit';
      readonly title: string;
      readonly prompt: string;
      readonly theoryAnchorIds: readonly string[];
      readonly fields: readonly {
        readonly id: string;
        readonly label: string;
        readonly symbolLatex: string;
        readonly expected: number;
        readonly tolerance: number; // sai số tuyệt đối hoặc tương đối
        readonly toleranceMode: 'absolute' | 'relative';
        readonly unit: string;
      }[];
      readonly explanation: string;
      readonly summaryTemplate: string;
    };
```

### 6.3. Lưu tiến độ (`ProgressState`)
- Không phá vỡ `schemaVersion: 1` hiện có của `ProgressState`:
  - Khi hoàn thành toàn bộ các bước của một bài `semi-essay`, ghi 1 `attempt` (`correct: true`) cho `exercise.id` như mọi bài tập khác → tự động cập nhật phần trăm tiến độ khóa học và trang `ProgressPage`.
  - Tiến độ từng bước dở dang (ví dụ đang làm dở bước 3/5) có thể lưu nhẹ ở trạng thái phiên hoặc mở rộng trường tùy chọn tương thích ngược nếu cần lưu qua lần tải lại trang.

---

## 7. Trạng thái, Trường hợp biên & Ràng buộc chất lượng

- **Trạng thái bắt buộc có đủ:**
  - *Chưa làm bước* (khóa mềm bước sau hoặc cho phép xem trước đề nhưng nhắc hoàn thành bước trước để giữ mạch tự luận).
  - *Đang tải module biểu đồ* (layout-shaped skeleton đúng kích thước khung SVG, không dùng spinner trơ trọi).
  - *Sai lần 1 / Sai nhiều lần* (hiện chẩn đoán cụ thể; từ lần sai thứ 2 tự động mở nút "Xem gợi ý" hoặc "So sánh sơ đồ chuẩn" để sinh viên không bị kẹt).
  - *Hoàn thành toàn bài* (hiển thị **Bản trình bày tự luận hoàn chỉnh** + nút "Làm lại từ đầu" + nút "Quay lại bài học / Bài tiếp theo").
  - *Lỗi không tìm thấy bài tập / sai `courseId`* (recoverable empty state rõ ràng).
- **Giới hạn dữ liệu thực tế:**
  - Số bước mỗi bài: `2–6` bước (điển hình `4–5`).
  - Số lực trên mỗi vật FBD: `1–6` lực (tối đa 2 vật song song trong 1 bước).
  - Kích thước lưới Heatmap: `4×4` đến `8×8` (đảm bảo đọc rõ trên màn hình `360px` không tràn ngang).
- **Kiểm chứng khi triển khai (Acceptance Criteria):**
  1. `npm run build` (strict TypeScript + Vitest unit tests cho `semi-essay.ts`, `fbd.ts`, `heatmap.ts` + Vite build giữ `FbdDiagram` và `HeatmapDiagram` thành chunk lazy riêng).
  2. `impeccable detect --json` trả về `0 findings` trên toàn bộ UI mới.
  3. Playwright E2E trên desktop (`1440px`) và mobile (`390px`) chạy qua production build tại `/HUS_Learning_Page/`: giải trọn 1 bài `PHY1159` có FBD và 1 bài Nhiệt học có Heatmap, kiểm tra bàn phím, dark/light mode, không tràn ngang.

---

## 8. Lộ trình mở rộng & Phạm vi triển khai

### 8.1. Giai đoạn 1 (Triển khai ngay theo plan hiện tại)
1. **Tầng Domain & Core:** `src/domain/semi-essay.ts`, `src/core/learning/semi-essay.ts`, `src/core/learning/fbd.ts`, `src/core/learning/heatmap.ts` + bộ Vitest đầy đủ (hỗ trợ `choice-reasoning`, `diagram`, `axis-projection`, `equation-transform`, `numeric-unit`, và `fadeLevel: 0 | 1 | 2`).
2. **Tầng UI & Studio 2 cột:** `SemiEssayStudio.tsx`, `TheoryReferenceRail.tsx`, `PracticePage.tsx`, và thẻ dẫn từ `LessonPage.tsx`.
3. **2 Biểu đồ mẫu lazy-load:** `FbdDiagram.tsx` (Vật lý Cơ học — Ch.3) và `HeatmapDiagram.tsx` (Nhiệt học — Ch.8/Nhiệt).
4. **Dữ liệu mẫu xác thực cho `PHY1159`:**
   - **Bài mẫu Cơ học (Ch.3 — FBD + Chiếu trục + Biến đổi PT khử $T$):** Bài 3.1 *Hệ vật trên mặt phẳng nghiêng có ròng rọc* (trích từ nguồn MIT `docs/VLDC-HUS/js/data/ch3.js` gắn vào bài Định luật Newton).
   - **Bài mẫu Nhiệt học (Ch.8/Ch.9 — Bản đồ nhiệt):** 1 bài bán tự luận về *Phân bố nhiệt độ, cân bằng nhiệt & chiều dòng nhiệt* gắn vào chương Nhiệt học của `PHY1159`.

### 8.2. Giai đoạn 2+ (Mở rộng cho các chương còn lại — giữ sẵn cổng `DiagramModule`)
- **`curve-2d`:** Dùng chung cho Đồ thị $v(t)$ (Ch.2), Giếng thế năng $U_{\text{eff}}(r)$ (Ch.6), Chu trình $P$–$V$/$T$–$S$ (Ch.9, Ch.11), Phân bố Maxwell (Ch.10), và Biểu đồ năng lượng/chuẩn độ Hóa học (`CHE1080`).
- **`balance-flow`:** Biểu đồ cột năng lượng LOL (Ch.4 — nguồn MIT `ch4.js`), Cơ năng tịnh tiến + quay (Ch.5), Sơ đồ dòng nhiệt động cơ (Ch.11), và Chu trình Hess (`CHE1080`).
- **`fbd` chế độ `extended`:** Mở rộng thêm điểm đặt lực & cánh tay đòn cho Vật rắn (Ch.5).
