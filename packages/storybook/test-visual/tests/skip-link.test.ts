import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Skip Link', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-skip-link--skip-link');
    await page.waitForSelector('.dictu-skip-link', { timeout: 5000 });

    await expect(page).toHaveScreenshot('skip-link-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
