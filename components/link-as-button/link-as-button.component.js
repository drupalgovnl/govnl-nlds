export const LinkAsButton = ({ content, href, variant, size, classNames = [] }) => {
  const linkAsbutton = document.createElement('a');
  linkAsbutton.classList.add(
    'dictu-link-as-button',
    `dictu-link-as-button--${variant}`,
    `dictu-focus-ring`,
    ...classNames
  );
  linkAsbutton.href = href;

  if (size === 'small') {
    linkAsbutton.classList.add('dictu-link-as-button--small');
  }

  const isDomNode = content?.nodeType !== undefined;
  isDomNode ? linkAsbutton.appendChild(content) : (linkAsbutton.innerHTML = content);

  return linkAsbutton;
};
