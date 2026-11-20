import type { Subject } from '../domain/learning';

export const subjects = [
  { id: 'computer-science', title: 'Khoa học máy tính' },
  { id: 'chemistry', title: 'Hóa học' },
  { id: 'physics', title: 'Vật lý' },
  { id: 'mathematics', title: 'Toán học' },
] as const satisfies readonly Subject[];
