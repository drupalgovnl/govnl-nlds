import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Page Section', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-section--default');
    await page.waitForSelector('.dictu-section', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-section-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With Aria Label', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-section--with-aria-label');
    await page.waitForSelector('.dictu-section', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-section-with-aria-label.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Without Title', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-section--without-title');
    await page.waitForSelector('.dictu-section', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-section-without-title.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
