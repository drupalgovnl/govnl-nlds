import './dist/index.css';
import '@dictu/link/dist/index.css';
import { Pagination } from './pagination.component';

export default {
  args: {
    size: 'default',
    pages: [
      {
        label: '1',
        href: '#',
      },
      {
        label: '2',
        href: '#',
      },
      {
        label: '3',
        href: '#',
      },
      {
        label: '4',
      },
      {
        label: '5',
        href: '#',
      },
      {
        label: '6',
        href: '#',
      },
      {
        label: '7',
        href: '#',
      },
      {
        label: '8',
        href: '#',
      },
      {
        label: '9',
        href: '#',
      },
    ],
    previous: {
      label: 'Vorige',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" /></svg>',
    },
    next: {
      label: 'Volgende',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" /></svg>',
    },
  },
  argTypes: {
    pages: {
      control: 'object',
      description: 'De pages in de pagination',
    },
    size: {
      control: 'radio',
      description: 'afmeting van de pagination',
      options: ['default', 'small'],
    },
  },
  component: Pagination,
  tags: ['wip'],
  title: 'Componenten/Pagination',
};

export const PaginationDefault = {};

export const PaginationSmall = {
  args: {
    size: 'small',
  },
};
