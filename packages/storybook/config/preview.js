import '@dictu/design-tokens/dist/index.css';

const preview = {
  parameters: {
    controls: { expanded: false },
    docs: {
      codePanel: true,
    },
    options: {
      panelPosition: 'bottom',
      storySort: {
        order: [
          'Introductie',
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
