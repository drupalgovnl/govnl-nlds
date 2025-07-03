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

// Base SD config that combines core and common tokens in a single output.
const base = new StyleDictionary({
  source: [baseTokens],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            selector: '.dictu-theme',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

// SD config that outputs a file per component.
const components = new StyleDictionary({
  // Logging is set to silent, because the warning for filtered out token references
  // is not relevant for the component tokens.
  // It is only relevant for the base tokens, which are not filtered out.
  // This is a workaround for the issue with the warning not being silenced.
  //
  log: {
    verbosity: 'verbose',
  },
  source: [tokens],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl'],
      buildPath: 'dist/',
      files: tokens
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
    },
  },
});

await base.buildAllPlatforms();
await components.buildAllPlatforms();
