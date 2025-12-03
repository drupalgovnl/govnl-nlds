import { Icon } from '../icon/icon.component';

export function Button({ label, variant, iconPosition, icon, disabled }) {
  const classes = ['dictu-button', `dictu-button--${variant}`, 'dictu-focus-ring'];
  const $button = document.createElement('button');

  $button.textContent = label;

  if (disabled) {
    $button.disabled = disabled;
  }

  if (icon) {
    const $icon = new Icon({ icon });
    $button.insertAdjacentElement(iconPosition === 'before' ? 'afterbegin' : 'beforeend', $icon);
  }

  $button.classList.add(...classes);

  return $button;
}
