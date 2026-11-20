# HUS Learning Hub

A frontend-only educational platform for VNU University of Science students. React, strict TypeScript, Vite, React Router, and Tailwind; no backend, database server, accounts, or API keys.

The Antigravity workspace now supports real Physics Markdown lessons/math, exercises, searchable content, bookmarks, locally saved progress and JSON backup/restore. Six courses have verified metadata across computer science, chemistry and physics; only the reviewed Physics slice has migrated lessons. Chemistry PDF/video and DSA links open upstream sources. Existing reference projects and archives in `docs/` remain preserved and are not deployed.

Read the [Phase 3 authoring, persistence, source-rights and Python assessment](docs/architecture/PHASE_3.md) for the current implementation and limitations. Start learning at `/#/courses/phy1159`.

## Develop

Node.js 22.12+ and npm are required; CI uses Node 24.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Test a course at `/#/courses/mat3504`.

```sh
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run preview
```

`build` runs typechecking and unit tests before Vite. Browser tests serve the default portable build beneath `/HUS_Learning_Page/` on desktop and mobile Chromium. The generated `dist/` retains relative asset URLs and can be deployed directly.

## Source structure

```text
.github/workflows/deploy.yml
src/
  app/                 App, ErrorBoundary, layouts/AppLayout
  pages/               Catalogue, courses, lessons, resources, progress, settings
  components/          Antigravity shell primitives and connected learning views
  styles/index.css     Tailwind entry and existing workspace tokens
  domain/learning.ts   Academic hierarchy, resources, progress, relationships
  contracts/           Optional React subject-tool integration
  core/courses/        Pure registry and identity validation
  core/learning/       Content validation, grading, progress, search, replay
  infrastructure/content/catalogue.ts
  infrastructure/progress/ Versioned browser storage port
  modules/subjects.ts  Lazy tool registration (sorting example)
  content/
    subjects.ts
    courses/*/         course.ts, content.ts; reviewed Markdown and search index
  main.tsx
tests/
  unit/registry.test.ts
  e2e/foundation.spec.ts
docs/
  architecture/        Decisions, source review, resource inventories, plan
  AGENT_HANDOFF.md
  DSA-HUS/             Existing reference project
  Chemistry/           Existing reference project
  VLDC-HUS/            Existing reference project
  HUS-learning-resource/ Existing academic archive
AGENTS.md
index.html
package.json
package-lock.json
tsconfig.json
vite.config.ts
playwright.config.ts
```

Existing `.agents/`, `.claude/`, and `skills-lock.json` remain in place. Only approved assets and applicable license notices belong under `public/`.

## Extend

Add a default-exported manifest satisfying `Course` in `src/content/courses/<folder>/course.ts`. Add its subject to `src/content/subjects.ts` if necessary. Discovery and `/courses/:courseId` work without route edits. Use stable lowercase IDs; preserve academic codes separately. Do not mark a metadata-only course available until content is reviewed and loaded.

Read [AGENTS.md](AGENTS.md), [architecture](docs/architecture/README.md), [reference analysis](docs/architecture/REFERENCE_ANALYSIS.md), and the [agent handoff](docs/AGENT_HANDOFF.md) before continuing.

## GitHub Pages

The site URL is https://hanitav.github.io/HUS_Learning_Page/. Pages uses **GitHub Actions**. The workflow verifies PRs, and deploys only `dist/` on main pushes or manual runs. Hash routing supports refresh without a server fallback; relative Vite asset URLs support a repository path or custom domain. Local reference archives and source PDFs remain excluded from Git and deployment.
