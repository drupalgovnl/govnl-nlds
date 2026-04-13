import './dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import { Select } from './select.component';

export default {
  args: {
    options: [
      {
        label: 'optie 1',
        value: 'option-1',
      },
      {
        label: 'optie 2',
        value: 'option-2',
      },
      {
        label: 'optie 3',
        value: 'option-3',
      },
      {
        label: 'optie 4',
        value: 'option-4',
      },
    ],
    name: 'opties',
    inline: false,
    multiple: false,
    disabled: false,
    error: false,
  },
  argTypes: {
    id: {
      control: 'string',
      description: 'De id van de Select component',
    },
    name: {
      control: 'string',
      description: 'De name van de Select component',
    },
    options: {
      control: 'object',
      description: 'De opties in de Select component',
    },
    inline: {
      control: 'boolean',
      description: 'Of de Select component als inline variant moet worden getoond',
    },
    multiple: {
      control: 'boolean',
      description: 'Of er meerdere opties kunnen worden geselecteerd',
    },
    disabled: {
      control: 'boolean',
      description: 'Of de Select component disabled is',
    },
    error: {
      control: 'boolean',
      description: 'Of de Select component een error heeft',
    },
    required: {
      control: 'boolean',
      description: 'Of de Select component verplicht is',
    },
  },
  component: Select,
  title: 'Componenten/Form elements/Select',
};

export const SelectDefault = {
  args: {
    id: 'select-1',
  },
};

export const SelectInline = {
  args: {
    id: 'select-1',
    inline: true,
  },
};

export const SelectMultiple = {
  args: {
    id: 'select-1',
    multiple: true,
    options: [
      {
        label: 'optie 1',
        value: 'option-1',
      },
      {
        label: 'optie 2',
        value: 'option-2',
      },
      {
        label: 'optie 3',
        value: 'option-3',
      },
      {
        label: 'optie 4',
        value: 'option-4',
      },
      {
        label: 'optie 5',
        value: 'option-5',
      },
      {
        label: 'optie 6',
        value: 'option-6',
      },
      {
        label: 'optie 7',
        value: 'option-7',
      },
      {
        label: 'optie 8',
        value: 'option-8',
      },
    ],
  },
};

export const SelectDisabled = {
  args: {
    id: 'select-1',
    disabled: true,
  },
};

export const SelectError = {
  args: {
    id: 'select-1',
    error: true,
  },
};

export const SelectRequired = {
  args: {
    id: 'select-1',
    required: true,
  },
};
