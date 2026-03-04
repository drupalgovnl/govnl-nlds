import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Hero', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-hero--hero');
    await page.waitForSelector('.dictu-hero', { timeout: 5000 });

    await expect(page).toHaveScreenshot('hero-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobiel', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-hero--hero-mobiel');
    await page.waitForSelector('.dictu-hero', { timeout: 5000 });

    await expect(page).toHaveScreenshot('hero-mobiel.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
