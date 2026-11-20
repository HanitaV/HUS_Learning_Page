import { expect, test } from '@playwright/test';

test('each course opens a source-backed writing activity from its course page', async ({ page }) => {
  for (const courseId of ['mat3504', 'mat3514', 'thcs4', 'oop', 'mat1091', 'mat1101', 'general-chemistry', 'phy1159']) {
    await page.goto(`./#/courses/${courseId}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const theoryTab = page.getByRole('tab', { name: 'Lý thuyết & Cơ sở toán học' });
    if (await theoryTab.isVisible()) {
      await theoryTab.click();
    }
    const practice = page.getByRole('region', { name: 'Luyện trình bày lời giải' });
    await practice.getByRole('link').first().click();
    await expect(page).toHaveURL(new RegExp(`/courses/${courseId}/lessons/.+/practice/.+-written$`));
    await expect(page.getByLabel('Lập luận của bạn')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Xem lời giải tham khảo' })).toBeDisabled();
  }
});
