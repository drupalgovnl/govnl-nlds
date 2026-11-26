import { Button } from '../button/button.component.js';
import { Heading } from '../heading/heading.component.js';
import { LinkAsButton } from '../link-as-button/link-as-button.component.js';

export function DataSummary({
  items = [],
  title,
  step,
  action,
  headingLevel = 2,
  headingAppearance = 4,
} = {}) {
  const root = document.createElement(title ? 'section' : 'div');
  root.classList.add('dictu-data-summary');

  if (title || step != null || action?.label) {
    root.appendChild(createHead({ title, step, action, headingLevel, headingAppearance }));
  }

  const content = document.createElement('dl');
  content.classList.add('dictu-data-summary__content');

  items.forEach(item => {
    content.appendChild(createItem(item));
  });

  root.appendChild(content);

  return root;
}

function createHead({ title, step, action, headingLevel, headingAppearance }) {
  const head = document.createElement('div');
  head.classList.add('dictu-data-summary__head');

  if (title || step != null) {
    const titleElement = document.createElement('div');
    titleElement.classList.add('dictu-data-summary__title');

    const heading = Heading({
      content: '',
      level: headingLevel,
      appearanceLevel: headingAppearance,
    });
    heading.classList.add('dictu-data-summary__heading');

    if (step != null && step !== '') {
      const marker = document.createElement('span');
      marker.classList.add('dictu-data-summary__marker');
      marker.textContent = String(step);
      heading.appendChild(marker);
    }

    const headingText = document.createElement('span');
    headingText.classList.add('dictu-data-summary__heading-text');
    headingText.textContent = title ?? '';
    heading.appendChild(headingText);

    titleElement.appendChild(heading);
    head.appendChild(titleElement);
  }

  if (action?.label) {
    const actionElement = document.createElement('div');
    actionElement.classList.add('dictu-data-summary__action');
    actionElement.appendChild(createHeadAction(action));
    head.appendChild(actionElement);
  }

  return head;
}

function createHeadAction(action) {
  if (action.href) {
    return LinkAsButton({
      content: action.label,
      href: action.href,
      size: 'small',
      variant: 'secondary-action',
    });
  }

  const button = Button({
    label: action.label,
    size: 'small',
    variant: 'secondary-action',
  });
  button.type = 'button';

  return button;
}

function createItem(item) {
  const group = document.createElement('div');
  group.classList.add('dictu-data-summary__item');

  const label = document.createElement('dt');
  label.classList.add('dictu-data-summary__item-label');
  label.textContent = item.label ?? item.key ?? '';

  const value = document.createElement('dd');
  value.classList.add('dictu-data-summary__item-value');

  const valueContent = document.createElement('span');
  valueContent.classList.add('dictu-data-summary__item-value-content');
  appendValue(valueContent, item.value);
  value.appendChild(valueContent);

  const actionLabel = item.action?.label ?? item.action?.content;

  if (actionLabel) {
    const action = document.createElement('div');
    action.classList.add('dictu-data-summary__item-action');
    action.appendChild(
      createHeadAction({
        href: item.action.href,
        label: actionLabel,
      })
    );
    value.appendChild(action);
  }

  group.append(label, value);

  return group;
}

function appendValue(valueElement, value) {
  const lines = Array.isArray(value) ? value : [value ?? ''];

  if (lines.length === 1) {
    valueElement.textContent = lines[0] ?? '';
    return;
  }

  lines.forEach(line => {
    const lineElement = document.createElement('span');
    lineElement.classList.add('dictu-data-summary__item-value-line');
    lineElement.textContent = line ?? '';
    valueElement.appendChild(lineElement);
  });
}
