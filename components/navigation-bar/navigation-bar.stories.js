import readme from './README.md?raw';
import './dist/index.css';

export default {
  argTypes: {
    items: {
      control: 'array',
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
  title: 'Componenten/NavigationBar',
};

export const NavigationBar = {
  render: args => {
    // Responsive, accessible, JS-free navigation bar
    const navigationBar = document.createElement('nav');
    const { items } = args || [];
    navigationBar.classList.add('dictu-navigation-bar');
    navigationBar.setAttribute('aria-label', 'Hoofdnavigatie');
    navigationBar.setAttribute('role', 'navigation');
    navigationBar.innerHTML = `
      <input type="checkbox" id="nav-toggle" class="dictu-navigation-bar__toggle" aria-controls="nav-list" aria-label="Menu tonen/verbergen" />
      <a href="#" class="dictu-navigation-bar__link dictu-navigation-bar__home" aria-label="Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="#154273"/>
        </svg>
      </a>
      <label for="nav-toggle" class="dictu-navigation-bar__menu-label" tabindex="0">
        <span class="dictu-navigation-bar__menu-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#154273"/>
        </svg>
        </span>
      </label>
      <ul class="dictu-navigation-bar__list" id="nav-list" role="menubar">
        ${items
          .map(
            item => `
          <li class="dictu-navigation-bar__item" role="none">
            <a href="${item.link}" class="dictu-navigation-bar__link dictu-focus-ring" role="menuitem" tabindex="0">
              <span class="dictu-navigation-bar__title">${item.title}</span>
            </a>
          </li>
        `
          )
          .join('')}
      </ul>
    `;
    return navigationBar;
  },
  args: {
    items: [
      {
        link: 'https://www.dictu.nl',
        title: 'Dienst ICT Uitvoering',
      },
      {
        link: 'https://www.ez.nl',
        title: 'Ministerie van Economische Zaken',
      },
      {
        link: 'https://www.rijksoverheid.nl',
        title: 'Rijksoverheid',
      },
    ],
  },
};
