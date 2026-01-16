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
    expanded: false,
    isMobile: false,
    menuId: 'default-menu',
  },
  argTypes: {
    items: {
      control: 'array',
    },
    expanded: {
      control: 'boolean',
    },
    isMobile: {
      control: 'boolean',
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

export const NavigationBarDefaultMobile = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  args: {
    expanded: false,
    isMobile: true,
    menuId: 'default-mobile-menu',
  },
};

export const NavigationBarDefaultMobileExpanded = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  args: {
    expanded: true,
    isMobile: true,
    menuId: 'default-mobile-menu',
  },
};

export const NavigationBarSubmenu = {
  args: {
    items: [
      {
        link: 'https://www.dictu.nl',
        title: 'Dienst ICT Uitvoering',
      },
      {
        title: 'Submenu',
        children: [
          {
            link: '#',
            title: 'Submenu item 1',
          },
          {
            link: '#',
            title: 'Submenu item 2',
          },
          {
            link: '#',
            title: 'Submenu item 3',
          },
          {
            link: '#',
            title: 'Submenu item 4',
          },
        ],
      },
      {
        link: 'https://www.rijksoverheid.nl',
        title: 'Rijksoverheid',
      },
    ],
    expanded: true,
  },
};

export const NavigationBarSubmenuOpen = {
  args: {
    items: [
      {
        link: 'https://www.dictu.nl',
        title: 'Dienst ICT Uitvoering',
      },
      {
        title: 'Submenu',
        expanded: true,
        children: [
          {
            href: '#',
            label: 'Subpagina 1',
          },
          {
            href: '#',
            label: 'Subpagina 2',
          },
          {
            href: '#',
            label: 'Subpagina 3',
          },
          {
            href: '#',
            label: 'Subpagina 4',
          },
        ],
      },
      {
        link: 'https://www.rijksoverheid.nl',
        title: 'Rijksoverheid',
      },
    ],
    expanded: true,
  },
  decorators: [
    Story => {
      return `<div>${Story()}</div>`;
    },
  ],
};
