# DSA course import

Goal: import the four existing programming/algorithm courses from docs into the current reader, excluding chemistry and mechanics/thermodynamics.

Architecture: reuse Course/LearningContent manifests, lazy Markdown and full-text search. No runtime, route, storage, dependency or UI changes. Read source JSON as data; never execute reference JavaScript. Preserve course-scoped identities and an explicit shared-piece mapping. Keep PDFs upstream and record unreviewed rights rather than asserting permission.

- [x] Audit DSA and the separate calculus/statistics archive using independent Luna agents.
- [x] Add migration-specific unit/browser coverage and observe the unit test fail before content exists.
- [x] Generate four course manifests, 35 chapters and 199 course-scoped lessons; normalize wiki links and answer callouts; verify against immutable upstream input hashes.
- [x] Review generated output, adapt existing catalogue/foundation expectations, run build and desktop/mobile production-subpath browser tests.
- [x] Record actual verification and remaining archive/provenance limitations in AGENT_HANDOFF.md.

The user requested execution and delegation. Changes remain in the supplied workspace, whose application files were already untracked; no commit or publication is implied. The user subsequently confirmed ownership of the calculus/statistics archive and authorized import without source attribution on the UI. Both main PDF textbooks are now local resources with content hashes, while their course manifests honestly remain metadata-only until lessons are split out. No academic exercises or prerequisite edges were invented.
