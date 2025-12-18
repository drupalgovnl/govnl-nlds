import { Link } from '../link/link.component';
import { Icon } from '../icon/icon.component';

export function Pagination({ pages, size, previous, next, classNames = [] }) {
  const classes = ['dictu-pagination', ...classNames];
  const relativeClasses = [
    'dictu-pagination__link',
    'dictu-pagination__relative-link',
    'dictu-focus-ring',
  ];
  const $pagination = document.createElement('div');
  $pagination.classList.add(classes);

  // Add link to previous page
  if (previous) {
    const label = size === 'small' ? previous.label : '';
    const $previousIcon = Icon({
      icon: previous.icon,
      label: label,
    });

    const $previousLink = Link({
      content: $previousIcon,
      href: previous.url,
      classNames: relativeClasses,
    });

    if (size != 'small') {
      $previousLink.insertAdjacentText('beforeend', previous.label);
      $previousLink.classList.add('dictu-pagination__relative-link-previous--small');
    }

    $previousLink.classList.add('dictu-pagination__relative-link-previous');

    $pagination.appendChild($previousLink);
  }

  // Add links for every page
  pages.forEach(page => {
    if (page.href) {
      const $link = Link({
        content: page.label,
        href: page.url,
        classNames: ['dictu-pagination__link', 'dictu-focus-ring'],
      });
      $pagination.appendChild($link);
    } else {
      const $current = document.createElement('span');
      $current.innerHTML = page.label;
      $current.classList.add('dictu-pagination__current');
      $pagination.appendChild($current);
    }
  });

  // Add link to next page
  if (next) {
    const label = size === 'small' ? next.label : '';
    const $nextIcon = Icon({
      icon: next.icon,
      label: label,
    });

    const $nextLink = Link({
      content: $nextIcon,
      href: next.url,
      classNames: relativeClasses,
    });

    if (size != 'small') {
      $nextLink.insertAdjacentText('afterbegin', next.label);
      $nextLink.classList.add('dictu-pagination__relative-link-next--small');
    }

    $nextLink.classList.add('dictu-pagination__relative-link-next');

    $pagination.appendChild($nextLink);
  }

  return $pagination;
}

// focus-ring werkt niet
// meerdere functions maken voor previous en next (relative + sub functions?)
