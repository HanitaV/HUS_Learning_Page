# Reference analysis and content migration

Inspected on 2026-11-19 using the GitHub connector: repository metadata, recursive trees, README files, package manifests, and representative source/schema records. Local copies supplied in the workspace enabled deeper reading of loaders, storage, graders, and resource catalogues. No repository was cloned or downloaded into this project during this session. This is a structural review, not a review of every lesson, exercise, or PDF page.

## Upstream snapshots and inventories

| Repository | Immutable commit revision | Relevant resource scope | Files / PDFs |
| --- | --- | --- | --- |
| [DSA-HUS](https://github.com/HanitaV/DSA-HUS) | `01e2385bc1bbf16e3b7a2ab527e1b572ae06360d` | `docs/` | 601 / 137 |
| [Chemistry](https://github.com/HanitaV/Chemistry) | `ad043333d24f67da5d11611678754397f4595e49` | `public/documents/`; no upstream `docs/` directory | 4 / 4 |
| [VLDC-HUS](https://github.com/HanitaV/VLDC-HUS) | `5d6301638664dc18b4913b944c0224761d705a2e` | `docs/` including three design/research reports | 16 / 13 |

Machine-readable [DSA-HUS](inventory/DSA-HUS.json), [Chemistry](inventory/Chemistry.json), and [VLDC-HUS](inventory/VLDC-HUS.json) inventories retain every matching source path, Git blob SHA, and size. Trees were not truncated. Revisions above were also verified through the commit endpoint and can be used for immutable source references. Counts describe files, not independent academic works; duplicate archives/unzipped copies exist.

Local counts differ slightly: `docs/DSA-HUS/docs` has 604 files and 137 PDFs; Chemistry has 4 PDFs; VLDC-HUS has 16 files and 13 PDFs. Do not assume local archives match upstream byte-for-byte. An additional local archive, `docs/HUS-learning-resource`, has 124 files and 7 PDFs; it contains CHE1080 exercise/exam LaTeX, `gt1` calculus material, and `xstk` probability/statistics (including `Giao_trinh_XSTK_MAT1101.pdf`). It also contains generated TeX build artifacts. These are future content candidates, not newly registered courses or deployment assets.

## DSA-HUS

Plain JavaScript ES modules with static HTML, no runtime npm dependencies. Node validation/build-staging scripts and Playwright checks are separate. `data/courses/index.json` lists THCS4, OOP, MAT3514, and MAT3504. Course manifests contain `id`, `name`, `aim`, `outcomes`, sources, and ordered chapters whose `pieces` arrays reference shared `data/pieces.json` nodes. Nodes carry type, difficulty, summary, tags, lesson path, and file/page provenance; edges distinguish prerequisite, applies, and related.

`js/model.mjs` exposes pure prerequisite, recommendation, normalization, route, and progress helpers. Reusable patterns: data-driven discovery, shared knowledge identities, Vietnamese accent-insensitive search, explicit prerequisite direction, and source/page attribution. `js/graph.js` and `js/visualizers/` depend on direct DOM/SVG lifecycles and need a React integration review. Python/Pyodide workers and code execution are optional, heavy features outside this foundation.

Academic `docs/` groups cover basic programming, OOP, data structures/algorithms, and algorithm design/analysis. They include Java source, exam solutions, ZIP/unzipped duplicates, slides (PDF/PPTX), Word files, and reading material. `DOCUMENTS.md`, `data/documents.json`, and source validation scripts are useful migration indexes. There is no declared repository license in the GitHub metadata; confirm reuse rights before porting source code or academic bodies. The initial registry reuses only the MAT3504 identifier and title with immutable provenance, without importing chapter or lesson text.

## Chemistry

React 19, React Router 7, strict TypeScript, Vite 8, Tailwind 4. Existing dependencies include Zod, Dexie, React Markdown/remark/rehype/KaTeX, PDF.js, XYFlow/dagre, and Zustand. They are features of that app, not requirements for this foundation.

`src/types/schema.ts` uses Zod contracts for courses, chapters, lesson frontmatter, exercises, documents, graph nodes, formulas, videos, and typed steps. `src/lib/content.ts` discovers JSON and raw Markdown via Vite globs, sorts learning order, and resolves references. `src/lib/db.ts` defines IndexedDB tables; progress, backup, numeric parsing and grading are separate helpers. Presentation also contains subject-specific exercise logic; extract pure grading before reuse.

Reusable patterns: schema validation at content boundaries, an explicit content hierarchy, source notes, lazy PDF viewing, typed exercises, and versioned browser storage. Migration issues: chapter IDs like `chapter-1` collide across subjects unless scoped; the current schema is chemistry-shaped and directly requires Vietnamese; `@/` aliases and Markdown directives need adapters; some content is eagerly bundled; PDF worker/font URLs and assets must be base-aware. Dexie imports require explicit version and key mappings; new code must never assume the legacy database can be read or overwritten safely.

Four PDF sources are under `public/documents/`: atomic structure, atomic-structure exercises, molecular structure/bonding, and thermodynamics. Other chapters include authored/supplemental material; preserve its distinction from direct PDF-derived content. The README records source errata and model limitations. The upstream metadata reports no declared repository license; do not infer redistribution permission from public access.

## VLDC-HUS

Plain JavaScript static pages for PHY1159 mechanics/thermodynamics; Node built-in tests and vendored math/fonts. `js/core/expr.js` parses expressions without eval; `grader.js` provides numeric and sampled formula comparison; `progress.js` validates imported progress and degrades when browser storage fails. `js/data/ch2.js`–`ch4.js` embed executable model functions with problem data; simulations reuse those calculations. These functions cannot be serialized into JSON. Migrate pure models into subject code and keep data as separate typed records.

Reusable patterns: one numerical model shared by grading/simulation/tests, stepwise guided solving, explicit units, deterministic sampling, and storage fallback. Review sampling-based equivalence limits and singularities; it is not symbolic proof. Legacy problem IDs such as `2.1` and theory IDs such as `L1.1` need mapping. Source exercise chapter numbers and the course outline can differ; preserve both instead of renumbering by path.

`docs/pdf_slides_from_teacher/` has thirteen PDFs: mechanics/thermodynamics slides, an outline, and exercise sets. Some source filenames already have missing/replaced diacritics; preserve their exact source paths and add human-readable titles separately. The repository has an MIT code license, but this does not establish rights to teacher PDFs, exercise statements, or other third-party resources.

## Proposed migration sequence

1. Select one course and review file-level rights. Keep restricted/unreviewed resources in provenance-only records outside public deployment. Record author, license/permission evidence, source revision, original filename/path, and PDF file page ranges.
2. Build an explicit map from original course/chapter/piece/problem identifiers to stable Hub IDs. Preserve academic codes, Vietnamese titles, and exact original filenames. Keep DSA knowledge nodes shared where they actually represent the same concept; do not merge based on title alone.
3. Author one reviewed chapter with topics, Markdown lessons, JSON exercises, resource records, and the smallest necessary runtime schemas. Test unique IDs, child/parent references, asset existence, graph direction/cycles, and metadata availability status. Compare rendered math and answers against the cited source pages.
4. Adapt pure grading/model functions with their source tests and notices after rights review. Build optional lazy React tool components through `SubjectModule`. Avoid importing old entrypoints, global state, or direct DOM orchestration.
5. Add base-aware Markdown/math/PDF rendering only for the selected course. Bundle required workers/fonts locally; validate links and sanitize any enabled HTML. Keep PDFs and large tool modules out of initial JS chunks.
6. Add versioned browser progress persistence with export/import validation and recoverable storage errors. Provide explicit legacy import adapters; cross-origin browser databases cannot be migrated automatically. Preserve legacy keys and records until the user confirms successful import.
7. Repeat with Physics/Chemistry or further subjects (including calculus and probability/statistics) after each slice has academic and technical verification. Adding courses should change content and module registration only, never generic routing or app composition.

No academic content correctness, complete source license audit, or redistribution approval is claimed by this inventory. No source PDF is included in this session's deployable artifact.
