import { expect, test } from '@playwright/test';

test.describe('Code-First Dual-Track, CodeMirror 6 Lab, Parsons & Proof Blocks', () => {
  test('programming courses default to Code-First track and cleanly separate Theory track', async ({ page }) => {
    for (const courseId of ['thcs4', 'oop', 'mat3514', 'mat3504']) {
      await page.goto(`./#/courses/${courseId}`);

      const practiceTab = page.getByRole('tab', { name: 'Thực hành gõ code' });
      const theoryTab = page.getByRole('tab', { name: 'Lý thuyết & Cơ sở toán học' });
      await expect(practiceTab).toBeVisible();
      await expect(practiceTab).toHaveAttribute('aria-selected', 'true');
      await expect(theoryTab).toHaveAttribute('aria-selected', 'false');

      // CodeMirror 6 editor loads automatically without an extra click
      await expect(page.locator('.cm-editor')).toBeVisible({ timeout: 10000 });
      await expect(page.getByRole('button', { name: /Chạy thử/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /Chấm Test Case/i })).toBeVisible();

      // Ensure zero horizontal overflow
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
      );
      expect(hasOverflow).toBe(false);
    }

    // Switch to Theory track on mat3504 and verify CourseAtlas & written practice appear (and no public documents are exposed)
    await page.getByRole('tab', { name: 'Lý thuyết & Cơ sở toán học' }).click();
    await expect(page.getByRole('region', { name: 'Luyện trình bày lời giải' })).toBeVisible();
    await expect(page.getByRole('region', { name: 'Tài liệu tham khảo' })).toHaveCount(0);
  });

  test('OOP opens Parsons Studio and grades placed code blocks', async ({ page }) => {
    await page.goto('./#/courses/oop');
    const parsonsTab = page.getByRole('tab', { name: /Ghép khối mã nguồn/i });
    await expect(parsonsTab).toBeVisible();
    await parsonsTab.click();

    await expect(page.getByText('Kho khối mã nguồn')).toBeVisible();
    const addButtons = page.getByRole('button', { name: /Thêm khối/i });
    await expect(addButtons.first()).toBeVisible();
    await addButtons.first().click();

    await page.getByRole('button', { name: /Kiểm tra cấu trúc/i }).click();
    await expect(page.getByRole('status')).toBeVisible();
  });

  test('Mathematics courses open Proof Blocks Studio with KaTeX rendering', async ({ page }) => {
    await page.goto('./#/courses/mat1091');
    const proofTab = page.getByRole('tab', { name: /Khối chứng minh Toán học/i });
    await expect(proofTab).toBeVisible();
    await proofTab.click();

    await expect(page.locator('.katex').first()).toBeVisible({ timeout: 10000 });
    const addButtons = page.getByRole('button', { name: /Thêm bước vào lập luận/i });
    await expect(addButtons.first()).toBeVisible();
    await addButtons.first().click();

    await page.getByRole('button', { name: /Kiểm tra lập luận/i }).click();
    await expect(page.getByRole('tabpanel').getByRole('status')).toBeVisible();
  });
});
