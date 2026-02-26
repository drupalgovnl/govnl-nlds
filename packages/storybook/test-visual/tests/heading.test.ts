import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Heading', () => {
  test('Level 1', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-heading--heading-level-1');
    await page.waitForSelector('.dictu-heading', { timeout: 5000 });

    await expect(page).toHaveScreenshot('heading-level-1.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Level 2', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-heading--heading-level-2');
    await page.waitForSelector('.dictu-heading', { timeout: 5000 });

    await expect(page).toHaveScreenshot('heading-level-2.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Level 3', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-heading--heading-level-3');
    await page.waitForSelector('.dictu-heading', { timeout: 5000 });

    await expect(page).toHaveScreenshot('heading-level-3.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Level 4', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-heading--heading-level-4');
    await page.waitForSelector('.dictu-heading', { timeout: 5000 });

    await expect(page).toHaveScreenshot('heading-level-4.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Level 5', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-heading--heading-level-5');
    await page.waitForSelector('.dictu-heading', { timeout: 5000 });

    await expect(page).toHaveScreenshot('heading-level-5.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Level 6', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-heading--heading-level-6');
    await page.waitForSelector('.dictu-heading', { timeout: 5000 });

    await expect(page).toHaveScreenshot('heading-level-6.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
