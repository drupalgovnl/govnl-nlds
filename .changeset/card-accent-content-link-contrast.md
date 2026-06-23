---
'@dictu/card': patch
---

Fixes insufficient contrast (WCAG) for links in the content (`.dictu-card__paragraph`) of an accent card. These links used the default interaction color, which is identical to the accent card background, making them invisible. They now use the accent (inverse) color in every interaction state, while preserving the accessible focus styling. The `Card` component also gains an optional `content_link` to render such a link.
