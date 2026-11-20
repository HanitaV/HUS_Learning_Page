# Guided written reasoning

The user requests multiple GPT-6.1 agents to design and implement semi-essay practice across subjects, with purposeful animation and interaction that develops written reasoning.

## Approach

Extend the existing shared SemiEssayStudio rather than build another exercise runtime. Existing physics diagram/projection/equation graders and the chemistry lab keep their contracts. Add a written-reasoning step with a source-backed reference answer and self-review criteria. Keyword matching cannot establish academic correctness; completion of writing is explicitly self-reviewed, separate from existing correct/incorrect attempts.

## Learning flow

1. Read the real problem and write an independent response.
2. Request authored hints individually when needed.
3. Reveal the source-backed reference after writing a response.
4. Compare the argument against explicit criteria and write a final revised response.
5. Keep the learner's writing distinct from the reference outline. Restore drafts on reload; editing an initial response invalidates its old review.

Reuse real self-check questions in eight DSA lessons (two per course); include a small source-backed writing slice for the two owned math textbooks and existing chemistry/physics lessons when those examples can be verified. Do not invent problems or scores. Preserve existing original content and rights decisions.

## Interaction and motion

Use the current typography, tokens and responsive workspace. Animate step changes, hint reveals and progress changes with short CSS transitions. Keep controls operable immediately, keyboard accessible, and respect reduced motion. The existing physics and chemistry diagrams remain interactive teaching surfaces. No animation dependency or decorative autoplay is needed.

## State and boundaries

Readonly academic step contracts remain in domain; review readiness, content composition and JSON parsing remain pure core. Browser drafts live in a separate versioned key through infrastructure. Preserve invalid stored data until explicit reset; warn and retain in-memory work if storage fails. Do not change progress v1 or record self-review as a correct graded answer. No backend, API key, external runtime or AI grader.

## Verification

Test review transitions, edit invalidation, source-backed content, malformed drafts and storage failures. Exercise the complete writing/review/reload flow under the production repository subpath on desktop/mobile, including existing physics/chemistry regressions, keyboard access and reduced motion. Capture and inspect actual workspace screens. Update the handoff with results and limits.
