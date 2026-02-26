import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Image', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--default');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Decorative', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--decorative');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-decorative.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Auto Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--auto');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-auto.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Hero Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--hero');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-hero.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Landscape Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--landscape');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-landscape.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Photo Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--photo');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-photo.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Portrait Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--portrait');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-portrait.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Square Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--square');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-square.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Tall Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--tall');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-tall.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Ultrawide Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--ultrawide');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-ultrawide.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });

  test('Wide Aspect Ratio', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-image--wide');
    await page.waitForSelector('.dictu-image', { timeout: 5000 });

    await expect(page).toHaveScreenshot('image-wide.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: true,
    });
  });
});
