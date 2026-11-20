import type { Course } from '../../../domain/learning';

export const thcs4 = {
  "schemaVersion": 1,
  "id": "thcs4",
  "academicCode": "THCS4",
  "subjectId": "computer-science",
  "title": "Lập trình cơ bản",
  "language": "vi",
  "status": "available",
  "chapterIds": [
    "thcs4-c1",
    "thcs4-c2",
    "thcs4-c3",
    "thcs4-c4",
    "thcs4-c5",
    "thcs4-c6",
    "thcs4-c7",
    "thcs4-c8"
  ],
  "resourceIds": [],
  "provenance": {
    "repository": "https://github.com/HanitaV/DSA-HUS",
    "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
    "path": "data/courses/THCS4.json",
    "rights": "unreviewed",
    "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
  }
} as const satisfies Course;
export default thcs4;
