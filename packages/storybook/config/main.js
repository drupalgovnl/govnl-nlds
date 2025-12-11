// This file has been automatically migrated to valid ESM format by Storybook.
import { NodePackageImporter } from 'sass';

const config = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', 'storybook-addon-tag-badges'],

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    builder: '@storybook/builder-vite',
  },

  framework: {
    name: '@storybook/html-vite',
  },

  staticDirs: [{ from: '../../../proprietary/assets/src', to: '/assets' }],
  stories: [
    '../src/**/*.mdx',
    '../../../components/**/*stories.@(js|jsx|ts|tsx)',
    '../../../components/**/*.mdx',
    '../../../examples/**/*stories.@(js|jsx|ts|tsx)',
  ],
  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      base: process.env.BASE_URL ?? '/',
      build: {
        rollupOptions: {
          external: ['@storybook/addon-docs/blocks'],
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            pkgImporter: new NodePackageImporter(),
          },
        },
      },
    });
  },
};

export default config;
