import readme from './README.md?raw';
import './dist/index.css';
import '@dictu/grid/dist/index.css';
import '@dictu/icon/dist/index.css';
import '@dictu/utility-display/dist/index.css';
import { NavigationBar } from './navigation-bar.component';

const defaultItems = [
  { link: 'https://www.dictu.nl', title: 'Dienst ICT Uitvoering' },
  { link: 'https://www.ez.nl', title: 'Ministerie van Economische Zaken' },
  { link: 'https://www.rijksoverheid.nl', title: 'Rijksoverheid' },
];

const generateSubPages = count =>
  Array.from({ length: count }, (_, i) => ({
    href: '#',
    label: `Subpagina ${i + 1}`,
  }));

const submenuChildren = generateSubPages(4);

const getBigMenuChildren = (expandFirstSection = false) => [
  { href: '<nolink>', label: 'Subsectie A', ...(expandFirstSection && { expanded: true }) },
  ...generateSubPages(6),
  { href: '<nolink>', label: 'Subsectie B' },
  ...generateSubPages(6),
  { href: '<nolink>', label: 'Subsectie C' },
  ...generateSubPages(6),
  { href: '<nolink>', label: 'Subsectie D' },
  ...generateSubPages(6),
];

const withMenu = menuItem => [
  { link: 'https://www.dictu.nl', title: 'Dienst ICT Uitvoering' },
  menuItem,
  { link: 'https://www.rijksoverheid.nl', title: 'Rijksoverheid' },
];

export default {
  args: {
    items: defaultItems,
    expanded: false,
    isMobile: false,
    menuId: 'default-menu',
  },
  argTypes: {
    items: { control: 'array' },
    expanded: { control: 'boolean' },
    isMobile: { control: 'boolean' },
    isBigMenu: { control: 'boolean' },
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

export const NavigationBarMobile = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    expanded: false,
    isMobile: true,
    menuId: 'default-mobile-menu',
  },
};

export const NavigationBarMobileExpanded = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    expanded: true,
    isMobile: true,
    menuId: 'default-mobile-menu',
  },
};

export const NavigationBarMobileExpandedSubmenu = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    items: withMenu({
      title: 'Submenu',
      id: 'submenu-1',
      expanded: true,
      children: submenuChildren,
    }),
    expanded: true,
    isMobile: true,
    menuId: 'default-mobile-menu-submenu',
  },
};

export const NavigationBarSubmenu = {
  args: {
    items: withMenu({
      title: 'Submenu',
      id: 'submenu-1',
      children: submenuChildren,
    }),
    expanded: true,
  },
};

export const NavigationBarSubmenuOpen = {
  args: {
    items: withMenu({
      title: 'Submenu',
      id: 'submenu-1',
      expanded: true,
      children: submenuChildren,
    }),
    expanded: true,
  },
};

export const NavigationBarBigMenu = {
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: false,
      isBigMenu: true,
      children: getBigMenuChildren(false),
    }),
    expanded: false,
  },
};

export const NavigationBarBigMenuOpen = {
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: getBigMenuChildren(false),
    }),
    expanded: true,
  },
};

export const NavigationBarMobileBigMenuOpen = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: getBigMenuChildren(false),
    }),
    expanded: true,
    isMobile: true,
  },
};

export const NavigationBarMobileBigMenuOpenExpanded = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: getBigMenuChildren(true),
    }),
    expanded: true,
    isMobile: true,
  },
};
