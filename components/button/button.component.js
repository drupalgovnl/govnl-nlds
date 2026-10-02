import { Icon } from '../icon/icon.component';

export function Button({ label, variant, iconPosition, icon, disabled, size, classNames = [] }) {
  const button = document.createElement('button');
  button.classList.add(
    'dictu-button',
    `dictu-button--${variant}`,
    'dictu-focus-ring',
    ...classNames
  );
  button.textContent = label;

  if (disabled) {
    button.disabled = disabled;
  }

  if (icon) {
    const $icon = new Icon({ icon, classNames: ['dictu-button__icon'] });
    button.insertAdjacentElement(iconPosition === 'before' ? 'afterbegin' : 'beforeend', $icon);
  }

  if (icon && !label) {
    button.classList.add('dictu-button--icon-only');
  }

  if (size === 'small') {
    button.classList.add('dictu-button--small');
  }

  return button;
}
