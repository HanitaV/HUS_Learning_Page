import type { Course } from '../../../domain/learning';

export default {
  schemaVersion: 1,
  id: 'mat1091',
  academicCode: 'MAT1091',
  subjectId: 'mathematics',
  title: 'Giải tích I',
  language: 'vi',
  status: 'available',
  chapterIds: [
    'mat1091-ch0',
    'mat1091-limits-continuity',
    'mat1091-ch2',
    'mat1091-ch3',
    'mat1091-ch4',
  ],
  resourceIds: [],
  provenance: {
    repository: 'local:docs/HUS-learning-resource',
    revision: 'sha256:c442036e26ee950b55ab1615f822a5f40236894c964d403abc19730c784ab948',
    path: 'gt1/gt1.pdf',
    rights: 'approved',
  },
} as const satisfies Course;
