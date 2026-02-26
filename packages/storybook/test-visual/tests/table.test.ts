import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Table', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--default-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-default.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Row Header', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--row-header-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-row-header.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Responsive', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--responsive-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-responsive.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Accent Cell', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--accent-cell');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-accent-cell.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Foot', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--foot-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-foot.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Colspan', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--colspan-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-colspan.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Rowspan', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--rowspan-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-rowspan.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Align End', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--align-end-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-align-end.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Double Column Header', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--double-column-header-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-double-column-header.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('Double Row Header', async ({ page }) => {
    await page.goto('/iframe.html?id=componenten-table--double-row-header-table');
    await page.waitForSelector('.dictu-table', { timeout: 5000 });

    await expect(page).toHaveScreenshot('table-double-row-header.png', {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: 'disabled',
      fullPage: false,
    });
  });
});
