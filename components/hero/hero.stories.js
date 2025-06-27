import readme from './README.md?raw';
import './dist/index.css';
import '@dictu/design-tokens/dist/hero.css';
import '@dictu/design-tokens/dist/figure.css';
import '@dictu/design-tokens/dist/container.css';
import '@dictu/design-tokens/dist/section.css';
import '@dictu/design-tokens/dist/paragraph.css';
import { default as ImageStory } from '../image/image.stories.js';

const CORNER_POSITION_OPTIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const CONTENT_POSITION_OPTIONS = ['left', 'right'];

export default {
  args: {
    headingLevel: 2,
    heading: 'Hero Heading',
    subheading: 'Hero Subheading',
    cornerPosition: 'top-right',
    messagePosition: 'left',
    ...ImageStory.args, // Spread the image args from the Image component
    width: '1280',
    height: '495',
  },
  argTypes: {
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'Heading level in de hero',
    },
    heading: {
      control: 'text',
      description: 'De titel van de hero',
    },
    subheading: {
      control: 'text',
      description: 'De ondertitel van de hero',
    },
    cornerPosition: {
      control: 'select',
      options: CORNER_POSITION_OPTIONS,
      description: 'De positie van de hoekafbeelding',
    },
    messagePosition: {
      control: 'select',
      options: CONTENT_POSITION_OPTIONS,
      description: 'De positie van de inhoud in de hero',
    },
    ...ImageStory.argTypes, // Include image-related argTypes
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  tags: ['autodocs'],
  title: 'Componenten/Hero',
};

const createHeading = (text, level, type = 'heading') => {
  if (!text || !level) return null;
  const className = `dictu-hero__${type}`;
  const heading = document.createElement(`h${level}`);
  heading.classList.add(`${className}`, 'dictu-heading', `dictu-heading--level-${level}`);
  heading.textContent = text;
  return heading;
};

const renderHero = ({ heading, subheading, cornerPosition, messagePosition, ...rest }) => {
  const hero = document.createElement('section');
  hero.classList.add('dictu-section');
  hero.classList.add('dictu-hero');

  const pageContainer = document.createElement('div');
  pageContainer.classList.add('dictu-container', 'dictu-hero__container');

  hero.appendChild(pageContainer);

  const heroImage = document.createElement('img');
  heroImage.src = rest.src;
  heroImage.alt = rest.alt || '';
  heroImage.loading = rest.imageLoading || 'lazy';
  heroImage.classList.add('dictu-hero__image', `dictu-aspect-ratio-${rest.aspectRatio}`);

  // Set corner position class
  heroImage.classList.add(`dictu-hero__image--corner-${cornerPosition}`);

  if (heroImage) {
    pageContainer.appendChild(heroImage);
  }

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('dictu-hero__message');
  messageContainer.classList.add(`dictu-hero__message--${messagePosition}`);
  pageContainer.appendChild(messageContainer);

  const heroHeading = createHeading(heading, rest.headingLevel);
  if (heroHeading) {
    heroHeading.classList.add('dictu-hero__heading');
    messageContainer.appendChild(heroHeading);
  }

  const heroSubheading = document.createElement('p');
  heroSubheading.classList.add('dictu-paragraph', 'dictu-hero__subheading');
  heroSubheading.textContent = subheading;
  if (heroSubheading) {
    messageContainer.appendChild(heroSubheading);
  }

  return hero;
};

export const Hero = {
  render: renderHero,
};

export const HeroMobiel = {
  args: {
    ...Hero.args,
    heading: 'Hero Titel Mobiel',
    subheading: 'Dit is een beschrijvende ondertitel speciaal voor mobiele weergave.',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story:
          'De hero component geoptimaliseerd voor mobiele weergave met aangepaste lettergroottes en compactere layout.',
      },
    },
  },
  render: renderHero,
};
