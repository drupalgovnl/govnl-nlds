import './dist/index.css';
import readme from './README.md?raw';
import '@dictu/paragraph/dist/index.css';

export default {
  args: {},
  argTypes: {
    title: {
      control: 'text',
      description: 'De titel van de timeline',
    },
    data: {
      control: 'object',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  tags: ['autodocs'],
  title: 'Componenten/Timeline',
};

const createTimeline = timelineData => {
  const element = document.createElement('ol');
  element.classList.add('dictu-timeline__body');

  for (let i = 0; i < timelineData.length; i += 1) {
    const timelineElements = timelineData[i];
    const listItem = document.createElement('li');
    listItem.classList.add('dictu-timeline__item');

    const heading = headingElement(false, '3', timelineElements.label, timelineElements.expanded);
    listItem.appendChild(heading);

    if (timelineElements.content) {
      const content = contentElement(timelineElements.content, timelineElements.expanded);
      listItem.appendChild(content);
    }

    if (timelineElements.children) {
      const subList = document.createElement('ol');
      subList.classList.add('dictu-timeline__sub-list');

      if (!timelineElements.expanded) {
        subList.setAttribute('hidden', '');
      }

      for (let j = 0; j < timelineElements.children.length; j += 1) {
        const child = timelineElements.children[j];
        const subListItem = document.createElement('li');
        subListItem.classList.add('dictu-timeline__sub-item');

        const subHeading = headingElement(true, '4', child.label, child.expanded);
        subListItem.appendChild(subHeading);

        if (child.content) {
          const content = contentElement(child.content, child.expanded);
          subListItem.appendChild(content);
        }

        subList.appendChild(subListItem);
      }

      listItem.appendChild(subList);
    }

    element.appendChild(listItem);
  }

  return element;
};

const contentElement = (content, expanded) => {
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('dictu-timeline__element-content-wrapper');

  if (!expanded) {
    contentWrapper.setAttribute('hidden', '');
  }

  const contentElement = document.createElement('div');
  contentElement.classList.add('dictu-timeline__element-content');
  contentElement.innerHTML = content;
  contentWrapper.appendChild(contentElement);

  return contentWrapper;
};

const headingElement = (subheading = false, headingLevel, label, expanded) => {
  const headingButton = document.createElement('button');
  headingButton.classList.add('dictu-timeline__element-button', 'dictu-button', 'dictu-button--subtle');
  headingButton.setAttribute('aria-expanded', expanded);

  const headingBody = document.createElement('span');
  headingBody.classList.add('dictu-timeline__element-heading-body');

  const headingIcon = iconElement(subheading);
  headingIcon.classList.add(subheading ? 'dictu-timeline__icon--subheading' : 'dictu-timeline__icon--heading');

  const heading = document.createElement(`h${headingLevel}`);
  heading.classList.add('dictu-heading', `dictu-heading--level-${headingLevel}`, 'dictu-timeline__element-heading');
  heading.textContent = label;

  headingBody.appendChild(headingIcon);
  headingBody.appendChild(heading);
  headingButton.appendChild(headingBody);

  return headingButton;
};

const iconElement = (subheading = false) => {
  const iconElement = document.createElement('span');

  if (subheading) {
    iconElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24.0031" height="24" rx="12" fill="#154273"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0005 6C12.4147 5.99993 12.7505 6.33565 12.7506 6.74987L12.7514 11.2499L17.2514 11.2491C17.6656 11.249 18.0015 11.5847 18.0015 11.999C18.0016 12.4132 17.6659 12.749 17.2517 12.7491L12.7517 12.7499L12.7524 17.2499C12.7525 17.6641 12.4168 17.9999 12.0026 18C11.5884 18.0001 11.2525 17.6643 11.2524 17.2501L11.2517 12.7501L6.75166 12.7509C6.33744 12.751 6.0016 12.4153 6.00153 12.001C6.00146 11.5868 6.33718 11.251 6.7514 11.2509L11.2514 11.2501L11.2506 6.75013C11.2505 6.33591 11.5863 6.00007 12.0005 6Z" fill="white"/>
    </svg>
    `;
  } else {
    iconElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="1" y="1" width="30" height="30" rx="15" fill="white"/>
      <rect x="1" y="1" width="30" height="30" rx="15" stroke="#154273" stroke-width="2"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9987 8C16.5509 7.99991 16.9987 8.44754 16.9988 8.99983L16.9999 14.9998L22.9999 14.9988C23.5522 14.9987 23.9999 15.4463 24 15.9986C24.0001 16.5509 23.5525 16.9987 23.0002 16.9988L17.0002 16.9998L17.0013 22.9998C17.0014 23.5521 16.5537 23.9999 16.0014 24C15.4491 24.0001 15.0014 23.5525 15.0013 23.0002L15.0002 17.0002L9.00022 17.0012C8.44793 17.0013 8.00014 16.5537 8.00004 16.0014C7.99995 15.4491 8.44758 15.0013 8.99987 15.0012L14.9999 15.0002L14.9988 9.00018C14.9987 8.44789 15.4464 8.0001 15.9987 8Z" fill="#154273"/>
    </svg>
    `;
  }

  iconElement.classList.add('dictu-timeline__icon');

  return iconElement;
};

export const Timeline = {
  render: ({ title, data }) => {
    const timeline = document.createElement('div');
    timeline.classList.add('dictu-timeline');

    const timelineTitle = document.createElement('h2');
    timelineTitle.classList.add('dictu-timeline__title', 'dictu-heading', 'dictu-heading--level-2');
    timelineTitle.textContent = title;

    timeline.appendChild(timelineTitle);

    // Dit zou geen link moeten zijn maar een button.

    const elements = createTimeline(data);
    timeline.appendChild(elements);

    return timeline;
  },
  args: {
    title: 'Tijdlijn',
    data: [
      {
        label: 'Tijdlijn Heading met children',
        expanded: true,
        children: [
          {
            label: 'Tijdlijn Subheading',
            expanded: true,
            content: `
              <p class="dictu-paragraph">Content informatie 1.1. Content was nog niet geschreven. Linkjes in de tekst verwijst naar het document Door gaswinning uit het Groningenveld ontstaan in Groningen aardbevingen. Met het definitief beëindigen van de gaswinning in 2024 is de oorzaak van aardbevingen weggenomen. </p>
            `,
          },
          {
            label: 'Tijdlijn Subheading',
            expanded: false,
            content: `
              <p class="dictu-paragraph">Content informatie 1.2. Content was nog niet geschreven. Linkjes in de tekst verwijst naar het document Door gaswinning uit het Groningenveld ontstaan in Groningen aardbevingen. Met het definitief beëindigen van de gaswinning in 2024 is de oorzaak van aardbevingen weggenomen. </p>
            `,
          },
        ],
      },
      {
        label: 'Tijdelijke Heading met children',
        expanded: false,
        children: [
          {
            label: 'Tijdelijke Subheading',
            expanded: false,
            content: `
              <p class="dictu-paragraph">Dit is tijdelijke content voor een subheading. Expanded staat op false.</p>
            `,
          },
          {
            label: 'Tijdelijke Subheading',
            expanded: false,
            content: `
              <p class="dictu-paragraph">Nog een tijdelijke subheading met expanded op false.</p>
            `,
          },
        ],
      },
      {
        label: 'Tijdlijn Heading',
        expanded: true,
        content: `
          <p class="dictu-paragraph">Content informatie 2. Content was nog niet geschreven. Linkjes in de tekst verwijst naar het document Door gaswinning uit het Groningenveld ontstaan in Groningen aardbevingen. Met het definitief beëindigen van de gaswinning in 2024 is de oorzaak van aardbevingen weggenomen. </p>
        `,
      },
      {
        label: 'Tijdlijn Heading',
        expanded: true,
        children: [
          {
            label: 'Tijdlijn Subheading',
            expanded: true,
            content: `
              <p class="dictu-paragraph">Content informatie 4.1. Content was nog niet geschreven. Linkjes in de tekst verwijst naar het document Door gaswinning uit het Groningenveld ontstaan in Groningen aardbevingen. Met het definitief beëindigen van de gaswinning in 2024 is de oorzaak van aardbevingen weggenomen. </p>
            `,
          },
        ],
      },
    ],
  },
};
