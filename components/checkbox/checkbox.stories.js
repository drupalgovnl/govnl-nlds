import './dist/index.css';
import '@dictu/icon/dist/index.css';
import { Checkbox } from './checkbox.component';

export default {
  args: {
    label: 'checkbox',
    id: 'checbox-1',
    checked: false,
  },
  argTypes: {
    label: {
      control: 'string',
      description: 'De label van de checkbox',
    },
    id: {
      control: 'string',
      description: 'De ID van de checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Of de checkbox is ingevuld of niet',
    },
  },
  component: Checkbox,
  tags: ['wip'],
  title: 'Componenten/Form elements/Checkbox',
};

export const DefaultCheckbox = {};

export const CheckedCheckbox = {
  args: {
    checked: true,
  },
};
