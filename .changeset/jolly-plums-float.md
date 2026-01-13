---
"@dictu/navigation-bar": major
"@dictu/design-tokens": minor
---

Breaking change: The CSS only option for the expanding of the mobile menu that
worked with a input type checkbox and the use of the :checked state to show or
hide the menu has been removed due to usability and A11Y reasons. It is replaced
with a button that requires adding handling of the state changes during
implementation. The mobile menu part of the Navigation Bar component therefore
no longer opens and closes out of the box.

Adds submenu functionality
