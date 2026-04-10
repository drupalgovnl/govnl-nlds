import './dist/index.css';
import '@dictu/paragraph/dist/index.css';
import { Paragraph } from '../../components/paragraph/paragraph.component';

export default {
  args: {
    gap: 'small',
  },
  argTypes: {
    gap: {
      control: 'radio',
      options: ['small'],
      description: 'De grootte van de gap',
      table: {
        type: {
          summary: 'small',
        },
        defaultValue: {
          summary: 'small',
        },
      },
    },
  },
  render: args => {
    const container = document.createElement('div');
    container.classList.add(`dictu-gap-${args.gap}`);
    const paragraphText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.';

    for (let i = 0; i < 3; i++) {
      container.appendChild(Paragraph({ text: paragraphText }));
    }

    return container;
  },
  title: 'Utilities/Gap',
};

export const DefaultGap = {};
