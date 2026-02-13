import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Pagination', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-pagination--pagination-default');
    await page.waitForSelector('.dictu-pagination', { timeout: 5000 });

    await expect(page).toHaveScreenshot('pagination-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-pagination--pagination-small');
    await page.waitForSelector('.dictu-pagination', { timeout: 5000 });

    await expect(page).toHaveScreenshot('pagination-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Without Ellipsis', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-pagination--pagination-without-ellipsis');
    await page.waitForSelector('.dictu-pagination', { timeout: 5000 });

    await expect(page).toHaveScreenshot('pagination-without-ellipsis.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
