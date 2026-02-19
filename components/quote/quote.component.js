export function Quote({ citation, author, work, source }) {
  const classes = ['dictu-quote'];
  const quote = document.createElement('figure');
  quote.classList.add(...classes);

  const blockquote = document.createElement('blockquote');
  blockquote.classList.add('dictu-quote__blockquote');

  if (source) {
    blockquote.setAttribute('cite', source);
  }

  const quoteCitation = document.createElement('p');
  quoteCitation.innerHTML = citation;
  quoteCitation.classList.add('dictu-quote__citation');
  blockquote.appendChild(quoteCitation);

  quote.appendChild(blockquote);

  if (author || work) {
    const quoteCaption = document.createElement('figcaption');
    quoteCaption.classList.add('dictu-quote__caption');

    if (author) {
      const quoteAuthor = document.createElement('div');
      quoteAuthor.classList.add('dictu-quote__author');
      quoteAuthor.innerHTML = author.name;
      quoteCaption.appendChild(quoteAuthor);

      if (author.role) {
        const quoteRole = document.createElement('div');
        quoteRole.classList.add('dictu-quote__role');
        quoteRole.innerHTML = author.role;
        quoteCaption.appendChild(quoteRole);
      }
    }

    if (work) {
      const quoteCite = document.createElement('cite');
      quoteCite.classList.add('dictu-quote__work');
      quoteCite.innerHTML = work;

      if (source) {
        const quoteCiteLink = document.createElement('a');
        quoteCiteLink.classList.add('dictu-link');
        quoteCiteLink.href = source;
        quoteCiteLink.appendChild(quoteCite);
        quoteCaption.appendChild(quoteCiteLink);
      } else {
        quoteCaption.appendChild(quoteCite);
      }
    }

    quote.appendChild(quoteCaption);
  }

  return quote;
}
