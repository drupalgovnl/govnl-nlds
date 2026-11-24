import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Page Container', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-container--default-page-container');
    await page.waitForSelector('.dictu-container', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-container-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Small Gap', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-container--small-gap-page-container');
    await page.waitForSelector('.dictu-container', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-container-small-gap.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Medium Gap', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-container--medium-gap-page-container');
    await page.waitForSelector('.dictu-container', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-container-medium-gap.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Large Gap', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-page-container--large-gap-page-container');
    await page.waitForSelector('.dictu-container', { timeout: 5000 });

    await expect(page).toHaveScreenshot('page-container-large-gap.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
