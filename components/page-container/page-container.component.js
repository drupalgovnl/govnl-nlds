export const PageContainer = ({ content, id, classNames = [] }) => {
  const container = document.createElement('div');
  container.classList.add('dictu-container', ...classNames);
  if (id) container.setAttribute('id', id);

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
  }

  return container;
};
