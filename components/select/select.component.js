export function Select({
  id,
  name,
  options,
  required,
  inline,
  multiple,
  disabled,
  error,
  classNames = [],
}) {
  const classes = ['dictu-select', 'dictu-focus-ring', ...classNames];
  const select = document.createElement('select');

  select.id = id;
  select.name = name;
  select.classList.add(...classes);

  if (inline) {
    select.classList.add('dictu-select--inline');
  }

  if (multiple) {
    select.setAttribute('multiple', 'true');
    select.classList.add('dictu-select--multiple');
  }

  if (disabled) {
    select.setAttribute('disabled', 'true');
    select.ariaDisabled = true;
  }

  if (error) {
    select.classList.add('dictu-select--error');
    select.ariaInvalid = true;
  }

  if (required) {
    select.required = true;
    select.ariaRequired = true;
  }

  if (options) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      select.appendChild(optionElement);
    });
  }

  return select;
}
