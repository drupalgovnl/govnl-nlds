import defaultDocs from './docs/_page-section.md?raw';
import readme from './README.md?raw';
import './dist/index.css';
import '@dictu/design-tokens/dist/section.css';

export default {
  args: {
    content: `
      <p>Dit is een page-section component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.</p>
    `,
    title: 'Sectie titel',
    id: 'page-section-1',
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
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ content, id, ariaLabel, title }) => {
    const section = document.createElement('section');
    section.classList.add('dictu-section');

    if (title) {
      const titleElement = document.createElement('h2');
      titleElement.classList.add('dictu-heading', 'dictu-heading--level-2');
      titleElement.textContent = title;
      if (id) {
        titleElement.id = id;
        section.setAttribute('aria-labelledby', id);
      }
      section.appendChild(titleElement);
    }

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

        section.appendChild(fragment);
      }

      if (content instanceof HTMLElement) {
        section.appendChild(content);
      }
    }

    if (ariaLabel && !title) {
      section.setAttribute('aria-label', ariaLabel);
    }

    return section;
  },
  tags: ['autodocs'],
  title: 'Componenten/Page Section',
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

export const WithAriaLabel = {
  args: {
    ariaLabel: 'Voorbeeld sectie met aria label',
    content: `<p>Deze sectie heeft een aria-label voor betere toegankelijkheid, zonder titel.</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: 'Deze sectie heeft een aria-label voor betere toegankelijkheid.',
      },
    },
  },
};

export const WithoutTitle = {
  args: {
    title: '',
    content: `
      <p>Een sectie zonder titel, maar met rijke content.</p>
      <ul>
        <li>Lijst item 1</li>
        <li>Lijst item 2</li>
        <li>Lijst item 3</li>
      </ul>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een sectie zonder titel, enkel met content.',
      },
    },
  },
};
