import readme from './README.md?raw';
import '@dictu/design-tokens/dist/figure.css';
import './dist/index.css';
import { default as ImageStory } from '../image/image.stories.js';

export default {
  args: {
    src: '/example-image.jpg',
    caption: 'Dit is een voorbeeld van een bijschrift',
    alt: 'Dit is een voorbeeld afbeelding',
    loading: 'lazy',
    decorative: false,
    width: '100%',
    height: '100%',
  },
  argTypes: {
    caption: {
      control: 'text',
      description: 'De bijschrift van de afbeelding',
    },
    ...ImageStory.argTypes,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ caption, ...imageArgs }) => {
    const figure = document.createElement('figure');
    figure.classList.add('dictu-figure');

    // Create the image using the image component's render function
    const img = ImageStory.render(imageArgs);

    // Create the caption
    const captionElement = document.createElement('figcaption');
    captionElement.classList.add('dictu-figure__caption');
    captionElement.innerText = caption;

    figure.appendChild(img);
    figure.appendChild(captionElement);

    return figure;
  },
  tags: ['autodocs'],
  title: 'Componenten/Figure',
};

export const Figure = {
  args: {
    src: '/example-image.jpg',
    caption: 'Dit is een voorbeeld van een bijschrift',
    alt: 'Dit is een voorbeeld afbeelding',
    width: '640',
    height: '640',
    aspectRatio: 'square',
  },
};
