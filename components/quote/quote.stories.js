import './dist/index.css';
import '@dictu/link/dist/index.css';
import { Quote } from './quote.component';

export default {
  args: {
    citation: 'May the force be ever in your favor, Mr. Potter',
  },
  argTypes: {
    citation: {
      control: 'string',
      description: 'Het citaat',
    },
    author: {
      control: 'object',
      description: 'De auteur van het citaat',
    },
    work: {
      control: 'string',
      description: 'De bron waaruit geciteerd wordt',
    },
    source: {
      control: 'string',
      description: 'URL van de bron',
    },
  },
  component: Quote,
  tags: ['wip'],
  title: 'Componenten/Quote',
};

export const DefaultQuote = {};

export const AuthorQuote = {
  args: {
    author: {
      name: 'Gandalf of Rivia',
    },
  },
};

export const RoleQuote = {
  args: {
    author: {
      name: 'Gandalf of Rivia',
      role: 'Starfleet Captain',
    },
  },
};

export const WorkQuote = {
  args: {
    work: 'Chronicles of Narnia',
  },
};

export const CiteQuote = {
  args: {
    citation: 'Nieuwe RVO-website draagt bij aan duurzame toekomst',
    author: {
      name: 'R. Steenbergen',
    },
    work: 'dictu.nl',
    source: 'https://www.dictu.nl/interview-rikkert-steenbergen',
  },
};
