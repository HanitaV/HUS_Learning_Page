import type { Course } from '../../../domain/learning';

export default {
  schemaVersion: 1,
  id: 'mat1101',
  academicCode: 'MAT1101',
  subjectId: 'mathematics',
  title: 'Xác suất – Thống kê',
  language: 'vi',
  status: 'available',
  chapterIds: [
    'mat1101-preparation',
    'mat1101-ch1',
    'mat1101-ch2',
    'mat1101-ch3',
    'mat1101-ch4',
    'mat1101-ch5',
    'mat1101-ch6',
  ],
  resourceIds: [],
  provenance: {
    repository: 'local:docs/HUS-learning-resource',
    revision: 'sha256:20f2c75aa97d64d84750493a56923b6aa61fded227045b227aedfa9b93aa345a',
    path: 'xstk/Giao_trinh_XSTK_MAT1101.pdf',
    rights: 'approved',
  },
} as const satisfies Course;
