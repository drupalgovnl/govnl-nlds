# Development Guide

This guide documents the actual development workflow for the GovNL Design System
monorepo.

## Quick Start

### Requirements

- Node.js 24.x, matching `.nvmrc`
- npm 10+

### Install dependencies

```bash
npm install
```

### Start local development

```bash
npm run storybook
```

This command starts the local Storybook server and runs the file watchers for
component CSS and design tokens.

## Workspace Layout

The root package uses npm workspaces for:

```json
{
  "workspaces": [
    "./proprietary/*",
    "./utilities/*",
    "./components/*",
    "./packages/storybook"
  ]
}
```

In practice, the main areas you will work with are:

- `components/` for publishable CSS component packages
- `utilities/` for reusable CSS utility packages
- `proprietary/design-tokens/` for token sources and generated CSS
- `packages/storybook/` for docs, tests, and visual regression setup
- `examples/` for composed stories used in Storybook

## Common Commands

### Development

```bash
# Start Storybook, component watchers, and token watchers
npm run storybook

# Run every workspace watch script that is available
npm run watch

# Build all workspaces that expose a build script
npm run build

# Clean generated output where supported
npm run clean
```

### Code Quality

```bash
# Run all checks
npm run lint

# Run individual checks
npm run lint:js
npm run lint:css
npm run lint:format
npm run lint:types

# Apply automatic fixes where supported
npm run lint:fix
```

### Testing

```bash
# Run Storybook package tests
npm test

# Run visual regression tests
npm run test:visual

# Update visual snapshots
npm run test:visual:update

# Open the Playwright report
npm run test:visual:report
```

### Release and Package Checks

```bash
# Create a changeset entry
npm run changeset

# Check bundle sizes
npm run size

# Export size analysis data
npm run size:analyze

# Run the broader quality gate
npm run test:quality
```

## What `npm run storybook` Does

The root `storybook` script runs three processes in parallel:

- `watch:storybook` starts Storybook from `packages/storybook`
- `watch:style-dictionary` rebuilds design tokens when token source files change
- `watch:components` rebuilds component packages as component source files
  change

This is the default command for local development because most changes affect at
least one of those outputs.

## Pre-commit Hooks

Git hooks are managed with Husky. The current pre-commit hook does the
following:

1. Checks whether there are staged files.
2. Runs `npm run lint:types` for the full repository.
3. Runs `npm run size` to enforce bundle size limits.
4. Runs `npx lint-staged` for staged-file linting and formatting.
5. Warns if newly added staged lines include `TODO`, `FIXME`, `XXX`, or `HACK`.

If one of these steps fails, the commit is blocked.

## Tooling and Configuration

The main configuration files are:

- `tsconfig.json` for TypeScript checking
- `eslint.config.js` for JavaScript, Storybook, and script linting
- `.stylelintrc.cjs` for CSS and SCSS linting
- `.prettierrc.cjs` and `.prettierignore` for formatting
- `.husky/pre-commit` for local commit checks

The ESLint setup includes Storybook recommendations and special handling for
stories, config files, and build scripts.

## CI Workflows

The repository contains three GitHub Actions workflows under
`.github/workflows/`.

### `continuous-deployment.yml`

This workflow runs on pull requests and on pushes to `main`. It installs
dependencies, runs linting, builds the workspaces, executes tests and visual
tests, publishes packages through Changesets on `main`, and deploys the built
Storybook to GitHub Pages.

### `lint.yml`

This workflow runs code quality checks, workspace builds, dependency review for
pull requests, and security audit steps.

### `performance.yml`

This workflow runs on pull requests and checks size analysis and bundle limits.

## Size Limits

The repository currently enforces these size checks:

- Design token CSS in `proprietary/design-tokens/dist/**/*.css`: `50 KB`
- Individual component CSS in `components/*/dist/**/*.css`: `10 KB`

If a size check fails, run `npm run size:analyze` and inspect the generated
output before changing the limit.

## Troubleshooting

### TypeScript check fails

```bash
npm run lint:types
```

The root type check runs across the repository. Fix the reported type errors
before retrying the commit or CI job.

### Lint or formatting fails

```bash
npm run lint:fix
```

If automatic fixes are not enough, rerun the individual failing command to get
more focused output.

### Visual tests fail

```bash
npm run test:visual
npm run test:visual:update
```

Only update snapshots when the visual change is intentional.

### Storybook output is stale

```bash
npm run build
```

If watcher output gets out of sync, a clean rebuild of the workspaces is the
fastest way to reset generated artifacts.
