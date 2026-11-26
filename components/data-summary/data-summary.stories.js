import '@dictu/button/dist/index.css';
import '@dictu/heading/dist/index.css';
import '@dictu/link-as-button/dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import './dist/index.css';
import { DataSummary } from './data-summary.component';

const applicantItems = [
  { label: 'Voornaam:', value: 'Marieke' },
  { label: 'Achternaam:', value: 'de Boer' },
  { label: 'Geslacht:', value: 'Vrouw' },
  { label: 'E-mailadres:', value: 'marieke.deboer@example.nl' },
  { label: 'Telefoon:', value: '06-12345678' },
];

const changeAction = {
  href: '#',
  label: 'Wijzigen',
};

export default {
  args: {
    headingAppearance: 4,
    headingLevel: 2,
    items: applicantItems,
    title: 'Gegevens aanvrager',
  },
  argTypes: {
    action: {
      control: 'object',
      description: 'Optionele actie in de kop, bijvoorbeeld Wijzigen. Met href wordt het een link, anders een button.',
    },
    headingAppearance: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Visueel kopniveau. De standaard volgt het ontwerp (niveau 4).',
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Semantisch kopniveau van de titel.',
    },
    items: {
      control: 'object',
      description:
        'Lijst van eigenschappen. Een item heeft label, value (string of een lijst van regels) en een optionele action.',
    },
    step: {
      control: 'text',
      description: 'Optioneel stapnummer voor de titel.',
    },
    title: {
      control: 'text',
      description: 'Titel van de samenvatting.',
    },
  },
  component: DataSummary,
  tags: ['wip'],
  title: 'Componenten/Data summary',
};

export const Default = {};

export const WithStep = {
  args: {
    step: 1,
  },
};

export const WithStepAndAction = {
  args: {
    action: changeAction,
    step: 1,
  },
};

export const WithItemAction = {
  args: {
    items: [
      { label: 'Voornaam:', value: 'Marieke' },
      {
        label: 'E-mailadres:',
        value: 'marieke.deboer@example.nl',
        action: changeAction,
      },
      { label: 'Telefoon:', value: '06-12345678' },
    ],
  },
};

export const MultilineValue = {
  args: {
    title: 'Schade',
    items: [
      {
        label: 'Welke schade u ontdekt heeft:',
        value: 'Scheuren in de muren',
      },
      {
        label: 'Bestanden:',
        value: ['IMG-2432.jpg', 'Offerte_M-deBoer.pdf'],
      },
    ],
  },
};
