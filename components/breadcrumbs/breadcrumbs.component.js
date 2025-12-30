import { Link } from '../link/link.component';
import { Icon } from '../icon/icon.component';

export const Breadcrumbs = ({ crumbs, classNames, isMobile }) => {
  const chevronRightIcon = Icon({
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52851 3.52864C5.78886 3.26829 6.21097 3.26829 6.47132 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.2111 10.4713 8.47144L6.47132 12.4714C6.21097 12.7318 5.78886 12.7318 5.52851 12.4714C5.26816 12.2111 5.26816 11.789 5.52851 11.5286L9.05711 8.00004L5.52851 4.47145C5.26816 4.2111 5.26816 3.78899 5.52851 3.52864Z" fill="#475569"/>
</svg>
`,
    classes: ['dictu-breadcrumbs__icon'],
  });
  const chevronLeftIcon = Icon({
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4713 3.52864C10.7317 3.78899 10.7317 4.2111 10.4713 4.47145L6.94273 8.00004L10.4713 11.5286C10.7317 11.789 10.7317 12.2111 10.4713 12.4714C10.211 12.7318 9.78886 12.7318 9.52851 12.4714L5.52851 8.47144C5.26816 8.2111 5.26816 7.78899 5.52851 7.52864L9.52851 3.52864C9.78886 3.26829 10.211 3.26829 10.4713 3.52864Z" fill="#154273"/>
</svg>`,
    classes: ['dictu-breadcrumbs__icon'],
  });
  const classes = ['dictu-breadcrumbs', ...(classNames || [])];
  const breadcrumbs = document.createElement('nav');
  const breadcrumbList = document.createElement('ol');

  breadcrumbs.setAttribute('aria-label', 'Breadcrumb');
  breadcrumbs.classList.add(...classes);
  breadcrumbList.classList.add('dictu-breadcrumbs__list');

  if (isMobile) {
    // breadcrumbs should always have at least 2 levels: the current level and one above.
    if (!crumbs.length >= 1) return;

    const listItem = createBreadcrumbListItem(crumbs.at(crumbs.length - 2));

    listItem.insertAdjacentElement('afterbegin', chevronLeftIcon.cloneNode(true));

    breadcrumbList.appendChild(listItem);
  } else {
    crumbs.forEach((crumb, index) => {
      const listItem = createBreadcrumbListItem(crumb);

      if (index !== crumbs.length - 1) {
        listItem.insertAdjacentElement('beforeend', chevronRightIcon.cloneNode(true));
      }

      breadcrumbList.appendChild(listItem);
    });
  }

  breadcrumbs.appendChild(breadcrumbList);

  return breadcrumbs;
};

const createBreadcrumbListItem = crumb => {
  if (!crumb.label) return;

  const listItem = document.createElement('li');
  listItem.classList.add('dictu-breadcrumbs__list-item');

  if (crumb.link) {
    const link = Link({
      content: `${crumb.label}`,
      href: crumb.link,
      classNames: 'dictu-breadcrumbs__link',
    });

    listItem.appendChild(link);
  } else {
    const content = document.createElement('span');
    content.innerHTML = crumb.label;
    content.classList.add('dictu-breadcrumbs__current');
    listItem.appendChild(content);
  }

  return listItem;
};
