export const Link = ({ content, href, classNames = [] }) => {
  const link = document.createElement('a');
  link.classList.add('dictu-link', ...classNames.split(' ').filter(cn => cn));

  const isDomNode = content?.nodeType !== undefined;

  link.href = href;

  isDomNode ? link.appendChild(content) : (link.innerHTML = content);

  return link;
};
