import { useState } from 'react';
import {
  activationEnergy,
  halfLifeFromK,
  hendersonPh,
  hydrogenTransition,
  nernst,
  weakAcidPh,
  firstOrderConcentration,
} from '../../core/chemistry/che1080-calc';

function Num({ label, value, set }: { readonly label: string; readonly value: string; readonly set: (v: string) => void }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-ink-secondary">
      {label}
      <input inputMode="decimal" value={value} onChange={e => set(e.target.value)} className="min-h-[40px] w-28 rounded-[var(--radius-md)] border border-border bg-canvas px-2 text-sm text-ink" />
    </label>
  );
}
const n = (s: string) => Number(s.replace(',', '.'));
const fmt = (x: number, d = 4) => (Number.isFinite(x) ? Number(x.toPrecision(d)).toString() : '—');

function safe(fn: () => string): string {
  try {
    return fn();
  } catch {
    return 'Giá trị nhập không hợp lệ';
  }
}

export function Che1080QuickCalc({ topicNumber }: { readonly topicNumber: number }) {
  const [a, setA] = useState(topicNumber === 1 ? '3' : topicNumber === 6 ? '0.05' : topicNumber === 7 ? '0.001' : topicNumber === 8 || topicNumber === 9 ? '1.8e-5' : '1.10');
  const [b, setB] = useState(topicNumber === 1 ? '2' : topicNumber === 6 ? '60' : topicNumber === 7 ? '300' : topicNumber === 8 || topicNumber === 9 ? '0.1' : '2');
  const [c, setC] = useState(topicNumber === 7 ? '0.01' : topicNumber === 9 ? '0.1' : topicNumber === 11 ? '10' : '1');
  const [d, setD] = useState('320');
  let body: { title: string; fields: React.ReactNode; result: string } | null = null;
  if (topicNumber === 1) {
    body = {
      title: 'Chuyển mức nguyên tử hydro (n đầu → n cuối)',
      fields: (<><Num label="n đầu" value={a} set={setA} /><Num label="n cuối" value={b} set={setB} /><Num label="Z" value={c} set={setC} /></>),
      result: safe(() => {
        const t = hydrogenTransition(n(a), n(b), n(c));
        return t.kind === 'none' ? 'Không chuyển mức' : `ΔE = ${fmt(t.deltaEv)} eV · ${t.kind === 'emission' ? 'phát' : 'hấp thụ'} photon λ ≈ ${fmt(t.wavelengthNm ?? NaN, 4)} nm`;
      }),
    };
  } else if (topicNumber === 6) {
    body = {
      title: 'Bậc một: C(t) = C₀·e^(−kt)',
      fields: (<><Num label="k (đơn vị 1/t)" value={a} set={setA} /><Num label="t" value={b} set={setB} /><Num label="C₀" value={c} set={setC} /></>),
      result: safe(() => `t½ = ${fmt(halfLifeFromK(n(a)))} · C(t) = ${fmt(firstOrderConcentration(n(c), n(a), n(b)))}`),
    };
  } else if (topicNumber === 7) {
    body = {
      title: 'Năng lượng hoạt hóa từ hai nhiệt độ',
      fields: (<><Num label="k₁" value={a} set={setA} /><Num label="T₁ (K)" value={b} set={setB} /><Num label="k₂" value={c} set={setC} /><Num label="T₂ (K)" value={d} set={setD} /></>),
      result: safe(() => `Ea ≈ ${fmt(activationEnergy(n(a), n(b), n(c), n(d)) / 1000)} kJ/mol`),
    };
  } else if (topicNumber === 8) {
    body = {
      title: 'pH axit yếu (nghiệm đúng bậc hai)',
      fields: (<><Num label="Ka" value={a} set={setA} /><Num label="C (M)" value={b} set={setB} /></>),
      result: safe(() => `pH = ${fmt(weakAcidPh(n(a), n(b)))}`),
    };
  } else if (topicNumber === 9) {
    body = {
      title: 'Đệm (Henderson–Hasselbalch)',
      fields: (<><Num label="Ka" value={a} set={setA} /><Num label="[A⁻] (M)" value={b} set={setB} /><Num label="[HA] (M)" value={c} set={setC} /></>),
      result: safe(() => `pH = ${fmt(hendersonPh(-Math.log10(n(a)), n(b), n(c)))}`),
    };
  } else if (topicNumber === 11) {
    body = {
      title: 'Nernst ở 298,15 K',
      fields: (<><Num label="E° (V)" value={a} set={setA} /><Num label="n e⁻" value={b} set={setB} /><Num label="Q" value={c} set={setC} /></>),
      result: safe(() => `E = ${fmt(nernst(n(a), n(b), n(c)))} V`),
    };
  }
  if (!body) return null;
  return (
    <section aria-label="Máy tính nhanh" className="space-y-3 rounded-[var(--radius-lg)] border border-border bg-canvas/60 p-3">
      <h5 className="text-sm font-medium text-ink">{body.title}</h5>
      <div className="flex flex-wrap gap-3">{body.fields}</div>
      <p role="status" className="font-mono text-sm text-ink">{body.result}</p>
    </section>
  );
}
