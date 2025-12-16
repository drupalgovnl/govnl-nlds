export function TextInput({ id, placeholder, size, error, classNames }) {
  const classes = ['dictu-text-input', ...classNames.split(' ').filter(cn => cn)];
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

  if (placeholder) {
    $textInput.setAttribute('placeholder', placeholder);
  }

  return $textInput;
}
