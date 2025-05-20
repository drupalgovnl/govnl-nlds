import readme from './README.md?raw';
import level1Docs from './docs/_level1.md?raw';
import level2Docs from './docs/_level2.md?raw';
import level3Docs from './docs/_level3.md?raw';
import level4Docs from './docs/_level4.md?raw';
import level5Docs from './docs/_level5.md?raw';
import level6Docs from './docs/_level6.md?raw';
import '@dictu/design-tokens/dist/heading.css';
import './dist/index.css';
import { BADGES } from '@dictu/storybook/config/preview';

export default {
  args: {
    innerHTML: 'Dit is een voorbeeld van een heading'
  },
  argTypes: {
    innerHTML: {
      control: 'text',
      description: 'De tekst van de heading'
    },
    level: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'Het niveau van de heading'
    },
  },
  parameters: {
    badges: [BADGES.WIP],
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ innerHTML, ...args }) => {
    const classes = ['dictu-heading', `dictu-heading--level-${args.level}`];
    const tag = `h${args.level}`;
    const $heading = document.createElement(tag);

    $heading.innerText = innerHTML;
    $heading.classList.add(...classes);

    return $heading;
  },
  tags: ['autodocs'],
  title: 'Componenten/Heading',
};

export const HeadingLevel1 = {
  args: {
    innerHTML: 'Dit is een hoofdkop van een pagina',
    level: 1,
  },
  parameters: {
    docs: {
      description: {
        story: level1Docs,
      },
    },
  },
};

export const HeadingLevel2 = {
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het tweede niveau staat',
    level: 2,
  },
  parameters: {
    docs: {
      description: {
        story: level2Docs,
      },
    },
  },
};

export const HeadingLevel3 = {
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het derde niveau staat',
    level: 3,
  },
  parameters: {
    docs: {
      description: {
        story: level3Docs,
      },
    },
  },
};

export const HeadingLevel4 = {
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het vierde niveau staat',
    level: 4,
  },
  parameters: {
    docs: {
      description: {
        story: level4Docs,
      },
    },
  },
};

export const HeadingLevel5 = {
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het vijfde niveau staat',
    level: 5,
  },
  parameters: {
    docs: {
      description: {
        story: level5Docs,
      },
    },
  },
};

export const HeadingLevel6 = {
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het zesde niveau staat',
    level: 6,
  },
  parameters: {
    docs: {
      description: {
        story: level6Docs,
      },
    },
  },
};
