import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Textarea', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-textarea--textarea-default');
    await page.waitForSelector('.dictu-textarea', { timeout: 5000 });

    await expect(page).toHaveScreenshot('textarea-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Rows', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-textarea--textarea-rows');
    await page.waitForSelector('.dictu-textarea', { timeout: 5000 });

    await expect(page).toHaveScreenshot('textarea-rows.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Cols', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-textarea--textarea-cols');
    await page.waitForSelector('.dictu-textarea', { timeout: 5000 });

    await expect(page).toHaveScreenshot('textarea-cols.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-textarea--textarea-error');
    await page.waitForSelector('.dictu-textarea', { timeout: 5000 });

    await expect(page).toHaveScreenshot('textarea-error.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-textarea--textarea-disabled');
    await page.waitForSelector('.dictu-textarea', { timeout: 5000 });

    await expect(page).toHaveScreenshot('textarea-disabled.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Placeholder', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-textarea--textarea-placeholder');
    await page.waitForSelector('.dictu-textarea', { timeout: 5000 });

    await expect(page).toHaveScreenshot('textarea-placeholder.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
