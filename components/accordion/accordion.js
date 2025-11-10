import { Button } from '../button/button';

export function Accordion({ label, content, headingLevel, ...args }) {
  const classes = ['dictu-accordion'];
  const $accordion = document.createElement('div');
  const $heading = document.createElement(`h${headingLevel}`);
  const $accordionBody = document.createElement('div');
  const icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#154273"/></svg>';

  // @TODO: import heading component
  $heading.classList.add('dictu-accordion__heading');
  $accordion.appendChild($heading);

  // @TODO: import button component.
  const $button = new Button({
    label: label,
    variant: 'subtle',
    iconPosition: 'after',
    icon: icon,
    disabled: false,
  });
  $button.classList.add('dictu-accordion__button');
  $button.setAttribute('aria-expanded', args.expanded);
  $heading.appendChild($button);

  // Add the content part of the accordion.
  $accordionBody.classList.add('dictu-accordion__body');
  $accordionBody.id = args.id;
  $accordionBody.innerHTML = content;

  // Add the hidden attribute if expanded param is false.
  if (args.expanded === false) {
    $accordionBody.hidden = true;
  }

  $accordion.appendChild($accordionBody);

  $accordion.classList.add(...classes);

  return $accordion;
}
