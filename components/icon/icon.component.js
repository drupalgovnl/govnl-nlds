export function Icon({ icon, label = '', classes = [] }) {
  const componentClasses = ['dictu-icon', ...classes];
  const $icon = document.createElement('span');

  if (label && label.length > 0) {
    $icon.setAttribute('aria-label', label);
  } else {
    $icon.setAttribute('aria-hidden', 'true');
  }

  $icon.innerHTML = icon;
  $icon.classList.add(...componentClasses);

  return $icon;
}
