import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Page Footer', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-footer--default-page-footer');
    await page.waitForSelector('.dictu-page-footer', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-footer-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Minimal', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-footer--minimal-page-footer');
    await page.waitForSelector('.dictu-page-footer', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-footer-minimal.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Minimal Only Columns', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-footer--minimal-page-footer-only-columns');
    await page.waitForSelector('.dictu-page-footer', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-footer-minimal-only-columns.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
