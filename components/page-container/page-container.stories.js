import { PageContainer } from './page-container.component';
import defaultDocs from './docs/_page-container.md?raw';
import readme from './README.md?raw';
import './dist/index.css';

export default {
  args: {
    content: `
      <p>Dit is een page-container component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.</p>
    `,
    id: 'page-container-1',
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
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: PageContainer,
  tags: ['autodocs'],
  title: 'Componenten/Page Container',
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};
