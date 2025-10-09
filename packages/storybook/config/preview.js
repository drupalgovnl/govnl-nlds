import '@dictu/design-tokens/dist/index.css';
import '../src/fonts.css';

const preview = {
  parameters: {
    controls: { expanded: false },
    docs: {
      codePanel: true,
      toc: true,
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
