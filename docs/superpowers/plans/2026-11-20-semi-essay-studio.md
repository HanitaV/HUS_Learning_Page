# Semi-Essay Studio & Interactive Diagrams Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` (native sequential execution in this session, per `AGENTS.md` which prohibits spawning external coding agents). Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a subject-agnostic 2-column Semi-Essay Problem-Solving Studio (`SemiEssayStudio`) that couples step-contextual theory directly with structured constructed-response steps (`choice-reasoning`, `diagram`, `axis-projection`, `equation-transform`, `numeric-unit`) and two lazy-loaded interactive SVG diagrams (`FbdDiagram`, `HeatmapDiagram`), validated with two real `PHY1159` exercises.

**Architecture:** Extend `ExerciseDefinition` in `src/domain/` with a strict discriminated `semi-essay` variant; implement 100% deterministic, React-free grading and misconception diagnostics in `src/core/learning/`; register heavy interactive diagrams lazily through `src/contracts/diagram-module.ts` and `src/modules/diagrams/registry.ts` (zero subject-name switching in shared UI); and mount a dedicated HashRouter route `#/courses/:courseId/lessons/:lessonId/practice/:exerciseId` linked from `LessonPage`.

**Tech Stack:** React 19, React Router 7 (`HashRouter`), strict TypeScript, Tailwind CSS 4 (`DESIGN.md` Atmospheric Observatory tokens), KaTeX (via existing `Markdown` component), Vitest, Playwright.

**Spec:** [2026-11-20-semi-essay-studio-design.md](../specs/2026-11-20-semi-essay-studio-design.md)

## Global Constraints

- Static frontend only (HashRouter, Vite `base: './'`, no backend, no SSR, no external runtime CDNs, no `eval`).
- Strict TypeScript (`no any`, `readonly` content, type-only imports, no barrel imports).
- Strict layer boundaries: `src/domain/` and `src/core/` must stay 100% React-free and browser-free; `src/pages/` and `src/components/` render data and delegate grading/diagnostics to `src/core/`.
- Shared pages/components must never switch on subject names; diagrams load lazily via `DiagramModule` registry.
- Visual craft adheres to `DESIGN.md` (Atmospheric Observatory) and `impeccable` `Operate + Read` mode (`impeccable detect --json` must report `0` findings; WCAG 2.2 AA contrast, full keyboard navigation, `44×44px` touch targets, `prefers-reduced-motion`, zero horizontal overflow at `360px`–`1440px`).
- Existing `ProgressState` (`schemaVersion: 1`) remains backwards-compatible; completing a `semi-essay` dispatches a standard `attempt` (`correct: true`).
- Do not fabricate academic problems or modify `docs/VLDC-HUS/` / `docs/Chemistry/`; record immutable `provenance` for migrated `PHY1159` exercises.

## Review Focus

