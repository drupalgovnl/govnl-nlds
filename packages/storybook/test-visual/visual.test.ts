import { test, expect } from '@playwright/test';

/**
 * Visual regression tests for Storybook stories
 * Uses Playwright Test's built-in toHaveScreenshot() for visual comparisons
 *
 * Run with: npm run test:visual
 * Update snapshots with: npm run test:visual:update
 */

// Stricter threshold (0.1%) to catch text and layout changes
const VISUAL_DIFF_THRESHOLD = 0.001;

// ============================================================================
// Button Component
// ============================================================================
test('Button - Primary Action', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--primary-action');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-primary-action.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Button - Secondary Action', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--secondary-action');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-secondary-action.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Button - Subtle', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--subtle');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-subtle.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Button - Icon Only', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--primary-action-icon-only');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-icon-only.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Button - Primary Action Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--primary-action-disabled');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-primary-action-disabled.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Button - Secondary Action Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--secondary-action-disabled');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-secondary-action-disabled.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Button - Subtle Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-button--subtle-disabled');
  await page.waitForSelector('.dictu-button', { timeout: 5000 });

  await expect(page).toHaveScreenshot('button-subtle-disabled.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Accordion Component
// ============================================================================
test('Accordion - Open', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-accordion--accordion-open');
  await page.waitForSelector('.dictu-accordion', { timeout: 5000 });

  await expect(page).toHaveScreenshot('accordion-open.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Icon Component
// ============================================================================
test('Icon - Decorative', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-icon--icon-decorative');
  await page.waitForSelector('.dictu-icon', { timeout: 5000 });

  await expect(page).toHaveScreenshot('icon-decorative.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Card Component
// ============================================================================
test('Card - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-card--default-card');
  await page.waitForSelector('.dictu-card', { timeout: 5000 });

  await expect(page).toHaveScreenshot('card-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Card - Accent', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-card--accent-card');
  await page.waitForSelector('.dictu-card', { timeout: 5000 });

  await expect(page).toHaveScreenshot('card-accent.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Figure Component
// ============================================================================
test('Figure - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-figure--figure');
  await page.waitForSelector('.dictu-figure', { timeout: 5000 });

  // Wait for images to finish loading before taking screenshot
  await page.waitForFunction(
    // eslint-disable-next-line no-undef -- runs in browser context via Playwright
    () => [...document.images].every(img => img.complete && img.naturalHeight > 0)
  );

  await expect(page).toHaveScreenshot('figure-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: true,
  });
});

// ============================================================================
// Grid Component
// ============================================================================
test('Grid - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-grid--default');
  await page.waitForSelector('.dictu-grid', { timeout: 5000 });

  await expect(page).toHaveScreenshot('grid-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Grid - With Images', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-grid--with-images');
  await page.waitForSelector('.dictu-grid', { timeout: 5000 });

  await expect(page).toHaveScreenshot('grid-with-images.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Grid - With Cards', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-grid--with-cards');
  await page.waitForSelector('.dictu-grid', { timeout: 5000 });

  await expect(page).toHaveScreenshot('grid-with-cards.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Heading Component
// ============================================================================
test('Heading - Level 1', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-heading--heading-level-1');
  await page.waitForSelector('.dictu-heading', { timeout: 5000 });

  await expect(page).toHaveScreenshot('heading-level-1.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Heading - Level 2', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-heading--heading-level-2');
  await page.waitForSelector('.dictu-heading', { timeout: 5000 });

  await expect(page).toHaveScreenshot('heading-level-2.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Heading - Level 3', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-heading--heading-level-3');
  await page.waitForSelector('.dictu-heading', { timeout: 5000 });

  await expect(page).toHaveScreenshot('heading-level-3.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Heading - Level 4', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-heading--heading-level-4');
  await page.waitForSelector('.dictu-heading', { timeout: 5000 });

  await expect(page).toHaveScreenshot('heading-level-4.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Heading - Level 5', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-heading--heading-level-5');
  await page.waitForSelector('.dictu-heading', { timeout: 5000 });

  await expect(page).toHaveScreenshot('heading-level-5.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Heading - Level 6', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-heading--heading-level-6');
  await page.waitForSelector('.dictu-heading', { timeout: 5000 });

  await expect(page).toHaveScreenshot('heading-level-6.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Hero Component
// ============================================================================
test('Hero - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-hero--hero');
  await page.waitForSelector('.dictu-hero', { timeout: 5000 });

  await expect(page).toHaveScreenshot('hero-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Image Component
// ============================================================================
test('Image - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-image--default');
  await page.waitForSelector('.dictu-image', { timeout: 5000 });

  await expect(page).toHaveScreenshot('image-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: true,
  });
});

test('Image - Decorative', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-image--decorative');
  await page.waitForSelector('.dictu-image', { timeout: 5000 });

  await expect(page).toHaveScreenshot('image-decorative.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: true,
  });
});

// ============================================================================
// Link Component
// ============================================================================
test('Link - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-link--default-link');
  await page.waitForSelector('.dictu-link', { timeout: 5000 });

  await expect(page).toHaveScreenshot('link-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Link List Component
// ============================================================================
test('Link List - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-link-list--default-link-list');
  await page.waitForSelector('.dictu-link-list', { timeout: 5000 });

  await expect(page).toHaveScreenshot('link-list-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Logo Component
// ============================================================================
test('Logo - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-logo--logo');
  await page.waitForSelector('.dictu-logo', { timeout: 5000 });

  await expect(page).toHaveScreenshot('logo-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Navigation Bar Component
// ============================================================================
test('Navigation Bar - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-navigation-bar--navigation-bar-default');
  await page.waitForSelector('.dictu-navigation-bar', { timeout: 5000 });

  await expect(page).toHaveScreenshot('navigation-bar-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Page Container Component
// ============================================================================
test('Page Container - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-page-container--default');
  await page.waitForSelector('.dictu-container', { timeout: 5000 });

  await expect(page).toHaveScreenshot('page-container-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Page Footer Component
// ============================================================================
test('Page Footer - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-page-footer--default-page-footer');
  await page.waitForSelector('.dictu-page-footer', { timeout: 5000 });

  await expect(page).toHaveScreenshot('page-footer-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Page Footer - Minimal', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-page-footer--minimal-page-footer');
  await page.waitForSelector('.dictu-page-footer', { timeout: 5000 });

  await expect(page).toHaveScreenshot('page-footer-minimal.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Page Header Component
// ============================================================================
test('Page Header - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-page-header--page-header');
  await page.waitForSelector('.dictu-page-header', { timeout: 5000 });

  await expect(page).toHaveScreenshot('page-header-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Page Section Component
// ============================================================================
test('Page Section - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-page-section--default');
  await page.waitForSelector('.dictu-section', { timeout: 5000 });

  await expect(page).toHaveScreenshot('page-section-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Paragraph Component
// ============================================================================
test('Paragraph - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-paragraph--paragraph');
  await page.waitForSelector('.dictu-paragraph', { timeout: 5000 });

  await expect(page).toHaveScreenshot('paragraph-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Paragraph - Lead', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-paragraph--lead');
  await page.waitForSelector('.dictu-paragraph', { timeout: 5000 });

  await expect(page).toHaveScreenshot('paragraph-lead.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Rich Text Component
// ============================================================================
test('Rich Text - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-rich-text--default');
  await page.waitForSelector('.dictu-rich-text', { timeout: 5000 });

  await expect(page).toHaveScreenshot('rich-text-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Skip Link Component
// ============================================================================
test('Skip Link - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-skip-link--skip-link');
  await page.waitForSelector('.dictu-skip-link', { timeout: 5000 });

  await expect(page).toHaveScreenshot('skip-link-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Timeline Component
// ============================================================================
test('Timeline - Default', async ({ page }) => {
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

// ============================================================================
// Breadcrumbs Component
// ============================================================================
test('Breadcrumbs - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-breadcrumbs--default-breadcrumbs');
  await page.waitForSelector('.dictu-breadcrumbs', { timeout: 5000 });

  await expect(page).toHaveScreenshot('breadcrumbs-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Breadcrumbs - Long', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-breadcrumbs--long-breadcrumbs');
  await page.waitForSelector('.dictu-breadcrumbs', { timeout: 5000 });

  await expect(page).toHaveScreenshot('breadcrumbs-long.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Breadcrumbs - Mobile', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-breadcrumbs--mobile-breadcrumbs');
  await page.waitForSelector('.dictu-breadcrumbs', { timeout: 5000 });

  await expect(page).toHaveScreenshot('breadcrumbs-mobile.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Checkbox Component
// ============================================================================
test('Checkbox - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-checkbox--default-checkbox');
  await page.waitForSelector('.dictu-checkbox', { timeout: 5000 });

  await expect(page).toHaveScreenshot('checkbox-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Checkbox - Checked', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-checkbox--checked-checkbox');
  await page.waitForSelector('.dictu-checkbox', { timeout: 5000 });

  await expect(page).toHaveScreenshot('checkbox-checked.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Embed Component
// ============================================================================
test('Embed - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-embed--embed');
  await page.waitForSelector('.dictu-embed', { timeout: 5000 });

  await expect(page).toHaveScreenshot('embed-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Label Component
// ============================================================================
test('Label - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-label--label-default');
  await page.waitForSelector('.dictu-label', { timeout: 5000 });

  await expect(page).toHaveScreenshot('label-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Label - Required', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-label--label-required');
  await page.waitForSelector('.dictu-label', { timeout: 5000 });

  await expect(page).toHaveScreenshot('label-required.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Label - Strong', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-label--label-strong');
  await page.waitForSelector('.dictu-label', { timeout: 5000 });

  await expect(page).toHaveScreenshot('label-strong.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// List Component
// ============================================================================
test('List - Unordered', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-list--unordered');
  await page.waitForSelector('.dictu-list', { timeout: 5000 });

  await expect(page).toHaveScreenshot('list-unordered.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('List - Ordered', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-list--ordered');
  await page.waitForSelector('.dictu-list', { timeout: 5000 });

  await expect(page).toHaveScreenshot('list-ordered.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('List - Icon List', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-list--icon-list');
  await page.waitForSelector('.dictu-list', { timeout: 5000 });

  await expect(page).toHaveScreenshot('list-icon.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Pagination Component
// ============================================================================
test('Pagination - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-pagination--pagination-default');
  await page.waitForSelector('.dictu-pagination', { timeout: 5000 });

  await expect(page).toHaveScreenshot('pagination-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Pagination - Small', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-pagination--pagination-small');
  await page.waitForSelector('.dictu-pagination', { timeout: 5000 });

  await expect(page).toHaveScreenshot('pagination-small.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Pagination - Without Ellipsis', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-pagination--pagination-without-ellipsis');
  await page.waitForSelector('.dictu-pagination', { timeout: 5000 });

  await expect(page).toHaveScreenshot('pagination-without-ellipsis.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Search Bar Component
// ============================================================================
test('Search Bar - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-searchbar--searchbar-default');
  await page.waitForSelector('.dictu-searchbar', { timeout: 5000 });

  await expect(page).toHaveScreenshot('searchbar-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Search Bar - Small', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-searchbar--searchbar-small');
  await page.waitForSelector('.dictu-searchbar', { timeout: 5000 });

  await expect(page).toHaveScreenshot('searchbar-small.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Table Component
// ============================================================================
test('Table - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-table--default-table');
  await page.waitForSelector('.dictu-table', { timeout: 5000 });

  await expect(page).toHaveScreenshot('table-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Table - Row Header', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-table--row-header-table');
  await page.waitForSelector('.dictu-table', { timeout: 5000 });

  await expect(page).toHaveScreenshot('table-row-header.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Table - Responsive', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-table--responsive-table');
  await page.waitForSelector('.dictu-table', { timeout: 5000 });

  await expect(page).toHaveScreenshot('table-responsive.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Table - Accent Cell', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-table--accent-cell');
  await page.waitForSelector('.dictu-table', { timeout: 5000 });

  await expect(page).toHaveScreenshot('table-accent-cell.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Text Input Component
// ============================================================================
test('Text Input - Default', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-default');
  await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

  await expect(page).toHaveScreenshot('text-input-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Text Input - Small', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-small');
  await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

  await expect(page).toHaveScreenshot('text-input-small.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Text Input - Error', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-error');
  await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

  await expect(page).toHaveScreenshot('text-input-error.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

test('Text Input - Read Only', async ({ page }) => {
  await page.goto('/iframe.html?id=componenten-form-elements-text-input--text-input-read-only');
  await page.waitForSelector('.dictu-text-input', { timeout: 5000 });

  await expect(page).toHaveScreenshot('text-input-readonly.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: false,
  });
});

// ============================================================================
// Information Page Example
// ============================================================================
test('Information Page - Default', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 2000 });
  await page.goto('/iframe.html?id=voorbeelden-informatiepagina--information-page');
  await page.waitForSelector('.dictu-section', { timeout: 5000 });

  await expect(page).toHaveScreenshot('information-page-default.png', {
    maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
    animations: 'disabled',
    fullPage: true,
  });
});
