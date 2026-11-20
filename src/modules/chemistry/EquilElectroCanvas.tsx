import { useEffect, useId, useMemo, useState } from 'react';
import {
  computeBufferPh,
  computeGalvanicCell,
  evaluateReactionShift,
} from '../../core/chemistry/equil-electro-engine';
import { Badge } from '../../components/ui/Badge';
import type { ElectroCellProblemConfig, EquilBufferProblemConfig } from './problems';

export interface EquilElectroCanvasProps {
  readonly config: EquilBufferProblemConfig | ElectroCellProblemConfig;
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

function formatSci(value: number): string {
  if (value === 0) return '0';
  const exp = Math.floor(Math.log10(Math.abs(value)));
  if (exp >= -2 && exp <= 3) {
    return value.toPrecision(3).replace('.', ',');
  }
  const mantissa = value / Math.pow(10, exp);
  return `${mantissa.toFixed(2).replace('.', ',')}·10^(${exp})`;
}

export function EquilElectroCanvas({ config }: EquilElectroCanvasProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (config.kind === 'equil-buffer') {
    return <EquilBufferVisualizer config={config} reducedMotion={reducedMotion} />;
  }
  return <ElectroCellVisualizer config={config} reducedMotion={reducedMotion} />;
}

function EquilBufferVisualizer({
  config,
  reducedMotion,
}: {
  readonly config: EquilBufferProblemConfig;
  readonly reducedMotion: boolean;
}) {
  const qSliderId = useId();
  const acidSliderId = useId();
  const baseSliderId = useId();

  const [logQ, setLogQ] = useState(() => Math.log10(config.defaultQ));
  const [acidConc, setAcidConc] = useState(config.defaultAcidConc);
  const [baseConc, setBaseConc] = useState(config.defaultBaseConc);

  useEffect(() => {
    setLogQ(Math.log10(config.defaultQ));
    setAcidConc(config.defaultAcidConc);
    setBaseConc(config.defaultBaseConc);
  }, [config.defaultQ, config.defaultAcidConc, config.defaultBaseConc]);

  const qValue = Math.pow(10, logQ);
  const shift = useMemo(() => evaluateReactionShift(qValue, config.kEq), [qValue, config.kEq]);
  const bufferPh = useMemo(
    () => computeBufferPh(config.pKa, acidConc, baseConc),
    [config.pKa, acidConc, baseConc],
  );

  const [minLogQ, maxLogQ] = config.qRangeLog10;
  const logK = Math.log10(config.kEq);
  const mapScaleX = (val: number) => {
    const clamped = Math.max(minLogQ, Math.min(maxLogQ, val));
    return 44 + ((clamped - minLogQ) / (maxLogQ - minLogQ)) * 292;
  };
  const kX = mapScaleX(logK);
  const qX = mapScaleX(logQ);

  const shiftLabel =
    shift === 'forward'
      ? 'Chiều thuận (Q < K)'
      : shift === 'reverse'
        ? 'Chiều nghịch (Q > K)'
        : 'Cân bằng (Q = K)';

  const phGaugeX = 24 + (Math.max(0, Math.min(14, bufferPh)) / 14) * 332;
  const bufferLowX = 24 + (Math.max(0, config.pKa - 1) / 14) * 332;
  const bufferHighX = 24 + (Math.min(14, config.pKa + 1) / 14) * 332;

  return (
    <div className="space-y-3.5">
      {/* Q vs K Equilibrium Shift Visualizer */}
      <div className="rounded-[var(--radius-lg)] border border-border bg-canvas/90 p-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-ink">{config.reactionEquation}</span>
          <Badge tone={shift === 'equilibrium' ? 'success' : shift === 'forward' ? 'accent' : 'warning'}>
            {shiftLabel}
          </Badge>
        </div>

        <svg
          viewBox="0 0 380 124"
          className="h-auto w-full select-none"
          role="img"
          aria-label={`So sánh thương số phản ứng Q và hằng số cân bằng K: ${shiftLabel}`}
        >
          <defs>
            <marker id="eq-arrow-fwd" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--hus-accent)" />
            </marker>
            <marker id="eq-arrow-rev" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--hus-starlight)" />
            </marker>
          </defs>

