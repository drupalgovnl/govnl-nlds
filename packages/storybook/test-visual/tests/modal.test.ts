import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Modal', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-modal--modal-default');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
