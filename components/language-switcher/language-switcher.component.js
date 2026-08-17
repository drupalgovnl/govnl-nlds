import { Icon } from '../icon/icon.component';

export const LanguageSwitcher = ({
  content,
  iconAfter,
  iconBefore,
  classNames = [],
  options = ['Nederlands', 'English', 'Deutsch'],
}) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('dictu-language-switcher-wrapper', ...classNames);

  const languageSwitcher = document.createElement('select');
  languageSwitcher.classList.add('dictu-language-switcher', `dictu-focus-ring`);
  languageSwitcher.setAttribute('aria-label', 'Kies een taal');

  options.forEach(language => {
    const optionElement = document.createElement('option');
    optionElement.value = language;
    optionElement.textContent = language;

    if (language === content) {
      optionElement.selected = true;
    }

    languageSwitcher.appendChild(optionElement);
  });

  wrapper.appendChild(languageSwitcher);

  if (iconBefore) {
    const languageSwitcherIconBefore = new Icon({
      icon: iconBefore,
      iconLabel: '',
      classes: ['dictu-language-switcher__icon-before'],
    });

    wrapper.insertAdjacentElement('afterbegin', languageSwitcherIconBefore);
  }

  if (iconAfter) {
    const languageSwitcherIconAfter = new Icon({
      icon: iconAfter,
      iconLabel: '',
      classes: ['dictu-language-switcher__icon-after'],
    });

    wrapper.insertAdjacentElement('beforeend', languageSwitcherIconAfter);
  }

  return wrapper;
};
