<!-- @license CC0-1.0 -->

# DICTU GovNL Design System

This repository contains the DICTU GovNL Design System monorepo. It includes
design tokens, CSS components, supporting utilities and Storybook documentation

The implementation follows the NL Design System architecture. Most published
packages in this repository currently use the `@dictu/*` npm scope.

## Related Resources

- [Development guide](./DEVELOPMENT.md) for the day-to-day workflow.
- [Storybook package](./packages/storybook/package.json) for the local docs and
  visual test setup.
- [Design tokens](./proprietary/design-tokens/) for generated theme and
  component token output.
- [Components](./components/) for the individual CSS packages and their usage
  documentation.

## Getting Started

### Requirements

- Node.js 24.x, matching [.nvmrc](./.nvmrc)
- npm 10+

### Install dependencies

```bash
npm install
```

### Start the development environment

```bash
npm run storybook
```

This starts the local Storybook development server on port `6006` and watches
the component CSS and design token output.

For the full development workflow, available scripts, quality checks, and
release process, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## Using the Packages

Each component is documented in its own folder under `components/`. A typical
CSS package can be installed and imported like this:

```bash
npm install --save-dev @dictu/button
```

```javascript
import "@dictu/button/dist/index.css";
```

Some repository parts, such as shared theming and a few composed components, use
the design token package directly:

```bash
npm install --save-dev @dictu/design-tokens
```

See the README inside each component directory for package-specific usage,
markup, and token details.

## Repository Structure

- `components/`: individual component packages, stories, and component docs
- `utilities/`: reusable CSS utility packages
- `proprietary/design-tokens/`: source tokens and generated CSS output
- `packages/storybook/`: Storybook app, tests, and static build output
- `examples/`: composed examples used in Storybook
- `scripts/`: local development helpers

## NL Design System

This project is part of the
[NL Design System community](https://nldesignsystem.nl/community/) initiative to
build usable, accessible, and reusable components for Dutch public services.

Join the `#nl-design-system` Slack via
[https://nldesignsystem.nl/slack/](https://nldesignsystem.nl/slack/) to follow
community development and discussions.

## Licence

This project is free and open-source software licenced under the
[European Union Public License (EUPL) v1.2](LICENSE.md) or higher. Documentation
is licenced as
[Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode).
