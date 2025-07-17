import readme from './README.md?raw';
import './dist/index.css';

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
  render: ({ items }) => {
    const classes = ['dictu-link-list'];
    const linkClasses = ['dictu-link', 'dictu-link-list__link'];
    const $linkList = document.createElement('ul');

    for (const item in items) {
      const itemObj = items[item];
      const $itemWrapper = document.createElement('li');
      const $itemLink = document.createElement('a');

      $itemWrapper.classList.add('dictu-link-list__item');
      $itemLink.classList.add(...linkClasses);
      $itemLink.innerHTML = `<span class="dictu-icon" role="presentation" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/></svg></span>${itemObj.label}`;
      $itemLink.href = itemObj.href;
      $itemWrapper.appendChild($itemLink);
      $linkList.appendChild($itemWrapper);
    }

    $linkList.classList.add(...classes);

    return $linkList;
  },
  tags: ['autodocs'],
  title: 'Componenten/Link List',
};

export const LinkList = {
  args: {
    items: {
      item1: {
        label: 'Contact',
        href: 'dictu.nl',
      },
      item2: {
        label: 'Colofon',
        href: 'dictu.nl',
      },
      item3: {
        label: 'Toegankelijkheid',
        href: 'dictu.nl',
      },
    },
  },
};
