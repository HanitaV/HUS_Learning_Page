import { expect, test } from '@playwright/test';

test('reads real lessons, grades retries, persists completion and restores backups', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('./#/courses/phy1159');
  await page.getByRole('link', { name: 'Hệ đơn vị SI và phương pháp phân tích thứ nguyên', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Hệ đơn vị SI và phương pháp phân tích thứ nguyên', exact: true })).toBeVisible();
  await expect(page.locator('.katex').first()).toBeVisible();
  const exercise = page.getByRole('region', { name: 'Giới hạn của phép kiểm tra thứ nguyên' });
  await exercise.getByRole('radio').nth(1).check();
  await exercise.getByRole('button', { name: 'Kiểm tra đáp án' }).click();
  await expect(exercise.getByRole('status')).toContainText('Chưa đúng');
  await exercise.getByRole('radio').first().check();
  await exercise.getByRole('button', { name: 'Kiểm tra đáp án' }).click();
  await expect(exercise.getByRole('status')).toContainText('Chính xác');
  await page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true }).click();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Bỏ hoàn thành' })).toBeVisible();
  await page.goto('./#/resources');
  await page.getByRole('button', { name: 'Đánh dấu tài liệu' }).click();
  await page.goto('./#/progress');
  await expect(page.getByText('3%', { exact: true }).first()).toBeVisible();
  const backup = await page.evaluate(() => localStorage.getItem('hus-learning-hub:progress:v1'));
  await expect(page.getByText('2 lượt làm bài')).toBeVisible();
  await expect(page.getByRole('link', { name: /Hệ đơn vị SI/ })).toBeVisible();
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Xuất bản sao lưu JSON' }).click();
  expect((await download).suggestedFilename()).toBe('hus-progress-v1.json');
  await page.getByLabel('Khôi phục bản sao lưu JSON').setInputFiles({ name: 'bad.json', mimeType: 'application/json', buffer: Buffer.from('{}') });
  await expect(page.getByRole('alert')).toContainText('không hợp lệ');
  await expect(page.getByText('3%', { exact: true }).first()).toBeVisible();
  await page.getByLabel('Khôi phục bản sao lưu JSON').setInputFiles({ name: 'backup.json', mimeType: 'application/json', buffer: Buffer.from(backup ?? '{}') });
  await expect(page.getByRole('status')).toContainText('Đã khôi phục');
  await page.reload();
  await expect(page.getByText('3%', { exact: true }).first()).toBeVisible();
  await page.goto('./');
  await expect(page.getByRole('link', { name: /Tiếp tục: Hệ đơn vị SI/ })).toBeVisible();
  expect(errors).toEqual([]);
});

test('searches lesson body and runs deterministic visualization controls', async ({ page }) => {
  await page.goto('./#/courses?q=khong%20thu%20nguyen');
  await expect(page.getByRole('heading', { name: /Kết quả học liệu cho/ })).toBeVisible();
  const lesson = page.getByRole('link', { name: /Bài học: Hệ đơn vị SI/ });
  const showMore = page.getByRole('button', { name: /Xem thêm bài học/ });
  while (!(await lesson.count()) && await showMore.isVisible()) {
    await showMore.click();
  }
  await expect(lesson).toBeVisible();
  await page.goto('./#/courses/mat3504');
  await page.getByRole('tab', { name: /Sắp xếp nổi bọt/ }).click();
  const tool = page.getByRole('region', { name: 'Sắp xếp nổi bọt' });
  await expect(tool.getByText('Bắt đầu với dãy ban đầu.')).toBeVisible();
  await tool.getByRole('button', { name: /Bước tiếp/ }).click();
  await expect(tool.getByText(/So sánh/)).toBeVisible();
  await tool.getByRole('button', { name: /Bước trước/ }).click();
  await expect(tool.getByText('Bắt đầu với dãy ban đầu.')).toBeVisible();
  await tool.getByRole('button', { name: /Chạy/ }).click();
  await expect(tool.getByRole('button', { name: /Tạm dừng/ })).toBeVisible();
  await tool.getByRole('button', { name: /Đặt lại/ }).click();
  await expect(tool.getByText('Bắt đầu với dãy ban đầu.')).toBeVisible();
});

test('handles blocked storage and rejects cross-course lesson URLs', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } }));
  await page.goto('./#/courses/phy1159/lessons/phy1159-t1-1');
  await expect(page.getByRole('alert')).toContainText('bộ nhớ');
  await page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Bỏ hoàn thành' })).toBeVisible();
  await page.goto('./#/courses/mat3504/lessons/phy1159-t1-1');
  await expect(page.getByRole('heading', { name: 'Bài học chưa sẵn sàng' })).toBeVisible();
});

test('renders migrated General Chemistry course, GFM tables, math, and lazy exercises', async ({ page }) => {
  await page.goto('./#/courses/general-chemistry');
  await expect(page.getByRole('heading', { name: 'Hóa học đại cương' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Cấu tạo nguyên tử/ }).first()).toBeVisible();

  // Interactive Dependency Graph chapter click + list view + inline filter + synthesis view
  await page.getByRole('button', { name: /Chương 3.*Nhiệt động hóa học/ }).click();
  await expect(page.getByRole('heading', { name: /Sơ đồ bài học · Chương 3: Nhiệt động hóa học/ })).toBeVisible();

  await page.getByRole('button', { name: 'Danh sách bài' }).click();
  await expect(page.getByText('Đang tập trung vào Chương 3')).toBeVisible();
  await page.getByRole('button', { name: /Tất cả 7 chương/ }).click();

  const courseFilter = page.getByRole('searchbox', { name: /Lọc nhanh bài học trong Hóa học đại cương/ });
  await courseFilter.fill('nernst');
  await expect(page.getByRole('link', { name: /Nernst/i })).toBeVisible();
  await page.getByRole('button', { name: 'Xóa từ khóa lọc bài học' }).click();

  await page.getByRole('button', { name: 'Tổng kết & Đề thi' }).click();
  await expect(page.getByRole('heading', { name: 'Tổng kết tiến độ qua các chương' })).toBeVisible();
  await page.getByRole('button', { name: 'Sơ đồ liên kết' }).click();

  await page.goto('./#/courses/general-chemistry/lessons/gc-atomic-structure');
  await expect(page.getByRole('heading', { name: 'Cấu tạo nguyên tử' }).first()).toBeVisible();
  await expect(page.locator('.academic-prose table')).toBeVisible();
  await expect(page.locator('.katex').first()).toBeVisible();

  const exercisesSection = page.locator('section[aria-labelledby="lesson-exercises-heading"]');
  await expect(exercisesSection).toBeVisible();
  await exercisesSection.getByRole('radio', { name: /Số proton/i }).first().check();
  await exercisesSection.getByRole('button', { name: 'Kiểm tra' }).first().click();
  await expect(exercisesSection.getByRole('status').first()).toContainText('Chính xác');
});
