const config = {
  addons: [
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    '@etchteam/storybook-addon-status',
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: ['../../../proprietary/assets/src'],
  stories: ['../../../components/**/*stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
};

export default config;
