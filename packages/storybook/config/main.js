import { NodePackageImporter } from 'sass';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const config = {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('storybook-addon-tag-badges'),
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    builder: getAbsolutePath('@storybook/builder-vite'),
  },

  framework: {
    name: getAbsolutePath('@storybook/html'),
  },

  staticDirs: [{ from: '../../../proprietary/assets/src', to: '/assets' }],
  stories: [
    '../src/**/*.mdx',
    '../../../components/**/*stories.@(js|jsx|ts|tsx|mdx)',
    '../../../examples/**/*stories.@(js|jsx|ts|tsx|mdx)',
  ],
  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      base: process.env.BASE_URL ?? '/',
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

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
