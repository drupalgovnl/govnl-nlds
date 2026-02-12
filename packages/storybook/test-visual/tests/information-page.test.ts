import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Information Page', () => {
  test('Default', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 2000 });
    await page.goto('/iframe.html?id=voorbeelden-informatiepagina--information-page');
    await page.waitForSelector('.dictu-section', { timeout: 5000 });

    await expect(page).toHaveScreenshot('information-page-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });
});
