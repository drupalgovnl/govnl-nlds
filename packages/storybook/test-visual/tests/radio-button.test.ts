import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Radio Button', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-radio-button--default-radio-button');
    await page.waitForSelector('.dictu-radio-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('radio-button-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Checked', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-radio-button--checked-radio-button');
    await page.waitForSelector('.dictu-radio-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('radio-button-checked.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
