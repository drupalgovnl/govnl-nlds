import readme from './README.md?raw';
import './dist/index.css';
import { NavigationBar } from './navigation-bar.component';

export default {
  args: {
    items: [
      {
        link: 'https://www.dictu.nl',
        title: 'Dienst ICT Uitvoering',
      },
      {
        link: 'https://www.ez.nl',
        title: 'Ministerie van Economische Zaken',
      },
      {
        link: 'https://www.rijksoverheid.nl',
        title: 'Rijksoverheid',
      },
    ],
  },
  argTypes: {
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
  component: NavigationBar,
  tags: ['wip'],
  title: 'Componenten/Navigation Bar',
};

export const NavigationBarDefault = {};
