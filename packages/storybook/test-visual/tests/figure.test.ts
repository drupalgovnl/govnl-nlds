import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Figure', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-figure--figure');
    await page.waitForSelector('.dictu-figure', { timeout: 5000 });

    // Wait for images to finish loading before taking screenshot
    await page.waitForFunction(
      // eslint-disable-next-line no-undef -- runs in browser context via Playwright
      () => [...document.images].every(img => img.complete && img.naturalHeight > 0)
    );

    await expect(page).toHaveScreenshot('figure-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });
});
