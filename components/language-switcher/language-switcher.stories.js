import readme from './README.md?raw';
import '@dictu/icon/dist/index.css';
import './dist/index.css';
import { LanguageSwitcher } from './language-switcher.component';

export default {
  args: {
    selected: 'Nederlands',
    expanded: true,
    items: ['Nederlands', 'English (Engels)', 'Deutsch (Duits)', 'Français (Frans)'],
  },
  argTypes: {
    selected: {
      control: 'text',
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
