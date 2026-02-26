import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Logo', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-logo--logo');
    await page.waitForSelector('.dictu-logo', { timeout: 5000 });

    await expect(page).toHaveScreenshot('logo-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
