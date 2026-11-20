import { expect, test } from '@playwright/test';

test('integrates MIT OCW as targeted supplements inside PHY1159 lessons and optional syllabus reference', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  // 1. Inside an original HUS lesson: MIT appears directly as targeted supplementary material
  await page.goto('./#/courses/phy1159/lessons/phy1159-t2-1');
  const supplement = page.getByRole('region', { name: 'Bổ trợ từ MIT OpenCourseWare' });
  await expect(supplement).toBeVisible();
  await expect(supplement.locator('iframe')).toHaveCount(0);
  await supplement.getByRole('button', { name: 'Xem video tại đây' }).first().click();
  const iframe = supplement.locator('iframe');
  await expect(iframe).toHaveCount(1);
  await expect(iframe).toHaveAttribute('src', /youtube-nocookie\.com\/embed\//);
  await supplement.getByRole('button', { name: 'Đóng video' }).click();
  await expect(supplement.locator('iframe')).toHaveCount(0);

  // 2. Lesson with PDF-only MIT supplement (Dimensional Analysis -> Ch 2 PDF, no video button)
  await page.goto('./#/courses/phy1159/lessons/phy1159-t1-2');
  const pdfSupplement = page.getByRole('region', { name: 'Bổ trợ từ MIT OpenCourseWare' });
  await expect(pdfSupplement).toBeVisible();
  await expect(pdfSupplement.getByText(/Chapter 2: Units, Dimensional Analysis/)).toBeVisible();
  await expect(pdfSupplement.getByRole('button', { name: 'Xem video tại đây' })).toHaveCount(0);

  // 3. On /courses/phy1159, original CourseAtlas is primary; syllabus reference opens on demand
  await page.goto('./#/courses/phy1159');
  await page.getByRole('tab', { name: /Đối chiếu đề cương PHY1159/ }).click();
  const explorer = page.getByRole('region', {
    name: 'Đề cương PHY1159 và tài nguyên MIT OpenCourseWare',
  });
  await expect(explorer).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);

  // Chapter 2: 2.3 Tự học + MIT link rel + persistent review mark
  await explorer.getByRole('button', { name: /02\s*Động lực học chất điểm/ }).click();
  await expect(explorer.getByText('Chuyển động của tên lửa')).toBeVisible();
  const mitLink = explorer.getByRole('link', { name: /Mở trên MIT OCW/ }).first();
  await expect(mitLink).toHaveAttribute('target', '_blank');
  await expect(mitLink).toHaveAttribute('rel', /noopener/);

  await explorer.getByRole('button', { name: 'Đánh dấu đã ôn' }).click();
  await expect(explorer.getByRole('button', { name: 'Đã ôn chương này' })).toBeVisible();

  // Chapter 8 gap note
  await explorer.getByRole('button', { name: /08\s*Các hiện tượng động học của chất khí/ }).click();
  await expect(explorer.getByText(/Chưa có tài nguyên MIT phù hợp/)).toBeVisible();

  // 4. General Chemistry (CHE1080) lesson also shows targeted MIT supplements inline with click-to-load video
  await page.goto('./#/courses/general-chemistry/lessons/gc-mo-theory');
  const chemSupplement = page.getByRole('region', { name: 'Bổ trợ từ MIT OpenCourseWare' });
  await expect(chemSupplement).toBeVisible();
  await expect(chemSupplement.locator('iframe')).toHaveCount(0);
  await chemSupplement.getByRole('button', { name: 'Xem video tại đây' }).first().click();
  await expect(chemSupplement.locator('iframe')).toHaveCount(1);
  await expect(chemSupplement.locator('iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\//);
  await chemSupplement.getByRole('button', { name: 'Đóng video' }).click();
  await expect(chemSupplement.locator('iframe')).toHaveCount(0);

  expect(errors).toEqual([]);
});
