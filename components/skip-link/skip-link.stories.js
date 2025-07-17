import readme from './README.md?raw';
import './dist/index.css';

export default {
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
    const classes = ['dictu-skip-link'];
    const $skipLink = document.createElement('a');

    $skipLink.innerText = innerHTML;
    $skipLink.href = href;
    $skipLink.classList.add(...classes);

    return $skipLink;
  },
  tags: ['autodocs'],
  title: 'Componenten/Skip Link',
};

export const SkipLink = {
  args: {
    innerHTML: 'Ga direct naar inhoud',
    href: '#content',
  },
};
