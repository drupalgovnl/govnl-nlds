export const Link = ({ innerHTML, href, classNames }) => {
  const link = document.createElement('a');
  link.classList.add('dictu-link', ...classNames.split(' ').filter(cn => cn));
  link.href = href;
  link.innerHTML = innerHTML;

  return link;
};
