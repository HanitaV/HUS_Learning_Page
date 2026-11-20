import type { Course } from '../../../domain/learning';

export default {
  "schemaVersion": 1,
  "id": "phy1159",
  "academicCode": "PHY1159",
  "subjectId": "physics",
  "title": "Cơ – Nhiệt",
  "language": "vi",
  "status": "available",
  "chapterIds": [
    "phy1159-ch-1",
    "phy1159-ch-2",
    "phy1159-ch-3",
    "phy1159-ch-4",
    "phy1159-ch-5",
    "phy1159-ch-6",
    "phy1159-ch-7",
    "phy1159-ch-8",
    "phy1159-ch-9",
    "phy1159-ch-10",
    "phy1159-ch-11"
  ],
  "resourceIds": [],
  "provenance": {
    "repository": "https://github.com/HanitaV/VLDC-HUS",
    "revision": "5d6301638664dc18b4913b944c0224761d705a2e",
    "path": "js/data/theory/mech.js",
    "rights": "approved",
    "attribution": "Trịnh Nam Phong (2026), VLDC-HUS — MIT. Adapted from authored software theory data; teacher PDFs excluded."
  }
} as const satisfies Course;
