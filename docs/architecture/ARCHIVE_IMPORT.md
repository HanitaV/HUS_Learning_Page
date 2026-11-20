# Local archive imports

Imported two user-owned PDF textbooks as course resources. Each course now also exposes one short excerpt lesson and one written-practice exercise from its existing TeX source. Course manifests are `available` for these excerpts; the rest of each textbook remains available through its unchanged PDF, without claiming a complete web curriculum.

| Course | Resource | Original archive path | SHA-256 |
| --- | --- | --- | --- |
| MAT1091 — Giải tích I | `public/assets/mat1091/gt1.pdf` | `docs/HUS-learning-resource/gt1/gt1.pdf` | `c442036e26ee950b55ab1615f822a5f40236894c964d403abc19730c784ab948` |
| MAT1101 — Xác suất – Thống kê | `public/assets/mat1101/Giao_trinh_XSTK_MAT1101.pdf` | `docs/HUS-learning-resource/xstk/Giao_trinh_XSTK_MAT1101.pdf` | `20f2c75aa97d64d84750493a56923b6aa61fded227045b227aedfa9b93aa345a` |

The files were copied byte-for-byte. The course provenance uses the local archive and the file SHA-256 as an immutable content revision; no upstream repository or revision is asserted. Redistribution rights are marked approved based on the user's explicit confirmation that both archives are theirs and authorizing import.

## Written-practice excerpts

The excerpts are hand-adapted from existing definitions and worked examples, preserving their actual chapter titles and mathematical claims. They introduce stable course-scoped lesson identities rather than deriving IDs from filenames. Each exercise has two written reasoning steps with a reference answer and explicit self-review criteria; completing self-review does not assert automatic grading of free-form mathematical arguments.

| Course / lesson ID | Original TeX path in `docs/HUS-learning-resource/` | Source SHA-256 | Adapted material |
| --- | --- | --- | --- |
| MAT1091 / `mat1091-supremum-infimum` | `gt1/chuong/02-ch1.tex` | `ff83b287470fec9cd707998066d33ef9f6387874f99f445ffdf7e1efe5ce05b0` | Definition `dn:supinf` and example `vd:supinf`, lines 12 and 24–41: infimum/minimum 1/2 and unattained supremum 1 for `{n/(n+1): n ∈ N*}`, including the epsilon argument. Chapter: “Chương 1. Giới hạn và liên tục”. |
| MAT1101 / `mat1101-density-normalization` | `xstk/Giao_trinh_XSTK_MAT1101.tex` | `4bdad560bcd44789059a890a133822672f8c3f5304f25940dc18b4c7ce1ebfbb` | Worked example “Một tích phân chuẩn bị cho D07”, lines 1092–1105: normalize `c x²(1−x)` on `[0,1]`, obtaining `c = 12` and checking nonnegativity and total integral. Chapter: “Kiến thức chuẩn bị”. |

Lesson and exercise provenance records the local archive, exact TeX byte hash and original path, with approved rights and no UI attribution requirement per the user's ownership authorization. No source archive or PDF bytes were modified. The short Markdown lessons link the existing whole-textbook resource without invented PDF page references. These are two selected source examples, not a complete academic migration or independent correctness review.
