import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Card', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-card--default-card');
    await page.waitForSelector('.dictu-card', { timeout: 5000 });

    await expect(page).toHaveScreenshot('card-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Accent', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-card--accent-card');
    await page.waitForSelector('.dictu-card', { timeout: 5000 });

    await expect(page).toHaveScreenshot('card-accent.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Full Card Link', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-card--full-card-link');
    await page.waitForSelector('.dictu-card', { timeout: 5000 });

    await expect(page).toHaveScreenshot('card-full-card-link.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
