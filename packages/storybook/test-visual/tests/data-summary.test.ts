import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Data summary', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--default');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With step', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--with-step');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-with-step.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With step and action', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--with-step-and-action');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-with-step-and-action.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With item action', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--with-item-action');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-with-item-action.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Multiline value', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-data-summary--multiline-value');
    await page.waitForSelector('.dictu-data-summary', { timeout: 5000 });

    await expect(page).toHaveScreenshot('data-summary-multiline-value.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
