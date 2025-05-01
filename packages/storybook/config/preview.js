import '@dictu/design-tokens/dist/index.css';
import { BADGE, BADGE_LOCATION } from '@geometricpanda/storybook-addon-badges';

export const BADGES = {
  ...BADGE,
  WIP: 'wip',
  LATEST: 'latest'
};

const preview = {
  parameters: {
    controls: { expanded: false },
    options: {
      panelPosition: 'bottom',
      storySort: {
        order: [
          'Introductie',
          'Design Tokens',
          ['Design Tokens', 'Core', 'Common'],
          'Components',
          ['Docs', '*', 'Design Tokens'],
          '*',
          'Informatie',
        ],
      },
    },
    badgesConfig: {
      [BADGES.WIP]: {
        styles: {
          backgroundColor: '#d52b1e',
          borderColor: '#d52b1e',
          color: '#ffffff',
          textTransform: 'uppercase',
        },
        location: [BADGE_LOCATION.TOOLBAR],
        title: 'Work in progress',
        tooltip: 'Work in progress',
      },
      [BADGES.PRODUCTION]: {
        styles: {
          backgroundColor: '#39870c',
          borderColor: '#39870c',
          color: '#ffffff',
          textTransform: 'uppercase',
        },
        location: [BADGE_LOCATION.TOOLBAR],
        title: 'Production',
        tooltip: 'Is beschikbaar als component',
      },
    },
  },
};

export default preview;
