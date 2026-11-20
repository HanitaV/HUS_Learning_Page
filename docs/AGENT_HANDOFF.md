# Agent handoff

## Initial commit and GitHub Pages preparation — 2026-11-20 (Codex)

- User authorized committing, pushing main, and deploying GitHub Pages at https://hanitav.github.io/HUS_Learning_Page/. Enabled Pages with GitHub Actions; the existing workflow verifies the application and deploys only dist/.
- Extended .gitignore to keep MIT mirrors and source PDFs local alongside the existing excluded reference projects. Preserved local archives and skills.
- Updated the search browser test to expand paginated lesson results before finding the SI lesson. Application behavior is unchanged.
- Separated optional archive comparisons from application-content unit checks so fresh checkouts can verify without source archives. Local archive comparisons still run when their archives exist.
- Verification: npm run build passed with 135 unit tests; a staged clean snapshot without archives passed 131 unit tests with 4 archive checks skipped and all 64 desktop/mobile E2E tests at the repository subpath. Vite still reports large lazy chunks; no bundle-size optimization was attempted.
- Deployment success must be confirmed from the Actions run and live URL after pushing. Local import scripts still require the excluded source archives.


## CHE1080 + MIT OCW hub — 2026-11-20

Added lazy tool `che1080-mit-hub` (general-chemistry only): 11 CHE1080 question types mapped to verified MIT 5.111SC/5.112/5.60 lectures (241 generated registry entries via `scripts/import-mit-che1080.mjs`), library filters, client search, local progress, quick calculators. No PDFs/videos copied; links go to ocw.mit.edu/YouTube. See [che1080-mit-integration.md](che1080-mit-integration.md). Verification: `npm run build` passes (131+ unit tests); `che1080-mit.spec.ts` and `chemistry-essay.spec.ts` pass. Known: `learning.spec.ts:42` (`/courses?q=khong thu nguyen` expecting the SI lesson) fails; it exercises CoursesPage search, which this change does not touch (likely the 12-per-kind result cap).

## PHY1159 Syllabus (V2 170826) & MIT OpenCourseWare Integration — 2026-11-20 (Antigravity)

Integrated the official 9-chapter **PHY1159 — Vật lý đại cương 1** syllabus (`docs/PHY1159 Vat ly Dai Cuong 1 - V2 170826.pdf`) together with internal `docs/` references and verified MIT OpenCourseWare resources (`8.01SC`, `5.60`, and `8.044` as optional further reading) into the existing `phy1159` course page without breaking existing 11-chapter interactive lessons, semi-essays, or E2E flows.

- **Pure Domain & Core (`src/domain/phy1159-syllabus.ts`, `src/core/physics/syllabus-ocw.ts`)**:
  - Defined React-free contracts for the 9 syllabus chapters, `Tự học` markers (`2.3` and `Ch 5`), internal `docs/` references, and MIT OCW resources (`supplement` vs `further-reading`, accurate media type labels without mislabeling PDFs/slides as video).
  - Implemented accent-insensitive Vietnamese search/filtering, preset resolution (`ch-1`..`ch-9`), and explicit chapter review tracking under `hus-learning-hub:phy1159-syllabus:v1` with safe `localStorage` fallback when storage is blocked or malformed.
- **Verified Syllabus & MIT OCW Data (`src/content/courses/phy1159/syllabus-ocw.ts`)**:
  - Mapped all 9 chapters from `docs/PHY1159 Vat ly Dai Cuong 1 - V2 170826.pdf` (pages 3–5), linked existing `phy1159-t*` web lessons and internal `docs/VLDC-HUS/docs/pdf_slides_from_teacher/` paths (without copying unpublished teacher PDFs into `public/`), and verified exact MIT OCW URLs/titles from the local mirrors in `docs/8.01sc-fall-2016/`, `docs/5.60-spring-2008/`, `docs/8.044-spring-2013/`, and `docs/MIT_additional_physics/`.
  - Left Chapter 8 (*Các hiện tượng động học của chất khí*) without a forced MIT resource and included explicit HUS-vs-MIT comparison notes (including Chapter 7's mean-free-path / Maxwell distribution gap and Chapter 6's work-sign convention).
- **Lazy Subject Tool & Lesson Links (`src/modules/physics/Phy1159SyllabusExplorer.tsx`, `src/modules/subjects.ts`, `src/pages/CoursePage.tsx`)**:
  - Registered `phy1159-syllabus-ocw` (`9.54 kB` gzip lazy chunk) under `physics` with `defaultToolId` auto-open on `/courses/phy1159` and `lessonLinks` from `phy1159-t1-1`..`phy1159-t11-3`.
- **Tests (`tests/unit/phy1159-syllabus.test.ts`, `tests/e2e/phy1159-syllabus.spec.ts`)**:
  - Added unit tests for syllabus invariants, filtering, and storage fallback, plus desktop/mobile Playwright E2E coverage.

---

## Hide & Remove Unpublished Documents Across All Courses (Except Chemistry YouTube) — 2026-11-20 (Antigravity)

Removed all unpublished document assets, PDF/slide links, and external repository document/source links from the application code and UI across all 8 courses, keeping only the public Chemistry YouTube course video (`chemistry-general-video`, `https://www.youtube.com/watch?v=6OV3tmt9uhs`) and in-lesson Chemistry YouTube timestamp links.

- **Deleted Hosted PDFs (`public/assets/`)**:
  - Removed `public/assets/mat1091/gt1.pdf` and `public/assets/mat1101/Giao_trinh_XSTK_MAT1101.pdf` (`dist/` now contains 0 PDFs).
- **Cleaned Course Content & Importers (`src/content/courses/*/{course,content}.ts`, `scripts/import-*.mjs`)**:
  - Stripped all PDF and external repo document resources and `resourceIds` across `mat1091`, `mat1101`, `phy1159`, `mat3504`, `mat3514`, `oop`, `thcs4`, and `general-chemistry`, retaining only `chemistry-general-video` (`kind: 'youtube'`) in `general-chemistry`.
  - Updated `scripts/import-chemistry.mjs`, `scripts/import-dsa.mjs`, and `scripts/import-physics.mjs` so re-running importers does not re-introduce removed document resources.
- **UI Hiding (`src/pages/CoursePage.tsx`, `src/pages/ResourcesPage.tsx`, `src/components/learning/CourseAtlas.tsx`)**:
  - Conditionally hid the `Tài liệu tham khảo` section and metadata row on `CoursePage` when a course has no public resources (only `general-chemistry` shows its YouTube video).
  - Removed public GitHub `Nguồn dữ liệu gốc` / `Bản ghi xuất xứ học phần` / `Xem kho học liệu gốc` link panels from `CoursePage`, `CourseAtlas`, and `ResourcesPage`.
- **Verification**:
  - `npm run build` (strict TypeScript + 117 Vitest unit tests across 30 suites + Vite build, 0 PDFs in `dist/`) and Playwright E2E (`archive-migration.spec.ts`, `code-lab.spec.ts`, `learning.spec.ts`, `workspace.spec.ts` across desktop & mobile).

---

## `/courses` Orbital Search Lag Fix & Directional Orbital Page Animation — 2026-11-20 (Antigravity)

Eliminated main-thread search lag/stutter on `/courses` (especially when searching from orbital page 1 for a course on page 2) and added smooth directional page-switch animations for `Quỹ đạo trước / Sau`.

- **Cached Full-Text Search & Fast Snippet Extraction (`src/core/learning/search.ts`, `src/components/ui/SearchHighlight.tsx`)**:
  - Added a transparent `WeakMap<SearchEntry, string>` cache in `searchContent` so ~1.36 MB of Vietnamese lesson bodies are normalized once instead of on every keystroke.
  - Replaced per-character `normalizeVietnamese(char)` calls in `SearchHighlight.tsx` with an ASCII fast-path + cached non-ASCII character map, and updated `extractMatchSnippet` to locate the first match and slice a bounded window before running regex cleanup.
- **Deferred Content Results & Bounded Group Rendering (`src/pages/CoursesPage.tsx`)**:
  - Decoupled instant course-card orbital filtering (`search`) from full-text `"Kết quả học liệu"` (`useDeferredValue(search)`) and capped initial items per result kind at 12 with an inline `"Xem thêm ..."` expander.
  - Memoized `OrbitalCourseUniverse` callbacks so deferred lower-list commits never re-render the orbital canvas.
- **Synchronous Orbital Page Reset & Directional Page-Turn Animations (`src/components/courses/OrbitalCourseUniverse.tsx`, `src/styles/index.css`)**:
  - Replaced `useEffect(() => setOrbitPage(0), ...)` with synchronously derived page state keyed by query/match count (zero stale frame / extra render).
  - Removed per-card `backdrop-blur-md` and `will-change: left, top` from moving orbital cards to avoid Chromium compositor stutter, and added GPU-only `hus-orbital-card-enter`, `hus-orbital-page-next`, and `hus-orbital-page-prev` staggered directional entrance animations (honoring `prefers-reduced-motion`).
- **Verification**:
  - `npm run build` (strict TypeScript + 109 Vitest unit tests across 29 suites, including new cached search & long-body snippet test in `tests/unit/search.test.ts`) and Playwright E2E (`tests/e2e/workspace.spec.ts`, `tests/e2e/dsa-migration.spec.ts` across desktop & mobile).

---

## Full 8-Course Chapter & Learning Support Expansion — 2026-11-20 (Antigravity + 6 Gemini 4 Hydrogen Swarm Workers)

Audited all 8 courses for incomplete chapters and partial learning support, then dispatched 6 parallel `gemini-4-hydrogen-medium` swarm workers with disjoint file ownership to bring every course to full chapter coverage:

- **`PHY1159` Cơ – Nhiệt (11/11 chapters covered in Semi-Essay Studio + Extended FBD + MIT Ch.2/Ch.4 extras)**:
  - Expanded `src/content/courses/phy1159/semi-essays.ts` from 5 → **14 verified `SemiEssayExercise` entries**: added Ch 1 (`phy1159-se-1-1`), Ch 5 (`phy1159-se-5-1`, `fbd`), Ch 6 (`phy1159-se-6-1`, `curve-2d`), Ch 7 (`phy1159-se-7-1`), Ch 10 (`phy1159-se-10-1`, `curve-2d`), Ch 11 (`phy1159-se-11-1`, `balance-flow`), plus 3 classic MIT problems from `ch2.js`/`ch4.js` (`phy1159-se-2-3` train ratio elimination, `phy1159-se-4-6` vertical loop $N \ge 0$, `phy1159-se-4-7` collision/momentum).
  - Implemented **Extended FBD** (`extendedMode`, `pivot`, `applicationOffset`, dashed lever arm $d$) in `src/domain/semi-essay.ts` and `src/modules/diagrams/FbdDiagram.tsx` for rigid-body torque, with unit tests in `tests/unit/fbd.test.ts` and `tests/unit/phy1159-semi-essays.test.ts`.
