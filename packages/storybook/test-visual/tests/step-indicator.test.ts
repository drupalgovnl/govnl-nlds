import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Step indicator', () => {
  test('Horizontal', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-step-indicator--horizontal-middle');
    await page.waitForSelector('.dictu-step-indicator', { timeout: 5000 });

    await expect(page).toHaveScreenshot('step-indicator-horizontal.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Vertical', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-step-indicator--vertical');
    await page.waitForSelector('.dictu-step-indicator', { timeout: 5000 });

    await expect(page).toHaveScreenshot('step-indicator-vertical.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/iframe.html?id=componenten-step-indicator--horizontal-middle');
    await page.waitForSelector('.dictu-step-indicator', { timeout: 5000 });

    await expect(page).toHaveScreenshot('step-indicator-mobile.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobile expanded', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/iframe.html?id=componenten-step-indicator--horizontal-middle');
    await page.waitForSelector('.dictu-step-indicator', { timeout: 5000 });
    await page.locator('.dictu-step-indicator__summary').click();
    await page.locator('.dictu-step-indicator__disclosure[open]').waitFor();

    await expect(page).toHaveScreenshot('step-indicator-mobile-expanded.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
