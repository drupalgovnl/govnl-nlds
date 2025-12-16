import { Button } from '../button/button.component';
import { TextInput } from '../text-input/text-input.component';

export function Searchbar({ id, placeholder, size, label, icon, classNames = '' }) {
  const classes = ['dictu-searchbar', ...classNames.split(' ').filter(cn => cn)];

  const $searchbar = document.createElement('div');

  const $searchInput = new TextInput({
    id,
    placeholder,
    size,
    classNames: `dictu-searchbar__input ${size === 'small' ? 'dictu-searchbar__input--small' : null}`,
  });

  const $searchButton = new Button({
    label,
    variant: 'primary-action',
    iconPosition: 'before',
    icon,
    size,
    classNames: 'dictu-searchbar__button',
  });

  $searchbar.appendChild($searchInput);
  $searchbar.appendChild($searchButton);
  $searchbar.classList.add(...classes);

  return $searchbar;
}
