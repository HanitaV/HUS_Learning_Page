import { useEffect, useState } from 'react';
import { Badge } from '../../components/ui/Badge';
import type { VbProblemConfig } from './problems';

export interface VbOverlapCanvasProps {
  readonly config: VbProblemConfig;
  readonly selectedBondIds: readonly string[];
}

export function VbOverlapCanvas({ config, selectedBondIds }: VbOverlapCanvasProps) {
  const [stage, setStage] = useState<'ao' | 'hybrid' | 'overlap'>('hybrid');
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setStage('hybrid');
    setPlaying(false);
  }, [config.moleculeLabel]);

  useEffect(() => {
    if (!playing) return;
    const sequence: readonly ('ao' | 'hybrid' | 'overlap')[] = ['ao', 'hybrid', 'overlap'];
    const currentIdx = sequence.indexOf(stage);
    if (currentIdx >= sequence.length - 1) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => {
      const next = sequence[currentIdx + 1];
      if (next) setStage(next);
    }, 950);
    return () => window.clearTimeout(timer);
  }, [playing, stage]);

  const startAnimation = () => {
    setStage('ao');
    setPlaying(true);
  };

  const hasSigmaSelected = config.candidateBonds.some(
    b => b.kind === 'sigma' && b.isCorrectForMolecule && selectedBondIds.includes(b.id),
  );
  const hasPiSelected = config.candidateBonds.some(
    b => b.kind === 'pi' && b.isCorrectForMolecule && selectedBondIds.includes(b.id),
  );

  const isLinear = config.hybridization === 'sp';

  return (
    <div className="space-y-3.5">
      {/* Stage Switcher + Animated Guide */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          className="inline-flex rounded-[var(--radius-md)] border border-border bg-surface-subtle p-0.5"
          role="group"
          aria-label="Giai đoạn minh họa thuyết VB"
        >
          {(
            [
              { id: 'ao', label: '1. AO tách rời' },
              { id: 'hybrid', label: `2. Lai hóa ${config.hybridization}` },
              { id: 'overlap', label: '3. Xen phủ σ / π' },
            ] as const
          ).map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setPlaying(false);
                setStage(item.id);
              }}
              aria-pressed={stage === item.id}
              className={`min-h-[34px] rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium transition-colors duration-200 ${
                stage === item.id
                  ? 'bg-surface text-accent shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={startAnimation}
          className="hus-btn hus-btn-primary min-h-[34px] px-3 py-1 text-xs"
        >
          {playing ? 'Đang chạy…' : 'Xem hoạt ảnh lai hóa'}
        </button>
      </div>

      {/* Animated Orbital-Box & Overlap SVG */}
      <div className="rounded-[var(--radius-lg)] border border-border bg-canvas/90 p-3">
        {stage !== 'overlap' ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-ink-muted">
              <span>
                Nguyên tử trung tâm: <strong className="text-ink">{config.centralAtom}</strong>
              </span>
              <Badge tone="accent">
                {stage === 'ao' ? 'Trước lai hóa (2s, 2p)' : `Sau lai hóa ${config.hybridization}`}
              </Badge>
            </div>

            {/* Orbital Boxes */}
            <div className="flex flex-wrap items-end justify-center gap-4 py-3">
              {/* Hybridized group */}
              <div className="space-y-1.5 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  {config.hybridBoxes.map((box, idx) => (
                    <div
                      key={box.id}
                      style={{
                        transitionDelay: `${idx * 45}ms`,
                      }}
                      className={`flex h-12 w-14 flex-col items-center justify-center rounded-[var(--radius-sm)] border text-xs transition-all duration-300 ${
                        stage === 'ao'
                          ? idx === 0
                            ? 'translate-y-2 border-border-strong bg-surface'
                            : '-translate-y-2 border-border-strong bg-surface'
                          : box.role === 'lone-pair'
                            ? 'translate-y-0 border-warning/60 bg-warning-subtle/60'
                            : 'translate-y-0 border-accent bg-accent-subtle/65'
                      }`}
                    >
                      <span className="font-mono text-sm font-semibold text-ink">
                        {box.electrons === 2 ? '↑↓' : box.electrons === 1 ? '↑' : ''}
                      </span>
                      <span className="text-[10px] text-ink-muted">
                        {stage === 'ao' ? (idx === 0 ? '2s' : '2p') : box.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-medium text-ink-secondary">
                  {stage === 'ao'
                    ? 'Các AO 2s và 2p có mức năng lượng khác nhau'
                    : `Nhóm orbital lai hóa ${config.hybridization} (đồng mức)`}
                </p>
              </div>

              {/* Unhybridized p group */}
              {config.unhybridizedPBoxes.length > 0 ? (
                <div className="space-y-1.5 border-l border-border pl-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    {config.unhybridizedPBoxes.map(box => (
                      <div
                        key={box.id}
                        className="flex h-12 w-14 flex-col items-center justify-center rounded-[var(--radius-sm)] border border-starlight/60 bg-surface-subtle text-xs transition-all duration-300"
                      >
                        <span className="font-mono text-sm font-semibold text-ink">↑</span>
                        <span className="text-[10px] text-ink-muted">{box.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] font-medium text-ink-secondary">
                    p chưa lai hóa → tạo liên kết π
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <svg
            viewBox="0 0 380 185"
            className="h-auto w-full select-none"
            role="img"
            aria-label={`Sơ đồ xen phủ orbital của ${config.moleculeLabel}`}
          >
            {isLinear ? (
              <>
                {/* Linear H-C≡N overlap diagram */}
                <line
                  x1="36"
                  y1="95"
                  x2="344"
                  y2="95"
                  stroke="var(--hus-border-strong)"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                />
                {/* Lateral pi clouds above & below C-N */}
                <path
                  d="M 186 52 C 212 24, 266 24, 292 52"
                  fill="none"
                  stroke="var(--hus-starlight)"
                  strokeWidth={hasPiSelected ? 3.2 : 2}
                  strokeDasharray="5 3"
                  className="hus-mo-draw-line"
                />
                <path
                  d="M 186 138 C 212 166, 266 166, 292 138"
                  fill="none"
                  stroke="var(--hus-starlight)"
                  strokeWidth={hasPiSelected ? 3.2 : 2}
                  strokeDasharray="5 3"
                  className="hus-mo-draw-line"
                />
                {/* Unhybridized p lobes on C & N */}
                <ellipse cx="186" cy="64" rx="10" ry="22" fill="var(--hus-starlight)" fillOpacity="0.2" stroke="var(--hus-starlight)" strokeWidth="1.4" />
                <ellipse cx="186" cy="126" rx="10" ry="22" fill="var(--hus-starlight)" fillOpacity="0.2" stroke="var(--hus-starlight)" strokeWidth="1.4" />
                <ellipse cx="292" cy="64" rx="10" ry="22" fill="var(--hus-starlight)" fillOpacity="0.2" stroke="var(--hus-starlight)" strokeWidth="1.4" />
                <ellipse cx="292" cy="126" rx="10" ry="22" fill="var(--hus-starlight)" fillOpacity="0.2" stroke="var(--hus-starlight)" strokeWidth="1.4" />

                {/* Coaxial sigma overlaps */}
                <circle cx="88" cy="95" r="20" fill="var(--hus-accent)" fillOpacity="0.22" stroke="var(--hus-accent)" strokeWidth="1.6" />
                <ellipse
                  cx="138"
                  cy="95"
                  rx="36"
                  ry="14"
                  fill="var(--hus-accent)"
                  fillOpacity={hasSigmaSelected ? 0.32 : 0.2}
                  stroke="var(--hus-accent)"
                  strokeWidth="1.6"
                />
                <ellipse
                  cx="239"
                  cy="95"
                  rx="44"
                  ry="14"
                  fill="var(--hus-accent)"
                  fillOpacity={hasSigmaSelected ? 0.32 : 0.2}
                  stroke="var(--hus-accent)"
                  strokeWidth="1.6"
                />

                {/* Nuclei */}
                <circle cx="88" cy="95" r="11" fill="var(--hus-surface)" stroke="var(--hus-ink)" strokeWidth="1.6" />
                <text x="88" y="99" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-ink)">H</text>
                <circle cx="186" cy="95" r="13" fill="var(--hus-surface)" stroke="var(--hus-ink)" strokeWidth="1.6" />
                <text x="186" y="99" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-ink)">C</text>
                <circle cx="292" cy="95" r="13" fill="var(--hus-surface)" stroke="var(--hus-ink)" strokeWidth="1.6" />
                <text x="292" y="99" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-ink)">N</text>

                {/* Labels */}
                <text x="138" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-accent)">σ (H–C)</text>
                <text x="239" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-accent)">σ (C–N)</text>
                <text x="239" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-starlight)">2 liên kết π (xen phủ bên)</text>
                <text x="190" y="176" textAnchor="middle" fontSize="10.5" fill="var(--hus-ink-muted)">
                  Đường thẳng — góc H–C–N = 180°
                </text>
              </>
            ) : (
              <>
                {/* Bent H2O sp3 overlap diagram */}
                {/* Two lone-pair lobes on top */}
                <ellipse
                  cx="158"
                  cy="54"
                  rx="16"
                  ry="28"
                  transform="rotate(-28 158 54)"
                  fill="var(--hus-starlight)"
                  fillOpacity="0.22"
                  stroke="var(--hus-starlight)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <ellipse
                  cx="222"
                  cy="54"
                  rx="16"
                  ry="28"
                  transform="rotate(28 222 54)"
                  fill="var(--hus-starlight)"
                  fillOpacity="0.22"
                  stroke="var(--hus-starlight)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <text x="150" y="49" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-starlight)">••</text>
                <text x="230" y="49" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--hus-starlight)">••</text>
                <text x="190" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--hus-starlight)">
                  2 cặp e tự do (đẩy mạnh → thu hẹp góc)
                </text>

                {/* Two sigma O-H overlaps */}
                <ellipse
                  cx="148"
                  cy="126"
                  rx="34"
                  ry="14"
                  transform="rotate(-36 148 126)"
                  fill="var(--hus-accent)"
                  fillOpacity={hasSigmaSelected ? 0.34 : 0.2}
                  stroke="var(--hus-accent)"
                  strokeWidth="1.6"
                />
                <ellipse
                  cx="232"
                  cy="126"
                  rx="34"
                  ry="14"
                  transform="rotate(36 232 126)"
                  fill="var(--hus-accent)"
                  fillOpacity={hasSigmaSelected ? 0.34 : 0.2}
                  stroke="var(--hus-accent)"
                  strokeWidth="1.6"
                />

                {/* Nuclei */}
                <circle cx="190" cy="94" r="14" fill="var(--hus-surface)" stroke="var(--hus-ink)" strokeWidth="1.6" />
                <text x="190" y="98" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-ink)">O</text>

                <circle cx="116" cy="148" r="12" fill="var(--hus-surface)" stroke="var(--hus-ink)" strokeWidth="1.6" />
                <text x="116" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-ink)">H</text>

                <circle cx="264" cy="148" r="12" fill="var(--hus-surface)" stroke="var(--hus-ink)" strokeWidth="1.6" />
                <text x="264" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--hus-ink)">H</text>

                {/* Angle arc */}
                <path
                  d="M 164 114 Q 190 132 216 114"
                  fill="none"
                  stroke="var(--hus-accent)"
                  strokeWidth="1.5"
                />
                <text x="190" y="140" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--hus-accent)">
                  104,5°
                </text>
                <text x="190" y="176" textAnchor="middle" fontSize="10.5" fill="var(--hus-ink-muted)">
                  Hình học chữ V · Chỉ có 2 liên kết σ(O–H)
                </text>
              </>
            )}
          </svg>
        )}
      </div>

      {/* Compact VSEPR & Bonding Summary Strip */}
      <div className="grid grid-cols-3 gap-2 rounded-[var(--radius-md)] border border-border bg-surface-subtle/70 px-3 py-2 text-xs">
        <div>
          <span className="text-ink-muted">Lai hóa</span>
          <p className="mt-0.5 font-mono font-semibold text-accent">{config.hybridization}</p>
        </div>
        <div>
          <span className="text-ink-muted">Cặp e tự do</span>
          <p className="mt-0.5 font-mono font-semibold tabular-nums text-ink">{config.lonePairs}</p>
        </div>
        <div>
          <span className="text-ink-muted">Hình học</span>
          <p className="mt-0.5 font-medium text-ink">{config.geometryLabel}</p>
        </div>
      </div>
    </div>
  );
}
