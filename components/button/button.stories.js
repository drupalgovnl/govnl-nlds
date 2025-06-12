import readme from './README.md?raw';
import '@dictu/design-tokens/dist/button.css';
import '@dictu/utilities/dist/index.css';
import './dist/index.css';

export default {
  argTypes: {
    label: {
      control: 'string',
    },
    variant: {
      control: 'radio',
      options: ['primary-action', 'secondary-action', 'subtle', 'icon-only']
    },
    icon: {
      control: 'radio',
      options: ['none', 'before', 'after']
    },
    disabled: {
      control: 'boolean',
    }
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ label, ...args }) => {
    const classes = ['dictu-button', `dictu-button--${args.variant}`, 'dictu-focus-ring'];
    const $button = document.createElement('button');
    const $icon = '<span class="dictu-icon" role="presentation" aria-hidden="true"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.37032 2.5058C7.90009 1.55647 8.90228 0.967743 9.99 0.967743C11.0777 0.967743 12.0799 1.55646 12.6097 2.50578L19.7052 14.748C19.7287 14.7887 19.7494 14.8309 19.767 14.8745C20.1397 15.7958 20.032 16.8418 19.4793 17.6678C18.9267 18.4938 18.0008 18.9925 17.007 18.9995L17 18.9995H3C2.98172 18.9995 2.96356 18.999 2.94552 18.998C2.91027 19 2.87456 19 2.83851 18.9982C1.86882 18.9482 0.983287 18.432 0.461991 17.6128C-0.0593058 16.7936 -0.151893 15.7728 0.213514 14.8732C0.231014 14.8301 0.251498 14.7883 0.274816 14.748L7.37032 2.5058ZM2.94475 17.001C2.96304 17 2.98146 16.9995 3 16.9995H16.9959C17.3261 16.9962 17.6334 16.8302 17.8171 16.5556C17.9904 16.2966 18.0325 15.9726 17.9333 15.6794L10.8748 3.50095L10.865 3.48362C10.6889 3.1653 10.3538 2.96774 9.99 2.96774C9.62621 2.96774 9.29112 3.1653 9.115 3.48362L9.10518 3.50095L2.04625 15.6801C1.94889 15.9662 1.98595 16.2823 2.14931 16.539C2.32308 16.8121 2.61826 16.9842 2.94149 17.0008C2.94258 17.0009 2.94367 17.0009 2.94475 17.001ZM10 6.9995C10.5523 6.9995 11 7.44721 11 7.9995V9.9995C11 10.5518 10.5523 10.9995 10 10.9995C9.44772 10.9995 9 10.5518 9 9.9995V7.9995C9 7.44721 9.44772 6.9995 10 6.9995ZM9 13.9995C9 13.4472 9.44772 12.9995 10 12.9995H10.01C10.5623 12.9995 11.01 13.4472 11.01 13.9995C11.01 14.5518 10.5623 14.9995 10.01 14.9995H10C9.44772 14.9995 9 14.5518 9 13.9995Z" fill="#0A2750"/></svg></span>';
    const $label = `${args.icon === 'before' ? $icon : ''} ${label} ${args.icon === 'after' ? $icon : ''}`

    $button.innerHTML = $label;
    $button.disabled = args.disabled;
    $button.classList.add(...classes);



    return $button;
  },
  tags: ['autodocs'],
  title: 'Componenten/Button',
};

export const PrimaryAction = {
  args: {
    label: 'Dit is een button',
    variant: 'primary-action',
    disabled: false,
    icon: 'none'
  },
};

export const SecondaryAction = {
  args: {
    label: 'Dit is een secondary button',
    variant: 'secondary-action',
    disabled: false,
    icon: 'none',
  },
};

export const Subtle = {
  args: {
    label: 'Dit is een subtle button',
    variant: 'subtle',
    disabled: false,
    icon: 'before'
  },
};

export const IconOnly = {
  args: {
    label: '',
    variant: 'icon-only',
    disabled: false,
    icon: 'before'
  },
};
