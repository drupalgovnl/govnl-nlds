import { Icon } from '../icon/icon.component.js';

export const List = ({ items, type = 'unordered', icon }) => {
  const listTag = type === 'ordered' ? 'ol' : 'ul';
  const list = document.createElement(listTag);
  list.classList.add('dictu-list');

  switch (type) {
    case 'ordered':
      list.classList.add('dictu-list--ordered');
      break;
    case 'icon':
      list.classList.add('dictu-list--icon');
      break;
    default:
      list.classList.add('dictu-list--unordered');
  }

  items.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('dictu-list__item');

    let content = item;
    let children = null;

    if (typeof item === 'object' && item !== null) {
      content = item.label;
      children = item.children;
    }

    const contentSpan = document.createElement('span');
    contentSpan.classList.add('dictu-list__item-content');
    if (type === 'icon' && icon) {
      const iconElement = Icon({ icon, label: content, classes: ['dictu-list__item-icon'] });
      li.appendChild(iconElement);
    }
    contentSpan.textContent = content;
    li.appendChild(contentSpan);

    if (children) {
      const subList = List({ items: children, type, icon });
      li.appendChild(subList);
    }

    list.appendChild(li);
  });

  return list;
};
