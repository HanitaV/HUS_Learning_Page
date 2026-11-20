import { describe, expect, it } from 'vitest';
import { gcSemiEssays } from '../../src/content/courses/general-chemistry/semi-essays';
import { learningContent, loadCourseExercises, loadLessonExercises } from '../../src/infrastructure/content/learning';
import { courseRegistry } from '../../src/infrastructure/content/catalogue';
import { validateExercises } from '../../src/core/learning/content';
import {
  evaluateChoiceReasoningStep,
  evaluateEquationTransformMove,
  evaluateNumericUnitStep,
} from '../../src/core/learning/semi-essay';
import { gradeBalanceFlowStep } from '../../src/core/learning/balance-flow';
import { gradeCurve2dStep } from '../../src/core/learning/curve-2d';

describe('General Chemistry (CHE1080) Semi-Essay Studio coverage & validation', () => {
  it('covers all 7 chapters of general-chemistry with verified semi-essay exercises', async () => {
    const course = courseRegistry.get('general-chemistry');
    if (!course) throw new Error('Missing general-chemistry course');
    expect(course.chapterIds).toHaveLength(7);

    const gcChapters = learningContent.chapters.filter(c => c.courseId === 'general-chemistry');
    expect(gcChapters).toHaveLength(7);

    const lessonToChapter = new Map<string, string>();
    for (const topic of learningContent.topics) {
      if (!gcChapters.some(c => c.id === topic.chapterId)) continue;
      for (const lessonId of topic.lessonIds) {
        lessonToChapter.set(lessonId, topic.chapterId);
      }
    }

    const coveredChapters = new Set<string>();
    for (const exercise of gcSemiEssays) {
      const lesson = learningContent.lessons.find(l => l.id === exercise.lessonId);
      expect(lesson, `Missing lesson ${exercise.lessonId}`).toBeDefined();
      expect(lesson?.exerciseIds).toContain(exercise.id);

      const loaded = await loadLessonExercises('general-chemistry', exercise.lessonId);
      expect(loaded.some(e => e.id === exercise.id && e.kind === 'semi-essay')).toBe(true);

      const chapterId = lessonToChapter.get(exercise.lessonId);
      if (chapterId) coveredChapters.add(chapterId);
    }

    for (const chapterId of course.chapterIds) {
      expect(coveredChapters.has(chapterId), `Chapter ${chapterId} has no semi-essay`).toBe(true);
    }
  });

  it('passes validateExercises for the full general-chemistry course bank', async () => {
    const course = courseRegistry.get('general-chemistry');
    if (!course) throw new Error('Missing general-chemistry course');
    const gcChapterIds = new Set(course.chapterIds);
    const gcTopicIds = new Set(learningContent.topics.filter(t => gcChapterIds.has(t.chapterId)).map(t => t.id));
    const gcLessons = learningContent.lessons.filter(l => gcTopicIds.has(l.topicId));
    const allExercises = await loadCourseExercises('general-chemistry');

    expect(() => validateExercises(gcLessons, allExercises)).not.toThrow();
  });

  it('has matching theoryAnchorIds and valid steps/diagram specs across all 7 exercises', () => {
    expect(gcSemiEssays).toHaveLength(7);

    for (const exercise of gcSemiEssays) {
      const anchorIds = new Set(exercise.theoryAnchors.map(a => a.id));
      expect(anchorIds.size).toBeGreaterThan(0);

      for (const step of exercise.steps) {
        expect(step.theoryAnchorIds.length).toBeGreaterThan(0);
        for (const ref of step.theoryAnchorIds) {
          expect(anchorIds.has(ref), `${exercise.id}/${step.id} references unknown anchor ${ref}`).toBe(true);
        }

        if (step.kind === 'choice-reasoning') {
          expect(evaluateChoiceReasoningStep(step, step.answers).correct).toBe(true);
        } else if (step.kind === 'equation-transform') {
          for (const stage of step.stages) {
            const optimalOp = stage.operations.find(op => op.optimal);
            expect(optimalOp, `${exercise.id}/${step.id}/${stage.id} missing optimal operation`).toBeDefined();
            if (optimalOp) {
              expect(evaluateEquationTransformMove(stage, optimalOp.id).advance).toBe(true);
            }
          }
        } else if (step.kind === 'numeric-unit') {
          const rawValues = Object.fromEntries(step.fields.map(f => [f.id, String(f.expected)]));
          expect(evaluateNumericUnitStep(step, rawValues).correct).toBe(true);
        } else if (step.kind === 'diagram') {
          if (step.spec.kind === 'balance-flow') {
            const balanceSpec = step.spec;
            const initialLevels = Object.fromEntries(
              balanceSpec.initialBars.map(b => [b.id, b.expectedState === 'positive' ? 3 : 0]),
            );
            const finalLevels = Object.fromEntries(
              balanceSpec.finalBars.map(b => [
                b.id,
                b.expectedState === 'positive' ? (balanceSpec.expectedTransferSign === '-' ? 1 : 3) : 0,
              ]),
            );
            const result = gradeBalanceFlowStep(
              { initialLevels, finalLevels, transferSign: balanceSpec.expectedTransferSign },
              balanceSpec,
            );
            expect(result.correct, `${exercise.id}/${step.id} balance-flow failed`).toBe(true);
          } else if (step.spec.kind === 'curve-2d') {
            if (step.spec.mode === 'select-regions') {
              const result = gradeCurve2dStep(
                { selectedSegmentIds: step.spec.expectedSegmentIds ?? [] },
                step.spec,
              );
              expect(result.correct, `${exercise.id}/${step.id} curve-2d failed`).toBe(true);
            }
          }
        }
      }
    }
  });
});
