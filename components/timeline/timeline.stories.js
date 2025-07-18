import './dist/index.css';
import readme from './README.md?raw';

export default {
  args: {},
  argTypes: {
    title: {
      control: 'text',
      description: 'De titel van de timeline',
    },
    toggleText: {
      control: 'text',
      description: 'De tekst voor de toggle link',
    },
    elementsCount: {
      control: 'number',
      description: 'Aantal elementen in de timeline',
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

const timelineData = {
  title: 'Timeline title',
  toggleText: 'Overzicht inklappen',
  elementsCount: 2,
};

const createTimelineElement = index => {
  const correctNumber = index + 1;
  const elementWrapper = document.createElement('div');
  elementWrapper.classList.add('dictu-timeline__element-wrapper');

  const element = document.createElement('div');
  element.classList.add('dictu-timeline__element');

  const headingWrapper = document.createElement('div');
  headingWrapper.classList.add('dictu-timeline__element-heading-wrapper');
  element.appendChild(headingWrapper);

  const headingIcon = iconElement();
  headingIcon.classList.add('dictu-timeline__heading-icon');
  headingWrapper.appendChild(headingIcon);

  const heading = document.createElement('h3');
  heading.classList.add('dictu-timeline__element-heading', 'dictu-heading--level-3');
  heading.textContent = `Timeline heading ${correctNumber}`;

  headingWrapper.appendChild(heading);

  const subheadingWrapper = document.createElement('div');
  subheadingWrapper.classList.add('dictu-timeline__element-subheading-wrapper');
  element.appendChild(subheadingWrapper);

  const subheadingIcon = iconElement(true);
  subheadingIcon.classList.add('dictu-timeline__element-subheading-icon');
  subheadingWrapper.appendChild(subheadingIcon);

  const subheading = document.createElement('h4');
  subheading.classList.add('dictu-timeline__element-subheading', 'dictu-heading--level-4');
  subheading.textContent = `Timeline subheading ${correctNumber}`;
  subheadingWrapper.appendChild(subheading);

  const content = document.createElement('div');
  content.classList.add('dictu-timeline__element-content');
  content.innerHTML = `
    <p>Dit is de inhoud van de timeline. Hier kan je meer informatie plaatsen over dit specifieke element. Je kunt hier ook links, afbeeldingen of andere HTML elementen toevoegen.</p>
  `;

  element.appendChild(content);
  elementWrapper.appendChild(element);

  return elementWrapper;
};

const iconElement = (subheading = false) => {
  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add('dictu-timeline__icon-wrapper');
  const icon = document.createElement('span');
  icon.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.291723 0.294057C0.68218 -0.0965354 1.31534 -0.0966451 1.70594 0.293812L6.99975 5.58579L12.2917 0.291978C12.6822 -0.0986139 13.3153 -0.0987236 13.7059 0.291733C14.0965 0.68219 14.0966 1.31535 13.7062 1.70595L8.4142 6.99976L13.708 12.2917C14.0986 12.6822 14.0987 13.3154 13.7083 13.7059C13.3178 14.0965 12.6846 14.0966 12.294 13.7062L7.00024 8.41421L1.70826 13.708C1.3178 14.0986 0.684639 14.0987 0.294047 13.7083C-0.0965453 13.3178 -0.0966549 12.6846 0.293802 12.2941L5.58578 7.00025L0.291968 1.70827C-0.0986238 1.31781 -0.0987334 0.684648 0.291723 0.294057Z" fill="#154273"/>
    </svg>
    `;

  if (subheading) {
    icon.innerHTML = `
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.970318 0.97054C1.26316 0.677596 1.73803 0.677514 2.03098 0.970356L6.00134 4.93934L9.97032 0.968981C10.2632 0.676037 10.738 0.675955 11.031 0.968797C11.3239 1.26164 11.324 1.73651 11.0312 2.02946L7.06218 5.99981L11.0325 9.9688C11.3255 10.2616 11.3256 10.7365 11.0327 11.0295C10.7399 11.3224 10.265 11.3225 9.97206 11.0296L6.0017 7.06066L2.03272 11.031C1.73988 11.324 1.265 11.324 0.972061 11.0312C0.679117 10.7384 0.679035 10.2635 0.971877 9.97054L4.94086 6.00018L0.970502 2.0312C0.677558 1.73836 0.677476 1.26348 0.970318 0.97054Z" fill="white"/>
    </svg>
    `;
  }

  icon.classList.add('dictu-timeline__icon');
  iconWrapper.appendChild(icon);

  return iconWrapper;
};

export const Timeline = {
  render: ({ title, toggleText, elementsCount }) => {
    const timeline = document.createElement('div');
    timeline.classList.add('dictu-timeline');

    const timelineTitle = document.createElement('h2');
    timelineTitle.classList.add('dictu-timeline__title', 'dictu-heading', 'dictu-heading--level-2');
    timelineTitle.textContent = title;

    timeline.appendChild(timelineTitle);

    const toggleLink = document.createElement('a');
    toggleLink.classList.add('dictu-timeline__toggle', 'dictu-link');
    toggleLink.href = '#';
    toggleLink.textContent = toggleText;

    timeline.appendChild(toggleLink);

    // Create timeline elements
    // loop through the number of elements and create each element
    for (let i = 0; i < elementsCount; i++) {
      // const element = createTimelineElement(i);
      const element = createTimelineElement(i);
      timeline.appendChild(element);
    }

    // addd toggle on bottom again
    timeline.appendChild(toggleLink.cloneNode(true));

    // <div
    //   data-heading="default"
    //   style="width: 100%; height: 100%; padding-top: 2px; padding-bottom: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex"
    // >
    //   <div
    //     data-appearance="Heading-3"
    //     data-level="3"
    //     style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: inline-flex"
    //   >
    //     <div style="flex: 1 1 0; color: #154273; font-size: 24px; font-family: RijksSans; font-weight: 700; line-height: 30px; word-wrap: break-word">
    //       Timeline heading
    //     </div>
    //   </div>
    // </div>;

    return timeline;
  },
  args: timelineData,
};
