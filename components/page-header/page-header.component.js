import { Link } from '../link/link.component';
import { Logo } from '../logo/logo.component';

export function PageHeader({ before, after, classNames = [] }) {
  const pageHeader = document.createElement('header');
  pageHeader.classList.add('dictu-page-header', ...classNames);

  const pageHeaderWrapper = document.createElement('div');
  pageHeaderWrapper.classList.add('dictu-page-header__wrapper');

  if (before) {
    pageHeaderWrapper.appendChild(createPageHeaderSlot(before, 'before'));
  }

  pageHeaderWrapper.appendChild(createPageHeaderLogo());

  if (after) {
    pageHeaderWrapper.appendChild(createPageHeaderSlot(after, 'after'));
  }

  pageHeader.appendChild(pageHeaderWrapper);

  return pageHeader;
}

const createPageHeaderSlot = (content, position) => {
  const pageHeaderSlotWrapper = document.createElement('div');
  pageHeaderSlotWrapper.classList.add(`dictu-page-header__wrapper-${position}`);

  if (content instanceof HTMLElement) {
    pageHeaderSlotWrapper.appendChild(content);
  } else if (typeof content === 'string') {
    pageHeaderSlotWrapper.innerHTML = content;
  }

  return pageHeaderSlotWrapper;
};

const createPageHeaderLogo = () => {
  const pageHeaderWrapperLogo = document.createElement('div');
  pageHeaderWrapperLogo.classList.add('dictu-page-header__wrapper-logo');

  const pageHeaderLogo = new Logo({
    image_src: 'assets/logo.svg',
    alt: 'Logo Rijksoverheid - Ga naar homepagina',
    title: 'Dienst ICT Uitvoering',
    subtitle: 'Ministerie van Economische Zaken',
  });

  const pageHeaderLink = new Link({
    content: pageHeaderLogo,
    href: '/',
    classNames: ['dictu-page-header__logo-link'],
  });

  pageHeaderWrapperLogo.appendChild(pageHeaderLink);

  return pageHeaderWrapperLogo;
};
