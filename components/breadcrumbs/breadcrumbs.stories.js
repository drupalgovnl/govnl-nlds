import './dist/index.css';
import '@dictu/link/dist/index.css';
import '@dictu/icon/dist/index.css';
import { Breadcrumbs } from './breadcrumbs.component';

const meta = {
  args: {
    crumbs: [{ label: 'Home', link: '/' }, { label: 'Category 1', link: '/category1' }, { label: 'Subcategory' }],
    classNames: [],
    isMobile: false,
  },
  argTypes: {
    crumbs: {
      type: 'object',
      description: 'An array of breadcrumb objects',
    },
    classNames: {
      type: 'array',
      description: 'Additional classes for the breadcrumbs component',
    },
    isMobile: {
      type: 'boolean',
      description: 'Flag to render mobile version',
    },
  },
  component: Breadcrumbs,
  tags: ['wip'],
  title: 'Componenten/Breadcrumbs',
};

export default meta;

export const DefaultBreadcrumbs = {
  args: {
    crumbs: [{ label: 'Home', link: '/' }, { label: 'Pagina', link: '#' }, { label: 'Subpagina' }],
  },
};

export const LongBreadcrumbs = {
  args: {
    crumbs: [
      { label: 'Home', link: '/' },
      { label: 'Pagina', link: '#' },
      { label: 'Subpagina', link: '#' },
      { label: 'Onderwerp', link: '#' },
      { label: 'Details' },
    ],
  },
};

export const MobileBreadcrumbs = {
  args: {
    crumbs: [{ label: 'Home', link: '/' }, { label: 'Pagina', link: '#' }, { label: 'Subpagina' }],
    isMobile: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
};
