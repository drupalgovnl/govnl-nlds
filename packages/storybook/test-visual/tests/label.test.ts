import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Label', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-label--label-default');
    await page.waitForSelector('.dictu-label', { timeout: 5000 });

    await expect(page).toHaveScreenshot('label-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Required', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-label--label-required');
    await page.waitForSelector('.dictu-label', { timeout: 5000 });

    await expect(page).toHaveScreenshot('label-required.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Strong', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-label--label-strong');
    await page.waitForSelector('.dictu-label', { timeout: 5000 });

    await expect(page).toHaveScreenshot('label-strong.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
