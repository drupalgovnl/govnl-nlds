import { spawn } from 'node:child_process';
import { watch } from 'chokidar';

const pattern = 'src/**/*.tokens.json';
const debounceMs = 400;

let timer;
let running = false;
let queued = false;
let child;

function runBuild() {
  if (running) {
    queued = true;
    return;
  }

  running = true;
  console.error('Rebuilding design tokens...');
  child = spawn('npm', ['run', 'build'], {
    stdio: 'inherit',
    shell: true,
  });

  child.on('close', code => {
    running = false;
    child = undefined;

    if (code !== 0) {
      console.error(`style-dictionary build exited with code ${code}`);
    }

    if (queued) {
      queued = false;
      runBuild();
    }
  });
}

function scheduleBuild() {
  clearTimeout(timer);
  timer = setTimeout(runBuild, debounceMs);
}

const watcher = watch('src', {
  ignoreInitial: false,
  followSymlinks: true,
  // chokidar 4 does not expand globs. Watch the tree and keep token files only.
  ignored: (filePath, stats) => {
    if (!stats || stats.isDirectory()) return false;
    return !filePath.endsWith('.tokens.json');
  },
});

watcher.on('all', (event, path) => {
  console.log(`${event}:${path}`);
  scheduleBuild();
});

watcher.on('ready', () => {
  console.error(`Watching "${pattern}" ..`);
});

watcher.on('error', error => {
  console.error('Error:', error);
});

function shutdown() {
  clearTimeout(timer);
  child?.kill();
  watcher.close().then(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
