# @dictu/navigation-bar

## 3.0.0

### Major Changes

- 2478852: Breaking change: The CSS only option for the expanding of the mobile
  menu that worked with a input type checkbox and the use of the :checked state
  to show or hide the menu has been removed due to usability and A11Y reasons.
  It is replaced with a button that requires adding handling of the state
  changes during implementation. The mobile menu part of the Navigation Bar
  component therefore no longer opens and closes out of the box.

  Adds submenu functionality

## 2.0.0

### Major Changes

- 38e03b8: Removed import of design tokens inside component css
- 38e03b8: Breaking: All tokens in one import file, for better usage.

## 1.3.0

### Minor Changes

- 698bfab: Better responsive styling

## 1.2.0

### Minor Changes

- b71ea04: Correction in css token values.

## 1.1.2

### Patch Changes

- 75bf2d7: Added focus-visible style

## 1.1.1

### Patch Changes

- 18f2c86: Correct styling of navigation items on mobile.

## 1.1.0

### Minor Changes

- b8671fe: replace mixin @use to index for better usage.
- ff8484d: add tokens import to index instead of the mixin

## 1.0.4

### Patch Changes

- d94fadf: Minor optimalisations.

## 1.0.3

### Patch Changes

- f3aa764: Card component, minor optimalisations in @use for other components

## 1.0.2

### Patch Changes

- 151b0d5: Include design tokens in the components package.
- 151b0d5: Tokens in components

## 1.0.1

### Patch Changes

- 4d84556: Update packages

## 1.0.0

### Patch Changes

- c4497f3: New packages added. Solved some minor code in existing packages.
- c4497f3: Documentation added for page-header component.
