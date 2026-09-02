import readme from './README.md?raw';
import '@dictu/icon/dist/index.css';
import './dist/index.css';
import { LanguageSwitcher } from './language-switcher.component';

export default {
  args: {
    current: 'Nederlands',
    expanded: false,
    items: [
      {
        link: '/de/huidige-pagina',
        value: 'de',
        language: 'Deutsch',
        translation: 'Duits',
      },
      {
        link: '/en/huidige-pagina',
        value: 'en',
        language: 'English',
        translation: 'Engels',
      },
      {
        link: '/fr/huidige-pagina',
        value: 'fr',
        language: 'Français',
        translation: 'Frans',
      },
      {
        link: '/nl/huidige-pagina',
        value: 'nl',
        language: 'Nederlands',
        translation: 'Nederlands',
      },
    ],
  },
  argTypes: {
    current: {
      options: ['Nederlands', 'English', 'Deutsch', 'Français'],
      control: { type: 'select' },
    },
    expanded: {
      control: 'boolean',
    },
    items: {
      control: 'array',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  component: LanguageSwitcher,
  tags: ['wip'],
  title: 'Componenten/Language switcher',
};

export const DefaultLanguageSwitcher = {};

export const LanguageSwitcherExpanded = {
  args: {
    expanded: true,
  },
};
