import readme from './README.md?raw';
import '@dictu/icon/dist/index.css';
import '@dictu/language-switcher/dist/index.css';
import '@dictu/link/dist/index.css';
import '@dictu/logo/dist/index.css';
import '@dictu/page-container/dist/index.css';
import './dist/index.css';
import { PageHeader } from './page-header.component';
import { LanguageSwitcher } from '../language-switcher/language-switcher.component';

export default {
  args: {},
  argTypes: {
    before: {
      control: false,
      description: 'HTML element of string voor het logo.',
    },
    after: {
      control: false,
      description: 'HTML element of string na het logo.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  component: PageHeader,
  tags: [],
  title: 'Componenten/Page Header',
};

export const PageHeaderDefault = {};

export const PageHeaderLanguageSwitcher = {
  args: {
    languageSwitcherExpanded: false,
  },
  argTypes: {
    languageSwitcherExpanded: {
      name: 'language switcher expanded',
      control: 'boolean',
      description: 'Zet de Language Switcher open of dicht.',
    },
  },
  render: args => {
    const languageSwitcher = new LanguageSwitcher({
      current: 'Nederlands',
      expanded: args.languageSwitcherExpanded,
      align: 'right',
      items: [
        { link: '/de/huidige-pagina', value: 'de', language: 'Deutsch', translation: 'Duits' },
        { link: '/en/huidige-pagina', value: 'en', language: 'English', translation: 'Engels' },
        { link: '/fr/huidige-pagina', value: 'fr', language: 'Français', translation: 'Frans' },
        { link: '/nl/huidige-pagina', value: 'nl', language: 'Nederlands', translation: 'Nederlands' },
      ],
    });

    return PageHeader({
      ...args,
      after: languageSwitcher,
    });
  },
};
