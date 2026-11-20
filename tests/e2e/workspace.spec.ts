import { expect, test } from '@playwright/test';

test('workspace navigation, search, filtering, and lesson fallback work without errors', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  });

  await page.goto('./');
  await expect(page.getByRole('heading', { name: 'Học phần', exact: true })).toBeVisible();

  // Accent-insensitive quick search on dashboard
  const quickSearch = page.getByRole('searchbox', { name: 'Tìm nhanh học phần' });
  await quickSearch.fill('thiet ke');
  await expect(page.getByRole('link', { name: /Thiết kế và đánh giá thuật toán/ })).toBeVisible();
  await quickSearch.fill('khong ton tai');
  await expect(page.getByText('Không tìm thấy học phần phù hợp')).toBeVisible();
  await page.getByRole('button', { name: 'Hiển thị lại tất cả học phần' }).click();
  await expect(page.getByRole('link', { name: /Thiết kế và đánh giá thuật toán/ })).toBeVisible();

  // Navigate to catalog and filter by subject
  await page.goto('./#/courses');
  await expect(page.getByRole('heading', { name: 'Danh mục học phần' })).toBeVisible();
  await page.getByRole('button', { name: /Vật lý/ }).click();
  await expect(page.getByRole('link', { name: /Cơ – Nhiệt/ })).toBeVisible();
  await page.getByRole('button', { name: /Tất cả lĩnh vực/ }).click();
  await expect(page.getByRole('link', { name: /Thiết kế và đánh giá thuật toán/ })).toBeVisible();

  // Toggle list/grid layout
  await page.getByRole('button', { name: 'Hiển thị dạng danh sách' }).click();
  await expect(page.getByRole('button', { name: 'Hiển thị dạng danh sách' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  // Lesson fallback route
  await page.goto('./#/courses/mat3504/lessons/intro');
  await expect(page.getByRole('heading', { name: 'Bài học chưa sẵn sàng' })).toBeVisible();

  // Resource Library (only Chemistry YouTube video is public; no external repo source links)
  await page.goto('./#/resources');
  await expect(page.getByRole('heading', { name: 'Thư viện tài liệu' })).toBeVisible();
  await expect(page.getByRole('link', { name: /General Chemistry/i })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Xem nguồn gốc' })).toHaveCount(0);

  // Learning Progress
  await page.goto('./#/progress');
  await expect(page.getByRole('heading', { name: 'Tiến độ học tập', exact: true })).toBeVisible();
  await expect(page.getByText('Chưa có dữ liệu tiến độ học tập')).toBeVisible();

  // Settings + dark theme toggle & persistence
  await page.goto('./#/settings');
  await expect(page.getByRole('heading', { name: 'Cài đặt không gian học' })).toBeVisible();
  await page.getByRole('radio', { name: /Tối/ }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  expect(errors).toEqual([]);
});

test('has no horizontal overflow across representative viewport widths', async ({ page }) => {
  const widths = [360, 390, 768, 1024, 1440];
  const routes = ['./', './#/courses', './#/courses/mat3504', './#/courses/phy1159', './#/courses/general-chemistry', './#/courses/phy1159/lessons/phy1159-t1-2', './#/resources', './#/progress', './#/settings'];

  for (const width of widths) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.getByRole('main')).toBeVisible();
      const noOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      );
      expect(noOverflow, `Horizontal overflow at ${width}px on ${route}`).toBe(true);
    }
  }
});

test('mobile navigation drawer opens, navigates, and closes cleanly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('./');
  await page.getByRole('button', { name: 'Mở thanh điều hướng' }).click();
  const dialog = page.getByRole('dialog', { name: 'Điều hướng' });
  await expect(dialog).toBeVisible();
  await dialog.getByRole('link', { name: 'Thư viện tài liệu' }).click();
  await expect(page.getByRole('heading', { name: 'Thư viện tài liệu' })).toBeVisible();
  await expect(dialog).not.toBeVisible();
});

