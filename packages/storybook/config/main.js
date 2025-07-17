import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
const config = {
  addons: [getAbsolutePath('@storybook/addon-a11y'), getAbsolutePath('@storybook/addon-docs')],

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    builder: getAbsolutePath('@storybook/builder-vite'),
  },

  framework: {
    name: getAbsolutePath('@storybook/html'),
    options: {},
  },

  staticDirs: ['../../../proprietary/assets/src'],
  stories: [
    '../src/**/*.mdx',
    '../../../components/**/*stories.@(js|jsx|ts|tsx)',
    '../../../examples/**/*stories.@(js|jsx|ts|tsx)',
  ],
  docs: {
    autodocs: true,
  },
};

export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
