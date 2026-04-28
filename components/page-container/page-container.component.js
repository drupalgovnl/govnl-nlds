export const PageContainer = ({ content, id, gap, classNames = [] }) => {
  const container = document.createElement('div');
  container.classList.add('dictu-container', ...classNames);
  if (id) container.setAttribute('id', id);

  if (gap !== 'none') {
    container.classList.add(`dictu-container--gap-${gap}`);
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

      container.appendChild(fragment);
    }

    if (content instanceof HTMLElement) {
      container.appendChild(content);
    }

    if (content instanceof Array) {
      content.forEach(item => {
        if (item instanceof HTMLElement) {
          container.appendChild(item);
        }
      });
    }
  }

  return container;
};
