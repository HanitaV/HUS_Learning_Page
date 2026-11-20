import { describe, expect, it } from 'vitest';
import { codeProblems } from '../../src/content/code-lab/problems';
import { parsonsExercises } from '../../src/content/blocks/parsons-bank';
import { proofBlocksExercises } from '../../src/content/blocks/proof-bank';
import { validateProofDag } from '../../src/core/blocks/proof-dag';

describe('curated Code Lab & Block banks integrity', () => {
  it('all 4 programming courses have valid coding problems with starter code and test cases', () => {
    const courseIds = new Set(codeProblems.map(p => p.courseId));
    expect(courseIds).toEqual(new Set(['thcs4', 'oop', 'mat3514', 'mat3504']));
    expect(codeProblems.length).toBeGreaterThanOrEqual(12);

    const ids = new Set<string>();
    for (const problem of codeProblems) {
      expect(ids.has(problem.id)).toBe(false);
      ids.add(problem.id);
      expect(problem.supportedLanguages).toContain(problem.defaultLanguage);
      expect(problem.testCases.length).toBeGreaterThanOrEqual(3);
      for (const lang of problem.supportedLanguages) {
        expect((problem.starterCode[lang] ?? '').trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('all Parsons exercises have valid non-distractor solutionOrder references', () => {
    expect(parsonsExercises.length).toBeGreaterThanOrEqual(4);
    for (const ex of parsonsExercises) {
      const blockMap = new Map(ex.blocks.map(b => [b.id, b]));
      expect(ex.solutionOrder.length).toBeGreaterThan(0);
      for (const id of ex.solutionOrder) {
        const block = blockMap.get(id);
        expect(block).toBeDefined();
        expect(block?.isDistractor).not.toBe(true);
      }
    }
  });

  it('all Proof Blocks exercises pass DAG validation with 0 errors', () => {
    expect(proofBlocksExercises.length).toBeGreaterThanOrEqual(4);
    const courseIds = new Set(proofBlocksExercises.map(p => p.courseId));
    expect(courseIds.has('mat1091')).toBe(true);
    expect(courseIds.has('mat1101')).toBe(true);

    for (const ex of proofBlocksExercises) {
      expect(validateProofDag(ex)).toEqual([]);
    }
  });
});
