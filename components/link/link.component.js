export const Link = ({ text, href, classNames }) => {
  const link = document.createElement('a');
  link.classList.add('dictu-link', ...classNames.split(' ').filter(cn => cn));

  const isDomNode = text?.nodeType !== undefined;

  link.href = href;

  isDomNode ? link.appendChild(text) : (link.innerHTML = text);

  return link;
};
