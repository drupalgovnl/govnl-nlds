export function Icon({ icon, label = undefined }) {
  const classes = ['dictu-icon'];
  const $icon = document.createElement('span');

  if (label) {
    $icon.setAttribute('aria-label', label);
  } else {
    $icon.setAttribute('aria-hidden', 'true');
  }

  $icon.innerHTML = icon;
  $icon.classList.add(...classes);

  return $icon;
}
