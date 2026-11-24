import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Quote', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-quote--default-quote');
    await page.waitForSelector('.dictu-quote', { timeout: 5000 });

    await expect(page).toHaveScreenshot('quote-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Author', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-quote--author-quote');
    await page.waitForSelector('.dictu-quote', { timeout: 5000 });

    await expect(page).toHaveScreenshot('quote-author.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Role', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-quote--role-quote');
    await page.waitForSelector('.dictu-quote', { timeout: 5000 });

    await expect(page).toHaveScreenshot('quote-role.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Work', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-quote--work-quote');
    await page.waitForSelector('.dictu-quote', { timeout: 5000 });

    await expect(page).toHaveScreenshot('quote-work.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Cite', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-quote--cite-quote');
    await page.waitForSelector('.dictu-quote', { timeout: 5000 });

    await expect(page).toHaveScreenshot('quote-cite.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
