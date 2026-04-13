export const Heading = ({ content, level = 2, classNames = [] } = {}) => {
  const heading = document.createElement(`h${level}`);
  heading.classList.add('dictu-heading', `dictu-heading--level-${level}`, ...classNames);

  const isDomNode = content?.nodeType !== undefined;

  // Support passing either a DOM node or a string to fill the heading.
  isDomNode ? heading.appendChild(content) : content != null && (heading.innerText = content);

  return heading;
};
