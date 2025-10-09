import './dist/index.css';
import '@dictu/button/dist/index.css';

export default {
  argTypes: {
    label: {
      control: 'string',
    },
    content: {
      control: 'string',
    },
    headingLevel: {
      control: 'radio',
      options: ['1', '2', '3', '4', '5', '6'],
    },
  },
  parameters: {
    docs: {
      toc: {
        headingSelector: 'h2, h3',
      },
    },
  },
  render: ({ label, content, headingLevel, ...args }) => {
    const classes = ['dictu-accordion'];
    const buttonClasses = ['dictu-button', 'dictu-button--subtle', 'dictu-accordion__button'];
    const $accordion = document.createElement('div');
    const $accordionHeading = document.createElement(`h${headingLevel}`);
    const $accordionButton = document.createElement('button');
    const $accordionBody = document.createElement('div');
    const $icon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#154273"/></svg>';

    $accordionButton.classList.add(...buttonClasses);
    $accordionButton.setAttribute('aria-expanded', args.expanded);
    $accordionButton.innerHTML = label + $icon;

    $accordionBody.classList.add('dictu-accordion__body');
    $accordionBody.id = args.id;
    $accordionBody.innerHTML = content;
    $accordionBody.setAttribute = content;

    if (args.expanded === false) {
      $accordionBody.hidden = true;
    }

    $accordionHeading.classList.add('dictu-accordion__heading');
    $accordionHeading.appendChild($accordionButton);

    $accordion.appendChild($accordionHeading);
    $accordion.appendChild($accordionBody);
    $accordion.classList.add(...classes);

    return $accordion;
  },
  tags: ['autodocs', 'wip'],
  title: 'Componenten/Accordion',
};

export const AccordionOpen = {
  args: {
    label: 'Accordeon Titel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.',
    expanded: true,
    id: 'accordion-1',
    headingLevel: '2',
  },
};

export const AccordionClosed = {
  args: {
    label: 'Accordeon Titel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.',
    expanded: false,
    id: 'accordion-2',
    headingLevel: '2',
  },
};
