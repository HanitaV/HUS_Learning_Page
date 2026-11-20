import type { Course } from '../../../domain/learning';

export default {
  "schemaVersion": 1,
  "id": "general-chemistry",
  "academicCode": "CHE1080",
  "subjectId": "chemistry",
  "title": "Hóa học đại cương",
  "language": "vi",
  "status": "available",
  "chapterIds": [
    "gc-ch-1",
    "gc-ch-2",
    "gc-ch-3",
    "gc-ch-4",
    "gc-ch-5",
    "gc-ch-6",
    "gc-ch-7"
  ],
  "resourceIds": [
    "chemistry-general-video"
  ],
  "provenance": {
    "repository": "https://github.com/HanitaV/Chemistry",
    "revision": "ad043333d24f67da5d11611678754397f4595e49",
    "path": "src/content/courses/general-chemistry/course.json",
    "rights": "approved"
  }
} as const satisfies Course;
