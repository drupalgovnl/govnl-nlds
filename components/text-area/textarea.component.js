export function Textarea({ id, name, rows, cols, placeholder, error, disabled, classNames = [] }) {
  const classes = ['dictu-textarea', 'dictu-focus-ring', ...classNames];
  const $textarea = document.createElement('textarea');

  $textarea.id = id;
  $textarea.name = name;
  $textarea.classList.add(...classes);
  $textarea.rows = rows;
  $textarea.cols = cols;

  if (error) {
    $textarea.classList.add('dictu-textarea--error');
  }
  if (disabled) {
    $textarea.classList.add('dictu-textarea--read-only');
    $textarea.setAttribute('disabled', '');
  }

  if (placeholder) {
    $textarea.setAttribute('placeholder', placeholder);
  }

  return $textarea;
}
