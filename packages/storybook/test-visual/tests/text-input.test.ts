import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Text Input', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-default');
    await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

    await expect(page).toHaveScreenshot('text-input-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-small');
    await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

    await expect(page).toHaveScreenshot('text-input-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-error');
    await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

    await expect(page).toHaveScreenshot('text-input-error.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Read Only', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-read-only');
    await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

    await expect(page).toHaveScreenshot('text-input-readonly.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Placeholder', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-placeholder');
    await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

    await expect(page).toHaveScreenshot('text-input-placeholder.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
