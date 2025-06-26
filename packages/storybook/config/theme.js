import { create } from 'storybook/theming/create';

export default create({
  base: 'light',

  // UI
  appBg: 'white',
  appContentBg: `transparent`,

  // Typography
  fontBase:
    '"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  fontCode: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  brandTitle: 'DICTU Design System',
  brandTarget: '_self',
  brandImage: 'https://www.dictu.nl/themes/custom/dictu/logo.svg',
});
