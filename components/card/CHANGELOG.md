# @dictu/card

## 5.0.4

### Patch Changes

- 45fd290: Fix the card icon color during keyboard focus of a full-card link, so
  it matches the focused link text for both default and accent cards.

## 5.0.3

### Patch Changes

- a9f9669: Fixes the card icon rendering in the wrong color. The optional card
  icon inherited `currentColor`, falling back to plain black instead of a
  design-system color. New `card.default.icon.color` and
  `card.accent.icon.color` tokens are added and applied, so the icon matches the
  heading color of its variant (`heading.color` for the default card,
  `card.accent.color` for the accent card).

## 5.0.2

### Patch Changes

- 89e1754: Added fix for not showing link underline on accent variant

## 5.0.1

### Patch Changes

- 03111be: Updated to more modern css rules.

## 5.0.0

### Major Changes

- 194b690: BREAKING CHANGE: Added possibility for card without link, changed the
  usage of classnames and templating setup to allow for this change. Styling for
  hover and active states where set on the .dictu-card**link class and removed
  from the .dictu-card**heading class.

## 4.2.0

### Minor Changes

- 123c99b: Fixed hover and focus status for some versions of Card component,
  refactored parts of Card component css to get there.

## 4.1.0

### Minor Changes

- 4c3f8fd: Correct focus within state for full card link
- 4c3f8fd: Added correct usage for full card link. Added mixins for states and
  included dictu-focus-ring.

## 4.0.0

### Major Changes

- e3a95d9: New way of component documentation, added new properties to the card
  component (subheading, full_card_link)

### Minor Changes

- e3a95d9: Refactor text to content in Link component.

## 3.0.0

### Major Changes

- 79b64cd: Major: The default classname for the Card component now only has a
  title as link. For a fullcard link use the "dictu-card\_\_full-card-link"
  class.

### Minor Changes

- 79b64cd: New way of component documentation, added new properties to the card
  component (subheading, full_card_link)

## 2.0.0

### Major Changes

- 38e03b8: Removed import of design tokens inside component css
- 38e03b8: Breaking: All tokens in one import file, for better usage.

## 1.5.2

### Patch Changes

- 828928a: Text color for accent variant without anchor link set to
  corresponding token

## 1.5.1

### Patch Changes

- 744dd77: Content in card now wraps within card, instead of overflowing

## 1.5.0

### Minor Changes

- aaf915d: Optimalisations for packages.
- aaf915d: Components now have import and dependencies only from components that
  are an integral part of the component
- aaf915d: Certain component imports removed because they are not an integral
  part of the component

## 1.4.0

### Minor Changes

- 9a90098: Card spacing and gap properties now align with design

## 1.3.0

### Minor Changes

- 914970f: Correct view in all modern browsers when the card contains an image.
  last paragraph should align to the bottom of the card when used in a grid.

## 1.2.1

### Patch Changes

- 53c7c62: Storybook optimalisations

## 1.2.0

### Minor Changes

- 1385bac: Moves focus ring utility to utility folder

## 1.1.0

### Minor Changes

- b8671fe: replace mixin @use to index for better usage.
- ff8484d: add tokens import to index instead of the mixin
- 30ef651: Added new token for column width for grid component. Changed html
  markup of the card component. Added grid component.

### Patch Changes

- 30ef651: Introduced grid component and added some optimalisations to card and
  hero.

## 1.0.1

### Patch Changes

- f3aa764: Card component, minor optimalisations in @use for other components
