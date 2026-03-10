/**
 * Storybook decorator and toolbar configuration for customising
 * which core color families are used as primary, secondary and
 * tertiary (accent) brand colors.
 *
 * Overrides the `--govnl-config-color-*` CSS custom properties.
 * Everything else (brand, interaction, heading, components) cascades
 * automatically through the token chain.
 */

const SHADES = ['50', '100', '200', '300', '400', '500'];

/**
 * Every color family from core.tokens.json that carries the standard
 * 50 – 500 shade range and can therefore be slotted into a brand role.
 */
export const COLOR_FAMILIES = [
  { value: '', title: '— Standaard —' },
  { value: 'lintblauw', title: 'Lintblauw' },
  { value: 'donkerblauw', title: 'Donkerblauw' },
  { value: 'hemelblauw', title: 'Hemelblauw' },
  { value: 'lichtblauw', title: 'Lichtblauw' },
  { value: 'mintgroen', title: 'Mintgroen' },
  { value: 'groen', title: 'Groen' },
  { value: 'donkergroen', title: 'Donkergroen' },
  { value: 'mosgroen', title: 'Mosgroen' },
  { value: 'bruin', title: 'Bruin' },
  { value: 'donkerbruin', title: 'Donkerbruin' },
  { value: 'geel', title: 'Geel' },
  { value: 'donkergeel', title: 'Donkergeel' },
  { value: 'oranje', title: 'Oranje' },
  { value: 'rood', title: 'Rood' },
  { value: 'roze', title: 'Roze' },
  { value: 'robijnrood', title: 'Robijnrood' },
  { value: 'violet', title: 'Violet' },
  { value: 'paars', title: 'Paars' },
  { value: 'grijs', title: 'Grijs' },
];

/* ------------------------------------------------------------------ */
/*  CSS override generators                                           */
/* ------------------------------------------------------------------ */

function configOverrides(prefix, family) {
  if (!family) return '';

  return SHADES.map(s => `--govnl-config-${prefix}-${s}: var(--govnl-color-${family}-${s});`).join(
    '\n  '
  );
}

function tertiaryOverride(family) {
  if (!family) return '';

  return `--govnl-config-color-tertiary: var(--govnl-color-${family}-500);`;
}

/* ------------------------------------------------------------------ */
/*  Storybook decorator                                               */
/* ------------------------------------------------------------------ */

const STYLE_ID = 'color-theme-overrides';

export function colorThemeDecorator(storyFn, context) {
  const { primaryColor, secondaryColor, tertiaryColor } = context.globals;

  let styleEl = document.getElementById(STYLE_ID);
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    document.head.appendChild(styleEl);
  }

  const overrides = [
    configOverrides('color-primary', primaryColor),
    configOverrides('color-secondary', secondaryColor),
    tertiaryOverride(tertiaryColor),
  ]
    .filter(Boolean)
    .join('\n  ');

  styleEl.textContent = overrides ? `.dictu-theme {\n  ${overrides}\n}` : '';

  return storyFn();
}
