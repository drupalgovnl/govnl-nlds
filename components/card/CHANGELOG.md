# @dictu/card

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
