import { test, expect } from '@playwright/test';
import { VISUAL_DIFF_THRESHOLD } from '../visual.utils';

test.describe('Timeline', () => {
  test('Default', async ({ page }) => {
    // Timeline requires loading through full Storybook UI to get all CSS dependencies
    // (button, heading, focus-ring styles) that aren't directly imported in the story
    await page.setViewportSize({ width: 1280, height: 1800 });
    await page.goto('/?path=/story/componenten-timeline--timeline');
    await page.waitForLoadState('networkidle');

    // Wait for the timeline component inside the iframe
    const iframe = page.frameLocator('#storybook-preview-iframe');
    await iframe.locator('.dictu-timeline').waitFor({ timeout: 10000 });

    // Additional wait for fonts and styles
    await page.waitForTimeout(2000);

    // Screenshot only the iframe content area
    const iframeElement = page.locator('#storybook-preview-iframe');
    const box = await iframeElement.boundingBox();

    if (box) {
      await expect(page).toHaveScreenshot('timeline-default.png', {
        maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
        animations: 'disabled',
        clip: { x: box.x, y: box.y, width: box.width, height: box.height },
      });
    }
  });
});
