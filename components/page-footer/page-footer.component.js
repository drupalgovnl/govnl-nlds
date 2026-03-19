import { Paragraph } from '../paragraph/paragraph.component';
import { LinkList } from '../link-list/link-list.component';
import { Heading } from '../heading/heading.component';
import { PageContainer } from '../page-container/page-container.component';

export const PageFooter = ({ heading, text, columns, headingLevel = 2, classNames = [] }) => {
  // Create main footer element
  const pageFooter = document.createElement('footer');
  pageFooter.classList.add('dictu-page-footer', ...classNames);
  pageFooter.setAttribute('role', 'contentinfo');

  // Create container
  const container = PageContainer({ classNames: ['dictu-page-footer__container', ...classNames] });

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
      fragment.appendChild(createColumn(column, headingLevel));
    });

    columnsContainer.appendChild(fragment);
    container.appendChild(columnsContainer);
  }

  pageFooter.appendChild(container);

  return pageFooter;
};

const createParagraph = text => {
  return Paragraph({ text, classNames: ['dictu-page-footer__text'] });
};

const createHeading = (text, level) => {
  return Heading({
    content: text,
    level,
    classNames: ['dictu-page-footer-heading', `dictu-heading--level-${level}`],
  });
};

const createLinkList = items => {
  return LinkList({ items, classNames: ['dictu-page-footer__link-list'] });
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
