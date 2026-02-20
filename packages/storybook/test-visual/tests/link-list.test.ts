import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Link List', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link-list--default-link-list');
    await page.waitForSelector('.dictu-link-list', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-list-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
