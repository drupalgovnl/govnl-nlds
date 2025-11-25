import readme from './README.md?raw';
import './dist/index.css';

export default {
  args: {
    href: 'dictu.nl',
    classNames: '',
  },
  argTypes: {
    innerHTML: {
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

export const Link = {
  args: {
    innerHTML: 'Dit is een link',
  },
};
