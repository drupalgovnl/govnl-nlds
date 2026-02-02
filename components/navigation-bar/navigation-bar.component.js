import { Icon } from '../icon/icon.component';

export const NavigationBar = ({
  items = [],
  expanded = false,
  isMobile = false,
  menuId,
  classNames = [],
}) => {
  const navigationBar = document.createElement('nav');
  navigationBar.classList.add('dictu-navigation-bar', ...classNames);
  navigationBar.setAttribute('aria-label', 'Hoofdnavigatie');
  navigationBar.setAttribute('role', 'navigation');

  // Adds mobile menu toggle.
  const toggleIconOpen =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" /></svg>';
  const toggleIconClose =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" /></svg>';
  const menuToggle = document.createElement('button');
  menuToggle.classList.add('dictu-navigation-bar__toggle');
  menuToggle.setAttribute('aria-controls', menuId);
  menuToggle.setAttribute('aria-expanded', expanded);
  menuToggle.setAttribute('aria-haspopup', true);
  menuToggle.innerText = 'Menu';
  menuToggle.insertAdjacentElement(
    'afterbegin',
    Icon({
      icon: expanded ? toggleIconClose : toggleIconOpen,
      classes: ['dictu-navigation-bar__menu-icon'],
    })
  );

  navigationBar.appendChild(menuToggle);

  // Adds navigation items.
  navigationBar.appendChild(createNavigationList(items, isMobile, menuId, expanded));

  return navigationBar;
};

const createNavigationList = (items, isMobile, menuId, expanded) => {
  const navigationList = document.createElement('ul');
  navigationList.classList.add('dictu-navigation-bar__list');
  navigationList.id = menuId;
  navigationList.setAttribute('role', 'menubar');

  if (isMobile && !expanded) {
    navigationList.classList.add('dictu-display-none');
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
    navigationItem.appendChild(createNavigationSubmenuToggler(item.title, item.id, item.expanded));
    navigationItem.appendChild(createNavigationSubmenu(item.children, item.id, item.expanded));
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

const createNavigationSubmenu = (items, id, expanded = false) => {
  const navigationSubmenu = document.createElement('div');
  navigationSubmenu.classList.add('dictu-navigation-bar__submenu');
  navigationSubmenu.id = id;
  navigationSubmenu.appendChild(createNavigationSubmenuList(items));

  if (!expanded) {
    navigationSubmenu.classList.add('dictu-display-none');
  }

  return navigationSubmenu;
};

const createNavigationSubmenuToggler = (label, id, expanded = false) => {
  const navigationToggle = document.createElement('button');
  navigationToggle.classList.add('dictu-navigation-bar__submenu-toggler', 'dictu-focus-ring');
  navigationToggle.innerHTML = label;
  navigationToggle.setAttribute('aria-controls', id);
  navigationToggle.setAttribute('aria-expanded', expanded);
  navigationToggle.setAttribute('aria-haspopup', true);
  const icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>';
  const toggleIcon = Icon({ icon });
  navigationToggle.appendChild(toggleIcon);

  return navigationToggle;
};

const createNavigationSubmenuList = items => {
  const navigationSubmenuList = document.createElement('ul');
  navigationSubmenuList.classList.add('dictu-navigation-bar__submenu-list');
  navigationSubmenuList.setAttribute('role', 'menu');

  items.forEach(item => {
    const navigationSubmenuItem = document.createElement('li');
    navigationSubmenuItem.classList.add('dictu-navigation-bar__submenu-item');

    const navigationSubmenuLink = document.createElement('a');
    navigationSubmenuLink.classList.add(
      'dictu-navigation-bar__link',
      'dictu-navigation-bar__submenu-link',
      'dictu-focus-ring'
    );
    navigationSubmenuLink.href = item.link;
    navigationSubmenuLink.innerText = item.label;
    navigationSubmenuLink.setAttribute('role', 'menuitem');

    navigationSubmenuItem.appendChild(navigationSubmenuLink);
    navigationSubmenuList.appendChild(navigationSubmenuItem);
  });

  return navigationSubmenuList;
};
