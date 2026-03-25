import { Icon } from '../icon/icon.component';

export const LinkAsButton = ({ content, href, icon, iconLabel, classNames = [] }) => {
  const linkAsbutton = document.createElement('a');
  linkAsbutton.classList.add('dictu-link-as-button', ...classNames);
  linkAsbutton.href = href;

  const isDomNode = content?.nodeType !== undefined;
  isDomNode ? linkAsbutton.appendChild(content) : (linkAsbutton.innerHTML = content);

  if (icon) {
    const linkAsButtonIcon = new Icon({
      icon,
      label: iconLabel,
      classes: ['dictu-link-as-button__icon'],
    });

    linkAsbutton.classList.add('dictu-link--with-icon');
    linkAsbutton.appendChild(linkAsButtonIcon);
  }

  return linkAsbutton;
};
