export const Table = ({ data, caption, responsive }) => {
  const classes = ['dictu-table'];
  const $table = createTable(data, caption);
  $table.classList.add(...classes);

  if (responsive) {
    const $tableWrapper = document.createElement('div');
    $tableWrapper.classList.add('dictu-table__wrapper');
    $tableWrapper.appendChild($table);

    return $tableWrapper;
  }

  return $table;
};

const createTable = (data, caption) => {
  const $table = document.createElement('table');
  const $tableHead = createTableSection('thead', 'dictu-table__head');
  const $tableBody = createTableSection('tbody', 'dictu-table__body');
  const $tableFoot = createTableSection('tfoot', 'dictu-table__foot');

  if (caption) {
    const $caption = document.createElement('caption');
    $caption.textContent = caption;
    $caption.classList.add('dictu-table__caption');
    $table.appendChild($caption);
  }

  data.forEach(element => {
    switch (element.section) {
      case 'head':
        $tableHead.appendChild(createTableRow(element.data, element.rowspan));
        break;
      case 'foot':
        $tableFoot.appendChild(createTableRow(element.data, element.rowspan));
        break;
      default:
        $tableBody.appendChild(createTableRow(element.data, element.rowspan));
    }
  });

  if ($tableHead && $tableHead.hasChildNodes()) {
    $table.appendChild($tableHead);
  }

  if ($tableBody && $tableBody.hasChildNodes()) {
    $table.appendChild($tableBody);
  }

  if ($tableFoot && $tableFoot.hasChildNodes()) {
    $table.appendChild($tableFoot);
  }

  return $table;
};

const createTableSection = (tag, className) => {
  const $tableSection = document.createElement(tag);
  $tableSection.classList.add(className);

  return $tableSection;
};

const createTableRow = data => {
  const $tableRow = document.createElement('tr');

  data.forEach(cell => {
    switch (cell.purpose) {
      case 'column-header':
        $tableRow.appendChild(createTableHeader(cell, 'col'));
        break;
      case 'row-header':
        $tableRow.appendChild(createTableHeader(cell, 'row'));
        break;
      default:
        $tableRow.appendChild(createTableCell(cell));
    }
  });

  $tableRow.classList.add('dictu-table__row');

  return $tableRow;
};

const createTableCell = (cell, scope) => {
  const $tableCell = document.createElement('td');

  $tableCell.textContent = cell.value;

  if (scope) {
    $tableCell.setAttribute('scope', scope);
  }

  if (cell.colspan) {
    $tableCell.setAttribute('colspan', cell.colspan);
  }

  if (cell.rowspan) {
    $tableCell.setAttribute('rowspan', cell.rowspan);
  }

  if (cell.align === 'end') {
    $tableCell.classList.add('dictu-table__cell--align-end');
  }

  if (cell.accent) {
    $tableCell.classList.add('dictu-table__cell-accent');
  }

  $tableCell.classList.add('dictu-table__cell');

  return $tableCell;
};

const createTableHeader = (cell, scope) => {
  const $tableHeader = document.createElement('th');

  $tableHeader.textContent = cell.value;

  if (scope) {
    $tableHeader.setAttribute('scope', scope);
  }

  if (cell.colspan) {
    $tableHeader.setAttribute('colspan', cell.colspan);
  }

  if (cell.rowspan) {
    $tableHeader.setAttribute('rowspan', cell.rowspan);
  }

  if (cell.align === 'end') {
    $tableHeader.classList.add('dictu-table__cell--align-end');
  }

  $tableHeader.classList.add('dictu-table__header');

  return $tableHeader;
};
