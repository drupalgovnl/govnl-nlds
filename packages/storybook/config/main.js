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

    const merged = mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            pkgImporter: new NodePackageImporter(),
          },
        },
      },
    });

    // The Linux screenshot container runs Storybook once. Watching the repo
    // over the Docker file share rereads the tree for the whole test run.
    if (process.env.STORYBOOK_DISABLE_WATCH === '1') {
      merged.server ??= {};
      merged.server.watch = null;
    }

    return merged;
  },
};

export default config;
