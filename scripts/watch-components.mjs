import { readFileSync } from 'fs';
import { globSync } from 'glob';
import { spawn } from 'child_process';

// Find all component package.json files
const componentPackages = globSync('./components/*/package.json');

// Filter components that have a non-empty watch script
const watchableComponents = componentPackages
  .map(pkgPath => {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    return { name: pkg.name, watch: pkg.scripts?.watch };
  })
  .filter(pkg => pkg.watch && pkg.watch.trim() !== '');

if (watchableComponents.length === 0) {
  console.log('No components with watch scripts found');
  process.exit(0);
}

console.log(`Starting watch for ${watchableComponents.length} components:`);
watchableComponents.forEach(pkg => console.log(`  - ${pkg.name}`));

// Start all watch processes in parallel
const processes = watchableComponents.map(pkg => {
  return spawn('npm', ['--workspace', pkg.name, 'run', 'watch'], {
    stdio: 'inherit',
    shell: true,
  });
});

// Handle cleanup
process.on('SIGINT', () => {
  processes.forEach(p => p.kill());
  process.exit(0);
});
