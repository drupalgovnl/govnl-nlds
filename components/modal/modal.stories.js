import readme from './README.md?raw';
import '@dictu/button/dist/index.css';
import '@dictu/heading/dist/index.css';
import '@dictu/icon/dist/index.css';
import './dist/index.css';
import { Modal } from './modal.component';
import { Button } from '../button/button.component';

export default {
  args: {
    id: 'modal-1',
    heading: 'Titel van de modal',
    content: `<p>Dit is een voorbeeld van de inhoud van de modal. Wilt u doorgaan?</p>`,
    isOpen: true,
    variant: 'center',
  },
  argTypes: {
    id: {
      control: 'string',
      description: 'Het unieke ID van de modal.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
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
      label: 'Annuleren',
      variant: 'secondary-action',
    });

    const button2 = new Button({
      label: 'Bevestigen',
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

export const ModalBasic = {
  args: {
    id: 'modal-basic',
    variant: 'basic',
  },
};

export const ModalLongContent = {
  args: {
    id: 'modal-long-content',
    variant: 'long-content',
    content: `<p>Dit is een voorbeeld van een modal met langere inhoud. Gebruik deze variant wanneer de tekst meer ruimte nodig heeft dan een korte bevestiging.</p>
<p>De dialoog gebruikt de beschikbare breedte, zodat de tekst leesbaar blijft. Hier past extra uitleg, een toelichting of een aantal voorwaarden.</p>
<p>Lees de inhoud voordat u verdergaat. De keuze die u maakt, bepaalt wat er daarna gebeurt.</p>
<p>U kunt dit venster sluiten en later terugkomen. Er wordt nog niets opgeslagen zolang u niet bevestigt.</p>
<p>Wilt u doorgaan?</p>`,
  },
};

export const ModalDefaultMobile = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    id: 'modal-default-mobile',
  },
};

export const ModalBasicMobile = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    id: 'modal-basic-mobile',
    variant: 'basic',
  },
};

export const ModalLongContentMobile = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  args: {
    ...ModalLongContent.args,
    id: 'modal-long-content-mobile',
  },
};
