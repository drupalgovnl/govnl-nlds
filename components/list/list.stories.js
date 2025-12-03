import { List } from './list.component';
import './dist/index.css';
import '@dictu/icon/dist/index.css';

const defaultItems = [
  'Niveau 1 item 1',
  {
    label: 'Niveau 1 item 2',
    children: [
      'Niveau 2 item 1',
      'Niveau 2 item 2',
      {
        label: 'Niveau 2 item 3',
        children: ['Niveau 3 item 1', 'Niveau 3 item 2'],
      },
    ],
  },
  'Niveau 1 item 3',
];

const icon = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H12.5858L8.29289 1.70711C7.90237 1.31658 7.90237 0.683417 8.29289 0.292893Z" fill="#0F172A"/>
</svg>`;

export default {
  title: 'Componenten/List',
  component: List,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['unordered', 'ordered', 'icon'],
      description: 'Het type lijst.',
      table: {
        defaultValue: { summary: 'unordered' },
      },
    },
    items: {
      control: 'object',
      description: 'De items in de lijst. Kan genest zijn.',
    },
    icon: {
      control: 'text',
      description: 'SVG icoon voor de icon variant.',
      if: { arg: 'type', eq: 'icon' },
    },
  },
  tags: ['wip'],
};

export const Unordered = {
  args: {
    type: 'unordered',
    items: defaultItems,
  },
};

export const Ordered = {
  args: {
    type: 'ordered',
    items: defaultItems,
  },
};

export const IconList = {
  args: {
    type: 'icon',
    items: defaultItems,
    icon: icon,
  },
};