          {/* Scale Track */}
          <rect x="44" y="66" width="292" height="8" rx="4" fill="var(--hus-surface-subtle)" stroke="var(--hus-border)" strokeWidth="1" />
          <rect x="44" y="66" width={Math.max(0, kX - 44)} height="8" rx="4" fill="var(--hus-accent)" fillOpacity="0.22" />
          <rect x={kX} y="66" width={Math.max(0, 336 - kX)} height="8" rx="4" fill="var(--hus-starlight)" fillOpacity="0.22" />

          {/* K marker */}
          <line x1={kX} y1="48" x2={kX} y2="90" stroke="var(--hus-success)" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx={kX} cy="70" r="5" fill="var(--hus-success)" />
          <text x={kX} y="106" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-success)">
            K = {formatSci(config.kEq)}
          </text>

          {/* Q marker */}
          <circle
            cx={qX}
            cy="70"
            r="6.5"
            fill={shift === 'forward' ? 'var(--hus-accent)' : shift === 'reverse' ? 'var(--hus-starlight)' : 'var(--hus-success)'}
            stroke="var(--hus-surface)"
            strokeWidth="2"
            style={reducedMotion ? undefined : { transition: 'cx 180ms ease-out' }}
          />
          <text x={qX} y="56" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-ink)">
            Q = {formatSci(qValue)}
          </text>

          {/* Animated Shift Arrow */}
          {shift === 'forward' ? (
            <g>
              <line
                x1="120"
                y1="26"
                x2="258"
                y2="26"
                stroke="var(--hus-accent)"
                strokeWidth="2.6"
                markerEnd="url(#eq-arrow-fwd)"
                className={reducedMotion ? undefined : 'hus-mo-draw-line'}
              />
              <text x="190" y="17" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--hus-accent)">
                Chuyển dịch theo chiều thuận →
              </text>
            </g>
          ) : shift === 'reverse' ? (
            <g>
              <line
                x1="260"
                y1="26"
                x2="122"
                y2="26"
                stroke="var(--hus-starlight)"
                strokeWidth="2.6"
                markerEnd="url(#eq-arrow-rev)"
                className={reducedMotion ? undefined : 'hus-mo-draw-line'}
              />
              <text x="190" y="17" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--hus-starlight)">
                ← Chuyển dịch theo chiều nghịch
              </text>
            </g>
          ) : (
            <g>
              <text x="190" y="24" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--hus-success)">
                ⇌ Hệ đạt trạng thái cân bằng (v_thuận = v_nghịch)
              </text>
            </g>
          )}
        </svg>

        <div className="mt-2 space-y-1 border-t border-border pt-2 text-xs">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor={qSliderId} className="font-medium text-ink-secondary">
              Thử thay đổi thương số phản ứng <span className="font-mono">log₁₀(Q)</span>:
            </label>
            <span className="font-mono tabular-nums font-semibold text-ink">
              Q = {formatSci(qValue)}
            </span>
          </div>
          <input
            id={qSliderId}
            type="range"
            min={minLogQ}
            max={maxLogQ}
            step={0.05}
            value={logQ}
            onChange={e => setLogQ(Number(e.target.value))}
            className="w-full accent-[var(--hus-accent)]"
          />
        </div>
      </div>

      {/* Henderson-Hasselbalch Buffer Gauge */}
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-3 text-xs">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-ink">
            {config.bufferLabel} (pKₐ = {config.pKa.toFixed(2).replace('.', ',')})
          </span>
          <Badge tone="accent">
            pH = {bufferPh.toFixed(2).replace('.', ',')}
          </Badge>
        </div>

        <svg
          viewBox="0 0 380 62"
          className="h-auto w-full select-none"
          role="img"
          aria-label={`Thước đo pH dung dịch đệm hiện tại là ${bufferPh.toFixed(2)}`}
        >
          {/* Buffer zone pKa +- 1 */}
          <rect
            x={bufferLowX}
            y="14"
            width={Math.max(4, bufferHighX - bufferLowX)}
            height="22"
            rx="4"
            fill="var(--hus-success)"
            fillOpacity="0.16"
          />
          <rect x="24" y="21" width="332" height="8" rx="4" fill="var(--hus-surface-subtle)" stroke="var(--hus-border)" strokeWidth="1" />
          <circle
            cx={phGaugeX}
            cy="25"
            r="6"
            fill="var(--hus-accent)"
            stroke="var(--hus-surface)"
            strokeWidth="2"
            style={reducedMotion ? undefined : { transition: 'cx 180ms ease-out' }}
          />
          <text x="24" y="50" fontSize="9.5" fill="var(--hus-ink-muted)">pH 0</text>
          <text x="190" y="50" textAnchor="middle" fontSize="9.5" fill="var(--hus-success)">
            Vùng đệm hiệu quả (pKₐ ± 1)
          </text>
          <text x="356" y="50" textAnchor="end" fontSize="9.5" fill="var(--hus-ink-muted)">pH 14</text>
        </svg>

        <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <label htmlFor={baseSliderId} className="space-y-1">
            <span className="flex justify-between text-ink-secondary">
              <span>Nồng độ bazơ liên hợp [B]:</span>
              <strong className="font-mono tabular-nums text-ink">{baseConc.toFixed(2).replace('.', ',')} M</strong>
            </span>
            <input
              id={baseSliderId}
              type="range"
              min={0.05}
              max={0.5}
              step={0.01}
              value={baseConc}
              onChange={e => setBaseConc(Number(e.target.value))}
              className="w-full accent-[var(--hus-accent)]"
            />
          </label>
          <label htmlFor={acidSliderId} className="space-y-1">
            <span className="flex justify-between text-ink-secondary">
              <span>Nồng độ axit liên hợp [HA]:</span>
              <strong className="font-mono tabular-nums text-ink">{acidConc.toFixed(2).replace('.', ',')} M</strong>
            </span>
            <input
              id={acidSliderId}
              type="range"
              min={0.05}
              max={0.5}
              step={0.01}
              value={acidConc}
              onChange={e => setAcidConc(Number(e.target.value))}
              className="w-full accent-[var(--hus-starlight)]"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function ElectroCellVisualizer({
  config,
  reducedMotion,
}: {
  readonly config: ElectroCellProblemConfig;
  readonly reducedMotion: boolean;
}) {
  const qSliderId = useId();
  const [logQ, setLogQ] = useState(() => Math.log10(config.defaultQ));

  useEffect(() => {
    setLogQ(Math.log10(config.defaultQ));
  }, [config.defaultQ]);

  const qValue = Math.pow(10, logQ);
  const cell = useMemo(
    () =>
      computeGalvanicCell(
        config.eCathode,
        config.eAnode,
        config.electronsTransferred,
        qValue,
      ),
    [config.eCathode, config.eAnode, config.electronsTransferred, qValue],
  );

  return (
    <div className="space-y-3.5">
      <div className="rounded-[var(--radius-lg)] border border-border bg-canvas/90 p-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold text-ink">{config.cellNotation}</span>
          <Badge tone={cell.spontaneous ? 'success' : 'warning'}>
            {cell.spontaneous ? 'Pin tự phát (E_pin > 0)' : 'Không tự phát (E_pin ≤ 0)'}
          </Badge>
        </div>

        {/* Animated 2-Beaker Galvanic Cell SVG */}
        <svg
          viewBox="0 0 380 218"
          className="h-auto w-full select-none"
          role="img"
          aria-label={`Sơ đồ pin Galvani ${config.cellNotation} với dòng electron từ Anode sang Cathode`}
        >
          {/* External Wire */}
          <path
            id="galvanic-wire"
            d="M 80 82 L 80 26 L 300 26 L 300 82"
            fill="none"
            stroke="var(--hus-border-strong)"
            strokeWidth="2.4"
          />

          {/* Voltmeter */}
          <rect x="148" y="10" width="84" height="30" rx="15" fill="var(--hus-surface)" stroke="var(--hus-accent)" strokeWidth="1.8" />
          <text x="190" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-accent)">
            {cell.eNernst.toFixed(2).replace('.', ',')} V
          </text>

          {/* Animated Electron Flow along External Wire */}
          {!reducedMotion && cell.spontaneous ? (
            <g>
              <circle r="4.5" fill="var(--hus-starlight)">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 80 82 L 80 26 L 148 26" />
              </circle>
              <circle r="4.5" fill="var(--hus-starlight)">
                <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M 232 26 L 300 26 L 300 82" />
              </circle>
            </g>
          ) : null}

          <text x="112" y="18" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--hus-starlight)">
            e⁻ →
          </text>
          <text x="268" y="18" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--hus-starlight)">
            → e⁻
          </text>

          {/* Left Beaker (Anode) */}
          <rect x="34" y="96" width="108" height="96" rx="8" fill="var(--hus-surface)" stroke="var(--hus-border-strong)" strokeWidth="1.5" />
          <rect x="37" y="122" width="102" height="67" rx="5" fill="var(--hus-accent)" fillOpacity="0.12" />
          <rect x="68" y="76" width="24" height="88" rx="3" fill="var(--hus-ink-secondary)" fillOpacity="0.78" />
          <text x="80" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-surface)">
            {config.anodeMetal}
          </text>
          <text x="88" y="178" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--hus-accent)">
            {config.anodeIon}
          </text>
          <text x="88" y="208" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--hus-ink)">
            Anode (−): {config.anodeHalfReaction}
          </text>

          {/* Right Beaker (Cathode) */}
          <rect x="238" y="96" width="108" height="96" rx="8" fill="var(--hus-surface)" stroke="var(--hus-border-strong)" strokeWidth="1.5" />
          <rect x="241" y="122" width="102" height="67" rx="5" fill="var(--hus-success)" fillOpacity="0.14" />
          <rect x="288" y="76" width="24" height="88" rx="3" fill="var(--hus-starlight)" fillOpacity="0.88" />
          <text x="300" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-surface)">
            {config.cathodeMetal}
          </text>
          <text x="292" y="178" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--hus-success)">
            {config.cathodeIon}
          </text>
          <text x="292" y="208" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--hus-ink)">
            Cathode (+): {config.cathodeHalfReaction}
          </text>

          {/* Salt Bridge */}
          <path
            d="M 122 146 L 122 76 Q 122 62 136 62 L 244 62 Q 258 62 258 76 L 258 146"
            fill="none"
            stroke="var(--hus-surface-subtle)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 122 146 L 122 76 Q 122 62 136 62 L 244 62 Q 258 62 258 76 L 258 146"
            fill="none"
            stroke="var(--hus-border-strong)"
            strokeWidth="1.4"
          />
          <text x="190" y="65" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--hus-ink-secondary)">
            Cầu muối: ← NO₃⁻ | K⁺ →
          </text>
        </svg>

        {/* Nernst Q Slider & Readout */}
        <div className="mt-2 space-y-2 border-t border-border pt-2.5 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label htmlFor={qSliderId} className="font-medium text-ink-secondary">
              Thử thay đổi tỉ số nồng độ <span className="font-mono">log₁₀(Q)</span>:
            </label>
            <span className="font-mono tabular-nums font-semibold text-ink">
              Q = {formatSci(qValue)}
            </span>
          </div>
          <input
            id={qSliderId}
            type="range"
            min={-4}
            max={4}
            step={0.1}
            value={logQ}
            onChange={e => setLogQ(Number(e.target.value))}
            className="w-full accent-[var(--hus-accent)]"
          />
          <div className="grid grid-cols-3 gap-2 rounded-[var(--radius-md)] border border-border bg-surface p-2 text-center font-mono tabular-nums">
            <div>
              <div className="text-[11px] text-ink-muted">E°_pin</div>
              <div className="font-semibold text-ink">{cell.eStandard.toFixed(2).replace('.', ',')} V</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-muted">E_pin(Q)</div>
              <div className="font-semibold text-accent">{cell.eNernst.toFixed(3).replace('.', ',')} V</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-muted">ΔG°</div>
              <div className="font-semibold text-ink">{cell.deltaGStandardKj.toFixed(1).replace('.', ',')} kJ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
