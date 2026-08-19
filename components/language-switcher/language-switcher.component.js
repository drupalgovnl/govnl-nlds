import { Icon } from '../icon/icon.component';

export const LanguageSwitcher = ({ selected, expanded, items }) => {
  const languageSwitcher = document.createElement('div');
  languageSwitcher.classList.add('dictu-language-switcher');

  languageSwitcher.appendChild(createLanguageSwitcherSelectListToggler(selected, expanded));

  if (expanded) {
    languageSwitcher.appendChild(createLanguageSwitcherSelectList(items));
  }

  return languageSwitcher;
};

const createLanguageSwitcherSelectListToggler = (selected, expanded) => {
  const languageSwitcherSelectListToggler = document.createElement('button');
  languageSwitcherSelectListToggler.classList.add('dictu-language-switcher__toggler');
  languageSwitcherSelectListToggler.innerHTML = selected;
  languageSwitcherSelectListToggler.setAttribute('aria-expanded', expanded);

  const languageSwitcherIconStart = new Icon({
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M9.6525 11.3025L7.7475 9.42L7.77 9.3975C9.075 7.9425 10.005 6.27 10.5525 4.5H12.75V3H7.5V1.5H6V3H0.75V4.4925H9.1275C8.625 5.94 7.83 7.3125 6.75 8.5125C6.0525 7.74 5.475 6.8925 5.0175 6H3.5175C4.065 7.2225 4.815 8.3775 5.7525 9.42L1.935 13.185L3 14.25L6.75 10.5L9.0825 12.8325L9.6525 11.3025ZM13.875 7.5H12.375L9 16.5H10.5L11.34 14.25H14.9025L15.75 16.5H17.25L13.875 7.5ZM11.91 12.75L13.125 9.5025L14.34 12.75H11.91Z"/></svg>',
    classes: ['dictu-language-switcher__icon-start'],
  });

  const languageSwitcherIconEnd = new Icon({
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"/></svg>',
    classes: ['dictu-language-switcher__icon-end'],
  });

  languageSwitcherSelectListToggler.insertAdjacentElement('afterbegin', languageSwitcherIconStart);
  languageSwitcherSelectListToggler.insertAdjacentElement('beforeend', languageSwitcherIconEnd);

  return languageSwitcherSelectListToggler;
};

const createLanguageSwitcherSelectList = items => {
  const languageSwitchSelectList = document.createElement('ul');
  languageSwitchSelectList.classList.add('dictu-language-switcher__select-list');

  languageSwitchSelectList.appendChild(createLanguageSwitcherSelectListFirstItem());

  items.forEach(item => {
    languageSwitchSelectList.appendChild(createLanguageSwitcherSelectListItem(item));
  });

  return languageSwitchSelectList;
};

const createLanguageSwitcherSelectListFirstItem = () => {
  const languageSwitchSelectListFirstItem = document.createElement('div');
  languageSwitchSelectListFirstItem.classList.add(
    'dictu-language-switcher__select-list-first-item'
  );
  languageSwitchSelectListFirstItem.innerHTML = 'Taal';

  return languageSwitchSelectListFirstItem;
};

const createLanguageSwitcherSelectListItem = item => {
  const selectlistItem = document.createElement('li');
  selectlistItem.classList.add('dictu-language-switcher__select-list-item');
  selectlistItem.innerHTML = item;

  return selectlistItem;
};
