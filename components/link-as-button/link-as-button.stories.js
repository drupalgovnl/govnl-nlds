import readme from './README.md?raw';
import './dist/index.css';
import { LinkAsButton } from './link-as-button.component';

export default {
  args: {
    href: 'dictu.nl',
    classNames: '',
    external: false,
  },
  argTypes: {
    content: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
    iconLabel: {
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
  render: LinkAsButton,
  title: 'Componenten/Link as Button',
};

export const DefaultLinkAsButton = {
  args: {
    content: 'Dit is geen button',
  },
};
