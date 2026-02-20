import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('List', () => {
  test('Unordered', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-list--unordered');
    await page.waitForSelector('.dictu-list', { timeout: 5000 });

    await expect(page).toHaveScreenshot('list-unordered.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Ordered', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-list--ordered');
    await page.waitForSelector('.dictu-list', { timeout: 5000 });

    await expect(page).toHaveScreenshot('list-ordered.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Icon List', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-list--icon-list');
    await page.waitForSelector('.dictu-list', { timeout: 5000 });

    await expect(page).toHaveScreenshot('list-icon.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
