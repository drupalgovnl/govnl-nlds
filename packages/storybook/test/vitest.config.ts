import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

// Run headless in CI environments, with visible browser locally
const isCI = process.env.CI === 'true' || process.env.CI === '1';

export default defineConfig({
  plugins: [
    storybookTest({
      // Path to your Storybook config directory (relative to packages/storybook where vitest runs)
      configDir: './config',
    }),
  ],
  test: {
    name: 'storybook',
    // Exclude MDX documentation files from smoke tests
    exclude: ['**/*.mdx'],
    browser: {
      enabled: true,
      headless: isCI,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    setupFiles: ['./test/vitest.setup.ts'],
  },
});
