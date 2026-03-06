import { Icon } from '../icon/icon.component';

export const Link = ({ content, href, external, icon, iconLabel, classNames = [] }) => {
  const link = document.createElement('a');
  link.classList.add('dictu-link', ...classNames);
  link.href = href;

  const isDomNode = content?.nodeType !== undefined;
  isDomNode ? link.appendChild(content) : (link.innerHTML = content);

  if (icon) {
    const linkIcon = new Icon({
      icon,
      label: iconLabel,
      classes: ['dictu-link__icon'],
    });

    link.classList.add('dictu-link--with-icon');
    link.appendChild(linkIcon);
  }

  if (external) {
    link.setAttribute('rel', 'external');
  }

  return link;
};
