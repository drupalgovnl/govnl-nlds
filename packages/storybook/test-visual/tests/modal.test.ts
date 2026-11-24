import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Modal', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-modal--modal-default');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Basic', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-modal--modal-basic');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-basic.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Long content', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-modal--modal-long-content');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-long-content.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Default mobile', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/iframe.html?id=componenten-modal--modal-default-mobile');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-default-mobile.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Basic mobile', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/iframe.html?id=componenten-modal--modal-basic-mobile');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-basic-mobile.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Long content mobile', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/iframe.html?id=componenten-modal--modal-long-content-mobile');
    await page.waitForSelector('.dictu-modal', { timeout: 5000 });

    await expect(page).toHaveScreenshot('modal-long-content-mobile.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
