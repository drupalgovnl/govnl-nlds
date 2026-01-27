import { Link } from '../link/link.component';
import { Icon } from '../icon/icon.component';

export const Pagination = ({ pages, size, previous, next, classNames = [] }) => {
  const classes = ['dictu-pagination', ...classNames];
  const relativeClasses = [
    'dictu-pagination__link',
    'dictu-pagination__relative-link',
    'dictu-focus-ring',
  ];
  const pagination = document.createElement('div');
  pagination.classList.add(...classes);

  // helper to create page element (link or current span)
  const createPageNode = page => {
    if (page.href) {
      return Link({
        content: page.label,
        href: page.url,
        classNames: ['dictu-pagination__link', 'dictu-focus-ring'],
      });
    } else {
      const current = document.createElement('span');
      current.innerHTML = page.label;
      current.classList.add('dictu-pagination__current');
      return current;
    }
  };

  // Add link to previous page
  if (previous) {
    const label = size === 'small' ? previous.label : '';
    const previousIcon = Icon({
      icon: previous.icon,
      label: label,
      classes: ['dictu-pagination__icon'],
    });

    const previousLink = Link({
      content: previousIcon,
      href: previous.url,
      classNames: relativeClasses,
    });

    if (size !== 'small') {
      previousLink.insertAdjacentText('beforeend', previous.label);
    } else {
      previousLink.classList.add('dictu-pagination__relative-link-previous--small');
    }

    previousLink.classList.add('dictu-pagination__relative-link-previous');

    pagination.appendChild(previousLink);
  }

  // Add links for pages, with ellipses if more than 5 items
  if (Array.isArray(pages)) {
    if (pages.length > 5) {
      // show first 3, ellipsis, last
      const firstThree = pages.slice(0, 3);
      firstThree.forEach(p => pagination.appendChild(createPageNode(p)));

      const ellipsis = document.createElement('span');
      ellipsis.classList.add('dictu-pagination__ellipsis');
      ellipsis.innerHTML = '&hellip;';
      pagination.appendChild(ellipsis);

      const last = pages[pages.length - 1];
      pagination.appendChild(createPageNode(last));
    } else {
      // show all
      pages.forEach(page => {
        pagination.appendChild(createPageNode(page));
      });
    }
  }

  // Add link to next page
  if (next) {
    const label = size === 'small' ? next.label : '';
    const nextIcon = Icon({
      icon: next.icon,
      label: label,
      classes: ['dictu-pagination__icon'],
    });

    const nextLink = Link({
      content: nextIcon,
      href: next.url,
      classNames: relativeClasses,
    });

    if (size !== 'small') {
      nextLink.insertAdjacentText('afterbegin', next.label);
    } else {
      nextLink.classList.add('dictu-pagination__relative-link-next-small');
    }

    nextLink.classList.add('dictu-pagination__relative-link-next');

    pagination.appendChild(nextLink);
  }

  return pagination;
};
