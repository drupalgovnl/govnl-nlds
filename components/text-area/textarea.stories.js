import './dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import { Textarea } from './textarea.component';

export default {
  args: {
    size: 'default',
    error: false,
    placeholder: '',
    rows: 2,
    cols: 20,
    disabled: false,
  },
  argTypes: {
    id: {
      control: 'string',
      description: 'De id van de textarea',
    },
    name: {
      control: 'string',
      description: 'De name van de textarea',
    },
    rows: {
      control: 'string',
      description: 'Het aantal rows van de textarea',
    },
    cols: {
      control: 'string',
      description: 'Het aantal cols van de textarea',
    },
    error: {
      control: 'boolean',
      description: 'Of de textarea een error heeft',
    },
    placeholder: {
      control: 'string',
      description: 'De placeholder in de textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'De disabled state van de textarea',
    },
  },
  component: Textarea,
  title: 'Componenten/Form elements/Textarea',
};

export const TextareaDefault = {
  args: {
    id: 'textarea-1',
  },
};

export const TextareaRows = {
  args: {
    id: 'textarea-2',
    rows: 5,
  },
};

export const TextareaCols = {
  args: {
    id: 'textarea-3',
    cols: 10,
  },
};

export const TextareaError = {
  args: {
    id: 'textarea-4',
    error: true,
  },
};

export const TextareaDisabled = {
  args: {
    id: 'textarea-5',
    disabled: true,
  },
};

export const TextareaPlaceholder = {
  args: {
    id: 'textarea-6',
    placeholder: 'Dit is een placeholder',
  },
};
