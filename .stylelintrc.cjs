module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    // SCSS specific rules
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9-]*$',
    'scss/percent-placeholder-pattern': '^[a-z][a-zA-Z0-9-]*$',
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9-]*(__[a-z][a-zA-Z0-9-]*)?(--[a-z][a-zA-Z0-9-]*)?$',
    'scss/at-function-pattern': '^[a-z][a-zA-Z0-9-]*$',

    // General CSS rules
    'max-nesting-depth': 4, // Allow deeper nesting for BEM modifiers
    'no-duplicate-selectors': true,
    'declaration-block-no-duplicate-properties': true,

    // Comments
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    // Custom property patterns for your design tokens
    'custom-property-pattern': '^govnl-[a-z][a-zA-Z0-9-]*$',

    // Selector patterns for your BEM methodology - allow nested pseudo-classes
    'selector-class-pattern': [
      '^(dictu|nl)-[a-z][a-zA-Z0-9-]*(__[a-z][a-zA-Z0-9-]*)?(--[a-z][a-zA-Z0-9-]*)?$',
      {
        message: 'Class names should follow BEM methodology with dictu- or nl- prefix',
      },
    ],
    'selector-nested-pattern': '^&:(hover|focus|active|disabled|focus-visible|not)|^&\\.|^&\\[',

    // Property ordering - use a more flexible approach
    'order/properties-alphabetical-order': true, // Disable strict alphabetical ordering
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-comment', 'after-declaration', 'first-nested'],
        ignore: ['inside-single-line-block'],
      },
    ],
    // Vendor prefixes
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['user-select', 'appearance'],
      },
    ],

    // Function rules
    'function-name-case': 'lower',

    // At-rule rules - allow SCSS at-rules
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'include',
          'mixin',
          'if',
          'else',
          'each',
          'for',
          'while',
          'function',
          'return',
          'warn',
          'error',
          'debug',
          'at-root',
          'content',
          'extend',
        ],
      },
    ],

    // Units and values
    'unit-no-unknown': true,
    'length-zero-no-unit': true,
    'color-no-invalid-hex': true,

    // Selectors
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['square', 'portrait', 'landscape', 'video'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-max-id': 0, // Disallow ID selectors in design system
    'selector-max-universal': 1,
    'selector-max-type': [
      2,
      {
        ignore: ['child', 'descendant'],
      },
    ],
  },
  overrides: [
    {
      // More lenient rules for mixin files
      files: ['**/_mixin.scss', '**/mixin.scss'],
      rules: {
        'max-nesting-depth': 5,
        'scss/at-mixin-pattern': null, // Allow any mixin naming in mixin files
      },
    },
    {
      // Special rules for utility files
      files: ['**/utilities/**/*.scss'],
      rules: {
        'selector-class-pattern': '^(dictu|govnl)-[a-z][a-zA-Z0-9-]*$',
      },
    },
    {
      // Allow deeper nesting in responsive mixins
      files: ['**/src/mixin.scss', '**/_mixin.scss'],
      rules: {
        'max-nesting-depth': 6, // For media queries within mixins
      },
    },
  ],
  ignoreFiles: [
    'dist/**/*',
    '**/dist/**/*',
    'node_modules/**/*',
    'coverage/**/*',
    '**/*.min.css',
    '**/storybook-static/**/*',
    'packages/storybook/dist/**/*',
  ],
};
