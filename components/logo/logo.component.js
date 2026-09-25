export function Logo({ image_src, alt, title, subtitle, classNames = [] }) {
  const logo = document.createElement('div');
  logo.classList.add('dictu-logo', ...classNames);

  logo.appendChild(createLogoImage(image_src, alt));
  logo.appendChild(createLogoText(title, subtitle));

  return logo;
}

const createLogoImage = (image_src, alt) => {
  const logoImage = document.createElement('div');
  logoImage.classList.add('dictu-logo__image');
  const logoImageElement = document.createElement('img');
  logoImageElement.src = image_src || '';
  logoImageElement.alt = alt || '';

  logoImage.appendChild(logoImageElement);

  return logoImage;
};

const createLogoText = (title, subtitle) => {
  const logoText = document.createElement('div');
  logoText.classList.add('dictu-logo__text');
  const logoTextTitle = document.createElement('div');
  logoTextTitle.classList.add('dictu-logo__title');
  logoTextTitle.innerHTML = title;
  const logoTextSubtitle = document.createElement('div');
  logoTextSubtitle.classList.add('dictu-logo__subtitle');
  logoTextSubtitle.innerHTML = subtitle;

  logoText.appendChild(logoTextTitle);
  logoText.appendChild(logoTextSubtitle);

  return logoText;
};
