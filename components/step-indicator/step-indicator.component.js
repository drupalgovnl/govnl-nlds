import { Icon } from '../icon/icon.component';

const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" transform="translate(2.667 4)" d="M11.1381 0.195277C11.3984 0.455627 11.3984 0.877737 11.1381 1.13809L4.47142 7.80475C4.21107 8.0651 3.78896 8.0651 3.52861 7.80475L0.195274 4.47142C-0.0650759 4.21107 -0.0650759 3.78896 0.195274 3.52861C0.455623 3.26826 0.877733 3.26826 1.13808 3.52861L4.00001 6.39054L10.1953 0.195277C10.4556 -0.0650721 10.8777 -0.0650721 11.1381 0.195277Z"/>
</svg>`;

const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" transform="translate(3.333 5.333)" d="M0.19527 0.195277C0.455619 -0.0650721 0.877729 -0.0650721 1.13808 0.195277L4.66667 3.72387L8.19527 0.195277C8.45562 -0.0650721 8.87773 -0.0650721 9.13808 0.195277C9.39843 0.455627 9.39843 0.877737 9.13808 1.13809L5.13808 5.13809C4.87773 5.39844 4.45562 5.39844 4.19527 5.13809L0.19527 1.13809C-0.0650798 0.877737 -0.0650798 0.455627 0.19527 0.195277Z"/>
</svg>`;

const resolveStatus = (step, index, steps, currentStep) => {
  if (step.status) {
    return step.status;
  }

  const stepNumber = index + 1;

  if (currentStep > steps.length) {
    return 'complete';
  }

  if (stepNumber < currentStep) {
    return 'complete';
  }

  if (stepNumber === currentStep) {
    return 'current';
  }

  return 'upcoming';
};

const createStep = (step, status, completedLabel) => {
  const item = document.createElement('li');
  const rail = document.createElement('span');
  const marker = document.createElement('span');
  const label = document.createElement('span');

  item.classList.add('dictu-step-indicator__step', `dictu-step-indicator__step--${status}`);
  rail.classList.add('dictu-step-indicator__rail');
  marker.classList.add('dictu-step-indicator__marker');
  label.classList.add('dictu-step-indicator__label');
  label.textContent = step.label;

  if (status === 'current') {
    item.setAttribute('aria-current', 'step');
  }

  if (status === 'complete') {
    const state = document.createElement('span');

    state.classList.add('dictu-step-indicator__state');
    state.textContent = completedLabel;
    marker.append(Icon({ icon: checkIcon, classNames: ['dictu-step-indicator__marker-icon'] }));
    item.append(rail, state, label);
  } else {
    marker.textContent = String(step.stepNumber);
    item.append(rail, label);
  }

  rail.append(marker);

  return item;
};

const createList = (steps, direction, { standalone = false, completedLabel }) => {
  const list = document.createElement('ol');

  list.classList.add('dictu-step-indicator__list', `dictu-step-indicator__list--${direction}`);

  if (standalone) {
    list.classList.add('dictu-step-indicator__list--standalone');
  }

  steps.forEach(step => {
    list.append(createStep(step, step.status, completedLabel));
  });

  return list;
};

const createSummary = (current, total, { stepLabel, ofLabel }) => {
  const summary = document.createElement('summary');
  const progress = document.createElement('span');
  const summaryLabel = document.createElement('span');
  const summaryText = document.createElement('span');

  summary.classList.add('dictu-step-indicator__summary', 'dictu-focus-ring');
  progress.classList.add('dictu-step-indicator__progress');
  summaryLabel.classList.add('dictu-step-indicator__summary-label');
  summaryText.textContent = current.label;

  [stepLabel, String(current.stepNumber), ofLabel, String(total)].forEach((text, index) => {
    const part = document.createElement('span');

    part.textContent = text;

    if (index === 1 || index === 3) {
      part.classList.add('dictu-step-indicator__progress-value');
    }

    progress.append(part);
  });

  summaryLabel.append(
    summaryText,
    Icon({ icon: chevronIcon, classNames: ['dictu-step-indicator__summary-icon'] })
  );
  summary.append(progress, summaryLabel);

  return summary;
};

export const StepIndicator = ({
  steps = [],
  currentStep = 1,
  direction = 'horizontal',
  display = 'full',
  expanded = false,
  label = 'Voortgang',
  stepLabel = 'Stap',
  ofLabel = 'van',
  completedLabel = 'Afgerond',
  classNames = [],
} = {}) => {
  const orientation = direction === 'vertical' ? 'vertical' : 'horizontal';
  const preparedSteps = steps.map((step, index) => ({
    ...step,
    stepNumber: index + 1,
    status: resolveStatus(step, index, steps, currentStep),
  }));
  const current = preparedSteps.find(step => step.status === 'current') ?? preparedSteps.at(-1);
  const nav = document.createElement('nav');
  const disclosure = document.createElement('details');
  const overview = document.createElement('div');
  const classes = [
    'dictu-step-indicator',
    `dictu-step-indicator--${orientation}`,
    ...(classNames || []),
  ];

  if (display === 'compact') {
    classes.push('dictu-step-indicator--compact');
  }

  nav.classList.add(...classes);
  nav.setAttribute('aria-label', label);
  disclosure.classList.add('dictu-step-indicator__disclosure');
  overview.classList.add('dictu-step-indicator__overview');

  if (expanded) {
    disclosure.open = true;
  }

  if (current) {
    disclosure.append(
      createSummary(current, preparedSteps.length, { stepLabel, ofLabel }),
      overview
    );
    overview.append(createList(preparedSteps, 'vertical', { completedLabel }));
  }

  nav.append(
    disclosure,
    createList(preparedSteps, orientation, { standalone: true, completedLabel })
  );

  return nav;
};
