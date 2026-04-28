export const Paragraph = ({ text, classNames = [] }) => {
  const paragraph = document.createElement('p');
  paragraph.classList.add('dictu-paragraph', ...classNames);
  paragraph.innerText = text;

  return paragraph;
};
