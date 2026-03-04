import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Button', () => {
  test('Primary Action', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-primary-action.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Secondary Action', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--secondary-action');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-secondary-action.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Subtle', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--subtle');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-subtle.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Icon Only', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action-icon-only');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-icon-only.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Primary Action Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action-disabled');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-primary-action-disabled.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Secondary Action Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--secondary-action-disabled');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-secondary-action-disabled.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Subtle Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--subtle-disabled');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-subtle-disabled.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Primary Action Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action-small');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-primary-action-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Secondary Action Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--secondary-action-small');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-secondary-action-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Subtle Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--subtle-small');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-subtle-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Secondary Action Icon Only', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--secondary-action-icon-only');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-secondary-action-icon-only.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Subtle Icon Only', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--subtle-icon-only');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-subtle-icon-only.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Primary Action Icon Only Small', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action-icon-only-small');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-primary-action-icon-only-small.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Primary Action Icon Before', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action-icon-before');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-primary-action-icon-before.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Primary Action Icon After', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-button--primary-action-icon-after');
    await page.waitForSelector('.dictu-button', { timeout: 5000 });

    await expect(page).toHaveScreenshot('button-primary-action-icon-after.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
