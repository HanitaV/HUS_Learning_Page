import type { Course } from '../../../domain/learning';

export const mat3514 = {
  "schemaVersion": 1,
  "id": "mat3514",
  "academicCode": "MAT3514",
  "subjectId": "computer-science",
  "title": "Cấu trúc dữ liệu và giải thuật",
  "language": "vi",
  "status": "available",
  "chapterIds": [
    "mat3514-c1",
    "mat3514-c2",
    "mat3514-c3",
    "mat3514-c4",
    "mat3514-c5",
    "mat3514-c6",
    "mat3514-c7",
    "mat3514-c8"
  ],
  "resourceIds": [],
  "provenance": {
    "repository": "https://github.com/HanitaV/DSA-HUS",
    "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
    "path": "data/courses/MAT3514.json",
    "rights": "unreviewed",
    "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
  }
} as const satisfies Course;
export default mat3514;
