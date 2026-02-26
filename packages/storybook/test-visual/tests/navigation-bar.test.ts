import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Navigation Bar', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-navigation-bar--navigation-bar-default');
    await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('navigation-bar-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobile', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-navigation-bar--navigation-bar-mobile');
    await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('navigation-bar-mobile.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobile Expanded', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-navigation-bar--navigation-bar-mobile-expanded');
    await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('navigation-bar-mobile-expanded.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Mobile Expanded Submenu', async ({ page }) => {
    await page.goto(
      '/iframe.html?id=componenten-navigation-bar--navigation-bar-mobile-expanded-submenu'
    );
    await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('navigation-bar-mobile-expanded-submenu.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Submenu', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-navigation-bar--navigation-bar-submenu');
    await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('navigation-bar-submenu.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Submenu Open', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-navigation-bar--navigation-bar-submenu-open');
    await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

    await expect(page).toHaveScreenshot('navigation-bar-submenu-open.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
