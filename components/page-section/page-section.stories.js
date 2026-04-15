import { PageSection } from './page-section.component';
import { Paragraph } from '../paragraph/paragraph.component';
import './dist/index.css';

export default {
  args: {
    title: 'Sectie titel',
    id: 'page-section-1',
    gap: 'none',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'De HTML inhoud van de page-section',
    },
    id: {
      control: 'text',
      description: 'Sectie ID voor navigatie en toegankelijkheid',
    },
    ariaLabel: {
      control: 'text',
      description: 'Toegankelijke naam voor de sectie',
    },
    title: {
      control: 'text',
      description: 'Titel van de sectie, gebruikt voor toegankelijkheid en structuur',
    },
    gap: {
      control: 'radio',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Het formaat van de gap tussen elementen in de section',
      table: {
        type: {
          summary: 'none | small | medium | large',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
  },
  component: PageSection,
  render: args => {
    const content = [];
    const TextArray = [
      'Dit is een page-section component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.',
    ];

    TextArray.forEach(text => {
      const paragraph = Paragraph({
        text,
      });

      content.push(paragraph);
    });

    return PageSection({
      ...args,
      content,
    });
  },
  title: 'Componenten/Page Section',
};

export const DefaultPageSection = {
  args: {},
};

export const AriaLabelPageSection = {
  args: {
    title: '',
    ariaLabel: 'Voorbeeld sectie met aria label',
  },
};

export const WithoutTitlePageSection = {
  args: {
    title: '',
  },
};

export const SmallGapPageSection = {
  args: {
    gap: 'small',
  },
};

export const MediumGapPageSection = {
  args: {
    gap: 'medium',
  },
};

export const LargeGapPageSection = {
  args: {
    gap: 'large',
  },
};
