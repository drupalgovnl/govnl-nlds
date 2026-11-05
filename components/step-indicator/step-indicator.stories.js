import './dist/index.css';
import '@dictu/icon/dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import { StepIndicator } from './step-indicator.component';

const steps = [
  { label: 'Persoonlijke gegevens' },
  { label: 'Adres' },
  { label: 'Contactgegevens' },
  { label: 'Controleren' },
  { label: 'Bevestigen' },
];

export default {
  args: {
    completedLabel: 'Afgerond',
    currentStep: 1,
    direction: 'horizontal',
    display: 'full',
    expanded: false,
    label: 'Voortgang',
    ofLabel: 'van',
    stepLabel: 'Stap',
    steps,
  },
  argTypes: {
    completedLabel: {
      control: 'text',
      description: 'Tekst voor schermlezers bij een afgeronde stap',
    },
    currentStep: {
      control: 'number',
      description:
        'Huidige stap, te beginnen bij 1. Een waarde hoger dan het aantal stappen markeert alles als afgerond.',
    },
    direction: {
      control: 'radio',
      description: 'Richting van de volledige weergave',
      options: ['horizontal', 'vertical'],
    },
    display: {
      control: 'radio',
      description: 'Volledige lijst of de compacte samenvatting',
      options: ['full', 'compact'],
    },
    expanded: {
      control: 'boolean',
      description: 'Opent de compacte samenvatting',
    },
    label: {
      control: 'text',
      description: 'Toegankelijke naam van de navigatie',
    },
    ofLabel: {
      control: 'text',
      description: 'Woord tussen het huidige en het totale aantal stappen',
    },
    stepLabel: {
      control: 'text',
      description: 'Woord voor het huidige stapnummer in de compacte weergave',
    },
    steps: {
      control: 'object',
      description: 'Stappen met een label. Een status van complete, current of upcoming overschrijft currentStep.',
    },
  },
  component: StepIndicator,
  tags: ['wip'],
  title: 'Componenten/Step indicator',
};

export const HorizontalStart = {};

export const HorizontalMiddle = {
  args: {
    currentStep: 3,
  },
};

export const HorizontalEnd = {
  args: {
    currentStep: 6,
  },
};

export const Vertical = {
  args: {
    currentStep: 3,
    direction: 'vertical',
  },
};

export const Compact = {
  args: {
    currentStep: 1,
    display: 'compact',
  },
};

export const CompactExpanded = {
  args: {
    currentStep: 1,
    display: 'compact',
    expanded: true,
  },
};
