export function RadioButton({ id, checked, name, value }) {
  const classes = ['dictu-radio-button', 'dictu-focus-ring'];
  const radioButton = document.createElement('input');

  radioButton.id = id;
  radioButton.setAttribute('type', 'radio');
  radioButton.checked = checked;
  radioButton.name = name;
  radioButton.value = value;
  radioButton.classList.add(...classes);

  return radioButton;
}