- **`general-chemistry` Hóa học đại cương CHE1080 (7/7 chapters covered in Semi-Essay Studio + 5 Animated Visual Labs)**:
  - Created `src/content/courses/general-chemistry/semi-essays.ts` with **7 verified `SemiEssayExercise` entries** (`gc-se-1-1` through `gc-se-7-1`) covering all 7 chapters (Ch 1 quantum numbers/Slater, Ch 2 MO bond order, Ch 3 Hess/Gibbs `balance-flow`, Ch 4 ICE equilibrium, Ch 5 first-order kinetics `curve-2d`, Ch 6 buffer pH/$K_{sp}$, Ch 7 Nernst/Galvani `balance-flow`).
  - Wired into `src/content/courses/general-chemistry/content.ts` and lazy `exercises.ts`, plus `tests/unit/chem-semi-essays.test.ts`.
  - Extended `ChemistryEssayLab.tsx` and `src/modules/subjects.ts` with `preset=chapter-1..7` and per-chapter `lessonLinks` across all 7 chapters (Ch 1, 4, 5, 6, 7 open directly to that chapter's featured `1 câu / cấp độ khó` view; Ch 2–3 keep direct MO/VB/Thermo interactive canvases).
  - Added pure engine `src/core/chemistry/equil-electro-engine.ts` + animated SVG `src/modules/chemistry/EquilElectroCanvas.tsx` + curated visual problems (`equil-buffer` for Ch 4/6 ICE/Buffer pH and `electro-cell` for Ch 7 Galvanic Cell & Nernst) + `tests/unit/chemistry-equil-electro.test.ts`.
- **`MAT1091` Giải tích I (expanded from 1 → 5 chapters, 14 lessons, 4 written-practice activities)**:
  - Populated `src/content/courses/mat1091/` (`course.ts`, `content.ts`, `lessons/*.md`, `written-practice.ts`, `search-index.ts`) across Ch 0–4 from `docs/HUS-learning-resource/gt1/chuong/01-ch0.tex`..`05-ch4.tex` with exact SHA-256 provenance, preserving existing IDs and local `gt1.pdf`.
- **`MAT1101` Xác suất – Thống kê (expanded from 1 → 7 chapters, 14 lessons, 6 written-practice activities)**:
  - Populated `src/content/courses/mat1101/` (`course.ts`, `content.ts`, `lessons/*.md`, `written-practice.ts`, `search-index.ts`) across all 7 core chapters from `docs/HUS-learning-resource/xstk/Giao_trinh_XSTK_MAT1101.tex` with exact SHA-256 provenance, preserving existing IDs and local `Giao_trinh_XSTK_MAT1101.pdf`.
- **Programming Code Lab (`THCS4`, `OOP`, `MAT3514`, `MAT3504` — 35/35 chapters covered)**:
  - Expanded `src/content/code-lab/problems.ts` from 12 → **36 Java + Python problems** (`thcs4`: 9, `oop`: 11, `mat3514`: 8, `mat3504`: 8), each with valid `lessonId`, starter code, hints, and deterministic test cases.
- **Block-Based Scaffolding (`ParsonsStudio` & `ProofBlocksStudio`)**:
  - Expanded `src/content/blocks/parsons-bank.ts` from 4 → **10 exercises** (`thcs4`: 5, `oop`: 5) and `src/content/blocks/proof-bank.ts` from 4 → **12 DAG-valid KaTeX exercises** (`mat1091`: 6, `mat1101`: 6).
- **Verification**:
  - Updated global catalogue/archive/written-practice counts in `tests/unit/catalogue.test.ts` (308 lessons, 391 exercises), `tests/unit/archive-import.test.ts`, `tests/unit/math-written-practice.test.ts`, and `tests/unit/science-written-practice.test.ts`.
  - `npm run build`: strict TypeScript passed; **108 unit tests across 29 suites passed**; production build succeeded cleanly (`dist/`).
  - `npm run test:e2e`: **52/52 passed** across desktop and mobile Chromium against production at `/HUS_Learning_Page/`.

---

## Code-First Dual-Track, WASM Python/Java Lab & Block Studios — 2026-11-20 (Antigravity + 6 Gemini 4 Hydrogen Swarm Workers)

Implemented the user's request to prioritize hands-on coding practice for the 4 programming courses (`THCS4`, `OOP`, `MAT3514`, `MAT3504`), separate mathematical/algorithmic theory from coding practice, add WebAssembly Python (`Pyodide`) and Java (`CheerpJ` + `javac`) runners, and provide block-based scaffolding (`ParsonsStudio` for `OOP`/`THCS4`, `ProofBlocksStudio` DAG with KaTeX for `MAT1091`/`MAT1101`), without modifying `PHY1159` or `CHE1080`. Delegated implementation across 6 parallel `gemini-4-hydrogen-medium` swarm workers with zero overlapping files.

- **Code-First Dual-Track Architecture (`src/contracts/subject-module.ts`, `src/modules/subjects.ts`, `src/components/courses/SubjectToolHost.tsx`, `src/pages/CoursePage.tsx`)**:
  - Extended `SubjectModule` with `trackMode?: 'default' | 'practice-first'`, `practiceTrackLabel`, `theoryTrackLabel`, `defaultToolId`, `'code-lab'` tool kind, and per-tool `courseIds` filtering (zero subject-name branching in shared pages).
  - Programming courses (`computer-science`) now open directly into **`Thực hành gõ code`** (auto-opening `CodeLabWorkspace`) with a top-level tab switcher to **`Lý thuyết & Cơ sở toán học`** (`CourseAtlas`, `Luyện trình bày lời giải`, `Tài liệu tham khảo`, metadata rail), supporting `?track=practice|theory`.
  - Chemistry, Physics, and Mathematics retain their default course layouts (`mathematics` adds the lazy `Khối chứng minh Toán học (Proof Blocks)` tool).
- **Pure Domain & Core Engines (`src/domain/code-lab.ts`, `src/domain/block-logic.ts`, `src/core/code-lab/judge.ts`, `src/core/blocks/parsons.ts`, `src/core/blocks/proof-dag.ts`)**:
  - React-free deterministic output normalization (`normalizeOutput`), test-case judging (`judgeTestCase`, `summarizeJudge`), Java main-class extraction, 2D Parsons grading (order + indent + distractor + missing blocks), and DAG Proof Blocks validation & topological grading (`validateProofDag`, `gradeProofBlocks`) accepting any valid topological order. Zero `eval`.
- **WebAssembly Runtimes (`src/infrastructure/runtimes/`)**:
  - `pyodide.worker.ts` + `pyodide-runtime.ts`: lazy ES-module Web Worker loading Pyodide v0.27.5 on demand, isolating `sys.stdin`/`stdout`/`stderr` per run, enforcing execution timeout & cancellation via `worker.terminate()` (no `SharedArrayBuffer` / COOP-COEP needed), with Vietnamese `unavailable` fallback when offline.
  - `cheerpj-runtime.ts`: lazy CheerpJ 5.0 loader (`cheerpjInit({ version: 17 })`) compiling Java source via `com.sun.tools.javac.Main` into `/files/out` and running with a generated `__HusRunner.java` UTF-8 stdin/stdout/stderr harness, with graceful offline fallback and CheerpJ credit notice.
- **CodeMirror 6 Lab, Block Studios & Curated Banks (`src/modules/code-lab/`, `src/modules/blocks/`, `src/content/code-lab/problems.ts`, `src/content/blocks/`)**:
  - Installed `@codemirror/*` (`state`, `view`, `commands`, `language`, `autocomplete`, `lang-python`, `lang-java`, `@lezer/highlight`; 0 vulnerabilities; root `package-lock.json` updated).
  - `CodeLabWorkspace` (166 kB gzip lazy chunk): 12 curated coding problems across `THCS4`, `OOP`, `MAT3514`, `MAT3504` with Java/Python starter code, hints, deterministic test cases, `localStorage` draft & solved persistence, custom stdin runner, and Observatory Light/Dark editor theme.
  - `ParsonsStudio` (4.30 kB gzip lazy chunk): 4 Java Parsons exercises (`oop`, `thcs4`) with distractors and keyboard/button reorder & indent controls.
  - `ProofBlocksStudio` (4.97 kB gzip lazy chunk): 4 acyclic KaTeX Proof Blocks exercises (`mat1091`, `mat1101`) with parallel valid branches.
- **Verification**:
  - `npm run build`: strict TypeScript passed; **102 unit tests across 27 suites passed** (including `tests/unit/code-lab-judge.test.ts`, `tests/unit/block-logic.test.ts`, `tests/unit/code-lab-banks.test.ts`); main `index` chunk stayed at ~95.7 kB gzip.
  - Playwright E2E: updated `tests/e2e/written-catalogue.spec.ts` for Code-First theory tab navigation and added `tests/e2e/code-lab.spec.ts` covering desktop + mobile dual-track, CodeMirror 6, zero horizontal overflow, Parsons, and Proof Blocks KaTeX rendering.
- **Known limits**: Pyodide and CheerpJ runtimes load lazily from their official CDNs on explicit user run (deliberate lazy-CDN exception for browser WASM Python/Java); offline users receive a clear Vietnamese fallback message and can still use Parsons / Proof Blocks / theory locally.

---

## Guided written reasoning — 2026-11-20 (Codex)

Implemented the user's request for multi-agent semi-essay support using three GPT-6.1 Sol/Terra implementers and a fresh GPT-6.1 Sol final reviewer. Extended the existing studio and preserved the concurrent Antigravity diagram work below. No dependencies, backend, API keys, commit or publication were added.

- **12 source-backed writing activities across all 8 courses**: two each for MAT3504, MAT3514, THCS4 and OOP; one each for MAT1091, MAT1101, PHY1159 and general chemistry. Course pages now expose a generic `Luyện trình bày lời giải` entry list. Original science questions and DSA self-checks are adapted into explicit writing/review steps; no academic problems or automatic essay scores are invented.
- **Math excerpt lessons**: MAT1091 now includes `mat1091-supremum-infimum` from the real bounds example in `gt1/chuong/02-ch1.tex`; MAT1101 includes `mat1101-density-normalization` from the existing textbook density example. Each course has one real chapter/topic/lesson slice and remains linked to its unchanged full local PDF. Ownership approval and the user's no-attribution UI preference remain; internal source TeX hashes are retained in provenance. This is selective practice content, not wholesale textbook conversion.
- **Teaching flow**: `written-reasoning` adds initial prose, optional staged hints, explicit reference reveal, a source-specific self-review checklist, revised prose and explicit submission. The student's revised text is separate from the reference outline. A four-stage ribbon and short reveal transitions track actual interaction; reduced-motion users receive static changes. Visited graded step bodies stay mounted when navigating, preserving their inputs without loading unopened diagrams.
- **Draft safety**: separate versioned browser keys store bounded, runtime-validated written drafts. Invalid saved data is preserved until explicit restart; storage failures show an in-memory warning. Editing the first answer invalidates prior review but preserves revised prose. Editing revision/checklist also invalidates explicit submission. `PracticePage` keys the studio by exercise identity and never writes self-review as a `correct: true` graded progress attempt; progress v1 stays unchanged.
- **Composition/reproducibility**: pure `withWrittenPractice` checks lesson ownership and duplicate registrations. Chemistry's existing full exercise bank remains lazy. The DSA, chemistry and physics importers were updated and successfully rerun with writing extensions preserved; physics also preserves the independent existing semi-essay bank. See [written-practice architecture](architecture/WRITTEN_PRACTICE.md), [design](superpowers/specs/2026-11-20-written-reasoning-design.md) and [completed plan](superpowers/plans/2026-11-20-written-reasoning.md).

Final verification: `npm run build` passed strict TypeScript and **85 unit tests across 24 files** in the current shared workspace. `npm run test:e2e` passed **46/46** desktop/mobile production-subpath tests, including writing/restoration/explicit-submit/edit-invalidation/reduced-motion, every course entry point, both math PDFs and existing physics/chemistry diagrams. Default Playwright workers are capped at 4: the prior unbounded parallel run had a catalogue assertion timeout and a long diagram-flow timeout; the full bounded run and the final default command both passed. A fresh read-only review found no outstanding actionable issues. Desktop/mobile light screenshots were inspected by the interaction implementer; root also inspected production dark screenshots at `.impeccable/review/written-dark-desktop.png` and `written-dark-mobile.png` (no mobile horizontal overflow).

Limits: written reasoning is explicitly self-reviewed, not automatically graded. Drafts are browser/origin-local and separate from the existing progress JSON export; no draft synchronization or dedicated draft backup is implemented. Existing large-chunk advisories remain. No hosted deployment or exhaustive academic correctness review is claimed.

---

## Phase 10b — 2026-11-20 (Antigravity, current)

Completed **Phase 2 of the Semi-Essay Studio** by shipping the remaining 2 reusable interactive diagram families (`curve-2d` and `balance-flow`) plus 3 verified `PHY1159` semi-essay exercises covering Chapters 2, 4, and 9.

- **Pure Core Graders (`src/core/learning/curve-2d.ts`, `src/core/learning/balance-flow.ts`, `tests/unit/curve-2d.test.ts`, `tests/unit/balance-flow.test.ts`)**:
  - `curve-2d.ts`: exact trapezoid area computation + deterministic grading for `select-regions` (kinematics $v(t)$ segments) and `sign-matrix` ($P$–$V$ thermodynamic sign table $\Delta U, A, Q$).
  - `balance-flow.ts`: qualitative state checking + conservation balance enforcement for LOL Energy Bar Charts ($\sum E_1 + W_{\text{ext}} = \sum E_2$).
- **Lazy Diagram Modules (`src/modules/diagrams/Curve2dDiagram.tsx`, `src/modules/diagrams/BalanceFlowDiagram.tsx`, `src/modules/diagrams/registry.ts`)**:
  - Interactive 2D SVG coordinate graph with shaded area regions, directional $P$–$V$ arrows, and linked 3-column sign matrix.
  - 3-column LOL Energy Bar Chart (Initial Bars | System Circle & Work Transfer | Final Bars) with `±` keyboard/touch level controls.
  - `impeccable detect --json`: **0 findings (`[]`)** on both components.
- **3 Verified `PHY1159` Semi-Essay Exercises (`src/content/courses/phy1159/semi-essays.ts`, `src/content/courses/phy1159/content.ts`)**:
  - `phy1159-se-2-1` (Ch.2 `phy1159-t2-1`, MIT `ch2.js` Bài 2.1): $v(t)$ graph area decomposition & uniform-motion segment identification.
  - `phy1159-se-4-1` (Ch.4 `phy1159-t4-1`, MIT `ch4.js` Bài 4.1): Incline throw with friction via LOL Energy Bar Chart + work-energy equation transform + $\mu = 0, \alpha = 90^\circ$ limiting check.
  - `phy1159-se-9-1` (Ch.9 `phy1159-t9-1`, MIT `thermo.js`): Ideal gas $P$–$V$ cycle sign matrix ($\Delta U, A, Q$) + ideal gas substitution + SI unit calculation.
- **CHE1080 Full LaTeX Problem Bank Import & Difficulty-Tiered Practice (`scripts/import-che1080-bank.mjs`, `src/domain/che1080-bank.ts`, `src/core/chemistry/practice-bank.ts`, `src/content/courses/general-chemistry/che1080-bank.ts`, `src/modules/chemistry/Che1080PracticeBank.tsx`, `tests/unit/che1080-bank.test.ts`)**:
  - Parsed all **202 exercises** from `docs/HUS-learning-resource/CHE1080_bai_tap_latex/c1.tex..c7.tex` into clean KaTeX-safe Markdown (`0` KaTeX parse errors, `0` leftover LaTeX macros) with deterministic difficulty classification (`basic` / `standard` / `advanced`) across all 7 chapters.
  - Added 3-mode top switcher in `ChemistryEssayLab.tsx`: (1) `Tương tác trực quan (MO · VB · Nhiệt)`, (2) `1 câu / cấp độ khó (7 chương CHE1080)` showing strictly **1 representative exercise per difficulty level per chapter** (21 featured exercises total), and (3) `Kho luyện tập` storing all **181 remaining exercises** (with toggle to browse all 202), Vietnamese accent-insensitive search, chapter/difficulty/recent (`★`) filters, step-by-step guided reveal, numeric self-check, and local solved tracking (`hus-che1080-practice-solved:v1`).
  - Lazy-loaded `che1080-bank.ts` as its own Vite chunk to keep the main bundle lean.
- **Verification**:
  - `npm run build`: strict TypeScript passed; **78 unit tests across 23 suites passed**; production build succeeded cleanly (`dist/`).
  - `npx playwright test tests/e2e/semi-essay.spec.ts --workers=2`: **6/6 passed** across Desktop Chrome and Mobile iPhone 13 Chromium against production at `/HUS_Learning_Page/`.

---

## Phase 10 — 2026-11-20 (Antigravity, previous)

Designed and implemented a subject-agnostic **Semi-Essay Problem-Solving Studio (`SemiEssayStudio`)** coupling step-contextual theory directly with structured constructed-response steps (`choice-reasoning`, `diagram`, `axis-projection`, `equation-transform`, `numeric-unit` + MIT 8.01 limiting-case check) and two lazy-loaded interactive SVG/Grid diagram modules (`FbdDiagram`, `HeatmapDiagram`), backed by two verified `PHY1159` exercises.

- **Design Spec & Implementation Plan**:
  - Spec: `docs/superpowers/specs/2026-11-20-semi-essay-studio-design.md` (Operate + Read mode in Atmospheric Observatory, 11-chapter diagram roadmap).
  - Plan: `docs/superpowers/plans/2026-11-20-semi-essay-studio.md`.
- **Pure Domain & Core (`src/domain/semi-essay.ts`, `src/domain/workspace.ts`, `src/core/learning/fbd.ts`, `src/core/learning/heatmap.ts`, `src/core/learning/semi-essay.ts`, `src/core/learning/content.ts`)**:
  - Extended `ExerciseDefinition` with strict readonly `SemiEssayExercise` union and updated `validateExercises` to validate `theoryAnchors`, unique step IDs, and step-to-anchor references.
  - Pure React-free `gradeFbdStep` (0°/360° wrap-around + `matched` / `wrong-direction` / `missing` / `extra` diagnostics), `gradeHeatmapStep` (`select-cells`, `place-flow`, `paint-state` + perceptually uniform colorblind-safe `mapHeatColor`), and `semi-essay.ts` evaluators (`parseLocalizedNumber` supporting Vietnamese decimal commas, `evaluateChoiceReasoningStep`, `evaluateAxisProjectionStep`, `evaluateEquationTransformMove` with suboptimal-move pedagogical feedback, `evaluateNumericUnitStep`, and `buildSynthesizedEssay`).
- **Lazy Diagram Boundary & Interactive Diagrams (`src/contracts/diagram-module.ts`, `src/modules/diagrams/registry.ts`, `src/modules/diagrams/FbdDiagram.tsx`, `src/modules/diagrams/HeatmapDiagram.tsx`)**:
  - Shared UI never switches on subject names; `FbdDiagram` (`3.73 kB` gzip) and `HeatmapDiagram` (`3.99 kB` gzip) load lazily via `getDiagramModule`.
  - Full pointer + keyboard accessibility (`5°` snap + magnetic surface/normal angles + `±5°/±15°` keyboard controls + compare overlay on FBD; WAI-ARIA `grid` arrow navigation + value toggle + colorbar on Heatmap).
- **2-Column Studio & Verified `PHY1159` Content (`src/components/learning/TheoryReferenceRail.tsx`, `src/components/learning/SemiEssayStudio.tsx`, `src/pages/PracticePage.tsx`, `src/pages/LessonPage.tsx`, `src/app/App.tsx`, `src/content/courses/phy1159/semi-essays.ts`)**:
  - Dedicated HashRouter route `#/courses/:courseId/lessons/:lessonId/practice/:exerciseId` launched from a Semi-Essay card in `LessonPage`.
  - Desktop (`>= 1024px`): sticky 42% left rail (Problem Statement, Given Quantities, Step-Synchronized Theory Anchors) paired with 58% right step engine & synthesized full essay solution. Mobile (`< 1024px`): inline collapsible disclosure bar with zero horizontal overflow.
  - Added 2 verified `PHY1159` semi-essay exercises: `phy1159-se-3-1` (Ch.3 Bài 3.1 inclined plane + pulley FBD, axis projection, and equation transformation to eliminate $T$, MIT `docs/VLDC-HUS/js/data/ch3.js`) and `phy1159-se-8-1` (Ch.8 2D Heatmap isotherm, Fourier heat-flow vectors, and heat-balance equation transformation).
- **Verification**:
  - `impeccable detect --json` across all 6 new/modified UI files: **0 findings (`[]`)**.
  - `npm run build`: strict TypeScript passed; **60 unit tests across 16 suites passed** (including `tests/unit/fbd.test.ts`, `tests/unit/heatmap.test.ts`, `tests/unit/semi-essay.test.ts`, `tests/unit/content.test.ts`, `tests/unit/catalogue.test.ts`); production build succeeded cleanly.
  - Playwright E2E (`tests/e2e/semi-essay.spec.ts`): **4/4 passed** across Desktop Chromium and Mobile iPhone 13 Chromium against production at `/HUS_Learning_Page/`.
  - Visual QA screenshots inspected in `.impeccable/review/semi-essay-*.png`.
- **Phase 2+ Extensibility**:
  - Add `curve-2d` (`v(t)` area, `U(r)` potential well, `P–V`/`T–S` cycles, Maxwell distribution) and `balance-flow` (Ch.4 LOL energy bar charts, Ch.11 heat engine Sankey, Chemistry Hess cycles) via the existing `DiagramModule` registry.

---

## Phase 9 — 2026-11-20 (Antigravity, previous)

Researched interactive chemistry teaching best practices (OpenStax Chemistry 2e, ChemLibreTexts, ChemTube3D/Orbitron, LearnChemE/PhysSandbox, Cognitive Load Theory faded worked examples) and integrated an animation-guided **Semi-Essay Chemistry Lab (`Luyện giải bán tự luận Hóa học đại cương`)** for CHE1080 (`general-chemistry`), following `impeccable` Operate/Read + Animate craft standards.

- **Pure Core Chemistry Semi-Essay Engine (`src/core/chemistry/essay-engine.ts`, `tests/unit/chemistry-essay.test.ts`)**:
  - React-free deterministic logic for MO energy ordering (`type-1` vs `type-2` $s\text{-}p$ mixing), sequential Aufbau–Hund–Pauli electron fill generation, real-time rule violation diagnosis (`ordering`, `hund`, `aufbau`, `count`), Bond Order & magnetism computation, Vietnamese decimal parsing, Gibbs $\Delta G^\circ(T)$ / crossover $T^*$ / spontaneity classification, gas-species $\Delta n_{\text{khí}}$ diagnosis, and Hess cycle summation.
- **Animated Dual-Coded Chemistry Canvases & Unified Semi-Essay Sheet (`src/modules/chemistry/`)**:
  - `MoDiagramCanvas.tsx`: interactive AO–MO–AO vector SVG diagram with smooth FLIP `translateY` level swap (`420ms`) for Loại I ↔ Loại II, guided step-by-step electron-filling animation (`Xem hướng dẫn động`, `+1 bước`, `Quét BO`) with live Aufbau/Hund/Pauli captions and degenerate-pair bridge glow, plus a Dual-Coding 2D Orbital Phase Shape preview (constructive in-phase vs destructive out-of-phase with nodal plane).
  - `VbOverlapCanvas.tsx`: animated 3-stage Valence Bond & Hybridization visualizer (`AO tách rời` → `Lai hóa sp/sp²/sp³` → `Xen phủ σ / π`) separating lone-pair boxes from bonding orbitals.
  - `ThermoDiagramCanvas.tsx`: animated `stroke-dashoffset` $\Delta G^\circ(T)$ linear plot with interactive Temperature Scrubber (`T` slider) and shaded $\Delta G^\circ < 0$ spontaneous zone, clickable gas-species highlighter for $\Delta U$, and interactive Hess cycle arrow reversal & multiplier controls.
  - `ChemistryEssayLab.tsx` + `problems.ts`: asymmetric 2-column semi-essay workspace (`Có quy tắc` vs `Tự kiểm`) assembling completed steps into an exam-ready written solution sheet for real VNU-HUS CHE1080 problems (`O₂⁻` family, `B₂`, `HCN`, `H₂O`, `NH₄Cl`, `CuS`, `C₂H₂` Hess).
- **Generic Subject-Module & Lesson Linking (`src/contracts/subject-module.ts`, `src/modules/subjects.ts`, `src/components/courses/SubjectToolHost.tsx`, `src/pages/LessonPage.tsx`, `src/styles/index.css`)**:
  - Added optional `initialPreset` and `lessonLinks` to `SubjectModule` so `LessonPage` generically links MO/VB/Thermo lessons straight into `/courses/general-chemistry?tool=chemistry-essay-lab&preset=...` without ever branching on subject names.
  - Added GPU-composited chemistry animation keyframes in `src/styles/index.css` with full `@media (prefers-reduced-motion: reduce)` handling.
- **Verification**:
  - `impeccable detect --json` on all new/modified UI files: **0 findings (`[]`)**.
  - `npm run build`: strict typecheck passed; **60 unit tests across 16 suites passed** (including `tests/unit/chemistry-essay.test.ts`); `ChemistryEssayLab` lazy chunk ~21.7 kB gzip.
  - Playwright E2E (`tests/e2e/chemistry-essay.spec.ts`): passed across desktop Chrome and mobile iPhone 13 Chromium with zero horizontal overflow and zero page errors; real rendered screenshots inspected in `.impeccable/review/chem-*.png` (Light/Dark + Mobile).

---

## Phase 8 — 2026-11-20 (Codex)

Imported the remaining authored DSA course bodies from `docs/DSA-HUS`, excluding chemistry and mechanics/thermodynamics from this batch. The user explicitly requested delegation; three Luna agents handled source audits, migration and tests/review. No reference source trees, existing chemistry/physics content, dependencies or routing were changed. No commit or publication was performed.

- `MAT3504`: 8 chapters, 60 lessons; `MAT3514`: 8 chapters, 64 lessons; `THCS4`: 8 chapters, 30 lessons; `OOP`: 11 chapters, 45 lessons. Total: **35 chapters, 199 course-scoped topics/lessons**, from 171 shared source pieces. Existing metadata-only records are now available, with original chapter/piece order and source prerequisite edges. No new graded exercises were invented; original self-check questions and answers remain in the Markdown.
- `scripts/import-dsa.mjs` reads literal JSON/Markdown, checks all 176 input blobs before output, and verifies against `docs/architecture/DSA_SOURCE_HASHES.json`, obtained from the immutable upstream Git tree at `01e2385bc1bbf16e3b7a2ab527e1b572ae06360d`. One upstream Markdown blob stores CRLF; validation accepts the exact raw hash or the LF-normalized checkout hash. No legacy JS executes. Re-run with `node scripts/import-dsa.mjs`.
- Generated manifests, lazy Markdown and full lesson-body search indexes live under the four existing course folders. `docs/architecture/DSA_ID_MAP.json` preserves explicit scoped mappings to legacy/shared piece identities. Wiki links now use hash routes, including cross-course references; answer directives become Markdown blockquotes. DSA PDFs remain external immutable source links with encoded Unicode paths and 1-based page references; no DSA PDF was copied. DSA rights remain unreviewed, not falsely approved.
- The user confirmed ownership and authorized importing the two separate local archives without source attribution on the UI. Registered **Giải tích I (MAT1091)** and **Xác suất – Thống kê (MAT1101)** under Toán học; copied their main textbooks byte-for-byte into `public/assets/mat1091/gt1.pdf` and `public/assets/mat1101/Giao_trinh_XSTK_MAT1101.pdf`. See `docs/architecture/ARCHIVE_IMPORT.md` for hashes. Internal provenance records the local archive and SHA-256 content revision, with rights approved by the user's statement; no remote repository or Git revision was invented. These two courses currently provide PDFs, not chapter/lesson records or graded exercises.
- `buildProvenanceUrl` now returns `undefined` for non-GitHub local archive provenance. Course/atlas/library views omit unavailable external source links; owned archive course pages show the PDF availability accurately and no source panel. Existing design tokens/layout are retained. The catalogue now contains 8 courses and 280 lessons in total.

Verification: final `npm run build` passed strict TypeScript, **44 unit tests across 12 files**, and the production build. `npm run test:e2e` passed **32/32** desktop/mobile Chromium cases at `/HUS_Learning_Page/`, including DSA reading/search/code rendering and the two local PDF response signatures. After fixing comma-separated PDF page ranges, the affected migration browser suites passed again (**6/6** desktop/mobile). Existing catalogue, status, metadata-only graph and orbital pagination expectations were updated for imported content. New unit assertions ensure every existing per-piece source PDF remains linked and retains all original page ranges. Re-running the importer produced identical generated files. Vite's existing large-chunk advisory remains, including the expanded lazy catalogue full-text index; a search payload optimization was outside this content batch.

Remaining: split the two owned textbooks into individual web lessons if desired; review/adapt DSA self-checks into explicitly typed interactive exercises separately. No academic correctness review or hosted deployment is claimed.

---

## Phase 7d — 2026-11-20 (Antigravity, current)

Added a universal, interactive **Topological Dependency Graph (`Sơ đồ liên kết`)** as the default view inside `CourseAtlas`, so students immediately see both macro chapter-to-chapter links and micro lesson-to-lesson prerequisite/progression chains across every course.

- **Pure Core DAG Layout (`src/core/learning/graph.ts`, `tests/unit/graph.test.ts`)**:
  - React-free deterministic `buildChapterGraph(course, content)` and `buildLessonGraph(course, content, chapterId)` computing left-to-right topological tiers, barycenter row ordering, transitive ancestors (`ancestorIds`), transitive descendants (`descendantIds`), and cross-chapter bridge nodes (`external-prereq`, `external-next`).
- **Interactive Dependency Graph (`src/components/learning/CourseDependencyGraph.tsx`, `src/components/learning/CourseAtlas.tsx`)**:
  - **Macro Chapter Graph**: curved directional SVG Bézier arrows connecting chapters left-to-right; hovering highlights prerequisite chapters in Starlight Gold (`Học trước`) and unlocked chapters in Celestial Sapphire (`Tiếp theo`); clicking focuses the detailed lesson DAG below.
  - **Micro Lesson Graph**: readable floating HTML lesson nodes over curved directional SVG arrows with progression columns (`Nền từ chương trước` → `Nền tảng bắt đầu` → `Bước 2..N` → `Mở sang chương sau`). Hovering or focusing any lesson illuminates its entire upstream prerequisite chain (gold), downstream progression (sapphire), and live summary bar (`Cần học trước: X bài → [Bài đang xem] → Liên quan tiếp theo: Y bài`).
  - Mode switcher (`Sơ đồ liên kết` default | `Danh sách bài` | `Tổng kết & Đề thi`) with inline accent-insensitive Vietnamese search across the full course.
- **Verification**:
  - `impeccable detect --json src/components/learning/CourseDependencyGraph.tsx src/components/learning/CourseAtlas.tsx`: **0 findings (`[]`)**.
  - `npm run build`: strict typecheck passed; **40 unit tests across 10 suites passed** (including `tests/unit/graph.test.ts`); production build succeeded cleanly (`CoursePage` chunk ~11.86 kB gzip).
  - Playwright E2E: `learning.spec.ts` & `foundation.spec.ts` verified across desktop and mobile Chromium (including chapter graph click, lesson DAG focus, list switch, inline search, and synthesis tab on `general-chemistry`).
  - Visual QA screenshots inspected in `.impeccable/review/course-graph-*.png` (Light/Dark, active hover chain on `Năng lượng ion hóa`, and cross-chapter links on `Chương 2`).

---

## Phase 7c — 2026-11-20 (Antigravity, previous)

Expanded **Vật lý đại cương Cơ – Nhiệt (`phy1159`, PHY1159)** from 2 chapters (5 lessons, 3 exercises) to the full **11-chapter curriculum** from `docs/VLDC-HUS/` (MIT).

- **Full PHY1159 Mechanics & Thermodynamics (`scripts/import-physics.mjs`, `docs/architecture/PHYSICS_ID_MAP.json`)**:
  - Migrated all **11 chapters** (Chapters 1–7 Mechanics from `mech.js` + Chapters 8–11 Thermodynamics from `thermo.js`), **33 topics/lessons** (`src/content/courses/phy1159/lessons/phy1159-t1-1.md` through `phy1159-t11-3.md`), **57 interactive exercises** (11 ordering short-answers + 13 conceptual multiple-choice from `exercises.js` + 33 ConceptTest probes from `probes.js`), and full-text Vietnamese search entries (`src/content/courses/phy1159/search-index.ts`).
  - Statically parsed all 4 source files (`mech.js`, `thermo.js`, `exercises.js`, `probes.js`) via TypeScript's AST scanner with immutable Git blob SHA-1 verification (zero legacy JS execution, teacher PDFs excluded, MIT attribution preserved).
  - Updated `tests/unit/catalogue.test.ts` (81 lessons, 353 exercises total across all courses) and `tests/e2e/learning.spec.ts` (1/33 = `3%` progress verification).
- **Verification**:
  - `npm run build`: strict TypeScript passed; **35 unit tests across 8 suites passed**; production build succeeded cleanly.
  - `npx playwright test tests/e2e/learning.spec.ts`: **8/8 passed** across Desktop Chrome and Mobile iPhone 13 Chromium against production at `/HUS_Learning_Page/`.
- **Remaining `docs/` content batches**:
  - `docs/DSA-HUS` (`THCS4`, `OOP`, `MAT3514`, `MAT3504`), and `docs/HUS-learning-resource` (`gt1` Giải tích 1, `xstk` MAT1101, `CHE1080` LaTeX exam bank).

---

## Phase 7b — 2026-11-20 (Antigravity, previous)

Replaced the dense electron-shell chapter/lesson diagram (`AtomicCourseMap.tsx`, removed) with a universal, airy **Atmospheric Observatory Course Atlas (`src/components/learning/CourseAtlas.tsx`)** applied across all courses via `src/pages/CoursePage.tsx`.

- **Universal Celestial Course Atlas (`src/components/learning/CourseAtlas.tsx`, `src/pages/CoursePage.tsx`)**:
  - Open-sky atmospheric header with pure vector celestial horizon arcs and zenith glow floating directly on the canvas (zero nested boxes).
  - Responsive **Celestial Chapter Waypoints** showing every chapter number, full `Spectral` chapter title, real completion count, and delicate horizon progress thread — 1-click chapter focusing without cryptic `K/L/M/N/O/P/Q` shell labels.
  - Inline Vietnamese accent-insensitive lesson filter (`normalizeVietnamese`) for large courses (e.g., `general-chemistry` with 7 chapters / 48 lessons).
  - Open **Star-Thread Lesson Stream** showing full lesson titles (`Bài {ch}.{n}`), prerequisite notes with warm starlight hover resonance, exercise counts, and next-recommended badges; scales cleanly from metadata-only (0 chapters) to 100+ lessons across all VNU-HUS subjects.
  - Universal `Tổng kết & Đề thi` tab replacing physics-only "Hạt nhân / Neutron Core" terminology.
- **Verification**:
  - `impeccable detect --json src/components/learning/CourseAtlas.tsx src/pages/CoursePage.tsx`: **0 findings (`[]`)**.
  - `npm run build`: strict typecheck passed; **35 unit tests across 8 suites passed**; production build succeeded cleanly (`CoursePage` chunk ~7.79 kB gzip).
  - `npx playwright test tests/e2e/learning.spec.ts tests/e2e/foundation.spec.ts --workers=2`: **14 passed** across desktop and mobile Chromium (including `CourseAtlas` chapter filtering, inline Vietnamese lesson search, and `Tổng kết & Đề thi` switching on `/courses/general-chemistry`).
  - Visual QA screenshots inspected in `.impeccable/review/course-atlas-*.png` across desktop light/dark (`general-chemistry`, `phy1159`, `mat3504`) and mobile (`390px`).

---

## Phase 7 — 2026-11-20 (Antigravity, previous)

Migrated the first full course batch from `docs/` into the live website: **Hóa học đại cương (`general-chemistry`, CHE1080)** from `docs/Chemistry/`, together with lazy per-course exercise bank loading and GFM Markdown table support.

- **Reproducible Chemistry Migration (`scripts/import-chemistry.mjs`, `docs/architecture/CHEMISTRY_ID_MAP.json`)**:
  - Migrated all **7 chapters**, **48 topics** (with validated acyclic prerequisites), **48 UTF-8 Markdown lessons** (`src/content/courses/general-chemistry/lessons/gc-*.md`), **296 interactive exercises** (`src/content/courses/general-chemistry/exercises.ts`), and full-text Vietnamese search entries (`src/content/courses/general-chemistry/search-index.ts`).
  - Converted legacy `docs/Chemistry` Markdown directives (`:::key`, `:::mistake`, `:::note`, `:::warning`, `:::tip`, `::formula`, `::formulas`, `::videos`) into standard Markdown blockquotes, inline KaTeX formula blocks, and linked YouTube timestamp references; stripped exercise embed placeholders and dead `/drawing-lab` links; rewrote internal links to HashRouter routes (`#/courses/general-chemistry/lessons/gc-*`).
  - Preserved all 6 external PDF/source/video resource records without copying PDFs into `public/`.
- **Lazy Course Exercise Banks & Markdown Tables (`src/core/learning/content.ts`, `src/infrastructure/content/learning.ts`, `src/pages/LessonPage.tsx`, `src/pages/CataloguePage.tsx`, `src/components/learning/Markdown.tsx`, `src/components/learning/AtomicCourseMap.tsx`)**:
  - Added optional lazy `src/content/courses/<courseId>/exercises.ts` discovery + `loadCourseExercises` / `loadLessonExercises` / `loadAllLazyCourseExercises` with pure core `validateExercises`, keeping the initial `index-*.js` bundle lean (~92 kB gzip) while splitting Chemistry's 296 exercises into a separate lazy chunk (~115 kB gzip).
  - Installed `remark-gfm` (0 vulnerabilities) and enabled GFM table rendering inside `Markdown.tsx`'s `.table-scroll` wrapper.
  - Extended `AtomicCourseMap` shell notation to include `'Q'` for 7-chapter courses (shells K–Q).
- **Verification**:
  - `npm run build`: strict TypeScript passed; **35 unit tests across 8 suites passed** (validating all 53 lessons, 299 exercises across eager + lazy banks, GFM tables, and Vietnamese search); production build succeeded cleanly.
  - `npm run test:e2e`: **23/24 passed** in full parallel run (including new desktop & mobile E2E coverage for `/courses/general-chemistry`, GFM tables, KaTeX, and lazy exercise grading), and the 1 transient mobile scroll-transition flake (`workspace.spec.ts:3`) passed on targeted re-run (`1 passed`).
- **Remaining `docs/` content batches**:
  - `docs/DSA-HUS` (`THCS4`, `OOP`, `MAT3514`, `MAT3504`), expanded `docs/VLDC-HUS` (`phy1159` chapters 3+ & problem sets), and `docs/HUS-learning-resource` (`gt1` Giải tích 1, `xstk` MAT1101, `CHE1080` LaTeX exam bank).

---

## Phase 6 — 2026-11-20 (Antigravity, previous)

Complete **Atmospheric Observatory** visual overhaul guided by `impeccable`, `landing-page-design`, `design-taste-frontend`, and `redesign-existing-projects`, with primary focus on elevating the Landing Page (`/`) into an airy, poetic scientific arrival while keeping inner study/reading surfaces synchronized, legible, and 100% grounded in real data.

- **Product & Design System Documentation**:
  - Captured product truth in `PRODUCT.md`, workflow defaults in `.impeccable/config.json` (`buildPath: "code"`), landing direction contract in `.impeccable/surfaces/landing.md`, and live visual system tokens in `DESIGN.md` + `.impeccable/design.json`.
- **Atmospheric Observatory Palette & Typography (`src/styles/index.css`, `src/styles/spectral-fonts.css`, `src/assets/fonts/spectral-*.woff2`, `index.html`, `public/favicon.svg`)**:
  - Self-hosted 12 local OFL `Spectral` WOFF2 files (weights 300/400/500/600 across `vietnamese`, `latin-ext`, `latin` subsets — zero external CDN requests) for soaring display headings (`.heading-display`, `.heading-tagline`, `.heading-page`, `.heading-section`), paired with locally bundled `Be Vietnam Pro` for high-legibility UI and `.academic-prose`.
  - Established dual-atmosphere palette: Morning Observatory Sky light mode (`#f7f9fc` / `#ffffff` / `#eef3f9`, indigo ink `#0e1726`) and Deep Starlit Observatory dark mode (`#090e18` / `#101726` / `#162033`, starlight ivory ink `#eef2f8`), anchored by Celestial Sapphire (`#1a56db` / `#7cb3ff`) and subtle starlight gold orbital markers.
  - Themed browser surfaces (`::selection`, `caret-color`, thin scrollbars, focus rings) and updated `public/favicon.svg` + `AppLayout` brand mark to a crisp astrolabe-orbit HUS emblem.
- **Ethereal Landing Page & Floating Shell (`src/pages/CataloguePage.tsx`, `src/app/layouts/AppLayout.tsx`, `src/components/ui/ObservatoryCanvas.tsx`, `src/components/ui/TaglineReveal.tsx`, `src/components/ui/ScrollReveal.tsx`)**:
  - Upgraded `AppLayout` to a floating translucent observatory navigation bar (`rounded-xl`, `backdrop-blur-xl`, full-perimeter border) while keeping full-height blurred mobile drawer and `<Suspense>` inside `<main>`.
  - Built a full-viewport Atmospheric Observatory Hero anchored by `ObservatoryCanvas` (pure vector SVG astrolabe orbits, zenith atmospheric diffusion, and GPU-only rotation), poetic `Spectral` headline (`Tri thức tự nhiên, mở ra giữa bầu trời tự do.`), adaptive primary CTA (resumes recent lesson or starts `PHY1159`), and a verified real-data 4-column telemetry strip (zero fabricated metrics).
  - Added scroll-activated word-by-word `TaglineReveal` (`IntersectionObserver` + rAF-throttled scroll, instant full ink under `prefers-reduced-motion`), asymmetric spotlight section, orbital subject constellation cards (pure index-based geometry; zero subject-name branching), and the hairline-divided `Học phần` index with quick search.
  - Synchronized every inner route and learning surface to the Atmospheric Observatory system via reusable `ObservatoryHeader` (subtle cropped celestial horizon arcs), upgraded `CoursesPage`, `CoursePage` (sticky metadata rail + interactive Quantum Atomic Model `AtomicCourseMap`), `LessonPage` + `LessonWorkspaceShell` (calm elevated reading paper & hover-lift Prev/Next cards), `ResourcesPage`, `ProgressPage` (unified telemetry strip), `SettingsPage` (2-column Observatory settings panel), `CourseSyllabus`, `ResourceList`, `ExerciseFrame`, `VisualizationFrame`, `EmptyState`, `CourseCard` (with `AtomicCourseEmblem`), and `NotFoundPage`.
  - **Quantum Atomic Course Universe, Electron Hover & Real-Element Fun Facts (`src/core/learning/elements.ts`, `src/components/courses/OrbitalCourseUniverse.tsx`, `src/components/learning/AtomicCourseMap.tsx`, `src/components/courses/AtomicCourseEmblem.tsx`)**:
    - Replaced the static card grid on `/courses` with a floating **Orbital Course Universe**: the live search input sits inside the glowing central Search Nucleus while verified courses float around it as interactive orbital atoms on a polar ellipse (smooth GPU float pausing on hover/focus, graceful responsive stack on `< lg`, plus toggleable list mode).
    - Replaced the redundant standalone `CourseSyllabus` on `/courses/:courseId` with one unified, bidirectional **Quantum Atomic Syllabus & Study-Path Navigator** (`AtomicCourseMap`): hovering either an electron or a lesson row synchronizes both sides and illuminates real prerequisite quantum-jump arcs across shells (`topic.prerequisiteIds`), clicking any electron opens that exact lesson directly, clicking a shell filters by chapter, and clicking the central Neutron Core opens Cross-Chapter Synthesis & Final Exam Archive.
    - Added pure core Periodic Table matching (`matchRealElement` in `src/core/learning/elements.ts`, Z = 1..36 with 4 Vitest unit tests in `tests/unit/elements.test.ts`): whenever a course's real chapter/lesson counts match a real-life ground-state element (e.g. `PHY1159` `[2, 3]` → **Boron `5 B` — Bo**), a Periodic Table element stamp renders at the top-left corner of both `AtomicCourseMap` and the floating `/courses` atom node, paired with a toggleable scientific fun fact card.

  - **Orbital Search IME Fix, Directional Filtering, Empty-State Choreography & 100+ Course Scalability (`src/core/courses/search.ts`, `src/components/ui/SearchInput.tsx`, `src/pages/CoursesPage.tsx`, `src/components/courses/OrbitalCourseUniverse.tsx`, `src/styles/index.css`, `docs/architecture/COURSE_CATALOGUE_SCALABILITY.md`)**:
    - Fixed Windows Telex IME character-jumping in `/courses` search by buffering composition (`onCompositionStart`/`onCompositionEnd` + `nativeEvent.isComposing`) inside `SearchInput` and decoupling `CoursesPage` local search state from URL `?q=` updates via a 240ms debounce.
    - Upgraded `OrbitalCourseUniverse` so unmatched course atoms smoothly fly outward to the left or right (`translate3d(±160px)` + fade, hidden from a11y/focus) while matched courses glide smoothly into left/right flanking slots around the Search Nucleus; when no courses match, the Search Nucleus smoothly glides upward (`lg:top-[32%]`) and reveals a `"Không tìm thấy"` empty-state card directly beneath it.
    - Added pure core scalability primitives in `src/core/courses/search.ts` (`filterCourses` relevance ranking, `paginateItems`, `recommendCoursesLayout`, `DEFAULT_ORBIT_PAGE_SIZE = 6`, `AUTO_LIST_THRESHOLD = 18`, `DEFAULT_LIST_PAGE_SIZE = 24`): `OrbitalCourseUniverse` automatically switches to O(1) bounded orbital paging (`Quỹ đạo X/Y`) when > 6 courses exist, `CoursesPage` automatically defaults to `list` mode at ≥ 18 courses with progressive `"Xem thêm học phần"` reveal, and documented the full scaling roadmap in `docs/architecture/COURSE_CATALOGUE_SCALABILITY.md`.
    - Merged Home's `"Lĩnh vực môn học"` and `"Học phần"` into a single interactive `#courses-section` in `src/pages/CataloguePage.tsx` (in-place subject constellation filtering + quick search).
    - Replaced one-step boundary jumps with a global **two-step boundary confirmation gesture system** (`src/core/navigation/gestures.ts`, `src/app/useWorkspaceGestures.ts`, `src/app/layouts/AppLayout.tsx`) working across all workspace pages (`/` ↔ `/courses` ↔ `/resources` ↔ `/progress` ↔ `/settings`, plus parent return from `/courses/:id` and lessons): 1st pull at top/bottom edge arms a floating clickable confirmation pill (absorbing touchpad inertia via `260ms` min gap); 2nd pull confirms smooth `navigateSmooth` transition.
    - Added laptop touchpad & mobile touchscreen gestures across the app: horizontal 2-finger / touch swipe for Prev/Next Lesson (`src/pages/LessonPage.tsx`, safely ignoring horizontal scrollers like tables/KaTeX/code blocks), horizontal swipe to rotate orbital pages in `OrbitalCourseUniverse.tsx`, mobile left-edge swipe to open/close the navigation drawer, and `overscroll-behavior-y: contain` in `src/styles/index.css`.

Final verification executed locally after final visual-QA fix:
- `impeccable detect --json`: **0 findings (`[]`)** across all modified UI/CSS files.
- `npm run build`: strict typecheck passed; **31 unit tests across 8 suites passed** (including `tests/unit/elements.test.ts`); production build succeeded cleanly with all 12 `Spectral` and 9 `Be Vietnam Pro` local WOFF2 assets bundled in `dist/assets/`.
- `npm run test:e2e`: **22 passed** across desktop and mobile Chromium against production at `/HUS_Learning_Page/` (zero horizontal overflow at `360px`, `390px`, `768px`, `1024px`, `1440px` across all 8 routes, including Vietnamese IME composition, directional orbital filtering, and elevated empty-state verification).
- Real Chromium visual QA screenshots inspected in `.impeccable/review/` across ALL routes: Landing (desktop light/dark + mobile), `/courses` (light), `/courses/phy1159` (dark), `/courses/phy1159/lessons/phy1159-t1-2` (light), `/resources` (dark), `/progress` (light), and `/settings` (dark).

---

## Phase 5 — 2026-11-19 (Antigravity, previous)

Complete UI/UX redesign and visual architecture overhaul guided by `redesign-existing-projects` (installed to `.agents/skills/redesign-existing-projects/SKILL.md`), `landing-page-design` (Part B visual system from `elayadesign/ai-design-skills`), and `web-design-guidelines`, while preserving 100% of business logic, domain/core boundaries, content manifests, storage schemas, and HashRouter/GitHub Pages compatibility.

- **AI Design Skills loaded & applied**:
  - `elayadesign/redesign-skill` (`redesign-existing-projects/SKILL.md`) — installed locally to `.agents/skills/redesign-existing-projects/SKILL.md` and used as the primary diagnostic audit framework (eliminated global sidebar dashboard cliché, card soup, arbitrary off-scale font sizes, blue-tinted dark gray mismatch, missing active/press states, and plain-text loading pills).
  - `elayadesign/ai-design-skills` (`landing-page-design/SKILL.md` Part B visual system) — applied strict Tailwind type scale, named typography styles, spacing rhythm, weighted deceleration easing (`cubic-bezier(0.22, 1, 0.36, 1)`), neutral dark surfaces, full-perimeter borders, and 680px heading measure, adapted for an academic reading platform (retaining warm archival paper light mode and locally bundled `Be Vietnam Pro` for Vietnamese diacritics).
  - `vercel-labs/agent-skills` (`web-design-guidelines/SKILL.md`) — applied WCAG 2.2 AA contrast, focus management, touch targets, reduced-motion support, and semantic landmarks.
- **Design System & Foundation (`src/styles/index.css`, `index.html`, `public/favicon.svg`)**:
  - Added branded SVG favicon (`public/favicon.svg`) and light/dark `theme-color` meta tags.
  - Snapped dark mode to cohesive neutral charcoal (`#141414` / `#1b1b1b` / `#242424`) eliminating cool-dark vs warm-light gray drift; kept warm paper light mode (`#f9f8f5` / `#ffffff` / `#f2f1ec`) and single restrained academic cobalt accent.
  - Standardized named typography classes (`.heading-page`, `.heading-section`, `.title-item`, `.label-eyebrow`) and snapped `.academic-prose` strictly to Tailwind's type scale (removing arbitrary `text-[11px]`, `1.625rem`, `1.0625rem`, `1.09375rem` values).
  - Added weighted motion curve (`--hus-ease`), tactile button primitives (`.hus-btn`, `.hus-btn-primary`, `.hus-btn-secondary`, `.hus-btn-ghost` with `active:scale-[0.98]`), and layout-shaped skeleton loaders (`src/components/ui/Skeleton.tsx`).
- **Information Architecture & Shell (`src/app/App.tsx`, `src/app/layouts/AppLayout.tsx`)**:
  - Replaced the permanent 248px global left sidebar with a translucent single-row editorial top navigation bar (brand, primary nav, `/` global search, theme toggle, settings) + full-height animated mobile navigation sheet with staggered link entrance + restrained academic footer.
  - Moved `<Suspense fallback={<PageSkeleton />}>` inside `AppLayout` around `<Outlet />` (caught during Chromium visual QA) so header and footer stay rock-steady across lazy route transitions.
- **All Major Screens & Learning Components Redesigned**:
  - `CataloguePage.tsx` (`/`): Editorial masthead, personalized continue-learning / quick-start banner, scalable subject index strip, hairline-divided course index (`CourseCard` `list` mode), and conditional bookmarked resources.
  - `CoursesPage.tsx` (`/courses`) & `CourseCard.tsx`: Borderless integrated filter toolbar, categorized full-text search results with hairline rows and keyboard navigation, 2-column grid / hairline-list course views.
  - `CoursePage.tsx` (`/courses/:courseId`), `CourseSyllabus.tsx`, `SubjectToolHost.tsx`: Editorial course masthead on canvas, asymmetric 2-column syllabus + quiet metadata/provenance rail, and clean segmented tool tabs.
  - `LessonPage.tsx` & `LessonWorkspaceShell.tsx`: Distraction-free 3-column academic reader (`max-w-7xl`) with quiet borderless left syllabus, generous centered `66ch` reading paper, sticky right "Trong bài này" TOC, `LessonSkeleton`, and mobile collapsible disclosures.
  - `ExerciseFrame.tsx`, `VisualizationFrame.tsx`, `BubbleSortTool.tsx`: Crisp visual separation of prompt, interactive controls/canvas, playback dock, and live non-color-only feedback.
  - `ResourceList.tsx`, `ResourcesPage.tsx`, `ProgressPage.tsx`, `SettingsPage.tsx`, `NotFoundPage.tsx`: Replaced repetitive card grids with hairline-divided lists and unified metrics strip; polished radiogroups and helpful branded 404 screen.

Final verification executed locally after final visual-QA polish:
- `npm run build`: strict typecheck passed; **27 unit tests across 7 suites passed**; production build succeeded cleanly (`dist/assets/index-*.js` ~91.0 kB gzip; `Markdown` and `BubbleSortTool` remain lazy).
- `npm run test:e2e`: **20 passed** across desktop and mobile Chromium against production at `/HUS_Learning_Page/` (zero horizontal overflow at `360px`, `390px`, `768px`, `1024px`, `1440px` across all 8 routes).
- Real Chromium visual QA screenshots inspected for desktop light/dark (1440px) and mobile (390px), verifying header persistence, 3-column lesson reader, KaTeX math, dark-mode neutral surfaces, and mobile disclosures.

---

## Phase 4 — 2026-11-19 (Antigravity, previous)

UX refinement, visual QA, and learning experience polish on top of Phase 3 without changing routing contracts, storage schemas, or domain/core boundaries.

- **Lesson reading experience (`src/styles/index.css`, `src/components/learning/Markdown.tsx`, `LessonWorkspaceShell.tsx`, `src/pages/LessonPage.tsx`, `src/core/learning/outline.ts`)**:
  - Added full academic prose typography (headings, lists, blockquotes, inline code, horizontal-scrolling KaTeX display math and tables, copyable code blocks).
  - Extracted Markdown `h2`/`h3` outline in pure core (`extractMarkdownOutline`) and wired both a right-hand sticky Table of Contents (with `IntersectionObserver` active-heading highlight) and a `< xl` collapsible "Trong bài này" disclosure for mobile/tablet/laptop readers, using reduced-motion-aware `scrollIntoView` (avoiding HashRouter `#hash` clobbering).
  - Collapsed the course syllabus into a `<details>` disclosure on mobile (`< lg`) so readers land directly on lesson content; kept sticky syllabus on desktop.
  - Added an inline reading font-size toggle (`Aa+`/`Aa−`) in the lesson context header, styled prerequisites callout, completion control bar, previous/next lesson navigation cards, and restrained attribution footer; omitted empty resource sections.
- **Exercises & feedback (`ExerciseFrame.tsx`, `ExerciseSession.tsx`)**:
  - Separated question and answer areas, added non-color-only feedback icons (`role="status"` + `aria-live="polite"`), retry/reset button, stale-feedback clearing when the student edits an answer, and accurate local persisted attempt counts and prior completion badges.
  - Made explanations ("Xem lời giải") accessible to returning students who already solved an exercise previously.
- **Interactive algorithm visualization & tabs (`src/core/learning/replay.ts`, `src/modules/algorithms/BubbleSortTool.tsx`, `VisualizationFrame.tsx`, `SubjectToolHost.tsx`)**:
  - Extended `ReplayStep` with optional readonly state metadata (`compared`, `swapped`, `sortedFrom`) so BubbleSortTool distinguishes unsorted, compared, swapped, and sorted elements with border styles, legend, and step progress bar, plus keyboard stage stepping (`ArrowLeft`/`ArrowRight`/`Space`).
  - Added WAI-ARIA keyboard tab navigation (`ArrowLeft`, `ArrowRight`, `Home`, `End`) and `aria-controls`/`aria-labelledby` wiring in `SubjectToolHost`.
  - Upgraded mobile control button touch targets to `min-h-[40px]`.
- **Homepage, Course overview & Syllabus (`CataloguePage.tsx`, `CoursePage.tsx`, `CourseSyllabus.tsx`, `CourseCard.tsx`)**:
  - Upgraded "Tiếp tục học" into an actionable card with course badge, progress bar, and recently accessed list — rendered strictly when real local progress exists (replaced empty history placeholder with a compact quick-start bar for new visitors). Added conditional "Tài liệu đã đánh dấu" section when bookmarks exist.
  - Added "Bắt đầu học" / "Tiếp tục học" CTA, clickable subject badge, and local course progress bar on `CoursePage`, and omitted empty interactive-tool sections on courses without tools.
  - Refined `CourseSyllabus` with full-row clickable lesson links, chapter completion counts, completion checkmarks, mobile/desktop exercise counts, prerequisites, and deduplicated single-lesson topic titles.
- **Search, Resources, Progress, Settings & Shell (`CoursesPage.tsx`, `SearchHighlight.tsx`, `SearchInput.tsx`, `ResourceList.tsx`, `ResourcesPage.tsx`, `ProgressPage.tsx`, `SettingsPage.tsx`, `AppLayout.tsx`, `ErrorBoundary.tsx`)**:
  - Categorized content search results by hierarchy kind with diacritic-insensitive Vietnamese highlighting (`SearchHighlight`), cleaned LaTeX display snippets, and keyboard navigation (`ArrowDown`/`ArrowUp`/`Home`/`End` across search results).
  - Replaced redundant empty course box with a concise note when full-text content results match a query.
  - Refined `ResourceList` with localized kind/rights badges, wrapped attribution text, and `BookmarkIcon` toggles; added `Tất cả` / `Đã đánh dấu` filter on `ResourcesPage`.
  - Redesigned `ProgressPage` with summary cards, styled `.hus-progress` bars, recent topics, bookmarks, and clear JSON export/restore controls.
  - Added WCAG 2.2 AA filled-button accent tokens (`--hus-accent-solid` / `--hus-accent-solid-hover`) so white text on primary buttons achieves >= 5.1:1 contrast in dark mode as well as light mode.
  - Added `/` desktop search shortcut, top bar search clear button, mobile drawer Tab focus trap + backdrop focus restoration, sidebar active-state disambiguation when `?subject=` is active, and WAI-ARIA roving-tabIndex arrow-key navigation in `SettingsPage` radiogroups.

Final verification executed locally after all edits:
- `npm run build`: strict typecheck passed; **27 unit tests across 7 suites passed** (including `tests/unit/outline.test.ts`); production build succeeded (`dist/assets/index-*.js` ~90.4 kB gzip; `Markdown` and `BubbleSortTool` remain lazy).
- `npm run test:e2e`: **20 passed** across desktop and mobile Chromium against production at `/HUS_Learning_Page/`, including zero horizontal overflow at `360px`, `390px`, `768px`, `1024px`, and `1440px` across all 8 routes, plus keyboard accessibility for search results, settings radiogroups, and lesson reading-size controls.
- Real browser visual QA screenshots captured and inspected in Chromium (1440px light/dark desktop + 360px mobile), verifying dark-mode contrast, KaTeX rendering, BubbleSortTool state styling, mobile TOC/syllabus disclosures, and search snippet cleanup.

---

## Phase 3 — 2026-11-19 (Codex)

Implemented sequentially in the supplied workspace; no agents, branches, commits, push or deployment. All initial root app files were untracked; unrelated skills, reference applications and academic archives remain preserved.

- **Content:** six registered courses across the three existing subjects. PHY1159 has two reviewed software-theory chapters, five topics/Markdown lessons and three source-backed exercises. MAT3504/MAT3514/THCS4/OOP and general chemistry remain explicitly metadata-only. Eleven resource records include immutable DSA/Physics source links, Chemistry's four PDF source links and one external YouTube reference. No teacher PDF or unlicensed body/code was copied into deployment.
- **Rights/provenance:** Physics source data was statically extracted without executing legacy JS and checked against immutable Git blobs. MIT notice is included in `public/licenses/VLDC-HUS-MIT.txt`; original stage/exercise identities map explicitly in `docs/architecture/PHYSICS_ID_MAP.json`. Metadata scripts verify hashes (normalizing checkout line endings). Physics L1.1 was adapted to exact short-answer ordering with fixed visible numeric labels. Full-text search is a separate index; Markdown bodies stay lazy.
- **Domain/core:** `domain/workspace.ts` supplies readonly content, discriminated exercises and aggregate versioned progress. `core/learning/` implements ownership/reference/asset/answer validation, prerequisite cycle checks, Vietnamese search, exact choice/set/string grading, progress parsing/transitions/course+subject percentages, and deterministic sorting replay. Core and domain remain browser/React/content-independent.
- **Infrastructure:** `infrastructure/content/learning.ts` discovers/validates authored content and lazily loads Markdown. `search.ts` indexes all hierarchy/resource levels and optional full lesson text. `resource-url.ts` resolves Unicode local asset paths through `BASE_URL` and 1-based PDF pages. `infrastructure/progress/store.ts` preserves corrupt stored data, validates backups before replacement and keeps memory fallback with visible failure notices. Key: `hus-learning-hub:progress:v1`; legacy keys/databases remain untouched.
- **UI integration:** existing CoursePage syllabus/resource IDs now resolve to real titles/lesson links. LessonPage uses the established workspace shell with safe Markdown, KaTeX, highlighted code support, prerequisites, previous/next links, real exercise feedback/retries, resources and completion. Dashboard resumes the most recent topic. Resources supports bookmarks and upstream PDF/video/source links. Progress shows course/subject progress, exercise attempt count, recent topics, bookmarks and working JSON export/restore. Existing responsive design/tokens and HashRouter are retained.
- **Activity:** `modules/algorithms/BubbleSortTool.tsx` is registered lazily through `modules/subjects.ts`. Forward/back/reset/play/pause/speed controls use immutable core replay states. It is explicitly an independent algorithm example, not a migrated MAT3504 lesson.
- **Documentation:** [Phase 3 guide](architecture/PHASE_3.md) covers audit findings, source decisions, authoring with actual conventions, exercise rules, search, tools, storage, deployment, Python feasibility and remaining limits. [Execution record](plans/phase-3.md) records the sequential work and review. README and architecture introduction now point to current behavior.

Final verification actually executed locally:

- `npm run build`: strict typecheck passed; **25 unit tests across 6 suites passed**; production build succeeded. Tests load/validate every real manifest and Markdown body, and cover graph ownership/cycles/order, unsafe resource paths, Unicode asset pages, exercise sets/strings, full-text Vietnamese search, safe Markdown/math/code, replay, malformed/future backups, corrupt/blocked storage, bookmarks and progress aggregation.
- `npm run test:e2e`: **18 passed** across desktop and mobile Chromium against production at `/HUS_Learning_Page/`. Includes theme/navigation/refresh/loading/chunk failure, real lessons and math, wrong/correct exercise retries, persisted completion, bookmarks/recent topics, invalid and valid restore/export, storage denial, cross-course lesson rejection, activity controls/search and overflow at 375/768/1024/1440px.
- `npx playwright install chromium`: executed successfully. Production desktop (1440px) and mobile (375px) lesson screenshots captured and inspected; artifacts/logs are in ignored `test-results/`.
- `npm audit --omit=dev`: **0 vulnerabilities**. KaTeX is overridden to the installed direct version 0.19.1 to avoid vulnerable nested versions.
- Final review was an author self-review using the review checklist, because this workflow prohibits other agents. No independent reviewer is claimed.

Limits for the next pass:

1. DSA/Chemistry bodies and all teacher PDFs need per-file redistribution permission and academic review. Calculus/probability/CHE1080 archives are inventoried, not migrated. Only the five Physics lessons are available; no whole-subject completion is claimed.
2. Python was assessed using official Pyodide documentation and deferred: no self-hosted runtime is bundled. The guide specifies lazy module Worker, local runtime assets, stdout/stderr, terminate/recreate cancellation and real browser acceptance checks. No nonfunctional Python UI was added.
3. PDF/video resources currently open the original external source. No embedded PDF/video player, arbitrary HTML/image rendering, symbolic expression grading, personal-document IndexedDB, offline cache, legacy import or cross-device/concurrent-tab sync is implemented. Use one active tab and export backups.
4. The lazy Markdown/math/highlighting chunk is about **557 kB minified / 171 kB gzip**, producing a nonblocking Vite size advisory. It does not load on overview/progress routes. Eager content metadata/exercise definitions are small now; use validated lazy exercise banks for large migrations.
5. Antigravity should refine real lesson typography/options and mobile syllabus density, progress/backup layouts, long attribution/resource rows and tool keyboard tabs; optimize reader languages/fonts; coordinate the next rights-cleared, academically reviewed content batch. No redesign is required to add another subject.

The earlier foundation/frontend handoff below is retained as history; Phase 3 above supersedes its pending-feature list.

## Status

- **2026-11-19 (Codex)**: Initial foundation implemented (React 19, React Router 7, strict TypeScript 7, Vite 8, Tailwind 4, domain/core registry, `mat3504` verified metadata-only course, GitHub Pages deploy workflow, unit & Playwright foundation tests).
- **2026-11-19 (Antigravity)**: Complete Minimal Academic Learning Workspace frontend implemented on top of Codex's foundation without modifying domain contracts or breaking existing routes/tests. No commits, push, hosted deployment, or academic content migration performed. Existing `.agents/`, `.claude/`, `skills-lock.json`, reference projects, and academic archives remain untouched.

## Architecture and interfaces

### Foundation (Codex)
- `src/domain/learning.ts`: React-free Subject → Course → Chapter → Topic → Lesson → Exercise contracts, resources/provenance, knowledge relationships, versioned progress.
- `src/core/courses/registry.ts`: `createCourseRegistry(courses, subjects)` → readonly `list()` and `get(id)`; validates stable/duplicate IDs and subject references, freezes metadata copies.
- `src/content/courses/mat3504/course.ts`: verified MAT3504 code/title with immutable source provenance; explicitly metadata-only. No invented lessons or copied PDFs.
- `src/contracts/subject-module.ts` & `src/modules/subjects.ts`: optional lazy React tools receiving `courseId`.
- `.github/workflows/deploy.yml`: install, typecheck/unit/build/browser verification, then deploy only `dist/`.

### Frontend & Core Extensions (Antigravity)
- **Design System (`src/styles/index.css`, `src/styles/fonts.css`, `src/assets/fonts/`)**:
  - Minimal Academic Learning Workspace aesthetic with warm paper light mode and deep slate-ink dark mode, restrained VNU-HUS cobalt accent, hairline borders, and semantic status tokens.
  - Locally bundled OFL `Be Vietnam Pro` `.woff2` fonts (400/500/600, Vietnamese + Latin-ext + Latin) with zero external CDN requests and full relative-base (`./`) compatibility.
  - Academic reading prose styles (`.academic-prose`, `max-width: 68ch`, horizontal-scroll wrappers for tables, code, and display math) and `prefers-reduced-motion` support.
- **Core Search & Grouping (`src/core/courses/search.ts`)**:
  - React-free pure functions: `normalizeVietnamese` (handles `đ/Đ` and NFD diacritics), `filterCourses`, `groupCoursesBySubject`, `getCourseSubject`, `buildProvenanceUrl`.
- **Infrastructure (`src/infrastructure/content/catalogue.ts`, `src/infrastructure/preferences/theme.ts`)**:
  - Preserves `courseRegistry`; adds `subjectList` and `getSubjectModule(subjectId)`.
  - Resilient `localStorage` adapter for theme (`system | light | dark`) and reading font size (`normal | comfortable`) with graceful fallback when storage is unavailable.
- **Application Shell (`src/app/App.tsx`, `src/app/layouts/AppLayout.tsx`, `src/app/ErrorBoundary.tsx`, `src/app/useWorkspacePreferences.ts`)**:
  - Desktop left sidebar (primary nav + data-driven subject categories), sticky top bar with global search and theme toggle, mobile slide-over navigation drawer with Escape-to-close.
  - Preserves HashRouter, lazy route chunks, `ErrorBoundary`, `Suspense` loading state, accessible skip link (`Đến nội dung chính`), and `#main-content` focus management (`preventScroll: true` + `scroll-mt-14`).
  - Routes: `/`, `/courses`, `/courses/:courseId`, `/courses/:courseId/lessons/:lessonId`, `/resources`, `/progress`, `/settings`, `*`.
- **Pages (`src/pages/`)**:
  - `CataloguePage.tsx` (`/`): Practical learning dashboard (quick search, honest continue-learning empty state, available courses, subject categories, quick links). Preserves chunk name and `Học phần` heading for foundation E2E compatibility.
  - `CoursesPage.tsx` (`/courses`): Full catalog with URL-synced search (`?q=`), data-driven subject filter (`?subject=`), status filter, and grid/list layout toggle.
  - `CoursePage.tsx` (`/courses/:courseId`): Reusable course overview with breadcrumbs, status banner, syllabus/chapters section, generic `SubjectToolHost`, reference materials section, and metadata/immutable provenance panel.
  - `LessonPage.tsx` (`/courses/:courseId/lessons/:lessonId`): Uses `LessonWorkspaceShell` with honest fallback for `metadata-only` / unmigrated lessons.
  - `ResourcesPage.tsx` (`/resources`): Searchable resource library showing public-distribution notice and verified immutable provenance records.
  - `ProgressPage.tsx` (`/progress`): Honest empty state with real registered-course counters (no fabricated charts or stats) and local-first backup notice.
  - `SettingsPage.tsx` (`/settings`): Theme mode, reading typography scale, storage fallback notice, and accessibility/privacy summary.
  - `NotFoundPage.tsx` (`*`): Clean recoverable 404 screen.
- **Reusable Components (`src/components/`)**:
  - `ui/`: `Icons.tsx` (zero-dependency SVG icon set), `Badge.tsx`, `Breadcrumbs.tsx`, `EmptyState.tsx`, `SearchInput.tsx`.
  - `courses/`: `CourseCard.tsx` (`grid` and `list` variants), `SubjectToolHost.tsx` (generic lazy host for `SubjectModule.tools`, never switches on subject names).
  - `learning/`: Presentation-only primitives ready for migrated content — `LessonWorkspaceShell.tsx` (3-column reading layout with optional right context panel), `ExerciseFrame.tsx` (multiple-choice, numerical, short-answer, guided-steps display; delegates grading via callback props to core), `VisualizationFrame.tsx` (typed playback controls rendered only when wired, with honest fallback).

## Commands and executed verification

```sh
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Executed locally on 2026-11-19:
- `npm run build` (`tsc --noEmit` + `vitest run` + `vite build`): strict TypeScript passed with 0 errors; 9 Vitest unit tests passed across 2 suites (`tests/unit/registry.test.ts` and `tests/unit/search.test.ts`); production build succeeded cleanly with route-level code splitting and local woff2 fonts in `dist/assets/` (no `docs/` or PDFs bundled).
- `npm run test:e2e`: 12 Playwright tests passed across Desktop Chrome and Mobile iPhone 13 Chromium (`tests/e2e/foundation.spec.ts` + `tests/e2e/workspace.spec.ts`), covering repository subpath (`/HUS_Learning_Page/`), catalogue/course/lesson/resource/progress/settings navigation, Vietnamese accent-insensitive search, subject filtering, grid/list toggle, light/dark theme persistence, mobile drawer, skip link/focus, loading/error chunk recovery, and zero horizontal overflow at 375px, 768px, 1024px, and 1440px.
- Visual QA screenshots captured and inspected in Chromium for desktop light, desktop dark, course overview, and 375px mobile dark; caught and fixed skip-link peek and sticky-header scroll offset on route focus.

## Limitations and next steps for Codex

1. **Content & Rights Migration**: Only `mat3504` (`metadata-only`) is registered. Review per-file redistribution rights and migrate one verified chapter (chapters, topics, Markdown lessons, JSON exercises, and approved resource records) using the proposed `src/content/` layout.
2. **Content Loader & Runtime Schemas**: Implement lazy loaders and runtime validation schemas (referential integrity, prerequisite cycle checks) for chapters, lessons, and exercises, then wire `CoursePage.tsx` and `LessonPage.tsx` to real loaded data.
3. **Markdown / Math / PDF Rendering**: Install and lazy-load sanitized Markdown + KaTeX + base-aware PDF viewer when the first real lesson/PDF is migrated, rendering inside `LessonWorkspaceShell`.
4. **Exercise Engine & Grading**: Implement pure grading/expression logic in `src/core/` and connect it to `ExerciseFrame`'s `onSubmit` / `feedback` props.
5. **Progress Persistence**: Implement versioned browser storage for `LearningProgress` with validated JSON export/import and storage-error recovery, then wire `CataloguePage.tsx` ("Tiếp tục học") and `ProgressPage.tsx` to the real storage API.
6. **First Subject Tool**: Register a real lazy tool in `src/modules/subjects.ts` (using `VisualizationFrame` if interactive); `SubjectToolHost` in `CoursePage.tsx` is already wired to render it automatically without changing shared pages.

