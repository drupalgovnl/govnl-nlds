import readme from './README.md?raw';
import './dist/index.css';
import { Logo } from './logo.component';

export default {
  args: {
    image_src: 'assets/logo.svg',
    alt: 'Logo Rijksoverheid',
    title: 'Dienst ICT Uitvoering',
    subtitle: 'Ministerie van Economische Zaken',
  },
  argTypes: {
    image_src: {
      control: 'text',
      description: 'De bron van het logo',
    },
    alt: {
      control: 'text',
      description: 'Alternatieve tekst voor het logo',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  component: Logo,
  tags: [],
  title: 'Componenten/Logo',
};

export const LogoDefault = {};
