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
      },
      {
        label: '3',
        href: '#',
      },
      {
        label: '4',
        href: '#',
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-6 -6 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" /></svg>',
    },
    next: {
      label: 'Volgende',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-6 -6 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" /></svg>',
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

export const PaginationWithoutEllipsis = {
  args: {
    pages: [
      {
        label: '1',
        href: '#',
      },
      {
        label: '2',
      },
      {
        label: '3',
        href: '#',
      },
    ],
    previous: {
      label: 'Vorige',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-6 -6 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" /></svg>',
    },
    next: {
      label: 'Volgende',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-6 -6 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" /></svg>',
    },
  },
};
