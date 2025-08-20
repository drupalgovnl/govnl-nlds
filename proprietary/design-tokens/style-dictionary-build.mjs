import { register } from '@tokens-studio/sd-transforms';
import { globSync } from 'glob';
import path from 'path';
import StyleDictionary from 'style-dictionary';

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

// Path to base token files.
const baseTokens = ['./src/**/common.tokens.json', './src/**/core.tokens.json'];
const tokens = globSync('./src/**/*.tokens.json');

// Unified SD config that handles both base tokens and component tokens in a single build.
const unified = new StyleDictionary({
  source: tokens,
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl'],
      buildPath: 'dist/',
      files: [
        // Base tokens file (core and common tokens)
        {
          destination: 'index.css',
          format: 'css/variables',
          filter: token =>
            baseTokens.some(pattern =>
              token.filePath.match(pattern.replace('./src/**/', '').replace('.tokens.json', ''))
            ),
          options: {
            selector: '.dictu-theme',
            outputReferences: false,
          },
        },
        // Component-specific token files
        ...tokens
          .filter(file => file.startsWith('src/components/'))
          .map(file => ({
            destination: `${path.parse(file).name.toLowerCase().replace('.tokens', '')}.css`,
            format: 'css/variables',
            filter: token => token.filePath === file,
            options: {
              selector: `.dictu-${path.parse(file).name.toLowerCase().replace('.tokens', '')}`,
              outputReferences: true,
            },
          })),
      ],
    },
  },
});

await unified.buildAllPlatforms();
