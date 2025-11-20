import { Heading } from '../heading/heading.component.js';
import { Icon } from '../icon/icon.component.js';
import { Link } from '../link/link.component.js';

let cardIdCounter = 0;
const createCardId = () => {
  cardIdCounter += 1;
  return `dictu-card-${cardIdCounter}`;
};

export const Card = ({
  headingLevel,
  link,
  content,
  footer_content,
  variant = 'default',
  image_src,
  alt,
  icon,
  subheading,
  full_card_link,
}) => {
  const cardId = createCardId();
  const hasFullCardLink = Boolean(full_card_link && link?.href);
  const canRenderHeadingLink = Boolean(!hasFullCardLink && link?.href);

  const card = document.createElement(hasFullCardLink ? 'a' : 'div');
  card.classList.add('dictu-card', `dictu-card--${variant}`, 'dictu-focus-ring');
  card.setAttribute('aria-labelledby', `${cardId}-heading`);

  if (hasFullCardLink) {
    card.href = link.href;
    card.setAttribute('role', 'link');
  } else {
    card.setAttribute('role', 'article');
  }

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('dictu-card__image-container');

  const imageElement = document.createElement('img');
  imageElement.classList.add('dictu-image', 'dictu-card__image');
  imageElement.src = image_src || '';
  imageElement.alt = alt || '';

  imageContainer.appendChild(imageElement);

  const iconElement = icon ? Icon({ icon, label: alt }) : null;

  const headingContent =
    hasFullCardLink || !canRenderHeadingLink
      ? (link?.text ?? '')
      : Link({
          text: link?.text ?? '',
          href: link.href,
          classNames: 'dictu-card__link',
        });
  const headingElement = Heading({ innerHTML: headingContent, level: headingLevel });
  headingElement.classList.add('dictu-card__heading');
  headingElement.id = `${cardId}-heading`;

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
    subHeadingElement.id = `${cardId}-subheading`;
    describedByIds.push(subHeadingElement.id);
    contentElement.appendChild(subHeadingElement);
  }

  const paragraphElement = document.createElement('p');
  paragraphElement.classList.add('dictu-card__paragraph');
  paragraphElement.innerText = content ?? '';
  paragraphElement.id = `${cardId}-content`;
  describedByIds.push(paragraphElement.id);

  contentElement.appendChild(paragraphElement);

  const metadataElement = document.createElement('small');
  metadataElement.classList.add('dictu-card__metadata');

  if (footer_content) {
    metadataElement.innerText = footer_content;
    metadataElement.id = `${cardId}-metadata`;
    describedByIds.push(metadataElement.id);
  }

  if (describedByIds.length > 0) {
    card.setAttribute('aria-describedby', describedByIds.join(' '));
    if (canRenderHeadingLink) {
      const headingLink = headingElement.querySelector('a');
      if (headingLink) {
        headingLink.setAttribute('aria-describedby', describedByIds.join(' '));
      }
    }
  }

  if (footer_content) {
    contentElement.appendChild(metadataElement);
  }

  card.appendChild(imageContainer);
  card.appendChild(contentElement);

  return card;
};
