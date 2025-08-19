import readme from './README.md?raw';
import './dist/index.css';

// Aspect ratio options (define this constant if not imported)
const ASPECT_RATIO_OPTIONS = ['landscape', 'portrait', 'square', 'video'];

export default {
  title: 'Componenten/Image',
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld van een bijschrift',
    loading: 'lazy',
    decorative: false,
    width: '100%',
    height: '100%',
    aspectRatio: 'video',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'De URL van de afbeelding',
    },
    alt: {
      control: 'text',
      description: 'Alternatieve tekst voor de afbeelding',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Laad de afbeelding lui of direct',
    },
    decorative: {
      control: 'boolean',
      description: 'Is de afbeelding decoratief?',
    },
    ariaDescribedBy: {
      control: 'text',
      description: 'De ID van het element dat de afbeelding beschrijft',
    },
    width: {
      control: 'text',
      description: 'De breedte van de afbeelding',
    },
    height: {
      control: 'text',
      description: 'De hoogte van de afbeelding',
    },
    aspectRatio: {
      control: 'select',
      options: ASPECT_RATIO_OPTIONS,
      description: 'De beeldverhouding van de afbeelding',
    },
  },
  tags: ['autodocs'],
  render: args => {
    const { src, alt, loading, decorative, ariaDescribedBy, width, height, aspectRatio } = args;

    const img = document.createElement('img');
    img.classList.add('dictu-image');

    // Set source and loading attributes
    if (src) img.src = src;
    if (loading) img.loading = loading;

    // Set dimensions
    if (width) img.width = width;
    if (height) img.height = height;

    // Handle accessibility attributes
    if (decorative) {
      img.alt = '';
    } else {
      img.setAttribute('role', 'img');
      if (alt) img.alt = alt;
    }

    // Handle aria-describedby
    if (ariaDescribedBy) {
      img.setAttribute('aria-describedby', ariaDescribedBy);
    }

    // Apply aspect ratio styling
    if (aspectRatio) {
      img.classList.add(`dictu-aspect-ratio-${aspectRatio}`);
    }

    return img;
  },
};

export const Default = {
  name: 'Default Image',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld van een bijschrift',
    width: '640',
    height: '640',
    aspectRatio: 'square',
  },
};

export const Decorative = {
  name: 'Decorative Image',
  args: {
    src: 'assets/example-image.jpg',
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
    src: 'assets/example-image.jpg',
    alt: 'Landscape image example',
    aspectRatio: 'landscape',
    width: '640',
    height: '360',
  },
};

export const Portrait = {
  name: 'Portrait Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Portrait image example',
    aspectRatio: 'portrait',
    width: '360',
    height: '640',
  },
};

export const Square = {
  name: 'Square Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Square image example',
    aspectRatio: 'square',
    width: '640',
    height: '640',
  },
};

export const Video = {
  name: 'Video Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Video aspect ratio image example',
    aspectRatio: 'video',
    width: '960',
    height: '540',
  },
};
