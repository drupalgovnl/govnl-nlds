import { Icon } from '../icon/icon.component';

export function Button({ label, variant, iconPosition, icon, disabled, size }) {
  const classes = ['dictu-button', `dictu-button--${variant}`, 'dictu-focus-ring'];
  const $button = document.createElement('button');

  $button.textContent = label;
  $button.classList.add(...classes);

  if (disabled) {
    $button.disabled = disabled;
  }

  if (icon) {
    const $icon = new Icon({ icon });
    $button.insertAdjacentElement(iconPosition === 'before' ? 'afterbegin' : 'beforeend', $icon);
  }

  if (icon && !label) {
    $button.classList.add('dictu-button--icon-only');
  }

  if (size === 'small') {
    $button.classList.add('dictu-button--small');
  }

  return $button;
}
