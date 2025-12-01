export function Label({ value, targetId, required, requiredMsg, variant }) {
  const classes = ['dictu-label'];
  const $label = document.createElement('label');

  $label.textContent = value;
  $label.setAttribute('for', targetId);
  $label.classList.add(...classes);

  if (variant === 'strong') {
    $label.classList.add('dictu-label--strong');
  }

  if (required && requiredMsg) {
    const $required = document.createElement('span');
    $required.classList.add('dictu-label__required');
    $required.textContent = requiredMsg;

    $label.appendChild($required);
  }

  return $label;
}
