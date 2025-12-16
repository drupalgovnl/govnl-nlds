import './dist/index.css';
import '@dictu/icon/dist/index.css';
import { Button } from './button.component';

export default {
  args: {
    disabled: false,
    iconPosition: 'before',
    icon: undefined,
    variant: 'primary-action',
    size: 'default',
    label: 'Dit is een button',
  },
  argTypes: {
    label: {
      control: 'string',
      description: 'De tekst van de button',
    },
    variant: {
      control: 'radio',
      options: ['primary-action', 'secondary-action', 'subtle'],
      description: 'Het type van de button',
      table: {
        type: {
          summary: 'primary-action | secondary-action | subtle',
        },
        defaultValue: {
          summary: 'primary-action',
        },
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['before', 'after'],
      description: 'Positie van de icon',
      table: {
        type: {
          summary: 'before | after',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    icon: {
      control: 'string',
      description: 'icon element',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'before',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Of de button een disabled state moet krijgen',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'De afmeting van de button',
      table: {
        type: {
          summary: 'default | small',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
  component: Button,
  tags: ['wip'],
  title: 'Componenten/Button',
};

export const PrimaryAction = {};

export const SecondaryAction = {
  args: {
    label: 'Dit is een secondary button',
    variant: 'secondary-action',
  },
};

export const Subtle = {
  args: {
    label: 'Dit is een subtle button',
    variant: 'subtle',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
  },
};

export const PrimaryActionSmall = {
  args: {
    label: 'Dit is een small primary action button',
    size: 'small',
  },
};

export const SecondaryActionSmall = {
  args: {
    label: 'Dit is een small secondary button',
    variant: 'secondary-action',
    size: 'small',
  },
};

export const SubtleSmall = {
  args: {
    label: 'Dit is een small subtle button',
    variant: 'subtle',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
    size: 'small',
  },
};

export const PrimaryActionIconOnly = {
  args: {
    label: '',
    variant: 'primary-action',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
  },
};

export const SecondaryActionIconOnly = {
  args: {
    label: '',
    variant: 'secondary-action',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
  },
};

export const SubtleIconOnly = {
  args: {
    label: '',
    variant: 'subtle',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
  },
};

export const PrimaryActionIconOnlySmall = {
  args: {
    label: '',
    variant: 'primary-action',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
    size: 'small',
  },
};

export const PrimaryActionDisabled = {
  args: {
    label: 'Dit is een disabled button',
    disabled: true,
  },
};

export const SecondaryActionDisabled = {
  args: {
    label: 'Dit is een disabled button',
    variant: 'secondary-action',
    disabled: true,
  },
};

export const SubtleDisabled = {
  args: {
    label: 'Dit is een disabled button',
    variant: 'subtle',
    disabled: true,
  },
};

export const PrimaryActionIconBefore = {
  args: {
    label: 'Dit is een button',
    variant: 'primary-action',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'before',
  },
};

export const PrimaryActionIconAfter = {
  args: {
    label: 'Dit is een button',
    variant: 'primary-action',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z"/></svg>',
    iconPosition: 'after',
  },
};
