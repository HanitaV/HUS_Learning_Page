import type { DiagramStepSpec } from '../../domain/semi-essay';
import type { DiagramModuleDescriptor } from '../../contracts/diagram-module';

const DIAGRAM_MODULES: Readonly<Record<DiagramStepSpec['kind'], DiagramModuleDescriptor>> = {
  fbd: {
    kind: 'fbd',
    label: 'Sơ đồ lực (Free Body Diagram)',
    load: () => import('./FbdDiagram'),
  },
  heatmap: {
    kind: 'heatmap',
    label: 'Bản đồ nhiệt 2D',
    load: () => import('./HeatmapDiagram'),
  },
  'curve-2d': {
    kind: 'curve-2d',
    label: 'Đồ thị 2D & Miền diện tích',
    load: () => import('./Curve2dDiagram'),
  },
  'balance-flow': {
    kind: 'balance-flow',
    label: 'Biểu đồ năng lượng (LOL)',
    load: () => import('./BalanceFlowDiagram'),
  },
};

export function getDiagramModule(kind: DiagramStepSpec['kind']): DiagramModuleDescriptor {
  return DIAGRAM_MODULES[kind];
}

export function getDiagramLabel(kind: DiagramStepSpec['kind']): string {
  return DIAGRAM_MODULES[kind].label;
}
