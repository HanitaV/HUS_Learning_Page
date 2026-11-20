import { expect, test } from '@playwright/test';

test('opens chemistry semi-essay lab from lesson link and solves MO, VB, and Thermo flows', async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  // 1. Navigate from MO lesson via generic linked-tool callout
  await page.goto('./#/courses/general-chemistry/lessons/gc-mo-theory');
  const linkedBtn = page.getByRole('link', { name: /Luyện dựng giản đồ MO bán tự luận/ });
  await expect(linkedBtn).toBeVisible();
  await linkedBtn.click();

  // 2. Lab opens automatically on MO Diagram preset
  const lab = page.getByRole('region', { name: 'Phòng luyện giải bán tự luận Hóa học đại cương' });
  await expect(lab).toBeVisible();
  await expect(lab.getByRole('img', { name: /Giản đồ MO hóa trị của O₂⁻/ })).toBeVisible();

  // Step 1: Enter 13 valence electrons
  await lab.getByLabel('Số electron hóa trị').fill('13');
  await lab.getByRole('button', { name: 'Kiểm tra bước 1' }).click();
  await expect(lab.getByText('Tổng số electron hóa trị của O₂⁻: n_e = 6 + 6 − (−1) = 13 electron hóa trị.')).toBeVisible();

  // Step 2: Use guided animation +1 step multiple times to verify rule caption & fill
  const stepBtn = lab.getByRole('button', { name: '+1 bước' });
  for (let i = 0; i < 13; i += 1) {
    await stepBtn.click();
  }
  await expect(lab.getByText('13/13 e')).toBeVisible();

  // Capture desktop & mobile visual QA screenshots
  if (testInfo.project.name === 'chromium') {
    await lab.screenshot({ path: '.impeccable/review/chem-mo-light.png' });
  } else {
    await lab.screenshot({ path: '.impeccable/review/chem-mo-mobile.png' });
  }

  // Verify MO diagram check passes
  await lab.getByRole('button', { name: 'Kiểm tra bước 2' }).click();
  await expect(lab.getByText(/cấu hình MO hóa trị của O₂⁻/)).toBeVisible();

  // Switch to VB & Hybridization tab
  await lab.getByRole('tab', { name: 'Thuyết VB & Lai hóa' }).click();
  await expect(lab.getByRole('button', { name: /Phân tử HCN/ })).toBeVisible();
  await lab.getByRole('button', { name: '3. Xen phủ σ / π' }).click();
  if (testInfo.project.name === 'chromium') {
    await lab.screenshot({ path: '.impeccable/review/chem-vb-light.png' });
  }

  // Switch to Thermodynamics tab and test ΔG°(T) + Dark mode screenshot
  await lab.getByRole('tab', { name: 'Biểu đồ nhiệt động' }).click();
  await expect(lab.getByText(/Đồ thị đường thẳng ΔG°\(T\)/)).toBeVisible();
  if (testInfo.project.name === 'chromium') {
    await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
    await lab.screenshot({ path: '.impeccable/review/chem-thermo-dark.png' });
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
  }

  // Switch to 1-per-difficulty featured view (7 chapters CHE1080)
  await lab.getByRole('tab', { name: /1 câu \/ cấp độ khó/ }).click();
  await expect(lab.getByRole('heading', { name: 'Cấp độ Cơ bản' })).toBeVisible();
  if (testInfo.project.name === 'chromium') {
    await lab.screenshot({ path: '.impeccable/review/chem-tiered-light.png' });
  }

  // Switch to Practice Bank (remaining exercises from 202 CHE1080 bank)
  await lab.getByRole('tab', { name: /Kho luyện tập/ }).click();
  await expect(lab.getByText(/181/).first()).toBeVisible();
  if (testInfo.project.name === 'chromium') {
    await lab.screenshot({ path: '.impeccable/review/chem-practice-bank-light.png' });
  }

  // Verify zero horizontal overflow
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});
