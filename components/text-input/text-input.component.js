export function TextInput({ id, placeholder, size, error, disabled, classNames = [] }) {
  const classes = ['dictu-text-input', 'dictu-focus-ring', ...classNames];
  const $textInput = document.createElement('input');

  $textInput.id = id;
  $textInput.setAttribute('type', 'text');
  $textInput.classList.add(...classes);

  if (size === 'small') {
    $textInput.classList.add('dictu-text-input--small');
  }

  if (error) {
    $textInput.classList.add('dictu-text-input--error');
  }
  if (disabled) {
    $textInput.classList.add('dictu-text-input--read-only');
    $textInput.setAttribute('disabled', '');
  }

  if (placeholder) {
    $textInput.setAttribute('placeholder', placeholder);
  }

  return $textInput;
}
