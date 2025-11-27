import './dist/index.css';
import { Label } from './label.component';

export default {
  args: {
    value: 'Dit is een label',
    variant: 'default',
    required: false,
  },
  argTypes: {
    value: {
      control: 'string',
      description: 'De tekst in de label',
    },
    variant: {
      control: 'radio',
      description: 'Variant van de label',
      options: ['default', 'strong'],
    },
    targetId: {
      control: 'string',
      description: 'De Id van het labelbare form element',
    },
    required: {
      control: 'boolean',
      description: 'Of het labelbare form element required is of niet',
    },
    requiredText: {
      control: 'string',
      description: 'De text voor het required gedeelte',
    },
  },
  component: Label,
  tags: ['wip'],
  title: 'Componenten/Form elements/Label',
};

export const LabelDefault = {
  args: {
    targetId: 'form-input-1',
  },
};

export const LabelRequired = {
  args: {
    targetId: 'form-input-2',
    required: true,
    requiredMsg: '(Verplicht)',
  },
};

export const LabelStrong = {
  args: {
    targetId: 'form-input-3',
    value: 'Dit is een strong label',
    variant: 'strong',
  },
};
