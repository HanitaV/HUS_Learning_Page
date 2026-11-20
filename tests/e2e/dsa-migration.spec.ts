import { expect, test } from '@playwright/test';

const courses = [
  { id: 'mat3504', lesson: 'mat3504-abstraction-adt' },
  { id: 'mat3514', lesson: 'mat3514-java-interface-abstract' },
  { id: 'thcs4', lesson: 'thcs4-cb-java-program-bytecode' },
  { id: 'oop', lesson: 'oop-cb-java-program-bytecode' },
];

test('opens a representative lesson in each migrated DSA course and finds lessons by title', async ({ page }) => {
  for (const course of courses) {
    await page.goto(`./#/courses/${course.id}/lessons/${course.lesson}`);
    await expect(page.locator('main h1').first()).toBeVisible();
    await expect(page.locator('.academic-prose').first()).toBeVisible();
    await expect(page.locator('.academic-prose pre code').first()).toBeVisible();

    const title = (await page.locator('main h1').first().innerText()).trim();
    await page.goto(`./#/courses?q=${encodeURIComponent(title)}`);
    await expect(page.getByRole('link', { name: new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) }).first()).toBeVisible();
  }
});
