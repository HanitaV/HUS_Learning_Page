import { describe, expect, it } from 'vitest';
import {
  buildExpectedMoFillSequence,
  classifySpontaneityRegime,
  computeCrossoverTemperature,
  computeGibbsAtTemperature,
  computeHessSum,
  computeMoMetrics,
  diagnoseGasSelection,
  diagnoseMoFill,
  EMPTY_MO_COUNTS,
  getExpectedMoCounts,
  getMoLevelsInOrder,
  isNumericAnswerMatch,
  parseNumericInput,
  type EquationSpecies,
} from '../../src/core/chemistry/essay-engine';

describe('chemistry semi-essay core engine', () => {
  it('swaps σ2p and π2p energy order between Type I and Type II MO diagrams', () => {
    const type1 = getMoLevelsInOrder('type-1').map(l => l.id);
    const type2 = getMoLevelsInOrder('type-2').map(l => l.id);
    expect(type1).toEqual(['s2s', 's2s_star', 's2p', 'p2p', 'p2p_star', 's2p_star']);
    expect(type2).toEqual(['s2s', 's2s_star', 'p2p', 's2p', 'p2p_star', 's2p_star']);
  });

  it('builds Hund-compliant fill sequence and computes accurate O2- and B2 metrics', () => {
    const o2MinusCounts = getExpectedMoCounts('type-1', 13);
    const o2MinusMetrics = computeMoMetrics(o2MinusCounts, 'type-1');
    expect(o2MinusMetrics.totalElectrons).toBe(13);
    expect(o2MinusMetrics.bondingElectrons).toBe(8);
    expect(o2MinusMetrics.antibondingElectrons).toBe(5);
    expect(o2MinusMetrics.bondOrder).toBe(1.5);
    expect(o2MinusMetrics.unpairedElectrons).toBe(1);
    expect(o2MinusMetrics.magnetism).toBe('paramagnetic');

    const b2Seq = buildExpectedMoFillSequence('type-2', 6);
    expect(b2Seq).toHaveLength(6);
    expect(b2Seq[5]?.rule).toBe('hund');
    const b2Metrics = computeMoMetrics(b2Seq[5]!.countsAfter, 'type-2');
    expect(b2Metrics.bondOrder).toBe(1);
    expect(b2Metrics.unpairedElectrons).toBe(2);
    expect(b2Metrics.magnetism).toBe('paramagnetic');
  });

  it('diagnoses ordering, Hund, Aufbau, and total electron count errors cleanly', () => {
    const o2Counts = getExpectedMoCounts('type-1', 12);
    expect(diagnoseMoFill(o2Counts, 'type-1', 'type-1', 12).ok).toBe(true);

    // Wrong ordering
    const wrongOrd = diagnoseMoFill(o2Counts, 'type-2', 'type-1', 12);
    expect(wrongOrd.ok).toBe(false);
    expect(wrongOrd.violation).toBe('ordering');

    // Hund violation on π*2p ([↑↓][ ] instead of [↑][↑])
    const hundBad = {
      ...EMPTY_MO_COUNTS,
      s2s: 2 as const,
      s2s_star: 2 as const,
      s2p: 2 as const,
      p2p_1: 2 as const,
      p2p_2: 2 as const,
      p2p_star_1: 2 as const,
      p2p_star_2: 0 as const,
    };
    const hundDiag = diagnoseMoFill(hundBad, 'type-1', 'type-1', 12);
    expect(hundDiag.ok).toBe(false);
    expect(hundDiag.violation).toBe('hund');
    expect(hundDiag.highlightSlotIds).toEqual(['p2p_star_2']);

    // Aufbau violation (skipping s2s_star)
    const aufbauBad = {
      ...EMPTY_MO_COUNTS,
      s2s: 2 as const,
      s2s_star: 0 as const,
      s2p: 2 as const,
    };
    const aufbauDiag = diagnoseMoFill(aufbauBad, 'type-1', 'type-1', 4);
    expect(aufbauDiag.ok).toBe(false);
    expect(aufbauDiag.violation).toBe('aufbau');
  });

  it('parses Vietnamese decimal commas and evaluates numeric tolerances', () => {
    expect(parseNumericInput('1,5')).toBe(1.5);
    expect(parseNumericInput('-669,7')).toBe(-669.7);
    expect(parseNumericInput('abc')).toBeNull();
    expect(isNumericAnswerMatch('617,5', 617.54, 0.2)).toBe(true);
    expect(isNumericAnswerMatch('600', 617.54, 1.0)).toBe(false);
  });

  it('computes Gibbs free energy, crossover T*, spontaneity regime, gas Δn, and Hess sum', () => {
    expect(computeGibbsAtTemperature(176, 285, 298)).toBeCloseTo(91.07, 2);
    expect(computeCrossoverTemperature(176, 285)).toBeCloseTo(617.54, 1);
    expect(classifySpontaneityRegime(176, 285)).toBe('high-T');
    expect(classifySpontaneityRegime(-719.4, -166.8)).toBe('low-T');

    const cusSpecies: readonly EquationSpecies[] = [
      { id: 'cus', formula: 'CuS', state: 'r', coefficient: 2, side: 'reactant' },
      { id: 'o2', formula: 'O₂', state: 'k', coefficient: 3, side: 'reactant' },
      { id: 'cuo', formula: 'CuO', state: 'r', coefficient: 2, side: 'product' },
      { id: 'so2', formula: 'SO₂', state: 'k', coefficient: 2, side: 'product' },
    ];
    const gasOk = diagnoseGasSelection(cusSpecies, ['o2', 'so2']);
    expect(gasOk.ok).toBe(true);
    expect(gasOk.deltaNGas).toBe(-1);

    const gasBad = diagnoseGasSelection(cusSpecies, ['cus', 'o2', 'so2']);
    expect(gasBad.ok).toBe(false);

    const hessTotal = computeHessSum(
      { h1: -394, h2: -286, h3: -1300 },
      [
        { id: 'h1', reversed: false, multiplier: 2 },
        { id: 'h2', reversed: false, multiplier: 1 },
        { id: 'h3', reversed: true, multiplier: 1 },
      ],
    );
    expect(hessTotal).toBe(226);
  });
});
