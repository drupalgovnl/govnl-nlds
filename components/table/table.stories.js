import './dist/index.css';
import '@dictu/icon/dist/index.css';
import { Table } from './table';

export default {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'column-header',
            value: 'Column 1',
          },
          {
            purpose: 'column-header',
            value: 'Column 2',
          },
          {
            purpose: 'column-header',
            value: 'Column 3',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'cell',
            value: '20',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'cell',
            value: '20',
          },
          {
            purpose: 'cell',
            value: '400',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'cell',
            value: '35',
          },
          {
            purpose: 'cell',
            value: '50',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel',
  },
  argTypes: {
    data: {
      control: 'string',
      description: 'De data van de tabel',
    },
    caption: {
      control: 'string',
      description: 'De caption van een tabel',
    },
  },
  component: Table,
  tags: ['wip'],
  title: 'Componenten/Table',
};

export const DefaultTable = {};

export const RowHeaderTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'column-header',
            value: '',
          },
          {
            purpose: 'column-header',
            value: 'Column 1',
          },
          {
            purpose: 'column-header',
            value: 'Column 2',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 1',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 2',
          },
          {
            purpose: 'cell',
            value: '400',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 3',
          },
          {
            purpose: 'cell',
            value: '50',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 4',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '50',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met row headers',
  },
};

export const FootTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'column-header',
            value: '',
          },
          {
            purpose: 'column-header',
            value: 'Column 1',
          },
          {
            purpose: 'column-header',
            value: 'Column 2',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 1',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 2',
          },
          {
            purpose: 'cell',
            value: '400',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 3',
          },
          {
            purpose: 'cell',
            value: '50',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 4',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '50',
          },
        ],
      },
      {
        section: 'foot',
        data: [
          {
            purpose: 'row-header',
            value: 'totaal',
          },
          {
            purpose: 'cell',
            value: '650',
          },
          {
            purpose: 'cell',
            value: '950',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met een footer',
  },
};

export const ColspanTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'column-header',
            value: '',
          },
          {
            purpose: 'column-header',
            value: 'Column 1',
          },
          {
            purpose: 'column-header',
            value: 'Column 2',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 1',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 2',
          },
          {
            purpose: 'cell',
            value: '400',
            colspan: 2,
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 3',
          },
          {
            purpose: 'cell',
            value: '50',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 4',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '50',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met een colspan',
  },
};

export const RowspanTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'column-header',
            value: '',
          },
          {
            purpose: 'column-header',
            value: 'Column 1',
          },
          {
            purpose: 'column-header',
            value: 'Column 2',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 1',
          },
          {
            purpose: 'cell',
            value: '100',
            rowspan: 2,
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 2',
          },
          {
            purpose: 'cell',
            value: '400',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 3',
          },
          {
            purpose: 'cell',
            value: '50',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'row-header',
            value: 'Bedrag 4',
          },
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '50',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met een rowspan',
  },
};
