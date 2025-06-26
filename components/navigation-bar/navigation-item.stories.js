import readme from './README.md?raw';
import '@dictu/design-tokens/dist/navigation-bar.css';
import './dist/index.css';

export default {
  argTypes: {
    icon: {
      options: ['home'],
      mapping: {
        home: '<span class="dictu-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="#154273"/></svg></span>',
      },
      control: {
        type: 'select',
        labels: {
          home: 'Home',
        },
      },
    },
    link: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  tags: ['autodocs'],
  title: 'Componenten/NavigationItem',
};

export const NavigationItem = {
  render: args => {
    const navigationItem = document.createElement('li');
    const { icon, link, title } = args || '';
    // Use the mapped SVG directly
    const iconMarkup = icon || '';
    navigationItem.classList.add(['dictu-navigation-bar', 'dictu-navigation-bar__item']);
    navigationItem.setAttribute('role', 'none');
    navigationItem.setAttribute('aria-required-parent', 'ul[role=menubar]');
    navigationItem.innerHTML = `
      <a href="${link}" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
        ${iconMarkup}
        <span class="dictu-navigation-bar__icon"></span>
        ${title}
      </a>
    `;

    return navigationItem;
  },
  args: {
    icon: 'home',
    title: 'Dienst ICT Uitvoering',
    link: 'https://www.dictu.nl',
  },
};
