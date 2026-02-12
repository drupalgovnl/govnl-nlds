import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Accordion', () => {
  test('Open', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-accordion--accordion-open');
    await page.waitForSelector('.dictu-accordion', { timeout: 5000 });

    await expect(page).toHaveScreenshot('accordion-open.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Closed', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-accordion--accordion-closed');
    await page.waitForSelector('.dictu-accordion', { timeout: 5000 });

    await expect(page).toHaveScreenshot('accordion-closed.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
