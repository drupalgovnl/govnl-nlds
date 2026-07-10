---
"@dictu/design-tokens": minor
"@dictu/card": patch
---

Fixes the card icon rendering in the wrong color. The optional card icon inherited `currentColor`, falling back to plain black instead of a design-system color. New `card.default.icon.color` and `card.accent.icon.color` tokens are added and applied, so the icon matches the heading color of its variant (`heading.color` for the default card, `card.accent.color` for the accent card).
