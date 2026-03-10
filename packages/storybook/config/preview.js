import '@dictu/design-tokens/dist/index.css';
import '../src/fonts.css';
import { colorThemeDecorator, COLOR_FAMILIES } from '../src/colorThemeDecorator.js';

const preview = {
  globalTypes: {
    primaryColor: {
      description: 'Primaire kleur',
      toolbar: {
        title: 'Primair',
        icon: 'paintbrush',
        items: COLOR_FAMILIES,
        dynamicTitle: true,
      },
    },
    secondaryColor: {
      description: 'Secundaire kleur',
      toolbar: {
        title: 'Secundair',
        icon: 'circle',
        items: COLOR_FAMILIES,
        dynamicTitle: true,
      },
    },
    tertiaryColor: {
      description: 'Tertiaire (accent) kleur',
      toolbar: {
        title: 'Tertiair',
        icon: 'star',
        items: COLOR_FAMILIES,
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    primaryColor: '',
    secondaryColor: '',
    tertiaryColor: '',
  },
  decorators: [colorThemeDecorator],
  parameters: {
    controls: { expanded: false },
    docs: {
      codePanel: true,
      source: {
        transform: async source => {
          const prettier = await import('prettier/standalone');
          const prettierPluginHtml = await import('prettier/plugins/html');

          // Prefer formatting as HTML since Storybook HTML framework emits markup
          // Fall back to the original source if formatting fails
          try {
            return prettier.format(String(source), {
              parser: 'html',
              plugins: [prettierPluginHtml],
            });
          } catch (e) {
            console.warn('Prettier HTML formatting failed, returning unformatted source:', e);
            return source;
          }
        },
      },
    },
    options: {
      panelPosition: 'bottom',
      storySort: {
        order: [
          'Introductie',
          'Voor designers',
          'Voor ontwikkelaars',
          'Design Tokens',
          ['Design Tokens', 'Core', 'Common'],
          'Components',
          ['Docs', '*', 'Design Tokens'],
          '*',
          'Informatie',
        ],
      },
    },
  },
};

export default preview;