test('supports keyboard accessibility across search results, settings radiogroups, and lesson reader', async ({
  page,
}) => {
  // Search keyboard navigation
  await page.goto('./#/courses?q=khong%20thu%20nguyen');
  const searchInput = page.getByRole('searchbox', { name: 'Tìm kiếm trong danh mục học phần' });
  await searchInput.focus();
  await page.keyboard.press('ArrowDown');
  await expect(page.locator('section[aria-label="Kết quả học liệu"] a[href]').first()).toBeFocused();

  // Settings WAI-ARIA radiogroup arrow-key navigation
  await page.goto('./#/settings');
  const systemRadio = page.getByRole('radio', { name: /Theo hệ thống/ });
  await systemRadio.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('radio', { name: /Sáng/ })).toBeFocused();
  await expect(page.getByRole('radio', { name: /Sáng/ })).toHaveAttribute('aria-checked', 'true');

  // Lesson reading size quick toggle
  await page.goto('./#/courses/phy1159/lessons/phy1159-t1-2');
  const sizeToggle = page.getByRole('button', { name: 'Tăng cỡ chữ đọc thoải mái' });
  await sizeToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-reading-size', 'comfortable');
  await expect(page.getByRole('button', { name: 'Chuyển cỡ chữ đọc về tiêu chuẩn' })).toBeVisible();
});

test('orbital course search handles Vietnamese IME composition, directional filtering, and empty state', async ({
  page,
}) => {
  await page.goto('./#/courses');
  const searchInput = page.getByRole('searchbox', { name: 'Tìm kiếm trong danh mục học phần' });
  await expect(searchInput).toBeVisible();

  const initialBox = await searchInput.boundingBox();
  expect(initialBox).not.toBeNull();

  // Simulate Vietnamese Telex IME composition (e.g., "vật lý") without corrupting text
  await searchInput.focus();
  await searchInput.evaluate(el => {
    const input = el as HTMLInputElement;
    input.dispatchEvent(new CompositionEvent('compositionstart', { bubbles: true, data: '' }));
  });
  await page.keyboard.insertText('vật lý');
  await searchInput.evaluate(el => {
    const input = el as HTMLInputElement;
    input.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, data: 'vật lý' }));
  });

  const universe = page.getByRole('region', { name: 'Bản đồ nguyên tử học phần' });
  await expect(searchInput).toHaveValue('vật lý');
  await expect(universe.getByRole('link', { name: /Cơ – Nhiệt/ })).toBeVisible();
  await expect(universe.getByRole('link', { name: /Thiết kế và đánh giá thuật toán/ })).toHaveCount(0);

  // Empty search result pushes search box up (on desktop) and reveals "Không tìm thấy"
  await searchInput.fill('khong ton tai mon hoc nao');
  await expect(page.getByText('Không tìm thấy', { exact: true })).toBeVisible();

  const viewport = page.viewportSize();
  if (viewport && viewport.width >= 1024 && initialBox) {
    await page.waitForTimeout(550);
    const elevatedBox = await searchInput.boundingBox();
    expect(elevatedBox).not.toBeNull();
    expect(elevatedBox!.y).toBeLessThan(initialBox.y - 40);
  }

  // Reset restores all courses
  await page.getByRole('button', { name: 'Đặt lại bộ lọc' }).click();
  await expect(searchInput).toHaveValue('');
  await expect(page.getByRole('link', { name: /Thiết kế và đánh giá thuật toán/ })).toBeVisible();

  // From orbital page 1, searching a course on orbital page 2 (e.g., Giải tích I / MAT1091)
  // surfaces it immediately without leaving page 1 stale or breaking search.
  await searchInput.fill('giai tich');
  await expect(universe.getByRole('link', { name: /Giải tích I/ })).toBeVisible();
  await searchInput.fill('');

  // Switching orbital pages triggers directional page-turn animations cleanly
  const nextOrbitBtn = universe.getByRole('button', { name: 'Quỹ đạo tiếp theo' });
  const prevOrbitBtn = universe.getByRole('button', { name: 'Quỹ đạo trước' });
  await nextOrbitBtn.click();
  await expect(universe.getByText('Quỹ đạo 2/2')).toBeVisible();
  await expect(universe.locator('.hus-orbital-page-next').first()).toBeVisible();
  await prevOrbitBtn.click();
  await expect(universe.getByText('Quỹ đạo 1/2')).toBeVisible();
  await expect(universe.locator('.hus-orbital-page-prev').first()).toBeVisible();
});

