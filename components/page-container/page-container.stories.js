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
  render: ({ content, id }) => {
    const container = document.createElement('div');
    container.classList.add('dictu-container');
    container.setAttribute('id', id);

    if (content) {
      if (typeof content === 'string') {
        // Sanitize and insert HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const fragment = document.createDocumentFragment();

        // Append all body children to fragment
        Array.from(doc.body.childNodes).forEach(node => {
          fragment.appendChild(node.cloneNode(true));
        });

        container.appendChild(fragment);
      }

      if (content instanceof HTMLElement) {
        container.appendChild(content);
      }
    }

    return container;
  },
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
