import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Page Header', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-header--page-header');
    await page.waitForSelector('.dictu-page-header', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-header-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
