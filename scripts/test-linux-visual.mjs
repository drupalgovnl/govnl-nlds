import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInLinuxContainer } from './linux-visual-docker.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const exitCode = runInLinuxContainer(
  'npx playwright test --config packages/storybook/test-visual/playwright.config.ts'
);

const reportDir = path.join(repoRoot, 'packages', 'storybook', 'test-visual', 'test-report');
if (
  await fs
    .stat(reportDir)
    .then(() => true)
    .catch(() => false)
) {
  console.log('Test report saved. View it with: npm run test:visual:report');
}

process.exit(exitCode);
