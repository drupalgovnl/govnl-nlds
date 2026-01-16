export function Checkbox({ id, checked }) {
  const classes = ['dictu-checkbox', 'dictu-focus-ring'];
  const checkbox = document.createElement('input');

  checkbox.id = id;
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = checked;
  checkbox.classList.add(...classes);

  return checkbox;
}