- **Vietnamese decimal comma & whitespace in `numeric-unit`:** Input like `" 0,47 "` or `"-18,7"` must parse identically to `0.47` / `-18.7`, while non-numeric garbage (`"abc"`, `""`, `"NaN"`) must return a clean validation error without marking `NaN` correct.
- **FBD angle wrap-around near `0°/360°`:** A force drawn at `355°` when expected at `0°` (within `tol = 12°`) must grade as `matched`, not `wrong-direction`.
- **Heatmap invalid/out-of-bounds cell coordinates & keyboard navigation:** Clicking or grading cells outside `0..rows-1` / `0..cols-1` must be safely ignored/rejected; arrow-key navigation must stay clamped inside the grid.
- **Invalid/cross-course URL parameters on `PracticePage`:** Navigating to `/courses/phy1159/lessons/wrong/practice/bad-id` or an exercise belonging to another course must render a recoverable Vietnamese empty state (never crash or leak another course's exercise).
- **Suboptimal but algebraically valid `equation-transform` move:** Selecting a non-optimal operation (e.g., subtracting instead of adding `(1)-(2)`) must display the intermediate expression and pedagogical feedback without advancing the stage, and allow immediate retry.

---

## File Structure

- **Create:** `src/domain/semi-essay.ts` — Pure TS domain types for `SemiEssayExercise`, `TheoryAnchor`, `SemiEssayStep` union (`choice-reasoning`, `diagram`, `axis-projection`, `equation-transform`, `numeric-unit`), `FbdStepSpec`, `HeatmapStepSpec`.
- **Modify:** `src/domain/workspace.ts` — Add `SemiEssayExercise` to `ExerciseDefinition` union.
- **Create:** `src/core/learning/fbd.ts` — Pure TS angle normalization, shortest angular difference, and 4-category FBD diagnostic grader (`matched`, `wrong-direction`, `missing`, `extra`).
- **Create:** `src/core/learning/heatmap.ts` — Pure TS heatmap color-stop mapper (colorblind-safe), `select-cells`, `place-flow`, and `paint-state` graders with diagnostics.
- **Create:** `src/core/learning/semi-essay.ts` — Pure TS evaluators for `choice-reasoning`, `axis-projection`, `equation-transform`, `numeric-unit` (Vietnamese comma parsing + absolute/relative tolerance), and essay summary builder.
- **Modify:** `src/core/learning/content.ts` — Extend `validateExercises` to validate `semi-essay` steps, unique step IDs, and `theoryAnchorIds`.
- **Modify:** `src/core/learning/exercises.ts` — Keep `evaluateAnswer` strictly typed for non-semi-essay exercises (or return `false` safely if called directly on `semi-essay`).
- **Create:** `src/contracts/diagram-module.ts` — React boundary interface `DiagramRendererProps<TSpec, TAnswer>` and `DiagramModuleDescriptor`.
- **Create:** `src/modules/diagrams/registry.ts` — Lazy diagram module registry (`fbd`, `heatmap`).
- **Create:** `src/modules/diagrams/FbdDiagram.tsx` — Lazy SVG Free Body Diagram editor (pointer drag with 5° snap + full keyboard controls + compare overlay).
- **Create:** `src/modules/diagrams/HeatmapDiagram.tsx` — Lazy accessible 2D Heatmap grid/SVG (`select-cells`, `place-flow`, `paint-state`, value toggle, WAI-ARIA grid keyboard navigation).
- **Create:** `src/components/learning/TheoryReferenceRail.tsx` — Left column (desktop sticky) / top collapsible bar (mobile) showing problem statement, given-data table, and step-synchronized `TheoryAnchor` cards.
- **Create:** `src/components/learning/SemiEssayStudio.tsx` — 2-column studio orchestrating step progression, inline step renderers (`choice-reasoning`, `axis-projection`, `equation-transform`, `numeric-unit`, lazy `DiagramSlot`), progressive hints, and synthesized full essay solution card.
- **Create:** `src/pages/PracticePage.tsx` — Route page for `/courses/:courseId/lessons/:lessonId/practice/:exerciseId`.
- **Modify:** `src/app/App.tsx` — Register lazy `PracticePage` route.
- **Modify:** `src/pages/LessonPage.tsx` — Render a compact Semi-Essay launch card (with step count, diagram badges, completion badge, and CTA link to `PracticePage`) when `exercise.kind === 'semi-essay'`.
- **Modify:** `src/content/courses/phy1159/content.ts` — Add 2 verified `PHY1159` `semi-essay` exercises (Ch.3 Bài 3.1 FBD + Axis Projection + Equation Transform from MIT `docs/VLDC-HUS/js/data/ch3.js`, and Ch.8/Ch.9 Heat Map thermal distribution & heat-flow exercise grounded in `PHY1159` thermodynamics theory).
- **Tests:** `tests/unit/fbd.test.ts`, `tests/unit/heatmap.test.ts`, `tests/unit/semi-essay.test.ts`, `tests/e2e/semi-essay.spec.ts`.

---

### Task 1: Domain Contracts & Content Validation (`semi-essay`)

**Files:**
- Create: `src/domain/semi-essay.ts`
- Modify: `src/domain/workspace.ts:1-15`
- Modify: `src/core/learning/content.ts:14-41`
- Modify: `src/core/learning/exercises.ts:1-11`
- Test: `tests/unit/content.test.ts`

**Interfaces:**
- Produces:
  - `TheoryAnchor`, `GivenQuantity`, `FbdForceDef`, `FbdBodySpec`, `FbdStepSpec`, `HeatmapStepSpec`, `SemiEssayStep`, `SemiEssayExercise` in `src/domain/semi-essay.ts`
  - Extended `ExerciseDefinition` union in `src/domain/workspace.ts`
  - Updated `validateExercises(lessons, exercises)` in `src/core/learning/content.ts`

- [ ] **Step 1: Write failing validation tests in `tests/unit/content.test.ts`**

Add tests asserting that `validateExercises`:
- accepts a valid `semi-essay` exercise with unique `theoryAnchors` and `steps` referencing valid `theoryAnchorIds`;
- throws when a `semi-essay` has empty `steps`, duplicate step IDs, or a step referencing an unknown `theoryAnchorId`.

- [ ] **Step 2: Run unit test to verify failure**

Run: `npx vitest run tests/unit/content.test.ts`
Expected: FAIL (type/runtime error because `semi-essay` is not yet in `ExerciseDefinition` or `validateExercises`).

- [ ] **Step 3: Create `src/domain/semi-essay.ts` and update `workspace.ts`, `content.ts`, `exercises.ts`**

Define all readonly interfaces from Section 6.2 of the spec (`TheoryAnchor`, `GivenQuantity`, `FbdStepSpec`, `HeatmapStepSpec`, `SemiEssayStep` union with `choice-reasoning` | `diagram` | `axis-projection` | `equation-transform` | `numeric-unit`, and `SemiEssayExercise` with `fadeLevel?: 0 | 1 | 2` and `limitingCheck?: ...`). Update `validateExercises` to validate `semi-essay` cleanly and keep `evaluateAnswer` type-safe.

- [ ] **Step 4: Run tests and typecheck**

Run: `npm run typecheck && npx vitest run tests/unit/content.test.ts tests/unit/learning.test.ts`
Expected: PASS (0 TS errors, all tests pass).

---

### Task 2: Pure Core FBD Grader & Diagnostics (`src/core/learning/fbd.ts`)

**Files:**
- Create: `src/core/learning/fbd.ts`
- Test: `tests/unit/fbd.test.ts`

**Interfaces:**
- Consumes: `FbdBodySpec`, `FbdForceDef` from `src/domain/semi-essay.ts`
- Produces:
  - `normalizeAngle(deg: number): number`
  - `shortestAngleDiff(a: number, b: number): number`
  - `snapAngle(deg: number, step?: number, magnets?: readonly number[]): number`
  - `gradeFbdBody(drawn: readonly FbdDrawnArrow[], body: FbdBodySpec, forceCatalog: Readonly<Record<string, FbdForceDef>>): FbdBodyGradeResult`
  - `gradeFbdStep(drawnByBody: Readonly<Record<string, readonly FbdDrawnArrow[]>>, spec: FbdStepSpec): FbdStepGradeResult`

- [ ] **Step 1: Write failing unit tests in `tests/unit/fbd.test.ts`**

Cover:
- `shortestAngleDiff(355, 0) === 5` and `shortestAngleDiff(10, 350) === 20` (Review Focus: wrap-around near `0°/360°`).
- Exact match within `tol = 12°` returns `correct: true` and empty `issues`.
- Wrong direction (`Fms` at `30°` when expected `210°`) produces a `wrong-direction` diagnostic with expected vs drawn angles.
- Missing force (`P` omitted) produces a `missing` diagnostic using `forceCatalog.P.missing`.
- Phantom/extra force (`Fdi` added) produces an `extra` diagnostic using `forceCatalog.Fdi.extra`.
- Multi-body step (`A` + `B`) requires both bodies correct for `correct: true`.

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/unit/fbd.test.ts`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `src/core/learning/fbd.ts`**

Pure TypeScript only (zero React/DOM). Match exact type + angle first, then match same type with wrong direction, then collect remaining `missing` expected forces and remaining `extra` drawn forces.

- [ ] **Step 4: Run test to verify pass**

Run: `npx vitest run tests/unit/fbd.test.ts`
Expected: PASS.

---

### Task 3: Pure Core Heatmap Evaluator & Color Mapper (`src/core/learning/heatmap.ts`)

**Files:**
- Create: `src/core/learning/heatmap.ts`
- Test: `tests/unit/heatmap.test.ts`

**Interfaces:**
- Consumes: `HeatmapStepSpec` from `src/domain/semi-essay.ts`
- Produces:
  - `mapHeatColor(value: number, min: number, max: number): { readonly bg: string; readonly ink: 'light' | 'dark' }` (perceptually uniform cool-to-warm scale, non-rainbow, accessible text contrast)
  - `gradeHeatmapStep(answer: HeatmapAnswer, spec: HeatmapStepSpec): HeatmapGradeResult`

- [ ] **Step 1: Write failing unit tests in `tests/unit/heatmap.test.ts`**

Cover:
- `select-cells`: exact cell set passes; missing or extra cells produce specific Vietnamese coordinate diagnostics; out-of-bounds cell IDs (Review Focus) are rejected safely without throwing.
- `place-flow`: heat flow vectors match expected directions (e.g., hot $\to$ cold) within angular tolerance; reversed arrow produces a diagnostic referencing the 2nd law / Fourier direction.
- `paint-state`: comparing predicted cell thermal trends (`warming` | `steady` | `cooling`) against expected map.
- `mapHeatColor`: handles `min === max` without `NaN` division-by-zero and returns readable `ink` polarity.

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/unit/heatmap.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `src/core/learning/heatmap.ts`**

Pure TypeScript only. Use a deterministic 7-stop observatory cool-to-amber-crimson palette with linear RGB interpolation and relative luminance check for `ink: 'light' | 'dark'`.

- [ ] **Step 4: Run test to verify pass**

Run: `npx vitest run tests/unit/heatmap.test.ts`
Expected: PASS.

---

### Task 4: Pure Core Semi-Essay Step Evaluators (`src/core/learning/semi-essay.ts`)

**Files:**
- Create: `src/core/learning/semi-essay.ts`
- Test: `tests/unit/semi-essay.test.ts`

**Interfaces:**
- Consumes: `SemiEssayExercise`, `SemiEssayStep` from `src/domain/semi-essay.ts`
- Produces:
  - `parseLocalizedNumber(raw: string): number | null`
  - `evaluateChoiceReasoningStep(step, selectedIds)`
  - `evaluateAxisProjectionStep(step, selections)`
  - `evaluateEquationTransformMove(stage, operationId)`
  - `evaluateNumericUnitStep(step, values)`
  - `buildSynthesizedEssay(exercise, completedStepIds): readonly SynthesizedEssaySection[]`

- [ ] **Step 1: Write failing unit tests in `tests/unit/semi-essay.test.ts`**

Cover:
- `parseLocalizedNumber(" 0,47 ") === 0.47`, `parseLocalizedNumber("-18.7") === -18.7`, `parseLocalizedNumber("abc") === null`, `parseLocalizedNumber("") === null` (Review Focus).
- `evaluateChoiceReasoningStep`: returns per-choice `rationale` for both correct and incorrect selections.
- `evaluateAxisProjectionStep`: identifies exact force row and axis (`Ox'` / `Oy'`) where sign or trig component is wrong, returning that row's `hint`.
- `evaluateEquationTransformMove`: optimal move marks `advance: true` + `canceledLatex`; suboptimal move (Review Focus) returns `advance: false`, `resultLatex`, and pedagogical `feedback`.
- `evaluateNumericUnitStep`: checks both `absolute` and `relative` tolerances and flags missing/invalid numbers cleanly.
- `buildSynthesizedEssay`: produces ordered sections with title, summary text, and linked `theoryAnchorIds`.

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/unit/semi-essay.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `src/core/learning/semi-essay.ts`**

Pure TypeScript only, zero `eval`.

- [ ] **Step 4: Run test to verify pass**

Run: `npx vitest run tests/unit/semi-essay.test.ts`
Expected: PASS.

---

### Task 5: Diagram Module Contract & Lazy Interactive Diagrams (`FbdDiagram`, `HeatmapDiagram`)

**Files:**
- Create: `src/contracts/diagram-module.ts`
- Create: `src/modules/diagrams/registry.ts`
- Create: `src/modules/diagrams/FbdDiagram.tsx`
- Create: `src/modules/diagrams/HeatmapDiagram.tsx`

**Interfaces:**
- Consumes: `FbdStepSpec`, `HeatmapStepSpec` from `src/domain/semi-essay.ts`; `gradeFbdStep` from `src/core/learning/fbd.ts`; `gradeHeatmapStep`, `mapHeatColor` from `src/core/learning/heatmap.ts`.
- Produces:
  - `DiagramRendererProps<TSpec>` in `src/contracts/diagram-module.ts`
  - `getDiagramModule(kind: 'fbd' | 'heatmap')` in `src/modules/diagrams/registry.ts`

- [ ] **Step 1: Read `.agents/skills/impeccable/reference/craft-floor.md` before writing UI code**

Per `impeccable` Setup step 3, load `craft-floor.md` immediately before any UI component authoring.

- [ ] **Step 2: Create `src/contracts/diagram-module.ts` and `src/modules/diagrams/registry.ts`**

Define a clean React integration contract (`spec`, `onResult`, `completed`, `readOnly`, `fadeLevel`) and lazy `import()` loaders for `'fbd'` and `'heatmap'`.

- [ ] **Step 3: Implement `src/modules/diagrams/FbdDiagram.tsx`**

Build accessible SVG Free Body Diagram editor using `DESIGN.md` tokens:
- Multi-body tabs or side-by-side panels (`Vật A`, `Vật B`) with hairline incline/rope reference geometry.
- Force palette buttons (`min-h-[44px]`), pointer drag rotation with `5°` snap + magnetic snap to surface/normal/cardinal angles, and full keyboard arrow list (`-15°`, `-5°`, `+5°`, `+15°`, `Delete`).
- Non-color-only diagnostic feedback list (icons + semantic badges + Vietnamese explanations) and optional "So sánh sơ đồ chuẩn" dashed green overlay after ≥ 2 attempts or completion.

- [ ] **Step 4: Implement `src/modules/diagrams/HeatmapDiagram.tsx`**

Build accessible 2D Heatmap component:
- WAI-ARIA `role="grid"` with arrow-key focus clamping (`ArrowUp/Down/Left/Right`) and `Enter/Space` toggle.
- Toggleable numeric temperature labels (`Hiện giá trị T`), labeled colorbar legend, and support for `select-cells`, `place-flow` (8-direction or 4-direction flow arrows), and `paint-state`.
- Clean responsive fit at `360px` mobile without horizontal overflow.

- [ ] **Step 5: Verify strict typecheck and `impeccable detect`**

Run: `npm run typecheck && .agents\skills\impeccable\scripts\impeccable.cmd detect --json src/modules/diagrams/FbdDiagram.tsx src/modules/diagrams/HeatmapDiagram.tsx`
Expected: 0 TS errors, `[]` (0 impeccable findings).

---

### Task 6: 2-Column Semi-Essay Studio, Theory Rail & Practice Route

**Files:**
- Create: `src/components/learning/TheoryReferenceRail.tsx`
- Create: `src/components/learning/SemiEssayStudio.tsx`
- Create: `src/pages/PracticePage.tsx`
- Modify: `src/app/App.tsx:7-32`
- Modify: `src/pages/LessonPage.tsx`

**Interfaces:**
- Consumes: `SemiEssayExercise`, `src/core/learning/semi-essay.ts`, `getDiagramModule`, `Markdown`, `progressStore`, `useLearningProgress`.
- Produces:
  - Route `/courses/:courseId/lessons/:lessonId/practice/:exerciseId` in `src/app/App.tsx`
  - Semi-essay launch card in `LessonPage.tsx`

- [ ] **Step 1: Implement `src/components/learning/TheoryReferenceRail.tsx`**

Desktop (`lg:`): sticky left panel (`42%`, `--hus-surface-subtle` ground, full-perimeter hairline border) with Problem Statement, compact `tabular-nums` Given Quantities table, and **Step-Synchronized Theory Anchors** highlighted with Starlight Gold (`--hus-starlight`) + formula KaTeX + conditions + link back to the lesson.
Mobile (`< lg`): sticky inline collapsible disclosure bar (`Đề bài` / `Lý thuyết bước này (N)`) — zero modal laziness.

- [ ] **Step 2: Implement `src/components/learning/SemiEssayStudio.tsx`**

Right column (`58%`) step engine:
- Vertical step timeline showing completed step summaries, active step workspace, and upcoming locked/preview steps.
- Dedicated sub-views for `choice-reasoning`, `axis-projection`, `equation-transform` (with live equation stack, undo on suboptimal move, and canceled-term highlight), `numeric-unit`, optional `limitingCheck` mini-step, and lazy `<Suspense fallback={<DiagramSkeleton />}>` `DiagramSlot`.
- On final step completion: dispatches `progressStore.dispatch({ type: 'attempt', exerciseId, correct: true, at })` and reveals the **Bài giải tự luận hoàn chỉnh** panel.

- [ ] **Step 3: Implement `src/pages/PracticePage.tsx` and wire routes in `App.tsx` & `LessonPage.tsx`**

- `PracticePage.tsx` validates `courseId`, `lessonId`, and `exerciseId` (including cross-course rejection — Review Focus) and renders a recoverable empty state if invalid.
- `LessonPage.tsx` renders a clean Semi-Essay studio card (title, step count, diagram badges, completed badge, `"Mở không gian giải bài"` button) for `exercise.kind === 'semi-essay'` while keeping `ExerciseSession` unchanged for classic exercises.

- [ ] **Step 4: Verify typecheck and `impeccable detect`**

Run: `npm run typecheck && .agents\skills\impeccable\scripts\impeccable.cmd detect --json src/components/learning/TheoryReferenceRail.tsx src/components/learning/SemiEssayStudio.tsx src/pages/PracticePage.tsx`
Expected: 0 TS errors, `[]` (0 findings).

---

### Task 7: Verified `PHY1159` Semi-Essay Content (FBD + Heatmap)

**Files:**
- Modify: `src/content/courses/phy1159/content.ts`
- Modify: `tests/unit/catalogue.test.ts` (if total exercise count assertion is pinned)

**Interfaces:**
- Consumes: `SemiEssayExercise` contract; MIT-licensed source `docs/VLDC-HUS/js/data/ch3.js` (`3.1`) and `docs/VLDC-HUS/js/data/theory/thermo.js` (heat & temperature concepts).

- [ ] **Step 1: Add 2 verified `semi-essay` exercises to `src/content/courses/phy1159/content.ts`**

1. **`phy1159-se-3-1`** (attached to `phy1159-t3-2` — *Định luật II Newton & lực ma sát*, MIT provenance from `docs/VLDC-HUS/js/data/ch3.js` Bài 3.1):
   - Step 1 (`choice-reasoning`): Dự đoán chiều chuyển động hệ vật A–B trên mặt phẳng nghiêng.
   - Step 2 (`choice-reasoning`): Chọn hệ quy chiếu quán tính gắn với mặt đất.
   - Step 3 (`diagram`, `fbd`): Vẽ sơ đồ lực cho Vật A (nghiêng $30^\circ$) và Vật B (treo dây), gồm lực nhiễu `Fdi`, `Fqt`.
   - Step 4 (`axis-projection`): Chiếu các lực tác dụng lên Vật A theo trục $Ox'$ và $Oy'$.
   - Step 5 (`equation-transform`): Thế $F_{ms} = \mu N$, cộng vế `(1) + (2)` khử $T$, cô lập $a$ (kèm phản hồi khi chọn trừ vế hoặc sai chiến thuật).
   - Step 6 (`numeric-unit` + `limitingCheck`): Kiểm chứng trường hợp biên $\alpha = 90^\circ, \mu = 0$ và tính số $a \approx 0{,}47\text{ m/s}^2$, $T \approx 18{,}7\text{ N}$, $F \approx 32{,}3\text{ N}$.
2. **`phy1159-se-8-1`** (attached to `phy1159-t8-1` — *Nhiệt độ và cân bằng nhiệt*, grounded in `PHY1159` Ch.8/Ch.9 MIT theory):
   - Step 1 (`choice-reasoning`): Xác định bản chất cân bằng nhiệt (nguyên lý 0) & chiều truyền nhiệt tự phát.
   - Step 2 (`diagram`, `heatmap`, `select-cells`): Nhận diện vùng có độ chênh nhiệt độ (gradient $|\nabla T|$) lớn nhất trên bản đồ nhiệt 2D của thanh/bản dẫn nhiệt.
   - Step 3 (`diagram`, `heatmap`, `place-flow`): Đặt vectơ chiều dòng nhiệt $\vec{q} = -k\nabla T$ từ vùng nóng sang vùng lạnh vuông góc đường đẳng nhiệt.
   - Step 4 (`equation-transform` + `numeric-unit`): Biến đổi phương trình cân bằng nhiệt $m_1 c_1(t_{cb} - t_1) + m_2 c_2(t_{cb} - t_2) = 0$ cô lập $t_{cb}$ và tính giá trị số.

- [ ] **Step 2: Run full unit suite and production build**

Run: `npm run build`
Expected: strict typecheck PASS, all Vitest suites PASS (including content integrity validation of both new `semi-essay` exercises), and `dist/` builds cleanly with `FbdDiagram` and `HeatmapDiagram` split into lazy chunks.

---

### Task 8: Playwright E2E, Visual QA & Handoff Documentation

**Files:**
- Create: `tests/e2e/semi-essay.spec.ts`
- Modify: `docs/AGENT_HANDOFF.md`

- [ ] **Step 1: Write Playwright E2E tests in `tests/e2e/semi-essay.spec.ts`**

Test against production build at `/HUS_Learning_Page/` across desktop (`1440px`) and mobile (`390px`):
- Open `phy1159` lesson `phy1159-t3-2` $\to$ click launch card to open `PracticePage` for `phy1159-se-3-1`.
- Verify 2-column theory rail sync on desktop and inline collapsible theory bar on mobile with zero horizontal overflow.
- Complete all steps (including keyboard-driven FBD placement/rotation, wrong-force diagnostic, axis projection, suboptimal + optimal equation transform, Vietnamese decimal comma `"0,47"` numeric submit) $\to$ verify synthesized essay solution appears and completion persists in `ProgressPage`.
- Open `phy1159-se-8-1` Heatmap exercise $\to$ verify keyboard grid navigation, value overlay toggle, and cell/flow grading.
- Verify invalid/cross-course practice URL shows recoverable empty state.

- [ ] **Step 2: Run full verification suite**

Run: `npm run build && npm run test:e2e`
Expected: All unit tests, production build, and desktop + mobile Playwright E2E tests PASS.

- [ ] **Step 3: Capture & inspect visual QA screenshots (light/dark desktop + mobile) and update `docs/AGENT_HANDOFF.md`**

Capture screenshots via Chromium / `impeccable shot` for `PracticePage` (FBD step light/dark, Equation Transform step, Heatmap step, and mobile `390px`), inspect visually, fix any spacing/contrast issue, and record exact changes + verification in `docs/AGENT_HANDOFF.md`.
