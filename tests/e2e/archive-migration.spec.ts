import { expect, test } from '@playwright/test';

for (const courseId of ['mat1091', 'mat1101']) {
  test(`${courseId} hides unpublished PDFs and source repository links`, async ({ page }) => {
    await page.goto(`./#/courses/${courseId}`);
    await expect(page.getByRole('heading', { name: /Ngu.*d.*li.*g.*c/i })).toHaveCount(0);
    await expect(page.getByRole('region', { name: 'Tài liệu tham khảo' })).toHaveCount(0);
    await expect(page.locator('a[href*="/assets/"]')).toHaveCount(0);
    await expect(page.locator('a[href$=".pdf"]')).toHaveCount(0);
  });
}

test('general-chemistry keeps only its public YouTube video resource', async ({ page }) => {
  await page.goto('./#/courses/general-chemistry');
  const resourcesRegion = page.getByRole('region', { name: 'Tài liệu tham khảo' });
  await expect(resourcesRegion).toBeVisible();
  const links = resourcesRegion.locator('a[href]');
  await expect(links).toHaveCount(1);
  await expect(links.first()).toHaveAttribute('href', 'https://www.youtube.com/watch?v=6OV3tmt9uhs');
});
