import readme from './README.md?raw';
import '@dictu/design-tokens/dist/link.css';
import './dist/index.css';

export default {
  args: {
    href: 'dictu.nl'
  },
  argTypes: {
    innerHTML: {
      control: 'text',
    },
    href: {
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
  render: ({ innerHTML, href }) => {
    const classes = ['dictu-link'];
    const $link = document.createElement('a');

    $link.innerText = innerHTML;
    $link.href = href;
    $link.classList.add(...classes);

    return $link;
  },
  tags: ['autodocs'],
  title: 'Componenten/Link',
};

export const Link = {
  args: {
    innerHTML: 'Dit is een link'
  },
};
