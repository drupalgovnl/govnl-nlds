export const Paragraph = ({ innerHTML, classNames = [] }) => {
  const paragraph = document.createElement('p');
  paragraph.classList.add('dictu-paragraph', ...classNames);
  paragraph.innerHTML = innerHTML;

  return paragraph;
};
