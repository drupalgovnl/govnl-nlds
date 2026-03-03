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
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

try {
  run('docker', ['version']);

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
      'npx playwright test --config packages/storybook/test-visual/playwright.config.ts --update-snapshots',
    ].join(' && '),
  ];

  run('docker', [
    'run',
    '--rm',
    '-v',
    `${tempRepo}:/work`,
    '-w',
    '/work',
    dockerImage,
    ...testCommand,
  ]);

  const sourceLinux = path.join(
    tempRepo,
    'packages',
    'storybook',
    'test-visual',
    '__screenshots__',
    'linux'
  );
  const targetLinux = path.join(
    repoRoot,
    'packages',
    'storybook',
    'test-visual',
    '__screenshots__',
    'linux'
  );

  await fs.rm(targetLinux, { recursive: true, force: true });
  await fs.mkdir(path.dirname(targetLinux), { recursive: true });
  await fs.cp(sourceLinux, targetLinux, { recursive: true });
} finally {
  await fs.rm(tempRoot, { recursive: true, force: true });
}
