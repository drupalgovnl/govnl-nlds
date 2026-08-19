import readme from './README.md?raw';
import '@dictu/icon/dist/index.css';
import './dist/index.css';
import { LanguageSwitcher } from './language-switcher.component';

export default {
  args: {
    current: 'Nederlands',
    expanded: true,
    items: [
      {
        value: 'nl',
        language: 'Nederlands',
        translation: 'Nederlands',
      },
      {
        value: 'en',
        language: 'English',
        translation: 'Engels',
      },
      {
        value: 'de',
        language: 'Deutsch',
        translation: 'Duits',
      },
      {
        value: 'fr',
        language: 'Français',
        translation: 'Frans',
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
