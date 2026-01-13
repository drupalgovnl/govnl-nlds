import { Icon } from '../icon/icon.component';
import { LinkList } from '../link-list/link-list.component';

export const NavigationBar = ({
  items = [],
  expanded = false,
  isMobile = false,
  classNames = [],
}) => {
  const navigationBar = document.createElement('nav');

  // Adds home link.
  const homeIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" /></svg>';
  navigationBar.classList.add('dictu-navigation-bar', ...classNames);
  navigationBar.setAttribute('aria-label', 'Hoofdnavigatie');
  navigationBar.setAttribute('role', 'navigation');
  const homeLink = document.createElement('a');
  homeLink.classList.add('dictu-navigation-bar__link', 'dictu-navigation-bar__home');
  homeLink.setAttribute('aria-label', 'home');
  homeLink.appendChild(Icon({ icon: homeIcon, classes: ['dictu-navigation-bar__icon'] }));

  if (!isMobile) {
    homeLink.setAttribute('hidden', true);
  }

  navigationBar.appendChild(homeLink);

  // Adds mobile menu toggle.
  const toggleIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" /></svg>';
  const menuToggle = document.createElement('button');
  menuToggle.classList.add('dictu-navigation-bar__toggle');
  menuToggle.setAttribute('aria-label', 'home');
  menuToggle.setAttribute('aria-controls', 'home');
  menuToggle.setAttribute('aria-expanded', expanded);
  menuToggle.appendChild(Icon({ icon: toggleIcon, classes: ['dictu-navigation-bar__menu-icon'] }));

  if (!isMobile) {
    homeLink.setAttribute('hidden', true);
  }

  navigationBar.appendChild(menuToggle);

  // Adds navigation items.
  navigationBar.appendChild(createNavigationList(items, isMobile, expanded));

  return navigationBar;
};

const createNavigationList = (items, isMobile, expanded) => {
  const navigationList = document.createElement('ul');
  navigationList.classList.add('dictu-navigation-bar__list');
  navigationList.id = 'nav-list';
  navigationList.setAttribute('role', 'menubar');

  if (isMobile && !expanded) {
    navigationList.classList.add('dictu-navigation-bar__list--hidden');
  }

  items.forEach(item => {
    navigationList.appendChild(createNavigationItem(item));
  });

  return navigationList;
};

const createNavigationItem = item => {
  const navigationItem = document.createElement('li');
  navigationItem.classList.add('dictu-navigation-bar__item');

  if ('children' in item && item.children != null) {
    navigationItem.appendChild(createNavigationSubmenuToggler(item.title, item.expanded));
    navigationItem.appendChild(createNavigationSubmenu(item.children, item.expanded));
  } else {
    navigationItem.appendChild(createNavigationLink(item));
  }

  return navigationItem;
};

const createNavigationLink = item => {
  const navigationLink = document.createElement('a');
  navigationLink.classList.add('dictu-navigation-bar__link', 'dictu-focus-ring');
  navigationLink.setAttribute('role', 'menuitem');
  navigationLink.href = item.link;
  navigationLink.innerHTML = item.title;

  return navigationLink;
};

const createNavigationSubmenu = (items, expanded = false) => {
  const navigationSubmenu = document.createElement('div');
  navigationSubmenu.classList.add('dictu-navigation-bar__submenu');
  navigationSubmenu.appendChild(createNavigationSubmenuList(items));

  if (!expanded) {
    navigationSubmenu.classList.add('dictu-navigation-bar__submenu--hidden');
  }

  return navigationSubmenu;
};

const createNavigationSubmenuToggler = (label, expanded = false) => {
  const navigationToggle = document.createElement('button');
  navigationToggle.classList.add('dictu-navigation-bar__submenu-toggler', 'dictu-focus-ring');
  navigationToggle.innerHTML = label;
  navigationToggle.setAttribute('aria-expanded', expanded);
  const icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>';
  const toggleIcon = Icon({ icon });
  navigationToggle.appendChild(toggleIcon);

  return navigationToggle;
};

const createNavigationSubmenuList = items => {
  const navigationSubmenuList = LinkList({
    items,
    classNames: ['dictu-navigation-bar__submenu-list'],
  });
  navigationSubmenuList.setAttribute('role', 'menu');

  return navigationSubmenuList;
};
