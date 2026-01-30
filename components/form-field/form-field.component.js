import { Icon } from '../icon/icon.component.js';
import { Label } from '../label/label.component.js';

export function FormField({
  content,
  id,
  variant,
  labelText,
  required,
  requiredText,
  labelVariant,
  descriptionText,
  error,
  errorText,
  errorIcon,
}) {
  const classes = ['dictu-form-field'];
  const formField = document.createElement('div');
  formField.classList.add(...classes);

  if (variant === 'inline') {
    formField.classList.add('dictu-form-field--inline');
  }

  if (descriptionText && variant !== 'inline') {
    formField.appendChild(createDescription({ descriptionText }));
  }

  if (error && variant !== 'inline') {
    formField.appendChild(createErrorMessage({ errorText, errorIcon }));
    formField.classList.add('dictu-form-field--error');
  }

  formField.appendChild(content);
  formField.insertAdjacentElement(
    variant !== 'inline' ? 'afterbegin' : 'beforeend',
    Label({
      value: labelText,
      targetId: id,
      required,
      requiredMsg: requiredText,
      variant: labelVariant,
    })
  );

  return formField;
}

function createDescription({ descriptionText }) {
  const description = document.createElement('span');
  description.classList.add('dictu-form-field__description');
  description.innerHTML = descriptionText;

  return description;
}

function createErrorMessage({ errorText, errorIcon }) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('dictu-form-field__error-message');
  errorMessage.innerHTML = errorText;

  const icon = Icon({
    icon: errorIcon,
    classNames: ['dictu-form-field__error-icon'],
  });

  errorMessage.insertAdjacentElement('afterbegin', icon);

  return errorMessage;
}
