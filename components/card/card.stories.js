import readme from './README.md?raw';
import '@dictu/utilities/dist/index.css';
import '@dictu/heading/dist/index.css';
import '@dictu/link/dist/index.css';
import '@dictu/paragraph/dist/index.css';
import './dist/index.css';

export default {
  args: {
    image_src: '/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'Lees meer',
    },
    content: 'Dit is een voorbeeld van de inhoud van de kaart.',
    metadata: 'Dit is een voorbeeld van metadata',
    variant: 'default',
  },
  argTypes: {
    image_src: {
      control: 'text',
      description: 'De bron van de afbeelding in de kaart',
    },
    alt: {
      control: 'text',
      description: 'Alternatieve tekst voor de afbeelding',
    },
    headingLevel: {
      control: 'select',
      options: [2, 3, 4, 5, 6],
      description: 'Het niveau van de heading',
    },
    link: {
      control: 'object',
      description: 'Link object met href en tekst voor de link',
    },
    content: {
      control: 'text',
      description: 'De inhoud van de kaart',
    },
    variant: {
      control: 'select',
      options: ['default', 'accent'],
      description: 'De variant van de kaart',
    },
    metadata: {
      control: 'text',
      description: 'Metadata die onderaan de kaart wordt weergegeven',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ headingLevel, link, content, metadata, variant = 'default' }) => {
    const card = document.createElement('div');
    card.classList.add('dictu-card', `dictu-card--${variant}`, 'dictu-focus-ring');
    card.setAttribute('tabindex', '0');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dictu-card__image-container');

    const imageElement = document.createElement('img');
    imageElement.classList.add('dictu-image', 'dictu-card__image');
    imageElement.src = '/example-image.jpg';
    imageElement.alt = 'Dit is een voorbeeld afbeelding';

    imageContainer.appendChild(imageElement);

    const headingElement = document.createElement(`h${headingLevel}`);
    headingElement.classList.add('dictu-card__heading');

    const linkElement = document.createElement('a');
    linkElement.classList.add('dictu-link', 'dictu-card__link');
    linkElement.href = link.href;
    linkElement.innerText = link.text;

    headingElement.appendChild(linkElement);

    const contentElement = document.createElement('div');
    contentElement.classList.add('dictu-card__content');

    contentElement.appendChild(headingElement);

    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('dictu-card__paragraph');
    paragraphElement.innerText = content;

    contentElement.appendChild(paragraphElement);

    const metadataElement = document.createElement('small');
    metadataElement.classList.add('dictu-card__metadata');
    metadataElement.innerText = metadata;

    contentElement.appendChild(metadataElement);

    card.appendChild(imageContainer);
    card.appendChild(contentElement);

    return card;
  },
  tags: ['autodocs'],
  title: 'Componenten/Card',
};

export const Card = {
  args: {
    image_src: '/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de kaart',
    },
    content: 'Dit is een voorbeeld van de inhoud van de kaart.',
    metadata: 'Dit is een voorbeeld van de metadata',
    variant: 'default',
  },
};

export const AccentCard = {
  args: {
    image_src: '/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een accent kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de accent kaart',
    },
    content: 'Dit is een voorbeeld van de inhoud van de accent kaart.',
    metadata: 'Dit is een voorbeeld van de accent metadata',
    variant: 'accent',
  },
};
