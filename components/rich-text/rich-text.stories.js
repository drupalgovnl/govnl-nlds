import './dist/index.css';
import defaultDocs from './docs/_rich-text.md?raw';
import readme from './README.md?raw';

export default {
  args: {
    content: `
      <p>Paragraaf met een <a href="#">link</a>.</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    `,
    id: 'rich-text-1',
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
    container.classList.add('dictu-rich-text');
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
  title: 'Componenten/Rich Text',
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
