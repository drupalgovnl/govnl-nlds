import { Heading } from '../heading/heading.component.js';
import { Icon } from '../icon/icon.component.js';
import { Link } from '../link/link.component.js';

export const Card = ({
  headingLevel,
  headingText,
  href,
  content,
  footer_content,
  variant = 'default',
  image_src,
  alt,
  icon,
  subheading,
  full_card_link,
}) => {
  const hasFullCardLink = Boolean(full_card_link);

  const card = document.createElement('div');
  card.classList.add('dictu-card', `dictu-card--${variant}`);
  card.setAttribute('role', 'article');

  if (hasFullCardLink) {
    card.classList.add('dictu-card--full-card', 'dictu-focus-ring');
  }

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('dictu-card__image-container');

  const imageElement = document.createElement('img');
  imageElement.classList.add('dictu-image', 'dictu-card__image');
  imageElement.src = image_src || '';
  imageElement.alt = alt || '';

  imageContainer.appendChild(imageElement);

  const iconElement = icon ? Icon({ icon }) : null;

  const headingElement = Heading({
    content: href ? createLink({ href, headingText, hasFullCardLink }) : headingText,
    level: headingLevel,
  });
  headingElement.classList.add('dictu-card__heading');

  const contentElement = document.createElement('div');
  contentElement.classList.add('dictu-card__content');

  if (iconElement) {
    contentElement.appendChild(iconElement);
  }
  contentElement.appendChild(headingElement);

  const subHeadingElement = document.createElement('p');
  subHeadingElement.classList.add('dictu-card__subheading');
  subHeadingElement.innerText = subheading || '';
  const describedByIds = [];

  if (subheading) {
    describedByIds.push(subHeadingElement.id);
    contentElement.appendChild(subHeadingElement);
  }

  const paragraphElement = document.createElement('p');
  paragraphElement.classList.add('dictu-card__paragraph');
  paragraphElement.innerText = content ?? '';
  describedByIds.push(paragraphElement.id);

  contentElement.appendChild(paragraphElement);

  const metadataElement = document.createElement('small');
  metadataElement.classList.add('dictu-card__metadata');

  if (footer_content) {
    metadataElement.innerText = footer_content;
    describedByIds.push(metadataElement.id);
  }

  if (footer_content) {
    contentElement.appendChild(metadataElement);
  }

  card.appendChild(imageContainer);
  card.appendChild(contentElement);

  return card;
};

function createLink({ href, headingText, hasFullCardLink }) {
  return Link({
    content: headingText,
    href: href,
    classNames: hasFullCardLink
      ? ['dictu-card__link', 'dictu-card__full-card-link']
      : ['dictu-card__link'],
  });
}
