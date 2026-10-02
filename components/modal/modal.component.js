import { Button } from '../button/button.component';
import { Heading } from '../heading/heading.component';
import { Icon } from '../icon/icon.component';

export function Modal({ heading, content, action, isOpen, variant, classNames = [] }) {
  const modal = document.createElement('div');
  modal.classList.add('dictu-modal', ...classNames);
  modal.classList.toggle('is-open', isOpen);

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('dictu-modal__dialog', `dictu-modal__dialog--${variant}`);
  modalDialog.setAttribute('role', 'alertdialog');
  modalDialog.setAttribute('aria-modal', 'true');
  modalDialog.setAttribute('aria-labelledby', 'modal_heading');
  modalDialog.setAttribute('aria-describedby', 'modal_desc');

  const modalDialogClose = new Button({
    label: 'Sluiten',
    variant: 'secondary-action',
    classNames: ['dictu-modal__close'],
  });
  modalDialogClose.setAttribute('data-modal-dismiss', '');

  modalDialog.appendChild(modalDialogClose);
  modalDialog.appendChild(createModalDialogHeader(heading));
  modalDialog.appendChild(createModalDialogContent(content));
  modalDialog.appendChild(createModalDialogAction(action));

  modal.appendChild(modalDialog);

  return modal;
}

const createModalDialogHeader = heading => {
  const modalDialogHeader = document.createElement('div');
  modalDialogHeader.classList.add('dictu-modal__header');

  const modalDialogHeaderIcon = new Icon({
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24"><path d="M52.61,44.11c-2.18-2.37-8.46-4.49-11.39-5.37-.15-1.11-.36-2.41-.55-3.48,1.79-2.17,2.89-4.41,3.25-6.7,1.33-1.22,2.07-3.17,2.07-5.56,0-.74,0-2.7-1.23-4.04,.3-3.34,.51-8.5-.79-10.59-1.6-2.56-3.55-3.81-7.26-2.98-2.44-1.16-4.09-1.88-8.36-.84-2.97,.72-6.21,1.91-7.92,3.88-1.65,1.91-1.54,7.22-1.27,10.6-1.16,1.33-1.16,3.23-1.16,3.96,0,2.39,.74,4.33,2.06,5.55,.38,2.51,1.61,4.91,3.71,7.26-.11,.81-.23,1.75-.35,2.73-2.51,.73-9.67,3-12.03,5.57-2.87,3.12-4.39,14.89-4.39,14.89H57s-1.51-11.76-4.39-14.89m-16.9-8.41c-.78,.66-2.25,1.11-3.72,1.11-1.06,0-2.12-.29-2.93-.63,.61,.93,1.65,2.07,3.58,2.59,3.15,.83,5.46-.91,5.46-.91,0,0,.28,1.91,.27,2.42,.33,3.49-3.56,7.32-6.01,9.08-2.3-1.75-6.59-5.53-6.16-9.02,.24-1.91,.04-.55,.82-5.44-2.28-2.2-4.1-4.87-4.1-8.06-1.62-.5-2.04-2.55-2.04-3.82s.32-1.96,.77-2.17c.39-.19,.77-.05,1.01,.09,.14,.65,.25,1.14,.29,1.31,.21,.85,1.02,.77,1.02,.77v-6.75c2.07-.15,6.19-.75,10.75-3.11l5.25,3.53v6.33s.82,.08,1.02-.77c.04-.17,.15-.66,.29-1.31,.24-.14,.62-.27,1.01-.09,.45,.21,.77,.9,.77,2.17s-.42,3.31-2.04,3.82c0,3.7-2.53,6.5-5.34,8.88"/></svg>',
    classNames: ['dictu-modal__icon'],
  });

  const modalDialogHeaderHeading = new Heading({
    appearanceLevel: 3,
    content: heading,
    classNames: ['dictu-modal__heading'],
    level: 2,
  });
  modalDialogHeaderHeading.setAttribute('id', 'modal_heading');

  modalDialogHeader.appendChild(modalDialogHeaderIcon);
  modalDialogHeader.appendChild(modalDialogHeaderHeading);

  return modalDialogHeader;
};

const createModalDialogContent = content => {
  const modalDialogContent = document.createElement('div');
  modalDialogContent.classList.add('dictu-modal__content');
  modalDialogContent.setAttribute('id', 'modal_desc');

  if (content instanceof HTMLElement) {
    modalDialogContent.appendChild(content);
  } else if (typeof content === 'string') {
    modalDialogContent.innerHTML = content;
  }

  return modalDialogContent;
};

const createModalDialogAction = action => {
  const modalDialogAction = document.createElement('div');
  modalDialogAction.classList.add('dictu-modal__action');

  if (action && action.nodeType) {
    modalDialogAction.appendChild(action);
  } else if (typeof action === 'string') {
    modalDialogAction.innerHTML = action;
  }

  return modalDialogAction;
};
