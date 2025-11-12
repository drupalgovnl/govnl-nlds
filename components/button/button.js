export function Button({ label, variant, iconPosition, icon, disabled }) {
  const classes = ['dictu-button', `dictu-button--${variant}`, 'dictu-focus-ring'];
  const $button = document.createElement('button');

  $button.textContent = label;

  if (disabled) {
    $button.disabled = disabled;
  }

  if (icon) {
    // @TODO: Import icon component.
    const $icon = document.createElement('span');
    $icon.classList.add('dictu-icon');
    $icon.setAttribute('aria-hidden', true);
    $icon.innerHTML = icon;
    $button.insertAdjacentElement(iconPosition === 'before' ? 'afterbegin' : 'beforeend', $icon);
  }

  $button.classList.add(...classes);

  return $button;
}
