import './dist/index.css';
import defaultDocs from './docs/_timeline.md?raw';
import readme from './README.md?raw';

export default {
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: () => {
    const timeline = document.createElement('div');
    timeline.classList.add('dictu-timeline');

    return timeline;
  },
  tags: ['autodocs'],
  title: 'Componenten/Rich Text',
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};
