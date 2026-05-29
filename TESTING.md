# Testing

This document describes the test setup for the Dictu govnl-nlds design system.

## Test suites

Two complementary test suites are used side by side.

### 1. Storybook smoke tests

**Technology:** Vitest + `@storybook/addon-vitest` **Config:**
`packages/storybook/test/vitest.config.ts` **Browser:** Chromium

Tests are auto-generated from every exported story. Each story is rendered and
verified to produce no runtime errors. No manual test files are needed — adding
a story is enough.

Vitest uses **Playwright** (`@vitest/browser-playwright`) as its browser
provider, so Playwright must be installed for both test suites.

### 2. Visual regression tests

**Technology:** Playwright **Config:**
`packages/storybook/test-visual/playwright.config.ts` **Browser:** Firefox
(Desktop, 1280×720)

Each component has a hand-written test file in
`packages/storybook/test-visual/tests/`. Tests navigate to the Storybook iframe
URL of a story and compare a screenshot against a stored baseline. The allowed
deviation is **0.01%** (`VISUAL_DIFF_THRESHOLD = 0.0001` in `visual.utils.ts`).

#### Platform-specific baselines

Font rendering differs between operating systems, so separate baseline images
are maintained per platform:

```
packages/storybook/test-visual/__screenshots__/
├── darwin/    # macOS baselines
└── linux/     # Linux baselines (used in CI)
```

Playwright automatically selects the correct set based on the platform where the
test runs.

#### Test file structure

```typescript
import { test, expect } from "@playwright/test";
import { VISUAL_DIFF_THRESHOLD } from "../visual.utils";

test.describe("Component name", () => {
  test("Variant name", async ({ page }) => {
    await page.goto("/iframe.html?id=componenten-{component}--{variant}");
    await page.waitForSelector(".dictu-{component}", { timeout: 5000 });

    await expect(page).toHaveScreenshot("{component}-{variant}.png", {
      maxDiffPixelRatio: VISUAL_DIFF_THRESHOLD,
      animations: "disabled",
      fullPage: false,
    });
  });
});
```

The story ID in the URL follows the pattern `componenten-{component}--{variant}`
and matches what is shown in the Storybook URL bar.

## Commands

Run all commands from the repository root unless stated otherwise.

### Smoke tests

```bash
# Run all smoke tests (Chromium, headless in CI / visible locally)
npm test
```

### Visual regression tests

```bash
# Run visual tests (headless)
npm run test:visual

# Run all tests for a single component (no spaces in name, run from repo root)
npm run test:visual -- --grep "Card"

# Run a single test by name (use from packages/storybook when the name contains spaces)
cd packages/storybook && npx playwright test --config test-visual/playwright.config.ts --grep "Full Card Link"

# Run with browser visible
npm run test:visual:headed

# Open the interactive Playwright UI
npm run test:visual:debug

# Open the HTML test report from the last run
npm run test:visual:report
```

### Updating baselines

When a visual change is intentional, baselines must be regenerated.

```bash
# Update macOS (darwin) baselines — run on macOS
npm run test:visual:update

# Update Linux baselines — requires Docker
npm run test:visual:update:linux

# Update both platforms at once
npm run test:visual:update:all
```

To update a single test's baseline:

```bash
# Update macOS baseline for a single test file
# From packages/storybook
npm run test:visual:update:single -- {test-file-name}

# Update Linux baseline for a single test file — requires Docker
npm run test:visual:update:linux:single -- {test-file-name}
# Example: update only the paragraph baselines
npm run test:visual:update:linux:single -- paragraph.test.ts
```

#### Linux baselines via Docker

`npm run test:visual:update:linux` runs the Playwright update command inside the
official Playwright Docker image (`mcr.microsoft.com/playwright:v1.58.2-noble`).
It copies the repository into a temporary directory, runs the tests there, and
copies the resulting `linux/` screenshots back. Docker must be running.

## CI behaviour

- Tests run headless when the `CI` environment variable is set.
- Visual tests retry up to **2 times** on failure in CI.
- The Storybook dev server starts automatically before visual tests run. In
  local development, an already-running server on port 6006 is reused.
- `test.only` is forbidden in CI (`forbidOnly: true`).

## Artifacts

| Path                                              | Contents                                           |
| ------------------------------------------------- | -------------------------------------------------- |
| `packages/storybook/test-visual/__screenshots__/` | Baseline images (committed)                        |
| `packages/storybook/test-visual/test-results/`    | Failure artifacts: actual, expected, and diff PNGs |
| `packages/storybook/test-visual/test-report/`     | HTML test report from the last run                 |

## Adding a visual test for a new component

1. Create `packages/storybook/test-visual/tests/{component}.test.ts`.
2. Add one `test()` per story variant that should be visually verified.
3. Run `npm run test:visual:update` to generate the initial darwin baselines.
4. Run `npm run test:visual:update:linux` to generate the Linux baselines.
5. Commit both sets of baseline images together with the test file.

## Components without visual tests

The `rich-text` component is deprecated and has no visual test. The `embed`
component test was removed because the rendered content depends on an external
source that is not under our control, making screenshot comparisons unreliable.
Rendering correctness for embed is covered by the smoke tests.
