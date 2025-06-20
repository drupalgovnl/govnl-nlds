import readme from './README.md?raw';
import '@dictu/design-tokens/dist/figure.css';
import './dist/index.css';
import { default as ImageStory } from '../image/image.stories.js';

export default {
  args: {
    src: "/example-image.jpg",
    caption: "Dit is een voorbeeld van een bijschrift",
    alt: "Dit is een voorbeeld van een bijschrift",
    loading: "lazy",
    decorative: false,
    width: "100%",
    height: "100%",
    aspectRatio: "16/9",
  },
  argTypes: {
    caption: {
      control: "text",
      description: "De bijschrift van de afbeelding",
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
    const figure = document.createElement("figure");
    figure.classList.add("dictu-figure");

    // Create the image using the image component's render function
    const img = ImageStory.render(imageArgs);

    // Create the caption
    const captionElement = document.createElement("figcaption");
    captionElement.classList.add("dictu-figure__caption");
    captionElement.innerText = caption;

    figure.appendChild(img);
    figure.appendChild(captionElement);

    return figure;
  },
  tags: ["autodocs"],
  title: "Componenten/Figure",
};

export const Figure = {
  args: {
    src: "/example-image.jpg",
    caption: "Dit is een voorbeeld van een bijschrift",
    alt: "Dit is een voorbeeld van een bijschrift",
    width: "640",
    height: "640",
    aspectRatio: "square",
  },
};

export const Decorative = {
  name: 'Decorative Figure',
  args: {
    src: '/example-image.jpg',
    caption: 'Dit is een voorbeeld van een decoratieve afbeelding',
    alt: 'Dit is een voorbeeld van een decoratieve afbeelding',
    loading: 'lazy',
    decorative: true,
    ariaDescribedBy: '',
    width: '640',
    height: '640',
    aspectRatio: 'square',
  },
};

export const Landscape = {
  name: 'Landscape Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    caption: 'Landscape figure example',
    alt: 'Landscape image example',
    aspectRatio: 'landscape',
    width: '640',
    height: '360',
  },
};

export const Portrait = {
  name: 'Portrait Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    caption: 'Portrait figure example',
    alt: 'Portrait image example',
    aspectRatio: 'portrait',
    width: '360',
    height: '640',
  },
};

export const Square = {
  name: 'Square Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    caption: 'Square figure example',
    alt: 'Square image example',
    aspectRatio: 'square',
    width: '640',
    height: '640',
  },
};

export const Video = {
  name: 'Video Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    caption: 'Video aspect ratio figure example',
    alt: 'Video aspect ratio image example',
    aspectRatio: 'video',
    width: '960',
    height: '540',
  },
};
