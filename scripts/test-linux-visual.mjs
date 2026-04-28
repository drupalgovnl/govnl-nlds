import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'govnl-nlds-linux-'));
const tempRepo = path.join(tempRoot, 'repo');

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, { stdio: 'inherit', ...options });
  return result.status ?? 1;
};

let exitCode = 0;

try {
  const dockerCheck = spawnSync('docker', ['version'], { stdio: 'ignore' });
  if (dockerCheck.status !== 0) {
    console.error('Docker is not running. Please start Docker and try again.');
    process.exit(1);
  }

  console.log('Copying repository to temporary directory…');
  await fs.cp(repoRoot, tempRepo, {
    recursive: true,
    filter: src => {
      const rel = path.relative(repoRoot, src);
      if (!rel) return true;
      return !rel.startsWith('node_modules') && !rel.startsWith('.git');
    },
  });

  const dockerImage = 'mcr.microsoft.com/playwright:v1.58.2-noble';
  const testCommand = [
    'sh',
    '-c',
    [
      'npm install',
      'npx playwright install firefox',
      'npx playwright test --config packages/storybook/test-visual/playwright.config.ts',
    ].join(' && '),
  ];

  console.log('Running visual tests in Docker container…');
  exitCode = run('docker', [
    'run',
    '--rm',
    '-v',
    `${tempRepo}:/work`,
    '-w',
    '/work',
    dockerImage,
    ...testCommand,
  ]);

  // Copy test report back to the repo so it can be viewed locally
  const sourceReport = path.join(tempRepo, 'packages', 'storybook', 'test-visual', 'test-report');
  const targetReport = path.join(repoRoot, 'packages', 'storybook', 'test-visual', 'test-report');

  if (
    await fs
      .stat(sourceReport)
      .then(() => true)
      .catch(() => false)
  ) {
    console.log('Copying test report…');
    await fs.rm(targetReport, { recursive: true, force: true });
    await fs.cp(sourceReport, targetReport, { recursive: true });
    console.log(`Test report saved. View it with: npm run test:visual:report`);
  }

  // Copy test results (diffs / failure screenshots) back too
  const sourceResults = path.join(tempRepo, 'packages', 'storybook', 'test-visual', 'test-results');
  const targetResults = path.join(repoRoot, 'packages', 'storybook', 'test-visual', 'test-results');

  if (
    await fs
      .stat(sourceResults)
      .then(() => true)
      .catch(() => false)
  ) {
    console.log('Copying test results…');
    await fs.rm(targetResults, { recursive: true, force: true });
    await fs.cp(sourceResults, targetResults, { recursive: true });
  }
} finally {
  await fs.rm(tempRoot, { recursive: true, force: true });
}

process.exit(exitCode);
