---
"@dictu/navigation-bar": major
"@dictu/design-tokens": minor
---

Breaking change: Introduced a new "Big Menu" implementation within the `navigation-bar` component. This update includes underlying structural DOM and CSS grid changes to accommodate multi-column layouts within the toggle menu. A new boolean prop `isBigMenu` has been added to control this state.

The previous navigation bar toggle menu was limited to a single-column layout, which restricted scalability for applications with complex navigation trees. This change allows the menu to span across multiple columns, improving the user experience and overview for heavy content structures.
