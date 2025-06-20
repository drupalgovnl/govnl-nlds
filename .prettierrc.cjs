module.exports = {
  // String formatting
  singleQuote: true,
  quoteProps: 'as-needed',

  // Semicolons and trailing commas
  semi: true,
  trailingComma: 'es5',

  // Spacing and indentation
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Brackets and parentheses
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',

  // Line endings
  endOfLine: 'lf',

  // Embedded languages
  embeddedLanguageFormatting: 'auto',

  // File-specific overrides
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
        proseWrap: 'always',
        singleQuote: false, // Use double quotes in Markdown for better compatibility
      },
    },
    {
      files: ['*.scss', '*.css'],
      options: {
        singleQuote: false, // CSS/SCSS traditionally uses double quotes
        printWidth: 120, // Allow longer lines for CSS properties
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 80,
        tabWidth: 2,
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        printWidth: 80,
        singleQuote: true,
      },
    },
    {
      // Package.json files - more compact formatting
      files: ['package.json', '*/package.json'],
      options: {
        printWidth: 80,
        tabWidth: 2,
      },
    },
    {
      // Storybook stories - allow longer lines for better story readability
      files: '*.stories.@(js|jsx|ts|tsx|mjs)',
      options: {
        printWidth: 120,
        singleQuote: true,
      },
    },
  ],
};
