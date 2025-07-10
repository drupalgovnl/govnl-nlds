import defaultDocs from './docs/_page-grid.md?raw';
import readme from './README.md?raw';
import './dist/index.css';
import '@dictu/utilities/dist/index.css';
import '@dictu/heading/dist/index.css';
import '@dictu/link/dist/index.css';
import '@dictu/paragraph/dist/index.css';
import '@dictu/card/dist/index.css';
import '@dictu/image/dist/index.css';
import '@dictu/utility-aspect-ratio/dist/index.css';

export default {
  args: {
    content: `
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    `,
    columns: 3,
    id: 'page-grid-1',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'De HTML inhoud van de grid',
    },
    columns: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Aantal kolommen in de grid. Standaard is 3.',
    },
    id: {
      control: 'text',
      description: 'ID voor navigatie en toegankelijkheid',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ content, columns, id }) => {
    const grid = document.createElement('div');
    grid.classList.add('dictu-grid', `dictu-grid--columns-${columns}`);
    grid.setAttribute('id', id);

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

        grid.appendChild(fragment);
      }

      if (content instanceof HTMLElement) {
        grid.appendChild(content);
      }
    }

    return grid;
  },
  tags: ['autodocs'],
  title: 'Componenten/Grid',
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

export const WithImages = {
  args: {
    content: `
      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Eerste voorbeeld afbeelding in landscape formaat"
           loading="lazy"
           width="640"
           height="360" />

      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Tweede voorbeeld afbeelding in vierkant formaat"
           loading="lazy"
           width="640"
           height="640" />
    `,
    columns: 2,
    id: 'page-grid-images',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een voorbeeld van een grid met twee afbeeldingen',
      },
    },
  },
};

export const WithCards = {
  args: {
    content: `
      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Eerste voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-heading dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
          </h2>
          <p class="dictu-paragraph dictu-card__paragraph">
            Dit is de inhoud van de eerste kaart in het grid. Een korte beschrijving die de gebruiker interesseert.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 8 juli 2025</small>
      </article>

      <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Tweede voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-heading dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Tweede Kaart (Accent)</a>
          </h2>
          <p class="dictu-paragraph dictu-card__paragraph">
            Dit is de inhoud van de tweede kaart in accent stijl. Deze kaart valt meer op door de accent styling.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Derde voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-heading dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
          </h2>
          <p class="dictu-paragraph dictu-card__paragraph">
            Dit is de inhoud van de derde kaart in het grid. Een mooie afsluiting van de drie kaarten.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
      </article>
    `,
    columns: 3,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een voorbeeld van een grid met drie kaart componenten - een standaard kaart, een accent kaart, en nog een standaard kaart.',
      },
    },
  },
};

export const WithCardsOnMultipleRows = {
  args: {
    content: `
      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de eerste kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Tweede Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de tweede kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de derde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Vierde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de vierde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Vijfde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de vijfde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Zesde Kaart (Accent)</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de zesde kaart in accent stijl.
          </p>
        </div>
      </article>
    `,
    columns: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een voorbeeld van een grid met 6 kaart componenten',
      },
    },
  },
};
