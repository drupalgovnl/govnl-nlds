import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dockerImage = 'mcr.microsoft.com/playwright:v1.58.2-noble';

// npm ci refuses to remove a mounted node_modules directory, so install in place
// and restore the lockfile in case npm rewrites it.
const installIfNeeded = `
hash=$(sha256sum package-lock.json | awk '{print $1}')
current=$(cat node_modules/.install-hash 2>/dev/null || true)
if [ "$current" != "$hash" ]; then
  echo "Installing dependencies…"
  cp package-lock.json /tmp/package-lock.json
  if ! npm install --prefer-offline --no-audit --no-fund; then
    cp /tmp/package-lock.json package-lock.json
    exit 1
  fi
  cp /tmp/package-lock.json package-lock.json
  echo "$hash" > node_modules/.install-hash
else
  echo "Dependencies already installed."
fi
`.trim();

// One emulated Firefox at a time. Two workers exceed the default 30s test
// timeout, and Docker's 64MB /dev/shm makes Firefox crash ("Page crashed").
function withEmulatedBrowserLimits(command) {
  const flags = '--workers=1 --timeout=180000';
  const separator = ' -- ';
  const index = command.lastIndexOf(separator);
  if (index === -1) return `${command} ${flags}`;
  return `${command.slice(0, index)} ${flags}${command.slice(index)}`;
}

/**
 * Run a command in the linux/amd64 Playwright image used by CI.
 * node_modules lives on a persistent volume: Rancher Desktop's sshfs mount
 * cannot execute npm's bin symlinks, and reinstalling on every run is slow.
 * @param {string} command
 * @returns {number}
 */
export function runInLinuxContainer(command) {
  const dockerCheck = spawnSync('docker', ['info'], { stdio: 'ignore' });
  if (dockerCheck.status !== 0) {
    console.error('Docker is not running. Please start Docker and try again.');
    return 1;
  }

  console.log('Running visual tests in Docker…');
  const result = spawnSync(
    'docker',
    [
      'run',
      '--rm',
      '--init',
      '-t',
      '--shm-size=2gb',
      '--platform',
      'linux/amd64',
      '-e',
      'HUSKY=0',
      '-e',
      'STORYBOOK_DISABLE_WATCH=1',
      '-v',
      `${repoRoot}:/work`,
      '-v',
      'govnl-nlds-linux-node-modules:/work/node_modules',
      '-v',
      'govnl-nlds-linux-npm-cache:/root/.npm',
      '-w',
      '/work',
      dockerImage,
      'sh',
      '-c',
      [
        installIfNeeded,
        'echo "Installing Firefox…" && npx playwright install firefox',
        `echo "Starting Storybook and running tests…" && ${withEmulatedBrowserLimits(command)}`,
      ].join(' && '),
    ],
    { stdio: 'inherit' }
  );

  return result.status ?? 1;
}
