import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Page Container', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-container--default');
    await page.waitForSelector('.dictu-container', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-container-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
