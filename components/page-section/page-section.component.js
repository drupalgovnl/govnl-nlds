import { Heading } from '../heading/heading.component';

export const PageSection = ({ content, id, ariaLabel, title, gap, classNames = [] }) => {
  const section = document.createElement('section');
  section.classList.add('dictu-section', ...classNames);

  if (gap !== 'none') {
    section.classList.add(`dictu-section--gap-${gap}`);
  }

  if (title) {
    const titleElement = Heading({ content: title, level: 2 });
    if (id) {
      titleElement.id = id;
      section.setAttribute('aria-labelledby', id);
    }
    section.appendChild(titleElement);
  }

  if (content) {
    if (typeof content === 'string') {
      // Sanitize and insert HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const fragment = document.createDocumentFragment();

      // Append all body children to fragment
      Array.from(doc.body.childNodes).forEach(node => {
        fragment.appendChild(node.cloneNode(true));
      });

      section.appendChild(fragment);
    }

    if (content instanceof HTMLElement) {
      section.appendChild(content);
    }

    if (content instanceof Array) {
      content.forEach(item => {
        if (item instanceof HTMLElement) {
          section.appendChild(item);
        }
      });
    }
  }

  if (ariaLabel && !title) {
    section.setAttribute('aria-label', ariaLabel);
  }

  return section;
};
