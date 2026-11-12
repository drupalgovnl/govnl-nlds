import { Link } from '../link/link.component.js';

const appearances = new Set(['column', 'row']);

export function DataSummary({ items = [], appearance = 'column' }) {
  const list = document.createElement('dl');
  const resolvedAppearance = appearances.has(appearance) ? appearance : 'column';

  list.classList.add('dictu-data-summary', `dictu-data-summary--${resolvedAppearance}`);

  items.forEach(item => {
    list.appendChild(createItem(item));
  });

  return list;
}

function createItem(item) {
  const row = document.createElement('div');
  row.classList.add('dictu-data-summary__item');

  const key = document.createElement('dt');
  key.classList.add('dictu-data-summary__item-key');
  key.textContent = item.key ?? '';

  const value = document.createElement('dd');
  value.classList.add('dictu-data-summary__item-value');
  appendValue(value, item.value);

  row.append(key, value);

  if (item.action?.href && item.action?.content) {
    const action = document.createElement('div');
    action.classList.add('dictu-data-summary__item-action');
    action.appendChild(
      Link({
        content: item.action.content,
        href: item.action.href,
        external: item.action.external,
        icon: item.action.icon,
        iconPosition: item.action.iconPosition,
        iconLabel: item.action.iconLabel,
      })
    );
    row.appendChild(action);
  }

  return row;
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
