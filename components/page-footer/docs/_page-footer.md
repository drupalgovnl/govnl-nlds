Gebruik in CSS de `.dictu-page-footer` class name voor de page-footer component.

## Beschrijving
De page-footer component toont een voettekst aan de onderkant van een pagina met een hoofdtekst, optionele beschrijving en kolommen met links. De component ondersteunt verschillende varianten en is volledig toegankelijk.

### Voorbeeldgebruik
```html
<footer class="dictu-page-footer" role="contentinfo" lang="nl">
  <div class="dictu-page-footer__container">
    <div class="dictu-page-footer__text-container">
      <h2 class="dictu-heading dictu-heading--level-2">Footer kop</h2>
      <p class="dictu-paragraph">Dit is een voettekst die extra informatie biedt.</p>
    </div>
    <div class="dictu-page-footer__columns">
      <div class="dictu-page-footer__column">
        <h3 class="dictu-heading dictu-heading--level-3">Kop 1</h3>
        <ul class="dictu-link-list">
          <li class="dictu-link-list__item">
            <a href="/privacy" class="dictu-link dictu-link-list__link" title="Lees ons privacy beleid">
              <span class="dictu-icon dictu-link-list__icon" role="presentation">
                <!-- Arrow icon SVG -->
              </span>
              <span>Privacy beleid</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

## CSS Klassen
- `.dictu-page-footer` — hoofdcontainer voor de voettekst
- `.dictu-page-footer__container` — interne container voor de inhoud
- `.dictu-page-footer__text-container` — container voor de hoofdtekst en beschrijving
- `.dictu-page-footer__columns` — container voor de kolommen met links
- `.dictu-page-footer__column` — individuele kolom met links

## Functies
- **Hoofdtekst**: Optionele hoofdtekst bovenaan de footer
- **Beschrijving**: Optionele beschrijvende tekst onder de hoofdtekst
- **Kolommen**: Meerdere kolommen met gegroepeerde links
- **Externe links**: Automatische indicatie van externe links met `target="_blank"` en `rel="noopener noreferrer"`
- **Download links**: Ondersteuning voor downloadbare bestanden met `download` attribuut
- **Flexibele heading levels**: Configureerbare heading niveaus voor SEO en toegankelijkheid

## Toegankelijkheid
Gebruik altijd `<footer>` met `role="contentinfo"` voor de hoofdcontainer. Voeg een `lang` attribuut toe om de taal aan te geven. Externe links krijgen automatisch een aria-label met "(opent in nieuw venster)". Gebruik logische heading niveaus waarbij kolomtitels één niveau hoger zijn dan de hoofdtekst. Zie [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) en [WCAG 2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html).
