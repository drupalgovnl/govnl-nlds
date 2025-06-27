import readme from './README.md?raw';
import './dist/index.css';
import '@dictu/design-tokens/dist/hero.css';
import '@dictu/design-tokens/dist/figure.css';
import '@dictu/design-tokens/dist/container.css';
import { default as ImageStory } from '../image/image.stories.js';

const CORNER_POSITION_OPTIONS = ['top-left', 'bottom-right'];
const CONTENT_POSITION_OPTIONS = ['bottom-left', 'bottom-right'];

export default {
  args: {
    headingLevel: 2,
    heading: 'Hero Heading',
    subheading: 'Hero Subheading',
    cornerPosition: 'top-left',
    contentPosition: 'bottom-left',
    ...ImageStory.args, // Spread the image args from the Image component
    width: '1280',
    height: '395',
    aspectRatio: 'video',
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
    contentPosition: {
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

const createHeading = (text, level) => {
  if (!text || !level) return null;
  const heading = document.createElement(`h${level}`);
  heading.classList.add('dictu-heading', `dictu-heading--level-${level}`);
  heading.textContent = text;
  return heading;
};

export const Hero = {
  render: ({ heading, subheading, cornerPosition, contentPosition, ...rest }) => {
    const hero = document.createElement('section');
    hero.classList.add('dictu-hero');

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('dictu-container');

    hero.appendChild(pageContainer);

    const heroImage = ImageStory.render(rest);
    heroImage.classList.add('dictu-hero__image');

    // Set corner position class
    if (cornerPosition) {
      heroImage.classList.add(`dictu-hero__image--corner-${cornerPosition}`);
    }

    if (heroImage) {
      pageContainer.appendChild(heroImage);
    }

    // Set content position class
    if (contentPosition) {
      pageContainer.classList.add(`dictu-hero__content--${contentPosition}`);
    } else {
      pageContainer.classList.add('dictu-hero__content--bottom-left');
    }

    const heroHeading = createHeading(heading, rest.headingLevel);
    if (heroHeading) {
      heroHeading.classList.add('dictu-hero__heading');
      pageContainer.appendChild(heroHeading);
    }

    const heroSubheading = createHeading(subheading, rest.headingLevel + 1);
    if (heroSubheading) {
      heroSubheading.classList.add('dictu-hero__subheading');
      pageContainer.appendChild(heroSubheading);
    }

    return hero;
  },
};
