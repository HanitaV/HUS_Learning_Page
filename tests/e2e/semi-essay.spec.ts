import { expect, test } from '@playwright/test';

test('completes PHY1159 FBD + Axis Projection + Equation Transform semi-essay flow', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto('./#/courses/phy1159/lessons/phy1159-t3-1');
  await expect(page.getByRole('heading', { name: 'Bài 3.1: Hệ vật trên mặt phẳng nghiêng có ròng rọc' })).toBeVisible();
  await page.getByRole('link', { name: 'Mở không gian giải bài' }).click();

  await expect(page).toHaveURL(/#\/courses\/phy1159\/lessons\/phy1159-t3-1\/practice\/phy1159-se-3-1$/);
  await expect(page.getByRole('heading', { name: 'Bài 3.1: Hệ vật trên mặt phẳng nghiêng có ròng rọc' })).toBeVisible();

  // Verify zero horizontal overflow
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);

  // Step 1: Choice reasoning (predict)
  await page.getByLabel(/Vật A trượt lên dốc, vật B đi xuống/).check();
  await page.getByRole('button', { name: 'Kiểm tra lập luận' }).click();
  await expect(page.getByRole('status').first()).toContainText('Lập luận chính xác');
  await page.getByRole('button', { name: /Sang Bước 2/ }).click();

  // Step 2: Frame
  await page.getByLabel(/Hệ quy chiếu gắn với mặt đất/).check();
  await page.getByRole('button', { name: 'Kiểm tra lập luận' }).click();
  await page.getByRole('button', { name: /Sang Bước 3/ }).click();

  // Step 3: FBD (test phantom force diagnostic first, then draw accurate forces via keyboard buttons)
  const paletteA = page.getByRole('group', { name: /Bảng lực cho Vật A/ });
  await paletteA.getByRole('button', { name: /Lực đẩy theo chiều chuyển động/ }).click();
  await page.getByRole('button', { name: 'Kiểm tra sơ đồ lực' }).click();
  await expect(page.getByRole('status').first()).toContainText('Không có "lực đẩy theo chiều chuyển động"');

  // Reset and place exact forces on Vật A: P(270), N(120), T(30), Fms(210)
  await page.getByRole('button', { name: 'Vẽ lại' }).click();
  await paletteA.getByRole('button', { name: /Trọng lực/ }).click(); // defaults to 270°
  await paletteA.getByRole('button', { name: /Phản lực/ }).click(); // defaults to 90° -> +15 +15 = 120°
  await page.getByRole('button', { name: 'Xoay N cộng 15 độ' }).click();
  await page.getByRole('button', { name: 'Xoay N cộng 15 độ' }).click();

  await paletteA.getByRole('button', { name: /Lực căng dây/ }).click(); // defaults to 90° -> -15*4 = 30°
  for (let i = 0; i < 4; i++) {
    await page.getByRole('button', { name: 'Xoay T trừ 15 độ' }).click();
  }

  await paletteA.getByRole('button', { name: /Lực ma sát trượt/ }).click(); // defaults to 90° -> +15*8 = 210°
  for (let i = 0; i < 8; i++) {
    await page.getByRole('button', { name: 'Xoay Fms cộng 15 độ' }).click();
  }

  // Switch to Vật B: P(270), T(90)
  await page.getByRole('tab', { name: /Vật B/ }).click();
  const paletteB = page.getByRole('group', { name: /Bảng lực cho Vật B/ });
  await paletteB.getByRole('button', { name: /Trọng lực/ }).click();
  await paletteB.getByRole('button', { name: /Lực căng dây/ }).click();

  await page.getByRole('button', { name: 'Kiểm tra sơ đồ lực' }).click();
  await expect(page.getByRole('status').first()).toContainText('Sơ đồ lực chính xác');
  await page.getByRole('button', { name: /Sang Bước 4/ }).click();

  // Step 4: Axis projection
  // Oy': N (+, N), P1 (-, cos), T (0)
  const oyGroupN = page.getByRole('group', { name: /Dấu chiếu của N trên Vật A — Trục Oy/ });
  await oyGroupN.getByRole('button', { name: '+' }).click();
  await oyGroupN.locator('..').locator('[data-opt="N"]').click();

  const oyGroupP1 = page.getByRole('group', { name: /Dấu chiếu của P1 trên Vật A — Trục Oy/ });
  await oyGroupP1.getByRole('button', { name: '−' }).click();
  await oyGroupP1.locator('..').locator('[data-opt="cos"]').click();

  const oyGroupT = page.getByRole('group', { name: /Dấu chiếu của T trên Vật A — Trục Oy/ });
  await oyGroupT.getByRole('button', { name: '0' }).click();

  // Ox': T (+, T), P1 (-, sin), Fms (-, Fms)
  const oxGroupT = page.getByRole('group', { name: /Dấu chiếu của T trên Vật A — Trục Ox/ });
  await oxGroupT.getByRole('button', { name: '+' }).click();
  await oxGroupT.locator('..').locator('[data-opt="T"]').click();

  const oxGroupP1 = page.getByRole('group', { name: /Dấu chiếu của P1 trên Vật A — Trục Ox/ });
  await oxGroupP1.getByRole('button', { name: '−' }).click();
  await oxGroupP1.locator('..').locator('[data-opt="sin"]').click();

  const oxGroupFms = page.getByRole('group', { name: /Dấu chiếu của Fms trên Vật A — Trục Ox/ });
  await oxGroupFms.getByRole('button', { name: '−' }).click();
  await oxGroupFms.locator('..').locator('[data-opt="Fms"]').click();

  await page.getByRole('button', { name: 'Kiểm tra phép chiếu trục' }).click();
  await expect(page.getByRole('status').first()).toContainText('Chiếu trục chính xác');
  await page.getByRole('button', { name: /Sang Bước 5/ }).click();

  // Step 5: Equation Transform (test suboptimal move first, then optimal path)
  await page.getByRole('button', { name: /Thế \(3\)/ }).click();
  await page.getByRole('button', { name: /Trừ vế với vế/ }).click();
  await expect(page.getByRole('status').first()).toContainText('xuất hiện');
  await page.getByRole('button', { name: /Cộng vế với vế/ }).click();
  await page.getByRole('button', { name: /Chia hai vế cho tổng khối lượng/ }).click();
  await page.getByRole('button', { name: /Sang Bước 6/ }).click();

  // Step 6: Limiting check + Vietnamese decimal comma numeric input
  await page.getByLabel(/máy Atwood/).check();
  await page.getByLabel(/Gia tốc hệ vật/).fill('0,47');
  await page.getByLabel(/Lực căng dây/).fill('18,7');
  await page.getByLabel(/Áp lực lên ròng rọc/).fill('32,3');
  await page.getByRole('button', { name: 'Kiểm tra kết quả số' }).click();

  await expect(page.getByRole('heading', { name: 'Bài giải tự luận hoàn chỉnh' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('completes PHY1159 Heatmap + Heat Balance semi-essay and handles invalid practice URLs', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto('./#/courses/phy1159/lessons/phy1159-t8-1/practice/phy1159-se-8-1');
  await expect(page.getByRole('heading', { name: /Phân tích bản đồ nhiệt 2D/ })).toBeVisible();

  // Step 1: Select 90°C isotherm cells (0-0, 1-0, 2-0)
  await page.locator('[data-cell="0-0"]').click();
  await page.locator('[data-cell="1-0"]').click();
  await page.locator('[data-cell="2-0"]').click();
  await page.getByRole('button', { name: 'Kiểm tra bản đồ nhiệt' }).click();
  await expect(page.getByRole('status').first()).toContainText('Chính xác');
  await page.getByRole('button', { name: /Sang Bước 2/ }).click();

  // Step 2: Place heat flow at M and N (→)
  await page.getByRole('button', { name: 'Sang phải (→)' }).click();
  await page.getByRole('button', { name: 'Điểm N' }).click();
  await page.getByRole('button', { name: 'Sang phải (→)' }).click();
  await page.getByRole('button', { name: 'Kiểm tra bản đồ nhiệt' }).click();
  await expect(page.getByRole('status').first()).toContainText('Chính xác');
  await page.getByRole('button', { name: /Sang Bước 3/ }).click();

  // Step 3: Equation transform
  await page.getByRole('button', { name: /Gom hệ số của/ }).click();
  await page.getByRole('button', { name: /Chia hai vế cho tổng nhiệt dung/ }).click();
  await page.getByRole('button', { name: /Sang Bước 4/ }).click();

  // Step 4: Limiting check + numeric
  await page.getByLabel(/Gần nhiệt độ ban đầu của nước/).check();
  await page.getByLabel(/Nhiệt độ cân bằng/).fill('26,6');
  await page.getByRole('button', { name: 'Kiểm tra kết quả số' }).click();
  await expect(page.getByRole('heading', { name: 'Bài giải tự luận hoàn chỉnh' })).toBeVisible();

  // Invalid practice URL recovery
  await page.goto('./#/courses/phy1159/lessons/phy1159-t8-1/practice/non-existent');
  await expect(page.getByRole('heading', { name: 'Không tìm thấy bài bán tự luận' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('completes Phase 2 Curve2d (v(t) + P-V Sign Matrix) and BalanceFlow (LOL Energy) flows', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  // 1. Ch.2 v(t) Graph Area (phy1159-se-2-1)
  await page.goto('./#/courses/phy1159/lessons/phy1159-t2-1/practice/phy1159-se-2-1');
  await page.getByLabel(/Diện tích phần nằm dưới đường biểu diễn/).check();
  await page.getByRole('button', { name: 'Kiểm tra lập luận' }).click();
  await page.getByRole('button', { name: /Sang Bước 2/ }).click();
  await page.locator('[data-segment="seg-2"]').click();
  await page.locator('[data-segment="seg-4"]').click();
  await page.getByRole('button', { name: 'Kiểm tra đồ thị' }).click();
  await expect(page.getByRole('status').first()).toContainText('Chính xác');
  await page.getByRole('button', { name: /Sang Bước 3/ }).click();
  await page.getByLabel(/Quãng đường giai đoạn 10–12 s/).fill('12');
  await page.getByLabel(/Tổng quãng đường/).fill('100');
  await page.getByRole('button', { name: 'Kiểm tra kết quả số' }).click();
  await expect(page.getByRole('heading', { name: 'Bài giải tự luận hoàn chỉnh' })).toBeVisible();

  // 2. Ch.4 LOL Energy Bar Chart (phy1159-se-4-1)
  await page.goto('./#/courses/phy1159/lessons/phy1159-t4-1/practice/phy1159-se-4-1');
  await page.getByLabel(/Âm/).check();
  await page.getByRole('button', { name: 'Kiểm tra lập luận' }).click();
  await page.getByRole('button', { name: /Sang Bước 2/ }).click();
  // Set K1=4, U1=0, Ams='-', K2=0, U2=3
  for (let i = 0; i < 4; i++) await page.locator('[data-bar="initial-K1-inc"]').click();
  await page.locator('[data-transfer="-"]').click();
  for (let i = 0; i < 3; i++) await page.locator('[data-bar="final-U2-inc"]').click();
  await page.getByRole('button', { name: 'Kiểm tra biểu đồ năng lượng' }).click();
  await expect(page.getByRole('status').first()).toContainText('Chính xác');

  // 3. Ch.9 P-V Diagram + Sign Matrix (phy1159-se-9-1)
  await page.goto('./#/courses/phy1159/lessons/phy1159-t9-1/practice/phy1159-se-9-1');
  await page.locator('[data-sign="p12-dU-+"]').click();
  await page.locator('[data-sign="p12-A-+"]').click();
  await page.locator('[data-sign="p12-Q-+"]').click();
  await page.locator('[data-sign="p23-dU--"]').click();
  await page.locator('[data-sign="p23-A-0"]').click();
  await page.locator('[data-sign="p23-Q--"]').click();
  await page.getByRole('button', { name: 'Kiểm tra đồ thị' }).click();
  await expect(page.getByRole('status').first()).toContainText('Chính xác');

  expect(errors).toEqual([]);
});
