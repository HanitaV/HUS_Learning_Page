import type { Course } from '../../../domain/learning';

export const oop = {
  "schemaVersion": 1,
  "id": "oop",
  "academicCode": "OOP",
  "subjectId": "computer-science",
  "title": "Lập trình hướng đối tượng",
  "language": "vi",
  "status": "available",
  "chapterIds": [
    "oop-c1",
    "oop-c2",
    "oop-c3",
    "oop-c4",
    "oop-c5",
    "oop-c6",
    "oop-c7",
    "oop-c8",
    "oop-c9",
    "oop-c10",
    "oop-c11"
  ],
  "resourceIds": [],
  "provenance": {
    "repository": "https://github.com/HanitaV/DSA-HUS",
    "revision": "01e2385bc1bbf16e3b7a2ab527e1b572ae06360d",
    "path": "data/courses/OOP.json",
    "rights": "unreviewed",
    "attribution": "HanitaV, DSA-HUS; source license not declared, rights unreviewed."
  }
} as const satisfies Course;
export default oop;
