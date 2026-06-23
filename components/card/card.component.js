import { Heading } from '../heading/heading.component.js';
import { Icon } from '../icon/icon.component.js';
import { Link } from '../link/link.component.js';

const externalLinkIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.75A.75.75 0 0 1 9.75 1h5.25a.75.75 0 0 1 .75.75V7a.75.75 0 0 1-1.5 0V3.56l-7.22 7.22a.75.75 0 1 1-1.06-1.06L12.44 2.5H9.75A.75.75 0 0 1 9 1.75ZM2.75 4A.75.75 0 0 0 2 4.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v3.5h-7v-7H7a.75.75 0 0 0 0-1.5H2.75Z" />
</svg>`;

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
  content_link,
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

  if (content_link) {
    paragraphElement.append(' ');
    paragraphElement.appendChild(
      Link({
        content: content_link.text,
        href: content_link.href,
        external: content_link.external,
        icon: content_link.external ? externalLinkIcon : undefined,
      })
    );
  }

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
