import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Checkbox', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-checkbox--default-checkbox');
    await page.waitForSelector('.dictu-checkbox', { timeout: 5000 });

    await expect(page).toHaveScreenshot('checkbox-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Checked', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-checkbox--checked-checkbox');
    await page.waitForSelector('.dictu-checkbox', { timeout: 5000 });

    await expect(page).toHaveScreenshot('checkbox-checked.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
