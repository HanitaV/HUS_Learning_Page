import { describe, expect, it } from 'vitest';
import {
  computeBufferPh,
  computeGalvanicCell,
  evaluateReactionShift,
} from '../../src/core/chemistry/equil-electro-engine';

describe('equil-electro core engine', () => {
  it('evaluates reaction shift by comparing Q and K', () => {
    expect(evaluateReactionShift(5e-6, 1.8e-5)).toBe('forward');
    expect(evaluateReactionShift(1.0e-4, 1.8e-5)).toBe('reverse');
    expect(evaluateReactionShift(1.8e-5, 1.8e-5)).toBe('equilibrium');
    expect(evaluateReactionShift(0, 1.8e-5)).toBe('forward');
  });

  it('rejects invalid Q or K values in evaluateReactionShift', () => {
    expect(() => evaluateReactionShift(-1, 1e-5)).toThrow(RangeError);
    expect(() => evaluateReactionShift(1e-5, 0)).toThrow(RangeError);
    expect(() => evaluateReactionShift(Number.NaN, 1)).toThrow(RangeError);
  });

  it('computes buffer pH via Henderson-Hasselbalch equation', () => {
    expect(computeBufferPh(9.25, 0.1, 0.1)).toBeCloseTo(9.25, 5);
    expect(computeBufferPh(9.25, 0.1, 0.2)).toBeCloseTo(9.551, 3);
    expect(computeBufferPh(4.76, 0.2, 0.1)).toBeCloseTo(4.459, 3);
  });

  it('rejects invalid concentrations or pKa in computeBufferPh', () => {
    expect(() => computeBufferPh(Number.POSITIVE_INFINITY, 0.1, 0.1)).toThrow(RangeError);
    expect(() => computeBufferPh(4.76, 0, 0.1)).toThrow(RangeError);
    expect(() => computeBufferPh(4.76, 0.1, -0.1)).toThrow(RangeError);
  });

  it('computes standard potential, Nernst potential, and ΔG° for Zn-Cu galvanic cell', () => {
    const std = computeGalvanicCell(0.34, -0.76, 2, 1);
    expect(std.eStandard).toBeCloseTo(1.1, 5);
    expect(std.eNernst).toBeCloseTo(1.1, 5);
    expect(std.deltaGStandardKj).toBeCloseTo(-212.268, 2);
    expect(std.spontaneous).toBe(true);

    const dilutedAnode = computeGalvanicCell(0.34, -0.76, 2, 0.01);
    expect(dilutedAnode.eNernst).toBeCloseTo(1.1592, 3);
    expect(dilutedAnode.spontaneous).toBe(true);

    const reversedCell = computeGalvanicCell(-0.76, 0.34, 2, 1);
    expect(reversedCell.eStandard).toBeCloseTo(-1.1, 5);
    expect(reversedCell.spontaneous).toBe(false);
  });

  it('rejects invalid parameters in computeGalvanicCell', () => {
    expect(() => computeGalvanicCell(0.34, -0.76, 0, 1)).toThrow(RangeError);
    expect(() => computeGalvanicCell(0.34, -0.76, 1.5, 1)).toThrow(RangeError);
    expect(() => computeGalvanicCell(0.34, -0.76, 2, 0)).toThrow(RangeError);
  });
});
