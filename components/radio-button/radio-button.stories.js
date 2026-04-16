import './dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import { RadioButton } from './radio-button.component';

export default {
  args: {
    name: 'radio-set',
    value: 'radio-1',
    id: 'radio-button-1',
    checked: false,
  },
  argTypes: {
    name: {
      control: 'string',
      description: 'De name van de radio button groep',
    },
    value: {
      control: 'string',
      description: 'De value van de radio button groep',
    },
    id: {
      control: 'string',
      description: 'De ID van de radio button',
    },
    checked: {
      control: 'boolean',
      description: 'Of de radio button is ingevuld of niet',
    },
  },
  component: RadioButton,
  title: 'Componenten/Form elements/Radio Button',
};

export const DefaultRadioButton = {};

export const CheckedRadioButton = {
  args: {
    checked: true,
  },
};
