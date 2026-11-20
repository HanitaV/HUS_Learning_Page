# CHE1080 ↔ MIT OpenCourseWare integration

Tool: `che1080-mit-hub` (tab "Lộ trình CHE1080 + MIT OpenCourseWare" on `#/courses/general-chemistry`; deep link `?tool=che1080-mit-hub&preset=topic-N`).

## Architecture

| Layer | File |
| --- | --- |
| Domain contracts | `src/domain/mit-che1080.ts` |
| Generated resource registry (metadata only) | `src/content/mit/che1080-resources.ts` ← `node scripts/import-mit-che1080.mjs` |
| Editable topic ↔ lecture mapping (11 topics) | `src/content/mit/che1080-topics.ts` |
| Mapping/search/progress logic (React-free) | `src/core/chemistry/mit-mapping.ts` |
| Calculations (hydrogen, first order, Arrhenius, pH, buffer, Nernst) | `src/core/chemistry/che1080-calc.ts` |
| UI (lazy chunk) | `src/modules/chemistry/Che1080MitHub.tsx`, `Che1080QuickCalc.tsx` |
| Tests | `tests/unit/che1080-mit.test.ts`, `tests/e2e/che1080-mit.spec.ts` |

Adding a subject or lecture: edit the topics file (or extend the importer's `COURSES`), re-run the importer, run `npm test` (validates every lecture reference and prerequisite graph).

## Inventory (from `docs/`, via per-resource `data.json`)

| Course | Local mirror | Verified registry entries |
| --- | --- | --- |
| MIT 5.111SC Principles of Chemical Science (Fall 2014, Drennan) | `docs/5.111sc-fall-2014` | 35 videos, 35 lecture notes, 34 problem sets, 34 solutions |
| MIT 5.112 Principles of Chemical Science (Fall 2005) | `docs/5.112-fall-2005` | 35 lecture videos (its `lectureN.pdf` files are not lecture notes and are not registered) |
| MIT 5.60 Thermodynamics & Kinetics (Spring 2008) | `docs/5.60-spring-2008` | 32 lecture notes, 36 videos |

Total: 241. All PDFs are CC BY-NC-SA 4.0 per metadata. "Verified" means the title, number and (for PDFs) the local file were found in the mirror; PDF text was not extracted (no parser installed), so full-text search is not claimed.

## Mapping (topic → lectures)

Confirmed = brief mapping and lecture title verified; Suggested = supplementary 5.60 link. 5.60 note and video numbering differ (e.g. video 16 "Temperature, pressure and Kp" vs notes 16 "Equilibrium in Solution"), so every resource shows its own title.

| Dạng | CHE1080 topic | 5.111SC | 5.112 | 5.60 |
| --- | --- | --- | --- | --- |
| 1 | Hydrogen atom, photon | 5 ✔ | | |
| 2 | MO theory | 13 ✔ | 26, 27 ✔ | |
| 3 | Gibbs | 16, 17 ✔ | | 13 (suggested) |
| 4 | Hess, ΔH, ΔU | 15 ✔ | | 6 (suggested) |
| 5 | Kp, Kc | 18, 19 ✔ | | 15 (suggested) |
| 6 | First-order kinetics | 30, 31 ✔ | | 30 (suggested) |
| 7 | Arrhenius | 33 ✔ | | 34 (suggested) |
| 8 | pH weak acid/base/salt | 21, 22 ✔ | | |
| 9 | Buffer | 22, 23, 24 ✔ | | |
| 10 | Solubility Ksp | 20 ✔ | | |
| 11 | Galvanic cell, Nernst | 25 ✔ | 22, 23 ✔ | |

Exam frequencies come from `docs/HUS-learning-resource/CHE1080_de_tu_2020_latex/recent6.tex` (6 exams). That LaTeX source (hdc) is the reference; `hdc.pdf`/`hdc_2020_nay.pdf` text was not parsed.

## Decisions and gaps

- **No PDFs/videos are copied or hosted.** Project rules require per-file redistribution review; MIT's CC BY-NC-SA licence permits it with attribution, but links to `ocw.mit.edu` / official YouTube IDs are the minimum approach. Nothing is claimed offline; the hub states internet is needed. Consequently no in-app PDF viewer was built (links open the official page).
- Self-check = existing imported CHE1080 bank (presets), no new questions. Per-resource "related HUS exercise" granularity is topic-level only.
- Existing visual labs (MO, thermo, ICE/buffer, Galvanic) are reused; added quick calculators for topics 1, 6, 7, 8, 9, 11. No titration-curve or kinetics plot was added.
- Search covers topics, keywords and MIT resource titles (client-side, lazy chunk). It is not merged into `/courses` global search.
- Hub chunk ≈ 151 kB (23 kB gzip), lazy.
