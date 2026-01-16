import readme from './README.md?raw';
import './dist/index.css';
import { LinkList } from './link-list.component';

export default {
  argTypes: {
    items: {
      control: 'object',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  component: LinkList,
  tags: ['autodocs'],
  title: 'Componenten/Link List',
};

export const DefaultLinkList = {
  args: {
    items: [
      {
        label: 'Contact',
        href: 'dictu.nl',
      },
      {
        label: 'Colofon',
        href: 'dictu.nl',
      },
      {
        label: 'Toegankelijkheid',
        href: 'dictu.nl',
      },
    ],
  },
};
