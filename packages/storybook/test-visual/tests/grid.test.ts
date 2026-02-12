import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Grid', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-grid--default');
    await page.waitForSelector('.dictu-grid', { timeout: 5000 });

    await expect(page).toHaveScreenshot('grid-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With Images', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-grid--with-images');
    await page.waitForSelector('.dictu-grid', { timeout: 5000 });

    await expect(page).toHaveScreenshot('grid-with-images.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With Cards', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-grid--with-cards');
    await page.waitForSelector('.dictu-grid', { timeout: 5000 });

    await expect(page).toHaveScreenshot('grid-with-cards.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With Cards On Multiple Rows', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-grid--with-cards-on-multiple-rows');
    await page.waitForSelector('.dictu-grid', { timeout: 5000 });

    await expect(page).toHaveScreenshot('grid-with-cards-multiple-rows.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('With Column Span', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-grid--grid-with-column-span');
    await page.waitForSelector('.dictu-grid', { timeout: 5000 });

    await expect(page).toHaveScreenshot('grid-with-column-span.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
