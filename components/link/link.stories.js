import readme from './README.md?raw';
import './dist/index.css';
import { Link } from './link.component';

export default {
  args: {
    href: 'dictu.nl',
    classNames: '',
  },
  argTypes: {
    content: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    classNames: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: Link,
  tags: ['autodocs'],
  title: 'Componenten/Link',
};

export const DefaultLink = {
  args: {
    content: 'Dit is een link',
  },
};
