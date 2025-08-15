import readme from './README.md?raw';
import './dist/index.css';
import '@dictu/paragraph/dist/index.css';
import '@dictu/link-list/dist/index.css';
import '@dictu/link/dist/index.css';
import '@dictu/heading/dist/index.css';

export default {
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
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  tags: ['autodocs'],
  title: 'Componenten/Page Footer',
};

const createArrowIcon = () => {
  const icon = document.createElement('span');
  icon.classList.add('dictu-icon', 'dictu-link-list__icon');
  icon.setAttribute('role', 'presentation');
  icon.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/>
  </svg>`;
  return icon;
};

const createParagraph = text => {
  if (!text) return null;
  const p = document.createElement('p');
  p.classList.add('dictu-page-footer-paragraph');
  p.textContent = text;
  return p;
};

const createHeading = (text, level) => {
  if (!text || !level) return null;
  const heading = document.createElement(`h${level}`);
  heading.classList.add('dictu-page-footer-heading', 'dictu-heading', `dictu-heading--level-${level}`);
  heading.textContent = text;
  return heading;
};

const createLink = item => {
  const link = document.createElement('a');
  link.classList.add('dictu-link', 'dictu-link-list__link');
  link.href = item.href || '#';

  // Add icon and text
  link.appendChild(createArrowIcon());

  const linkText = document.createElement('span');
  linkText.textContent = item.label || '';
  link.appendChild(linkText);

  // Set accessibility attributes
  const attributes = [
    { condition: item.title, attr: 'title', value: item.title },
    { condition: item.download, attr: 'download', value: item.download },
    { condition: item.ariaLabel && !item.external, attr: 'aria-label', value: item.ariaLabel },
  ];

  attributes.forEach(({ condition, attr, value }) => {
    if (condition) link.setAttribute(attr, value);
  });

  // Handle external links
  if (item.external) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('aria-label', item.ariaLabel || `${item.label} (opent in nieuw venster)`);
  }

  return link;
};

const createLinkList = items => {
  if (!items?.length) return null;

  const list = document.createElement('ul');
  list.classList.add('dictu-link-list');

  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('dictu-link-list__item');
    listItem.appendChild(createLink(item));
    fragment.appendChild(listItem);
  });

  list.appendChild(fragment);
  return list;
};

const createColumn = (column, headingLevel) => {
  const columnDiv = document.createElement('div');
  columnDiv.classList.add('dictu-page-footer__column');

  // Add column title
  const title = createHeading(column.title, headingLevel + 1);
  if (title) columnDiv.appendChild(title);

  // Add column links
  const linkList = createLinkList(column.items);
  if (linkList) columnDiv.appendChild(linkList);

  return columnDiv;
};

// Reusable data for stories
export const DefaultFooterData = {
  heading: 'Footer heading',
  text: 'Dit is een voettekst die extra informatie biedt.',
  headingLevel: 2,
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
};

export const PageFooter = {
  render: args => {
    const { heading, text, columns, headingLevel = 2 } = args || {};

    // Create main footer element
    const pageFooter = document.createElement('footer');
    pageFooter.classList.add('dictu-page-footer');
    pageFooter.setAttribute('role', 'contentinfo');

    // Create container
    const container = document.createElement('div');
    container.classList.add('dictu-page-footer__container', 'dictu-container');

    // Create text container
    if (heading || text) {
      const textContainer = document.createElement('div');
      textContainer.classList.add('dictu-page-footer__text-container');

      // Add heading and text
      const headingElement = createHeading(heading, headingLevel);
      if (headingElement) textContainer.appendChild(headingElement);

      const textElement = createParagraph(text);
      if (textElement) textContainer.appendChild(textElement);

      container.appendChild(textContainer);
    }

    // Create columns if they exist
    if (columns?.length) {
      const columnsContainer = document.createElement('div');
      columnsContainer.classList.add('dictu-page-footer__columns');

      const fragment = document.createDocumentFragment();
      columns.forEach(column => {
        fragment.appendChild(createColumn(column, 4));
      });

      columnsContainer.appendChild(fragment);
      container.appendChild(columnsContainer);
    }

    pageFooter.appendChild(container);
    return pageFooter;
  },
  args: DefaultFooterData,
};

// Minimal variant with no columns
export const MinimalPageFooter = {
  ...PageFooter,
  args: {
    heading: 'Minimale Footer',
    text: 'Een eenvoudige footer zonder kolommen.',
    headingLevel: 2,
    columns: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een minimale variant van de PageFooter met alleen een hoofdtekst en geen kolommen voor eenvoudige use cases.',
      },
    },
  },
};

// Minimal variant with only columns
export const MinimalPageFooterOnlyColumns = {
  ...PageFooter,
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
  parameters: {
    docs: {
      description: {
        story: 'Een minimale variant van de PageFooter met alleen kolommen.',
      },
    },
  },
};
