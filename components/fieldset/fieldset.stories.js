import './dist/index.css';
import '@dictu/label/dist/index.css';
import '@dictu/text-input/dist/index.css';
import '@dictu/checkbox/dist/index.css';
import { Fieldset } from './fieldset.component';
import { FormField } from '../form-field/form-field.component';
import { TextInput } from '../text-input/text-input.component';
import { Checkbox } from '../checkbox/checkbox.component';

export default {
  args: {
    error: false,
    legendText: 'Text',
    required: false,
    requiredText: '(verplicht)',
    legendVariant: 'default',
    descriptionText: 'Description',
    errorText: 'Dit is een foutmelding',
    errorIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10V6C9 5.44772 9.44771 5 10 5ZM9 14C9 13.4477 9.44771 13 10 13H10.01C10.5623 13 11.01 13.4477 11.01 14C11.01 14.5523 10.5623 15 10.01 15H10C9.44771 15 9 14.5523 9 14Z" /></svg>',
  },
  argTypes: {
    id: {
      control: 'string',
      description: 'De id van het inputveld',
    },
    descriptionText: {
      control: 'string',
      description: 'De beschrijving van het inputveld',
    },
    legendText: {
      control: 'string',
      description: 'De tekst in de legend',
    },
    required: {
      control: 'boolean',
      description: 'Of er in de legend komt te staan dat het veld verplicht is',
    },
    legendVariant: {
      control: 'radio',
      description: 'Variant van de legend',
      options: ['default', 'strong'],
    },
    error: {
      control: 'boolean',
      description: 'Of de fieldset een error state heeft of niet',
    },
    errorText: {
      control: 'string',
      description: 'De error message van de fieldset',
    },
    content: {
      description: 'De inhoud van de fieldset',
    },
  },
  component: Fieldset,
  render: args => {
    return Fieldset({
      ...args,
      content: TextInput({ id: args.id, error: args.error }),
    });
  },
  tags: ['wip'],
  title: 'Componenten/Form elements/Fieldset',
};

export const DefaultFieldset = {
  args: {
    id: 'defaultInput',
    required: true,
  },
};

export const ErrorFieldset = {
  args: {
    id: 'errorInput',
    error: true,
    required: true,
  },
};

export const NoDescriptionFieldset = {
  args: {
    id: 'legendStrongInput',
    required: true,
    descriptionText: '',
  },
};

export const LegendStrongFieldset = {
  args: {
    id: 'legendStrongInput',
    required: true,
    legendVariant: 'strong',
  },
};

export const CheckboxExampleFieldset = {
  args: {
    id: 'checkboxFieldset',
    legendText: 'Welke fruitsoorten eet je graag?',
    legendVariant: 'strong',
    descriptionText: '',
  },
  render: args => {
    const contentList = [];
    const values = ['Banaan', 'Appel', 'Tomaat', 'Peer'];

    values.forEach((value, index) => {
      const id = `checkbox-${index}`;
      const formField = FormField({
        variant: 'inline',
        labelText: value,
        id,
        content: Checkbox({ id }),
      });
      contentList.push(formField);
    });

    return Fieldset({ ...args, content: contentList });
  },
};
