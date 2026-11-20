import { expect, test } from '@playwright/test';

test('navigates PHY1159 9-chapter syllabus, verifies MIT OCW links, and persists chapter review', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto('./#/courses/phy1159');

  const explorer = page.getByRole('region', {
    name: 'Đề cương PHY1159 và tài nguyên MIT OpenCourseWare',
  });
  await expect(explorer).toBeVisible();

  // Zero horizontal overflow on desktop & mobile
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);

  // Switch to Chapter 2 and verify 2.3 Tự học + MIT 8.01SC link rel
  await explorer.getByRole('button', { name: /02\s*Động lực học chất điểm/ }).click();
  await expect(explorer.getByText('Chuyển động của tên lửa')).toBeVisible();
  const mitLink = explorer.getByRole('link', { name: /Mở trên MIT OCW/ }).first();
  await expect(mitLink).toHaveAttribute('target', '_blank');
  await expect(mitLink).toHaveAttribute('rel', /noopener/);

  // Mark Chapter 2 as reviewed and verify persistence across reload
  await explorer.getByRole('button', { name: 'Đánh dấu đã ôn' }).click();
  await expect(explorer.getByRole('button', { name: 'Đã ôn chương này' })).toBeVisible();
  await page.reload();
  await explorer.getByRole('button', { name: /02\s*Động lực học chất điểm/ }).click();
  await expect(explorer.getByRole('button', { name: 'Đã ôn chương này' })).toBeVisible();

  // Check Chapter 8 gap note (no forced MIT resource)
  await explorer.getByRole('button', { name: /08\s*Các hiện tượng động học của chất khí/ }).click();
  await expect(explorer.getByText(/Chưa có tài nguyên MIT phù hợp/)).toBeVisible();

  // Verify click-to-load MIT video embed inside a PHY1159 lesson
  await page.goto('./#/courses/phy1159/lessons/phy1159-t1-1');
  const videoSection = page.getByRole('region', { name: 'Video MIT OpenCourseWare bổ trợ' });
  await expect(videoSection).toBeVisible();
  await expect(videoSection.locator('iframe')).toHaveCount(0);
  await videoSection.getByRole('button', { name: 'Xem video tại đây' }).first().click();
  const iframe = videoSection.locator('iframe');
  await expect(iframe).toHaveCount(1);
  await expect(iframe).toHaveAttribute('src', /youtube-nocookie\.com\/embed\//);
  await videoSection.getByRole('button', { name: 'Đóng video' }).click();
  await expect(videoSection.locator('iframe')).toHaveCount(0);

  expect(errors).toEqual([]);
});
