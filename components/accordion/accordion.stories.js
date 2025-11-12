import './dist/index.css';
import '@dictu/button/dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import { Accordion } from './accordion.js';

const meta = {
  args: {
    label: 'Accordeon Titel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.',
    headingLevel: '2',
  },
  argTypes: {
    label: {
      control: 'string',
      description: 'De tekst voor de toggler button.',
    },
    content: {
      control: 'text',
      description: 'De inhoud van de accordion.',
    },
    headingLevel: {
      control: 'radio',
      options: ['2', '3', '4', '5', '6'],
      description: 'Het niveau van de heading in de toggler button.',
      table: {
        type: {
          summary: '2 | 3 | 4 | 5 | 6 | 7',
        },
        defaultValue: {
          summary: '2',
        },
      },
    },
    expanded: {
      control: 'boolean',
      description: 'Of de accordion ingeklapt is of niet.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    id: {
      control: 'string',
      description: 'Het unieke ID van de accordion.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  component: Accordion,
  tags: ['doc'],
  title: 'Componenten/Accordion',
};

export default meta;

export const AccordionOpen = {
  args: {
    expanded: true,
    id: 'accordion-1',
  },
};

export const AccordionClosed = {
  args: {
    expanded: false,
    id: 'accordion-2',
  },
};
