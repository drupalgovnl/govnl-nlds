import readme from './README.md?raw';
import '@dictu/button/dist/index.css';
import '@dictu/heading/dist/index.css';
import '@dictu/icon/dist/index.css';
import './dist/index.css';
import { Modal } from './modal.component';
import { Button } from '../button/button.component';

export default {
  args: {
    heading: 'Informatie over zorgprofessionals',
    content: `<p>U staat op het punt over te stappen naar de informatie voor zorgprofessionals. Wilt u doorgaan?</p>`,
    isOpen: true,
    variant: 'center',
  },
  argTypes: {
    action: {
      control: false,
      description: 'HTML element of string na de content.',
    },
    content: {
      control: 'text',
      description: 'De inhoud van de modal.',
    },
    heading: {
      control: 'text',
      description: 'De heading inhoud van de modal.',
    },
    isOpen: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ['basic', 'long-content', 'center'],
      description: 'Het type van de modal',
      table: {
        type: {
          summary: 'basic | long-content | center',
        },
        defaultValue: {
          summary: 'basic',
        },
      },
    },
  },
  render: args => {
    const button1 = new Button({
      label: 'Blijf bij medicijngebruikers',
      variant: 'secondary-action',
    });

    const button2 = new Button({
      label: 'Ga naar zorgprofessionals',
      variant: 'primary-action',
    });

    const fragment = document.createDocumentFragment();
    fragment.append(button1, button2);

    return Modal({
      ...args,
      action: fragment,
    });
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  component: Modal,
  tags: ['wip'],
  title: 'Componenten/Modal',
};

export const ModalDefault = {};
