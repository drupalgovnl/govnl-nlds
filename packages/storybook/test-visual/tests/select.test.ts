import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Select', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-select--select-default');
    await page.waitForSelector('.dictu-select', { timeout: 5000 });

    await expect(page).toHaveScreenshot('select-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Inline', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-select--select-inline');
    await page.waitForSelector('.dictu-select', { timeout: 5000 });

    await expect(page).toHaveScreenshot('select-inline.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Multiple', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-select--select-multiple');
    await page.waitForSelector('.dictu-select', { timeout: 5000 });

    await expect(page).toHaveScreenshot('select-multiple.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-select--select-disabled');
    await page.waitForSelector('.dictu-select', { timeout: 5000 });

    await expect(page).toHaveScreenshot('select-disabled.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-select--select-error');
    await page.waitForSelector('.dictu-select', { timeout: 5000 });

    await expect(page).toHaveScreenshot('select-error.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Required', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-form-elements-select--select-required');
    await page.waitForSelector('.dictu-select', { timeout: 5000 });

    await expect(page).toHaveScreenshot('select-required.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
