import { expect, test } from '@playwright/test';

test('CHE1080 MIT hub: topics, verified MIT links, search, progress persistence, no overflow', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto('./#/courses/general-chemistry?tool=che1080-mit-hub&preset=topic-2');
  const hub = page.getByRole('region', { name: 'CHE1080 và MIT OpenCourseWare' });
  await expect(hub).toBeVisible();
  await expect(hub.getByRole('heading', { name: /Dạng 2 – Thuyết orbital phân tử/ })).toBeVisible();
  await expect(hub.getByText('Lecture 13: Molecular Orbital Theory').first()).toBeVisible();
  const open = hub.getByRole('link', { name: 'Mở' }).first();
  await expect(open).toHaveAttribute('href', /^https:\/\/(ocw\.mit\.edu|www\.youtube\.com)\//);

  await hub.getByLabel('Tìm dạng đề và học liệu MIT').fill('Gibbs');
  await hub.getByRole('button', { name: /Dạng 3/ }).first().click();
  await expect(hub.getByRole('heading', { name: /Dạng 3 – Năng lượng Gibbs/ })).toBeVisible();

  const reviewed = hub.getByLabel('Đã ôn xong dạng này');
  await reviewed.check();
  await page.reload();
  const hub2 = page.getByRole('region', { name: 'CHE1080 và MIT OpenCourseWare' });
  await hub2.getByRole('button', { name: /^Dạng 3\./ }).click();
  await expect(hub2.getByLabel('Đã ôn xong dạng này')).toBeChecked();

  await hub.getByRole('button', { name: 'Thư viện MIT' }).click();
  await expect(hub.getByRole('status').first()).toContainText('tài liệu');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
  expect(errors).toEqual([]);
});
