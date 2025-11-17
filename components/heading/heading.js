export const Heading = ({ innerHTML, level = 2 }) => {
  const heading = document.createElement(`h${level}`);
  heading.classList.add('dictu-heading', `dictu-heading--level-${level}`);
  heading.innerHTML = innerHTML;

  return heading;
};
