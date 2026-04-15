import { PageContainer } from './page-container.component';
import { Paragraph } from '../paragraph/paragraph.component';
import './dist/index.css';

export default {
  args: {
    id: 'page-container-1',
    gap: 'none',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'De HTML inhoud van de page-container',
    },
    id: {
      control: 'text',
      description: 'Container ID voor navigatie en toegankelijkheid',
    },
    gap: {
      control: 'radio',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Het formaat van de gap tussen elementen in de container',
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
  component: PageContainer,
  render: args => {
    const content = [];
    const TextArray = [
      'Dit is een page-container component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.',
    ];

    TextArray.forEach(text => {
      const paragraph = Paragraph({
        text,
      });

      content.push(paragraph);
    });

    return PageContainer({
      ...args,
      content,
    });
  },
  title: 'Componenten/Page Container',
};

export const DefaultPageContainer = {
  args: {},
};

export const SmallGapPageContainer = {
  args: {
    gap: 'small',
  },
};

export const MediumGapPageContainer = {
  args: {
    gap: 'medium',
  },
};

export const LargeGapPageContainer = {
  args: {
    gap: 'large',
  },
};
