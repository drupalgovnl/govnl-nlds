import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Link', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link--default-link');
    await page.waitForSelector('.dictu-link', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('External', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link--external-link');
    await page.waitForSelector('.dictu-link', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-external.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link--icon-link');
    await page.waitForSelector('.dictu-link', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-icon.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Icon Before', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-link--icon-link-before');
    await page.waitForSelector('.dictu-link', { timeout: 5000 });

    await expect(page).toHaveScreenshot('link-icon-before.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