test('unified home courses section filters by subject and uses two-step boundary gestures across pages', async ({
  page,
}) => {
  await page.goto('./');
  const coursesSection = page.locator('#courses-section');
  await expect(coursesSection.getByRole('heading', { name: 'Học phần', exact: true })).toBeVisible();

  // Subject cards live inside the unified #courses-section and filter courses in place
  const subjectGroup = coursesSection.getByRole('group', { name: 'Lĩnh vực môn học' });
  const physicsBtn = subjectGroup.getByRole('button', { name: /Vật lý/ });
  await physicsBtn.click();
  await expect(physicsBtn).toHaveAttribute('aria-pressed', 'true');
  await expect(coursesSection.getByRole('link', { name: /Cơ – Nhiệt/ })).toBeVisible();
  await expect(
    coursesSection.getByRole('link', { name: /Thiết kế và đánh giá thuật toán/ }),
  ).toHaveCount(0);

  // Toggle back to all
  await physicsBtn.click();
  await expect(physicsBtn).toHaveAttribute('aria-pressed', 'false');

  const isMobileViewport = (page.viewportSize()?.width ?? 1280) < 768;

  const triggerPull = async (direction: 'up' | 'down') => {
    if (isMobileViewport) {
      await page.evaluate(dir => {
        const startY = dir === 'down' ? 500 : 200;
        const endY = dir === 'down' ? 400 : 300;
        const makeTouch = (y: number) =>
          new Touch({ identifier: 1, target: document.body, clientX: 195, clientY: y });
        window.dispatchEvent(
          new TouchEvent('touchstart', { touches: [makeTouch(startY)], bubbles: true }),
        );
        window.dispatchEvent(
          new TouchEvent('touchmove', { touches: [makeTouch(endY)], bubbles: true }),
        );
        window.dispatchEvent(new TouchEvent('touchend', { touches: [], bubbles: true }));
      }, direction);
    } else {
      await page.mouse.move(200, 300);
      await page.mouse.wheel(0, direction === 'down' ? 120 : -120);
    }
  };

  // 1st pull at bottom edge of Home arms confirmation pill (does NOT jump immediately)
  await page.waitForTimeout(700);
  await page.evaluate(() =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }),
  );
  await triggerPull('down');
  await expect(page.locator('[data-gesture-prompt="bottom"]')).toBeVisible();
  await expect(page).not.toHaveURL(/#\/courses/);

  // 2nd pull after inertia gap confirms transition to /#/courses
  await page.waitForTimeout(320);
  await triggerPull('down');
  await expect(page).toHaveURL(/#\/courses/);
  await expect(page.getByRole('heading', { name: 'Danh mục học phần' })).toBeVisible();

  // On /courses: 1st upward pull at top edge arms confirmation pill (header stays visible!)
  await page.waitForTimeout(700);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await triggerPull('up');
  await expect(page.locator('[data-gesture-prompt="top"]')).toBeVisible();
  await expect(page).toHaveURL(/#\/courses/);

  // 2nd upward pull confirms transition back to Home
  await page.waitForTimeout(320);
  await triggerPull('up');
  await expect(page).not.toHaveURL(/#\/courses/);
  await expect(page.locator('#courses-section')).toBeVisible();

  // Verify two-step boundary gesture also works on /resources -> /progress
  await page.goto('./#/resources');
  await expect(page.getByRole('heading', { name: 'Thư viện tài liệu' })).toBeVisible();
  await page.waitForTimeout(700);
  await page.evaluate(() =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }),
  );
  await triggerPull('down');
  await expect(page.locator('[data-gesture-prompt="bottom"]')).toBeVisible();
  await page.waitForTimeout(320);
  await triggerPull('down');
  await expect(page).toHaveURL(/#\/progress/);
});
