import './dist/index.css';
import '@dictu/text-input/dist/index.css';
import '@dictu/button/dist/index.css';
import '@dictu/utility-focus-ring/dist/index.css';
import { Searchbar } from './searchbar.component';

export default {
  args: {
    size: 'default',
    placeholder: 'Typ hier uw vraag..',
    label: 'Zoeken',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z"/></svg>',
  },
  argTypes: {
    id: {
      control: 'string',
      description: 'De id van de text input',
    },
    placeholder: {
      control: 'string',
      description: 'De placeholder in het input veld',
    },
    size: {
      control: 'radio',
      description: 'Grootte van de searchbar',
      options: ['default', 'small'],
    },
    label: {
      control: 'string',
      description: 'De label van de button',
    },
  },
  component: Searchbar,
  tags: ['wip'],
  title: 'Componenten/Searchbar',
};

export const SearchbarDefault = {
  args: {
    id: 'search-input',
  },
};

export const SearchbarSmall = {
  args: {
    id: 'search-input-2',
    size: 'small',
  },
};
