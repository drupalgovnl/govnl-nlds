import readme from './README.md?raw';
import './dist/index.css';

export default {
  argTypes: {
    title: {
      control: 'text',
      description: 'De titel van de iframe',
    },
    source: {
      control: 'text',
      description: 'De bron welke embedded wordt',
    },
    width: {
      control: 'text',
      description: 'De breedte van de iframe',
    },
    height: {
      control: 'text',
      description: 'De hoogte van de iframe',
    },
    allowFullscreen: {
      control: 'boolean',
      description: 'Optie om de fullscreen mogelijkheid toe te laten voor de embedded content',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ source, title, width, height, allowFullscreen }) => {
    const classes = ['dictu-embed'];
    const $embed = document.createElement('iframe');
    $embed.classList.add(...classes);
    $embed.setAttribute('title', title);
    $embed.setAttribute('src', source);
    $embed.setAttribute('width', width);
    $embed.setAttribute('height', height);

    if (allowFullscreen) {
      $embed.setAttribute('allowfullscreen', '');
    }

    return $embed;
  },
  tags: ['autodocs'],
  title: 'Componenten/Embed',
};

export const Embed = {
  args: {
    title:
      'Youtube video van DICTU met als titel Werken bij DICTU: werken aan het technisch ontwerp van websites voor miljoenen Nederlanders.',
    source: 'https://www.youtube.com/embed/uhr3ylfGaCo?si=AU2YPlrsLl-rzwZi',
    width: '560',
    height: '315',
  },
};
