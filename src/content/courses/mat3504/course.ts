import type { Course } from '../../../domain/learning';

export const mat3504 = {
  "schemaVersion": 1,
  "id": "mat3504",
  "academicCode": "MAT3504",
  "subjectId": "computer-science",
  "title": "Thiết kế và đánh giá thuật toán",
  "language": "vi",
  "status": "available",
  "chapterIds": [
    "mat3504-b0",
    "mat3504-b1",
    "mat3504-b2",
    "mat3504-b3",
    "mat3504-b4",
    "mat3504-b5",
    "mat3504-b6",
    "mat3504-b7"
  ],
  "resourceIds": [],
  "provenance": {
    "repository": "https://github.com/HanitaV/DSA-HUS",
    "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
    "path": "data/courses/MAT3504.json",
    "rights": "unreviewed",
    "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
  }
} as const satisfies Course;
export default mat3504;
