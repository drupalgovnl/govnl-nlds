import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Search Bar', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-searchbar--searchbar-default');
    await page.waitForSelector('.dictu-searchbar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('searchbar-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-searchbar--searchbar-small');
    await page.waitForSelector('.dictu-searchbar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('searchbar-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
