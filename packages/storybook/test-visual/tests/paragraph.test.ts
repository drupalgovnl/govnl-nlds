import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Paragraph', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-paragraph--paragraph');
    await page.waitForSelector('.dictu-paragraph', { timeout: 5000 });

    await expect(page).toHaveScreenshot('paragraph-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Lead', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-paragraph--lead');
    await page.waitForSelector('.dictu-paragraph', { timeout: 5000 });

    await expect(page).toHaveScreenshot('paragraph-lead.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
