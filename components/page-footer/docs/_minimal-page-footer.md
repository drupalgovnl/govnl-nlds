# MinimalPageFooter component

De `MinimalPageFooter` component is een eenvoudige variant van de page-footer voor gebruik wanneer alleen een hoofdtekst en beschrijving nodig zijn, zonder kolommen met links. Deze component is volledig toegankelijk volgens WCAG 2.2-richtlijnen.

## Gebruik
Gebruik deze component wanneer u een eenvoudige voettekst wilt zonder navigatielinks. De component toont alleen de hoofdtekst en optionele beschrijving.

```html
<footer class="dictu-page-footer" role="contentinfo" lang="nl">
  <div class="dictu-page-footer__container">
    <div class="dictu-page-footer__text-container">
      <h2 class="dictu-heading dictu-heading--level-2">Minimale Footer</h2>
      <p class="dictu-paragraph">Een eenvoudige footer zonder kolommen.</p>
    </div>
  </div>
</footer>
```

## Kenmerken
- Alleen hoofdtekst en beschrijving
- Geen kolommen met links
- Compact en minimalistisch ontwerp
- Volledig responsive
- Configureerbare heading levels

## Gebruik in Storybook
In Storybook kunt u deze variant aanmaken door:
- `columns` als lege array `[]` in te stellen
- `heading` en `text` naar wens in te vullen
- `headingLevel` en `lang` aan te passen indien nodig

## Toegankelijkheid
- Gebruik altijd `<footer>` met `role="contentinfo"`.
- Voeg een `lang` attribuut toe voor de juiste taal.
- Gebruik logische heading niveaus die aansluiten bij de pagina-structuur.
- De component voldoet aan WCAG 2.2 AA-standaarden.

## Styling
De styling wordt verzorgd door de page-footer CSS. De component gebruikt alleen:
- `.dictu-page-footer`
- `.dictu-page-footer__container`
- `.dictu-page-footer__text-container`

De kolommen-gerelateerde styling wordt niet geladen voor deze variant.

## Licentie
EUPL-1.2
