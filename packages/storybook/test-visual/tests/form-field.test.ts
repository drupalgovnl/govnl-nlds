import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Form Field', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-form-field--default-form-field');
    await page.waitForSelector('.dictu-form-field', { timeout: 5000 });

    await expect(page).toHaveScreenshot('form-field-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-form-field--error-form-field');
    await page.waitForSelector('.dictu-form-field', { timeout: 5000 });

    await expect(page).toHaveScreenshot('form-field-error.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Description', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-form-field--description-form-field');
    await page.waitForSelector('.dictu-form-field', { timeout: 5000 });

    await expect(page).toHaveScreenshot('form-field-description.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Label Strong', async ({ page }) => {
    await page.goto(
      '/iframe.html?id=componenten-form-elements-form-field--label-strong-form-field'
    );
    await page.waitForSelector('.dictu-form-field', { timeout: 5000 });

    await expect(page).toHaveScreenshot('form-field-label-strong.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Inline', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-form-field--inline-form-field');
    await page.waitForSelector('.dictu-form-field', { timeout: 5000 });

    await expect(page).toHaveScreenshot('form-field-inline.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
