import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Link As Button', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link-as-button--default-link-as-button');
    await page.waitForSelector('.dictu-link-as-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-as-button-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Secondary', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link-as-button--secondary-link-as-button');
    await page.waitForSelector('.dictu-link-as-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-as-button-secondary.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link-as-button--small-link-as-button');
    await page.waitForSelector('.dictu-link-as-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-as-button-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
