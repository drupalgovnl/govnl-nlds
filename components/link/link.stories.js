import readme from './README.md?raw';
import './dist/index.css';
import { Link } from './link.component';

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
    external: {
      control: 'boolean',
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
  render: Link,
  title: 'Componenten/Link',
};

export const DefaultLink = {
  args: {
    content: 'Dit is een link',
  },
};

export const IconLink = {
  args: {
    content: 'Dit is een link met icoon',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" /></svg>',
    iconLabel: '',
  },
};

export const ExternalLink = {
  args: {
    content: 'Dit is een externe link',
    external: true,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C11.4477 2 11 1.55228 11 1C11 0.447715 11.4477 0 12 0H17C17.5523 0 18 0.447715 18 1V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6V3.41421L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L14.5858 2H12ZM0 6C0 4.34315 1.34315 3 3 3H8C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H3C2.44772 5 2 5.44772 2 6V15C2 15.5523 2.44772 16 3 16H12C12.5523 16 13 15.5523 13 15V10C13 9.44771 13.4477 9 14 9C14.5523 9 15 9.44771 15 10V15C15 16.6569 13.6569 18 12 18H3C1.34315 18 0 16.6569 0 15V6Z" /></svg>',
    iconLabel: '(Externe link)',
  },
};
