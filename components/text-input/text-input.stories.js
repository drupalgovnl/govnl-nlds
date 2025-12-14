import './dist/index.css';
import { TextInput } from './text-input.component';

export default {
  args: {
    size: 'default',
    error: false,
    placeholder: '',
  },
  argTypes: {
    id: {
      control: 'string',
      description: 'De id van de text input',
    },
    error: {
      control: 'boolean',
      description: 'Of de text input een error heeft',
    },
    placeholder: {
      control: 'string',
      description: 'De placeholder in het input veld',
    },
    size: {
      control: 'radio',
      description: 'Grootte van de text input',
      options: ['default', 'small'],
    },
  },
  component: TextInput,
  tags: ['wip'],
  title: 'Componenten/Form elements/Text Input',
};

export const TextInputDefault = {
  args: {
    id: 'text-input-1',
  },
};

export const TextInputSmall = {
  args: {
    id: 'text-input-2',
    size: 'small',
  },
};

export const TextInputError = {
  args: {
    id: 'text-input-3',
    error: true,
  },
};

export const TextInputPlaceholder = {
  args: {
    id: 'text-input-4',
    placeholder: 'Dit is een placeholder',
  },
};
