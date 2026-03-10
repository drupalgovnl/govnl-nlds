import React from 'react';

import { PureArgsTable } from '@storybook/addon-docs/blocks';

const TOKEN_SOURCE_PATH_REGEX =
  /proprietary[\\/]design-tokens[\\/]src[\\/]components[\\/].*\.tokens\.json$/;
const TOKEN_FILE_NAME_REGEX = /[\\/]([^\\/]+)\.tokens\.json$/;

const componentTokenModules = import.meta.glob(
  '../../../../../proprietary/design-tokens/src/components/*.tokens.json',
  {
    eager: true,
    import: 'default',
  }
);

const formElementTokenModules = import.meta.glob(
  '../../../../../proprietary/design-tokens/src/components/form-elements/*.tokens.json',
  {
    eager: true,
    import: 'default',
  }
);

const tokenModules = {
  ...componentTokenModules,
  ...formElementTokenModules,
};

const normalizeModuleExport = moduleExport => {
  if (!moduleExport || typeof moduleExport !== 'object') {
    return null;
  }

  if (
    'default' in moduleExport &&
    moduleExport.default &&
    typeof moduleExport.default === 'object'
  ) {
    return moduleExport.default;
  }

  return moduleExport;
};

const getTokenBaseName = modulePath => modulePath.match(TOKEN_FILE_NAME_REGEX)?.[1] || null;

const getReadableSourcePath = modulePath => {
  const matchedPath = modulePath.match(TOKEN_SOURCE_PATH_REGEX)?.[0];
  return matchedPath ? matchedPath.replace(/\\/g, '/') : modulePath;
};

const buildTokenRegistry = modulesByPath => {
  const registry = {};

  Object.entries(modulesByPath).forEach(([modulePath, moduleExport]) => {
    const tokenBaseName = getTokenBaseName(modulePath);
    const tokenData = normalizeModuleExport(moduleExport);

    if (!tokenBaseName || !tokenData || typeof tokenData !== 'object') {
      return;
    }

    registry[tokenBaseName] = {
      sourcePath: getReadableSourcePath(modulePath),
      tokens: tokenData,
    };
  });

  return registry;
};

const tokenRegistry = buildTokenRegistry(tokenModules);

const aliasMap = {
  breadcrumbs: 'breadcrumb',
  searchbar: 'searchbar',
  'search-bar': 'searchbar',
};

const flattenTokenEntries = (node, path = []) => {
  if (!node || typeof node !== 'object') {
    return [];
  }

  if (Object.prototype.hasOwnProperty.call(node, '$value')) {
    return [
      {
        name: path.join('.'),
        defaultValue: String(node.$value),
        tokenType: node.$type || 'other',
      },
    ];
  }

  return Object.keys(node).flatMap(key => flattenTokenEntries(node[key], [...path, key]));
};

const normalizeComponentName = componentName => componentName.toLowerCase();

const withDashes = componentName => componentName.replace(/_/g, '-');

const compactName = componentName => componentName.replace(/-/g, '');

const toSingular = value => (value.endsWith('s') ? value.slice(0, -1) : value);

const buildLookupCandidates = componentName => {
  const normalized = normalizeComponentName(componentName);
  const dashed = withDashes(normalized);
  const compact = compactName(dashed);
  const singularDashed = toSingular(dashed);
  const singularCompact = toSingular(compact);

  return Array.from(
    new Set(
      [
        normalized,
        dashed,
        compact,
        singularDashed,
        singularCompact,
        aliasMap[normalized],
        aliasMap[dashed],
        aliasMap[compact],
      ].filter(Boolean)
    )
  );
};

const resolveTokenEntry = componentName => {
  const candidates = buildLookupCandidates(componentName);

  for (const candidate of candidates) {
    if (tokenRegistry[candidate]) {
      return tokenRegistry[candidate];
    }
  }

  return null;
};

const tokenTypeLabels = {
  color: 'Kleur',
  dimension: 'Afmeting',
  fontFamilies: 'Lettertypefamilie',
  fontSizes: 'Lettergrootte',
  fontWeights: 'Letterdikte',
  lineHeights: 'Regelhoogte',
  textDecoration: 'Tekstdecoratie',
  border: 'Rand',
  shadow: 'Schaduw',
  other: 'Tokenwaarde',
};

const toReadableWords = value => value.replace(/-/g, ' ');

const toSentence = value => value.charAt(0).toUpperCase() + value.slice(1);

const buildTokenDescription = ({ name, defaultValue, tokenType }) => {
  const pathParts = name.split('.').slice(1).map(toReadableWords);
  const readablePath = toSentence(pathParts.join(' > '));
  const readableType = tokenTypeLabels[tokenType] || toSentence(toReadableWords(tokenType));
  const isReference = defaultValue.startsWith('{') && defaultValue.endsWith('}');

  if (isReference) {
    return `${readablePath}. Type: ${readableType}. Verwijst naar ${defaultValue}.`;
  }

  return `${readablePath}. Type: ${readableType}.`;
};

const buildArgTableRows = tokenRows =>
  tokenRows.reduce((acc, tokenRow) => {
    const { name, defaultValue, tokenType } = tokenRow;

    acc[name] = {
      name,
      description: buildTokenDescription(tokenRow),
      table: {
        defaultValue: {
          summary: defaultValue,
        },
        type: {
          summary: tokenTypeLabels[tokenType] || tokenType,
        },
      },
    };

    return acc;
  }, {});

export const DesignTokensTable = ({ componentName }) => {
  const tokenEntry = resolveTokenEntry(componentName);

  if (!tokenEntry) {
    return (
      <p>
        Geen design tokens gevonden voor componentnaam: <code>{componentName}</code>.
      </p>
    );
  }

  const tokenRows = flattenTokenEntries(tokenEntry.tokens).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const argTableRows = buildArgTableRows(tokenRows);

  return (
    <>
      <p>
        Bronbestand: <code>{tokenEntry.sourcePath}</code>
      </p>
      <PureArgsTable rows={argTableRows} sort="alpha" />
    </>
  );
};
