# Written reasoning implementation plan

**Goal:** help students construct and revise their own written solutions within the existing learning site.

**Spec:** [design](../specs/2026-11-20-written-reasoning-design.md).

**Architecture:** extend the existing typed semi-essay engine and studio; separate local drafts from graded progress. Reuse authored source problems and the existing design system. TypeScript/React/Vite, with no new dependencies.

- [x] Audit teaching content, current interactions and framework boundaries using independent GPT-6.1 Sol/Terra agents.
- [x] Add written-step contracts, pure readiness evaluation/validation, runtime draft parsing and recoverable local storage; test before implementation.
- [x] Build source-backed guided practice for the four DSA courses; integrate without losing reproducible import output.
- [x] Add source-backed math/chemistry/physics writing examples within actual existing lesson boundaries.
- [x] Implement controlled writing/review UI, progressive hints, useful motion and restored drafts; preserve existing graders.
- [x] Integrate route state identity, honest completion semantics and course entry points.
- [x] Review, run full build/production-subpath desktop/mobile tests, inspect responsive screens and document limitations.

Ownership: essay_core owns contracts/core validation and draft adapter/hook; essay_curriculum owns DSA authored practice and its tests; essay_interaction owns studio/new writing UI/scoped CSS/browser tests. Root owns composition, source-backed additional subjects, routing integration, final review and handoff. Existing all-untracked workspace is retained; no commit/publication implied.
