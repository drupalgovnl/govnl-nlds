import readme from './README.md?raw';
import './dist/index.css';
import { LinkAsButton } from './link-as-button.component';

export default {
  args: {
    href: 'dictu.nl',
    classNames: '',
    variant: 'primary-action',
    content: 'Dit is geen button',
  },
  argTypes: {
    content: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ['primary-action', 'secondary-action'],
      description: 'De variant van de link as button',
      table: {
        type: {
          summary: 'primary-action | secondary-action',
        },
        defaultValue: {
          summary: 'primary-action',
        },
      },
    },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'De afmeting van de link as button',
      table: {
        type: {
          summary: 'default | small',
        },
        defaultValue: {
          summary: 'default',
        },
      },
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

export const DefaultLinkAsButton = {};

export const SecondaryLinkAsButton = {
  args: {
    variant: 'secondary-action',
  },
};

export const SmallLinkAsButton = {
  args: {
    size: 'small',
  },
};
