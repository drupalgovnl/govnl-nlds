import { register } from '@tokens-studio/sd-transforms';
import { globSync } from 'glob';
import StyleDictionary from 'style-dictionary';

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

// Path to token files.
const tokens = globSync('./src/**/*.tokens.json');

const sd = new StyleDictionary({
  source: tokens,
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab', 'color/rgb'],
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

await sd.buildAllPlatforms();
