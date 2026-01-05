import './dist/index.css';
import '@dictu/paragraph/dist/index.css';
import '@dictu/link-list/dist/index.css';
import '@dictu/heading/dist/index.css';
import '@dictu/page-container/dist/index.css';
import { PageFooter } from './page-footer.component';

export default {
  args: {
    headingLevel: 2,
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'Main heading for the footer',
    },
    text: {
      control: 'text',
      description: 'Descriptive text for the footer',
    },
    columns: {
      control: 'array',
      description: 'Array of column objects with title and items',
    },
    headingLevel: {
      control: { type: 'range', min: 1, max: 6 },
      description: 'Heading level for the main footer heading (affects column titles too)',
      table: {
        disable: true,
      },
    },
  },
  tags: ['wip'],
  component: PageFooter,
  title: 'Componenten/Page Footer',
};

export const DefaultPageFooter = {
  args: {
    heading: 'Footer heading',
    text: 'Dit is een voettekst die extra informatie biedt.',
    columns: [
      {
        title: 'Kop 1',
        items: [
          {
            label: 'Privacy beleid',
            href: '/privacy',
            title: 'Lees ons privacy beleid',
            ariaLabel: 'Privacy beleid - meer informatie over hoe we uw gegevens gebruiken',
          },
          {
            label: 'Algemene voorwaarden',
            href: '/voorwaarden',
            title: 'Bekijk onze algemene voorwaarden',
          },
          {
            label: 'Contact',
            href: '/contact',
            title: 'Neem contact met ons op',
          },
        ],
      },
      {
        title: 'Kop 2',
        items: [
          {
            label: 'Over ons',
            href: '/over-ons',
            title: 'Meer informatie over onze organisatie',
          },
          {
            label: 'Nieuws',
            href: '/nieuws',
            title: 'Bekijk het laatste nieuws',
          },
          {
            label: 'Externe link',
            href: 'https://example.com',
            title: 'Bezoek externe website',
            external: true,
          },
        ],
      },
    ],
  },
};

// Minimal variant with no columns
export const MinimalPageFooter = {
  args: {
    heading: 'Minimale Footer',
    text: 'Een eenvoudige footer zonder kolommen.',
    columns: [],
  },
};

// Minimal variant with only columns
export const MinimalPageFooterOnlyColumns = {
  args: {
    heading: '',
    text: '',
    headingLevel: 2,
    columns: [
      {
        title: 'Heading 1',
        items: [
          {
            label: 'Toegankelijkheidsverklaring',
            href: '/toegankelijkheid',
            title: 'Lees onze toegankelijkheidsverklaring',
            ariaLabel: 'Toegankelijkheidsverklaring - hoe wij toegankelijkheid waarborgen',
          },
          {
            label: 'Sitemap',
            href: '/sitemap',
            title: 'Bekijk de volledige sitemap',
          },
          {
            label: 'PDF Handleiding',
            href: '/handleiding.pdf',
            title: 'Download de handleiding als PDF',
            download: 'handleiding.pdf',
          },
        ],
      },
      {
        title: 'Heading 2',
        items: [
          {
            label: 'W3C WCAG Richtlijnen',
            href: 'https://www.w3.org/WAI/WCAG22/quickref/',
            title: 'Bezoek de officiële WCAG 2.2 richtlijnen',
            external: true,
          },
          {
            label: 'Nederlandse Overheid',
            href: 'https://www.rijksoverheid.nl',
            title: 'Bezoek de website van de Nederlandse overheid',
            external: true,
          },
        ],
      },
      {
        title: 'Heading 3',
        items: [
          {
            label: 'W3C WCAG Richtlijnen 3',
            href: 'https://www.w3.org/WAI/WCAG22/quickref/',
            title: 'Bezoek de officiële WCAG 2.2 richtlijnen',
            external: true,
          },
          {
            label: 'Nederlandse Overheid',
            href: 'https://www.rijksoverheid.nl',
            title: 'Bezoek de website van de Nederlandse overheid',
            external: true,
          },
        ],
      },
    ],
  },
};
