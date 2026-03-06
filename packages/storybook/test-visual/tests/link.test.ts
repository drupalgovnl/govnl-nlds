import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Link', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link--default-link');
    await page.waitForSelector('.dictu-link', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
