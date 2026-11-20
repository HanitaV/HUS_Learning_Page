import { describe, expect, it } from 'vitest';
import phy1159Content from '../../src/content/courses/phy1159/content';
import { phy1159SemiEssays } from '../../src/content/courses/phy1159/semi-essays';
import { gradeFbdStep } from '../../src/core/learning/fbd';
import { gradeCurve2dStep } from '../../src/core/learning/curve-2d';
import { gradeBalanceFlowStep } from '../../src/core/learning/balance-flow';
import { gradeHeatmapStep } from '../../src/core/learning/heatmap';
import {
  evaluateAxisProjectionStep,
  evaluateChoiceReasoningStep,
  evaluateEquationTransformMove,
  evaluateNumericUnitStep,
} from '../../src/core/learning/semi-essay';
import type {
  BalanceFlowStepSpec,
  Curve2dStepSpec,
  FbdStepSpec,
  HeatmapStepSpec,
} from '../../src/domain/semi-essay';

describe('PHY1159 Semi-Essay Studio coverage across all 11 chapters', () => {
  it('covers all 11 chapters of phy1159 with at least one semi-essay exercise', () => {
    expect(phy1159Content.chapters).toHaveLength(11);

    const topicById = new Map(phy1159Content.topics.map(t => [t.id, t]));
    const lessonIdsWithSemiEssay = new Set(
      phy1159Content.exercises
        .filter(e => e.kind === 'semi-essay')
        .map(e => e.lessonId),
    );

    for (const chapter of phy1159Content.chapters) {
      const chapterLessonIds = chapter.topicIds.flatMap(tid => topicById.get(tid)?.lessonIds ?? []);
      const hasSemiEssay = chapterLessonIds.some(lid => lessonIdsWithSemiEssay.has(lid));
      expect(hasSemiEssay, `Chapter ${chapter.id} (${chapter.title}) must have at least 1 semi-essay`).toBe(true);
    }
  });

  it('includes all 14 semi-essay exercises including the 3 MIT ch2/ch4 additions', () => {
    expect(phy1159SemiEssays).toHaveLength(14);
    const byId = new Map(phy1159SemiEssays.map(e => [e.id, e]));
    expect(byId.get('phy1159-se-2-3')?.lessonId).toBe('phy1159-t2-2');
    expect(byId.get('phy1159-se-4-6')?.lessonId).toBe('phy1159-t4-2');
    expect(byId.get('phy1159-se-4-7')?.lessonId).toBe('phy1159-t4-3');

    const contentExerciseIds = new Set(phy1159Content.exercises.map(e => e.id));
    expect(contentExerciseIds.has('phy1159-se-2-3')).toBe(true);
    expect(contentExerciseIds.has('phy1159-se-4-6')).toBe(true);
    expect(contentExerciseIds.has('phy1159-se-4-7')).toBe(true);
  });

  it('has valid lessonIds, unique exercise/step IDs, and matching theoryAnchorIds', () => {
    const validLessonIds = new Set(phy1159Content.lessons.map(l => l.id));
    const seenExerciseIds = new Set<string>();

    for (const exercise of phy1159SemiEssays) {
      expect(seenExerciseIds.has(exercise.id)).toBe(false);
      seenExerciseIds.add(exercise.id);

      expect(validLessonIds.has(exercise.lessonId), `Unknown lessonId ${exercise.lessonId}`).toBe(true);
      expect(exercise.theoryAnchors.length).toBeGreaterThan(0);

      const anchorIds = new Set(exercise.theoryAnchors.map(a => a.id));
      const seenStepIds = new Set<string>();

      for (const step of exercise.steps) {
        expect(seenStepIds.has(step.id)).toBe(false);
        seenStepIds.add(step.id);
        expect(step.theoryAnchorIds.length).toBeGreaterThan(0);
        for (const anchorId of step.theoryAnchorIds) {
          expect(anchorIds.has(anchorId), `${exercise.id}/${step.id} references missing anchor ${anchorId}`).toBe(true);
        }
      }
    }
  });

  it('passes core evaluators for all diagram, choice, projection, transform, and numeric steps', () => {
    for (const exercise of phy1159SemiEssays) {
      for (const step of exercise.steps) {
        if (step.kind === 'choice-reasoning') {
          const res = evaluateChoiceReasoningStep(step, step.answers);
          expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
        } else if (step.kind === 'axis-projection') {
          const selections: Record<string, Record<string, { sign: '+' | '-' | '0'; component: string }>> = {};
          for (const axis of step.axes) {
            selections[axis.id] = {};
            for (const row of axis.rows) {
              selections[axis.id]![row.forceId] = {
                sign: row.expectedSign,
                component: row.expectedComponent,
              };
            }
          }
          const res = evaluateAxisProjectionStep(step, selections);
          expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
        } else if (step.kind === 'equation-transform') {
          for (const stage of step.stages) {
            const optimalOp = stage.operations.find(op => op.optimal);
            expect(optimalOp, `${exercise.id}/${step.id}/${stage.id} missing optimal op`).toBeDefined();
            const res = evaluateEquationTransformMove(stage, optimalOp!.id);
            expect(res.advance).toBe(true);
          }
        } else if (step.kind === 'numeric-unit') {
          const rawValues: Record<string, string> = {};
          for (const field of step.fields) {
            rawValues[field.id] = String(field.expected);
          }
          const res = evaluateNumericUnitStep(step, rawValues);
          expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
        } else if (step.kind === 'diagram') {
          if (step.spec.kind === 'fbd') {
            const spec = step.spec as FbdStepSpec;
            const drawn: Record<string, { id: string; type: string; angle: number }[]> = {};
            for (const body of spec.bodies) {
              drawn[body.id] = body.expected.map((e, idx) => ({
                id: `${body.id}-${idx}`,
                type: e.type,
                angle: e.angle,
              }));
            }
            const res = gradeFbdStep(drawn, spec);
            expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
          } else if (step.spec.kind === 'curve-2d') {
            const spec = step.spec as Curve2dStepSpec;
            const res =
              spec.mode === 'select-regions'
                ? gradeCurve2dStep({ selectedSegmentIds: spec.expectedSegmentIds ?? [] }, spec)
                : gradeCurve2dStep(
                    {
                      signMatrix: Object.fromEntries(
                        (spec.signRows ?? []).map(r => [r.segmentId, r.expectedSigns]),
                      ),
                    },
                    spec,
                  );
            expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
          } else if (step.spec.kind === 'balance-flow') {
            const spec = step.spec as BalanceFlowStepSpec;
            const initialLevels: Record<string, number> = {};
            const finalLevels: Record<string, number> = {};
            for (const bar of spec.initialBars) {
              initialLevels[bar.id] = bar.expectedState === 'zero' ? 0 : 2;
            }
            for (const bar of spec.finalBars) {
              finalLevels[bar.id] = bar.expectedState === 'zero' ? 0 : 1;
            }
            if (spec.expectedTransferSign === '0') {
              const firstPosInit = spec.initialBars.find(b => b.expectedState === 'positive');
              const firstPosFinal = spec.finalBars.find(b => b.expectedState === 'positive');
              if (firstPosInit && firstPosFinal) {
                const initSum = Object.values(initialLevels).reduce((a, b) => a + b, 0);
                const finalSum = Object.values(finalLevels).reduce((a, b) => a + b, 0);
                finalLevels[firstPosFinal.id] = (finalLevels[firstPosFinal.id] ?? 0) + (initSum - finalSum);
              }
            } else if (spec.expectedTransferSign === '+') {
              const firstPosFinal = spec.finalBars.find(b => b.expectedState === 'positive');
              if (firstPosFinal) {
                const initSum = Object.values(initialLevels).reduce((a, b) => a + b, 0);
                finalLevels[firstPosFinal.id] = initSum + 1;
              }
            }
            const res = gradeBalanceFlowStep(
              { initialLevels, finalLevels, transferSign: spec.expectedTransferSign },
              spec,
            );
            expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
          } else if (step.spec.kind === 'heatmap') {
            const spec = step.spec as HeatmapStepSpec;
            const res = gradeHeatmapStep(
              {
                selectedCells: spec.expectedCells ?? [],
                flowAngles: Object.fromEntries((spec.flowPoints ?? []).map(p => [p.id, p.expectedAngle])),
                paintedTrends: spec.expectedTrends ?? {},
              },
              spec,
            );
            expect(res.correct, `${exercise.id}/${step.id}`).toBe(true);
          }
        }
      }
    }
  });
});
