import { addons } from 'storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme: theme,
  tagBadges: [
    {
      tags: 'wip',
      badge: {
        text: 'WIP',
        style: {
          backgroundColor: '#d52b1e',
          color: '#fff',
        },
      },
    },
  ],
});
