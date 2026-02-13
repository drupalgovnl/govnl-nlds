import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Breadcrumbs', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-breadcrumbs--default-breadcrumbs');
    await page.waitForSelector('.dictu-breadcrumbs', { timeout: 5000 });

    await expect(page).toHaveScreenshot('breadcrumbs-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Long', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-breadcrumbs--long-breadcrumbs');
    await page.waitForSelector('.dictu-breadcrumbs', { timeout: 5000 });

    await expect(page).toHaveScreenshot('breadcrumbs-long.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobile', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-breadcrumbs--mobile-breadcrumbs');
    await page.waitForSelector('.dictu-breadcrumbs', { timeout: 5000 });

    await expect(page).toHaveScreenshot('breadcrumbs-mobile.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
