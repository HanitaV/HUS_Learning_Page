# HUS Learning Hub foundation

> Historical foundation decisions below. Phase 3 adds real content, grading, progress and a lazy activity while retaining these boundaries. See [current integration and authoring guide](PHASE_3.md) for the live implementation, source decisions, Python assessment and limitations, and [course catalogue scalability](COURSE_CATALOGUE_SCALABILITY.md) for how `/courses` scales from 6 to 100+ courses.

## Intent and scope

One static, free-to-operate application for many VNU-HUS subjects. This session establishes the shared foundation for later Antigravity UI work and Grok review. No academic lessons, exercise engine, simulations, or complete dashboard are implemented.

The repository initially had no root app or Git commits. It contained untracked `.agents/`, `.claude/`, `skills-lock.json`, local copies of DSA-HUS, Chemistry, VLDC-HUS, and an additional HUS-learning-resource archive. These are preserved. Nested instructions apply inside their reference trees, which this implementation does not modify. Root tooling explicitly scopes source and tests, and Tailwind scans only `src/`.

## Decisions

| Choice | Rationale |
| --- | --- |
| One React/Vite application | Shared navigation and learning foundation; separate apps would duplicate code and fragment progress. |
| Pure TypeScript domain + core | Academic identity and logic remain testable without React or a browser. |
| Trusted TypeScript metadata manifests | Compile-time contracts without a validation dependency for one authored record. External formats require a runtime parser later. |
| Glob discovery of metadata + one parameterized course route | New courses do not require routing changes. Only small metadata is eager; page components are lazy. |
| Stable IDs and separate academic codes | Routes survive title and file changes; source identifiers can be retained through migration mappings. |
| Normalized entity contracts with ordered child IDs | Supports topics and shared knowledge without embedding academic data in components. Reference resolution will be implemented alongside real content. |
| Optional lazy subject tools | Tools use a small React integration contract; no plugin runtime, dependency injection, or per-course app. |
| HashRouter + relative Vite base | Refreshing a course route requests the static index, and output asset URLs work under a repository subpath or a custom domain. |
| No storage implementation yet | There is no progress-producing workflow. The progress contract is versioned; browser persistence follows when needed. |
| No state library or global providers yet | Current data is immutable and synchronous. Providers should have a concrete consumer. |

An adapter-only unification of the three existing sites was considered. It would retain incompatible routing, identity, DOM manipulation, grading formats, and storage keys. Selective migration into one typed model has a smaller long-term boundary. A full plugin system adds lifecycle and compatibility costs without a current need.

The implementation follows [Vite static deployment guidance](https://vite.dev/guide/static-deploy.html), [HashRouter's static routing model](https://reactrouter.com/api/declarative-routers/HashRouter), and [Tailwind's Vite integration](https://tailwindcss.com/docs/installation/using-vite). Relative base is deliberate: there is no repository name embedded in production configuration. Playwright serves the default relative build under `/HUS_Learning_Page/` to exercise a repository subpath.

## Dependencies and direction

```text
app → pages → infrastructure/content → core/courses → domain
           ↘ domain
modules → contracts/subject-module → domain
                                  ↘ React types (integration boundary only)
```

`createCourseRegistry(courses, subjects)` checks route-safe IDs, uniqueness, subject membership, and repeated child references; it copies and freezes catalogue metadata. `list()` returns readonly records; `get(id)` returns a course or undefined. It does not parse untrusted input. `courseRegistry` is the Vite-specific composition of those contracts and authored manifests.

`SubjectModule` contains a subject ID and optional lazy tools, each with an ID, title, kind, and a component loader accepting `courseId`. `src/modules/subjects.ts` records the three planned module identities. The UI does not load these descriptors yet because there are no tools. A generic tool host, lookup validation, and per-subject directories should be added with the first real tool.

`LearningProgress` describes lesson/exercise state, not a server account or a grading result. Future persistence should use a versioned local key/database, expose unavailable-storage failures, and retain user data when imports fail. Existing source storage keys must not be overwritten by migration.

## Runtime shell

`main.tsx` mounts StrictMode. `App.tsx` composes the error boundary, HashRouter, Suspense, lazy pages, and layout. Routes are `/`, `/courses/:courseId`, and `*`. The catalogue renders the registry; the course page links to immutable source metadata and explicitly marks unmigrated lessons. Unknown IDs and paths render recoverable pages. Loading and error states use accessible roles. System typography and neutral CSS tokens are provisional.

## Content strategy

See [reference analysis and migration](REFERENCE_ANALYSIS.md) for resource inventories and source-specific issues. Proposed structure when actual content arrives:

```text
src/content/courses/<course>/course.ts
src/content/courses/<course>/chapters/<chapter>/chapter.json
src/content/courses/<course>/chapters/<chapter>/topics/<topic>/topic.json
src/content/courses/<course>/lessons/<lesson>.md
src/content/courses/<course>/exercises/<exercise>.json
src/content/resources/<resource>.json
public/assets/<course>/<reviewed-original-filename>.pdf
```

Only the course manifest exists now. Do not create empty folders to match this proposal. Keep resource records separate from asset placement. `assetPath` is relative to the public asset root (e.g. `assets/<course>/<file>.pdf`), never a disk path, root-relative URL, or identity. Referenced source paths remain unchanged in provenance even if the deployment path changes. Use Vite raw imports or lazy fetches for Markdown; JSON exercise payloads need a discriminated runtime schema before grading. PDF workers and fonts must use base-aware bundled/local URLs.

Markdown must render without executing HTML; review and sanitize links and any future HTML support. Install Markdown/math/PDF libraries only when their viewer is implemented. Heavy content and visualizations must not join the eager metadata glob. Add schemas, referential integrity, prerequisite cycle checks, content loading, and search together with the first actual chapter.

## Deployment and verification

`.github/workflows/deploy.yml` verifies pull requests and main pushes with npm ci and browser tests (which also typecheck, run unit tests, and produce the portable build). Only main/manual non-PR runs upload the tested `dist/` and deploy through GitHub Pages permissions. Set repository Settings → Pages → Source to GitHub Actions. Workflow execution and hosted deployment require a push and are not claimed locally.

The root application has no backend, data server, environment secrets, or runtime network requirement. Its source metadata link opens GitHub only when selected. Offline caching is not implemented. `docs/` is excluded from the artifact because it is neither public content nor imported source; Vite's dev server also denies access to local docs, skills, and common secret paths.
