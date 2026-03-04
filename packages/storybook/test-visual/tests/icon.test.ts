import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Icon', () => {
  test('Decorative', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-icon--icon-decorative');
    await page.waitForSelector('.dictu-icon', { timeout: 5000 });

    await expect(page).toHaveScreenshot('icon-decorative.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Functional', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-icon--icon-functional');
    await page.waitForSelector('.dictu-icon', { timeout: 5000 });

    await expect(page).toHaveScreenshot('icon-functional.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
