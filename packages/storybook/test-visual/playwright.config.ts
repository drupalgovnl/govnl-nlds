import { defineConfig, devices } from '@playwright/test';

// Check if running in CI environment
const isCI = process.env.CI === 'true' || process.env.CI === '1';

/**
 * Playwright Test configuration for visual regression testing
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.test.ts'],

  // Folder for test artifacts such as screenshots, videos, traces
  outputDir: './test-results',

  // Snapshot path template (includes {platform} to separate macOS/Linux baselines)
  snapshotPathTemplate: '{testDir}/../__screenshots__/{platform}/{arg}{ext}',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!isCI,

  // Retry on CI only
  retries: isCI ? 2 : 0,

  // Reporter configuration
  reporter: [['list'], ['html', { outputFolder: './test-report', open: 'never' }]],

  // Shared settings for all projects
  use: {
    // Base URL for navigation
    baseURL: 'http://localhost:6006',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Screenshot settings
    screenshot: 'only-on-failure',
  },

  // Configure projects for browsers
  projects: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        // Viewport size for consistent screenshots
        viewport: { width: 1280, height: 720 },
      },
    },
  ],

  // Run your local dev server before starting the tests
  webServer: {
    command: 'npm run storybook',
    url: 'http://localhost:6006',
    reuseExistingServer: !isCI,
    timeout: 120 * 1000,
  },
});
