import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Embed', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-embed--embed');
    await page.waitForSelector('.dictu-embed', { timeout: 5000 });

    // The embed loads external content (YouTube), which is not deterministic.
    // Mask the iframe so only its size and position are compared.
    await expect(page).toHaveScreenshot('embed-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
      mask: [page.locator('.dictu-embed')],
    });
  });
});
