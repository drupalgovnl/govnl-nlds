import './dist/index.css';
import '@dictu/link/dist/index.css';
import '@dictu/icon/dist/index.css';
import { DataSummary } from './data-summary.component';

const applicantItems = [
  { key: 'Voornaam', value: 'Marieke' },
  { key: 'Achternaam', value: 'de Boer' },
  { key: 'Geslacht', value: 'Vrouw' },
  { key: 'E-mailadres', value: 'marieke.deboer@example.nl' },
  { key: 'Telefoon', value: '06-12345678' },
];

export default {
  args: {
    appearance: 'column',
    items: [
      { key: 'Soort', value: 'Reuzenpanda' },
      { key: 'Rijk', value: 'Animalia (Dieren)' },
      { key: 'Klasse', value: 'Mammalia (Zoogdieren)' },
    ],
  },
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['column', 'row'],
      description: 'Zet de eigenschap boven de waarde, of ernaast op brede schermen.',
    },
    items: {
      control: 'object',
      description:
        'Lijst van eigenschappen. Een item heeft key, value (string of een lijst van regels) en een optionele action.',
    },
  },
  component: DataSummary,
  tags: ['wip'],
  title: 'Componenten/Data summary',
};

export const Column = {};

export const Row = {
  args: {
    appearance: 'row',
    items: applicantItems,
  },
};

export const WithAction = {
  args: {
    appearance: 'row',
    items: [
      { key: 'Soort', value: 'Reuzenpanda' },
      {
        key: 'Rijk',
        value: 'Animalia (Dieren)',
        action: {
          href: '#',
          content: 'Bekijk alle dieren',
        },
      },
      { key: 'Klasse', value: 'Mammalia (Zoogdieren)' },
    ],
  },
};

export const MultilineValue = {
  args: {
    appearance: 'row',
    items: [
      {
        key: 'Welke schade u ontdekt heeft',
        value: 'Scheuren in de muren',
      },
      {
        key: 'Bestanden',
        value: ['IMG-2432.jpg', 'Offerte_M-deBoer.pdf'],
      },
    ],
  },
};
