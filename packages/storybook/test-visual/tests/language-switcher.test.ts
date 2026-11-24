import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Language switcher', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-language-switcher--default-language-switcher');
    await page.waitForSelector('.dictu-language-switcher', { timeout: 5000 });

    await expect(page).toHaveScreenshot('language-switcher-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Expanded', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-language-switcher--language-switcher-expanded');
    await page.waitForSelector('.dictu-language-switcher', { timeout: 5000 });

    await expect(page).toHaveScreenshot('language-switcher-expanded.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
