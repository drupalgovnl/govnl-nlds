import { Heading } from '../heading/heading.js';
import { Link } from '../link/link.js';

export const Card = ({
  headingLevel,
  link,
  content,
  metadata,
  variant = 'default',
  image_src,
  alt,
  icon,
  subheading,
}) => {
  const card = document.createElement('div');
  card.classList.add('dictu-card', `dictu-card--${variant}`, 'dictu-focus-ring');
  card.setAttribute('tabindex', '0');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('dictu-card__image-container');

  const imageElement = document.createElement('img');
  imageElement.classList.add('dictu-image', 'dictu-card__image');
  imageElement.src = image_src || '';
  imageElement.alt = alt || '';

  imageContainer.appendChild(imageElement);

  const linkElement = Link({
    innerHTML: `${link.text} <span class="dictu-icon">${icon}</span>`,
    href: link.href,
    classNames: 'dictu-card__link',
  });
  const headingElement = Heading({ innerHTML: linkElement, level: headingLevel });

  const contentElement = document.createElement('div');
  contentElement.classList.add('dictu-card__content');

  contentElement.appendChild(headingElement);

  const subHeadingElement = document.createElement('p');
  subHeadingElement.classList.add('dictu-card__subheading');
  subHeadingElement.innerText = subheading || '';
  if (subheading) {
    contentElement.appendChild(subHeadingElement);
  }

  const paragraphElement = document.createElement('p');
  paragraphElement.classList.add('dictu-card__paragraph');
  paragraphElement.innerText = content;

  contentElement.appendChild(paragraphElement);

  const metadataElement = document.createElement('small');
  metadataElement.classList.add('dictu-card__metadata');
  metadataElement.innerText = metadata;

  contentElement.appendChild(metadataElement);

  card.appendChild(imageContainer);
  card.appendChild(contentElement);

  return card;
};
