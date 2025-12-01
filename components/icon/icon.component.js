export function Icon({ icon, label = undefined, classes = ['dictu-icon'] }) {
  const componentClasses = [...classes];
  const $icon = document.createElement('span');

  if (label) {
    $icon.setAttribute('aria-label', label);
  } else {
    $icon.setAttribute('aria-hidden', 'true');
  }

  $icon.innerHTML = icon;
  $icon.classList.add(...componentClasses);

  return $icon;
}
