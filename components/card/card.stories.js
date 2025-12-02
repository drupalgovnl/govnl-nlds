import '@dictu/utility-focus-ring/dist/index.css';

import './dist/index.css';
import { Card } from './card.component';

export default {
  args: {
    image_src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'Lees meer',
    },
    content: 'Dit is een voorbeeld van de inhoud van de kaart.',
    footer_content: 'Dit is een voorbeeld van de footer content',
    variant: 'default',
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.55301 0.105573C8.83453 -0.0351909 9.1659 -0.0351909 9.44743 0.105573L17.4474 4.10557C17.7862 4.27496 18.0002 4.62123 18.0002 5C18.0002 5.37877 17.7862 5.72504 17.4474 5.89443L9.44743 9.89443C9.1659 10.0352 8.83453 10.0352 8.55301 9.89443L0.553005 5.89443C0.214221 5.72504 0.000219048 5.37877 0.000219048 5C0.000219048 4.62123 0.214221 4.27496 0.553005 4.10557L8.55301 0.105573ZM3.23629 5L9.00022 7.88197L14.7642 5L9.00022 2.11803L3.23629 5ZM0.105792 8.55279C0.352781 8.05881 0.953454 7.85858 1.44743 8.10557L9.00022 11.882L16.553 8.10557C17.047 7.85858 17.6477 8.05881 17.8946 8.55279C18.1416 9.04676 17.9414 9.64744 17.4474 9.89443L9.44743 13.8944C9.1659 14.0352 8.83453 14.0352 8.55301 13.8944L0.553005 9.89443C0.059027 9.64744 -0.141197 9.04676 0.105792 8.55279ZM0.105792 12.5528C0.352781 12.0588 0.953454 11.8586 1.44743 12.1056L9.00022 15.882L16.553 12.1056C17.047 11.8586 17.6477 12.0588 17.8946 12.5528C18.1416 13.0468 17.9414 13.6474 17.4474 13.8944L9.44743 17.8944C9.1659 18.0352 8.83453 18.0352 8.55301 17.8944L0.553005 13.8944C0.059027 13.6474 -0.141197 13.0468 0.105792 12.5528Z" fill="#154273"/>
</svg>`,
    subheading: 'Dit is een voorbeeld subheading',
    full_card_link: false,
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
    footer_content: {
      control: 'text',
      description: 'Metadata die onderaan de kaart wordt weergegeven',
    },
    icon: {
      control: 'text',
      description: 'Optionele icon voor de kaart',
    },
    subheading: {
      control: 'text',
      description: 'Optionele subheading voor de kaart',
    },
    full_card_link: {
      control: 'boolean',
      description: 'Maakt de hele kaart klikbaar als true',
    },
  },
  tags: ['wip'],
  render: Card,
  title: 'Componenten/Card',
};

export const DefaultCard = {
  args: {
    image_src: 'assets/example-image.jpg',
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
    image_src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een accent kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de accent kaart',
    },
    content: 'Dit is een voorbeeld van de inhoud van de accent kaart.',
    footer_content: 'Dit is een voorbeeld van de accent metadata',
    variant: 'accent',
  },
};

export const FullCardLink = {
  args: {
    image_src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de kaart',
    },
    content: 'Dit is een voorbeeld van de inhoud van de kaart.',
    footer_content: 'Dit is een voorbeeld van de metadata',
    variant: 'default',
    full_card_link: true,
  },
};
