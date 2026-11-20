import { expect, test } from '@playwright/test';

const BASE = '/HUS_Learning_Page/';

test.describe('Full 8-Course Chapter Expansion E2E', () => {
  test('opens newly added PHY1159 Ch.11 Carnot BalanceFlow and CHE1080 Ch.5 Kinetics Curve2d semi-essays', async ({ page }) => {
    await page.goto(`${BASE}#/courses/phy1159/lessons/phy1159-t11-2/practice/phy1159-se-11-1`);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('11');
    await expect(page.locator('.katex:visible').first()).toBeVisible();

    await page.goto(`${BASE}#/courses/general-chemistry/lessons/gc-kin-first-order/practice/gc-se-5-1`);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('5.1');
    await expect(page.locator('.katex:visible').first()).toBeVisible();
  });

  test('CHE1080 chapter-N preset opens ChemistryEssayLab directly on the requested chapter featured bank', async ({ page }) => {
    await page.goto(`${BASE}#/courses/general-chemistry?tool=chemistry-essay-lab&preset=chapter-4`);
    await expect(page.getByText(/1 câu \/ cấp độ khó/i).first()).toBeVisible();
    await expect(page.getByText(/Chương 4/i).first()).toBeVisible();
  });

  test('MAT1091 (5 chapters) and MAT1101 (7 chapters) render expanded chapters without horizontal overflow', async ({ page }) => {
    await page.goto(`${BASE}#/courses/mat1091`);
    await expect(page.getByText(/Chương 4/i).first()).toBeVisible();
    const overflow1091 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow1091).toBe(false);

    await page.goto(`${BASE}#/courses/mat1101`);
    await expect(page.getByText(/Kiểm định giả thuyết/i).first()).toBeVisible();
    const overflow1101 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow1101).toBe(false);
  });
});
