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
            purpose: 'cell',
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
            purpose: 'cell',
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
            purpose: 'cell',
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
            purpose: 'cell',
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

export const AlignEndTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'cell',
            value: '',
          },
          {
            purpose: 'column-header',
            value: 'Column 1',
          },
          {
            purpose: 'column-header',
            value: 'Column 2',
            align: 'end',
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
            align: 'end',
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
            align: 'end',
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
            align: 'end',
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
            align: 'end',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met cellen die rechts uitgelijnd zijn',
  },
};

export const DoubleColumnHeaderTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'cell',
            value: '',
          },
          {
            purpose: 'column-header',
            value: 'Overkoepelende header tekst',
            colspan: 2,
          },
        ],
      },
      {
        section: 'head',
        data: [
          {
            purpose: 'cell',
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
            value: 'Bedrag 2',
          },
          {
            purpose: 'cell',
            value: '200',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met twee column headers',
  },
};

export const DoubleRowHeaderTable = {
  args: {
    data: [
      {
        section: 'head',
        data: [
          {
            purpose: 'cell',
            value: '',
            colspan: 2,
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
            value: 'Overkoepelende row header',
            rowspan: 2,
          },
          {
            purpose: 'row-header',
            value: 'Bedrag 1',
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
            value: 'Bedrag 2',
          },
          {
            purpose: 'cell',
            value: '200',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
    ],
    caption: 'Dit is een tabel met twee row headers',
  },
};

export const ResponsiveTable = {
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
          {
            purpose: 'column-header',
            value: 'Column 4',
          },
          {
            purpose: 'column-header',
            value: 'Column 5',
          },
          {
            purpose: 'column-header',
            value: 'Column 6',
          },
          {
            purpose: 'column-header',
            value: 'Column 7',
          },
          {
            purpose: 'column-header',
            value: 'Column 8',
          },
          {
            purpose: 'column-header',
            value: 'Column 9',
          },
          {
            purpose: 'column-header',
            value: 'Column 10',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'cell',
            value: '100',
          },
          {
            purpose: 'cell',
            value: '200',
          },
          {
            purpose: 'cell',
            value: '300',
          },
          {
            purpose: 'cell',
            value: '400',
          },
          {
            purpose: 'cell',
            value: '500',
          },
          {
            purpose: 'cell',
            value: '600',
          },
          {
            purpose: 'cell',
            value: '700',
          },
          {
            purpose: 'cell',
            value: '800',
          },
          {
            purpose: 'cell',
            value: '900',
          },
          {
            purpose: 'cell',
            value: '1000',
          },
        ],
      },
      {
        section: 'body',
        data: [
          {
            purpose: 'cell',
            value: '10',
          },
          {
            purpose: 'cell',
            value: '20',
          },
          {
            purpose: 'cell',
            value: '30',
          },
          {
            purpose: 'cell',
            value: '40',
          },
          {
            purpose: 'cell',
            value: '50',
          },
          {
            purpose: 'cell',
            value: '60',
          },
          {
            purpose: 'cell',
            value: '70',
          },
          {
            purpose: 'cell',
            value: '80',
          },
          {
            purpose: 'cell',
            value: '90',
          },
          {
            purpose: 'cell',
            value: '100',
          },
        ],
      },
    ],
    caption: 'Dit is een responsive tabel',
    responsive: true,
  },
};
