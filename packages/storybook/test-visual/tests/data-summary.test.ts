import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Data summary', () => {
  test('Row', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--row');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-row.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Column', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--column');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-column.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With action', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--with-action');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-with-action.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
