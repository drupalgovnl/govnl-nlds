import { Icon } from '../icon/icon.component.js';

export function Fieldset({
  content,
  legendText,
  required,
  requiredText,
  legendVariant,
  descriptionText,
  error,
  errorText,
  errorIcon,
}) {
  const classes = ['dictu-fieldset'];
  const fieldset = document.createElement('fieldset');
  fieldset.classList.add(...classes);

  fieldset.appendChild(createLegend({ legendText, required, requiredText, legendVariant }));

  if (descriptionText) {
    fieldset.appendChild(createDescription({ descriptionText }));
  }

  if (error) {
    fieldset.appendChild(createErrorMessage({ errorText, errorIcon }));
    fieldset.classList.add('dictu-fieldset--error');
  }

  fieldset.appendChild(createContent({ content }));

  return fieldset;
}

function createLegend({ legendText, required, requiredText, legendVariant }) {
  const legend = document.createElement('legend');
  legend.innerHTML = legendText;
  legend.classList.add('dictu-fieldset__legend');

  if (legendVariant === 'strong') {
    legend.classList.add('dictu-fieldset__legend--strong');
  }

  if (required) {
    const requiredSpan = document.createElement('span');
    requiredSpan.classList.add('dictu-fieldset__legend-required');
    requiredSpan.innerHTML = requiredText;

    legend.appendChild(requiredSpan);
  }

  return legend;
}

function createDescription({ descriptionText }) {
  const description = document.createElement('span');
  description.classList.add('dictu-fieldset__description');
  description.innerHTML = descriptionText;

  return description;
}

function createErrorMessage({ errorText, errorIcon }) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('dictu-fieldset__error-message');
  errorMessage.innerHTML = errorText;

  const icon = Icon({
    icon: errorIcon,
    classNames: ['dictu-fieldset__error-icon'],
  });

  errorMessage.insertAdjacentElement('afterbegin', icon);

  return errorMessage;
}

function createContent({ content }) {
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('dictu-fieldset__content');

  if (!Array.isArray(content)) {
    content = [content];
  }

  content.forEach(item => {
    contentWrapper.appendChild(item);
  });

  return contentWrapper;
}
