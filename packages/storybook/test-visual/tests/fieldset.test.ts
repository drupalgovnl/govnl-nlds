import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Fieldset', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-fieldset--default-fieldset');
    await page.waitForSelector('.dictu-fieldset', { timeout: 5000 });

    await expect(page).toHaveScreenshot('fieldset-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-fieldset--error-fieldset');
    await page.waitForSelector('.dictu-fieldset', { timeout: 5000 });

    await expect(page).toHaveScreenshot('fieldset-error.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Description', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-fieldset--description-fieldset');
    await page.waitForSelector('.dictu-fieldset', { timeout: 5000 });

    await expect(page).toHaveScreenshot('fieldset-description.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Legend Strong', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-fieldset--legend-strong-fieldset');
    await page.waitForSelector('.dictu-fieldset', { timeout: 5000 });

    await expect(page).toHaveScreenshot('fieldset-legend-strong.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Checkbox Example', async ({ page }) => {
    await page.goto(
      '/iframe.html?id=componenten-form-elements-fieldset--checkbox-example-fieldset'
    );
    await page.waitForSelector('.dictu-fieldset', { timeout: 5000 });

    await expect(page).toHaveScreenshot('fieldset-checkbox-example.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
