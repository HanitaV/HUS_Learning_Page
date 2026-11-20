import { useEffect, useId, useMemo, useState } from 'react';
import {
  computeCrossoverTemperature,
  computeGibbsAtTemperature,
  computeHessSum,
  type HessStepState,
} from '../../core/chemistry/essay-engine';
import { Badge } from '../../components/ui/Badge';
import type { ThermoProblemConfig } from './problems';

export interface ThermoDiagramCanvasProps {
  readonly config: ThermoProblemConfig;
  readonly selectedGasIds: readonly string[];
  readonly onToggleGasId: (id: string) => void;
  readonly hessStates: readonly HessStepState[];
  readonly onHessStateChange: (next: readonly HessStepState[]) => void;
}

export function ThermoDiagramCanvas({
  config,
  selectedGasIds,
  onToggleGasId,
  hessStates,
  onHessStateChange,
}: ThermoDiagramCanvasProps) {
  const sliderId = useId();
  const [tempK, setTempK] = useState(config.defaultTempK);
  const [animatingSweep, setAnimatingSweep] = useState(false);

  useEffect(() => {
    setTempK(config.defaultTempK);
    setAnimatingSweep(false);
  }, [config.equationDisplay, config.defaultTempK]);

  // Smooth temperature sweep animation across T*
  useEffect(() => {
    if (!animatingSweep) return;
    const [minT, maxT] = config.tempRange;
    const step = Math.max(15, Math.round((maxT - minT) / 36));
    if (tempK >= maxT) {
      setAnimatingSweep(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setTempK(prev => Math.min(maxT, prev + step));
    }, 65);
    return () => window.clearTimeout(timer);
  }, [animatingSweep, tempK, config.tempRange]);

  const tStar = useMemo(
    () => computeCrossoverTemperature(config.deltaH_kJ, config.deltaS_J_per_K),
    [config.deltaH_kJ, config.deltaS_J_per_K],
  );

  const currentDeltaG = useMemo(
    () => computeGibbsAtTemperature(config.deltaH_kJ, config.deltaS_J_per_K, tempK),
    [config.deltaH_kJ, config.deltaS_J_per_K, tempK],
  );

  if (config.subMode === 'hess-cycle' && config.hessReactions) {
    const baseMap: Record<string, number> = {};
    for (const r of config.hessReactions) {
      baseMap[r.id] = r.deltaH;
    }
    const netDeltaH = computeHessSum(baseMap, hessStates);

    const toggleReverse = (id: string) => {
      onHessStateChange(
        hessStates.map(s => (s.id === id ? { ...s, reversed: !s.reversed } : s)),
      );
    };

    const toggleMultiplier = (id: string) => {
      onHessStateChange(
        hessStates.map(s => (s.id === id ? { ...s, multiplier: s.multiplier === 1 ? 2 : 1 } : s)),
      );
    };

    return (
      <div className="space-y-3.5">
        {/* Visual Hess Cycle SVG */}
        <div className="rounded-[var(--radius-lg)] border border-border bg-canvas/90 p-3">
          <svg
            viewBox="0 0 380 164"
            className="h-auto w-full select-none"
            role="img"
            aria-label="Chu trình Hess hai con đường"
          >
            <defs>
              <marker id="hess-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--hus-accent)" />
              </marker>
              <marker id="hess-arrow-gold" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--hus-starlight)" />
              </marker>
            </defs>

            {/* Nodes */}
            <rect x="14" y="20" width="112" height="36" rx="8" fill="var(--hus-surface)" stroke="var(--hus-border-strong)" strokeWidth="1.4" />
            <text x="70" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--hus-ink)">
              2C(r) + H₂(k)
            </text>

            <rect x="254" y="20" width="112" height="36" rx="8" fill="var(--hus-surface)" stroke="var(--hus-accent)" strokeWidth="1.6" />
            <text x="310" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-accent)">
              C₂H₂(k)
            </text>

            <rect x="116" y="116" width="148" height="34" rx="8" fill="var(--hus-surface-subtle)" stroke="var(--hus-border-strong)" strokeWidth="1.3" />
            <text x="190" y="137" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="var(--hus-ink-secondary)">
              2CO₂(k) + H₂O(l)
            </text>

            {/* Direct arrow (target) */}
            <line x1="126" y1="38" x2="246" y2="38" stroke="var(--hus-accent)" strokeWidth="2.2" markerEnd="url(#hess-arrow)" className="hus-mo-draw-line" />
            <text x="188" y="30" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--hus-accent)">
              ΔH° = {netDeltaH > 0 ? `+${netDeltaH}` : netDeltaH} kJ
            </text>

            {/* Detour left (reactants -> CO2 + H2O) */}
            <line x1="74" y1="56" x2="148" y2="112" stroke="var(--hus-starlight)" strokeWidth="1.8" markerEnd="url(#hess-arrow-gold)" />
            <text x="72" y="95" textAnchor="middle" fontSize="10" fill="var(--hus-ink-secondary)">
              Đốt cháy (1) + (2)
            </text>

            {/* Detour right (CO2 + H2O <-> C2H2) */}
            {hessStates.find(s => s.id === 'h3')?.reversed ? (
              <line x1="234" y1="114" x2="304" y2="60" stroke="var(--hus-success)" strokeWidth="2" markerEnd="url(#hess-arrow)" />
            ) : (
              <line x1="304" y1="58" x2="234" y2="112" stroke="var(--hus-starlight)" strokeWidth="1.8" markerEnd="url(#hess-arrow-gold)" />
            )}
            <text x="308" y="96" textAnchor="middle" fontSize="10" fill="var(--hus-ink-secondary)">
              {hessStates.find(s => s.id === 'h3')?.reversed ? 'Đã đảo (3): +1300' : 'Đốt C₂H₂ (3): −1300'}
            </text>
          </svg>
        </div>

        {/* Interactive Hess reaction controls */}
        <div className="space-y-2">
          {config.hessReactions.map((rxn, idx) => {
            const st = hessStates.find(s => s.id === rxn.id) ?? {
              id: rxn.id,
              reversed: false,
              multiplier: 1,
            };
            const effectiveDeltaH = rxn.deltaH * (st.reversed ? -1 : 1) * st.multiplier;
            return (
              <div
                key={rxn.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2 text-xs"
              >
                <div className="min-w-0 flex-1">
                  <span className="font-mono font-semibold text-ink-muted">({idx + 1}) </span>
                  <span className="font-medium text-ink">{rxn.equation}</span>
                  <p className="mt-0.5 font-mono tabular-nums text-accent">
                    ΔH = {effectiveDeltaH > 0 ? `+${effectiveDeltaH}` : effectiveDeltaH} kJ
                    {st.reversed ? ' (đã đảo chiều)' : ''}
                    {st.multiplier > 1 ? ` (×${st.multiplier})` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleReverse(rxn.id)}
                    aria-pressed={st.reversed}
                    className={`min-h-[32px] rounded-[var(--radius-sm)] border px-2 py-1 text-xs font-medium transition-transform duration-200 active:scale-95 ${
                      st.reversed
                        ? 'border-accent bg-accent-subtle text-accent-ink'
                        : 'border-border bg-surface-subtle text-ink-secondary hover:text-ink'
                    }`}
                  >
                    ⇄ Đảo chiều
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleMultiplier(rxn.id)}
                    aria-pressed={st.multiplier === 2}
                    className={`min-h-[32px] rounded-[var(--radius-sm)] border px-2 py-1 font-mono text-xs font-medium transition-colors ${
                      st.multiplier === 2
                        ? 'border-accent bg-accent-subtle text-accent-ink'
                        : 'border-border bg-surface-subtle text-ink-secondary hover:text-ink'
                    }`}
                  >
                    ×{st.multiplier}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Gibbs linear graph coordinates
  const [minT, maxT] = config.tempRange;
  const gAtMin = computeGibbsAtTemperature(config.deltaH_kJ, config.deltaS_J_per_K, minT);
  const gAtMax = computeGibbsAtTemperature(config.deltaH_kJ, config.deltaS_J_per_K, maxT);
  const maxAbsG = Math.max(Math.abs(gAtMin), Math.abs(gAtMax), 120) * 1.15;

  const mapX = (t: number) => 46 + ((t - minT) / (maxT - minT)) * 314;
  const mapY = (g: number) => 94 - (g / maxAbsG) * 72;

  const x1 = mapX(minT);
  const y1 = mapY(gAtMin);
  const x2 = mapX(maxT);
  const y2 = mapY(gAtMax);
  const curX = mapX(tempK);
  const curY = mapY(currentDeltaG);
  const tStarX = tStar !== null && tStar >= minT && tStar <= maxT ? mapX(tStar) : null;

  return (
    <div className="space-y-3.5">
      {/* Interactive ΔG°(T) Linear Plot */}
      <div className="rounded-[var(--radius-lg)] border border-border bg-canvas/90 p-2.5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-1">
          <span className="text-xs font-semibold text-ink">
            Đồ thị đường thẳng ΔG°(T) = ΔH° − T·ΔS°
          </span>
          <button
            type="button"
            onClick={() => {
              setTempK(minT);
              setAnimatingSweep(true);
            }}
            className="hus-btn hus-btn-primary min-h-[30px] px-2.5 py-0.5 text-xs"
          >
            {animatingSweep ? 'Đang quét T…' : 'Quét nhiệt độ T'}
          </button>
        </div>

        <svg
          viewBox="0 0 380 184"
          className="h-auto w-full select-none"
          role="img"
          aria-label={`Đồ thị ΔG° theo nhiệt độ T của ${config.equationDisplay}`}
        >
          {/* Shaded spontaneous region ΔG° < 0 (below x-axis y=94) */}
          <rect
            x="46"
            y="94"
            width="314"
            height="72"
            fill="var(--hus-success)"
            fillOpacity="0.08"
          />
          <text x="354" y="158" textAnchor="end" fontSize="9.5" fontWeight="600" fill="var(--hus-success)">
            Miền tự diễn biến (ΔG° &lt; 0)
          </text>
          <text x="354" y="28" textAnchor="end" fontSize="9.5" fill="var(--hus-ink-muted)">
            Không tự xảy ra (ΔG° &gt; 0)
          </text>

          {/* Axes */}
          <line x1="46" y1="16" x2="46" y2="168" stroke="var(--hus-border-strong)" strokeWidth="1.4" />
          <line x1="46" y1="94" x2="366" y2="94" stroke="var(--hus-ink-muted)" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="368" y="97" fontSize="10" fontWeight="600" fill="var(--hus-ink-muted)">T</text>
          <text x="12" y="22" fontSize="10" fontWeight="600" fill="var(--hus-ink-muted)">ΔG°</text>

          {/* Main linear ΔG°(T) line */}
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--hus-accent)"
            strokeWidth="2.6"
            strokeLinecap="round"
            className="hus-mo-draw-line"
          />

          {/* Crossover point T* */}
          {tStarX !== null && tStar !== null ? (
            <g>
              <line x1={tStarX} y1="94" x2={tStarX} y2="168" stroke="var(--hus-starlight)" strokeWidth="1.1" strokeDasharray="3 3" />
              <circle cx={tStarX} cy="94" r="4.5" fill="var(--hus-starlight)" />
              <text x={tStarX} y="85" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--hus-starlight)">
                T* ≈ {Math.round(tStar)} K
              </text>
            </g>
          ) : null}

          {/* Live point at scrubbed temperature T */}
          <line x1={curX} y1={curY} x2={curX} y2="94" stroke="var(--hus-ink-muted)" strokeWidth="1" strokeDasharray="2 2" />
          <circle
            cx={curX}
            cy={curY}
            r="5.5"
            fill={currentDeltaG < 0 ? 'var(--hus-success)' : 'var(--hus-danger)'}
            stroke="var(--hus-surface)"
            strokeWidth="2"
          />
        </svg>

        {/* Temperature Scrubber */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-border px-1 pt-2 text-xs">
          <label htmlFor={sliderId} className="font-medium text-ink-secondary">
            Thử kéo nhiệt độ: <strong className="font-mono tabular-nums text-ink">{tempK} K</strong>
          </label>
          <Badge tone={currentDeltaG < 0 ? 'success' : 'warning'}>
            ΔG° = {currentDeltaG.toFixed(1).replace('.', ',')} kJ ({currentDeltaG < 0 ? 'Tự diễn biến' : 'Không tự xảy ra'})
          </Badge>
          <input
            id={sliderId}
            type="range"
            min={minT}
            max={maxT}
            step={10}
            value={tempK}
            onChange={e => {
              setAnimatingSweep(false);
              setTempK(Number(e.target.value));
            }}
            className="w-full accent-[var(--hus-accent)]"
          />
        </div>
      </div>

      {/* Interactive Gas-Species Highlighter for ΔU */}
      {config.species && config.species.length > 0 ? (
        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-3 text-xs">
          <p className="font-semibold text-ink">
            Nhấn tô màu các chất khí (k) để đếm Δn_khí:
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {config.species.map((sp, idx) => {
              const prevSide = idx > 0 ? config.species?.[idx - 1]?.side : sp.side;
              const isSelected = selectedGasIds.includes(sp.id);
              return (
                <span key={sp.id} className="inline-flex items-center gap-1.5">
                  {idx > 0 && prevSide !== sp.side ? (
                    <span className="px-1 font-mono font-bold text-ink-muted">→</span>
                  ) : idx > 0 ? (
                    <span className="font-mono text-ink-muted">+</span>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => onToggleGasId(sp.id)}
                    aria-pressed={isSelected}
                    className={`min-h-[34px] rounded-[var(--radius-sm)] border px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? sp.state === 'k'
                          ? 'border-accent bg-accent-subtle text-accent-ink'
                          : 'border-danger bg-danger-subtle text-danger'
                        : 'border-border bg-surface-subtle text-ink hover:border-border-strong'
                    }`}
                  >
                    {sp.coefficient > 1 ? sp.coefficient : ''}
                    {sp.formula}({sp.state})
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Compact Thermochemical Data Table */}
      {config.dataTable && config.dataTable.length > 0 ? (
        <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-surface-subtle/70 text-ink-muted">
                <th className="px-2.5 py-1.5 font-medium">Chất</th>
                <th className="px-2.5 py-1.5 font-medium">Hệ số ν</th>
                <th className="px-2.5 py-1.5 font-medium">ΔH°f (kJ/mol)</th>
                <th className="px-2.5 py-1.5 font-medium">S° (J/mol·K)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono tabular-nums">
              {config.dataTable.map(row => (
                <tr key={row.formula}>
                  <td className="px-2.5 py-1.5 font-sans font-medium text-ink">
                    {row.formula}{' '}
                    <span className="text-[10px] text-ink-muted">({row.role})</span>
                  </td>
                  <td className="px-2.5 py-1.5 text-ink">{row.coeff}</td>
                  <td className="px-2.5 py-1.5 text-ink">{row.deltaHf}</td>
                  <td className="px-2.5 py-1.5 text-ink">{row.entropy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
